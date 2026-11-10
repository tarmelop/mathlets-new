/*
 * Part of the MIT Mathlets shared library (https://mathlets.org/).
 * Original code by the MIT Mathlets authors; extracted from the minified
 * common.js and auto-formatted (variable names are the minifier's).
 * Licensed under CC BY-NC-SA 3.0 — see LICENSE.md at the repo root.
 */
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
