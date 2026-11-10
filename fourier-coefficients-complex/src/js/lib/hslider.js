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
      (this.type = 'hslider'),
      (this.orientation = 'horizontal'),
      (this.labelSide = 'top'),
      (this.wyAxis = 0),
      (this.wyTrack = this.wyAxis + 5),
      (this.wxValue = 0),
      (this.bBoxXOffset = 10),
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
      (this.knob = document.createElementNS(e.SVG_NS, 'g')),
      this.knob.setAttribute('pointer-events', 'visible'),
      (this.knobLine3 = e.createLine(
        this.knob,
        this.wxValue,
        this.wyTrack - 3,
        this.wxValue,
        this.wyTrack + 7,
        'slider-knob-body2',
      )),
      (this.knobLine1a = e.createLine(
        this.knob,
        this.wxValue + 0.5,
        this.wyTrack - 3,
        this.wxValue + 0.5,
        this.wyTrack + 6.75,
        'slider-knob-body',
      )),
      (this.knobLine2a = e.createLine(
        this.knob,
        this.wxValue - 0.5,
        this.wyTrack - 3,
        this.wxValue - 0.5,
        this.wyTrack + 6.75,
        'slider-knob-body2',
      )),
      (this.knobLine1 = e.createLine(
        this.knob,
        this.wxValue + 1,
        this.wyTrack - 2,
        this.wxValue + 1,
        this.wyTrack + 6.5,
        'slider-knob-body',
      )),
      (this.knobLine2 = e.createLine(
        this.knob,
        this.wxValue - 1,
        this.wyTrack - 2,
        this.wxValue - 1,
        this.wyTrack + 6.5,
        'slider-knob-body2',
      )),
      (this.knobLine1b = e.createLine(
        this.knob,
        this.wxValue + 1.5,
        this.wyTrack - 1,
        this.wxValue + 1.5,
        this.wyTrack + 6.25,
        'slider-knob-body',
      )),
      (this.knobLine2b = e.createLine(
        this.knob,
        this.wxValue - 1.5,
        this.wyTrack - 1,
        this.wxValue - 1.5,
        this.wyTrack + 6.25,
        'slider-knob-body2',
      )),
      (this.knobLine4 = e.createLine(
        this.knob,
        this.wxValue + 2,
        this.wyTrack,
        this.wxValue + 2,
        this.wyTrack + 6,
        'slider-knob-body',
      )),
      (this.knobLine5 = e.createLine(
        this.knob,
        this.wxValue - 2,
        this.wyTrack,
        this.wxValue - 2,
        this.wyTrack + 6,
        'slider-knob-body2',
      )),
      (this.knobLine4b = e.createLine(
        this.knob,
        this.wxValue + 2.5,
        this.wyTrack + 1,
        this.wxValue + 2.5,
        this.wyTrack + 5.75,
        'slider-knob-body',
      )),
      (this.knobLine5b = e.createLine(
        this.knob,
        this.wxValue - 2.5,
        this.wyTrack + 1,
        this.wxValue - 2.5,
        this.wyTrack + 5.75,
        'slider-knob-body2',
      )),
      (this.knobLine6 = e.createLine(
        this.knob,
        this.wxValue + 3,
        this.wyTrack + 2,
        this.wxValue + 3,
        this.wyTrack + 5.5,
        'slider-knob-body',
      )),
      (this.knobLine7 = e.createLine(
        this.knob,
        this.wxValue - 3.5,
        this.wyTrack + 3,
        this.wxValue - 3.5,
        this.wyTrack + 5.25,
        'slider-knob-body2',
      )),
      (this.knobLine6b = e.createLine(
        this.knob,
        this.wxValue + 3.5,
        this.wyTrack + 3,
        this.wxValue + 3.5,
        this.wyTrack + 5.25,
        'slider-knob-body',
      )),
      (this.knobLine7b = e.createLine(
        this.knob,
        this.wxValue - 3,
        this.wyTrack + 2,
        this.wxValue - 3,
        this.wyTrack + 5.5,
        'slider-knob-body2',
      )),
      (this.knobLine8 = e.createLine(
        this.knob,
        this.wxValue + 4,
        this.wyTrack + 4,
        this.wxValue + 4,
        this.wyTrack + 5,
        'slider-knob-body',
      )),
      (this.knobLine9 = e.createLine(
        this.knob,
        this.wxValue - 4,
        this.wyTrack + 4,
        this.wxValue - 4,
        this.wyTrack + 5,
        'slider-knob-body2',
      )),
      (this.knobLine8b = e.createLine(
        this.knob,
        this.wxValue + 4.5,
        this.wyTrack + 4.5,
        this.wxValue + 4.5,
        this.wyTrack + 5,
        'slider-knob-body',
      )),
      (this.knobLine9b = e.createLine(
        this.knob,
        this.wxValue - 4.5,
        this.wyTrack + 4.5,
        this.wxValue - 4.5,
        this.wyTrack + 5,
        'slider-knob-body2',
      )),
      (this.knobPointer = e.createLine(
        this.knob,
        this.wxValue,
        this.wyTrack - 4,
        this.wxValue,
        this.wyTrack + 6,
        'slider-knob-pointer',
      )),
      (this.knobBBox = e.createRect(
        this.knob,
        this.wxValue - 10,
        this.wyAxis,
        20,
        14,
        'bBox hidden',
      )),
      this.knobBBox.setAttribute('touch-action', 'none'),
      this.knobBBox.setAttribute('tabindex', 0),
      this.knobBBox.setAttribute('focusable', !0),
      this.node.appendChild(this.knob),
      (this.tSpans = []));
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
            'top' === this.labelSide
              ? e.createLine(
                  this.shortTicks,
                  i,
                  this.wyAxis,
                  i,
                  this.wyAxis - 2,
                  'slider-short-ticks',
                )
              : e.createLine(
                  this.shortTicks,
                  i,
                  this.wyAxis,
                  i,
                  this.wyAxis + 2,
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
            'top' === this.labelSide
              ? e.createLine(
                  this.longTicks,
                  i,
                  this.wyAxis,
                  i,
                  this.wyAxis - 4,
                  'slider-long-ticks',
                )
              : e.createLine(
                  this.longTicks,
                  i,
                  this.wyAxis,
                  i,
                  this.wyAxis + 4,
                  'slider-long-ticks',
                ));
    }),
    (i.prototype.setAutomaticLabels = function () {
      var t, i, h, n;
      if (
        (s.prototype.setAutomaticLabels.apply(this, arguments),
        (h =
          'top' === this.labelSide
            ? this.wyAxis + this.labelYOffset
            : this.wyAxis - this.labelYOffset + 8),
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
        (i =
          'top' === this.labelSide
            ? this.wyAxis + this.labelYOffset
            : this.wyAxis - this.labelYOffset + 8),
        (this.labels = e.createGroup(this.node, this.labels)));
      for (var h = 0, n = s.length; h < n; h++)
        ((t = this.getxPix(s[h].x)), e.createText(this.labels, t, i, s[h].str, 'hslider-labels'));
    }),
    (i.prototype.setText = function () {
      var t, i;
      (1 === arguments.length
        ? ((t = arguments[0]), (i = 'hslider-text'))
        : 2 === arguments.length
          ? ((t = arguments[0]), (i = arguments[1]))
          : 3 === arguments.length &&
            ((t = arguments[0]), (i = arguments[1]), (this.textXOffset = arguments[2])),
        void 0 !== this.text && this.node.removeChild(this.text),
        (this.text = e.createText(this.node, this.textXOffset, this.wyTrack + 3, '', i)),
        this.addText(t));
    }),
    (i.prototype.addText = function () {
      var t = e.createStyledText(this.text, arguments[0]);
      (2 === arguments.length && t.setAttribute('class', arguments[1]),
        t.setAttribute('y', this.wyTrack + 3),
        t.setAttributeNS(e.XML_NS, 'xml:space', 'preserve'),
        this.tSpans.push(t));
    }),
    (i.prototype.addSuperScript = function () {
      var t = e.createStyledText(this.text, arguments[0]);
      (2 === arguments.length && t.setAttribute('class', arguments[1]),
        t.setAttribute('dx', 2),
        t.setAttribute('y', this.wyTrack + 3 - 5),
        t.setAttributeNS(e.XML_NS, 'xml:space', 'preserve'),
        this.tSpans.push(t));
    }),
    (i.prototype.addSubScript = function () {
      var t = e.createStyledText(this.text, arguments[0]);
      (2 === arguments.length && t.setAttribute('class', arguments[1]),
        t.setAttribute('dx', 2),
        t.setAttribute('y', this.wyTrack + 3 + 3),
        t.setAttributeNS(e.XML_NS, 'xml:space', 'preserve'),
        this.tSpans.push(t));
    }),
    (i.prototype.setValue = function () {
      var t;
      (1 === arguments.length
        ? ((this.value = arguments[0]), (t = 'hslider-value-text'))
        : 2 === arguments.length
          ? ((this.value = arguments[0]),
            (this.valueDecimalDigits = arguments[1]),
            (t = 'hslider-value-text'))
          : 3 === arguments.length
            ? ((this.value = arguments[0]),
              (this.valueDecimalDigits = arguments[1]),
              (t = arguments[2]))
            : 4 === arguments.length
              ? ((this.value = arguments[0]),
                (this.valueDecimalDigits = arguments[1]),
                (t = arguments[2]),
                (this.valueHasDegree = arguments[3]))
              : 5 === arguments.length &&
                ((this.value = arguments[0]),
                (this.valueDecimalDigits = arguments[1]),
                (t = arguments[2]),
                (this.valueHasDegree = arguments[3]),
                (this.valueTextXOffset = arguments[4])),
        void 0 === this.valueText
          ? (this.valueText = e.createText(
              this.node,
              this.width + this.valueTextXOffset,
              this.wyTrack + 3,
              '',
              t,
            ))
          : t && this.valueText.setAttribute('class', t),
        this.keepValueInBounds && (this.value = this.clipToPlottingBounds(this.value)),
        (this.wxValue = this.clipToBounds(this.getxPix(this.value))),
        this.updateKnobPosition(),
        this.updateValueText());
    }),
    (i.prototype.getValue = function (t) {
      var i;
      (this.isInTickZone || this.snapToTicks || this.snapToStep || this.snapToArray
        ? ((i = this.findNearestTick(t)), (this.wxValue = i.wxValue), (this.value = i.value))
        : ((this.wxValue = t.x), (this.value = this.getxFromPix(this.wxValue))),
        (this.wxValue = this.clipToBounds(this.wxValue)),
        (this.value = this.clipToPlottingBounds(this.value)));
    }),
    (i.prototype.getClickZone = function (t) {
      'top' === this.labelSide ? (this.isInTickZone = t.y <= 10) : (this.isInTickZone = t.y >= 0);
    }),
    (i.prototype.findNearestTick = function (t) {
      var i,
        e,
        s,
        h,
        n,
        o,
        r,
        a,
        l,
        u,
        c = t.x,
        p = Number.MAX_VALUE;
      if (
        (this.longTickStep > 0 &&
          ((r = this.longTickMin), (a = this.longTickMax), (o = this.longTickStep)),
        this.shortTickStep > 0 &&
          ((r = this.shortTickMin), (a = this.shortTickMax), (o = this.shortTickStep)),
        this.snapToStep && (o = this.snapStep),
        this.snapToArray)
      )
        for (e = 0, s = this.snapArray.length; e < s; e++)
          ((h = this.getxPix(this.snapArray[e])),
            (n = Math.abs(c - h)) < p && ((p = n), (l = h), (u = this.snapArray[e])));
      else if (this.shortTickStep > 0 || this.longTickStep > 0 || this.snapToStep)
        for (i = r; i <= a; i += o)
          ((h = this.getxPix(i)), (n = Math.abs(c - h)) < p && ((p = n), (l = h), (u = i)));
      else ((l = c), (u = this.getxFromPix(c)));
      return { wxValue: l, value: u };
    }),
    (i.prototype.updateKnobPosition = function () {
      (this.knob.setAttribute('transform', 'translate(' + parseInt(this.wxValue, 10) + ', 0)'),
        this.alwaysShowKnob || this.showKnob(this.value >= this.min && this.value <= this.max));
    }),
    (i.prototype.getxPix = function (t) {
      return Math.round((this.width * (t - this.min)) / this.span);
    }),
    (i.prototype.getxFromPix = function (t) {
      return this.min + (this.span * t) / this.width;
    }),
    (i.prototype.resizeBBox = function () {
      (this.bBox.setAttribute('x', -this.bBoxXOffset),
        this.bBox.setAttribute('y', -15),
        this.bBox.setAttribute('width', this.width + 2 * this.bBoxXOffset),
        this.bBox.setAttribute('height', 40));
    }),
    (i.prototype.getMousePosition = function (t) {
      t = t || window.event;
      var i = this.bBox.getBoundingClientRect(),
        e = this.tool.svg.createSVGPoint();
      return (
        (e.x = Math.floor(t.clientX - i.left - this.bBoxXOffset)),
        (e.y = Math.floor(t.clientY - i.top)),
        { x: e.x, y: e.y }
      );
    }),
    (i.prototype.finalize = function () {
      (this.toFront(this.knob),
        this.addBBox(),
        this.resizeBBox(),
        this.bindEvents(),
        this.addAriaAttributes());
    }),
    i
  );
});
