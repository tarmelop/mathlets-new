define(['require', 'utils'], function (t) {
  'use strict';
  function i(t, i, s, h, n, o) {
    ((this.graph = t),
      (this.line = document.createElementNS(e.SVG_NS, 'line')),
      this.line.setAttribute('clip-path', 'url(#' + this.graph.clipPath + ')'),
      this.setXY(i, s, h, n),
      this.setClass(o),
      this.graph.shapes.appendChild(this.line));
  }
  var e = t('utils');
  return (
    (i.prototype.setXY = function (t, i, e, s) {
      (this.line.setAttribute('x1', this.graph.getxPix(t)),
        this.line.setAttribute('y1', this.graph.getyPix(i)),
        this.line.setAttribute('x2', this.graph.getxPix(e)),
        this.line.setAttribute('y2', this.graph.getyPix(s)));
    }),
    (i.prototype.setClass = function (t) {
      this.line.setAttribute('class', t);
    }),
    (i.prototype.setVisibility = function (t) {
      t ? this.line.setAttribute('visibility', '') : this.line.setAttribute('visibility', 'hidden');
    }),
    i
  );
});
