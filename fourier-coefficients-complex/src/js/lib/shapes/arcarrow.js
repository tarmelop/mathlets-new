define(['require', 'utils'], function (t) {
  'use strict';
  function i(t, i, s, h, n, o, r, a, l, u) {
    ((this.graph = t),
      (this.xc = i),
      (this.yc = s),
      (this.radius = h),
      (this.inDegrees = r),
      (this.clockwise = a),
      this.convertAngles(n, o),
      (this.arc = document.createElementNS(e.SVG_NS, 'path')),
      this.arc.setAttribute('clip-path', 'url(#' + this.graph.clipPath + ')'),
      this.graph.shapes.appendChild(this.arc),
      (this.headBase = 5),
      (this.headHeight = 10),
      (this.head = document.createElementNS(e.SVG_NS, 'path')),
      this.head.setAttribute('clip-path', 'url(#' + this.graph.clipPath + ')'),
      this.graph.shapes.appendChild(this.head),
      this.setXY(i, s),
      this.setClass(l, u),
      (this.alwaysShowHead = !1));
  }
  var e = t('utils');
  return (
    (i.prototype.convertAngles = function (t, i) {
      this.inDegrees
        ? ((this.startAngle = e.degToRad(t)), (this.endAngle = e.degToRad(i)))
        : ((this.startAngle = t), (this.endAngle = i));
    }),
    (i.prototype.setClass = function (t, i) {
      (this.arc.setAttribute('class', t), this.head.setAttribute('class', i));
    }),
    (i.prototype.setXY = function (t, i) {
      ((this.xc = t), (this.yc = i), this.setdAttribute());
    }),
    (i.prototype.setdAttribute = function () {
      var t,
        i,
        e,
        s,
        h,
        n,
        o,
        r,
        a,
        l,
        u,
        c,
        p,
        b = Math.cos(this.startAngle),
        d = Math.sin(this.startAngle),
        x = Math.cos(this.endAngle),
        y = Math.sin(this.endAngle);
      ((t = this.graph.getxPix(this.xc) + Math.round(this.radius * b)),
        (i = this.graph.getyPix(this.yc) - Math.round(this.radius * d)),
        (e = this.graph.getxPix(this.xc) + Math.round(this.radius * x)),
        (s = this.graph.getyPix(this.yc) - Math.round(this.radius * y)),
        (u = Math.abs(this.endAngle - this.startAngle)),
        this.clockwise
          ? u > Math.PI
            ? ((a = '1,'), (l = '1,'))
            : ((a = '0,'), (l = '1,'))
          : u < Math.PI
            ? ((a = '0,'), (l = '0,'))
            : ((a = '1,'), (l = '0,')),
        (c = '0,' + a + l),
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
            c +
            parseInt(e) +
            ',' +
            parseInt(s),
        ),
        (p = this.clockwise ? -1 : 1),
        (h = Math.round(x * -this.headBase + p * y * this.headHeight + e)),
        (o = Math.round(-y * -this.headBase + p * x * this.headHeight + s)),
        (n = Math.round(x * this.headBase + p * y * this.headHeight + e)),
        (r = Math.round(-y * this.headBase + p * x * this.headHeight + s)),
        Math.sqrt(Math.pow(e - t, 2) + Math.pow(s - i, 2)) >= this.headHeight ||
        '1,' === a ||
        this.alwaysShowHead
          ? this.head.setAttribute(
              'd',
              'M ' +
                parseInt(e) +
                ' ' +
                parseInt(s) +
                'L ' +
                parseInt(h) +
                ' ' +
                parseInt(o) +
                ' ' +
                parseInt(n) +
                ' ' +
                parseInt(r) +
                ' ' +
                parseInt(e) +
                ' ' +
                parseInt(s),
            )
          : this.head.setAttribute('d', 'M ' + parseInt(e) + ' ' + parseInt(s)));
    }),
    (i.prototype.setHead = function (t, i) {
      ((this.headBase = t), (this.headHeight = i), this.setdAttribute());
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
    (i.prototype.setVisibility = function (t) {
      t
        ? (this.arc.setAttribute('visibility', ''), this.head.setAttribute('visibility', ''))
        : (this.arc.setAttribute('visibility', 'hidden'),
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
