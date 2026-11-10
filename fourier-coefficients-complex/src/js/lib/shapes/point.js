define(['require', 'utils'], function (t) {
  'use strict';
  function i() {
    ((this.graph = arguments[0]),
      (this.type = 5 === arguments.length ? 'circle' : arguments[5]),
      'circle' === this.type
        ? (this.point = document.createElementNS(e.SVG_NS, 'circle'))
        : 'square' === this.type && (this.point = document.createElementNS(e.SVG_NS, 'rect')),
      (this.clipPath = e.createClipPath(
        this.graph.node,
        -arguments[3],
        -arguments[3],
        this.graph.width + 2 * arguments[3],
        this.graph.height + 2 * arguments[3],
      )),
      this.point.setAttribute('clip-path', 'url(#' + this.clipPath + ')'),
      this.setRadius(arguments[3]),
      this.setXY(arguments[1], arguments[2]),
      this.setClass(arguments[4]),
      this.graph.shapes.appendChild(this.point));
  }
  var e = t('utils');
  return (
    (i.prototype.setXY = function (t, i) {
      var e, s, h, n;
      ('circle' === this.type
        ? (h = this.point.getAttribute('r'))
        : 'square' === this.type && (h = 0.5 * this.point.getAttribute('width')),
        (n = 2.5 * h),
        (e = this.graph.getxPix(t)),
        (s = this.graph.getyPix(i)),
        this.graph.inPlottingBounds(t, i) ||
          (e < this.graph.getxPix(this.graph.xMin)
            ? (e -= n)
            : e > this.graph.getxPix(this.graph.xMax)
              ? (e += n)
              : s < this.graph.getyPix(this.graph.yMin)
                ? (s -= n)
                : s > this.graph.getyPix(this.graph.yMax) && (s += n)),
        'circle' === this.type
          ? (this.point.setAttribute('cx', e), this.point.setAttribute('cy', s))
          : 'square' === this.type &&
            (this.point.setAttribute('x', e - h), this.point.setAttribute('y', s - h)));
    }),
    (i.prototype.setRadius = function (t) {
      'circle' === this.type
        ? this.point.setAttribute('r', t)
        : 'square' === this.type &&
          (this.point.setAttribute('width', 2 * t), this.point.setAttribute('height', 2 * t));
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
