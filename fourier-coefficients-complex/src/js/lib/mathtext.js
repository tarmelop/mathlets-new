define(['require', 'utils', 'component', 'katex'], function (t) {
  'use strict';
  function i(t, i, h) {
    (s.call(this, 0, 0),
      (this.type = 'mathtext'),
      (this.str = void 0 === h ? '' : h),
      (this.mathText = e.createForeignObject(this.node, t, i, 0, 0, 'math-text')));
  }
  var e = t('utils'),
    s = t('component'),
    h = t('katex');
  return (
    (i.prototype = Object.create(s.prototype)),
    (i.prototype.setText = function (t) {
      ((this.str = t), this.renderText());
    }),
    (i.prototype.renderText = function (t) {
      var i,
        e,
        s = 0,
        n = 0;
      (h.render(t, this.mathText, { displayMode: !0 }),
        (i = this.mathText.getElementsByClassName('katex-html')[0]),
        (e = i.querySelectorAll('.base')),
        e.forEach(function (t) {
          s += t.getBoundingClientRect().width;
        }),
        (n = i.getBoundingClientRect().height),
        this.mathText.setAttribute('width', s),
        this.mathText.setAttribute('height', n));
    }),
    (i.prototype.setClass = function (t) {
      this.mathText.setAttribute('class', t);
    }),
    (i.prototype.finalize = function () {
      this.renderText(this.str);
    }),
    i
  );
});
