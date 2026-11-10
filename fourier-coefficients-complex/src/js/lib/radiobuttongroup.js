define(['require'], function (t) {
  'use strict';
  function i() {
    this.radioButtons = Array.prototype.slice.call(arguments, 0);
    for (var t = 0; t < this.radioButtons.length; t++) this.radioButtons[t].group = this;
  }
  return (
    (i.prototype.add = function () {
      var t = Array.prototype.slice.call(arguments, 0),
        i = this.radioButtons.length;
      this.radioButtons = this.radioButtons.concat(t);
      for (var e = i; e < this.radioButtons.length; e++) this.radioButtons[e].group = this;
    }),
    (i.prototype.remove = function (t) {
      for (var i = 0; i < this.radioButtons.length; i++)
        this.radioButtons[i] === t && this.radioButtons.splice(i, 1);
      t.group = null;
    }),
    (i.prototype.getSelelected = function () {
      var t,
        i = -1;
      for (t = 0; t < this.radioButtons.length; t++) this.radioButtons[t].isChecked && (i = t);
      return i;
    }),
    i
  );
});
