! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).littlefoot = {})
}(this, function(e) {
    "use strict";
    var P = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function t(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }

    function n(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }
    var r = n(function(o) {
        var i, a, c, u, s, l, f, d, p, v, h, m, y, g, b, w, _, x, E, S, O, L;
        ! function() {
            var e, r, t = "object" == typeof P ? P : "object" == typeof self ? self : "object" == typeof this ? this : {};

            function n(n, r) {
                return n !== t && ("function" == typeof Object.create ? Object.defineProperty(n, "__esModule", {
                        value: !0
                    }) : n.__esModule = !0),
                    function(e, t) {
                        return n[e] = r ? r(e, t) : t
                    }
            }
            e = n(t, n(o.exports)), r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            }, i = function(e, t) {
                function n() {
                    this.constructor = e
                }
                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }, a = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, c = function(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                }
                return n
            }, u = function(e, t, n, r) {
                var o, i = arguments.length,
                    a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
                else
                    for (var c = e.length - 1; 0 <= c; c--)(o = e[c]) && (a = (i < 3 ? o(a) : 3 < i ? o(t, n, a) : o(t, n)) || a);
                return 3 < i && a && Object.defineProperty(t, n, a), a
            }, s = function(n, r) {
                return function(e, t) {
                    r(e, t, n)
                }
            }, l = function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }, f = function(e, a, c, u) {
                return new(c = c || Promise)(function(n, t) {
                    function r(e) {
                        try {
                            i(u.next(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function o(e) {
                        try {
                            i(u.throw(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function i(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof c ? t : new c(function(e) {
                            e(t)
                        })).then(r, o)
                    }
                    i((u = u.apply(e, a || [])).next())
                })
            }, d = function(n, r) {
                var o, i, a, e, c = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return e = {
                    next: t(0),
                    throw: t(1),
                    return: t(2)
                }, "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                    return this
                }), e;

                function t(t) {
                    return function(e) {
                        return function(t) {
                            if (o) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (o = 1, i && (a = 2 & t[0] ? i.return : t[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done) return a;
                                switch (i = 0, a && (t = [2 & t[0], a.value]), t[0]) {
                                    case 0:
                                    case 1:
                                        a = t;
                                        break;
                                    case 4:
                                        return c.label++, {
                                            value: t[1],
                                            done: !1
                                        };
                                    case 5:
                                        c.label++, i = t[1], t = [0];
                                        continue;
                                    case 7:
                                        t = c.ops.pop(), c.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = 0 < (a = c.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                            c.label = t[1];
                                            break
                                        }
                                        if (6 === t[0] && c.label < a[1]) {
                                            c.label = a[1], a = t;
                                            break
                                        }
                                        if (a && c.label < a[2]) {
                                            c.label = a[2], c.ops.push(t);
                                            break
                                        }
                                        a[2] && c.ops.pop(), c.trys.pop();
                                        continue
                                }
                                t = r.call(n, c)
                            } catch (e) {
                                t = [6, e], i = 0
                            } finally {
                                o = a = 0
                            }
                            if (5 & t[0]) throw t[1];
                            return {
                                value: t[0] ? t[1] : void 0,
                                done: !0
                            }
                        }([t, e])
                    }
                }
            }, p = function(e, t) {
                for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
            }, v = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }, h = function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, o, i = n.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === t || 0 < t--) && !(r = i.next()).done;) a.push(r.value)
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            }, m = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(h(arguments[t]));
                return e
            }, y = function() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                var r = Array(e),
                    o = 0;
                for (t = 0; t < n; t++)
                    for (var i = arguments[t], a = 0, c = i.length; a < c; a++, o++) r[o] = i[a];
                return r
            }, g = function(e) {
                return this instanceof g ? (this.v = e, this) : new g(e)
            }, b = function(e, t, n) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var o, i = n.apply(e, t || []),
                    a = [];
                return o = {}, r("next"), r("throw"), r("return"), o[Symbol.asyncIterator] = function() {
                    return this
                }, o;

                function r(r) {
                    i[r] && (o[r] = function(n) {
                        return new Promise(function(e, t) {
                            1 < a.push([r, n, e, t]) || c(r, n)
                        })
                    })
                }

                function c(e, t) {
                    try {
                        (n = i[e](t)).value instanceof g ? Promise.resolve(n.value.v).then(u, s) : l(a[0][2], n)
                    } catch (e) {
                        l(a[0][3], e)
                    }
                    var n
                }

                function u(e) {
                    c("next", e)
                }

                function s(e) {
                    c("throw", e)
                }

                function l(e, t) {
                    e(t), a.shift(), a.length && c(a[0][0], a[0][1])
                }
            }, w = function(r) {
                var e, o;
                return e = {}, t("next"), t("throw", function(e) {
                    throw e
                }), t("return"), e[Symbol.iterator] = function() {
                    return this
                }, e;

                function t(t, n) {
                    e[t] = r[t] ? function(e) {
                        return (o = !o) ? {
                            value: g(r[t](e)),
                            done: "return" === t
                        } : n ? n(e) : e
                    } : n
                }
            }, _ = function(u) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var e, t = u[Symbol.asyncIterator];
                return t ? t.call(u) : (u = v(u), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
                    return this
                }, e);

                function n(c) {
                    e[c] = u[c] && function(a) {
                        return new Promise(function(e, t) {
                            var n, r, o, i;
                            a = u[c](a), n = e, r = t, o = a.done, i = a.value, Promise.resolve(i).then(function(e) {
                                n({
                                    value: e,
                                    done: o
                                })
                            }, r)
                        })
                    }
                }
            }, x = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }, E = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }, S = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }, O = function(e, t) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }, L = function(e, t, n) {
                if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
                return t.set(e, n), n
            }, e("__extends", i), e("__assign", a), e("__rest", c), e("__decorate", u), e("__param", s), e("__metadata", l), e("__awaiter", f), e("__generator", d), e("__exportStar", p), e("__values", v), e("__read", h), e("__spread", m), e("__spreadArrays", y), e("__await", g), e("__asyncGenerator", b), e("__asyncDelegator", w), e("__asyncValues", _), e("__makeTemplateObject", x), e("__importStar", E), e("__importDefault", S), e("__classPrivateFieldGet", O), e("__classPrivateFieldSet", L)
        }()
    });
    t(r);
    var s = r.__assign,
        o = n(function(e, t) {
            t.__esModule = !0, t.getStyle = function(e, t) {
                var n, r = ((null === (n = e.ownerDocument) || void 0 === n ? void 0 : n.defaultView) || window).getComputedStyle(e);
                return r.getPropertyValue(t) || r[t]
            }
        });
    t(o);
    var h = o.getStyle,
        b = "littlefoot-footnote__content",
        u = "littlefoot-footnote__tooltip",
        w = "littlefoot-footnote__wrapper",
        m = "is-positioned-",
        y = "bottom",
        g = "top";

    function _(e) {
        var t = parseFloat(h(e, "marginLeft")),
            n = e.offsetWidth - t,
            r = e.offsetHeight,
            o = e.getBoundingClientRect(),
            i = o.left + n / 2,
            a = o.top + r / 2;
        return {
            top: a,
            bottom: window.innerHeight - a,
            leftRelative: i / window.innerWidth
        }
    }

    function x(e, t) {
        var n = 2 * parseInt(h(e, "marginTop"), 10) + e.offsetHeight;
        return t.bottom < n && t.bottom < t.top
    }

    function i(e) {
        var t;
        null !== (t = e.parentNode) && void 0 !== t && t.removeChild(e)
    }
    var l = {
        activateDelay: 100,
        activateOnHover: !1,
        allowDuplicates: !0,
        allowMultiple: !1,
        anchorParentSelector: "sup",
        anchorPattern: /(fn|footnote|note)[:\-_\d]/gi,
        dismissDelay: 100,
        dismissOnUnhover: !1,
        footnoteSelector: "li",
        hoverDelay: 250,
        numberResetSelector: "",
        scope: "",
        contentTemplate: '<aside class="littlefoot-footnote" id="fncontent:<% id %>" alt="Footnote <% number %>" aria-live="polite"><div class="' + w + '"><div class="' + b + '" tabindex="0"><% content %></div></div><div class="' + u + '"></div></aside>',
        buttonTemplate: '<button aria-controls="fncontent:<% id %>" aria-expanded="false" aria-label="Footnote <% number %>" class="littlefoot-footnote__button" id="<% reference %>" rel="footnote" title="See Footnote <% number %>"/><% number %></button>'
    };

    function f(e, t) {
        e.isReady() && (e.dismiss(), setTimeout(function() {
            e.remove()
        }, t))
    }
    var a = n(function(e, t) {
        t.__esModule = !0;
        var p = 96,
            v = 25.4,
            h = 72,
            m = 6;

        function y(e) {
            return e ? o.getStyle(e, "fontSize") || y(e.parentElement) : o.getStyle(window.document.documentElement, "fontSize")
        }
        t.pixels = function e(t, n) {
            var r, o, i, a, c, u, s = null != (o = null === (r = null == n ? void 0 : n.ownerDocument) || void 0 === r ? void 0 : r.defaultView) ? o : window,
                l = s.document.documentElement || s.document.body,
                f = (a = t || "0", c = parseFloat(a), u = a.match(/[\d-.]+(\w+)$/), [c, (null != (i = null == u ? void 0 : u[1]) ? i : "").toLowerCase()]),
                d = f[0];
            switch (f[1]) {
                case "rem":
                    return d * e(y(window.document.documentElement));
                case "em":
                    return d * e(y(n), null == n ? void 0 : n.parentElement);
                case "in":
                    return d * p;
                case "q":
                    return d * p / v / 4;
                case "mm":
                    return d * p / v;
                case "cm":
                    return d * p * 10 / v;
                case "pt":
                    return d * p / h;
                case "pc":
                    return d * p / m;
                case "vh":
                    return (d * s.innerHeight || l.clientWidth) / 100;
                case "vw":
                    return (d * s.innerWidth || l.clientHeight) / 100;
                case "vmin":
                    return d * Math.min(s.innerWidth || l.clientWidth, s.innerHeight || l.clientHeight) / 100;
                case "vmax":
                    return d * Math.max(s.innerWidth || l.clientWidth, s.innerHeight || l.clientHeight) / 100;
                default:
                    return d
            }
        }
    });
    t(a);
    var E = a.pixels,
        S = "is-active",
        O = "is-changing",
        L = "is-scrollable";

    function j(e) {
        var t = e.id,
            f = e.button,
            d = e.content,
            n = e.host,
            p = e.popover,
            c = e.wrapper,
            r = !1,
            v = 0;
        return {
            id: t,
            activate: function(e) {
                f.classList.add(O), f.setAttribute("aria-expanded", "true"), f.classList.add(S), f.insertAdjacentElement("afterend", p), p.style.maxWidth = document.body.clientWidth + "px";
                var t = h(d, "maxHeight");
                v = Math.round(E(t, d)), "function" == typeof e && e(p, f)
            },
            dismiss: function() {
                f.classList.add(O), f.blur(), f.setAttribute("aria-expanded", "false"), f.classList.remove(S)
            },
            isActive: function() {
                return f.classList.contains(S)
            },
            isReady: function() {
                return !f.classList.contains(O)
            },
            isHovered: function() {
                return r
            },
            ready: function() {
                p.classList.add(S), f.classList.remove(O)
            },
            remove: function() {
                i(p), f.classList.remove(O)
            },
            reposition: function() {
                if (p.parentElement) {
                    var e = _(f),
                        t = Math.min(v, (s = x(c = p, u = e), l = parseInt(h(c, "marginTop"), 10), u[s ? g : y] - l - 15));
                    d.style.maxHeight = t + "px", o = x(n = p, r = e), (i = n.dataset.footnotePosition) !== (a = o ? g : y) && (n.dataset.footnotePosition = a, n.classList.remove("" + m + i), n.classList.add("" + m + a), n.style.transformOrigin = 100 * r.leftRelative + "% " + (o ? "100%" : "0")), p.offsetHeight <= d.scrollHeight && p.classList.add(L)
                }
                var n, r, o, i, a, c, u, s, l
            },
            resize: function() {
                if (p.parentElement) {
                    var e = _(f),
                        t = d.offsetWidth,
                        n = parseInt(h(f, "marginLeft"), 10),
                        r = -e.leftRelative * t + n + f.offsetWidth / 2;
                    p.style.left = r + "px", c.style.maxWidth = t + "px", o = p, i = e.leftRelative, (a = o.querySelector("." + u)) && (a.style.left = 100 * i + "%")
                }
                var o, i, a
            },
            startHovering: function() {
                r = !0
            },
            stopHovering: function() {
                r = !1
            },
            destroy: function() {
                i(n)
            }
        }
    }
    var c = n(function(e, t) {
        t.__esModule = !0, t.throttle = function(r, o) {
            void 0 === o && (o = 0);
            var i, a = 0;
            return Object.assign(function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = Math.max(0, a + o - Date.now());
                n ? (clearTimeout(i), i = setTimeout(function() {
                    a = Date.now(), r.apply(void 0, e)
                }, n)) : (a = Date.now(), r.apply(void 0, e))
            }, {
                cancel: function() {
                    a = 0, clearTimeout(i)
                }
            })
        }
    });
    t(c);
    var M = c.throttle,
        d = n(function(e, t) {
            e.exports = function() {
                function e() {
                    if (!(this instanceof e)) {
                        return new e
                    }
                    this.size = 0;
                    this.uid = 0;
                    this.selectors = [];
                    this.selectorObjects = {};
                    this.indexes = Object.create(this.indexes);
                    this.activeIndexes = []
                }
                var t = window.document.documentElement,
                    n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.msMatchesSelector;
                e.prototype.matchesSelector = function(e, t) {
                    return n.call(e, t)
                }, e.prototype.querySelectorAll = function(e, t) {
                    return t.querySelectorAll(e)
                };
                var r = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
                (e.prototype.indexes = []).push({
                    name: "ID",
                    selector: function e(t) {
                        var n;
                        if (n = t.match(r)) {
                            return n[0].slice(1)
                        }
                    },
                    element: function e(t) {
                        if (t.id) {
                            return [t.id]
                        }
                    }
                });
                var o = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
                e.prototype.indexes.push({
                    name: "CLASS",
                    selector: function e(t) {
                        var n;
                        if (n = t.match(o)) {
                            return n[0].slice(1)
                        }
                    },
                    element: function e(t) {
                        var n = t.className;
                        if (n) {
                            if (typeof n === "string") {
                                return n.split(/\s/)
                            } else if (typeof n === "object" && "baseVal" in n) {
                                return n.baseVal.split(/\s/)
                            }
                        }
                    }
                });
                var i = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g,
                    p;
                if (e.prototype.indexes.push({
                        name: "TAG",
                        selector: function e(t) {
                            var n;
                            if (n = t.match(i)) {
                                return n[0].toUpperCase()
                            }
                        },
                        element: function e(t) {
                            return [t.nodeName.toUpperCase()]
                        }
                    }), e.prototype.indexes["default"] = {
                        name: "UNIVERSAL",
                        selector: function() {
                            return true
                        },
                        element: function() {
                            return [true]
                        }
                    }, typeof window.Map === "function") {
                    p = window.Map
                } else {
                    p = function() {
                        function e() {
                            this.map = {}
                        }
                        e.prototype.get = function(e) {
                            return this.map[e + " "]
                        };
                        e.prototype.set = function(e, t) {
                            this.map[e + " "] = t
                        };
                        return e
                    }()
                }
                var f = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;

                function h(e, t) {
                    e = e.slice(0).concat(e["default"]);
                    var n = e.length,
                        r, o, i, a, c = t,
                        u, s, l = [];
                    do {
                        f.exec("");
                        if (i = f.exec(c)) {
                            c = i[3];
                            if (i[2] || !c) {
                                for (r = 0; r < n; r++) {
                                    s = e[r];
                                    if (u = s.selector(i[1])) {
                                        o = l.length;
                                        a = false;
                                        while (o--) {
                                            if (l[o].index === s && l[o].key === u) {
                                                a = true;
                                                break
                                            }
                                        }
                                        if (!a) {
                                            l.push({
                                                index: s,
                                                key: u
                                            })
                                        }
                                        break
                                    }
                                }
                            }
                        }
                    } while (i);
                    return l
                }

                function v(e, t) {
                    var n, r, o;
                    for (n = 0, r = e.length; n < r; n++) {
                        o = e[n];
                        if (t.isPrototypeOf(o)) {
                            return o
                        }
                    }
                }

                function m(e, t) {
                    return e.id - t.id
                }
                return e.prototype.logDefaultIndexUsed = function() {}, e.prototype.add = function(e, t) {
                    var n, r, o, i, a, c, u, s, l = this.activeIndexes,
                        f = this.selectors,
                        d = this.selectorObjects;
                    if ("string" == typeof e) {
                        for (d[(n = {
                                id: this.uid++,
                                selector: e,
                                data: t
                            }).id] = n, u = h(this.indexes, e), r = 0; r < u.length; r++) i = (s = u[r]).key, (a = v(l, o = s.index)) || ((a = Object.create(o)).map = new p, l.push(a)), o === this.indexes.default && this.logDefaultIndexUsed(n), (c = a.map.get(i)) || (c = [], a.map.set(i, c)), c.push(n);
                        this.size++, f.push(e)
                    }
                }, e.prototype.remove = function(e, t) {
                    if ("string" == typeof e) {
                        var n, r, o, i, a, c, u, s, l = this.activeIndexes,
                            f = this.selectors = [],
                            d = this.selectorObjects,
                            p = {},
                            v = 1 === arguments.length;
                        for (n = h(this.indexes, e), o = 0; o < n.length; o++)
                            for (r = n[o], i = l.length; i--;)
                                if (c = l[i], r.index.isPrototypeOf(c)) {
                                    if (u = c.map.get(r.key))
                                        for (a = u.length; a--;)(s = u[a]).selector !== e || !v && s.data !== t || (u.splice(a, 1), p[s.id] = !0);
                                    break
                                }
                        for (o in p) delete d[o], this.size--;
                        for (o in d) f.push(d[o].selector)
                    }
                }, e.prototype.queryAll = function(e) {
                    if (!this.selectors.length) return [];
                    var t, n, r, o, i, a, c, u, s = {},
                        l = [],
                        f = this.querySelectorAll(this.selectors.join(", "), e);
                    for (t = 0, r = f.length; t < r; t++)
                        for (i = f[t], n = 0, o = (a = this.matches(i)).length; n < o; n++) s[(u = a[n]).id] ? c = s[u.id] : (c = {
                            id: u.id,
                            selector: u.selector,
                            data: u.data,
                            elements: []
                        }, s[u.id] = c, l.push(c)), c.elements.push(i);
                    return l.sort(m)
                }, e.prototype.matches = function(e) {
                    if (!e) return [];
                    var t, n, r, o, i, a, c, u, s, l, f, d = this.activeIndexes,
                        p = {},
                        v = [];
                    for (t = 0, o = d.length; t < o; t++)
                        if (u = (c = d[t]).element(e))
                            for (n = 0, i = u.length; n < i; n++)
                                if (s = c.map.get(u[n]))
                                    for (r = 0, a = s.length; r < a; r++) !p[f = (l = s[r]).id] && this.matchesSelector(e, l.selector) && (p[f] = !0, v.push(l));
                    return v.sort(m)
                }, e
            }()
        }),
        p = n(function(e, t) {
            ! function(e, c) {
                c = c && c.hasOwnProperty("default") ? c["default"] : c;
                var s = {},
                    l = {},
                    f = new WeakMap,
                    d = new WeakMap,
                    p = new WeakMap,
                    n = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");

                function v(e, t, n) {
                    var r = e[t];
                    e[t] = function() {
                        n.apply(e, arguments);
                        return r.apply(e, arguments)
                    };
                    return e
                }

                function h(e, t, n) {
                    var r = [];
                    var o = t;
                    do {
                        if (o.nodeType !== 1) break;
                        var i = e.matches(o);
                        if (i.length) {
                            var a = {
                                node: o,
                                observers: i
                            };
                            if (n) {
                                r.unshift(a)
                            } else {
                                r.push(a)
                            }
                        }
                    } while (o = o.parentElement);
                    return r
                }

                function m() {
                    f.set(this, true)
                }

                function y() {
                    f.set(this, true);
                    d.set(this, true)
                }

                function g() {
                    return p.get(this) || null
                }

                function b(e, t) {
                    if (!n) return;
                    Object.defineProperty(e, "currentTarget", {
                        configurable: true,
                        enumerable: true,
                        get: t || n.get
                    })
                }

                function u(e) {
                    var t = e.eventPhase === 1 ? l : s;
                    var n = t[e.type];
                    if (!n) return;
                    var r = h(n, e.target, e.eventPhase === 1);
                    if (!r.length) return;
                    v(e, "stopPropagation", m);
                    v(e, "stopImmediatePropagation", y);
                    b(e, g);
                    for (var o = 0, i = r.length; o < i; o++) {
                        if (f.get(e)) break;
                        var a = r[o];
                        p.set(e, a.node);
                        for (var c = 0, u = a.observers.length; c < u; c++) {
                            if (d.get(e)) break;
                            a.observers[c].data.call(a.node, e)
                        }
                    }
                    p["delete"](e);
                    b(e)
                }

                function t(e, t, n) {
                    var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
                    var o = r.capture ? true : false;
                    var i = o ? l : s;
                    var a = i[e];
                    if (!a) {
                        a = new c;
                        i[e] = a;
                        document.addEventListener(e, u, o)
                    }
                    a.add(t, n)
                }

                function r(e, t, n) {
                    var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
                    var o = r.capture ? true : false;
                    var i = o ? l : s;
                    var a = i[e];
                    if (!a) return;
                    a.remove(t, n);
                    if (a.size) return;
                    delete i[e];
                    document.removeEventListener(e, u, o)
                }

                function o(e, t, n) {
                    return e.dispatchEvent(new CustomEvent(t, {
                        bubbles: true,
                        cancelable: true,
                        detail: n
                    }))
                }
                e.fire = o, e.off = r, e.on = t, Object.defineProperty(e, "__esModule", {
                    value: true
                })
            }(t, d)
        });
    t(p);
    var T = p.off,
        k = p.on,
        H = 16,
        A = "[data-footnote-button]",
        D = "[data-footnote-id]",
        I = "[data-footnote-popover]",
        v = "is-fully-scrolled";

    function F(e) {
        return e.target
    }

    function R(e) {
        return null == e ? void 0 : e.dataset.footnoteId
    }

    function W(r, o) {
        return function(e) {
            e.preventDefault();
            var t = R(F(e).closest(D)),
                n = t && r(t);
            n && o(n)
        }
    }

    function z(e, t) {
        var r;
        e.addEventListener("wheel", M((r = t, function(e) {
            var t = e.currentTarget,
                n = -e.deltaY;
            0 < n && r.classList.remove(v), t && n <= 0 && n < t.clientHeight + t.scrollTop - t.scrollHeight && r.classList.add(v)
        }), H))
    }

    function C(e) {
        var r, o, i, t, n = e.dismissAll,
            a = e.lookup,
            c = e.hover,
            u = e.repositionAll,
            s = e.resizeAll,
            l = e.toggle,
            f = e.unhover,
            d = (r = a, o = l, function(e) {
                var t = R(F(e).closest(A)),
                    n = t && r(t);
                n ? o(n) : F(e).closest(I) || i()
            }),
            p = (t = i = n, function(e) {
                27 === e.keyCode && t()
            }),
            v = M(u, H),
            h = M(s, H),
            m = W(a, c),
            y = W(a, f);
        return document.addEventListener("touchend", d), document.addEventListener("click", d), document.addEventListener("keyup", p), document.addEventListener("gestureend", v), window.addEventListener("scroll", v), window.addEventListener("resize", h), k("mouseover", D, m), k("mouseout", D, y),
            function() {
                document.removeEventListener("touchend", d), document.removeEventListener("click", d), document.removeEventListener("keyup", p), document.removeEventListener("gestureend", v), window.removeEventListener("scroll", v), window.removeEventListener("resize", h), T("mouseover", D, m), T("mouseout", D, y)
            }
    }
    var q = "footnote-print-only",
        N = "littlefoot-footnote__host",
        U = function(e) {
            return e.classList.add(q)
        };

    function V(e, t) {
        return Array.from(e.querySelectorAll(t))
    }

    function G(e, t) {
        return e.querySelector("." + t) || e.firstElementChild || e
    }

    function $(e) {
        var t = document.createElement("div");
        return t.innerHTML = e, t.firstElementChild
    }

    function B(e) {
        return void 0 !== e
    }

    function Y(e) {
        var t, n, r = (t = e, n = ":not(." + q + ")", Array.from(t.children).filter(function(e) {
                return 8 !== e.nodeType && (!n || e.matches(n))
            })),
            o = r.filter(function(e) {
                return "HR" === e.tagName
            });
        r.length === o.length && (o.concat(e).forEach(U), Y(e.parentElement))
    }

    function J(e) {
        var t = e.parentElement;
        i(e);
        var n = null == t ? void 0 : t.innerHTML.replace("[]", "").replace("&nbsp;", " ").trim();
        t && !n && J(t)
    }

    function K(e, t) {
        var n = e.body.cloneNode(!0);
        return V(n, '[href$="#' + e.referenceId + '"]').forEach(J), {
            original: e,
            data: {
                id: "" + (t + 1),
                number: t + 1,
                reference: e.referenceId,
                content: n.innerHTML.startsWith("<") ? n.innerHTML : "<p>" + n.innerHTML + "</p>"
            }
        }
    }
    var Q = function(o) {
        var i = 0,
            a = null;
        return function(e) {
            var t = e.original,
                n = e.data,
                r = t.reference.closest(o);
            return i = a === r ? i + 1 : 1, a = r, {
                original: t,
                data: s(s({}, n), {
                    number: i
                })
            }
        }
    };

    function X(e) {
        var t = /<%=?\s*(\w+?)\s*%>/g;
        return function(r) {
            return e.replace(t, function(e, t) {
                var n;
                return String(null !== (n = r[t]) && void 0 !== n ? n : "")
            })
        }
    }

    function Z(e) {
        var s, l, i, a, c, u, f, t, n, r = e.allowDuplicates,
            o = e.anchorParentSelector,
            d = e.anchorPattern,
            p = e.buttonTemplate,
            v = e.contentTemplate,
            h = e.footnoteSelector,
            m = e.numberResetSelector,
            y = e.scope,
            g = (t = document, n = d, V(t, y + ' a[href*="#"]').filter(function(e) {
                return (e.href + e.rel).match(n)
            }).map((i = document, a = r, c = o, u = h, f = [], function(e) {
                var t = "#" + e.href.split("#")[1].replace(/[:.+~*[\]]/g, "\\$&"),
                    n = V(i, t).find(function(e) {
                        return a || !f.includes(e)
                    }),
                    r = null == n ? void 0 : n.closest(u);
                if (r) {
                    f.push(r);
                    var o = e.closest(c) || e;
                    return {
                        reference: o,
                        referenceId: o.id || e.id,
                        body: r
                    }
                }
            })).filter(B).map(K).map(m ? Q(m) : function(e) {
                return e
            }).map((s = X(p), l = X(v), function(e) {
                var t = e.original,
                    n = e.data,
                    r = n.id,
                    o = $('<span class="' + N + '">' + s(n) + "</span>"),
                    i = o.firstElementChild;
                i.dataset.footnoteButton = "", i.dataset.footnoteId = r, i.dataset.footnoteNumber = "" + n.number;
                var a = $(l(n));
                a.dataset.footnotePopover = "", a.dataset.footnoteId = r;
                var c = G(a, w),
                    u = G(a, b);
                return z(u, a), {
                    original: t,
                    data: n,
                    id: r,
                    button: i,
                    host: o,
                    popover: a,
                    content: u,
                    wrapper: c
                }
            })));
        return g.forEach(function(e) {
            var t, n, r = e.original,
                o = e.host;
            U(r.reference), U(r.body), Y(r.body.parentElement), t = r.reference, n = o, t.insertAdjacentElement("beforebegin", n)
        }), g.map(j)
    }

    function ee(e) {
        e.forEach(function(e) {
            return e.destroy()
        }), V(document, "." + q).forEach(function(e) {
            return e.classList.remove(q)
        })
    }

    function te(e) {
        void 0 === e && (e = {});
        var t, n, r, o, i, a = s(s({}, l), e),
            c = (r = (t = {
                setup: Z,
                addListeners: C,
                cleanup: ee
            }).setup(n = a), o = {
                activate: u,
                dismiss: f,
                lookup: function(t) {
                    return r.find(function(e) {
                        return e.id === t
                    })
                },
                dismissAll: function() {
                    r.forEach(function(e) {
                        return f(e, n.dismissDelay)
                    })
                },
                repositionAll: function() {
                    r.forEach(function(e) {
                        return e.reposition()
                    })
                },
                resizeAll: function() {
                    r.forEach(function(e) {
                        return e.resize()
                    })
                },
                toggle: function(e) {
                    e.isActive() ? f(e, n.dismissDelay) : u(e, n.activateDelay)
                },
                hover: function(e) {
                    e.startHovering(), n.activateOnHover && !e.isActive() && u(e, n.hoverDelay)
                },
                unhover: function(e) {
                    e.stopHovering(), n.dismissOnUnhover && setTimeout(function() {
                        r.filter(function(e) {
                            return !e.isHovered()
                        }).forEach(function(e) {
                            return f(e, n.dismissDelay)
                        })
                    }, n.hoverDelay)
                }
            }, i = t.addListeners(o), s(s({}, o), {
                unmount: function() {
                    i(), t.cleanup(r)
                }
            }));

        function u(t, e) {
            n.allowMultiple || r.filter(function(e) {
                return e.id !== t.id
            }).forEach(function(e) {
                return f(e, n.dismissDelay)
            }), t.isReady() && (t.activate(n.activateCallback), t.reposition(), t.resize(), setTimeout(function() {
                t.ready()
            }, e))
        }
        return {
            activate: function(e, t) {
                void 0 === t && (t = a.activateDelay);
                var n = c.lookup(e);
                n && c.activate(n, t)
            },
            dismiss: function(e, t) {
                void 0 === t && (t = a.dismissDelay);
                var n = e && c.lookup(e);
                n ? c.dismiss(n, t) : c.dismissAll()
            },
            unmount: c.unmount,
            getSetting: function(e) {
                return a[e]
            },
            updateSetting: function(e, t) {
                a[e] = t
            }
        }
    }
    e.default = te, e.littlefoot = te, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});