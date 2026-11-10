define(['require', 'utils', 'slider'], function (t) {
  'use strict';
  function i(t, i, h, n) {
    (s.call(this, t, i, h, n),
      (this.type = 'vslider'),
      (this.orientation = 'vertical'),
      (this.labelSide = 'left'),
      (this.wxAxis = 0),
      (this.wxTrack = this.wxAxis + 5),
      (this.wyValue = 0),
      (this.bBoxXOffset = 10),
      (this.axis = e.createLine(
        this.node,
        this.wxAxis,
        0,
        this.wxAxis,
        this.height,
        'slider-axis',
      )),
      (this.darkTrack = e.createLine(
        this.node,
        this.wxTrack + 4,
        0,
        this.wxTrack + 4,
        this.height,
        'slider-dark-track',
      )),
      (this.lightTrack = e.createLine(
        this.node,
        this.wxTrack + 5,
        0,
        this.wxTrack + 5,
        this.height,
        'slider-light-track',
      )),
      (this.knob = document.createElementNS(e.SVG_NS, 'g')),
      this.knob.setAttribute('pointer-events', 'visible'),
      (this.knobLine3 = e.createLine(
        this.knob,
        this.wxTrack - 3,
        this.wyValue,
        this.wxTrack + 7,
        this.wyValue,
        'slider-knob-body2',
      )),
      (this.knobLine1a = e.createLine(
        this.knob,
        this.wxTrack - 3,
        this.wyValue + 0.5,
        this.wxTrack + 6.75,
        this.wyValue + 0.5,
        'slider-knob-body',
      )),
      (this.knobLine2a = e.createLine(
        this.knob,
        this.wxTrack - 3,
        this.wyValue - 0.5,
        this.wxTrack + 6.75,
        this.wyValue - 0.5,
        'slider-knob-body2',
      )),
      (this.knobLine1 = e.createLine(
        this.knob,
        this.wxTrack - 2,
        this.wyValue + 1,
        this.wxTrack + 6.5,
        this.wyValue + 1,
        'slider-knob-body',
      )),
      (this.knobLine2 = e.createLine(
        this.knob,
        this.wxTrack - 2,
        this.wyValue - 1,
        this.wxTrack + 6.5,
        this.wyValue - 1,
        'slider-knob-body2',
      )),
      (this.knobLine1b = e.createLine(
        this.knob,
        this.wxTrack - 1,
        this.wyValue + 1.5,
        this.wxTrack + 6.25,
        this.wyValue + 1.5,
        'slider-knob-body',
      )),
      (this.knobLine2b = e.createLine(
        this.knob,
        this.wxTrack - 1,
        this.wyValue - 1.5,
        this.wxTrack + 6.25,
        this.wyValue - 1.5,
        'slider-knob-body2',
      )),
      (this.knobLine4 = e.createLine(
        this.knob,
        this.wxTrack,
        this.wyValue + 2,
        this.wxTrack + 6,
        this.wyValue + 2,
        'slider-knob-body',
      )),
      (this.knobLine5 = e.createLine(
        this.knob,
        this.wxTrack,
        this.wyValue - 2,
        this.wxTrack + 6,
        this.wyValue - 2,
        'slider-knob-body2',
      )),
      (this.knobLine4b = e.createLine(
        this.knob,
        this.wxTrack + 1,
        this.wyValue + 2.5,
        this.wxTrack + 5.75,
        this.wyValue + 2.5,
        'slider-knob-body',
      )),
      (this.knobLine5b = e.createLine(
        this.knob,
        this.wxTrack + 1,
        this.wyValue - 2.5,
        this.wxTrack + 5.75,
        this.wyValue - 2.5,
        'slider-knob-body2',
      )),
      (this.knobLine6 = e.createLine(
        this.knob,
        this.wxTrack + 2,
        this.wyValue + 3,
        this.wxTrack + 5.5,
        this.wyValue + 3,
        'slider-knob-body',
      )),
      (this.knobLine7 = e.createLine(
        this.knob,
        this.wxTrack + 3,
        this.wyValue - 3.5,
        this.wxTrack + 5.25,
        this.wyValue - 3.5,
        'slider-knob-body2',
      )),
      (this.knobLine6b = e.createLine(
        this.knob,
        this.wxTrack + 3,
        this.wyValue + 3.5,
        this.wxTrack + 5.25,
        this.wyValue + 3.5,
        'slider-knob-body',
      )),
      (this.knobLine7b = e.createLine(
        this.knob,
        this.wxTrack + 2,
        this.wyValue - 3,
        this.wxTrack + 5.5,
        this.wyValue - 3,
        'slider-knob-body2',
      )),
      (this.knobLine8 = e.createLine(
        this.knob,
        this.wxTrack + 4,
        this.wyValue + 4,
        this.wxTrack + 5,
        this.wyValue + 4,
        'slider-knob-body',
      )),
      (this.knobLine9 = e.createLine(
        this.knob,
        this.wxTrack + 4,
        this.wyValue - 4,
        this.wxTrack + 5,
        this.wyValue - 4,
        'slider-knob-body2',
      )),
      (this.knobLine8b = e.createLine(
        this.knob,
        this.wxTrack + 4.5,
        this.wyValue + 4.5,
        this.wxTrack + 5,
        this.wyValue + 4.5,
        'slider-knob-body',
      )),
      (this.knobLine9b = e.createLine(
        this.knob,
        this.wxTrack + 4.5,
        this.wyValue - 4.5,
        this.wxTrack + 5,
        this.wyValue - 4.5,
        'slider-knob-body2',
      )),
      (this.knobPointer = e.createLine(
        this.knob,
        this.wxTrack - 4,
        this.wyValue,
        this.wxTrack + 6,
        this.wyValue,
        'slider-knob-pointer',
      )),
      (this.knobBBox = e.createRect(
        this.knob,
        this.wxAxis,
        this.wyValue - 10,
        14,
        20,
        'bBox hidden',
      )),
      this.knobBBox.setAttribute('touch-action', 'none'),
      this.knobBBox.setAttribute('tabindex', 0),
      this.knobBBox.setAttribute('focusable', !0),
      this.node.appendChild(this.knob));
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
          ((i = this.getyPix(t)),
            i < 0 && (i = 0),
            'left' === this.labelSide
              ? e.createLine(
                  this.shortTicks,
                  this.wxAxis,
                  i,
                  this.wxAxis - 2,
                  i,
                  'slider-short-ticks',
                )
              : e.createLine(
                  this.shortTicks,
                  this.wxAxis,
                  i,
                  this.wxAxis + 2,
                  i,
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
          ((i = this.getyPix(t)),
            i < 0 && (i = 0),
            'left' === this.labelSide
              ? e.createLine(
                  this.longTicks,
                  this.wxAxis,
                  i,
                  this.wxAxis - 4,
                  i,
                  'slider-long-ticks',
                )
              : e.createLine(
                  this.longTicks,
                  this.wxAxis,
                  i,
                  this.wxAxis + 4,
                  i,
                  'slider-long-ticks',
                ));
    }),
    (i.prototype.setAutomaticLabels = function () {
      var t, i, h, n;
      if (
        (s.prototype.setAutomaticLabels.apply(this, arguments),
        (i =
          'left' === this.labelSide
            ? this.wxAxis + this.labelXOffset
            : this.wxAxis - this.labelXOffset),
        (this.labels = e.createGroup(this.node, this.labels)),
        this.labelStep > 0)
      )
        for (t = this.labelMin; t <= this.labelMax; t += this.labelStep)
          ((h = this.getyPix(t)),
            (n =
              Math.abs(t) < 1e-5 && !this.zeroHasDecimalPoint
                ? '0'
                : t.toFixed(this.labelDecimalDigits)),
            'left' === this.labelSide
              ? e.createText(this.labels, i, h, n, 'vslider-labels-left')
              : e.createText(this.labels, i, h, n, 'vslider-labels-right'));
    }),
    (i.prototype.setLabels = function () {
      var t, i, s;
      (1 === arguments.length
        ? (s = arguments[0])
        : 2 === arguments.length && ((s = arguments[0]), (this.labelXOffset = arguments[1])),
        (t =
          'left' === this.labelSide
            ? this.wxAxis + this.labelXOffset
            : this.wxAxis - this.labelXOffset),
        (this.labels = e.createGroup(this.node, this.labels)));
      for (var h = 0, n = s.length; h < n; h++)
        ((i = this.getyPix(s[h].y)),
          e.createText(this.labels, t, i, s[h].str, 'vslider-labels-' + this.labelSide));
    }),
    (i.prototype.setText = function () {
      var t, i;
      (1 === arguments.length
        ? ((t = arguments[0]), (i = 'vslider-text'))
        : 2 === arguments.length
          ? ((t = arguments[0]), (i = arguments[1]))
          : 3 === arguments.length &&
            ((t = arguments[0]), (i = arguments[1]), (this.textYOffset = arguments[2])),
        (this.text = e.createText(this.node, this.wxTrack, this.height + this.textYOffset, t, i)));
    }),
    (i.prototype.setValue = function () {
      var t;
      (1 === arguments.length
        ? ((this.value = arguments[0]), (t = 'vslider-value-text'))
        : 2 === arguments.length
          ? ((this.value = arguments[0]),
            (this.valueDecimalDigits = arguments[1]),
            (t = 'vslider-value-text'))
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
                (this.valueTextYOffset = arguments[4])),
        void 0 === this.valueText &&
          (this.valueText = e.createText(this.node, this.wxTrack, this.valueTextYOffset, '', t)),
        this.keepValueInBounds && (this.value = this.clipToPlottingBounds(this.value)),
        (this.wyValue = this.clipToBounds(this.getyPix(this.value))),
        this.updateKnobPosition(),
        this.updateValueText());
    }),
    (i.prototype.getValue = function (t) {
      var i;
      (this.isInTickZone || this.snapToTicks || this.snapToStep || this.snapToArray
        ? ((i = this.findNearestTick(t)), (this.wyValue = i.wyValue), (this.value = i.value))
        : ((this.wyValue = t.y), (this.value = this.getyFromPix(this.wyValue))),
        (this.wyValue = this.clipToBounds(this.wyValue)),
        (this.value = this.clipToPlottingBounds(this.value)));
    }),
    (i.prototype.getClickZone = function (t) {
      'left' === this.labelSide
        ? t.x <= 10
          ? (this.isInTickZone = !0)
          : (this.isInTickZone = !1)
        : t.x >= 0
          ? (this.isInTickZone = !0)
          : (this.isInTickZone = !1);
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
        c = t.y,
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
          ((h = this.getyPix(this.snapArray[e])),
            (n = Math.abs(c - h)) < p && ((p = n), (l = h), (u = this.snapArray[e])));
      else if (this.shortTickStep > 0 || this.longTickStep > 0 || this.snapToStep)
        for (i = r; i <= a; i += o)
          ((h = this.getyPix(i)), (n = Math.abs(c - h)) < p && ((p = n), (l = h), (u = i)));
      else ((l = c), (u = this.getyFromPix(c)));
      return { wyValue: l, value: u };
    }),
    (i.prototype.updateKnobPosition = function () {
      (this.knob.setAttribute('transform', 'translate(0,' + parseInt(this.wyValue, 10) + ')'),
        this.alwaysShowKnob || this.showKnob(this.value >= this.min && this.value <= this.max));
    }),
    (i.prototype.getyPix = function (t) {
      return Math.round((this.height * (this.max - t)) / this.span);
    }),
    (i.prototype.getyFromPix = function (t) {
      return this.max - (this.span * t) / this.height;
    }),
    (i.prototype.resizeBBox = function () {
      (this.bBox.setAttribute('x', -15),
        this.bBox.setAttribute('y', -this.bBoxXOffset),
        this.bBox.setAttribute('width', 40),
        this.bBox.setAttribute('height', this.height + 2 * this.bBoxXOffset));
    }),
    (i.prototype.getMousePosition = function (t) {
      t = t || window.event;
      var i = this.bBox.getBoundingClientRect(),
        e = this.tool.svg.createSVGPoint();
      return (
        (e.x = Math.floor(t.clientX - i.left)),
        (e.y = Math.floor(t.clientY - i.top - this.bBoxXOffset)),
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
