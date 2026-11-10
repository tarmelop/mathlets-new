/*
 * Fourier Coefficients: Complex with Sound
 * Original mathlet (c) 2008 H. Miller and J.-M. Claus — MIT Mathlets
 *   https://mathlets.org/mathlets/fourier-coefficients-complex/
 *
 * Readable rewrite of the minified build at
 *   https://mathlets.org/javascript/build/js/app/fourierCoefficientsComplex.js
 * Same behavior as the original, except updateSound() (see its comment).
 * Licensed under CC BY-NC-SA 3.0 — see LICENSE.md at the repo root.
 *
 * The tool shows the complex Fourier series
 *
 *   f(t) = sum_{n=-9..9} c_n e^{2 pi i n nu t},     c_n = |c_n| e^{i Arg(c_n)}
 *
 * and plots g(t) = Re(e^{-i phi} f(t)) = sum_n |c_n| cos(2 pi n nu t + Arg(c_n) - phi).
 * The [Play] button plays g(t) as a sound with fundamental frequency nu kHz.
 *
 * Layout (all coordinates are SVG pixels):
 *
 *   [f(t) real]  nu-slider kHz                       [Reset] [Play]
 *   +-------------------- waveGraph: g(t) --------------------+  phi
 *   |                                                         |  slider
 *   +---------------------------------------------------------+
 *   +--complexPlane--+       |c_n|  slider + magnitudeGraph (bars over n)
 *   |  c_n as a point |      Arg(c_n) slider + argGraph       (bars over n)
 *   +-----------------+
 *
 * Library modules (js/lib/...) are small SVG widgets: Graph, sliders, Text,
 * Button, Checkbox, and shapes (Line, Point, Curve) drawn inside a Graph.
 */
