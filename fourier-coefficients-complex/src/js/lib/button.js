define(['require', 'utils', 'component'], function (t) {
  'use strict';
  function i(t, i, h, n) {
    (s.call(this, t, i, h, n),
      (this.type = 'button'),
      (this.isPressed = !1),
      (this.background = e.createRect(this.node, 0, 0, h, n, 'button-background')),
      (this.leftBorder = e.createLine(this.node, 0, n, 0, 0, 'button-light-border')),
      (this.topBorder = e.createLine(this.node, 0, 0, h, 0, 'button-light-border')),
      (this.rightBorder = e.createLine(this.node, h, 0, h, n, 'button-dark-border')),
      (this.bottomBorder = e.createLine(this.node, h, n, 0, n, 'button-dark-border')),
      (this.xt = h / 2),
      (this.yt = n / 2),
      (this.tSpans = []),
      (this.label = e.createText(this.node, this.xt, this.yt, '', 'button-label')),
      this.label.setAttribute('dy', '0.35em'));
  }
  var e = t('utils'),
    s = t('component');
  return (
    (i.prototype = Object.create(s.prototype)),
    (i.prototype.addText = function () {
      var t = e.createStyledText(this.label, arguments[0]);
      (2 === arguments.length && t.setAttribute('class', arguments[1]), this.tSpans.push(t));
    }),
    (i.prototype.setText = function (t, i) {
      ((this.tSpans[t].textContent = i),
        '||' === i
          ? this.label.setAttribute('dy', '0.25em')
          : this.label.setAttribute('dy', '0.35em'));
    }),
    (i.prototype.setClass = function (t, i) {
      this.tSpans[t].setAttribute('class', i);
    }),
    (i.prototype.bindEvents = function () {
      ((this.pointerDown = this.pointerDown.bind(this)),
        (this.pointerUp = this.pointerUp.bind(this)),
        (this.focusIn = this.focusIn.bind(this)),
        (this.focusOut = this.focusOut.bind(this)),
        this.bBox.addEventListener('pointerdown', this.pointerDown, !1),
        this.bBox.addEventListener(
          'keydown',
          function (t) {
            this.keyDownUp(t, !0);
          }.bind(this),
          !1,
        ),
        this.bBox.addEventListener(
          'keyup',
          function (t) {
            this.keyDownUp(t, !1);
          }.bind(this),
          !1,
        ),
        this.bBox.addEventListener('focusin', this.focusIn, !1),
        this.bBox.addEventListener('focusout', this.focusOut, !1));
    }),
    (i.prototype.pointerDown = function (t) {
      if (
        (this.disableAllTouchEvents(),
        (t = t || window.event),
        !this.detectLeftButton(t) || !t.isPrimary)
      )
        return (this.cancelBubble(t), void this.cancelDefaultAction(t));
      ((this.tool.pointerEvent = !0),
        (this.isPressed = !0),
        this.press(),
        document.addEventListener('pointerup', this.pointerUp, !1));
    }),
    (i.prototype.pointerUp = function (t) {
      ((t = t || window.event),
        (this.isPressed = !1),
        this.unpress(),
        this.fireEvent('click', this),
        document.removeEventListener('pointerup', this.pointerUp, !1),
        this.enableAllTouchEvents());
    }),
    (i.prototype.keyDownUp = function (t, i) {
      var s,
        h = e.KEYS;
      switch (((t = t || window.event), (s = t.keyCode))) {
        case h.ENTER:
        case h.SPACE:
          i ? this.press() : (this.unpress(), this.fireEvent('click', this));
          break;
        case h.TAB:
          this.tool.focusOutline ||
            (this.tool.focusOutlineVisibility(!0),
            this.cancelBubble(t),
            this.cancelDefaultAction(t));
      }
      s !== h.TAB && this.cancelDefaultAction(t);
    }),
    (i.prototype.press = function () {
      (this.leftBorder.setAttribute('class', 'button-dark-border'),
        this.topBorder.setAttribute('class', 'button-dark-border'),
        this.rightBorder.setAttribute('class', 'button-light-border'),
        this.bottomBorder.setAttribute('class', 'button-light-border'),
        this.label.setAttribute('x', this.xt + 1),
        this.label.setAttribute('y', this.yt + 1));
    }),
    (i.prototype.unpress = function () {
      (this.leftBorder.setAttribute('class', 'button-light-border'),
        this.topBorder.setAttribute('class', 'button-light-border'),
        this.rightBorder.setAttribute('class', 'button-dark-border'),
        this.bottomBorder.setAttribute('class', 'button-dark-border'),
        this.label.setAttribute('x', this.xt),
        this.label.setAttribute('y', this.yt));
    }),
    (i.prototype.addAriaAttributes = function () {
      var t;
      ('string' == typeof this.ariaLabel
        ? this.bBox.setAttribute('aria-label', this.ariaLabel)
        : ((t = e.uniqueId('button-label-')),
          this.label.setAttribute('id', t),
          this.bBox.setAttribute('aria-labelledby', t)),
        this.bBox.setAttribute('role', 'button'));
    }),
    (i.prototype.finalize = function () {
      (this.addBBox(!0), this.bindEvents(), this.addAriaAttributes());
    }),
    i
  );
});
