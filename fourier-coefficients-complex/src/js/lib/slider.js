/*
 * Part of the MIT Mathlets shared library (https://mathlets.org/).
 * Original code by the MIT Mathlets authors; extracted from the minified
 * common.js and auto-formatted (variable names are the minifier's).
 * Licensed under CC BY-NC-SA 3.0 — see LICENSE.md at the repo root.
 */
define(['require', 'utils', 'component', 'a11y'], function (t) {
  'use strict';
  function i(t, i, e, h) {
    (s.call(this, t, i, e, h),
      (this.orientation = 'horizontal'),
      (this.min = 0),
      (this.max = 10),
      (this.span = 10),
      (this.shortTickStep = -1),
      (this.shortTickMin = this.min),
      (this.shortTickMax = this.max),
      (this.longTickStep = -1),
      (this.longTickMin = this.min),
      (this.longTickMax = this.max),
      (this.labelStep = -1),
      (this.labelDecimalDigits = 1),
      (this.zeroHasDecimalPoint = !1),
      (this.labelMin = this.min),
      (this.labelMax = this.max),
      (this.labelXOffset = -10),
      (this.labelYOffset = -10),
      (this.textXOffset = -10),
      (this.textYOffset = 10),
      (this.value = 0),
      (this.valueDecimalDigits = 2),
      (this.valueHasDegree = !1),
      (this.valueTextXOffset = 10),
      (this.valueTextYOffset = -10),
      (this.valueHasPrefix = !1),
      (this.valuePrefix = ''),
      (this.valueHasSuffix = !1),
      (this.valueSuffix = ''),
      (this.mouseIsDragged = !1),
      (this.isInTickZone = !1),
      (this.isSelected = !1),
      (this.snapToTicks = !1),
      (this.snapToStep = !1),
      (this.snapStep = 0),
      (this.snapToArray = !1),
      (this.snapArray = []),
      (this.hasScale = !1),
      (this.scale = 1),
      (this.hasLogScale = !1),
      (this.alwaysShowKnob = !0),
      (this.keepValueInBounds = !0));
  }
  var e = t('utils'),
    s = t('component'),
    h = t('a11y');
  return (
    (i.prototype = Object.create(s.prototype)),
    (i.prototype.showAxis = function (t) {
      t
        ? this.axis.setAttribute('visibility', 'visible')
        : this.axis.setAttribute('visibility', 'hidden');
    }),
    (i.prototype.showDarkTrack = function (t) {
      t
        ? this.darkTrack.setAttribute('visibility', 'visible')
        : this.darkTrack.setAttribute('visibility', 'hidden');
    }),
    (i.prototype.showLightTrack = function (t) {
      t
        ? this.lightTrack.setAttribute('visibility', 'visible')
        : this.lightTrack.setAttribute('visibility', 'hidden');
    }),
    (i.prototype.showKnobBody = function (t) {
      var i = t ? 'visible' : 'hidden';
      [
        this.knobLine1,
        this.knobLine1a,
        this.knobLine1b,
        this.knobLine2,
        this.knobLine2a,
        this.knobLine2b,
        this.knobLine3,
        this.knobLine4,
        this.knobLine4b,
        this.knobLine5,
        this.knobLine5b,
        this.knobLine6,
        this.knobLine6b,
        this.knobLine7,
        this.knobLine7b,
        this.knobLine8,
        this.knobLine8b,
        this.knobLine9,
        this.knobLine9b,
      ].forEach(function (t) {
        t.setAttribute('visibility', i);
      });
    }),
    (i.prototype.showKnobPointer = function (t) {
      t
        ? this.knobPointer.setAttribute('visibility', 'visible')
        : this.knobPointer.setAttribute('visibility', 'hidden');
    }),
    (i.prototype.showKnob = function (t) {
      t
        ? this.knob.setAttribute('visibility', 'visible')
        : this.knob.setAttribute('visibility', 'hidden');
    }),
    (i.prototype.showLabels = function (t) {
      t
        ? this.labels.setAttribute('visibility', 'visible')
        : this.labels.setAttribute('visibility', 'hidden');
    }),
    (i.prototype.showText = function (t) {
      t
        ? this.text.setAttribute('visibility', 'visible')
        : this.text.setAttribute('visibility', 'hidden');
    }),
    (i.prototype.showValue = function (t) {
      t
        ? this.valueText.setAttribute('visibility', 'visible')
        : this.valueText.setAttribute('visibility', 'hidden');
    }),
    (i.prototype.setPlottingBounds = function (t, i) {
      ((this.min = t), (this.max = i), (this.span = this.max - this.min));
    }),
    (i.prototype.setKnobBody = function (t, i) {
      var e = [
          this.knobLine1,
          this.knobLine1a,
          this.knobLine1b,
          this.knobLine4,
          this.knobLine4b,
          this.knobLine6,
          this.knobLine6b,
          this.knobLine8,
          this.knobLine8b,
        ],
        s = [
          this.knobLine2,
          this.knobLine2a,
          this.knobLine2b,
          this.knobLine3,
          this.knobLine5,
          this.knobLine5b,
          this.knobLine7,
          this.knobLine7b,
          this.knobLine9,
          this.knobLine9b,
        ];
      (e.forEach(function (i) {
        i.setAttribute('class', t);
      }),
        s.forEach(function (t) {
          t.setAttribute('class', i);
        }));
    }),
    (i.prototype.setKnobPointer = function (t) {
      this.knobPointer.setAttribute('class', t);
    }),
    (i.prototype.setShortTicks = function () {
      1 === arguments.length
        ? ((this.shortTickStep = arguments[0]),
          (this.shortTickMin = this.min),
          (this.shortTickMax = this.max))
        : 3 === arguments.length &&
          ((this.shortTickStep = arguments[0]),
          (this.shortTickMin = arguments[1]),
          (this.shortTickMax = arguments[2]));
    }),
    (i.prototype.setLongTicks = function () {
      1 === arguments.length
        ? ((this.longTickStep = arguments[0]),
          (this.longTickMin = this.min),
          (this.longTickMax = this.max))
        : 3 === arguments.length &&
          ((this.longTickStep = arguments[0]),
          (this.longTickMin = arguments[1]),
          (this.longTickMax = arguments[2]));
    }),
    (i.prototype.setAutomaticLabels = function () {
      2 === arguments.length
        ? ((this.labelStep = arguments[0]),
          (this.labelDecimalDigits = arguments[1]),
          (this.labelMin = this.min),
          (this.labelMax = this.max))
        : 3 === arguments.length
          ? ((this.labelStep = arguments[0]),
            (this.labelDecimalDigits = arguments[1]),
            (this.zeroHasDecimalPoint = arguments[2]),
            (this.labelMin = this.min),
            (this.labelMax = this.max))
          : 5 === arguments.length
            ? ((this.labelStep = arguments[0]),
              (this.labelDecimalDigits = arguments[1]),
              (this.zeroHasDecimalPoint = arguments[2]),
              (this.labelMin = arguments[3]),
              (this.labelMax = arguments[4]))
            : 6 === arguments.length &&
              ((this.labelStep = arguments[0]),
              (this.labelDecimalDigits = arguments[1]),
              (this.zeroHasDecimalPoint = arguments[2]),
              (this.labelMin = arguments[3]),
              (this.labelMax = arguments[4]),
              'horizontal' === this.orientation
                ? (this.labelYOffset = arguments[5])
                : 'vertical' === this.orientation && (this.labelXOffset = arguments[5]));
    }),
    (i.prototype.setScale = function (t) {
      ((this.hasScale = !0), (this.scale = t));
    }),
    (i.prototype.setValuePrefix = function (t) {
      ((this.valueHasPrefix = !0), (this.valuePrefix = t));
    }),
    (i.prototype.setValueSuffix = function (t) {
      ((this.valueHasSuffix = !0), (this.valueSuffix = t));
    }),
    (i.prototype.clipToPlottingBounds = function (t) {
      return t < this.min ? this.min : t > this.max ? this.max : t;
    }),
    (i.prototype.clipToBounds = function (t) {
      return 'horizontal' === this.orientation
        ? t > this.width
          ? this.width
          : t < 0
            ? 0
            : t
        : t > this.height
          ? this.height
          : t < 0
            ? 0
            : t;
    }),
    (i.prototype.findAdjacentTick = function (t, i) {
      var e,
        s,
        h = this.snapArray.length - 1;
      return (
        this.longTickStep > 0 && (e = this.longTickStep),
        this.shortTickStep > 0 && (e = this.shortTickStep),
        this.snapToStep && (e = this.snapStep),
        this.snapToArray
          ? ((s = this.snapArray.indexOf(t)),
            i ? this.snapArray[s < h ? s + 1 : s] : this.snapArray[s > 0 ? s - 1 : s])
          : i
            ? t + e
            : t - e
      );
    }),
    (i.prototype.updateValueText = function () {
      var t, i;
      ((t = this.hasScale
        ? this.scale * this.value
        : this.hasLogScale
          ? Math.pow(10, this.value)
          : this.value),
        (i = t.toFixed(this.valueDecimalDigits)),
        this.valueHasDegree && (i += e.STR.degree),
        this.valueHasPrefix && (i = this.valuePrefix + i),
        this.valueHasSuffix && (i += this.valueSuffix),
        (this.valueText.textContent = i),
        this.knobBBox.setAttribute('aria-valuenow', i));
    }),
    (i.prototype.bindEvents = function () {
      ((this.pointerDown = this.pointerDown.bind(this)),
        (this.pointerMove = this.pointerMove.bind(this)),
        (this.pointerUp = this.pointerUp.bind(this)),
        (this.keyDown = this.keyDown.bind(this)),
        (this.keyUp = this.keyUp.bind(this)),
        (this.focusIn = this.focusIn.bind(this)),
        (this.focusOut = this.focusOut.bind(this)),
        this.bBox.addEventListener('pointerdown', this.pointerDown, !1),
        'doubleslider' !== this.type
          ? (this.knobBBox.addEventListener('keydown', this.keyDown, !1),
            this.knobBBox.addEventListener('keyup', this.keyUp, !1),
            this.knobBBox.addEventListener('focusin', this.focusIn, !1),
            this.knobBBox.addEventListener('focusout', this.focusOut, !1))
          : (this.leftKnobBBox.addEventListener('keydown', this.keyDown, !1),
            this.leftKnobBBox.addEventListener('keyup', this.keyUp, !1),
            this.leftKnobBBox.addEventListener('focusin', this.focusIn, !1),
            this.leftKnobBBox.addEventListener('focusout', this.focusOut, !1),
            this.rightKnobBBox.addEventListener('keydown', this.keyDown, !1),
            this.rightKnobBBox.addEventListener('keyup', this.keyUp, !1),
            this.rightKnobBBox.addEventListener('focusin', this.focusIn, !1),
            this.rightKnobBBox.addEventListener('focusout', this.focusOut, !1)));
    }),
    (i.prototype.addAriaAttributes = function () {
      var t;
      ('string' == typeof this.ariaLabel
        ? this.knobBBox.setAttribute('aria-label', this.ariaLabel)
        : 'string' == typeof this.text &&
          ((t = e.uniqueId('slider-label-')),
          this.text.setAttribute('id', t),
          this.knobBBox.setAttribute('aria-labelledby', t)),
        this.knobBBox.setAttribute('aria-orientation', this.orientation),
        this.knobBBox.setAttribute('aria-valuemin', this.min),
        this.knobBBox.setAttribute('aria-valuemax', this.max),
        this.knobBBox.setAttribute('aria-valuenow', this.value),
        this.knobBBox.setAttribute('role', 'slider'));
    }),
    (i.prototype.pointerDown = function (t) {
      var i;
      if (
        (this.disableAllTouchEvents(),
        (t = t || window.event),
        !this.detectLeftButton(t) || !t.isPrimary)
      )
        return (this.cancelBubble(t), void this.cancelDefaultAction(t));
      ((this.tool.pointerEvent = !0),
        this.fireEvent('start', this, 'pointer'),
        (this.isSelected = !0),
        (i = this.getMousePosition(t)),
        this.getClickZone(i),
        this.getValue(i),
        this.updateKnobPosition(),
        this.updateValueText(),
        'doubleslider' !== this.type
          ? h.element.focus(this.knobBBox)
          : this.x1Selected
            ? h.element.focus(this.leftKnobBBox)
            : h.element.focus(this.rightKnobBBox),
        this.fireEvent('change', this, 'pointer'),
        document.addEventListener('pointermove', this.pointerMove, !0),
        document.addEventListener('pointerup', this.pointerUp, !0),
        this.cancelBubble(t),
        this.cancelDefaultAction(t));
    }),
    (i.prototype.pointerMove = function (t) {
      var i;
      ((t = t || window.event),
        this.isSelected &&
          ((i = this.getMousePosition(t)),
          this.getValue(i),
          this.updateKnobPosition(),
          this.updateValueText(),
          this.fireEvent('change', this, 'pointer')),
        this.cancelBubble(t),
        this.cancelDefaultAction(t));
    }),
    (i.prototype.pointerUp = function (t) {
      var i;
      ((t = t || window.event),
        this.isSelected &&
          ((i = this.getMousePosition(t)),
          this.getValue(i),
          this.updateKnobPosition(),
          this.updateValueText(),
          this.fireEvent('change', this, 'pointer'),
          document.removeEventListener('pointermove', this.pointerMove, !0),
          document.removeEventListener('pointerup', this.pointerUp, !0),
          (this.isSelected = !1),
          this.fireEvent('stop', this, 'pointer')),
        this.cancelDefaultAction(t),
        this.enableAllTouchEvents());
    }),
    (i.prototype.keyDown = function (t) {
      var i,
        s,
        h = e.KEYS;
      switch (
        ((t = t || window.event),
        (i = t.keyCode),
        (s =
          'doubleslider' !== this.type
            ? {
                x: 'horizontal' === this.orientation ? this.wxValue : 10,
                y: 'horizontal' === this.orientation ? 10 : this.wyValue,
              }
            : { x: t.target === this.leftKnobBBox ? this.wx1Value : this.wx2Value, y: 10 }),
        i)
      ) {
        case h.LEFT:
        case h.DOWN:
        case h.RIGHT:
        case h.UP:
          this.isSelected || (this.fireEvent('start', this, 'keyboard'), (this.isSelected = !0));
      }
      switch (i) {
        case h.LEFT:
        case h.DOWN:
          (this.snapToTicks || this.snapToStep || this.snapToArray
            ? this.setValue(this.findAdjacentTick(this.value, !1))
            : ('horizontal' === this.orientation ? s.x-- : s.y++,
              this.getValue(s),
              this.updateKnobPosition(),
              this.updateValueText()),
            this.fireEvent('change', this, 'keyboard'));
          break;
        case h.RIGHT:
        case h.UP:
          (this.snapToTicks || this.snapToStep || this.snapToArray
            ? this.setValue(this.findAdjacentTick(this.value, !0))
            : ('horizontal' === this.orientation ? s.x++ : s.y--,
              this.getValue(s),
              this.updateKnobPosition(),
              this.updateValueText()),
            this.fireEvent('change', this, 'keyboard'));
          break;
        case h.TAB:
          this.tool.focusOutline ||
            (this.tool.focusOutlineVisibility(!0),
            this.cancelBubble(t),
            this.cancelDefaultAction(t));
      }
      i !== h.TAB && this.cancelDefaultAction(t);
    }),
    (i.prototype.keyUp = function (t) {
      var i = e.KEYS;
      switch (((t = t || window.event), t.keyCode)) {
        case i.LEFT:
        case i.DOWN:
        case i.RIGHT:
        case i.UP:
          ((this.isSelected = !1), this.fireEvent('stop', this, 'keyboard'));
      }
    }),
    i
  );
});
