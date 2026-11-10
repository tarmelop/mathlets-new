/*
 * Part of the MIT Mathlets shared library (https://mathlets.org/).
 * Original code by the MIT Mathlets authors; extracted from the minified
 * common.js and auto-formatted (variable names are the minifier's).
 * Licensed under CC BY-NC-SA 3.0 — see LICENSE.md at the repo root.
 */
define(['require', 'utils', 'component', 'a11y'], function (t) {
  'use strict';
  function i(t, i, h, n) {
    (s.call(this, t, i, h, n),
      (this.type = 'radiobutton'),
      (this.isChecked = !1),
      (this.group = null),
      (this.backCircle = e.createCircle(this.node, 0, 0, 6, 'radiobutton-back-circle')),
      (this.frontCircle = e.createCircle(this.node, 0, 0, 4, 'radiobutton-front-circle')),
      this.isChecked
        ? this.frontCircle.setAttribute('visibility', '')
        : this.frontCircle.setAttribute('visibility', 'hidden'),
      (this.tSpans = []),
      (this.label = e.createText(this.node, 14, 6, '', 'radiobutton-label')));
  }
  var e = t('utils'),
    s = t('component'),
    h = t('a11y');
  return (
    (i.prototype = Object.create(s.prototype)),
    (i.prototype.addText = function () {
      var t = e.createStyledText(this.label, arguments[0]);
      (2 === arguments.length && t.setAttribute('class', arguments[1]), this.tSpans.push(t));
    }),
    (i.prototype.setText = function (t, i) {
      this.tSpans[t].textContent = i;
    }),
    (i.prototype.setClass = function (t, i) {
      this.tSpans[t].setAttribute('class', i);
    }),
    (i.prototype.setFrontCircleClass = function (t) {
      this.frontCircle.setAttribute('class', t);
    }),
    (i.prototype.bindEvents = function () {
      ((this.pointerDown = this.pointerDown.bind(this)),
        (this.pointerUp = this.pointerUp.bind(this)),
        (this.keyDown = this.keyDown.bind(this)),
        (this.focusIn = this.focusIn.bind(this)),
        (this.focusOut = this.focusOut.bind(this)),
        this.bBox.addEventListener('pointerdown', this.pointerDown, !1),
        this.bBox.addEventListener('keydown', this.keyDown, !1),
        this.bBox.addEventListener('focusin', this.focusIn, !1),
        this.bBox.addEventListener('focusout', this.focusOut, !1));
    }),
    (i.prototype.setChecked = function (t) {
      ((this.isChecked = t),
        t
          ? this.frontCircle.setAttribute('visibility', '')
          : this.frontCircle.setAttribute('visibility', 'hidden'),
        this.bBox && this.bBox.setAttribute('aria-checked', this.isChecked));
    }),
    (i.prototype.pointerDown = function (t) {
      if (
        (this.disableAllTouchEvents(),
        (t = t || window.event),
        !this.detectLeftButton(t) || !t.isPrimary)
      )
        return (this.cancelBubble(t), void this.cancelDefaultAction(t));
      ((this.tool.pointerEvent = !0), document.addEventListener('pointerup', this.pointerUp, !1));
    }),
    (i.prototype.pointerUp = function (t) {
      ((t = t || window.event),
        this.focus(),
        this.fireEvent('change', this.group),
        document.removeEventListener('pointerup', this.pointerUp, !1),
        this.enableAllTouchEvents());
    }),
    (i.prototype.keyDown = function (t) {
      var i,
        s = e.KEYS,
        h = this.currentIndex();
      switch (((t = t || window.event), (i = t.keyCode))) {
        case s.LEFT:
        case s.UP:
          (this.focusPrevious(h), this.fireEvent('change', this.group));
          break;
        case s.RIGHT:
        case s.DOWN:
          (this.focusNext(h), this.fireEvent('change', this.group));
          break;
        case s.TAB:
          this.tool.focusOutline ||
            (this.tool.focusOutlineVisibility(!0),
            this.cancelBubble(t),
            this.cancelDefaultAction(t));
      }
      i !== s.TAB && this.cancelDefaultAction(t);
    }),
    (i.prototype.currentIndex = function () {
      return this.group.radioButtons.indexOf(this);
    }),
    (i.prototype.focusPrevious = function (t) {
      var i = this.group.radioButtons.length - 1,
        e = 0 === t ? i : t - 1,
        s = this.group.radioButtons[e];
      (this.select(e),
        this.bBox.setAttribute('tabindex', -1),
        this.bBox.setAttribute('focusable', !1),
        s.bBox.setAttribute('tabindex', 0),
        s.bBox.setAttribute('focusable', !0),
        h.element.focus(s.bBox));
    }),
    (i.prototype.focusNext = function (t) {
      var i = this.group.radioButtons.length - 1,
        e = t === i ? 0 : t + 1,
        s = this.group.radioButtons[e];
      (this.select(e),
        this.bBox.setAttribute('tabindex', -1),
        this.bBox.setAttribute('focusable', !1),
        s.bBox.setAttribute('tabindex', 0),
        s.bBox.setAttribute('focusable', !0),
        h.element.focus(s.bBox));
    }),
    (i.prototype.focus = function () {
      for (var t = this.group.radioButtons, i = 0, e = t.length; i < e; i++)
        (t[i].setChecked(!1),
          t[i].bBox.setAttribute('tabindex', -1),
          t[i].bBox.setAttribute('focusable', !1));
      (this.setChecked(!0),
        this.bBox.setAttribute('tabindex', 0),
        this.bBox.setAttribute('focusable', !0),
        h.element.focus(this.bBox));
    }),
    (i.prototype.select = function (t) {
      for (var i = this.group.radioButtons, e = 0, s = i.length; e < s; e++) i[e].setChecked(!1);
      i[t].setChecked(!0);
    }),
    (i.prototype.resizeBBox = function () {
      var t = parseFloat(this.bBox.getAttribute('x')) - 6,
        i = parseFloat(this.bBox.getAttribute('y')) - 3,
        e = parseFloat(this.bBox.getAttribute('width')) + 10,
        s = parseFloat(this.bBox.getAttribute('height')) + 5;
      (this.bBox.setAttribute('x', t),
        this.bBox.setAttribute('y', i),
        this.bBox.setAttribute('width', e),
        this.bBox.setAttribute('height', s));
    }),
    (i.prototype.addAriaAttributes = function () {
      var t;
      ('string' == typeof this.ariaLabel
        ? this.bBox.setAttribute('aria-label', this.ariaLabel)
        : ((t = e.uniqueId('radio-label-')),
          this.label.setAttribute('id', t),
          this.bBox.setAttribute('aria-labelledby', t)),
        this.bBox.setAttribute('aria-checked', this.isChecked),
        this.bBox.setAttribute('role', 'radio'));
    }),
    (i.prototype.finalize = function () {
      (this.addBBox(!0),
        this.resizeBBox(),
        this.isChecked ||
          (this.bBox.setAttribute('tabindex', -1), this.bBox.setAttribute('focusable', !1)),
        this.bindEvents(),
        this.addAriaAttributes());
    }),
    i
  );
});
