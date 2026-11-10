/*
 * Part of the MIT Mathlets shared library (https://mathlets.org/).
 * Original code by the MIT Mathlets authors; extracted from the minified
 * common.js and auto-formatted (variable names are the minifier's).
 * Licensed under CC BY-NC-SA 3.0 — see LICENSE.md at the repo root.
 */
define(['require', 'utils'], function (t) {
  'use strict';
  function i(t, i, s, h, n, o) {
    ((this.graph = t),
      (this.line = document.createElementNS(e.SVG_NS, 'line')),
      this.line.setAttribute('clip-path', 'url(#' + this.graph.clipPath + ')'),
      this.graph.shapes.appendChild(this.line),
      (this.headBase = 5),
      (this.headHeight = 10),
      (this.head = document.createElementNS(e.SVG_NS, 'path')),
      this.head.setAttribute('clip-path', 'url(#' + this.graph.clipPath + ')'),
      this.graph.shapes.appendChild(this.head),
      this.setXY(i, s, h, n),
      this.setClass(o),
      (this.alwaysShowHead = !1));
  }
  var e = t('utils');
  return (
    (i.prototype.setXY = function (t, i, e, s) {
      var h = this.graph.getxPix(t),
        n = this.graph.getyPix(i),
        o = this.graph.getxPix(e),
        r = this.graph.getyPix(s);
      (this.line.setAttribute('x1', h),
        this.line.setAttribute('y1', n),
        this.line.setAttribute('x2', o),
        this.line.setAttribute('y2', r));
      var a = o - h,
        l = r - n,
        u = -(Math.PI / 2 + Math.atan2(l, a)),
        c = Math.cos(u),
        p = Math.sin(u),
        b = Math.round(c * -this.headBase + p * this.headHeight + o),
        d = Math.round(-p * -this.headBase + c * this.headHeight + r),
        x = Math.round(c * this.headBase + p * this.headHeight + o),
        y = Math.round(-p * this.headBase + c * this.headHeight + r);
      Math.sqrt(Math.pow(o - h, 2) + Math.pow(r - n, 2)) >= this.headHeight || this.alwaysShowHead
        ? this.head.setAttribute(
            'd',
            'M ' +
              parseInt(o) +
              ' ' +
              parseInt(r) +
              'L ' +
              parseInt(b) +
              ' ' +
              parseInt(d) +
              ' ' +
              parseInt(x) +
              ' ' +
              parseInt(y) +
              ' ' +
              parseInt(o) +
              ' ' +
              parseInt(r),
          )
        : this.head.setAttribute('d', 'M ' + parseInt(o) + ' ' + parseInt(r));
    }),
    (i.prototype.setHead = function (t, i) {
      ((this.headBase = t), (this.headHeight = i));
    }),
    (i.prototype.setClass = function (t) {
      (this.line.setAttribute('class', t), this.head.setAttribute('class', t));
    }),
    (i.prototype.setVisibility = function (t) {
      t
        ? (this.line.setAttribute('visibility', ''), this.head.setAttribute('visibility', ''))
        : (this.line.setAttribute('visibility', 'hidden'),
          this.head.setAttribute('visibility', 'hidden'));
    }),
    (i.prototype.setClipPath = function () {
      ((this.clipPath = e.createClipPath(
        this.graph.node,
        -this.headBase,
        -this.headBase,
        this.graph.width + 2 * this.headBase,
        this.graph.height + 2 * this.headBase,
      )),
        this.head.setAttribute('clip-path', 'url(#' + this.clipPath + ')'));
    }),
    i
  );
});
