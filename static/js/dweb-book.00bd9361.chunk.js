(this.webpackJsonpkhatabook = this.webpackJsonpkhatabook || []).push([
    [15], {
        421: function(e, t, a) {
            "use strict";
            var n = a(233),
                o = a(0),
                r = a.n(o);
            t.a = Object(o.memo)((function() {
                var e = Object(n.b)().currency;
                return r.a.createElement(r.a.Fragment, null, e)
            }))
        },
        422: function(e, t, a) {
            "use strict";
            a.d(t, "b", (function() {
                return r
            })), a.d(t, "a", (function() {
                return c
            })), a.d(t, "c", (function() {
                return i
            }));
            var n = a(18),
                o = a(440),
                r = function(e) {
                    return void 0 !== Intl ? (new Intl.NumberFormat).format(e) : String(e)
                },
                c = function(e) {
                    return Math.abs(e).toString().split(".")[0].length < 7 ? void 0 !== Intl ? (new Intl.NumberFormat).format(i(Math.abs(e))) : String(i(e)) : l(e)
                },
                i = function(e) {
                    return Math.round(100 * (Number(e) + Number.EPSILON)) / 100
                },
                l = function(e) {
                    var t = function(e) {
                            var t = Math.abs(e),
                                a = t,
                                n = "";
                            return t >= o.b.KHARAB ? (a /= o.b.KHARAB, a *= 1e4, n = o.c.CRORE) : t >= o.b.ARAB ? (a /= o.b.ARAB, a *= 100, n = o.c.CRORE) : t >= o.b.CRORE ? (a /= o.b.CRORE, n = o.c.CRORE) : t >= o.b.LAKHS && (a /= o.b.LAKHS, n = o.c.LAKHS), [i(a), n]
                        }(e),
                        a = Object(n.a)(t, 2),
                        r = a[0],
                        c = a[1];
                    return "".concat(r).concat(c)
                }
        },
        426: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return o
            }));
            var n = a(18),
                o = function(e) {
                    var t = e.trim().split(/\s+/g),
                        a = Object(n.a)(t, 2),
                        o = a[0],
                        r = a[1];
                    return (o[0] + (r ? r[0] : "")).toUpperCase()
                }
        },
        427: function(e, t, a) {
            "use strict";
            var n = a(0),
                o = a.n(n),
                r = a(184),
                c = a(9),
                i = Object(r.a)((function(e) {
                    return {
                        root: {
                            minHeight: "64px",
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "".concat(c.c.WHITE)
                        }
                    }
                }));
            t.a = Object(n.memo)((function(e) {
                var t = e.children,
                    a = e.className,
                    n = void 0 === a ? "" : a,
                    r = i();
                return o.a.createElement("div", {
                    className: "".concat(r.root, " ").concat(n)
                }, t)
            }))
        },
        428: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return n
            })), a.d(t, "g", (function() {
                return i
            })), a.d(t, "e", (function() {
                return l
            })), a.d(t, "f", (function() {
                return s
            })), a.d(t, "d", (function() {
                return d
            })), a.d(t, "k", (function() {
                return u
            })), a.d(t, "c", (function() {
                return m
            })), a.d(t, "j", (function() {
                return p
            })), a.d(t, "i", (function() {
                return b
            })), a.d(t, "b", (function() {
                return f
            })), a.d(t, "h", (function() {
                return C
            }));
            var n, o = a(243),
                r = a.n(o),
                c = (a(491), a(441));
            ! function(e) {
                e[e.SECONDS = 0] = "SECONDS", e[e.MINUTES = 1] = "MINUTES", e[e.HOURS = 2] = "HOURS", e[e.DAYS = 3] = "DAYS", e[e.WEEKS = 4] = "WEEKS", e[e.YEARS = 5] = "YEARS"
            }(n || (n = {}));
            var i = function(e) {
                    var t = (new Date).getTime() - e;
                    return t < 6e4 ? {
                        value: Math.floor(t / 1e3),
                        type: n.SECONDS
                    } : t < 36e5 ? {
                        value: Math.floor(t / 6e4),
                        type: n.MINUTES
                    } : t < 864e5 ? {
                        value: Math.floor(t / 36e5),
                        type: n.HOURS
                    } : t < 6048e5 ? {
                        value: Math.floor(t / 864e5),
                        type: n.DAYS
                    } : t < 31536e6 ? {
                        value: Math.floor(t / 6048e5),
                        type: n.WEEKS
                    } : {
                        value: Math.floor(t / 31536e6),
                        type: n.YEARS
                    }
                },
                l = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    try {
                        var a = new Date(e),
                            n = a.getDate(),
                            o = c.b[a.getMonth()],
                            r = t ? a.getFullYear() : a.getFullYear().toString().substr(-2);
                        return "".concat(n, " ").concat(o, " ").concat(r)
                    } catch (i) {
                        return e
                    }
                },
                s = function(e) {
                    var t = new Date(e),
                        a = t.getHours(),
                        n = "AM";
                    a > 12 && (a -= 12, n = "PM");
                    var o = String(a);
                    a < 10 && (o = "0".concat(a));
                    var r = t.getMinutes(),
                        c = String(r);
                    return r < 10 && (c = "0".concat(r)), "".concat(o, ":").concat(c, " ").concat(n)
                },
                d = function(e) {
                    if (void 0 === e) return "";
                    var t = new Date(+e),
                        a = t.getDate(),
                        n = t.getMonth() + 1,
                        o = t.getFullYear();
                    return "".concat(a, "/").concat(n, "/").concat(o, " - ").concat(function(e) {
                        var t = e.getHours(),
                            a = e.getMinutes(),
                            n = t >= 12 ? "PM" : "AM";
                        return (t = (t %= 12) || 12) + ":" + (a = a < 10 ? "0" + a : a) + " " + n
                    }(t))
                },
                u = function(e, t) {
                    if (void 0 === e) return "";
                    var a = "pa" === t ? "pa-in" : t,
                        n = r.a.locales().includes(a || "");
                    return a && n ? r()(+e).locale(a || "en").fromNow() : r()(+e).locale("en").fromNow()
                },
                m = function(e) {
                    return r()(e).toDate()
                },
                p = function(e, t) {
                    return r()(e).isSame(t, "day")
                },
                b = function(e, t, a) {
                    return (r()(e).isAfter(t) || p(e, t)) && (r()(e).isBefore(a) || p(e, a))
                },
                f = function(e) {
                    return e.getTime()
                },
                C = function(e) {
                    var t = i(e),
                        a = t.value,
                        o = "";
                    switch (t.type) {
                        case n.SECONDS:
                            o = 0 === a ? "just_now" : "home_seconds_ago";
                            break;
                        case n.MINUTES:
                            o = "home_minutes_ago";
                            break;
                        case n.HOURS:
                            o = "home_hours_ago";
                            break;
                        case n.DAYS:
                            o = "home_days_ago";
                            break;
                        case n.WEEKS:
                            o = "home_weeks_ago";
                            break;
                        case n.YEARS:
                            o = "home_years_ago"
                    }
                    return {
                        timeValue: a,
                        timeTranslationKey: o
                    }
                }
        },
        429: function(e, t, a) {
            "use strict";
            var n = a(18),
                o = a(0),
                r = a.n(o),
                c = a(184),
                i = a(225),
                l = a(646),
                s = a(271),
                d = a(9),
                u = a(241),
                m = Object(c.a)((function() {
                    return {
                        highlightedText: {
                            backgroundColor: d.d.HIGHLIGHT_COLOR,
                            padding: "0",
                            borderRadius: "2px",
                            fontWeight: 500,
                            lineHeight: "15px"
                        }
                    }
                }));
            var p = Object(o.memo)((function(e) {
                    var t = e.text,
                        a = e.highlightStyle,
                        n = m(),
                        o = Object(u.b)().searchText,
                        c = o.length > 0,
                        i = c ? t.split(new RegExp("(".concat(o, ")"), "gi")) : [];
                    return r.a.createElement(r.a.Fragment, null, c ? i.map((function(e, t) {
                        return r.a.createElement("span", {
                            key: t,
                            className: e.toLowerCase() === o.toLowerCase() ? " ".concat(n.highlightedText, " ").concat(a) : ""
                        }, e)
                    })) : t)
                })),
                b = Object(c.a)({
                    tooltip: {
                        fontSize: "14px",
                        opacity: 1
                    }
                });
            t.a = Object(o.memo)((function(e) {
                var t = e.text,
                    a = e.className,
                    c = e.placement,
                    d = (e.arrow, e.isSearchResult),
                    u = b(),
                    m = Object(o.useRef)(null),
                    f = Object(o.useState)(!1),
                    C = Object(n.a)(f, 2),
                    h = C[0],
                    x = C[1];
                return Object(o.useEffect)((function() {
                    setTimeout((function() {
                        m.current && x((null === m || void 0 === m ? void 0 : m.current.scrollWidth) > (null === m || void 0 === m ? void 0 : m.current.clientWidth))
                    }), 1e3)
                }), [m]), r.a.createElement(l.a, {
                    title: t,
                    disableHoverListener: !h,
                    placement: c || "top-start",
                    arrow: !0,
                    TransitionComponent: function(e) {
                        return r.a.createElement(s.a, Object.assign({}, e, {
                            timeout: 0
                        }))
                    },
                    classes: {
                        tooltip: u.tooltip
                    }
                }, r.a.createElement(i.a, {
                    ref: m,
                    className: a
                }, d ? r.a.createElement(p, {
                    text: t,
                    className: a
                }) : t))
            }))
        },
        430: function(e, t, a) {
            "use strict";
            var n = a(184),
                o = a(9),
                r = Object(n.a)({
                    secondaryBtn: {
                        backgroundColor: o.d.SECONDARY1,
                        fontSize: "18px",
                        fontWeight: 700,
                        color: o.d.WHITE,
                        boxShadow: "none",
                        textTransform: "capitalize",
                        borderRadius: "4px",
                        "&:hover": {
                            backgroundColor: o.d.SECONDARY1,
                            opacity: .8,
                            boxShadow: "none"
                        },
                        "&:disabled": {
                            backgroundColor: o.d.DARK_SECONDARY,
                            color: o.d.WHITE,
                            opacity: .5
                        },
                        "&:active": {
                            backgroundColor: o.d.DARK_SECONDARY,
                            opacity: 1,
                            boxShadow: "none"
                        }
                    },
                    primaryBtn: {
                        backgroundColor: o.d.DARK_PRIMARY,
                        fontSize: "18px",
                        fontWeight: 700,
                        color: o.d.WHITE,
                        boxShadow: "none",
                        textTransform: "capitalize",
                        borderRadius: "4px",
                        "&:hover": {
                            backgroundColor: o.d.DARK_PRIMARY,
                            opacity: .8,
                            boxShadow: "none"
                        },
                        "&:disabled": {
                            backgroundColor: o.d.DARK_PRIMARY,
                            color: o.d.WHITE,
                            opacity: .5
                        },
                        "&:active": {
                            backgroundColor: o.d.DARK_RED,
                            opacity: 1,
                            boxShadow: "none"
                        }
                    },
                    greenBtn: {
                        backgroundColor: o.d.DARK_GREEN,
                        fontSize: "18px",
                        fontWeight: 700,
                        color: o.d.WHITE,
                        boxShadow: "none",
                        textTransform: "capitalize",
                        borderRadius: "4px",
                        "&:hover": {
                            backgroundColor: o.d.DARK_GREEN,
                            opacity: .8,
                            boxShadow: "none"
                        },
                        "&:disabled": {
                            backgroundColor: o.d.DARK_GREEN,
                            color: o.d.WHITE,
                            opacity: .5
                        },
                        "&:active": {
                            backgroundColor: "#056338",
                            opacity: 1,
                            boxShadow: "none"
                        }
                    },
                    paleSecondaryBtn: {
                        backgroundColor: o.d.PALE_BLUE,
                        fontSize: "18px",
                        fontWeight: 700,
                        color: o.d.SECONDARY1,
                        boxShadow: "none",
                        textTransform: "capitalize",
                        borderRadius: "4px",
                        "&:hover": {
                            backgroundColor: "rgba(194, 222, 254, 0.7)",
                            boxShadow: "none"
                        },
                        "&:disabled": {
                            backgroundColor: o.d.PALE_BLUE,
                            color: o.d.SECONDARY1,
                            opacity: .5
                        },
                        "&:active": {
                            backgroundColor: o.d.SECONDARY4,
                            opacity: 1,
                            boxShadow: "none"
                        }
                    },
                    palePrimaryBtn: {
                        backgroundColor: o.d.LIGHT_PRIMARY,
                        fontSize: "14px",
                        fontWeight: 500,
                        color: o.d.DARK_PRIMARY,
                        boxShadow: "none",
                        textTransform: "capitalize",
                        borderRadius: "4px",
                        "&:hover": {
                            background: "rgba(255, 173, 185, 0.7)",
                            boxShadow: "none"
                        },
                        "&:disabled": {
                            backgroundColor: o.d.LIGHT_PRIMARY,
                            color: o.d.DARK_PRIMARY,
                            opacity: .5
                        },
                        "&:active": {
                            backgroundColor: o.d.PALE_RED,
                            opacity: 1,
                            boxShadow: "none"
                        }
                    },
                    paleGreenBtn: {
                        backgroundColor: o.d.PALE_GREEN,
                        fontSize: "14px",
                        fontWeight: 500,
                        color: o.d.DARK_GREEN,
                        boxShadow: "none",
                        textTransform: "capitalize",
                        borderRadius: "4px",
                        "&:hover": {
                            backgroundColor: "rgba(60, 177, 124, 0.3)",
                            boxShadow: "none"
                        },
                        "&:disabled": {
                            backgroundColor: o.d.PALE_GREEN,
                            color: o.d.DARK_GREEN,
                            opacity: .5
                        },
                        "&:active": {
                            backgroundColor: "rgba(60, 177, 124, 0.5)",
                            opacity: 1,
                            boxShadow: "none"
                        }
                    },
                    outlinedSecondaryBtn: {
                        backgroundColor: o.d.WHITE,
                        fontSize: "14px",
                        fontWeight: 500,
                        color: o.d.SECONDARY2,
                        boxShadow: "none",
                        textTransform: "capitalize",
                        border: "1px solid ".concat(o.d.SECONDARY2),
                        borderRadius: "4px",
                        "&:hover": {
                            backgroundColor: "#F5FBFF",
                            boxShadow: "none"
                        },
                        "&:disabled": {
                            backgroundColor: o.d.WHITE,
                            color: o.d.SECONDARY2,
                            opacity: .5
                        },
                        "&:active": {
                            backgroundColor: o.d.PALE_BLUE,
                            border: "none",
                            opacity: 1,
                            boxShadow: "none"
                        }
                    },
                    outlinedPrimaryBtn: {
                        backgroundColor: o.d.WHITE,
                        fontSize: "14px",
                        fontWeight: 500,
                        color: o.d.DARK_PRIMARY,
                        boxShadow: "none",
                        textTransform: "capitalize",
                        border: "1px solid ".concat(o.d.PALE_RED),
                        borderRadius: "4px",
                        "&:hover": {
                            backgroundColor: "rgba(253, 232, 234, 0.5)",
                            boxShadow: "none"
                        },
                        "&:disabled": {
                            backgroundColor: o.d.WHITE,
                            color: o.d.DARK_PRIMARY,
                            opacity: .5
                        },
                        "&:active": {
                            backgroundColor: o.d.LIGHT_PRIMARY,
                            border: "0",
                            opacity: 1,
                            boxShadow: "none"
                        }
                    },
                    outlinedGreenBtn: {
                        backgroundColor: o.d.WHITE,
                        fontSize: "14px",
                        fontWeight: 500,
                        color: o.d.DARK_GREEN,
                        boxShadow: "none",
                        textTransform: "capitalize",
                        border: "1px solid ".concat(o.d.PALE_GREEN),
                        borderRadius: "4px",
                        "&:hover": {
                            backgroundColor: "rgba(216, 239, 229, 0.5)",
                            boxShadow: "none"
                        },
                        "&:disabled": {
                            backgroundColor: o.d.WHITE,
                            color: o.d.DARK_GREEN,
                            opacity: .5
                        },
                        "&:active": {
                            backgroundColor: o.d.PALE_GREEN,
                            opacity: 1,
                            boxShadow: "none"
                        }
                    },
                    greyBtn: {
                        backgroundColor: o.d.LIGHT_GREY,
                        fontSize: "18px",
                        fontWeight: 700,
                        color: o.d.MEDIUM_DARK_GREY,
                        boxShadow: "none",
                        textTransform: "capitalize",
                        borderRadius: "4px",
                        "&:hover": {
                            backgroundColor: "#E5E8EB",
                            boxShadow: "none"
                        },
                        "&:disabled": {
                            backgroundColor: o.d.LIGHT_GREY,
                            color: o.d.MEDIUM_DARK_GREY,
                            opacity: .5
                        },
                        "&:active": {
                            backgroundColor: "#DADDDF",
                            opacity: 1,
                            boxShadow: "none"
                        }
                    }
                });
            t.a = r
        },
        431: function(e, t, a) {
            "use strict";
            var n, o;
            a.d(t, "c", (function() {
                    return n
                })), a.d(t, "a", (function() {
                    return o
                })), a.d(t, "b", (function() {
                    return r
                })),
                function(e) {
                    e.CREDIT = "credit", e.DEBIT = "debit"
                }(n || (n = {})),
                function(e) {
                    e[e.ADD = 0] = "ADD", e[e.EDIT = 1] = "EDIT"
                }(o || (o = {}));
            var r = 5
        },
        434: function(e, t, a) {
            "use strict";
            a.d(t, "m", (function() {
                return d
            })), a.d(t, "l", (function() {
                return u
            })), a.d(t, "k", (function() {
                return m
            })), a.d(t, "b", (function() {
                return n
            })), a.d(t, "f", (function() {
                return o
            })), a.d(t, "e", (function() {
                return r
            })), a.d(t, "c", (function() {
                return c
            })), a.d(t, "d", (function() {
                return i
            })), a.d(t, "g", (function() {
                return l
            })), a.d(t, "i", (function() {
                return s
            })), a.d(t, "h", (function() {
                return b
            })), a.d(t, "j", (function() {
                return f
            })), a.d(t, "a", (function() {
                return C
            }));
            var n, o, r, c, i, l, s, d = [{
                    name: "ALL",
                    label: "all"
                }, {
                    name: "QR",
                    label: "qr_transaction"
                }, {
                    name: "LINK",
                    label: "payment_link_transaction"
                }, {
                    name: "GIFT",
                    label: "gift_transactions"
                }],
                u = [{
                    name: "ALL",
                    label: "all"
                }, {
                    name: "PENDING",
                    label: "pending"
                }, {
                    name: "RECEIVED",
                    label: "received"
                }, {
                    name: "SETTLED",
                    label: "filter_settled"
                }],
                m = [{
                    name: "ALL",
                    label: "all"
                }, {
                    name: "PENDING",
                    label: "pending"
                }, {
                    name: "SUCCESS",
                    label: "success"
                }];
            ! function(e) {
                e.PENDING = "PENDING", e.SUCCESS = "SUCCESS", e.FAILED = "FAILED", e.RECEIVED = "RECEIVED", e.REFUND = "REFUND", e.BLOCKED = "BLOCKED", e.EXPIRED = "EXPIRED"
            }(n || (n = {})),
            function(e) {
                e.INVOICE = "INVOICE", e.PAYOUT = "PAYOUT"
            }(o || (o = {})),
            function(e) {
                e.LINK = "LINK", e.QR = "QR", e.GIFT = "GIFT"
            }(r || (r = {})),
            function(e) {
                e.FAILED = "FAILED", e.NOT_REACHED = "NOT_REACHED", e.SUCCESS = "SUCCESS", e.IN_PROGRESS = "IN_PROGRESS"
            }(c || (c = {})),
            function(e) {
                e.PAYOUT_INIT = "PAYOUT_INIT", e.PAYMENT_PROCESSING = "PAYMENT_PROCESSING", e.DEPOSIT = "DEPOSIT", e.GENERATE = "GENERATE", e.PAY = "PAY"
            }(i || (i = {})),
            function(e) {
                e.UPI = "UPI", e.CC = "CC", e.BUSINESS = "BUSINESS", e.AMERICAN_EXPRESS = "AMERICAN_EXPRESS", e.RUPAY = "RUPAY", e.DC = "DC", e.WALLET = "WALLET"
            }(l || (l = {})),
            function(e) {
                e.UPI = "UPI", e.CC = "CC", e.DC = "DC", e.NET_BANKING = " NET_BANKING", e.WALLET = "WALLET", e.RUPAY = "RUPAY"
            }(s || (s = {}));
            var p, b = {
                    UPI: "UPI Payments",
                    CC: "Credit Card",
                    BUSINESS: "Business Card",
                    AMERICAN_EXPRESS: "AMEX",
                    RUPAY: "RuPay Debit Cards",
                    DC: "Debit Card",
                    WALLET: "Wallet"
                },
                f = {
                    UPI: "payment_upi_free",
                    CC: "credit_card",
                    DC: "debit_card",
                    NET_BANKING: "payment_net_banking",
                    WALLET: "wallet",
                    RUPAY: "rupay_debit_card"
                };
            new Date, new Date;
            ! function(e) {
                e.ACCOUNT_SET_BUT_NOT_KYC = "User account is not KYC verified.", e.ACCOUNT_NOT_SET = "Account not set or not primary for given book", e.ACCOUNT_FULL_SET = ""
            }(p || (p = {}));
            var C = "7"
        },
        436: function(e, t, a) {
            "use strict";
            var n = a(18),
                o = a(0),
                r = a(238);
            t.a = function() {
                var e = Object(o.useState)(1),
                    t = Object(n.a)(e, 2),
                    a = t[0],
                    c = t[1];
                return Object(o.useEffect)((function() {
                    return Object(r.c)((function() {
                        c((function(e) {
                            return 1 === e ? 2 : 1
                        }))
                    }))
                }), []), Object(o.useEffect)((function() {
                    return Object(r.d)((function() {
                        c((function(e) {
                            return 1 === e ? 2 : 1
                        }))
                    }))
                }), []), Object(o.useEffect)((function() {
                    return Object(r.g)((function() {
                        c((function(e) {
                            return 1 === e ? 2 : 1
                        }))
                    }))
                }), []), Object(o.useEffect)((function() {
                    return Object(r.b)((function() {
                        c((function(e) {
                            return 1 === e ? 2 : 1
                        }))
                    }))
                }), []), Object(o.useEffect)((function() {
                    return Object(r.a)((function() {
                        c((function(e) {
                            return 1 === e ? 2 : 1
                        }))
                    }))
                }), []), Object(o.useEffect)((function() {
                    return Object(r.e)((function() {
                        c((function(e) {
                            return 1 === e ? 2 : 1
                        }))
                    }))
                }), []), {
                    reRenderKey: a
                }
            }
        },
        438: function(e, t, a) {
            "use strict";
            a.d(t, "i", (function() {
                return i
            })), a.d(t, "e", (function() {
                return l
            })), a.d(t, "m", (function() {
                return s
            })), a.d(t, "b", (function() {
                return d
            })), a.d(t, "a", (function() {
                return u
            })), a.d(t, "p", (function() {
                return m
            })), a.d(t, "l", (function() {
                return p
            })), a.d(t, "c", (function() {
                return b
            })), a.d(t, "o", (function() {
                return f
            })), a.d(t, "d", (function() {
                return C
            })), a.d(t, "n", (function() {
                return h
            })), a.d(t, "g", (function() {
                return x
            })), a.d(t, "h", (function() {
                return g
            })), a.d(t, "k", (function() {
                return E
            })), a.d(t, "j", (function() {
                return v
            })), a.d(t, "f", (function() {
                return O
            }));
            var n = a(16),
                o = a(64),
                r = a(118),
                c = a(10),
                i = function() {
                    return Object(o.b)(r.a.HomePageView)
                },
                l = function(e) {
                    return Object(o.b)(r.a.HomeItemClick, Object(n.a)({}, e))
                },
                s = function(e) {
                    return Object(o.b)(r.a[e])
                },
                d = function() {
                    return Object(o.b)(r.a.HomePageAddLedgerClick)
                },
                u = function() {
                    return Object(o.b)(r.a.AddNewCustomerClick)
                },
                m = function() {
                    return Object(o.b)(r.a.TransactionKebabMenuActionClick)
                },
                p = function() {
                    return Object(o.b)(r.a.UserNameClick)
                },
                b = function(e) {
                    return Object(o.b)(r.a.AddNewLedgerGetStartedClick, Object(n.a)({}, e))
                },
                f = function() {
                    return Object(o.b)(r.a.TransactionKebabMenuEditEntryClick)
                },
                C = function(e) {
                    return Object(o.b)(r.a.AddTransaction, Object(n.a)({}, e))
                },
                h = function() {
                    return Object(o.b)(r.a.CustomerKhataOnTransactionClicked)
                },
                x = function(e) {
                    return Object(o.b)(r.a.HomeBannerClick, {
                        banner_name: e
                    })
                },
                g = function(e) {
                    switch (e) {
                        case c.b.ALL:
                            Object(o.b)(r.a.HomeRefreshFilter, {
                                customerFilter: "All"
                            });
                            break;
                        case c.b.PAYABLES:
                            Object(o.b)(r.a.HomeRefreshFilter, {
                                customerFilter: "You will give"
                            });
                            break;
                        case c.b.RECEIVABLES:
                            Object(o.b)(r.a.HomeRefreshFilter, {
                                customerFilter: "You will get"
                            });
                            break;
                        case c.b.SETTLED:
                            Object(o.b)(r.a.HomeRefreshFilter, {
                                customerFilter: "Settled"
                            })
                    }
                },
                E = function(e) {
                    switch (e) {
                        case c.d.RECENT:
                            Object(o.b)(r.a.HomeRefreshSort, {
                                customerSort: "Most Recent"
                            });
                            break;
                        case c.d.OLDEST:
                            Object(o.b)(r.a.HomeRefreshSort, {
                                customerSort: "Oldest"
                            });
                            break;
                        case c.d.HIGH_AMOUNT:
                            Object(o.b)(r.a.HomeRefreshSort, {
                                customerSort: "Highest Amount"
                            });
                            break;
                        case c.d.LEAST_AMOUNT:
                            Object(o.b)(r.a.HomeRefreshSort, {
                                customerSort: "Least Amount"
                            });
                            break;
                        case c.d.NAME:
                            Object(o.b)(r.a.HomeRefreshSort, {
                                customerSort: "By Name (A-Z)"
                            })
                    }
                },
                v = function() {
                    return Object(o.b)(r.a.HomeRemoveFilterClick)
                },
                O = function() {
                    Object(o.b)(r.a.TryForFreeClick)
                }
        },
        440: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return n
            })), a.d(t, "b", (function() {
                return o
            })), a.d(t, "c", (function() {
                return r
            }));
            var n = 1e11,
                o = {
                    THOUSAND: Math.pow(10, 3),
                    LAKHS: Math.pow(10, 5),
                    CRORE: Math.pow(10, 7),
                    ARAB: Math.pow(10, 9),
                    KHARAB: Math.pow(10, 11)
                },
                r = {
                    THOUSAND: "K",
                    LAKHS: "L",
                    CRORE: "Cr",
                    ARAB: "Ar",
                    KHARAB: "Kh"
                }
        },
        441: function(e, t, a) {
            "use strict";
            a.d(t, "b", (function() {
                return n
            })), a.d(t, "a", (function() {
                return o
            }));
            var n = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                o = "MM/DD/YYYY"
        },
        442: function(e, t, a) {
            "use strict";
            a.d(t, "c", (function() {
                return n
            })), a.d(t, "a", (function() {
                return o
            })), a.d(t, "b", (function() {
                return r
            })), a.d(t, "e", (function() {
                return c
            })), a.d(t, "d", (function() {
                return i
            }));
            var n = "https://apps.apple.com/us/app/khata-book-udhar-bahi-khata/id1488204139",
                o = "https://play.google.com/store/apps/details?id=com.vaibhavkalpe.android.khatabook&hl=en_IN",
                r = "+919606800800",
                c = "Infinity",
                i = "https://beta.khatabook.com/login"
        },
        443: function(e, t, a) {
            e.exports = a.p + "static/media/closeModalIcon.f8b698d1.svg"
        },
        445: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return b
            }));
            var n = a(0),
                o = a.n(n),
                r = a(184),
                c = a(35),
                i = a(932),
                l = a(675),
                s = a.n(l),
                d = a(410),
                u = a(429),
                m = a(9),
                p = Object(r.a)((function(e) {
                    return {
                        breadcrumbName: {
                            maxWidth: "200px",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            fontSize: "12px",
                            fontWeight: 500
                        },
                        arrowSeparator: {
                            color: m.d.LIGHT_MEDIUM_GREY,
                            width: "8px",
                            height: "9px"
                        },
                        active: {
                            color: m.d.MEDIUM_GREY,
                            textDecoration: "none !important"
                        },
                        nonActive: {
                            textDecoration: "underline ",
                            color: m.d.DARK_GREY
                        }
                    }
                }));

            function b(e) {
                var t = e.breadCrumbsList,
                    a = Object(c.g)(),
                    n = p(),
                    r = function(e) {
                        a.push(e)
                    },
                    l = function(e, t) {
                        e.preventDefault(), t && t()
                    };
                return o.a.createElement("div", null, o.a.createElement(i.a, {
                    "aria-label": "breadcrumb",
                    separator: o.a.createElement(s.a, {
                        className: n.arrowSeparator
                    })
                }, t.map((function(e, a) {
                    return t.length === a + 1 ? o.a.createElement("span", {
                        key: e.href,
                        onClick: function() {
                            return r(e.href)
                        }
                    }, o.a.createElement(d.a, {
                        onClick: function(t) {
                            return l(t, e.onClick)
                        },
                        href: "",
                        "aria-current": "page",
                        className: n.active
                    }, o.a.createElement(u.a, {
                        text: e.name,
                        className: n.breadcrumbName,
                        arrow: !0,
                        placement: "top-start"
                    }))) : o.a.createElement("span", {
                        key: e.href,
                        onClick: function() {
                            return r(e.href)
                        }
                    }, o.a.createElement(d.a, {
                        className: n.nonActive,
                        onClick: function(t) {
                            return l(t, e.onClick)
                        },
                        href: ""
                    }, o.a.createElement(u.a, {
                        text: e.name,
                        className: n.breadcrumbName,
                        arrow: !0,
                        placement: "top-start"
                    })))
                }))))
            }
        },
        446: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return r
            })), a.d(t, "b", (function() {
                return c
            })), a.d(t, "s", (function() {
                return i
            })), a.d(t, "p", (function() {
                return l
            })), a.d(t, "k", (function() {
                return s
            })), a.d(t, "q", (function() {
                return d
            })), a.d(t, "r", (function() {
                return u
            })), a.d(t, "f", (function() {
                return m
            })), a.d(t, "l", (function() {
                return p
            })), a.d(t, "o", (function() {
                return b
            })), a.d(t, "n", (function() {
                return f
            })), a.d(t, "m", (function() {
                return C
            })), a.d(t, "e", (function() {
                return h
            })), a.d(t, "c", (function() {
                return x
            })), a.d(t, "d", (function() {
                return g
            })), a.d(t, "g", (function() {
                return E
            })), a.d(t, "j", (function() {
                return v
            })), a.d(t, "i", (function() {
                return O
            })), a.d(t, "h", (function() {
                return j
            }));
            var n = a(64),
                o = a(118),
                r = function() {
                    return Object(n.b)(o.a.MoneytabAddBankAccountPageView)
                },
                c = function() {
                    return Object(n.b)(o.a.MoneytabKYCPageView)
                },
                i = function() {
                    return Object(n.b)(o.a.MoneytabUseQRCodeClick)
                },
                l = function() {
                    return Object(n.b)(o.a.PaymentHistoryTransactionsClick)
                },
                s = function() {
                    return Object(n.b)(o.a.PaymentHistorySettlementsClick)
                },
                d = function() {
                    return Object(n.b)(o.a.QRCodeDownloadQRClick)
                },
                u = function() {
                    return Object(n.b)(o.a.QRCodeViewOrderClick)
                },
                m = function() {
                    return Object(n.b)(o.a.PaymentHistoryCustomerTransactionClick)
                },
                p = function() {
                    return Object(n.b)(o.a.PaymentHistoryTransactionDateFilterClick)
                },
                b = function() {
                    return Object(n.b)(o.a.PaymentHistoryTransactionTypeFilterClick)
                },
                f = function() {
                    return Object(n.b)(o.a.PaymentHistoryTransactionStatusClick)
                },
                C = function() {
                    return Object(n.b)(o.a.PaymentHistoryTransactionDateFilterSetDate)
                },
                h = function() {
                    return Object(n.b)(o.a.PaymentHistoryCustomerSettlementClick)
                },
                x = function() {
                    return Object(n.b)(o.a.PaymentDetailsPageView)
                },
                g = function() {
                    return Object(n.b)(o.a.PaymentDetailsViewCharges)
                },
                E = function() {
                    return Object(n.b)(o.a.PaymentHistorySettlementDateFilterClick)
                },
                v = function() {
                    return Object(n.b)(o.a.PaymentHistorySettlementTypeFilterClick)
                },
                O = function() {
                    return Object(n.b)(o.a.PaymentHistorySettlementStatusClick)
                },
                j = function() {
                    return Object(n.b)(o.a.PaymentHistorySettlementDateFilterSetDate)
                }
        },
        450: function(e, t, a) {
            "use strict";
            var n = a(18),
                o = a(171),
                r = a(0),
                c = a.n(r),
                i = ["children", "onVisible", "onHidden", "once", "options", "className"],
                l = function() {};
            t.a = Object(r.memo)((function(e) {
                var t = e.children,
                    a = e.onVisible,
                    s = void 0 === a ? l : a,
                    d = e.onHidden,
                    u = void 0 === d ? l : d,
                    m = e.once,
                    p = void 0 !== m && m,
                    b = e.options,
                    f = void 0 === b ? {} : b,
                    C = e.className,
                    h = void 0 === C ? "" : C,
                    x = Object(o.a)(e, i),
                    g = Object(r.useState)(!0),
                    E = Object(n.a)(g, 2),
                    v = E[0],
                    O = E[1],
                    j = Object(r.useRef)(null);
                return Object(r.useEffect)((function() {
                    var e, t = new IntersectionObserver((function(e) {
                        e.forEach((function(e) {
                            e.isIntersecting ? (s(), p && O(!1)) : u()
                        }))
                    }), f);
                    return v && null !== j.current && (t.observe(j.current), e = j.current),
                        function() {
                            v && null !== e && t.unobserve(e), t.disconnect()
                        }
                }), [v, u, s, p, f]), c.a.createElement("div", Object.assign({
                    className: h,
                    ref: j
                }, x), void 0 !== t && t)
            }))
        },
        451: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return g
            })), a.d(t, "e", (function() {
                return E
            })), a.d(t, "c", (function() {
                return v
            })), a.d(t, "h", (function() {
                return O
            })), a.d(t, "g", (function() {
                return j
            })), a.d(t, "i", (function() {
                return w
            })), a.d(t, "d", (function() {
                return S
            })), a.d(t, "f", (function() {
                return _
            })), a.d(t, "j", (function() {
                return k
            })), a.d(t, "b", (function() {
                return y
            }));
            var n = a(1),
                o = a.n(n),
                r = a(3),
                c = a(18),
                i = a(522),
                l = a(11),
                s = a(30),
                d = a(31),
                u = a(255),
                m = function() {
                    var e = Object(r.a)(o.a.mark((function e(t) {
                        var a, n;
                        return o.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ((a = new Image).decoding = "async", a.src = t, n = new Promise((function(e, t) {
                                            a.onload = function() {
                                                return e()
                                            }, a.onerror = function() {
                                                return t(Error("Image loading error"))
                                            }
                                        })), !a.decode) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 7, a.decode().catch((function() {
                                        return null
                                    }));
                                case 7:
                                    return e.next = 9, n;
                                case 9:
                                    return e.abrupt("return", a);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();

            function p(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = t.width,
                    n = void 0 === a ? e.width : a,
                    o = t.height,
                    r = void 0 === o ? e.height : o,
                    c = t.sx,
                    i = void 0 === c ? 0 : c,
                    l = t.sy,
                    s = void 0 === l ? 0 : l,
                    d = t.sw,
                    u = void 0 === d ? e.width : d,
                    m = t.sh,
                    p = void 0 === m ? e.height : m,
                    b = document.createElement("canvas");
                b.width = n, b.height = r;
                var f = b.getContext("2d");
                if (!f) throw new Error("Could not create canvas context");
                return f.drawImage(e, i, s, u, p, 0, 0, n, r), f.getImageData(0, 0, n, r)
            }

            function b(e, t, a) {
                return f.apply(this, arguments)
            }

            function f() {
                return (f = Object(r.a)(o.a.mark((function e(t, a, n) {
                    var r, c, i, l, s, d, u, m, p;
                    return o.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ((r = document.createElement("canvas")).width = t.width, r.height = t.height, c = r.getContext("2d")) {
                                    e.next = 6;
                                    break
                                }
                                throw Error("Canvas not initialized");
                            case 6:
                                if (c.putImageData(t, 0, 0), !("toBlob" in r)) {
                                    e.next = 13;
                                    break
                                }
                                return e.next = 10, new Promise((function(e) {
                                    return r.toBlob(e, a, n)
                                }));
                            case 10:
                                i = e.sent, e.next = 22;
                                break;
                            case 13:
                                if (l = r.toDataURL(a, n), s = /data:([^;]+);base64,(.*)$/.exec(l)) {
                                    e.next = 17;
                                    break
                                }
                                throw Error("Data URL reading failed");
                            case 17:
                                for (d = s[1], u = atob(s[2]), m = new Uint8Array(u.length), p = 0; p < m.length; p += 1) m[p] = u.charCodeAt(p);
                                i = new Blob([m], {
                                    type: d
                                });
                            case 22:
                                if (i) {
                                    e.next = 24;
                                    break
                                }
                                throw Error("Encoding failed");
                            case 24:
                                return e.abrupt("return", i);
                            case 25:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            Blob;
            var C = function() {
                    var e = Object(r.a)(o.a.mark((function e(t, a) {
                        var n, r, c, l, s, d;
                        return o.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, m(t);
                                case 3:
                                    return n = e.sent, r = p(n), e.next = 7, i.a.resize(r);
                                case 7:
                                    return c = e.sent, e.next = 10, b(c, "image/png");
                                case 10:
                                    return l = e.sent, e.next = 13, i.a.compressImage(l, a);
                                case 13:
                                    return s = e.sent, d = URL.createObjectURL(s), e.abrupt("return", {
                                        file: s,
                                        url: d,
                                        name: a.replace(/.[^.]*$/, ".".concat("png"))
                                    });
                                case 18:
                                    return e.prev = 18, e.t0 = e.catch(0), e.abrupt("return", Promise.reject(e.t0));
                                case 21:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 18]
                        ])
                    })));
                    return function(t, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                h = a(431),
                x = function() {
                    var e = (new Date).getTime();
                    return isNaN(e) && (e = Date.now()), g(e)
                },
                g = function(e) {
                    var t = new Date(e);
                    t instanceof Date && t.getTime() || (t = new Date(Date.now()));
                    var a = t.getDate(),
                        n = t.getMonth() + 1,
                        o = t.getFullYear(),
                        r = String(n);
                    n < 10 && (r = "0".concat(n));
                    var c = String(a);
                    return a < 10 && (c = "0".concat(a)), "".concat(o, "-").concat(r, "-").concat(c)
                },
                E = function(e, t) {
                    if ("NaN-NaN-NaN" === t || !t || !t.length) return {
                        epoch: null,
                        isError: !0
                    };
                    var a = null === t || void 0 === t ? void 0 : t.split("/"),
                        n = Object(c.a)(a, 3),
                        o = n[0],
                        r = n[1],
                        i = n[2];
                    if (4 !== i.length || parseInt(i) < 1900 || parseInt(i) > 2100 || parseInt(o) > 12 || parseInt(o) < 1 || parseInt(r) > 31 || parseInt(r) < 1) return {
                        epoch: null,
                        isError: !0
                    };
                    var l = e;
                    return isNaN(l) ? (l = Date.parse(t), isNaN(l) ? {
                        epoch: new Date(parseInt(i), parseInt(o), parseInt(r)).getTime()
                    } : {
                        epoch: l
                    }) : {
                        epoch: l
                    }
                },
                v = function(e, t) {
                    if (e === h.a.ADD) return "";
                    var a = (null === t || void 0 === t ? void 0 : t.amount) || 0;
                    return a < 0 ? -1 * a : a
                },
                O = function(e, t) {
                    return e === h.a.ADD ? "" : (null === t || void 0 === t ? void 0 : t.description) || ""
                },
                j = function(e, t) {
                    return e === h.a.ADD ? [] : ((null === t || void 0 === t ? void 0 : t.localAttachments) || []).map((function(e) {
                        return {
                            file: e.file,
                            fileName: e.fileName,
                            isImageOptimized: !0,
                            preview: URL.createObjectURL(e.file)
                        }
                    }))
                },
                w = function(e, t) {
                    return e === h.a.ADD ? [] : (null === t || void 0 === t ? void 0 : t.attachments) || []
                },
                S = function(e, t) {
                    return e === h.a.ADD ? x() : (null === t || void 0 === t ? void 0 : t.date) || x()
                },
                _ = function(e, t) {
                    if (e === h.a.ADD) return (new Date).getTime();
                    var a = ((null === t || void 0 === t ? void 0 : t.date) || x()).split("-"),
                        n = Object(c.a)(a, 3),
                        o = n[0],
                        r = n[1],
                        i = n[2];
                    return new Date(Number(o), Number(r) - 1, Number(i)).getTime()
                },
                k = function() {
                    var e = Object(r.a)(o.a.mark((function e(t, a) {
                        var n, r, c, i, l, s;
                        return o.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = URL.createObjectURL(t), r = t, c = a, e.prev = 3, e.next = 6, C(n, a);
                                case 6:
                                    i = e.sent, l = i.file, s = i.name, r = l, c = s, e.next = 15;
                                    break;
                                case 13:
                                    e.prev = 13, e.t0 = e.catch(3);
                                case 15:
                                    return e.abrupt("return", {
                                        file: r,
                                        fileName: c
                                    });
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 13]
                        ])
                    })));
                    return function(t, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                y = function(e) {
                    var t = null === e || void 0 === e ? void 0 : e.split("-"),
                        a = Object(c.a)(t, 3),
                        n = a[0],
                        o = a[1],
                        r = a[2];
                    return "".concat(r, "/").concat(o, "/").concat(n)
                }
        },
        454: function(e, t, a) {
            "use strict";
            a.d(t, "b", (function() {
                return l
            })), a.d(t, "a", (function() {
                return s
            }));
            var n = a(1),
                o = a.n(n),
                r = a(3),
                c = a(145),
                i = a(170);

            function l(e) {
                var t = {};
                if ("+91" !== e.country_code && e.country_code) {
                    var a, n = ((null === e || void 0 === e ? void 0 : e.country_code) + (null === e || void 0 === e ? void 0 : e.phone)).length;
                    0 !== (null === e || void 0 === e || null === (a = e.phone) || void 0 === a ? void 0 : a.length) && (n < c.d || n > c.c) && (t.phone = "Enter valid mobile number")
                } else e.phone && !/^\d{10}$/.test(e.phone) && (t.phone = "Please enter a valid 10 digit mobile number");
                return void 0 !== e.customer_name && 0 === e.customer_name.length && (t.name = "Please enter Customer's name"), e.amount && (t.amount = ""), t
            }
            var s = function() {
                var e = Object(r.a)(o.a.mark((function e(t, a, n, r) {
                    var c, l;
                    return o.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Object(i.b)(t, a);
                            case 2:
                                return c = e.sent, l = !1, c && a.length > 0 && (null === c || void 0 === c || c.forEach((function(e) {
                                    e.customer_id === n || e.country_code !== r || (l = !0)
                                }))), e.abrupt("return", l);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, a, n, o) {
                    return e.apply(this, arguments)
                }
            }()
        },
        460: function(e, t, a) {
            "use strict";
            var n = a(16),
                o = a(0),
                r = a(245),
                c = a.n(r),
                i = a(35),
                l = a(230),
                s = a(418),
                d = a(25),
                u = a(106),
                m = a(173),
                p = a(143),
                b = a(84),
                f = a(454),
                C = a(94);
            t.a = function(e) {
                var t = e.onSuccess,
                    a = e.isEdit,
                    r = Object(C.a)(),
                    h = r.getUserInfo,
                    x = r.getDeviceInfo,
                    g = r.getCurrentBook,
                    E = Object(i.g)(),
                    v = Object(l.b)().showError,
                    O = g(),
                    j = Object(o.useCallback)((function(e) {
                        var o = e.customer_name,
                            r = e.phone,
                            c = e.address,
                            i = e.country_code,
                            l = e.image,
                            m = e.localImage,
                            p = null === e || void 0 === e ? void 0 : e.customer_id,
                            f = h(),
                            C = x();
                        if (void 0 !== f && void 0 !== C)
                            if (void 0 !== O) {
                                var g = O.book_id;
                                a ? s.a.updateCustomer(Object(n.a)(Object(n.a)({
                                    bookId: g,
                                    customerName: o,
                                    phone: r,
                                    user: f,
                                    deviceInfo: C,
                                    address: c,
                                    country_code: i,
                                    image: l
                                }, m && {
                                    localImage: m
                                }), p && {
                                    customerId: p
                                })).then((function(e) {
                                    t(e)
                                })).catch((function(e) {
                                    v(), Object(b.a)(e, {
                                        tags: {
                                            module: u.a.ADD_CUSTOMER
                                        }
                                    })
                                })) : s.a.addCustomer(Object(n.a)({
                                    bookId: g,
                                    customerName: o,
                                    phone: r,
                                    user: f,
                                    deviceInfo: C
                                }, p && {
                                    customerId: p
                                })).then((function(e) {
                                    return t(e)
                                })).catch((function(e) {
                                    v(), Object(b.a)(e, {
                                        tags: {
                                            module: u.a.ADD_CUSTOMER
                                        }
                                    })
                                }))
                            } else E.replace(d.k);
                        else E.replace(d.o)
                    }), [O, x, h, E, t, v, a]),
                    w = Object(m.a)(j, f.b, !0),
                    S = w.values,
                    _ = w.errors,
                    k = w.handleChange,
                    y = w.handleSubmit,
                    I = w.handlePhoneNumberChange,
                    N = w.handleCountryCodeChange,
                    R = Object(o.useMemo)((function() {
                        var e = !!c()(_, "phone");
                        return Object(p.e)(S.customer_name) || Boolean(S.phone) && e
                    }), [_, S.customer_name, S.phone]);
                return {
                    book: O,
                    values: S,
                    handleChange: k,
                    handleSubmit: y,
                    handlePhoneNumberChange: I,
                    handleCountryCodeChange: N,
                    isDisabled: R,
                    errors: _
                }
            }
        },
        462: function(e, t, a) {
            "use strict";
            a.d(t, "g", (function() {
                return r
            })), a.d(t, "e", (function() {
                return c
            })), a.d(t, "l", (function() {
                return i
            })), a.d(t, "a", (function() {
                return l
            })), a.d(t, "b", (function() {
                return s
            })), a.d(t, "k", (function() {
                return d
            })), a.d(t, "m", (function() {
                return u
            })), a.d(t, "f", (function() {
                return m
            })), a.d(t, "d", (function() {
                return p
            })), a.d(t, "c", (function() {
                return b
            })), a.d(t, "j", (function() {
                return f
            })), a.d(t, "i", (function() {
                return C
            })), a.d(t, "n", (function() {
                return h
            })), a.d(t, "h", (function() {
                return x
            }));
            var n = a(64),
                o = a(118),
                r = function() {
                    return Object(n.b)(o.a.EditCustomerClick)
                },
                c = function() {
                    return Object(n.b)(o.a.DeleteCustomerClick)
                },
                i = function() {
                    return Object(n.b)(o.a.SaveCustomer)
                },
                l = function() {
                    return Object(n.b)(o.a.AddAddressClick)
                },
                s = function() {
                    return Object(n.b)(o.a.AddPhoneNumberClick)
                },
                d = function() {
                    return Object(n.b)(o.a.SaveAddressClick)
                },
                u = function() {
                    return Object(n.b)(o.a.SavePhoneNumberClick)
                },
                m = function() {
                    return Object(n.b)(o.a.DeleteCustomerConfirmClick)
                },
                p = function() {
                    return Object(n.b)(o.a.DeleteCustomerCancelClick)
                },
                b = function() {
                    return Object(n.b)(o.a.CustomerSummarySMSClick)
                },
                f = function() {
                    return Object(n.b)(o.a.SMSerrorLimitExceeded)
                },
                C = function() {
                    return Object(n.b)(o.a.SMSClickAddPhoneNumberToastClick)
                },
                h = function() {
                    return Object(n.b)(o.a.SendSMSClick)
                },
                x = function() {
                    return Object(n.b)(o.a.SMSCancelClick)
                }
        },
        480: function(e, t, a) {
            "use strict";
            var n = a(0),
                o = a.n(n),
                r = a(184),
                c = a(302),
                i = a(225),
                l = a(95),
                s = a(563),
                d = a.n(s),
                u = a(443),
                m = a.n(u),
                p = a(9),
                b = a(430),
                f = Object(r.a)((function(e) {
                    return {
                        root: {},
                        paper: {
                            position: "absolute",
                            width: "540px",
                            padding: "36px 40px",
                            backgroundColor: p.d.WHITE,
                            borderRadius: "15px",
                            boxShadow: p.d.GREY_SHADOW,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center"
                        },
                        mainContent: {
                            display: "flex"
                        },
                        iconWrapper: {
                            width: "56px",
                            height: "56px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: p.d.LIGHT_PRIMARY,
                            borderRadius: "8px",
                            marginRight: "24px"
                        },
                        textWrapper: {
                            display: "flex",
                            flexDirection: "column"
                        },
                        deleteIcon: {
                            width: "28px",
                            height: "28px"
                        },
                        title: {
                            fontWeight: 500,
                            fontSize: "20px",
                            color: p.d.DARK_GREY,
                            marginBottom: "4px"
                        },
                        confirmationText: {
                            fontSize: "14px",
                            color: p.d.MEDIUM_GREY,
                            marginBottom: "24px"
                        },
                        buttonContainer: {
                            display: "flex",
                            "& > button:first-child": {
                                marginRight: "24px"
                            }
                        },
                        button: {
                            width: "220px",
                            height: "48px",
                            borderRadius: "6px",
                            textTransform: "capitalize",
                            fontSize: "18px",
                            fontWeight: "bold",
                            boxShadow: "none"
                        },
                        closeIcon: {
                            position: "absolute",
                            top: "16px",
                            right: "16px",
                            color: "#C9C9C9",
                            cursor: "pointer"
                        }
                    }
                }));
            t.a = Object(n.memo)((function(e) {
                var t = e.open,
                    a = e.onClose,
                    n = e.secondaryAction,
                    r = e.primaryAction,
                    s = e.secondaryActionText,
                    u = e.primaryActionText,
                    C = e.title,
                    h = e.confirmationText,
                    x = e.isDeleteDisabled,
                    g = f(),
                    E = Object(b.a)();
                return o.a.createElement(c.a, {
                    open: t,
                    onClose: a,
                    "aria-labelledby": "alert-dialog-title",
                    "aria-describedby": "alert-dialog-description"
                }, o.a.createElement("div", {
                    style: p.j,
                    className: g.paper
                }, o.a.createElement("img", {
                    className: g.closeIcon,
                    src: m.a,
                    onClick: a,
                    alt: "close"
                }), o.a.createElement("div", {
                    className: g.mainContent
                }, o.a.createElement("div", {
                    className: g.iconWrapper
                }, o.a.createElement("img", {
                    src: d.a,
                    alt: "delete",
                    className: d.a
                })), o.a.createElement("div", {
                    className: g.textWrapper
                }, o.a.createElement(i.a, {
                    className: g.title
                }, C), o.a.createElement(i.a, {
                    className: g.confirmationText
                }, h))), o.a.createElement("div", {
                    className: g.buttonContainer
                }, o.a.createElement(l.a, {
                    size: "small",
                    onClick: n,
                    className: "".concat(g.button, " ").concat(E.greyBtn)
                }, s), o.a.createElement(l.a, {
                    size: "small",
                    onClick: r,
                    className: "".concat(g.button, " ").concat(E.primaryBtn),
                    disabled: x
                }, u))))
            }))
        },
        481: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return o
            })), a.d(t, "b", (function() {
                return n
            })), a.d(t, "c", (function() {
                return r
            }));
            var n, o = ["customers", "money"];
            ! function(e) {
                e.CUSTOMERS = "customers", e.MONEY = "money"
            }(n || (n = {}));
            var r = "SEARCH_TYPE_KEY"
        },
        492: function(e, t, a) {
            "use strict";
            a.d(t, "b", (function() {
                return c
            }));
            var n = a(0),
                o = {
                    selectedCustomerId: "",
                    onClick: function() {}
                },
                r = Object(n.createContext)(o),
                c = function() {
                    return Object(n.useContext)(r)
                };
            t.a = r
        },
        497: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return n
            }));
            var n = {
                ENTRIES: "ENTRIES",
                KHATA: "KHATA",
                CUSTOMERS: "CUSTOMERS"
            }
        },
        498: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return r
            })), a.d(t, "d", (function() {
                return c
            })), a.d(t, "b", (function() {
                return i
            })), a.d(t, "e", (function() {
                return l
            })), a.d(t, "c", (function() {
                return s
            }));
            var n = a(121),
                o = a(76),
                r = function(e) {
                    var t = e.bookId,
                        a = e.serverSeq,
                        r = void 0 === a ? "0" : a,
                        c = e.limit,
                        i = Object(o.e)(o.b.GET_INVOICES),
                        l = new URLSearchParams;
                    l.append("bookId", t), l.append("serverSeq", r), l.append("limit", String(c));
                    var s = "".concat(i, "?").concat(l.toString());
                    return Object(n.a)(o.b.GET_INVOICES, s, {
                        method: "get"
                    }).then((function(e) {
                        return null === e || void 0 === e ? void 0 : e.json()
                    })).catch((function(e) {
                        return null === e || void 0 === e ? void 0 : e.json()
                    }))
                },
                c = function(e) {
                    var t = e.bookId,
                        a = e.serverSeq,
                        r = void 0 === a ? "0" : a,
                        c = e.limit,
                        i = Object(o.e)(o.b.GET_PAYOUTS),
                        l = new URLSearchParams;
                    l.append("bookId", t), l.append("serverSeq", r), l.append("limit", String(c));
                    var s = "".concat(i, "?").concat(l.toString());
                    return Object(n.a)(o.b.GET_PAYOUTS, s, {
                        method: "get"
                    }).then((function(e) {
                        return null === e || void 0 === e ? void 0 : e.json()
                    })).catch((function(e) {
                        return null === e || void 0 === e ? void 0 : e.json()
                    }))
                },
                i = function() {
                    var e = Object(o.e)(o.b.PAYMENT_CHARGES);
                    return Object(n.a)(o.b.PAYMENT_CHARGES, e, {
                        method: "get"
                    }).then((function(e) {
                        return null === e || void 0 === e ? void 0 : e.json()
                    })).catch((function(e) {
                        return null === e || void 0 === e ? void 0 : e.json()
                    }))
                },
                l = function(e, t) {
                    var a = Object(o.e)(o.b.GET_QR_CODE_PLACED),
                        r = new URLSearchParams,
                        c = t.token;
                    Object(n.b)({
                        "x-khatabook-token": c
                    });
                    var i = {
                            book_id: e
                        },
                        l = "".concat(a, "?").concat(r.toString());
                    return Object(n.a)(o.b.ORDER_QR_CODE, l, {
                        method: "post",
                        body: JSON.stringify(i),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then((function(e) {
                        return null === e || void 0 === e ? void 0 : e.json()
                    }))
                },
                s = function(e, t) {
                    var a = Object(o.e)(o.b.GET_PAYMENTS_PERMISSIONS),
                        r = new URLSearchParams;
                    r.append("bookId", e);
                    var c = "".concat(a, "?").concat(r.toString()),
                        i = null === t || void 0 === t ? void 0 : t.token;
                    return i && Object(n.b)({
                        "x-khatabook-token": i
                    }), Object(n.a)(o.b.GET_PAYMENTS_PERMISSIONS, c, {
                        method: "get"
                    }).then((function(e) {
                        return null === e || void 0 === e ? void 0 : e.json()
                    }))
                }
        },
        499: function(e, t, a) {
            "use strict";
            var n = a(0),
                o = a.n(n),
                r = a(184),
                c = a(302),
                i = a(225),
                l = a(362),
                s = a(9),
                d = a(40),
                u = Object(r.a)((function(e) {
                    return {
                        paper: {
                            position: "absolute",
                            width: "302px",
                            backgroundColor: s.d.WHITE,
                            borderRadius: "15px",
                            boxShadow: s.d.GREY_SHADOW,
                            padding: "50px 32px ",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        info: {
                            fontSize: "".concat(s.k["16px"], "rem"),
                            textAlign: "center",
                            marginBottom: "20px"
                        }
                    }
                }));
            t.a = Object(n.memo)((function(e) {
                var t = e.onClose,
                    a = e.open,
                    n = e.errorMessage,
                    r = Object(d.b)().t,
                    m = u();
                return o.a.createElement(c.a, {
                    onClose: t,
                    open: a
                }, o.a.createElement("div", {
                    style: s.j,
                    className: m.paper
                }, o.a.createElement(i.a, {
                    className: m.info
                }, n), o.a.createElement(l.a, {
                    fullWidth: !0,
                    variant: "contained",
                    color: "primary",
                    onClick: t
                }, r("try_again"))))
            }))
        },
        518: function(e, t, a) {
            "use strict";
            var n = a(0),
                o = a.n(n),
                r = a(184),
                c = a(9),
                i = Object(r.a)((function(e) {
                    return {
                        container: {
                            height: "72px",
                            display: "flex",
                            background: c.c.WHITE,
                            alignItems: "center",
                            padding: "0 ".concat(e.spacing(2), "px"),
                            marginBottom: "1px"
                        },
                        icon: {
                            height: "40px",
                            width: "40px",
                            background: c.c.LIGHT_GREY,
                            marginRight: e.spacing(2),
                            borderRadius: "50%"
                        },
                        contentLeft: {
                            flex: 1
                        },
                        name: {
                            width: "120px",
                            height: "8px",
                            borderRadius: "5px",
                            backgroundColor: "#c9c9c9",
                            marginBottom: "12px"
                        },
                        time: {
                            width: "92px",
                            height: "8px",
                            borderRadius: "5px",
                            backgroundColor: c.c.LIGHT_GREY
                        },
                        amount: {
                            height: "8px",
                            borderRadius: "5px",
                            width: "50px",
                            backgroundColor: "#e38c99",
                            marginBottom: "12px"
                        },
                        help: {
                            width: "75px",
                            height: "8px",
                            borderRadius: "5px",
                            backgroundColor: c.c.LIGHT_GREY
                        },
                        contentRight: {
                            display: "flex",
                            alignItems: "flex-end",
                            flexDirection: "column"
                        }
                    }
                }));
            t.a = Object(n.memo)((function() {
                var e = i();
                return o.a.createElement("div", {
                    className: e.container
                }, o.a.createElement("div", {
                    className: e.icon
                }), o.a.createElement("div", {
                    className: e.contentLeft
                }, o.a.createElement("div", {
                    className: e.name
                }), o.a.createElement("div", {
                    className: e.time
                })), o.a.createElement("div", {
                    className: e.contentRight
                }, o.a.createElement("div", {
                    className: e.amount
                }), o.a.createElement("div", {
                    className: e.help
                })))
            }))
        },
        522: function(e, t, a) {
            "use strict";
            (function(e) {
                var n = a(425),
                    o = new Worker(e, {
                        name: "img",
                        type: void 0
                    }),
                    r = Object(n.b)(o);
                t.a = r
            }).call(this, a(523))
        },
        523: function(e, t, a) {
            e.exports = a.p + "static/js/img.3a11cdaf.chunk.worker.js"
        },
        527: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return s
            })), a.d(t, "b", (function() {
                return d
            })), a.d(t, "c", (function() {
                return u
            }));
            var n = a(42),
                o = a(1),
                r = a.n(o),
                c = a(3),
                i = (a(204), a(27)),
                l = a(10),
                s = function() {
                    var e = Object(c.a)(r.a.mark((function e() {
                        var t;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(i.a)();
                                case 2:
                                    return t = e.sent, e.abrupt("return", t.getAll(l.i.BOOK_SYNC_INFO));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                d = function() {
                    var e = Object(c.a)(r.a.mark((function e(t) {
                        var a;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(i.a)();
                                case 2:
                                    return a = e.sent, e.abrupt("return", a.put(l.i.BOOK_SYNC_INFO, t));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                u = function() {
                    var e = Object(c.a)(r.a.mark((function e(t) {
                        var a, o, c;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(i.a)();
                                case 2:
                                    return a = e.sent, o = a.transaction(l.i.BOOK_SYNC_INFO, "readwrite"), c = t.map((function(e) {
                                        return o.store.put(e)
                                    })), e.abrupt("return", Promise.all([].concat(Object(n.a)(c), [o.done])));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        529: function(e, t, a) {
            e.exports = a.p + "static/media/infoIcon.c6e10d55.svg"
        },
        530: function(e, t, a) {
            "use strict";
            var n = a(18),
                o = a(0),
                r = a.n(o),
                c = a(184),
                i = a(298),
                l = a(403),
                s = a(407),
                d = a(468),
                u = a(559),
                m = a(469),
                p = a(225),
                b = a(411),
                f = a(560),
                C = a(9),
                h = a(531),
                x = a(576),
                g = Object(c.a)((function(e) {
                    return {
                        popper: {
                            zIndex: 7
                        },
                        menuContainer: {
                            width: " 219px",
                            margin: "8px 0",
                            background: C.d.WHITE,
                            boxShadow: C.d.PAPER_SHADOW,
                            borderRadius: "4px"
                        },
                        list: {
                            padding: "8px 0"
                        },
                        listItem: {
                            padding: "13px 18px 12px 18px ",
                            "&:hover": {
                                backgroundColor: C.d.LIGHT_BLUE,
                                "& $listItemTitle": {
                                    color: C.d.SECONDARY2
                                }
                            }
                        },
                        deleteListItem: {
                            "&:hover": {
                                backgroundColor: C.d.LIGHT_PRIMARY,
                                "& $listItemTitle": {
                                    color: C.d.DARK_PRIMARY
                                }
                            }
                        },
                        listItemAvatar: {
                            minWidth: "unset"
                        },
                        listItemTitle: {
                            fontSize: "14px",
                            color: C.d.MEDIUM_GREY,
                            marginLeft: "10px",
                            wordBreak: "break-all"
                        },
                        editIcon: {
                            width: "15px",
                            height: "15px"
                        },
                        divider: {
                            width: "187px",
                            margin: "0 auto"
                        }
                    }
                }));
            t.a = Object(o.memo)((function(e) {
                var t = e.open,
                    a = e.anchorEl,
                    c = e.handleCloseMenu,
                    E = e.handleDelete,
                    v = e.handleEdit,
                    O = e.editText,
                    j = e.deleteText,
                    w = g(),
                    S = Object(o.useState)(C.d.MEDIUM_GREY),
                    _ = Object(n.a)(S, 2),
                    k = _[0],
                    y = _[1],
                    I = Object(o.useState)(C.d.MEDIUM_GREY),
                    N = Object(n.a)(I, 2),
                    R = N[0],
                    T = N[1];
                return r.a.createElement(l.a, {
                    open: t,
                    anchorEl: a.current,
                    role: void 0,
                    className: w.popper,
                    transition: !0,
                    placement: "bottom-end"
                }, r.a.createElement(i.a, {
                    className: w.menuContainer
                }, r.a.createElement(b.a, {
                    onClickAway: c
                }, r.a.createElement(s.a, {
                    className: w.list
                }, r.a.createElement(d.a, {
                    classes: {
                        root: w.listItem
                    },
                    button: !0,
                    onClick: v,
                    onMouseOver: function() {
                        return y(C.d.SECONDARY2)
                    },
                    onMouseLeave: function() {
                        return y(C.d.MEDIUM_GREY)
                    }
                }, r.a.createElement(u.a, {
                    classes: {
                        root: w.listItemAvatar
                    }
                }, r.a.createElement(x.a, {
                    className: w.editIcon,
                    stroke: k
                })), r.a.createElement(m.a, {
                    primary: r.a.createElement(p.a, {
                        className: w.listItemTitle
                    }, O)
                })), r.a.createElement(f.a, {
                    className: w.divider
                }), r.a.createElement(d.a, {
                    classes: {
                        root: "".concat(w.listItem, " ").concat(w.deleteListItem)
                    },
                    button: !0,
                    onClick: E,
                    onMouseOver: function() {
                        return T(C.d.DARK_PRIMARY)
                    },
                    onMouseLeave: function() {
                        return T(C.d.MEDIUM_GREY)
                    }
                }, r.a.createElement(u.a, {
                    classes: {
                        root: w.listItemAvatar
                    }
                }, r.a.createElement(h.a, {
                    width: 15,
                    height: 18,
                    stroke: R
                })), r.a.createElement(m.a, {
                    primary: r.a.createElement(p.a, {
                        className: "".concat(w.listItemTitle)
                    }, j)
                }))))))
            }))
        },
        531: function(e, t, a) {
            "use strict";
            var n = a(0),
                o = a.n(n);
            t.a = Object(n.memo)((function(e) {
                var t = e.className,
                    a = e.height,
                    n = void 0 === a ? 40 : a,
                    r = e.width,
                    c = void 0 === r ? 40 : r,
                    i = e.stroke,
                    l = void 0 === i ? "#C82128" : i;
                return o.a.createElement("svg", {
                    width: c,
                    height: n,
                    viewBox: "0 0 18 18",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: t
                }, o.a.createElement("g", {
                    id: "Iconly/Bold/Delete"
                }, o.a.createElement("g", {
                    id: "Delete"
                }, o.a.createElement("path", {
                    id: "Delete_2",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M15.2153 3.93223C15.5071 3.93223 15.75 4.17447 15.75 4.48272V4.76772C15.75 5.06846 15.5071 5.31821 15.2153 5.31821H2.78539C2.49289 5.31821 2.25 5.06846 2.25 4.76772V4.48272C2.25 4.17447 2.49289 3.93223 2.78539 3.93223H4.97217C5.41639 3.93223 5.80298 3.61648 5.90291 3.17098L6.01743 2.65949C6.1954 1.96275 6.78112 1.5 7.45145 1.5H10.5485C11.2116 1.5 11.8039 1.96275 11.9753 2.62274L12.0978 3.17023C12.197 3.61648 12.5836 3.93223 13.0286 3.93223H15.2153ZM14.1045 14.3505C14.3328 12.2227 14.7325 7.1678 14.7325 7.1168C14.7471 6.9623 14.6968 6.81605 14.5968 6.6983C14.4896 6.58805 14.3539 6.5228 14.2044 6.5228H3.80149C3.65123 6.5228 3.50826 6.58805 3.40906 6.6983C3.3084 6.81605 3.2588 6.9623 3.2661 7.1168C3.26744 7.12617 3.28178 7.30423 3.30576 7.60192C3.41228 8.92435 3.70897 12.6076 3.90069 14.3505C4.03636 15.6345 4.87883 16.4415 6.09914 16.4707C7.04082 16.4925 8.01094 16.5 9.00294 16.5C9.93732 16.5 10.8863 16.4925 11.8571 16.4707C13.1198 16.449 13.9615 15.6562 14.1045 14.3505Z",
                    fill: l
                }))))
            }))
        },
        532: function(e, t, a) {
            e.exports = a.p + "static/media/leftArrow.2a110988.svg"
        },
        542: function(e, t, a) {
            "use strict";
            var n = a(0),
                o = a.n(n),
                r = a(35),
                c = a(184),
                i = a(225),
                l = a(362),
                s = a(795),
                d = a.n(s),
                u = a(9),
                m = a(25),
                p = a(40),
                b = a(241),
                f = Object(c.a)((function() {
                    return {
                        root: {
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            flexGrow: 1
                        },
                        noResultsIcon: {
                            width: "112px",
                            height: "89px",
                            marginBottom: "24px"
                        },
                        primaryText: {
                            fontSize: "14px",
                            color: u.d.MEDIUM_GREY,
                            marginBottom: "16px"
                        },
                        secondaryText: {
                            fontSize: "16px",
                            color: u.d.TEXT_DISABLED
                        },
                        backBtn: {
                            height: "32px",
                            border: "none",
                            boxShadow: "none",
                            backgroundColor: u.d.LIGHT_GREY,
                            fontSize: "14px",
                            fontWeight: 700,
                            textTransform: "capitalize",
                            color: u.d.MEDIUM_DARK_GREY,
                            padding: "0 29.5px"
                        }
                    }
                }));
            t.a = Object(n.memo)((function(e) {
                var t = e.action,
                    a = e.actionText,
                    n = Object(p.b)().t,
                    c = Object(b.b)().setSearchText,
                    s = f(),
                    u = Object(r.g)();
                return o.a.createElement("div", {
                    className: s.root
                }, o.a.createElement("img", {
                    src: d.a,
                    alt: n("searchresults_nothingfound"),
                    className: s.noResultsIcon
                }), o.a.createElement(i.a, {
                    className: s.primaryText
                }, n("searchresults_nothingfound")), o.a.createElement(l.a, {
                    className: s.backBtn,
                    onClick: t || function() {
                        c(""), u.replace(m.f)
                    }
                }, a || n("back_to_home")))
            }))
        },
        563: function(e, t, a) {
            e.exports = a.p + "static/media/deleteIcon.d35d5f72.svg"
        },
        565: function(e, t, a) {
            "use strict";
            var n = a(0),
                o = a.n(n),
                r = a(184),
                c = a(514),
                i = a(225),
                l = a(40),
                s = a(9),
                d = a(119),
                u = a(430),
                m = Object(r.a)((function(e) {
                    return {
                        dropZone: {
                            display: "flex",
                            alignItems: "center"
                        },
                        addPhotoButton: {
                            padding: "7px 9px",
                            fontSize: "18px",
                            marginRight: "8px",
                            cursor: "pointer"
                        },
                        uploadPhotoButton: {
                            fontWeight: 700,
                            fontSize: "14px",
                            lineHeight: "24px",
                            letterSpacing: "0.2px",
                            height: "32px",
                            border: "none",
                            padding: "0 24px",
                            cursor: "pointer"
                        },
                        fileName: {
                            fontSize: "18px",
                            color: s.d.TEXT_GREY,
                            wordBreak: "break-word"
                        },
                        reducedText: {
                            fontSize: "12px",
                            whiteSpace: "nowrap",
                            padding: "0 12px"
                        }
                    }
                }));
            t.a = Object(n.memo)((function(e) {
                var t = e.onImageUpload,
                    a = e.selectedImageUrl,
                    n = "profileForm" === e.type,
                    r = Object(l.b)().t,
                    s = m(),
                    p = Object(u.a)(),
                    b = Object(d.b)() ? s.reducedText : "",
                    f = Object(c.a)({
                        noClick: !0,
                        noKeyboard: !0,
                        multiple: !1,
                        onDrop: function(e) {
                            e[0] && t(e[0])
                        },
                        accept: n ? [".jpeg", ".jpg"] : [".png", ".jpeg", ".jpg"]
                    }),
                    C = f.getRootProps,
                    h = f.getInputProps,
                    x = f.open,
                    g = f.acceptedFiles;
                return o.a.createElement("div", C({
                    className: s.dropZone
                }), o.a.createElement("input", h()), o.a.createElement("button", {
                    type: "button",
                    onClick: x,
                    className: "".concat(p.paleSecondaryBtn, " ").concat(n ? s.uploadPhotoButton : s.addPhotoButton, " ").concat(b)
                }, (null === a || void 0 === a ? void 0 : a.length) ? r("change_photo") : r("upload_photo")), n ? null : o.a.createElement(i.a, {
                    className: s.fileName
                }, g.length && (null === a || void 0 === a ? void 0 : a.length) ? g[0].name : r("no_chosen_file")))
            }))
        },
        566: function(e, t, a) {
            "use strict";
            var n = a(1),
                o = a.n(n),
                r = a(3),
                c = a(18),
                i = a(0),
                l = a.n(i),
                s = a(858),
                d = a(939),
                u = a(672),
                m = a.n(u),
                p = a(673),
                b = a.n(p),
                f = a(302),
                C = a(184),
                h = a(382),
                x = a(237),
                g = a.n(x),
                E = a(297),
                v = a(95),
                O = a(9),
                j = a(40),
                w = Object(C.a)((function(e) {
                    return {
                        modalStyles: {
                            maxHeight: "100vh"
                        },
                        container: {
                            position: "absolute",
                            width: "70%",
                            height: "70%",
                            backgroundColor: O.c.WHITE,
                            borderRadius: "15px",
                            boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.1)",
                            padding: e.spacing(2, 4, 3),
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            top: "15%",
                            left: "15%"
                        },
                        btnBare: {
                            color: "".concat(O.c.BLUE),
                            boxShadow: "none",
                            border: "1px solid ".concat(O.c.BLUE),
                            fontWeight: O.g.BOLD,
                            width: "130px",
                            "&:disabled": {
                                border: "none",
                                backgroundColor: O.d.BACKGROUND,
                                color: O.d.TEXT_DISABLED,
                                opacity: 1
                            }
                        },
                        cropContainer: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: "80px"
                        },
                        controls: {
                            position: "absolute",
                            bottom: 0,
                            left: "50%",
                            width: "50%",
                            transform: "translateX(-50%)",
                            height: "80px",
                            display: "flex",
                            alignItems: "center"
                        },
                        slider: {
                            width: "50%"
                        },
                        rotateButtonsContainer: {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: "10px",
                            marginRight: "10px"
                        },
                        easyCropContainer: {
                            borderTopLeftRadius: "15px",
                            borderTopRightRadius: "15px"
                        },
                        closeIcon: {
                            position: "absolute",
                            top: "31px",
                            right: "31px",
                            color: O.d.GREY_BORDER,
                            cursor: "pointer",
                            zIndex: 8
                        },
                        confirmBtnWrapper: {
                            display: "flex"
                        },
                        circularLoader: {
                            marginLeft: "20px"
                        }
                    }
                })),
                S = {
                    x: 0,
                    y: 0
                },
                _ = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                };
            t.a = Object(i.memo)((function(e) {
                var t = e.imageUrl,
                    a = e.open,
                    n = e.onClose,
                    u = e.onEditComplete,
                    p = Object(i.useState)(S),
                    C = Object(c.a)(p, 2),
                    x = C[0],
                    O = C[1],
                    k = Object(i.useState)(1),
                    y = Object(c.a)(k, 2),
                    I = y[0],
                    N = y[1],
                    R = Object(i.useState)(0),
                    T = Object(c.a)(R, 2),
                    L = T[0],
                    D = T[1],
                    A = Object(i.useState)(!1),
                    M = Object(c.a)(A, 2),
                    B = M[0],
                    W = M[1],
                    H = Object(i.useState)(_),
                    G = Object(c.a)(H, 2),
                    Y = G[0],
                    P = G[1],
                    U = Object(i.useCallback)((function(e, t) {
                        P(t)
                    }), []),
                    z = function(e) {
                        return new Promise((function(t, a) {
                            var n = new Image;
                            n.addEventListener("load", (function() {
                                return t(n)
                            })), n.addEventListener("error", (function(e) {
                                return a(e)
                            })), n.setAttribute("crossOrigin", "anonymous"), n.src = e
                        }))
                    };

                function K(e) {
                    return e * Math.PI / 180
                }
                var Z = function() {
                    W(!1), O(S), N(1), D(0), n()
                };

                function F(e, t) {
                    return V.apply(this, arguments)
                }

                function V() {
                    return (V = Object(r.a)(o.a.mark((function e(t, a) {
                        var n, r, c, i, l, s, d, m = arguments;
                        return o.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = m.length > 2 && void 0 !== m[2] ? m[2] : 0, e.next = 3, z(t);
                                case 3:
                                    return r = e.sent, c = document.createElement("canvas"), i = c.getContext("2d"), l = Math.max(r.width, r.height), s = l / 2 * Math.sqrt(2) * 2, c.width = s, c.height = s, null === i || void 0 === i || i.translate(s / 2, s / 2), null === i || void 0 === i || i.rotate(K(n)), null === i || void 0 === i || i.translate(-s / 2, -s / 2), null === i || void 0 === i || i.drawImage(r, s / 2 - .5 * (null === r || void 0 === r ? void 0 : r.width), s / 2 - .5 * (null === r || void 0 === r ? void 0 : r.height)), d = null === i || void 0 === i ? void 0 : i.getImageData(0, 0, s, s), c.width = a.width, c.height = a.height, null === i || void 0 === i || i.putImageData(d, Math.round(0 - s / 2 + .5 * r.width - a.x), Math.round(0 - s / 2 + .5 * r.height - a.y)), Z(), e.abrupt("return", new Promise((function(e) {
                                        c.toBlob((function(e) {
                                            u(e)
                                        }))
                                    })));
                                case 20:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                var q = function() {
                        var e = Object(r.a)(o.a.mark((function e() {
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return W(!0), e.next = 3, F(t, Y, L);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    X = w(),
                    Q = Object(j.b)().t;
                return l.a.createElement(f.a, {
                    open: a,
                    onClose: Z,
                    className: X.modalStyles
                }, l.a.createElement("div", {
                    className: X.container
                }, l.a.createElement(g.a, {
                    className: X.closeIcon,
                    onClick: Z
                }), l.a.createElement("div", {
                    className: X.cropContainer
                }, l.a.createElement(s.a, {
                    image: t,
                    crop: x,
                    zoom: I,
                    aspect: 1,
                    cropShape: "round",
                    onCropChange: O,
                    onCropComplete: U,
                    onZoomChange: N,
                    rotation: L,
                    classes: {
                        containerClassName: X.easyCropContainer
                    }
                })), l.a.createElement("div", {
                    className: X.controls
                }, l.a.createElement(d.a, {
                    value: I,
                    min: 1,
                    max: 3,
                    step: .1,
                    "aria-labelledby": "Zoom",
                    onChange: function(e, t) {
                        return N(Number(t))
                    },
                    className: X.slider
                }), l.a.createElement("span", {
                    className: X.rotateButtonsContainer
                }, l.a.createElement(h.a, {
                    "aria-label": "rotate-right",
                    onClick: function() {
                        return D(L + 90)
                    }
                }, l.a.createElement(m.a, null)), l.a.createElement(h.a, {
                    "aria-label": "rotate-left",
                    onClick: function() {
                        return D(L - 90)
                    }
                }, l.a.createElement(b.a, null))), l.a.createElement("span", {
                    className: X.confirmBtnWrapper
                }, l.a.createElement(v.a, {
                    disabled: B,
                    onClick: q,
                    className: X.btnBare
                }, Q("confirm")), B && l.a.createElement(E.a, {
                    className: X.circularLoader
                })))))
            }))
        },
        568: function(e, t, a) {
            "use strict";
            var n = a(171),
                o = a(0),
                r = a.n(o),
                c = ["image"];
            t.a = function(e) {
                var t = e.image,
                    a = Object(n.a)(e, c);
                return r.a.createElement("img", Object.assign({
                    src: t,
                    alt: "qr code"
                }, a))
            }
        },
        569: function(e, t, a) {
            e.exports = a.p + "static/media/phoneIcon.a2eb8893.svg"
        },
        570: function(e, t, a) {
            e.exports = a.p + "static/media/address.599de2e7.svg"
        },
        571: function(e, t, a) {
            e.exports = a.p + "static/media/linkTransactionIcon.c74a652e.svg"
        },
        572: function(e, t, a) {
            e.exports = a.p + "static/media/giftIcon.d1e2258d.svg"
        },
        573: function(e, t, a) {
            e.exports = a.p + "static/media/qrCodeIcon.2ea491dd.svg"
        },
        576: function(e, t, a) {
            "use strict";
            var n = a(0),
                o = a.n(n);
            t.a = Object(n.memo)((function(e) {
                e.className;
                var t = e.height,
                    a = void 0 === t ? 18 : t,
                    n = e.width,
                    r = void 0 === n ? 18 : n,
                    c = e.stroke,
                    i = void 0 === c ? "#909192" : c;
                return o.a.createElement("svg", {
                    width: r,
                    height: a,
                    viewBox: "0 0 18 18",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, o.a.createElement("g", {
                    id: "Iconly/Bold/Edit"
                }, o.a.createElement("g", {
                    id: "Edit"
                }, o.a.createElement("path", {
                    id: "Edit_2",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.0323 15.0209L13.6221 6.49908C13.9802 6.03953 14.1076 5.50822 13.9882 4.96724C13.8847 4.47544 13.5823 4.00783 13.1286 3.65309L12.0224 2.7743C11.0594 2.00838 9.86559 2.089 9.18114 2.96779L8.44099 3.92801C8.34548 4.04814 8.36936 4.22551 8.48874 4.32226C8.48874 4.32226 10.359 5.82185 10.3988 5.8541C10.5262 5.97503 10.6217 6.13628 10.6455 6.32977C10.6853 6.7087 10.4227 7.06344 10.0327 7.11181C9.84967 7.136 9.67458 7.07956 9.54724 6.97475L7.58145 5.41067C7.48594 5.33891 7.34269 5.35423 7.2631 5.45098L2.59135 11.4977C2.28892 11.8766 2.18546 12.3684 2.28892 12.8441L2.88582 15.4321C2.91766 15.5692 3.03704 15.6659 3.1803 15.6659L5.80666 15.6337C6.28418 15.6256 6.72987 15.4079 7.0323 15.0209ZM10.7098 14.215H14.9924C15.4102 14.215 15.75 14.5592 15.75 14.9825C15.75 15.4066 15.4102 15.7501 14.9924 15.7501H10.7098C10.292 15.7501 9.95213 15.4066 9.95213 14.9825C9.95213 14.5592 10.292 14.215 10.7098 14.215Z",
                    fill: i
                }))))
            }))
        },
        577: function(e, t, a) {
            "use strict";
            var n = a(0),
                o = a.n(n);
            t.a = Object(n.memo)((function(e) {
                var t = e.className,
                    a = e.height,
                    n = e.width,
                    r = e.stroke;
                return o.a.createElement("svg", {
                    width: n || "4",
                    height: a || "18",
                    className: t || "",
                    viewBox: "0 0 4 18",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, o.a.createElement("path", {
                    d: "M4 2C4 0.9 3.1 7.86804e-08 2 1.74845e-07C0.900002 2.7101e-07 2.9397e-06 0.9 3.03587e-06 2C3.13203e-06 3.1 0.900003 4 2 4C3.1 4 4 3.1 4 2ZM4 16C4 14.9 3.1 14 2 14C0.900003 14 4.16362e-06 14.9 4.25979e-06 16C4.35595e-06 17.1 0.900004 18 2 18C3.1 18 4 17.1 4 16ZM4 9C4 7.9 3.1 7 2 7C0.900003 7 3.55166e-06 7.9 3.64783e-06 9C3.74399e-06 10.1 0.900003 11 2 11C3.1 11 4 10.1 4 9Z",
                    fill: r || "#797979"
                }))
            }))
        },
        578: function(e, t, a) {
            "use strict";
            var n = a(1),
                o = a.n(n),
                r = a(3),
                c = a(4),
                i = a(16),
                l = a(18),
                s = a(0),
                d = a.n(s),
                u = a(184),
                m = a(35),
                p = a(225),
                b = a(302),
                f = a(618),
                C = a(362),
                h = a(297),
                x = a(408),
                g = a(560),
                E = a(449),
                v = a(489),
                O = a(565),
                j = a(566),
                w = a(499),
                S = a(40),
                _ = a(230),
                k = a(9),
                y = a(246),
                I = a(25),
                N = a(106),
                R = a(460),
                T = a(531),
                L = a(696),
                D = a.n(L),
                A = a(570),
                M = a.n(A),
                B = a(697),
                W = a.n(B),
                H = a(443),
                G = a.n(H),
                Y = a(426),
                P = a(84),
                U = a(454),
                z = a(143),
                K = a(119),
                Z = a(94),
                F = a(418),
                V = a(451),
                q = a(462),
                X = a(430),
                Q = Object(u.a)((function(e) {
                    return {
                        modal: {
                            height: "100%",
                            display: "flex"
                        },
                        paper: {
                            position: "relative",
                            width: "696px",
                            backgroundColor: k.d.WHITE,
                            borderRadius: "15px",
                            boxShadow: k.d.GREY_SHADOW,
                            padding: "32px 40px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            maxHeight: "600px",
                            margin: "auto"
                        },
                        titleContainer: {
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            paddingBottom: "10px",
                            marginBottom: "16px",
                            borderBottom: "1px solid ".concat(k.d.LIGHT_MEDIUM_GREY)
                        },
                        editIcon: {
                            width: "25px",
                            height: "30px",
                            marginRight: "11.5px"
                        },
                        closeIcon: {
                            position: "absolute",
                            top: "36px",
                            right: "40px",
                            cursor: "pointer"
                        },
                        title: {
                            fontSize: "24px",
                            fontWeight: 700,
                            color: k.d.DARK_GREY
                        },
                        form: {
                            width: "100%",
                            overflowY: "auto"
                        },
                        formSection: {
                            display: "flex",
                            flexDirection: "column"
                        },
                        sectionTitle: {
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            borderRadius: "4px",
                            backgroundColor: "rgba(240, 242, 244, 0.73)",
                            padding: "10px",
                            marginBottom: "16px"
                        },
                        sectionIcon: {
                            width: "12px",
                            height: "12px",
                            marginRight: "10px"
                        },
                        sectionContent: {
                            display: "flex",
                            justifyContent: "space-between"
                        },
                        fieldsWrapper: {
                            display: "flex",
                            flexDirection: "column",
                            width: "calc(50% - 8px)"
                        },
                        fieldset: {
                            marginBottom: "16px"
                        },
                        label: {
                            fontSize: "18px",
                            marginBottom: "16px",
                            "@media only screen and (max-width: 1440px)": {
                                marginBottom: "10px"
                            }
                        },
                        uploadImageContainer: {
                            width: "50%",
                            display: "flex",
                            justifyContent: "center"
                        },
                        deleteImageButton: {
                            width: "24px",
                            height: "24px",
                            borderRadius: "12px",
                            backgroundColor: k.d.WHITE,
                            border: "none",
                            boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.15)",
                            padding: "5px 6px",
                            cursor: "pointer",
                            "&:disabled": {
                                cursor: "default"
                            }
                        },
                        avatar: {
                            width: "72px",
                            height: "72px",
                            fontSize: "24px",
                            fontWeight: "bold",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: k.d.SECONDARY_COLOR
                        },
                        uploadImageWrapper: {
                            marginLeft: "24px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center"
                        },
                        circularLoader: {
                            margin: "25px 16px"
                        },
                        buttonsContainer: {
                            width: "100%",
                            display: "flex",
                            justifyContent: "flex-end"
                        },
                        button: {
                            height: "48px",
                            padding: "0 23px",
                            textTransform: "capitalize"
                        },
                        saveButton: {
                            padding: "0 30.5px",
                            marginLeft: "16px"
                        },
                        error: {
                            margin: "13px 0",
                            fontSize: "16px",
                            color: k.d.PRIMARY_COLOR
                        },
                        mobileNumberField: {
                            "& .MuiOutlinedInput-input": {
                                fontSize: "16px",
                                height: "24px"
                            },
                            "& .MuiOutlinedInput-root": {
                                padding: "8px"
                            }
                        },
                        cityWrapper: {
                            display: "flex",
                            "& > div:first-child": {
                                marginRight: "16px"
                            }
                        },
                        divider: {
                            width: "100%",
                            marginTop: "8px",
                            marginBottom: "16px",
                            backgroundColor: k.d.LIGHT_MEDIUM_GREY
                        },
                        deletePhotoBtn: {
                            width: "137px",
                            height: "32px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "4px",
                            boxShadow: "none",
                            fontSize: "14px",
                            fontWeight: 700,
                            color: k.d.MEDIUM_DARK_GREY,
                            textTransform: "capitalize",
                            border: "1px solid ".concat(k.d.LIGHT_GREY),
                            marginTop: "8px",
                            "&:hover": {
                                backgroundColor: k.d.LIGHT_PRIMARY
                            }
                        },
                        deleteIcon: {
                            marginRight: "8px"
                        },
                        reducedText: {
                            fontSize: "12px",
                            whiteSpace: "nowrap",
                            padding: "0 12px"
                        },
                        reducedMargin: {
                            marginLeft: "12px"
                        }
                    }
                }));
            t.a = Object(s.memo)((function(e) {
                var t, a, n = e.open,
                    u = e.onClose,
                    L = e.customer,
                    A = e.onEditCustomerSuccess,
                    B = Object(s.useState)(L.image || ""),
                    H = Object(l.a)(B, 2),
                    $ = H[0],
                    J = H[1],
                    ee = Object(s.useState)(),
                    te = Object(l.a)(ee, 2),
                    ae = te[0],
                    ne = te[1],
                    oe = Object(s.useState)(!1),
                    re = Object(l.a)(oe, 2),
                    ce = re[0],
                    ie = re[1],
                    le = Object(s.useState)(!1),
                    se = Object(l.a)(le, 2),
                    de = se[0],
                    ue = se[1],
                    me = Object(s.useState)(!1),
                    pe = Object(l.a)(me, 2),
                    be = pe[0],
                    fe = pe[1],
                    Ce = Object(s.useState)(!1),
                    he = Object(l.a)(Ce, 2),
                    xe = he[0],
                    ge = he[1],
                    Ee = Object(s.useState)({
                        customer_id: L.customer_id,
                        customer_name: L.name || "",
                        phone: L.phone || "",
                        country_code: L.country_code || "+91"
                    }),
                    ve = Object(l.a)(Ee, 2),
                    Oe = ve[0],
                    je = ve[1],
                    we = Object(s.useState)(Object(i.a)({}, y.b)),
                    Se = Object(l.a)(we, 2),
                    _e = Se[0],
                    ke = Se[1],
                    ye = Q(),
                    Ie = Object(X.a)(),
                    Ne = Object(S.b)().t,
                    Re = Object(Z.a)(),
                    Te = Re.getUserInfo,
                    Le = Re.getDeviceInfo,
                    De = Re.getCurrentBook,
                    Ae = Object(m.g)(),
                    Me = Object(_.b)().showError,
                    Be = De(),
                    We = Te(),
                    He = be || xe,
                    Ge = Object(K.b)() ? ye.reducedText : "";
                Object(s.useEffect)((function() {
                    if (je({
                            customer_id: L.customer_id,
                            customer_name: L.name || "",
                            phone: L.phone || "",
                            country_code: L.country_code || "+91"
                        }), (null === L || void 0 === L ? void 0 : L.address) && !Object(z.b)(null === L || void 0 === L ? void 0 : L.address)) {
                        for (var e = null === L || void 0 === L ? void 0 : L.address.split(","), t = Object.keys(_e), a = _e, n = 0; n < e.length; n++) a[t[n]] = e[n];
                        ke(a)
                    } else ke(Object(i.a)({}, y.b));
                    J((null === L || void 0 === L ? void 0 : L.image) || ""), ne(void 0)
                }), [L, n]);
                var Ye = function(e) {
                        fe(!1), A(e)
                    },
                    Pe = Object(R.a)({
                        onSuccess: Ye,
                        isEdit: !0
                    }),
                    Ue = Pe.handleChange,
                    ze = Pe.handlePhoneNumberChange,
                    Ke = Pe.errors,
                    Ze = Pe.values,
                    Fe = Pe.handleCountryCodeChange,
                    Ve = function(e) {
                        var t = e.target.name;
                        switch (t) {
                            case "country_code":
                                Fe(e), je(Object(i.a)(Object(i.a)({}, Oe), {}, Object(c.a)({}, t, e.target.value)));
                                break;
                            case "phone":
                                var a = e.target.value.replace(/[^0-9]/g, "");
                                je(Object(i.a)(Object(i.a)({}, Oe), {}, Object(c.a)({}, t, a))), ze(e);
                                break;
                            default:
                                0 !== e.target.value.indexOf(" ") && (je(Object(i.a)(Object(i.a)({}, Oe), {}, Object(c.a)({}, t, e.target.value))), Ue(e))
                        }
                    },
                    qe = function(e) {
                        if (0 !== e.target.value.indexOf(" ")) {
                            var t = Object(i.a)({}, _e);
                            if ("pinCode" === e.target.name) {
                                var a = e.target.value.replace(/[^0-9]/g, "");
                                t = Object(i.a)(Object(i.a)({}, _e), {}, {
                                    pinCode: a
                                })
                            } else t = Object(i.a)(Object(i.a)({}, _e), {}, Object(c.a)({}, e.target.name, e.target.value));
                            ke(t)
                        }
                    },
                    Xe = function() {
                        var e = Object(r.a)(o.a.mark((function e(t) {
                            var a, n;
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (void 0 !== t) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return ge(!0), e.next = 5, Object(V.j)(t, t.name);
                                    case 5:
                                        a = e.sent, n = Object(i.a)({
                                            preview: URL.createObjectURL(t)
                                        }, a), J(n.preview), ne(n), ge(!1);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Qe = function() {
                        var e = Object(r.a)(o.a.mark((function e(t) {
                            var a, n, r, c;
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t.preventDefault(), fe(!0), n = "".concat(_e.building, ",").concat(_e.landmark, ",").concat(_e.city, ",").concat(_e.state, ",").concat(_e.pinCode), Ze.address = n, Object(q.l)(), r = Le(), void 0 !== We && void 0 !== r) {
                                            e.next = 9;
                                            break
                                        }
                                        return Ae.replace(I.o), e.abrupt("return");
                                    case 9:
                                        if (void 0 !== Be) {
                                            e.next = 12;
                                            break
                                        }
                                        return Ae.replace(I.k), e.abrupt("return");
                                    case 12:
                                        if (c = Be.book_id, !(null === (a = L.phone) || void 0 === a ? void 0 : a.length)) {
                                            e.next = 21;
                                            break
                                        }
                                        return e.next = 16, Object(U.a)(c, Oe.phone, L.customer_id, Oe.country_code);
                                    case 16:
                                        if (!e.sent) {
                                            e.next = 21;
                                            break
                                        }
                                        return ue(!0), fe(!1), e.abrupt("return");
                                    case 21:
                                        F.a.updateCustomer({
                                            bookId: c,
                                            customerName: Oe.customer_name,
                                            phone: Oe.phone,
                                            user: We,
                                            deviceInfo: r,
                                            address: n,
                                            country_code: Oe.country_code,
                                            localImage: ae,
                                            image: $,
                                            customerId: Oe.customer_id
                                        }).then((function(e) {
                                            Ye(e)
                                        })).catch((function(e) {
                                            Me(), Object(P.a)(e, {
                                                tags: {
                                                    module: N.a.ADD_CUSTOMER
                                                }
                                            })
                                        }));
                                    case 22:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    $e = function() {
                        var e = Object(r.a)(o.a.mark((function e(t) {
                            var a;
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        a = new File([t], "edited-profile-picture.jpg", {
                                            type: "image/jpg"
                                        }), Xe(a);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Je = function() {
                        var e = Object(r.a)(o.a.mark((function e() {
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        ae && (ge(!0), J(ae.preview), ne(void 0)), ie(!0), ge(!1);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    et = function() {
                        Ke.name = "", Ke.phone = "", Ze.phone = L.phone || "", Ze.customer_name = L.name, u()
                    };
                return d.a.createElement(b.a, {
                    open: n,
                    className: ye.modal,
                    onClose: et,
                    disableScrollLock: !0
                }, d.a.createElement("div", {
                    className: ye.paper
                }, d.a.createElement("div", {
                    className: ye.titleContainer
                }, d.a.createElement("img", {
                    src: D.a,
                    alt: Ne("edit_customer"),
                    className: ye.editIcon
                }), d.a.createElement(p.a, {
                    className: ye.title
                }, Ne("edit_customer")), d.a.createElement("img", {
                    className: ye.closeIcon,
                    src: G.a,
                    alt: "close",
                    onClick: et
                })), d.a.createElement("form", {
                    onSubmit: Qe,
                    className: ye.form
                }, d.a.createElement("div", {
                    className: ye.formSection
                }, d.a.createElement(p.a, {
                    className: ye.sectionTitle
                }, d.a.createElement("img", {
                    src: W.a,
                    className: ye.sectionIcon,
                    alt: Ne("personal_details")
                }), Ne("personal_details")), d.a.createElement("div", {
                    className: ye.sectionContent
                }, d.a.createElement("div", {
                    className: ye.fieldsWrapper
                }, d.a.createElement("div", {
                    className: ye.fieldset
                }, d.a.createElement(E.a, {
                    value: Oe.customer_name,
                    name: "customer_name",
                    placeholder: Ne("customer_name"),
                    onChangeHandler: Ve,
                    error: !!(null === Ke || void 0 === Ke ? void 0 : Ke.name)
                }), (null === Ke || void 0 === Ke ? void 0 : Ke.name) && d.a.createElement(x.a, {
                    className: ye.error
                }, Ne("enter_name"))), d.a.createElement("div", {
                    className: ye.fieldset
                }, d.a.createElement(v.a, {
                    values: Oe,
                    errors: Ke,
                    handleChange: Ve,
                    handleCountryCodeChange: Ve,
                    className: ye.mobileNumberField
                }))), d.a.createElement("div", {
                    className: "".concat(ye.fieldset, " ").concat(ye.uploadImageContainer)
                }, (be || xe) && d.a.createElement(h.a, {
                    className: ye.circularLoader
                }), d.a.createElement(f.a, {
                    className: ye.avatar,
                    src: $
                }, Object(Y.a)(L.name)), d.a.createElement("div", {
                    className: "".concat(ye.uploadImageWrapper, " ").concat(Object(K.b)() ? ye.reducedMargin : "")
                }, d.a.createElement(O.a, {
                    onImageUpload: function() {
                        var e = Object(r.a)(o.a.mark((function e(t) {
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Xe(t);
                                    case 2:
                                        Je();
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    selectedImageUrl: $,
                    type: "profileForm"
                }), d.a.createElement(C.a, {
                    onClick: function() {
                        J(""), ne(void 0)
                    },
                    className: "".concat(ye.deletePhotoBtn, " ").concat(Ge),
                    disabled: !($.length > 0)
                }, d.a.createElement(T.a, {
                    width: 16,
                    height: 16,
                    className: ye.deleteIcon,
                    stroke: 0 === $.length ? k.d.TEXT_DISABLED : k.d.DARK_PRIMARY
                }), Ne("delete")), d.a.createElement(j.a, {
                    open: ce,
                    imageUrl: $,
                    onEditComplete: $e,
                    onClose: function() {
                        return ie(!1)
                    }
                }))))), d.a.createElement("div", {
                    className: ye.formSection
                }, d.a.createElement(p.a, {
                    className: ye.sectionTitle
                }, d.a.createElement("img", {
                    src: M.a,
                    className: ye.sectionIcon,
                    alt: Ne("address")
                }), Ne("address")), d.a.createElement("div", {
                    className: ye.sectionContent
                }, d.a.createElement("div", {
                    className: ye.fieldsWrapper
                }, d.a.createElement("div", {
                    className: ye.fieldset
                }, d.a.createElement(E.a, {
                    value: _e.building,
                    name: "building",
                    placeholder: Ne("building_number"),
                    onChangeHandler: qe,
                    maxLength: y.d
                })), d.a.createElement("div", {
                    className: ye.fieldset
                }, d.a.createElement(E.a, {
                    value: _e.pinCode,
                    name: "pinCode",
                    placeholder: Ne("pin_code"),
                    onChangeHandler: qe,
                    maxLength: y.e
                }))), d.a.createElement("div", {
                    className: ye.fieldsWrapper
                }, d.a.createElement("div", {
                    className: ye.fieldset
                }, d.a.createElement(E.a, {
                    value: _e.landmark,
                    name: "landmark",
                    placeholder: Ne("landmark"),
                    onChangeHandler: qe,
                    maxLength: y.d
                })), d.a.createElement("div", {
                    className: ye.cityWrapper
                }, d.a.createElement("div", {
                    className: ye.fieldset
                }, d.a.createElement(E.a, {
                    value: _e.city,
                    name: "city",
                    placeholder: Ne("city"),
                    onChangeHandler: qe,
                    maxLength: y.c
                })), d.a.createElement("div", {
                    className: ye.fieldset
                }, d.a.createElement(E.a, {
                    value: _e.state,
                    name: "state",
                    placeholder: Ne("state"),
                    onChangeHandler: qe,
                    maxLength: y.c
                })))))), d.a.createElement(g.a, {
                    className: ye.divider
                }), d.a.createElement("div", {
                    className: ye.buttonsContainer
                }, d.a.createElement(C.a, {
                    className: "".concat(ye.button, " ").concat(Ie.greyBtn),
                    onClick: u
                }, Ne("discard")), d.a.createElement(C.a, {
                    color: "primary",
                    type: "submit",
                    variant: "contained",
                    className: "".concat(Ie.secondaryBtn, " ").concat(ye.saveButton),
                    disabled: (null === Ke || void 0 === Ke || null === (t = Ke.phone) || void 0 === t ? void 0 : t.length) > 0 || (null === Ke || void 0 === Ke || null === (a = Ke.name) || void 0 === a ? void 0 : a.length) > 0 || He
                }, Ne("save_changes")))), d.a.createElement(w.a, {
                    open: de,
                    onClose: function() {
                        return ue(!1)
                    },
                    errorMessage: Ne("mobile_number_already_exists_error")
                })))
            }))
        },
        599: function(e, t, a) {
            "use strict";
            var n = a(16),
                o = a(0),
                r = a.n(o),
                c = a(184),
                i = a(368),
                l = a(367),
                s = a(298),
                d = a(225),
                u = a(9),
                m = a(479),
                p = a(40),
                b = a(119),
                f = Object(c.a)((function(e) {
                    return {
                        root: {
                            backgroundColor: "transparent",
                            borderRadius: "6px",
                            "& .MuiAutocomplete-inputRoot": {
                                padding: "6px",
                                "& .MuiAutocomplete-endAdornment": {
                                    top: "unset",
                                    right: "8px"
                                }
                            },
                            "& .MuiIconButton-root:hover": {
                                backgroundColor: "transparent"
                            }
                        },
                        focused: {
                            backgroundColor: u.c.LIGHT_BLUE,
                            "& $dropdownInput": {
                                "& .MuiOutlinedInput-input": {
                                    backgroundColor: u.c.LIGHT_BLUE
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    border: "1.5px solid ".concat(u.d.SECONDARY70)
                                }
                            }
                        },
                        dropdownInput: {
                            "& ::placeholder": {
                                opacity: 1,
                                color: u.d.SECONDARY2,
                                fontWeight: 500,
                                fontSize: "14px"
                            },
                            "& .MuiOutlinedInput-input": {
                                height: "20px",
                                fontSize: "14px",
                                width: "107px",
                                fontWeight: 500,
                                color: u.d.SECONDARY2,
                                backgroundColor: "transparent",
                                padding: "0 0 0 8px !important",
                                cursor: "pointer"
                            },
                            "& .MuiOutlinedInput-root": {
                                cursor: "pointer",
                                "&:hover": {
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        border: "".concat(u.b.INPUT_HOVER_BORDER, " !important")
                                    }
                                }
                            },
                            '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
                                paddingRight: "18px !important"
                            },
                            "& .Mui-focused": {
                                "& .MuiOutlinedInput-notchedOutline": {
                                    border: "0",
                                    boxShadow: u.d.PAPER_SHADOW
                                }
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#ECEEF1",
                                boxSizing: "border-box",
                                borderRadius: "8px"
                            }
                        },
                        popupIcon: {
                            width: "10px",
                            height: "5px",
                            transform: "rotate(180deg)"
                        },
                        dropdownListPaper: {
                            width: "100%",
                            maxHeight: "256px",
                            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.18)",
                            borderRadius: "8px",
                            marginTop: "8px",
                            backgroundColor: u.d.WHITE
                        },
                        listBox: {
                            width: "100%",
                            maxHeight: "256px",
                            padding: "10px 8px",
                            boxShadow: u.d.PAPER_SHADOW,
                            "& .MuiAutocomplete-option": {
                                padding: "10px 6px",
                                borderRadius: "4px"
                            },
                            '& .MuiAutocomplete-option[data-focus="true"]': {
                                backgroundColor: u.c.LIGHT_BLUE,
                                color: u.d.SECONDARY2
                            },
                            '& .MuiAutocomplete-option[aria-selected="true"]': {
                                backgroundColor: u.c.LIGHT_BLUE,
                                color: u.d.SECONDARY2
                            }
                        },
                        noPadding: {
                            paddingRight: "0"
                        },
                        dropdownOption: {
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "0",
                            fontSize: "15px"
                        },
                        optionLeftSide: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start"
                        },
                        label: {
                            borderRadius: "12px",
                            padding: e.spacing(1),
                            height: "24px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: u.d.MID_BLUE,
                            fontSize: "11px",
                            backgroundColor: "rgba(38, 102, 184, 0.1)",
                            fontWeight: u.g.SEMIBOLD
                        },
                        labelText: {
                            marginLeft: "16px",
                            fontSize: "14px"
                        },
                        startAdornmentWrapper: {
                            display: "flex"
                        },
                        filterText: {
                            fontSize: "14px",
                            color: u.d.TEXT_DISABLED
                        },
                        homeRoot: {
                            backgroundColor: u.d.WHITE
                        },
                        homepageInput: {
                            "& ::placeholder": {
                                color: u.d.TEXT_GREY
                            },
                            "& .MuiOutlinedInput-input": {
                                color: u.d.TEXT_GREY,
                                backgroundColor: u.d.WHITE
                            }
                        },
                        longTextStyle: {
                            fontSize: "12px"
                        }
                    }
                }));
            t.a = Object(o.memo)((function(e) {
                var t = e.fullWidth,
                    a = e.label,
                    o = e.options,
                    c = e.selected,
                    C = e.handleChange,
                    h = e.handleClick,
                    x = e.adornmentIcon,
                    g = e.id,
                    E = e.filterText,
                    v = e.isFocused,
                    O = e.className,
                    j = e.isHomePageFilter,
                    w = f(),
                    S = Object(p.b)().t,
                    _ = o.map((function(e) {
                        return Object(n.a)(Object(n.a)({}, e), {}, {
                            label: S(e.label)
                        })
                    })),
                    k = Object(b.b)() ? w.longTextStyle : "",
                    y = "\n".concat(w.root, " ").concat(v ? w.focused : "", " ").concat(j ? w.homeRoot : ""),
                    I = "".concat(w.dropdownInput, " ").concat(j ? w.homepageInput : "", " ").concat(k);
                return r.a.createElement("div", {
                    className: O
                }, r.a.createElement(i.a, {
                    id: g || "drop-down",
                    options: _,
                    fullWidth: t,
                    forcePopupIcon: !0,
                    closeIcon: !1,
                    openOnFocus: !0,
                    selectOnFocus: !1,
                    popupIcon: r.a.createElement(m.a, {
                        stroke: j ? u.d.DARK_GREY : u.d.SECONDARY70,
                        className: w.popupIcon
                    }),
                    onChange: function(e, t) {
                        C(null === t || void 0 === t ? void 0 : t.name)
                    },
                    value: (c ? _.find((function(e) {
                        return e.name === c
                    })) : null) || null,
                    className: y,
                    classes: {
                        listbox: w.listBox,
                        groupUl: w.dropdownOption,
                        popper: w.dropdownOption
                    },
                    PaperComponent: function(e) {
                        return r.a.createElement(s.a, Object.assign({}, e, {
                            className: w.dropdownListPaper
                        }))
                    },
                    getOptionLabel: function(e) {
                        return "".concat(S(e.label))
                    },
                    renderOption: function(e) {
                        return r.a.createElement("div", {
                            className: w.dropdownOption
                        }, r.a.createElement("div", {
                            className: w.optionLeftSide
                        }, S(e.label)))
                    },
                    renderInput: function(e) {
                        return r.a.createElement(l.a, Object.assign({}, e, {
                            onClick: h,
                            className: I,
                            id: "text",
                            placeholder: a,
                            fullWidth: !0,
                            variant: "outlined",
                            InputProps: Object(n.a)(Object(n.a)({}, e.InputProps), {}, {
                                startAdornment: r.a.createElement("div", {
                                    className: w.startAdornmentWrapper
                                }, x && r.a.createElement("img", {
                                    src: x,
                                    alt: "filter"
                                }), r.a.createElement(d.a, {
                                    className: "".concat(w.filterText, " ").concat(k)
                                }, E, ":")),
                                autoComplete: "new-password",
                                readOnly: !0
                            })
                        }))
                    }
                }))
            }))
        },
        600: function(e, t, a) {
            "use strict";
            var n = a(0),
                o = a.n(n),
                r = a(184),
                c = a(9),
                i = a(225),
                l = a(40),
                s = a(241),
                d = Object(r.a)({
                    searchResultTitleWrapper: {
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        width: "100%",
                        marginBottom: "16px"
                    },
                    searchTitle: {
                        fontSize: "16px",
                        fontWeight: 700,
                        marginRight: "16px"
                    },
                    searchSpan: {
                        color: c.d.SECONDARY2
                    },
                    searchCount: {
                        fontSize: "14px",
                        color: c.d.MEDIUM_GREY
                    }
                });
            t.a = Object(n.memo)((function(e) {
                var t = e.resultsCount,
                    a = e.foundTranslationKey,
                    n = Object(l.b)().t,
                    r = Object(s.b)().searchText,
                    c = d();
                return o.a.createElement("div", {
                    className: c.searchResultTitleWrapper
                }, o.a.createElement(i.a, {
                    className: c.searchTitle
                }, n("search_result"), ":", o.a.createElement("span", {
                    className: c.searchSpan
                }, ' "', r, '"')), o.a.createElement(i.a, {
                    className: c.searchCount
                }, n(a, [t])))
            }))
        },
        649: function(e, t, a) {
            e.exports = a.p + "static/media/home-skeleton.99688b4e.png"
        },
        650: function(e, t, a) {
            e.exports = a.p + "static/media/LoginScreenPattern.a6c9dcbb.png"
        },
        652: function(e, t, a) {
            e.exports = a.p + "static/media/activeStatus.7644151f.svg"
        },
        654: function(e, t, a) {
            e.exports = a.p + "static/media/warningIcon.e9f49988.svg"
        },
        655: function(e, t, a) {
            e.exports = a.p + "static/media/restoreIcon.d92c4b8c.svg"
        },
        656: function(e, t, a) {
            e.exports = a.p + "static/media/deletedEntryIcon.9a25e3cc.svg"
        },
        657: function(e, t, a) {
            e.exports = a.p + "static/media/cardBorder.eafd2700.svg"
        },
        658: function(e, t, a) {
            e.exports = a.p + "static/media/selectMultipleIcon.8f338807.svg"
        },
        659: function(e, t, a) {
            e.exports = a.p + "static/media/selectedCheckboxIcon.bee07c39.svg"
        },
        660: function(e, t, a) {
            e.exports = a.p + "static/media/deletedKhataIcon.203221cc.svg"
        },
        663: function(e, t, a) {
            e.exports = a.p + "static/media/aboutKbIcon.505cd6fe.svg"
        },
        664: function(e, t, a) {
            e.exports = a.p + "static/media/t&cIcon.263e6fc1.svg"
        },
        665: function(e, t, a) {
            e.exports = a.p + "static/media/privacyIcon.5386e32e.svg"
        },
        666: function(e, t, a) {
            e.exports = a.p + "static/media/comingSoon.8dbdf70f.svg"
        },
        674: function(e, t, a) {
            e.exports = a.p + "static/media/saveIcon.c352c0bf.svg"
        },
        676: function(e, t, a) {
            e.exports = a.p + "static/media/moneyHand.179004e2.svg"
        },
        677: function(e, t, a) {
            e.exports = a.p + "static/media/charges.6f9ade70.svg"
        },
        678: function(e, t, a) {
            e.exports = a.p + "static/media/transactionIdIcon.55c76a7e.svg"
        },
        680: function(e, t, a) {
            e.exports = a.p + "static/media/qrCode.96865764.svg"
        },
        681: function(e, t, a) {
            e.exports = a.p + "static/media/download-icon.bc1044d9.svg"
        },
        682: function(e, t, a) {
            e.exports = a.p + "static/media/blurredQrCode.088def60.svg"
        },
        683: function(e, t, a) {
            var n = {
                "./1paytm.svg": 684,
                "./2phonepe.svg": 685,
                "./3googlepay.svg": 686,
                "./4whatsapp.svg": 687,
                "./5mask-group.svg": 688,
                "./6amzn-pay.svg": 689
            };

            function o(e) {
                var t = r(e);
                return a(t)
            }

            function r(e) {
                if (!a.o(n, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return n[e]
            }
            o.keys = function() {
                return Object.keys(n)
            }, o.resolve = r, e.exports = o, o.id = 683
        },
        684: function(e, t, a) {
            e.exports = a.p + "static/media/1paytm.2341acf0.svg"
        },
        685: function(e, t, a) {
            e.exports = a.p + "static/media/2phonepe.c3950ec1.svg"
        },
        686: function(e, t, a) {
            e.exports = a.p + "static/media/3googlepay.71155568.svg"
        },
        687: function(e, t, a) {
            e.exports = a.p + "static/media/4whatsapp.5b8e489e.svg"
        },
        688: function(e, t, a) {
            e.exports = a.p + "static/media/5mask-group.9188dfde.svg"
        },
        689: function(e, t, a) {
            e.exports = a.p + "static/media/6amzn-pay.f77e802f.svg"
        },
        690: function(e, t, a) {
            e.exports = a.p + "static/media/correction1.341e7f3e.svg"
        },
        696: function(e, t, a) {
            e.exports = a.p + "static/media/editCustomer.676b6448.svg"
        },
        697: function(e, t, a) {
            e.exports = a.p + "static/media/personalDetails.b6eda9e1.svg"
        },
        795: function(e, t, a) {
            e.exports = a.p + "static/media/noResultsFound.39f8da77.svg"
        },
        797: function(e, t, a) {
            e.exports = a.p + "static/media/netBalance.844bc5f4.svg"
        },
        798: function(e, t, a) {
            e.exports = a.p + "static/media/bizAnalystIcon.61ebb845.svg"
        },
        799: function(e, t, a) {
            e.exports = a.p + "static/media/addCustomerIcon.02c2b0f1.svg"
        },
        800: function(e, t, a) {
            e.exports = a.p + "static/media/customerIcon.6bad5509.svg"
        },
        887: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                o = a.n(n),
                r = a(35),
                c = a(54),
                i = a(25),
                l = a(110),
                s = a(40),
                d = a(94),
                u = a(96),
                m = a(444);
            t.default = function() {
                var e = Object(r.g)(),
                    t = Object(d.a)(),
                    a = t.hasLocale,
                    p = t.isLoggedIn,
                    b = t.getUserInfo,
                    f = Object(u.a)().setLocale;
                Object(n.useEffect)((function() {
                    var t = b();
                    !1 !== p() && void 0 !== t ? !1 !== a() ? (e.replace(i.B), p() && void 0 !== t && t.is_new_user && Object(m.m)("manual")) : f(l.a) : e.replace(i.o)
                }), [b, a, e, p]);
                var C = Object(s.b)().t;
                return o.a.createElement(c.a, {
                    text: C("khatabook_preparing")
                })
            }
        },
        913: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(18),
                o = a(0),
                r = a.n(o),
                c = a(184),
                i = a(35),
                l = a(1),
                s = a.n(l),
                d = a(3),
                u = a(72),
                m = a(382),
                p = a(362),
                b = a(618),
                f = a(471),
                C = a.n(f),
                h = a(653),
                x = a.n(h),
                g = a(225),
                E = a(468),
                v = a(559),
                O = a(469),
                j = a(298),
                w = a(403),
                S = a(411),
                _ = a(429),
                k = a(426),
                y = a(84),
                I = a(418),
                N = a(96),
                R = a(94),
                T = a(407),
                L = a(9),
                D = a(106),
                A = a(25),
                M = a(230),
                B = a(40),
                W = a(241),
                H = a(238),
                G = a(232),
                Y = Object(c.a)((function(e) {
                    return {
                        root: {
                            alignItems: "center",
                            position: "relative"
                        },
                        list: {
                            paddingTop: "0px",
                            overflowY: "auto",
                            maxHeight: "266px"
                        },
                        listItem: {
                            cursor: "pointer",
                            backgroundColor: "transparent",
                            "&:hover": {
                                backgroundColor: "rgba(66, 136, 222,0.14)",
                                "& .MuiAvatar-root": {
                                    backgroundColor: "rgba(0, 75, 172,0.2)",
                                    color: L.d.SECONDARY_COLOR
                                }
                            }
                        },
                        buttonMargin: {
                            margin: e.spacing(2)
                        },
                        btnBare: {
                            color: "".concat(L.c.BLUE),
                            boxShadow: "none",
                            border: "1px solid ".concat(L.c.BLUE),
                            fontWeight: L.g.BOLD
                        },
                        avatar: {
                            width: "40px",
                            height: "40px",
                            backgroundColor: L.d.MID_BLUE,
                            marginRight: "12px",
                            fontSize: "".concat(L.k["16px"], "rem"),
                            fontWeight: L.g.SEMIBOLD,
                            color: L.d.WHITE
                        },
                        doveAvatar: {
                            backgroundColor: "".concat(L.c.AVATAR_GREY),
                            color: "".concat(L.c.DOVE_GREY)
                        },
                        selectedBookText: {
                            fontSize: "".concat(L.k["16px"], "rem"),
                            color: "".concat(L.c.BLUE),
                            fontWeight: L.g.BOLD
                        },
                        bookText: {
                            fontSize: "".concat(L.k["16px"], "rem"),
                            fontWeight: L.g.SEMIBOLD,
                            color: "".concat(L.c.BLACK),
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            maxWidth: "180px"
                        },
                        modifyGutters: {
                            paddingLeft: e.spacing(2),
                            paddingRight: e.spacing(2)
                        },
                        sizeIcon: {
                            width: e.spacing(3),
                            height: e.spacing(3)
                        },
                        animationContainer: {
                            height: "50px",
                            width: "100%",
                            position: "relative",
                            textAlign: "center",
                            marginTop: e.spacing(1)
                        },
                        top: {
                            color: L.c.LITE_BLUE,
                            animationDuration: "550ms",
                            position: "absolute",
                            left: "50%",
                            marginLeft: "-10px"
                        },
                        circle: {
                            strokeLinecap: "round"
                        },
                        divider: {}
                    }
                }));
            var P = function(e) {
                    var t = e.bookDeleted,
                        a = e.toggleBookListing,
                        c = Y(),
                        l = Object(i.g)(),
                        s = Object(o.useState)([]),
                        d = Object(n.a)(s, 2),
                        u = d[0],
                        m = d[1],
                        p = Object(o.useState)([]),
                        f = Object(n.a)(p, 2),
                        C = f[0],
                        h = f[1],
                        x = Object(o.useState)(!1),
                        g = Object(n.a)(x, 2),
                        j = g[0],
                        w = g[1],
                        S = Object(o.useState)(!1),
                        L = Object(n.a)(S, 2),
                        P = L[0],
                        U = L[1],
                        z = Object(R.a)().getCurrentBook,
                        K = Object(N.a)().setBook,
                        Z = Object(M.b)().showError,
                        F = Object(B.b)().t,
                        V = Object(W.b)(),
                        q = V.searchText,
                        X = V.setSearchText,
                        Q = z(),
                        $ = (null === Q || void 0 === Q ? void 0 : Q.book_id) || "0";
                    Object(o.useEffect)((function() {
                        I.a.getBooks().then((function(e) {
                            m(e.filter((function(e) {
                                return 1 !== e.deleted
                            })))
                        })).catch((function(e) {
                            Z(), Object(y.a)(e, {
                                tags: {
                                    module: D.a.BOOK_LISTING
                                },
                                extra: {
                                    worker: "GET_BOOKS"
                                }
                            })
                        }))
                    }), [Z, t]);
                    var J = Object(H.d)((function() {
                            w(!j)
                        })),
                        ee = Object(H.c)((function() {
                            U(!P)
                        }));
                    return Object(o.useEffect)((function() {
                        return function() {
                            J(), ee()
                        }
                    }), [J, ee]), Object(o.useEffect)((function() {
                        var e = [];
                        u.forEach((function(t) {
                            e.push(I.a.getCustomerCount(t.book_id).then((function(e) {
                                return e
                            })).catch((function(e) {
                                return Z(), Object(y.a)(e, {
                                    tags: {
                                        module: D.a.BOOK_LISTING
                                    },
                                    extra: {
                                        worker: "GET_CUSTOMER_COUNT"
                                    }
                                }), 0
                            })))
                        })), Promise.all(e).then((function(e) {
                            h(e)
                        }))
                    }), [u, Z, P, j]), r.a.createElement("div", {
                        className: c.root
                    }, r.a.createElement(T.a, {
                        component: "nav",
                        className: c.list
                    }, u.map((function(e, t) {
                        return r.a.createElement("div", {
                            key: e.book_id
                        }, e.book_id !== $ && r.a.createElement(E.a, {
                            key: e.book_id,
                            component: "a",
                            onClick: function() {
                                return function(e) {
                                    var t = u.find((function(t) {
                                        return t.book_id === e
                                    }));
                                    a(), void 0 !== t && (K(t), Object(G.a)(t), q.length > 0 && X(""), 1 !== t.deleted && l.location.pathname !== "/".concat(A.f) && l.push(A.f))
                                }(e.book_id)
                            },
                            classes: {
                                root: c.listItem,
                                gutters: c.modifyGutters
                            }
                        }, r.a.createElement(v.a, null, null !== e.business_image ? r.a.createElement(b.a, {
                            className: c.avatar,
                            src: e.business_image
                        }) : r.a.createElement(b.a, {
                            className: c.avatar
                        }, Object(k.a)(e.business_name || e.book_name))), r.a.createElement(O.a, {
                            primary: r.a.createElement(_.a, {
                                text: e.business_name || e.book_name,
                                className: c.bookText,
                                arrow: !0,
                                placement: "top-start"
                            }),
                            secondary: C[t] + " " + F("customers", [""])
                        })))
                    }))))
                },
                U = a(442),
                z = a(119),
                K = a(74),
                Z = a(158),
                F = a(438);
            var V = Object(o.memo)((function(e) {
                var t = e.className,
                    a = e.height,
                    n = e.width;
                return r.a.createElement("svg", {
                    width: n,
                    height: a,
                    className: t,
                    viewBox: "0 0 122 122",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.a.createElement("path", {
                    d: "M100.79 25.1323C95.2962 11.2902 82.1105 6.07832 71.7068 15.3723C67.6442 18.9981 65.1096 24.7687 60.1351 27.0843C55.4676 29.2559 49.5548 28.6166 44.5075 29.7927C33.7593 32.2815 19.2886 41.7243 20.3926 56.274C20.8761 62.6473 24.7665 69.7257 26.6896 75.6891C28.8975 82.5504 30.2222 91.1343 36.0666 95.2359C46.0861 102.278 58.1723 96.5218 67.1982 90.8439C72.0557 87.7915 74.7295 85.9151 79.96 86.9619C84.802 87.9379 89.1626 91.3539 93.8942 87.301C97.4467 84.2584 97.7404 78.0925 100.723 74.4715C104.084 70.3918 107.491 70.0966 109.237 63.9649C111.354 56.5253 108.235 51.8771 106.126 45.2306C104.017 38.584 103.377 31.6446 100.79 25.1323Z",
                    fill: "#E3F0FF"
                }), r.a.createElement("path", {
                    d: "M58.9894 106.794C77.8388 106.794 93.1194 105.742 93.1194 104.444C93.1194 103.147 77.8388 102.095 58.9894 102.095C40.1399 102.095 24.8594 103.147 24.8594 104.444C24.8594 105.742 40.1399 106.794 58.9894 106.794Z",
                    fill: "#0752AD"
                }), r.a.createElement("path", {
                    opacity: "0.8",
                    d: "M58.9894 106.794C77.8388 106.794 93.1194 105.742 93.1194 104.444C93.1194 103.147 77.8388 102.095 58.9894 102.095C40.1399 102.095 24.8594 103.147 24.8594 104.444C24.8594 105.742 40.1399 106.794 58.9894 106.794Z",
                    fill: "white"
                }), r.a.createElement("path", {
                    d: "M81.9764 15.0938H44.0515C41.4331 15.0938 39.3105 17.2163 39.3105 19.8347V99.9008C39.3105 102.519 41.4331 104.642 44.0515 104.642H81.9764C84.5947 104.642 86.7173 102.519 86.7173 99.9008V19.8347C86.7173 17.2163 84.5947 15.0938 81.9764 15.0938Z",
                    fill: "#18181C"
                }), r.a.createElement("path", {
                    d: "M84.6089 24.9272H41.416V94.8088H84.6089V24.9272Z",
                    fill: "white",
                    stroke: "#18181C",
                    strokeWidth: "1.33739",
                    strokeMiterlimit: "10"
                }), r.a.createElement("path", {
                    d: "M69.6338 53.2241C73.29 49.5679 73.29 43.6401 69.6338 39.9839C65.9776 36.3277 60.0498 36.3277 56.3936 39.9839C52.7374 43.6401 52.7374 49.5679 56.3936 53.2241C60.0498 56.8803 65.9776 56.8803 69.6338 53.2241Z",
                    fill: "#0752AD"
                }), r.a.createElement("path", {
                    d: "M68.4774 49.1443V51.3089C68.4774 51.4639 68.4187 51.6132 68.313 51.7266C68.2074 51.84 68.0626 51.9091 67.908 51.9199C67.6405 51.9383 67.422 51.9481 67.253 51.9481C61.8431 51.9481 57.458 47.563 57.458 42.1531C57.458 41.9841 57.4672 41.7656 57.4862 41.498C57.497 41.3434 57.5661 41.1987 57.6795 41.093C57.7929 40.9874 57.9421 40.9286 58.0971 40.9287H60.2618C60.3378 40.9286 60.411 40.9568 60.4673 41.0077C60.5237 41.0586 60.5591 41.1286 60.5667 41.2042C60.5808 41.345 60.5936 41.457 60.6059 41.5421C60.7275 42.3912 60.9769 43.217 61.3454 43.9915C61.4035 44.1139 61.3656 44.2602 61.2554 44.3386L59.9343 45.2826C60.7421 47.1647 62.242 48.6646 64.1241 49.4724L65.0669 48.1537C65.1054 48.0999 65.1616 48.0612 65.2257 48.0446C65.2898 48.0279 65.3578 48.0342 65.4177 48.0625C66.1921 48.4304 67.0177 48.6791 67.8664 48.8002C67.9515 48.8125 68.0635 48.8259 68.2031 48.8394C68.2785 48.8471 68.3484 48.8826 68.3992 48.9389C68.45 48.9952 68.4775 49.0684 68.4774 49.1443Z",
                    fill: "white"
                }), r.a.createElement("path", {
                    d: "M75.3054 90.4141H50.7249C50.6695 90.4144 50.6147 90.4038 50.5635 90.3828C50.5123 90.3619 50.4658 90.331 50.4265 90.292C50.3873 90.253 50.3562 90.2066 50.3349 90.1556C50.3137 90.1045 50.3027 90.0497 50.3027 89.9944C50.3024 89.9389 50.3131 89.8838 50.3342 89.8325C50.3553 89.7811 50.3864 89.7344 50.4257 89.6952C50.4649 89.6559 50.5116 89.6248 50.5629 89.6037C50.6143 89.5826 50.6693 89.5719 50.7249 89.5723H75.3054C75.3607 89.5723 75.4155 89.5832 75.4666 89.6044C75.5177 89.6257 75.564 89.6568 75.603 89.6961C75.642 89.7353 75.6729 89.7818 75.6938 89.833C75.7148 89.8842 75.7254 89.9391 75.7251 89.9944C75.7251 90.1057 75.6809 90.2124 75.6022 90.2911C75.5235 90.3699 75.4167 90.4141 75.3054 90.4141Z",
                    fill: "#0752AD"
                }), r.a.createElement("path", {
                    d: "M76.1054 61.229H49.9218C49.3814 61.229 48.9434 61.6671 48.9434 62.2074V65.294C48.9434 65.8344 49.3814 66.2725 49.9218 66.2725H76.1054C76.6458 66.2725 77.0839 65.8344 77.0839 65.294V62.2074C77.0839 61.6671 76.6458 61.229 76.1054 61.229Z",
                    fill: "#0752AD"
                }), r.a.createElement("path", {
                    d: "M76.1054 70.6621H49.9218C49.3814 70.6621 48.9434 71.1002 48.9434 71.6405V74.7272C48.9434 75.2675 49.3814 75.7056 49.9218 75.7056H76.1054C76.6458 75.7056 77.0839 75.2675 77.0839 74.7272V71.6405C77.0839 71.1002 76.6458 70.6621 76.1054 70.6621Z",
                    fill: "#0752AD"
                }), r.a.createElement("path", {
                    d: "M52.5086 74.4517C52.4454 74.4508 52.3851 74.4254 52.3402 74.3809C52.3162 74.3594 52.297 74.3331 52.284 74.3037C52.271 74.2742 52.2643 74.2423 52.2646 74.2101C52.2653 74.1661 52.278 74.1231 52.3012 74.0857L52.7404 73.3829L51.8839 73.4098C51.8517 73.4118 51.8193 73.407 51.7891 73.3956C51.7588 73.3843 51.7312 73.3666 51.7083 73.3439C51.6685 73.2992 51.6465 73.2415 51.6465 73.1816C51.6465 73.1218 51.6685 73.0641 51.7083 73.0194C51.7307 72.9958 51.7581 72.9775 51.7885 72.9657C51.8188 72.9538 51.8514 72.9489 51.8839 72.9511L52.7282 72.9828L52.2939 72.2825C52.2702 72.2444 52.2576 72.2005 52.2573 72.1556C52.257 72.1234 52.2636 72.0915 52.2767 72.0621C52.2897 72.0326 52.3089 72.0063 52.3329 71.9848C52.3777 71.9403 52.4381 71.915 52.5013 71.9141C52.5428 71.9143 52.5835 71.9264 52.6185 71.9489C52.6535 71.9713 52.6813 72.0033 52.6989 72.0409L53.1161 72.7949L53.5285 72.0458C53.5481 72.0059 53.5782 71.972 53.6156 71.9479C53.653 71.9238 53.6963 71.9104 53.7408 71.9092C53.7716 71.9094 53.8021 71.916 53.8302 71.9286C53.8584 71.9412 53.8836 71.9595 53.9043 71.9824C53.949 72.0288 53.9736 72.0911 53.9726 72.1556C53.9725 72.1975 53.9615 72.2387 53.9409 72.2752L53.4992 72.9828L54.3557 72.9511C54.3882 72.9489 54.4208 72.9538 54.4511 72.9657C54.4815 72.9775 54.5089 72.9958 54.5313 73.0194C54.5729 73.0626 54.5957 73.1205 54.5948 73.1804C54.5946 73.2409 54.572 73.2992 54.5313 73.3439C54.5084 73.3666 54.4808 73.3843 54.4506 73.3956C54.4203 73.407 54.3879 73.4118 54.3557 73.4098L53.4943 73.3829L53.9238 74.0783C53.9478 74.1172 53.9605 74.162 53.9604 74.2077C53.9604 74.2724 53.9347 74.3344 53.8889 74.3802C53.8432 74.426 53.7811 74.4517 53.7164 74.4517C53.6745 74.4511 53.6338 74.4383 53.5991 74.4149C53.5644 74.3915 53.5373 74.3585 53.5212 74.3199L53.1137 73.5879L52.7087 74.3199C52.6907 74.3582 52.6625 74.3907 52.6272 74.414C52.5919 74.4372 52.5508 74.4503 52.5086 74.4517Z",
                    fill: "white"
                }), r.a.createElement("path", {
                    d: "M56.4663 74.4517C56.4031 74.4508 56.3428 74.4254 56.2979 74.3809C56.2739 74.3594 56.2547 74.3331 56.2417 74.3037C56.2287 74.2742 56.222 74.2423 56.2223 74.2101C56.223 74.1661 56.2357 74.1231 56.2589 74.0857L56.6981 73.3829L55.8441 73.4098C55.8115 73.4113 55.7789 73.4062 55.7483 73.3949C55.7177 73.3836 55.6897 73.3662 55.6659 73.3439C55.6336 73.3105 55.612 73.2681 55.604 73.2223C55.596 73.1764 55.6021 73.1292 55.6213 73.0869C55.6405 73.0445 55.672 73.0089 55.7118 72.9846C55.7515 72.9604 55.7976 72.9487 55.8441 72.9511L56.6859 72.9828L56.2515 72.2825C56.2279 72.2444 56.2153 72.2005 56.2149 72.1556C56.2147 72.1234 56.2213 72.0915 56.2344 72.0621C56.2474 72.0326 56.2666 72.0063 56.2906 71.9848C56.3354 71.9403 56.3958 71.915 56.4589 71.9141C56.5005 71.9143 56.5412 71.9264 56.5762 71.9489C56.6111 71.9713 56.639 72.0033 56.6566 72.0409L57.0738 72.7949L57.4862 72.0458C57.5058 72.0059 57.5359 71.972 57.5733 71.9479C57.6107 71.9238 57.654 71.9104 57.6985 71.9092C57.7294 71.9091 57.7599 71.9155 57.7881 71.9281C57.8163 71.9408 57.8415 71.9593 57.8619 71.9824C57.8846 72.0052 57.9025 72.0322 57.9146 72.062C57.9267 72.0917 57.9329 72.1235 57.9327 72.1556C57.9318 72.1978 57.9201 72.2389 57.8985 72.2752L57.4569 72.9828L58.3158 72.9559C58.3479 72.9538 58.3801 72.9588 58.4101 72.9706C58.4401 72.9824 58.467 73.0007 58.489 73.0243C58.5306 73.0675 58.5534 73.1254 58.5525 73.1853C58.5523 73.2458 58.5297 73.304 58.489 73.3488C58.4665 73.3715 58.4394 73.3891 58.4095 73.4004C58.3796 73.4118 58.3477 73.4167 58.3158 73.4147L57.452 73.3878L57.8815 74.0832C57.9055 74.1221 57.9182 74.1669 57.9181 74.2125C57.9181 74.2773 57.8924 74.3393 57.8466 74.3851C57.8008 74.4308 57.7388 74.4566 57.6741 74.4566C57.6322 74.456 57.5915 74.4432 57.5568 74.4198C57.5221 74.3964 57.495 74.3634 57.4789 74.3248L57.0714 73.5928L56.6663 74.3248C56.6477 74.3621 56.6192 74.3937 56.584 74.4161C56.5487 74.4384 56.508 74.4507 56.4663 74.4517Z",
                    fill: "white"
                }), r.a.createElement("path", {
                    d: "M60.4262 74.4517C60.3622 74.4514 60.3009 74.426 60.2554 74.3809C60.2314 74.3594 60.2123 74.3331 60.1992 74.3036C60.1862 74.2742 60.1796 74.2423 60.1798 74.2101C60.1805 74.1661 60.1932 74.1231 60.2164 74.0857L60.6556 73.3829L59.8016 73.4098C59.7556 73.4116 59.7101 73.3997 59.6709 73.3756C59.6317 73.3515 59.6006 73.3163 59.5815 73.2744C59.5624 73.2325 59.5561 73.1859 59.5636 73.1405C59.5711 73.0951 59.5919 73.0529 59.6235 73.0194C59.6465 72.9959 59.6744 72.9776 59.7051 72.9658C59.7358 72.954 59.7687 72.949 59.8016 72.9511L60.6434 72.9828L60.2091 72.2825C60.1854 72.2444 60.1728 72.2005 60.1725 72.1556C60.1732 72.1236 60.1803 72.092 60.1933 72.0627C60.2063 72.0334 60.2249 72.0069 60.2481 71.9848C60.2936 71.9397 60.3549 71.9143 60.4189 71.9141C60.4601 71.9148 60.5002 71.9271 60.5347 71.9495C60.5692 71.9719 60.5967 72.0036 60.6141 72.0409L61.0313 72.7949L61.4437 72.0458C61.4633 72.0059 61.4934 71.972 61.5308 71.9479C61.5682 71.9238 61.6115 71.9104 61.656 71.9092C61.6869 71.9091 61.7174 71.9155 61.7456 71.9281C61.7738 71.9408 61.799 71.9593 61.8195 71.9824C61.8421 72.0052 61.86 72.0322 61.8721 72.0619C61.8843 72.0917 61.8904 72.1235 61.8902 72.1556C61.8894 72.1978 61.8776 72.2389 61.8561 72.2752L61.4144 72.9828L62.2733 72.9511C62.3049 72.9479 62.3368 72.9515 62.3668 72.9618C62.3969 72.972 62.4244 72.9885 62.4475 73.0102C62.4706 73.0319 62.4888 73.0584 62.5009 73.0877C62.5129 73.1171 62.5185 73.1487 62.5173 73.1804C62.5178 73.2406 62.4961 73.2988 62.4563 73.3439C62.4333 73.3666 62.4058 73.3843 62.3755 73.3956C62.3452 73.407 62.3129 73.4118 62.2806 73.4098L61.4193 73.3829L61.8463 74.0783C61.8704 74.1172 61.883 74.162 61.8829 74.2077C61.8821 74.2397 61.8751 74.2713 61.8621 74.3006C61.8491 74.3299 61.8305 74.3564 61.8073 74.3785C61.786 74.4013 61.7604 74.4196 61.7318 74.4322C61.7033 74.4447 61.6725 74.4514 61.6413 74.4517C61.5999 74.4509 61.5595 74.4381 61.5252 74.4147C61.491 74.3912 61.4643 74.3583 61.4486 74.3199L61.0387 73.5879L60.6336 74.3199C60.6154 74.3595 60.5861 74.3929 60.5493 74.4163C60.5125 74.4397 60.4698 74.4519 60.4262 74.4517Z",
                    fill: "white"
                }), r.a.createElement("path", {
                    d: "M64.3841 74.4517C64.3201 74.4514 64.2587 74.426 64.2133 74.3809C64.1673 74.3358 64.141 74.2745 64.1401 74.2101C64.1393 74.1662 64.1512 74.123 64.1742 74.0857L64.6134 73.3829L63.7594 73.4098C63.7268 73.4113 63.6943 73.4062 63.6637 73.3949C63.6331 73.3836 63.6051 73.3662 63.5813 73.3439C63.5415 73.2992 63.5195 73.2415 63.5195 73.1816C63.5195 73.1218 63.5415 73.0641 63.5813 73.0194C63.6049 72.9966 63.6328 72.9788 63.6634 72.9671C63.694 72.9553 63.7267 72.9499 63.7594 72.9511L64.6037 72.9828L64.1718 72.2825C64.1482 72.2444 64.1355 72.2005 64.1352 72.1556C64.136 72.1236 64.143 72.092 64.156 72.0627C64.169 72.0334 64.1876 72.0069 64.2108 71.9848C64.2563 71.9397 64.3176 71.9143 64.3816 71.9141C64.4232 71.9143 64.4638 71.9264 64.4988 71.9489C64.5338 71.9713 64.5617 72.0033 64.5793 72.0409L64.9941 72.7949L65.4064 72.0458C65.426 72.0059 65.4561 71.972 65.4935 71.9479C65.5309 71.9238 65.5742 71.9104 65.6187 71.9092C65.6496 71.9091 65.6802 71.9155 65.7083 71.9281C65.7365 71.9408 65.7617 71.9593 65.7822 71.9824C65.8048 72.0052 65.8227 72.0322 65.8348 72.0619C65.847 72.0917 65.8531 72.1235 65.853 72.1556C65.8521 72.1978 65.8403 72.2389 65.8188 72.2752L65.3771 72.9828L66.236 72.9511C66.2676 72.9479 66.2995 72.9515 66.3295 72.9617C66.3596 72.972 66.3871 72.9885 66.4102 73.0102C66.4333 73.0319 66.4515 73.0584 66.4636 73.0877C66.4756 73.1171 66.4812 73.1487 66.48 73.1804C66.4805 73.2406 66.4588 73.2988 66.419 73.3439C66.396 73.3666 66.3685 73.3843 66.3382 73.3956C66.308 73.407 66.2756 73.4118 66.2433 73.4098L65.382 73.3829L65.809 74.0783C65.8331 74.1172 65.8458 74.162 65.8456 74.2077C65.8459 74.2399 65.8392 74.2717 65.8262 74.3012C65.8132 74.3306 65.794 74.357 65.77 74.3785C65.7488 74.4013 65.7231 74.4196 65.6946 74.4321C65.666 74.4447 65.6352 74.4514 65.6041 74.4517C65.5626 74.4509 65.5222 74.4381 65.4879 74.4147C65.4537 74.3912 65.427 74.3583 65.4113 74.3199L65.0014 73.5879L64.5963 74.3199C64.5777 74.3602 64.5477 74.3942 64.51 74.4176C64.4722 74.441 64.4285 74.4529 64.3841 74.4517Z",
                    fill: "white"
                }), r.a.createElement("path", {
                    d: "M68.3421 74.4517C68.2781 74.4514 68.2167 74.426 68.1713 74.3809C68.1335 74.3426 68.1094 74.2929 68.1028 74.2395C68.0961 74.1861 68.1074 74.132 68.1347 74.0857L68.5714 73.3829L67.7174 73.4098C67.6848 73.4113 67.6523 73.4062 67.6217 73.3949C67.5911 73.3836 67.5631 73.3662 67.5393 73.3439C67.4995 73.2992 67.4775 73.2415 67.4775 73.1816C67.4775 73.1218 67.4995 73.0641 67.5393 73.0194C67.5629 72.9966 67.5908 72.9788 67.6214 72.9671C67.652 72.9554 67.6847 72.9499 67.7174 72.9511L68.5617 72.9828L68.1273 72.2825C68.1037 72.2444 68.0911 72.2005 68.0908 72.1556C68.0917 72.0913 68.118 72.0299 68.1639 71.9848C68.2094 71.9397 68.2707 71.9143 68.3348 71.9141C68.3763 71.9143 68.417 71.9264 68.452 71.9489C68.4869 71.9713 68.5148 72.0033 68.5324 72.0409L68.9472 72.7949L69.3596 72.0458C69.3791 72.0059 69.4092 71.972 69.4466 71.9479C69.4841 71.9238 69.5274 71.9104 69.5718 71.9092C69.6031 71.909 69.634 71.9155 69.6626 71.9281C69.6912 71.9407 69.7168 71.9592 69.7378 71.9824C69.7825 72.0288 69.8071 72.0911 69.8061 72.1556C69.8052 72.1978 69.7934 72.2389 69.7719 72.2752L69.3303 72.9828L70.1892 72.9511C70.2207 72.9479 70.2526 72.9516 70.2827 72.9618C70.3127 72.972 70.3402 72.9885 70.3634 73.0102C70.3865 73.032 70.4047 73.0584 70.4167 73.0878C70.4288 73.1171 70.4344 73.1487 70.4332 73.1804C70.4337 73.2406 70.4119 73.2988 70.3722 73.3439C70.3492 73.3667 70.3216 73.3843 70.2914 73.3956C70.2611 73.407 70.2288 73.4118 70.1965 73.4098L69.3352 73.3829L69.7622 74.0784C69.7862 74.1172 69.7989 74.162 69.7988 74.2077C69.799 74.2399 69.7924 74.2718 69.7793 74.3012C69.7663 74.3307 69.7471 74.357 69.7231 74.3785C69.7019 74.4013 69.6762 74.4196 69.6477 74.4322C69.6192 74.4447 69.5884 74.4514 69.5572 74.4517C69.5157 74.451 69.4753 74.4381 69.4411 74.4147C69.4068 74.3913 69.3802 74.3583 69.3644 74.3199L68.9545 73.5879L68.5495 74.3199C68.5312 74.3595 68.5019 74.3929 68.4652 74.4163C68.4284 74.4397 68.3856 74.4519 68.3421 74.4517Z",
                    fill: "white"
                }), r.a.createElement("path", {
                    d: "M72.2993 74.4517C72.2362 74.4508 72.1758 74.4254 72.131 74.3809C72.107 74.3594 72.0878 74.3331 72.0748 74.3037C72.0617 74.2742 72.0551 74.2423 72.0553 74.2101C72.0561 74.1661 72.0687 74.1231 72.0919 74.0857L72.5287 73.383L71.6747 73.4098C71.6433 73.4122 71.6117 73.408 71.582 73.3975C71.5523 73.387 71.5251 73.3704 71.5022 73.3489C71.4792 73.3273 71.461 73.3012 71.4487 73.2722C71.4364 73.2432 71.4303 73.2119 71.4307 73.1804C71.4305 73.1506 71.4363 73.121 71.4476 73.0933C71.4589 73.0657 71.4755 73.0406 71.4966 73.0194C71.519 72.9958 71.5464 72.9775 71.5768 72.9657C71.6072 72.9539 71.6397 72.9489 71.6722 72.9511L72.5165 72.9828L72.0822 72.2825C72.0585 72.2444 72.0459 72.2005 72.0456 72.1556C72.0465 72.0913 72.0728 72.0299 72.1188 71.9848C72.1642 71.9397 72.2255 71.9143 72.2896 71.9141C72.3311 71.9143 72.3718 71.9264 72.4068 71.9489C72.4418 71.9713 72.4696 72.0033 72.4872 72.0409L72.902 72.7949L73.3168 72.0458C73.3362 72.0062 73.3659 71.9726 73.4029 71.9485C73.4398 71.9245 73.4826 71.9109 73.5266 71.9092C73.5579 71.909 73.5888 71.9155 73.6174 71.9281C73.646 71.9407 73.6716 71.9592 73.6926 71.9824C73.7373 72.0288 73.7619 72.0911 73.7609 72.1556C73.7607 72.1975 73.7498 72.2387 73.7292 72.2752L73.2875 72.9828L74.144 72.9511C74.1765 72.9489 74.2091 72.9539 74.2394 72.9657C74.2698 72.9775 74.2972 72.9958 74.3196 73.0194C74.3612 73.0626 74.384 73.1205 74.3831 73.1804C74.3829 73.2409 74.3603 73.2992 74.3196 73.3439C74.2967 73.3667 74.2691 73.3843 74.2388 73.3956C74.2086 73.407 74.1762 73.4118 74.144 73.4098L73.2826 73.383L73.7096 74.0784C73.7337 74.1172 73.7464 74.162 73.7462 74.2077C73.7453 74.272 73.719 74.3334 73.673 74.3785C73.6286 74.4239 73.5682 74.4501 73.5047 74.4517C73.4632 74.451 73.4228 74.4381 73.3886 74.4147C73.3543 74.3913 73.3277 74.3583 73.3119 74.3199L72.902 73.5879L72.497 74.3199C72.4794 74.358 72.4516 74.3905 72.4168 74.4137C72.3819 74.437 72.3412 74.4501 72.2993 74.4517Z",
                    fill: "white"
                }), r.a.createElement("g", {
                    style: {
                        mixBlendMode: "multiply"
                    }
                }, r.a.createElement("path", {
                    d: "M84.6089 25.0195H41.416V27.7255H84.6089V25.0195Z",
                    fill: "#0752AD"
                })), r.a.createElement("path", {
                    d: "M67.71 20.0349H58.316C58.1465 20.0349 57.9839 19.9676 57.864 19.8477C57.7441 19.7278 57.6768 19.5652 57.6768 19.3956C57.6768 19.2261 57.7441 19.0635 57.864 18.9436C57.9839 18.8237 58.1465 18.7563 58.316 18.7563H67.71C67.8796 18.7563 68.0422 18.8237 68.1621 18.9436C68.282 19.0635 68.3493 19.2261 68.3493 19.3956C68.3493 19.5652 68.282 19.7278 68.1621 19.8477C68.0422 19.9676 67.8796 20.0349 67.71 20.0349Z",
                    fill: "#0752AD",
                    stroke: "#18181C",
                    strokeWidth: "1.33739",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), r.a.createElement("path", {
                    d: "M65.5752 98.7563C65.5757 98.2494 65.4257 97.7537 65.1444 97.332C64.8631 96.9104 64.463 96.5816 63.9947 96.3874C63.5265 96.1932 63.0112 96.1422 62.514 96.241C62.0167 96.3398 61.56 96.5838 61.2016 96.9423C60.8431 97.3007 60.5991 97.7575 60.5003 98.2547C60.4015 98.7519 60.4524 99.2672 60.6467 99.7355C60.8409 100.204 61.1696 100.604 61.5913 100.885C62.013 101.166 62.5087 101.316 63.0156 101.316C63.6943 101.315 64.3449 101.045 64.8248 100.566C65.3047 100.086 65.5745 99.435 65.5752 98.7563Z",
                    fill: "#0752AD"
                }), r.a.createElement("path", {
                    d: "M64.313 97.4585H61.7168V100.055H64.313V97.4585Z",
                    fill: "#0752AD",
                    stroke: "#18181C",
                    strokeWidth: "1.33739",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), r.a.createElement("path", {
                    d: "M93.9398 69.2957C93.9398 69.2957 90.5384 60.6533 93.5665 59.626C96.7189 58.5549 96.5799 64.262 96.4579 67.0436C96.2017 72.9875 95.5453 74.0928 95.0549 72.641L93.9398 69.2957ZM92.9174 76.0375C93.8519 77.2575 94.1155 75.9935 92.4294 70.2864C91.6389 67.6024 89.9211 62.1734 87.2859 64.2108C84.7556 66.1628 90.7776 73.2388 90.7776 73.2388L92.9174 76.0375ZM91.1118 80.9907C92.0024 81.7812 92.0195 80.7833 89.904 76.6621C88.911 74.7321 86.8101 70.8256 85.0899 72.7581C83.438 74.6223 89.0671 79.1533 89.0671 79.1533L91.1118 80.9907ZM89.1598 86.8808C90.0504 87.6738 90.0675 86.6734 87.952 82.5547C86.959 80.6247 84.8581 76.7158 83.1379 78.6507C81.4958 80.5197 87.1078 85.0508 87.1078 85.0508L89.1598 86.8808ZM94.7962 74.8907C93.3713 75.447 94.5034 76.0521 100.455 76.035C103.246 76.035 108.946 75.9081 107.731 72.8069C106.567 69.8277 98.0902 73.6219 98.0902 73.6219L94.7962 74.8907ZM93.1736 78.8532C91.6657 79.1143 92.6564 79.9341 98.4928 81.1005C101.228 81.6495 106.838 82.6621 106.264 79.3925C105.715 76.24 96.6531 78.2749 96.6531 78.2749L93.1736 78.8532ZM91.3583 83.6917C90.0748 83.8772 90.8947 84.5921 95.8015 85.7145C98.1024 86.2415 102.824 87.2297 102.414 84.4408C102.024 81.7568 94.3131 83.2745 94.3131 83.2745L91.3583 83.6917ZM89.9797 88.174C88.7231 88.4937 89.6137 89.1183 94.6157 89.7137C96.9581 89.9918 101.758 90.4749 101.057 87.7446C100.381 85.124 92.876 87.4445 92.876 87.4445L89.9797 88.174ZM97.3338 70.0277C96.6018 71.6674 98.122 71.4185 103.29 66.9094C105.71 64.7939 110.566 60.3678 106.721 58.1645C103.029 56.0465 99.0589 66.2653 99.0589 66.2653L97.3338 70.0277ZM90.17 94.0129C89.3965 94.4643 90.1554 94.64 93.7031 93.9324C95.3672 93.603 98.7515 92.871 97.6071 91.4265C96.4993 90.0357 91.961 92.9637 91.961 92.9637L90.17 94.0129Z",
                    fill: "#0752AD"
                }), r.a.createElement("path", {
                    opacity: "0.3",
                    d: "M93.9398 69.2957C93.9398 69.2957 90.5384 60.6533 93.5665 59.626C96.7189 58.5549 96.5799 64.262 96.4579 67.0436C96.2017 72.9875 95.5453 74.0928 95.0549 72.641L93.9398 69.2957ZM92.9174 76.0375C93.8519 77.2575 94.1155 75.9935 92.4294 70.2864C91.6389 67.6024 89.9211 62.1734 87.2859 64.2108C84.7556 66.1628 90.7776 73.2388 90.7776 73.2388L92.9174 76.0375ZM91.1118 80.9907C92.0024 81.7812 92.0195 80.7833 89.904 76.6621C88.911 74.7321 86.8101 70.8256 85.0899 72.7581C83.438 74.6223 89.0671 79.1533 89.0671 79.1533L91.1118 80.9907ZM89.1598 86.8808C90.0504 87.6738 90.0675 86.6734 87.952 82.5547C86.959 80.6247 84.8581 76.7158 83.1379 78.6507C81.4958 80.5197 87.1078 85.0508 87.1078 85.0508L89.1598 86.8808ZM94.7962 74.8907C93.3713 75.447 94.5034 76.0521 100.455 76.035C103.246 76.035 108.946 75.9081 107.731 72.8069C106.567 69.8277 98.0902 73.6219 98.0902 73.6219L94.7962 74.8907ZM93.1736 78.8532C91.6657 79.1143 92.6564 79.9341 98.4928 81.1005C101.228 81.6495 106.838 82.6621 106.264 79.3925C105.715 76.24 96.6531 78.2749 96.6531 78.2749L93.1736 78.8532ZM91.3583 83.6917C90.0748 83.8772 90.8947 84.5921 95.8015 85.7145C98.1024 86.2415 102.824 87.2297 102.414 84.4408C102.024 81.7568 94.3131 83.2745 94.3131 83.2745L91.3583 83.6917ZM89.9797 88.174C88.7231 88.4937 89.6137 89.1183 94.6157 89.7137C96.9581 89.9918 101.758 90.4749 101.057 87.7446C100.381 85.124 92.876 87.4445 92.876 87.4445L89.9797 88.174ZM97.3338 70.0277C96.6018 71.6674 98.122 71.4185 103.29 66.9094C105.71 64.7939 110.566 60.3678 106.721 58.1645C103.029 56.0465 99.0589 66.2653 99.0589 66.2653L97.3338 70.0277ZM90.17 94.0129C89.3965 94.4643 90.1554 94.64 93.7031 93.9324C95.3672 93.603 98.7515 92.871 97.6071 91.4265C96.4993 90.0357 91.961 92.9637 91.961 92.9637L90.17 94.0129Z",
                    fill: "white"
                }), r.a.createElement("path", {
                    d: "M95.4405 73.3192L94.8475 63.4543L95.4405 73.3192ZM93.5641 76.5742L89.8163 68.0903L93.5641 76.5742ZM103.236 74.1073L94.2546 75.3957L103.236 74.1073ZM91.6219 81.1467L86.759 74.9077L91.6219 81.1467ZM92.4759 79.2338L99.1761 79.5705L92.4759 79.2338ZM90.8899 84.0186L96.0139 84.5261L90.8899 84.0186ZM89.6528 87.0589L87.1079 83.2305L89.6528 87.0589ZM89.36 88.4106L95.3843 88.4667L89.36 88.4106ZM88.14 99.7127C88.1804 99.7096 88.2179 99.6907 88.2444 99.6601C88.2709 99.6294 88.2842 99.5896 88.2815 99.5492C87.8984 93.7957 90.1237 84.3724 93.6934 76.6376C95.9748 71.6942 104.917 61.9781 105.013 61.8805C105.041 61.8517 105.057 61.8126 105.057 61.7719C105.057 61.7312 105.041 61.6922 105.013 61.6634C104.999 61.6492 104.982 61.6379 104.963 61.6303C104.945 61.6226 104.925 61.6187 104.905 61.6187C104.885 61.6187 104.865 61.6226 104.847 61.6303C104.829 61.6379 104.812 61.6492 104.798 61.6634C104.708 61.761 95.7284 71.5136 93.4275 76.501C89.7919 84.4237 87.5959 93.6761 87.9863 99.5687C87.9893 99.6076 88.0068 99.6439 88.0352 99.6705C88.0637 99.6972 88.101 99.7122 88.14 99.7127ZM95.438 73.4705C95.4784 73.468 95.5161 73.4497 95.5431 73.4195C95.57 73.3894 95.584 73.3499 95.582 73.3095L94.9988 63.4397C94.9979 63.4196 94.993 63.3999 94.9843 63.3817C94.9757 63.3635 94.9635 63.3473 94.9485 63.3339C94.9335 63.3205 94.916 63.3102 94.897 63.3036C94.878 63.2971 94.8579 63.2944 94.8378 63.2957C94.7974 63.2982 94.7597 63.3165 94.7328 63.3467C94.7058 63.3768 94.6918 63.4164 94.6938 63.4568L95.2867 73.3217C95.2886 73.3605 95.3054 73.3971 95.3336 73.4239C95.3617 73.4507 95.3991 73.4657 95.438 73.4656V73.4705ZM93.6178 76.7133C93.6543 76.6967 93.683 76.6665 93.6976 76.6291C93.7122 76.5917 93.7115 76.5501 93.6959 76.5132L89.9456 68.0293C89.9294 67.9924 89.8992 67.9635 89.8617 67.9488C89.8242 67.9342 89.7824 67.9351 89.7455 67.9512C89.7086 67.9674 89.6797 67.9976 89.665 68.0351C89.6504 68.0726 89.6513 68.1144 89.6674 68.1513L93.4153 76.6352C93.427 76.6624 93.4464 76.6857 93.4711 76.7021C93.4958 76.7186 93.5247 76.7275 93.5544 76.7279C93.5796 76.7292 93.6048 76.7242 93.6275 76.7133H93.6178ZM94.2668 75.5421L103.244 74.2586C103.265 74.2582 103.287 74.2531 103.306 74.2439C103.326 74.2346 103.343 74.2213 103.357 74.2048C103.371 74.1883 103.382 74.169 103.388 74.1482C103.394 74.1274 103.396 74.1055 103.393 74.0841C103.39 74.0626 103.382 74.042 103.371 74.0236C103.359 74.0052 103.344 73.9894 103.326 73.9773C103.308 73.9652 103.288 73.9571 103.266 73.9534C103.245 73.9498 103.223 73.9507 103.202 73.9561L94.2254 75.2395C94.1852 75.2421 94.1478 75.2605 94.1212 75.2907C94.0947 75.3209 94.0812 75.3604 94.0838 75.4005C94.0864 75.4407 94.1048 75.4781 94.135 75.5047C94.1652 75.5312 94.2047 75.5447 94.2449 75.5421H94.2668ZM91.7073 81.2687C91.7391 81.2437 91.7598 81.2071 91.7649 81.1669C91.7699 81.1267 91.7588 81.0861 91.7341 81.054L86.8688 74.8028C86.8438 74.7704 86.8071 74.7493 86.7666 74.744C86.7261 74.7387 86.6852 74.7498 86.6528 74.7747C86.6205 74.7996 86.5993 74.8364 86.5941 74.8768C86.5888 74.9173 86.5998 74.9583 86.6248 74.9906L91.4999 81.2517C91.514 81.2699 91.5321 81.2847 91.5529 81.2948C91.5736 81.305 91.5964 81.3102 91.6194 81.3102C91.6559 81.3084 91.6905 81.2937 91.717 81.2687H91.7073ZM99.3103 79.5778C99.3116 79.5375 99.297 79.4982 99.2696 79.4685C99.2422 79.4388 99.2042 79.4211 99.1639 79.4192L92.4759 79.0801C92.4383 79.0827 92.403 79.099 92.3766 79.1259C92.3502 79.1528 92.3347 79.1884 92.3329 79.2261C92.3311 79.2637 92.3431 79.3007 92.3668 79.33C92.3905 79.3593 92.4241 79.3789 92.4612 79.3851L99.1615 79.7242C99.2018 79.7256 99.2411 79.7109 99.2708 79.6835C99.3005 79.6562 99.3182 79.6182 99.3201 79.5778H99.3103ZM96.1554 84.5408C96.1577 84.5207 96.1561 84.5004 96.1504 84.481C96.1448 84.4615 96.1353 84.4435 96.1226 84.4278C96.1099 84.4121 96.0941 84.3991 96.0763 84.3896C96.0584 84.3801 96.0389 84.3742 96.0187 84.3724L90.8947 83.8673C90.8749 83.8653 90.8548 83.8673 90.8357 83.8731C90.8165 83.8788 90.7987 83.8884 90.7833 83.9011C90.7679 83.9138 90.7551 83.9294 90.7458 83.9471C90.7364 83.9647 90.7307 83.9841 90.7288 84.004C90.7254 84.044 90.7378 84.0838 90.7633 84.1148C90.7889 84.1458 90.8255 84.1656 90.8655 84.1699L95.9895 84.6774H96.0041C96.0435 84.6802 96.0823 84.6674 96.1124 84.6419C96.1425 84.6163 96.1614 84.5801 96.1651 84.5408H96.1554ZM89.726 87.1857C89.7599 87.1633 89.7835 87.1284 89.7917 87.0887C89.8 87.0489 89.7921 87.0075 89.7699 86.9735L87.2372 83.1451C87.214 83.1121 87.179 83.0894 87.1394 83.0817C87.0998 83.0739 87.0588 83.0818 87.0249 83.1036C86.991 83.126 86.9674 83.1609 86.9592 83.2007C86.9509 83.2405 86.9588 83.2819 86.981 83.3159L89.5137 87.1443C89.5282 87.1652 89.5475 87.1823 89.57 87.1942C89.5925 87.2061 89.6176 87.2124 89.643 87.2126C89.6761 87.2144 89.7088 87.2049 89.7357 87.1857H89.726ZM95.5381 88.4667C95.5375 88.4266 95.5214 88.3882 95.4932 88.3596C95.4651 88.3309 95.4269 88.3143 95.3868 88.313L89.3624 88.2569C89.3223 88.2569 89.2838 88.2728 89.2555 88.3012C89.2271 88.3296 89.2112 88.3681 89.2112 88.4082C89.2105 88.4283 89.2139 88.4484 89.2213 88.4672C89.2286 88.486 89.2397 88.5031 89.2538 88.5175C89.268 88.5319 89.2849 88.5432 89.3036 88.5509C89.3222 88.5585 89.3423 88.5622 89.3624 88.5619L95.3868 88.618C95.4074 88.619 95.428 88.6158 95.4473 88.6087C95.4666 88.6016 95.4843 88.5906 95.4994 88.5765C95.5144 88.5624 95.5264 88.5454 95.5347 88.5266C95.5431 88.5077 95.5475 88.4874 95.5478 88.4667H95.5381ZM87.4544 97.4752C87.4666 97.4484 88.4938 94.618 91.5828 93.9421C91.6226 93.9333 91.6573 93.9092 91.6793 93.8748C91.7012 93.8405 91.7087 93.7989 91.7 93.7591C91.6901 93.7201 91.6656 93.6864 91.6315 93.665C91.5974 93.6437 91.5564 93.6363 91.517 93.6444C88.2596 94.3569 87.1786 97.3459 87.1664 97.3752C87.1539 97.4137 87.1568 97.4556 87.1745 97.492C87.1923 97.5285 87.2235 97.5566 87.2616 97.5704H87.3104C87.3428 97.5732 87.3753 97.5654 87.403 97.5483C87.4307 97.5311 87.4521 97.5055 87.4641 97.4752H87.4544ZM88.14 99.7127C88.1804 99.7096 88.2179 99.6907 88.2444 99.6601C88.2709 99.6294 88.2842 99.5896 88.2815 99.5492C87.8984 93.7957 90.1237 84.3724 93.6934 76.6376C95.9748 71.6942 104.917 61.9781 105.013 61.8805C105.041 61.8517 105.057 61.8126 105.057 61.7719C105.057 61.7312 105.041 61.6922 105.013 61.6634C104.999 61.6492 104.982 61.6379 104.963 61.6303C104.945 61.6226 104.925 61.6187 104.905 61.6187C104.885 61.6187 104.865 61.6226 104.847 61.6303C104.829 61.6379 104.812 61.6492 104.798 61.6634C104.708 61.761 95.7284 71.5136 93.4275 76.501C89.7919 84.4237 87.5959 93.6761 87.9863 99.5687C87.9893 99.6076 88.0068 99.6439 88.0352 99.6705C88.0637 99.6972 88.101 99.7122 88.14 99.7127ZM95.438 73.4705C95.4784 73.468 95.5161 73.4497 95.5431 73.4195C95.57 73.3894 95.584 73.3499 95.582 73.3095L94.9988 63.4397C94.9979 63.4196 94.993 63.3999 94.9843 63.3817C94.9757 63.3635 94.9635 63.3473 94.9485 63.3339C94.9335 63.3205 94.916 63.3102 94.897 63.3036C94.878 63.2971 94.8579 63.2944 94.8378 63.2957C94.7974 63.2982 94.7597 63.3165 94.7328 63.3467C94.7058 63.3768 94.6918 63.4164 94.6938 63.4568L95.2867 73.3217C95.2886 73.3605 95.3054 73.3971 95.3336 73.4239C95.3617 73.4507 95.3991 73.4657 95.438 73.4656V73.4705ZM93.6178 76.7133C93.6543 76.6967 93.683 76.6665 93.6976 76.6291C93.7122 76.5917 93.7115 76.5501 93.6959 76.5132L89.9456 68.0293C89.9294 67.9924 89.8992 67.9635 89.8617 67.9488C89.8242 67.9342 89.7824 67.9351 89.7455 67.9512C89.7086 67.9674 89.6797 67.9976 89.665 68.0351C89.6504 68.0726 89.6513 68.1144 89.6674 68.1513L93.4153 76.6352C93.427 76.6624 93.4464 76.6857 93.4711 76.7021C93.4958 76.7186 93.5247 76.7275 93.5544 76.7279C93.5796 76.7292 93.6048 76.7242 93.6275 76.7133H93.6178ZM94.2668 75.5421L103.244 74.2586C103.265 74.2582 103.287 74.2531 103.306 74.2439C103.326 74.2346 103.343 74.2213 103.357 74.2048C103.371 74.1883 103.382 74.169 103.388 74.1482C103.394 74.1274 103.396 74.1055 103.393 74.0841C103.39 74.0626 103.382 74.042 103.371 74.0236C103.359 74.0052 103.344 73.9894 103.326 73.9773C103.308 73.9652 103.288 73.9571 103.266 73.9534C103.245 73.9498 103.223 73.9507 103.202 73.9561L94.2254 75.2395C94.1852 75.2421 94.1478 75.2605 94.1212 75.2907C94.0947 75.3209 94.0812 75.3604 94.0838 75.4005C94.0864 75.4407 94.1048 75.4781 94.135 75.5047C94.1652 75.5312 94.2047 75.5447 94.2449 75.5421H94.2668ZM91.7073 81.2687C91.7391 81.2437 91.7598 81.2071 91.7649 81.1669C91.7699 81.1267 91.7588 81.0861 91.7341 81.054L86.8688 74.8028C86.8564 74.7867 86.841 74.7733 86.8235 74.7632C86.806 74.7531 86.7866 74.7466 86.7666 74.744C86.7465 74.7414 86.7262 74.7428 86.7067 74.748C86.6871 74.7533 86.6688 74.7623 86.6528 74.7747C86.6368 74.787 86.6234 74.8024 86.6133 74.8199C86.6032 74.8375 86.5967 74.8568 86.5941 74.8768C86.5915 74.8969 86.5928 74.9173 86.5981 74.9368C86.6034 74.9563 86.6124 74.9746 86.6248 74.9906L91.4999 81.2517C91.514 81.2699 91.5321 81.2847 91.5529 81.2948C91.5736 81.305 91.5964 81.3102 91.6194 81.3102C91.6559 81.3084 91.6905 81.2937 91.717 81.2687H91.7073ZM99.3103 79.5778C99.3116 79.5375 99.297 79.4982 99.2696 79.4685C99.2422 79.4388 99.2042 79.4211 99.1639 79.4192L92.4759 79.0801C92.4383 79.0827 92.403 79.099 92.3766 79.1259C92.3502 79.1528 92.3347 79.1884 92.3329 79.2261C92.3311 79.2637 92.3431 79.3007 92.3668 79.33C92.3905 79.3593 92.4241 79.3789 92.4612 79.3851L99.1615 79.7242C99.2018 79.7256 99.2411 79.7109 99.2708 79.6835C99.3005 79.6562 99.3182 79.6182 99.3201 79.5778H99.3103ZM96.1554 84.5408C96.1577 84.5207 96.1561 84.5004 96.1504 84.481C96.1448 84.4615 96.1353 84.4435 96.1226 84.4278C96.1099 84.4121 96.0941 84.3991 96.0763 84.3896C96.0584 84.3801 96.0389 84.3742 96.0187 84.3724L90.8947 83.8673C90.8749 83.8653 90.8548 83.8673 90.8357 83.8731C90.8165 83.8788 90.7987 83.8884 90.7833 83.9011C90.7679 83.9138 90.7551 83.9294 90.7458 83.9471C90.7364 83.9647 90.7307 83.9841 90.7288 84.004C90.7254 84.044 90.7378 84.0838 90.7633 84.1148C90.7889 84.1458 90.8255 84.1656 90.8655 84.1699L95.9895 84.6774H96.0041C96.0435 84.6802 96.0823 84.6674 96.1124 84.6419C96.1425 84.6163 96.1614 84.5801 96.1651 84.5408H96.1554ZM89.726 87.1857C89.7599 87.1633 89.7835 87.1284 89.7917 87.0887C89.8 87.0489 89.7921 87.0075 89.7699 86.9735L87.2372 83.1451C87.214 83.1121 87.179 83.0894 87.1394 83.0817C87.0998 83.0739 87.0588 83.0818 87.0249 83.1036C86.991 83.126 86.9674 83.1609 86.9592 83.2007C86.9509 83.2405 86.9588 83.2819 86.981 83.3159L89.5137 87.1443C89.5282 87.1652 89.5475 87.1823 89.57 87.1942C89.5925 87.2061 89.6176 87.2124 89.643 87.2126C89.6761 87.2144 89.7088 87.2049 89.7357 87.1857H89.726ZM95.5381 88.4667C95.5375 88.4266 95.5214 88.3882 95.4932 88.3596C95.4651 88.3309 95.4269 88.3143 95.3868 88.313L89.3624 88.2569C89.3223 88.2569 89.2838 88.2728 89.2555 88.3012C89.2271 88.3296 89.2112 88.3681 89.2112 88.4082C89.2105 88.4283 89.2139 88.4484 89.2213 88.4672C89.2286 88.486 89.2397 88.5031 89.2538 88.5175C89.268 88.5319 89.2849 88.5432 89.3036 88.5509C89.3222 88.5585 89.3423 88.5622 89.3624 88.5619L95.3868 88.618C95.4074 88.619 95.428 88.6158 95.4473 88.6087C95.4666 88.6016 95.4843 88.5906 95.4994 88.5765C95.5144 88.5624 95.5264 88.5454 95.5347 88.5266C95.5431 88.5077 95.5475 88.4874 95.5478 88.4667H95.5381ZM87.4544 97.4752C87.4666 97.4484 88.4938 94.618 91.5828 93.9421C91.6226 93.9333 91.6573 93.9092 91.6793 93.8748C91.7012 93.8405 91.7087 93.7989 91.7 93.7591C91.6901 93.7201 91.6656 93.6864 91.6315 93.665C91.5974 93.6437 91.5564 93.6363 91.517 93.6444C88.2596 94.3569 87.1786 97.3459 87.1664 97.3752C87.1539 97.4137 87.1568 97.4556 87.1745 97.492C87.1923 97.5285 87.2235 97.5566 87.2616 97.5704H87.3104C87.3428 97.5732 87.3753 97.5654 87.403 97.5483C87.4307 97.5311 87.4521 97.5055 87.4641 97.4752H87.4544Z",
                    fill: "#0752AD"
                }), r.a.createElement("path", {
                    opacity: "0.2",
                    d: "M95.4405 73.3192L94.8475 63.4543L95.4405 73.3192ZM93.5641 76.5742L89.8163 68.0903L93.5641 76.5742ZM103.236 74.1073L94.2546 75.3957L103.236 74.1073ZM91.6219 81.1467L86.759 74.9077L91.6219 81.1467ZM92.4759 79.2338L99.1761 79.5705L92.4759 79.2338ZM90.8899 84.0186L96.0139 84.5261L90.8899 84.0186ZM89.6528 87.0589L87.1079 83.2305L89.6528 87.0589ZM89.36 88.4106L95.3843 88.4667L89.36 88.4106ZM88.14 99.7127C88.1804 99.7096 88.2179 99.6907 88.2444 99.6601C88.2709 99.6294 88.2842 99.5896 88.2815 99.5492C87.8984 93.7957 90.1237 84.3724 93.6934 76.6376C95.9748 71.6942 104.917 61.9781 105.013 61.8805C105.041 61.8517 105.057 61.8126 105.057 61.7719C105.057 61.7312 105.041 61.6922 105.013 61.6634C104.999 61.6492 104.982 61.6379 104.963 61.6303C104.945 61.6226 104.925 61.6187 104.905 61.6187C104.885 61.6187 104.865 61.6226 104.847 61.6303C104.829 61.6379 104.812 61.6492 104.798 61.6634C104.708 61.761 95.7284 71.5136 93.4275 76.501C89.7919 84.4237 87.5959 93.6761 87.9863 99.5687C87.9893 99.6076 88.0068 99.6439 88.0352 99.6705C88.0637 99.6972 88.101 99.7122 88.14 99.7127ZM95.438 73.4705C95.4784 73.468 95.5161 73.4497 95.5431 73.4195C95.57 73.3894 95.584 73.3499 95.582 73.3095L94.9988 63.4397C94.9979 63.4196 94.993 63.3999 94.9843 63.3817C94.9757 63.3635 94.9635 63.3473 94.9485 63.3339C94.9335 63.3205 94.916 63.3102 94.897 63.3036C94.878 63.2971 94.8579 63.2944 94.8378 63.2957C94.7974 63.2982 94.7597 63.3165 94.7328 63.3467C94.7058 63.3768 94.6918 63.4164 94.6938 63.4568L95.2867 73.3217C95.2886 73.3605 95.3054 73.3971 95.3336 73.4239C95.3617 73.4507 95.3991 73.4657 95.438 73.4656V73.4705ZM93.6178 76.7133C93.6543 76.6967 93.683 76.6665 93.6976 76.6291C93.7122 76.5917 93.7115 76.5501 93.6959 76.5132L89.9456 68.0293C89.9294 67.9924 89.8992 67.9635 89.8617 67.9488C89.8242 67.9342 89.7824 67.9351 89.7455 67.9512C89.7086 67.9674 89.6797 67.9976 89.665 68.0351C89.6504 68.0726 89.6513 68.1144 89.6674 68.1513L93.4153 76.6352C93.427 76.6624 93.4464 76.6857 93.4711 76.7021C93.4958 76.7186 93.5247 76.7275 93.5544 76.7279C93.5796 76.7292 93.6048 76.7242 93.6275 76.7133H93.6178ZM94.2668 75.5421L103.244 74.2586C103.265 74.2582 103.287 74.2531 103.306 74.2439C103.326 74.2346 103.343 74.2213 103.357 74.2048C103.371 74.1883 103.382 74.169 103.388 74.1482C103.394 74.1274 103.396 74.1055 103.393 74.0841C103.39 74.0626 103.382 74.042 103.371 74.0236C103.359 74.0052 103.344 73.9894 103.326 73.9773C103.308 73.9652 103.288 73.9571 103.266 73.9534C103.245 73.9498 103.223 73.9507 103.202 73.9561L94.2254 75.2395C94.1852 75.2421 94.1478 75.2605 94.1212 75.2907C94.0947 75.3209 94.0812 75.3604 94.0838 75.4005C94.0864 75.4407 94.1048 75.4781 94.135 75.5047C94.1652 75.5312 94.2047 75.5447 94.2449 75.5421H94.2668ZM91.7073 81.2687C91.7391 81.2437 91.7598 81.2071 91.7649 81.1669C91.7699 81.1267 91.7588 81.0861 91.7341 81.054L86.8688 74.8028C86.8438 74.7704 86.8071 74.7493 86.7666 74.744C86.7261 74.7387 86.6852 74.7498 86.6528 74.7747C86.6205 74.7996 86.5993 74.8364 86.5941 74.8768C86.5888 74.9173 86.5998 74.9583 86.6248 74.9906L91.4999 81.2517C91.514 81.2699 91.5321 81.2847 91.5529 81.2948C91.5736 81.305 91.5964 81.3102 91.6194 81.3102C91.6559 81.3084 91.6905 81.2937 91.717 81.2687H91.7073ZM99.3103 79.5778C99.3116 79.5375 99.297 79.4982 99.2696 79.4685C99.2422 79.4388 99.2042 79.4211 99.1639 79.4192L92.4759 79.0801C92.4383 79.0827 92.403 79.099 92.3766 79.1259C92.3502 79.1528 92.3347 79.1884 92.3329 79.2261C92.3311 79.2637 92.3431 79.3007 92.3668 79.33C92.3905 79.3593 92.4241 79.3789 92.4612 79.3851L99.1615 79.7242C99.2018 79.7256 99.2411 79.7109 99.2708 79.6835C99.3005 79.6562 99.3182 79.6182 99.3201 79.5778H99.3103ZM96.1554 84.5408C96.1577 84.5207 96.1561 84.5004 96.1504 84.481C96.1448 84.4615 96.1353 84.4435 96.1226 84.4278C96.1099 84.4121 96.0941 84.3991 96.0763 84.3896C96.0584 84.3801 96.0389 84.3742 96.0187 84.3724L90.8947 83.8673C90.8749 83.8653 90.8548 83.8673 90.8357 83.8731C90.8165 83.8788 90.7987 83.8884 90.7833 83.9011C90.7679 83.9138 90.7551 83.9294 90.7458 83.9471C90.7364 83.9647 90.7307 83.9841 90.7288 84.004C90.7254 84.044 90.7378 84.0838 90.7633 84.1148C90.7889 84.1458 90.8255 84.1656 90.8655 84.1699L95.9895 84.6774H96.0041C96.0435 84.6802 96.0823 84.6674 96.1124 84.6419C96.1425 84.6163 96.1614 84.5801 96.1651 84.5408H96.1554ZM89.726 87.1857C89.7599 87.1633 89.7835 87.1284 89.7917 87.0887C89.8 87.0489 89.7921 87.0075 89.7699 86.9735L87.2372 83.1451C87.214 83.1121 87.179 83.0894 87.1394 83.0817C87.0998 83.0739 87.0588 83.0818 87.0249 83.1036C86.991 83.126 86.9674 83.1609 86.9592 83.2007C86.9509 83.2405 86.9588 83.2819 86.981 83.3159L89.5137 87.1443C89.5282 87.1652 89.5475 87.1823 89.57 87.1942C89.5925 87.2061 89.6176 87.2124 89.643 87.2126C89.6761 87.2144 89.7088 87.2049 89.7357 87.1857H89.726ZM95.5381 88.4667C95.5375 88.4266 95.5214 88.3882 95.4932 88.3596C95.4651 88.3309 95.4269 88.3143 95.3868 88.313L89.3624 88.2569C89.3223 88.2569 89.2838 88.2728 89.2555 88.3012C89.2271 88.3296 89.2112 88.3681 89.2112 88.4082C89.2105 88.4283 89.2139 88.4484 89.2213 88.4672C89.2286 88.486 89.2397 88.5031 89.2538 88.5175C89.268 88.5319 89.2849 88.5432 89.3036 88.5509C89.3222 88.5585 89.3423 88.5622 89.3624 88.5619L95.3868 88.618C95.4074 88.619 95.428 88.6158 95.4473 88.6087C95.4666 88.6016 95.4843 88.5906 95.4994 88.5765C95.5144 88.5624 95.5264 88.5454 95.5347 88.5266C95.5431 88.5077 95.5475 88.4874 95.5478 88.4667H95.5381ZM87.4544 97.4752C87.4666 97.4484 88.4938 94.618 91.5828 93.9421C91.6226 93.9333 91.6573 93.9092 91.6793 93.8748C91.7012 93.8405 91.7087 93.7989 91.7 93.7591C91.6901 93.7201 91.6656 93.6864 91.6315 93.665C91.5974 93.6437 91.5564 93.6363 91.517 93.6444C88.2596 94.3569 87.1786 97.3459 87.1664 97.3752C87.1539 97.4137 87.1568 97.4556 87.1745 97.492C87.1923 97.5285 87.2235 97.5566 87.2616 97.5704H87.3104C87.3428 97.5732 87.3753 97.5654 87.403 97.5483C87.4307 97.5311 87.4521 97.5055 87.4641 97.4752H87.4544ZM88.14 99.7127C88.1804 99.7096 88.2179 99.6907 88.2444 99.6601C88.2709 99.6294 88.2842 99.5896 88.2815 99.5492C87.8984 93.7957 90.1237 84.3724 93.6934 76.6376C95.9748 71.6942 104.917 61.9781 105.013 61.8805C105.041 61.8517 105.057 61.8126 105.057 61.7719C105.057 61.7312 105.041 61.6922 105.013 61.6634C104.999 61.6492 104.982 61.6379 104.963 61.6303C104.945 61.6226 104.925 61.6187 104.905 61.6187C104.885 61.6187 104.865 61.6226 104.847 61.6303C104.829 61.6379 104.812 61.6492 104.798 61.6634C104.708 61.761 95.7284 71.5136 93.4275 76.501C89.7919 84.4237 87.5959 93.6761 87.9863 99.5687C87.9893 99.6076 88.0068 99.6439 88.0352 99.6705C88.0637 99.6972 88.101 99.7122 88.14 99.7127ZM95.438 73.4705C95.4784 73.468 95.5161 73.4497 95.5431 73.4195C95.57 73.3894 95.584 73.3499 95.582 73.3095L94.9988 63.4397C94.9979 63.4196 94.993 63.3999 94.9843 63.3817C94.9757 63.3635 94.9635 63.3473 94.9485 63.3339C94.9335 63.3205 94.916 63.3102 94.897 63.3036C94.878 63.2971 94.8579 63.2944 94.8378 63.2957C94.7974 63.2982 94.7597 63.3165 94.7328 63.3467C94.7058 63.3768 94.6918 63.4164 94.6938 63.4568L95.2867 73.3217C95.2886 73.3605 95.3054 73.3971 95.3336 73.4239C95.3617 73.4507 95.3991 73.4657 95.438 73.4656V73.4705ZM93.6178 76.7133C93.6543 76.6967 93.683 76.6665 93.6976 76.6291C93.7122 76.5917 93.7115 76.5501 93.6959 76.5132L89.9456 68.0293C89.9294 67.9924 89.8992 67.9635 89.8617 67.9488C89.8242 67.9342 89.7824 67.9351 89.7455 67.9512C89.7086 67.9674 89.6797 67.9976 89.665 68.0351C89.6504 68.0726 89.6513 68.1144 89.6674 68.1513L93.4153 76.6352C93.427 76.6624 93.4464 76.6857 93.4711 76.7021C93.4958 76.7186 93.5247 76.7275 93.5544 76.7279C93.5796 76.7292 93.6048 76.7242 93.6275 76.7133H93.6178ZM94.2668 75.5421L103.244 74.2586C103.265 74.2582 103.287 74.2531 103.306 74.2439C103.326 74.2346 103.343 74.2213 103.357 74.2048C103.371 74.1883 103.382 74.169 103.388 74.1482C103.394 74.1274 103.396 74.1055 103.393 74.0841C103.39 74.0626 103.382 74.042 103.371 74.0236C103.359 74.0052 103.344 73.9894 103.326 73.9773C103.308 73.9652 103.288 73.9571 103.266 73.9534C103.245 73.9498 103.223 73.9507 103.202 73.9561L94.2254 75.2395C94.1852 75.2421 94.1478 75.2605 94.1212 75.2907C94.0947 75.3209 94.0812 75.3604 94.0838 75.4005C94.0864 75.4407 94.1048 75.4781 94.135 75.5047C94.1652 75.5312 94.2047 75.5447 94.2449 75.5421H94.2668ZM91.7073 81.2687C91.7391 81.2437 91.7598 81.2071 91.7649 81.1669C91.7699 81.1267 91.7588 81.0861 91.7341 81.054L86.8688 74.8028C86.8564 74.7867 86.841 74.7733 86.8235 74.7632C86.806 74.7531 86.7866 74.7466 86.7666 74.744C86.7465 74.7414 86.7262 74.7428 86.7067 74.748C86.6871 74.7533 86.6688 74.7623 86.6528 74.7747C86.6368 74.787 86.6234 74.8024 86.6133 74.8199C86.6032 74.8375 86.5967 74.8568 86.5941 74.8768C86.5915 74.8969 86.5928 74.9173 86.5981 74.9368C86.6034 74.9563 86.6124 74.9746 86.6248 74.9906L91.4999 81.2517C91.514 81.2699 91.5321 81.2847 91.5529 81.2948C91.5736 81.305 91.5964 81.3102 91.6194 81.3102C91.6559 81.3084 91.6905 81.2937 91.717 81.2687H91.7073ZM99.3103 79.5778C99.3116 79.5375 99.297 79.4982 99.2696 79.4685C99.2422 79.4388 99.2042 79.4211 99.1639 79.4192L92.4759 79.0801C92.4383 79.0827 92.403 79.099 92.3766 79.1259C92.3502 79.1528 92.3347 79.1884 92.3329 79.2261C92.3311 79.2637 92.3431 79.3007 92.3668 79.33C92.3905 79.3593 92.4241 79.3789 92.4612 79.3851L99.1615 79.7242C99.2018 79.7256 99.2411 79.7109 99.2708 79.6835C99.3005 79.6562 99.3182 79.6182 99.3201 79.5778H99.3103ZM96.1554 84.5408C96.1577 84.5207 96.1561 84.5004 96.1504 84.481C96.1448 84.4615 96.1353 84.4435 96.1226 84.4278C96.1099 84.4121 96.0941 84.3991 96.0763 84.3896C96.0584 84.3801 96.0389 84.3742 96.0187 84.3724L90.8947 83.8673C90.8749 83.8653 90.8548 83.8673 90.8357 83.8731C90.8165 83.8788 90.7987 83.8884 90.7833 83.9011C90.7679 83.9138 90.7551 83.9294 90.7458 83.9471C90.7364 83.9647 90.7307 83.9841 90.7288 84.004C90.7254 84.044 90.7378 84.0838 90.7633 84.1148C90.7889 84.1458 90.8255 84.1656 90.8655 84.1699L95.9895 84.6774H96.0041C96.0435 84.6802 96.0823 84.6674 96.1124 84.6419C96.1425 84.6163 96.1614 84.5801 96.1651 84.5408H96.1554ZM89.726 87.1857C89.7599 87.1633 89.7835 87.1284 89.7917 87.0887C89.8 87.0489 89.7921 87.0075 89.7699 86.9735L87.2372 83.1451C87.214 83.1121 87.179 83.0894 87.1394 83.0817C87.0998 83.0739 87.0588 83.0818 87.0249 83.1036C86.991 83.126 86.9674 83.1609 86.9592 83.2007C86.9509 83.2405 86.9588 83.2819 86.981 83.3159L89.5137 87.1443C89.5282 87.1652 89.5475 87.1823 89.57 87.1942C89.5925 87.2061 89.6176 87.2124 89.643 87.2126C89.6761 87.2144 89.7088 87.2049 89.7357 87.1857H89.726ZM95.5381 88.4667C95.5375 88.4266 95.5214 88.3882 95.4932 88.3596C95.4651 88.3309 95.4269 88.3143 95.3868 88.313L89.3624 88.2569C89.3223 88.2569 89.2838 88.2728 89.2555 88.3012C89.2271 88.3296 89.2112 88.3681 89.2112 88.4082C89.2105 88.4283 89.2139 88.4484 89.2213 88.4672C89.2286 88.486 89.2397 88.5031 89.2538 88.5175C89.268 88.5319 89.2849 88.5432 89.3036 88.5509C89.3222 88.5585 89.3423 88.5622 89.3624 88.5619L95.3868 88.618C95.4074 88.619 95.428 88.6158 95.4473 88.6087C95.4666 88.6016 95.4843 88.5906 95.4994 88.5765C95.5144 88.5624 95.5264 88.5454 95.5347 88.5266C95.5431 88.5077 95.5475 88.4874 95.5478 88.4667H95.5381ZM87.4544 97.4752C87.4666 97.4484 88.4938 94.618 91.5828 93.9421C91.6226 93.9333 91.6573 93.9092 91.6793 93.8748C91.7012 93.8405 91.7087 93.7989 91.7 93.7591C91.6901 93.7201 91.6656 93.6864 91.6315 93.665C91.5974 93.6437 91.5564 93.6363 91.517 93.6444C88.2596 94.3569 87.1786 97.3459 87.1664 97.3752C87.1539 97.4137 87.1568 97.4556 87.1745 97.492C87.1923 97.5285 87.2235 97.5566 87.2616 97.5704H87.3104C87.3428 97.5732 87.3753 97.5654 87.403 97.5483C87.4307 97.5311 87.4521 97.5055 87.4641 97.4752H87.4544Z",
                    fill: "#18181C"
                }), r.a.createElement("path", {
                    d: "M92.1245 95.4111H85.2168V96.841H85.8195L87.0663 104.642H90.2749L91.5218 96.841H92.1245V95.4111Z",
                    fill: "#0752AD"
                }), r.a.createElement("path", {
                    opacity: "0.3",
                    d: "M92.1245 95.4111H85.2168V96.841H85.8195L87.0663 104.642H90.2749L91.5218 96.841H92.1245V95.4111Z",
                    fill: "white"
                }))
            }));
            var q = Object(o.memo)((function(e) {
                var t = e.className,
                    a = e.height,
                    n = e.width,
                    o = e.stroke;
                return r.a.createElement("svg", {
                    className: t || "",
                    viewBox: "0 0 20 13",
                    height: a,
                    width: n,
                    fill: "none"
                }, r.a.createElement("path", {
                    d: "M15.8333 13H4.16667C3.062 12.9987 2.00296 12.5703 1.22185 11.8087C0.440735 11.0471 0.00132321 10.0145 0 8.9375L0 4.0625C0.00132321 2.98545 0.440735 1.95289 1.22185 1.1913C2.00296 0.429717 3.062 0.00129013 4.16667 0H15.8333C16.938 0.00129013 17.997 0.429717 18.7782 1.1913C19.5593 1.95289 19.9987 2.98545 20 4.0625V8.9375C19.9987 10.0145 19.5593 11.0471 18.7782 11.8087C17.997 12.5703 16.938 12.9987 15.8333 13ZM4.16667 1.625C3.50363 1.625 2.86774 1.88181 2.3989 2.33893C1.93006 2.79605 1.66667 3.41603 1.66667 4.0625V8.9375C1.66667 9.58397 1.93006 10.204 2.3989 10.6611C2.86774 11.1182 3.50363 11.375 4.16667 11.375H15.8333C16.4964 11.375 17.1323 11.1182 17.6011 10.6611C18.0699 10.204 18.3333 9.58397 18.3333 8.9375V4.0625C18.3333 3.41603 18.0699 2.79605 17.6011 2.33893C17.1323 1.88181 16.4964 1.625 15.8333 1.625H4.16667ZM10 9.75C9.34073 9.75 8.69626 9.55939 8.1481 9.20228C7.59994 8.84516 7.17269 8.33758 6.9204 7.74372C6.66811 7.14986 6.6021 6.49639 6.73072 5.86596C6.85933 5.23552 7.1768 4.65642 7.64298 4.2019C8.10915 3.74738 8.7031 3.43785 9.3497 3.31245C9.9963 3.18705 10.6665 3.25141 11.2756 3.49739C11.8847 3.74338 12.4053 4.15994 12.7716 4.6944C13.1378 5.22886 13.3333 5.85721 13.3333 6.5C13.3333 7.36195 12.9821 8.1886 12.357 8.7981C11.7319 9.40759 10.8841 9.75 10 9.75ZM10 4.875C9.67036 4.875 9.34813 4.9703 9.07405 5.14886C8.79997 5.32742 8.58635 5.58121 8.4602 5.87814C8.33405 6.17507 8.30105 6.5018 8.36536 6.81702C8.42967 7.13224 8.5884 7.42179 8.82149 7.64905C9.05458 7.87631 9.35155 8.03108 9.67485 8.09378C9.99815 8.15648 10.3333 8.1243 10.6378 8.0013C10.9423 7.87831 11.2026 7.67003 11.3858 7.4028C11.5689 7.13557 11.6667 6.82139 11.6667 6.5C11.6667 6.06902 11.4911 5.6557 11.1785 5.35095C10.8659 5.04621 10.442 4.875 10 4.875ZM4.16667 3.25C4.00185 3.25 3.84073 3.29765 3.70369 3.38693C3.56665 3.47621 3.45984 3.6031 3.39677 3.75157C3.33369 3.90003 3.31719 4.0634 3.34935 4.22101C3.3815 4.37862 3.46087 4.52339 3.57741 4.63702C3.69395 4.75065 3.84244 4.82804 4.00409 4.85939C4.16574 4.89074 4.3333 4.87465 4.48557 4.81315C4.63784 4.75166 4.76799 4.64752 4.85956 4.5139C4.95113 4.38029 5 4.2232 5 4.0625C5 3.84701 4.9122 3.64035 4.75592 3.48798C4.59964 3.3356 4.38768 3.25 4.16667 3.25ZM15 4.0625C15 4.2232 15.0489 4.38029 15.1404 4.5139C15.232 4.64752 15.3622 4.75166 15.5144 4.81315C15.6667 4.87465 15.8343 4.89074 15.9959 4.85939C16.1576 4.82804 16.306 4.75065 16.4226 4.63702C16.5391 4.52339 16.6185 4.37862 16.6507 4.22101C16.6828 4.0634 16.6663 3.90003 16.6032 3.75157C16.5402 3.6031 16.4333 3.47621 16.2963 3.38693C16.1593 3.29765 15.9982 3.25 15.8333 3.25C15.6123 3.25 15.4004 3.3356 15.2441 3.48798C15.0878 3.64035 15 3.84701 15 4.0625ZM4.16667 8.125C4.00185 8.125 3.84073 8.17265 3.70369 8.26193C3.56665 8.35121 3.45984 8.4781 3.39677 8.62657C3.33369 8.77503 3.31719 8.9384 3.34935 9.09601C3.3815 9.25362 3.46087 9.39839 3.57741 9.51202C3.69395 9.62565 3.84244 9.70304 4.00409 9.73439C4.16574 9.76574 4.3333 9.74965 4.48557 9.68815C4.63784 9.62666 4.76799 9.52252 4.85956 9.3889C4.95113 9.25529 5 9.0982 5 8.9375C5 8.72201 4.9122 8.51535 4.75592 8.36298C4.59964 8.2106 4.38768 8.125 4.16667 8.125ZM15 8.9375C15 9.0982 15.0489 9.25529 15.1404 9.3889C15.232 9.52252 15.3622 9.62666 15.5144 9.68815C15.6667 9.74965 15.8343 9.76574 15.9959 9.73439C16.1576 9.70304 16.306 9.62565 16.4226 9.51202C16.5391 9.39839 16.6185 9.25362 16.6507 9.09601C16.6828 8.9384 16.6663 8.77503 16.6032 8.62657C16.5402 8.4781 16.4333 8.35121 16.2963 8.26193C16.1593 8.17265 15.9982 8.125 15.8333 8.125C15.6123 8.125 15.4004 8.2106 15.2441 8.36298C15.0878 8.51535 15 8.72201 15 8.9375Z",
                    fill: o || "#004BAC"
                }))
            }));
            var X = Object(o.memo)((function(e) {
                var t = e.className,
                    a = e.height,
                    n = e.width,
                    o = e.stroke;
                return r.a.createElement("svg", {
                    className: t || "",
                    viewBox: "0 0 19 20",
                    height: a,
                    width: n,
                    fill: "none"
                }, r.a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M17.0727 5.98797L16.5022 4.99788C16.0195 4.16012 14.9498 3.87111 14.1109 4.35181V4.35181C13.7115 4.58705 13.235 4.65379 12.7864 4.53732C12.3378 4.42084 11.954 4.13071 11.7196 3.73091C11.5687 3.47679 11.4877 3.18735 11.4846 2.89186V2.89186C11.4982 2.41811 11.3195 1.95902 10.9891 1.61918C10.6588 1.27935 10.2049 1.0877 9.731 1.08789H8.5815C8.11718 1.08789 7.672 1.27291 7.34446 1.60202C7.01692 1.93113 6.83404 2.3772 6.83627 2.84151V2.84151C6.82251 3.80017 6.0414 4.57006 5.08264 4.56997C4.78715 4.5669 4.49771 4.48585 4.24359 4.33503V4.33503C3.40468 3.85433 2.33498 4.14334 1.85229 4.9811L1.23978 5.98797C0.757669 6.82468 1.04274 7.89371 1.87746 8.37927V8.37927C2.42004 8.69252 2.75428 9.27145 2.75428 9.89796C2.75428 10.5245 2.42004 11.1034 1.87746 11.4166V11.4166C1.0438 11.8989 0.758418 12.9654 1.23978 13.7996V13.7996L1.81872 14.798C2.04489 15.2061 2.42435 15.5073 2.87314 15.6348C3.32193 15.7624 3.80305 15.7058 4.21003 15.4777V15.4777C4.61012 15.2442 5.08688 15.1803 5.53435 15.3C5.98183 15.4197 6.36293 15.7133 6.59294 16.1154C6.74377 16.3695 6.82481 16.6589 6.82788 16.9544V16.9544C6.82788 17.9229 7.613 18.708 8.5815 18.708H9.731C10.6962 18.708 11.48 17.928 11.4846 16.9628V16.9628C11.4824 16.497 11.6664 16.0497 11.9958 15.7203C12.3251 15.391 12.7725 15.2069 13.2383 15.2092C13.533 15.2171 13.8213 15.2978 14.0773 15.4441V15.4441C14.914 15.9262 15.983 15.6411 16.4686 14.8064V14.8064L17.0727 13.7996C17.3066 13.3982 17.3707 12.9202 17.2511 12.4713C17.1314 12.0225 16.8377 11.6399 16.435 11.4083V11.4083C16.0324 11.1766 15.7387 10.794 15.619 10.3452C15.4993 9.89635 15.5635 9.41832 15.7974 9.01695C15.9494 8.75146 16.1696 8.53133 16.435 8.37927V8.37927C17.2648 7.89397 17.5492 6.83119 17.0727 5.99636V5.99636V5.98797Z",
                    stroke: o || "#004BAC",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), r.a.createElement("ellipse", {
                    cx: "9.16043",
                    cy: "9.89792",
                    rx: "2.41648",
                    ry: "2.41648",
                    stroke: o || "#004BAC",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }))
            }));
            var Q = Object(o.memo)((function(e) {
                    var t = e.className,
                        a = e.height,
                        n = e.width,
                        o = e.stroke;
                    return r.a.createElement("svg", {
                        className: t || "",
                        viewBox: "0 0 20 20",
                        height: a,
                        width: n,
                        fill: "none"
                    }, r.a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M10.0001 1.52051C14.6824 1.52051 18.4793 5.31642 18.4793 9.99967C18.4793 14.682 14.6824 18.4788 10.0001 18.4788C5.31685 18.4788 1.52094 14.682 1.52094 9.99967C1.52094 5.31642 5.31685 1.52051 10.0001 1.52051Z",
                        stroke: o || "#004BAC",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), r.a.createElement("path", {
                        d: "M9.99563 6.52051V10.5713",
                        stroke: o || "#004BAC",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), r.a.createElement("path", {
                        d: "M9.99544 13.4798H10.0046",
                        stroke: o || "#004BAC",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                })),
                $ = a(651);
            var J = Object(o.memo)((function(e) {
                var t = e.className,
                    a = e.height,
                    n = e.width;
                return r.a.createElement("svg", {
                    className: t || "",
                    viewBox: "0 0 12 12",
                    height: a,
                    width: n
                }, r.a.createElement("path", {
                    d: "M11.25 5.25H6.75V0.75C6.75 0.551088 6.67098 0.360322 6.53033 0.21967C6.38968 0.0790178 6.19891 0 6 0C5.80109 0 5.61032 0.0790178 5.46967 0.21967C5.32902 0.360322 5.25 0.551088 5.25 0.75V5.25H0.75C0.551088 5.25 0.360322 5.32902 0.21967 5.46967C0.0790178 5.61032 0 5.80109 0 6C0 6.19891 0.0790178 6.38968 0.21967 6.53033C0.360322 6.67098 0.551088 6.75 0.75 6.75H5.25V11.25C5.25 11.4489 5.32902 11.6397 5.46967 11.7803C5.61032 11.921 5.80109 12 6 12C6.19891 12 6.38968 11.921 6.53033 11.7803C6.67098 11.6397 6.75 11.4489 6.75 11.25V6.75H11.25C11.4489 6.75 11.6397 6.67098 11.7803 6.53033C11.921 6.38968 12 6.19891 12 6C12 5.80109 11.921 5.61032 11.7803 5.46967C11.6397 5.32902 11.4489 5.25 11.25 5.25Z",
                    fill: "#004BAC"
                }))
            }));
            var ee = Object(o.memo)((function(e) {
                    var t = e.className,
                        a = e.height,
                        n = e.width,
                        o = e.stroke;
                    return r.a.createElement("svg", {
                        className: t || "",
                        viewBox: "0 0 20 20",
                        height: a,
                        width: n,
                        fill: "none"
                    }, r.a.createElement("path", {
                        d: "M7.39413 18.0401V15.229C7.39412 14.5139 7.97705 13.9329 8.69928 13.9281H11.3449C12.0705 13.9281 12.6588 14.5105 12.6588 15.229V15.229V18.0489C12.6587 18.6559 13.1481 19.1521 13.7611 19.1663H15.5249C17.2831 19.1663 18.7084 17.7553 18.7084 16.0147V16.0147V8.01769C18.699 7.33293 18.3742 6.68991 17.8265 6.27162L11.7946 1.4612C10.7379 0.62361 9.23571 0.62361 8.17899 1.4612L2.17354 6.28035C1.62376 6.69695 1.29846 7.34104 1.29169 8.02642V16.0147C1.29169 17.7553 2.71699 19.1663 4.47519 19.1663H6.2389C6.86718 19.1663 7.3765 18.6621 7.3765 18.0401V18.0401",
                        stroke: o || "#004BAC",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                })),
                te = a(118),
                ae = a(652),
                ne = a.n(ae),
                oe = Object(c.a)((function(e) {
                    return {
                        container: {
                            left: 0,
                            width: "".concat(L.f, "px"),
                            zIndex: 9,
                            backgroundColor: L.c.LIGHT_BLUE,
                            position: "sticky",
                            top: 1,
                            maxHeight: "100vh",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            boxShadow: "3px 0px 10px rgba(0, 0, 0, 0.1)",
                            padding: "24px 16px 16px 16px"
                        },
                        upperWrapper: {
                            display: "flex",
                            flexDirection: "column",
                            paddingBottom: "15px"
                        },
                        menuIcon: {
                            width: "72px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            borderRight: "1px solid ".concat(L.c.GREY),
                            borderRadius: 0,
                            "&:hover": {
                                background: "transparent"
                            }
                        },
                        content: {
                            display: "flex",
                            justifyContent: "space-between",
                            border: "1px solid ".concat(L.d.LIGHT_GREY),
                            borderRadius: "4px",
                            padding: "12px 16px 12px 12px",
                            "&:hover": {
                                borderColor: L.d.MID_BLUE,
                                backgroundColor: "transparent"
                            }
                        },
                        bookingListWrapper: {
                            display: "flex",
                            flexDirection: "column"
                        },
                        listItemContainer: {
                            display: "flex",
                            justifyContent: "start",
                            width: "100%",
                            cursor: "pointer",
                            alignItems: "center",
                            position: "relative"
                        },
                        activeItem: {
                            "&::after": {
                                content: "url(".concat(ne.a, ")"),
                                height: "48px",
                                width: "4px",
                                position: "absolute",
                                left: "0px",
                                top: "28px",
                                transform: "translateY(-50%)"
                            },
                            "& .MuiListItem-root": {
                                backgroundColor: "rgba(66, 136, 222,0.1)"
                            },
                            "& $listItemText": {
                                fontWeight: 500,
                                color: L.d.SECONDARY_COLOR
                            }
                        },
                        nonActiveItem: {
                            color: L.d.TEXT_DISABLED
                        },
                        headerLogoContainer: {
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                            alignContent: "center",
                            paddingBottom: "24px"
                        },
                        headerIcon: {
                            display: "flex",
                            marginLeft: e.spacing(2),
                            fontSize: "".concat(L.k["16px"], "rem"),
                            alignItems: "center"
                        },
                        arrowIconDiv: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        arrowIcon: {
                            color: L.d.MEDIUM_GREY
                        },
                        headerText: {
                            fontSize: "".concat(L.k["18px"], "rem"),
                            fontWeight: L.g.BOLD,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            maxWidth: "120px",
                            color: L.d.DARK_GREY,
                            textAlign: "left"
                        },
                        listItemText: {
                            fontSize: "16px",
                            whiteSpace: "nowrap",
                            color: L.d.MEDIUM_DARK_GREY
                        },
                        popOver: {
                            top: "81px",
                            left: "71px",
                            boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.12)"
                        },
                        bookAvatar: {
                            backgroundColor: L.d.SECONDARY_COLOR,
                            width: "44px",
                            height: "44px",
                            fontSize: "24px",
                            fontWeight: 500
                        },
                        addLedgerButton: {
                            width: "100%",
                            textTransform: "capitalize",
                            fontWeight: "normal",
                            fontSize: "14px",
                            boxShadow: "none",
                            padding: "18px 0",
                            borderTop: "1px solid #DBE0E5",
                            borderRadius: "0"
                        },
                        plusIcon: {
                            marginRight: "10px"
                        },
                        listItem: {
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: L.c.LIGHT_BLUE,
                            wordBreak: "break-all",
                            padding: "8px 12px",
                            borderRadius: "4px",
                            margin: "4px 0",
                            "&:hover": {
                                backgroundColor: L.c.WHITE
                            },
                            "& .MuiListItemAvatar-root": {
                                minWidth: "32px"
                            }
                        },
                        modifyGutters: {},
                        bottomSection: {
                            marginTop: "2px",
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            flexDirection: "column"
                        },
                        bottomCTA: {
                            textAlign: "center",
                            color: L.d.TEXT_GREY
                        },
                        listContainer: {
                            flexGrow: 1
                        },
                        scrollableSection: {
                            overflowY: "auto",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column"
                        },
                        customersCount: {
                            color: L.d.TEXT_DISABLED
                        },
                        longLanguageText: {
                            wordBreak: "break-all",
                            whiteSpace: "normal"
                        },
                        popper: {
                            zIndex: 5
                        },
                        bookListingPaper: {
                            width: "208px",
                            maxHeight: "324px",
                            background: L.d.WHITE,
                            border: "1px solid #DBE0E5",
                            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.08)",
                            marginTop: "8px"
                        },
                        longWordsAddBtn: {
                            fontSize: "10px",
                            whiteSpace: "nowrap"
                        }
                    }
                }));
            var re = Object(o.memo)((function(e) {
                    var t = e.handleAddNewLedger,
                        a = oe(),
                        c = Object(R.a)().getCurrentBook,
                        l = Object(o.useState)(c()),
                        f = Object(n.a)(l, 2),
                        h = f[0],
                        N = f[1],
                        T = Object(B.b)().t,
                        M = Object(W.b)(),
                        G = M.searchText,
                        Y = M.setSearchText,
                        ae = (null === h || void 0 === h ? void 0 : h.business_name) || (null === h || void 0 === h ? void 0 : h.book_name) || "",
                        ne = (null === h || void 0 === h ? void 0 : h.business_image) || "",
                        re = Object(i.g)(),
                        ce = Object(o.useState)(!1),
                        ie = Object(n.a)(ce, 2),
                        le = ie[0],
                        se = ie[1],
                        de = Object(o.useRef)(null),
                        ue = Object(o.useRef)(null),
                        me = Object(o.useState)(""),
                        pe = Object(n.a)(me, 2),
                        be = pe[0],
                        fe = pe[1],
                        Ce = Object(o.useState)(0),
                        he = Object(n.a)(Ce, 2),
                        xe = he[0],
                        ge = he[1],
                        Ee = G.length > 0;
                    Object(o.useEffect)((function() {
                        (function() {
                            var e = Object(d.a)(s.a.mark((function e() {
                                var t;
                                return s.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(Z.c)();
                                        case 2:
                                            (t = e.sent) && N(t);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        })()()
                    }), []), Object(H.a)((function(e) {
                        e && N(e)
                    }));
                    var ve = Object(o.useCallback)((function() {
                            se(!le), de && de.current && (de.current.scrollTop = 0)
                        }), [le]),
                        Oe = function(e) {
                            switch (Ee && Y(""), re.replace(e), e) {
                                case A.q:
                                    Object(F.m)(te.a.HomeSidebarMoneyClick);
                                    break;
                                case A.z:
                                    Object(F.m)(te.a.HomeSidebarReportsClick);
                                    break;
                                case A.A:
                                    Object(F.m)(te.a.HomeSidebarSettingsClick);
                                    break;
                                case A.a:
                                    Object(F.m)(te.a.BookProfileAboutUsClick)
                            }
                        };
                    return Object(o.useEffect)((function() {
                        h && I.a.getCustomerCount(h.book_id).then((function(e) {
                            ge(e)
                        })).catch((function(e) {
                            return Object(y.a)(e, {
                                tags: {
                                    module: D.a.BOOK_LISTING
                                },
                                extra: {
                                    worker: "GET_CUSTOMER_COUNT"
                                }
                            }), 0
                        }))
                    }), [h]), Object(o.useEffect)((function() {
                        var e = Object(H.b)((function(e) {
                            fe(null === e || void 0 === e ? void 0 : e.book_id)
                        }));
                        return function() {
                            e()
                        }
                    }), []), r.a.createElement("div", {
                        className: a.container
                    }, r.a.createElement("div", {
                        className: a.upperWrapper
                    }, r.a.createElement("div", {
                        className: a.headerLogoContainer
                    }, r.a.createElement(u.b, {
                        to: A.f,
                        onClick: function() {
                            re.location.pathname === A.f && window.location.reload()
                        }
                    }, r.a.createElement($.default, {
                        width: 113,
                        height: 24
                    }))), r.a.createElement(m.a, {
                        onClick: ve,
                        "aria-label": "downArrow",
                        className: a.content,
                        ref: ue
                    }, r.a.createElement(b.a, {
                        className: a.bookAvatar,
                        src: ne
                    }, Object(k.a)(ae)), r.a.createElement("div", {
                        className: a.bookingListWrapper
                    }, r.a.createElement(_.a, {
                        text: ae,
                        className: a.headerText,
                        arrow: !0,
                        placement: "top-start"
                    }), r.a.createElement(g.a, {
                        className: a.customersCount
                    }, "".concat(xe, " ").concat(T("customers", [""])))), r.a.createElement("div", {
                        className: a.arrowIconDiv
                    }, le ? r.a.createElement(x.a, {
                        className: a.arrowIcon
                    }) : r.a.createElement(C.a, {
                        className: a.arrowIcon
                    }))), r.a.createElement(w.a, {
                        open: le,
                        anchorEl: ue.current,
                        role: void 0,
                        className: a.popper,
                        transition: !0,
                        placement: "bottom",
                        disablePortal: !0
                    }, r.a.createElement(j.a, {
                        className: a.bookListingPaper
                    }, r.a.createElement(S.a, {
                        onClickAway: function(e) {
                            ue.current && ue.current.contains(e.target) || se(!1)
                        }
                    }, r.a.createElement("div", null, r.a.createElement(P, {
                        bookDeleted: be,
                        toggleBookListing: ve
                    }), r.a.createElement(p.a, {
                        className: "".concat(a.addLedgerButton, " ").concat(Object(z.b)() ? a.longWordsAddBtn : ""),
                        variant: "text",
                        color: "primary",
                        size: "large",
                        onClick: function() {
                            t(), se(!le), Object(F.b)()
                        }
                    }, r.a.createElement(J, {
                        className: a.plusIcon,
                        width: 12,
                        height: 12
                    }), T("add"))))))), r.a.createElement("div", {
                        className: a.scrollableSection
                    }, r.a.createElement("div", {
                        className: a.listContainer
                    }, r.a.createElement("div", {
                        className: "".concat(a.listItemContainer, "\n              ").concat(A.f === re.location.pathname ? a.activeItem : a.nonActiveItem)
                    }, r.a.createElement(E.a, {
                        component: "a",
                        classes: {
                            root: a.listItem,
                            gutters: a.modifyGutters
                        },
                        onClick: function() {
                            return Oe(A.f)
                        }
                    }, r.a.createElement(v.a, null, r.a.createElement(ee, {
                        stroke: A.f !== re.location.pathname ? L.d.MEDIUM_DARK_GREY : null,
                        height: 22,
                        width: 22
                    })), r.a.createElement(O.a, {
                        primary: r.a.createElement(g.a, {
                            className: a.listItemText
                        }, T("navigation_menu_title_home"))
                    }))), Object(K.f)() && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                        className: "".concat(a.listItemContainer, " ").concat(A.q === re.location.pathname ? a.activeItem : a.nonActiveItem)
                    }, r.a.createElement(E.a, {
                        component: "a",
                        classes: {
                            root: a.listItem,
                            gutters: a.modifyGutters
                        },
                        onClick: function() {
                            return Oe(A.q)
                        }
                    }, r.a.createElement(v.a, null, r.a.createElement(q, {
                        height: 13,
                        width: 20,
                        stroke: A.q !== re.location.pathname ? L.d.MEDIUM_DARK_GREY : null
                    })), r.a.createElement(O.a, {
                        primary: r.a.createElement(g.a, {
                            className: a.listItemText
                        }, T("money"))
                    })))), r.a.createElement("div", {
                        className: "".concat(a.listItemContainer, " ").concat(A.A === re.location.pathname ? a.activeItem : a.nonActiveItem)
                    }, r.a.createElement(E.a, {
                        component: "a",
                        classes: {
                            root: a.listItem,
                            gutters: a.modifyGutters
                        },
                        onClick: function() {
                            return Oe(A.A)
                        }
                    }, r.a.createElement(v.a, null, r.a.createElement(X, {
                        height: 22,
                        width: 22,
                        stroke: A.A !== re.location.pathname ? L.d.MEDIUM_DARK_GREY : null
                    })), r.a.createElement(O.a, {
                        primary: r.a.createElement(g.a, {
                            className: "".concat(a.listItemText, " ").concat(Object(z.b)() && a.longLanguageText)
                        }, T("settings"))
                    }))), r.a.createElement("div", {
                        className: "".concat(a.listItemContainer, " ").concat(A.a === re.location.pathname ? a.activeItem : a.nonActiveItem)
                    }, r.a.createElement(E.a, {
                        component: "a",
                        classes: {
                            root: a.listItem,
                            gutters: a.modifyGutters
                        },
                        onClick: function() {
                            return Oe(A.a)
                        }
                    }, r.a.createElement(v.a, null, r.a.createElement(Q, {
                        height: 22,
                        width: 22,
                        stroke: A.a !== re.location.pathname ? L.d.MEDIUM_DARK_GREY : null
                    })), r.a.createElement(O.a, {
                        primary: r.a.createElement(g.a, {
                            className: a.listItemText
                        }, T("about_us"))
                    })))), r.a.createElement("div", {
                        className: a.bottomSection
                    }, r.a.createElement(V, {
                        width: 122,
                        height: 122
                    }), r.a.createElement(g.a, {
                        variant: "subtitle1",
                        className: a.bottomCTA
                    }, T("feedback"), " ", r.a.createElement("br", null), U.b))))
                })),
                ce = a(54),
                ie = a(237),
                le = a.n(ie),
                se = a(302),
                de = a(449),
                ue = a(563),
                me = a.n(ue),
                pe = Object(c.a)((function(e) {
                    return {
                        modal: {
                            height: "100%",
                            display: "flex"
                        },
                        paper: {
                            position: "absolute",
                            width: "640px",
                            maxHeight: "525px",
                            height: "100%",
                            overflowY: "auto",
                            backgroundColor: L.d.WHITE,
                            borderRadius: "15px",
                            boxShadow: L.d.GREY_SHADOW,
                            padding: "31px 64px 56px 64px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        deleteIcon: {
                            width: "89px",
                            height: "80px",
                            margin: "12px 0 29px 0"
                        },
                        title: {
                            fontWeight: "bold",
                            fontSize: "28px",
                            color: L.d.DARK_GREY,
                            marginBottom: "24px",
                            maxWidth: "490px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                        },
                        confirmationText: {
                            fontSize: "16px",
                            color: L.d.TEXT_DISABLED,
                            marginBottom: "32px"
                        },
                        buttonContainer: {
                            display: "flex"
                        },
                        button: {
                            width: "240px",
                            height: "64px",
                            borderRadius: "10px",
                            textTransform: "capitalize",
                            fontSize: "24px",
                            fontWeight: "bold",
                            boxShadow: "none"
                        },
                        cancelButton: {
                            color: L.d.GREY_BORDER,
                            backgroundColor: "#ECEEF1",
                            marginRight: "32px"
                        },
                        deleteButton: {
                            color: L.d.WHITE,
                            backgroundColor: L.d.DARK_PRIMARY,
                            "&:hover": {
                                backgroundColor: L.d.LIGHT_PRIMARY,
                                color: L.d.DARK_PRIMARY
                            },
                            "&:disabled": {
                                cursor: "default",
                                color: L.d.TEXT_DISABLED,
                                backgroundColor: "#ECEEF1"
                            }
                        },
                        closeIcon: {
                            position: "absolute",
                            top: "31px",
                            right: "31px",
                            color: "#C9C9C9",
                            cursor: "pointer"
                        },
                        deletionConfirmationText: {
                            fontSize: "18px",
                            fontWeight: 500,
                            color: L.d.PRIMARY_COLOR,
                            marginBottom: "16px",
                            textAlign: "center"
                        },
                        inputFieldWarper: {
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            marginBottom: "24px"
                        }
                    }
                }));
            var be = Object(o.memo)((function(e) {
                var t = e.open,
                    a = e.onClose,
                    c = e.onDeleteClicked,
                    i = pe(),
                    l = Object(B.b)().t,
                    s = (0, Object(R.a)().getCurrentBook)(),
                    d = (null === s || void 0 === s ? void 0 : s.business_name) || "",
                    u = Object(o.useState)(""),
                    m = Object(n.a)(u, 2),
                    b = m[0],
                    f = m[1],
                    C = Object(o.useState)(!0),
                    h = Object(n.a)(C, 2),
                    x = h[0],
                    E = h[1];
                Object(o.useEffect)((function() {
                    t || f("")
                }), [t]);
                var v = function() {
                    f(""), E(!0), a()
                };
                return r.a.createElement(se.a, {
                    className: i.modal,
                    open: t,
                    onClose: v
                }, r.a.createElement("div", {
                    style: L.j,
                    className: i.paper
                }, r.a.createElement(le.a, {
                    className: i.closeIcon,
                    onClick: v
                }), r.a.createElement("img", {
                    src: me.a,
                    alt: "delete",
                    className: me.a
                }), r.a.createElement(_.a, {
                    text: l("confirmation_modal_title", [d]),
                    className: i.title,
                    arrow: !0,
                    placement: "top-start"
                }), r.a.createElement(g.a, {
                    className: i.confirmationText
                }, l("delete_khata_confirmation")), r.a.createElement("div", {
                    className: i.inputFieldWarper
                }, r.a.createElement(g.a, {
                    className: i.deletionConfirmationText
                }, l("are_you_sure_confirmation")), r.a.createElement(de.a, {
                    name: "deleteBook",
                    value: b,
                    onChangeHandler: function(e) {
                        var t = e.target.value;
                        f(t), E(t !== d)
                    },
                    placeholder: l("type_book_name_place_holder", [d]),
                    style: {
                        width: "100%"
                    }
                })), r.a.createElement("div", {
                    className: i.buttonContainer
                }, r.a.createElement(p.a, {
                    size: "small",
                    onClick: v,
                    className: "".concat(i.button, " ").concat(i.cancelButton)
                }, l("cancel")), r.a.createElement(p.a, {
                    size: "small",
                    onClick: c,
                    className: "".concat(i.button, " ").concat(i.deleteButton),
                    disabled: x
                }, l("delete")))))
            }));
            var fe = Object(o.memo)((function(e) {
                var t = e.className,
                    a = e.height,
                    n = e.width,
                    o = e.stroke;
                return r.a.createElement("svg", {
                    className: t || "",
                    width: n,
                    height: a,
                    viewBox: "0 0 9 13",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.a.createElement("path", {
                    d: "M5.4125 6.33333L0.875 1.79583L2.17117 0.49966L8.00483 6.33333L2.17117 12.167L0.875 10.8708L5.4125 6.33333Z",
                    fill: o || "#4F4F4F"
                }))
            }));
            var Ce = Object(o.memo)((function(e) {
                var t = e.className,
                    a = e.height,
                    n = e.width,
                    o = e.stroke;
                return r.a.createElement("svg", {
                    width: n,
                    height: a,
                    className: t || "",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.a.createElement("path", {
                    d: "M21 4H17.9C17.6679 2.87141 17.0538 1.85735 16.1613 1.12872C15.2687 0.40009 14.1522 0.00145452 13 0L11 0C9.8478 0.00145452 8.73132 0.40009 7.83875 1.12872C6.94618 1.85735 6.3321 2.87141 6.1 4H3C2.73478 4 2.48043 4.10536 2.29289 4.29289C2.10536 4.48043 2 4.73478 2 5C2 5.26522 2.10536 5.51957 2.29289 5.70711C2.48043 5.89464 2.73478 6 3 6H4V19C4.00159 20.3256 4.52888 21.5964 5.46622 22.5338C6.40356 23.4711 7.67441 23.9984 9 24H15C16.3256 23.9984 17.5964 23.4711 18.5338 22.5338C19.4711 21.5964 19.9984 20.3256 20 19V6H21C21.2652 6 21.5196 5.89464 21.7071 5.70711C21.8946 5.51957 22 5.26522 22 5C22 4.73478 21.8946 4.48043 21.7071 4.29289C21.5196 4.10536 21.2652 4 21 4ZM11 2H13C13.6203 2.00076 14.2251 2.19338 14.7316 2.55144C15.2381 2.90951 15.6214 3.41549 15.829 4H8.171C8.37858 3.41549 8.7619 2.90951 9.26839 2.55144C9.77487 2.19338 10.3797 2.00076 11 2ZM18 19C18 19.7956 17.6839 20.5587 17.1213 21.1213C16.5587 21.6839 15.7956 22 15 22H9C8.20435 22 7.44129 21.6839 6.87868 21.1213C6.31607 20.5587 6 19.7956 6 19V6H18V19Z",
                    fill: o || "#2666B8"
                }), r.a.createElement("path", {
                    d: "M10 18C10.2652 18 10.5196 17.8946 10.7071 17.7071C10.8946 17.5196 11 17.2652 11 17V11C11 10.7348 10.8946 10.4804 10.7071 10.2929C10.5196 10.1054 10.2652 10 10 10C9.73478 10 9.48043 10.1054 9.29289 10.2929C9.10536 10.4804 9 10.7348 9 11V17C9 17.2652 9.10536 17.5196 9.29289 17.7071C9.48043 17.8946 9.73478 18 10 18Z",
                    fill: o || "#2666B8"
                }), r.a.createElement("path", {
                    d: "M14 18C14.2652 18 14.5196 17.8946 14.7071 17.7071C14.8946 17.5196 15 17.2652 15 17V11C15 10.7348 14.8946 10.4804 14.7071 10.2929C14.5196 10.1054 14.2652 10 14 10C13.7348 10 13.4804 10.1054 13.2929 10.2929C13.1054 10.4804 13 10.7348 13 11V17C13 17.2652 13.1054 17.5196 13.2929 17.7071C13.4804 17.8946 13.7348 18 14 18Z",
                    fill: o || "#2666B8"
                }))
            }));
            var he = Object(o.memo)((function(e) {
                var t = e.className,
                    a = e.height,
                    n = e.width,
                    o = e.stroke;
                return r.a.createElement("svg", {
                    className: t || "",
                    width: n,
                    height: a,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.a.createElement("path", {
                    d: "M12 24C5.3724 24 0 18.6276 0 12C0 5.3724 5.3724 0 12 0C18.6276 0 24 5.3724 24 12C24 18.6276 18.6276 24 12 24ZM9.252 21.2004C8.0681 18.6892 7.38225 15.9723 7.2324 13.2H2.4744C2.7079 15.0467 3.47271 16.7858 4.67588 18.206C5.87906 19.6263 7.46882 20.6665 9.252 21.2004ZM9.636 13.2C9.8172 16.1268 10.6536 18.876 12 21.3024C13.3828 18.8119 14.1905 16.0434 14.364 13.2H9.636ZM21.5256 13.2H16.7676C16.6178 15.9723 15.9319 18.6892 14.748 21.2004C16.5312 20.6665 18.1209 19.6263 19.3241 18.206C20.5273 16.7858 21.2921 15.0467 21.5256 13.2ZM2.4744 10.8H7.2324C7.38225 8.02774 8.0681 5.31082 9.252 2.7996C7.46882 3.33346 5.87906 4.3737 4.67588 5.79395C3.47271 7.21421 2.7079 8.95332 2.4744 10.8ZM9.6372 10.8H14.3628C14.1897 7.95672 13.3824 5.18824 12 2.6976C10.6172 5.18814 9.80947 7.95662 9.636 10.8H9.6372ZM14.748 2.7996C15.9319 5.31082 16.6178 8.02774 16.7676 10.8H21.5256C21.2921 8.95332 20.5273 7.21421 19.3241 5.79395C18.1209 4.3737 16.5312 3.33346 14.748 2.7996Z",
                    fill: o || "#2666B8"
                }))
            }));
            var xe = Object(o.memo)((function(e) {
                var t = e.className,
                    a = e.height,
                    n = e.width,
                    o = e.stroke;
                return r.a.createElement("svg", {
                    className: t || "",
                    width: n,
                    height: a,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.a.createElement("path", {
                    d: "M12 1.25C17.9363 1.25 22.75 6.06255 22.75 12C22.75 17.9362 17.9362 22.75 12 22.75C6.06255 22.75 1.25 17.9363 1.25 12C1.25 6.06246 6.06246 1.25 12 1.25Z",
                    stroke: o || "#2666B8",
                    strokeWidth: "2.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), r.a.createElement("path", {
                    d: "M12 7.63672V13.0913",
                    stroke: o || "#2666B8",
                    strokeWidth: "2.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), r.a.createElement("path", {
                    d: "M11.995 16.8633H12.005",
                    stroke: o || "#2666B8",
                    strokeWidth: "2.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }))
            }));
            var ge = Object(o.memo)((function(e) {
                    var t = e.className,
                        a = e.height,
                        n = e.width,
                        o = e.stroke;
                    return r.a.createElement("svg", {
                        className: t || "",
                        width: n,
                        height: a,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, r.a.createElement("g", {
                        clipPath: "url(#clip0)"
                    }, r.a.createElement("path", {
                        d: "M19 8.424V7C19 5.14348 18.2625 3.36301 16.9497 2.05025C15.637 0.737498 13.8565 0 12 0C10.1435 0 8.36301 0.737498 7.05025 2.05025C5.7375 3.36301 5 5.14348 5 7V8.424C4.10936 8.81271 3.35129 9.45252 2.8185 10.2652C2.28571 11.0779 2.00128 12.0282 2 13V19C2.00159 20.3256 2.52888 21.5964 3.46622 22.5338C4.40356 23.4711 5.67441 23.9984 7 24H17C18.3256 23.9984 19.5964 23.4711 20.5338 22.5338C21.4711 21.5964 21.9984 20.3256 22 19V13C21.9987 12.0282 21.7143 11.0779 21.1815 10.2652C20.6487 9.45252 19.8906 8.81271 19 8.424ZM7 7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V8H7V7ZM20 19C20 19.7956 19.6839 20.5587 19.1213 21.1213C18.5587 21.6839 17.7956 22 17 22H7C6.20435 22 5.44129 21.6839 4.87868 21.1213C4.31607 20.5587 4 19.7956 4 19V13C4 12.2044 4.31607 11.4413 4.87868 10.8787C5.44129 10.3161 6.20435 10 7 10H17C17.7956 10 18.5587 10.3161 19.1213 10.8787C19.6839 11.4413 20 12.2044 20 13V19Z",
                        fill: o || "#2666B8"
                    }), r.a.createElement("path", {
                        d: "M12 14C11.7348 14 11.4804 14.1054 11.2929 14.2929C11.1054 14.4804 11 14.7348 11 15V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V15C13 14.7348 12.8946 14.4804 12.7071 14.2929C12.5196 14.1054 12.2652 14 12 14Z",
                        fill: o || "#2666B8"
                    })), r.a.createElement("defs", null, r.a.createElement("clipPath", {
                        id: "clip0"
                    }, r.a.createElement("rect", {
                        width: n,
                        height: a,
                        fill: "white"
                    }))))
                })),
                Ee = a(234),
                ve = a(16),
                Oe = a(233);
            var je = function(e) {
                    var t = e.width,
                        a = e.height,
                        n = e.stroke,
                        o = Object(Oe.b)().currency,
                        i = o.length >= 3,
                        l = Object(c.a)((function() {
                            return {
                                iconSpan: Object(ve.a)({
                                    width: t,
                                    height: a,
                                    boxShadow: "inset 0px 0px 0px 2.5px ".concat(n),
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: n,
                                    fontWeight: "bold",
                                    fontSize: i ? "8px" : "16px",
                                    userSelect: "none"
                                }, i ? {
                                    paddingBottom: "2px"
                                } : {
                                    paddingTop: "2px"
                                })
                            }
                        }))();
                    return r.a.createElement("span", {
                        className: l.iconSpan
                    }, o)
                },
                we = a(64),
                Se = function(e) {
                    return Object(we.b)(te.a.UserSelectsLanguage, {
                        language: e
                    })
                },
                _e = function() {
                    return Object(we.b)(te.a.RecycleBinOnUndoClicked)
                },
                ke = function() {
                    return Object(we.b)(te.a.RecycleBinRecoverItemConfirmation)
                },
                ye = a(497),
                Ie = a(144),
                Ne = Object(c.a)((function(e) {
                    return {
                        sidebarContainer: {
                            width: "390px",
                            maxHeight: "758px",
                            background: L.d.WHITE,
                            boxShadow: L.d.PAPER_SHADOW,
                            borderRadius: "8px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            "& .MuiList-padding": {
                                padding: "0",
                                "& > div:first-child": {
                                    borderRadius: "8px 8px 0 0"
                                }
                            }
                        },
                        listItem: {
                            padding: "23px 24px 23px 32px"
                        },
                        active: {
                            backgroundColor: "".concat(L.d.LIGHTER_BLUE, " !important")
                        },
                        listItemAvatar: {
                            minWidth: "unset"
                        },
                        listIcon: {
                            width: "24px",
                            height: "24px"
                        },
                        listItemText: {
                            fontWeight: 500,
                            fontSize: "18px",
                            color: L.d.TEXT_GREY,
                            marginLeft: "24px"
                        },
                        deleteButton: {
                            maxWidth: "326px",
                            width: "100%",
                            height: "44px",
                            border: "1px solid ".concat(L.d.PRIMARY_COLOR),
                            boxSizing: "border-box",
                            borderRadius: "10px",
                            margin: "32px auto",
                            textTransform: "capitalize",
                            fontWeight: "bold",
                            fontSize: "16px",
                            color: L.d.PRIMARY_COLOR,
                            boxShadow: "none",
                            "&:hover": {
                                backgroundColor: "".concat(L.d.LIGHT_PRIMARY, " !important")
                            },
                            "&:disabled": {
                                borderColor: L.d.TEXT_DISABLED,
                                color: L.d.TEXT_DISABLED
                            }
                        }
                    }
                }));
            var Re = function(e) {
                    var t = e.onSettingsOptionChange,
                        a = Ne(),
                        c = Object(i.g)(),
                        l = Object(B.b)().t,
                        u = Object(Ee.b)(),
                        m = u.showToastMessage,
                        b = u.setToastMessage,
                        f = u.setToastActionHandler,
                        C = u.setShowViewButton,
                        h = u.setToastType,
                        x = Object(N.a)().setBook,
                        j = Object(R.a)().getCurrentBook,
                        w = j(),
                        S = Object(o.useState)(!1),
                        _ = Object(n.a)(S, 2),
                        k = _[0],
                        M = _[1],
                        W = function(e, t) {
                            M(!1), b(l("khata_deleted")), h(Ie.a.INFO), C(!t), m(), f((function() {
                                return function() {
                                    c.push({
                                        pathname: A.y,
                                        state: {
                                            selectedList: ye.a.KHATA
                                        }
                                    })
                                }
                            })), setTimeout((function() {
                                var a;
                                Object(G.b)(e);
                                var n = c.location.state;
                                c.location.pathname.includes(A.y) && n && Object.values(n).includes(ye.a.KHATA) || 0 !== (null === (a = j()) || void 0 === a ? void 0 : a.deleted) || t || c.push(A.f)
                            }), 2e3)
                        },
                        H = function() {
                            var e = Object(d.a)(s.a.mark((function e() {
                                var t, a, n;
                                return s.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t = Object(K.e)(), a = Object(K.d)(), n = (null === w || void 0 === w ? void 0 : w.book_id) || "", Object(we.b)(te.a.DeleteKhataConfirmClick), void 0 !== t && void 0 !== a) {
                                                e.next = 7;
                                                break
                                            }
                                            return c.replace(A.o), e.abrupt("return");
                                        case 7:
                                            I.a.deleteBook({
                                                user: t,
                                                deviceInfo: a,
                                                bookId: n
                                            }).then((function(e) {
                                                I.a.getBooks().then((function(t) {
                                                    var a = t.filter((function(e) {
                                                        return 1 !== e.deleted
                                                    }));
                                                    x(a.sort((function(e, t) {
                                                        return Number(e.created_at) - Number(t.created_at)
                                                    }))[0]), W(e, 0 === a.length)
                                                })).catch((function(e) {
                                                    Object(y.a)(e, {
                                                        tags: {
                                                            module: D.a.BOOK_LISTING
                                                        },
                                                        extra: {
                                                            worker: "GET_BOOKS"
                                                        }
                                                    })
                                                }))
                                            })).catch((function(e) {
                                                Object(y.a)(e, {
                                                    tags: {
                                                        module: D.a.DELETE_BOOK
                                                    }
                                                })
                                            }));
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Y = [{
                            id: 0,
                            label: l("language"),
                            icon: r.a.createElement(he, {
                                width: 24,
                                height: 24,
                                stroke: c.location.pathname === A.l || c.location.pathname === A.A ? L.d.MID_BLUE : L.d.TEXT_DISABLED
                            }),
                            disabled: !1,
                            url: A.A
                        }, {
                            id: 1,
                            label: l("currency"),
                            icon: r.a.createElement(je, {
                                width: 24,
                                height: 24,
                                stroke: c.location.pathname === A.i ? L.d.MID_BLUE : L.d.TEXT_DISABLED
                            }),
                            disabled: !1,
                            url: A.i
                        }, {
                            id: 2,
                            label: l("backup_title"),
                            icon: r.a.createElement(xe, {
                                width: 24,
                                height: 24,
                                stroke: c.location.pathname === A.e ? L.d.MID_BLUE : L.d.TEXT_DISABLED
                            }),
                            disabled: !1,
                            url: A.e
                        }, {
                            id: 3,
                            label: "Password Lock",
                            icon: r.a.createElement(ge, {
                                width: 24,
                                height: 24,
                                stroke: L.d.TEXT_DISABLED
                            }),
                            disabled: !0,
                            url: A.v
                        }, {
                            id: 4,
                            label: l("recycle_bin"),
                            icon: r.a.createElement(Ce, {
                                width: 24,
                                height: 24,
                                stroke: c.location.pathname === A.y ? L.d.MID_BLUE : L.d.TEXT_DISABLED
                            }),
                            disabled: !1,
                            url: A.y
                        }];
                    return r.a.createElement("div", {
                        className: a.sidebarContainer
                    }, r.a.createElement(T.a, null, Y.map((function(e) {
                        return r.a.createElement(E.a, {
                            key: e.id,
                            selected: e.url === c.location.pathname,
                            classes: {
                                root: a.listItem,
                                selected: a.active
                            },
                            onClick: function() {
                                return t(e.url)
                            },
                            disabled: e.disabled,
                            divider: !0,
                            button: !0
                        }, r.a.createElement(v.a, {
                            classes: {
                                root: a.listItemAvatar
                            }
                        }, e.icon), r.a.createElement(O.a, {
                            primary: r.a.createElement(g.a, {
                                className: a.listItemText
                            }, e.label)
                        }), r.a.createElement(v.a, {
                            classes: {
                                root: a.listItemAvatar
                            }
                        }, r.a.createElement(fe, {
                            width: 7,
                            height: 12,
                            stroke: "#9DABB6"
                        })))
                    }))), r.a.createElement(p.a, {
                        type: "button",
                        className: a.deleteButton,
                        startIcon: r.a.createElement(Ce, {
                            width: 17,
                            height: 20,
                            stroke: L.d.PRIMARY_COLOR
                        }),
                        onClick: function() {
                            M(!0), Object(we.b)(te.a.SettingsDeleteKhataClick)
                        }
                    }, l("delete_khata")), r.a.createElement(be, {
                        open: k,
                        onClose: function() {
                            return M(!1)
                        },
                        onDeleteClicked: H
                    }))
                },
                Te = a(620),
                Le = a(146),
                De = Object(c.a)((function(e) {
                    return {
                        root: {
                            width: "512px",
                            display: "flex",
                            flexDirection: "column"
                        },
                        titleWrapper: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "16px"
                        },
                        iconWrapper: {
                            display: "flex"
                        },
                        title: {
                            fontWeight: 500,
                            fontSize: "18px",
                            color: L.d.DARK_GREY,
                            marginLeft: "16px"
                        },
                        selectedLang: {
                            fontWeight: 500,
                            fontSize: "16px",
                            color: L.d.MID_BLUE
                        },
                        description: {
                            fontSize: "16px",
                            color: L.d.TEXT_DISABLED,
                            marginBottom: "24px"
                        }
                    }
                }));
            var Ae = function() {
                    var e = De(),
                        t = Object(B.b)().t;
                    return r.a.createElement("div", {
                        className: e.root
                    }, r.a.createElement("div", {
                        className: e.titleWrapper
                    }, r.a.createElement("div", {
                        className: e.iconWrapper
                    }, r.a.createElement(he, {
                        width: 24,
                        height: 24
                    }), r.a.createElement(g.a, {
                        className: e.title
                    }, t("language"))), r.a.createElement(g.a, {
                        className: e.selectedLang
                    }, function() {
                        var e = Object(z.a)(),
                            t = null === Le.b || void 0 === Le.b ? void 0 : Le.b.find((function(t) {
                                return t.value === e
                            }));
                        return (null === t || void 0 === t ? void 0 : t.text) || "English"
                    }())), r.a.createElement(g.a, {
                        className: e.description
                    }, t("more_indian_languages")), r.a.createElement(Te.a, {
                        fullWidth: !1,
                        label: t("language_placeholder"),
                        onLanguageChanged: Se,
                        from: Le.a.SETTINGS
                    }))
                },
                Me = a(42),
                Be = a(889),
                We = a(43),
                He = a(421),
                Ge = a(654),
                Ye = a.n(Ge),
                Pe = Object(c.a)((function(e) {
                    return {
                        paper: {
                            position: "relative",
                            width: "640px",
                            backgroundColor: L.d.WHITE,
                            borderRadius: "15px",
                            boxShadow: L.d.GREY_SHADOW,
                            padding: "32px ",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        closeIcon: {
                            position: "absolute",
                            top: "31px",
                            right: "31px",
                            color: L.d.GREY_BORDER,
                            cursor: "pointer"
                        },
                        icon: {
                            width: "87px",
                            height: "78px",
                            margin: "30px 0"
                        },
                        primaryText: {
                            fontSize: "28px",
                            fontWeight: "bold",
                            color: L.d.DARK_GREY,
                            marginBottom: "24px",
                            textAlign: "center"
                        },
                        secondaryText: {
                            fontSize: "16px",
                            color: L.d.TEXT_DISABLED
                        },
                        buttonsContainer: {
                            display: "flex"
                        },
                        button: {
                            padding: "15px 82px",
                            borderRadius: "10px",
                            boxShadow: "none",
                            fontSize: "24px",
                            fontWeight: "bold",
                            textTransform: "capitalize",
                            margin: "16px 24px"
                        },
                        primaryBtn: {
                            backgroundColor: L.d.SECONDARY_COLOR,
                            color: L.d.WHITE,
                            "&:hover": {
                                backgroundColor: L.d.MID_BLUE
                            }
                        },
                        secondaryBtn: {
                            backgroundColor: "rgba(236, 238, 241, 0.5)",
                            color: L.d.GREY_BORDER,
                            "&:hover": {
                                backgroundColor: L.d.LIGHT_BLUE,
                                color: L.d.SECONDARY_COLOR
                            }
                        }
                    }
                }));
            var Ue = Object(o.memo)((function(e) {
                    var t = e.open,
                        a = e.onClose,
                        n = e.primaryText,
                        o = e.secondaryText,
                        c = Pe(),
                        i = Object(B.b)().t;
                    return r.a.createElement(se.a, {
                        open: t,
                        onClose: a
                    }, r.a.createElement("div", {
                        style: L.j,
                        className: c.paper
                    }, r.a.createElement(le.a, {
                        className: c.closeIcon,
                        onClick: a
                    }), r.a.createElement("img", {
                        src: Ye.a,
                        alt: "icon",
                        className: c.icon
                    }), r.a.createElement(g.a, {
                        className: c.primaryText
                    }, n), r.a.createElement(g.a, {
                        className: c.secondaryText
                    }, o), r.a.createElement("div", {
                        className: c.buttonsContainer
                    }, r.a.createElement(p.a, {
                        className: "".concat(c.button, " ").concat(c.secondaryBtn),
                        onClick: a
                    }, i("cancel")), " ", r.a.createElement(p.a, {
                        className: "".concat(c.button, " ").concat(c.primaryBtn),
                        onClick: a
                    }, i("okay")))))
                })),
                ze = a(655),
                Ke = a.n(ze);
            var Ze = Object(o.memo)((function(e) {
                    var t = e.open,
                        a = e.onClose,
                        n = e.primaryText,
                        o = e.secondaryText,
                        c = e.onRestoreClick,
                        i = Pe(),
                        l = Object(B.b)().t;
                    return r.a.createElement(se.a, {
                        open: t,
                        onClose: a
                    }, r.a.createElement("div", {
                        style: L.j,
                        className: i.paper
                    }, r.a.createElement(le.a, {
                        className: i.closeIcon,
                        onClick: a
                    }), r.a.createElement("img", {
                        src: Ke.a,
                        alt: "icon",
                        className: i.icon
                    }), r.a.createElement(g.a, {
                        className: i.primaryText
                    }, n), r.a.createElement(g.a, {
                        className: i.secondaryText
                    }, o), r.a.createElement("div", {
                        className: i.buttonsContainer
                    }, r.a.createElement(p.a, {
                        className: "".concat(i.button, " ").concat(i.secondaryBtn),
                        onClick: a
                    }, l("cancel")), r.a.createElement(p.a, {
                        className: "".concat(i.button, " ").concat(i.primaryBtn),
                        onClick: c
                    }, l("restore")))))
                })),
                Fe = a(856),
                Ve = Object(c.a)((function(e) {
                    return {
                        root: {
                            color: L.d.GREY_BORDER,
                            padding: 0,
                            "&:hover": {
                                backgroundColor: "transparent !important"
                            },
                            "&.Mui-checked": {
                                color: "".concat(L.d.MID_BLUE, " !important")
                            }
                        }
                    }
                }));
            var qe = Object(o.memo)((function(e) {
                    var t = e.checked,
                        a = e.onChange,
                        n = e.className,
                        o = Ve();
                    return r.a.createElement(Fe.a, {
                        className: "".concat(o.root, " ").concat(n),
                        checked: t,
                        onChange: a
                    })
                })),
                Xe = a(422),
                Qe = a(428),
                $e = a(143),
                Je = a(75),
                et = a(656),
                tt = a.n(et),
                at = a(657),
                nt = a.n(at),
                ot = Object(c.a)((function(e) {
                    return {
                        card: {
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "16px 24px",
                            border: "1px solid ".concat(L.d.CARD_BORDER),
                            borderRadius: "8px",
                            margin: "8px 0"
                        },
                        cardLeftWrapper: {
                            display: "flex",
                            alignItems: "center"
                        },
                        cardRightWrapper: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        },
                        title: {
                            fontSize: "20px",
                            fontWeight: 700,
                            color: L.d.DARK_GREY,
                            lineHeight: "32px",
                            maxWidth: "120px",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap"
                        },
                        avatarWrapper: {
                            width: "80px",
                            height: "80px",
                            borderRadius: "50%",
                            marginRight: "16px",
                            backgroundColor: L.d.LIGHT_PRIMARY
                        },
                        entryAvatarWrapper: {
                            backgroundColor: L.d.LIGHT_BLUE,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        bookIconWrapper: {
                            width: "60px",
                            height: "60px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        entryIcon: {
                            width: "24px",
                            height: "32px"
                        },
                        khataIcon: {
                            width: "19px",
                            height: "26px"
                        },
                        avatar: {
                            width: "80px",
                            height: "80px",
                            marginRight: "16px",
                            backgroundColor: L.d.LIGHT_PRIMARY,
                            fontSize: "24px",
                            fontWeight: 700,
                            color: L.d.PRIMARY_COLOR
                        },
                        infoWrapper: {},
                        text: {
                            fontSize: "14px",
                            color: L.d.GREY_BORDER
                        },
                        bookName: {
                            maxWidth: "120px",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap"
                        },
                        amount: {
                            fontSize: "16px",
                            fontWeight: 500,
                            color: L.d.MID_BLUE,
                            marginLeft: "8px"
                        },
                        undoButton: {
                            padding: "12px 30px",
                            borderRadius: "10px",
                            backgroundColor: L.d.LIGHT_BLUE,
                            boxShadow: "none",
                            fontSize: "16px",
                            fontWeight: "bold",
                            textTransform: "capitalize",
                            color: L.d.SECONDARY_COLOR,
                            marginTop: "8px"
                        },
                        checkbox: {
                            marginRight: "16px"
                        },
                        selectedCard: {
                            position: "relative",
                            minHeight: "110px",
                            backgroundColor: "rgba(66, 136, 222, 0.03)",
                            "&::before": {
                                content: "url(".concat(nt.a, ")"),
                                height: "102px",
                                width: "3px",
                                position: "absolute",
                                left: "0px",
                                top: "50%",
                                transform: "translateY(-50%)"
                            }
                        }
                    }
                }));
            var rt = Object(o.memo)((function(e) {
                    var t = e.transaction,
                        a = e.isMultipleSelectionEnabled,
                        c = e.onSelect,
                        l = e.selectAll,
                        u = e.shouldUnSelectAll,
                        m = ot(),
                        b = Object(i.g)(),
                        f = Object(B.b)().t,
                        C = Object(M.b)().showError,
                        h = Object(Ee.b)(),
                        x = h.showToastMessage,
                        E = h.setToastMessage,
                        v = h.setToastActionHandler,
                        O = h.setShowViewButton,
                        j = h.setToastType,
                        w = Object(R.a)(),
                        S = w.getUserInfo,
                        k = w.getDeviceInfo,
                        T = w.getCurrentBook,
                        L = Object(N.a)().setBook,
                        W = Object(o.useState)(!1),
                        H = Object(n.a)(W, 2),
                        Y = H[0],
                        P = H[1],
                        U = Object(o.useState)(!1),
                        z = Object(n.a)(U, 2),
                        K = z[0],
                        Z = z[1],
                        F = Object(o.useState)(l || !1),
                        V = Object(n.a)(F, 2),
                        q = V[0],
                        X = V[1],
                        Q = Object(o.useState)({
                            primaryText: "",
                            secondaryText: ""
                        }),
                        $ = Object(n.a)(Q, 2),
                        J = $[0],
                        ee = $[1],
                        te = function() {
                            var e = Object(d.a)(s.a.mark((function e(t) {
                                var a, n;
                                return s.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object($e.c)(t.book_id);
                                        case 2:
                                            return a = e.sent, e.next = 5, Object($e.d)(t.customer_id);
                                        case 5:
                                            n = e.sent, a ? (Z(!0), ee({
                                                primaryText: f("khata_does_not_exist"),
                                                secondaryText: f("please_restore_khata_to_restore_entry")
                                            })) : n ? (Z(!0), ee({
                                                primaryText: f("customer_does_not_exist"),
                                                secondaryText: f("please_restore_customer_to_restore_entry")
                                            })) : (P(!0), ee({
                                                primaryText: f("restore_entry_confirmation"),
                                                secondaryText: f("this_may_change_balance")
                                            })), _e();
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        ae = Object(o.useCallback)((function() {
                            P(!1)
                        }), []),
                        ne = Object(o.useCallback)((function() {
                            Z(!1)
                        }), []),
                        oe = function() {
                            var e = Object(d.a)(s.a.mark((function e() {
                                var a, n;
                                return s.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ((null === (a = T()) || void 0 === a ? void 0 : a.book_id) !== t.book_id) {
                                                e.next = 5;
                                                break
                                            }
                                            b.push("/book/".concat(t.customer_id)), e.next = 9;
                                            break;
                                        case 5:
                                            return e.next = 7, Object(Je.a)(t.book_id);
                                        case 7:
                                            (n = e.sent) && (L(n), b.push("/book/".concat(t.customer_id)));
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return Object(o.useEffect)((function() {
                        X(!u && l)
                    }), [l, u]), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                        className: "".concat(m.card, " ").concat(q && m.selectedCard)
                    }, r.a.createElement("div", {
                        className: m.cardLeftWrapper
                    }, a && r.a.createElement(qe, {
                        checked: q,
                        className: m.checkbox,
                        onChange: function() {
                            c(!q, t), X(!q)
                        }
                    }), r.a.createElement("div", {
                        className: "".concat(m.avatarWrapper, " ").concat(m.entryAvatarWrapper)
                    }, r.a.createElement("img", {
                        src: tt.a,
                        className: m.entryIcon,
                        alt: "deletedEntry"
                    })), r.a.createElement("div", {
                        className: m.infoWrapper
                    }, r.a.createElement(_.a, {
                        text: null === t || void 0 === t ? void 0 : t.book_name,
                        className: "".concat(m.text, " ").concat(m.bookName),
                        arrow: !0,
                        placement: "top-start"
                    }), r.a.createElement(_.a, {
                        text: null === t || void 0 === t ? void 0 : t.customer_name,
                        className: m.title,
                        arrow: !0,
                        placement: "top-start"
                    }), r.a.createElement(g.a, {
                        className: m.text
                    }, t && (null === t || void 0 === t ? void 0 : t.amount) <= 0 ? "".concat(f("transactions_list_header_debit"), ":") : "".concat(f("transactions_list_header_credit"), ":"), r.a.createElement("span", {
                        className: m.amount
                    }, r.a.createElement(He.a, null), Object(Xe.a)(Math.abs((null === t || void 0 === t ? void 0 : t.amount) || 0)))))), r.a.createElement("div", {
                        className: m.cardRightWrapper
                    }, r.a.createElement(g.a, {
                        className: m.text
                    }, (null === t || void 0 === t ? void 0 : t.updated_at) && Object(Qe.d)(null === t || void 0 === t ? void 0 : t.updated_at)), t && !a && r.a.createElement(p.a, {
                        className: m.undoButton,
                        onClick: function() {
                            return te(t)
                        }
                    }, f("undo")))), r.a.createElement(Ze, {
                        open: Y,
                        onClose: ae,
                        primaryText: J.primaryText,
                        secondaryText: J.secondaryText,
                        onRestoreClick: function() {
                            var e = S(),
                                a = k();
                            void 0 !== e && void 0 !== a ? (I.a.restoreTransaction({
                                transactionId: null === t || void 0 === t ? void 0 : t.transaction_id,
                                user: e,
                                deviceInfo: a
                            }).then((function() {
                                ! function(e) {
                                    P(!1), E(f("entry_restored")), j(Ie.a.SUCCESS), O(!0), x(), v((function() {
                                        return oe
                                    })), setTimeout((function() {
                                        Object(G.g)(e)
                                    }), 2e3)
                                }(t)
                            })).catch((function(e) {
                                C(), Object(y.a)(e, {
                                    tags: {
                                        module: D.a.RESTORE_TRANSACTION
                                    }
                                })
                            })), ke()) : b.replace(A.o)
                        }
                    }), r.a.createElement(Ue, {
                        open: K,
                        onClose: ne,
                        primaryText: J.primaryText,
                        secondaryText: J.secondaryText
                    }))
                })),
                ct = a(658),
                it = a.n(ct),
                lt = a(659),
                st = a.n(lt),
                dt = Object(c.a)((function(e) {
                    return {
                        multipleSelectionWrapper: {
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "16px"
                        },
                        selectMultipleBtn: {
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            padding: "8px 12px",
                            border: "1px solid #DBE0E5",
                            borderRadius: "4px",
                            fontSize: "16px",
                            fontWeight: 500,
                            textTransform: "capitalize",
                            color: L.d.TEXT_DISABLED
                        },
                        selectMultipleIcon: {
                            width: "20px",
                            height: "20px",
                            marginRight: "8px"
                        },
                        checkboxWrapper: {
                            display: "flex",
                            alignItems: "center"
                        },
                        selectedCheckbox: {},
                        selectedCount: {
                            fontSize: "16px",
                            fontWeight: 500,
                            marginLeft: "7px",
                            color: L.d.GREY_BORDER
                        },
                        restoreBtn: {
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            padding: "6px 12px",
                            border: "1px solid ".concat(L.d.MID_BLUE),
                            borderRadius: "4px",
                            fontSize: "16px",
                            fontWeight: 500,
                            textTransform: "capitalize",
                            color: L.d.MID_BLUE
                        },
                        checkboxIcon: {
                            width: "21px",
                            height: "21px",
                            cursor: "pointer"
                        }
                    }
                }));
            var ut = Object(o.memo)((function(e) {
                var t = e.selectAll,
                    a = e.onSelect,
                    c = e.enableMultipleSelection,
                    i = e.handleMultipleSelectionClick,
                    l = e.selectedCount,
                    s = e.onUnSelect,
                    d = e.handleRestore,
                    u = dt(),
                    m = Object(B.b)().t,
                    b = Object(o.useState)(l),
                    f = Object(n.a)(b, 2),
                    C = f[0],
                    h = f[1];
                return Object(o.useEffect)((function() {
                    h(l)
                }), [l]), r.a.createElement("div", {
                    className: u.multipleSelectionWrapper
                }, c ? r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                    className: u.checkboxWrapper
                }, l > 0 && !t ? r.a.createElement("img", {
                    src: st.a,
                    alt: "selected",
                    onClick: s,
                    className: u.checkboxIcon
                }) : r.a.createElement(qe, {
                    checked: t,
                    onChange: a,
                    className: u.selectedCheckbox
                }), r.a.createElement(g.a, {
                    className: u.selectedCount
                }, m("selected", [C]))), r.a.createElement(p.a, {
                    className: u.restoreBtn,
                    onClick: d
                }, m("restore"))) : r.a.createElement(p.a, {
                    className: u.selectMultipleBtn,
                    onClick: i
                }, r.a.createElement("img", {
                    src: it.a,
                    alt: "select multiple",
                    className: u.selectMultipleIcon
                }), m("select_multiple")))
            }));
            var mt = Object(o.memo)((function(e) {
                var t = e.deletedTransactions,
                    a = Object(B.b)().t,
                    c = Object(R.a)(),
                    l = c.getUserInfo,
                    u = c.getDeviceInfo,
                    m = Object(M.b)().showError,
                    p = Object(i.g)(),
                    b = Object(Ee.b)(),
                    f = b.showToastMessage,
                    C = b.setToastMessage,
                    h = b.setShowViewButton,
                    x = b.setToastType,
                    g = Object(o.useState)(!1),
                    E = Object(n.a)(g, 2),
                    v = E[0],
                    O = E[1],
                    j = Object(o.useState)(!1),
                    w = Object(n.a)(j, 2),
                    S = w[0],
                    _ = w[1],
                    k = Object(o.useState)(!1),
                    N = Object(n.a)(k, 2),
                    T = N[0],
                    L = N[1],
                    W = Object(o.useState)(!1),
                    H = Object(n.a)(W, 2),
                    Y = H[0],
                    P = H[1],
                    U = Object(o.useState)(!1),
                    z = Object(n.a)(U, 2),
                    K = z[0],
                    Z = z[1],
                    F = Object(o.useState)([]),
                    V = Object(n.a)(F, 2),
                    q = V[0],
                    X = V[1],
                    Q = Object(o.useState)({
                        primaryText: "",
                        secondaryText: ""
                    }),
                    $ = Object(n.a)(Q, 2),
                    J = $[0],
                    ee = $[1],
                    te = q.length;
                Object(o.useEffect)((function() {
                    0 === q.length && S && _(!1)
                }), [q]);
                var ae = function(e, t) {
                        var a = q;
                        a = e ? [].concat(Object(Me.a)(a), [t]) : a.filter((function(e) {
                            return e.transaction_id !== t.transaction_id
                        })), X(a)
                    },
                    ne = function(e) {
                        e(!1)
                    },
                    oe = function() {
                        var e = Object(d.a)(s.a.mark((function e() {
                            var t, n, o, r, c;
                            return s.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        o = Object(We.a)(q), e.prev = 1, o.s();
                                    case 3:
                                        if ((r = o.n()).done) {
                                            e.next = 15;
                                            break
                                        }
                                        return c = r.value, e.next = 7, Object($e.c)(c.book_id);
                                    case 7:
                                        return t = e.sent, e.next = 10, Object($e.d)(c.customer_id);
                                    case 10:
                                        if (n = e.sent, !t && !n) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.abrupt("break", 15);
                                    case 13:
                                        e.next = 3;
                                        break;
                                    case 15:
                                        e.next = 20;
                                        break;
                                    case 17:
                                        e.prev = 17, e.t0 = e.catch(1), o.e(e.t0);
                                    case 20:
                                        return e.prev = 20, o.f(), e.finish(20);
                                    case 23:
                                        t ? (Z(!0), ee({
                                            primaryText: a("khatas_do_not_exist"),
                                            secondaryText: a("please_restore_khatas_to_restore_entries")
                                        })) : n ? (Z(!0), ee({
                                            primaryText: a("customers_do_not_exist"),
                                            secondaryText: a("please_restore_customers_to_restore_enties")
                                        })) : (P(!0), ee({
                                            primaryText: a("restore_entries_confirmation"),
                                            secondaryText: a("this_may_change_balance")
                                        }));
                                    case 24:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 17, 20, 23]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return r.a.createElement("div", null, r.a.createElement(ut, {
                    selectAll: S,
                    onSelect: function() {
                        S ? (X([]), _(!1)) : (X(t), _(!0), L(!1))
                    },
                    handleMultipleSelectionClick: function() {
                        O(!v)
                    },
                    enableMultipleSelection: v,
                    selectedCount: te,
                    onUnSelect: function() {
                        X([]), L(!0), _(!1)
                    },
                    handleRestore: oe
                }), t.map((function(e) {
                    return r.a.createElement(rt, {
                        key: e.transaction_id,
                        transaction: e,
                        isMultipleSelectionEnabled: v,
                        onSelect: ae,
                        selectAll: S,
                        shouldUnSelectAll: T
                    })
                })), r.a.createElement(Ze, {
                    open: Y,
                    onClose: function() {
                        return ne(P)
                    },
                    primaryText: J.primaryText,
                    secondaryText: J.secondaryText,
                    onRestoreClick: function() {
                        var e = l(),
                            t = u();
                        if (void 0 !== e && void 0 !== t) {
                            var n = q.map(function() {
                                var a = Object(d.a)(s.a.mark((function a(n) {
                                    return s.a.wrap((function(a) {
                                        for (;;) switch (a.prev = a.next) {
                                            case 0:
                                                return a.abrupt("return", I.a.restoreTransaction({
                                                    transactionId: null === n || void 0 === n ? void 0 : n.transaction_id,
                                                    user: e,
                                                    deviceInfo: t
                                                }));
                                            case 1:
                                            case "end":
                                                return a.stop()
                                        }
                                    }), a)
                                })));
                                return function(e) {
                                    return a.apply(this, arguments)
                                }
                            }());
                            Promise.all(n).then((function() {
                                var e;
                                e = q[0], C(a("entries_restored")), x(Ie.a.SUCCESS), f(), h(!1), P(!1), setTimeout((function() {
                                    Object(G.g)(e)
                                }), 2e3)
                            })).catch((function(e) {
                                m(), Object(y.a)(e, {
                                    tags: {
                                        module: D.a.RESTORE_TRANSACTION
                                    }
                                })
                            })), ke()
                        } else p.replace(A.o)
                    }
                }), r.a.createElement(Ue, {
                    open: K,
                    onClose: function() {
                        return ne(Z)
                    },
                    primaryText: J.primaryText,
                    secondaryText: J.secondaryText
                }))
            }));
            var pt = Object(o.memo)((function(e) {
                var t = e.customer,
                    a = e.isMultipleSelectionEnabled,
                    c = e.onSelect,
                    l = e.selectAll,
                    u = e.shouldUnSelectAll,
                    m = ot(),
                    f = Object(i.g)(),
                    C = Object(M.b)().showError,
                    h = Object(B.b)().t,
                    x = Object(Ee.b)(),
                    E = x.showToastMessage,
                    v = x.setToastMessage,
                    O = x.setToastActionHandler,
                    j = x.setShowViewButton,
                    w = x.setToastType,
                    S = Object(R.a)(),
                    T = S.getUserInfo,
                    L = S.getDeviceInfo,
                    W = S.getCurrentBook,
                    H = Object(N.a)().setBook,
                    Y = Object(o.useState)(!1),
                    P = Object(n.a)(Y, 2),
                    U = P[0],
                    z = P[1],
                    K = Object(o.useState)(!1),
                    Z = Object(n.a)(K, 2),
                    F = Z[0],
                    V = Z[1],
                    q = Object(o.useState)(l || !1),
                    X = Object(n.a)(q, 2),
                    Q = X[0],
                    $ = X[1],
                    J = Object(o.useState)({
                        primaryText: "",
                        secondaryText: ""
                    }),
                    ee = Object(n.a)(J, 2),
                    te = ee[0],
                    ae = ee[1],
                    ne = function() {
                        var e = Object(d.a)(s.a.mark((function e(t) {
                            return s.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Object($e.c)(t.book_id);
                                    case 2:
                                        e.sent ? (V(!0), ae({
                                            primaryText: h("khata_does_not_exist"),
                                            secondaryText: h("please_restore_khata_to_restore_customer")
                                        })) : (z(!0), ae({
                                            primaryText: h("restore_customer_confirmation"),
                                            secondaryText: h("this_may_change_balance")
                                        })), _e();
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    oe = Object(o.useCallback)((function() {
                        z(!1)
                    }), []),
                    re = Object(o.useCallback)((function() {
                        V(!1)
                    }), []),
                    ce = function() {
                        var e = Object(d.a)(s.a.mark((function e() {
                            var a, n;
                            return s.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ((null === (a = W()) || void 0 === a ? void 0 : a.book_id) !== t.book_id) {
                                            e.next = 5;
                                            break
                                        }
                                        f.push("/book"), e.next = 9;
                                        break;
                                    case 5:
                                        return e.next = 7, Object(Je.a)(t.book_id);
                                    case 7:
                                        (n = e.sent) && (H(n), f.push("/book"));
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return Object(o.useEffect)((function() {
                    $(!u && l)
                }), [l, u]), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                    className: "".concat(m.card, " ").concat(Q && m.selectedCard)
                }, r.a.createElement("div", {
                    className: m.cardLeftWrapper
                }, a && r.a.createElement(qe, {
                    checked: Q,
                    className: m.checkbox,
                    onChange: function() {
                        $(!Q), c(!Q, t)
                    }
                }), r.a.createElement(b.a, {
                    className: m.avatar,
                    src: (null === t || void 0 === t ? void 0 : t.image) || ""
                }, Object(k.a)((null === t || void 0 === t ? void 0 : t.name) || "")), r.a.createElement("div", {
                    className: m.infoWrapper
                }, r.a.createElement(_.a, {
                    text: null === t || void 0 === t ? void 0 : t.book_name,
                    className: "".concat(m.text, " ").concat(m.bookName),
                    arrow: !0,
                    placement: "top-start"
                }), r.a.createElement(_.a, {
                    text: null === t || void 0 === t ? void 0 : t.name,
                    className: m.title,
                    arrow: !0,
                    placement: "top-start"
                }))), r.a.createElement("div", {
                    className: m.cardRightWrapper
                }, r.a.createElement(g.a, {
                    className: m.text
                }, (null === t || void 0 === t ? void 0 : t.updated_at) && Object(Qe.d)(null === t || void 0 === t ? void 0 : t.updated_at)), t && !a && r.a.createElement(p.a, {
                    className: m.undoButton,
                    onClick: function() {
                        return ne(t)
                    }
                }, h("undo")))), r.a.createElement(Ze, {
                    open: U,
                    onClose: oe,
                    primaryText: te.primaryText,
                    secondaryText: te.secondaryText,
                    onRestoreClick: function() {
                        var e = T(),
                            a = L();
                        void 0 !== e && void 0 !== a ? (I.a.restoreCustomer({
                            customerId: t.customer_id,
                            user: e,
                            deviceInfo: a,
                            bookId: t.book_id
                        }).then((function() {
                            ! function(e) {
                                z(!1), v(h("customer_restored")), w(Ie.a.SUCCESS), j(!0), E(), O((function() {
                                    return ce
                                })), setTimeout((function() {
                                    Object(G.c)(e)
                                }), 2e3)
                            }(t)
                        })).catch((function(e) {
                            C(), Object(y.a)(e, {
                                tags: {
                                    module: D.a.RESTORE_CUSTOMER
                                }
                            })
                        })), ke()) : f.replace(A.o)
                    }
                }), r.a.createElement(Ue, {
                    open: F,
                    onClose: re,
                    primaryText: te.primaryText,
                    secondaryText: te.secondaryText
                }))
            }));
            var bt = Object(o.memo)((function(e) {
                    var t = e.deletedCustomers,
                        a = Object(B.b)().t,
                        c = Object(R.a)(),
                        l = c.getUserInfo,
                        u = c.getDeviceInfo,
                        m = Object(M.b)().showError,
                        p = Object(i.g)(),
                        b = Object(Ee.b)(),
                        f = b.showToastMessage,
                        C = b.setToastMessage,
                        h = b.setToastType,
                        x = Object(o.useState)(!1),
                        g = Object(n.a)(x, 2),
                        E = g[0],
                        v = g[1],
                        O = Object(o.useState)(!1),
                        j = Object(n.a)(O, 2),
                        w = j[0],
                        S = j[1],
                        _ = Object(o.useState)(!1),
                        k = Object(n.a)(_, 2),
                        N = k[0],
                        T = k[1],
                        L = Object(o.useState)(!1),
                        W = Object(n.a)(L, 2),
                        H = W[0],
                        Y = W[1],
                        P = Object(o.useState)(!1),
                        U = Object(n.a)(P, 2),
                        z = U[0],
                        K = U[1],
                        Z = Object(o.useState)([]),
                        F = Object(n.a)(Z, 2),
                        V = F[0],
                        q = F[1],
                        X = Object(o.useState)({
                            primaryText: "",
                            secondaryText: ""
                        }),
                        Q = Object(n.a)(X, 2),
                        $ = Q[0],
                        J = Q[1];
                    Object(o.useEffect)((function() {
                        0 === V.length && w && S(!1)
                    }), [V]);
                    var ee = function(e, t) {
                            var a = V;
                            a = e ? [].concat(Object(Me.a)(a), [t]) : a.filter((function(e) {
                                return e.customer_id !== t.customer_id
                            })), q(a)
                        },
                        te = function(e) {
                            e(!1)
                        },
                        ae = function() {
                            var e = Object(d.a)(s.a.mark((function e() {
                                var t, n, o, r;
                                return s.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            n = Object(We.a)(V), e.prev = 1, n.s();
                                        case 3:
                                            if ((o = n.n()).done) {
                                                e.next = 12;
                                                break
                                            }
                                            return r = o.value, e.next = 7, Object($e.c)(r.book_id);
                                        case 7:
                                            if (!(t = e.sent)) {
                                                e.next = 10;
                                                break
                                            }
                                            return e.abrupt("break", 12);
                                        case 10:
                                            e.next = 3;
                                            break;
                                        case 12:
                                            e.next = 17;
                                            break;
                                        case 14:
                                            e.prev = 14, e.t0 = e.catch(1), n.e(e.t0);
                                        case 17:
                                            return e.prev = 17, n.f(), e.finish(17);
                                        case 20:
                                            t ? (K(!0), J({
                                                primaryText: a("khatas_do_not_exist"),
                                                secondaryText: a("please_restore_khatas_to_restore_customers")
                                            })) : (Y(!0), J({
                                                primaryText: a("restore_customers_confirmation"),
                                                secondaryText: a("this_may_change_balance")
                                            }));
                                        case 21:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 14, 17, 20]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return r.a.createElement("div", null, r.a.createElement(ut, {
                        selectAll: w,
                        onSelect: function() {
                            w ? (q([]), S(!1)) : (q(t), S(!0), T(!1))
                        },
                        handleMultipleSelectionClick: function() {
                            v(!E)
                        },
                        enableMultipleSelection: E,
                        selectedCount: V.length,
                        onUnSelect: function() {
                            q([]), T(!0), S(!1)
                        },
                        handleRestore: ae
                    }), t.map((function(e) {
                        return r.a.createElement(pt, {
                            key: e.customer_id,
                            customer: e,
                            isMultipleSelectionEnabled: E,
                            onSelect: ee,
                            selectAll: w,
                            shouldUnSelectAll: N
                        })
                    })), r.a.createElement(Ze, {
                        open: H,
                        onClose: function() {
                            return te(Y)
                        },
                        primaryText: $.primaryText,
                        secondaryText: $.secondaryText,
                        onRestoreClick: function() {
                            var e = l(),
                                t = u();
                            if (void 0 !== e && void 0 !== t) {
                                var n = V.map(function() {
                                    var a = Object(d.a)(s.a.mark((function a(n) {
                                        return s.a.wrap((function(a) {
                                            for (;;) switch (a.prev = a.next) {
                                                case 0:
                                                    return a.abrupt("return", I.a.restoreCustomer({
                                                        customerId: n.customer_id,
                                                        user: e,
                                                        deviceInfo: t,
                                                        bookId: n.book_id
                                                    }));
                                                case 1:
                                                case "end":
                                                    return a.stop()
                                            }
                                        }), a)
                                    })));
                                    return function(e) {
                                        return a.apply(this, arguments)
                                    }
                                }());
                                Promise.all(n).then((function() {
                                    var e;
                                    e = V[0], Y(!1), C(a("customers_restored")), h(Ie.a.SUCCESS), f(), setTimeout((function() {
                                        Object(G.c)(e)
                                    }), 2e3)
                                })).catch((function(e) {
                                    m(), Object(y.a)(e, {
                                        tags: {
                                            module: D.a.RESTORE_CUSTOMER
                                        }
                                    })
                                })), ke()
                            } else p.replace(A.o)
                        }
                    }), r.a.createElement(Ue, {
                        open: z,
                        onClose: function() {
                            return te(K)
                        },
                        primaryText: $.primaryText,
                        secondaryText: $.secondaryText
                    }))
                })),
                ft = a(660),
                Ct = a.n(ft),
                ht = a(661);
            var xt = Object(o.memo)((function(e) {
                var t = e.book,
                    a = e.isMultipleSelectionEnabled,
                    c = e.onSelect,
                    l = e.selectAll,
                    u = e.shouldUnSelectAll,
                    m = ot(),
                    b = Object(i.g)(),
                    f = Object(M.b)().showError,
                    C = Object(B.b)().t,
                    h = Object(Ee.b)(),
                    x = h.showToastMessage,
                    E = h.setToastMessage,
                    v = h.setToastActionHandler,
                    O = h.setShowViewButton,
                    j = h.setToastType,
                    w = Object(R.a)(),
                    S = w.getUserInfo,
                    k = w.getDeviceInfo,
                    T = Object(N.a)().setBook,
                    L = Object(o.useState)(!1),
                    W = Object(n.a)(L, 2),
                    H = W[0],
                    Y = W[1],
                    P = Object(o.useState)(l || !1),
                    U = Object(n.a)(P, 2),
                    z = U[0],
                    K = U[1],
                    Z = Object(o.useState)({
                        primaryText: "",
                        secondaryText: ""
                    }),
                    F = Object(n.a)(Z, 2),
                    V = F[0],
                    q = F[1],
                    X = function() {
                        var e = Object(d.a)(s.a.mark((function e(t) {
                            return s.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        Y(!0), q({
                                            primaryText: C("restore_khata_confirmation"),
                                            secondaryText: C("this_may_change_balance")
                                        }), _e();
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Q = Object(o.useCallback)((function() {
                        Y(!1)
                    }), []);
                return Object(o.useEffect)((function() {
                    K(!u && l)
                }), [l, u]), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                    className: "".concat(m.card, " ").concat(z && m.selectedCard)
                }, r.a.createElement("div", {
                    className: m.cardLeftWrapper
                }, a && r.a.createElement(qe, {
                    checked: z,
                    className: m.checkbox,
                    onChange: function() {
                        K(!z), c(!z, t)
                    }
                }), r.a.createElement("div", {
                    className: "".concat(m.avatarWrapper, " ").concat(m.bookIconWrapper)
                }, r.a.createElement("img", {
                    src: Ct.a,
                    className: m.khataIcon,
                    alt: "deletedEntry"
                })), r.a.createElement("div", {
                    className: m.infoWrapper
                }, r.a.createElement(_.a, {
                    text: t.business_name,
                    className: m.title,
                    arrow: !0,
                    placement: "top-start"
                }), r.a.createElement(g.a, {
                    className: m.text
                }, (null === t || void 0 === t ? void 0 : t.updated_at) && Object(Qe.d)(null === t || void 0 === t ? void 0 : t.updated_at)))), r.a.createElement("div", {
                    className: m.cardRightWrapper
                }, !a && r.a.createElement(p.a, {
                    className: m.undoButton,
                    onClick: function() {
                        return X(t)
                    }
                }, C("undo")))), r.a.createElement(Ze, {
                    open: H,
                    onClose: Q,
                    primaryText: V.primaryText,
                    secondaryText: V.secondaryText,
                    onRestoreClick: function() {
                        var e = S(),
                            a = k();
                        void 0 !== e && void 0 !== a ? (I.a.restoreBook({
                            bookId: t.book_id,
                            user: e,
                            deviceInfo: a
                        }).then((function(e) {
                            T(e),
                                function(e) {
                                    Y(!1), E(C("khata_restored")), j(Ie.a.SUCCESS), O(!0), x(), v((function() {
                                        return function() {
                                            T(e), b.push("/book")
                                        }
                                    })), Object(ht.setTimeout)((function() {
                                        Object(G.a)(e)
                                    }), 2e3)
                                }(e)
                        })).catch((function(e) {
                            f(), Object(y.a)(e, {
                                tags: {
                                    module: D.a.RESTORE_BOOK
                                }
                            })
                        })), ke()) : b.replace(A.o)
                    }
                }))
            }));
            var gt = Object(o.memo)((function(e) {
                    var t = e.deletedBooks,
                        a = Object(B.b)().t,
                        c = Object(R.a)(),
                        l = c.getUserInfo,
                        u = c.getDeviceInfo,
                        m = Object(N.a)().setBook,
                        p = Object(M.b)().showError,
                        b = Object(i.g)(),
                        f = Object(Ee.b)(),
                        C = f.showToastMessage,
                        h = f.setToastMessage,
                        x = f.setShowViewButton,
                        g = f.setToastType,
                        E = Object(o.useState)(!1),
                        v = Object(n.a)(E, 2),
                        O = v[0],
                        j = v[1],
                        w = Object(o.useState)(!1),
                        S = Object(n.a)(w, 2),
                        _ = S[0],
                        k = S[1],
                        T = Object(o.useState)(!1),
                        L = Object(n.a)(T, 2),
                        W = L[0],
                        H = L[1],
                        Y = Object(o.useState)(!1),
                        P = Object(n.a)(Y, 2),
                        U = P[0],
                        z = P[1],
                        K = Object(o.useState)([]),
                        Z = Object(n.a)(K, 2),
                        F = Z[0],
                        V = Z[1],
                        q = Object(o.useState)({
                            primaryText: "",
                            secondaryText: ""
                        }),
                        X = Object(n.a)(q, 2),
                        Q = X[0],
                        $ = X[1];
                    Object(o.useEffect)((function() {
                        0 === F.length && _ && k(!1)
                    }), [F]);
                    var J = function(e, t) {
                        var a = F;
                        a = e ? [].concat(Object(Me.a)(a), [t]) : a.filter((function(e) {
                            return e.book_id !== t.book_id
                        })), V(a)
                    };
                    return r.a.createElement("div", null, r.a.createElement(ut, {
                        selectAll: _,
                        onSelect: function() {
                            _ ? (V([]), k(!1)) : (V(t), k(!0), H(!1))
                        },
                        handleMultipleSelectionClick: function() {
                            j(!O)
                        },
                        enableMultipleSelection: O,
                        selectedCount: F.length,
                        onUnSelect: function() {
                            V([]), H(!0), k(!1)
                        },
                        handleRestore: function() {
                            z(!0), $({
                                primaryText: a("restore_khata_confirmation"),
                                secondaryText: a("this_may_change_balance")
                            })
                        }
                    }), t.map((function(e) {
                        return r.a.createElement(xt, {
                            key: e.book_id,
                            book: e,
                            isMultipleSelectionEnabled: O,
                            onSelect: J,
                            selectAll: _,
                            shouldUnSelectAll: W
                        })
                    })), r.a.createElement(Ze, {
                        open: U,
                        onClose: function() {
                            z(!1)
                        },
                        primaryText: Q.primaryText,
                        secondaryText: Q.secondaryText,
                        onRestoreClick: function() {
                            var e = l(),
                                t = u();
                            if (void 0 !== e && void 0 !== t) {
                                var n = F.map(function() {
                                    var a = Object(d.a)(s.a.mark((function a(n) {
                                        return s.a.wrap((function(a) {
                                            for (;;) switch (a.prev = a.next) {
                                                case 0:
                                                    return a.abrupt("return", I.a.restoreBook({
                                                        bookId: n.book_id,
                                                        user: e,
                                                        deviceInfo: t
                                                    }));
                                                case 1:
                                                case "end":
                                                    return a.stop()
                                            }
                                        }), a)
                                    })));
                                    return function(e) {
                                        return a.apply(this, arguments)
                                    }
                                }());
                                Promise.all(n).then((function(e) {
                                    m(e[0]), z(!1), h(a("khatas_restored")), g(Ie.a.SUCCESS), x(!1), C(), setTimeout((function() {
                                        Object(G.a)()
                                    }), 2e3)
                                })).catch((function(e) {
                                    p(), Object(y.a)(e, {
                                        tags: {
                                            module: D.a.RESTORE_TRANSACTION
                                        }
                                    })
                                })), ke()
                            } else b.replace(A.o)
                        }
                    }))
                })),
                Et = a(436),
                vt = Object(c.a)((function(e) {
                    return {
                        root: {
                            width: "512px"
                        },
                        header: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "30px",
                            "@media only screen and (max-width: 1440px)": {
                                marginBottom: "15px"
                            }
                        },
                        binIcon: {
                            marginRight: "18px"
                        },
                        title: {
                            display: "flex",
                            fontSize: "18px",
                            fontWeight: 500
                        },
                        count: {
                            fontSize: "16px",
                            fontWeight: 500,
                            color: L.d.PRIMARY_COLOR
                        },
                        buttonsGroup: {
                            width: "100%",
                            height: "57px",
                            borderRadius: "6px",
                            backgroundColor: L.d.LIGHT_BLUE,
                            padding: "5px",
                            marginBottom: "16px",
                            display: "flex",
                            "& .MuiButtonGroup-groupedContainedHorizontal": {
                                borderRadius: "5px",
                                "&:not(:last-child)": {
                                    borderRight: "none"
                                }
                            }
                        },
                        selectListButton: {
                            width: "calc(100% / 3)",
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            maxWidth: "164px",
                            textTransform: "capitalize",
                            fontSize: "16px",
                            color: L.d.TEXT_DISABLED,
                            fontWeight: 500,
                            "&:hover": {
                                backgroundColor: L.d.WHITE,
                                color: L.d.MID_BLUE
                            }
                        },
                        activeListButton: {
                            backgroundColor: L.d.WHITE,
                            color: L.d.MID_BLUE
                        },
                        selectedListContainer: {
                            overflowY: "auto",
                            maxHeight: "490px",
                            "@media only screen and (max-width: 1920px)": {
                                maxHeight: "600px"
                            },
                            "@media only screen and (max-width: 1440px)": {
                                maxHeight: "490px"
                            },
                            "@media only screen and (max-width: 1280px)": {
                                maxHeight: "370px"
                            }
                        }
                    }
                }));
            var Ot = Object(o.memo)((function(e) {
                var t, a = e.location,
                    c = Object(i.h)(),
                    l = vt(),
                    s = Object(Et.a)().reRenderKey,
                    d = Object(B.b)().t,
                    u = Object(o.useState)([]),
                    m = Object(n.a)(u, 2),
                    b = m[0],
                    f = m[1],
                    C = Object(o.useState)([]),
                    h = Object(n.a)(C, 2),
                    x = h[0],
                    E = h[1],
                    v = Object(o.useState)([]),
                    O = Object(n.a)(v, 2),
                    j = O[0],
                    w = O[1],
                    S = Object(o.useState)(0),
                    _ = Object(n.a)(S, 2),
                    k = _[0],
                    y = _[1],
                    N = Object(o.useState)(0),
                    R = Object(n.a)(N, 2),
                    T = R[0],
                    D = R[1],
                    A = Object(o.useState)(0),
                    M = Object(n.a)(A, 2),
                    W = M[0],
                    H = M[1],
                    G = Object(o.useState)(!1),
                    Y = Object(n.a)(G, 2),
                    P = Y[0],
                    U = Y[1],
                    z = Object(o.useState)(!1),
                    K = Object(n.a)(z, 2),
                    Z = K[0],
                    F = K[1],
                    V = Object(o.useState)(!1),
                    q = Object(n.a)(V, 2),
                    X = q[0],
                    Q = q[1],
                    $ = Object(o.useState)((null === a || void 0 === a || null === (t = a.state) || void 0 === t ? void 0 : t.selectedList) || ye.a.ENTRIES),
                    J = Object(n.a)($, 2),
                    ee = J[0],
                    te = J[1],
                    ae = Object(o.useCallback)((function() {
                        U(!1), I.a.getDeletedCustomers().then((function(e) {
                            var t, a = e.data;
                            t = Object(Me.a)(a), f(t), y(t.length), U(!0)
                        }))
                    }), []),
                    ne = Object(o.useCallback)((function() {
                        F(!1), I.a.getDeletedTransactions().then((function(e) {
                            var t, a = e.data;
                            t = Object(Me.a)(a), E(t), D(t.length), F(!0)
                        }))
                    }), []),
                    oe = Object(o.useCallback)((function() {
                        Q(!1), I.a.getDeletedBooks().then((function(e) {
                            var t;
                            t = Object(Me.a)(e), w(t), H(t.length), Q(!0)
                        }))
                    }), []);
                Object(o.useEffect)((function() {
                    var e;
                    te((null === c || void 0 === c || null === (e = c.state) || void 0 === e ? void 0 : e.selectedList) || ye.a.ENTRIES)
                }), [c]), Object(o.useEffect)((function() {
                    ne(), ae(), oe()
                }), [s]);
                var re = function(e) {
                    te(e)
                };
                return P && Z && X ? r.a.createElement("div", {
                    className: l.root
                }, r.a.createElement("div", {
                    className: l.header
                }, r.a.createElement(g.a, {
                    className: l.title
                }, r.a.createElement(Ce, {
                    width: 20,
                    height: 24,
                    stroke: L.d.SECONDARY_COLOR,
                    className: l.binIcon
                }), d("recycle_bin")), r.a.createElement(g.a, {
                    className: l.count
                }, function() {
                    switch (ee) {
                        case ye.a.ENTRIES:
                            return "( ".concat(T, " ").concat(d("deleted_entries"), ")");
                        case ye.a.CUSTOMERS:
                            return "( ".concat(k, " ").concat(d("deleted_customers"), " )");
                        case ye.a.KHATA:
                            return "( ".concat(W, " ").concat(d("deleted_khata"), ")");
                        default:
                            return ""
                    }
                }())), r.a.createElement(Be.a, {
                    className: l.buttonsGroup,
                    disableElevation: !0,
                    variant: "contained"
                }, r.a.createElement(p.a, {
                    className: "".concat(l.selectListButton, " ").concat(ee === ye.a.ENTRIES ? l.activeListButton : ""),
                    onClick: function() {
                        return re(ye.a.ENTRIES)
                    }
                }, d("entries")), r.a.createElement(p.a, {
                    className: "".concat(l.selectListButton, " ").concat(ee === ye.a.CUSTOMERS ? l.activeListButton : ""),
                    onClick: function() {
                        return re(ye.a.CUSTOMERS)
                    }
                }, d("customers", [""])), r.a.createElement(p.a, {
                    className: "".concat(l.selectListButton, " ").concat(ee === ye.a.KHATA ? l.activeListButton : ""),
                    onClick: function() {
                        return re(ye.a.KHATA)
                    }
                }, d("khata"))), r.a.createElement("div", {
                    className: l.selectedListContainer
                }, function() {
                    switch (ee) {
                        case ye.a.ENTRIES:
                            return r.a.createElement(mt, {
                                deletedTransactions: x
                            });
                        case ye.a.CUSTOMERS:
                            return r.a.createElement(bt, {
                                deletedCustomers: b
                            });
                        case ye.a.KHATA:
                            return r.a.createElement(gt, {
                                deletedBooks: j
                            });
                        default:
                            return
                    }
                }())) : r.a.createElement(ce.a, null)
            }));
            var jt = Object(o.memo)((function(e) {
                    var t = e.className,
                        a = e.height,
                        n = e.width;
                    return r.a.createElement("svg", {
                        className: t || "",
                        width: n,
                        height: a,
                        viewBox: "0 0 66 66",
                        fill: "none"
                    }, r.a.createElement("path", {
                        d: "M63.9908 37.3173C57.0571 26.7005 57.7942 15.8178 54.452 10.701C51.1098 5.58416 41.1493 -3.23784 17.6148 12.1347C-5.91969 27.5072 0.0661475 44.218 3.74381 49.8445C20.9551 76.1931 76.2723 56.12 63.9908 37.3173Z",
                        fill: "#F0F4FA"
                    }), r.a.createElement("path", {
                        d: "M33 53.625C44.3909 53.625 53.625 44.3909 53.625 33C53.625 21.6091 44.3909 12.375 33 12.375C21.6091 12.375 12.375 21.6091 12.375 33C12.375 44.3909 21.6091 53.625 33 53.625Z",
                        fill: "#4DC380"
                    }), r.a.createElement("path", {
                        d: "M16.5 33C16.5 22.3062 24.64 13.5135 35.0625 12.4795C34.3842 12.4117 33.6967 12.375 33 12.375C21.6095 12.375 12.375 21.6095 12.375 33C12.375 44.3905 21.6095 53.625 33 53.625C33.6967 53.625 34.3842 53.5883 35.0625 53.5205C24.64 52.4865 16.5 43.6938 16.5 33Z",
                        fill: "#309E60"
                    }), r.a.createElement("path", {
                        d: "M51.3335 57.75C49.8173 57.75 48.5835 56.5162 48.5835 55C48.5835 53.4838 49.8173 52.25 51.3335 52.25C52.8497 52.25 54.0835 53.4838 54.0835 55C54.0835 56.5162 52.8497 57.75 51.3335 57.75ZM51.3335 54.0833C50.8275 54.0833 50.4168 54.494 50.4168 55C50.4168 55.506 50.8275 55.9167 51.3335 55.9167C51.8395 55.9167 52.2502 55.506 52.2502 55C52.2502 54.494 51.8395 54.0833 51.3335 54.0833Z",
                        fill: "#A4AFC1"
                    }), r.a.createElement("path", {
                        d: "M33 55C20.8688 55 11 45.1312 11 33C11 20.8688 20.8688 11 33 11C45.1312 11 55 20.8688 55 33C55 45.1312 45.1312 55 33 55ZM33 13.75C22.385 13.75 13.75 22.385 13.75 33C13.75 43.615 22.385 52.25 33 52.25C43.615 52.25 52.25 43.615 52.25 33C52.25 22.385 43.615 13.75 33 13.75Z",
                        fill: "black"
                    }), r.a.createElement("path", {
                        d: "M30.9376 40.3335C30.5856 40.3335 30.2336 40.1997 29.9659 39.9302L24.0076 33.9719L25.9527 32.0267L30.9394 37.0134L41.8844 26.0684L43.8296 28.0135L31.9129 39.9302C31.6416 40.1997 31.2896 40.3335 30.9376 40.3335Z",
                        fill: "black"
                    }))
                })),
                wt = a(527),
                St = Object(c.a)((function() {
                    return {
                        root: {
                            maxWidth: "512px",
                            display: "flex",
                            flexDirection: "column",
                            margin: "0 auto"
                        },
                        titleWrapper: {
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "16px"
                        },
                        title: {
                            fontWeight: 500,
                            fontSize: "18px",
                            color: L.d.DARK_GREY,
                            marginLeft: "16px"
                        },
                        contentWrapper: {
                            textAlign: "center",
                            fontSize: "16px",
                            marginBottom: "24px"
                        },
                        contentHeader: {
                            fontSize: "16px",
                            color: L.d.DARK_GREY,
                            fontWeight: 500,
                            marginTop: "11.5px",
                            lineHeight: "24px",
                            letterSpacing: "0.2px"
                        },
                        contentText: {
                            fontSize: "16px",
                            color: L.d.TEXT_DISABLED,
                            fontWeight: 400,
                            marginTop: "24px",
                            lineHeight: "24px",
                            letterSpacing: "0.2px"
                        },
                        contentTextLabel: {
                            marginTop: "32px"
                        },
                        timeFromNow: {
                            marginTop: "8px",
                            color: L.d.DARK_GREY,
                            fontWeight: 500
                        },
                        updatedAt: {
                            fontSize: "14px",
                            color: L.d.GREY_BORDER,
                            fontWeight: 400,
                            marginTop: "8px",
                            lineHeight: "32px",
                            letterSpacing: "0.2px"
                        }
                    }
                }));
            var _t = function() {
                    var e = St(),
                        t = Object(o.useState)(""),
                        a = Object(n.a)(t, 2),
                        c = a[0],
                        i = a[1],
                        l = Object(R.a)().getCurrentBook,
                        u = Object(z.a)(),
                        m = Object(B.b)().t;
                    return Object(o.useEffect)((function() {
                        (function() {
                            var e = Object(d.a)(s.a.mark((function e() {
                                var t, a, n, o;
                                return s.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return a = l(), e.next = 3, Object(wt.a)();
                                        case 3:
                                            n = e.sent, (o = null === (t = n.find((function(e) {
                                                return e.book_id === (null === a || void 0 === a ? void 0 : a.book_id)
                                            }))) || void 0 === t ? void 0 : t.lastSyncAt) && i(o);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        })()()
                    }), [l]), r.a.createElement("div", {
                        className: e.root
                    }, r.a.createElement("div", {
                        className: e.titleWrapper
                    }, r.a.createElement(xe, {
                        width: 24,
                        height: 24
                    }), r.a.createElement(g.a, {
                        className: e.title
                    }, m("backup_title"))), r.a.createElement("div", null, r.a.createElement("div", {
                        className: e.contentWrapper
                    }, r.a.createElement(jt, {
                        width: 66,
                        height: 66
                    }), r.a.createElement(g.a, {
                        className: e.contentHeader
                    }, m("backup_msg")), r.a.createElement(g.a, {
                        className: e.contentText
                    }, "".concat(m("backup_text1"), " ").concat(m("backup_text2"))), r.a.createElement(g.a, {
                        className: "".concat(e.contentText, " ").concat(e.contentTextLabel)
                    }, "".concat(m("backup_label"), ":")), r.a.createElement(g.a, {
                        className: "".concat(e.contentText, " ").concat(e.timeFromNow)
                    }, c ? Object(Qe.k)(String(c), u) : null), r.a.createElement(g.a, {
                        className: "".concat(e.updatedAt)
                    }, c ? Object(Qe.d)(String(c)) : null))))
                },
                kt = a(171),
                yt = a(526),
                It = Object(c.a)((function(e) {
                    return Object(yt.a)({
                        root: {
                            backgroundColor: L.d.WHITE,
                            "& .MuiAutocomplete-inputRoot": {
                                "& .MuiAutocomplete-endAdornment": {
                                    top: "unset",
                                    right: "25px"
                                }
                            },
                            "& .MuiIconButton-root:hover": {
                                backgroundColor: "transparent"
                            }
                        },
                        dropdownInput: {
                            "& ::placeholder": {
                                opacity: 1,
                                color: L.d.TEXT_GREY,
                                fontWeight: 500,
                                fontSize: "16px"
                            },
                            "& .MuiOutlinedInput-input": {
                                height: "37px",
                                fontSize: "16px"
                            },
                            "& .MuiOutlinedInput-root": {
                                "&:hover": {
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        border: "".concat(L.b.INPUT_HOVER_BORDER, " !important"),
                                        boxShadow: "none"
                                    }
                                }
                            },
                            "& .Mui-focused": {
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: L.d.SECONDARY2,
                                    boxShadow: "none"
                                }
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: L.d.GREY_BORDER,
                                boxSizing: "border-box",
                                borderRadius: "8px"
                            }
                        },
                        popupIcon: {
                            width: "10px",
                            height: "5px",
                            transform: "rotate(180deg)"
                        },
                        dropdownListPaper: {
                            width: "100%",
                            maxHeight: "300px",
                            boxShadow: L.d.GREY_BORDER,
                            borderRadius: "8px",
                            marginTop: "8px",
                            backgroundColor: L.d.WHITE
                        },
                        listBox: {
                            height: "300px",
                            paddingTop: 0,
                            width: "100%",
                            maxHeight: "170",
                            padding: "8px",
                            boxShadow: L.d.GREY_BORDER,
                            "& .MuiAutocomplete-option": {
                                padding: "8px",
                                borderRadius: "4px"
                            },
                            '& .MuiAutocomplete-option[data-focus="true"]': {
                                backgroundColor: L.d.LIGHT_BLUE
                            },
                            '& .MuiAutocomplete-option[aria-selected="true"]': {
                                backgroundColor: "transparent",
                                "& $label": {
                                    color: L.d.WHITE,
                                    backgroundColor: L.d.MID_BLUE
                                },
                                "& $labelText": {
                                    color: L.d.MID_BLUE
                                }
                            }
                        },
                        dropdownOption: {
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: " 0",
                            position: "relative"
                        },
                        optionLeftSide: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start"
                        },
                        labelText: {
                            marginLeft: "16px",
                            fontSize: "14px"
                        },
                        inputSearch: {
                            width: "100%",
                            padding: "16px 8px"
                        }
                    })
                })),
                Nt = a(368),
                Rt = a(367),
                Tt = a(115),
                Lt = a(564),
                Dt = a.n(Lt),
                At = a(479),
                Mt = a(56),
                Bt = a(161),
                Wt = ["children"];
            var Ht = function(e) {
                    var t = e.fullWidth,
                        a = It(),
                        n = Object(Tt.a)(),
                        o = Object(Oe.b)().updateCurrency;
                    return r.a.createElement(Nt.a, {
                        id: "drop-down",
                        options: n,
                        fullWidth: t,
                        forcePopupIcon: !0,
                        closeIcon: !1,
                        openOnFocus: !0,
                        selectOnFocus: !1,
                        getOptionLabel: function(e) {
                            return e.label
                        },
                        value: Object(Bt.c)(),
                        popupIcon: r.a.createElement(At.a, {
                            className: a.popupIcon
                        }),
                        className: a.root,
                        classes: {
                            listbox: a.listBox,
                            groupUl: a.dropdownOption,
                            popper: a.dropdownOption
                        },
                        onChange: function(e, t) {
                            var a;
                            o((null === t || void 0 === t ? void 0 : t.id) || Mt.a), a = (null === t || void 0 === t ? void 0 : t.id) || Mt.a, Object(we.b)(te.a.UserSelectsCurrency, {
                                currency: a
                            })
                        },
                        PaperComponent: function(e) {
                            var t = e.children,
                                n = Object(kt.a)(e, Wt);
                            return r.a.createElement(j.a, Object.assign({}, n, {
                                className: a.dropdownListPaper
                            }), t)
                        },
                        renderOption: function(e, t) {
                            var n = t.selected;
                            return r.a.createElement("div", {
                                className: a.dropdownOption
                            }, r.a.createElement("div", {
                                className: a.optionLeftSide
                            }, r.a.createElement("span", {
                                className: a.labelText
                            }, e.label)), n && r.a.createElement("img", {
                                src: Dt.a,
                                alt: "tick"
                            }))
                        },
                        renderInput: function(e) {
                            return r.a.createElement(Rt.a, Object.assign({
                                onClick: function() {
                                    Object(we.b)(te.a.CurrencyDropDownClick)
                                }
                            }, e, {
                                className: a.dropdownInput,
                                id: "text",
                                placeholder: "Change Currency",
                                variant: "outlined",
                                inputProps: Object(ve.a)(Object(ve.a)({}, e.inputProps), {}, {
                                    autoComplete: "new-password",
                                    readOnly: !1
                                })
                            }))
                        }
                    })
                },
                Gt = Object(c.a)((function(e) {
                    return {
                        root: {
                            width: "100%",
                            maxWidth: "512px",
                            display: "flex",
                            flexDirection: "column",
                            margin: "0 auto"
                        },
                        titleWrapper: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "16px"
                        },
                        iconWrapper: {
                            display: "flex"
                        },
                        title: {
                            fontWeight: 500,
                            fontSize: "18px",
                            color: L.d.DARK_GREY,
                            marginLeft: "16px"
                        },
                        selectedLang: {
                            fontWeight: 500,
                            fontSize: "16px",
                            color: L.d.MID_BLUE
                        }
                    }
                }));
            var Yt = function() {
                var e = Gt(),
                    t = Object(B.b)().t,
                    a = Object(Oe.b)(),
                    n = a.currency,
                    o = a.currencyCountry;
                return r.a.createElement("div", {
                    className: e.root
                }, r.a.createElement("div", {
                    className: e.titleWrapper
                }, r.a.createElement("div", {
                    className: e.iconWrapper
                }, r.a.createElement(je, {
                    width: 24,
                    height: 24,
                    stroke: L.d.MID_BLUE
                }), r.a.createElement(g.a, {
                    className: e.title
                }, t("currency"))), r.a.createElement(g.a, {
                    className: e.selectedLang
                }, o, " Currency: ", n)), r.a.createElement(Ht, {
                    fullWidth: !1
                }))
            };
            var Pt = Object(o.memo)((function() {
                    return r.a.createElement(o.Suspense, {
                        fallback: r.a.createElement(ce.a, null)
                    }, r.a.createElement(i.d, null, r.a.createElement(i.b, {
                        path: A.A,
                        exact: !0,
                        component: Ae
                    }), r.a.createElement(i.b, {
                        path: A.y,
                        exact: !0,
                        component: Ot
                    }), r.a.createElement(i.b, {
                        path: A.i,
                        exact: !0,
                        component: Yt
                    }), r.a.createElement(i.b, {
                        path: A.e,
                        exact: !0,
                        component: _t
                    })))
                })),
                Ut = Object(c.a)((function(e) {
                    return {
                        root: {
                            fontSize: "".concat(L.k["16px"], "rem"),
                            width: "100%",
                            height: "100%",
                            padding: "24px",
                            flexGrow: 1,
                            display: "flex",
                            flexDirection: "column"
                        },
                        settingsTitle: {
                            fontWeight: "bold",
                            fontSize: "".concat(L.k["20px"], "rem"),
                            color: L.d.TEXT_GREY,
                            marginBottom: "".concat(L.k["24px"], "rem")
                        },
                        settingsGrid: {
                            flexGrow: 1,
                            display: "flex",
                            "@media only screen and (max-width: 1170px)": {
                                flexDirection: "column"
                            }
                        },
                        mainContent: {
                            background: L.d.WHITE,
                            boxShadow: L.d.PAPER_SHADOW,
                            borderRadius: "8px",
                            marginLeft: "".concat(L.k["24px"], "rem"),
                            flexGrow: 1,
                            padding: "48px 24px 24px 24px",
                            display: "flex",
                            justifyContent: "center",
                            "@media only screen and (max-width: 1440px)": {
                                padding: "24px"
                            },
                            "@media only screen and (max-width: 1170px)": {
                                marginTop: "16px"
                            }
                        },
                        loader: {
                            width: "100%",
                            backgroundColor: L.d.WHITE
                        }
                    }
                }));
            var zt = Object(o.memo)((function() {
                    var e = Object(B.b)().t,
                        t = Ut(),
                        a = Object(i.g)();
                    return r.a.createElement("div", {
                        className: t.root
                    }, r.a.createElement(g.a, {
                        className: t.settingsTitle
                    }, e("settings")), r.a.createElement("div", {
                        className: t.settingsGrid
                    }, r.a.createElement(Re, {
                        onSettingsOptionChange: function(t) {
                            switch (a.push(t), t) {
                                case A.y:
                                    Object(we.b)(te.a.SettingsRecycleBinClick);
                                    break;
                                case A.e:
                                    Object(we.b)(te.a.SettingsBackupInformationClick);
                                    break;
                                case A.i:
                                    Object(we.b)(te.a.SettingCurrencyClick);
                                    break;
                                default:
                                    return r.a.createElement("div", null, e("coming_soon"))
                            }
                        }
                    }), r.a.createElement("div", {
                        className: t.mainContent
                    }, r.a.createElement(Pt, null))))
                })),
                Kt = a(663),
                Zt = a.n(Kt),
                Ft = a(664),
                Vt = a.n(Ft),
                qt = a(665),
                Xt = a.n(qt),
                Qt = function() {
                    return Object(we.b)(te.a.BookProfileAboutKhatabookClick)
                },
                $t = function() {
                    return Object(we.b)(te.a.BookProfilePrivacyPolicyClick)
                },
                Jt = function() {
                    return Object(we.b)(te.a.BookProfileTermsAndConditionsClick)
                },
                ea = Object(c.a)((function(e) {
                    return {
                        root: {
                            width: "100%",
                            height: "100%",
                            flexGrow: 1,
                            padding: "32px 24px 24px 24px",
                            display: "flex",
                            flexDirection: "column"
                        },
                        title: {
                            fontWeight: 500,
                            fontSize: "18px",
                            color: L.d.TEXT_GREY,
                            marginBottom: "24px"
                        },
                        listContainer: {
                            width: "100%",
                            height: "100%",
                            backgroundColor: L.d.WHITE,
                            borderRadius: "8px",
                            boxShadow: L.d.PAPER_SHADOW,
                            flexGrow: 1,
                            padding: "77px 24px 24px 24px"
                        },
                        list: {
                            maxWidth: "415px",
                            background: L.d.WHITE,
                            border: "0.5px solid ".concat(L.d.GREY_BORDER),
                            borderRadius: "12px",
                            margin: "auto",
                            padding: "0 32px"
                        },
                        listItem: {
                            borderBottom: "1px solid ".concat(L.d.GREY_BORDER),
                            padding: "32px 0",
                            display: "flex",
                            justifyContent: "space-between",
                            "&:last-child": {
                                borderBottom: "none"
                            }
                        },
                        listItemLink: {
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            textDecoration: "none"
                        },
                        itemLeftSide: {
                            display: "flex"
                        },
                        listItemAvatar: {
                            minWidth: "unset"
                        },
                        listIcon: {
                            marginRight: "24px"
                        },
                        listItemTitle: {
                            fontWeight: 500,
                            fontSize: "18px",
                            color: L.d.TEXT_GREY
                        },
                        listItemText: {
                            fontSize: "14px",
                            color: L.d.TEXT_DISABLED
                        }
                    }
                }));
            var ta = function() {
                    var e = ea(),
                        t = Object(B.b)().t,
                        a = [{
                            id: 0,
                            title: t("about"),
                            description: t("know_more"),
                            icon: Zt.a,
                            link: "https://khatabook.com/about",
                            onClick: Qt
                        }, {
                            id: 1,
                            title: t("terms"),
                            description: t("know_terms"),
                            icon: Vt.a,
                            link: "https://khatabook.com/terms",
                            onClick: Jt
                        }, {
                            id: 2,
                            title: t("privacy_policy"),
                            description: t("know_privacy_policy"),
                            icon: Xt.a,
                            link: "https://khatabook.com/privacy",
                            onClick: $t
                        }];
                    return r.a.createElement("div", {
                        className: e.root
                    }, r.a.createElement(g.a, {
                        className: e.title
                    }, t("about_us")), r.a.createElement("div", {
                        className: e.listContainer
                    }, r.a.createElement(T.a, {
                        className: e.list
                    }, a.map((function(t) {
                        return r.a.createElement(E.a, {
                            key: t.id,
                            classes: {
                                root: e.listItem
                            }
                        }, r.a.createElement("a", {
                            href: t.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: e.listItemLink,
                            onClick: t.onClick
                        }, r.a.createElement("div", {
                            className: e.itemLeftSide
                        }, r.a.createElement(v.a, {
                            classes: {
                                root: e.listItemAvatar
                            }
                        }, r.a.createElement("img", {
                            src: t.icon,
                            alt: t.title,
                            className: e.listIcon
                        })), r.a.createElement("div", null, r.a.createElement(O.a, {
                            primary: r.a.createElement(g.a, {
                                className: e.listItemTitle
                            }, t.title)
                        }), r.a.createElement(O.a, {
                            primary: r.a.createElement(g.a, {
                                className: e.listItemText
                            }, t.description)
                        }))), r.a.createElement(v.a, {
                            classes: {
                                root: e.listItemAvatar
                            }
                        }, r.a.createElement(fe, {
                            width: 7,
                            height: 12,
                            stroke: "#186FD9"
                        }))))
                    })))))
                },
                aa = a(666),
                na = a.n(aa),
                oa = Object(c.a)((function(e) {
                    return {
                        root: {
                            width: "100%",
                            height: "100%",
                            backgroundColor: L.d.WHITE,
                            borderRadius: "8px",
                            boxShadow: L.d.PAPER_SHADOW,
                            flexGrow: 1,
                            padding: "77px 24px 24px 24px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        comingSoonImg: {
                            width: "164px",
                            height: "145px",
                            marginBottom: "27px"
                        },
                        title: {
                            fontWeight: "bold",
                            fontSize: "24px",
                            color: L.d.DARK_GREY
                        },
                        text: {
                            fontSize: "16px",
                            color: L.d.TEXT_DISABLED,
                            margin: "16px 0"
                        },
                        homeLink: {
                            fontWeight: "bold",
                            fontSize: "16px",
                            color: "#4288DE",
                            border: "1px solid #4288DE",
                            padding: "12px 60px",
                            borderRadius: "20px",
                            textDecoration: "none"
                        }
                    }
                }));
            var ra = function() {
                    var e = oa(),
                        t = Object(B.b)().t;
                    return r.a.createElement("div", {
                        className: e.root
                    }, r.a.createElement("img", {
                        src: na.a,
                        alt: "comingSoon",
                        className: e.comingSoonImg
                    }), r.a.createElement(g.a, {
                        className: e.title
                    }, t("coming_soon")), r.a.createElement(g.a, {
                        className: e.text
                    }, t("work_hard")), r.a.createElement(u.b, {
                        className: e.homeLink,
                        to: A.f
                    }, t("back_to_home")))
                },
                ca = Object(c.a)((function(e) {
                    return {
                        root: {
                            width: "100%",
                            height: "100%",
                            flexGrow: 1,
                            padding: "32px 24px 24px 24px",
                            display: "flex",
                            flexDirection: "column"
                        },
                        title: {
                            fontWeight: 500,
                            fontSize: "18px",
                            color: L.d.TEXT_GREY,
                            marginBottom: "24px"
                        }
                    }
                }));
            var ia = function() {
                    var e = ca(),
                        t = Object(B.b)().t;
                    return r.a.createElement("div", {
                        className: e.root
                    }, r.a.createElement(g.a, {
                        className: e.title
                    }, t("reports")), r.a.createElement(ra, null))
                },
                la = a(408),
                sa = a(890),
                da = a(297),
                ua = a(565),
                ma = a(566),
                pa = a(480),
                ba = a(674),
                fa = a.n(ba),
                Ca = Object(c.a)((function(e) {
                    return {
                        paper: {
                            position: "absolute",
                            width: "640px",
                            height: "422px",
                            backgroundColor: L.d.WHITE,
                            borderRadius: "15px",
                            boxShadow: L.d.GREY_SHADOW,
                            padding: e.spacing(2, 4, 3),
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        saveIcon: {
                            width: "89px",
                            height: "80px",
                            marginBottom: "45px"
                        },
                        title: {
                            fontWeight: "bold",
                            fontSize: "32px",
                            color: L.d.DARK_GREY,
                            marginBottom: "24px"
                        },
                        confirmationText: {
                            fontSize: "16px",
                            color: L.d.TEXT_DISABLED,
                            marginBottom: "32px"
                        },
                        buttonContainer: {
                            display: "flex"
                        },
                        button: {
                            width: "240px",
                            height: "64px",
                            borderRadius: "10px",
                            textTransform: "capitalize",
                            fontSize: "24px",
                            fontWeight: "bold"
                        },
                        cancelButton: {
                            color: L.d.GREY_BORDER,
                            backgroundColor: "#ECEEF1",
                            marginRight: "32px"
                        },
                        saveButton: {
                            color: L.d.WHITE,
                            backgroundColor: L.d.SECONDARY_COLOR,
                            "&:disabled": {
                                cursor: "default",
                                color: L.d.TEXT_DISABLED,
                                backgroundColor: "#ECEEF1"
                            }
                        },
                        closeIcon: {
                            position: "absolute",
                            top: "31px",
                            right: "31px",
                            color: "#C9C9C9",
                            cursor: "pointer"
                        }
                    }
                }));
            var ha = Object(o.memo)((function(e) {
                    var t = e.open,
                        a = e.onClose,
                        n = e.handleSave,
                        o = Ca();
                    return r.a.createElement(se.a, {
                        open: t,
                        onClose: a,
                        "aria-labelledby": "alert-dialog-title",
                        "aria-describedby": "alert-dialog-description"
                    }, r.a.createElement("div", {
                        style: L.j,
                        className: o.paper
                    }, r.a.createElement(le.a, {
                        className: o.closeIcon,
                        onClick: a
                    }), r.a.createElement("img", {
                        src: fa.a,
                        alt: "save",
                        className: fa.a
                    }), r.a.createElement(g.a, {
                        className: o.title
                    }, "Save Changes"), r.a.createElement(g.a, {
                        className: o.confirmationText
                    }, "Are you sure you want to save changes?"), r.a.createElement("div", {
                        className: o.buttonContainer
                    }, r.a.createElement(p.a, {
                        size: "small",
                        onClick: a,
                        className: "".concat(o.button, " ").concat(o.cancelButton)
                    }, "Cancel"), r.a.createElement(p.a, {
                        size: "small",
                        onClick: n,
                        color: "primary",
                        variant: "contained",
                        className: "".concat(o.button, " ").concat(o.saveButton)
                    }, "Save"))))
                })),
                xa = a(528),
                ga = a(451),
                Ea = Object(c.a)((function(e) {
                    return {
                        root: {
                            width: "512px",
                            padding: "56px",
                            borderRadius: "8px",
                            backgroundColor: L.d.WHITE,
                            boxShadow: L.d.PAPER_SHADOW,
                            margin: "auto",
                            "@media only screen and (max-width: 1440px)": {
                                padding: "24px 56px"
                            }
                        },
                        from: {
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            alignContent: "center"
                        },
                        avatarWrapper: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        },
                        avatarBorder: {
                            width: "158px",
                            height: "158px",
                            border: "2px solid ".concat(L.d.MID_BLUE),
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: "24px"
                        },
                        avatar: {
                            width: "142px",
                            height: "142px",
                            backgroundColor: L.d.LIGHT_PRIMARY,
                            fontSize: "38px",
                            color: L.d.MID_PRIMARY
                        },
                        badgeAnchor: {
                            bottom: "11%"
                        },
                        deleteImageButton: {
                            width: "34px",
                            height: "34px",
                            borderRadius: "17px",
                            backgroundColor: L.d.WHITE,
                            border: "none",
                            boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.15)",
                            padding: "8px 9px",
                            cursor: "pointer",
                            "&:disabled": {
                                cursor: "default"
                            },
                            "@media only screen and (max-width: 1440px)": {
                                width: "24px",
                                height: "24px",
                                padding: "3px 4px"
                            }
                        },
                        editPhotoButton: {
                            padding: "10px 32px",
                            borderRadius: "10px",
                            boxShadow: "none",
                            backgroundColor: L.d.LIGHT_BLUE,
                            fontSize: "16px",
                            fontWeight: 500,
                            color: L.d.SECONDARY_COLOR,
                            textTransform: "capitalize",
                            margin: "24px 0 48px 0",
                            "@media only screen and (max-width: 1440px)": {
                                margin: "14px 0"
                            }
                        },
                        fieldset: {
                            marginBottom: "24px",
                            "@media only screen and (max-width: 1440px)": {
                                marginBottom: "14px"
                            }
                        },
                        fieldsetText: {
                            fontSize: "18px",
                            color: L.d.TEXT_GREY,
                            marginBottom: "16px",
                            "@media only screen and (max-width: 1440px)": {
                                marginBottom: "8px",
                                fontSize: "16px"
                            }
                        },
                        disabledText: {
                            color: L.d.GREY_BORDER
                        },
                        error: {
                            margin: "13px 0"
                        },
                        saveButton: {
                            borderRadius: "10px",
                            padding: "16px 0",
                            backgroundColor: L.d.SECONDARY_COLOR,
                            boxShadow: "none",
                            fontSize: "24px",
                            fontWeight: 700,
                            textTransform: "capitalize",
                            color: L.d.WHITE,
                            marginTop: "8px",
                            "@media only screen and (max-width: 1440px)": {
                                padding: "8px 0",
                                fontSize: "20px"
                            }
                        },
                        circularLoader: {
                            margin: "0 auto"
                        },
                        formHeader: {
                            fontWeight: "bold",
                            fontSize: "20px",
                            lineHeight: "32px",
                            textAlign: "center",
                            letterSpacing: "0.2px",
                            color: "#2B2F32",
                            marginBottom: "24px"
                        }
                    }
                }));
            var va = Object(o.memo)((function() {
                    var e = Ea(),
                        t = Object(i.g)(),
                        a = Object(B.b)().t,
                        c = Object(R.a)(),
                        l = c.getCurrentBook,
                        u = c.getUserInfo,
                        m = c.getDeviceInfo,
                        f = Object(N.a)().setBook,
                        C = l(),
                        h = u(),
                        x = Object(o.useState)(!1),
                        E = Object(n.a)(x, 2),
                        v = E[0],
                        O = E[1],
                        j = Object(o.useState)((null === C || void 0 === C ? void 0 : C.business_name) || ""),
                        w = Object(n.a)(j, 2),
                        S = w[0],
                        _ = w[1],
                        y = Object(o.useState)((null === C || void 0 === C ? void 0 : C.business_owner_name) || ""),
                        T = Object(n.a)(y, 2),
                        D = T[0],
                        M = T[1],
                        W = Object(o.useState)((null === C || void 0 === C ? void 0 : C.business_image) || ""),
                        H = Object(n.a)(W, 2),
                        G = H[0],
                        Y = H[1],
                        P = Object(o.useState)(!1),
                        U = Object(n.a)(P, 2),
                        z = U[0],
                        K = U[1],
                        Z = Object(o.useState)(!1),
                        F = Object(n.a)(Z, 2),
                        V = F[0],
                        q = F[1],
                        X = Object(o.useState)(),
                        Q = Object(n.a)(X, 2),
                        $ = Q[0],
                        J = Q[1],
                        ee = Object(o.useState)(!1),
                        ae = Object(n.a)(ee, 2),
                        ne = ae[0],
                        oe = ae[1],
                        re = Object(o.useState)(!1),
                        ce = Object(n.a)(re, 2),
                        ie = ce[0],
                        le = ce[1],
                        se = Object(o.useState)(!1),
                        ue = Object(n.a)(se, 2),
                        me = ue[0],
                        pe = ue[1],
                        be = V || z,
                        fe = (null === h || void 0 === h ? void 0 : h.country_code) || "",
                        he = (null === h || void 0 === h ? void 0 : h.phone) || "",
                        xe = function() {
                            var e = Object(d.a)(s.a.mark((function e(t) {
                                var a, n;
                                return s.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (void 0 !== t) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return K(!0), e.next = 5, Object(ga.j)(t, t.name);
                                        case 5:
                                            a = e.sent, n = Object(ve.a)({
                                                preview: URL.createObjectURL(t)
                                            }, a), Y(n.preview), J(n), K(!1);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        ge = function() {
                            var e = Object(d.a)(s.a.mark((function e() {
                                return s.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            $ && (K(!0), Y($.preview), J(void 0)), oe(!0), K(!1);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Ee = function() {
                            return le(!1)
                        },
                        Oe = function() {
                            pe(!1), q(!0);
                            var e, a = m();
                            void 0 !== h && void 0 !== a ? (e = {
                                bookId: (null === C || void 0 === C ? void 0 : C.book_id) || "",
                                bookName: S,
                                businessOwnerName: D,
                                image: G
                            }, Object(we.b)(te.a.ProfileSaveConfirmClick, e), I.a.updateBook({
                                bookId: (null === C || void 0 === C ? void 0 : C.book_id) || "",
                                bookName: S,
                                businessOwnerName: D,
                                image: G,
                                imageFile: $,
                                user: h,
                                deviceInfo: a
                            }).then((function(e) {
                                q(!1), f(e), t.replace(A.f)
                            })).catch((function(e) {
                                console.log(e)
                            }))) : t.replace(A.o)
                        },
                        je = function() {
                            var e = Object(d.a)(s.a.mark((function e(t) {
                                var a;
                                return s.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            a = new File([t], "edited-book-profile-picture.jpg", {
                                                type: "image/jpg"
                                            }), xe(a);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return r.a.createElement("div", {
                        className: e.root
                    }, r.a.createElement("form", {
                        className: e.from,
                        onSubmit: Oe
                    }, r.a.createElement(g.a, {
                        className: e.formHeader
                    }, a("profile")), r.a.createElement("div", {
                        className: e.avatarWrapper
                    }, r.a.createElement("div", {
                        className: e.avatarBorder
                    }, r.a.createElement(sa.a, {
                        overlap: "circle",
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "right"
                        },
                        classes: {
                            anchorOriginBottomRightCircle: e.badgeAnchor
                        },
                        badgeContent: G && r.a.createElement("button", {
                            className: e.deleteImageButton,
                            type: "button",
                            onClick: function() {
                                return le(!0)
                            },
                            disabled: be
                        }, r.a.createElement(Ce, {
                            width: 15,
                            height: 18,
                            stroke: be ? L.d.GREY_BORDER : L.d.PRIMARY_COLOR
                        }))
                    }, r.a.createElement(b.a, {
                        className: e.avatar,
                        src: G
                    }, Object(k.a)(S)))), r.a.createElement(ua.a, {
                        onImageUpload: function() {
                            var e = Object(d.a)(s.a.mark((function e(t) {
                                return s.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, xe(t);
                                        case 2:
                                            ge();
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        selectedImageUrl: G,
                        type: "profileForm"
                    }), r.a.createElement(ma.a, {
                        open: ne,
                        imageUrl: G,
                        onEditComplete: je,
                        onClose: function() {
                            return oe(!1)
                        }
                    })), r.a.createElement("div", {
                        className: e.fieldset
                    }, r.a.createElement(g.a, {
                        className: e.fieldsetText
                    }, a("your_name")), r.a.createElement(de.a, {
                        name: "businessOwner",
                        value: D,
                        autoComplete: "off",
                        placeholder: a("your_name"),
                        onChangeHandler: function(e) {
                            0 !== e.target.value.indexOf(" ") && M(e.target.value)
                        },
                        maxLength: xa.a
                    })), r.a.createElement("div", {
                        className: e.fieldset
                    }, r.a.createElement(g.a, {
                        className: e.fieldsetText
                    }, a("business_name")), r.a.createElement(de.a, {
                        name: "businessName",
                        value: S,
                        autoComplete: "off",
                        placeholder: a("business_name"),
                        onChangeHandler: function(e) {
                            var t = e.target.value;
                            0 !== t.indexOf(" ") && (_(t), v && t.trim().length > 0 && O(!1))
                        },
                        maxLength: xa.a,
                        error: v
                    }), v && r.a.createElement(la.a, {
                        className: e.error,
                        error: !0
                    }, "Enter a valid name")), r.a.createElement("div", {
                        className: e.fieldset
                    }, r.a.createElement(g.a, {
                        className: "".concat(e.fieldsetText, " ").concat(e.disabledText)
                    }, a("registered_phone_number")), r.a.createElement(de.a, {
                        name: "",
                        value: fe + he,
                        autoComplete: "off",
                        placeholder: "",
                        disabled: !0
                    })), be && r.a.createElement(da.a, {
                        className: e.circularLoader
                    }), r.a.createElement(p.a, {
                        onClick: function() {
                            Object(we.b)(te.a.ProfileSaveClick), 0 !== S.trim().length ? (O(!1), pe(!0)) : O(!0)
                        },
                        color: "primary",
                        variant: "contained",
                        className: e.saveButton,
                        disabled: v || be
                    }, a("save"))), r.a.createElement(pa.a, {
                        open: ie,
                        onClose: Ee,
                        secondaryAction: Ee,
                        primaryAction: function() {
                            Y(""), J(void 0), le(!1)
                        },
                        secondaryActionText: a("cancel"),
                        primaryActionText: a("delete"),
                        title: a("delete_photo"),
                        confirmationText: a("sure_you_want_to_delete_your_photo")
                    }), r.a.createElement(ha, {
                        open: me,
                        onClose: function() {
                            return pe(!1)
                        },
                        handleSave: Oe
                    }))
                })),
                Oa = Object(c.a)((function(e) {
                    return {
                        root: {
                            width: "100%",
                            height: "100%",
                            flexGrow: 1,
                            padding: "24px",
                            display: "flex",
                            flexDirection: "column",
                            "@media only screen and (max-width: 1440px)": {
                                padding: " 14px 24px"
                            }
                        },
                        title: {
                            fontSize: "16px",
                            color: L.d.TEXT_GREY,
                            marginBottom: "24px",
                            "@media only screen and (max-width: 1440px)": {
                                marginBottom: "14px"
                            }
                        }
                    }
                }));
            var ja = Object(o.memo)((function() {
                    var e = Oa(),
                        t = Object(B.b)().t;
                    return r.a.createElement("div", {
                        className: e.root
                    }, r.a.createElement(g.a, {
                        className: e.title
                    }, t("profile")), r.a.createElement(va, null))
                })),
                wa = a(445),
                Sa = a(940),
                _a = a(891),
                ka = a(929);
            var ya = Object(o.memo)((function(e) {
                var t = e.className,
                    a = e.height,
                    n = void 0 === a ? 34 : a,
                    o = e.width,
                    c = void 0 === o ? 34 : o,
                    i = e.stroke,
                    l = void 0 === i ? "#3CB17C" : i;
                return r.a.createElement("svg", {
                    width: c,
                    height: n,
                    className: t,
                    viewBox: "0 0 34 34",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.a.createElement("circle", {
                    cx: "17",
                    cy: "17",
                    r: "17",
                    fill: l
                }), r.a.createElement("path", {
                    d: "M17 27C22.5 27 27 22.5 27 17C27 11.5 22.5 7 17 7C11.5 7 7 11.5 7 17C7 22.5 11.5 27 17 27Z",
                    stroke: "white",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), r.a.createElement("path", {
                    d: "M13 16.83L15.83 19.66L21.5 14",
                    stroke: "white",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }))
            }));
            var Ia = Object(o.memo)((function(e) {
                    var t = e.className,
                        a = e.height,
                        n = void 0 === a ? 34 : a,
                        o = e.width,
                        c = void 0 === o ? 34 : o,
                        i = e.stroke,
                        l = void 0 === i ? "#CFD0D1" : i;
                    return r.a.createElement("svg", {
                        width: c,
                        height: n,
                        className: t,
                        viewBox: "0 0 34 34",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, r.a.createElement("circle", {
                        opacity: "0.6",
                        cx: "17",
                        cy: "17",
                        r: "13.5",
                        stroke: l,
                        strokeWidth: "7"
                    }))
                })),
                Na = a(434),
                Ra = Object(c.a)({
                    paymentTimeline: {
                        width: "100%",
                        "& .MuiStepper-root": {
                            padding: "unset "
                        }
                    },
                    stepper: {
                        backgroundColor: "transparent",
                        height: "100%",
                        marginBottom: "16px",
                        "& .Mui-active": {
                            backgroundColor: "yellow",
                            "& .MuiStepConnector-line": {
                                borderColor: "red"
                            }
                        },
                        "& .MuiStepConnector-lineHorizontal": {
                            "& .Mui-active": {
                                borderColor: "red"
                            },
                            borderTopStyle: "dotted",
                            borderTopWidth: "4px",
                            margin: "0 7px"
                        },
                        "& .MuiStepConnector-line": {
                            borderColor: "#ECEEF1",
                            height: "95%",
                            "& .Mui-active": {
                                borderColor: "red"
                            }
                        },
                        "& .MuiStepContent-root": {
                            borderLeft: "4px dotted #ECEEF1"
                        },
                        "& .MuiStep-horizontal": {
                            paddingLeft: "unset",
                            paddingRight: "unset"
                        }
                    },
                    step: {
                        "&:last-child": {
                            "& .MuiStepContent-root": {
                                borderLeft: "none"
                            }
                        },
                        "& .MuiStepLabel-iconContainer": {
                            paddingRight: "unset"
                        }
                    },
                    successStep: {
                        "& + div": {
                            "& .MuiStepConnector-line": {
                                borderColor: "#3CB17C"
                            }
                        }
                    },
                    stepType: {
                        color: L.d.MEDIUM_GREY,
                        fontSize: "16px",
                        fontWeight: 500,
                        marginTop: "16px"
                    },
                    successText: {
                        color: L.d.DARK_GREY
                    },
                    date: {
                        fontSize: "14px",
                        color: L.d.MEDIUM_GREY
                    }
                });
            var Ta = Object(o.memo)((function(e) {
                    var t = e.transactionType,
                        a = e.journey,
                        n = Ra(),
                        o = Object(B.b)().t,
                        c = a;
                    t === Na.e.QR ? c = a.slice(1) : t === Na.e.GIFT && (c = a.slice(2));
                    var i = function(e) {
                            switch (e) {
                                case Na.c.SUCCESS:
                                    return r.a.createElement(ya, null);
                                case Na.c.IN_PROGRESS:
                                    return r.a.createElement(Ia, {
                                        stroke: "#3CB17C"
                                    });
                                default:
                                    return r.a.createElement(Ia, null)
                            }
                        },
                        l = function(e) {
                            return e === Na.c.SUCCESS || e === Na.c.IN_PROGRESS
                        };
                    return r.a.createElement("div", {
                        className: n.paymentTimeline
                    }, r.a.createElement(Sa.a, {
                        className: n.stepper,
                        nonLinear: !0,
                        alternativeLabel: !0
                    }, c.map((function(e) {
                        var t;
                        return r.a.createElement(_a.a, {
                            active: l(e.status),
                            key: e.type,
                            className: "".concat(n.step, " ").concat(l(e.status) ? n.successStep : "")
                        }, r.a.createElement(ka.a, {
                            icon: i(e.status)
                        }, r.a.createElement(g.a, {
                            className: "".concat(n.stepType, " ").concat(l(e.status) ? n.successText : "")
                        }, " ", function(e) {
                            switch (e) {
                                case Na.d.GENERATE:
                                    return o("link_generated");
                                case Na.d.DEPOSIT:
                                    return o("money_deposited");
                                case Na.d.PAY:
                                    return o("user_paid");
                                case Na.d.PAYOUT_INIT:
                                    return o("payment_initiated");
                                case Na.d.PAYMENT_PROCESSING:
                                    return o("payment_processing")
                            }
                        }(e.type)), r.a.createElement(g.a, {
                            className: n.date
                        }, Object(Qe.d)(null === e || void 0 === e || null === (t = e.timestamp) || void 0 === t ? void 0 : t.toString()))))
                    }))))
                })),
                La = Object(c.a)({
                    paymentHeader: {
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        "@media only screen and (max-width: 800px)": {
                            flexDirection: "column",
                            alignItems: "center"
                        }
                    },
                    group: {
                        display: "flex",
                        width: "40%",
                        margin: "0 12px"
                    },
                    rightGroup: {
                        width: "60%",
                        display: "flex",
                        justifyContent: "space-around",
                        marginRight: "32px",
                        "@media only screen and (max-width: 800px)": {
                            marginTop: "16px"
                        }
                    },
                    iconWrapper: {
                        width: "48px",
                        height: "48px",
                        marginRight: "8px"
                    },
                    avatar: {
                        width: "100%",
                        height: "100%",
                        fontSize: "24px",
                        fontWeight: 500,
                        color: L.d.MID_PRIMARY,
                        backgroundColor: L.d.LIGHT_PRIMARY
                    },
                    groupTitle: {
                        fontSize: "16px",
                        fontWeight: 700,
                        color: L.d.DARK_GREY,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        maxWidth: "200px"
                    },
                    text: {
                        fontSize: "14px",
                        color: L.d.MEDIUM_GREY
                    },
                    amount: {
                        color: L.d.SECONDARY1
                    }
                });
            var Da = Object(o.memo)((function(e) {
                    var t = e.totalFees,
                        a = e.amount,
                        n = e.totalSettlementAmount,
                        o = e.paymentFrom,
                        c = Object(B.b)().t,
                        i = La();
                    return r.a.createElement("div", {
                        className: i.paymentHeader
                    }, r.a.createElement("div", {
                        className: i.group
                    }, r.a.createElement("div", {
                        className: i.iconWrapper
                    }, r.a.createElement(b.a, {
                        className: i.avatar
                    }, Object(k.a)(o))), r.a.createElement("div", null, r.a.createElement(_.a, {
                        text: o,
                        className: i.groupTitle,
                        arrow: !0,
                        placement: "top-start"
                    }), r.a.createElement(g.a, {
                        className: i.text
                    }, r.a.createElement(He.a, null), " ", a))), r.a.createElement("div", {
                        className: i.rightGroup
                    }, r.a.createElement("div", null, r.a.createElement(g.a, {
                        className: i.groupTitle
                    }, r.a.createElement(He.a, null), " ", t), r.a.createElement(g.a, {
                        className: i.text
                    }, c("banking_charges"))), r.a.createElement("div", null, r.a.createElement(g.a, {
                        className: "".concat(i.groupTitle, " ").concat(i.amount)
                    }, r.a.createElement(He.a, null), " ", n), r.a.createElement(g.a, {
                        className: i.text
                    }, c("you_will_receive")))))
                })),
                Aa = a(646),
                Ma = a(676),
                Ba = a.n(Ma),
                Wa = a(677),
                Ha = a.n(Wa),
                Ga = a(443),
                Ya = a.n(Ga),
                Pa = Object(c.a)({
                    modal: {
                        height: "100%",
                        display: "flex"
                    },
                    paper: {
                        position: "relative",
                        maxWidth: "630px",
                        width: "100%",
                        height: "100%",
                        maxHeight: "555px",
                        overflowY: "auto",
                        backgroundColor: L.d.WHITE,
                        borderRadius: "12px",
                        boxShadow: L.d.PAPER_SHADOW,
                        margin: "auto"
                    },
                    headerWrapper: {
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: "1px solid #ECEEF1",
                        padding: "24px 40px 24px 40px"
                    },
                    header: {
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: L.d.DARK_GREY
                    },
                    closeIcon: {
                        color: L.d.GREY_BORDER,
                        cursor: "pointer"
                    },
                    mainContent: {
                        display: "flex",
                        flexDirection: "column",
                        padding: "24px 40px 16px 40px"
                    },
                    warningContainer: {
                        display: "flex",
                        alignItems: "center",
                        padding: "16px 20px",
                        borderRadius: "6px",
                        backgroundColor: L.c.LIGHT_BLUE,
                        marginBottom: "16px"
                    },
                    aboutIcon: {
                        marginRight: "6px"
                    },
                    warningText: {
                        fontSize: "14px",
                        color: L.d.MEDIUM_DARK_GREY
                    },
                    titleWrapper: {
                        display: "flex",
                        flexDirection: "column",
                        paddingBottom: "16px",
                        borderBottom: "1px solid #ECEEF1"
                    },
                    title: {
                        fontSize: "16px",
                        fontWeight: 500,
                        color: L.d.MEDIUM_DARK_GREY,
                        marginBottom: "4px"
                    },
                    moneyHandIconWrapper: {
                        display: "flex"
                    },
                    moneyHandIcon: {
                        width: "20px",
                        height: "20px",
                        marginLeft: "8px"
                    },
                    titleDescription: {
                        fontSize: "14px",
                        color: L.d.MEDIUM_GREY
                    },
                    group: {
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "8px 0",
                        borderBottom: "1px solid #ECEEF1",
                        "&:last-child": {
                            borderBottom: "0"
                        }
                    },
                    infoText: {
                        fontSize: "14px",
                        color: L.d.MEDIUM_GREY
                    },
                    percentage: {
                        fontSize: "16px",
                        fontWeight: 700,
                        color: L.d.DARK_GREY
                    },
                    chargesIconWrapper: {
                        display: "flex"
                    },
                    chargesIcon: {
                        width: "32px",
                        height: "32px",
                        marginRight: "8px"
                    }
                });
            var Ua = Object(o.memo)((function(e) {
                    var t = e.open,
                        a = e.onClose,
                        n = e.paymentCharges,
                        o = Object(B.b)().t,
                        c = Pa();
                    return r.a.createElement(se.a, {
                        open: t,
                        className: c.modal,
                        onClose: a,
                        disableScrollLock: !0
                    }, r.a.createElement("div", {
                        className: c.paper
                    }, r.a.createElement("div", {
                        className: c.headerWrapper
                    }, r.a.createElement("div", {
                        className: c.chargesIconWrapper
                    }, r.a.createElement("img", {
                        src: Ha.a,
                        alt: o("charges"),
                        className: c.chargesIcon
                    }), r.a.createElement(g.a, {
                        className: c.header
                    }, o("charges"))), r.a.createElement("img", {
                        className: c.closeIcon,
                        src: Ya.a,
                        alt: "close",
                        onClick: a
                    })), r.a.createElement("div", {
                        className: c.mainContent
                    }, r.a.createElement("div", {
                        className: c.warningContainer
                    }, r.a.createElement(Q, {
                        className: c.aboutIcon,
                        width: 20,
                        height: 20,
                        stroke: L.d.MEDIUM_DARK_GREY
                    }), r.a.createElement(g.a, {
                        className: c.warningText
                    }, o("paymentcharges_payments"))), r.a.createElement("div", {
                        className: c.titleWrapper
                    }, r.a.createElement(g.a, {
                        className: c.title
                    }, o("payments_and_charges")), r.a.createElement("div", {
                        className: c.moneyHandIconWrapper
                    }, r.a.createElement(g.a, {
                        className: c.titleDescription
                    }, o("banking_charges_info_str")), r.a.createElement("img", {
                        src: Ba.a,
                        className: c.moneyHandIcon,
                        alt: "charges"
                    }))), null === n || void 0 === n ? void 0 : n.map((function(e, t) {
                        return r.a.createElement("div", {
                            className: c.group,
                            key: t
                        }, r.a.createElement(g.a, {
                            className: c.infoText
                        }, (a = e.type, Na.h[Na.g[a]])), r.a.createElement(g.a, {
                            className: c.percentage
                        }, e.fees));
                        var a
                    })))))
                })),
                za = a(678),
                Ka = a.n(za),
                Za = a(446),
                Fa = Object(c.a)({
                    paymentDetails: {
                        width: "100%",
                        display: "grid",
                        gridTemplateColumns: "45% 1fr 1fr",
                        "@media only screen and (max-width: 800px)": {
                            gridTemplateColumns: "1fr",
                            justifyContent: "center"
                        }
                    },
                    group: {
                        display: "flex",
                        flexDirection: "column",
                        margin: "12px"
                    },
                    title: {
                        fontSize: "14px",
                        fontWeight: 400,
                        color: L.d.MEDIUM_GREY,
                        marginBottom: "4px"
                    },
                    info: {
                        fontSize: "14px",
                        fontWeight: 500,
                        color: L.d.MEDIUM_DARK_GREY
                    },
                    copyTransactionIdButton: {
                        boxShadow: "none",
                        height: "20px",
                        width: "20px",
                        minWidth: "unset",
                        padding: "4px"
                    },
                    transactionIdIcon: {
                        width: "16px",
                        height: "16px"
                    },
                    displayFlex: {
                        display: "flex"
                    },
                    viewChargesButton: {
                        border: "1px solid #DBE0E5",
                        borderRadius: "6px",
                        padding: "8px 16px",
                        boxShadow: "none",
                        fontSize: "16px",
                        color: L.d.MID_BLUE,
                        textTransform: "capitalize",
                        lineHeight: "unset",
                        maxWidth: "180px"
                    },
                    tooltipLabel: {
                        fontSize: "12px"
                    }
                });
            var Va = Object(o.memo)((function(e) {
                    var t = e.khatabookTransactionId,
                        a = e.paymentsTransactionId,
                        c = e.to,
                        i = e.from,
                        l = e.paymentMode,
                        s = e.fromAccountNumber,
                        d = e.toAccountNumber,
                        u = e.paymentCharges,
                        m = Fa(),
                        b = Object(B.b)().t,
                        f = Object(o.useState)(!1),
                        C = Object(n.a)(f, 2),
                        h = C[0],
                        x = C[1],
                        E = Object(o.useState)(!1),
                        v = Object(n.a)(E, 2),
                        O = v[0],
                        j = v[1],
                        w = function() {
                            return j(!1)
                        };
                    return r.a.createElement("div", {
                        className: m.paymentDetails
                    }, r.a.createElement("div", {
                        className: m.group
                    }, r.a.createElement("div", {
                        className: m.displayFlex
                    }, r.a.createElement(g.a, {
                        className: m.title
                    }, b("transactiondetail_kb_payment_id")), r.a.createElement(S.a, {
                        onClickAway: w
                    }, r.a.createElement(Aa.a, {
                        PopperProps: {
                            disablePortal: !0
                        },
                        onClose: w,
                        open: O,
                        disableFocusListener: !0,
                        disableHoverListener: !0,
                        disableTouchListener: !0,
                        title: "Copied: ".concat(t),
                        arrow: !0,
                        classes: {
                            tooltip: m.tooltipLabel
                        }
                    }, r.a.createElement(p.a, {
                        className: m.copyTransactionIdButton,
                        onClick: function() {
                            t && (navigator.clipboard.writeText(t), j(!0), setTimeout((function() {
                                j(!1)
                            }), 3e3))
                        }
                    }, r.a.createElement("img", {
                        src: Ka.a,
                        alt: "transactionId",
                        className: m.transactionIdIcon
                    }))))), r.a.createElement(g.a, {
                        className: m.info
                    }, t)), r.a.createElement("div", {
                        className: m.group
                    }, r.a.createElement(g.a, {
                        className: m.title
                    }, b("transactiondetail_transaction_id")), r.a.createElement(g.a, {
                        className: m.info
                    }, a)), r.a.createElement("div", {
                        className: m.group
                    }, r.a.createElement(g.a, {
                        className: m.title
                    }, b("payment_mode")), r.a.createElement(g.a, {
                        className: m.info
                    }, function() {
                        switch (l) {
                            case Na.i.UPI:
                                return b(Na.j.UPI);
                            case Na.i.CC:
                                return b(Na.j.CC);
                            case Na.i.DC:
                                return b(Na.j.DC);
                            case Na.i.NET_BANKING:
                                return b(Na.j.NET_BANKING);
                            case Na.i.RUPAY:
                                return b(Na.j.RUPAY);
                            case Na.i.WALLET:
                                return b(Na.j.WALLET)
                        }
                    }())), r.a.createElement("div", {
                        className: m.group
                    }, r.a.createElement(g.a, {
                        className: m.title
                    }, b("from"), ": ", i), r.a.createElement(g.a, {
                        className: m.info
                    }, b("account_number"), ": ", s)), r.a.createElement("div", {
                        className: m.group
                    }, r.a.createElement(g.a, {
                        className: m.title
                    }, b("to"), ": ", c), r.a.createElement(g.a, {
                        className: m.info
                    }, b("account_number"), ": ", d)), r.a.createElement("div", {
                        className: m.group
                    }, r.a.createElement(p.a, {
                        className: m.viewChargesButton,
                        onClick: function() {
                            x(!0), Object(Za.d)()
                        }
                    }, b("view_charges"))), r.a.createElement(Ua, {
                        open: h,
                        onClose: function() {
                            return x(!1)
                        },
                        paymentCharges: u
                    }))
                })),
                qa = a(498),
                Xa = Object(c.a)({
                    root: {
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        width: "100%",
                        padding: "24px 24px 24px 15px"
                    },
                    paymentDetailsWrapper: {
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                        width: "100%",
                        height: "100%"
                    },
                    mainContent: {
                        width: "100%",
                        maxWidth: "820px",
                        margin: "auto",
                        backgroundColor: L.d.WHITE,
                        borderRadius: "6px",
                        marginTop: "16px"
                    },
                    section: {
                        width: "100%",
                        padding: "32px 36px",
                        borderBottom: "1px solid #ECEEF1",
                        "&:nth-of-type(2)": {
                            padding: "20px 36px"
                        },
                        "&:last-child": {
                            borderBottom: "none",
                            padding: "20px 0"
                        }
                    }
                });
            var Qa = Object(o.memo)((function() {
                    var e, t, a, c, l, u, m, p, b, f, C, h = Xa(),
                        x = Object(B.b)().t,
                        g = Object(i.i)().paymentId,
                        E = Object(o.useState)(),
                        v = Object(n.a)(E, 2),
                        O = v[0],
                        j = v[1],
                        w = Object(o.useState)(),
                        S = Object(n.a)(w, 2),
                        _ = S[0],
                        k = S[1],
                        y = Object(o.useState)(!0),
                        N = Object(n.a)(y, 2),
                        R = N[0],
                        T = N[1],
                        L = null === O || void 0 === O || null === (e = O.from[0]) || void 0 === e ? void 0 : e.transactions[0],
                        D = null === O || void 0 === O || null === (t = O.to[0]) || void 0 === t ? void 0 : t.transactions[0],
                        M = [{
                            name: x("money"),
                            href: A.q
                        }, {
                            name: x("transactions_list_exact"),
                            href: A.q
                        }, {
                            name: x("payment_details"),
                            href: A.w
                        }],
                        W = function() {
                            var e = Object(d.a)(s.a.mark((function e() {
                                var t;
                                return s.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(qa.b)();
                                        case 2:
                                            (t = e.sent) && k(t.sort((function(e, t) {
                                                return e.position < t.position
                                            })));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return Object(o.useEffect)((function() {
                        ! function(e) {
                            I.a.getInvoice(e).then((function(e) {
                                e && (j(e), T(!1))
                            }))
                        }(g), W(), Object(Za.c)()
                    }), [g]), R ? r.a.createElement(ce.a, null) : r.a.createElement("div", {
                        className: h.root
                    }, r.a.createElement(wa.a, {
                        breadCrumbsList: M
                    }), O && r.a.createElement("div", {
                        className: h.mainContent
                    }, r.a.createElement("div", {
                        className: h.section
                    }, r.a.createElement(Da, {
                        amount: (null === (a = O.to[0]) || void 0 === a ? void 0 : a.total_amount) || 0,
                        totalFees: (null === (c = O.to[0]) || void 0 === c ? void 0 : c.total_fee) || 0,
                        totalSettlementAmount: ((null === (l = O.from[0]) || void 0 === l ? void 0 : l.total_amount) || 0) - ((null === (u = O.to[0]) || void 0 === u ? void 0 : u.total_fee) || 0),
                        paymentFrom: (null === (m = O.from[0]) || void 0 === m ? void 0 : m.name) || ""
                    })), r.a.createElement("div", {
                        className: h.section
                    }, r.a.createElement(Va, {
                        khatabookTransactionId: O.order_id,
                        paymentsTransactionId: (null === L || void 0 === L ? void 0 : L.txn_id) || (null === D || void 0 === D ? void 0 : D.txn_id) || "",
                        to: (null === (p = O.to[0]) || void 0 === p ? void 0 : p.name) || "",
                        from: (null === (b = O.from[0]) || void 0 === b ? void 0 : b.name) || "",
                        paymentMode: (null === L || void 0 === L ? void 0 : L.method) || (null === D || void 0 === D ? void 0 : D.method) || "",
                        fromAccountNumber: (null === (f = O.from[0].transactions[0]) || void 0 === f ? void 0 : f.description) || "",
                        toAccountNumber: (null === (C = O.to[0].transactions[0]) || void 0 === C ? void 0 : C.description) || "",
                        paymentCharges: _
                    })), r.a.createElement("div", {
                        className: h.section
                    }, O.journey.length > 0 && r.a.createElement(Ta, {
                        transactionType: O.txn_mode || Na.e.QR,
                        journey: O.journey
                    }))))
                })),
                $a = a(39),
                Ja = a(679),
                en = a(567),
                tn = a(568),
                an = a(95),
                nn = a(680),
                on = a.n(nn),
                rn = a(681),
                cn = a.n(rn),
                ln = a(682),
                sn = a.n(ln),
                dn = a(529),
                un = a.n(dn),
                mn = a(430),
                pn = Object(c.a)((function(e) {
                    return {
                        root: {
                            width: "352px",
                            display: "flex",
                            flexDirection: "column",
                            alignContent: "center",
                            justifyContent: "center",
                            backgroundColor: L.d.WHITE,
                            borderRadius: "8px",
                            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                            height: "100%",
                            maxHeight: "568px"
                        },
                        section: {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "24px 16px",
                            borderBottom: "1px solid #ECEEF1",
                            "&:first-child": {
                                padding: "32px 16px"
                            },
                            "&:last-child": {
                                borderBottom: "none"
                            }
                        },
                        qrImage: {
                            width: "177px",
                            height: "177px",
                            marginTop: "20px",
                            marginBottom: "28px"
                        },
                        logosSection: {
                            width: "100%",
                            backgroundColor: L.d.APP_BACKGROUND
                        },
                        logosList: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0 8px",
                            listStyle: "none",
                            padding: 0,
                            margin: 0,
                            "& li": {
                                width: "44px",
                                height: "44px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxSizing: "border-box",
                                borderRadius: "4px",
                                "& img": {
                                    maxWidth: "44px"
                                }
                            }
                        },
                        iconsNote: {
                            fontSize: "14px",
                            color: L.d.MEDIUM_GREY,
                            maxWidth: "273px",
                            textAlign: "center",
                            fontWeight: 400,
                            marginBottom: "16px"
                        },
                        scanSubTitle: {
                            fontSize: "14px",
                            color: L.d.DARK_GREY,
                            marginBottom: "16px"
                        },
                        downloadQrCodeBtn: {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: "16px"
                        },
                        invalidQrContainer: {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        invalidQRText: {
                            display: "flex",
                            alignItems: "center",
                            fontSize: "12px",
                            color: L.d.MEDIUM_DARK_GREY
                        },
                        dangerIcon: {
                            width: "18px",
                            height: "18px",
                            marginRight: "4px"
                        }
                    }
                }));
            var bn = function(e) {
                    var t = e.qrUrl,
                        n = e.isQrCodeEnabled,
                        o = Object(B.b)().t,
                        c = pn(),
                        i = Object(mn.a)(),
                        l = function(e) {
                            var t = {};
                            return e.keys().map((function(a) {
                                t[a.replace("./", "")] = e(a)
                            })), t
                        }(a(683));
                    return r.a.createElement("div", {
                        className: c.root
                    }, r.a.createElement("div", {
                        className: c.section
                    }, n ? r.a.createElement(tn.a, {
                        image: t || on.a,
                        className: c.qrImage
                    }) : r.a.createElement(r.a.Fragment, null, r.a.createElement("img", {
                        src: sn.a,
                        alt: "invalid qr code",
                        className: c.qrImage
                    }), r.a.createElement(g.a, {
                        className: c.invalidQRText
                    }, r.a.createElement("img", {
                        src: un.a,
                        alt: "invalid qr code",
                        className: c.dangerIcon
                    }), o("invalid_qr_code")))), r.a.createElement("div", {
                        className: "".concat(c.section, " ").concat(c.logosSection)
                    }, r.a.createElement(g.a, {
                        className: c.scanSubTitle
                    }, o("myqrcode_scan")), r.a.createElement("ul", {
                        className: c.logosList
                    }, Object.keys(l).map((function(e) {
                        return r.a.createElement("li", {
                            key: e
                        }, r.a.createElement("img", {
                            src: l[e],
                            alt: e
                        }))
                    })))), r.a.createElement("div", {
                        className: c.section
                    }, r.a.createElement(g.a, {
                        className: c.iconsNote
                    }, o("trademark_owners_message")), r.a.createElement(an.a, {
                        startIcon: r.a.createElement("img", {
                            src: cn.a,
                            alt: "any"
                        }),
                        className: "".concat(i.greenBtn, " ").concat(c.downloadQrCodeBtn),
                        disabled: !n,
                        onClick: function() {
                            Object(en.saveAs)(t || on.a, "qrCode"), Object(Za.q)()
                        }
                    }, o("qrcode_downloadqrcode"))))
                },
                fn = a(690),
                Cn = a.n(fn),
                hn = Object(c.a)((function(e) {
                    return {
                        root: {
                            width: "100%",
                            height: "100%",
                            flexGrow: 1,
                            padding: "32px 24px 24px 24px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column"
                        },
                        title: {
                            fontWeight: "bold",
                            fontSize: "32px",
                            lineHeight: "48px",
                            letterSpacing: "0.2px",
                            color: "#2B2F32",
                            textAlign: "center"
                        },
                        subTitle: {
                            fontSize: "16px",
                            lineHeight: "24px",
                            letterSpacing: "0.2px",
                            color: "#94979B",
                            textAlign: "center",
                            marginTop: "24px",
                            marginBottom: "24px"
                        },
                        correctionIcon: {
                            marginBottom: "40px"
                        },
                        orderBtn: {
                            width: "255px",
                            height: "43px",
                            textTransform: "none"
                        },
                        blurredRoot: {
                            opacity: .5
                        }
                    }
                }));
            var xn = function(e) {
                    var t, a = e.qrOrderDetails,
                        n = e.isQrCodeEnabled,
                        o = e.qrUrl,
                        c = hn(),
                        l = Object(i.g)(),
                        s = Object(B.b)().t;
                    return r.a.createElement("div", {
                        className: "".concat(c.root, " ").concat(n ? "" : c.blurredRoot)
                    }, r.a.createElement("img", {
                        src: Cn.a,
                        alt: "correction icon",
                        className: c.correctionIcon
                    }), r.a.createElement(g.a, {
                        className: c.title
                    }, s("qrcode_orderplaced")), r.a.createElement(g.a, {
                        className: c.subTitle
                    }, s("myqrcode_orderdetails", [(null === (t = a.qr_delivery_order) || void 0 === t ? void 0 : t.created_at) || ""])), r.a.createElement(p.a, {
                        variant: "contained",
                        color: "primary",
                        type: "submit",
                        className: c.orderBtn,
                        disabled: !n,
                        onClick: function() {
                            Object(Za.r)(), l.push(A.t, {
                                qrOrderDetails: a,
                                isQrCodeEnabled: n,
                                qrUrl: o
                            })
                        }
                    }, s("qrcode_vieworder")))
                },
                gn = Object(c.a)((function() {
                    return {
                        root: {
                            width: "100%",
                            height: "100%",
                            flexGrow: 1,
                            padding: "32px 24px 24px 24px",
                            display: "flex",
                            flexDirection: "column"
                        },
                        breadCrumbs: {
                            marginBottom: "24px"
                        },
                        moneyContent: {
                            width: "100%",
                            height: "100%",
                            flexGrow: 1,
                            display: "flex"
                        },
                        moneyContentFlex: {
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    }
                }));
            var En = function(e) {
                    var t, a = Object(R.a)().getCurrentBook;
                    Object(Ja.a)(e);
                    var c = gn(),
                        l = Object(i.g)(),
                        u = null === l || void 0 === l || null === (t = l.location) || void 0 === t ? void 0 : t.state,
                        m = null === u || void 0 === u ? void 0 : u.qrUrl,
                        p = Object(B.b)().t,
                        b = a(),
                        f = Object(K.d)(),
                        C = Object(o.useState)(void 0),
                        h = Object(n.a)(C, 2),
                        x = h[0],
                        g = h[1],
                        E = Object(o.useState)(!0),
                        v = Object(n.a)(E, 2),
                        O = v[0],
                        j = v[1],
                        w = Object(o.useState)(!0),
                        S = Object(n.a)(w, 2),
                        _ = S[0],
                        k = S[1],
                        y = Object(o.useState)(!1),
                        I = Object(n.a)(y, 2),
                        N = I[0],
                        T = I[1];
                    Object(o.useEffect)((function() {
                        (function() {
                            var e = Object(d.a)(s.a.mark((function e() {
                                var t;
                                return s.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!b) {
                                                e.next = 14;
                                                break
                                            }
                                            return j(!0), e.prev = 2, e.next = 5, Object(qa.e)(null === b || void 0 === b ? void 0 : b.book_id, f);
                                        case 5:
                                            (t = e.sent) && (g(t), (t.qr_delivery_order || t.all_qr_delivery_orders.length > 0) && T(!0), t.qr_url || k(!1)), j(!1), e.next = 14;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(2), j(!1), k(!1);
                                        case 14:
                                            j(!1);
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 10]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        })()()
                    }), []);
                    var L = [{
                        name: p("money"),
                        href: A.q
                    }, {
                        name: p("paymenthistory_useqr"),
                        href: A.u
                    }];
                    return O ? r.a.createElement(ce.a, null) : r.a.createElement("div", {
                        className: c.root
                    }, r.a.createElement("header", null, r.a.createElement("div", {
                        className: c.breadCrumbs
                    }, r.a.createElement(wa.a, {
                        breadCrumbsList: L
                    }))), r.a.createElement("div", {
                        className: "".concat(c.moneyContent, " ").concat(N ? "" : c.moneyContentFlex)
                    }, N && x ? r.a.createElement(xn, {
                        qrOrderDetails: x,
                        isQrCodeEnabled: _,
                        qrUrl: m || (null === x || void 0 === x ? void 0 : x.qr_url)
                    }) : null, r.a.createElement(bn, {
                        qrUrl: m || (null === x || void 0 === x ? void 0 : x.qr_url),
                        isQrCodeEnabled: _ && ((null === x || void 0 === x ? void 0 : x.qr_url) || m)
                    })))
                },
                vn = a(243),
                On = a.n(vn),
                jn = a(569),
                wn = a.n(jn),
                Sn = a(570),
                _n = a.n(Sn),
                kn = Object(c.a)((function(e) {
                    return {
                        root: {
                            width: "100%",
                            height: "100%",
                            flexGrow: 1,
                            padding: "32px 24px 24px 24px",
                            display: "flex"
                        },
                        breadCrumbs: {
                            marginBottom: "24px"
                        },
                        mainContent: {
                            display: "flex",
                            flexDirection: "column",
                            flexGrow: 1
                        },
                        content: {
                            backgroundColor: L.d.WHITE,
                            borderRadius: "6px",
                            flexGrow: 1,
                            marginRight: "24px"
                        },
                        title: {
                            padding: "24px 40px",
                            borderBottom: "1px solid #ECEEF1"
                        },
                        pageTitle: {
                            fontSize: "18px",
                            fontWeight: 500,
                            color: L.d.DARK_GREY
                        },
                        orderDetails: {
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            padding: "24px 37px"
                        },
                        flexContainer: {
                            display: "flex",
                            flexWrap: "wrap"
                        },
                        group: {
                            display: "flex",
                            flexDirection: "column",
                            marginRight: "40px",
                            marginBottom: "40px"
                        },
                        statusTitle: {
                            fontSize: "14px",
                            fontWeight: 500,
                            color: L.d.MEDIUM_DARK_GREY,
                            marginBottom: "4px"
                        },
                        addressContainer: {
                            display: "flex",
                            flexDirection: "column",
                            width: "50%"
                        },
                        addressTitle: {
                            display: "flex",
                            alignItems: "center",
                            fontSize: "15px",
                            fontWeight: 500,
                            marginBottom: "8px"
                        },
                        addressIcon: {
                            width: "16px",
                            height: "16px",
                            marginRight: "8px"
                        },
                        infoText: {
                            fontS: "14px",
                            fontWeight: 400,
                            color: L.d.MEDIUM_GREY,
                            lineHeight: "24px"
                        },
                        customerCareContainer: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "24px",
                            borderRadius: "6px",
                            backgroundColor: L.c.LIGHT_BLUE,
                            width: "fit-content",
                            margin: "auto"
                        },
                        contactText: {
                            fontSize: "14px",
                            color: L.d.MEDIUM_DARK_GREY,
                            margin: "8px 0 16px 0"
                        },
                        phoneNumber: {
                            display: "flex",
                            cursor: "pointer",
                            fontSize: "16px",
                            fontWeight: 500,
                            color: L.d.SECONDARY1
                        },
                        phoneIcon: {
                            width: "20px",
                            height: "20px",
                            marginRight: "8px"
                        }
                    }
                }));
            var yn = function() {
                    var e, t, a, n, o, c, l, s, d, u, m, p, b, f, C, h, x = kn(),
                        E = Object(B.b)().t,
                        v = Object(i.g)().location.state,
                        O = null === v || void 0 === v ? void 0 : v.qrOrderDetails,
                        j = null === v || void 0 === v ? void 0 : v.isQrCodeEnabled,
                        w = null === v || void 0 === v ? void 0 : v.isQrCodeEnabled,
                        S = [{
                            name: E("money"),
                            href: A.q
                        }, {
                            name: E("qrcode_orderqrcode"),
                            href: A.t
                        }];
                    return r.a.createElement("div", {
                        className: x.root
                    }, r.a.createElement("div", {
                        className: x.mainContent
                    }, r.a.createElement("header", null, r.a.createElement("div", {
                        className: x.breadCrumbs
                    }, r.a.createElement(wa.a, {
                        breadCrumbsList: S
                    }))), r.a.createElement("div", {
                        className: x.content
                    }, r.a.createElement("div", {
                        className: x.title
                    }, r.a.createElement(g.a, {
                        className: x.pageTitle
                    }, E("qrcode_orderqrcode"))), r.a.createElement("div", {
                        className: x.orderDetails
                    }, r.a.createElement("div", {
                        className: x.flexContainer
                    }, r.a.createElement("div", {
                        className: x.group
                    }, r.a.createElement(g.a, {
                        className: x.statusTitle
                    }, E("myqrcode_status"), ":"), r.a.createElement(g.a, {
                        className: x.infoText
                    }, null === O || void 0 === O || null === (e = O.qr_delivery_order) || void 0 === e ? void 0 : e.status)), r.a.createElement("div", {
                        className: x.group
                    }, r.a.createElement(g.a, {
                        className: x.statusTitle
                    }, E("order_delivery_date"), ":"), r.a.createElement(g.a, {
                        className: x.infoText
                    }, On()(null === O || void 0 === O || null === (t = O.qr_delivery_order) || void 0 === t ? void 0 : t.created_at).format("DD/MM/YYYY - hh:mm A")))), r.a.createElement("div", {
                        className: x.flexContainer
                    }, r.a.createElement("div", {
                        className: x.addressContainer
                    }, r.a.createElement(g.a, {
                        className: x.addressTitle
                    }, r.a.createElement("img", {
                        src: _n.a,
                        alt: "address",
                        className: x.addressIcon
                    }), " ", E("qrcode_shippingaddress")), r.a.createElement(g.a, {
                        className: x.infoText
                    }, null === O || void 0 === O || null === (a = O.qr_delivery_order) || void 0 === a || null === (n = a.address) || void 0 === n ? void 0 : n.address_line_1), r.a.createElement(g.a, {
                        className: x.infoText
                    }, null === O || void 0 === O || null === (o = O.qr_delivery_order) || void 0 === o || null === (c = o.address) || void 0 === c ? void 0 : c.address_line_2), r.a.createElement(g.a, {
                        className: x.infoText
                    }, " ", null === O || void 0 === O || null === (l = O.qr_delivery_order) || void 0 === l || null === (s = l.address) || void 0 === s ? void 0 : s.landmark, "-", " ", null === O || void 0 === O || null === (d = O.qr_delivery_order) || void 0 === d || null === (u = d.address) || void 0 === u ? void 0 : u.building_number, " "), r.a.createElement(g.a, {
                        className: x.infoText
                    }, " ", null === O || void 0 === O || null === (m = O.qr_delivery_order) || void 0 === m || null === (p = m.address) || void 0 === p ? void 0 : p.city, " -", " ", null === O || void 0 === O || null === (b = O.qr_delivery_order) || void 0 === b || null === (f = b.address) || void 0 === f ? void 0 : f.pincode), r.a.createElement(g.a, {
                        className: x.infoText
                    }, " ", null === O || void 0 === O || null === (C = O.qr_delivery_order) || void 0 === C || null === (h = C.address) || void 0 === h ? void 0 : h.state)), r.a.createElement("div", {
                        className: x.customerCareContainer
                    }, r.a.createElement(g.a, {
                        className: x.addressTitle
                    }, E("qrcode_reordermessage")), r.a.createElement(g.a, {
                        className: x.contactText
                    }, E("qrcode_customercare")), r.a.createElement("a", {
                        href: "tel:".concat(U.b),
                        className: x.phoneNumber
                    }, r.a.createElement("img", {
                        src: wn.a,
                        alt: "phone icon",
                        className: x.phoneIcon
                    }), U.b)))))), r.a.createElement(bn, {
                        qrUrl: (null === O || void 0 === O ? void 0 : O.qr_url) || w,
                        isQrCodeEnabled: j && ((null === O || void 0 === O ? void 0 : O.qr_url) || w)
                    }))
                },
                In = r.a.lazy((function() {
                    return a.e(21).then(a.bind(null, 921))
                })),
                Nn = r.a.lazy((function() {
                    return a.e(21).then(a.bind(null, 907))
                })),
                Rn = r.a.lazy((function() {
                    return a.e(21).then(a.bind(null, 908))
                })),
                Tn = r.a.lazy((function() {
                    return Promise.all([a.e(5), a.e(42), a.e(16)]).then(a.bind(null, 915))
                })),
                Ln = r.a.lazy((function() {
                    return Promise.resolve().then(a.bind(null, 922))
                })),
                Dn = r.a.lazy((function() {
                    return Promise.all([a.e(5), a.e(43), a.e(17)]).then(a.bind(null, 857))
                })),
                An = r.a.lazy((function() {
                    return Promise.all([a.e(5), a.e(43), a.e(17)]).then(a.bind(null, 919))
                }));
            var Mn = Object(o.memo)((function() {
                    var e = Object(o.useState)(""),
                        t = Object(n.a)(e, 2),
                        a = t[0],
                        c = t[1],
                        l = Object(i.g)(),
                        s = function(e) {
                            l.push("/book/".concat(e)), c(e)
                        };
                    return r.a.createElement(o.Suspense, {
                        fallback: r.a.createElement(ce.a, null)
                    }, r.a.createElement(i.d, null, r.a.createElement(i.b, {
                        path: "/book/add-customer",
                        exact: !0,
                        component: Object($a.a)(Tn)
                    }), r.a.createElement(i.b, {
                        path: "/book/:customerId",
                        exact: !0,
                        component: Object($a.a)(In)
                    }), r.a.createElement(i.b, {
                        path: "/book/:customerId/add",
                        exact: !0,
                        component: Object($a.a)(In)
                    }), r.a.createElement(i.b, {
                        path: "/book/:customerId/:transactionId/edit",
                        exact: !0,
                        component: Object($a.a)(Nn)
                    }), r.a.createElement(i.b, {
                        path: "/book/:customerId/:transactionId",
                        exact: !0,
                        component: Object($a.a)(Rn)
                    }), r.a.createElement(i.b, {
                        path: A.f,
                        exact: !0,
                        render: function() {
                            return r.a.createElement(Ln, {
                                customerId: a,
                                setCustomerId: s
                            })
                        }
                    }), r.a.createElement(i.b, {
                        path: A.q,
                        exact: !0,
                        component: Object($a.a)(An)
                    }), r.a.createElement(i.b, {
                        path: A.u,
                        exact: !0,
                        component: Object($a.a)(En)
                    }), r.a.createElement(i.b, {
                        path: A.t,
                        exact: !0,
                        component: Object($a.a)(yn)
                    }), r.a.createElement(i.b, {
                        path: "".concat(A.w, "/:paymentId"),
                        exact: !0,
                        component: Object($a.a)(Qa)
                    }), r.a.createElement(i.b, {
                        path: A.g,
                        exact: !0,
                        component: Object($a.a)(Dn)
                    }), r.a.createElement(i.b, {
                        path: A.z,
                        exact: !0,
                        component: Object($a.a)(ia)
                    }), r.a.createElement(i.b, {
                        path: A.A,
                        exact: !0,
                        component: Object($a.a)(zt)
                    }), r.a.createElement(i.b, {
                        path: A.i,
                        exact: !0,
                        component: Object($a.a)(zt)
                    }), r.a.createElement(i.b, {
                        path: A.y,
                        exact: !0,
                        component: Object($a.a)(zt)
                    }), r.a.createElement(i.b, {
                        path: A.v,
                        exact: !0,
                        component: Object($a.a)(zt)
                    }), r.a.createElement(i.b, {
                        path: A.e,
                        exact: !0,
                        component: Object($a.a)(zt)
                    }), r.a.createElement(i.b, {
                        path: A.a,
                        exact: !0,
                        component: Object($a.a)(ta)
                    }), r.a.createElement(i.b, {
                        path: A.r,
                        exact: !0,
                        component: Object($a.a)(ja)
                    })))
                })),
                Bn = a(892),
                Wn = a(893),
                Hn = a(416),
                Gn = a(691),
                Yn = a.n(Gn),
                Pn = a(560),
                Un = a(145),
                zn = Object(c.a)((function(e) {
                    return {
                        rowContainer: {
                            display: "flex",
                            flexDirection: "column",
                            cursor: "pointer",
                            "&:hover": {
                                backgroundColor: L.c.LIGHT_BLUE,
                                "& $customerAvatar": {
                                    backgroundColor: L.d.SECONDARY_COLOR
                                }
                            }
                        },
                        result: {
                            display: "flex",
                            padding: "16px 24px"
                        },
                        icon: {
                            marginRight: "16px",
                            width: "40px",
                            height: "40px"
                        },
                        customerAvatar: {
                            fontSize: "14px",
                            fontWeight: 500,
                            color: L.d.WHITE,
                            backgroundColor: L.d.SECONDARY2
                        },
                        textWrapper: {
                            display: "flex",
                            flexDirection: "column"
                        },
                        customerName: {
                            fontSize: "16px",
                            color: L.d.MEDIUM_DARK_GREY,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            maxWidth: "180px"
                        },
                        phone: {
                            fontSize: "14px",
                            color: L.d.MEDIUM_GREY
                        },
                        divider: {
                            width: "100%",
                            maxWidth: "236px",
                            margin: "0 auto"
                        }
                    }
                }));
            var Kn = Object(o.memo)((function(e) {
                    var t = e.customer,
                        a = e.handleCloseSearch,
                        n = zn(),
                        o = Object(i.g)(),
                        c = Object(B.b)().t,
                        l = (null === t || void 0 === t ? void 0 : t.phone) && t.phone.length > 0 ? "".concat(t.country_code || Un.a, " ").concat(t.phone) : c("no_contact_number");
                    return r.a.createElement("div", {
                        className: n.rowContainer,
                        onClick: function() {
                            a(), o.push("/book/".concat(t.customer_id))
                        }
                    }, r.a.createElement("div", {
                        className: n.result
                    }, r.a.createElement(b.a, {
                        className: "".concat(n.icon, " ").concat(n.customerAvatar),
                        src: t.image
                    }, Object(k.a)(t.name)), r.a.createElement("div", {
                        className: n.textWrapper
                    }, r.a.createElement(_.a, {
                        text: t.name,
                        className: n.customerName,
                        arrow: !0,
                        placement: "top-start",
                        isSearchResult: !0
                    }), r.a.createElement(g.a, {
                        className: n.phone
                    }, l))), r.a.createElement(Pn.a, {
                        className: n.divider
                    }))
                })),
                Zn = a(571),
                Fn = a.n(Zn),
                Vn = a(572),
                qn = a.n(Vn),
                Xn = a(573),
                Qn = a.n(Xn);
            var $n = Object(o.memo)((function(e) {
                    var t = e.invoice,
                        a = e.handleCloseSearch,
                        n = zn(),
                        o = Object(i.g)();
                    return r.a.createElement("div", {
                        className: n.rowContainer,
                        onClick: function() {
                            a(), o.push("".concat(A.w, "/").concat(t.invoice_id))
                        }
                    }, r.a.createElement("div", {
                        className: n.result
                    }, function(e) {
                        switch (e) {
                            case Na.e.LINK:
                                return r.a.createElement("img", {
                                    src: Fn.a,
                                    alt: "link transaction",
                                    className: n.icon
                                });
                            case Na.e.GIFT:
                                return r.a.createElement("img", {
                                    src: qn.a,
                                    alt: "gift transaction",
                                    className: n.icon
                                });
                            default:
                                return r.a.createElement("img", {
                                    src: Qn.a,
                                    alt: "qr code",
                                    className: n.icon
                                })
                        }
                    }(t.txn_mode), r.a.createElement("div", {
                        className: n.textWrapper
                    }, r.a.createElement(_.a, {
                        text: t.from[0].name,
                        className: n.customerName,
                        arrow: !0,
                        placement: "top-start",
                        isSearchResult: !0
                    }), r.a.createElement(g.a, {
                        className: n.phone
                    }, r.a.createElement(He.a, null), " ", Object(Xe.b)(Object(Xe.c)(Math.abs(t.from[0].total_amount)))))), r.a.createElement(Pn.a, {
                        className: n.divider
                    }))
                })),
                Jn = a(481),
                eo = Object(c.a)((function(e) {
                    return {
                        popper: {
                            zIndex: 5,
                            width: "100%",
                            maxWidth: "284px",
                            marginTop: "8px"
                        },
                        paper: {
                            width: "100%",
                            padding: "16px 0",
                            borderRadius: "8px",
                            boxShadow: L.d.PAPER_SHADOW,
                            backgroundColor: L.d.WHITE,
                            display: "flex",
                            flexDirection: "column"
                        },
                        title: {
                            fontSize: "12px",
                            fontWeight: 500,
                            color: L.d.MEDIUM_DARK_GREY,
                            marginLeft: "24px"
                        },
                        resultsList: {
                            display: "flex",
                            flexDirection: "column",
                            maxHeight: "320px",
                            width: "100%",
                            overflowY: "auto",
                            marginBottom: "16px"
                        },
                        viewAllBtn: {
                            width: "100%",
                            height: "32px",
                            maxWidth: "236px",
                            margin: "0 auto",
                            fontSize: "14px",
                            fontWeight: 700
                        },
                        viewBtnWrapper: {
                            display: "flex",
                            justifyContent: "center",
                            width: "100%"
                        },
                        noResultsText: {
                            fontSize: "12px",
                            fontWeight: 500,
                            color: L.d.MEDIUM_DARK_GREY,
                            margin: "0 24px"
                        }
                    }
                }));
            var to = Object(o.memo)((function(e) {
                    var t = e.open,
                        a = e.anchorEl,
                        c = e.handleCloseMenu,
                        l = e.handleClickAway,
                        s = e.searchType,
                        d = e.searchText,
                        u = eo(),
                        m = Object(mn.a)(),
                        b = Object(i.g)(),
                        f = Object(B.b)().t,
                        C = (0, Object(R.a)().getCurrentBook)(),
                        h = Object(o.useState)([]),
                        x = Object(n.a)(h, 2),
                        E = x[0],
                        v = x[1],
                        O = Object(o.useState)([]),
                        _ = Object(n.a)(O, 2),
                        k = _[0],
                        N = _[1],
                        T = s === Jn.b.MONEY ? k.length > 0 : E.length > 0,
                        L = Object(o.useCallback)((function(e) {
                            void 0 !== C && I.a.getCustomers({
                                bookId: C.book_id,
                                search: e
                            }).then((function(e) {
                                var t = e.data,
                                    a = [];
                                a = [].concat(Object(Me.a)(a), Object(Me.a)(t)), v(a)
                            }))
                        }), [C]),
                        M = Object(o.useCallback)((function(e) {
                            C && I.a.getInvoices({
                                bookId: C.book_id,
                                searchText: e
                            }).then((function(e) {
                                var t = e.data;
                                N(t)
                            })).catch((function(e) {
                                Object(y.a)(e, {
                                    tags: {
                                        module: D.a.FETCH_INVOICES
                                    }
                                })
                            }))
                        }), [C]);
                    return Object(o.useEffect)((function() {
                        s === Jn.b.CUSTOMERS && L(d), s === Jn.b.MONEY && M(d)
                    }), [d, L, s, M]), r.a.createElement(w.a, {
                        open: t,
                        anchorEl: a.current,
                        role: void 0,
                        className: u.popper,
                        transition: !0,
                        disablePortal: !0,
                        placement: "bottom"
                    }, r.a.createElement(j.a, {
                        className: u.paper
                    }, r.a.createElement(S.a, {
                        onClickAway: l
                    }, r.a.createElement("div", null, T ? r.a.createElement(r.a.Fragment, null, r.a.createElement(g.a, {
                        className: u.title
                    }, s === Jn.b.CUSTOMERS ? f("customers_results") : f("transactions_results")), r.a.createElement("div", {
                        className: u.resultsList
                    }, s === Jn.b.CUSTOMERS ? E.map((function(e) {
                        return r.a.createElement(Kn, {
                            customer: e,
                            key: e.customer_id,
                            handleCloseSearch: c
                        })
                    })) : k.map((function(e) {
                        return r.a.createElement($n, {
                            invoice: e,
                            key: e.invoice_id,
                            handleCloseSearch: c
                        })
                    })))) : r.a.createElement(g.a, {
                        className: u.noResultsText
                    }, f("searchresults_nothingfound")), T && r.a.createElement("div", {
                        className: u.viewBtnWrapper
                    }, r.a.createElement(p.a, {
                        onClick: function() {
                            s === Jn.b.CUSTOMERS ? b.push(A.f) : b.push(A.q), c()
                        },
                        className: "".concat(u.viewAllBtn, " ").concat(m.greyBtn)
                    }, f("view_all_results")))))))
                })),
                ao = a(496),
                no = a.n(ao),
                oo = Object(c.a)((function(e) {
                    return {
                        search: {
                            backgroundColor: "rgba(184 196, 206,0.1)",
                            height: "32px",
                            width: "100%",
                            maxWidth: "417px",
                            display: "flex",
                            alignItems: "center",
                            color: L.d.TEXT_GREY,
                            borderRadius: "6px",
                            position: "relative",
                            border: "1px solid ".concat(L.d.LIGHT_MEDIUM_GREY)
                        },
                        searchIcon: {
                            position: "absolute",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            left: "142px",
                            width: "14px",
                            height: "14px"
                        },
                        inputRoot: {
                            paddingLeft: "30px",
                            maxWidth: "284px",
                            width: "100%",
                            borderTopRightRadius: "6px",
                            borderBottomRightRadius: "6px"
                        },
                        inputInput: {
                            padding: e.spacing(1, 1, 1, 0),
                            transition: e.transitions.create("width"),
                            width: "100%",
                            maxWidth: "216px"
                        },
                        clearIcon: {
                            position: "absolute",
                            width: "18px",
                            height: "18px",
                            right: "16px",
                            color: "#DBE0E5",
                            cursor: "pointer"
                        },
                        autoCompleteClass: {
                            backgroundColor: L.d.LIGHT_GREY,
                            borderTopLeftRadius: "6px",
                            borderBottomLeftRadius: "6px",
                            cursor: "pointer",
                            height: "100%",
                            borderRight: "1px solid ".concat(L.d.LIGHT_MEDIUM_GREY)
                        },
                        dropdownInput: {
                            "& ::placeholder": {
                                opacity: 1,
                                color: L.d.MEDIUM_DARK_GREY,
                                fontWeight: "normal",
                                fontSize: "16px"
                            },
                            "& .MuiOutlinedInput-input": {
                                height: "16px",
                                fontSize: "14px",
                                width: "86px",
                                fontWeight: "normal",
                                color: L.d.MEDIUM_DARK_GREY,
                                backgroundColor: "transparent",
                                padding: "0 0 0 8px !important",
                                cursor: "pointer"
                            },
                            "& .MuiOutlinedInput-root": {
                                "&:hover": {
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "none"
                                    }
                                }
                            },
                            '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
                                paddingRight: "30px !important",
                                padding: "7px"
                            },
                            "& .Mui-focused": {
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: L.d.SECONDARY70
                                }
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                border: "0",
                                boxSizing: "border-box"
                            }
                        },
                        dropdownPopper: {
                            "& .MuiAutocomplete-paper": {
                                width: "174px",
                                boxShadow: L.d.GREY_SHADOW
                            }
                        },
                        listBox: {
                            width: "174px",
                            padding: "8px 0px",
                            "& .MuiAutocomplete-option": {
                                padding: "8px 12px"
                            },
                            '& .MuiAutocomplete-option[data-focus="true"]': {
                                backgroundColor: L.c.LIGHT_BLUE,
                                color: L.d.SECONDARY2
                            },
                            '& .MuiAutocomplete-option[aria-selected="true"]': {
                                backgroundColor: L.c.LIGHT_BLUE
                            }
                        },
                        dropdownOption: {
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "0",
                            fontSize: "15px",
                            color: L.d.MID_BLUE
                        }
                    }
                }));
            var ro = Object(o.memo)((function() {
                    var e = oo(),
                        t = Object(B.b)().t,
                        a = Object(W.b)(),
                        c = a.searchText,
                        i = a.setSearchText,
                        l = Object(o.useState)(localStorage.getItem(Jn.c) || Jn.a[0]),
                        s = Object(n.a)(l, 2),
                        d = s[0],
                        u = s[1],
                        m = Object(o.useState)(!1),
                        p = Object(n.a)(m, 2),
                        b = p[0],
                        f = p[1],
                        C = Object(o.useRef)(null),
                        h = function() {
                            f(!1), i("")
                        };
                    return r.a.createElement("div", {
                        className: e.search
                    }, r.a.createElement(Nt.a, {
                        options: Jn.a,
                        forcePopupIcon: !0,
                        closeIcon: !1,
                        disableClearable: !0,
                        openOnFocus: !0,
                        selectOnFocus: !1,
                        onChange: function(e, t) {
                            t && (u(t), localStorage.setItem(Jn.c, t), h())
                        },
                        value: d,
                        className: e.autoCompleteClass,
                        classes: {
                            listbox: e.listBox,
                            groupUl: e.dropdownOption,
                            popper: e.dropdownPopper
                        },
                        getOptionLabel: function(e) {
                            return t(e, [""])
                        },
                        renderOption: function(e) {
                            return r.a.createElement("div", null, t(e, [""]))
                        },
                        renderInput: function(t) {
                            return r.a.createElement(Rt.a, Object.assign({}, t, {
                                className: e.dropdownInput,
                                id: "text",
                                variant: "outlined",
                                fullWidth: !0,
                                InputProps: Object(ve.a)(Object(ve.a)({}, t.InputProps), {}, {
                                    autoComplete: "new-password",
                                    readOnly: !0
                                })
                            }))
                        }
                    }), r.a.createElement("div", {
                        className: e.searchIcon
                    }, r.a.createElement("img", {
                        src: no.a,
                        alt: "search"
                    })), r.a.createElement(Hn.a, {
                        placeholder: "".concat(t("search"), "\u2026"),
                        onChange: function(e) {
                            var t, a = null === e || void 0 === e || null === (t = e.currentTarget) || void 0 === t ? void 0 : t.value;
                            i(a), a.length > 0 && !b ? f(!0) : 0 === c.length && b && f(!1)
                        },
                        classes: {
                            root: e.inputRoot,
                            input: e.inputInput
                        },
                        inputProps: {
                            "aria-label": "search"
                        },
                        value: c,
                        ref: C
                    }), r.a.createElement(to, {
                        open: b,
                        anchorEl: C,
                        handleCloseMenu: function() {
                            f(!1)
                        },
                        handleClickAway: function(e) {
                            C.current && C.current.contains(e.target) || f(!1)
                        },
                        searchType: d,
                        searchText: c
                    }), c.length > 0 && r.a.createElement(Yn.a, {
                        className: e.clearIcon,
                        onClick: h
                    }))
                })),
                co = Object(c.a)((function(e) {
                    return {
                        popper: {
                            zIndex: 5
                        },
                        profileMenuContainer: {
                            width: "258px",
                            marginTop: "20px",
                            background: L.d.WHITE,
                            boxShadow: "0px 2px 10px ".concat(L.d.GREY_SHADOW),
                            borderRadius: "8px"
                        },
                        profileWrapper: {
                            display: "flex",
                            alignItems: "center",
                            borderTopLeftRadius: "8px",
                            borderTopRightRadius: "8px",
                            padding: "24px"
                        },
                        profileDivider: {
                            backgroundColor: L.d.LIGHT_GREY,
                            width: "210px",
                            margin: "0 auto"
                        },
                        avatar: {
                            width: "48px",
                            height: "48px",
                            backgroundColor: L.d.SECONDARY_COLOR,
                            fontSize: "18px",
                            fontWeight: "bold",
                            color: L.d.WHITE,
                            marginRight: "12px"
                        },
                        bookName: {
                            fontWeight: 500,
                            fontSize: "18px",
                            color: L.d.MEDIUM_DARK_GREY,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            maxWidth: "160px"
                        },
                        phoneNumber: {
                            fontSize: "14px",
                            color: L.d.LIGHT_MEDIUM_GREY
                        },
                        list: {
                            padding: "24px"
                        },
                        listItem: {
                            padding: "8px 0",
                            "&:hover": {
                                "& $listItemTitle": {
                                    color: L.d.SECONDARY_COLOR
                                }
                            }
                        },
                        listItemLink: {
                            width: "100%",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            textDecoration: "none"
                        },
                        listItemAvatar: {
                            minWidth: "unset"
                        },
                        listItemTitle: {
                            fontSize: "16px",
                            color: L.d.TEXT_DISABLED,
                            marginLeft: "10px"
                        },
                        logoutText: {
                            color: L.d.PRIMARY_COLOR
                        }
                    }
                }));
            var io = function(e) {
                    var t = e.open,
                        a = e.anchorEl,
                        n = e.handleCloseProfileMenu,
                        o = e.bookName,
                        c = e.bookImage,
                        i = e.phoneNumber,
                        l = co(),
                        s = Object(B.b)().t,
                        d = [{
                            id: 1,
                            title: s("edit_profile"),
                            link: A.r
                        }, {
                            id: 2,
                            title: s("settings"),
                            link: A.A
                        }, {
                            id: 3,
                            title: s("logout"),
                            link: A.p
                        }],
                        m = function(e, t) {
                            t.link === A.r && (Object(we.b)(te.a.ProfileClick), Object(we.b)(te.a.HomeProfileClick)), t.link === A.p && (Object(we.b)(te.a.ProfileLogoutClick), e.preventDefault(), setTimeout((function() {
                                location.href = A.p
                            }), 1e3))
                        };
                    return r.a.createElement(w.a, {
                        open: t,
                        anchorEl: a.current,
                        role: void 0,
                        className: l.popper,
                        transition: !0,
                        disablePortal: !0,
                        placement: "bottom-end"
                    }, r.a.createElement(j.a, {
                        className: l.profileMenuContainer
                    }, r.a.createElement(S.a, {
                        onClickAway: n
                    }, r.a.createElement("div", null, r.a.createElement("div", {
                        className: l.profileWrapper
                    }, r.a.createElement(b.a, {
                        alt: "book",
                        src: c,
                        className: l.avatar
                    }, Object(k.a)(o)), r.a.createElement("div", null, r.a.createElement(_.a, {
                        text: o,
                        className: l.bookName,
                        arrow: !0,
                        placement: "top-start"
                    }), r.a.createElement(g.a, {
                        className: l.phoneNumber
                    }, i))), r.a.createElement(Pn.a, {
                        className: l.profileDivider
                    }), r.a.createElement(T.a, {
                        className: l.list
                    }, d.map((function(e) {
                        return r.a.createElement(E.a, {
                            key: e.id,
                            classes: {
                                root: l.listItem
                            }
                        }, r.a.createElement(u.b, {
                            to: e.link,
                            onClick: function(t) {
                                return m(t, e)
                            },
                            className: l.listItemLink
                        }, r.a.createElement(O.a, {
                            primary: r.a.createElement(g.a, {
                                className: "".concat(l.listItemTitle, " ").concat(e.title === s("logout") && l.logoutText)
                            }, e.title)
                        })))
                    })))))))
                },
                lo = Object(c.a)((function(e) {
                    return {
                        root: {
                            flexGrow: 0,
                            position: "sticky",
                            top: 0,
                            zIndex: 7
                        },
                        AppBarNote: {
                            backgroundImage: "linear-gradient(to right, ".concat(L.c.DARK_YELLOW, " , ").concat(L.c.LIGHT_YELLOW, ")"),
                            display: "flex",
                            justifyContent: "flex-start",
                            minHeight: "unset",
                            padding: "0 1rem",
                            alignItems: "center",
                            fontWeight: 600
                        },
                        AppBarContainer: {
                            backgroundColor: L.c.WHITE,
                            height: "48px",
                            display: "flex",
                            justifyContent: "center",
                            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.05)",
                            minHeight: "unset"
                        },
                        ToolbarContainer: {
                            display: "flex",
                            justifyContent: "space-between"
                        },
                        rightSideWrapper: {
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer"
                        },
                        avatar: {
                            marginLeft: "25px",
                            width: "32px",
                            height: "32px",
                            backgroundColor: L.d.SECONDARY_COLOR
                        },
                        bookName: {
                            fontWeight: 500,
                            fontSize: "16px",
                            color: L.d.DARK_GREY,
                            marginLeft: "8px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            maxWidth: "200px"
                        },
                        profileMenuButton: {
                            width: "13px",
                            minWidth: "13px",
                            height: "8px",
                            backgroundColor: "transparent",
                            padding: "0",
                            border: "none",
                            outline: "none",
                            cursor: "pointer",
                            marginLeft: "14px",
                            boxShadow: "none",
                            "&:hover": {
                                backgroundColor: "transparent"
                            }
                        },
                        titleHeader: {
                            fontWeight: 500,
                            fontSize: "0.97rem"
                        },
                        RedTextButton: {
                            border: "1px solid ".concat(L.c.DARK_RED),
                            color: L.c.DARK_RED,
                            background: L.c.WHITE,
                            textTransform: "initial",
                            borderRadius: "8px",
                            margin: "0.5rem 0 0.5rem 0.5rem"
                        },
                        downArrowIcon: {
                            transform: "rotate(90deg)"
                        },
                        upArrowIcon: {
                            transform: "rotate(-90deg)"
                        }
                    }
                }));

            function so() {
                var e = Object(o.useState)(!1),
                    t = Object(n.a)(e, 2),
                    a = t[0],
                    c = t[1],
                    i = Object(o.useRef)(null),
                    l = lo(),
                    u = Object(B.b)().t,
                    m = Object(R.a)(),
                    f = m.getCurrentBook,
                    C = m.getUserInfo,
                    h = Object(o.useState)(f()),
                    x = Object(n.a)(h, 2),
                    E = x[0],
                    v = x[1],
                    O = (null === E || void 0 === E ? void 0 : E.business_name) || (null === E || void 0 === E ? void 0 : E.book_name) || "",
                    j = (null === E || void 0 === E ? void 0 : E.business_image) || "",
                    w = C(),
                    S = "".concat(null === w || void 0 === w ? void 0 : w.country_code, " ").concat(null === w || void 0 === w ? void 0 : w.phone) || "";
                Object(o.useEffect)((function() {
                    (function() {
                        var e = Object(d.a)(s.a.mark((function e() {
                            var t;
                            return s.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Object(Z.c)();
                                    case 2:
                                        (t = e.sent) && v(t);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    })()()
                }), []), Object(H.a)((function(e) {
                    e && v(e)
                }));
                return r.a.createElement("div", {
                    className: l.root
                }, r.a.createElement("div", {
                    className: l.AppBarNote
                }, r.a.createElement(g.a, {
                    variant: "subtitle1",
                    className: l.titleHeader
                }, u("web_retirement_banner_text")), r.a.createElement(p.a, {
                    className: l.RedTextButton,
                    variant: "text",
                    onClick: function(e) {
                        window.open(U.d), Object(F.f)()
                    }
                }, r.a.createElement(g.a, {
                    variant: "subtitle2"
                }, u("web_beta_trial_cta")))), r.a.createElement(Bn.a, {
                    position: "static",
                    className: l.AppBarContainer
                }, r.a.createElement(Wn.a, {
                    className: l.ToolbarContainer
                }, r.a.createElement(ro, null), r.a.createElement("div", {
                    className: l.rightSideWrapper,
                    ref: i,
                    "aria-controls": a ? "menu-list-grow" : void 0,
                    "aria-haspopup": "true",
                    onClick: function() {
                        c((function(e) {
                            return !e
                        })), Object(F.l)()
                    }
                }, r.a.createElement(b.a, {
                    alt: "book",
                    src: j,
                    className: l.avatar
                }, Object(k.a)(O)), r.a.createElement(_.a, {
                    text: O,
                    className: l.bookName,
                    arrow: !0,
                    placement: "top-start"
                }), r.a.createElement(p.a, {
                    className: l.profileMenuButton,
                    variant: "text"
                }, r.a.createElement(fe, {
                    width: 8,
                    height: 13,
                    stroke: L.d.DARK_GREY,
                    className: a ? l.upArrowIcon : l.downArrowIcon
                })), r.a.createElement(io, {
                    open: a,
                    anchorEl: i,
                    handleCloseProfileMenu: function(e) {
                        i.current && i.current.contains(e.target) || c(!1)
                    },
                    bookName: O,
                    bookImage: j,
                    phoneNumber: S
                })))))
            }
            var uo = Object(c.a)((function(e) {
                return {
                    root: {},
                    paper: {
                        position: "absolute",
                        width: 465,
                        height: 232,
                        backgroundColor: L.c.WHITE,
                        borderRadius: "15px",
                        boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.1)",
                        padding: "16px 40px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    form: {
                        display: "flex",
                        flexDirection: "column",
                        width: "100%"
                    },
                    buttonContainer: {
                        minWidth: "100%",
                        marginTop: "24px",
                        height: "64px"
                    },
                    header: {
                        margin: "24px 0",
                        fontSize: "20px",
                        fontWeight: 500
                    },
                    error: {
                        margin: "13px 0"
                    },
                    closeIcon: {
                        position: "absolute",
                        top: "16px",
                        right: "16px",
                        color: "#C9C9C9",
                        cursor: "pointer"
                    }
                }
            }));
            var mo = Object(o.memo)((function(e) {
                    var t = e.showModal,
                        a = e.handleAddNewLedger,
                        c = uo(),
                        l = Object(mn.a)(),
                        s = Object(B.b)().t,
                        d = Object(M.b)().showError,
                        u = Object(N.a)().setBook,
                        m = Object(R.a)(),
                        p = m.getUserInfo,
                        b = m.getDeviceInfo,
                        f = Object(i.g)(),
                        C = Object(o.useState)(""),
                        h = Object(n.a)(C, 2),
                        x = h[0],
                        E = h[1],
                        v = Object(o.useState)(!1),
                        O = Object(n.a)(v, 2),
                        j = O[0],
                        w = O[1];
                    Object(o.useEffect)((function() {
                        return E(""),
                            function() {
                                E("")
                            }
                    }), []);
                    var S = function() {
                        a(), E("")
                    };
                    return r.a.createElement(r.a.Fragment, null, r.a.createElement(se.a, {
                        open: t,
                        onClose: S,
                        "aria-labelledby": "simple-modal-title",
                        "aria-describedby": "simple-modal-description"
                    }, r.a.createElement("div", {
                        style: L.j,
                        className: c.paper
                    }, r.a.createElement("img", {
                        className: c.closeIcon,
                        src: Ya.a,
                        onClick: S,
                        alt: "close"
                    }), r.a.createElement("div", null, r.a.createElement(g.a, {
                        className: c.header
                    }, s("add"))), r.a.createElement("form", {
                        noValidate: !0,
                        onSubmit: function(e) {
                            if (e.preventDefault(), 0 !== x.trim().length) {
                                w(!1);
                                var t = p(),
                                    n = b();
                                if (Object(F.c)({
                                        ledger_name: x,
                                        user_id: null === t || void 0 === t ? void 0 : t.user_id
                                    }), void 0 !== t && void 0 !== n) {
                                    I.a.addBook({
                                        bookName: function() {
                                            var e = x.trim();
                                            return e.endsWith(".") ? e.slice(0, -1) : e
                                        }(),
                                        user: t,
                                        deviceInfo: n
                                    }).then((function(e) {
                                        u(e), a(), E(""), f.replace(A.f)
                                    })).catch((function(e) {
                                        Object(y.a)(e, {
                                            tags: {
                                                module: D.a.ADD_BUSINESS
                                            }
                                        }), d()
                                    }))
                                } else f.replace(A.o)
                            } else w(!0)
                        },
                        className: c.form
                    }, r.a.createElement(de.a, {
                        name: "businessName",
                        value: x,
                        onChangeHandler: function(e) {
                            var t = e.target.value;
                            t.trim().length && w(!1), E(t)
                        },
                        autoFocus: !0,
                        placeholder: s("business_name_placeholder"),
                        error: j,
                        maxLength: xa.a
                    }), j && r.a.createElement(la.a, {
                        className: c.error,
                        error: !0
                    }, s("naya_khata_business_hint")), r.a.createElement("div", {
                        className: c.buttonContainer
                    }, r.a.createElement(an.a, {
                        fullWidth: !0,
                        variant: "contained",
                        color: "primary",
                        type: "submit",
                        className: l.secondaryBtn,
                        disabled: 0 === x.length
                    }, s("create_book_button")))))))
                })),
                po = Object(c.a)((function() {
                    return {
                        container: {
                            display: "flex"
                        },
                        leftPane: {
                            width: "".concat(L.f, "px"),
                            backgroundColor: L.c.LIGHT_BLUE,
                            borderRight: "1px solid ".concat(L.c.GREY),
                            minHeight: "100vh"
                        },
                        leftPaneContent: {
                            position: "relative",
                            left: 0,
                            width: "".concat(L.f, "px"),
                            borderRight: "1px solid #e6e6e6",
                            background: "#fff",
                            scrollbarWidth: "thin",
                            "&::after": {
                                content: '""',
                                height: "160px",
                                display: "block"
                            },
                            "&::-webkit-scrollbar": {
                                width: "8px",
                                backgroundColor: "#fff"
                            },
                            "&::-webkit-scrollbar-thumb": {
                                backgroundColor: "#babac0",
                                borderRadius: "4px",
                                width: "4px",
                                border: "2px solid #fff"
                            },
                            "&::-webkit-scrollbar-button": {
                                display: "none"
                            }
                        },
                        rightPane: {
                            minHeight: "100%",
                            flex: "1",
                            backgroundColor: L.d.APP_BACKGROUND,
                            display: "flex",
                            flexDirection: "column"
                        }
                    }
                }));
            t.default = Object(o.memo)((function() {
                var e = po(),
                    t = Object(o.useState)(!1),
                    a = Object(n.a)(t, 2),
                    c = a[0],
                    l = a[1],
                    s = (0, Object(R.a)().getCurrentBook)(),
                    d = Object(K.e)(),
                    u = Object(i.g)();
                Object(o.useEffect)((function() {
                    !d || s && !(null === s || void 0 === s ? void 0 : s.deleted) || u.replace(A.b)
                }), [s, u, d]);
                var m = function() {
                    return l(!c)
                };
                return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                    className: e.container
                }, r.a.createElement("div", {
                    className: e.leftPane
                }, r.a.createElement(re, {
                    handleAddNewLedger: m
                })), r.a.createElement("div", {
                    className: e.rightPane
                }, r.a.createElement(so, null), r.a.createElement(Mn, null)), r.a.createElement(mo, {
                    showModal: c,
                    handleAddNewLedger: m
                })))
            }))
        },
        922: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(42),
                o = a(16),
                r = a(18),
                c = a(0),
                i = a.n(c),
                l = a(184),
                s = a(225),
                d = a(298),
                u = a(560),
                m = a(421),
                p = a(418),
                b = a(422),
                f = a(94),
                C = a(40),
                h = a(797),
                x = a.n(h),
                g = a(798),
                E = a.n(g),
                v = a(532),
                O = a.n(v),
                j = a(438),
                w = a(9),
                S = Object(l.a)((function(e) {
                    return {
                        root: {
                            display: "".concat(w.i.FLEX),
                            flexDirection: "column",
                            maxWidth: "340px",
                            width: "100%",
                            overflowY: "auto",
                            padding: "16px 16px 24px 8px",
                            "@media only screen and (max-width: 1280px)": {
                                maxWidth: "309px"
                            }
                        },
                        paper: {
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            boxShadow: w.d.PAPER_SHADOW,
                            backgroundColor: w.d.WHITE,
                            borderRadius: "8px",
                            marginBottom: "24px"
                        },
                        group: {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%"
                        },
                        groupText: {
                            fontSize: "12px",
                            color: w.d.MEDIUM_GREY,
                            whiteSpace: "nowrap"
                        },
                        netBalanceTitle: {
                            color: w.d.DARK_GREY
                        },
                        netBalanceIcon: {
                            width: "48px",
                            height: "48px",
                            marginBottom: "16px",
                            marginTop: "24px"
                        },
                        statisticsWrapper: {
                            width: "100%",
                            display: "flex",
                            marginTop: "24px",
                            backgroundColor: w.d.APP_BACKGROUND,
                            padding: "24px",
                            overflowX: "auto"
                        },
                        productsPaper: {
                            padding: "16px"
                        },
                        productsWrapper: {
                            border: "1px solid ".concat(w.d.LIGHT_GREY),
                            borderRadius: "6px",
                            padding: "16px"
                        },
                        productsIcon: {
                            width: "48px",
                            height: "48px",
                            marginRight: "8px"
                        },
                        productItem: {
                            display: "flex",
                            textDecoration: "none"
                        },
                        arrowIcon: {
                            width: "7.13px",
                            height: "11.67px",
                            marginRight: "36px",
                            "@media only screen and (max-width: 1800px)": {
                                marginRight: "0"
                            }
                        },
                        arrowWrapper: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%"
                        },
                        amount: {
                            fontWeight: "bold",
                            fontSize: "24px",
                            color: w.d.SECONDARY2,
                            marginTop: "8px",
                            whiteSpace: "nowrap",
                            "@media only screen and (max-width: 1280px)": {
                                fontSize: "22px"
                            }
                        },
                        linkTitle: {
                            fontSize: "16px",
                            color: w.d.MEDIUM_DARK_GREY,
                            maxWidth: "123px",
                            fontWeight: 500,
                            "@media only screen and (max-width: 1800px)": {
                                maxWidth: "unset"
                            },
                            "@media only screen and (max-width: 1280px)": {
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                                overflow: "hidden"
                            }
                        },
                        youWillGive: {
                            color: w.d.DARK_GREEN
                        },
                        youWillGet: {
                            color: w.d.DARK_PRIMARY
                        },
                        youWillGiveTitle: {
                            color: w.d.TEXT_DISABLED
                        },
                        amountDivider: {
                            color: w.d.LIGHT_GREY,
                            margin: "0 12px"
                        }
                    }
                })),
                _ = function(e) {
                    var t = e.customersCount,
                        a = Object(C.b)().t,
                        n = S(),
                        o = Object(c.useState)(0),
                        l = Object(r.a)(o, 2),
                        h = l[0],
                        g = l[1],
                        v = Object(c.useState)(0),
                        w = Object(r.a)(v, 2),
                        _ = w[0],
                        k = w[1],
                        y = Object(c.useState)(0),
                        I = Object(r.a)(y, 2),
                        N = I[0],
                        R = I[1],
                        T = Object(f.a)().getCurrentBook;
                    return Object(c.useEffect)((function() {
                        var e = T(),
                            t = (null === e || void 0 === e ? void 0 : e.book_id) || "0";
                        p.a.getBookAggregations(t).then((function(e) {
                            g(e.credit), k(e.debit), R(e.credit - e.debit)
                        }))
                    }), [T]), i.a.createElement("div", {
                        className: n.root
                    }, i.a.createElement(d.a, {
                        className: "".concat(n.paper)
                    }, i.a.createElement("div", {
                        className: n.group
                    }, i.a.createElement("img", {
                        src: x.a,
                        alt: "net balance",
                        className: n.netBalanceIcon
                    }), i.a.createElement(s.a, {
                        className: "".concat(n.groupText, " ").concat(n.netBalanceTitle)
                    }, a("net_balance")), i.a.createElement("div", {
                        className: "".concat(n.amount, "  ").concat(N < 0 ? n.youWillGive : 0 === N ? n.amount : n.youWillGet)
                    }, i.a.createElement(m.a, null), " ", Object(b.a)(Math.abs(Number(N)))), i.a.createElement(s.a, {
                        className: n.groupText
                    }, a(0 === t ? "no_customers_yet" : N > 0 ? "you_will_get" : "you_will_give"))), i.a.createElement("div", {
                        className: n.statisticsWrapper
                    }, i.a.createElement("div", {
                        className: n.group
                    }, i.a.createElement(s.a, {
                        className: n.groupText
                    }, a("you_will_give")), i.a.createElement("div", {
                        className: "".concat(n.amount, " ").concat(n.youWillGive)
                    }, i.a.createElement(m.a, null), " ", Object(b.a)(_))), i.a.createElement(u.a, {
                        orientation: "vertical",
                        className: n.amountDivider
                    }), i.a.createElement("div", {
                        className: n.group
                    }, i.a.createElement(s.a, {
                        className: n.groupText
                    }, a("you_will_get")), i.a.createElement("div", {
                        className: "".concat(n.amount, " ").concat(n.youWillGet)
                    }, i.a.createElement(m.a, null), " ", Object(b.a)(h))))), i.a.createElement(d.a, {
                        className: "".concat(n.paper, " ").concat(n.productsPaper)
                    }, i.a.createElement("a", {
                        className: n.productItem,
                        target: "_blank",
                        href: "https://bizanalyst.in/?utm_source=Khatabook&utm_medium=WebApp",
                        rel: "noopener noreferrer",
                        onClick: function() {
                            return Object(j.g)("BizAnalyst")
                        }
                    }, i.a.createElement("img", {
                        src: E.a,
                        className: n.productsIcon,
                        alt: "bizAnalyst"
                    }), i.a.createElement("div", {
                        className: n.arrowWrapper
                    }, i.a.createElement(s.a, {
                        className: n.linkTitle
                    }, a("tally_on_mobile")), i.a.createElement("img", {
                        src: O.a,
                        alt: "arrow",
                        className: n.arrowIcon
                    })))))
                },
                k = a(450),
                y = a(362),
                I = a(599),
                N = a(10),
                R = [{
                    name: N.b.ALL,
                    label: "all"
                }, {
                    name: N.b.RECEIVABLES,
                    label: "you_will_get"
                }, {
                    name: N.b.PAYABLES,
                    label: "you_will_give"
                }, {
                    name: N.b.SETTLED,
                    label: "filter_settled"
                }],
                T = [{
                    name: N.d.RECENT,
                    label: "most_recent"
                }, {
                    name: N.d.OLDEST,
                    label: "oldest"
                }, {
                    name: N.d.HIGH_AMOUNT,
                    label: "highest_amount"
                }, {
                    name: N.d.LEAST_AMOUNT,
                    label: "least_amount"
                }, {
                    name: N.d.NAME,
                    label: "by_name_a_z"
                }],
                L = a(119),
                D = Object(l.a)((function(e) {
                    return {
                        filtersContainer: {
                            display: "flex",
                            alignItems: "center",
                            marginTop: "4px",
                            "@media only screen and (max-width: 1440px)": {
                                flexWrap: "wrap"
                            }
                        },
                        title: {
                            fontSize: "16px",
                            fontWeight: 500,
                            color: w.d.TEXT_GREY,
                            marginRight: "8px"
                        },
                        dropdownsContainer: {
                            display: "flex",
                            flexWrap: "wrap"
                        },
                        listWrapper: {
                            display: "flex",
                            alignItems: "center",
                            marginRight: "8px"
                        },
                        clearFiltersButton: {
                            border: "none",
                            textTransform: "capitalize",
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            fontSize: "16px",
                            fontWeight: "normal",
                            padding: "5px",
                            minWidth: "unset",
                            color: w.d.TEXT_DISABLED,
                            "@media only screen and (max-width: 1440px)": {
                                fontSize: "14px"
                            }
                        },
                        smallFilterDropdown: {
                            "& .MuiOutlinedInput-input": {
                                width: "70px"
                            }
                        },
                        divider: {
                            margin: "0 5px",
                            height: "24px"
                        },
                        countWrapper: {
                            display: "flex",
                            flexDirection: "column"
                        },
                        customersCount: {
                            fontSize: "12px",
                            marginRight: "4px"
                        },
                        longTextStyle: {
                            fontSize: "12px"
                        }
                    }
                }));
            var A = Object(c.memo)((function(e) {
                    var t = e.customerFilter,
                        a = e.customerSort,
                        n = e.handleFilterChange,
                        o = e.handleSortChange,
                        r = e.handleClearAllFilters,
                        c = e.customersCount,
                        l = D(),
                        d = Object(C.b)().t,
                        m = t !== N.b.ALL || a !== N.d.RECENT,
                        p = Object(L.b)() ? l.longTextStyle : "";
                    return i.a.createElement("div", {
                        className: l.filtersContainer
                    }, i.a.createElement("div", {
                        className: l.countWrapper
                    }, i.a.createElement(s.a, {
                        className: "".concat(l.title, " ").concat(p)
                    }, d("customers", [""]), i.a.createElement("span", {
                        className: l.customersCount
                    }, " (", c, ")"))), i.a.createElement("div", {
                        className: l.dropdownsContainer
                    }, i.a.createElement("div", {
                        className: l.listWrapper
                    }, i.a.createElement(I.a, {
                        options: R,
                        handleChange: n,
                        selected: t,
                        filterText: d("filter_by"),
                        id: "filter",
                        isHomePageFilter: !0,
                        className: l.smallFilterDropdown
                    })), i.a.createElement("div", {
                        className: l.listWrapper
                    }, i.a.createElement(I.a, {
                        options: T,
                        handleChange: o,
                        selected: a,
                        filterText: d("sort_by"),
                        id: "sort",
                        isHomePageFilter: !0
                    }))), m && i.a.createElement(i.a.Fragment, null, i.a.createElement(u.a, {
                        orientation: "vertical",
                        className: l.divider
                    }), i.a.createElement(y.a, {
                        className: l.clearFiltersButton,
                        onClick: r
                    }, d("reset"))))
                })),
                M = a(54),
                B = a(35),
                W = a(95),
                H = a(799),
                G = a.n(H),
                Y = Object(l.a)((function(e) {
                    return {
                        container: {
                            display: "flex",
                            alignItems: "center"
                        },
                        addCustomerBtn: {
                            padding: "4px 12px 4px 10px",
                            fontSize: "14px",
                            textTransform: "capitalize",
                            color: w.d.WHITE,
                            backgroundColor: w.d.DARK_PINK,
                            boxShadow: "none",
                            "&:hover": {
                                backgroundColor: w.d.DARK_PINK,
                                opacity: .8,
                                boxShadow: "none"
                            },
                            "&:active": {
                                backgroundColor: "#730135",
                                opacity: 1,
                                boxShadow: "none"
                            },
                            "&:disabled": {
                                backgroundColor: w.d.DARK_PINK,
                                color: w.d.WHITE,
                                opacity: .5
                            }
                        },
                        addCustomerIcon: {
                            width: "16px",
                            height: "16px",
                            marginRight: "8px"
                        },
                        longTextStyle: {
                            fontSize: "12px"
                        }
                    }
                }));
            var P = Object(c.memo)((function() {
                    var e = Y(),
                        t = Object(C.b)().t,
                        a = Object(B.g)(),
                        n = Object(c.useCallback)((function() {
                            Object(j.a)(), a.push("/book/add-customer")
                        }), [a]);
                    return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
                        className: e.container
                    }, i.a.createElement(W.a, {
                        variant: "contained",
                        fullWidth: !0,
                        className: "".concat(e.addCustomerBtn, " ").concat(Object(L.b)() ? e.longTextStyle : ""),
                        onClick: n
                    }, i.a.createElement("img", {
                        src: G.a,
                        alt: t("add_customer"),
                        className: e.addCustomerIcon
                    }), " ", t("add_customer"))))
                })),
                U = a(618),
                z = a(530),
                K = a(578),
                Z = a(480),
                F = a(429),
                V = a(577),
                q = a(106),
                X = a(25),
                Q = a(497),
                $ = a(431),
                J = a(144),
                ee = a(426),
                te = a(428),
                ae = a(74),
                ne = a(232),
                oe = a(84),
                re = a(234),
                ce = a(462),
                ie = a(430),
                le = Object(l.a)({
                    customersRow: {
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        "&:hover": {
                            boxShadow: "0px 1px 48px rgba(0, 0, 0, 0.07)"
                        }
                    },
                    customersRowWrapper: {
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "16px 24px",
                        width: "100%",
                        "&:hover": {
                            boxShadow: "0px 1px 48px rgba(0, 0, 0, 0.07)"
                        },
                        "@media only screen and (max-width: 1160px)": {
                            flexDirection: "column",
                            margin: "8px 0"
                        }
                    },
                    leftSideWrapper: {
                        display: "flex"
                    },
                    rightSideWrapper: {
                        display: "flex",
                        alignItems: "center",
                        "@media only screen and (max-width: 1160px)": {
                            flexDirection: "column",
                            margin: "8px 0"
                        }
                    },
                    customerAvatar: {
                        backgroundColor: w.d.SECONDARY3,
                        width: "40px",
                        height: "40px",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: w.d.WHITE,
                        marginRight: "16px"
                    },
                    customerName: {
                        fontSize: "16px",
                        fontWeight: 500,
                        color: w.d.MEDIUM_DARK_GREY,
                        marginBottom: "4x",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        maxWidth: "120px"
                    },
                    rowText: {
                        fontSize: "14px",
                        color: "#A4A4A4"
                    },
                    amountWrapper: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        marginRight: "20px",
                        "@media only screen and (max-width: 1160px)": {
                            maxWidth: "150px"
                        }
                    },
                    actionsWrapper: {
                        marginRight: "24px",
                        display: "flex",
                        flexWrap: "nowrap"
                    },
                    actionBtn: {
                        padding: "4px 17px",
                        margin: "0 4px",
                        whiteSpace: "nowrap"
                    },
                    amountCell: {
                        fontSize: "18px",
                        color: w.d.SECONDARY2,
                        cursor: "pointer",
                        fontWeight: "bold",
                        marginBottom: "4px"
                    },
                    youWillGetCell: {
                        color: w.d.DARK_PRIMARY,
                        fontWeight: "bold"
                    },
                    youWillGiveCell: {
                        color: w.d.DARK_GREEN,
                        fontWeight: "bold"
                    },
                    kebabMenuButton: {
                        display: "flex",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        padding: "3px 10px",
                        margin: "15px 12px 0 0",
                        minWidth: "unset",
                        boxShadow: "unset"
                    },
                    activeButton: {
                        backgroundColor: w.d.WHITE,
                        boxShadow: w.d.PAPER_SHADOW
                    },
                    kebabMenuWrapper: {
                        width: "24px",
                        height: "24px",
                        position: "absolute",
                        right: "22px",
                        top: "15px"
                    },
                    divider: {
                        backgroundColor: " #ECEEF1",
                        margin: "0 24px"
                    },
                    longTextStyle: {
                        fontSize: "12px"
                    },
                    amountReducedMargin: {
                        marginRight: "10px"
                    }
                });
            var se = Object(c.memo)((function(e) {
                    var t = e.customer,
                        a = le(),
                        n = Object(ie.a)(),
                        o = Object(B.g)(),
                        l = Object(ae.e)(),
                        d = Object(C.b)().t,
                        f = Object(re.b)(),
                        h = f.showToastMessage,
                        x = f.setToastMessage,
                        g = f.setToastActionHandler,
                        E = f.setShowViewButton,
                        v = f.setToastType,
                        O = Object(c.useState)(!1),
                        S = Object(r.a)(O, 2),
                        _ = S[0],
                        k = S[1],
                        I = Object(c.useState)(!1),
                        N = Object(r.a)(I, 2),
                        R = N[0],
                        T = N[1],
                        D = Object(c.useState)(!1),
                        A = Object(r.a)(D, 2),
                        M = A[0],
                        W = A[1],
                        H = Object(c.useState)(!1),
                        G = Object(r.a)(H, 2),
                        Y = G[0],
                        P = G[1],
                        se = Object(c.useRef)(null),
                        de = Object(te.h)(t.last_transaction_time),
                        ue = de.timeValue,
                        me = de.timeTranslationKey,
                        pe = Object(L.b)() ? a.longTextStyle : "",
                        be = Object(c.useCallback)((function() {
                            T(!R), Object(ce.g)()
                        }), [R]),
                        fe = Object(c.useCallback)((function() {
                            W(!M), Object(ce.e)()
                        }), [M]),
                        Ce = function() {
                            o.push({
                                pathname: X.y,
                                state: {
                                    selectedList: Q.a.CUSTOMERS
                                }
                            })
                        },
                        he = function(e, a) {
                            e.stopPropagation(), a ? (Object(j.d)({
                                transaction_type: $.c.CREDIT,
                                customer_name: null === t || void 0 === t ? void 0 : t.name,
                                customer_Id: null === t || void 0 === t ? void 0 : t.customer_id,
                                user_id: null === l || void 0 === l ? void 0 : l.user_id
                            }), o.push({
                                pathname: "book/".concat(t.customer_id, "/add"),
                                state: {
                                    transactionType: $.c.CREDIT
                                }
                            })) : (Object(j.d)({
                                transaction_type: $.c.DEBIT,
                                customer_name: null === t || void 0 === t ? void 0 : t.name,
                                customer_Id: null === t || void 0 === t ? void 0 : t.customer_id,
                                user_id: null === l || void 0 === l ? void 0 : l.user_id
                            }), o.push({
                                pathname: "book/".concat(t.customer_id, "/add"),
                                state: {
                                    transactionType: $.c.DEBIT
                                }
                            }))
                        },
                        xe = function(e) {
                            h(), x(d("customer_deleted")), v(J.a.INFO), E(!0), g((function() {
                                return Ce
                            })), setTimeout((function() {
                                Object(ne.d)(e)
                            }), 2e3), P(!1)
                        };
                    return i.a.createElement("div", {
                        className: a.customersRow,
                        key: t.customer_id
                    }, i.a.createElement("div", {
                        className: a.customersRowWrapper,
                        onClick: function() {
                            o.push("/book/".concat(t.customer_id)), Object(j.e)(t)
                        },
                        role: "button"
                    }, i.a.createElement("div", {
                        className: a.leftSideWrapper
                    }, i.a.createElement(U.a, {
                        className: a.customerAvatar,
                        src: "".concat(t.image)
                    }, Object(ee.a)(t.name)), i.a.createElement("div", null, i.a.createElement(F.a, {
                        text: t.name,
                        className: a.customerName,
                        arrow: !0,
                        placement: "top-start",
                        isSearchResult: !0
                    }), i.a.createElement(s.a, {
                        className: "".concat(a.rowText, "  ").concat(pe)
                    }, d(me, [ue])))), i.a.createElement("div", {
                        className: a.rightSideWrapper
                    }, i.a.createElement("div", {
                        className: "".concat(a.amountWrapper, " ").concat(Object(L.b)() ? a.amountReducedMargin : "")
                    }, i.a.createElement(s.a, {
                        className: "".concat(a.amountCell, " ").concat(function(e) {
                            return 0 === e ? a.amountCell : e < 0 ? a.youWillGetCell : a.youWillGiveCell
                        }(t.balance), "  ").concat(pe)
                    }, i.a.createElement(m.a, null), " ", Object(b.a)(t.balance)), i.a.createElement(s.a, {
                        className: "".concat(a.rowText, "  ").concat(pe)
                    }, function(e) {
                        return e < 0 ? d("you_will_get") : e > 0 ? d("you_will_give") : "-"
                    }(t.balance))), i.a.createElement("div", {
                        className: a.actionsWrapper
                    }, i.a.createElement(y.a, {
                        className: "".concat(a.actionBtn, " ").concat(n.outlinedPrimaryBtn, " ").concat(pe),
                        onClick: function(e) {
                            return he(e, !0)
                        }
                    }, d("transactions_list_header_debit"), " ", i.a.createElement(m.a, null)), i.a.createElement(y.a, {
                        className: "".concat(a.actionBtn, " ").concat(n.outlinedGreenBtn, "  ").concat(pe),
                        onClick: function(e) {
                            return he(e, !1)
                        }
                    }, d("transactions_list_header_credit"), " ", i.a.createElement(m.a, null))))), i.a.createElement("div", {
                        className: a.kebabMenuWrapper
                    }, i.a.createElement(y.a, {
                        className: "".concat(a.kebabMenuButton, " ").concat(_ && a.activeButton),
                        onClick: function(e) {
                            e.stopPropagation(), k(!_)
                        },
                        ref: se,
                        "aria-controls": _ ? "menu-list-grow" : void 0,
                        "aria-haspopup": "true"
                    }, i.a.createElement(V.a, {
                        width: 4,
                        height: 18,
                        stroke: w.d.LIGHT_MEDIUM_GREY
                    })), i.a.createElement(z.a, {
                        open: _,
                        anchorEl: se,
                        handleCloseMenu: function(e) {
                            e.stopPropagation(), se.current && se.current.contains(e.target) || k(!1)
                        },
                        handleDelete: fe,
                        handleEdit: be,
                        editText: d("edit_customer"),
                        deleteText: d("delete_customer")
                    })), i.a.createElement(K.a, {
                        open: R,
                        onClose: function() {
                            T(!1)
                        },
                        customer: t,
                        onEditCustomerSuccess: function(e) {
                            T(!1), E(!1), h(), x(d("customer_updated")), v(J.a.SUCCESS), setTimeout((function() {
                                Object(ne.c)(e)
                            }), 2e3)
                        }
                    }), i.a.createElement(Z.a, {
                        open: M,
                        onClose: function() {
                            return W(!1)
                        },
                        secondaryAction: function() {
                            W(!1), Object(ce.d)()
                        },
                        primaryAction: function() {
                            var e = Object(ae.e)(),
                                a = Object(ae.d)();
                            P(!0), Object(ce.f)(), void 0 !== e && void 0 !== a ? (W(!1), p.a.deleteCustomer({
                                customerId: null === t || void 0 === t ? void 0 : t.customer_id,
                                user: e,
                                deviceInfo: a,
                                bookId: null === t || void 0 === t ? void 0 : t.book_id
                            }).then((function(e) {
                                xe(e)
                            })).catch((function(e) {
                                Object(oe.a)(e, {
                                    tags: {
                                        module: q.a.DELETE_CUSTOMER
                                    }
                                })
                            }))) : o.replace(X.o)
                        },
                        primaryActionText: d("delete"),
                        secondaryActionText: d("cancel"),
                        title: d("delete_customer"),
                        confirmationText: d("delete_customer_confirmation"),
                        isDeleteDisabled: Y
                    }), i.a.createElement(u.a, {
                        className: a.divider
                    }))
                })),
                de = a(542),
                ue = a(800),
                me = a.n(ue),
                pe = Object(l.a)({
                    emptyCustomerState: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    icon: {
                        width: "205px",
                        height: "140px",
                        marginBottom: "15px",
                        marginLeft: "35px"
                    },
                    text: {
                        fontSize: "16px",
                        marginBottom: "16px"
                    }
                });
            var be = Object(c.memo)((function() {
                    var e = pe(),
                        t = Object(C.b)().t;
                    return i.a.createElement("div", {
                        className: e.emptyCustomerState
                    }, i.a.createElement("img", {
                        src: me.a,
                        alt: "add customers",
                        className: e.icon
                    }), i.a.createElement(s.a, {
                        className: e.text
                    }, t("add_customers")), i.a.createElement(P, null))
                })),
                fe = a(518),
                Ce = a(600),
                he = a(481),
                xe = a(241),
                ge = Object(l.a)({
                    customersListContainer: {
                        flexGrow: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        margin: "16px 16px 16px 24px"
                    },
                    customersList: {
                        display: "".concat(w.i.FLEX),
                        flexDirection: "column",
                        width: "100%",
                        height: "100%",
                        overflowY: "auto",
                        borderRadius: "6px",
                        backgroundColor: w.d.WHITE,
                        boxShadow: w.d.PAPER_SHADOW
                    },
                    filtersListsWrapper: {
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        paddingBottom: "20px",
                        flexWrap: "wrap-reverse",
                        "& div:nth-of-type(2)": {
                            marginLeft: "auto"
                        }
                    }
                }),
                Ee = [0, 0, 0],
                ve = {
                    rootMargin: "600px 0px 0px 0px"
                };
            var Oe = i.a.memo((function(e) {
                    var t = e.customersCount,
                        a = e.customers,
                        n = e.isInitialCustomersFetched,
                        o = e.applyCustomersFiltering,
                        l = e.fetchNextPage,
                        s = e.showPlaceholder,
                        d = ge(),
                        u = Object(c.useState)(N.b.ALL),
                        m = Object(r.a)(u, 2),
                        p = m[0],
                        b = m[1],
                        f = Object(c.useState)(N.d.RECENT),
                        C = Object(r.a)(f, 2),
                        h = C[0],
                        x = C[1],
                        g = Object(c.useRef)(null),
                        E = Object(xe.b)().searchText,
                        v = 0 !== a.length,
                        O = E.length > 0 && localStorage.getItem(he.c) !== he.b.MONEY,
                        w = p !== N.b.ALL,
                        S = a.length,
                        _ = function() {
                            g && g.current && (g.current.scrollTop = 0)
                        };
                    return Object(c.useEffect)((function() {
                        localStorage.getItem(he.c) !== he.b.MONEY && (o(!0, E, N.b.ALL, N.d.RECENT), w && b(N.b.ALL))
                    }), [E]), !v && O && n ? i.a.createElement("div", {
                        className: d.customersListContainer
                    }, i.a.createElement(Ce.a, {
                        resultsCount: t,
                        foundTranslationKey: "found_customers"
                    }), i.a.createElement(de.a, null)) : v || w ? i.a.createElement("div", {
                        className: d.customersListContainer
                    }, i.a.createElement("div", {
                        className: d.filtersListsWrapper
                    }, i.a.createElement(A, {
                        customerFilter: p,
                        customerSort: h,
                        handleFilterChange: function(e) {
                            b(e), o(!0, E, e, h), _(), Object(j.h)(e)
                        },
                        handleSortChange: function(e) {
                            x(e), o(!0, E, p, e), _(), Object(j.k)(e)
                        },
                        handleClearAllFilters: function() {
                            b(N.b.ALL), x(N.d.RECENT), o(!0, E, N.b.ALL, N.d.RECENT), _(), Object(j.j)()
                        },
                        customersCount: w || O ? S : t
                    }), i.a.createElement(P, null)), !v && w ? i.a.createElement(de.a, null) : i.a.createElement(i.a.Fragment, null, O && i.a.createElement(Ce.a, {
                        resultsCount: t,
                        foundTranslationKey: "found_customers"
                    }), i.a.createElement("div", {
                        className: d.customersList
                    }, a.map((function(e, t) {
                        return i.a.createElement(se, {
                            customer: e,
                            key: t
                        })
                    })), s && i.a.createElement(i.a.Fragment, null, i.a.createElement(k.a, {
                        options: ve,
                        onVisible: l
                    }), Ee.map((function(e, t) {
                        return i.a.createElement(fe.a, {
                            key: t
                        })
                    })))))) : n ? i.a.createElement("div", {
                        className: d.customersListContainer
                    }, i.a.createElement(be, null)) : i.a.createElement("div", {
                        className: d.customersListContainer
                    }, i.a.createElement(M.a, null))
                })),
                je = a(492),
                we = a(436),
                Se = a(246),
                _e = Object(l.a)({
                    root: {
                        width: "100%",
                        height: "calc(100vh - 64px)",
                        display: "flex",
                        overflowY: "hidden"
                    }
                });
            t.default = Object(c.memo)((function(e) {
                var t = e.customerId,
                    a = e.setCustomerId,
                    l = _e(),
                    s = Object(we.a)().reRenderKey,
                    d = Object(f.a)().getCurrentBook,
                    u = Object(xe.b)().searchText,
                    m = Object(c.useState)(!1),
                    b = Object(r.a)(m, 2),
                    C = b[0],
                    h = b[1],
                    x = Object(c.useState)(!1),
                    g = Object(r.a)(x, 2),
                    E = g[0],
                    v = g[1],
                    O = Object(c.useState)([]),
                    w = Object(r.a)(O, 2),
                    S = w[0],
                    k = w[1],
                    y = Object(c.useState)(0),
                    I = Object(r.a)(y, 2),
                    N = I[0],
                    R = I[1],
                    T = Object(c.useState)(void 0),
                    L = Object(r.a)(T, 2),
                    D = L[0],
                    A = L[1],
                    M = Object(c.useState)(!0),
                    B = Object(r.a)(M, 2),
                    W = B[0],
                    H = B[1],
                    G = d(),
                    Y = Object(c.useMemo)((function() {
                        return {
                            selectedCustomerId: t,
                            onClick: a
                        }
                    }), [t, a]);
                Object(c.useEffect)((function() {
                    Object(j.i)()
                }), []);
                var P = Object(c.useCallback)((function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        a = arguments.length > 2 ? arguments[2] : void 0,
                        r = arguments.length > 3 ? arguments[3] : void 0;
                    void 0 !== G && (v(!0), p.a.getCustomers(Object(o.a)({
                        bookId: G.book_id,
                        filterBy: a,
                        sortBy: r,
                        limit: Se.a,
                        search: t || u
                    }, e ? {} : {
                        lastCustomerId: D
                    })).then((function(t) {
                        var a = t.data,
                            o = t.count,
                            r = [];
                        !1 === e && (r = Object(n.a)(S)), h(!0), r = [].concat(Object(n.a)(r), Object(n.a)(a)), R(o), k(r), v(!1), r.length > 0 && !E && A(r[r.length - 1].customer_id)
                    })))
                }), [G, S, D, E, u]);
                Object(c.useEffect)((function() {
                    var e = !0;
                    if (!C) return e && P(!0),
                        function() {
                            e = !1
                        }
                }), [C, P]), Object(c.useEffect)((function() {
                    h(!1)
                }), [G, s]), Object(c.useEffect)((function() {
                    H(!1 === C || 0 !== S.length && S.length < N && S.length % Se.a === 0)
                }), [S, C, N]);
                var U = Object(c.useCallback)((function() {
                    !1 === E && P()
                }), [P, E]);
                return i.a.createElement(je.a.Provider, {
                    value: Y,
                    key: s
                }, i.a.createElement("div", {
                    className: l.root
                }, i.a.createElement(Oe, {
                    customersCount: N,
                    customers: S,
                    isInitialCustomersFetched: C,
                    applyCustomersFiltering: P,
                    fetchNextPage: U,
                    showPlaceholder: W
                }), i.a.createElement(_, {
                    customersCount: S.length
                })))
            }))
        },
        926: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                o = a.n(n),
                r = a(184),
                c = a(9),
                i = a(182),
                l = a(427),
                s = a(272),
                d = Object(r.a)((function() {
                    return {
                        root: {
                            display: "".concat(c.i.FLEX)
                        }
                    }
                }));
            var u = Object(n.memo)((function(e) {
                    var t = d();
                    return o.a.createElement("div", {
                        className: t.root
                    }, e.children)
                })),
                m = a(254),
                p = a(242),
                b = Object(r.a)((function() {
                    return {
                        root: {
                            width: "100%",
                            backgroundColor: c.c.WHITE,
                            minHeight: "90px",
                            fontSize: "".concat(c.k["16px"], "rem"),
                            color: c.c.DOVE_GREY
                        }
                    }
                }));
            var f = Object(n.memo)((function(e) {
                    var t = b();
                    return o.a.createElement("div", {
                        className: "".concat(t.root, " ").concat(e.className ? e.className : "")
                    }, e.children)
                })),
                C = a(402),
                h = a(649),
                x = a.n(h),
                g = a(650),
                E = a.n(g),
                v = a(40),
                O = Object(r.a)((function(e) {
                    return {
                        left: {
                            position: "relative"
                        },
                        homeImage: {},
                        bottomImage: {
                            width: "100%",
                            position: "relative"
                        },
                        leftBackground: {
                            width: "95%",
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            position: "relative"
                        },
                        image: {
                            width: "100%",
                            height: "auto"
                        },
                        alertUp: {
                            position: "absolute",
                            bottom: 0,
                            width: 0,
                            height: 0,
                            top: e.spacing(11),
                            borderLeft: "15px solid transparent",
                            borderRight: "15px solid transparent",
                            borderTop: "15px solid ".concat(c.c.WHITE),
                            marginLeft: e.spacing(2)
                        },
                        alertTop: {
                            width: "394px",
                            position: "relative",
                            padding: "20px 24px",
                            borderRadius: e.spacing(1),
                            marginRight: e.spacing(22),
                            marginTop: e.spacing(3),
                            marginBottom: e.spacing(3)
                        },
                        alertDown: {
                            position: "absolute",
                            top: "-14px",
                            width: 0,
                            height: 0,
                            borderLeft: "15px solid transparent",
                            borderRight: "15px solid transparent",
                            borderBottom: "15px solid ".concat(c.c.WHITE),
                            left: e.spacing(1)
                        },
                        alertBottom: {
                            width: "258px",
                            position: "absolute",
                            padding: "18px 24px",
                            borderRadius: e.spacing(1),
                            right: "9%",
                            top: "60%"
                        }
                    }
                }));
            var j = Object(n.memo)((function() {
                    var e = Object(v.b)().t,
                        t = O();
                    return o.a.createElement(C.a, {
                        item: !0,
                        xs: 6,
                        className: t.left
                    }, o.a.createElement("div", {
                        className: t.leftBackground
                    }, o.a.createElement(f, {
                        className: t.alertTop
                    }, o.a.createElement("div", {
                        className: t.alertUp
                    }), e("home_header")), o.a.createElement("div", {
                        className: t.homeImage
                    }, o.a.createElement(p.a, {
                        src: x.a,
                        width: 604,
                        height: 430,
                        alt: "home"
                    })), o.a.createElement("div", {
                        className: t.bottomImage
                    }, o.a.createElement(p.a, {
                        className: t.image,
                        src: E.a,
                        alt: "bottom"
                    }), o.a.createElement(f, {
                        className: t.alertBottom
                    }, o.a.createElement("div", {
                        className: t.alertDown
                    }), e("info")))))
                })),
                w = a(619),
                S = Object(r.a)((function(e) {
                    return {
                        root: {},
                        mainGrid: {
                            minHeight: "720px",
                            maxHeight: window.screen.height
                        },
                        headerLogo: {
                            display: "".concat(c.i.FLEX),
                            width: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: e.spacing(10)
                        },
                        right: {
                            backgroundColor: c.c.WHITE
                        },
                        rightGrid: {
                            width: "55%",
                            marginTop: e.spacing(3),
                            marginLeft: e.spacing(20),
                            marginRight: e.spacing(20)
                        },
                        subHeader: {
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            color: c.c.BLACK,
                            fontWeight: c.g.BOLD,
                            fontSize: "".concat(c.k["22px"], "rem"),
                            marginBottom: e.spacing(3)
                        },
                        trustScreen: {
                            justifyContent: "center",
                            backgroundColor: c.c.TRUSTBACKGROUND,
                            fontSize: "".concat(c.k["16px"], "rem"),
                            marginBottom: e.spacing(4),
                            "& div": {
                                marginLeft: e.spacing(2)
                            }
                        },
                        hr: {
                            border: "solid 1px #dedede"
                        },
                        margin21: {
                            marginBottom: e.spacing(21)
                        },
                        language: {
                            display: "none"
                        }
                    }
                }));
            var _ = Object(n.memo)((function() {
                var e = S();
                return o.a.createElement("div", {
                    className: e.root
                }, o.a.createElement(l.a, null, o.a.createElement("div", {
                    className: e.headerLogo
                }, o.a.createElement(s.a, {
                    width: 122,
                    height: 32
                }))), o.a.createElement(C.a, {
                    className: e.mainGrid,
                    container: !0
                }, o.a.createElement(j, null), o.a.createElement(C.a, {
                    item: !0,
                    xs: 6,
                    className: e.right
                }, o.a.createElement("div", {
                    className: e.rightGrid
                }, o.a.createElement(u, null, o.a.createElement("div", {
                    className: e.subHeader
                }, "Choose language")), o.a.createElement(i.a, {
                    className: e.trustScreen
                }), o.a.createElement(m.a, {
                    className: e.language
                }), o.a.createElement("div", {
                    className: e.margin21
                }), o.a.createElement("hr", {
                    className: e.hr
                }), o.a.createElement(w.a, null)))))
            }));
            t.default = function() {
                return o.a.createElement(_, null)
            }
        }
    }
]);
//# sourceMappingURL=dweb-book.00bd9361.chunk.js.map