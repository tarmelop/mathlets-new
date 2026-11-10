/*
 * Part of the MIT Mathlets shared library (https://mathlets.org/).
 * Original code by the MIT Mathlets authors; extracted from the minified
 * common.js and auto-formatted (variable names are the minifier's).
 * Licensed under CC BY-NC-SA 3.0 — see LICENSE.md at the repo root.
 */
define(['require', 'utils', 'slider'], function (t) {
  'use strict';
  function i(t, i, h, n) {
    (s.call(this, t, i, h, n),
      (this.type = 'doubleslider'),
      (this.orientation = 'horizontal'),
      (this.wyAxis = 0),
      (this.wyTrack = this.wyAxis + 5),
      (this.wx1Value = 0),
      (this.wx2Value = 0),
      (this.x1Value = 0),
      (this.x2Value = 0),
      (this.x1Selected = !1),
      (this.x2Selected = !1),
      (this.axis = e.createLine(this.node, 0, this.wyAxis, this.width, this.wyAxis, 'slider-axis')),
      (this.darkTrack = e.createLine(
        this.node,
        0,
        this.wyTrack + 4,
        this.width,
        this.wyTrack + 4,
        'slider-dark-track',
      )),
      (this.lightTrack = e.createLine(
        this.node,
        0,
        this.wyTrack + 5,
        this.width,
        this.wyTrack + 5,
        'slider-light-track',
      )),
      (this.leftKnob = document.createElementNS(e.SVG_NS, 'g')),
      this.leftKnob.setAttribute('pointer-events', 'visible'),
      (this.rightKnob = document.createElementNS(e.SVG_NS, 'g')),
      this.rightKnob.setAttribute('pointer-events', 'all'),
      (this.leftKnobLine3 = e.createLine(
        this.leftKnob,
        this.wx1Value,
        this.wyTrack - 3,
        this.wx1Value,
        this.wyTrack + 7,
        'slider-knob-body2',
      )),
      (this.leftKnobLine1a = e.createLine(
        this.leftKnob,
        this.wx1Value + 0.5,
        this.wyTrack - 3,
        this.wx1Value + 0.5,
        this.wyTrack + 6.75,
        'slider-knob-body',
      )),
      (this.leftKnobLine2a = e.createLine(
        this.leftKnob,
        this.wx1Value - 0.5,
        this.wyTrack - 3,
        this.wx1Value - 0.5,
        this.wyTrack + 6.75,
        'slider-knob-body2',
      )),
      (this.leftKnobLine1 = e.createLine(
        this.leftKnob,
        this.wx1Value + 1,
        this.wyTrack - 2,
        this.wx1Value + 1,
        this.wyTrack + 6.5,
        'slider-knob-body',
      )),
      (this.leftKnobLine2 = e.createLine(
        this.leftKnob,
        this.wx1Value - 1,
        this.wyTrack - 2,
        this.wx1Value - 1,
        this.wyTrack + 6.5,
        'slider-knob-body2',
      )),
      (this.leftKnobLine1b = e.createLine(
        this.leftKnob,
        this.wx1Value + 1.5,
        this.wyTrack - 1,
        this.wx1Value + 1.5,
        this.wyTrack + 6.25,
        'slider-knob-body',
      )),
      (this.leftKnobLine2b = e.createLine(
        this.leftKnob,
        this.wx1Value - 1.5,
        this.wyTrack - 1,
        this.wx1Value - 1.5,
        this.wyTrack + 6.25,
        'slider-knob-body2',
      )),
      (this.leftKnobLine4 = e.createLine(
        this.leftKnob,
        this.wx1Value + 2,
        this.wyTrack,
        this.wx1Value + 2,
        this.wyTrack + 6,
        'slider-knob-body',
      )),
      (this.leftKnobLine5 = e.createLine(
        this.leftKnob,
        this.wx1Value - 2,
        this.wyTrack,
        this.wx1Value - 2,
        this.wyTrack + 6,
        'slider-knob-body2',
      )),
      (this.leftKnobLine4b = e.createLine(
        this.leftKnob,
        this.wx1Value + 2.5,
        this.wyTrack + 1,
        this.wx1Value + 2.5,
        this.wyTrack + 5.75,
        'slider-knob-body',
      )),
      (this.leftKnobLine5b = e.createLine(
        this.leftKnob,
        this.wx1Value - 2.5,
        this.wyTrack + 1,
        this.wx1Value - 2.5,
        this.wyTrack + 5.75,
        'slider-knob-body2',
      )),
      (this.leftKnobLine6 = e.createLine(
        this.leftKnob,
        this.wx1Value + 3,
        this.wyTrack + 2,
        this.wx1Value + 3,
        this.wyTrack + 5.5,
        'slider-knob-body',
      )),
      (this.leftKnobLine7 = e.createLine(
        this.leftKnob,
        this.wx1Value - 3.5,
        this.wyTrack + 3,
        this.wx1Value - 3.5,
        this.wyTrack + 5.25,
        'slider-knob-body2',
      )),
      (this.leftKnobLine6b = e.createLine(
        this.leftKnob,
        this.wx1Value + 3.5,
        this.wyTrack + 3,
        this.wx1Value + 3.5,
        this.wyTrack + 5.25,
        'slider-knob-body',
      )),
      (this.leftKnobLine7b = e.createLine(
        this.leftKnob,
        this.wx1Value - 3,
        this.wyTrack + 2,
        this.wx1Value - 3,
        this.wyTrack + 5.5,
        'slider-knob-body2',
      )),
      (this.leftKnobLine8 = e.createLine(
        this.leftKnob,
        this.wx1Value + 4,
        this.wyTrack + 4,
        this.wx1Value + 4,
        this.wyTrack + 5,
        'slider-knob-body',
      )),
      (this.leftKnobLine9 = e.createLine(
        this.leftKnob,
        this.wx1Value - 4,
        this.wyTrack + 4,
        this.wx1Value - 4,
        this.wyTrack + 5,
        'slider-knob-body2',
      )),
      (this.leftKnobLine8b = e.createLine(
        this.leftKnob,
        this.wx1Value + 4.5,
        this.wyTrack + 4.5,
        this.wx1Value + 4.5,
        this.wyTrack + 5,
        'slider-knob-body',
      )),
      (this.leftKnobLine9b = e.createLine(
        this.leftKnob,
        this.wx1Value - 4.5,
        this.wyTrack + 4.5,
        this.wx1Value - 4.5,
        this.wyTrack + 5,
        'slider-knob-body2',
      )),
      (this.rightKnobLine3 = e.createLine(
        this.rightKnob,
        this.wx2Value,
        this.wyTrack - 3,
        this.wx2Value,
        this.wyTrack + 7,
        'slider-knob-body2',
      )),
      (this.rightKnobLine1a = e.createLine(
        this.rightKnob,
        this.wx2Value + 0.5,
        this.wyTrack - 3,
        this.wx2Value + 0.5,
        this.wyTrack + 6.75,
        'slider-knob-body',
      )),
      (this.rightKnobLine2a = e.createLine(
        this.rightKnob,
        this.wx2Value - 0.5,
        this.wyTrack - 3,
        this.wx2Value - 0.5,
        this.wyTrack + 6.75,
        'slider-knob-body2',
      )),
      (this.rightKnobLine1 = e.createLine(
        this.rightKnob,
        this.wx2Value + 1,
        this.wyTrack - 2,
        this.wx2Value + 1,
        this.wyTrack + 6.5,
        'slider-knob-body',
      )),
      (this.rightKnobLine2 = e.createLine(
        this.rightKnob,
        this.wx2Value - 1,
        this.wyTrack - 2,
        this.wx2Value - 1,
        this.wyTrack + 6.5,
        'slider-knob-body2',
      )),
      (this.rightKnobLine1b = e.createLine(
        this.rightKnob,
        this.wx2Value + 1.5,
        this.wyTrack - 1,
        this.wx2Value + 1.5,
        this.wyTrack + 6.25,
        'slider-knob-body',
      )),
      (this.rightKnobLine2b = e.createLine(
        this.rightKnob,
        this.wx2Value - 1.5,
        this.wyTrack - 1,
        this.wx2Value - 1.5,
        this.wyTrack + 6.25,
        'slider-knob-body2',
      )),
      (this.rightKnobLine4 = e.createLine(
        this.rightKnob,
        this.wx2Value + 2,
        this.wyTrack,
        this.wx2Value + 2,
        this.wyTrack + 6,
        'slider-knob-body',
      )),
      (this.rightKnobLine5 = e.createLine(
        this.rightKnob,
        this.wx2Value - 2,
        this.wyTrack,
        this.wx2Value - 2,
        this.wyTrack + 6,
        'slider-knob-body2',
      )),
      (this.rightKnobLine4b = e.createLine(
        this.rightKnob,
        this.wx2Value + 2.5,
        this.wyTrack + 1,
        this.wx2Value + 2.5,
        this.wyTrack + 5.75,
        'slider-knob-body',
      )),
      (this.rightKnobLine5b = e.createLine(
        this.rightKnob,
        this.wx2Value - 2.5,
        this.wyTrack + 1,
        this.wx2Value - 2.5,
        this.wyTrack + 5.75,
        'slider-knob-body2',
      )),
      (this.rightKnobLine6 = e.createLine(
        this.rightKnob,
        this.wx2Value + 3,
        this.wyTrack + 2,
        this.wx2Value + 3,
        this.wyTrack + 5.5,
        'slider-knob-body',
      )),
      (this.rightKnobLine7 = e.createLine(
        this.rightKnob,
        this.wx2Value - 3.5,
        this.wyTrack + 3,
        this.wx2Value - 3.5,
        this.wyTrack + 5.25,
        'slider-knob-body2',
      )),
      (this.rightKnobLine6b = e.createLine(
        this.rightKnob,
        this.wx2Value + 3.5,
        this.wyTrack + 3,
        this.wx2Value + 3.5,
        this.wyTrack + 5.25,
        'slider-knob-body',
      )),
      (this.rightKnobLine7b = e.createLine(
        this.rightKnob,
        this.wx2Value - 3,
        this.wyTrack + 2,
        this.wx2Value - 3,
        this.wyTrack + 5.5,
        'slider-knob-body2',
      )),
      (this.rightKnobLine8 = e.createLine(
        this.rightKnob,
        this.wx2Value + 4,
        this.wyTrack + 4,
        this.wx2Value + 4,
        this.wyTrack + 5,
        'slider-knob-body',
      )),
      (this.rightKnobLine9 = e.createLine(
        this.rightKnob,
        this.wx2Value - 4,
        this.wyTrack + 4,
        this.wx2Value - 4,
        this.wyTrack + 5,
        'slider-knob-body2',
      )),
      (this.rightKnobLine8b = e.createLine(
        this.rightKnob,
        this.wx2Value + 4.5,
        this.wyTrack + 4.5,
        this.wx2Value + 4.5,
        this.wyTrack + 5,
        'slider-knob-body',
      )),
      (this.rightKnobLine9b = e.createLine(
        this.rightKnob,
        this.wx2Value - 4.5,
        this.wyTrack + 4.5,
        this.wx2Value - 4.5,
        this.wyTrack + 5,
        'slider-knob-body2',
      )),
      (this.leftKnobPointer = e.createLine(
        this.leftKnob,
        this.wx1Value,
        this.wyTrack - 4,
        this.wx1Value,
        this.wyTrack + 6,
        'slider-knob-pointer',
      )),
      (this.rightKnobPointer = e.createLine(
        this.rightKnob,
        this.wx2Value,
        this.wyTrack - 4,
        this.wx2Value,
        this.wyTrack + 6,
        'slider-knob-pointer',
      )),
      (this.leftKnobBBox = e.createRect(
        this.leftKnob,
        this.wx1Value - 10,
        this.wyAxis,
        20,
        14,
        'bBox hidden',
      )),
      this.leftKnobBBox.setAttribute('touch-action', 'none'),
      this.leftKnobBBox.setAttribute('tabindex', 0),
      this.leftKnobBBox.setAttribute('focusable', !0),
      (this.rightKnobBBox = e.createRect(
        this.rightKnob,
        this.wx2Value - 10,
        this.wyAxis,
        20,
        14,
        'bBox hidden',
      )),
      this.rightKnobBBox.setAttribute('touch-action', 'none'),
      this.rightKnobBBox.setAttribute('tabindex', 0),
      this.rightKnobBBox.setAttribute('focusable', !0),
      this.node.appendChild(this.leftKnob),
      this.node.appendChild(this.rightKnob));
  }
  var e = t('utils'),
    s = t('slider');
  return (
    (i.prototype = Object.create(s.prototype)),
    (i.prototype.setShortTicks = function () {
      var t, i;
      if (
        (s.prototype.setShortTicks.apply(this, arguments),
        (this.shortTicks = e.createGroup(this.node, this.shortTicks)),
        this.shortTickStep > 0)
      )
        for (t = this.shortTickMin; t <= this.shortTickMax; t += this.shortTickStep)
          ((i = this.getxPix(t)),
            i > this.width && (i = this.width),
            e.createLine(
              this.shortTicks,
              i,
              this.wyAxis,
              i,
              this.wyAxis - 2,
              'slider-short-ticks',
            ));
    }),
    (i.prototype.setLongTicks = function () {
      var t, i;
      if (
        (s.prototype.setLongTicks.apply(this, arguments),
        (this.longTicks = e.createGroup(this.node, this.longTicks)),
        this.longTickStep > 0)
      )
        for (t = this.longTickMin; t <= this.longTickMax; t += this.longTickStep)
          ((i = this.getxPix(t)),
            i > this.width && (i = this.width),
            e.createLine(this.longTicks, i, this.wyAxis, i, this.wyAxis - 4, 'slider-long-ticks'));
    }),
    (i.prototype.setAutomaticLabels = function () {
      var t, i, h, n;
      if (
        (s.prototype.setAutomaticLabels.apply(this, arguments),
        (h = this.wyAxis + this.labelYOffset),
        (this.labels = e.createGroup(this.node, this.labels)),
        this.labelStep > 0)
      )
        for (t = this.labelMin; t <= this.labelMax; t += this.labelStep)
          ((i = this.getxPix(t)),
            (n =
              Math.abs(t) < 1e-5 && !this.zeroHasDecimalPoint
                ? '0'
                : t.toFixed(this.labelDecimalDigits)),
            e.createText(this.labels, i, h, n, 'hslider-labels'));
    }),
    (i.prototype.setLabels = function () {
      var t, i, s;
      (1 === arguments.length
        ? (s = arguments[0])
        : 2 === arguments.length && ((s = arguments[0]), (this.labelYOffset = arguments[1])),
        (i = this.wyAxis + this.labelYOffset),
        (this.labels = e.createGroup(this.node, this.labels)));
      for (var h = 0, n = s.length; h < n; h++)
        ((t = this.getxPix(s[h].x)), e.createText(this.labels, t, i, s[h].str, 'hslider-labels'));
    }),
    (i.prototype.setText = function () {
      var t,
        i,
        s = arguments[1];
      (2 === arguments.length
        ? ((t = arguments[0]), (i = 'hslider-text'))
        : 3 === arguments.length
          ? ((t = arguments[0]), (i = arguments[2]))
          : 4 === arguments.length &&
            ((t = arguments[0]), (i = arguments[2]), (this.textXOffset = arguments[3])),
        void 0 === this.leftKnobText &&
          'left' === s &&
          (this.leftKnobText = e.createText(this.leftKnob, 20, this.wyTrack + 20, t, i)),
        void 0 === this.rightKnobText &&
          'right' === s &&
          (this.rightKnobText = e.createText(this.rightKnob, 20, this.wyTrack + 20, t, i)),
        this.updateText(t, i, s));
    }),
    (i.prototype.updateText = function (t, i, e) {
      'left' === e
        ? ((this.leftKnobText.textContent = t), this.leftKnobText.setAttribute('class', i))
        : 'right' === e &&
          ((this.rightKnobText.textContent = t), this.rightKnobText.setAttribute('class', i));
    }),
    (i.prototype.setValue = function () {
      var t;
      (2 === arguments.length
        ? ('left' === arguments[1]
            ? (this.x1Value = arguments[0])
            : 'right' === arguments[1] && (this.x2Value = arguments[0]),
          (t = 'hslider-value-text'))
        : 3 === arguments.length
          ? ('left' === arguments[1]
              ? (this.x1Value = arguments[0])
              : 'right' === arguments[1] && (this.x2Value = arguments[0]),
            (this.valueDecimalDigits = arguments[2]),
            (t = 'hslider-value-text'))
          : 4 === arguments.length
            ? ('left' === arguments[1]
                ? (this.x1Value = arguments[0])
                : 'right' === arguments[1] && (this.x2Value = arguments[0]),
              (this.valueDecimalDigits = arguments[2]),
              (t = arguments[3]))
            : 5 === arguments.length
              ? ('left' === arguments[1]
                  ? (this.x1Value = arguments[0])
                  : 'right' === arguments[1] && (this.x2Value = arguments[0]),
                (this.valueDecimalDigits = arguments[2]),
                (t = arguments[3]),
                (this.valueHasDegree = arguments[4]))
              : 6 === arguments.length &&
                ('left' === arguments[1]
                  ? (this.x1Value = arguments[0])
                  : 'right' === arguments[1] && (this.x2Value = arguments[0]),
                (this.valueDecimalDigits = arguments[2]),
                (t = arguments[3]),
                (this.valueHasDegree = arguments[4]),
                (this.valueTextXOffset = arguments[5])),
        (this.x1Value = this.clipToPlottingBounds(this.x1Value)),
        (this.x2Value = this.clipToPlottingBounds(this.x2Value)),
        (void 0 !== this.value1Text && void 0 !== this.value2Text) ||
          ((this.value1Text = e.createText(
            this.node,
            this.width + this.valueTextXOffset,
            this.wyTrack + 3,
            '',
            t,
          )),
          (this.value2Text = e.createText(
            this.node,
            this.width + this.valueTextXOffset + 40,
            this.wyTrack + 3,
            '',
            t,
          ))),
        (this.wx1Value = this.getxPix(this.x1Value)),
        (this.wx2Value = this.getxPix(this.x2Value)),
        this.updateKnobPosition(),
        this.updateValueText(t));
    }),
    (i.prototype.showValue = function (t) {
      t
        ? (this.value1Text.setAttribute('visibility', 'visible'),
          this.value2Text.setAttribute('visibility', 'visible'))
        : (this.value1Text.setAttribute('visibility', 'hidden'),
          this.value2Text.setAttribute('visibility', 'hidden'));
    }),
    (i.prototype.updateValueText = function () {
      var t, i, s, h;
      (1 === arguments.length &&
        (this.value1Text.setAttribute('class', arguments[0]),
        this.value2Text.setAttribute('class', arguments[0])),
        this.hasScale
          ? ((t = this.scale * this.x1Value), (i = this.scale * this.x2Value))
          : ((t = this.x1Value), (i = this.x2Value)),
        (s = t.toFixed(this.valueDecimalDigits)),
        (h = i.toFixed(this.valueDecimalDigits)),
        this.valueHasDegree && ((s += e.STR.degree), (h += e.STR.degree)),
        (this.value1Text.textContent = s),
        (this.value2Text.textContent = h),
        this.leftKnobBBox.setAttribute('aria-valuenow', s),
        this.rightKnobBBox.setAttribute('aria-valuenow', h));
    }),
    (i.prototype.getValue = function (t) {
      var i, e, s, h;
      if ((this.selectClosestKnob(t), this.isInTickZone || this.snapToTicks)) {
        var n = this.findNearestTick(t);
        this.x1Selected ? (this.wx1Value = n) : this.x2Selected && (this.wx2Value = n);
      } else this.x1Selected ? (this.wx1Value = t.x) : this.x2Selected && (this.wx2Value = t.x);
      ((e = this.longTickStep > 0 ? this.longTickStep : Number.MAX_VALUE),
        (i = this.shortTickStep > 0 ? this.shortTickStep : Number.MAX_VALUE),
        (s = Math.min(i, e)),
        (h = (s * this.width) / (this.max - this.min)),
        this.x1Selected && this.wx1Value > this.wx2Value - h
          ? (this.wx2Value = this.wx1Value + h)
          : this.x2Selected &&
            this.wx2Value < this.wx1Value + h &&
            (this.wx1Value = this.wx2Value - h),
        (this.wx1Value = this.clipToBounds(this.wx1Value)),
        (this.x1Value = this.getxFromPix(this.wx1Value)),
        (this.wx2Value = this.clipToBounds(this.wx2Value)),
        (this.x2Value = this.getxFromPix(this.wx2Value)));
    }),
    (i.prototype.getClickZone = function (t) {
      t.y <= 10 ? (this.isInTickZone = !0) : (this.isInTickZone = !1);
    }),
    (i.prototype.findNearestTick = function (t) {
      var i,
        e,
        s,
        h,
        n,
        o = t.x,
        r = Number.MAX_VALUE;
      if (
        (this.longTickStep > 0 && (h = this.longTickStep),
        this.shortTickStep > 0 && (h = this.shortTickStep),
        this.shortTickStep > 0 || this.longTickStep > 0)
      )
        for (i = this.min; i <= this.max; i += h)
          ((e = this.getxPix(i)), (s = Math.abs(o - e)) < r && ((r = s), (n = e)));
      else n = o;
      return n;
    }),
    (i.prototype.selectClosestKnob = function (t) {
      var i = t.x;
      Math.abs(i - this.wx1Value) < Math.abs(i - this.wx2Value)
        ? ((this.x1Selected = !0), (this.x2Selected = !1))
        : ((this.x1Selected = !1), (this.x2Selected = !0));
    }),
    (i.prototype.updateKnobPosition = function () {
      (this.leftKnob.setAttribute('transform', 'translate(' + parseInt(this.wx1Value, 10) + ', 0)'),
        this.rightKnob.setAttribute(
          'transform',
          'translate(' + parseInt(this.wx2Value, 10) + ', 0)',
        ));
    }),
    (i.prototype.setScale = function (t) {
      ((this.hasScale = !0), (this.scale = t));
    }),
    (i.prototype.getxPix = function (t) {
      return Math.round((this.width * (t - this.min)) / this.span);
    }),
    (i.prototype.getxFromPix = function (t) {
      return this.min + (this.span * t) / this.width;
    }),
    (i.prototype.resizeBBox = function () {
      (this.bBox.setAttribute('x', 0),
        this.bBox.setAttribute('y', -10),
        this.bBox.setAttribute('width', this.width),
        this.bBox.setAttribute('height', 20));
    }),
    (i.prototype.addAriaAttributes = function () {
      var t;
      ('string' == typeof this.ariaLabel
        ? (this.leftKnobBBox.setAttribute('aria-label', this.ariaLabel),
          this.rightKnobBBox.setAttribute('aria-label', this.ariaLabel))
        : void 0 !== this.text &&
          ((t = e.uniqueId('slider-label-')),
          this.text.setAttribute('id', t),
          this.leftKnobBBox.setAttribute('aria-labelledby', t),
          this.rightKnobBBox.setAttribute('aria-labelledby', t)),
        this.leftKnobBBox.setAttribute('aria-orientation', this.orientation),
        this.leftKnobBBox.setAttribute('aria-valuemin', this.min),
        this.leftKnobBBox.setAttribute('aria-valuemax', this.max),
        this.leftKnobBBox.setAttribute('aria-valuenow', this.x1Value),
        this.leftKnobBBox.setAttribute('role', 'slider'),
        this.rightKnobBBox.setAttribute('aria-orientation', this.orientation),
        this.rightKnobBBox.setAttribute('aria-valuemin', this.min),
        this.rightKnobBBox.setAttribute('aria-valuemax', this.max),
        this.rightKnobBBox.setAttribute('aria-valuenow', this.x2Value),
        this.rightKnobBBox.setAttribute('role', 'slider'));
    }),
    (i.prototype.finalize = function () {
      (this.toFront(this.leftKnob),
        this.toFront(this.rightKnob),
        this.addBBox(),
        this.resizeBBox(),
        this.bindEvents(),
        this.addAriaAttributes());
    }),
    i
  );
});
