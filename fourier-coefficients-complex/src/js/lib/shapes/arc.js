/*
 * Part of the MIT Mathlets shared library (https://mathlets.org/).
 * Original code by the MIT Mathlets authors; extracted from the minified
 * common.js and auto-formatted (variable names are the minifier's).
 * Licensed under CC BY-NC-SA 3.0 — see LICENSE.md at the repo root.
 */
define(['require', 'utils'], function (t) {
  'use strict';
  function i(t, i, s, h, n, o, r, a, l) {
    ((this.graph = t),
      (this.xc = i),
      (this.yc = s),
      (this.radius = h),
      (this.inDegrees = r),
      (this.clockwise = a),
      this.convertAngles(n, o),
      (this.arc = document.createElementNS(e.SVG_NS, 'path')),
      this.setdAttribute(),
      this.setClass(l),
      this.graph.shapes.appendChild(this.arc));
  }
  var e = t('utils');
  return (
    (i.prototype.convertAngles = function (t, i) {
      this.inDegrees
        ? ((this.startAngle = e.degToRad(t)), (this.endAngle = e.degToRad(i)))
        : ((this.startAngle = t), (this.endAngle = i));
    }),
    (i.prototype.setXY = function (t, i) {
      ((this.xc = t), (this.yc = i), this.setTransform());
    }),
    (i.prototype.setAngles = function () {
      var t, i;
      (2 === arguments.length
        ? ((t = arguments[0]), (i = arguments[1]))
        : 3 === arguments.length &&
          ((t = arguments[0]), (i = arguments[1]), (this.clockwise = arguments[2])),
        this.convertAngles(t, i),
        this.setdAttribute());
    }),
    (i.prototype.setRadius = function (t) {
      ((this.radius = t), this.setdAttribute());
    }),
    (i.prototype.setdAttribute = function () {
      var t, i, e, s, h, n, o, r;
      ((t = this.graph.getxPix(this.xc) + Math.round(this.radius * Math.cos(this.startAngle))),
        (i = this.graph.getyPix(this.yc) - Math.round(this.radius * Math.sin(this.startAngle))),
        (e = this.graph.getxPix(this.xc) + Math.round(this.radius * Math.cos(this.endAngle))),
        (s = this.graph.getyPix(this.yc) - Math.round(this.radius * Math.sin(this.endAngle))),
        (o = this.endAngle - this.startAngle),
        this.clockwise
          ? o < Math.PI
            ? ((h = '1,'), (n = '1,'))
            : ((h = '0,'), (n = '1,'))
          : o < Math.PI
            ? ((h = '0,'), (n = '0,'))
            : ((h = '1,'), (n = '0,')),
        (r = '0,' + h + n),
        this.arc.setAttribute(
          'd',
          'M ' +
            parseInt(t) +
            ',' +
            parseInt(i) +
            'A ' +
            parseInt(this.radius) +
            ',' +
            parseInt(this.radius) +
            ',' +
            r +
            parseInt(e) +
            ',' +
            parseInt(s),
        ));
    }),
    (i.prototype.setClass = function (t) {
      this.arc.setAttribute('class', t);
    }),
    (i.prototype.setVisibility = function (t) {
      t ? this.arc.setAttribute('visibility', '') : this.arc.setAttribute('visibility', 'hidden');
    }),
    i
  );
});
