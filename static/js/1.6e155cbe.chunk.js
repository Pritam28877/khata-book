(this.webpackJsonpkhatabook = this.webpackJsonpkhatabook || []).push([
    [1], {
        514: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return re
            }));
            var r = t(0),
                o = t.n(r),
                i = t(14),
                a = t.n(i);

            function u(e, n, t, r) {
                return new(t || (t = Promise))((function(o, i) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (n) {
                            i(n)
                        }
                    }

                    function u(e) {
                        try {
                            c(r.throw(e))
                        } catch (n) {
                            i(n)
                        }
                    }

                    function c(e) {
                        var n;
                        e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
                            e(n)
                        }))).then(a, u)
                    }
                    c((r = r.apply(e, n || [])).next())
                }))
            }

            function c(e, n) {
                var t, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" === typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = n.call(e, a)
                            } catch (u) {
                                i = [6, u], r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            }
            Object.create;

            function l(e, n) {
                var t = "function" === typeof Symbol && e[Symbol.iterator];
                if (!t) return e;
                var r, o, i = t.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === n || n-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (u) {
                    o = {
                        error: u
                    }
                } finally {
                    try {
                        r && !r.done && (t = i.return) && t.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            }
            Object.create;
            var f = new Map([
                ["avi", "video/avi"],
                ["gif", "image/gif"],
                ["ico", "image/x-icon"],
                ["jpeg", "image/jpeg"],
                ["jpg", "image/jpeg"],
                ["mkv", "video/x-matroska"],
                ["mov", "video/quicktime"],
                ["mp4", "video/mp4"],
                ["pdf", "application/pdf"],
                ["png", "image/png"],
                ["zip", "application/zip"],
                ["doc", "application/msword"],
                ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
            ]);

            function s(e, n) {
                var t = function(e) {
                    var n = e.name;
                    if (n && -1 !== n.lastIndexOf(".") && !e.type) {
                        var t = n.split(".").pop().toLowerCase(),
                            r = f.get(t);
                        r && Object.defineProperty(e, "type", {
                            value: r,
                            writable: !1,
                            configurable: !1,
                            enumerable: !0
                        })
                    }
                    return e
                }(e);
                if ("string" !== typeof t.path) {
                    var r = e.webkitRelativePath;
                    Object.defineProperty(t, "path", {
                        value: "string" === typeof n ? n : "string" === typeof r && r.length > 0 ? r : e.name,
                        writable: !1,
                        configurable: !1,
                        enumerable: !0
                    })
                }
                return t
            }
            var p = [".DS_Store", "Thumbs.db"];

            function d(e) {
                return (null !== e.target && e.target.files ? y(e.target.files) : []).map((function(e) {
                    return s(e)
                }))
            }

            function v(e, n) {
                return u(this, void 0, void 0, (function() {
                    var t;
                    return c(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return e.items ? (t = y(e.items).filter((function(e) {
                                    return "file" === e.kind
                                })), "drop" !== n ? [2, t] : [4, Promise.all(t.map(b))]) : [3, 2];
                            case 1:
                                return [2, g(m(r.sent()))];
                            case 2:
                                return [2, g(y(e.files).map((function(e) {
                                    return s(e)
                                })))]
                        }
                    }))
                }))
            }

            function g(e) {
                return e.filter((function(e) {
                    return -1 === p.indexOf(e.name)
                }))
            }

            function y(e) {
                for (var n = [], t = 0; t < e.length; t++) {
                    var r = e[t];
                    n.push(r)
                }
                return n
            }

            function b(e) {
                if ("function" !== typeof e.webkitGetAsEntry) return h(e);
                var n = e.webkitGetAsEntry();
                return n && n.isDirectory ? O(n) : h(e)
            }

            function m(e) {
                return e.reduce((function(e, n) {
                    return function() {
                        for (var e = [], n = 0; n < arguments.length; n++) e = e.concat(l(arguments[n]));
                        return e
                    }(e, Array.isArray(n) ? m(n) : [n])
                }), [])
            }

            function h(e) {
                var n = e.getAsFile();
                if (!n) return Promise.reject(e + " is not a File");
                var t = s(n);
                return Promise.resolve(t)
            }

            function D(e) {
                return u(this, void 0, void 0, (function() {
                    return c(this, (function(n) {
                        return [2, e.isDirectory ? O(e) : j(e)]
                    }))
                }))
            }

            function O(e) {
                var n = e.createReader();
                return new Promise((function(e, t) {
                    var r = [];
                    ! function o() {
                        var i = this;
                        n.readEntries((function(n) {
                            return u(i, void 0, void 0, (function() {
                                var i, a, u;
                                return c(this, (function(c) {
                                    switch (c.label) {
                                        case 0:
                                            if (n.length) return [3, 5];
                                            c.label = 1;
                                        case 1:
                                            return c.trys.push([1, 3, , 4]), [4, Promise.all(r)];
                                        case 2:
                                            return i = c.sent(), e(i), [3, 4];
                                        case 3:
                                            return a = c.sent(), t(a), [3, 4];
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            u = Promise.all(n.map(D)), r.push(u), o(), c.label = 6;
                                        case 6:
                                            return [2]
                                    }
                                }))
                            }))
                        }), (function(e) {
                            t(e)
                        }))
                    }()
                }))
            }

            function j(e) {
                return u(this, void 0, void 0, (function() {
                    return c(this, (function(n) {
                        return [2, new Promise((function(n, t) {
                            e.file((function(t) {
                                var r = s(t, e.fullPath);
                                n(r)
                            }), (function(e) {
                                t(e)
                            }))
                        }))]
                    }))
                }))
            }
            var w = t(643),
                F = t.n(w);

            function A(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == t) return;
                    var r, o, i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (t = t.call(e); !(a = (r = t.next()).done) && (i.push(r.value), !n || i.length !== n); a = !0);
                    } catch (c) {
                        u = !0, o = c
                    } finally {
                        try {
                            a || null == t.return || t.return()
                        } finally {
                            if (u) throw o
                        }
                    }
                    return i
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" === typeof e) return k(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return k(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function k(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }
            var E = function(e) {
                    e = Array.isArray(e) && 1 === e.length ? e[0] : e;
                    var n = Array.isArray(e) ? "one of ".concat(e.join(", ")) : e;
                    return {
                        code: "file-invalid-type",
                        message: "File type must be ".concat(n)
                    }
                },
                S = function(e) {
                    return {
                        code: "file-too-large",
                        message: "File is larger than ".concat(e, " bytes")
                    }
                },
                x = function(e) {
                    return {
                        code: "file-too-small",
                        message: "File is smaller than ".concat(e, " bytes")
                    }
                },
                C = {
                    code: "too-many-files",
                    message: "Too many files"
                };

            function P(e, n) {
                var t = "application/x-moz-file" === e.type || F()(e, n);
                return [t, t ? null : E(n)]
            }

            function z(e, n, t) {
                if (R(e.size))
                    if (R(n) && R(t)) {
                        if (e.size > t) return [!1, S(t)];
                        if (e.size < n) return [!1, x(n)]
                    } else {
                        if (R(n) && e.size < n) return [!1, x(n)];
                        if (R(t) && e.size > t) return [!1, S(t)]
                    }
                return [!0, null]
            }

            function R(e) {
                return void 0 !== e && null !== e
            }

            function T(e) {
                var n = e.files,
                    t = e.accept,
                    r = e.minSize,
                    o = e.maxSize,
                    i = e.multiple,
                    a = e.maxFiles;
                return !(!i && n.length > 1 || i && a >= 1 && n.length > a) && n.every((function(e) {
                    var n = A(P(e, t), 1)[0],
                        i = A(z(e, r, o), 1)[0];
                    return n && i
                }))
            }

            function I(e) {
                return "function" === typeof e.isPropagationStopped ? e.isPropagationStopped() : "undefined" !== typeof e.cancelBubble && e.cancelBubble
            }

            function L(e) {
                return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, (function(e) {
                    return "Files" === e || "application/x-moz-file" === e
                })) : !!e.target && !!e.target.files
            }

            function K(e) {
                e.preventDefault()
            }

            function B(e) {
                return -1 !== e.indexOf("MSIE") || -1 !== e.indexOf("Trident/")
            }

            function M(e) {
                return -1 !== e.indexOf("Edge/")
            }

            function $() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
                return B(e) || M(e)
            }

            function G() {
                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                return function(e) {
                    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
                    return n.some((function(n) {
                        return !I(e) && n && n.apply(void 0, [e].concat(r)), I(e)
                    }))
                }
            }
            var _ = ["children"],
                q = ["open"],
                J = ["refKey", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
                N = ["refKey", "onChange", "onClick"];

            function U(e) {
                return function(e) {
                    if (Array.isArray(e)) return Q(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || H(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function W(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == t) return;
                    var r, o, i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (t = t.call(e); !(a = (r = t.next()).done) && (i.push(r.value), !n || i.length !== n); a = !0);
                    } catch (c) {
                        u = !0, o = c
                    } finally {
                        try {
                            a || null == t.return || t.return()
                        } finally {
                            if (u) throw o
                        }
                    }
                    return i
                }(e, n) || H(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function H(e, n) {
                if (e) {
                    if ("string" === typeof e) return Q(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Q(e, n) : void 0
                }
            }

            function Q(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function V(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function X(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? V(Object(t), !0).forEach((function(n) {
                        Y(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : V(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }

            function Y(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }

            function Z(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                }
                return o
            }
            var ee = Object(r.forwardRef)((function(e, n) {
                var t = e.children,
                    i = re(Z(e, _)),
                    a = i.open,
                    u = Z(i, q);
                return Object(r.useImperativeHandle)(n, (function() {
                    return {
                        open: a
                    }
                }), [a]), o.a.createElement(r.Fragment, null, t(X(X({}, u), {}, {
                    open: a
                })))
            }));
            ee.displayName = "Dropzone";
            var ne = {
                disabled: !1,
                getFilesFromEvent: function(e) {
                    return u(this, void 0, void 0, (function() {
                        return c(this, (function(n) {
                            return [2, (t = e, t.dataTransfer && e.dataTransfer ? v(e.dataTransfer, e.type) : d(e))];
                            var t
                        }))
                    }))
                },
                maxSize: 1 / 0,
                minSize: 0,
                multiple: !0,
                maxFiles: 0,
                preventDropOnDocument: !0,
                noClick: !1,
                noKeyboard: !1,
                noDrag: !1,
                noDragEventsBubbling: !1,
                validator: null
            };
            ee.defaultProps = ne, ee.propTypes = {
                children: a.a.func,
                accept: a.a.oneOfType([a.a.string, a.a.arrayOf(a.a.string)]),
                multiple: a.a.bool,
                preventDropOnDocument: a.a.bool,
                noClick: a.a.bool,
                noKeyboard: a.a.bool,
                noDrag: a.a.bool,
                noDragEventsBubbling: a.a.bool,
                minSize: a.a.number,
                maxSize: a.a.number,
                maxFiles: a.a.number,
                disabled: a.a.bool,
                getFilesFromEvent: a.a.func,
                onFileDialogCancel: a.a.func,
                onDragEnter: a.a.func,
                onDragLeave: a.a.func,
                onDragOver: a.a.func,
                onDrop: a.a.func,
                onDropAccepted: a.a.func,
                onDropRejected: a.a.func,
                validator: a.a.func
            };
            var te = {
                isFocused: !1,
                isFileDialogActive: !1,
                isDragActive: !1,
                isDragAccept: !1,
                isDragReject: !1,
                draggedFiles: [],
                acceptedFiles: [],
                fileRejections: []
            };

            function re() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = X(X({}, ne), e),
                    t = n.accept,
                    o = n.disabled,
                    i = n.getFilesFromEvent,
                    a = n.maxSize,
                    u = n.minSize,
                    c = n.multiple,
                    l = n.maxFiles,
                    f = n.onDragEnter,
                    s = n.onDragLeave,
                    p = n.onDragOver,
                    d = n.onDrop,
                    v = n.onDropAccepted,
                    g = n.onDropRejected,
                    y = n.onFileDialogCancel,
                    b = n.preventDropOnDocument,
                    m = n.noClick,
                    h = n.noKeyboard,
                    D = n.noDrag,
                    O = n.noDragEventsBubbling,
                    j = n.validator,
                    w = Object(r.useRef)(null),
                    F = Object(r.useRef)(null),
                    A = Object(r.useReducer)(oe, te),
                    k = W(A, 2),
                    E = k[0],
                    S = k[1],
                    x = E.isFocused,
                    R = E.isFileDialogActive,
                    B = E.draggedFiles,
                    M = Object(r.useCallback)((function() {
                        F.current && (S({
                            type: "openDialog"
                        }), F.current.value = null, F.current.click())
                    }), [S]),
                    _ = function() {
                        R && setTimeout((function() {
                            F.current && (F.current.files.length || (S({
                                type: "closeDialog"
                            }), "function" === typeof y && y()))
                        }), 300)
                    };
                Object(r.useEffect)((function() {
                    return window.addEventListener("focus", _, !1),
                        function() {
                            window.removeEventListener("focus", _, !1)
                        }
                }), [F, R, y]);
                var q = Object(r.useCallback)((function(e) {
                        w.current && w.current.isEqualNode(e.target) && (32 !== e.keyCode && 13 !== e.keyCode || (e.preventDefault(), M()))
                    }), [w, F]),
                    H = Object(r.useCallback)((function() {
                        S({
                            type: "focus"
                        })
                    }), []),
                    Q = Object(r.useCallback)((function() {
                        S({
                            type: "blur"
                        })
                    }), []),
                    V = Object(r.useCallback)((function() {
                        m || ($() ? setTimeout(M, 0) : M())
                    }), [F, m]),
                    ee = Object(r.useRef)([]),
                    re = function(e) {
                        w.current && w.current.contains(e.target) || (e.preventDefault(), ee.current = [])
                    };
                Object(r.useEffect)((function() {
                    return b && (document.addEventListener("dragover", K, !1), document.addEventListener("drop", re, !1)),
                        function() {
                            b && (document.removeEventListener("dragover", K), document.removeEventListener("drop", re))
                        }
                }), [w, b]);
                var ie = Object(r.useCallback)((function(e) {
                        e.preventDefault(), e.persist(), pe(e), ee.current = [].concat(U(ee.current), [e.target]), L(e) && Promise.resolve(i(e)).then((function(n) {
                            I(e) && !O || (S({
                                draggedFiles: n,
                                isDragActive: !0,
                                type: "setDraggedFiles"
                            }), f && f(e))
                        }))
                    }), [i, f, O]),
                    ae = Object(r.useCallback)((function(e) {
                        e.preventDefault(), e.persist(), pe(e);
                        var n = L(e);
                        if (n && e.dataTransfer) try {
                            e.dataTransfer.dropEffect = "copy"
                        } catch (t) {}
                        return n && p && p(e), !1
                    }), [p, O]),
                    ue = Object(r.useCallback)((function(e) {
                        e.preventDefault(), e.persist(), pe(e);
                        var n = ee.current.filter((function(e) {
                                return w.current && w.current.contains(e)
                            })),
                            t = n.indexOf(e.target); - 1 !== t && n.splice(t, 1), ee.current = n, n.length > 0 || (S({
                            isDragActive: !1,
                            type: "setDraggedFiles",
                            draggedFiles: []
                        }), L(e) && s && s(e))
                    }), [w, s, O]),
                    ce = Object(r.useCallback)((function(e) {
                        e.preventDefault(), e.persist(), pe(e), ee.current = [], L(e) && Promise.resolve(i(e)).then((function(n) {
                            if (!I(e) || O) {
                                var r = [],
                                    o = [];
                                n.forEach((function(e) {
                                    var n = W(P(e, t), 2),
                                        i = n[0],
                                        c = n[1],
                                        l = W(z(e, u, a), 2),
                                        f = l[0],
                                        s = l[1],
                                        p = j ? j(e) : null;
                                    if (i && f && !p) r.push(e);
                                    else {
                                        var d = [c, s];
                                        p && (d = d.concat(p)), o.push({
                                            file: e,
                                            errors: d.filter((function(e) {
                                                return e
                                            }))
                                        })
                                    }
                                })), (!c && r.length > 1 || c && l >= 1 && r.length > l) && (r.forEach((function(e) {
                                    o.push({
                                        file: e,
                                        errors: [C]
                                    })
                                })), r.splice(0)), S({
                                    acceptedFiles: r,
                                    fileRejections: o,
                                    type: "setFiles"
                                }), d && d(r, o, e), o.length > 0 && g && g(o, e), r.length > 0 && v && v(r, e)
                            }
                        })), S({
                            type: "reset"
                        })
                    }), [c, t, u, a, l, i, d, v, g, O, j]),
                    le = function(e) {
                        return o ? null : e
                    },
                    fe = function(e) {
                        return h ? null : le(e)
                    },
                    se = function(e) {
                        return D ? null : le(e)
                    },
                    pe = function(e) {
                        O && e.stopPropagation()
                    },
                    de = Object(r.useMemo)((function() {
                        return function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = e.refKey,
                                t = void 0 === n ? "ref" : n,
                                r = e.onKeyDown,
                                i = e.onFocus,
                                a = e.onBlur,
                                u = e.onClick,
                                c = e.onDragEnter,
                                l = e.onDragOver,
                                f = e.onDragLeave,
                                s = e.onDrop,
                                p = Z(e, J);
                            return X(X(Y({
                                onKeyDown: fe(G(r, q)),
                                onFocus: fe(G(i, H)),
                                onBlur: fe(G(a, Q)),
                                onClick: le(G(u, V)),
                                onDragEnter: se(G(c, ie)),
                                onDragOver: se(G(l, ae)),
                                onDragLeave: se(G(f, ue)),
                                onDrop: se(G(s, ce))
                            }, t, w), o || h ? {} : {
                                tabIndex: 0
                            }), p)
                        }
                    }), [w, q, H, Q, V, ie, ae, ue, ce, h, D, o]),
                    ve = Object(r.useCallback)((function(e) {
                        e.stopPropagation()
                    }), []),
                    ge = Object(r.useMemo)((function() {
                        return function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = e.refKey,
                                r = void 0 === n ? "ref" : n,
                                o = e.onChange,
                                i = e.onClick,
                                a = Z(e, N),
                                u = Y({
                                    accept: t,
                                    multiple: c,
                                    type: "file",
                                    style: {
                                        display: "none"
                                    },
                                    onChange: le(G(o, ce)),
                                    onClick: le(G(i, ve)),
                                    autoComplete: "off",
                                    tabIndex: -1
                                }, r, F);
                            return X(X({}, u), a)
                        }
                    }), [F, t, c, ce, o]),
                    ye = B.length,
                    be = ye > 0 && T({
                        files: B,
                        accept: t,
                        minSize: u,
                        maxSize: a,
                        multiple: c,
                        maxFiles: l
                    }),
                    me = ye > 0 && !be;
                return X(X({}, E), {}, {
                    isDragAccept: be,
                    isDragReject: me,
                    isFocused: x && !o,
                    getRootProps: de,
                    getInputProps: ge,
                    rootRef: w,
                    inputRef: F,
                    open: le(M)
                })
            }

            function oe(e, n) {
                switch (n.type) {
                    case "focus":
                        return X(X({}, e), {}, {
                            isFocused: !0
                        });
                    case "blur":
                        return X(X({}, e), {}, {
                            isFocused: !1
                        });
                    case "openDialog":
                        return X(X({}, e), {}, {
                            isFileDialogActive: !0
                        });
                    case "closeDialog":
                        return X(X({}, e), {}, {
                            isFileDialogActive: !1
                        });
                    case "setDraggedFiles":
                        var t = n.isDragActive,
                            r = n.draggedFiles;
                        return X(X({}, e), {}, {
                            draggedFiles: r,
                            isDragActive: t
                        });
                    case "setFiles":
                        return X(X({}, e), {}, {
                            acceptedFiles: n.acceptedFiles,
                            fileRejections: n.fileRejections
                        });
                    case "reset":
                        return X({}, te);
                    default:
                        return e
                }
            }
        },
        643: function(e, n, t) {
            "use strict";
            n.__esModule = !0, n.default = function(e, n) {
                if (e && n) {
                    var t = Array.isArray(n) ? n : n.split(","),
                        r = e.name || "",
                        o = (e.type || "").toLowerCase(),
                        i = o.replace(/\/.*$/, "");
                    return t.some((function(e) {
                        var n = e.trim().toLowerCase();
                        return "." === n.charAt(0) ? r.toLowerCase().endsWith(n) : n.endsWith("/*") ? i === n.replace(/\/.*$/, "") : o === n
                    }))
                }
                return !0
            }
        }
    }
]);
//# sourceMappingURL=1.6e155cbe.chunk.js.map