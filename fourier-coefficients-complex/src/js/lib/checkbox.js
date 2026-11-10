define(['require', 'utils', 'component'], function (t) {
  'use strict';
  function i(t, i, h, n) {
    (s.call(this, t, i, h, n),
      (this.type = 'checkbox'),
      (this.isChecked = !1),
      (this.backSquare = e.createRect(this.node, 0, 0, 12, 12, 'checkbox-back-square')),
      (this.frontSquare = e.createRect(this.node, 2, 2, 8, 8, 'checkbox-front-square')),
      this.isChecked
        ? this.frontSquare.setAttribute('visibility', '')
        : this.frontSquare.setAttribute('visibility', 'hidden'),
      (this.tSpans = []),
      (this.label = e.createText(this.node, 20, 12, '', 'checkbox-label')));
  }
  var e = t('utils'),
    s = t('component');
  return (
    (i.prototype = Object.create(s.prototype)),
    (i.prototype.addText = function () {
      var t = e.createStyledText(this.label, arguments[0]);
      (2 === arguments.length && t.setAttribute('class', arguments[1]),
        t.setAttribute('y', 12),
        t.setAttributeNS(e.XML_NS, 'xml:space', 'preserve'),
        this.tSpans.push(t));
    }),
    (i.prototype.addSuperScript = function () {
      var t = e.createStyledText(this.label, arguments[0]);
      (2 === arguments.length && t.setAttribute('class', arguments[1]),
        t.setAttribute('dx', 2),
        t.setAttribute('y', 7),
        t.setAttributeNS(e.XML_NS, 'xml:space', 'preserve'),
        this.tSpans.push(t));
    }),
    (i.prototype.addSubScript = function () {
      var t = e.createStyledText(this.label, arguments[0]);
      (2 === arguments.length && t.setAttribute('class', arguments[1]),
        t.setAttribute('dx', 2),
        t.setAttribute('y', 15),
        t.setAttributeNS(e.XML_NS, 'xml:space', 'preserve'),
        this.tSpans.push(t));
    }),
    (i.prototype.setText = function (t, i) {
      this.tSpans[t].textContent = i;
    }),
    (i.prototype.setClass = function (t, i) {
      this.tSpans[t].setAttribute('class', i);
    }),
    (i.prototype.setFrontSquareClass = function (t) {
      this.frontSquare.setAttribute('class', t);
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
        this.isChecked
          ? this.frontSquare.setAttribute('visibility', '')
          : this.frontSquare.setAttribute('visibility', 'hidden'),
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
        this.toggle(),
        this.fireEvent('change', this),
        document.removeEventListener('pointerup', this.pointerUp, !1),
        this.enableAllTouchEvents());
    }),
    (i.prototype.keyDown = function (t) {
      var i,
        s = e.KEYS;
      ((t = t || window.event),
        (i = t.keyCode),
        i === s.SPACE
          ? (this.toggle(), this.fireEvent('change', this))
          : i === s.TAB &&
            (this.tool.focusOutline ||
              (this.tool.focusOutlineVisibility(!0),
              this.cancelBubble(t),
              this.cancelDefaultAction(t))),
        i !== s.TAB && this.cancelDefaultAction(t));
    }),
    (i.prototype.toggle = function () {
      ((this.isChecked = !this.isChecked),
        this.isChecked
          ? this.frontSquare.setAttribute('visibility', '')
          : this.frontSquare.setAttribute('visibility', 'hidden'),
        this.bBox.setAttribute('aria-checked', this.isChecked));
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
        : ((t = e.uniqueId('checkbox-label-')),
          this.label.setAttribute('id', t),
          this.bBox.setAttribute('aria-labelledby', t)),
        this.bBox.setAttribute('aria-checked', this.isChecked),
        this.bBox.setAttribute('role', 'checkbox'));
    }),
    (i.prototype.finalize = function () {
      (this.addBBox(!0), this.resizeBBox(), this.bindEvents(), this.addAriaAttributes());
    }),
    i
  );
});
