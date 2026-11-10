/*
 * Part of the MIT Mathlets shared library (https://mathlets.org/).
 * Original code by the MIT Mathlets authors; extracted from the minified
 * common.js and auto-formatted (variable names are the minifier's).
 * Licensed under CC BY-NC-SA 3.0 — see LICENSE.md at the repo root.
 */
define(['require', 'autorender'], function (t) {
  'use strict';
  function i(t) {
    return Z * t;
  }
  function e(t) {
    return _ * t;
  }
  function s(t, i, e, s, h) {
    return Math.round(s + (h * (t - i)) / e);
  }
  function h(t, i, e, s, h) {
    return s + (h * (t - i)) / e;
  }
  function n(t, i, e, s, h) {
    return Math.round(s - (h * (t - i)) / e);
  }
  function o(t, i, e, s, h) {
    return s + (h * (i - t)) / e;
  }
  function r(t) {
    return Math.log(t) / Math.LN10;
  }
  function a(t, i, e, s, h) {
    var n = document.createElementNS(W, 'clipPath'),
      o = document.createElementNS(W, 'rect'),
      r = 'graph-clip-path' + parseInt(tt, 10);
    return (
      n.setAttribute('id', r),
      tt++,
      o.setAttribute('x', i),
      o.setAttribute('y', e),
      o.setAttribute('width', s),
      o.setAttribute('height', h),
      t.appendChild(n),
      n.appendChild(o),
      r
    );
  }
  function l(t, i, e, s, h, n) {
    var o = document.createElementNS(W, 'line');
    return (
      t.appendChild(o),
      o.setAttribute('x1', i),
      o.setAttribute('y1', e),
      o.setAttribute('x2', s),
      o.setAttribute('y2', h),
      o.setAttribute('class', n),
      o
    );
  }
  function u(t, i, e, s, h, n) {
    var o = document.createElementNS(W, 'rect');
    return (
      t.appendChild(o),
      o.setAttribute('x', i),
      o.setAttribute('y', e),
      o.setAttribute('width', s),
      o.setAttribute('height', h),
      o.setAttribute('class', n),
      o
    );
  }
  function c(t, i, e, s, h) {
    var n = document.createElementNS(W, 'circle');
    return (
      t.appendChild(n),
      n.setAttribute('cx', i),
      n.setAttribute('cy', e),
      n.setAttribute('r', s),
      n.setAttribute('class', h),
      n
    );
  }
  function p(t, i, e, s, h, n, o, r) {
    var a = document.createElementNS(W, 'polygon');
    return (
      t.appendChild(a),
      a.setAttribute('points', [i, e, s, h, n, o]),
      a.setAttribute('class', r),
      a
    );
  }
  function b(t, i) {
    var e = document.createElementNS(W, 'polygon');
    return (e.setAttribute('points', t.join(',')), e.setAttribute('class', i), e);
  }
  function d(t, i) {
    var e = document.createElementNS(W, 'polyline');
    return (e.setAttribute('points', t.join(',')), e.setAttribute('class', i), e);
  }
  function x(t, i, e, s, h) {
    var n = document.createElementNS(W, 'text');
    return (
      t.appendChild(n),
      n.setAttribute('x', i),
      n.setAttribute('y', e),
      n.setAttribute('class', h),
      (n.textContent = s),
      n
    );
  }
  function y(t, i) {
    var e = document.createElementNS(W, 'tspan');
    return ((e.textContent = i), t.appendChild(e), e);
  }
  function g(t, i, e, s, h, n) {
    var o,
      r = s.length,
      a = document.createElementNS(W, 'g'),
      l = [],
      c = 0,
      p = 0,
      b = [];
    for (t.appendChild(a), a.setAttribute('x', i), a.setAttribute('y', e), o = 0; o < r; o++)
      (b.push(u(a, 0, 0, 10, 10, n)),
        l.push(x(a, 1, 1, s[o], h)),
        l[o].getBBox().width > c && (c = l[o].getBBox().width),
        l[o].getBBox().height > p && (p = l[o].getBBox().height));
    var d = e - (r / 2) * (p + 8),
      y = p + 8,
      g = c + 8;
    for (o = 0; o < r; o++)
      (b[o].setAttribute('x', i),
        b[o].setAttribute('y', d + o * y),
        b[o].setAttribute('width', g),
        b[o].setAttribute('height', y),
        l[o].setAttribute('x', i + 4),
        l[o].setAttribute('y', d + (o + 0.5) * y));
    return a;
  }
  function f(t, i) {
    var e, s;
    return (
      void 0 === i
        ? ((e = document.createElementNS(W, 'g')), t.appendChild(e))
        : (k(i),
          (s = i.nextSibling),
          t.removeChild(i),
          (e = t.insertBefore(document.createElementNS(W, 'g'), s))),
      e
    );
  }
  function w(t) {
    var i,
      e = t.getBBox();
    return (
      (i = document.createElementNS(W, 'rect')),
      i.setAttribute('class', 'bBox'),
      i.setAttribute('x', e.x),
      i.setAttribute('y', e.y),
      i.setAttribute('width', e.width),
      i.setAttribute('height', e.height),
      t.appendChild(i),
      i
    );
  }
  function k(t) {
    for (; t.lastChild;) t.removeChild(t.lastChild);
  }
  function v(t, i) {
    var e,
      s = document.createDocumentFragment(),
      h = t.childNodes.length;
    for (k(i), e = 0; e < h; e++) s.appendChild(t.childNodes[e].cloneNode(!0));
    i.appendChild(s);
  }
  function A(t) {
    t.parentNode.insertBefore(t, t.parentNode.firstChild);
  }
  function T(t) {
    t.parentNode.appendChild(t);
  }
  function m(t, i) {
    i ? t.setAttribute('visibility', 'visible') : t.setAttribute('visibility', 'hidden');
  }
  function L() {
    return 'undefined' != typeof jQuery;
  }
  function B(t, i, e, s) {
    var h, n, o, r, a, l, u;
    if (
      ((r = 'Your browser does not support the Canvas element.'),
      (a = 'Your browser does not support WebGL,or it is not enabled by default.'),
      (l = 'Your browser does not support Web Audio API.'),
      (u = 'Your browser does not support SVG.'),
      t && ((h = document.createElement('canvas')), !h.getContext))
    )
      throw r;
    if (i) {
      ((h = document.createElement('canvas')),
        (n = null),
        (o = ['experimental-webgl', 'webgl', 'moz-webgl', 'webkit-3d']));
      for (var c = 0; c < o.length; c++)
        try {
          if ((n = h.getContext(o[c]))) break;
        } catch (t) {}
      if (!n) throw a;
    }
    if (e && !(!!window.AudioContext || !!window.webkitAudioContext)) throw l;
    if (
      s &&
      !(
        !!document.createElementNS &&
        !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect
      )
    )
      throw u;
  }
  function S() {
    return !!document.createElement('canvas').getContext;
  }
  function M() {
    for (
      var t = document.createElement('canvas'),
        i = null,
        e = ['experimental-webgl', 'webgl', 'moz-webgl', 'webkit-3d'],
        s = 0;
      s < e.length;
      s++
    )
      try {
        if ((i = t.getContext(e[s]))) break;
      } catch (t) {}
    return !!i;
  }
  function V() {
    return !!window.AudioContext || !!window.webkitAudioContext;
  }
  function P() {
    return (
      !!document.createElementNS &&
      !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect
    );
  }
  function C() {
    if (!M() && !S())
      throw 'Your browser does not support WebGL or it is not enabled by default. It also does not support the Canvas element.';
  }
  function E(t) {
    t = t || '';
    for (var i, e, s, h = t.length, n = 0, o = !1, r = [], a = ''; n < h;) {
      if (
        ('_' === t[n] ? (s = 'sub') : '^' === t[n] && (s = 'sup'),
        ('sub' === s || 'sup' === s) && '{' === t[n + 1])
      ) {
        for (n += 2, i = n, o = !1; n < h;) {
          if ('}' === t[n]) {
            ((o = !0), (e = n));
            break;
          }
          n++;
        }
        o && e > i
          ? (0 !== a.length && (r.push({ s: a, type: 'normal' }), (a = '')),
            'sub' === s
              ? r.push({ s: t.substring(i, e), type: 'sub' })
              : 'sup' === s && r.push({ s: t.substring(i, e), type: 'sup' }),
            (n = e + 1))
          : (n = i - 2);
      }
      ((a += t[n]), n === h - 1 && 0 !== a.length && r.push({ s: a, type: 'normal' }), n++);
    }
    return r;
  }
  function D(t, i, e, s) {
    var h, n, o, r, a, l, u, c, p, b;
    return (
      (h = i * e(t.x, t.y)),
      (a = i * s(t.x, t.y)),
      (n = i * e(t.x + 0.5 * h, t.y + 0.5 * a)),
      (l = i * s(t.x + 0.5 * h, t.y + 0.5 * a)),
      (o = i * e(t.x + 0.5 * n, t.y + 0.5 * l)),
      (u = i * s(t.x + 0.5 * n, t.y + 0.5 * l)),
      (r = i * e(t.x + o, t.y + u)),
      (c = i * s(t.x + o, t.y + u)),
      (p = t.x + (1 / 6) * (h + 2 * n + 2 * o + r)),
      (b = t.y + (1 / 6) * (a + 2 * l + 2 * u + c)),
      { x: p, y: b }
    );
  }
  function I(t, i) {
    var e = Math.pow(10, i);
    return (Math.round(e * t) / e).toFixed(i);
  }
  function K(t, i, e, s) {
    var h,
      n,
      o,
      r,
      a,
      l,
      u,
      c,
      p,
      b = [];
    for (
      u = t.getxPix(e),
        c = t.getxPix(s),
        p = Math.abs(c - u) + 1,
        l = s >= e ? 1 : -1,
        h = 0,
        r = u;
      h < p;
      h++, r += l
    )
      ((n = t.getxFromPix(r)), (o = i(n)), (a = t.getyPix(o)), b.push(r), b.push(a));
    return b.join(',');
  }
  function O(t, i) {
    var e = document.getElementById(t),
      s = document.getElementById(i);
    (s.addEventListener('click', function () {
      F(e, s);
    }),
      s.addEventListener('keydown', function (t) {
        switch (((t = t || window.event), t.keyCode)) {
          case J.ENTER:
          case J.SPACE:
            F(e, s);
        }
        return (
          t.keyCode !== J.TAB && (t.preventDefault && t.preventDefault(), (t.returnValue = !1)),
          !1
        );
      }));
  }
  function N(t, i) {
    var e = document.getElementById(t);
    (e.addEventListener('click', function (t) {
      G('projection', i);
    }),
      e.addEventListener('keydown', function (t) {
        switch (((t = t || window.event), t.keyCode)) {
          case J.ENTER:
          case J.SPACE:
            G('projection');
        }
        return (
          t.keyCode !== J.TAB && (t.preventDefault && t.preventDefault(), (t.returnValue = !1)),
          !1
        );
      }));
  }
  function G(t, i) {
    var e = document.documentElement;
    (e.hasAttribute('theme') ? e.removeAttribute('theme') : e.setAttribute('theme', t),
      'function' == typeof i && i());
  }
  function F(t, i) {
    'block' === t.style.display
      ? ((t.style.display = 'none'), (i.textContent = '+ help'))
      : ((t.style.display = 'block'), (i.textContent = '- help'));
  }
  function X() {
    z(document.getElementById('help-text'));
  }
  function H(t) {
    var i = ++Q + '';
    return t ? t + i : i;
  }
  function q(t, i, e, s, h, n) {
    var o = document.createElementNS(W, 'foreignObject');
    return (
      t.appendChild(o),
      o.setAttribute('x', i),
      o.setAttribute('y', e),
      o.setAttribute('class', n),
      o
    );
  }
  function Y(t) {
    return getComputedStyle(document.documentElement).getPropertyValue(t).trim();
  }
  var R,
    z = t('autorender'),
    j = 2 * Math.PI,
    U = Math.PI / 2,
    _ = 180 / Math.PI,
    Z = Math.PI / 180,
    W = 'http://www.w3.org/2000/svg',
    $ = {
      Alpha: 'Α',
      Beta: 'Β',
      Gamma: 'Γ',
      Delta: 'Δ',
      Epsilon: 'Ε',
      Zeta: 'Ζ',
      Eta: 'Η',
      Theta: 'Θ',
      Iota: 'Ι',
      Kappa: 'Κ',
      Lambda: 'Λ',
      Mu: 'Μ',
      Nu: 'Ν',
      Xi: 'Ξ',
      Omicron: 'Ο',
      Pi: 'Π',
      Rho: 'Ρ',
      Sigma: 'Σ',
      Tau: 'Τ',
      Upsilon: 'Υ',
      Phi: 'Φ',
      Chi: 'Χ',
      Psi: 'Ψ',
      Omega: 'Ω',
      alpha: 'α',
      beta: 'β',
      gamma: 'γ',
      delta: 'δ',
      epsilon: 'ε',
      zeta: 'ζ',
      eta: 'η',
      theta: 'θ',
      iota: 'ι',
      kappa: 'κ',
      lambda: 'λ',
      mu: 'μ',
      nu: 'ν',
      xi: 'ξ',
      omicron: 'ο',
      pi: 'π',
      rho: 'ρ',
      sigmafinal: 'ς',
      sigma: 'σ',
      tau: 'τ',
      upsilon: 'υ',
      phi: 'φ',
      phisymbol: 'ϕ',
      chi: 'χ',
      psi: 'ψ',
      omega: 'ω',
      degree: '°',
      le: '≤',
      ge: '≥',
      Infin: '∞',
      partial: '∂',
      minus: '−',
      plus: '+',
      plusmn: '±',
      int: '∫',
      overbar: '̅',
      nobreakspace: ' ',
      combiningmacron: '̄',
      sqrt: '√',
      xdot: 'ẋ',
      xdoubledot: 'ẍ',
      ydot: 'ẏ',
      ydoubledot: 'ÿ',
    },
    J = {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38,
    },
    Q = 0,
    tt = 0,
    it = 0,
    et = ['ms', 'moz', 'webkit', 'o'];
  for (R = 0; R < et.length && !window.requestAnimationFrame; ++R)
    ((window.requestAnimationFrame = window[et[R] + 'RequestAnimationFrame']),
      (window.cancelAnimationFrame =
        window[et[R] + 'CancelAnimationFrame'] || window[et[R] + 'CancelRequestAnimationFrame']));
  return (
    window.requestAnimationFrame ||
      (window.requestAnimationFrame = function (t, i) {
        var e = new Date().getTime(),
          s = Math.max(0, 16 - (e - it)),
          h = window.setTimeout(function () {
            t(e + s);
          }, s);
        return ((it = e + s), h);
      }),
    window.cancelAnimationFrame ||
      (window.cancelAnimationFrame = function (t) {
        clearTimeout(t);
      }),
    {
      SVG_NS: W,
      XML_NS: 'http://www.w3.org/XML/1998/namespace',
      TWO_PI: j,
      PI_DIV_2: U,
      STR: $,
      KEYS: J,
      degToRad: i,
      radToDeg: e,
      getxPix: s,
      getxFromPix: h,
      getyPix: n,
      getyFromPix: o,
      log10: r,
      createClipPath: a,
      createLine: l,
      createRect: u,
      createCircle: c,
      createTriangle: p,
      createPolyline: d,
      createPolygon: b,
      createText: x,
      createStyledText: y,
      createTextList: g,
      createGroup: f,
      createBBox: w,
      removeChildren: k,
      replaceChildrenWithCopy: v,
      toBack: A,
      toFront: T,
      setVisibility: m,
      testForFeatures: B,
      testForCanvas: S,
      testForWebGL: M,
      testFor3DRenderer: C,
      testForSVG: P,
      testForAudio: V,
      testForJQuery: L,
      parseSubSuperScriptText: E,
      rk4: D,
      floatToString: I,
      getPoints: K,
      enableHelpLink: O,
      enableProjectionLink: N,
      enableKatexRendering: X,
      uniqueId: H,
      createForeignObject: q,
      getCSSProperty: Y,
    }
  );
});
