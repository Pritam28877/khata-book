! function(t) {
    self.webpackChunk = function(e, n) {
        for (var o in n) t[o] = n[o];
        for (; e.length;) r[e.pop()] = 1
    };
    var e = {},
        r = {
            0: 1
        },
        n = {};
    var o = {
        4: function() {
            return {
                "./squoosh_oxipng_bg.js": {
                    __wbindgen_throw: function(t, r) {
                        return e[3].exports.a(t, r)
                    }
                }
            }
        },
        5: function() {
            return {}
        }
    };

    function i(r) {
        if (e[r]) return e[r].exports;
        var n = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.e = function(t) {
        var e = [];
        return e.push(Promise.resolve().then((function() {
            r[t] || importScripts(i.p + "static/js/" + ({
                1: "process-png",
                2: "process-resize"
            }[t] || t) + "." + {
                1: "36d1f207",
                2: "60b3ffd9"
            }[t] + ".chunk.worker.js")
        }))), ({
            1: [4],
            2: [5]
        }[t] || []).forEach((function(t) {
            var r = n[t];
            if (r) e.push(r);
            else {
                var a, u = o[t](),
                    c = fetch(i.p + "" + {
                        4: "a0dd62daf0ec3da58f91",
                        5: "a61ef7685f6b26df1420"
                    }[t] + ".module.wasm");
                if (u instanceof Promise && "function" === typeof WebAssembly.compileStreaming) a = Promise.all([WebAssembly.compileStreaming(c), u]).then((function(t) {
                    return WebAssembly.instantiate(t[0], t[1])
                }));
                else if ("function" === typeof WebAssembly.instantiateStreaming) a = WebAssembly.instantiateStreaming(c, u);
                else {
                    a = c.then((function(t) {
                        return t.arrayBuffer()
                    })).then((function(t) {
                        return WebAssembly.instantiate(t, u)
                    }))
                }
                e.push(n[t] = a.then((function(e) {
                    return i.w[t] = (e.instance || e).exports
                })))
            }
        })), Promise.all(e)
    }, i.m = t, i.c = e, i.d = function(t, e, r) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, i.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (i.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var n in t) i.d(r, n, function(e) {
                return t[e]
            }.bind(null, n));
        return r
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "/", i.w = {}, i(i.s = 2)
}([function(t, e, r) {
    t.exports = r(1)
}, function(t, e, r) {
    var n = function(t) {
        "use strict";
        var e = Object.prototype,
            r = e.hasOwnProperty,
            n = "function" === typeof Symbol ? Symbol : {},
            o = n.iterator || "@@iterator",
            i = n.asyncIterator || "@@asyncIterator",
            a = n.toStringTag || "@@toStringTag";

        function u(t, e, r) {
            return Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), t[e]
        }
        try {
            u({}, "")
        } catch (L) {
            u = function(t, e, r) {
                return t[e] = r
            }
        }

        function c(t, e, r, n) {
            var o = e && e.prototype instanceof l ? e : l,
                i = Object.create(o.prototype),
                a = new x(n || []);
            return i._invoke = function(t, e, r) {
                var n = "suspendedStart";
                return function(o, i) {
                    if ("executing" === n) throw new Error("Generator is already running");
                    if ("completed" === n) {
                        if ("throw" === o) throw i;
                        return O()
                    }
                    for (r.method = o, r.arg = i;;) {
                        var a = r.delegate;
                        if (a) {
                            var u = w(a, r);
                            if (u) {
                                if (u === s) continue;
                                return u
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if ("suspendedStart" === n) throw n = "completed", r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        n = "executing";
                        var c = f(t, e, r);
                        if ("normal" === c.type) {
                            if (n = r.done ? "completed" : "suspendedYield", c.arg === s) continue;
                            return {
                                value: c.arg,
                                done: r.done
                            }
                        }
                        "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                    }
                }
            }(t, r, a), i
        }

        function f(t, e, r) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, r)
                }
            } catch (L) {
                return {
                    type: "throw",
                    arg: L
                }
            }
        }
        t.wrap = c;
        var s = {};

        function l() {}

        function p() {}

        function h() {}
        var y = {};
        u(y, o, (function() {
            return this
        }));
        var v = Object.getPrototypeOf,
            d = v && v(v(j([])));
        d && d !== e && r.call(d, o) && (y = d);
        var m = h.prototype = l.prototype = Object.create(y);

        function g(t) {
            ["next", "throw", "return"].forEach((function(e) {
                u(t, e, (function(t) {
                    return this._invoke(e, t)
                }))
            }))
        }

        function b(t, e) {
            var n;
            this._invoke = function(o, i) {
                function a() {
                    return new e((function(n, a) {
                        ! function n(o, i, a, u) {
                            var c = f(t[o], t, i);
                            if ("throw" !== c.type) {
                                var s = c.arg,
                                    l = s.value;
                                return l && "object" === typeof l && r.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
                                    n("next", t, a, u)
                                }), (function(t) {
                                    n("throw", t, a, u)
                                })) : e.resolve(l).then((function(t) {
                                    s.value = t, a(s)
                                }), (function(t) {
                                    return n("throw", t, a, u)
                                }))
                            }
                            u(c.arg)
                        }(o, i, n, a)
                    }))
                }
                return n = n ? n.then(a, a) : a()
            }
        }

        function w(t, e) {
            var r = t.iterator[e.method];
            if (void 0 === r) {
                if (e.delegate = null, "throw" === e.method) {
                    if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return s;
                    e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return s
            }
            var n = f(r, t.iterator, e.arg);
            if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, s;
            var o = n.arg;
            return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, s) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, s)
        }

        function E(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function S(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e
        }

        function x(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }], t.forEach(E, this), this.reset(!0)
        }

        function j(t) {
            if (t) {
                var e = t[o];
                if (e) return e.call(t);
                if ("function" === typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var n = -1,
                        i = function e() {
                            for (; ++n < t.length;)
                                if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                            return e.value = void 0, e.done = !0, e
                        };
                    return i.next = i
                }
            }
            return {
                next: O
            }
        }

        function O() {
            return {
                value: void 0,
                done: !0
            }
        }
        return p.prototype = h, u(m, "constructor", h), u(h, "constructor", p), p.displayName = u(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
            var e = "function" === typeof t && t.constructor;
            return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
        }, t.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, u(t, a, "GeneratorFunction")), t.prototype = Object.create(m), t
        }, t.awrap = function(t) {
            return {
                __await: t
            }
        }, g(b.prototype), u(b.prototype, i, (function() {
            return this
        })), t.AsyncIterator = b, t.async = function(e, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new b(c(e, r, n, o), i);
            return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                return t.done ? t.value : a.next()
            }))
        }, g(m), u(m, a, "Generator"), u(m, o, (function() {
            return this
        })), u(m, "toString", (function() {
            return "[object Generator]"
        })), t.keys = function(t) {
            var e = [];
            for (var r in t) e.push(r);
            return e.reverse(),
                function r() {
                    for (; e.length;) {
                        var n = e.pop();
                        if (n in t) return r.value = n, r.done = !1, r
                    }
                    return r.done = !0, r
                }
        }, t.values = j, x.prototype = {
            constructor: x,
            reset: function(t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), !t)
                    for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done) throw t;
                var e = this;

                function n(r, n) {
                    return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var i = this.tryEntries[o],
                        a = i.completion;
                    if ("root" === i.tryLoc) return n("end");
                    if (i.tryLoc <= this.prev) {
                        var u = r.call(i, "catchLoc"),
                            c = r.call(i, "finallyLoc");
                        if (u && c) {
                            if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                        } else if (u) {
                            if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                        } else {
                            if (!c) throw new Error("try statement without catch or finally");
                            if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var o = this.tryEntries[n];
                    if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var i = o;
                        break
                    }
                }
                i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, s) : this.complete(a)
            },
            complete: function(t, e) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), s
            },
            finish: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), S(r), s
                }
            },
            catch: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.tryLoc === t) {
                        var n = r.completion;
                        if ("throw" === n.type) {
                            var o = n.arg;
                            S(r)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, e, r) {
                return this.delegate = {
                    iterator: j(t),
                    resultName: e,
                    nextLoc: r
                }, "next" === this.method && (this.arg = void 0), s
            }
        }, t
    }(t.exports);
    try {
        regeneratorRuntime = n
    } catch (o) {
        "object" === typeof globalThis ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n)
    }
}, function(t, e, r) {
    "use strict";
    r.r(e), r.d(e, "resize", (function() {
        return z
    }));
    var n = r(0),
        o = r.n(n);

    function i(t, e, r, n, o, i, a) {
        try {
            var u = t[i](a),
                c = u.value
        } catch (f) {
            return void r(f)
        }
        u.done ? e(c) : Promise.resolve(c).then(n, o)
    }

    function a(t) {
        return function() {
            var e = this,
                r = arguments;
            return new Promise((function(n, o) {
                var a = t.apply(e, r);

                function u(t) {
                    i(a, n, o, u, c, "next", t)
                }

                function c(t) {
                    i(a, n, o, u, c, "throw", t)
                }
                u(void 0)
            }))
        }
    }

    function u(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }

    function c(t, e) {
        if (t) {
            if ("string" === typeof t) return u(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? u(t, e) : void 0
        }
    }

    function f(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) {
                var r = [],
                    n = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, u = t[Symbol.iterator](); !(n = (a = u.next()).done) && (r.push(a.value), !e || r.length !== e); n = !0);
                } catch (c) {
                    o = !0, i = c
                } finally {
                    try {
                        n || null == u.return || u.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return r
            }
        }(t, e) || c(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function s(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function l(t, e) {
        return (l = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function p() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
        } catch (t) {
            return !1
        }
    }

    function h(t, e, r) {
        return (h = p() ? Reflect.construct : function(t, e, r) {
            var n = [null];
            n.push.apply(n, e);
            var o = new(Function.bind.apply(t, n));
            return r && l(o, r.prototype), o
        }).apply(null, arguments)
    }

    function y(t) {
        return function(t) {
            if (Array.isArray(t)) return u(t)
        }(t) || function(t) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || c(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var v = Symbol("Comlink.proxy"),
        d = Symbol("Comlink.endpoint"),
        m = Symbol("Comlink.releaseProxy"),
        g = Symbol("Comlink.thrown"),
        b = function(t) {
            return "object" === typeof t && null !== t || "function" === typeof t
        },
        w = new Map([
            ["proxy", {
                canHandle: function(t) {
                    return b(t) && t[v]
                },
                serialize: function(t) {
                    var e = new MessageChannel,
                        r = e.port1,
                        n = e.port2;
                    return E(t, r), [n, [n]]
                },
                deserialize: function(t) {
                    return t.start(),
                        function t(e) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {},
                                o = !1,
                                i = new Proxy(n, {
                                    get: function(n, a) {
                                        if (x(o), a === m) return function() {
                                            return k(e, {
                                                type: "RELEASE",
                                                path: r.map((function(t) {
                                                    return t.toString()
                                                }))
                                            }).then((function() {
                                                S(e), o = !0
                                            }))
                                        };
                                        if ("then" === a) {
                                            if (0 === r.length) return {
                                                then: function() {
                                                    return i
                                                }
                                            };
                                            var u = k(e, {
                                                type: "GET",
                                                path: r.map((function(t) {
                                                    return t.toString()
                                                }))
                                            }).then(P);
                                            return u.then.bind(u)
                                        }
                                        return t(e, [].concat(y(r), [a]))
                                    },
                                    set: function(t, n, i) {
                                        x(o);
                                        var a = f(A(i), 2),
                                            u = a[0],
                                            c = a[1];
                                        return k(e, {
                                            type: "SET",
                                            path: [].concat(y(r), [n]).map((function(t) {
                                                return t.toString()
                                            })),
                                            value: u
                                        }, c).then(P)
                                    },
                                    apply: function(n, i, a) {
                                        x(o);
                                        var u = r[r.length - 1];
                                        if (u === d) return k(e, {
                                            type: "ENDPOINT"
                                        }).then(P);
                                        if ("bind" === u) return t(e, r.slice(0, -1));
                                        var c = f(j(a), 2),
                                            s = c[0],
                                            l = c[1];
                                        return k(e, {
                                            type: "APPLY",
                                            path: r.map((function(t) {
                                                return t.toString()
                                            })),
                                            argumentList: s
                                        }, l).then(P)
                                    },
                                    construct: function(t, n) {
                                        x(o);
                                        var i = f(j(n), 2),
                                            a = i[0],
                                            u = i[1];
                                        return k(e, {
                                            type: "CONSTRUCT",
                                            path: r.map((function(t) {
                                                return t.toString()
                                            })),
                                            argumentList: a
                                        }, u).then(P)
                                    }
                                });
                            return i
                        }(t, [], e);
                    var e
                }
            }],
            ["throw", {
                canHandle: function(t) {
                    return b(t) && g in t
                },
                serialize: function(t) {
                    var e = t.value;
                    return [e instanceof Error ? {
                            isError: !0,
                            value: {
                                message: e.message,
                                name: e.name,
                                stack: e.stack
                            }
                        } : {
                            isError: !1,
                            value: e
                        },
                        []
                    ]
                },
                deserialize: function(t) {
                    if (t.isError) throw Object.assign(new Error(t.value.message), t.value);
                    throw t.value
                }
            }]
        ]);

    function E(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : self;
        e.addEventListener("message", (function r(n) {
            if (n && n.data) {
                var o, i = Object.assign({
                        path: []
                    }, n.data),
                    a = i.id,
                    u = i.type,
                    c = i.path,
                    l = (n.data.argumentList || []).map(P);
                try {
                    var p = c.slice(0, -1).reduce((function(t, e) {
                            return t[e]
                        }), t),
                        v = c.reduce((function(t, e) {
                            return t[e]
                        }), t);
                    switch (u) {
                        case "GET":
                            o = v;
                            break;
                        case "SET":
                            p[c.slice(-1)[0]] = P(n.data.value), o = !0;
                            break;
                        case "APPLY":
                            o = v.apply(p, l);
                            break;
                        case "CONSTRUCT":
                            var d;
                            o = _(h(v, y(l)));
                            break;
                        case "ENDPOINT":
                            var m = new MessageChannel,
                                b = m.port1,
                                w = m.port2;
                            E(t, w), o = L(b, [b]);
                            break;
                        case "RELEASE":
                            o = void 0;
                            break;
                        default:
                            return
                    }
                } catch (d) {
                    o = s({
                        value: d
                    }, g, 0)
                }
                Promise.resolve(o).catch((function(t) {
                    return s({
                        value: t
                    }, g, 0)
                })).then((function(t) {
                    var n = f(A(t), 2),
                        o = n[0],
                        i = n[1];
                    e.postMessage(Object.assign(Object.assign({}, o), {
                        id: a
                    }), i), "RELEASE" === u && (e.removeEventListener("message", r), S(e))
                }))
            }
        })), e.start && e.start()
    }

    function S(t) {
        (function(t) {
            return "MessagePort" === t.constructor.name
        })(t) && t.close()
    }

    function x(t) {
        if (t) throw new Error("Proxy has been released and is not useable")
    }

    function j(t) {
        var e, r = t.map(A);
        return [r.map((function(t) {
            return t[0]
        })), (e = r.map((function(t) {
            return t[1]
        })), Array.prototype.concat.apply([], e))]
    }
    var O = new WeakMap;

    function L(t, e) {
        return O.set(t, e), t
    }

    function _(t) {
        return Object.assign(t, s({}, v, !0))
    }

    function A(t) {
        var e, r = function(t) {
            if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (t = c(t))) {
                    var e = 0,
                        r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return e >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[e++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var n, o, i = !0,
                a = !1;
            return {
                s: function() {
                    n = t[Symbol.iterator]()
                },
                n: function() {
                    var t = n.next();
                    return i = t.done, t
                },
                e: function(t) {
                    a = !0, o = t
                },
                f: function() {
                    try {
                        i || null == n.return || n.return()
                    } finally {
                        if (a) throw o
                    }
                }
            }
        }(w);
        try {
            for (r.s(); !(e = r.n()).done;) {
                var n = f(e.value, 2),
                    o = n[0],
                    i = n[1];
                if (i.canHandle(t)) {
                    var a = f(i.serialize(t), 2);
                    return [{
                        type: "HANDLER",
                        name: o,
                        value: a[0]
                    }, a[1]]
                }
            }
        } catch (u) {
            r.e(u)
        } finally {
            r.f()
        }
        return [{
            type: "RAW",
            value: t
        }, O.get(t) || []]
    }

    function P(t) {
        switch (t.type) {
            case "HANDLER":
                return w.get(t.name).deserialize(t.value);
            case "RAW":
                return t.value
        }
    }

    function k(t, e, r) {
        return new Promise((function(n) {
            var o = new Array(4).fill(0).map((function() {
                return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)
            })).join("-");
            t.addEventListener("message", (function e(r) {
                r.data && r.data.id && r.data.id === o && (t.removeEventListener("message", e), n(r.data))
            })), t.start && t.start(), t.postMessage(Object.assign({
                id: o
            }, e), r)
        }))
    }

    function T(t) {
        return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function R(t) {
        return (R = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function M(t, e) {
        return !e || "object" !== R(e) && "function" !== typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function N(t) {
        var e = "function" === typeof Map ? new Map : void 0;
        return (N = function(t) {
            if (null === t || (r = t, -1 === Function.toString.call(r).indexOf("[native code]"))) return t;
            var r;
            if ("function" !== typeof t) throw new TypeError("Super expression must either be null or a function");
            if ("undefined" !== typeof e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n)
            }

            function n() {
                return h(t, arguments, T(this).constructor)
            }
            return n.prototype = Object.create(t.prototype, {
                constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), l(n, t)
        })(t)
    }
    var I = function(t) {
        ! function(t, e) {
            if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && l(t, e)
        }(n, t);
        var e, r = (e = n, function() {
            var t, r = T(e);
            if (p()) {
                var n = T(this).constructor;
                t = Reflect.construct(r, arguments, n)
            } else t = r.apply(this, arguments);
            return M(this, t)
        });

        function n(t, e, o) {
            var i;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, n), (i = r.call(this, t, o)).name = e, i
        }
        return n
    }(N(Blob));

    function C(t, e) {
        return G.apply(this, arguments)
    }

    function G() {
        return (G = a(o.a.mark((function t(e, n) {
            var i, a;
            return o.a.wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, r.e(1).then(r.bind(null, 8));
                    case 2:
                        return i = t.sent, a = i.optimise, t.abrupt("return", a(new Uint8Array(e), n.level).buffer);
                    case 5:
                    case "end":
                        return t.stop()
                }
            }), t)
        })))).apply(this, arguments)
    }
    var z = function() {
        var t = a(o.a.mark((function t(e) {
            var n, i, a, u, c, f;
            return o.a.wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return i = 500, a = 500, (n = e).width > n.height ? n.width < 500 ? (i = n.height, a = n.width) : i = Math.ceil(a * n.height / n.width) : n.height < 500 ? (i = n.height, a = n.width) : a = Math.ceil(i * n.width / n.height), t.next = 6, r.e(2).then(r.bind(null, 7));
                    case 6:
                        return u = t.sent, c = u.resize, f = c(new Uint8Array(n.data.buffer), n.width, n.height, a, i, 3, !0, !0), t.abrupt("return", new ImageData(new Uint8ClampedArray(f.buffer), a, i));
                    case 10:
                    case "end":
                        return t.stop()
                }
            }), t)
        })));
        return function(e) {
            return t.apply(this, arguments)
        }
    }();
    E({
        resize: z,
        compressImage: function() {
            var t = a(o.a.mark((function t(e, r) {
                var n, i;
                return o.a.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, new Response(e).arrayBuffer();
                        case 2:
                            return n = t.sent, t.next = 5, C(n, {
                                level: 2
                            });
                        case 5:
                            return i = t.sent, t.abrupt("return", new I([i], r.replace(/.[^.]*$/, ".".concat("png")), {
                                type: "image/png"
                            }));
                        case 7:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })));
            return function(e, r) {
                return t.apply(this, arguments)
            }
        }()
    })
}]);
//# sourceMappingURL=img.3a11cdaf.chunk.worker.js.map