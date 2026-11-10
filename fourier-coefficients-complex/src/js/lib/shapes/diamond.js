define(['require', 'utils'], function (t) {
  'use strict';
  function i(t, i, s, h, n) {
    ((this.graph = t),
      (this.radius = h),
      (this.point = document.createElementNS(e.SVG_NS, 'path')),
      (this.clipPath = e.createClipPath(
        this.graph.node,
        -h,
        -h,
        this.graph.width + 2 * h,
        this.graph.height + 2 * h,
      )),
      this.point.setAttribute('clip-path', 'url(#' + this.clipPath + ')'),
      this.setXY(i, s),
      this.setClass(n),
      this.graph.shapes.appendChild(this.point));
  }
  var e = t('utils');
  return (
    (i.prototype.setXY = function (t, i) {
      var e,
        s,
        h = 2.5 * this.radius;
      ((e = this.graph.getxPix(t)),
        (s = this.graph.getyPix(i)),
        this.graph.inPlottingBounds(t, i) ||
          (e < this.graph.getxPix(this.graph.xMin)
            ? (e -= h)
            : e > this.graph.getxPix(this.graph.xMax)
              ? (e += h)
              : s < this.graph.getyPix(this.graph.yMin)
                ? (s -= h)
                : s > this.graph.getyPix(this.graph.yMax) && (s += h)),
        this.point.setAttribute(
          'd',
          'M ' +
            parseInt(e - this.radius) +
            ' ' +
            parseInt(s) +
            ' L ' +
            parseInt(e) +
            ' ' +
            parseInt(s - this.radius) +
            ' L ' +
            parseInt(e + this.radius) +
            ' ' +
            parseInt(s) +
            ' L  ' +
            parseInt(e) +
            ' ' +
            parseInt(s + this.radius) +
            ' Z',
        ));
    }),
    (i.prototype.setClass = function (t) {
      this.point.setAttribute('class', t);
    }),
    (i.prototype.setVisibility = function (t) {
      t
        ? this.point.setAttribute('visibility', '')
        : this.point.setAttribute('visibility', 'hidden');
    }),
    i
  );
});
