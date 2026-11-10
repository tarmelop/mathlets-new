/*
 * Part of the MIT Mathlets shared library (https://mathlets.org/).
 * Original code by the MIT Mathlets authors; extracted from the minified
 * common.js and auto-formatted (variable names are the minifier's).
 * Licensed under CC BY-NC-SA 3.0 — see LICENSE.md at the repo root.
 */
define(['require', 'utils', 'pep'], function (t) {
  'use strict';
  function i(t, i, s, h) {
    ((this.type = ''),
      (this.x = void 0 === t ? 0 : t),
      (this.y = void 0 === i ? 0 : i),
      (this.width = void 0 === s ? 100 : s),
      (this.height = void 0 === h ? 100 : h),
      (this.node = document.createElementNS(e.SVG_NS, 'g')),
      this.node.setAttribute('pointer-events', 'visible'),
      this.setPosition(t, i),
      (this.eventListeners = {}));
  }
  var e = t('utils');
  return (
    t('pep'),
    (i.prototype.setPosition = function (t, i) {
      ((this.x = t),
        (this.y = i),
        this.node.setAttribute(
          'transform',
          'translate(' + parseInt(this.x, 10) + ',' + parseInt(this.y, 10) + ')',
        ));
    }),
    (i.prototype.setPosRot = function (t) {
      this.node.setAttribute('transform', t);
    }),
    (i.prototype.setSize = function (t, i) {
      ((this.width = t), (this.height = i));
    }),
    (i.prototype.setBounds = function (t, i, e, s) {
      ((this.x = t),
        (this.y = i),
        (this.width = e),
        (this.height = s),
        this.setSize(),
        this.setPosition());
    }),
    (i.prototype.addBBox = function (t) {
      var i = this.node.getBBox();
      ((this.bBox = document.createElementNS(e.SVG_NS, 'rect')),
        this.bBox.setAttribute('x', i.x),
        this.bBox.setAttribute('y', i.y),
        this.bBox.setAttribute('width', i.width),
        this.bBox.setAttribute('height', i.height),
        this.bBox.setAttribute('touch-action', 'none'),
        t
          ? (this.bBox.setAttribute('tabindex', 0),
            this.bBox.setAttribute('focusable', !0),
            this.bBox.setAttribute('class', 'bBox hidden'))
          : (this.bBox.setAttribute('tabindex', -1),
            this.bBox.setAttribute('focusable', !1),
            this.bBox.setAttribute('class', 'bBox hidden')),
        this.node.appendChild(this.bBox));
    }),
    (i.prototype.toBack = function (t) {
      var i = this.parentNode.firstChild;
      t !== i && this.node.insertBefore(t, i);
    }),
    (i.prototype.toFront = function (t) {
      this.node.appendChild(t);
    }),
    (i.prototype.setVisibility = function (t) {
      ((this.isVisible = t),
        this.isVisible
          ? this.node.setAttribute('visibility', 'visible')
          : this.node.setAttribute('visibility', 'hidden'));
    }),
    (i.prototype.addEventListener = function (t, i) {
      t in this.eventListeners || (this.eventListeners[t] = i);
    }),
    (i.prototype.removeEventListener = function (t) {
      t in this.eventListeners && delete this.eventListeners[t];
    }),
    (i.prototype.fireEvent = function (t, i, e) {
      if ('string' != typeof t) throw new Error("Event object missing 'type' property.");
      void 0 !== this.eventListeners[t] && this.eventListeners[t](i, e);
    }),
    (i.prototype.cancelDefaultAction = function (t) {
      return (t.preventDefault && t.preventDefault(), (t.returnValue = !1), !1);
    }),
    (i.prototype.cancelBubble = function (t) {
      var i = t || window.event;
      (i.stopPropagation && i.stopPropagation(), null !== i.cancelBubble && (i.cancelBubble = !0));
    }),
    (i.prototype.detectLeftButton = function (t) {
      return 'buttons' in t ? 1 === t.buttons : 'which' in t ? 1 === t.which : 1 === t.button;
    }),
    (i.prototype.disableAllTouchEvents = function () {
      var t = document.documentElement;
      (t.style.setProperty('--allowed-touch-actions', 'none'),
        t.setAttribute('touch-action', 'none'));
    }),
    (i.prototype.enableAllTouchEvents = function () {
      var t = document.documentElement;
      (t.style.setProperty('--allowed-touch-actions', 'auto'),
        t.setAttribute('touch-action', 'auto'));
    }),
    (i.prototype.focusIn = function (t) {
      t = t || window.event;
      var i,
        e,
        s,
        h = !1;
      if (this.tool.svg.contains) h = this.tool.svg.contains(t.relatedTarget);
      else
        for (i = this.tool.svg.getElementsByTagName('*'), e = 0, s = i.length; e < s; e++)
          i[e] === t.relatedTarget && (h = !0);
      (null === t.relatedTarget ||
        h ||
        this.tool.pointerEvent ||
        this.tool.focusOutline ||
        this.tool.focusOutlineVisibility(!0),
        this.fireEvent('focusin', this),
        (this.tool.pointerEvent = !1));
    }),
    (i.prototype.focusOut = function (t) {
      ((t = t || window.event), this.fireEvent('focusout', this), (this.tool.pointerEvent = !1));
    }),
    (i.prototype.getMousePosition = function (t) {
      t = t || window.event;
      var i = this.bBox.getBoundingClientRect(),
        e = this.tool.svg.createSVGPoint();
      return (
        (e.x = Math.floor(t.clientX - i.left)),
        (e.y = Math.floor(t.clientY - i.top)),
        { x: e.x, y: e.y }
      );
    }),
    (i.prototype.setAriaLabel = function (t) {
      this.ariaLabel = t;
    }),
    (i.prototype.finalize = function () {}),
    i
  );
});
