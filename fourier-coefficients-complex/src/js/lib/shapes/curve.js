define(['require', 'utils'], function (t) {
  'use strict';
  function i() {
    ((this.polyline = document.createElementNS(e.SVG_NS, 'polyline')),
      (this.graph = arguments[0]),
      3 === arguments.length
        ? (this.setPoints(arguments[1]), this.polyline.setAttribute('class', arguments[2]))
        : 4 === arguments.length
          ? (this.setPoints(arguments[1], arguments[2]),
            this.polyline.setAttribute('class', arguments[3]))
          : 5 === arguments.length &&
            (this.setPoints(arguments[1], arguments[2], arguments[3]),
            this.polyline.setAttribute('class', arguments[4])),
      this.polyline.setAttribute('clip-path', 'url(#' + this.graph.clipPath + ')'),
      this.graph.shapes.appendChild(this.polyline),
      (this.isArea = !1));
  }
  var e = t('utils');
  return (
    (i.prototype.setPoints = function () {
      var t,
        i,
        e = [];
      if (1 === arguments.length) {
        var s = arguments[0];
        for (t = 0, i = s.length; t < i; t += 2)
          (e.push(this.graph.getxPix(s[t])), e.push(this.graph.getyPix(s[t + 1])));
      } else if (2 === arguments.length) {
        var h = arguments[0],
          n = arguments[1];
        for (t = 0, i = h.length; t < i; t++)
          (e.push(this.graph.getxPix(h[t])), e.push(this.graph.getyPix(n[t])));
      } else if (3 === arguments.length) {
        var o,
          r,
          a,
          l,
          u = arguments[0],
          c = this.graph.getxPix(arguments[1]),
          p = this.graph.getxPix(arguments[2]);
        for (
          this.isArea && (e.push(c), e.push(this.graph.getyPix(0))),
            o = arguments[1],
            a = this.graph.getxPix(o),
            this.graph.hasXScale && (o *= this.graph.xScale),
            r = u(o),
            isFinite(r) && ((l = this.graph.getyPix(r)), e.push(a), e.push(l));
          a < p;
        )
          ((a = Math.min(a + 1, p)),
            (o = this.graph.getxFromPix(a)),
            (r = u(o)),
            isFinite(r) && ((l = this.graph.getyPix(r)), e.push(a), e.push(l)));
        this.isArea && (e.push(p), e.push(this.graph.getyPix(0)));
      }
      this.polyline.setAttribute('points', e.join(','));
    }),
    (i.prototype.setClass = function (t) {
      this.polyline.setAttribute('class', t);
    }),
    (i.prototype.translate = function (t, i) {
      this.polyline.setAttribute(
        'transform',
        'translate(' +
          parseInt(this.graph.getxPix(t) - this.graph.getxPix(0)) +
          ',' +
          parseInt(this.graph.getyPix(i) - this.graph.getyPix(0)) +
          ')',
      );
    }),
    (i.prototype.setVisibility = function (t) {
      t
        ? this.polyline.setAttribute('visibility', '')
        : this.polyline.setAttribute('visibility', 'hidden');
    }),
    i
  );
});