define([
  'utils',
  'tool',
  'checkbox',
  'hslider',
  'vslider',
  'text',
  'graph',
  'button',
  'point',
  'line',
  'curve',
  'fourieraudio',
  'underscore',
], function (
  utils,
  Tool,
  Checkbox,
  HSlider,
  VSlider,
  Text,
  Graph,
  Button,
  Point,
  Line,
  Curve,
  FourierAudio,
  _
) {
  'use strict';

  // Coefficients c_n exist for n = -MAX_N .. MAX_N.
  var MAX_N = 9;
  // Largest allowed |c_n| (top of the magnitude graph / slider).
  var MAX_MAGNITUDE = 4;

  // ---------------------------------------------------------------------------
  // UI components (created in buildTool)
  // ---------------------------------------------------------------------------
  var tool;
  var waveGraph; // top: plot of Re(e^{-i phi} f(t))
  var waveCurve; // the curve drawn in waveGraph
  var leftPeriodLine, rightPeriodLine; // red lines at t = -L and t = +L
  var tReadout, xReadout; // "t = ..." and "x = ..." crosshair readouts
  var complexPlane; // lower left: c_n drawn as a vector in the complex plane
  var complexPlaneLine, complexPlanePoint;
  var magnitudeGraph, magnitudeSlider, magnitudeLabel; // |c_n| for every n
  var argGraph, argSlider, argLabel; // Arg(c_n) for every n
  var realCheckbox; // [f(t) real]: forces c_{-n} = conj(c_n)
  var frequencySlider; // nu, in kHz
  var phiSlider; // phi, in units of pi (0 .. 2)
  var resetButton, playButton;

  // ---------------------------------------------------------------------------
  // Model state
  // ---------------------------------------------------------------------------
  var terms = []; // one FourierTerm per n, ordered n = -MAX_N .. MAX_N
  var focusedIndex; // index into `terms` of the currently selected n
  var audio;
  var isPlaying = false;

  // Sound is recomputed at most every 50 ms while dragging.
  var updateSoundThrottled = _.throttle(updateSound, 50);

  // State object for the edX / "matrixVector" integration (unused by this tool).
  var savedState = {};

  // ---------------------------------------------------------------------------
  // FourierTerm: one coefficient c_n = magnitude * e^{i * offset}
  // ---------------------------------------------------------------------------

  /**
   * @param {number} n  harmonic index (the "frequency" of e^{i n x})
   *
   * `magnitude` and `offset` each hold the numeric value plus the bar (line +
   * dot) that displays it in magnitudeGraph / argGraph, and the slider that
   * edits it when this term is focused. "offset" is the original code's name
   * for Arg(c_n), in radians, kept in [0, 2 pi).
   */
  function FourierTerm(n) {
    this.frequency = n;

    function makeBar(graph, slider) {
      return {
        value: 0,
        line: new Line(graph, n, 0, n, 0, 'graph-line-unfocused'),
        point: new Point(graph, n, 0, 3, 'graph-point-unfocused'),
        slider: slider,
      };
    }

    this.magnitude = makeBar(magnitudeGraph, magnitudeSlider);
    this.offset = makeBar(argGraph, argSlider);
  }

  FourierTerm.prototype.setFocused = function (focused) {
    var state = focused ? 'focused' : 'unfocused';
    [this.magnitude, this.offset].forEach(function (bar) {
      bar.line.setClass('graph-line-' + state);
      bar.point.setClass('graph-point-' + state);
    });
  };

  FourierTerm.prototype.isFocused = function () {
    return terms[focusedIndex] === this;
  };

  /** The term for -n. */
  FourierTerm.prototype.getOppositeTerm = function () {
    return terms[indexOfTerm(-this.frequency)];
  };

  /**
   * Called when [f(t) real] is toggled: replace c_n and c_{-n} by the closest
   * pair satisfying c_{-n} = conj(c_n), i.e. c_n := (c_n + conj(c_{-n})) / 2.
   * For n = 0, c_0 is made real.
   */
  FourierTerm.prototype.averageBarOpposite = function () {
    var re = this.magnitude.value * Math.cos(this.offset.value);
    var im = this.magnitude.value * Math.sin(this.offset.value);

    if (this.frequency !== 0) {
      var opposite = this.getOppositeTerm();
      var oppRe = opposite.magnitude.value * Math.cos(opposite.offset.value);
      var oppIm = opposite.magnitude.value * Math.sin(opposite.offset.value);

      this.setComplex((re + oppRe) / 2, (im - oppIm) / 2);
      opposite.setMagnitude(this.magnitude.value);
      opposite.setOffset(utils.TWO_PI - this.offset.value);
    } else {
      this.setComplex(re, 0);
    }
  };

  /** Make c_{-n} the complex conjugate of c_n. */
  FourierTerm.prototype.syncOpposite = function () {
    var opposite = this.getOppositeTerm();
    if (this.frequency !== 0) {
      opposite.setMagnitude(this.magnitude.value);
      opposite.setOffset(utils.TWO_PI - this.offset.value);
    }
  };

  FourierTerm.prototype.setMagnitude = function (magnitude) {
    this.magnitude.value = magnitude;
    this.updateSetGraph(this.magnitude);
    this.updateComplexGraph();
    if (realCheckbox.isChecked && this.isFocused()) {
      this.syncOpposite();
    }
  };

  /** Set Arg(c_n), in radians. */
  FourierTerm.prototype.setOffset = function (angle) {
    if (this.frequency === 0 && realCheckbox.isChecked) {
      // c_0 must be real: snap its argument to 0 or pi.
      this.offset.value = Math.round(angle / Math.PI) * Math.PI;
    } else {
      this.offset.value = angle;
    }
    this.updateSetGraph(this.offset);
    this.updateComplexGraph();
    if (realCheckbox.isChecked && this.isFocused()) {
      this.syncOpposite();
    }
  };

  /** Set c_n from its real and imaginary parts. */
  FourierTerm.prototype.setComplex = function (re, im) {
    this.setMagnitude(Math.min(MAX_MAGNITUDE, Math.sqrt(re * re + im * im)));
    var twoPi = utils.TWO_PI;
    var angle = ((Math.atan2(im, re) % twoPi) + twoPi) % twoPi; // in [0, 2 pi)
    this.setOffset(angle);
  };

  FourierTerm.prototype.updateAllGraphs = function () {
    this.updateSetGraph(this.magnitude);
    this.updateSetGraph(this.offset);
    this.updateComplexGraph();
  };

  /** Redraw the bar for `bar` (magnitude or offset) and sync its slider. */
  FourierTerm.prototype.updateSetGraph = function (bar) {
    bar.line.setXY(this.frequency, 0, this.frequency, bar.value);
    bar.point.setXY(this.frequency, bar.value);
    if (this.isFocused()) {
      bar.slider.setValue(bar.value);
    }
  };

  /** Redraw the vector in the complex plane (only for the focused term). */
  FourierTerm.prototype.updateComplexGraph = function () {
    if (!this.isFocused()) return;
    var re = this.magnitude.value * Math.cos(this.offset.value);
    var im = this.magnitude.value * Math.sin(this.offset.value);
    complexPlaneLine.setXY(0, 0, re, im);
    complexPlanePoint.setXY(re, im);
  };

  /** The phase of this term after the global rotation e^{-i phi}. */
  FourierTerm.prototype.rotatedPhase = function () {
    return this.offset.value - Math.PI * phiSlider.value;
  };

  /**
   * Re(e^{-i phi} c_n e^{i n x}) = |c_n| cos(n x + Arg(c_n) - phi),
   * where x = 2 pi nu t.
   */
  FourierTerm.prototype.calculateRealPart = function (x) {
    return this.magnitude.value * Math.cos(x * this.frequency + this.rotatedPhase());
  };

  // ---------------------------------------------------------------------------
  // Model helpers
  // ---------------------------------------------------------------------------

  function indexOfTerm(n) {
    for (var i = 0; i < terms.length; i++) {
      if (terms[i].frequency === n) return i;
    }
    return null;
  }

  /** Select which n the sliders and complex plane are editing. */
  function focusTerm(n) {
    if (focusedIndex !== undefined && terms[focusedIndex].frequency === n) return;

    for (var i = 0; i < terms.length; i++) {
      var isTarget = terms[i].frequency === n;
      terms[i].setFocused(isTarget);
      if (isTarget) {
        focusedIndex = i;
        terms[i].updateAllGraphs();
        magnitudeLabel.setText(1, n);
        argLabel.setText(1, n);
      }
    }
  }

  function focusedTerm() {
    return terms[focusedIndex];
  }

  /** g(x) = Re(e^{-i phi} f), with x = 2 pi nu t. */
  function evaluateWave(x) {
    var sum = 0;
    for (var i = 0; i < terms.length; i++) {
      sum += terms[i].calculateRealPart(x);
    }
    return sum;
  }

  // ---------------------------------------------------------------------------
  // Updates
  // ---------------------------------------------------------------------------

  /** Redraw the waveform and refresh the sound. Call after any change. */
  function update() {
    // t is in milliseconds and nu in kHz, so x = 2 pi nu t.
    var omega = utils.TWO_PI * frequencySlider.value;
    waveCurve.setPoints(
      function (t) {
        return evaluateWave(t * omega);
      },
      waveGraph.xMin,
      waveGraph.xMax
    );
    updateSoundThrottled();
  }

  /**
   * Send the current waveform g(t) to the audio engine.
   *
   * Grouping the n and -n terms, g is a real Fourier series in harmonics
   * k = 1..MAX_N:
   *
   *   |c_k| cos(k x + a_k) + |c_-k| cos(-k x + a_-k)
   *     = A_k cos(k x) + B_k sin(k x)
   *
   * with a_n = Arg(c_n) - phi and
   *
   *   A_k =  |c_k| cos(a_k) + |c_-k| cos(a_-k)
   *   B_k = -|c_k| sin(a_k) + |c_-k| sin(a_-k)
   *
   * Web Audio's PeriodicWave plays sum_k real[k] cos(k w t) + imag[k] sin(k w t),
   * so we pass real = A and imag = B. The constant term c_0 is inaudible and
   * PeriodicWave ignores index 0 anyway.
   *
   * (The original code passed only each harmonic's amplitude sqrt(A_k^2+B_k^2)
   * and zero for every phase, so the sound never reflected Arg(c_n) or phi
   * beyond their effect on those amplitudes.)
   */
  function updateSound() {
    var zeroIndex = indexOfTerm(0);
    var cosCoefficients = [0];
    var sinCoefficients = [0];
    var totalAmplitude = 0;

    for (var k = 1; k <= MAX_N; k++) {
      var plus = terms[zeroIndex + k];
      var minus = terms[zeroIndex - k];
      var phasePlus = plus.rotatedPhase();
      var phaseMinus = minus.rotatedPhase();

      var a =
        plus.magnitude.value * Math.cos(phasePlus) + minus.magnitude.value * Math.cos(phaseMinus);
      var b =
        -plus.magnitude.value * Math.sin(phasePlus) + minus.magnitude.value * Math.sin(phaseMinus);

      cosCoefficients.push(a);
      sinCoefficients.push(b);
      totalAmplitude += Math.sqrt(a * a + b * b);
    }

    // Scale so the waveform's peak can never exceed 1 (sum of amplitudes is an
    // upper bound), independently of the phases. We do this ourselves instead
    // of letting Web Audio normalize, because Web Audio normalizes by the actual
    // peak, which depends on the phases and would make phase changes sound like
    // volume changes.
    if (totalAmplitude > 0) {
      for (var j = 1; j <= MAX_N; j++) {
        cosCoefficients[j] /= totalAmplitude;
        sinCoefficients[j] /= totalAmplitude;
      }
    }

    audio.setFrequency(1000 * frequencySlider.value); // kHz -> Hz
    audio.setFourierTerms(cosCoefficients, sinCoefficients, { disableNormalization: true });
    // Same loudness rule as the original tool.
    audio.setVolume(Math.min(totalAmplitude / 5, 1));
  }

  /** Move the red lines at t = +/- L, where L = 1 / (2 nu) is half the period. */
  function updatePeriodMarkers() {
    var halfPeriod = 0.5 / frequencySlider.value;
    if (!isFinite(halfPeriod)) {
      // nu = 0: push the markers off the graph.
      halfPeriod = waveGraph.xMax + 1;
    }
    leftPeriodLine.setXY(-halfPeriod, waveGraph.yMin, -halfPeriod, waveGraph.yMax);
    rightPeriodLine.setXY(halfPeriod, waveGraph.yMin, halfPeriod, waveGraph.yMax);
  }

  // ---------------------------------------------------------------------------
  // Event handlers
  // ---------------------------------------------------------------------------

  function onRealToggled() {
    for (var i = indexOfTerm(0); i < terms.length; i++) {
      terms[i].averageBarOpposite();
    }
    update();
  }

  function onReset() {
    frequencySlider.setValue(1);
    phiSlider.setValue(0);
    for (var i = 0; i < terms.length; i++) {
      terms[i].setMagnitude(0);
      terms[i].setOffset(0);
    }
    update();
    updatePeriodMarkers();
  }

  function onPlayToggled() {
    if (isPlaying) {
      playButton.setText(0, 'Play');
      audio.stop();
    } else {
      playButton.setText(0, 'Pause');
      audio.play();
    }
    isPlaying = !isPlaying;
  }

  // ---------------------------------------------------------------------------
  // Construction
  // ---------------------------------------------------------------------------

  function buildTool() {
    var container = document.getElementById('daimp-tool-container');
    tool = new Tool(container);
    audio = new FourierAudio();

    buildWaveGraph();
    buildComplexPlane();
    buildCoefficientGraphs();
    buildTopControls();
    buildSliders();
    buildButtons();

    // One term per n; start with c_1 = 3 e^{0.73 i}.
    terms = [];
    for (var n = -MAX_N; n <= MAX_N; n++) {
      var term = new FourierTerm(n);
      if (n === 1) {
        term.setMagnitude(3);
        term.setOffset(0.73);
      }
      terms.push(term);
    }

    focusTerm(1);
    update();

    // Keyboard tab order, as indices into the components in the order they were
    // added with tool.add(...):
    //  0 waveGraph, 1 tReadout, 2 xReadout, 3 wave title, 4 complexPlane,
    //  5 magnitudeGraph, 6 argGraph, 7 magnitudeLabel, 8 argLabel,
    //  9 realCheckbox, 10 frequencySlider, 11 "kHz", 12 phiSlider,
    //  13 magnitudeSlider, 14 argSlider, 15 resetButton, 16 playButton
    tool.finalize([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 16, 11, 12, 13, 14]);
  }

  function buildWaveGraph() {
    waveGraph = new Graph(60, 60, 640, 240);
    waveGraph.setPlottingBounds(-2, 2, -20, 20);
    waveGraph.setXGrid(0.5, -2, 2);
    waveGraph.setXShortTicks(0.25);
    waveGraph.setXLongTicks(0.5);
    waveGraph.setAutomaticXLabels(0.5, 1, true);
    waveGraph.setYGrid(5, -20, 20);
    waveGraph.setYShortTicks(5);
    waveGraph.setYLongTicks(10);
    waveGraph.setAutomaticYLabels(10, 0, false);
    waveGraph.setXAxis(0);
    waveGraph.setXText('t');
    waveGraph.setYAxis(0);
    waveGraph.setYText('x');
    tool.add(waveGraph);
    waveGraph.setCrosshairs(true, true);

    // Crosshair readouts to the right of the graph.
    tReadout = new Text(waveGraph.x + waveGraph.width + 25, waveGraph.y + waveGraph.height + 30);
    tool.add(tReadout);
    tReadout.addText('t = ', 'normal-text');
    tReadout.addText('', 'normal-text');

    xReadout = new Text(tReadout.x, tReadout.y + 20);
    tool.add(xReadout);
    xReadout.addText('x = ', 'normal-text');
    xReadout.addText('', 'normal-text');

    function showReadout(e) {
      tReadout.setText(1, e.x.toFixed(2));
      xReadout.setText(1, e.y.toFixed(2));
    }
    function clearReadout() {
      tReadout.setText(1, '');
      xReadout.setText(1, '');
    }
    waveGraph.addEventListener('mouseover', showReadout);
    waveGraph.addEventListener('mousemove', showReadout);
    waveGraph.addEventListener('mousedrag', showReadout);
    waveGraph.addEventListener('mouseout', clearReadout);
    waveGraph.addEventListener('mouseup', function (e) {
      var onEdge =
        e.x === waveGraph.xMin ||
        e.x === waveGraph.xMax ||
        e.y === waveGraph.yMin ||
        e.y === waveGraph.yMax;
      if (onEdge) clearReadout();
      else showReadout(e);
    });

    waveCurve = new Curve(waveGraph, [waveGraph.xMin, 0, waveGraph.xMax, 0], 'graph-line-unfocused');
    leftPeriodLine = new Line(waveGraph, -0.5, waveGraph.yMin, -0.5, waveGraph.yMax, 'frequency-line');
    rightPeriodLine = new Line(waveGraph, 0.5, waveGraph.yMin, 0.5, waveGraph.yMax, 'frequency-line');

    // Title: Re(e^{-i phi} f(t))
    var title = new Text(waveGraph.x + 355, waveGraph.y - 12);
    title.addText('Re(e', 'curve-text');
    title.addSuperScript('-i' + utils.STR.phi, 'small-curve-text');
    title.addText('f(t))', 'curve-text');
    tool.add(title);
  }

  function buildComplexPlane() {
    complexPlane = new Graph(waveGraph.x, waveGraph.y + waveGraph.height + 50, 200, 200);
    complexPlane.setPlottingBounds(-4, 4, -4, 4);
    complexPlane.setXGrid(1, -4, 4);
    complexPlane.setXLongTicks(1);
    complexPlane.setAutomaticXLabels(2, 0, false);
    complexPlane.setYGrid(1, -4, 4);
    complexPlane.setYLongTicks(1);
    complexPlane.setAutomaticYLabels(2, 0, false);
    complexPlane.setXAxis(0);
    complexPlane.setXText('Re');
    complexPlane.setYAxis(0);
    complexPlane.setYText('Im');
    tool.add(complexPlane);

    // Click/drag sets the focused c_n directly.
    function onDrag(e) {
      focusedTerm().setComplex(e.x, e.y);
      update();
    }
    complexPlane.addEventListener('mousedown', onDrag);
    complexPlane.addEventListener('mousedrag', onDrag);

    complexPlaneLine = new Line(complexPlane, 0, 0, 0, 0, 'graph-line-focused');
    complexPlanePoint = new Point(complexPlane, 0, 0, 2.5, 'graph-point-focused');
  }

  function buildCoefficientGraphs() {
    // |c_n| bars. Clicking picks n (nearest integer) and sets |c_n|.
    magnitudeGraph = new Graph(waveGraph.x + waveGraph.width - 340, complexPlane.y, 340, 75);
    magnitudeGraph.setPlottingBounds(-MAX_N, MAX_N, 0, MAX_MAGNITUDE);
    magnitudeGraph.setXLongTicks(1);
    magnitudeGraph.setAutomaticXLabels(1, 0, false);
    magnitudeGraph.setXAxis(0);
    magnitudeGraph.setXText('n');
    magnitudeGraph.setYShortTicks(0.5);
    magnitudeGraph.setYLongTicks(1);
    magnitudeGraph.setYAxis(0);
    tool.add(magnitudeGraph);

    function onMagnitudeDrag(e) {
      focusTerm(Math.round(e.x));
      focusedTerm().setMagnitude(e.y);
      update();
    }
    magnitudeGraph.addEventListener('mousedown', onMagnitudeDrag);
    magnitudeGraph.addEventListener('mousedrag', onMagnitudeDrag);

    // Arg(c_n) bars, 0 .. 2 pi.
    argGraph = new Graph(magnitudeGraph.x, complexPlane.y + complexPlane.height - 75, 340, 75);
    argGraph.setPlottingBounds(-MAX_N, MAX_N, 0, utils.TWO_PI);
    argGraph.setXLongTicks(1);
    argGraph.setAutomaticXLabels(1, 0, false);
    argGraph.setXAxis(0);
    argGraph.setXText('n');
    argGraph.setYShortTicks(utils.PI_DIV_2);
    argGraph.setYLongTicks(Math.PI);
    argGraph.setYAxis(0);
    tool.add(argGraph);

    function onArgDrag(e) {
      focusTerm(Math.round(e.x));
      focusedTerm().setOffset(e.y);
      update();
    }
    argGraph.addEventListener('mousedown', onArgDrag);
    argGraph.addEventListener('mousedrag', onArgDrag);

    // Labels "|c_n|" and "Arg(c_n)"; the subscript (index 1) is set by focusTerm.
    magnitudeLabel = new Text(magnitudeGraph.x + 30, magnitudeGraph.y - 10);
    magnitudeLabel.addText('|c', 'normal-text');
    magnitudeLabel.addSubScript('', 'small-text');
    magnitudeLabel.addText('|', 'normal-text');
    tool.add(magnitudeLabel);

    argLabel = new Text(argGraph.x + 20, argGraph.y - 10);
    argLabel.addText('Arg(c', 'normal-text');
    argLabel.addSubScript('', 'small-text');
    argLabel.addText(')', 'normal-text');
    tool.add(argLabel);
  }

  function buildTopControls() {
    realCheckbox = new Checkbox(waveGraph.x, 25, 50, 50);
    realCheckbox.addText('f(t) real', 'checkbox-label');
    tool.add(realCheckbox);
    realCheckbox.addEventListener('change', onRealToggled);

    // nu in kHz, 0 .. 1, rounded to 0.01.
    frequencySlider = new HSlider(realCheckbox.x + 130, realCheckbox.y + 5, 100, 50);
    frequencySlider.setPlottingBounds(0, 1);
    frequencySlider.setText(utils.STR.nu, 'hslider-text');
    frequencySlider.setShortTicks(0.25);
    frequencySlider.setLongTicks(0.5);
    frequencySlider.setValue(1, 2, 'hslider-value-text');
    frequencySlider.setAutomaticLabels(0.5, 1, false);
    tool.add(frequencySlider);
    frequencySlider.addEventListener('change', function () {
      frequencySlider.value = Math.round(100 * frequencySlider.value) / 100;
      update();
      updatePeriodMarkers();
    });

    var kHzLabel = new Text(frequencySlider.x + frequencySlider.width + 42, frequencySlider.y + 8);
    kHzLabel.addText('kHz', 'normal-text');
    tool.add(kHzLabel);
  }

  function buildSliders() {
    // phi, displayed in units of pi (0 .. 2 pi).
    phiSlider = new VSlider(
      waveGraph.x + waveGraph.width + 50,
      waveGraph.y + 40,
      50,
      waveGraph.height - 80
    );
    phiSlider.setPlottingBounds(0, 2);
    phiSlider.setValueSuffix(' ' + utils.STR.pi);
    phiSlider.setText(utils.STR.phi, 'vslider-text');
    phiSlider.setShortTicks(0.25);
    phiSlider.setLongTicks(0.5);
    phiSlider.setValue(0, 2, 'vslider-value-text');
    phiSlider.setLabels([
      { y: 0, str: '0' },
      { y: 1, str: utils.STR.pi },
      { y: 2, str: '2' + utils.STR.pi },
    ]);
    tool.add(phiSlider);
    phiSlider.addEventListener('change', update);

    // |c_n| for the focused n.
    magnitudeSlider = new VSlider(magnitudeGraph.x - 20, magnitudeGraph.y, 50, magnitudeGraph.height);
    magnitudeSlider.setPlottingBounds(0, MAX_MAGNITUDE);
    magnitudeSlider.setShortTicks(0.5);
    magnitudeSlider.setLongTicks(1);
    magnitudeSlider.setValue(0, 2, 'vslider-value-text');
    magnitudeSlider.setAutomaticLabels(1, 0, false);
    tool.add(magnitudeSlider);
    magnitudeSlider.addEventListener('change', function () {
      focusedTerm().setMagnitude(magnitudeSlider.value);
      update();
    });

    // Arg(c_n) for the focused n, in radians.
    argSlider = new VSlider(argGraph.x - 20, argGraph.y, 50, argGraph.height);
    argSlider.setPlottingBounds(0, utils.TWO_PI);
    argSlider.setShortTicks(Math.PI / 4);
    argSlider.setLongTicks(utils.PI_DIV_2);
    argSlider.setValue(0, 2, 'vslider-value-text');
    argSlider.setLabels([
      { y: 0, str: 0 },
      { y: Math.PI, str: utils.STR.pi },
      { y: utils.TWO_PI, str: 2 + utils.STR.pi },
    ]);
    tool.add(argSlider);
    argSlider.addEventListener('change', function () {
      focusedTerm().setOffset(argSlider.value);
      update();
    });
  }

  function buildButtons() {
    resetButton = new Button(waveGraph.x + waveGraph.width - 160 - 1, realCheckbox.y, 80, 20);
    resetButton.addText('Reset');
    tool.add(resetButton);
    resetButton.addEventListener('click', onReset);

    playButton = new Button(waveGraph.x + waveGraph.width - 80, realCheckbox.y, 80, 20);
    playButton.addText('Play');
    tool.add(playButton);
    playButton.addEventListener('click', onPlayToggled);
  }

  // ---------------------------------------------------------------------------
  // Startup
  // ---------------------------------------------------------------------------

  try {
    utils.testForFeatures(false, false, true, true);
  } catch (e) {
    window.alert(e.toString() + ' The tool is disabled.');
  }
  utils.enableHelpLink('help-text', 'help-link');
  utils.enableProjectionLink('projection-link');
  utils.enableKatexRendering();
  buildTool();

  // Hooks used when the tool is embedded in edX.
  window.matrixVector = {
    getState: function () {
      return JSON.stringify(savedState);
    },
    setState: function (json) {
      savedState = JSON.parse(json);
    },
    getGrade: function () {
      return JSON.stringify(savedState);
    },
  };
});
