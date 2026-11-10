define(['require', 'utils'], function (t) {
  'use strict';
  function i() {
    (6 === arguments.length
      ? ((this.graph = arguments[0]),
        (this.rectangle = document.createElementNS(e.SVG_NS, 'rect')),
        (this.type = 'bottom-left'),
        this.setRectangle(arguments[1], arguments[2], arguments[3], arguments[4]),
        this.setClass(arguments[5]),
        (this.width = arguments[3]),
        (this.height = arguments[4]))
      : 7 === arguments.length &&
        ((this.graph = arguments[0]),
        (this.rectangle = document.createElementNS(e.SVG_NS, 'rect')),
        (this.type = arguments[6]),
        this.setRectangle(arguments[1], arguments[2], arguments[3], arguments[4]),
        this.setClass(arguments[5]),
        (this.width = arguments[3]),
        (this.height = arguments[4])),
      this.rectangle.setAttribute('clip-path', 'url(#' + this.graph.clipPath + ')'),
      this.graph.shapes.appendChild(this.rectangle));
  }
  var e = t('utils');
  return (
    (i.prototype.setRectangle = function (t, i, e, s) {
      'bottom-left' === this.type
        ? (this.rectangle.setAttribute('x', this.graph.getxPix(t)),
          this.rectangle.setAttribute('y', this.graph.getyPix(i + s)),
          this.rectangle.setAttribute('width', this.graph.getxPix(t + e) - this.graph.getxPix(t)),
          this.rectangle.setAttribute('height', this.graph.getyPix(i) - this.graph.getyPix(i + s)))
        : 'center' === this.type &&
          (this.rectangle.setAttribute('x', this.graph.getxPix(t - e / 2)),
          this.rectangle.setAttribute('y', this.graph.getyPix(i + s / 2)),
          this.rectangle.setAttribute(
            'width',
            this.graph.getxPix(t + e / 2) - this.graph.getxPix(t - e / 2),
          ),
          this.rectangle.setAttribute(
            'height',
            this.graph.getyPix(i - s / 2) - this.graph.getyPix(i + s / 2),
          ));
    }),
    (i.prototype.setXY = function (t, i) {
      'bottom-left' === this.type
        ? (this.rectangle.setAttribute('x', this.graph.getxPix(t)),
          this.rectangle.setAttribute('y', this.graph.getyPix(i + this.height)))
        : 'center' === this.type &&
          (this.rectangle.setAttribute('x', this.graph.getxPix(t - this.width / 2)),
          this.rectangle.setAttribute('y', this.graph.getyPix(i + this.height / 2)));
    }),
    (i.prototype.setClass = function (t) {
      this.rectangle.setAttribute('class', t);
    }),
    (i.prototype.setVisibility = function (t) {
      t
        ? this.rectangle.setAttribute('visibility', '')
        : this.rectangle.setAttribute('visibility', 'hidden');
    }),
    i
  );
});
