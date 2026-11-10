define(['require', 'utils'], function (t) {
  'use strict';
  function i(t, i, s, h, n, o) {
    ((this.graph = t),
      (this.radius = h),
      (this.thickness = n),
      (this.cross = document.createElementNS(e.SVG_NS, 'path')),
      (this.clipPath = e.createClipPath(
        this.graph.node,
        -h,
        -h,
        this.graph.width + 2 * h,
        this.graph.height + 2 * h,
      )),
      this.cross.setAttribute('clip-path', 'url(#' + this.clipPath + ')'),
      this.setXY(i, s),
      this.setClass(o),
      this.graph.shapes.appendChild(this.cross));
  }
  var e = t('utils');
  return (
    (i.prototype.setXY = function (t, i) {
      var e, s, h;
      ((h = 2.5 * this.radius),
        (e = this.graph.getxPix(t)),
        (s = this.graph.getyPix(i)),
        this.graph.inPlottingBounds(t, i) ||
          (e < this.graph.getxPix(this.graph.xMin)
            ? (e -= h)
            : e > this.graph.getxPix(this.graph.xMax)
              ? (e += h)
              : s < this.graph.getyPix(this.graph.yMin)
                ? (s -= h)
                : s > this.graph.getyPix(this.graph.yMax) && (s += h)),
        this.cross.setAttribute(
          'd',
          'M ' +
            parseInt(e - this.radius) +
            ' ' +
            parseInt(s - this.thickness) +
            ' L ' +
            parseInt(e - this.radius) +
            ' ' +
            parseInt(s + this.thickness) +
            ' L ' +
            parseInt(e - this.thickness) +
            ' ' +
            parseInt(s + this.thickness) +
            ' L ' +
            parseInt(e - this.thickness) +
            ' ' +
            parseInt(s + this.radius) +
            ' L ' +
            parseInt(e + this.thickness) +
            ' ' +
            parseInt(s + this.radius) +
            ' L ' +
            parseInt(e + this.thickness) +
            ' ' +
            parseInt(s + this.thickness) +
            ' L ' +
            parseInt(e + this.radius) +
            ' ' +
            parseInt(s + this.thickness) +
            ' L ' +
            parseInt(e + this.radius) +
            ' ' +
            parseInt(s - this.thickness) +
            ' L ' +
            parseInt(e + this.thickness) +
            ' ' +
            parseInt(s - this.thickness) +
            ' L ' +
            parseInt(e + this.thickness) +
            ' ' +
            parseInt(s - this.radius) +
            ' L ' +
            parseInt(e - this.thickness) +
            ' ' +
            parseInt(s - this.radius) +
            ' L ' +
            parseInt(e - this.thickness) +
            ' ' +
            parseInt(s - this.thickness) +
            ' Z',
        ));
    }),
    (i.prototype.setClass = function (t) {
      this.cross.setAttribute('class', t);
    }),
    (i.prototype.setVisibility = function (t) {
      t
        ? this.cross.setAttribute('visibility', '')
        : this.cross.setAttribute('visibility', 'hidden');
    }),
    i
  );
});
