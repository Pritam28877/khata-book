(this.webpackJsonpkhatabook = this.webpackJsonpkhatabook || []).push([
    [10], {
        418: function(t, e, n) {
            "use strict";
            (function(t) {
                var r = n(425),
                    a = new Worker(t, {
                        name: "db",
                        type: void 0
                    }),
                    i = Object(r.b)(a);
                e.a = i
            }).call(this, n(424))
        },
        424: function(t, e, n) {
            t.exports = n.p + "static/js/db.b9ce6f1b.chunk.worker.js"
        },
        425: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return f
            })), n.d(e, "b", (function() {
                return m
            }));
            var r = n(43),
                a = n(18),
                i = n(4),
                o = n(240),
                c = n(42),
                u = Symbol("Comlink.proxy"),
                s = Symbol("Comlink.endpoint"),
                f = Symbol("Comlink.releaseProxy"),
                d = Symbol("Comlink.thrown"),
                l = function(t) {
                    return "object" === typeof t && null !== t || "function" === typeof t
                },
                v = new Map([
                    ["proxy", {
                        canHandle: function(t) {
                            return l(t) && t[u]
                        },
                        serialize: function(t) {
                            var e = new MessageChannel,
                                n = e.port1,
                                r = e.port2;
                            return function t(e) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : self;
                                n.addEventListener("message", (function r(u) {
                                    if (u && u.data) {
                                        var s, f = Object.assign({
                                                path: []
                                            }, u.data),
                                            l = f.id,
                                            v = f.type,
                                            m = f.path,
                                            b = (u.data.argumentList || []).map(O);
                                        try {
                                            var g = m.slice(0, -1).reduce((function(t, e) {
                                                    return t[e]
                                                }), e),
                                                h = m.reduce((function(t, e) {
                                                    return t[e]
                                                }), e);
                                            switch (v) {
                                                case "GET":
                                                    s = h;
                                                    break;
                                                case "SET":
                                                    g[m.slice(-1)[0]] = O(u.data.value), s = !0;
                                                    break;
                                                case "APPLY":
                                                    s = h.apply(g, b);
                                                    break;
                                                case "CONSTRUCT":
                                                    var T;
                                                    s = E(Object(o.a)(h, Object(c.a)(b)));
                                                    break;
                                                case "ENDPOINT":
                                                    var w = new MessageChannel,
                                                        j = w.port1,
                                                        N = w.port2;
                                                    t(e, N), s = y(j, [j]);
                                                    break;
                                                case "RELEASE":
                                                    s = void 0;
                                                    break;
                                                default:
                                                    return
                                            }
                                        } catch (T) {
                                            s = Object(i.a)({
                                                value: T
                                            }, d, 0)
                                        }
                                        Promise.resolve(s).catch((function(t) {
                                            return Object(i.a)({
                                                value: t
                                            }, d, 0)
                                        })).then((function(t) {
                                            var e = S(t),
                                                i = Object(a.a)(e, 2),
                                                o = i[0],
                                                c = i[1];
                                            n.postMessage(Object.assign(Object.assign({}, o), {
                                                id: l
                                            }), c), "RELEASE" === v && (n.removeEventListener("message", r), p(n))
                                        }))
                                    }
                                })), n.start && n.start()
                            }(t, n), [r, [r]]
                        },
                        deserialize: function(t) {
                            return t.start(), m(t)
                        }
                    }],
                    ["throw", {
                        canHandle: function(t) {
                            return l(t) && d in t
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

            function p(t) {
                (function(t) {
                    return "MessagePort" === t.constructor.name
                })(t) && t.close()
            }

            function m(t, e) {
                return function t(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {},
                        i = !1,
                        o = new Proxy(r, {
                            get: function(r, a) {
                                if (b(i), a === f) return function() {
                                    return T(e, {
                                        type: "RELEASE",
                                        path: n.map((function(t) {
                                            return t.toString()
                                        }))
                                    }).then((function() {
                                        p(e), i = !0
                                    }))
                                };
                                if ("then" === a) {
                                    if (0 === n.length) return {
                                        then: function() {
                                            return o
                                        }
                                    };
                                    var u = T(e, {
                                        type: "GET",
                                        path: n.map((function(t) {
                                            return t.toString()
                                        }))
                                    }).then(O);
                                    return u.then.bind(u)
                                }
                                return t(e, [].concat(Object(c.a)(n), [a]))
                            },
                            set: function(t, r, o) {
                                b(i);
                                var u = S(o),
                                    s = Object(a.a)(u, 2),
                                    f = s[0],
                                    d = s[1];
                                return T(e, {
                                    type: "SET",
                                    path: [].concat(Object(c.a)(n), [r]).map((function(t) {
                                        return t.toString()
                                    })),
                                    value: f
                                }, d).then(O)
                            },
                            apply: function(r, o, c) {
                                b(i);
                                var u = n[n.length - 1];
                                if (u === s) return T(e, {
                                    type: "ENDPOINT"
                                }).then(O);
                                if ("bind" === u) return t(e, n.slice(0, -1));
                                var f = g(c),
                                    d = Object(a.a)(f, 2),
                                    l = d[0],
                                    v = d[1];
                                return T(e, {
                                    type: "APPLY",
                                    path: n.map((function(t) {
                                        return t.toString()
                                    })),
                                    argumentList: l
                                }, v).then(O)
                            },
                            construct: function(t, r) {
                                b(i);
                                var o = g(r),
                                    c = Object(a.a)(o, 2),
                                    u = c[0],
                                    s = c[1];
                                return T(e, {
                                    type: "CONSTRUCT",
                                    path: n.map((function(t) {
                                        return t.toString()
                                    })),
                                    argumentList: u
                                }, s).then(O)
                            }
                        });
                    return o
                }(t, [], e)
            }

            function b(t) {
                if (t) throw new Error("Proxy has been released and is not useable")
            }

            function g(t) {
                var e, n = t.map(S);
                return [n.map((function(t) {
                    return t[0]
                })), (e = n.map((function(t) {
                    return t[1]
                })), Array.prototype.concat.apply([], e))]
            }
            var h = new WeakMap;

            function y(t, e) {
                return h.set(t, e), t
            }

            function E(t) {
                return Object.assign(t, Object(i.a)({}, u, !0))
            }

            function S(t) {
                var e, n = Object(r.a)(v);
                try {
                    for (n.s(); !(e = n.n()).done;) {
                        var i = Object(a.a)(e.value, 2),
                            o = i[0],
                            c = i[1];
                        if (c.canHandle(t)) {
                            var u = c.serialize(t),
                                s = Object(a.a)(u, 2);
                            return [{
                                type: "HANDLER",
                                name: o,
                                value: s[0]
                            }, s[1]]
                        }
                    }
                } catch (f) {
                    n.e(f)
                } finally {
                    n.f()
                }
                return [{
                    type: "RAW",
                    value: t
                }, h.get(t) || []]
            }

            function O(t) {
                switch (t.type) {
                    case "HANDLER":
                        return v.get(t.name).deserialize(t.value);
                    case "RAW":
                        return t.value
                }
            }

            function T(t, e, n) {
                return new Promise((function(r) {
                    var a = new Array(4).fill(0).map((function() {
                        return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)
                    })).join("-");
                    t.addEventListener("message", (function e(n) {
                        n.data && n.data.id && n.data.id === a && (t.removeEventListener("message", e), r(n.data))
                    })), t.start && t.start(), t.postMessage(Object.assign({
                        id: a
                    }, e), n)
                }))
            }
        },
        516: function(t, e, n) {
            "use strict";
            var r;
            n.d(e, "a", (function() {
                    return r
                })),
                function(t) {
                    t.LOGIN_FAILED = "LOGIN_FAILED", t.SOMETHING_WENT_WRONG = "SOMETHING_WENT_WRONG", t.NONE = "NONE"
                }(r || (r = {}))
        },
        930: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, a, i = n(0),
                o = n(193),
                c = function() {
                    if (void 0 !== r) return r;
                    window.localStorage.setItem("KB_STORAGE_TEST", "TEST_DATA");
                    var t = window.localStorage.getItem("KB_STORAGE_TEST");
                    return r = "TEST_DATA" === t
                },
                u = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (!1 === c()) return !1;
                    var e = window.localStorage.getItem(o.b);
                    if (null === e) return !0;
                    try {
                        var n = JSON.parse(e),
                            r = (new Date).getTime(),
                            a = t ? 1e4 : 36e5;
                        return !(n.isSyncing && void 0 !== n.syncStartTime && r - n.syncStartTime < a) && !(!1 === n.isSyncing && void 0 !== n.lastSyncTime && r - n.lastSyncTime < a)
                    } catch (i) {
                        return !1
                    }
                },
                s = n(84),
                f = n(232),
                d = n(418),
                l = n(516),
                v = n(106),
                p = !1,
                m = !1,
                b = !1,
                g = function(t, e) {
                    return void 0 !== a ? a : (m = !0, function() {
                        if (!1 !== c()) {
                            var t = {
                                isSyncing: !0,
                                syncStartTime: (new Date).getTime()
                            };
                            window.localStorage.setItem(o.b, JSON.stringify(t))
                        }
                    }(), a = d.a.syncData(t, e).then((function(t) {
                        return p = !0, m = !1, b = t.status, t
                    })).catch((function(t) {
                        return Object(s.a)(t, {
                            tags: {
                                module: v.a.SYNC
                            },
                            extra: {
                                worker: "SYNC_DATA"
                            }
                        }), p = !1, m = !1, {
                            status: !1,
                            error: l.a.SOMETHING_WENT_WRONG,
                            isBookUpdated: !1,
                            isCustomerUpdated: !1,
                            isTransactionUpdated: !1,
                            isInvoiceUpdated: !1,
                            isPayoutUpdated: !1
                        }
                    })).then((function(t) {
                        return function() {
                            if (!1 !== c()) {
                                var t = {
                                    lastSyncTime: (new Date).getTime(),
                                    isSyncing: !1
                                };
                                window.localStorage.setItem(o.b, JSON.stringify(t))
                            }
                        }(), t.isCustomerUpdated && Object(f.c)(), t.isTransactionUpdated && Object(f.g)(), t.isInvoiceUpdated && Object(f.e)(), t
                    })))
                },
                h = n(94);
            e.default = Object(i.memo)((function(t) {
                var e = t.setIsSynced,
                    n = t.setIsLocalSynced,
                    r = Object(h.a)(),
                    o = r.getDeviceInfo,
                    c = r.getUserInfo;
                return Object(i.useEffect)((function() {
                    var t = !0,
                        r = o(),
                        i = c();
                    if (p) return e(!0), void n(b);
                    if (!m) {
                        if (!1 === u(!0) || void 0 === i || void 0 === r) return e(!0), void n(!1);
                        var s = r.token,
                            f = i.user_id;
                        return g(s, f).then((function(r) {
                                !1 !== t && (e(!0), n(r.status))
                            })),
                            function() {
                                t = !1
                            }
                    }
                    a.then((function(t) {
                        e(!0), n(t.status)
                    }))
                }), [o, c, n, e]), Object(i.useEffect)((function() {
                    var t = o(),
                        e = c(),
                        n = function() {
                            if (!document.hidden && !1 !== u() && void 0 !== e && void 0 !== t) {
                                var n = t.token,
                                    r = e.user_id;
                                g(n, r)
                            }
                        };
                    return document.addEventListener("visibilitychange", n, !1),
                        function() {
                            document.removeEventListener("visibilitychange", n)
                        }
                }), [o, c]), null
            }))
        }
    }
]);
//# sourceMappingURL=background-sync.0bfd4e8b.chunk.js.map