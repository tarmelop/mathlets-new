define(['require', 'utils', 'component'], function (t) {
  'use strict';
  function i(t, i) {
    (s.call(this, t, i),
      (this.type = 'text'),
      (this.tSpans = []),
      (this.text = e.createText(this.node, 0, 0, '', 'daimp-text')));
  }
  var e = t('utils'),
    s = t('component');
  return (
    (i.prototype = Object.create(s.prototype)),
    (i.prototype.clearText = function () {
      e.removeChildren(this.text);
    }),
    (i.prototype.addText = function (t, i) {
      var s = e.createStyledText(this.text, t);
      (s.setAttribute('class', i),
        s.setAttribute('y', 0),
        s.setAttributeNS(e.XML_NS, 'xml:space', 'preserve'),
        this.tSpans.push(s));
    }),
    (i.prototype.addSubScript = function (t, i) {
      var s = e.createStyledText(this.text, t);
      (s.setAttribute('class', i),
        s.setAttribute('dx', 2),
        s.setAttribute('y', 3),
        s.setAttributeNS(e.XML_NS, 'xml:space', 'preserve'),
        this.tSpans.push(s));
    }),
    (i.prototype.addSuperScript = function (t, i) {
      var s = e.createStyledText(this.text, t);
      (s.setAttribute('class', i),
        s.setAttribute('dx', 2),
        s.setAttribute('y', -5),
        s.setAttributeNS(e.XML_NS, 'xml:space', 'preserve'),
        this.tSpans.push(s));
    }),
    (i.prototype.addSubSuperScript = function (t, i, e) {
      (this.addSubScript(t, e),
        this.addSuperScript(i, e),
        this.tSpans[this.tSpans.length - 1].setAttribute('dx', -6));
    }),
    (i.prototype.setText = function (t, i) {
      this.tSpans[t].textContent = i;
    }),
    (i.prototype.setClass = function (t, i) {
      this.tSpans[t].setAttribute('class', i);
    }),
    i
  );
});
