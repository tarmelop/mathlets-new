define(['require', 'utils', 'component', 'text', 'a11y'], function (t) {
  'use strict';
  function i(t, i, h, n) {
    (s.call(this, t, i, h, n),
      (this.type = 'dropdown'),
      (this.isDropped = !1),
      (this.button = e.createGroup(this.node)),
      (this.square = e.createRect(this.button, 0, 0, 16, 16, 'dropdown-square')),
      (this.triangle = e.createTriangle(this.button, 4, 6, 12, 6, 8, 10, 'dropdown-triangle')),
      (this.text = []),
      (this.boxes = []),
      (this.strs = []),
      (this.hpadding = 8),
      (this.vpadding = 4),
      (this.itemShift = 0),
      (this.selectedIndex = 0));
  }
  var e = t('utils'),
    s = t('component'),
    h = (t('text'), t('a11y'));
  return (
    (i.prototype = Object.create(s.prototype)),
    (i.prototype.addItems = function (t, i, e) {
      ((this.strs = t),
        void 0 !== i && (this.selectedIndex = i),
        void 0 !== e && (this.itemShift = e));
    }),
    (i.prototype.finalizeAddItems = function () {
      var t,
        i,
        s,
        h,
        n,
        o = this.strs.length,
        r = 0,
        a = 0,
        l = [];
      for (
        this.textList = e.createGroup(this.node),
          this.textList.setAttribute('x', this.x),
          this.textList.setAttribute('y', this.y),
          t = 0;
        t < o;
        t++
      ) {
        for (
          n = 0,
            this.boxes.push(e.createRect(this.textList, 0, 0, 100, 100, 'dropdown-square')),
            this.text.push(e.createText(this.textList, 200, 200, '', 'dropdown-label-selected')),
            s = e.parseSubSuperScriptText(this.strs[t]),
            i = 0;
          i < s.length;
          i++
        )
          (l.push(e.createStyledText(this.text[t], s[i].s)),
            (h = l.length - 1),
            'normal' === s[i].type
              ? (l[h].setAttribute('dy', -n),
                l[h].setAttributeNS(e.XML_NS, 'xml:space', 'preserve'),
                l[h].setAttribute('class', 'dropdown-label-unselected'))
              : 'sub' === s[i].type
                ? ((n += 3),
                  l[h].setAttribute('dy', 3),
                  l[h].setAttributeNS(e.XML_NS, 'xml:space', 'preserve'),
                  l[h].setAttribute('class', 'dropdown-label-sub-sup-unselected'))
                : ((n += -5),
                  l[h].setAttribute('dy', -5),
                  l[h].setAttributeNS(e.XML_NS, 'xml:space', 'preserve'),
                  l[h].setAttribute('class', 'dropdown-label-sub-sup-unselected')));
        (this.text[t].getBBox().width > r && (r = this.text[t].getBBox().width),
          this.text[t].getBBox().height > a && (a = this.text[t].getBBox().height));
      }
      for (
        this.top = 8 - (o / 2 + this.itemShift) * (a + 2 * this.vpadding),
          this.left = 17,
          this.h = a + 2 * this.vpadding,
          this.w = r + 2 * this.hpadding,
          this.yb = (o / 2 + this.itemShift) * (a + 2 * this.vpadding) - 8,
          t = 0;
        t < o;
        t++
      )
        (this.boxes[t].setAttribute('x', this.left),
          this.boxes[t].setAttribute('y', this.top + t * this.h),
          this.boxes[t].setAttribute('width', this.w),
          this.boxes[t].setAttribute('height', this.h),
          this.boxes[t].setAttribute('tabindex', 0),
          this.boxes[t].setAttribute('focusable', !0),
          this.text[t].setAttribute('x', this.left + this.hpadding - 1),
          this.text[t].setAttribute('y', this.top + (t + 0.5) * this.h));
      (this.textList.setAttribute('visibility', 'hidden'),
        (this.label = this.text[this.selectedIndex].cloneNode(!0)),
        this.button.appendChild(this.label),
        this.label.setAttribute('x', 16 + this.hpadding),
        this.label.setAttribute('y', 8),
        this.label.setAttribute('class', 'dropdown-label-selected'),
        this.selectAllChildren(this.label));
    }),
    (i.prototype.setSquareClass = function (t) {
      this.square.setAttribute('class', t);
    }),
    (i.prototype.setTriangleClass = function (t) {
      this.triangle.setAttribute('class', t);
    }),
    (i.prototype.bindEvents = function () {
      ((this.pointerDown = this.pointerDown.bind(this)),
        (this.pointerOver = this.pointerOver.bind(this)),
        (this.pointerOut = this.pointerOut.bind(this)),
        (this.keyDown = this.keyDown.bind(this)),
        (this.menuItemKeyDown = this.menuItemKeyDown.bind(this)),
        (this.focusIn = this.focusIn.bind(this)),
        (this.focusOut = this.focusOut.bind(this)));
      for (var t = 0, i = this.boxes.length; t < i; t++)
        this.boxes[t].addEventListener('keydown', this.menuItemKeyDown, !1);
      (this.node.setAttribute('pointer-events', 'none'),
        this.button.addEventListener('pointerdown', this.pointerDown, !0),
        this.button.setAttribute('pointer-events', 'all'),
        this.button.setAttribute('touch-action', 'none'),
        this.textList.addEventListener('pointerdown', this.pointerDown, !0),
        this.textList.addEventListener('pointerover', this.pointerOver, !1),
        this.textList.addEventListener('pointerout', this.pointerOut, !0),
        this.textList.setAttribute('pointer-events', 'none'),
        this.textList.setAttribute('touch-action', 'none'),
        this.bBox.addEventListener('keydown', this.keyDown, !1),
        this.bBox.addEventListener('focusin', this.focusIn, !1),
        this.bBox.addEventListener('focusout', this.focusOut, !1));
    }),
    (i.prototype.buttonIsTarget = function (t) {
      return t.target.parentNode === this.button;
    }),
    (i.prototype.listIsTarget = function (t) {
      return (
        t.target.parentNode === this.textList || t.target.parentNode.parentNode === this.textList
      );
    }),
    (i.prototype.unselectAllChildren = function (t) {
      var i,
        e,
        s = t.childNodes;
      for (i = 0; i < s.length; i++)
        ((e = s[i].getAttribute('class')),
          'dropdown-label-selected' === e || 'dropdown-label-selected-a11y' === e
            ? s[i].setAttribute('class', 'dropdown-label-unselected')
            : ('dropdown-label-sub-sup-selected' !== e &&
                'dropdown-label-sub-sup-selected-a11y' !== e) ||
              s[i].setAttribute('class', 'dropdown-label-sub-sup-unselected'));
    }),
    (i.prototype.selectAllChildren = function (t, i) {
      var e,
        s,
        h = t.childNodes,
        n = 'dropdown-label-selected',
        o = 'dropdown-label-sub-sup-selected';
      for (i && ((n += '-a11y'), (o += '-a11y')), e = 0; e < h.length; e++)
        ((s = h[e].getAttribute('class')),
          'dropdown-label-unselected' === s
            ? h[e].setAttribute('class', n)
            : 'dropdown-label-sub-sup-unselected' === s && h[e].setAttribute('class', o));
    }),
    (i.prototype.unselectAll = function () {
      for (var t = 0, i = this.text.length; t < i; t++) this.unselectAllChildren(this.text[t]);
    }),
    (i.prototype.getMousePos = function (t, i) {
      i = i || window.event;
      var e = t.getBoundingClientRect(),
        s = this.tool.svg.createSVGPoint();
      return ((s.x = i.clientX - e.left), (s.y = i.clientY - e.top), { x: s.x, y: s.y });
    }),
    (i.prototype.pointerDown = function (t) {
      var i;
      if ((this.disableAllTouchEvents(), !this.detectLeftButton(t) || !t.isPrimary))
        return (this.cancelBubble(t), void this.cancelDefaultAction(t));
      ((this.tool.pointerEvent = !0),
        this.listIsTarget(t)
          ? ((i = this.getMousePos(this.textList, t)),
            (this.selectedIndex = Math.floor(i.y / this.h)),
            this.selectListItem(this.selectedIndex),
            this.openMenu(!1),
            h.element.focus(this.bBox),
            this.fireEvent('change', this.selectedIndex))
          : this.buttonIsTarget(t)
            ? this.isDropped
              ? (this.openMenu(!1), h.element.focus(this.bBox))
              : (this.openMenu(!0), h.element.blur(this.bBox))
            : (this.openMenu(!1), h.element.focus(this.bBox)),
        this.cancelBubble(t),
        this.cancelDefaultAction(t));
    }),
    (i.prototype.pointerOver = function (t) {
      var i = this.getMousePos(this.textList, t),
        e = Math.floor(i.y / this.h);
      (e >= this.text.length && (e = this.text.length - 1),
        this.text[e].setAttribute('class', 'dropdown-label-selected'),
        this.selectAllChildren(this.text[e], !0),
        this.cancelBubble(t));
    }),
    (i.prototype.pointerOut = function (t) {
      for (var i = 0, e = this.text.length; i < e; i++)
        (this.text[i].setAttribute('class', 'dropdown-label-unselected'),
          this.unselectAllChildren(this.text[i]));
      (this.cancelBubble(t), this.cancelDefaultAction(t));
    }),
    (i.prototype.keyDown = function (t) {
      var i,
        s = e.KEYS;
      switch (((t = t || window.event), (i = t.keyCode))) {
        case s.SPACE:
        case s.ENTER:
        case s.UP:
        case s.DOWN:
        case s.LEFT:
        case s.RIGHT:
          (this.openMenu(!0), this.select(this.selectedIndex));
          break;
        case s.TAB:
          this.tool.focusOutline ||
            (this.tool.focusOutlineVisibility(!0),
            this.cancelBubble(t),
            this.cancelDefaultAction(t));
      }
      i !== s.TAB && this.cancelDefaultAction(t);
    }),
    (i.prototype.menuItemKeyDown = function (t) {
      var i = e.KEYS;
      switch (((t = t || window.event), t.keyCode)) {
        case i.UP:
          this.focusPrevious();
          break;
        case i.DOWN:
          this.focusNext();
          break;
        case i.ENTER:
        case i.SPACE:
          (this.selectListItem(this.selectedIndex),
            this.openMenu(!1),
            h.element.focus(this.bBox),
            this.fireEvent('change', this.selectedIndex));
          break;
        case i.ESCAPE:
        case i.TAB:
          (this.selectListItem(), this.openMenu(!1), h.element.focus(this.bBox));
      }
      this.cancelDefaultAction(t);
    }),
    (i.prototype.selectListItem = function (t) {
      (this.unselectAll(),
        void 0 !== t &&
          (this.selectAllChildren(this.text[t]),
          e.replaceChildrenWithCopy(this.text[t], this.label),
          this.updateBBox()));
    }),
    (i.prototype.openMenu = function (t) {
      var i = this;
      setTimeout(function () {
        (t
          ? ((i.isDropped = !0),
            i.textList.setAttribute('visibility', 'visible'),
            i.textList.setAttribute('pointer-events', 'all'),
            i.select(i.selectedIndex),
            i.label.setAttribute('visibility', 'hidden'),
            document.addEventListener('pointerdown', i.pointerDown, !0))
          : ((i.isDropped = !1),
            i.textList.setAttribute('visibility', 'hidden'),
            i.textList.setAttribute('pointer-events', 'none'),
            i.label.setAttribute('visibility', 'visible'),
            document.removeEventListener('pointerdown', i.pointerDown, !0)),
          i.enableAllTouchEvents());
      }, 100);
    }),
    (i.prototype.focusPrevious = function () {
      var t = this.boxes.length - 1,
        i = 0 === this.selectedIndex ? t : this.selectedIndex - 1;
      this.select(i);
    }),
    (i.prototype.focusNext = function () {
      var t = this.boxes.length - 1,
        i = this.selectedIndex === t ? 0 : this.selectedIndex + 1;
      this.select(i);
    }),
    (i.prototype.select = function (t) {
      ((this.selectedIndex = t),
        h.element.focus(this.boxes[t]),
        this.unselectAll(),
        this.selectAllChildren(this.text[t], !0));
    }),
    (i.prototype.addBBox = function () {
      var t = this.button.getBBox();
      ((this.bBox = document.createElementNS(e.SVG_NS, 'rect')),
        this.bBox.setAttribute('class', 'bBox hidden'),
        this.bBox.setAttribute('x', t.x - 6),
        this.bBox.setAttribute('y', t.y - 2),
        this.bBox.setAttribute('width', t.width + 10),
        this.bBox.setAttribute('height', t.height + 8),
        this.bBox.setAttribute('touch-action', 'none'),
        this.bBox.setAttribute('tabindex', 0),
        this.bBox.setAttribute('focusable', !0),
        this.node.appendChild(this.bBox));
    }),
    (i.prototype.updateBBox = function () {
      var t = this.button.getBBox();
      (this.bBox.setAttribute('width', t.width + 10),
        this.bBox.setAttribute('height', t.height + 8));
    }),
    (i.prototype.addAriaAttributes = function () {
      var t, i, s;
      for (
        'string' == typeof this.ariaLabel
          ? this.bBox.setAttribute('aria-label', this.ariaLabel)
          : ((t = e.uniqueId('menu-label-')),
            this.label.setAttribute('id', t),
            this.bBox.setAttribute('aria-labelledby', t)),
          this.bBox.setAttribute('role', 'menu'),
          i = 0,
          s = this.boxes.length;
        i < s;
        i++
      )
        ((t = e.uniqueId('menuitem-label-')),
          this.text[i].setAttribute('id', t),
          this.bBox.setAttribute('aria-labelledby', t),
          this.boxes[i].setAttribute('role', 'menuitem'));
    }),
    (i.prototype.finalize = function () {
      (this.finalizeAddItems(), this.addBBox(), this.bindEvents(), this.addAriaAttributes());
    }),
    i
  );
});
