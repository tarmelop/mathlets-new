/*
 * Part of the MIT Mathlets shared library (https://mathlets.org/).
 * Original code by the MIT Mathlets authors; extracted from the minified
 * common.js and auto-formatted (variable names are the minifier's).
 * Licensed under CC BY-NC-SA 3.0 — see LICENSE.md at the repo root.
 */
define(['require', 'utils'], function (t) {
  'use strict';
  function i() {
    ((this.polygon = document.createElementNS(e.SVG_NS, 'polygon')),
      (this.graph = arguments[0]),
      3 === arguments.length
        ? (this.setPoints(arguments[1]), this.polygon.setAttribute('class', arguments[2]))
        : 4 === arguments.length
          ? (this.setPoints(arguments[1], arguments[2]),
            this.polygon.setAttribute('class', arguments[3]))
          : 5 === arguments.length &&
            (this.setPoints(arguments[1], arguments[2], arguments[3]),
            this.polygon.setAttribute('class', arguments[4])),
      this.polygon.setAttribute('clip-path', 'url(#' + this.graph.clipPath + ')'),
      this.graph.shapes.appendChild(this.polygon));
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
      }
      this.polygon.setAttribute('points', e.join(','));
    }),
    (i.prototype.setClass = function (t) {
      this.polygon.setAttribute('class', t);
    }),
    (i.prototype.translate = function (t, i) {
      this.polygon.setAttribute(
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
        ? this.polygon.setAttribute('visibility', '')
        : this.polygon.setAttribute('visibility', 'hidden');
    }),
    i
  );
});
