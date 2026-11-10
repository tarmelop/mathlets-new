/*
 * Part of the MIT Mathlets shared library (https://mathlets.org/).
 * Original code by the MIT Mathlets authors; extracted from the minified
 * common.js and auto-formatted (variable names are the minifier's).
 * Licensed under CC BY-NC-SA 3.0 — see LICENSE.md at the repo root.
 */
define(['require', 'utils', 'component'], function (t) {
  'use strict';
  function i(t, i, h, n) {
    (s.call(this, t, i, h, n),
      (this.type = 'graph'),
      (this.xMin = -10),
      (this.xMax = 10),
      (this.xSpan = 10),
      (this.yMin = -10),
      (this.yMax = 10),
      (this.ySpan = 10),
      (this.x0 = 0),
      (this.y0 = 0),
      (this.wx0 = 0),
      (this.wy0 = 0),
      (this.xShortTickStep = 1),
      (this.xShortTickMin = this.xMin),
      (this.xShortTickMax = this.xMax),
      (this.xLongTickStep = 2),
      (this.xLongTickMin = this.xMin),
      (this.xLongTickMax = this.xMax),
      (this.xLabelStep = 2),
      (this.xLabelMin = this.xMin),
      (this.xLabelMax = this.xMax),
      (this.xGridStep = 2),
      (this.xGridMin = this.xMin),
      (this.xGridMax = this.xMax),
      (this.xZeroHasDecimalPoint = !0),
      (this.xTextXOffset = 10),
      (this.xLabelYOffset = 8),
      (this.xLabelDecimalDigits = 1),
      (this.yShortTickStep = 1),
      (this.yShortTickMin = this.yMin),
      (this.yShortTickMax = this.yMax),
      (this.yLongTickStep = 2),
      (this.yLongTickMin = this.yMin),
      (this.yLongTickMax = this.yMax),
      (this.yLabelStep = 2),
      (this.yLabelMin = this.yMin),
      (this.yLabelMax = this.yMax),
      (this.yGridStep = 2),
      (this.yGridMin = this.yMin),
      (this.yGridMax = this.yMax),
      (this.formatYZero = !0),
      (this.yTextYOffset = -13),
      (this.yLabelXOffset = -10),
      (this.yLabelDecimalDigits = 1),
      (this.hasXScale = !1),
      (this.xScale = 0),
      (this.hasYScale = !1),
      (this.yScale = 0),
      (this.hasxLog = !1),
      (this.hasyLog = !1),
      (this.xPowerMin = 1),
      (this.xPowerMax = 5),
      (this.yPowerMin = 1),
      (this.yPowerMax = 5),
      (this.hasHCrosshair = !1),
      (this.hasVCrosshair = !1),
      (this.mouseInside = !1),
      (this.isDragging = !1),
      (this.isReading = !1),
      (this.hasReadout = !1),
      (this.clipPath = e.createClipPath(this.node, 0, 0, this.width, this.height)),
      e.createRect(this.node, 0, 0, this.width, this.height, 'graph-background-rectangle'),
      (this.common = e.createGroup(this.node)),
      (this.shapes = e.createGroup(this.node)),
      (this.crosshairs = e.createGroup(this.node)));
  }
  var e = t('utils'),
    s = t('component');
  return (
    (i.prototype = Object.create(s.prototype)),
    (i.prototype.showBorder = function (t) {
      t
        ? this.border.setAttribute('visibility', 'visible')
        : this.border.setAttribute('visibility', 'hidden');
    }),
    (i.prototype.showXAxis = function (t) {
      t
        ? this.xAxis.setAttribute('visibility', 'visible')
        : this.xAxis.setAttribute('visibility', 'hidden');
    }),
    (i.prototype.showXText = function (t) {
      t
        ? this.xText.setAttribute('visibility', 'visible')
        : this.xText.setAttribute('visibility', 'hidden');
    }),
    (i.prototype.showXGrid = function (t) {
      t
        ? this.xGrid.setAttribute('visibility', 'visible')
        : this.xGrid.setAttribute('visibility', 'hidden');
    }),
    (i.prototype.showXShortTicks = function (t) {
      t
        ? this.xShortTicks.setAttribute('visibility', 'visible')
        : this.xShortTicks.setAttribute('visibility', 'hidden');
    }),
    (i.prototype.showXLongTicks = function (t) {
      t
        ? this.xLongTicks.setAttribute('visibility', 'visible')
        : this.xLongTicks.setAttribute('visibility', 'hidden');
    }),
    (i.prototype.showXLabels = function (t) {
      t
        ? this.xLabels.setAttribute('visibility', 'visible')
        : this.xLabels.setAttribute('visibility', 'hidden');
    }),
    (i.prototype.showYAxis = function (t) {
      t
        ? this.yAxis.setAttribute('visibility', 'visible')
        : this.yAxis.setAttribute('visibility', 'hidden');
    }),
    (i.prototype.showYText = function (t) {
      t
        ? this.yText.setAttribute('visibility', 'visible')
        : this.yText.setAttribute('visibility', 'hidden');
    }),
    (i.prototype.showYGrid = function (t) {
      t
        ? this.yGrid.setAttribute('visibility', 'visible')
        : this.yGrid.setAttribute('visibility', 'hidden');
    }),
    (i.prototype.showYShortTicks = function (t) {
      t
        ? this.yShortTicks.setAttribute('visibility', 'visible')
        : this.yShortTicks.setAttribute('visibility', 'hidden');
    }),
    (i.prototype.showYLongTicks = function (t) {
      t
        ? this.yLongTicks.setAttribute('visibility', 'visible')
        : this.yLongTicks.setAttribute('visibility', 'hidden');
    }),
    (i.prototype.showYLabels = function (t) {
      t
        ? this.yLabels.setAttribute('visibility', 'visible')
        : this.yLabels.setAttribute('visibility', 'hidden');
    }),
    (i.prototype.showCrosshairs = function (t, i) {
      (this.showHCrosshair(t), this.showVCrosshair(i));
    }),
    (i.prototype.showHCrosshair = function (t) {
      t
        ? this.hCrosshair.setAttribute('visibility', 'visible')
        : this.hCrosshair.setAttribute('visibility', 'hidden');
    }),
    (i.prototype.showVCrosshair = function (t) {
      t
        ? this.vCrosshair.setAttribute('visibility', 'visible')
        : this.vCrosshair.setAttribute('visibility', 'hidden');
    }),
    (i.prototype.setPlottingBounds = function (t, i, e, s) {
      ((this.xMin = t),
        (this.xMax = i),
        (this.yMin = e),
        (this.yMax = s),
        (this.xSpan = i - t),
        (this.ySpan = s - e));
    }),
    (i.prototype.setXAxis = function () {
      var t;
      (1 === arguments.length ? (t = 'graph-axis') : 2 === arguments.length && (t = arguments[1]),
        (this.y0 = arguments[0]),
        (this.wy0 = this.getyPix(this.y0)),
        (this.xAxis = e.createGroup(this.common, this.xAxis)),
        this.yMin <= this.y0 &&
          this.y0 <= this.yMax &&
          (e.createLine(this.xAxis, 0, this.wy0, this.width + 6, this.wy0, t),
          e.createLine(this.xAxis, this.width + 3, this.wy0 - 3, this.width + 3, this.wy0 + 3, t),
          e.createLine(this.xAxis, this.width + 4, this.wy0 - 2, this.width + 4, this.wy0 + 2, t),
          e.createLine(this.xAxis, this.width + 5, this.wy0 - 1, this.width + 5, this.wy0 + 1, t)));
    }),
    (i.prototype.setXText = function () {
      var t,
        i,
        s,
        h = 'graph-x-axis-text';
      (1 === arguments.length
        ? (s = arguments[0])
        : 2 === arguments.length
          ? ((s = arguments[0]), (this.xTextXOffset = arguments[1]))
          : 3 === arguments.length &&
            ((s = arguments[0]), (this.xTextXOffset = arguments[1]), (h = arguments[2])),
        (t = this.width + this.xTextXOffset),
        (i = this.getyPix(this.y0)),
        (this.xText = e.createGroup(this.common, this.xText)),
        this.yMin <= this.y0 && this.y0 <= this.yMax && e.createText(this.xText, t, i, s, h));
    }),
    (i.prototype.setXGrid = function () {
      var t,
        i,
        s = this.width - 1;
      if (
        ((this.xGrid = e.createGroup(this.common, this.xGrid)),
        1 === arguments.length
          ? ((this.xGridStep = arguments[0]),
            (this.xGridMin = this.xMin + arguments[0]),
            (this.xGridMax = this.xMax - arguments[0]))
          : 3 === arguments.length &&
            ((this.xGridStep = arguments[0]),
            (this.xGridMin = arguments[1]),
            (this.xGridMax = arguments[2])),
        this.xGridStep > 0)
      )
        for (t = this.xGridMin; t <= this.xGridMax; t += this.xGridStep)
          1 < (i = this.getxPix(t)) &&
            i < s &&
            e.createLine(this.xGrid, i, this.height, i, 0, 'graph-grid');
    }),
    (i.prototype.setXShortTicks = function () {
      var t, i;
      if (
        ((this.xShortTicks = e.createGroup(this.common, this.xShortTicks)),
        1 === arguments.length
          ? ((this.xShortTickStep = arguments[0]),
            (this.xShortTickMin = this.xMin),
            (this.xShortTickMax = this.xMax))
          : 3 === arguments.length &&
            ((this.xShortTickStep = arguments[0]),
            (this.xShortTickMin = arguments[1]),
            (this.xShortTickMax = arguments[2])),
        this.xShortTickStep > 0)
      )
        for (t = this.xShortTickMin; t <= this.xShortTickMax; t += this.xShortTickStep)
          ((i = this.getxPix(t)),
            i > this.width && (i = this.width),
            e.createLine(this.xShortTicks, i, this.height, i, this.height + 2, 'graph-long-ticks'));
    }),
    (i.prototype.setXLongTicks = function () {
      var t, i;
      if (
        ((this.xLongTicks = e.createGroup(this.common, this.xLongTicks)),
        1 === arguments.length
          ? ((this.xLongTickStep = arguments[0]),
            (this.xLongTickMin = this.xMin),
            (this.xLongTickMax = this.xMax))
          : 3 === arguments.length &&
            ((this.xLongTickStep = arguments[0]),
            (this.xLongTickMin = arguments[1]),
            (this.xLongTickMax = arguments[2])),
        this.xLongTickStep > 0)
      )
        for (t = this.xLongTickMin; t <= this.xLongTickMax; t += this.xLongTickStep)
          ((i = this.getxPix(t)),
            i > this.width && (i = this.width),
            e.createLine(this.xLongTicks, i, this.height, i, this.height + 4, 'graph-long-ticks'));
    }),
    (i.prototype.setAutomaticXLabels = function () {
      var t, i, s, h;
      if (
        ((this.xLabels = e.createGroup(this.common, this.xLabels)),
        2 === arguments.length
          ? ((this.xLabelStep = arguments[0]),
            (this.xLabelDecimalDigits = arguments[1]),
            (this.xLabelMin = this.xMin),
            (this.xLabelMax = this.xMax))
          : 3 === arguments.length
            ? ((this.xLabelStep = arguments[0]),
              (this.xLabelDecimalDigits = arguments[1]),
              (this.xZeroHasDecimalPoint = arguments[2]),
              (this.xLabelMin = this.xMin),
              (this.xLabelMax = this.xMax))
            : 5 === arguments.length
              ? ((this.xLabelStep = arguments[0]),
                (this.xLabelDecimalDigits = arguments[1]),
                (this.xZeroHasDecimalPoint = arguments[2]),
                (this.xLabelMin = arguments[3]),
                (this.xLabelMax = arguments[4]))
              : 6 === arguments.length &&
                ((this.xLabelStep = arguments[0]),
                (this.xLabelDecimalDigits = arguments[1]),
                (this.xZeroHasDecimalPoint = arguments[2]),
                (this.xLabelMin = arguments[3]),
                (this.xLabelMax = arguments[4]),
                (this.xLabelYOffset = arguments[5])),
        (s = this.height + this.xLabelYOffset),
        this.xLabelStep > 0)
      )
        for (t = this.xLabelMin; t <= this.xLabelMax; t += this.xLabelStep)
          ((i = this.getxPix(t)),
            (h =
              Math.abs(t) < 1e-5 && this.xZeroHasDecimalPoint
                ? '0'
                : t.toFixed(this.xLabelDecimalDigits)),
            e.createText(this.xLabels, i, s, h, 'graph-x-axis-labels'));
    }),
    (i.prototype.setXLabels = function () {
      var t, i, s, h;
      ((this.xLabels = e.createGroup(this.common, this.xLabels)),
        1 === arguments.length
          ? (s = arguments[0])
          : 2 === arguments.length && ((s = arguments[0]), (this.xLabelYOffset = arguments[1])),
        (i = this.height + this.xLabelYOffset));
      for (var n = 0, o = s.length; n < o; n++)
        ((h = s[n]),
          (t = this.getxPix(h.x)),
          e.createText(this.xLabels, t, i, h.str, 'graph-x-axis-labels'));
    }),
    (i.prototype.setYAxis = function () {
      var t;
      (1 === arguments.length ? (t = 'graph-axis') : 2 === arguments.length && (t = arguments[1]),
        (this.x0 = arguments[0]),
        (this.wx0 = this.getxPix(this.x0)),
        (this.yAxis = e.createGroup(this.common, this.yAxis)),
        this.xMin <= this.x0 &&
          this.x0 <= this.xMax &&
          (e.createLine(this.yAxis, this.wx0, this.height, this.wx0, -6, t),
          e.createLine(this.yAxis, this.wx0 - 3, -3, this.wx0 + 3, -3, t),
          e.createLine(this.yAxis, this.wx0 - 2, -4, this.wx0 + 2, -4, t),
          e.createLine(this.yAxis, this.wx0 - 1, -5, this.wx0 + 1, -5, t)));
    }),
    (i.prototype.setYText = function () {
      var t,
        i,
        s,
        h = 'graph-y-axis-text';
      (1 === arguments.length
        ? (s = arguments[0])
        : 2 === arguments.length
          ? ((s = arguments[0]), (this.yTextYOffset = arguments[1]))
          : 3 === arguments.length &&
            ((s = arguments[0]), (this.yTextYOffset = arguments[1]), (h = arguments[2])),
        (t = this.getxPix(this.x0)),
        (i = this.yTextYOffset),
        (this.yText = e.createGroup(this.common, this.yText)),
        this.xMin <= this.x0 && this.x0 <= this.xMax && e.createText(this.yText, t, i, s, h));
    }),
    (i.prototype.setYGrid = function () {
      var t,
        i,
        s = this.height - 1;
      if (
        ((this.yGrid = e.createGroup(this.common, this.yGrid)),
        1 === arguments.length
          ? ((this.yGridStep = arguments[0]),
            (this.yGridMin = this.yMin + arguments[0]),
            (this.yGridMax = this.yMax - arguments[0]))
          : 3 === arguments.length &&
            ((this.yGridStep = arguments[0]),
            (this.yGridMin = arguments[1]),
            (this.yGridMax = arguments[2])),
        this.yGridStep > 0)
      )
        for (t = this.yGridMin; t <= this.yGridMax; t += this.yGridStep)
          1 < (i = this.getyPix(t)) &&
            i < s &&
            e.createLine(this.yGrid, 0, i, this.width, i, 'graph-grid');
    }),
    (i.prototype.setYShortTicks = function () {
      var t, i;
      if (
        ((this.yShortTicks = e.createGroup(this.common, this.yShortTicks)),
        1 === arguments.length
          ? ((this.yShortTickStep = arguments[0]),
            (this.yShortTickMin = this.yMin),
            (this.yShortTickMax = this.yMax))
          : 3 === arguments.length &&
            ((this.yShortTickStep = arguments[0]),
            (this.yShortTickMin = arguments[1]),
            (this.yShortTickMax = arguments[2])),
        this.yShortTickStep > 0)
      )
        for (t = this.yShortTickMin; t <= this.yShortTickMax; t += this.yShortTickStep)
          ((i = this.getyPix(t)),
            i < 0 && (i = 0),
            e.createLine(this.yShortTicks, 0, i, -2, i, 'graph-long-ticks'));
    }),
    (i.prototype.setYLongTicks = function () {
      var t, i;
      if (
        ((this.yLongTicks = e.createGroup(this.common, this.yLongTicks)),
        1 === arguments.length
          ? ((this.yLongTickStep = arguments[0]),
            (this.yLongTickMin = this.yMin),
            (this.yLongTickMax = this.yMax))
          : 3 === arguments.length &&
            ((this.yLongTickStep = arguments[0]),
            (this.yLongTickMin = arguments[1]),
            (this.yLongTickMax = arguments[2])),
        this.yLongTickStep > 0)
      )
        for (t = this.yLongTickMin; t <= this.yLongTickMax; t += this.yLongTickStep)
          ((i = this.getyPix(t)),
            i < 0 && (i = 0),
            e.createLine(this.yLongTicks, 0, i, -4, i, 'graph-long-ticks'));
    }),
    (i.prototype.setAutomaticYLabels = function () {
      var t, i, s, h;
      if (
        ((this.yLabels = e.createGroup(this.common, this.yLabels)),
        2 === arguments.length
          ? ((this.yLabelStep = arguments[0]),
            (this.yLabelDecimalDigits = arguments[1]),
            (this.yLabelMin = this.yMin),
            (this.yLabelMax = this.yMax))
          : 3 === arguments.length
            ? ((this.yLabelStep = arguments[0]),
              (this.yLabelDecimalDigits = arguments[1]),
              (this.yZeroHasDecimalPoint = arguments[2]),
              (this.yLabelMin = this.yMin),
              (this.yLabelMax = this.yMax))
            : 5 === arguments.length
              ? ((this.yLabelStep = arguments[0]),
                (this.yLabelDecimalDigits = arguments[1]),
                (this.yZeroHasDecimalPoint = arguments[2]),
                (this.yLabelMin = arguments[3]),
                (this.yLabelMax = arguments[4]))
              : 6 === arguments.length &&
                ((this.yLabelStep = arguments[0]),
                (this.yLabelDecimalDigits = arguments[1]),
                (this.yZeroHasDecimalPoint = arguments[2]),
                (this.yLabelMin = arguments[3]),
                (this.yLabelMax = arguments[4]),
                (this.yLabelXOffset = arguments[5])),
        (i = this.yLabelXOffset),
        this.yLabelStep > 0)
      )
        for (t = this.yLabelMin; t <= this.yLabelMax; t += this.yLabelStep)
          ((s = this.getyPix(t)),
            (h =
              Math.abs(t) < 1e-5 && this.yZeroHasDecimalPoint
                ? '0'
                : t.toFixed(this.yLabelDecimalDigits)),
            e.createText(this.yLabels, i, s, h, 'graph-y-axis-labels'));
    }),
    (i.prototype.setYLabels = function () {
      var t, i, s, h;
      ((this.yLabels = e.createGroup(this.common, this.yLabels)),
        1 === arguments.length
          ? (s = arguments[0])
          : 2 === arguments.length && ((s = arguments[0]), (this.yLabelXOffset = arguments[1])),
        (t = this.yLabelXOffset));
      for (var n = 0, o = s.length; n < o; n++)
        ((h = s[n]),
          (i = this.getyPix(h.y)),
          e.createText(this.yLabels, t, i, h.str, 'graph-y-axis-labels'));
    }),
    (i.prototype.setCrosshairs = function (t, i) {
      ((this.hasHCrosshair = t),
        (this.hasVCrosshair = i),
        this.hasHCrosshair &&
          ((this.hCrosshair = e.createLine(
            this.crosshairs,
            0,
            100,
            this.width,
            100,
            'graph-crosshair',
          )),
          this.showHCrosshair(!1)),
        this.hasVCrosshair &&
          ((this.vCrosshair = e.createLine(
            this.crosshairs,
            100,
            0,
            100,
            this.height,
            'graph-crosshair',
          )),
          this.showVCrosshair(!1)),
        (this.hasReadout = t || i));
    }),
    (i.prototype.setXScale = function (t) {
      ((this.hasXScale = !0), (this.xScale = t));
    }),
    (i.prototype.setYScale = function (t) {
      ((this.hasYScale = !0), (this.yScale = t));
    }),
    (i.prototype.getxPix = function (t) {
      return (this.width * (t - this.xMin)) / this.xSpan;
    }),
    (i.prototype.getyPix = function (t) {
      return (this.height * (this.yMax - t)) / this.ySpan;
    }),
    (i.prototype.getxFromPix = function (t) {
      return this.hasXScale
        ? this.xScale * (this.xMin + (this.xSpan * t) / this.width)
        : this.xMin + (this.xSpan * t) / this.width;
    }),
    (i.prototype.getyFromPix = function (t) {
      return this.hasYScale
        ? this.yScale * (this.yMax - (this.ySpan * t) / this.height)
        : this.yMax - (this.ySpan * t) / this.height;
    }),
    (i.prototype.inBounds = function (t) {
      return 0 <= t.x && t.x <= this.width && 0 <= t.y && t.y <= this.height
        ? ((this.mouseInside = !0), !0)
        : ((this.mouseInside = !1), !1);
    }),
    (i.prototype.inPlottingBounds = function (t) {
      return 1 === arguments.length
        ? arguments[0].x <= this.xMax &&
            arguments[0].x >= this.xMin &&
            arguments[0].y <= this.yMax &&
            arguments[0].y >= this.yMin
        : 2 === arguments.length
          ? arguments[0] <= this.xMax &&
            arguments[0] >= this.xMin &&
            arguments[1] <= this.yMax &&
            arguments[1] >= this.yMin
          : void 0;
    }),
    (i.prototype.clipToBounds = function (t) {
      (t.x < 0 ? (t.x = 0) : t.x > this.width && (t.x = this.width),
        t.y < 0 ? (t.y = 0) : t.y > this.height && (t.y = this.height));
    }),
    (i.prototype.resizeBBox = function () {
      (this.bBox.setAttribute('x', 0),
        this.bBox.setAttribute('y', 0),
        this.bBox.setAttribute('width', this.width),
        this.bBox.setAttribute('height', this.height));
    }),
    (i.prototype.bindEvents = function () {
      ((this.pointerDown = this.pointerDown.bind(this)),
        (this.pointerMove = this.pointerMove.bind(this)),
        (this.pointerUp = this.pointerUp.bind(this)),
        (this.pointerOver = this.pointerOver.bind(this)),
        (this.pointerOut = this.pointerOut.bind(this)),
        this.bBox.addEventListener('pointerdown', this.pointerDown),
        this.bBox.addEventListener('pointerover', this.pointerOver),
        this.bBox.addEventListener('pointerout', this.pointerOut));
    }),
    (i.prototype.pointerOver = function (t) {
      t = t || window.event;
      var i, e, s;
      !this.isDragging &&
        this.hasReadout &&
        (this.bBox.addEventListener('pointermove', this.pointerMove, !1),
        (i = this.getMousePosition(t)),
        (e = this.getxFromPix(i.x)),
        (s = this.getyFromPix(i.y)),
        this.hasHCrosshair &&
          (this.hCrosshair.setAttribute('x1', 0),
          this.hCrosshair.setAttribute('y1', i.y),
          this.hCrosshair.setAttribute('x2', this.width),
          this.hCrosshair.setAttribute('y2', i.y),
          this.showHCrosshair(!0)),
        this.hasVCrosshair &&
          (this.vCrosshair.setAttribute('x1', i.x),
          this.vCrosshair.setAttribute('y1', 0),
          this.vCrosshair.setAttribute('x2', i.x),
          this.vCrosshair.setAttribute('y2', this.height),
          this.showVCrosshair(!0)),
        this.fireEvent('mouseover', { x: e, y: s, wx: i.x, wy: i.y }));
    }),
    (i.prototype.pointerDown = function (t) {
      if (
        (this.disableAllTouchEvents(),
        (t = t || window.event),
        !this.detectLeftButton(t) || !t.isPrimary)
      )
        return (this.cancelBubble(t), void this.cancelDefaultAction(t));
      var i,
        e,
        s = this.getMousePosition(t);
      (this.hasReadout &&
        (this.bBox.removeEventListener('pointermove', this.pointerMove, !0),
        this.hasHCrosshair && this.showHCrosshair(!1),
        this.hasVCrosshair && this.showVCrosshair(!1)),
        (this.isDragging = !0),
        (i = this.getxFromPix(s.x)),
        (e = this.getyFromPix(s.y)),
        this.fireEvent('mousedown', { x: i, y: e, wx: s.x, wy: s.y }),
        document.addEventListener('pointermove', this.pointerMove, !0),
        document.addEventListener('pointerup', this.pointerUp, !0),
        this.cancelBubble(t),
        this.cancelDefaultAction(t));
    }),
    (i.prototype.pointerMove = function (t) {
      t = t || window.event;
      var i, e, s;
      (this.isDragging
        ? ((i = this.getMousePosition(t)),
          this.clipToBounds(i),
          (e = this.getxFromPix(i.x)),
          (s = this.getyFromPix(i.y)),
          this.fireEvent('mousedrag', { x: e, y: s, wx: i.x, wy: i.y }))
        : ((i = this.getMousePosition(t)),
          (e = this.getxFromPix(i.x)),
          (s = this.getyFromPix(i.y)),
          this.hasHCrosshair &&
            (this.hCrosshair.setAttribute('x1', 0),
            this.hCrosshair.setAttribute('y1', i.y),
            this.hCrosshair.setAttribute('x2', this.width),
            this.hCrosshair.setAttribute('y2', i.y)),
          this.hasVCrosshair &&
            (this.vCrosshair.setAttribute('x1', i.x),
            this.vCrosshair.setAttribute('y1', 0),
            this.vCrosshair.setAttribute('x2', i.x),
            this.vCrosshair.setAttribute('y2', this.height)),
          this.fireEvent('mousemove', { x: e, y: s, wx: i.x, wy: i.y })),
        this.cancelBubble(t),
        this.cancelDefaultAction(t));
    }),
    (i.prototype.pointerUp = function (t) {
      t = t || window.event;
      var i, e, s, h;
      ((i = this.getMousePosition(t)),
        (e = this.getMousePosition(t)),
        this.isDragging &&
          (this.clipToBounds(e),
          (s = this.getxFromPix(e.x)),
          (h = this.getyFromPix(e.y)),
          this.fireEvent('mouseup', { x: s, y: h, wx: e.x, wy: e.y }),
          document.removeEventListener('pointermove', this.pointerMove, !0),
          document.removeEventListener('pointerup', this.pointerUp, !0),
          (this.isDragging = !1)),
        this.hasReadout &&
          this.inBounds(i) &&
          (this.bBox.addEventListener('pointermove', this.pointerMove, !1),
          (s = this.getxFromPix(e.x)),
          (h = this.getyFromPix(e.y)),
          this.hasHCrosshair &&
            (this.hCrosshair.setAttribute('x1', 0),
            this.hCrosshair.setAttribute('y1', e.y),
            this.hCrosshair.setAttribute('x2', this.width),
            this.hCrosshair.setAttribute('y2', e.y),
            this.showHCrosshair(!0)),
          this.hasVCrosshair &&
            (this.vCrosshair.setAttribute('x1', e.x),
            this.vCrosshair.setAttribute('y1', 0),
            this.vCrosshair.setAttribute('x2', e.x),
            this.vCrosshair.setAttribute('y2', this.height),
            this.showVCrosshair(!0)),
          this.fireEvent('mouseup', { x: s, y: h, wx: e.x, wy: e.y })),
        this.cancelDefaultAction(t),
        this.enableAllTouchEvents());
    }),
    (i.prototype.pointerOut = function (t) {
      t = t || window.event;
      var i, e, s;
      this.hasReadout &&
        ((i = this.getMousePosition(t)),
        (e = this.getxFromPix(i.x)),
        (s = this.getyFromPix(i.y)),
        this.hasHCrosshair && this.showHCrosshair(!1),
        this.hasVCrosshair && this.showVCrosshair(!1),
        this.bBox.removeEventListener('pointermove', this.pointerMove, !0),
        this.fireEvent('mouseout', { x: e, y: s, wx: i.x, wy: i.y }));
    }),
    (i.prototype.finalize = function () {
      (this.addBBox(), this.resizeBBox(), this.bindEvents());
    }),
    i
  );
});
