define(['require', 'utils'], function (t) {
  'use strict';
  function i(t, i, s) {
    ((this.container = t),
      (this.width = void 0 === i ? 818 : i),
      (this.height = void 0 === s ? 575 : s),
      (this.svg = document.createElementNS(e.SVG_NS, 'svg')),
      this.svg.setAttribute('version', '1.2'),
      this.svg.setAttribute('baseProfile', 'tiny'),
      this.svg.setAttribute('width', this.width),
      this.svg.setAttribute('height', this.height),
      this.container.appendChild(this.svg),
      (this.components = []),
      (this.eventListeners = {}),
      (this.tool = null),
      (this.focusOutline = !1),
      this.svg.addEventListener(
        'selectstart',
        function (t) {
          t.preventDefault();
        },
        !1,
      ));
  }
  var e = t('utils');
  return (
    (i.prototype.addEventListener = function (t, i) {
      t in this.eventListeners || (this.eventListeners[t] = i);
    }),
    (i.prototype.removeEventListener = function (t) {
      t in this.eventListeners && delete this.eventListeners[t];
    }),
    (i.prototype.fireEvent = function (t, i, e) {
      if ('string' != typeof t) throw new Error("Event object missing 'type' property.");
      this.eventListeners[t](i, e);
    }),
    (i.prototype.focusOutlineVisibility = function (t) {
      var i,
        e,
        s = this.getElementsByClassName(this.svg, 'bBox');
      for (i = 0, e = s.length; i < e; i++)
        t
          ? (s[i].classList ? s[i].classList.remove('hidden') : this.removeClass(s[i], 'hidden'),
            (this.focusOutline = !0))
          : (s[i].classList ? s[i].classList.add('hidden') : this.addClass(s[i], 'hidden'),
            (this.focusOutline = !1));
    }),
    (i.prototype.getElementsByClassName = function (t, i) {
      var e,
        s,
        h,
        n = [];
      if (t.getElementsByClassName) return t.getElementsByClassName(i);
      for (e = t.getElementsByTagName('*'), s = 0, h = e.length; s < h; s++)
        this.hasClass(e[s], i) && n.push(e[s]);
      return n;
    }),
    (i.prototype.getClass = function (t) {
      return t.getAttribute('class');
    }),
    (i.prototype.hasClass = function (t, i) {
      return new RegExp('(\\s|^)' + i + '(\\s|$)').test(this.getClass(t));
    }),
    (i.prototype.addClass = function (t, i) {
      !this.hasClass(t, i) &&
        t.setAttribute('class', (this.getClass(t) && this.getClass(t) + ' ') + i);
    }),
    (i.prototype.removeClass = function (t, i) {
      var e = this.getClass(t).replace(new RegExp('(\\s|^)' + i + '(\\s|$)', 'g'), '$2');
      this.hasClass(t, i) && t.setAttribute('class', e);
    }),
    (i.prototype.toggleClass = function (t, i) {
      (this.hasClass(t, i) ? this.removeClass : this.addClass)(t, i);
    }),
    (i.prototype.add = function (t) {
      var i, e;
      if ('[object Array]' === Object.prototype.toString.call(t))
        for (i = 0, e = t.length; i < e; i++) (this.components.push(t[i]), (t[i].tool = this));
      else (this.components.push(t), (t.tool = this));
    }),
    (i.prototype.remove = function (t) {
      var i = this.components.indexOf(t);
      (i > -1 && this.components.splice(i, 1),
        e.removeChildren(t.node),
        this.svg.removeChild(t.node),
        (t = null));
    }),
    (i.prototype.reorderComponents = function (t) {
      var i,
        e,
        s = [];
      for (i = 0, e = t.length; i < e; i++) s.push(this.components[t[i]]);
      this.components = s;
    }),
    (i.prototype.addFinalize = function (t) {
      (this.svg.appendChild(t.node),
        'function' == typeof t.finalize
          ? t.finalize()
          : console.error(
              'Finalize has to be a method for the following subclass of component: ' + t.type,
            ));
    }),
    (i.prototype.finalize = function (t) {
      var i,
        e = this.components.length;
      for (
        '[object Array]' === Object.prototype.toString.call(t) &&
          (t.length === e
            ? this.reorderComponents(t)
            : console.log(
                'Your components have not been reordered, please use an array of length ' +
                  e +
                  ' containing only distinct integer indices.',
              )),
          i = 0;
        i < e;
        i++
      )
        this.addFinalize(this.components[i]);
    }),
    i
  );
});
