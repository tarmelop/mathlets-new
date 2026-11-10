/*
 * expression.js — a small, safe parser for formulas typed by the user, such as
 *
 *   cos(2pi (12f) t) + cos(2pi (13f) t + 2pi/3) + cos(2pi (14f) t)
 *   exp(2 pi i f t) + 0.5 i exp(-4 pi i f t)
 *
 * and a helper that turns such a formula into Fourier coefficients c_n.
 *
 * Written for this repository (not part of the original MIT Mathlets code).
 * Licensed under CC BY-NC-SA 3.0, like the rest of the repo — see LICENSE.md.
 *
 * Syntax
 *   numbers     2, 0.5, 1e-3
 *   variables   t (time, ms), f (fundamental frequency nu, kHz)
 *   constants   pi (or π), e, i (imaginary unit)
 *   operators   + - * / ^   and implicit multiplication: 2pi, 12f, 3(t+1), pi t
 *   functions   sin cos tan exp ln log sqrt abs re im conj sinh cosh
 *   A prefix like "a(t) =" is ignored, so equations can be pasted as written.
 *
 * Values are complex numbers {re, im}. No eval() is used.
 */
define([], function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // Complex arithmetic
  // ---------------------------------------------------------------------------

  function C(re, im) {
    return { re: re, im: im || 0 };
  }
  var add = function (a, b) { return C(a.re + b.re, a.im + b.im); };
  var sub = function (a, b) { return C(a.re - b.re, a.im - b.im); };
  var mul = function (a, b) { return C(a.re * b.re - a.im * b.im, a.re * b.im + a.im * b.re); };
  var div = function (a, b) {
    var d = b.re * b.re + b.im * b.im;
    return C((a.re * b.re + a.im * b.im) / d, (a.im * b.re - a.re * b.im) / d);
  };
  var neg = function (a) { return C(-a.re, -a.im); };
  var cexp = function (a) {
    var m = Math.exp(a.re);
    return C(m * Math.cos(a.im), m * Math.sin(a.im));
  };
  var cabs = function (a) { return Math.sqrt(a.re * a.re + a.im * a.im); };
  var clog = function (a) { return C(Math.log(cabs(a)), Math.atan2(a.im, a.re)); };
  var csin = function (a) {
    return C(Math.sin(a.re) * Math.cosh(a.im), Math.cos(a.re) * Math.sinh(a.im));
  };
  var ccos = function (a) {
    return C(Math.cos(a.re) * Math.cosh(a.im), -Math.sin(a.re) * Math.sinh(a.im));
  };
  var cpow = function (a, b) {
    // Keep real powers exact where possible (e.g. (-2)^3).
    if (a.im === 0 && b.im === 0 && (a.re >= 0 || Number.isInteger(b.re))) {
      return C(Math.pow(a.re, b.re));
    }
    if (a.re === 0 && a.im === 0) return C(0);
    return cexp(mul(b, clog(a)));
  };

  var FUNCTIONS = {
    sin: csin,
    cos: ccos,
    tan: function (a) { return div(csin(a), ccos(a)); },
    exp: cexp,
    ln: clog,
    log: clog,
    sqrt: function (a) { return cpow(a, C(0.5)); },
    abs: function (a) { return C(cabs(a)); },
    re: function (a) { return C(a.re); },
    im: function (a) { return C(a.im); },
    conj: function (a) { return C(a.re, -a.im); },
    sinh: function (a) { return mul(C(0.5), sub(cexp(a), cexp(neg(a)))); },
    cosh: function (a) { return mul(C(0.5), add(cexp(a), cexp(neg(a)))); },
  };
  var CONSTANTS = { pi: C(Math.PI), e: C(Math.E), i: C(0, 1) };
  var VARIABLES = ['t', 'f'];

  // All names, longest first, so "exp" wins over "e" and "pi" over "p"+"i".
  var NAMES = Object.keys(FUNCTIONS)
    .concat(Object.keys(CONSTANTS), VARIABLES)
    .sort(function (a, b) { return b.length - a.length; });

  // ---------------------------------------------------------------------------
  // Tokenizer
  // ---------------------------------------------------------------------------

  function ParseError(message) {
    this.message = message;
  }

  function normalize(text) {
    return text
      .replace(/π/g, 'pi')
      .replace(/ν/g, 'f')
      .replace(/[−–]/g, '-')
      .replace(/[·×]/g, '*')
      .replace(/\*\*/g, '^')
      .replace(/^\s*[A-Za-z]\w*\s*\(\s*t\s*\)\s*=/, '') // drop "a(t) ="
      .toLowerCase();
  }

  function tokenize(text) {
    var tokens = [];
    var pos = 0;
    while (pos < text.length) {
      var ch = text[pos];
      if (/\s/.test(ch)) {
        pos++;
      } else if (/[0-9.]/.test(ch)) {
        var m = /^(\d+\.?\d*|\.\d+)(e[+-]?\d+)?/.exec(text.slice(pos));
        // "2e" followed by a non-digit is 2*e, not an exponent.
        if (!m) throw new ParseError('Bad number at "' + text.slice(pos, pos + 5) + '"');
        tokens.push({ type: 'num', value: parseFloat(m[0]) });
        pos += m[0].length;
      } else if (/[a-z]/.test(ch)) {
        var name = null;
        for (var k = 0; k < NAMES.length; k++) {
          if (text.startsWith(NAMES[k], pos)) {
            name = NAMES[k];
            break;
          }
        }
        if (!name) {
          // Report the whole word, e.g. "foo" rather than the leftover "oo".
          var start = pos;
          while (start > 0 && /[a-z]/.test(text[start - 1])) start--;
          var word = /^[a-z]+/.exec(text.slice(start))[0];
          throw new ParseError(
            'Unknown name "' + word + '". Use t, f, pi, e, i and functions like cos, sin, exp.'
          );
        }
        tokens.push({ type: FUNCTIONS[name] ? 'func' : 'name', value: name });
        pos += name.length;
      } else if ('+-*/^()'.indexOf(ch) >= 0) {
        tokens.push({ type: ch });
        pos++;
      } else {
        throw new ParseError('Unexpected character "' + ch + '"');
      }
    }
    return tokens;
  }

  // ---------------------------------------------------------------------------
  // Parser (recursive descent) -> function(vars) returning a complex number
  //
  //   expr    := term (('+' | '-') term)*
  //   term    := unary (('*' | '/') unary | <implicit> power)*
  //   unary   := ('+' | '-') unary | power
  //   power   := primary ('^' unary)?
  //   primary := num | name | func '(' expr ')' | '(' expr ')'
  // ---------------------------------------------------------------------------

  function parse(text) {
    var tokens = tokenize(normalize(text));
    var pos = 0;

    function peek() { return tokens[pos]; }
    function next() { return tokens[pos++]; }
    function expect(type) {
      var tok = next();
      if (!tok || tok.type !== type) {
        throw new ParseError('Expected "' + type + '"' + (tok ? '' : ' before the end'));
      }
    }
    function startsPrimary(tok) {
      return tok && (tok.type === 'num' || tok.type === 'name' || tok.type === 'func' || tok.type === '(');
    }

    function expr() {
      var left = term();
      while (peek() && (peek().type === '+' || peek().type === '-')) {
        var op = next().type;
        left = binary(op === '+' ? add : sub, left, term());
      }
      return left;
    }

    function term() {
      var left = unary();
      for (;;) {
        var tok = peek();
        if (tok && (tok.type === '*' || tok.type === '/')) {
          next();
          left = binary(tok.type === '*' ? mul : div, left, unary());
        } else if (startsPrimary(tok)) {
          left = binary(mul, left, power()); // implicit multiplication
        } else {
          return left;
        }
      }
    }

    function unary() {
      var tok = peek();
      if (tok && tok.type === '-') {
        next();
        var arg = unary();
        return function (v) { return neg(arg(v)); };
      }
      if (tok && tok.type === '+') {
        next();
        return unary();
      }
      return power();
    }

    function power() {
      var base = primary();
      if (peek() && peek().type === '^') {
        next();
        return binary(cpow, base, unary());
      }
      return base;
    }

    function primary() {
      var tok = next();
      if (!tok) throw new ParseError('The formula ends too early');
      if (tok.type === 'num') {
        var value = C(tok.value);
        return function () { return value; };
      }
      if (tok.type === 'name') {
        if (CONSTANTS[tok.value]) {
          var constant = CONSTANTS[tok.value];
          return function () { return constant; };
        }
        var name = tok.value;
        return function (v) { return v[name]; };
      }
      if (tok.type === 'func') {
        var fn = FUNCTIONS[tok.value];
        if (!peek() || peek().type !== '(') {
          throw new ParseError('Write ' + tok.value + '(...) with parentheses');
        }
        next();
        var arg = expr();
        expect(')');
        return function (v) { return fn(arg(v)); };
      }
      if (tok.type === '(') {
        var inner = expr();
        expect(')');
        return inner;
      }
      throw new ParseError('Unexpected "' + tok.type + '"');
    }

    function binary(op, a, b) {
      return function (v) { return op(a(v), b(v)); };
    }

    if (tokens.length === 0) throw new ParseError('Type a formula');
    var compiled = expr();
    if (pos < tokens.length) throw new ParseError('Unexpected "' + (peek().value || peek().type) + '"');

    // Evaluate with plain numbers t and f.
    return function (t, f) {
      return compiled({ t: C(t), f: C(f) });
    };
  }

  // ---------------------------------------------------------------------------
  // Fourier coefficients
  // ---------------------------------------------------------------------------

  /**
   * Sample g over one period T = 1/f and compute
   *
   *   c_n = (1/T) * integral_0^T g(t) e^{-2 pi i n f t} dt,   n = -maxN .. maxN
   *
   * with the discrete Fourier transform. Returns
   *   { coefficients: [{n, re, im}], droppedEnergy, isReal, maxMagnitude }
   * where droppedEnergy is the fraction of mean |g|^2 that lies in harmonics
   * with |n| > maxN (from Parseval's theorem; ~0 if the formula fits).
   */
  function fourierCoefficients(g, f, maxN) {
    var N = 1024;
    var period = 1 / f;
    var samples = [];
    var meanSquare = 0;
    for (var j = 0; j < N; j++) {
      var value = g((j * period) / N, f);
      if (!isFinite(value.re) || !isFinite(value.im)) {
        throw new ParseError('The formula is not finite at t = ' + ((j * period) / N).toFixed(3));
      }
      samples.push(value);
      meanSquare += value.re * value.re + value.im * value.im;
    }
    meanSquare /= N;

    var coefficients = [];
    var keptEnergy = 0;
    var isReal = true;
    var maxMagnitude = 0;
    for (var n = -maxN; n <= maxN; n++) {
      var re = 0;
      var im = 0;
      for (var k = 0; k < N; k++) {
        var angle = (-2 * Math.PI * n * k) / N;
        var c = Math.cos(angle);
        var s = Math.sin(angle);
        re += samples[k].re * c - samples[k].im * s;
        im += samples[k].re * s + samples[k].im * c;
      }
      re /= N;
      im /= N;
      // Clean up rounding noise so tiny terms show as exactly 0.
      if (Math.abs(re) < 1e-9) re = 0;
      if (Math.abs(im) < 1e-9) im = 0;
      coefficients.push({ n: n, re: re, im: im });
      keptEnergy += re * re + im * im;
      maxMagnitude = Math.max(maxMagnitude, Math.sqrt(re * re + im * im));
    }

    // Real g  <=>  c_{-n} = conj(c_n).
    for (var p = 0; p < coefficients.length; p++) {
      var a = coefficients[p];
      var b = coefficients[coefficients.length - 1 - p];
      if (Math.abs(a.re - b.re) > 1e-6 || Math.abs(a.im + b.im) > 1e-6) isReal = false;
    }

    var dropped = meanSquare > 0 ? Math.max(0, 1 - keptEnergy / meanSquare) : 0;
    return {
      coefficients: coefficients,
      droppedEnergy: dropped,
      isReal: isReal,
      maxMagnitude: maxMagnitude,
    };
  }

  return {
    parse: parse,
    fourierCoefficients: fourierCoefficients,
    ParseError: ParseError,
  };
});
