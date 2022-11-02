(this.webpackJsonpkhatabook = this.webpackJsonpkhatabook || []).push([
    [27], {
        10: function(e, n, t) {
            "use strict";
            t.d(n, "e", (function() {
                return m
            })), t.d(n, "i", (function() {
                return a
            })), t.d(n, "a", (function() {
                return o
            })), t.d(n, "c", (function() {
                return r
            })), t.d(n, "j", (function() {
                return i
            })), t.d(n, "b", (function() {
                return c
            })), t.d(n, "d", (function() {
                return l
            })), t.d(n, "f", (function() {
                return s
            })), t.d(n, "h", (function() {
                return u
            })), t.d(n, "g", (function() {
                return d
            })), t.d(n, "k", (function() {
                return b
            }));
            var a, o, r, i, c, l, s, u, d, b, m = "kb-database";
            ! function(e) {
                e.BOOKS = "books", e.CUSTOMER = "customers", e.TRANSACTION = "transactions", e.BOOK_SYNC_INFO = "bookSyncInfo", e.INVOICE = "invoices", e.PAYOUT = "payouts", e.CONTACTS = "contacts"
            }(a || (a = {})),
            function(e) {
                e.DIRTY = "bookDirty"
            }(o || (o = {})),
            function(e) {
                e.NAME = "customerName", e.AMOUNT = "customerAmount", e.COUNT = "customerCount", e.DIRTY = "customerDirty", e.TRANSACTION_TIMESTAMP = "customerTransactionTimestamp", e.ACTIVE_BOOK = "customerBookTimestamp", e.PHONE = "customerPhone"
            }(r || (r = {})),
            function(e) {
                e.CUSTOMER = "transactionCust", e.ATTACHMENT_DIRTY = "transactionAttachmentDirty", e.DIRTY = "transactionDirty"
            }(i || (i = {})),
            function(e) {
                e.ALL = "ALL", e.RECEIVABLES = "RECEIVABLES", e.PAYABLES = "PAYABLES", e.SETTLED = "SETTLED"
            }(c || (c = {})),
            function(e) {
                e.RECENT = "RECENT", e.HIGH_AMOUNT = "HIGH_AMOUNT", e.NAME = "NAME", e.OLDEST = "OLDEST", e.LEAST_AMOUNT = "LEAST_AMOUNT"
            }(l || (l = {})),
            function(e) {
                e.BOOK_ID = "invoiceBookId"
            }(s || (s = {})),
            function(e) {
                e.BOOK_ID = "payoutBookId"
            }(u || (u = {})),
            function(e) {
                e.ALL = "ALL", e.PENDING = "PENDING", e.RECEIVED = "RECEIVED", e.SETTLED = "SETTLED", e.SUCCESS = "SUCCESS"
            }(d || (d = {})),
            function(e) {
                e.ALL = "ALL", e.LINK = "LINK", e.QR = "QR", e.GIFT = "GIFT"
            }(b || (b = {}))
        },
        106: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return a
            }));
            var a = {
                ERROR_BOUNDARY: "ERROR_BOUNDARY",
                ADD_BUSINESS: "ADD_BUSINESS",
                LANG_PROVIDER: "LANG_PROVIDER",
                API_HELPER: "API_HELPER",
                BOOK_LISTING: "BOOK_LISTING",
                ADD_CUSTOMER: "ADD_CUSTOMER",
                DELETE_TRANSACTION: "DELETE_TRANSACTION",
                DELETE_CUSTOMER: "DELETE_CUSTOMER",
                DELETE_BOOK: "DELETE_BOOK",
                TRANSACTION_FORM: "TRANSACTION_FORM",
                TRANSACTION_LISTING: "TRANSACTION_LISTING",
                LOGOUT: "LOGOUT",
                SYNC: "SYNC",
                RESTORE_TRANSACTION: "RESTORE_TRANSACTION",
                RESTORE_CUSTOMER: "RESTORE_CUSTOMER",
                RESTORE_BOOK: "RESTORE_BOOK",
                FETCH_INVOICES: "FETCH_INVOICES",
                FETCH_PAYOUTS: "FETCH_PAYOUTS"
            }
        },
        109: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return a
            })), t.d(n, "b", (function() {
                return o
            })), t.d(n, "c", (function() {
                return r
            }));
            var a = {
                    NUMERIC: "numeric",
                    TEXT: "text",
                    DECIMAL: "decimal"
                },
                o = {
                    NUMBER_ONLY: "[0-9]*"
                },
                r = {
                    NUMBER_ONLY: /^[0-9]+$/
                }
        },
        110: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return a
            })), t.d(n, "b", (function() {
                return o
            })), t.d(n, "c", (function() {
                return r
            }));
            var a = "en",
                o = "KB_LOCALE",
                r = ["en", "hi", "en_US", "mr", "te", "bn", "kn", "pa", "gu", "ta", "ml", "or", "as"]
        },
        115: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return o
            })), t.d(n, "c", (function() {
                return r
            })), t.d(n, "b", (function() {
                return i
            }));
            var a = t(92),
                o = function() {
                    return Object.keys(a.a).map((function(e) {
                        var n = a.a[e].split(",");
                        return {
                            id: "".concat(e),
                            label: "".concat(n[6], " - ").concat(n[4]),
                            line: a.a[e]
                        }
                    }))
                },
                r = function(e) {
                    return a.a[e].split(",")[4]
                },
                i = function(e) {
                    return a.a[e].split(",")[6]
                }
        },
        118: function(e, n, t) {
            "use strict";
            var a;
            t.d(n, "a", (function() {
                    return a
                })),
                function(e) {
                    e.LANGUAGE_SELECTED = "LANGUAGE_SELECTED", e.REQUEST_OTP_CLICKED = "REQUEST_OTP_CLICKED", e.OTP_VERIFY_CLICKED = "OTP_VERIFY_CLICKED", e.NEW_BUSINESS_SUBMITTED = "NEW_BUSINESS_SUBMITTED", e.ADD_NEW_CUSTOMER_CLICKED = "ADD_NEW_CUSTOMER_CLICKED", e.BOOK_CUSTOMER_CLICKED = "BOOK_CUSTOMER_CLICKED", e.BOOK_SELECTION_CLICKED = "BOOK_SELECTION_CLICKED", e.BOOK_CHANGED = "BOOK_CHANGED", e.CREATE_NEW_BOOK_CLICKED = "CREATE_NEW_BOOK_CLICKED", e.SEARCH_CLICKED = "SEARCH_CLICKED", e.SEARCH_TYPED = "SEARCH_TYPED", e.SEARCH_CLOSED = "SEARCH_CLOSED", e.NEW_CUSTOMER_SAVED = "NEW_CUSTOMER_SAVED", e.ADD_NEW_DEBIT_CLICKED = "ADD_NEW_DEBIT_CLICKED", e.ADD_NEW_CREDIT_CLICKED = "ADD_NEW_CREDIT_CLICKED", e.KHATA_TRANSACTION_CLICKED = "KHATA_TRANSACTION_CLICKED", e.KHATA_SMS_CLICKED = "KHATA_SMS_CLICKED", e.KHATA_CALL_CLICKED = "KHATA_CALL_CLICKED", e.KHATA_WHATSAPP_CLICKED = "KHATA_WHATSAPP_CLICKED", e.NEW_TRANSACTION_SAVED = "NEW_TRANSACTION_SAVED", e.EDIT_TRANSACTION_CLICKED = "EDIT_TRANSACTION_CLICKED", e.DELETE_TRANSACTION_CLICKED = "DELETE_TRANSACTION_CLICKED", e.TRANSACTION_DELETED = "TRANSACTION_DELETED", e.TRANSACTION_WHATSAPP_CLICKED = "TRANSACTION_WHATSAPP_CLICKED", e.TRANSACTION_SHARE_CLICKED = "TRANSACTION_SHARE_CLICKED", e.TRANSACTION_SAVED = "TRANSACTION_SAVED", e.CALL_US_CLICKED = "CALL_US_CLICKED", e.CHAT_WITH_US_CLICKED = "CHAT_WITH_US_CLICKED", e.EDIT_PROFILE_CLICKED = "EDIT_PROFILE_CLICKED", e.EDIT_PROFILE_PHOTO_CLICKED = "EDIT_PROFILE_PHOTO_CLICKED", e.EDIT_YOUR_NAME_CLICKED = "EDIT_YOUR_NAME_CLICKED", e.EDIT_BUSINESS_NAME_CLICKED = "EDIT_BUSINESS_NAME_CLICKED", e.SAVE_PROFILE_CLICKED = "SAVE_PROFILE_CLICKED", e.LOGOUT_CLICKED = "LOGOUT_CLICKED", e.LANGUAGE_CHANGE_CLICKED = "LANGUAGE_CHANGE_CLICKED", e.LANGUAGE_CHANGED = "LANGUAGE_CHANGED", e.HOME_CLICKED = "HOME_CLICKED", e.MORE_CLICKED = "MORE_CLICKED", e.LoginScreenView = "LoginScreenView", e.OnboardingLanguageSelectionDropdown = "OnboardingLanguageSelectionDropdown", e.OnboardingLanguageSelected = "OnboardingLanguageSelected", e.UserSelectsLanguage = "UserSelectsLanguage", e.ViewTnCPolicy = "ViewTnCPolicy", e.ViewPrivacyPolicy = "ViewPrivacyPolicy", e.OnboardingCountryPickerClick = "OnboardingCountryPickerClick", e.OnboardingCountrySelected = "OnboardingCountrySelected", e.OnboardingRequestOtp = "OnboardingRequestOtp", e.OnboardingEditNumberClick = "OnboardingEditNumberClick", e.OnboardingResendOtpClick = "OnboardingResendOtpClick", e.OnboardingVerifyOtp = "OnboardingVerifyOtp", e.OnboardingLaunchMainScreen = "OnboardingLaunchMainScreen", e.OnboardingError = "OnboardingError", e.UniqueLoginSuccess = "UniqueLoginSuccess", e.OnboardingCreateLedgerScreenView = "OnboardingCreateLedgerScreenView", e.OnboardingGetStartedClick = "OnboardingGetStartedClick", e.HomePageView = "HomePageView", e.HomeSidebarMoneyClick = "HomeSidebarMoneyClick", e.HomeSidebarSettingsClick = "HomeSidebarSettingsClick", e.AddNewCustomerClick = "AddNewCustomerClick", e.HomeItemClick = "HomeItemClick", e.HomeSidebarReportsClick = "HomeSidebarReportsClick", e.HomePageAddLedgerClick = "HomePageAddLedgerClick", e.TransactionKebabMenuActionClick = "TransactionKebabMenuActionClick", e.TransactionKebabMenuEditEntryClick = "TransactionKebabMenuEditEntryClick", e.TransactionKebabMenuDeleteTransactionClick = "TransactionKebabMenuDeleteTransactionClick", e.UserNameClick = "UserNameClick", e.BookProfileAboutUsClick = "BookProfileAboutUsClick", e.BookProfileAboutKhatabookClick = "BookProfileAboutKhatabookClick", e.BookProfilePrivacyPolicyClick = "BookProfilePrivacyPolicyClick", e.BookProfileTermsAndConditionsClick = "BookProfileTermsAndConditionsClick", e.AddNewLedgerGetStartedClick = "AddNewLedgerGetStartedClick", e.SaveNewCustomer = "SaveNewCustomer", e.SaveTransaction = "SaveTransaction", e.SaveNewTransaction = "SaveNewTransaction", e.AddTransaction = "AddTransaction", e.ConfirmDeleteTransactionClick = "ConfirmDeleteTransactionClick", e.PaymentReminderShareOnWhatsApp = "PaymentReminderShareOnWhatsApp", e.CustomerKhataOnTransactionClicked = "CustomerKhataOnTransactionClicked", e.HomeBannerClick = "HomeBannerClick", e.TryForFreeClick = "TryForFreeClick", e.HomeFilterClick = "HomeFilterClick", e.HomeRefreshFilter = "HomeRefreshFilter", e.HomeRefreshSort = "HomeRefreshSort", e.HomeRemoveFilterClick = "HomeRemoveFilterClick", e.EditCustomerClick = "EditCustomerClick", e.DeleteCustomerClick = "DeleteCustomerClick", e.SaveCustomer = "SaveCustomer", e.AddAddressClick = "AddAddressClick", e.AddPhoneNumberClick = "AddPhoneNumberClick", e.SaveAddressClick = "SaveAddressClick", e.SavePhoneNumberClick = "SavePhoneNumberClick", e.DeleteCustomerConfirmClick = "DeleteCustomerConfirmClick", e.DeleteCustomerCancelClick = "DeleteCustomerCancelClick", e.SettingsBackupInformationClick = "SettingsBackupInformationClick", e.SettingsRecycleBinClick = "SettingsRecycleBinClick", e.SettingsDeleteKhataClick = "SettingsDeleteKhataClick", e.DeleteKhataConfirmClick = "DeleteKhataConfirmClick", e.RecycleBinOnUndoClicked = "RecycleBinOnUndoClicked", e.RecycleBinRecoverItemConfirmation = "RecycleBinRecoverItemConfirmation", e.SettingCurrencyClick = "SettingCurrencyClick", e.CurrencyDropDownClick = "CurrencyDropDownClick", e.UserSelectsCurrency = "UserSelectsCurrency", e.HomeProfileClick = "HomeProfileClick", e.ProfileClick = "ProfileClick", e.ProfileSaveClick = "ProfileSaveClick", e.ProfileSaveConfirmClick = "ProfileSaveConfirmClick", e.ProfileLogoutClick = "ProfileLogoutClick", e.MoneytabAddBankAccountPageView = "MoneytabAddBankAccountPageView", e.MoneytabKYCPageView = "MoneytabKYCPageView", e.MoneytabUseQRCodeClick = "MoneytabUseQRCodeClick", e.PaymentHistoryTransactionsClick = "PaymentHistoryTransactionsClick", e.PaymentHistorySettlementsClick = "PaymentHistorySettlementsClick", e.QRCodePlaceOrderClick = "QRCodePlaceOrderClick", e.QRCodeDownloadQRClick = "QRCodeDownloadQRClick", e.QRCodeViewOrderClick = "QRCodeViewOrderClick", e.PaymentHistoryCustomerTransactionClick = "PaymentHistoryCustomerTransactionClick", e.PaymentHistoryTransactionDateFilterClick = "PaymentHistoryTransactionDateFilterClick", e.PaymentHistoryTransactionTypeFilterClick = "PaymentHistoryTransactionTypeFilterClick", e.PaymentHistoryTransactionStatusClick = "PaymentHistoryTransactionStatusClick", e.PaymentHistoryTransactionDateFilterSetDate = "PaymentHistoryTransactionDateFilterSetDate", e.PaymentHistoryCustomerSettlementClick = "PaymentHistoryCustomerSettlementClick", e.PaymentDetailsPageView = "PaymentDetailsPageView", e.PaymentDetailsViewCharges = "PaymentDetailsViewCharges", e.PaymentHistorySettlementDateFilterClick = "PaymentHistorySettlementDateFilterClick", e.PaymentHistorySettlementTypeFilterClick = "PaymentHistorySettlementTypeFilterClick", e.PaymentHistorySettlementStatusClick = "PaymentHistorySettlementStatusClick", e.PaymentHistorySettlementDateFilterSetDate = "PaymentHistorySettlementDateFilterSetDate", e.CustomerSummarySMSClick = "CustomerSummarySMSClick", e.SMSerrorLimitExceeded = "SMSerrorLimitExceeded", e.SMSClickAddPhoneNumberToastClick = "SMSClickAddPhoneNumberToastClick", e.SendSMSClick = "SendSMSClick", e.SMSCancelClick = "SMSCancelClick", e.ChoosefromContactsClick = "ChoosefromContactsClick", e.AddCustomerManually = "AddCustomerManually", e.ReportsClick = "ReportsClick", e.DownloadReportsClick = "DownloadReportsClick", e.ReportsDateSet = "ReportsDateSet", e.ReportsSearchClicked = "ReportsSearchClicked"
                }(a || (a = {}))
        },
        119: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return o
            })), t.d(n, "c", (function() {
                return r
            })), t.d(n, "b", (function() {
                return i
            }));
            var a = t(110),
                o = function() {
                    var e = localStorage.getItem(a.b);
                    return null === e || function(e) {
                        return a.c.includes(e)
                    }(e) ? e : a.a
                },
                r = function(e) {
                    localStorage.setItem(a.b, e)
                },
                i = function() {
                    var e = o();
                    return !(!e || !Object.values({
                        tamil: "ta",
                        malayalam: "ml",
                        assamese: "as",
                        kannada: "kn"
                    }).includes(e))
                }
        },
        121: function(e, n, t) {
            "use strict";
            t.d(n, "b", (function() {
                return m
            }));
            var a = t(4),
                o = t(171),
                r = t(16),
                i = t(84),
                c = t(287),
                l = t.n(c),
                s = t(165),
                u = t(106),
                d = ["method", "mode", "credentials", "headers"],
                b = {},
                m = function(e) {
                    b = Object(r.a)({}, e)
                };
            n.a = function(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        method: "GET",
                        mode: "cors",
                        credentials: "same-origin",
                        headers: {}
                    },
                    c = t.method,
                    m = void 0 === c ? "GET" : c,
                    p = t.mode,
                    h = void 0 === p ? "cors" : p,
                    f = t.credentials,
                    _ = void 0 === f ? "same-origin" : f,
                    E = t.headers,
                    C = void 0 === E ? {} : E,
                    O = Object(o.a)(t, d);
                return l()(n, Object(r.a)({
                    method: m,
                    mode: h,
                    credentials: _,
                    headers: Object(r.a)(Object(r.a)({}, b), C)
                }, O)).then((function(t) {
                    return 200 === t.status || 201 === t.status ? Promise.resolve(t) : t.status >= 400 ? (Object(i.a)(new Error("API invalid status: ".concat(t.status)), {
                        tags: (o = {}, Object(a.a)(o, s.a.API, e), Object(a.a)(o, "module", u.a.API_HELPER), o),
                        extra: {
                            url: n
                        }
                    }), Promise.reject(t)) : void 0;
                    var o
                })).catch((function(t) {
                    var o;
                    return Object(i.a)(t, {
                        tags: (o = {}, Object(a.a)(o, s.a.API, e), Object(a.a)(o, "module", u.a.API_HELPER), o),
                        extra: {
                            url: n
                        }
                    }), Promise.reject(t)
                }))
            }
        },
        133: function(e, n, t) {
            "use strict";
            var a = t(0),
                o = t.n(a),
                r = t(184),
                i = t(9),
                c = t(272),
                l = Object(r.a)((function(e) {
                    return {
                        headerBase: {
                            minHeight: "64px",
                            display: "".concat(i.i.FLEX),
                            alignItems: "center",
                            backgroundColor: "".concat(i.c.WHITE),
                            borderBottom: "1px solid ".concat(i.c.GREY)
                        },
                        headerLogo: {
                            display: "".concat(i.i.FLEX),
                            width: "100%"
                        },
                        logo: {
                            marginLeft: "16px"
                        }
                    }
                }));
            n.a = Object(a.memo)((function() {
                var e = l();
                return o.a.createElement("div", {
                    className: e.headerBase
                }, o.a.createElement("div", {
                    className: e.headerLogo
                }, o.a.createElement(c.a, {
                    className: e.logo,
                    width: 122,
                    height: 32
                })))
            }))
        },
        137: function(e, n, t) {
            "use strict";
            var a = t(0),
                o = {
                    state: t(164).a,
                    dispatch: function() {}
                };
            n.a = Object(a.createContext)(o)
        },
        143: function(e, n, t) {
            "use strict";
            t.d(n, "e", (function() {
                return l
            })), t.d(n, "h", (function() {
                return s
            })), t.d(n, "g", (function() {
                return u
            })), t.d(n, "a", (function() {
                return d
            })), t.d(n, "b", (function() {
                return b
            })), t.d(n, "c", (function() {
                return m
            })), t.d(n, "d", (function() {
                return h
            })), t.d(n, "f", (function() {
                return _
            }));
            var a = t(1),
                o = t.n(a),
                r = t(3),
                i = t(75),
                c = t(170);

            function l(e) {
                return void 0 === e || null === e || "object" === typeof e && 0 === Object.keys(e).length || "string" === typeof e && 0 === e.trim().length
            }

            function s(e) {
                return (e < 10 ? "0" : "") + e
            }
            var u = function() {
                var e = window.navigator.platform;
                return !!["Win32", "Win64", "Windows", "WinCE"].find((function(n) {
                    return n === e
                }))
            };

            function d(e) {
                return "undefined" !== typeof String.fromCodePoint ? e.toUpperCase().replace(/./g, (function(e) {
                    return String.fromCodePoint(e.charCodeAt(0) + 127397)
                })) : e
            }

            function b(e) {
                var n = e.trim();
                return ",,,," === n || "" === n
            }

            function m(e) {
                return p.apply(this, arguments)
            }

            function p() {
                return (p = Object(r.a)(o.a.mark((function e(n) {
                    var t;
                    return o.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Object(i.a)(n);
                            case 2:
                                return t = e.sent, e.abrupt("return", t && 1 === t.deleted);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function h(e) {
                return f.apply(this, arguments)
            }

            function f() {
                return (f = Object(r.a)(o.a.mark((function e(n) {
                    var t;
                    return o.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Object(c.c)(n);
                            case 2:
                                return t = e.sent, e.abrupt("return", t && 1 === t.deleted);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function _(e) {
                var n;
                return (null === e || void 0 === e ? void 0 : e.status) && (null === e || void 0 === e || null === (n = e.status) || void 0 === n ? void 0 : n.toString().startsWith("5"))
            }
        },
        144: function(e, n, t) {
            "use strict";
            var a;
            t.d(n, "a", (function() {
                    return a
                })),
                function(e) {
                    e.INFO = "INFO", e.SUCCESS = "SUCCESS"
                }(a || (a = {}))
        },
        145: function(e, n, t) {
            "use strict";
            t.d(n, "d", (function() {
                return a
            })), t.d(n, "c", (function() {
                return o
            })), t.d(n, "b", (function() {
                return r
            })), t.d(n, "a", (function() {
                return i
            }));
            var a = 9,
                o = 15,
                r = 10,
                i = "+91"
        },
        146: function(e, n, t) {
            "use strict";
            var a;
            t.d(n, "a", (function() {
                    return a
                })), t.d(n, "b", (function() {
                    return o
                })),
                function(e) {
                    e[e.INITIAL = 0] = "INITIAL", e[e.SETTINGS = 1] = "SETTINGS"
                }(a || (a = {}));
            var o = [{
                labelColor: "#1b6cce",
                labelText: "H",
                text: "Hinglish",
                value: "en_US"
            }, {
                labelColor: "#04408a",
                labelText: "E",
                text: "English",
                value: "en"
            }, {
                labelColor: "#0752ad",
                labelText: "\u0939\u093f\u0902",
                text: "\u0939\u093f\u0902\u0926\u0940",
                value: "hi"
            }, {
                labelColor: "#1b6cce",
                labelText: "\u09ac\u09be",
                text: "\u09ac\u09be\u0982\u09b2\u09be",
                value: "bn"
            }, {
                labelColor: "#1b6cce",
                labelText: "\u0a97\u0ac1",
                text: "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0",
                value: "gu"
            }, {
                labelColor: "#0752ad",
                labelText: "\u0c95",
                text: "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1",
                value: "kn"
            }, {
                labelColor: "#58a0f7",
                labelText: "\u0d2e",
                text: "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02",
                value: "ml"
            }, {
                labelColor: "#04408a",
                labelText: "\u092e",
                text: "\u092e\u0930\u093e\u0920\u0940",
                value: "mr"
            }, {
                labelColor: "#0752ad",
                labelText: "\u0a2a\u0a70",
                text: "\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40",
                value: "pa"
            }, {
                labelColor: "#58a0f7",
                labelText: "\u0ba4",
                text: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd",
                value: "ta"
            }, {
                labelColor: "#58a0f7",
                labelText: "\u0c24\u0c46",
                text: "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41",
                value: "te"
            }, {
                labelColor: "#04408a",
                labelText: "\u0b13",
                text: "\u0b13\u0b21\u0b3c\u0b3f\u0b06",
                value: "or"
            }, {
                labelColor: "#186fd9",
                labelText: "\u0985",
                text: "\u0985\u09b8\u09ae\u09c0\u09af\u09bc\u09be",
                value: "as"
            }]
        },
        157: function(e, n, t) {
            "use strict";
            t.d(n, "c", (function() {
                return c
            })), t.d(n, "b", (function() {
                return l
            })), t.d(n, "a", (function() {
                return s
            })), t.d(n, "d", (function() {
                return u
            }));
            var a = t(121),
                o = t(76),
                r = t(140),
                i = t(181);

            function c(e) {
                var n = JSON.stringify(e);
                return Object(a.a)(o.b.REQUEST_OTP, Object(o.e)(o.b.REQUEST_OTP), {
                    method: "POST",
                    body: n,
                    headers: {
                        "content-type": "application/json"
                    }
                }).then((function(e) {
                    return null === e || void 0 === e ? void 0 : e.json()
                }))
            }

            function l(e, n, t) {
                var a = Object(r.b)(),
                    o = "".concat(e.country_code).concat(e.phone);
                window.recaptchaVerifier || Object(i.b)();
                var c = window.recaptchaVerifier;
                Object(r.c)(a, o, c).then((function(e) {
                    n && n(e)
                })).catch((function(e) {
                    t && t(e)
                }))
            }

            function s(e) {
                var n = JSON.stringify(e);
                return Object(a.a)(o.b.LOGIN, Object(o.e)(o.b.LOGIN), {
                    method: "POST",
                    body: n,
                    headers: {
                        "content-type": "application/json"
                    }
                }).then((function(e) {
                    return null === e || void 0 === e ? void 0 : e.json()
                }))
            }

            function u(e, n) {
                var t = JSON.stringify(e);
                return Object(a.a)(o.b.USER_PREFERENCES, Object(o.e)(o.b.USER_PREFERENCES), {
                    method: "POST",
                    body: t,
                    headers: {
                        "content-type": "application/json",
                        "x-khatabook-token": n,
                        "x-kb-app-version": "Infinity"
                    }
                }).then((function(e) {
                    return null === e || void 0 === e ? void 0 : e.json()
                }))
            }
        },
        158: function(e, n, t) {
            "use strict";
            t.d(n, "b", (function() {
                return l
            })), t.d(n, "d", (function() {
                return s
            })), t.d(n, "a", (function() {
                return u
            })), t.d(n, "c", (function() {
                return d
            }));
            var a = t(1),
                o = t.n(a),
                r = t(3),
                i = t(193),
                c = t(75),
                l = function() {
                    var e = window.localStorage.getItem(i.a);
                    if (null === e) return null;
                    try {
                        return JSON.parse(e)
                    } catch (n) {
                        return null
                    }
                },
                s = function(e) {
                    Object(c.d)([e]), window.localStorage.setItem(i.a, JSON.stringify(e))
                },
                u = function() {
                    return window.localStorage.removeItem(i.a)
                },
                d = function() {
                    var e = Object(r.a)(o.a.mark((function e() {
                        var n;
                        return o.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(n = l())) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 4, Object(c.a)(n.book_id);
                                case 4:
                                    return e.abrupt("return", e.sent);
                                case 5:
                                    return e.abrupt("return", n);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
        },
        161: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return i
            })), t.d(n, "b", (function() {
                return c
            })), t.d(n, "c", (function() {
                return l
            })), t.d(n, "d", (function() {
                return s
            }));
            var a = t(115),
                o = t(56),
                r = t(92),
                i = function() {
                    var e = localStorage.getItem(o.c);
                    return null !== e ? Object(a.c)(e) : Object(a.c)(o.a)
                },
                c = function() {
                    var e = localStorage.getItem(o.c);
                    return null !== e ? Object(a.b)(e) : Object(a.b)(o.a)
                },
                l = function() {
                    var e = localStorage.getItem(o.c) || o.a,
                        n = r.a[e].split(",");
                    return {
                        id: "".concat(e),
                        label: "".concat(n[6], " - ").concat(n[4]),
                        line: r.a[e]
                    }
                },
                s = function(e) {
                    localStorage.setItem(o.c, e)
                }
        },
        164: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return a
            }));
            var a = {
                app: t(50).b
            }
        },
        165: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return a
            }));
            var a = {
                API: "API",
                LOCALE: "LOCALE"
            }
        },
        169: function(e, n, t) {
            "use strict";
            t.d(n, "b", (function() {
                return r
            }));
            var a = t(0),
                o = Object(a.createContext)({
                    isDesktop: !1,
                    isMobile: !0
                }),
                r = function() {
                    return Object(a.useContext)(o)
                };
            n.a = o
        },
        170: function(e, n, t) {
            "use strict";
            t.d(n, "c", (function() {
                return u
            })), t.d(n, "a", (function() {
                return d
            })), t.d(n, "e", (function() {
                return b
            })), t.d(n, "f", (function() {
                return m
            })), t.d(n, "g", (function() {
                return p
            })), t.d(n, "b", (function() {
                return h
            })), t.d(n, "d", (function() {
                return f
            }));
            t(43);
            var a = t(42),
                o = (t(16), t(1)),
                r = t.n(o),
                i = t(3),
                c = (t(204), t(286), t(27)),
                l = t(250),
                s = (t(75), t(10)),
                u = (t(246), function() {
                    var e = Object(i.a)(r.a.mark((function e(n) {
                        var t;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(c.a)();
                                case 2:
                                    if (t = e.sent, !s.i.CUSTOMER) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", t.get(s.i.CUSTOMER, n));
                                case 5:
                                    return e.abrupt("return", void 0);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }()),
                d = function() {
                    var e = Object(i.a)(r.a.mark((function e() {
                        var n, t, a, o;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(c.a)();
                                case 2:
                                    return n = e.sent, t = n.transaction(s.i.CUSTOMER, "readonly"), a = t.store.index(s.c.ACTIVE_BOOK), e.next = 7, a.openCursor(IDBKeyRange.bound([0], [0, []]), "prev");
                                case 7:
                                    if (null !== (o = e.sent)) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.abrupt("return", void 0);
                                case 10:
                                    return e.abrupt("return", o.value.book_id);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                b = function() {
                    var e = Object(i.a)(r.a.mark((function e() {
                        var n;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(c.a)();
                                case 2:
                                    return n = e.sent, e.abrupt("return", n.getAllFromIndex(s.i.CUSTOMER, s.c.DIRTY, IDBKeyRange.bound([1], [1])));
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
                m = function() {
                    var e = Object(i.a)(r.a.mark((function e(n) {
                        var t;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(c.a)();
                                case 2:
                                    return t = e.sent, e.abrupt("return", t.put(s.i.CUSTOMER, n));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                p = function() {
                    var e = Object(i.a)(r.a.mark((function e(n) {
                        var t, o, i;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(c.a)();
                                case 2:
                                    return t = e.sent, o = t.transaction(s.i.CUSTOMER, "readwrite"), i = n.map((function(e) {
                                        return o.store.put(e)
                                    })), e.abrupt("return", Promise.all([].concat(Object(a.a)(i), [o.done])));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                h = function() {
                    var e = Object(i.a)(r.a.mark((function e(n, t) {
                        var a;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(c.a)();
                                case 2:
                                    return a = e.sent, e.abrupt("return", a.getAllFromIndex(s.i.CUSTOMER, s.c.PHONE, IDBKeyRange.only([n, 0, t])));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n, t) {
                        return e.apply(this, arguments)
                    }
                }(),
                f = function() {
                    var e = Object(i.a)(r.a.mark((function e(n) {
                        var t, a, o, u, d, b, m, p, h, f, _, E, C;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = n.bookId, a = n.customerId, o = n.fromTransactionId, u = n.lastTransactionTime, void 0 === o) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 4, Object(l.d)(o);
                                case 4:
                                    d = e.sent;
                                case 5:
                                    return e.next = 7, Object(c.a)();
                                case 7:
                                    return b = e.sent, m = b.transaction(s.i.TRANSACTION, "readonly"), p = m.store.index(s.j.CUSTOMER), e.next = 12, p.openCursor(IDBKeyRange.bound([t, a], [t, a, []]), "prev");
                                case 12:
                                    if (h = e.sent, f = u || 0, null !== h) {
                                        e.next = 16;
                                        break
                                    }
                                    return e.abrupt("return", f);
                                case 16:
                                    if (void 0 === d) {
                                        e.next = 22;
                                        break
                                    }
                                    if (_ = [t, a, 0, d.sortDate], h.value.transaction_id === d.transaction_id) {
                                        e.next = 22;
                                        break
                                    }
                                    return e.next = 21, h.continuePrimaryKey(_, d.transaction_id);
                                case 21:
                                    h = e.sent;
                                case 22:
                                    E = function() {
                                        var e = Object(i.a)(r.a.mark((function e() {
                                            return r.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        if (null !== h) {
                                                            e.next = 2;
                                                            break
                                                        }
                                                        return e.abrupt("return");
                                                    case 2:
                                                        return e.next = 4, h.continue();
                                                    case 4:
                                                        h = e.sent;
                                                    case 5:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function() {
                                            return e.apply(this, arguments)
                                        }
                                    }(), C = !0;
                                case 24:
                                    if (!C) {
                                        e.next = 33;
                                        break
                                    }
                                    if (null !== h) {
                                        e.next = 28;
                                        break
                                    }
                                    return C = !1, e.abrupt("continue", 24);
                                case 28:
                                    return f = Number(h.value.updated_at) > f ? Number(h.value.updated_at) : f, e.next = 31, E();
                                case 31:
                                    e.next = 24;
                                    break;
                                case 33:
                                    return e.abrupt("return", f);
                                case 34:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        173: function(e, n, t) {
            "use strict";
            var a = t(4),
                o = t(16),
                r = t(18),
                i = t(0),
                c = t(40);
            n.a = function(e, n, t) {
                var l = Object(i.useState)({}),
                    s = Object(r.a)(l, 2),
                    u = s[0],
                    d = s[1],
                    b = Object(i.useState)({}),
                    m = Object(r.a)(b, 2),
                    p = m[0],
                    h = m[1],
                    f = Object(c.b)().t,
                    _ = Object(i.useCallback)((function(t) {
                        t && t.preventDefault();
                        var a = {};
                        void 0 !== n && (a = n(u, f), h(a)), 0 === Object.keys(a).length && e(u)
                    }), [e, f, n, u]),
                    E = Object(i.useCallback)((function(e, a) {
                        console.log("values", {
                            values: u
                        });
                        var r = Object(o.a)(Object(o.a)({}, e), a);
                        d(r), t && void 0 !== n && h(n(r))
                    }), [n, t, u]),
                    C = Object(i.useCallback)((function(e) {
                        if (0 !== e.target.value.indexOf(" ")) {
                            var r = Object(o.a)(Object(o.a)({}, u), {}, Object(a.a)({}, e.target.name, e.target.value));
                            d(r), t && void 0 !== n && h(n(r))
                        }
                    }), [n, t, u]),
                    O = Object(i.useCallback)((function(e) {
                        var a = e.target.value.replace(/[^0-9]/g, ""),
                            r = Object(o.a)(Object(o.a)({}, u), {}, {
                                phone: a
                            });
                        d(r), t && void 0 !== n && h(n(r))
                    }), [n, t, u]),
                    g = Object(i.useCallback)((function(e) {
                        var a = Object(o.a)(Object(o.a)({}, u), {}, {
                            country_code: e.target.value
                        });
                        d(a), t && void 0 !== n && h(n(a))
                    }), [n, t, u]);
                return {
                    handleChange: C,
                    bulkChange: E,
                    handleSubmit: _,
                    handleOTPChange: Object(i.useCallback)((function(e) {
                        var a = e.target.value.replace(/[^0-9]/g, ""),
                            r = Object(o.a)(Object(o.a)({}, u), {}, {
                                pin: a
                            });
                        d(r), t && void 0 !== n && h(n(r))
                    }), [n, t, u]),
                    handlePhoneNumberChange: O,
                    handleCountryCodeChange: g,
                    values: u,
                    errors: p
                }
            }
        },
        177: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return o
            })), t.d(n, "b", (function() {
                return r
            }));
            var a = t(145),
                o = function(e) {
                    return function(n) {
                        var t = {};
                        if (n.phone && !/^\d{10}$/.test(n.phone) && "+91" === n.country_code && (t.phone = e), (null === n || void 0 === n ? void 0 : n.country_code) && "+91" !== n.country_code) {
                            var o, r = ((null === n || void 0 === n ? void 0 : n.country_code) + (null === n || void 0 === n ? void 0 : n.phone)).length;
                            0 !== (null === n || void 0 === n || null === (o = n.phone) || void 0 === o ? void 0 : o.length) && (r < a.d || r > a.c) && (t.phone = "Enter valid mobile number")
                        }
                        return t
                    }
                },
                r = function(e) {
                    return function(n) {
                        var t = {};
                        return n.pin && !/^[0-9]{6}$/.test(n.pin) && (t.pin = e), t
                    }
                }
        },
        181: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return i
            })), t.d(n, "b", (function() {
                return c
            }));
            var a = t(282),
                o = t(140),
                r = {
                    apiKey: "AIzaSyBemB7P5AOurBLkaPEx-x2W-bAHTN9Maz4",
                    authDomain: "khata-book-66067.firebaseapp.com",
                    databaseURL: "https://khata-book-66067.firebaseio.com",
                    projectId: "khata-book-66067",
                    storageBucket: "khata-book-66067.appspot.com",
                    messagingSenderId: "615793495808",
                    appId: "1:615793495808:web:dde864e31610f3338aede5",
                    measurementId: "G-99Q6XVPRHN"
                },
                i = function() {
                    return Object(a.a)(r)
                },
                c = function() {
                    var e = Object(o.b)();
                    window.recaptchaVerifier = new o.a("recaptcha-container", {
                        size: "invisible"
                    }, e)
                }
        },
        182: function(e, n, t) {
            "use strict";
            var a = t(0),
                o = t.n(a),
                r = t(184),
                i = t(299),
                c = t(242),
                l = t(284),
                s = t.n(l),
                u = t(9),
                d = t(40),
                b = Object(r.a)((function(e) {
                    return {
                        root: {
                            display: "".concat(u.i.FLEX),
                            backgroundColor: "".concat(u.c.WHITE),
                            alignItems: "center",
                            minHeight: "72px"
                        },
                        imgDiv: {
                            width: "15%",
                            marginLeft: e.spacing(2)
                        },
                        trustDiv: {
                            paddingLeft: e.spacing(2),
                            paddingRight: e.spacing(8),
                            color: "".concat(u.c.DOVE_GREY)
                        }
                    }
                }));
            n.a = Object(a.memo)((function(e) {
                var n = b(),
                    t = Object(d.b)().t;
                return o.a.createElement("div", {
                    className: "".concat(n.root, " ").concat(e.className ? e.className : "")
                }, o.a.createElement(i.a, {
                    className: n.imgDiv
                }, o.a.createElement(c.a, {
                    height: 40,
                    width: 40,
                    src: s.a,
                    alt: "group"
                })), o.a.createElement(i.a, {
                    className: n.trustDiv
                }, t("login_tagline")))
            }))
        },
        193: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return a
            })), t.d(n, "b", (function() {
                return o
            }));
            var a = "KB_CURRENT_BOOK",
                o = "KB_SYNC_DATA"
        },
        200: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return a
            }));
            var a = [{
                code: "IN",
                label: "India",
                phone: "+91"
            }, {
                code: "AD",
                label: "Andorra",
                phone: "+376"
            }, {
                code: "AE",
                label: "United Arab Emirates",
                phone: "+971"
            }, {
                code: "AF",
                label: "Afghanistan",
                phone: "+93"
            }, {
                code: "AG",
                label: "Antigua and Barbuda",
                phone: "+1-268"
            }, {
                code: "AI",
                label: "Anguilla",
                phone: "+1-264"
            }, {
                code: "AL",
                label: "Albania",
                phone: "+355"
            }, {
                code: "AM",
                label: "Armenia",
                phone: "+374"
            }, {
                code: "AO",
                label: "Angola",
                phone: "+244"
            }, {
                code: "AQ",
                label: "Antarctica",
                phone: "+672"
            }, {
                code: "AR",
                label: "Argentina",
                phone: "+54"
            }, {
                code: "AS",
                label: "American Samoa",
                phone: "+1-684"
            }, {
                code: "AT",
                label: "Austria",
                phone: "+43"
            }, {
                code: "AU",
                label: "Australia",
                phone: "+61",
                suggested: !0
            }, {
                code: "AW",
                label: "Aruba",
                phone: "+297"
            }, {
                code: "AX",
                label: "Alland Islands",
                phone: "+358"
            }, {
                code: "AZ",
                label: "Azerbaijan",
                phone: "+994"
            }, {
                code: "BA",
                label: "Bosnia and Herzegovina",
                phone: "+387"
            }, {
                code: "BB",
                label: "Barbados",
                phone: "+1-246"
            }, {
                code: "BD",
                label: "Bangladesh",
                phone: "+880"
            }, {
                code: "BE",
                label: "Belgium",
                phone: "+32"
            }, {
                code: "BF",
                label: "Burkina Faso",
                phone: "+226"
            }, {
                code: "BG",
                label: "Bulgaria",
                phone: "+359"
            }, {
                code: "BH",
                label: "Bahrain",
                phone: "+973"
            }, {
                code: "BI",
                label: "Burundi",
                phone: "+257"
            }, {
                code: "BJ",
                label: "Benin",
                phone: "+229"
            }, {
                code: "BL",
                label: "Saint Barthelemy",
                phone: "+590"
            }, {
                code: "BM",
                label: "Bermuda",
                phone: "+1-441"
            }, {
                code: "BN",
                label: "Brunei Darussalam",
                phone: "+673"
            }, {
                code: "BO",
                label: "Bolivia",
                phone: "+591"
            }, {
                code: "BR",
                label: "Brazil",
                phone: "+55"
            }, {
                code: "BS",
                label: "Bahamas",
                phone: "+1-242"
            }, {
                code: "BT",
                label: "Bhutan",
                phone: "+975"
            }, {
                code: "BV",
                label: "Bouvet Island",
                phone: "+47"
            }, {
                code: "BW",
                label: "Botswana",
                phone: "+267"
            }, {
                code: "BY",
                label: "Belarus",
                phone: "+375"
            }, {
                code: "BZ",
                label: "Belize",
                phone: "+501"
            }, {
                code: "CA",
                label: "Canada",
                phone: "+1",
                suggested: !0
            }, {
                code: "CC",
                label: "Cocos (Keeling) Islands",
                phone: "+61"
            }, {
                code: "CD",
                label: "Congo, Democratic Republic of the",
                phone: "+243"
            }, {
                code: "CF",
                label: "Central African Republic",
                phone: "+236"
            }, {
                code: "CG",
                label: "Congo, Republic of the",
                phone: "+242"
            }, {
                code: "CH",
                label: "Switzerland",
                phone: "+41"
            }, {
                code: "CI",
                label: "Cote d'Ivoire",
                phone: "+225"
            }, {
                code: "CK",
                label: "Cook Islands",
                phone: "+682"
            }, {
                code: "CL",
                label: "Chile",
                phone: "+56"
            }, {
                code: "CM",
                label: "Cameroon",
                phone: "+237"
            }, {
                code: "CN",
                label: "China",
                phone: "+86"
            }, {
                code: "CO",
                label: "Colombia",
                phone: "+57"
            }, {
                code: "CR",
                label: "Costa Rica",
                phone: "+506"
            }, {
                code: "CU",
                label: "Cuba",
                phone: "+53"
            }, {
                code: "CV",
                label: "Cape Verde",
                phone: "+238"
            }, {
                code: "CW",
                label: "Curacao",
                phone: "+599"
            }, {
                code: "CX",
                label: "Christmas Island",
                phone: "+61"
            }, {
                code: "CY",
                label: "Cyprus",
                phone: "+357"
            }, {
                code: "CZ",
                label: "Czech Republic",
                phone: "+420"
            }, {
                code: "DE",
                label: "Germany",
                phone: "+49",
                suggested: !0
            }, {
                code: "DJ",
                label: "Djibouti",
                phone: "+253"
            }, {
                code: "DK",
                label: "Denmark",
                phone: "+45"
            }, {
                code: "DM",
                label: "Dominica",
                phone: "+1-767"
            }, {
                code: "DO",
                label: "Dominican Republic",
                phone: "+1-809"
            }, {
                code: "DZ",
                label: "Algeria",
                phone: "+213"
            }, {
                code: "EC",
                label: "Ecuador",
                phone: "+593"
            }, {
                code: "EE",
                label: "Estonia",
                phone: "+372"
            }, {
                code: "EG",
                label: "Egypt",
                phone: "+20"
            }, {
                code: "EH",
                label: "Western Sahara",
                phone: "+212"
            }, {
                code: "ER",
                label: "Eritrea",
                phone: "+291"
            }, {
                code: "ES",
                label: "Spain",
                phone: "+34"
            }, {
                code: "ET",
                label: "Ethiopia",
                phone: "+251"
            }, {
                code: "FI",
                label: "Finland",
                phone: "+358"
            }, {
                code: "FJ",
                label: "Fiji",
                phone: "+679"
            }, {
                code: "FK",
                label: "Falkland Islands (Malvinas)",
                phone: "+500"
            }, {
                code: "FM",
                label: "Micronesia, Federated States of",
                phone: "+691"
            }, {
                code: "FO",
                label: "Faroe Islands",
                phone: "+298"
            }, {
                code: "FR",
                label: "France",
                phone: "+33",
                suggested: !0
            }, {
                code: "GA",
                label: "Gabon",
                phone: "+241"
            }, {
                code: "GB",
                label: "United Kingdom",
                phone: "+44"
            }, {
                code: "GD",
                label: "Grenada",
                phone: "+1-473"
            }, {
                code: "GE",
                label: "Georgia",
                phone: "+995"
            }, {
                code: "GF",
                label: "French Guiana",
                phone: "+594"
            }, {
                code: "GG",
                label: "Guernsey",
                phone: "+44"
            }, {
                code: "GH",
                label: "Ghana",
                phone: "+233"
            }, {
                code: "GI",
                label: "Gibraltar",
                phone: "+350"
            }, {
                code: "GL",
                label: "Greenland",
                phone: "+299"
            }, {
                code: "GM",
                label: "Gambia",
                phone: "+220"
            }, {
                code: "GN",
                label: "Guinea",
                phone: "+224"
            }, {
                code: "GP",
                label: "Guadeloupe",
                phone: "+590"
            }, {
                code: "GQ",
                label: "Equatorial Guinea",
                phone: "+240"
            }, {
                code: "GR",
                label: "Greece",
                phone: "+30"
            }, {
                code: "GS",
                label: "South Georgia and the South Sandwich Islands",
                phone: "+500"
            }, {
                code: "GT",
                label: "Guatemala",
                phone: "+502"
            }, {
                code: "GU",
                label: "Guam",
                phone: "+1-671"
            }, {
                code: "GW",
                label: "Guinea-Bissau",
                phone: "+245"
            }, {
                code: "GY",
                label: "Guyana",
                phone: "+592"
            }, {
                code: "HK",
                label: "Hong Kong",
                phone: "+852"
            }, {
                code: "HM",
                label: "Heard Island and McDonald Islands",
                phone: "+672"
            }, {
                code: "HN",
                label: "Honduras",
                phone: "+504"
            }, {
                code: "HR",
                label: "Croatia",
                phone: "+385"
            }, {
                code: "HT",
                label: "Haiti",
                phone: "+509"
            }, {
                code: "HU",
                label: "Hungary",
                phone: "+36"
            }, {
                code: "ID",
                label: "Indonesia",
                phone: "+62"
            }, {
                code: "IE",
                label: "Ireland",
                phone: "+353"
            }, {
                code: "IL",
                label: "Israel",
                phone: "+972"
            }, {
                code: "IM",
                label: "Isle of Man",
                phone: "+44"
            }, {
                code: "IO",
                label: "British Indian Ocean Territory",
                phone: "+246"
            }, {
                code: "IQ",
                label: "Iraq",
                phone: "+964"
            }, {
                code: "IR",
                label: "Iran, Islamic Republic of",
                phone: "+98"
            }, {
                code: "IS",
                label: "Iceland",
                phone: "+354"
            }, {
                code: "IT",
                label: "Italy",
                phone: "+39"
            }, {
                code: "JE",
                label: "Jersey",
                phone: "+44"
            }, {
                code: "JM",
                label: "Jamaica",
                phone: "+1-876"
            }, {
                code: "JO",
                label: "Jordan",
                phone: "+962"
            }, {
                code: "JP",
                label: "Japan",
                phone: "+81",
                suggested: !0
            }, {
                code: "KE",
                label: "Kenya",
                phone: "+254"
            }, {
                code: "KG",
                label: "Kyrgyzstan",
                phone: "+996"
            }, {
                code: "KH",
                label: "Cambodia",
                phone: "+855"
            }, {
                code: "KI",
                label: "Kiribati",
                phone: "+686"
            }, {
                code: "KM",
                label: "Comoros",
                phone: "+269"
            }, {
                code: "KN",
                label: "Saint Kitts and Nevis",
                phone: "+1-869"
            }, {
                code: "KP",
                label: "Korea, Democratic People's Republic of",
                phone: "+850"
            }, {
                code: "KR",
                label: "Korea, Republic of",
                phone: "+82"
            }, {
                code: "KW",
                label: "Kuwait",
                phone: "+965"
            }, {
                code: "KY",
                label: "Cayman Islands",
                phone: "+1-345"
            }, {
                code: "KZ",
                label: "Kazakhstan",
                phone: "+7"
            }, {
                code: "LA",
                label: "Lao People's Democratic Republic",
                phone: "+856"
            }, {
                code: "LB",
                label: "Lebanon",
                phone: "+961"
            }, {
                code: "LC",
                label: "Saint Lucia",
                phone: "+1-758"
            }, {
                code: "LI",
                label: "Liechtenstein",
                phone: "+423"
            }, {
                code: "LK",
                label: "Sri Lanka",
                phone: "+94"
            }, {
                code: "LR",
                label: "Liberia",
                phone: "+231"
            }, {
                code: "LS",
                label: "Lesotho",
                phone: "+266"
            }, {
                code: "LT",
                label: "Lithuania",
                phone: "+370"
            }, {
                code: "LU",
                label: "Luxembourg",
                phone: "+352"
            }, {
                code: "LV",
                label: "Latvia",
                phone: "+371"
            }, {
                code: "LY",
                label: "Libya",
                phone: "+218"
            }, {
                code: "MA",
                label: "Morocco",
                phone: "+212"
            }, {
                code: "MC",
                label: "Monaco",
                phone: "+377"
            }, {
                code: "MD",
                label: "Moldova, Republic of",
                phone: "+373"
            }, {
                code: "ME",
                label: "Montenegro",
                phone: "+382"
            }, {
                code: "MF",
                label: "Saint Martin (French part)",
                phone: "+590"
            }, {
                code: "MG",
                label: "Madagascar",
                phone: "+261"
            }, {
                code: "MH",
                label: "Marshall Islands",
                phone: "+692"
            }, {
                code: "MK",
                label: "Macedonia, the Former Yugoslav Republic of",
                phone: "+389"
            }, {
                code: "ML",
                label: "Mali",
                phone: "+223"
            }, {
                code: "MM",
                label: "Myanmar",
                phone: "+95"
            }, {
                code: "MN",
                label: "Mongolia",
                phone: "+976"
            }, {
                code: "MO",
                label: "Macao",
                phone: "+853"
            }, {
                code: "MP",
                label: "Northern Mariana Islands",
                phone: "+1-670"
            }, {
                code: "MQ",
                label: "Martinique",
                phone: "+596"
            }, {
                code: "MR",
                label: "Mauritania",
                phone: "+222"
            }, {
                code: "MS",
                label: "Montserrat",
                phone: "+1-664"
            }, {
                code: "MT",
                label: "Malta",
                phone: "+356"
            }, {
                code: "MU",
                label: "Mauritius",
                phone: "+230"
            }, {
                code: "MV",
                label: "Maldives",
                phone: "+960"
            }, {
                code: "MW",
                label: "Malawi",
                phone: "+265"
            }, {
                code: "MX",
                label: "Mexico",
                phone: "+52"
            }, {
                code: "MY",
                label: "Malaysia",
                phone: "+60"
            }, {
                code: "MZ",
                label: "Mozambique",
                phone: "+258"
            }, {
                code: "NA",
                label: "Namibia",
                phone: "+264"
            }, {
                code: "NC",
                label: "New Caledonia",
                phone: "+687"
            }, {
                code: "NE",
                label: "Niger",
                phone: "+227"
            }, {
                code: "NF",
                label: "Norfolk Island",
                phone: "+672"
            }, {
                code: "NG",
                label: "Nigeria",
                phone: "+234"
            }, {
                code: "NI",
                label: "Nicaragua",
                phone: "+505"
            }, {
                code: "NL",
                label: "Netherlands",
                phone: "+31"
            }, {
                code: "NO",
                label: "Norway",
                phone: "+47"
            }, {
                code: "NP",
                label: "Nepal",
                phone: "+977"
            }, {
                code: "NR",
                label: "Nauru",
                phone: "+674"
            }, {
                code: "NU",
                label: "Niue",
                phone: "+683"
            }, {
                code: "NZ",
                label: "New Zealand",
                phone: "+64"
            }, {
                code: "OM",
                label: "Oman",
                phone: "+968"
            }, {
                code: "PA",
                label: "Panama",
                phone: "+507"
            }, {
                code: "PE",
                label: "Peru",
                phone: "+51"
            }, {
                code: "PF",
                label: "French Polynesia",
                phone: "+689"
            }, {
                code: "PG",
                label: "Papua New Guinea",
                phone: "+675"
            }, {
                code: "PH",
                label: "Philippines",
                phone: "+63"
            }, {
                code: "PK",
                label: "Pakistan",
                phone: "+92"
            }, {
                code: "PL",
                label: "Poland",
                phone: "+48"
            }, {
                code: "PM",
                label: "Saint Pierre and Miquelon",
                phone: "+508"
            }, {
                code: "PN",
                label: "Pitcairn",
                phone: "+870"
            }, {
                code: "PR",
                label: "Puerto Rico",
                phone: "+1"
            }, {
                code: "PS",
                label: "Palestine, State of",
                phone: "+970"
            }, {
                code: "PT",
                label: "Portugal",
                phone: "+351"
            }, {
                code: "PW",
                label: "Palau",
                phone: "+680"
            }, {
                code: "PY",
                label: "Paraguay",
                phone: "+595"
            }, {
                code: "QA",
                label: "Qatar",
                phone: "+974"
            }, {
                code: "RE",
                label: "Reunion",
                phone: "+262"
            }, {
                code: "RO",
                label: "Romania",
                phone: "+40"
            }, {
                code: "RS",
                label: "Serbia",
                phone: "+381"
            }, {
                code: "RU",
                label: "Russian Federation",
                phone: "+7"
            }, {
                code: "RW",
                label: "Rwanda",
                phone: "+250"
            }, {
                code: "SA",
                label: "Saudi Arabia",
                phone: "+966"
            }, {
                code: "SB",
                label: "Solomon Islands",
                phone: "+677"
            }, {
                code: "SC",
                label: "Seychelles",
                phone: "+248"
            }, {
                code: "SD",
                label: "Sudan",
                phone: "+249"
            }, {
                code: "SE",
                label: "Sweden",
                phone: "+46"
            }, {
                code: "SG",
                label: "Singapore",
                phone: "+65"
            }, {
                code: "SH",
                label: "Saint Helena",
                phone: "+290"
            }, {
                code: "SI",
                label: "Slovenia",
                phone: "+386"
            }, {
                code: "SJ",
                label: "Svalbard and Jan Mayen",
                phone: "+47"
            }, {
                code: "SK",
                label: "Slovakia",
                phone: "+421"
            }, {
                code: "SL",
                label: "Sierra Leone",
                phone: "+232"
            }, {
                code: "SM",
                label: "San Marino",
                phone: "+378"
            }, {
                code: "SN",
                label: "Senegal",
                phone: "+221"
            }, {
                code: "SO",
                label: "Somalia",
                phone: "+252"
            }, {
                code: "SR",
                label: "Suriname",
                phone: "+597"
            }, {
                code: "SS",
                label: "South Sudan",
                phone: "+211"
            }, {
                code: "ST",
                label: "Sao Tome and Principe",
                phone: "+239"
            }, {
                code: "SV",
                label: "El Salvador",
                phone: "+503"
            }, {
                code: "SX",
                label: "Sint Maarten (Dutch part)",
                phone: "+1-721"
            }, {
                code: "SY",
                label: "Syrian Arab Republic",
                phone: "+963"
            }, {
                code: "SZ",
                label: "Swaziland",
                phone: "+268"
            }, {
                code: "TC",
                label: "Turks and Caicos Islands",
                phone: "+1-649"
            }, {
                code: "TD",
                label: "Chad",
                phone: "+235"
            }, {
                code: "TF",
                label: "French Southern Territories",
                phone: "+262"
            }, {
                code: "TG",
                label: "Togo",
                phone: "+228"
            }, {
                code: "TH",
                label: "Thailand",
                phone: "+66"
            }, {
                code: "TJ",
                label: "Tajikistan",
                phone: "+992"
            }, {
                code: "TK",
                label: "Tokelau",
                phone: "+690"
            }, {
                code: "TL",
                label: "Timor-Leste",
                phone: "+670"
            }, {
                code: "TM",
                label: "Turkmenistan",
                phone: "+993"
            }, {
                code: "TN",
                label: "Tunisia",
                phone: "+216"
            }, {
                code: "TO",
                label: "Tonga",
                phone: "+676"
            }, {
                code: "TR",
                label: "Turkey",
                phone: "+90"
            }, {
                code: "TT",
                label: "Trinidad and Tobago",
                phone: "+1-868"
            }, {
                code: "TV",
                label: "Tuvalu",
                phone: "+688"
            }, {
                code: "TW",
                label: "Taiwan, Province of China",
                phone: "+886"
            }, {
                code: "TZ",
                label: "United Republic of Tanzania",
                phone: "+255"
            }, {
                code: "UA",
                label: "Ukraine",
                phone: "+380"
            }, {
                code: "UG",
                label: "Uganda",
                phone: "+256"
            }, {
                code: "US",
                label: "United States",
                phone: "+1",
                suggested: !0
            }, {
                code: "UY",
                label: "Uruguay",
                phone: "+598"
            }, {
                code: "UZ",
                label: "Uzbekistan",
                phone: "+998"
            }, {
                code: "VA",
                label: "Holy See (Vatican City State)",
                phone: "+379"
            }, {
                code: "VC",
                label: "Saint Vincent and the Grenadines",
                phone: "+1-784"
            }, {
                code: "VE",
                label: "Venezuela",
                phone: "+58"
            }, {
                code: "VG",
                label: "British Virgin Islands",
                phone: "+1-284"
            }, {
                code: "VI",
                label: "US Virgin Islands",
                phone: "+1-340"
            }, {
                code: "VN",
                label: "Vietnam",
                phone: "+84"
            }, {
                code: "VU",
                label: "Vanuatu",
                phone: "+678"
            }, {
                code: "WF",
                label: "Wallis and Futuna",
                phone: "+681"
            }, {
                code: "WS",
                label: "Samoa",
                phone: "+685"
            }, {
                code: "XK",
                label: "Kosovo",
                phone: "+383"
            }, {
                code: "YE",
                label: "Yemen",
                phone: "+967"
            }, {
                code: "YT",
                label: "Mayotte",
                phone: "+262"
            }, {
                code: "ZA",
                label: "South Africa",
                phone: "+27"
            }, {
                code: "ZM",
                label: "Zambia",
                phone: "+260"
            }, {
                code: "ZW",
                label: "Zimbabwe",
                phone: "+263"
            }]
        },
        221: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return o
            })), t.d(n, "b", (function() {
                return r
            }));
            var a = 0,
                o = function() {
                    if (a > 0) return a < 2;
                    var e = function() {
                        var e = window.localStorage.getItem("KB_ROP_KEY");
                        return null === e ? void 0 : Number(e)
                    }();
                    return void 0 === e ? a < 2 : (new Date).getTime() - e < 6e5 ? (a = 2, !1) : (window.localStorage.removeItem("KB_ROP_KEY"), a = 0, !0)
                },
                r = function() {
                    2 === (a += 1) && window.localStorage.setItem("KB_ROP_KEY", String((new Date).getTime()))
                }
        },
        230: function(e, n, t) {
            "use strict";
            t.d(n, "b", (function() {
                return i
            }));
            var a = t(0),
                o = {
                    showError: function() {}
                },
                r = Object(a.createContext)(o),
                i = function() {
                    return Object(a.useContext)(r)
                };
            n.a = r
        },
        232: function(e, n, t) {
            "use strict";
            t.d(n, "g", (function() {
                return o
            })), t.d(n, "i", (function() {
                return r
            })), t.d(n, "h", (function() {
                return i
            })), t.d(n, "c", (function() {
                return c
            })), t.d(n, "d", (function() {
                return l
            })), t.d(n, "b", (function() {
                return s
            })), t.d(n, "a", (function() {
                return u
            })), t.d(n, "f", (function() {
                return d
            })), t.d(n, "e", (function() {
                return b
            }));
            var a = t(41),
                o = function(e) {
                    var n = new CustomEvent(a.a.TRANSACTION_CHANGED, {
                        detail: e
                    });
                    document.dispatchEvent(n)
                },
                r = function(e) {
                    var n = new CustomEvent(a.a.TRANSACTION_EDITED, {
                        detail: e
                    });
                    document.dispatchEvent(n)
                },
                i = function(e) {
                    var n = new CustomEvent(a.a.ConfirmDeleteTransactionClick, {
                        detail: e
                    });
                    document.dispatchEvent(n)
                },
                c = function(e) {
                    var n = new CustomEvent(a.a.CUSTOMER_CHANGED, {
                        detail: e
                    });
                    document.dispatchEvent(n)
                },
                l = function(e) {
                    var n = new CustomEvent(a.a.CUSTOMER_DELETED, {
                        detail: e
                    });
                    document.dispatchEvent(n)
                },
                s = function(e) {
                    var n = new CustomEvent(a.a.BOOK_DELETED, {
                        detail: e
                    });
                    document.dispatchEvent(n)
                },
                u = function(e) {
                    var n = new CustomEvent(a.a.BOOK_CHANGED, {
                        detail: e
                    });
                    document.dispatchEvent(n)
                },
                d = function(e) {
                    var n = new CustomEvent(a.a.SERVICE_WORKER_UPDATED, {
                        detail: e
                    });
                    document.dispatchEvent(n)
                },
                b = function() {
                    var e = new CustomEvent(a.a.INVOICE_CHANGED, {});
                    document.dispatchEvent(e)
                }
        },
        233: function(e, n, t) {
            "use strict";
            t.d(n, "b", (function() {
                return c
            }));
            var a = t(0),
                o = t(56),
                r = {
                    currency: o.a,
                    currencyCountry: o.b,
                    updateCurrency: function() {}
                },
                i = Object(a.createContext)(r),
                c = function() {
                    return Object(a.useContext)(i)
                };
            n.a = i
        },
        234: function(e, n, t) {
            "use strict";
            t.d(n, "b", (function() {
                return l
            }));
            var a = t(0),
                o = function() {},
                r = function(e) {},
                i = {
                    showToastMessage: o,
                    setToastMessage: r,
                    setToastActionHandler: o,
                    setShowViewButton: r,
                    setToastType: r
                },
                c = Object(a.createContext)(i),
                l = function() {
                    return Object(a.useContext)(c)
                };
            n.a = c
        },
        238: function(e, n, t) {
            "use strict";
            t.d(n, "g", (function() {
                return r
            })), t.d(n, "c", (function() {
                return i
            })), t.d(n, "d", (function() {
                return c
            })), t.d(n, "b", (function() {
                return l
            })), t.d(n, "a", (function() {
                return s
            })), t.d(n, "f", (function() {
                return u
            })), t.d(n, "e", (function() {
                return d
            }));
            var a = t(41),
                o = function(e, n) {
                    var t = function(n) {
                        e(n.detail)
                    };
                    return document.addEventListener(n, t, !1),
                        function() {
                            document.removeEventListener(n, t)
                        }
                },
                r = function(e) {
                    return o(e, a.a.TRANSACTION_CHANGED)
                },
                i = function(e) {
                    return o(e, a.a.CUSTOMER_CHANGED)
                },
                c = function(e) {
                    return o(e, a.a.CUSTOMER_DELETED)
                },
                l = function(e) {
                    return o(e, a.a.BOOK_DELETED)
                },
                s = function(e) {
                    return o(e, a.a.BOOK_CHANGED)
                },
                u = function(e) {
                    return o(e, a.a.SERVICE_WORKER_UPDATED)
                },
                d = function(e) {
                    return o(e, a.a.INVOICE_CHANGED)
                }
        },
        241: function(e, n, t) {
            "use strict";
            t.d(n, "b", (function() {
                return i
            }));
            var a = t(0),
                o = {
                    searchText: "",
                    setSearchText: function(e) {}
                },
                r = Object(a.createContext)(o),
                i = function() {
                    return Object(a.useContext)(r)
                };
            n.a = r
        },
        242: function(e, n, t) {
            "use strict";
            var a = t(0),
                o = t.n(a);
            n.a = Object(a.memo)((function(e) {
                var n = e.className,
                    t = e.height,
                    a = e.width,
                    r = e.src,
                    i = e.alt;
                return o.a.createElement("img", {
                    className: n || "",
                    src: r,
                    height: t,
                    width: a,
                    alt: i
                })
            }))
        },
        246: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return a
            })), t.d(n, "c", (function() {
                return o
            })), t.d(n, "e", (function() {
                return r
            })), t.d(n, "d", (function() {
                return i
            })), t.d(n, "b", (function() {
                return c
            }));
            var a = 100,
                o = 30,
                r = 6,
                i = 150,
                c = {
                    building: "",
                    landmark: "",
                    city: "",
                    state: "",
                    pinCode: ""
                }
        },
        25: function(e, n, t) {
            "use strict";
            t.d(n, "k", (function() {
                return a
            })), t.d(n, "m", (function() {
                return o
            })), t.d(n, "o", (function() {
                return r
            })), t.d(n, "E", (function() {
                return i
            })), t.d(n, "b", (function() {
                return c
            })), t.d(n, "f", (function() {
                return l
            })), t.d(n, "B", (function() {
                return s
            })), t.d(n, "c", (function() {
                return u
            })), t.d(n, "A", (function() {
                return d
            })), t.d(n, "x", (function() {
                return b
            })), t.d(n, "h", (function() {
                return m
            })), t.d(n, "i", (function() {
                return p
            })), t.d(n, "e", (function() {
                return h
            })), t.d(n, "y", (function() {
                return f
            })), t.d(n, "v", (function() {
                return _
            })), t.d(n, "l", (function() {
                return E
            })), t.d(n, "s", (function() {
                return C
            })), t.d(n, "D", (function() {
                return O
            })), t.d(n, "C", (function() {
                return g
            })), t.d(n, "d", (function() {
                return S
            })), t.d(n, "j", (function() {
                return v
            })), t.d(n, "p", (function() {
                return y
            })), t.d(n, "n", (function() {
                return T
            })), t.d(n, "a", (function() {
                return A
            })), t.d(n, "q", (function() {
                return R
            })), t.d(n, "w", (function() {
                return N
            })), t.d(n, "z", (function() {
                return k
            })), t.d(n, "r", (function() {
                return D
            })), t.d(n, "u", (function() {
                return I
            })), t.d(n, "t", (function() {
                return w
            })), t.d(n, "g", (function() {
                return P
            }));
            var a = "/",
                o = "/language",
                r = "/login",
                i = "/verify",
                c = "/add-business",
                l = "/book",
                s = "/sync-data",
                u = "/add-customer",
                d = "/settings",
                b = "/settings/profile",
                m = "/settings/contact",
                p = "/settings/currency",
                h = "/settings/backup-info",
                f = "/settings/recycle-bin",
                _ = "/settings/password-lock",
                E = "/settings/language",
                C = "/settings/create-khata",
                O = "/transactions",
                g = "/transaction/details",
                S = "/add-transaction",
                v = "/transaction/edit",
                y = "/logout",
                T = "/logging-out",
                A = "/about-us",
                R = "/money",
                N = "/money/payment-details",
                k = "/reports",
                D = "/profile",
                I = "/money/order-qrcode",
                w = "/money/order-qrcode/details",
                P = "/money/complete-kyc"
        },
        250: function(e, n, t) {
            "use strict";
            t.d(n, "d", (function() {
                return s
            })), t.d(n, "b", (function() {
                return u
            })), t.d(n, "a", (function() {
                return d
            })), t.d(n, "e", (function() {
                return b
            })), t.d(n, "f", (function() {
                return m
            })), t.d(n, "c", (function() {
                return p
            }));
            t(43);
            var a = t(42),
                o = (t(16), t(1)),
                r = t.n(o),
                i = t(3),
                c = (t(204), t(27)),
                l = (t(75), t(170), t(10)),
                s = function() {
                    var e = Object(i.a)(r.a.mark((function e(n) {
                        var t;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(c.a)();
                                case 2:
                                    return t = e.sent, e.abrupt("return", t.get(l.i.TRANSACTION, n));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                u = function() {
                    var e = Object(i.a)(r.a.mark((function e() {
                        var n;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(c.a)();
                                case 2:
                                    return n = e.sent, e.abrupt("return", n.getAllFromIndex(l.i.TRANSACTION, l.j.DIRTY, IDBKeyRange.bound([1], [1])));
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
                    var e = Object(i.a)(r.a.mark((function e() {
                        var n;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(c.a)();
                                case 2:
                                    return n = e.sent, e.abrupt("return", n.getAllFromIndex(l.i.TRANSACTION, l.j.ATTACHMENT_DIRTY, IDBKeyRange.bound([1], [1])));
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
                b = function() {
                    var e = Object(i.a)(r.a.mark((function e(n) {
                        var t;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(c.a)();
                                case 2:
                                    return t = e.sent, e.abrupt("return", t.put(l.i.TRANSACTION, n));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                m = function() {
                    var e = Object(i.a)(r.a.mark((function e(n) {
                        var t, o, i;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(c.a)();
                                case 2:
                                    return t = e.sent, o = t.transaction(l.i.TRANSACTION, "readwrite"), i = n.map((function(e) {
                                        return o.store.put(e)
                                    })), e.abrupt("return", Promise.all([].concat(Object(a.a)(i), [o.done])));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                p = function() {
                    var e = Object(i.a)(r.a.mark((function e(n) {
                        var t, a, o, u, d, b, m, p, h, f, _, E;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = n.bookId, a = n.customerId, void 0 === (o = n.fromTransactionId)) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 4, s(o);
                                case 4:
                                    u = e.sent;
                                case 5:
                                    return e.next = 7, Object(c.a)();
                                case 7:
                                    return d = e.sent, b = d.transaction(l.i.TRANSACTION, "readonly"), m = b.store.index(l.j.CUSTOMER), e.next = 12, m.openCursor(IDBKeyRange.bound([t, a, 0], [t, a, 0, []]), "prev");
                                case 12:
                                    if (null !== (p = e.sent)) {
                                        e.next = 15;
                                        break
                                    }
                                    return e.abrupt("return", 0);
                                case 15:
                                    if (void 0 === u) {
                                        e.next = 21;
                                        break
                                    }
                                    if (h = [t, a, 0, u.sortDate], p.value.transaction_id === u.transaction_id) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.next = 20, p.continuePrimaryKey(h, u.transaction_id);
                                case 20:
                                    p = e.sent;
                                case 21:
                                    f = function() {
                                        var e = Object(i.a)(r.a.mark((function e() {
                                            return r.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        if (null !== p) {
                                                            e.next = 2;
                                                            break
                                                        }
                                                        return e.abrupt("return");
                                                    case 2:
                                                        return e.next = 4, p.continue();
                                                    case 4:
                                                        p = e.sent;
                                                    case 5:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function() {
                                            return e.apply(this, arguments)
                                        }
                                    }(), _ = 0, E = !0;
                                case 24:
                                    if (!E) {
                                        e.next = 33;
                                        break
                                    }
                                    if (null !== p) {
                                        e.next = 28;
                                        break
                                    }
                                    return E = !1, e.abrupt("continue", 24);
                                case 28:
                                    return _ += p.value.amount, e.next = 31, f();
                                case 31:
                                    e.next = 24;
                                    break;
                                case 33:
                                    return e.abrupt("return", _);
                                case 34:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        251: function(e, n, t) {
            "use strict";
            t.d(n, "b", (function() {
                return r
            }));
            var a = t(0),
                o = Object(a.createContext)({
                    isSynced: !1
                }),
                r = function() {
                    return Object(a.useContext)(o)
                };
            n.a = o
        },
        253: function(e, n, t) {
            "use strict";
            t.d(n, "b", (function() {
                return o
            })), t.d(n, "a", (function() {
                return r
            }));
            var a = t(82),
                o = function() {
                    window.localStorage.setItem(a.b, JSON.stringify({
                        type: a.a.ON_LOGGING_OUT,
                        time: (new Date).getTime()
                    }))
                },
                r = function() {
                    window.localStorage.setItem(a.b, JSON.stringify({
                        type: a.a.LOGIN_STATUS_CHANGE,
                        time: (new Date).getTime()
                    }))
                }
        },
        254: function(e, n, t) {
            "use strict";
            var a = t(0),
                o = t.n(a),
                r = t(35),
                i = t(184),
                c = t(402),
                l = t(9),
                s = t(25),
                u = t(40),
                d = t(95),
                b = t(146),
                m = Object(i.a)((function(e) {
                    return {
                        languagePill: {
                            borderRadius: "2px",
                            textAlign: "center",
                            color: e.palette.text.secondary,
                            fontSize: "20px"
                        },
                        button: {
                            padding: e.spacing(1),
                            fontSize: "".concat(l.k["16px"], "rem"),
                            display: "flex",
                            alignItems: "center",
                            boxShadow: "0 1px 1px 0 rgba(0, 0, 0, 0.14)",
                            textTransform: "none",
                            fontWeight: l.g.NORMAL,
                            width: "100%",
                            justifyContent: "flex-start",
                            color: l.c.DARK_BLUE,
                            background: l.c.WHITE
                        },
                        label: {
                            borderRadius: "100px",
                            marginRight: e.spacing(1),
                            padding: e.spacing(1),
                            height: "40px",
                            width: "40px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: l.c.WHITE,
                            fontSize: "20px",
                            fontWeight: l.g.SEMIBOLD
                        }
                    }
                }));
            var p = Object(a.memo)((function(e) {
                    var n = e.onSelectLanguage,
                        t = m();
                    return o.a.createElement(c.a, {
                        container: !0,
                        spacing: 2,
                        direction: "row",
                        justify: "space-between",
                        alignItems: "center"
                    }, b.b.map((function(e, a) {
                        return o.a.createElement(c.a, {
                            item: !0,
                            xs: 6,
                            className: t.languagePill,
                            key: a
                        }, o.a.createElement(d.a, {
                            className: t.button,
                            onClick: function() {
                                return n(e)
                            }
                        }, o.a.createElement("span", {
                            className: t.label,
                            style: {
                                backgroundColor: e.labelColor
                            }
                        }, e.labelText), o.a.createElement("span", null, e.text)))
                    })))
                })),
                h = t(64),
                f = t(118),
                _ = Object(i.a)((function() {
                    return {
                        root: {
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        languageLabel: {
                            fontSize: "".concat(l.k["16px"], "rem"),
                            display: "flex",
                            alignItems: "center",
                            color: l.c.BLACK,
                            fontWeight: l.g.SEMIBOLD,
                            padding: "20px 0"
                        }
                    }
                }));
            n.a = Object(a.memo)((function(e) {
                var n = e.className,
                    t = void 0 === n ? "" : n,
                    i = e.from,
                    l = void 0 === i ? b.a.INITIAL : i,
                    d = _(),
                    m = Object(u.b)().updateLocale,
                    E = Object(r.g)(),
                    C = Object(a.useCallback)((function(e) {
                        var n;
                        l === b.a.INITIAL ? (n = e.value, Object(h.b)(f.a.LANGUAGE_SELECTED, {
                            language: n
                        })) : function(e) {
                            Object(h.b)(f.a.LANGUAGE_CHANGED, {
                                language: e
                            })
                        }(e.value), m(e.value), E.replace(s.k)
                    }), [l, E, m]);
                return o.a.createElement(c.a, {
                    className: d.root,
                    container: !0,
                    direction: "row"
                }, o.a.createElement(c.a, {
                    className: t,
                    item: !0,
                    xs: 11
                }, o.a.createElement("div", {
                    className: d.languageLabel
                }, "Choose language")), o.a.createElement(c.a, {
                    item: !0,
                    xs: 11
                }, o.a.createElement(p, {
                    onSelectLanguage: C
                })))
            }))
        },
        264: function(e, n, t) {
            "use strict";
            var a = t(202),
                o = t(9);
            n.a = Object(a.a)({
                palette: {
                    primary: {
                        main: o.c.BLUE
                    },
                    secondary: {
                        main: o.c.RED
                    },
                    success: {
                        main: o.c.SUCCESS
                    },
                    error: {
                        main: o.c.RED
                    },
                    warning: {
                        main: o.c.WARNING_LIGHT
                    }
                },
                overrides: {
                    MuiSelect: {
                        icon: {
                            display: "none"
                        },
                        select: {
                            display: "flex",
                            paddingRight: "12px",
                            "&.MuiSelect-select": {
                                paddingRight: "12px"
                            }
                        }
                    },
                    MuiOutlinedInput: {
                        input: {
                            padding: "0 0 0 16px !important",
                            backgroundColor: "".concat(o.c.WHITE),
                            height: "40px",
                            "&::placeholder": {
                                color: o.c.PLACEHOLDER_TEXT
                            }
                        },
                        inputAdornedStart: {
                            backgroundColor: "".concat(o.c.WHITE)
                        },
                        adornedStart: {
                            paddingLeft: "12px"
                        },
                        notchedOutline: {
                            borderWidth: "1px !important"
                        }
                    },
                    MuiInputAdornment: {
                        positionStart: {
                            marginRight: "0"
                        }
                    },
                    MuiRadio: {
                        root: {
                            padding: 0
                        }
                    },
                    MuiButton: {
                        root: {
                            fontSize: "".concat(o.k["14px"], "rem"),
                            boxShadow: o.l.BUTTON,
                            fontWeight: o.g.BOLD
                        },
                        containedPrimary: {
                            fontSize: "".concat(o.k["14px"], "rem"),
                            boxShadow: o.l.BUTTON,
                            "&.Mui-disabled": {
                                color: o.c.WHITE,
                                backgroundColor: o.c.BLUE,
                                opacity: "0.5"
                            }
                        },
                        containedSecondary: {
                            fontSize: "".concat(o.k["14px"], "rem"),
                            boxShadow: o.l.BUTTON,
                            "&.Mui-disabled": {
                                color: o.c.WHITE,
                                backgroundColor: o.c.RED,
                                opacity: "0.5"
                            }
                        }
                    },
                    MuiTypography: {
                        colorTextSecondary: {
                            color: o.c.DOVE_GREY
                        }
                    },
                    MuiFab: {
                        extended: {
                            height: "40px",
                            minWidth: "185px",
                            fontSize: "".concat(o.k["14px"], "rem"),
                            boxShadow: o.l.BUTTON,
                            color: o.c.WHITE,
                            backgroundColor: "".concat(o.c.MAROON, "!important"),
                            fontWeight: o.g.BOLD
                        }
                    },
                    MuiTouchRipple: {
                        root: {
                            display: "none"
                        }
                    },
                    MuiFormHelperText: {
                        root: {
                            marginTop: "10px",
                            "&.Mui-error": {
                                fontSize: "".concat(o.k["12px"], "rem")
                            }
                        },
                        contained: {
                            marginLeft: "0px"
                        }
                    },
                    MuiAvatar: {
                        root: {
                            width: "36px",
                            height: "36px",
                            fontSize: "".concat(o.k["14px"], "rem")
                        }
                    },
                    MuiListItemAvatar: {
                        root: {
                            minWidth: "46px"
                        }
                    },
                    MuiListItemIcon: {
                        root: {
                            minWidth: "44px"
                        }
                    },
                    MuiListItem: {
                        root: {
                            backgroundColor: o.c.WHITE,
                            paddingBottom: "13px",
                            paddingTop: "13px"
                        },
                        button: {
                            "&:hover": {
                                backgroundColor: o.c.WHITE
                            }
                        }
                    },
                    MuiListItemText: {
                        primary: {
                            fontSize: "".concat(o.k["16px"], "rem")
                        }
                    },
                    MuiDivider: {
                        root: {
                            backgroundColor: o.c.GREY
                        }
                    },
                    MuiBottomNavigation: {
                        root: {
                            backgroundColor: o.c.WHITE
                        }
                    }
                }
            })
        },
        27: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return u
            }));
            var a, o = t(1),
                r = t.n(o),
                i = t(3),
                c = t(295),
                l = t(10),
                s = function() {
                    var e = Object(i.a)(r.a.mark((function e() {
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(c.a)(l.e, 1, {
                                        upgrade: function(e, n, t, a) {
                                            if (n < 1) {
                                                e.createObjectStore(l.i.BOOK_SYNC_INFO, {
                                                    keyPath: "book_id"
                                                }), e.createObjectStore(l.i.BOOKS, {
                                                    keyPath: "book_id"
                                                }).createIndex(l.a.DIRTY, ["dirty"], {
                                                    unique: !1
                                                });
                                                var o = e.createObjectStore(l.i.CUSTOMER, {
                                                    keyPath: "customer_id"
                                                });
                                                o.createIndex(l.c.NAME, ["book_id", "deleted", "name"], {
                                                    unique: !1
                                                }), o.createIndex(l.c.AMOUNT, ["book_id", "deleted", "balance"], {
                                                    unique: !1
                                                }), o.createIndex(l.c.COUNT, ["book_id", "deleted"], {
                                                    unique: !1
                                                }), o.createIndex(l.c.DIRTY, ["dirty"], {
                                                    unique: !1
                                                }), o.createIndex(l.c.ACTIVE_BOOK, ["deleted", "last_transaction_time"], {
                                                    unique: !1
                                                }), o.createIndex(l.c.TRANSACTION_TIMESTAMP, ["book_id", "deleted", "last_transaction_time"], {
                                                    unique: !1
                                                }), o.createIndex(l.c.PHONE, ["book_id", "deleted", "phone"], {
                                                    unique: !1
                                                });
                                                var r = e.createObjectStore(l.i.TRANSACTION, {
                                                    keyPath: "transaction_id"
                                                });
                                                r.createIndex(l.j.DIRTY, ["dirty"], {
                                                    unique: !1
                                                }), r.createIndex(l.j.ATTACHMENT_DIRTY, ["hasLocalAttachments"], {
                                                    unique: !1
                                                }), r.createIndex(l.j.CUSTOMER, ["book_id", "customer_id", "deleted", "sortDate"], {
                                                    unique: !1
                                                }), e.createObjectStore(l.i.INVOICE, {
                                                    keyPath: "invoice_id"
                                                }).createIndex(l.f.BOOK_ID, ["book_id"], {
                                                    unique: !1
                                                }), e.createObjectStore(l.i.PAYOUT, {
                                                    keyPath: "payout_id"
                                                }).createIndex(l.h.BOOK_ID, ["book_id"], {
                                                    unique: !1
                                                })
                                            }
                                        }
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
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
                u = function() {
                    var e = Object(i.a)(r.a.mark((function e() {
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (void 0 === a) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", a);
                                case 2:
                                    return e.next = 4, s();
                                case 4:
                                    return a = e.sent, e.abrupt("return", a);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
        },
        272: function(e, n, t) {
            "use strict";
            var a = t(0),
                o = t.n(a);
            n.a = Object(a.memo)((function(e) {
                var n = e.className,
                    t = e.height,
                    a = e.width;
                return o.a.createElement("svg", {
                    className: n || "",
                    viewBox: "0 0 122 32",
                    height: t,
                    width: a
                }, o.a.createElement("path", {
                    fill: "#262626",
                    d: "M33.31 22.4h2.433v-4.74l1.216-1.44 3.787 6.18h2.871l-4.924-7.74 4.625-5.74h-3.01l-3.529 4.74c-.319.46-.657.94-.976 1.46h-.06v-6.2H33.31V22.4zm11.183 0h2.452v-5.84c0-.26.02-.52.1-.74.279-.74.956-1.38 1.913-1.38 1.356 0 1.874 1.08 1.874 2.48v5.48h2.452v-5.74c0-3.12-1.734-4.22-3.389-4.22-.618 0-1.196.16-1.694.44-.499.26-.917.64-1.216 1.1h-.04V8.2h-2.452v14.2zm18.544-5.84c0-2.14-.897-4.12-4.006-4.12-1.535 0-2.791.42-3.509.86L56 14.9c.658-.42 1.655-.72 2.612-.72 1.714 0 1.973 1.06 1.973 1.7v.16c-3.588-.02-5.76 1.24-5.76 3.68 0 1.48 1.096 2.9 3.05 2.9 1.275 0 2.292-.54 2.87-1.3h.06l.18 1.08h2.212c-.12-.6-.16-1.46-.16-2.34v-3.5zm-2.392 2.42c0 .18 0 .36-.06.54-.239.7-.936 1.34-1.933 1.34-.778 0-1.396-.44-1.396-1.4 0-1.48 1.655-1.84 3.39-1.82v1.34zm4.863-8.14v1.82h-1.375v1.84h1.375v4.58c0 1.28.24 2.18.778 2.74.458.5 1.196.8 2.113.8.757 0 1.415-.12 1.774-.26l-.04-1.86c-.279.08-.518.1-.957.1-.937 0-1.256-.6-1.256-1.8v-4.3h2.333v-1.84H67.92v-2.5l-2.412.68zm13.727 5.72c0-2.14-.897-4.12-4.007-4.12-1.535 0-2.79.42-3.508.86l.478 1.6c.658-.42 1.655-.72 2.612-.72 1.714 0 1.973 1.06 1.973 1.7v.16c-3.588-.02-5.761 1.24-5.761 3.68 0 1.48 1.096 2.9 3.05 2.9 1.276 0 2.293-.54 2.87-1.3h.06l.18 1.08h2.213c-.12-.6-.16-1.46-.16-2.34v-3.5zm-2.392 2.42c0 .18 0 .36-.06.54-.24.7-.937 1.34-1.934 1.34-.777 0-1.395-.44-1.395-1.4 0-1.48 1.655-1.84 3.389-1.82v1.34zm4.78 3.38c.579.08 1.496.16 2.692.16 2.193 0 3.708-.4 4.625-1.26.697-.64 1.156-1.54 1.156-2.7 0-2-1.495-3.06-2.771-3.36v-.06c1.395-.5 2.272-1.64 2.272-2.96 0-1.06-.438-1.86-1.136-2.38-.817-.68-1.933-.98-3.668-.98-1.196 0-2.412.12-3.17.3v13.24zm1.735-12.08c.279-.06.737-.12 1.535-.12 1.754 0 2.93.64 2.93 2.2 0 1.3-1.076 2.28-2.89 2.28h-1.575v-4.36zm0 5.66h1.435c1.894 0 3.469.78 3.469 2.6 0 1.96-1.655 2.62-3.449 2.62-.618 0-1.096-.02-1.455-.08v-5.14zm12.776-3.42c-2.652 0-4.785 1.9-4.785 5.12 0 3.06 2.034 4.98 4.625 4.98 2.313 0 4.804-1.56 4.804-5.14 0-2.94-1.873-4.96-4.644-4.96zm-.04 1.32c2.073 0 2.89 2.06 2.89 3.7 0 2.18-1.256 3.76-2.93 3.76-1.715 0-2.91-1.6-2.91-3.72 0-1.82.896-3.74 2.95-3.74zm10.582-1.32c-2.651 0-4.784 1.9-4.784 5.12 0 3.06 2.033 4.98 4.624 4.98 2.313 0 4.805-1.56 4.805-5.14 0-2.94-1.874-4.96-4.645-4.96zm-.04 1.32c2.073 0 2.89 2.06 2.89 3.7 0 2.18-1.255 3.76-2.93 3.76-1.714 0-2.91-1.6-2.91-3.72 0-1.82.897-3.74 2.95-3.74zm8.23-5.64h-1.735v14.2h1.735v-3.64l.897-1 3.309 4.64h2.153l-4.246-5.7 3.708-3.98h-2.093l-2.851 3.34c-.28.34-.598.76-.837 1.1h-.04V8.2z"
                }), o.a.createElement("path", {
                    fill: "#FFF",
                    stroke: "#A3131D",
                    strokeWidth: "2.5",
                    d: "M7.237 5.603c0-.298.218-.55.512-.593l13.798-2.015c.361-.053.684.228.684.594v24.703c0 .359-.312.638-.667.596L7.765 27.263c-.3-.035-.528-.291-.528-.595V5.603z"
                }), o.a.createElement("path", {
                    fill: "#A3131D",
                    d: "M0 4.174C0 3.376.586 2.7 1.373 2.589L17.945.256c.96-.135 1.816.612 1.816 1.584v28.352c0 .96-.838 1.705-1.789 1.588L1.4 29.738c-.8-.099-1.4-.78-1.4-1.588V4.174z"
                }))
            }))
        },
        273: function(e, n, t) {
            "use strict";
            var a = t(16),
                o = t(0),
                r = t.n(o),
                i = t(184),
                c = t(368),
                l = t(367),
                s = t(9),
                u = t(200),
                d = Object(i.a)((function(e) {
                    return {
                        root: {
                            fontSize: "".concat(s.k["12px"], "rem")
                        },
                        img: {
                            marginRight: e.spacing(1)
                        },
                        countryCode: {
                            display: "flex",
                            alignSelf: "center",
                            color: "".concat(s.c.BASE_FONT),
                            fontSize: "".concat(s.k["12px"], "rem")
                        },
                        div: {
                            display: "flex",
                            alignSelf: "center"
                        },
                        option: {
                            fontSize: 15,
                            width: "300px",
                            "& > span": {
                                marginRight: 10,
                                fontSize: 18
                            }
                        },
                        dropdownRoot: {
                            width: "100px"
                        },
                        dropdownOption: {
                            width: "300px"
                        },
                        input: {},
                        inputRoot: {
                            padding: "".concat(e.spacing(0, .5), "!important")
                        },
                        listBox: {
                            width: "300px"
                        },
                        inputAdornedStart: {
                            padding: e.spacing(0)
                        }
                    }
                }));

            function b(e) {
                return "undefined" !== typeof String.fromCodePoint ? e.toUpperCase().replace(/./g, (function(e) {
                    return String.fromCodePoint(e.charCodeAt(0) + 127397)
                })) : e
            }
            n.a = Object(o.memo)((function(e) {
                var n = e.className,
                    t = e.onChange,
                    o = e.name,
                    i = d();
                return r.a.createElement(c.a, {
                    id: "country-select-demo",
                    options: u.a,
                    fullWidth: !1,
                    forcePopupIcon: !1,
                    closeIcon: !1,
                    defaultValue: u.a.filter((function(e) {
                        return "+91" === e.phone
                    }))[0],
                    onChange: function(e, n) {
                        t(Object(a.a)(Object(a.a)({}, e), {}, {
                            target: {
                                name: o,
                                value: null === n || void 0 === n ? void 0 : n.phone
                            }
                        }))
                    },
                    classes: {
                        option: i.option,
                        root: i.dropdownRoot,
                        listbox: i.listBox,
                        inputRoot: i.inputRoot,
                        groupUl: i.dropdownOption,
                        popper: i.dropdownOption
                    },
                    getOptionLabel: function(e) {
                        return "".concat(b(e.code)).concat(e.phone)
                    },
                    renderOption: function(e) {
                        return r.a.createElement("div", {
                            className: i.dropdownOption
                        }, r.a.createElement("span", null, b(e.code)), e.phone)
                    },
                    renderInput: function(e) {
                        return r.a.createElement(l.a, Object.assign({}, e, {
                            className: "".concat(n, " ").concat(i.input),
                            classes: {},
                            variant: "outlined",
                            inputProps: Object(a.a)(Object(a.a)({}, e.inputProps), {}, {
                                autoComplete: "new-password"
                            })
                        }))
                    }
                })
            }))
        },
        284: function(e, n, t) {
            e.exports = t.p + "static/media/trust.aa698050.png"
        },
        288: function(e, n, t) {
            "use strict";
            t.r(n);
            var a = t(0),
                o = t.n(a),
                r = t(54),
                i = t(25);
            n.default = Object(a.memo)((function() {
                return Object(a.useEffect)((function() {
                    var e = window.setTimeout((function() {
                        window.location.href = i.k
                    }), 1e3);
                    return function() {
                        window.clearTimeout(e)
                    }
                }), []), o.a.createElement(r.a, null)
            }))
        },
        289: function(e, n, t) {
            e.exports = t.p + "static/media/toastSuccess.8353dc7c.svg"
        },
        290: function(e, n, t) {
            e.exports = t.p + "static/media/toastInfo.febd7256.svg"
        },
        292: function(e, n, t) {
            e.exports = t.p + "static/media/noInternetIcon.7ed30f89.svg"
        },
        317: function(e, n, t) {
            e.exports = t(357)
        },
        357: function(e, n, t) {
            "use strict";
            t.r(n);
            var a = t(0),
                o = t.n(a),
                r = t(33),
                i = t.n(r),
                c = t(18),
                l = t(362),
                s = t(414),
                u = t(377),
                d = t(276),
                b = t(54),
                m = t(169),
                p = /mobile|phone|ipad|mini|tablet/i;
            var h, f = Object(a.memo)((function(e) {
                    var n = e.children,
                        t = Object(a.useState)(!0),
                        r = Object(c.a)(t, 2),
                        i = r[0],
                        l = r[1],
                        s = Object(a.useState)(!0),
                        u = Object(c.a)(s, 2),
                        d = u[0],
                        h = u[1],
                        f = Object(a.useState)(!0),
                        _ = Object(c.a)(f, 2),
                        E = _[0],
                        C = _[1];
                    Object(a.useEffect)((function() {
                        p.test(window.navigator.userAgent) ? (h(!0), C(!1)) : (h(!1), C(!0)), l(!1)
                    }), []);
                    var O = Object(a.useMemo)((function() {
                        return {
                            isMobile: d,
                            isDesktop: E
                        }
                    }), [E, d]);
                    return i ? o.a.createElement(b.a, null) : o.a.createElement(m.a.Provider, {
                        value: O
                    }, n)
                })),
                _ = t(190),
                E = t(139),
                C = Object(E.b)(h || (h = Object(_.a)(["\n  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n  /* Document\n   ========================================================================== */\n\n  /**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n  html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n\n  /* Sections\n   ========================================================================== */\n\n  /**\n * Remove the margin in all browsers.\n */\n\n  body {\n    margin: 0;\n  }\n\n  /**\n * Render the main element consistently in IE.\n */\n\n  main {\n    display: block;\n  }\n\n  /**\n * Correct the font size and margin on h1 elements within section and\n * article contexts in Chrome, Firefox, and Safari.\n */\n\n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n\n  /* Grouping content\n   ========================================================================== */\n\n  /**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n\n  /**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd em font sizing in all browsers.\n */\n\n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n\n  /* Text-level semantics\n   ========================================================================== */\n\n  /**\n * Remove the gray background on active links in IE 10.\n */\n\n  a {\n    background-color: transparent;\n  }\n\n  /**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n\n  /**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\n  b,\n  strong {\n    font-weight: bolder;\n  }\n\n  /**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd em font sizing in all browsers.\n */\n\n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n\n  /**\n * Add the correct font size in all browsers.\n */\n\n  small {\n    font-size: 80%;\n  }\n\n  /**\n * Prevent sub and sup elements from affecting the line height in\n * all browsers.\n */\n\n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n\n  sub {\n    bottom: -0.25em;\n  }\n\n  sup {\n    top: -0.5em;\n  }\n\n  /* Embedded content\n   ========================================================================== */\n\n  /**\n * Remove the border on images inside links in IE 10.\n */\n\n  img {\n    border-style: none;\n  }\n\n  /* Forms\n   ========================================================================== */\n\n  /**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n\n  /**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\n  button,\n  input {\n    /* 1 */\n    overflow: visible;\n  }\n\n  /**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\n  button,\n  select {\n    /* 1 */\n    text-transform: none;\n  }\n\n  /**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\n  button,\n  [type='button'],\n  [type='reset'],\n  [type='submit'] {\n    -webkit-appearance: button;\n  }\n\n  /**\n * Remove the inner border and padding in Firefox.\n */\n\n  button::-moz-focus-inner,\n  [type='button']::-moz-focus-inner,\n  [type='reset']::-moz-focus-inner,\n  [type='submit']::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n\n  /**\n * Restore the focus styles unset by the previous rule.\n */\n\n  button:-moz-focusring,\n  [type='button']:-moz-focusring,\n  [type='reset']:-moz-focusring,\n  [type='submit']:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n\n  /**\n * Correct the padding in Firefox.\n */\n\n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n\n  /**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from fieldset elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    fieldset elements in all browsers.\n */\n\n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n\n  /**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\n  progress {\n    vertical-align: baseline;\n  }\n\n  /**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\n  textarea {\n    overflow: auto;\n  }\n\n  /**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n  [type='checkbox'],\n  [type='radio'] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n\n  /**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n  [type='number']::-webkit-inner-spin-button,\n  [type='number']::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  /**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n  [type='search'] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n\n  /**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n  [type='search']::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  /**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to inherit in Safari.\n */\n\n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n\n  /* Interactive\n   ========================================================================== */\n\n  /*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\n  details {\n    display: block;\n  }\n\n  /*\n * Add the correct display in all browsers.\n */\n\n  summary {\n    display: list-item;\n  }\n\n  /* Misc\n   ========================================================================== */\n\n  /**\n * Add the correct display in IE 10+.\n */\n\n  template {\n    display: none;\n  }\n\n  /**\n * Add the correct display in IE 10.\n */\n\n  [hidden] {\n    display: none;\n  }\n"])));
            var O, g = Object(a.memo)((function() {
                    return o.a.createElement(E.a, {
                        styles: C
                    })
                })),
                S = t(9),
                v = Object(E.b)(O || (O = Object(_.a)(["\n  html {\n    font-size: ", ";\n    text-size-adjust: 100%;\n  }\n\n  body {\n    font-family: ", ", 'Ubuntu', 'Helvetica Neue', sans-serif;\n    font-size: ", ";\n    color: ", ";\n    background-color: ", ";\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  html * {\n    box-sizing: border-box;\n  }\n"])), S.a, S.h, S.a, S.c.BASE_FONT, S.d.APP_BACKGROUND);
            var y = Object(a.memo)((function() {
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement(g, null), o.a.createElement(E.a, {
                        styles: v
                    }))
                })),
                T = t(398),
                A = t(264);
            var R = Object(a.memo)((function(e) {
                    var n = e.children;
                    return o.a.createElement(T.a, {
                        theme: A.a
                    }, n)
                })),
                N = t(11),
                k = t(12),
                D = t(30),
                I = t(31),
                w = t(84),
                P = t(184),
                L = t(95),
                x = Object(P.a)((function() {
                    return {
                        container: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            background: "#fff",
                            minHeight: "100vh"
                        },
                        inner: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            width: "302px",
                            maxWidth: "calc(100% - 32px)"
                        },
                        title: {
                            fontSize: "".concat(S.k["24px"], "rem"),
                            fontWeight: S.g.BOLD,
                            letterSpacing: "0.46px",
                            textAlign: "center",
                            color: S.c.BLACK,
                            margin: "0 0 22px 0"
                        },
                        info: {
                            fontSize: "".concat(S.k["16px"], "rem"),
                            marginBottom: "48px",
                            textAlign: "center"
                        }
                    }
                })),
                j = function() {
                    return window.location.reload()
                };
            var M = Object(a.memo)((function(e) {
                    var n = e.className,
                        t = void 0 === n ? "" : n,
                        a = e.onClick,
                        r = void 0 === a ? j : a,
                        i = x();
                    return o.a.createElement("div", {
                        className: "".concat(i.container, " ").concat(t)
                    }, o.a.createElement("div", {
                        className: i.inner
                    }, o.a.createElement("h1", {
                        className: i.title
                    }, "Oops"), o.a.createElement("div", {
                        className: i.info
                    }, "An unknown error occured while we were processing your request'"), o.a.createElement(L.a, {
                        fullWidth: !0,
                        variant: "contained",
                        color: "primary",
                        onClick: r
                    }, "Try Again")))
                })),
                B = t(400),
                K = t(401),
                U = t(230),
                G = Object(P.a)((function() {
                    return {
                        errorBox: {
                            minHeight: "360px",
                            maxHeight: "100%"
                        }
                    }
                }));
            var F = Object(a.memo)((function(e) {
                    var n = e.children,
                        t = Object(a.useState)(!1),
                        r = Object(c.a)(t, 2),
                        i = r[0],
                        l = r[1],
                        s = G(),
                        u = Object(a.useCallback)((function() {
                            return l(!0)
                        }), []),
                        d = Object(a.useMemo)((function() {
                            return {
                                showError: u
                            }
                        }), [u]);
                    return o.a.createElement(U.a.Provider, {
                        value: d
                    }, n, o.a.createElement(B.a, {
                        onClose: function() {
                            window.location.reload()
                        },
                        "aria-labelledby": "customized-dialog-title",
                        open: i
                    }, o.a.createElement(K.a, null, o.a.createElement(M, {
                        className: s.errorBox
                    }))))
                })),
                H = t(106),
                Y = function(e) {
                    Object(D.a)(t, e);
                    var n = Object(I.a)(t);

                    function t() {
                        var e;
                        Object(N.a)(this, t);
                        for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++) o[r] = arguments[r];
                        return (e = n.call.apply(n, [this].concat(o))).state = {
                            hasError: !1
                        }, e
                    }
                    return Object(k.a)(t, [{
                        key: "componentDidCatch",
                        value: function(e) {
                            this.setState({
                                hasError: !0
                            }), Object(w.a)(e, {
                                tags: {
                                    module: H.a.ERROR_BOUNDARY
                                }
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.hasError ? o.a.createElement(M, null) : o.a.createElement(F, null, this.props.children)
                        }
                    }], [{
                        key: "getDerivedStateFromError",
                        value: function() {
                            return {
                                hasError: !0
                            }
                        }
                    }]), t
                }(o.a.PureComponent),
                V = t(251),
                W = t(94),
                z = o.a.lazy((function() {
                    return t.e(10).then(t.bind(null, 930))
                }));
            var $ = Object(a.memo)((function(e) {
                    var n = e.children,
                        t = Object(W.a)().isLoggedIn,
                        r = Object(a.useState)(!1),
                        i = Object(c.a)(r, 2),
                        l = i[0],
                        s = i[1],
                        u = Object(a.useState)(!1),
                        d = Object(c.a)(u, 2),
                        b = d[0],
                        m = d[1],
                        p = Object(a.useMemo)((function() {
                            return {
                                isSynced: l,
                                isLocalSynced: b
                            }
                        }), [b, l]);
                    return o.a.createElement(V.a.Provider, {
                        value: p
                    }, t() && o.a.createElement(a.Suspense, {
                        fallback: null
                    }, o.a.createElement(z, {
                        setIsSynced: s,
                        setIsLocalSynced: m
                    })), n)
                })),
                Z = t(82),
                Q = t(25),
                q = function() {
                    return Promise.resolve()
                },
                J = function() {
                    window.location.href = Q.k
                },
                X = t(181),
                ee = t(238),
                ne = t(72),
                te = t(35);
            var ae = Object(a.memo)((function() {
                    var e = Object(te.g)();
                    return Object(a.useEffect)((function() {
                        void 0 !== e.location.state && Object.keys((function(n) {
                            0 === n.indexOf("L_NAV_") && e.goBack()
                        }))
                    }), [e]), null
                })),
                oe = t(64),
                re = t(402);
            var ie = Object(a.memo)((function() {
                    return o.a.createElement(re.a, {
                        container: !0,
                        direction: "row",
                        justify: "center",
                        alignItems: "center"
                    }, o.a.createElement(re.a, {
                        item: !0,
                        xs: 11
                    }, o.a.createElement("h2", null, o.a.createElement("div", null, " Oops! You have stepped into the unchartered waters"))))
                })),
                ce = t(133),
                le = t(182),
                se = t(405),
                ue = t(417),
                de = t(409),
                be = t(408),
                me = t(273),
                pe = t(173),
                he = t(177),
                fe = t(109),
                _e = t(143),
                Ee = t(157),
                Ce = t(96),
                Oe = t(40),
                ge = t(118),
                Se = Object(P.a)((function(e) {
                    return {
                        root: {
                            margin: "24px 16px"
                        },
                        mb1: {
                            marginBottom: "13px"
                        },
                        buttonContainer: {
                            position: "fixed",
                            bottom: e.spacing(2),
                            left: e.spacing(2),
                            right: e.spacing(2)
                        },
                        adornedStart: {
                            padding: e.spacing(0)
                        }
                    }
                }));
            var ve = function(e) {
                var n = Se(),
                    t = Object(te.g)(),
                    a = Object(Oe.b)().t,
                    r = Object(Ce.a)().setOtpSent,
                    i = {
                        inputMode: fe.a.NUMERIC,
                        pattern: fe.b.NUMBER_ONLY
                    },
                    c = Object(pe.a)((function() {
                        e = l.phone, Object(oe.b)(ge.a.REQUEST_OTP_CLICKED, {
                            customerPhone: e
                        }), Object(Ee.c)(b).then((function() {
                            r(!0), t.push(Q.E, b)
                        }), (function(e) {
                            console.log(e)
                        }));
                        var e
                    }), Object(he.a)(a("login_incorrect_10digit_number"))),
                    l = c.values,
                    s = c.errors,
                    u = c.handleChange,
                    d = c.handleSubmit,
                    b = {
                        country_code: l.country_code || "+91",
                        phone: l.phone || "",
                        app_signature: "Jc/Zu7qNqQ2"
                    };
                return o.a.createElement("form", {
                    className: "".concat(n.root, " ").concat(e.className ? e.className : ""),
                    onSubmit: d,
                    noValidate: !0,
                    autoComplete: "off"
                }, o.a.createElement("div", {
                    className: n.mb1
                }, a("mobile_number")), o.a.createElement(se.a, {
                    className: n.mb1,
                    fullWidth: !0,
                    variant: "outlined"
                }, o.a.createElement(ue.a, {
                    error: !!s.phone,
                    required: !0,
                    inputProps: i,
                    id: "phone",
                    name: "phone",
                    value: l.phone || "",
                    onChange: function(e) {
                        ("" === e.target.value || fe.c.NUMBER_ONLY.test(e.target.value)) && u(e)
                    },
                    placeholder: a("mobile_number_placeholder"),
                    autoFocus: !0,
                    classes: {
                        adornedStart: n.adornedStart
                    },
                    startAdornment: o.a.createElement(de.a, {
                        className: "countryAdornment",
                        position: "start"
                    }, o.a.createElement(me.a, {
                        className: "countrySelect",
                        onChange: u,
                        name: "country_code"
                    }))
                }), s.phone && o.a.createElement(be.a, {
                    error: !0
                }, s.phone)), o.a.createElement("div", {
                    className: "".concat(n.buttonContainer, " ").concat(e.buttonContainerClassName ? e.buttonContainerClassName : "")
                }, o.a.createElement(L.a, {
                    fullWidth: !0,
                    variant: "contained",
                    color: "primary",
                    size: "large",
                    type: "submit",
                    disabled: Object(_e.e)(l.phone)
                }, a("login_submit_get_code"))))
            };
            var ye = function() {
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement(ce.a, null), o.a.createElement(le.a, null), o.a.createElement(ve, null))
                },
                Te = t(410),
                Ae = t(299),
                Re = Object(P.a)((function() {
                    return {
                        root: {
                            display: "flex",
                            backgroundColor: "".concat(S.c.WHITE),
                            minHeight: "52px",
                            alignItems: "center",
                            color: "".concat(S.c.DOVE_GREY)
                        }
                    }
                }));
            var Ne = function(e) {
                    var n = Re();
                    return o.a.createElement(Ae.a, {
                        className: "".concat(n.root, " ").concat(e.className)
                    }, e.children)
                },
                ke = t(367),
                De = t(253),
                Ie = t(221),
                we = Object(P.a)((function(e) {
                    return {
                        link: {
                            fontWeight: S.g.SEMIBOLD
                        },
                        mobileBox: {
                            margin: "36px 16px"
                        },
                        m: {
                            margin: "13px 0"
                        },
                        mb1: {
                            marginBottom: "13px"
                        },
                        buttonContainer: {
                            position: "fixed",
                            bottom: e.spacing(2),
                            left: e.spacing(2),
                            right: e.spacing(2)
                        }
                    }
                })),
                Pe = {
                    location: {
                        state: {
                            country_code: "",
                            phone: "",
                            app_signature: ""
                        }
                    },
                    className: "",
                    buttonContainerClassName: ""
                };
            var Le = function(e) {
                    var n = we(),
                        t = Object(te.g)(),
                        r = Object(Oe.b)().t,
                        i = Object(a.useState)(30),
                        l = Object(c.a)(i, 2),
                        s = l[0],
                        u = l[1],
                        d = Object(a.useState)(!1),
                        b = Object(c.a)(d, 2),
                        m = b[0],
                        p = b[1],
                        h = Object(Ce.a)(),
                        f = h.setOtpSent,
                        _ = h.setUser,
                        E = h.setDevice,
                        C = Object(W.a)().isOtpSent,
                        O = Object(pe.a)((function() {
                            var e = {
                                country_code: T.country_code,
                                phone: T.phone,
                                khatabook_otp: g.pin,
                                device_model: window.navigator.userAgent
                            };
                            n = T.phone, a = T.country_code, Object(oe.b)(ge.a.OTP_VERIFY_CLICKED, {
                                customerPhone: n,
                                countryCode: a
                            }), Object(Ee.a)(e).then((function(e) {
                                _(e.user), E(e.device), t.replace(Q.k), Object(De.a)()
                            }), (function(e) {
                                p(!0)
                            }));
                            var n, a
                        }), Object(he.b)(r("login_enter_6_digit"))),
                        g = O.values,
                        S = O.errors,
                        v = O.handleChange,
                        y = O.handleSubmit,
                        T = e.location.state || Pe.location.state,
                        A = {
                            inputMode: fe.a.NUMERIC,
                            pattern: fe.b.NUMBER_ONLY
                        },
                        R = {
                            country_code: T.country_code,
                            phone: T.phone,
                            app_signature: T.app_signature
                        };
                    return Object(a.useEffect)((function() {
                        var e;
                        return s > 0 && (e = window.setTimeout((function() {
                                return u(s - 1)
                            }), 1e3)),
                            function() {
                                void 0 !== e && window.clearTimeout(e)
                            }
                    }), [s, C]), o.a.createElement("form", {
                        className: "".concat(n.mobileBox, " ").concat(e.className),
                        onSubmit: function(e) {
                            p(!1), y(e)
                        },
                        noValidate: !0,
                        autoComplete: "off"
                    }, o.a.createElement(se.a, {
                        fullWidth: !0
                    }, o.a.createElement(ke.a, {
                        error: !!S.pin,
                        required: !0,
                        id: "pin",
                        name: "pin",
                        variant: "outlined",
                        value: g.pin || "",
                        onChange: v,
                        inputProps: A,
                        autoFocus: !0,
                        placeholder: r("login_enter_6_digit"),
                        fullWidth: !0
                    })), S.pin && o.a.createElement(be.a, {
                        className: n.m,
                        error: !0
                    }, S.pin), m && o.a.createElement(be.a, {
                        className: n.m,
                        error: !0
                    }, r("login_error_server_invalid_otp")), s > 0 && o.a.createElement("div", {
                        className: n.m
                    }, r("login_waiting_for_code", {
                        "phone number": "00:" + Object(_e.h)(s)
                    })), s <= 0 && Object(Ie.a)() && o.a.createElement("div", {
                        className: n.m
                    }, o.a.createElement(Te.a, {
                        className: n.link,
                        onClick: function() {
                            p(!1), Object(Ie.b)(), Object(Ee.c)(R).then((function(e) {
                                f(!0), t.replace(Q.E, R), u(30)
                            }))
                        },
                        href: "#"
                    }, r("login_retry_resend_code"))), o.a.createElement("div", {
                        className: "".concat(n.buttonContainer, " ").concat(e.buttonContainerClassName ? e.buttonContainerClassName : "")
                    }, o.a.createElement(L.a, {
                        fullWidth: !0,
                        variant: "contained",
                        color: "primary",
                        type: "submit",
                        disabled: Object(_e.e)(g.pin)
                    }, r("login_submit_submit"))))
                },
                xe = Object(P.a)((function(e) {
                    return {
                        link: {
                            fontWeight: S.g.SEMIBOLD
                        },
                        div: {
                            marginLeft: e.spacing(2),
                            flex: "1 1 auto"
                        }
                    }
                })),
                je = {
                    location: {
                        state: {
                            country_code: "",
                            phone: "",
                            app_signature: ""
                        }
                    },
                    className: "",
                    buttonContainerClassName: ""
                };
            var Me = function(e) {
                var n = xe(),
                    t = Object(Oe.b)().t,
                    a = e.location.state || je;
                return o.a.createElement(o.a.Fragment, null, o.a.createElement(ce.a, null), o.a.createElement(Ne, null, o.a.createElement("div", {
                    className: n.div
                }, t("login_code_sent", {
                    "phone number": a.country_code + " " + a.phone
                })), o.a.createElement("div", {
                    className: "".concat(n.div, " ").concat(n.link)
                }, o.a.createElement(Te.a, {
                    href: "/login"
                }, " ", t("login_edit_number")))), o.a.createElement(Le, {
                    className: e.className,
                    buttonContainerClassName: e.buttonContainerClassName,
                    location: e.location
                }))
            };
            var Be = function() {
                    var e = Object(te.g)(),
                        n = Object(W.a)(),
                        t = n.hasLocale,
                        r = n.isLoggedIn,
                        i = n.getUserInfo;
                    Object(a.useEffect)((function() {
                        if (!1 !== t()) {
                            var n = i();
                            !1 !== r() && void 0 !== n ? (Object(oe.c)(n.user_id), e.replace(Q.B)) : e.replace(Q.o)
                        } else e.replace(Q.m)
                    }), [i, t, e, r]);
                    var c = Object(Oe.b)().t;
                    return o.a.createElement(b.a, {
                        text: c("khatabook_preparing")
                    })
                },
                Ke = t(254);
            var Ue = function() {
                    return o.a.createElement("div", null, o.a.createElement(ce.a, null), o.a.createElement(le.a, null), o.a.createElement(Ke.a, null))
                },
                Ge = t(288),
                Fe = t(39),
                He = o.a.lazy((function() {
                    return Promise.all([t.e(0), t.e(3), t.e(47), t.e(12)]).then(t.bind(null, 920))
                })),
                Ye = o.a.lazy((function() {
                    return Promise.all([t.e(0), t.e(40)]).then(t.bind(null, 918))
                })),
                Ve = o.a.lazy((function() {
                    return t.e(7).then(t.bind(null, 933))
                })),
                We = o.a.lazy((function() {
                    return t.e(8).then(t.bind(null, 931))
                })),
                ze = o.a.lazy((function() {
                    return t.e(35).then(t.bind(null, 885))
                })),
                $e = o.a.lazy((function() {
                    return Promise.all([t.e(3), t.e(34)]).then(t.bind(null, 928))
                })),
                Ze = o.a.lazy((function() {
                    return Promise.all([t.e(1), t.e(48), t.e(32)]).then(t.bind(null, 934))
                })),
                Qe = o.a.lazy((function() {
                    return t.e(13).then(t.bind(null, 935))
                })),
                qe = o.a.lazy((function() {
                    return Promise.all([t.e(50), t.e(14)]).then(t.bind(null, 936))
                })),
                Je = o.a.lazy((function() {
                    return Promise.all([t.e(1), t.e(49), t.e(39)]).then(t.bind(null, 937))
                })),
                Xe = o.a.lazy((function() {
                    return Promise.all([t.e(0), t.e(46), t.e(38)]).then(t.bind(null, 923))
                })),
                en = o.a.lazy((function() {
                    return Promise.all([t.e(1), t.e(49), t.e(39)]).then(t.bind(null, 938))
                })),
                nn = o.a.lazy((function() {
                    return t.e(26).then(t.bind(null, 886))
                }));
            var tn = Object(a.memo)((function() {
                    return o.a.createElement(a.Suspense, {
                        fallback: o.a.createElement(b.a, null)
                    }, o.a.createElement(te.d, null, o.a.createElement(te.b, {
                        path: "/",
                        exact: !0,
                        component: Be
                    }), o.a.createElement(te.b, {
                        path: "/book",
                        exact: !0,
                        component: Object(Fe.a)(He)
                    }), o.a.createElement(te.b, {
                        path: "/language",
                        exact: !0,
                        component: Ue
                    }), o.a.createElement(te.b, {
                        path: "/login",
                        exact: !0,
                        component: ye
                    }), o.a.createElement(te.b, {
                        path: "/verify",
                        exact: !0,
                        component: Me
                    }), o.a.createElement(te.b, {
                        path: "/add-customer",
                        exact: !0,
                        component: Object(Fe.a)(We)
                    }), o.a.createElement(te.b, {
                        path: "/add-transaction/:customerId/:transactionType",
                        exact: !0,
                        component: Object(Fe.a)(Je)
                    }), o.a.createElement(te.b, {
                        path: "/add-business",
                        exact: !0,
                        component: Object(Fe.a)(Ve)
                    }), o.a.createElement(te.b, {
                        path: "/transactions/:customerId",
                        exact: !0,
                        component: Object(Fe.a)(Ye)
                    }), o.a.createElement(te.b, {
                        path: "/transaction/details/:transactionId",
                        exact: !0,
                        component: Object(Fe.a)(Xe)
                    }), o.a.createElement(te.b, {
                        path: "/transaction/edit/:transactionId",
                        exact: !0,
                        component: Object(Fe.a)(en)
                    }), o.a.createElement(te.b, {
                        path: "/sync-data",
                        exact: !0,
                        component: Object(Fe.a)(ze)
                    }), o.a.createElement(te.b, {
                        path: "/settings",
                        exact: !0,
                        component: Object(Fe.a)($e)
                    }), o.a.createElement(te.b, {
                        path: "/settings/profile",
                        exact: !0,
                        component: Object(Fe.a)(Ze)
                    }), o.a.createElement(te.b, {
                        path: "/settings/contact",
                        exact: !0,
                        component: Object(Fe.a)(Qe)
                    }), o.a.createElement(te.b, {
                        path: "/settings/create-khata",
                        exact: !0,
                        component: Object(Fe.a)(qe)
                    }), o.a.createElement(te.b, {
                        path: "/logging-out",
                        exact: !0,
                        component: Ge.default
                    }), o.a.createElement(te.b, {
                        path: "/logout",
                        exact: !0,
                        component: nn
                    }), o.a.createElement(te.b, {
                        path: "*",
                        component: ie
                    })))
                })),
                an = o.a.lazy((function() {
                    return Promise.all([t.e(0), t.e(1), t.e(44), t.e(2), t.e(15)]).then(t.bind(null, 887))
                })),
                on = o.a.lazy((function() {
                    return Promise.all([t.e(0), t.e(1), t.e(44), t.e(2), t.e(15)]).then(t.bind(null, 926))
                })),
                rn = o.a.lazy((function() {
                    return Promise.resolve().then(t.bind(null, 288))
                })),
                cn = o.a.lazy((function() {
                    return t.e(35).then(t.bind(null, 888))
                })),
                ln = o.a.lazy((function() {
                    return t.e(26).then(t.bind(null, 886))
                })),
                sn = o.a.lazy((function() {
                    return Promise.all([t.e(0), t.e(1), t.e(44), t.e(2), t.e(15)]).then(t.bind(null, 913))
                })),
                un = o.a.lazy((function() {
                    return Promise.all([t.e(45), t.e(2), t.e(18)]).then(t.bind(null, 894))
                }));
            var dn = Object(a.memo)((function() {
                    return o.a.createElement(a.Suspense, {
                        fallback: o.a.createElement(b.a, null)
                    }, o.a.createElement(te.d, null, o.a.createElement(te.b, {
                        path: "/",
                        exact: !0,
                        component: an
                    }), o.a.createElement(te.b, {
                        path: Q.m,
                        exact: !0,
                        component: on
                    }), o.a.createElement(te.b, {
                        path: Q.b,
                        exact: !0,
                        component: un
                    }), o.a.createElement(te.b, {
                        path: Q.o,
                        exact: !0,
                        component: un
                    }), o.a.createElement(te.b, {
                        path: Q.E,
                        exact: !0,
                        component: un
                    }), o.a.createElement(te.b, {
                        path: Q.B,
                        exact: !0,
                        component: Object(Fe.a)(cn)
                    }), o.a.createElement(te.b, {
                        path: Q.n,
                        exact: !0,
                        component: rn
                    }), o.a.createElement(te.b, {
                        path: Q.p,
                        exact: !0,
                        component: ln
                    }), o.a.createElement(te.b, {
                        path: Q.f,
                        component: Object(Fe.a)(sn)
                    }), o.a.createElement(te.b, {
                        path: Q.A,
                        component: Object(Fe.a)(sn)
                    }), o.a.createElement(te.b, {
                        path: Q.a,
                        component: Object(Fe.a)(sn)
                    }), o.a.createElement(te.b, {
                        path: Q.q,
                        component: Object(Fe.a)(sn)
                    }), o.a.createElement(te.b, {
                        path: Q.g,
                        component: Object(Fe.a)(sn)
                    }), o.a.createElement(te.b, {
                        path: Q.z,
                        component: Object(Fe.a)(sn)
                    }), o.a.createElement(te.b, {
                        path: Q.r,
                        component: Object(Fe.a)(sn)
                    }), o.a.createElement(te.b, {
                        path: "*",
                        component: ie
                    })))
                })),
                bn = t(4),
                mn = t(1),
                pn = t.n(mn),
                hn = t(3),
                fn = t(245),
                _n = t.n(fn),
                En = {
                    language: "Language",
                    login_tagline: "Bharat bhar main 5 Crore+ businesses ka bharosa",
                    login_incorrect_10digit_number: "Please make sure you have entered a valid 10 digit phone number",
                    enter_valid_mobile_number: "Enter valid mobile number",
                    login_submit_get_code: "Get PIN",
                    mobile_number: "Mobile Number",
                    mobile_number_placeholder: "Enter Mobile number",
                    login_khata: "Login to Khatabook",
                    signup_khata: "Sign up to Khatabook",
                    login: "Login",
                    signup: "Sign up",
                    no_active_store: "Do not have an active store?",
                    already_active_store: "Already have an active store?",
                    language_placeholder: "Select your language",
                    login_code_sent: "Code Sent to %1$s",
                    login_edit_number: "Edit Number",
                    login_submit_submit: "Submit",
                    login_waiting_for_code: "Resend code in %1$s seconds",
                    login_enter_6_digit: "Enter 6 digit code",
                    login_error_server_invalid_otp: "Please make sure you have entered the correct OTP and try again",
                    login_retry_resend_code: "Resend Code",
                    mobile_verification: "Mobile number verification",
                    enter_otp: "Enter OTP",
                    home_header: "Replace your traditional Udhar bahi khata with Khatabook.",
                    verify: "Verify",
                    no_verification_code: "Didn\u2019t get verification code?",
                    verification_code_sent: "Verification code is sent to your mobile number",
                    verification_code: "Verification code",
                    number: "Number",
                    khatabook_preparing: "Preparing Khatabook...",
                    dont_kill_app: "Don\\\\\u2019t kill the app\u2026",
                    create_book_header: "Awesome! Your number has been verified.",
                    naya_khata_business_hint: "Ledger Name",
                    create_book_button: "Get Started",
                    new_khatabook: "Create new Khatabook",
                    create: "Create",
                    business_name: "Your Business Name",
                    enter_business_name: "Enter your business name",
                    navigation_menu_title_home: "Home",
                    navigation_menu_title_more: "More",
                    home_days_ago: "%1$s days ago",
                    home_hours_ago: "%1$s hours ago",
                    home_minutes_ago: "%1$s minutes ago",
                    home_months_ago: "%1$s months ago",
                    home_seconds_ago: "%1$s seconds ago",
                    home_weeks_ago: "%1$s weeks ago",
                    search_bar_hint_x_customers: "%1$s Customers",
                    net_balance: "Net Balance",
                    you_will_give: "You'll Give",
                    you_will_get: "You'll Get",
                    add_your_first_customer: "Add customer",
                    add_customer: "Add customer",
                    customers: "%s Customers",
                    details: "Details",
                    attachments: "Attachments",
                    filter_settled: "Settled",
                    add_new_customer_customer_name_title: "Customer Name",
                    add_customer_type_customer_name: "Type Customer Name",
                    add_new_customer_phone_number_title: "Phone Number",
                    enter_customer_phone_number_hint: "Enter Customer's Phone Number",
                    add_new_customer_prompt: "Add customer contact to send reminders",
                    save_customer: "Save",
                    entries_empty_view_desc: "Only you and %1$s can see these entries",
                    entries_empty_view_hint: "Add first transaction of %1$s",
                    transactions_list_header_debit: "You Gave",
                    transactions_list_header_credit: "You Got",
                    set_date: "Set Date",
                    entries: "Entries",
                    call: "Call",
                    sms: "SMS",
                    reminder: "Reminder",
                    customer_khata_you_will_give: "You'll Give",
                    customer_khata_you_will_get: "You'll Get",
                    new_entry_debit_explain: "You gave %1$s to %2$s",
                    new_entry_credit_explain: "You got %1$s from %2$s",
                    new_enter_amount: "Enter amount",
                    new_entry_detail_hint: "Enter Details (Item Name, Bill No, Quantity\u2026)",
                    new_attach_bills: "Attach bills",
                    new_save_transaction: "Save",
                    new_entry_saved_success: "Transaction saved",
                    edit_entry_debit_explain: "You gave %1$s to %2$s",
                    edit_entry_credit_explain: "You got %1$s from %2$s",
                    edit_enter_amount: "Enter amount",
                    edit_entry_detail_hint: "Enter Details (Item Name, Bill No., Quantity\u2026)",
                    edit_attach_bills: "Attach bills",
                    edit_save_transaction: "Save",
                    edit_entry_saved_success: "Transaction saved",
                    when_you_got: "When did you get?",
                    date: "Date",
                    transaction_detail_title_took: "%1$s took",
                    transaction_detail_title_gave: "%1$s gave",
                    transaction_detail_title_date: "On %1$s",
                    running_balance: "Running Balance",
                    note: "Note",
                    entry_details: "Entry Details",
                    share_on_whatsapp: "Share on WhatsApp",
                    share_via: "Share using",
                    transaction_detail_deletion_button: "Delete Transaction",
                    delete: "Delete",
                    cancel: "Cancel",
                    edit: "Edit",
                    deletion_confirmation: "Are you sure you want to delete this customer?",
                    settings: "Account Settings",
                    help_and_support: "Help & Support",
                    learn_how_to_use: "FAQs",
                    contact_us: "Contact Us",
                    logout: "Logout",
                    business_photo: "Business Photo",
                    your_name: "Your Name",
                    photo_number: "Phone Number",
                    save: "Save",
                    call_us: "CALL US",
                    chat_with_us: "Chat with us",
                    office_timing: "Office Timing  %1$s - %2$s",
                    having_trouble: "Having trouble? Contact us",
                    welcome: "Welcome to Khatabook",
                    info: "One app to manage all your businesses",
                    about_us: "About Us",
                    about: "About Khatabook",
                    know_more: "Everything you need to know about Khatabook",
                    terms: "Terms & Conditions",
                    know_terms: "Khatabook terms of service",
                    privacy_policy: "Privacy Policy",
                    know_privacy_policy: "Khatabook's privacy practices",
                    create_online_store: "Create Online Store",
                    manage_staff: "Manage Staff",
                    tally_on_mobile: "Tally on Mobile",
                    add: "Create New Khatabook",
                    business_name_placeholder: "Enter Business Name",
                    search: "Search",
                    feedback: "We'd love to hear from you",
                    my_profile: "My Profile",
                    account_settings: "Account Settings",
                    no_customers: "You have not added any customer",
                    start_adding: "Let's add your first customer",
                    customers_list: "Customers List",
                    customer: "Customer",
                    showing: "Showing %1$s out of %2$s customers",
                    amount: "Amount",
                    deal_type: "Transaction Type",
                    coming_soon: "Coming Soon!",
                    work_hard: "Our team is working hard to finish this page.",
                    back_to_home: "Back to home",
                    add_new_customer: "Add new customer",
                    amount_placeholder: "Enter Amount",
                    amount_error: "Invalid Amount",
                    date_error: "Invalid Date",
                    phone_error: "Please enter a valid 10 digit mobile number",
                    transaction_details: "Transaction Details",
                    edit_entry: "Edit Entry",
                    edit_transaction: "Edit transaction",
                    remove_image: "Remove this image?",
                    gave_you: "You Gave",
                    got_from_you: "You Got",
                    more_indian_languages: "We have more than 10 indian languages",
                    reports: "Reports",
                    profile: "Profile",
                    money: "Money",
                    by_logging_in_you_agree: "By logging in you agree to our",
                    and: "and",
                    terms_and_conditions: "T&C",
                    transaction_deleted: "Transaction deleted",
                    transaction_edited: "Transaction updated",
                    confirm_delete: "Are you sure you want to delete this transaction?",
                    no_transactions: "0 Transaction",
                    start_adding_transactions: "Start adding transactions now",
                    no_transactions_yet: "No transactions yet",
                    add_address: "Add Address",
                    add_mobile_number: "Add Mobile Number",
                    add_contact_number: "Add Contact Number",
                    sms_coming_soon: "SMS will be coming soon",
                    dear_sir_your_payment: "Dear Sir/Madam, your payment of Rs %1$s is still pending. Please make payment as soon as possible.',",
                    transaction_history: "To check your transaction history, click here (%1$s)",
                    transactions: "Transactions",
                    edit_customer_details: "Edit customer details",
                    edit_customer: "Edit Customer",
                    customer_name: "Customer Name",
                    address: "Address",
                    add_photo: "Add Photo",
                    no_chosen_file: "No file selected",
                    upload_photo: "Upload Photo",
                    edit_photo: "Edit photo",
                    confirm: "Confirm",
                    enter_name: "Enter Name",
                    delete_customer: "Delete Customer",
                    delete_customer_confirmation: "Are you sure you want to delete this customer?",
                    customer_deleted: "Customer deleted",
                    mobile_number_already_exists_error: "Mobile number already exists with another customer",
                    try_again: "Try again",
                    all: "All",
                    most_recent: "Most Recent",
                    oldest: "Oldest",
                    highest_amount: "Highest Amount",
                    least_amount: "Least Amount",
                    by_name_a_z: "By Name (A-Z)",
                    by_name_z_a: "By Name (Z-A)",
                    filter_by: "Filter by",
                    sort_by: "Sort by",
                    remove_filters: "Remove filter",
                    edit_profile: "Edit Profile",
                    registered_phone_number: "Registered Mobile Number",
                    upload_now: "Upload Now",
                    upload_new_photo: "Upload New Photo",
                    save_changes: "Save Changes",
                    sure_you_want_to_save_changes: "Are you sure you want to save changes?",
                    delete_photo: "Delete Photo",
                    sure_you_want_to_delete_your_photo: "Are you sure you want to delete your photo?",
                    delete_khata: "Delete Khata",
                    deleted_entries: "Deleted Entries",
                    deleted_khata: "Deleted Khata",
                    deleted_customers: "Deleted Customers",
                    undo: "Undo",
                    restore_entry_confirmation: "Are you sure you want to restore this entry?",
                    this_may_change_balance: "This may change your balance.",
                    restore: "Restore",
                    entry_restored: "Entry is recovered successfully",
                    view: "View",
                    customer_does_not_exist: "Customer doesn\u2019t exist!",
                    please_restore_customer_to_restore_entry: "Please restore this Customer to recover this Entry",
                    okay: "Okay",
                    restore_khata_confirmation: "Are you sure you want to restore this khata?",
                    khata_restored: "Khata restored",
                    customer_restored: "Customer restored",
                    khata_does_not_exist: "Khata doesn\u2019t exist!",
                    please_restore_khata_to_restore_customer: "Please restore this Khata to recover this Customer",
                    khata_deleted: "Khata Deleted",
                    restore_customer_confirmation: "Are you sure you want to restore this?",
                    please_restore_khata_to_restore_entry: "Please restore this Khata to recover this Entry",
                    khata: "Khata",
                    add_bank_account_in_kb: "Please add your bank account in Khatabook app.",
                    scan_qr_to_continue: "Scan QR code to continue",
                    use_kb_to_complete_kyc: "Please use Khatabook app to complete your KYC",
                    confirmation_modal_title: "You are going to delete \u2018%1$s\u2019.",
                    delete_khata_confirmation: "By doing so, you will lose all the entries in this Khata.",
                    are_you_sure_confirmation: "Are you ABSOLUTELY sure?",
                    type_book_name_place_holder: "To delete, type \u2018%1$s\u2019",
                    currency: "Currency",
                    backup_title: "Backup Information",
                    backup_msg: "Your data is safe.",
                    backup_text1: "Your data is automatically backed-up when you connect to the internet.",
                    backup_text2: "In case you wants to use Khatabook in a different device, just login using your Khatabook registered number. Your data will be automatically restored.",
                    backup_label: "Last backup",
                    recycle_bin: "Recycle Bin",
                    customer_updated: "Customer updated",
                    moneytab_money: "Money",
                    moneytab_addbankaccount: "Add your bank account on the Khatabook app",
                    moneytab_scanqrmessage: "Scan QR code to continue",
                    moneytab_kycviaapp: "Complete your KYC on the Khatabook app",
                    paymenthistory_settlements: "Settlements",
                    paymenthistory_startusingpayments: "Start using Khatabook App to send payment links to customers or start accepting payments via QR code",
                    paymenthistory_useqr: "Use QR Code",
                    qrcode_orderqrcode: "Order QR Code",
                    qrcode_downloadqrcode: "Download QR Code",
                    qrcode_orderplaced: "Order has beed placed!",
                    qrcode_vieworder: "View Order",
                    qrcode_reordermessage: "Do you want to re-order QR Code?",
                    qrcode_shippingaddress: "QR Code Shipped to below address:",
                    moneytab_useqrcode: "QR Code",
                    paymenthistory_collectionleaderboard: "%1$s collected from %2$s customers",
                    paymentcharges_payments: "As per RBI guidelines, banks charge a small fee for all payments on their platforms.",
                    paymenthistory_info: "Please use Khatabook App to send payment links. Web App only allows you to check the status of payments for now.",
                    settlements_nill: "No settlements yet",
                    myqrcode: "Your QR Code",
                    myqrcode_orderdetails: "Ordered on %s, usually delivered in 10 days",
                    myqrcode_scan: "Scan and Pay with any App",
                    myqrcode_status: "Order Status",
                    banking_charges_info: "For transactions via",
                    payments_and_charges: "Payments & Charges",
                    view_charges: "View Charges",
                    payment_mode: "Payment Mode",
                    from: "From",
                    khatabook_transaction_id: "Khatabook Transaction ID",
                    account_number: "Acc. No.",
                    money_deposited: "Money Deposited",
                    in_progress: "In progress",
                    payment_initiated: "Payment Initiated",
                    user_paid: "User Paid",
                    completed: "Completed",
                    link_generated: "Link Generated",
                    banking_charges: "Banking charges ",
                    transactions_list: "List of transactions",
                    payment_details: "Payment details",
                    showing_settlements: "Showing %1$s out of %2$s settlements",
                    showing_transactions: "Showing %1$s out of %2$s transactions",
                    to: "To",
                    charges: "Charges",
                    upi_payments: "UPI Payments",
                    credit_card: "Credit Card",
                    business_card: "Business Card",
                    rupay_debit_cards: "RuPay Debit Card",
                    debit_card: "Debit Card",
                    wallet: "Wallet",
                    smsreminder: "Send SMS Reminder",
                    smsreminder_confirm: "Confirm",
                    smsreminder_cancel: "Cancel",
                    smsreminder_limitreached: "Reminder couldn't be sent",
                    smsreminder_limitreached_desc: "You cannot send more than 5 SMSes to one customer in a day.",
                    qrcode_customercare: "Contact customer care",
                    search_transactions: "Search transactions ..",
                    payment_history: "Payment History",
                    moneytab_status: "status",
                    moneytab_id_number: "ID  Number",
                    received: "Received",
                    payment_link_transaction: "Payment link transactions",
                    qr_transaction: "QR Transaction",
                    pending: "Pending",
                    processing: "Processing",
                    success: "Success",
                    blocked: "blocked",
                    moneytab_utr_number: "UTR Number",
                    search_settlements: "Search settlements ..",
                    transactions_list_exact: "Transactions List",
                    personal_details: "Personal Details",
                    delivery_details: "Delivery Details",
                    pin_code: "Pin Code",
                    city: "City",
                    state: "State",
                    building_number: "Building Number",
                    address_line_1: "Address Line 1",
                    address_line_2: "Address Line 2",
                    landmark: "Landmark",
                    place_order: "Place Order",
                    trademark_owners_message: "the logos above are property of respective trademark owners",
                    my_qr_code: "My QR Code",
                    order_delivery_date: "Order Delivery Date",
                    you_will_receive: "You will receive",
                    banking_charges_info_str: "Banking Charges on Transactions",
                    failed: "Failed",
                    refund: "Refund",
                    today: "Today",
                    yesterday: "Yesterday",
                    last_week: "Last week",
                    last_months: "Last Month",
                    date_range: "Date Range",
                    this_week: "This Week",
                    this_month: "This month",
                    business_shop_name: "Business/Shop Name",
                    gift_transactions: "Gift transactions",
                    payment_processing: "Payment Processing",
                    payment_upi_free: "UPI Payments (Free)",
                    payment_net_banking: "Net Banking",
                    rupay_debit_card: "RuPay Debit",
                    no_internet_connection: "No Internet Connection!",
                    changes_will_be_lost: "Please make sure your device is connected to the internet else any changes will be lost.",
                    complete_kyc: "Complete KYC",
                    transactiondetail_kb_payment_id: "Khatabook Payment ID",
                    transactiondetail_transaction_id: "Transaction ID",
                    service_unavailable: "Service currently unavailable",
                    service_unavailable_subtext: "Please check again later. Contact our Customer Care team if the problem continues.",
                    no_settlements_yet: "No settlements yet",
                    no_settlements_yet_subtext: "Once settled, transactions will appear here.",
                    money_rightledger: "Please make sure you are using the same book on mobile and desktop to add a bank account",
                    paymenthistory_notavailable_title: "Payments on hold!",
                    paymenthistory_notavailable: "Your payments cannot be processed due to some unusual activity in your account. Reach out to our customer support for help.",
                    money_kyc_rightledger: "Please make sure you are using the same book on mobile and desktop to complete your KYC",
                    addcustomer_attachmentcount: "You can add up to 5 attachments",
                    contact_support: "Contact Support",
                    searchresults_nothingfound: "No results found.",
                    send_sms_reminder: "Send Reminder",
                    sms_will_be_sent_to: "SMS will be sent to %1$s",
                    sms_message: "Your payment of %1$s is pending at %2$ss (%3$s). View details and make the payment: %4$s -Khatabook",
                    send_sms: "Send SMS",
                    sms_sent_successfully: "Reminder sent successfully!",
                    could_not_send_sms: "Couldn't send SMS",
                    no_pending_balance_sms_error: "Customer doesn't have any pending balance",
                    exhausted_daily_limit_sms_error: "You've reached the maximum SMS limit (5 per day) with this customer.",
                    add_phone_to_send_sms: "Please add %1$s\u2019s mobile number to send SMS.",
                    next: "Next",
                    update_phone_to_send_sms: "Please add a valid mobile number to send SMS.",
                    edit_contact_number: "Edit Mobile Number",
                    add_phone: "Add",
                    incorrect_phone_sms_error: "Please add a valid 10 digit mobile number",
                    onboarding_whatsapp_optin: "Get important updates on WhatsApp",
                    onboarding_signin_number: "Sign In with your Mobile Number",
                    onboarding_managebusiness: "Manage all your businesses easily",
                    create_ledger_onboarding: "Create your first Khatabook",
                    note1: "Manage all your transactions",
                    note2: "Collect payments 3x faster",
                    note3: "100% Safe and Free",
                    select_multiple: "Select Multiple",
                    selected: "%1$s selected",
                    restore_entries_confirmation: "Are you sure you want to restore these entries?",
                    restore_customers_confirmation: "Are you sure you want to restore these customers?",
                    restore_khatas_confirmation: "Are you sure you want to restore these Khatas?",
                    entries_restored: "Entries restored successfully.",
                    customers_restored: "Customers restored successfully.",
                    khatas_restored: "Khatas restored successfully.",
                    customers_do_not_exist: "Customers don't exist!",
                    khatas_do_not_exist: "Khatas don\u2019t exist!",
                    please_restore_customers_to_restore_enties: "Please restore these Customers to recover these Entries",
                    please_restore_khatas_to_restore_entries: "Please restore these Khatas to recover these Entries",
                    please_restore_khatas_to_restore_customers: "Please restore these Khatas to recover these Customers",
                    can_not_find_customers: "We can\u2019t find customers matching your search.",
                    invalid_qr_code: "Invalid QR Code! Contact support for more details.",
                    download: "Download",
                    search_entries: "Search Entries",
                    add_contacts_manually: "Add Customer Manually",
                    choose_from_contacts: "Add From Contacts",
                    cannot_access_contacts: "Access to Contacts required!",
                    cannot_access_contacts_subtext: "Allow Khatabook to access your contacts from the mobile app to add customers faster.",
                    add_customers: "Add customers and maintain your daily Khata",
                    no_customers_yet: "No customers yet.",
                    customers_results: "Customers results",
                    transactions_results: "Transactions results",
                    view_all_results: "All Results",
                    search_result: "Search Results",
                    found_customers: "%1$s customers found",
                    found_transactions: "%1$s Transactions found",
                    actions: "Actions",
                    flat_building_number: "Flat / Building Number",
                    no_contact_number: "No contact number",
                    reset: "Reset",
                    home_years_ago: "%1$s years ago",
                    change_photo: "Change photo",
                    delete_entry: "Delete Entry",
                    confirm_delete_entry: "Are you sure you want to delete this entry?",
                    entry_deleted: "Entry deleted",
                    entry_updated: "Entry edited",
                    download_khata: "Download Khatabook app on your mobile phone.",
                    cannot_access_contacts_line2: "Allow Khatabook to access your contacts from the mobile app.",
                    your_contacts_will_appear: "Your contacts will appear here.",
                    android_only: "Available only on Android",
                    steps_to_follow: "Steps to follow",
                    discard: "Discard",
                    just_now: " Just now",
                    search_contacts: "Search Contacts...",
                    completekyc_content: "Increase your collection limits, unlock QR and more",
                    mwebtowebapp_banner: "Khatabook Web App!",
                    mwebtowebapp_bannerdescription: "Use Khatabook from your desktop browser for a better experience",
                    reports_of: "Report for %s",
                    bal: "Bal.",
                    start_date: "Start Date",
                    end_date: "End Date",
                    single_day: "Single day",
                    include_entry_details: "Include entry details in the report",
                    no_entries: "No entries!",
                    try_changing_dates: "Try Changing the selected dates",
                    total: "Total",
                    back_to_money: "Back to Money",
                    web_retirement_banner_text: "This site will be available till 31st Oct 2022 only.  Try a new & improved Khatabook Desktop to manage inventory, invoicing and parties for your business.",
                    web_beta_trial_cta: "GET EARLY ACCESS"
                },
                Cn = t(119),
                On = {
                    bn: function() {
                        var e = Object(hn.a)(pn.a.mark((function e() {
                            var n;
                            return pn.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.e(11).then(t.bind(null, 895));
                                    case 2:
                                        return n = e.sent, e.abrupt("return", n.bengali);
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
                    en: function() {
                        return Promise.resolve(En)
                    },
                    gu: function() {
                        var e = Object(hn.a)(pn.a.mark((function e() {
                            var n;
                            return pn.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.e(23).then(t.bind(null, 896));
                                    case 2:
                                        return n = e.sent, e.abrupt("return", n.gujarati);
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
                    hi: function() {
                        var e = Object(hn.a)(pn.a.mark((function e() {
                            var n;
                            return pn.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.e(24).then(t.bind(null, 897));
                                    case 2:
                                        return n = e.sent, e.abrupt("return", n.hindi);
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
                    en_US: function() {
                        var e = Object(hn.a)(pn.a.mark((function e() {
                            var n;
                            return pn.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.e(22).then(t.bind(null, 898));
                                    case 2:
                                        return n = e.sent, e.abrupt("return", n.hinglish);
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
                    kn: function() {
                        var e = Object(hn.a)(pn.a.mark((function e() {
                            var n;
                            return pn.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.e(25).then(t.bind(null, 899));
                                    case 2:
                                        return n = e.sent, e.abrupt("return", n.kannada);
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
                    ml: function() {
                        var e = Object(hn.a)(pn.a.mark((function e() {
                            var n;
                            return pn.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.e(28).then(t.bind(null, 900));
                                    case 2:
                                        return n = e.sent, e.abrupt("return", n.malayalam);
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
                    mr: function() {
                        var e = Object(hn.a)(pn.a.mark((function e() {
                            var n;
                            return pn.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.e(29).then(t.bind(null, 901));
                                    case 2:
                                        return n = e.sent, e.abrupt("return", n.marathi);
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
                    pa: function() {
                        var e = Object(hn.a)(pn.a.mark((function e() {
                            var n;
                            return pn.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.e(31).then(t.bind(null, 902));
                                    case 2:
                                        return n = e.sent, e.abrupt("return", n.punjabi);
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
                    ta: function() {
                        var e = Object(hn.a)(pn.a.mark((function e() {
                            var n;
                            return pn.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.e(36).then(t.bind(null, 903));
                                    case 2:
                                        return n = e.sent, e.abrupt("return", n.tamil);
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
                    te: function() {
                        var e = Object(hn.a)(pn.a.mark((function e() {
                            var n;
                            return pn.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.e(37).then(t.bind(null, 904));
                                    case 2:
                                        return n = e.sent, e.abrupt("return", n.telugu);
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
                    or: function() {
                        var e = Object(hn.a)(pn.a.mark((function e() {
                            var n;
                            return pn.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.e(30).then(t.bind(null, 905));
                                    case 2:
                                        return n = e.sent, e.abrupt("return", n.odia);
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
                    as: function() {
                        var e = Object(hn.a)(pn.a.mark((function e() {
                            var n;
                            return pn.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.e(9).then(t.bind(null, 906));
                                    case 2:
                                        return n = e.sent, e.abrupt("return", n.assamese);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                gn = t(110),
                Sn = t(165),
                vn = function() {
                    var e = Object(hn.a)(pn.a.mark((function e(n) {
                        return pn.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, On[n](n);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }();
            var yn = Object(a.memo)((function(e) {
                    var n = e.children,
                        t = Object(a.useState)(!1),
                        r = Object(c.a)(t, 2),
                        i = r[0],
                        l = r[1],
                        s = Object(a.useState)(),
                        u = Object(c.a)(s, 2),
                        d = u[0],
                        m = u[1],
                        p = Object(a.useState)(Object(Cn.a)() || gn.a),
                        h = Object(c.a)(p, 2),
                        f = h[0],
                        _ = h[1],
                        E = Object(Ce.a)().setLocale;
                    Object(a.useEffect)((function() {
                        l(!1), vn(f).then((function(e) {
                            m(e), l(!0)
                        })).catch((function(e) {
                            var n;
                            Object(w.a)(e, {
                                tags: (n = {}, Object(bn.a)(n, Sn.a.LOCALE, f), Object(bn.a)(n, "module", H.a.LANG_PROVIDER), n)
                            }), m(En), l(!0)
                        }))
                    }), [f]);
                    var C = Object(a.useCallback)((function(e) {
                            E(e), _(e)
                        }), [E]),
                        O = Object(a.useCallback)((function(e, n) {
                            var t = _n()(d, e, e);
                            return void 0 !== n && (Array.isArray(n) ? n.forEach((function(e, n) {
                                var a = new RegExp("\\%".concat(n + 1, "\\$s"), "ig");
                                t = t.replace(a, String(e)), a = new RegExp("\\%s", "ig"), t = t.replace(a, String(e))
                            })) : Object.keys(n).forEach((function(e) {
                                var a = new RegExp("\\%\\(".concat(e, "\\)s?"), "ig");
                                t = t.replace(a, String(n[e])), a = new RegExp("\\%s", "ig"), t = t.replace(a, String(n[e]))
                            }))), t
                        }), [d]),
                        g = Object(a.useMemo)((function() {
                            return {
                                t: O,
                                updateLocale: C
                            }
                        }), [O, C]);
                    return !1 === i ? o.a.createElement(b.a, null) : o.a.createElement(Oe.a.Provider, {
                        value: g
                    }, n)
                })),
                Tn = t(115),
                An = t(233),
                Rn = t(161),
                Nn = t(56);
            var kn = Object(a.memo)((function(e) {
                    var n = e.children,
                        t = Object(a.useState)(Object(Rn.a)() || Nn.a),
                        r = Object(c.a)(t, 2),
                        i = r[0],
                        l = r[1],
                        s = Object(Ce.a)().setCurrency,
                        u = Object(a.useCallback)((function(e) {
                            l(Object(Tn.c)(e)), s(e)
                        }), [s, l]),
                        d = Object(a.useMemo)((function() {
                            return {
                                currency: i,
                                currencyCountry: Object(Rn.b)() || Nn.b,
                                updateCurrency: u
                            }
                        }), [i, u]);
                    return o.a.createElement(An.a.Provider, {
                        value: d
                    }, n)
                })),
                Dn = t(382),
                In = t(291),
                wn = t.n(In),
                Pn = t(383);
            var Ln = Object(a.memo)((function(e) {
                    var n = e.className,
                        t = e.height,
                        a = void 0 === t ? 40 : t,
                        r = e.width,
                        i = void 0 === r ? 4 : r,
                        c = e.stroke,
                        l = void 0 === c ? "#0752AD" : c;
                    return o.a.createElement("svg", {
                        className: n,
                        width: i,
                        height: a,
                        viewBox: "0 0 4 40",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, o.a.createElement("line", {
                        x1: "2",
                        y1: "2",
                        x2: "2",
                        y2: "38",
                        stroke: l,
                        strokeWidth: "4",
                        strokeLinecap: "round"
                    }))
                })),
                xn = t(289),
                jn = t.n(xn),
                Mn = t(290),
                Bn = t.n(Mn),
                Kn = t(144),
                Un = Object(P.a)({
                    snackbar: {
                        "& .MuiSnackbarContent-root": {
                            boxShadow: S.d.PAPER_SHADOW,
                            borderRadius: "6px",
                            fontSize: "14px",
                            padding: "8px 16px 8px 8px",
                            color: S.d.MEDIUM_DARK_GREY,
                            backgroundColor: S.d.WHITE,
                            fontWeight: 500
                        },
                        "& .MuiSnackbarContent-message": {
                            padding: "0"
                        }
                    },
                    closeIcon: {
                        opacity: .5
                    },
                    actionButton: {
                        backgroundColor: S.d.LIGHT_GREY,
                        borderRadius: "4px",
                        boxShadow: "none",
                        padding: "4px 12px",
                        margin: "0 24px",
                        fontSize: "14px",
                        fontWeight: 500,
                        textTransform: "capitalize",
                        color: S.d.MEDIUM_DARK_GREY
                    },
                    toastMessage: {
                        display: "flex",
                        alignItems: "center"
                    },
                    toastBorder: {
                        marginRight: "15px"
                    },
                    toastIcon: {
                        width: "22px",
                        height: "22px",
                        marginRight: "16px"
                    }
                });
            var Gn = Object(a.memo)((function(e) {
                    var n = e.toastMessage,
                        t = e.open,
                        a = e.handleClose,
                        r = e.actionHandler,
                        i = e.showViewButton,
                        c = e.toastType,
                        u = Un(),
                        d = Object(Oe.b)().t,
                        b = c === Kn.a.INFO ? S.d.SECONDARY_COLOR : "#3CB17C",
                        m = o.a.createElement("div", {
                            className: u.toastMessage
                        }, o.a.createElement(Ln, {
                            width: 4,
                            height: 40,
                            stroke: b,
                            className: u.toastBorder
                        }), c === Kn.a.INFO ? o.a.createElement("img", {
                            src: Bn.a,
                            alt: "information",
                            className: u.toastIcon
                        }) : o.a.createElement("img", {
                            src: jn.a,
                            className: u.toastIcon,
                            alt: "success"
                        }), n);
                    return o.a.createElement(s.a, {
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "right"
                        },
                        style: t ? {
                            display: "block"
                        } : {
                            display: "none"
                        },
                        open: t,
                        autoHideDuration: 2e3,
                        onClose: a,
                        message: m,
                        className: u.snackbar,
                        TransitionComponent: function(e) {
                            return o.a.createElement(Pn.a, Object.assign({}, e, {
                                direction: "left"
                            }))
                        },
                        action: o.a.createElement(o.a.Fragment, null, i && o.a.createElement(l.a, {
                            className: u.actionButton,
                            onClick: function() {
                                a(), r()
                            }
                        }, d("view")), o.a.createElement(Dn.a, {
                            size: "small",
                            "aria-label": "close",
                            color: "inherit",
                            onClick: a
                        }, o.a.createElement(wn.a, {
                            fontSize: "small",
                            classes: {
                                root: u.closeIcon
                            }
                        })))
                    })
                })),
                Fn = t(234);
            var Hn = Object(a.memo)((function(e) {
                    var n = e.children,
                        t = Object(a.useState)(!1),
                        r = Object(c.a)(t, 2),
                        i = r[0],
                        l = r[1],
                        s = Object(a.useState)(""),
                        u = Object(c.a)(s, 2),
                        d = u[0],
                        b = u[1],
                        m = Object(a.useState)(!1),
                        p = Object(c.a)(m, 2),
                        h = p[0],
                        f = p[1],
                        _ = Object(a.useState)(Kn.a.INFO),
                        E = Object(c.a)(_, 2),
                        C = E[0],
                        O = E[1],
                        g = Object(a.useState)((function() {})),
                        S = Object(c.a)(g, 2),
                        v = S[0],
                        y = S[1],
                        T = Object(a.useCallback)((function() {
                            return l(!0)
                        }), []),
                        A = Object(a.useMemo)((function() {
                            return {
                                showToastMessage: T,
                                setToastMessage: b,
                                setToastActionHandler: y,
                                setShowViewButton: f,
                                setToastType: O
                            }
                        }), [T, b, y, f, O]);
                    return o.a.createElement(Fn.a.Provider, {
                        value: A
                    }, n, o.a.createElement(Gn, {
                        toastMessage: d,
                        open: i,
                        handleClose: function() {
                            return l(!1)
                        },
                        actionHandler: v,
                        showViewButton: h,
                        toastType: C
                    }))
                })),
                Yn = t(223),
                Vn = t.n(Yn),
                Wn = t(271),
                zn = t(237),
                $n = t.n(zn),
                Zn = t(292),
                Qn = t.n(Zn),
                qn = Object(P.a)((function() {
                    return {
                        snackBar: {
                            padding: "16px 16px 16px 24px",
                            backgroundColor: S.d.TEXT_GREY,
                            borderRadius: "10px",
                            boxShadow: "2px 3px 7px rgba(0, 0, 0, 0.2)"
                        },
                        container: {
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            position: "relative"
                        },
                        noConnectionIcon: {
                            width: "40px",
                            height: "40px",
                            marginRight: "16px"
                        },
                        title: {
                            fontSize: "18px",
                            fontWeight: "bold",
                            color: S.d.WHITE
                        },
                        closeIcon: {
                            position: "absolute",
                            top: "0",
                            right: "0",
                            color: "#A6A9AB",
                            cursor: "pointer"
                        },
                        txt: {
                            fontSize: "16px",
                            color: S.d.WHITE
                        }
                    }
                }));
            var Jn = function(e) {
                    var n = e.open,
                        t = e.onClose,
                        a = qn(),
                        r = Object(Oe.b)().t;
                    return o.a.createElement(s.a, {
                        anchorOrigin: {
                            vertical: "top",
                            horizontal: "center"
                        },
                        open: n,
                        TransitionComponent: function(e) {
                            return o.a.createElement(Wn.a, e)
                        },
                        className: a.snackBar,
                        style: n ? {
                            display: "block"
                        } : {
                            display: "none"
                        }
                    }, o.a.createElement("div", {
                        className: a.container
                    }, o.a.createElement("img", {
                        src: Qn.a,
                        alt: "no internet",
                        className: a.noConnectionIcon
                    }), o.a.createElement("div", null, o.a.createElement(Vn.a, {
                        className: a.title
                    }, r("no_internet_connection")), o.a.createElement(Vn.a, {
                        className: a.txt
                    }, r("changes_will_be_lost"))), o.a.createElement($n.a, {
                        onClick: t,
                        className: a.closeIcon
                    })))
                },
                Xn = Object(a.createContext)({
                    showNoConnection: !1
                }),
                et = Xn;
            var nt = function() {
                var e = Object(a.useState)("undefined" === typeof navigator || "boolean" !== typeof navigator.onLine || navigator.onLine),
                    n = Object(c.a)(e, 2),
                    t = n[0],
                    o = n[1],
                    r = function() {
                        return o(!0)
                    },
                    i = function() {
                        return o(!1)
                    };
                return Object(a.useEffect)((function() {
                    return window.addEventListener("online", r), window.addEventListener("offline", i),
                        function() {
                            window.removeEventListener("online", r), window.removeEventListener("offline", i)
                        }
                }), []), t
            };
            var tt = Object(a.memo)((function(e) {
                    var n = e.children,
                        t = nt(),
                        r = Object(a.useState)(!t),
                        i = Object(c.a)(r, 2),
                        l = i[0],
                        s = i[1];
                    Object(a.useEffect)((function() {
                        s(!t)
                    }), [t]);
                    var u = Object(a.useMemo)((function() {
                        return {
                            showNoConnection: l
                        }
                    }), [l]);
                    return o.a.createElement(et.Provider, {
                        value: u
                    }, n, o.a.createElement(Jn, {
                        open: l,
                        onClose: function() {
                            return s(!1)
                        }
                    }))
                })),
                at = t(241);
            var ot = Object(a.memo)((function(e) {
                var n = e.children,
                    t = Object(a.useState)(""),
                    r = Object(c.a)(t, 2),
                    i = r[0],
                    l = r[1],
                    s = Object(a.useMemo)((function() {
                        return {
                            searchText: i,
                            setSearchText: l
                        }
                    }), [i, l]);
                return window.onpopstate = function() {
                    i.length > 0 && l("")
                }, o.a.createElement(at.a.Provider, {
                    value: s
                }, n)
            }));
            var rt = function() {
                    var e = Object(m.b)().isMobile;
                    return Object(a.useEffect)((function() {
                        try {
                            document.body.classList.remove("base-not-loaded"), Object(oe.a)(e)
                        } catch (n) {}
                    }), [e]), o.a.createElement(ne.a, null, o.a.createElement(ae, null), o.a.createElement(kn, null, o.a.createElement(yn, null, o.a.createElement(Hn, null, o.a.createElement(ot, null, e ? o.a.createElement(tn, null) : o.a.createElement(tt, null, o.a.createElement(dn, null)))))))
                },
                it = t(16),
                ct = t(137),
                lt = t(164),
                st = t(74),
                ut = t(158),
                dt = t(50),
                bt = function(e, n) {
                    switch (n.type) {
                        case dt.a.APP_SET_USER:
                            return void 0 !== n.payload ? Object(st.h)(n.payload) : Object(st.c)(), Object(it.a)(Object(it.a)({}, e), {}, {
                                userInfo: n.payload
                            });
                        case dt.a.APP_SET_DEVICE:
                            return void 0 !== n.payload ? Object(st.g)(n.payload) : Object(st.a)(), Object(it.a)(Object(it.a)({}, e), {}, {
                                deviceInfo: n.payload
                            });
                        case dt.a.APP_OTP_SENT:
                            return Object(it.a)(Object(it.a)({}, e), {}, {
                                isOtpSent: n.payload
                            });
                        case dt.a.APP_SET_LOCALE:
                            return Object(Cn.c)(n.payload), Object(it.a)(Object(it.a)({}, e), {}, {
                                locale: n.payload
                            });
                        case dt.a.APP_SET_CURRENCY:
                            return Object(Rn.d)(n.payload), Object(it.a)(Object(it.a)({}, e), {}, {
                                currency: n.payload
                            });
                        case dt.a.APP_SET_BOOK:
                            return void 0 !== n.payload ? Object(ut.d)(n.payload) : Object(ut.a)(), Object(it.a)(Object(it.a)({}, e), {}, {
                                currentBook: n.payload
                            });
                        default:
                            return e
                    }
                },
                mt = function(e, n) {
                    var t = Object(it.a)({}, e);
                    return t.app = bt(t.app, n), t
                },
                pt = t(121),
                ht = function() {
                    var e = Object(Cn.a)(),
                        n = Object(st.e)(),
                        t = Object(st.d)(),
                        a = Object(ut.b)();
                    return {
                        locale: null !== e ? e : void 0,
                        userInfo: null !== n ? n : void 0,
                        deviceInfo: null !== t ? t : void 0,
                        currentBook: null !== a ? a : void 0
                    }
                }(),
                ft = Object(it.a)(Object(it.a)({}, lt.a), {}, {
                    app: Object(it.a)(Object(it.a)({}, lt.a.app), ht)
                });
            void 0 !== ht.deviceInfo && Object(pt.b)({
                "x-khatabook-token": ht.deviceInfo.token
            });
            var _t = Object(a.memo)((function(e) {
                var n = e.children,
                    t = Object(a.useReducer)(mt, ft),
                    r = Object(c.a)(t, 2),
                    i = r[0],
                    l = r[1],
                    s = Object(a.useMemo)((function() {
                        return {
                            state: i,
                            dispatch: l
                        }
                    }), [i]);
                return o.a.createElement(ct.a.Provider, {
                    value: s
                }, n)
            }));
            Object(w.b)(), Object(X.a)(), window.addEventListener("storage", (function(e) {
                if (e.key === Z.b && null !== e.newValue) try {
                    switch (JSON.parse(e.newValue).type) {
                        case Z.a.ON_LOGGING_OUT:
                            return void q().then((function() {
                                window.location.href = Q.n
                            }));
                        case Z.a.LOGIN_STATUS_CHANGE:
                            return void J()
                    }
                } catch (n) {}
            }), !1);
            var Et = function() {
                    var e = Object(a.useState)(!1),
                        n = Object(c.a)(e, 2),
                        t = n[0],
                        r = n[1],
                        i = Object(a.useRef)(null);
                    Object(a.useEffect)((function() {
                        var e = Object(ee.f)((function(e) {
                            i.current = e, r(!0)
                        }));
                        return function() {
                            e()
                        }
                    }), []);
                    var b = Object(a.useCallback)((function(e, n) {
                            "clickaway" !== n && r(!1)
                        }), []),
                        m = Object(a.useCallback)((function() {
                            null !== i.current && i.current.postMessage({
                                type: "SKIP_WAITING"
                            }), r(!1)
                        }), []);
                    return o.a.createElement(u.a, {
                        utils: d.a
                    }, o.a.createElement(R, null, o.a.createElement(y, null), o.a.createElement(Y, null, o.a.createElement(_t, null, o.a.createElement($, null, o.a.createElement(f, null, o.a.createElement(rt, null)))), o.a.createElement(s.a, {
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "right"
                        },
                        open: t,
                        onClose: b,
                        message: "Update Available",
                        action: o.a.createElement(l.a, {
                            color: "secondary",
                            size: "small",
                            onClick: m
                        }, "Reload")
                    }))))
                },
                Ct = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

            function Ot(e, n) {
                navigator.serviceWorker.register(e).then((function(e) {
                    e.onupdatefound = function() {
                        var t = e.installing;
                        null != t && (t.onstatechange = function() {
                            "installed" === t.state && (navigator.serviceWorker.controller ? (console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."), n && n.onUpdate && n.onUpdate(t)) : (console.log("Content is cached for offline use."), n && n.onSuccess && n.onSuccess(e)))
                        })
                    }
                })).catch((function(e) {
                    console.error("Error during service worker registration:", e)
                }))
            }
            var gt = t(232);
            i.a.render(o.a.createElement(o.a.StrictMode, null, o.a.createElement(Et, null)), document.getElementById("root"));
            ! function(e) {
                if ("serviceWorker" in navigator) {
                    if (new URL("", window.location.href).origin !== window.location.origin) return;
                    window.addEventListener("load", (function() {
                        var n = "".concat("", "/service-worker.js");
                        Ct ? (! function(e, n) {
                            fetch(e, {
                                headers: {
                                    "Service-Worker": "script"
                                }
                            }).then((function(t) {
                                var a = t.headers.get("content-type");
                                404 === t.status || null != a && -1 === a.indexOf("javascript") ? navigator.serviceWorker.ready.then((function(e) {
                                    e.unregister().then((function() {
                                        window.location.reload()
                                    }))
                                })) : Ot(e, n)
                            })).catch((function() {
                                console.log("No internet connection found. App is running in offline mode.")
                            }))
                        }(n, e), navigator.serviceWorker.ready.then((function() {
                            console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")
                        }))) : Ot(n, e)
                    }));
                    var n = !!navigator.serviceWorker.controller;
                    navigator.serviceWorker.addEventListener("controllerchange", Object(hn.a)(pn.a.mark((function e() {
                        return pn.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    window.location.reload();
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))))
                }
            }({
                onUpdate: function(e) {
                    Object(gt.f)(e)
                }
            })
        },
        39: function(e, n, t) {
            "use strict";
            var a = t(0),
                o = t.n(a),
                r = t(35),
                i = t(54),
                c = t(94),
                l = t(64),
                s = t(74),
                u = t(25);
            n.a = function(e) {
                return function(n) {
                    var t = Object(c.a)(),
                        d = t.isLoggedIn,
                        b = t.getUserInfo,
                        m = t.getCurrentBook,
                        p = Object(r.g)(),
                        h = m();
                    return Object(a.useEffect)((function() {
                        !1 !== d() || (null === h || void 0 === h ? void 0 : h.deleted) || p.replace(u.k), !p.location.pathname.includes(u.B) && (null === h || void 0 === h ? void 0 : h.deleted) && p.replace(u.b);
                        var e = b();
                        void 0 !== e && Object(l.c)(e.user_id), !Object(s.f)() && p.location.pathname.includes(u.q) && p.replace(u.f)
                    }), [p, d, b, h]), d() ? o.a.createElement(e, n) : o.a.createElement(i.a, null)
                }
            }
        },
        40: function(e, n, t) {
            "use strict";
            t.d(n, "b", (function() {
                return i
            }));
            var a = t(0),
                o = {
                    t: function(e) {
                        return e
                    },
                    updateLocale: function() {}
                },
                r = Object(a.createContext)(o),
                i = function() {
                    return Object(a.useContext)(r)
                };
            n.a = r
        },
        41: function(e, n, t) {
            "use strict";
            var a;
            t.d(n, "a", (function() {
                    return a
                })),
                function(e) {
                    e.CUSTOMER_CHANGED = "CUSTOMER_CHANGED", e.CUSTOMER_DELETED = "CUSTOMER_DELETED", e.TRANSACTION_CHANGED = "TRANSACTION_CHANGED", e.TRANSACTION_EDITED = "TRANSACTION_EDITED", e.TRANSACTION_DELETED = "TRANSACTION_DELETED", e.SERVICE_WORKER_UPDATED = "SERVICE_WORKER_UPDATED", e.BOOK_DELETED = "BOOK_DELETED", e.BOOK_CHANGED = "BOOK_CHANGED", e.INVOICE_CHANGED = "INVOICE_CHANGED", e.ConfirmDeleteTransactionClick = "ConfirmDeleteTransactionClick"
                }(a || (a = {}))
        },
        50: function(e, n, t) {
            "use strict";
            var a;
            t.d(n, "a", (function() {
                    return a
                })), t.d(n, "b", (function() {
                    return o
                })),
                function(e) {
                    e.APP_SET_USER = "app/set_user", e.APP_SET_DEVICE = "app/set_device", e.APP_OTP_SENT = "app/otp_sent", e.APP_SET_LOCALE = "app/set_locale", e.APP_SET_BOOK = "app/set_book", e.APP_SET_CURRENCY = "app/set_currency"
                }(a || (a = {}));
            var o = {
                isOtpSent: !1
            }
        },
        54: function(e, n, t) {
            "use strict";
            var a = t(0),
                o = t.n(a),
                r = t(184),
                i = t(297),
                c = t(225),
                l = t(9),
                s = Object(r.a)((function(e) {
                    return {
                        root: {
                            position: "relative",
                            minHeight: "100vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column"
                        },
                        animationContainer: {
                            height: "70px",
                            width: "70px",
                            position: "relative"
                        },
                        bottom: {
                            color: "#ededed",
                            backgroundColor: l.d.WHITE,
                            borderRadius: "50%"
                        },
                        top: {
                            color: l.c.LITE_BLUE,
                            animationDuration: "550ms",
                            position: "absolute",
                            left: "2px",
                            top: "1px"
                        },
                        circle: {
                            strokeLinecap: "round",
                            color: l.d.SECONDARY_COLOR
                        },
                        text: {
                            marginTop: "33px",
                            fontSize: "18px",
                            color: l.d.SECONDARY_COLOR,
                            fontWeight: 500
                        },
                        percentage: {
                            position: "absolute",
                            left: "24px",
                            bottom: "24px",
                            fontSize: "14px",
                            fontWeight: "bold",
                            color: l.d.SECONDARY_COLOR
                        }
                    }
                }));
            n.a = Object(a.memo)((function(e) {
                var n = e.text,
                    t = e.className,
                    a = void 0 === t ? "" : t,
                    r = e.value,
                    l = e.isSync,
                    u = s();
                return o.a.createElement("div", {
                    className: "".concat(u.root, " ").concat(a)
                }, o.a.createElement("div", {
                    className: u.animationContainer
                }, o.a.createElement(i.a, {
                    variant: "determinate",
                    className: u.bottom,
                    size: 70,
                    thickness: 4.5,
                    value: 100
                }), o.a.createElement(i.a, {
                    variant: l ? "determinate" : "indeterminate",
                    disableShrink: !l,
                    className: u.top,
                    classes: {
                        circle: u.circle
                    },
                    size: 67,
                    thickness: 3,
                    value: r
                }), void 0 !== r && o.a.createElement(c.a, {
                    variant: "caption",
                    component: "div",
                    className: u.percentage
                }, "".concat(Math.round(r), "%"))), void 0 !== n && o.a.createElement("div", {
                    className: u.text
                }, n))
            }))
        },
        56: function(e, n, t) {
            "use strict";
            t.d(n, "c", (function() {
                return a
            })), t.d(n, "a", (function() {
                return o
            })), t.d(n, "b", (function() {
                return r
            }));
            var a = "KB_CURRENCY",
                o = "IN",
                r = "Indian Rupee"
        },
        62: function(e, n, t) {
            "use strict";
            t.d(n, "h", (function() {
                return a
            })), t.d(n, "g", (function() {
                return o
            })), t.d(n, "f", (function() {
                return r
            })), t.d(n, "a", (function() {
                return i
            })), t.d(n, "b", (function() {
                return c
            })), t.d(n, "d", (function() {
                return l
            })), t.d(n, "c", (function() {
                return s
            })), t.d(n, "e", (function() {
                return u
            }));
            var a = "KB_USER",
                o = "KB_DEVICE",
                r = "ON_BOARDING_PHONE",
                i = "ON_BOARDING_BUSINESS_NAME",
                c = "ON_BOARDING_COUNTRY_CODE",
                l = "ON_BOARDING_OTP",
                s = "ON_BOARDING_ENABLE_USER_PREF",
                u = "ON_BOARDING_OTP_TIMER"
        },
        64: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return b
            })), t.d(n, "c", (function() {
                return m
            })), t.d(n, "d", (function() {
                return p
            })), t.d(n, "b", (function() {
                return h
            }));
            var a, o = t(16),
                r = "QrayzHdf6VFCt1nIoQKI0KkdmCGNurSs",
                i = "7OEXukoeV6h9u6Qj6zprLLZJkEtDkwye",
                c = "GTM-MPD8BXV&gtm_auth=P8DMhzpBjtACj5lUShVljQ&gtm_preview=env-1&gtm_cookies_win=x",
                l = "GTM-MPD8BXV&gtm_auth=Bybw6VvariG7l_6ch46DDQ&gtm_preview=env-99&gtm_cookies_win=x",
                s = "GTM-NJXBZBW&gtm_auth=G77noH1ein4aFFrDktwtCA&gtm_preview=env-1&gtm_cookies_win=x",
                u = "GTM-NJXBZBW&gtm_auth=z5H3T6YazisBZ-iyzntuig&gtm_preview=env-9&gtm_cookies_win=x",
                d = function() {
                    setTimeout((function() {
                        window.clevertap.notifications.push({
                            okButtonColor: "#f28046",
                            askAgainTimeInSeconds: 6048e5,
                            serviceWorkerPath: "/service-worker.js",
                            skipDialog: !0
                        })
                    }), 3e4)
                },
                b = function(e) {
                    ! function(e) {
                        var n;
                        switch (window.location.host) {
                            case "app.khatabook.com":
                                n = c;
                                break;
                            case "web.khatabook.com":
                                n = s;
                                break;
                            default:
                                n = e ? l : u
                        }
                        if (n) {
                            var t, a = document.getElementsByTagName("script")[0],
                                o = document.createElement("script");
                            o.async = !0, o.src = "https://www.googletagmanager.com/gtm.js?id=".concat(n), null === (t = a.parentNode) || void 0 === t || t.insertBefore(o, a)
                        }
                    }(e),
                    function() {
                        var e = window.analytics = window.analytics || [];
                        if (!e.initialize)
                            if (e.invoked) window.console && console.error && console.error("Segment snippet included twice.");
                            else {
                                e.invoked = !0, e.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on", "addSourceMiddleware", "addIntegrationMiddleware", "setAnonymousId", "addDestinationMiddleware"], e.factory = function(n) {
                                    return function() {
                                        for (var t = arguments.length, a = new Array(t), o = 0; o < t; o++) a[o] = arguments[o];
                                        return a.unshift(n), e.push(a), e
                                    }
                                };
                                for (var n = 0; n < e.methods.length; n++) {
                                    var t = e.methods[n];
                                    e[t] = e.factory(t)
                                }
                                var a;
                                switch (e.load = function(n, t) {
                                    var a = document.createElement("script");
                                    a.type = "text/javascript", a.async = !0, a.src = "https://cdn.segment.com/analytics.js/v1/" + n + "/analytics.min.js", document.getElementsByTagName("head")[0].appendChild(a), e._loadOptions = t
                                }, e.SNIPPET_VERSION = "4.13.1", window.location.host) {
                                    case "app.khatabook.com":
                                    case "web-app.khatabook.com":
                                    case "web.khatabook.com":
                                        a = i;
                                        break;
                                    default:
                                        a = r
                                }
                                a && e.load(a)
                            }
                    }()
                },
                m = function(e) {
                    a !== e && (a = e, window.analytics.identify(e), window.dataLayer.push({
                        event: "SET_USER",
                        userId: e
                    }), d())
                },
                p = function() {
                    window.analytics.identify(""), window.dataLayer.push({
                        event: "SET_USER",
                        userId: ""
                    }), d()
                },
                h = function(e, n) {
                    var t = window.bowser.getParser(navigator.appVersion).getBrowser();
                    void 0 == n && (n = {}), n.browserName = t.name, n.browserVersion = t.version, window.analytics.track(e, void 0 !== n ? {
                        data: n
                    } : {}), window.dataLayer.push(Object(o.a)({
                        event: e
                    }, void 0 !== n ? {
                        data: n
                    } : {}))
                }
        },
        74: function(e, n, t) {
            "use strict";
            t.d(n, "e", (function() {
                return r
            })), t.d(n, "d", (function() {
                return i
            })), t.d(n, "h", (function() {
                return c
            })), t.d(n, "g", (function() {
                return l
            })), t.d(n, "a", (function() {
                return s
            })), t.d(n, "c", (function() {
                return u
            })), t.d(n, "b", (function() {
                return d
            })), t.d(n, "f", (function() {
                return b
            }));
            var a = t(62),
                o = t(145),
                r = function() {
                    var e = localStorage.getItem(a.h);
                    if (null === e) return null;
                    try {
                        return JSON.parse(e)
                    } catch (n) {
                        return null
                    }
                },
                i = function() {
                    var e = localStorage.getItem(a.g);
                    if (null === e) return null;
                    try {
                        return JSON.parse(e)
                    } catch (n) {
                        return null
                    }
                },
                c = function(e) {
                    localStorage.setItem(a.h, JSON.stringify(e))
                },
                l = function(e) {
                    localStorage.setItem(a.g, JSON.stringify(e))
                },
                s = function() {
                    return localStorage.removeItem(a.g)
                },
                u = function() {
                    return localStorage.removeItem(a.h)
                },
                d = function() {
                    localStorage.removeItem(a.a), localStorage.removeItem(a.b), localStorage.removeItem(a.f), localStorage.removeItem(a.d), localStorage.removeItem(a.c), localStorage.removeItem(a.e)
                },
                b = function() {
                    var e = r();
                    return (null === e || void 0 === e ? void 0 : e.country_code) === o.a
                }
        },
        75: function(e, n, t) {
            "use strict";
            t.d(n, "b", (function() {
                return s
            })), t.d(n, "a", (function() {
                return u
            })), t.d(n, "c", (function() {
                return d
            })), t.d(n, "d", (function() {
                return b
            }));
            var a = t(42),
                o = t(1),
                r = t.n(o),
                i = t(3),
                c = (t(204), t(27)),
                l = t(10),
                s = function() {
                    var e = Object(i.a)(r.a.mark((function e() {
                        var n;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(c.a)();
                                case 2:
                                    return n = e.sent, e.abrupt("return", n.getAll(l.i.BOOKS));
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
                u = function() {
                    var e = Object(i.a)(r.a.mark((function e(n) {
                        var t;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(c.a)();
                                case 2:
                                    return t = e.sent, e.abrupt("return", t.get(l.i.BOOKS, n));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                d = function() {
                    var e = Object(i.a)(r.a.mark((function e() {
                        var n;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(c.a)();
                                case 2:
                                    return n = e.sent, e.abrupt("return", n.getAllFromIndex(l.i.BOOKS, l.a.DIRTY, IDBKeyRange.bound([1], [1])));
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
                b = function() {
                    var e = Object(i.a)(r.a.mark((function e(n) {
                        var t, o, i;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(c.a)();
                                case 2:
                                    return t = e.sent, o = t.transaction(l.i.BOOKS, "readwrite"), i = n.map((function(e) {
                                        return o.store.put(e)
                                    })), e.abrupt("return", Promise.all([].concat(Object(a.a)(i), [o.done])));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        76: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return i
            })), t.d(n, "b", (function() {
                return o
            })), t.d(n, "e", (function() {
                return l
            })), t.d(n, "d", (function() {
                return s
            })), t.d(n, "c", (function() {
                return u
            }));
            var a, o, r = t(4),
                i = "https://khata.pe";
            ! function(e) {
                e.REQUEST_OTP = "REQUEST_OTP", e.LOGIN = "LOGIN", e.GET_BOOKS = "GET_BOOKS", e.GET_CUSTOMERS = "GET_CUSTOMERS", e.GET_TRANSACTIONS = "GET_TRANSACTIONS", e.POST_BOOKS = "POST_BOOKS", e.POST_CUSTOMERS = "POST_CUSTOMERS", e.POST_TRANSACTIONS = "POST_TRANSACTIONS", e.S3_UPLOAD_URL = "S3_UPLOAD_URL", e.USER_PREFERENCES = "USER_PREFERENCES", e.FETCH_QR_CODE = "FETCH_QR_CODE", e.GET_BANK_ACCOUNT = "GET_BANK_ACCOUNT", e.GET_INVOICES = "GET_INVOICES", e.GET_PAYOUTS = "GET_PAYOUTS", e.VERIFY_KYC = "VERIFY_KYC", e.PINCODE_DETAILS = "PINCODE_DETAILS", e.IS_PINCODE_SERVICEABLE = "IS_PINCODE_SERVICEABLE", e.ORDER_QR_CODE = "ORDER_QR_CODE", e.PAYMENT_CHARGES = "PAYMENT_CHARGES", e.GET_QR_CODE_PLACED = "GET_QR_CODE_PLACED", e.GET_PAYMENTS_PERMISSIONS = "GET_PAYMENTS_PERMISSIONS", e.SEND_SMS_REMINDER = "SEND_SMS_REMINDER", e.FETCH_CONTACTS = "FETCH_CONTACTS", e.CUSTOMER_REPORTS = "CUSTOMER_REPORTS"
            }(o || (o = {}));
            var c = (a = {}, Object(r.a)(a, o.REQUEST_OTP, "/v1/auth/request-otp"), Object(r.a)(a, o.LOGIN, "/v1/auth/login/?version=v2"), Object(r.a)(a, o.GET_BOOKS, "/v1/books/sync/"), Object(r.a)(a, o.GET_CUSTOMERS, "/v1/customers/sync/"), Object(r.a)(a, o.GET_TRANSACTIONS, "/v1/transactions/sync/"), Object(r.a)(a, o.POST_BOOKS, "/v1/books/sync/"), Object(r.a)(a, o.POST_CUSTOMERS, "/v1/customers/sync/"), Object(r.a)(a, o.POST_TRANSACTIONS, "/v1/transactions/sync/"), Object(r.a)(a, o.S3_UPLOAD_URL, "/v1/uploads/gen-pre-signed-url"), Object(r.a)(a, o.USER_PREFERENCES, "/v1/communication_settings/preferences"), Object(r.a)(a, o.FETCH_QR_CODE, "/payments/v1/qr-code-management/qr-code/"), Object(r.a)(a, o.GET_BANK_ACCOUNT, "/payments/v1/account-management/accounts/get/"), Object(r.a)(a, o.GET_INVOICES, "/payments/v1/invoice-feed-v2/sync/"), Object(r.a)(a, o.GET_PAYOUTS, "/payments/v1/payout-feed/sync/"), Object(r.a)(a, o.VERIFY_KYC, "/payments/v1/kyc"), Object(r.a)(a, o.PINCODE_DETAILS, "/payments/v1/qr-code-management/details-from-pincode"), Object(r.a)(a, o.IS_PINCODE_SERVICEABLE, "/payments/v1/qr-code-management/is-pincode-serviceable"), Object(r.a)(a, o.ORDER_QR_CODE, "/payments/v1/qr-code-management/submit-qr-order"), Object(r.a)(a, o.PAYMENT_CHARGES, "/payments/v2/payment-instrument/charges"), Object(r.a)(a, o.GET_QR_CODE_PLACED, "/payments/v1/qr-code-management/qr-code"), Object(r.a)(a, o.GET_PAYMENTS_PERMISSIONS, "/payments/v1/ab-experiment"), Object(r.a)(a, o.SEND_SMS_REMINDER, "/pwa/v1/send-payment-reminder"), Object(r.a)(a, o.FETCH_CONTACTS, "/cash_register/v1/backup/contacts"), Object(r.a)(a, o.CUSTOMER_REPORTS, "/reports/api-v2/gen-pdf/bounded-customer-transactions"), a);

            function l(e) {
                return "https://api.khatabook.com" + c[e]
            }

            function s(e) {
                return "https://api.khatabook.com" + c[e]
            }

            function u(e) {
                return "https://api.khatabook.com" + c[e]
            }
        },
        82: function(e, n, t) {
            "use strict";
            t.d(n, "b", (function() {
                return a
            })), t.d(n, "a", (function() {
                return o
            }));
            var a = "BROADCAST_MESSAGE_KEY",
                o = {
                    ON_LOGGING_OUT: "ON_LOGGING_OUT",
                    LOGIN_STATUS_CHANGE: "LOGIN_STATUS_CHANGE"
                }
        },
        84: function(e, n, t) {
            "use strict";
            t.d(n, "b", (function() {
                return s
            })), t.d(n, "a", (function() {
                return u
            }));
            var a = t(70),
                o = t(45),
                r = (t(294), t(293)),
                i = !1,
                c = /app\.khatabook\.com/i,
                l = /app\.dev\.khatabook\.com/i,
                s = function() {
                    var e = "development";
                    switch (!0) {
                        case c.test(window.location.host):
                            e = "production";
                            break;
                        case l.test(window.location.host):
                            e = "staging"
                    }
                    try {
                        var n = "https://600403c25c98494ba8f8f79e23ad7ad6@o324873.ingest.sentry.io/5879430";
                        0, a.e({
                            dsn: n,
                            integrations: [new r.a.BrowserTracing],
                            tracesSampleRate: 0,
                            environment: e
                        }), i = !0
                    } catch (t) {}
                },
                u = function(e, n) {
                    var t = n.tags,
                        a = n.extra;
                    !1 !== i ? o.m((function(n) {
                        t && Object.keys(t).forEach((function(e) {
                            n.setTag(e, t[e])
                        })), a && Object.keys(a).forEach((function(e) {
                            n.setExtra(e, a[e])
                        })), o.c(e)
                    })) : console.error("Dev Sentry", e, t, a)
                }
        },
        9: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return a
            })), t.d(n, "h", (function() {
                return o
            })), t.d(n, "k", (function() {
                return r
            })), t.d(n, "c", (function() {
                return i
            })), t.d(n, "d", (function() {
                return c
            })), t.d(n, "i", (function() {
                return l
            })), t.d(n, "l", (function() {
                return s
            })), t.d(n, "g", (function() {
                return u
            })), t.d(n, "f", (function() {
                return d
            })), t.d(n, "e", (function() {
                return b
            })), t.d(n, "j", (function() {
                return m
            })), t.d(n, "b", (function() {
                return p
            }));
            var a = "14px",
                o = "Roboto",
                r = {
                    "10px": .71,
                    "12px": .85,
                    "14px": 1,
                    "16px": 1.14,
                    "18px": 1.28,
                    "20px": 1.41,
                    "22px": 1.571,
                    "24px": 1.71,
                    "32px": 2.28
                },
                i = {
                    BACKGROUND: "#f7f7f7",
                    TRUSTBACKGROUND: "#f6f6f6",
                    CODEBOXBACKGROUND: "#f5f5f5",
                    BASE_FONT: "#2b3034",
                    WHITE: "#fff",
                    GREY: "#e6e6e6",
                    LIGHT_GREY: "#d8e2ec",
                    DOVE_GREY: "#676767",
                    TEXT_GREY: "#8e8e8c",
                    DASHED_GREY: "#b5b5b5",
                    GREY_BORDER: "#9b9b9b",
                    GREY_TRANS: "#363636",
                    AVATAR_GREY: "#d9d9d9",
                    SUCCESS: "#008548",
                    RED: "#cf233d",
                    BLUE: "#0752ad",
                    LITE_BLUE: "#1b6cce",
                    MAROON: "#a80751",
                    BLACK: "#000",
                    DARK_BLUE: "#18181c",
                    PLACEHOLDER_TEXT: "#909192",
                    WARNING_LIGHT: "#fffae7",
                    WARNING_BORDER: "#f6e29c",
                    DARK_GREY: "#9b9b9b",
                    FONT_GREY: "#2c2c2b",
                    DISABLED_GREY: "rgba(0, 0, 0, 0.26)",
                    LIGHT_BLUE: "#F5FBFF",
                    DARK_YELLOW: "#EDB629",
                    LIGHT_YELLOW: "#EDD38F",
                    DARK_RED: "#AC0909"
                },
                c = {
                    PRIMARY_COLOR: " #C72028",
                    MID_PRIMARY: "#B51D24",
                    DARK_PRIMARY: "#C82128",
                    LIGHT_PRIMARY: "#FDE8EA",
                    DARK_RED: "#AC0D14",
                    RED: "#DE1836",
                    PALE_RED: "#FFADB9",
                    SECONDARY_COLOR: "#004BAC",
                    SECONDARY1: "#0752AD",
                    SECONDARY2: "#186FD9",
                    SECONDARY3: "#3788EA",
                    SECONDARY4: "#C2DEFE",
                    MID_BLUE: "#2666B8",
                    PALE_BLUE: "#E3F0FF",
                    DARK_SECONDARY: "#063C7C",
                    GREY_BORDER: "#B8C4CE",
                    BACKGROUND_BLUE: "rgba(245, 251, 255,0.7)",
                    LIGHT_BLUE: "#F0F4FA",
                    LIGHTER_BLUE: "#F6F8FC",
                    DARK_GREY: "#18181C",
                    MEDIUM_DARK_GREY: "#424248",
                    MEDIUM_GREY: "#909192",
                    LIGHT_MEDIUM_GREY: "#CFD0D1",
                    LIGHT_GREY: "#F0F2F4",
                    TEXT_GREY: "#4E5358",
                    TEXT_DISABLED: "#94979B",
                    BLUE_SHADOW: "0px 0px 0px 5px rgba(0, 75, 172, 0.15)",
                    GREY_SHADOW: "0px 2px 10px rgba(0, 0, 0, 0.18)",
                    PAPER_SHADOW: " 0px 0px 10px rgba(0, 0, 0, 0.06)",
                    WHITE: "#ffffff",
                    SEMANTIC_GREEN: "#3CB17C",
                    DARK_GREEN: "#0F814D",
                    SEMANTIC_GREEN_BACKGROUND: "rgbA(77, 195, 128,0.2)",
                    SECONDARY70: "#4288DE",
                    BACKGROUND: "#f7f7f7",
                    CARD_BORDER: "#DBE0E6",
                    APP_BACKGROUND: "#FCFCFC",
                    SEMANTIC_ORANGE: "#FF8944",
                    PALE_GREEN: "#D8EFE5",
                    LIGHT_ORANGE: "#FFF5DF",
                    DARK_PINK: "#A10C50",
                    HIGHLIGHT_COLOR: "#FFE298"
                },
                l = {
                    FLEX: "flex",
                    BLOCK: "block",
                    INLINE_BLOCK: "inline-block"
                },
                s = {
                    BUTTON: "0 2px 4px -1px rgba(0, 0, 0, 0.1), 0 4px 5px 0 rgba(0, 0, 0, 0.07)",
                    BOTTOM_SHADOW: "0 8px 8px 0 rgba(0, 0, 0, 0.24), 0 0 8px 0 rgba(0, 0, 0, 0.12)"
                },
                u = {
                    BOLD: 700,
                    SEMIBOLD: 500,
                    NORMAL: 400
                },
                d = 240,
                b = 375,
                m = {
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%,-50%)"
                },
                p = {
                    INPUT_HOVER_BORDER: "3px solid #E3F0FF"
                }
        },
        92: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return a
            }));
            var a = {
                IN: "IN,1,356,INR,\u20b9,Indian Rupee,India",
                ID: "ID,2,360,IDR,Rp,Rupiah,Indonesia",
                US: "US,3,840,USD,$,US Dollar,United States of America",
                PK: "PK,4,586,PKR,Rs,Pakistan Rupee,Pakistan",
                SA: "SA,5,682,SAR,\u0631.\u0633,Saudi Riyal,Saudi Arabia",
                BD: "BD,6,50,BDT,\u09f3,Taka,Bangladesh",
                AE: "AE,7,784,AED,\u062f.\u0627,UAE Dirham,UAE",
                AD: "AD,8,978,EUR,\u20ac,Euro,Andorra",
                AF: "AF,9,971,AFN,Af,Afghani,Afghanistan",
                AG: "AG,10,951,XCD,$,East Caribbean Dollar,Antigua and Barbuda",
                AI: "AI,11,951,XCD,$,East Caribbean Dollar,Anguilla",
                AL: "AL,12,8,ALL,L,Lek,Albania",
                AM: "AM,13,51,AMD,\u0534,Armenian Dram,Armenia",
                AO: "AO,14,973,AOA,Kz,Kwanza,Angola",
                AR: "AR,15,32,ARS,$,Argentine Peso,Argentina",
                AS: "AS,16,840,USD,$,US Dollar,American Samoa",
                AT: "AT,17,978,EUR,\u20ac,Euro,Austria",
                AU: "AU,18,36,AUD,$,Australian Dollar,Australia",
                AW: "AW,19,533,AWG,\u0192,Aruban Guilder/Florin,Aruba",
                AZ: "AZ,20,944,AZN,\u043c\u0430\u043d,Azerbaijanian Manat,Azerbaijan",
                BA: "BA,21,977,BAM,\u041a\u041c,Konvertibilna Marka,Bosnia and Herzegovina",
                BB: "BB,22,52,BBD,$,Barbados Dollar,Barbados",
                BE: "BE,23,978,EUR,\u20ac,Euro,Belgium",
                BF: "BF,24,950,XAF,\u20a3,CFA Franc BCEAO,Burkina Faso",
                BG: "BG,25,975,BGN,\u043b\u0432,Bulgarian Lev,Bulgaria",
                BH: "BH,26,48,BHD,\u0628.\u062f,Bahraini Dinar,Bahrain",
                BI: "BI,27,108,BIF,\u20a3,Burundi Franc,Burundi",
                BJ: "BJ,28,950,XAF,\u20a3,CFA Franc BCEAO,Benin",
                BM: "BM,29,60,BMD,$,Bermudian Dollar,Bermuda",
                BN: "BN,30,96,BND,$,Brunei Dollar,Brunei",
                BO: "BO,31,68,BOB,Bs.,Boliviano,Bolivia",
                BR: "BR,32,986,BRL,R$,Brazilian Real,Brazil",
                BS: "BS,33,44,BSD,$,Bahamian Dollar,Bahamas",
                BT: "BT,35,356,INR,\u20b9,Indian Rupee,Bhutan",
                BW: "BW,36,72,BWP,P,Pula,Botswana",
                BY: "BY,37,933,BYN,Br,Belarusian Ruble,Belarus",
                BZ: "BZ,38,84,BZD,$,Belize Dollar,Belize",
                CA: "CA,39,124,CAD,$,Canadian Dollar,Canada",
                CD: "CD,40,976,CDF,\u20a3,Congolese Franc,Congo (Kinshasa)",
                CF: "CF,41,950,XAF,\u20a3,CFA Franc BCEAO,Central African Republic",
                CG: "CG,42,950,XAF,\u20a3,CFA Franc BCEAO,Congo",
                CH: "CH,43,756,CHF,\u20a3,Swiss Franc,Switzerland",
                CI: "CI,44,950,XAF,\u20a3,CFA Franc BCEAO,C\xf4te d'Ivoire",
                CK: "CK,45,554,NZD,$,New Zealand Dollar,Cook Islands",
                CL: "CL,46,152,CLP,$,Chilean Peso,Chile",
                CM: "CM,47,950,XAF,\u20a3,CFA Franc BCEAO,Cameroon",
                CN: "CN,48,156,CNY,\xa5,Yuan,China",
                CO: "CO,49,170,COP,$,Colombian Peso,Colombia",
                CR: "CR,50,188,CRC,\u20a1,Costa Rican Colon,Costa Rica",
                CU: "CU,51,192,CUP,$,Cuban Peso,Cuba",
                CV: "CV,52,132,CVE,$,Cape Verde Escudo,Cape Verde",
                CY: "CY,53,978,EUR,\u20ac,Euro,Cyprus",
                CZ: "CZ,54,203,CZK,K\u010d,Czech Koruna,Czech Republic",
                DE: "DE,55,978,EUR,\u20ac,Euro,Germany",
                DJ: "DJ,56,262,DJF,\u20a3,Djibouti Franc,Djibouti",
                DK: "DK,57,208,DKK,kr,Danish Krone,Denmark",
                DM: "DM,58,951,XCD,$,East Caribbean Dollar,Dominica",
                DO: "DO,59,214,DOP,$,Dominican Peso,Dominican Republic",
                DZ: "DZ,60,12,DZD,\u062f.\u062c,Algerian Dinar,Algeria",
                EE: "EE,61,978,EUR,\u20ac,Euro,Estonia",
                EG: "EG,62,818,EGP,\xa3,Egyptian Pound,Egypt",
                ER: "ER,63,232,ERN,Nfk,Nakfa,Eritrea",
                ES: "ES,64,978,EUR,\u20ac,Euro,Spain",
                ET: "ET,65,230,ETB,ETB,Ethiopian Birr,Ethiopia",
                FI: "FI,66,978,EUR,\u20ac,Euro,Finland",
                FJ: "FJ,67,242,FJD,$,Fiji Dollar,Fiji",
                FK: "FK,68,238,FKP,\xa3,Falkland Islands Pound,Falkland Islands",
                FR: "FR,69,978,EUR,\u20ac,Euro,France",
                GA: "GA,70,950,XAF,\u20a3,CFA Franc BCEAO,Gabon",
                GB: "GB,71,826,GBP,\xa3,Pound Sterling,Great Britain",
                GD: "GD,72,951,XCD,$,East Caribbean Dollar,Grenada",
                GE: "GE,73,981,GEL,\u10da,Lari,Georgia",
                GG: "GG,74,826,GBP,\xa3,Pound Sterling,Alderney",
                GH: "GH,75,936,GHS,\u20b5,Cedi,Ghana",
                GI: "GI,76,292,GIP,\xa3,Gibraltar Pound,Gibraltar",
                GM: "GM,77,270,GMD,D,Dalasi,Gambia",
                GN: "GN,78,324,GNF,\u20a3,Guinea Franc,Guinea",
                GQ: "GQ,79,950,XAF,\u20a3,CFA Franc BCEAO,Equatorial Guinea",
                GR: "GR,80,978,EUR,\u20ac,Euro,Greece",
                GT: "GT,81,320,GTQ,Q,Quetzal,Guatemala",
                GU: "GU,82,840,USD,$,US Dollar,Guam",
                GW: "GW,83,950,XAF,\u20a3,CFA Franc BCEAO,Guinea-Bissau",
                GY: "GY,84,328,GYD,$,Guyana Dollar,Guyana",
                HK: "HK,85,344,HKD,$,Hong Kong Dollar,Hong Kong",
                HN: "HN,86,340,HNL,L,Lempira,Honduras",
                HR: "HR,87,191,HRK,Kn,Croatian Kuna,Croatia",
                HT: "HT,89,840,USD,$,US Dollar,Haiti",
                HU: "HU,90,348,HUF,Ft,Forint,Hungary",
                IE: "IE,91,978,EUR,\u20ac,Euro,Ireland",
                IL: "IL,92,376,ILS,\u20aa,New Israeli Shekel,Israel",
                IO: "IO,94,840,USD,$,US Dollar,British Indian Ocean Territory",
                IQ: "IQ,95,368,IQD,\u0639.\u062f,Iraqi Dinar,Iraq",
                IR: "IR,96,364,IRR,\ufdfc,Iranian Rial,Iran",
                IS: "IS,97,352,ISK,Kr,Iceland Krona,Iceland",
                IT: "IT,98,978,EUR,\u20ac,Euro,Italy",
                JM: "JM,99,388,JMD,$,Jamaican Dollar,Jamaica",
                JO: "JO,100,400,JOD,\u062f.\u0627,Jordanian Dinar,Jordan",
                JP: "JP,101,392,JPY,\xa5,Yen,Japan",
                KE: "KE,102,404,KES,Sh,Kenyan Shilling,Kenya",
                KG: "KG,103,417,KGS,KGS,Som,Kyrgyzstan",
                KH: "KH,104,116,KHR,\u17db,Riel,Cambodia",
                KI: "KI,105,36,AUD,$,Australian Dollar,Kiribati",
                KN: "KN,106,951,XCD,$,East Caribbean Dollar,Saint Kitts and Nevis",
                KP: "KP,107,408,KPW,\u20a9,North Korean Won,North Korea",
                KR: "KR,108,410,KRW,\u20a9,South Korean Won,South Korea",
                KW: "KW,109,414,KWD,\u062f.\u0643,Kuwaiti Dinar,Kuwait",
                KY: "KY,110,136,KYD,$,Cayman Islands Dollar,Cayman Islands",
                KZ: "KZ,111,398,KZT,\u3012,Tenge,Kazakhstan",
                LA: "LA,112,418,LAK,\u20ad,Kip,Laos",
                LB: "LB,113,422,LBP,\u0644.\u0644,Lebanese Pound,Lebanon",
                LC: "LC,114,951,XCD,$,East Caribbean Dollar,Saint Lucia",
                LI: "LI,115,756,CHF,\u20a3,Swiss Franc,Lichtenstein",
                LK: "LK,116,144,LKR,Rs,Sri Lanka Rupee,Sri Lanka",
                LR: "LR,117,430,LRD,$,Liberian Dollar,Liberia",
                LS: "LS,119,710,ZAR,R,Rand,Lesotho",
                LT: "LT,120,978,EUR,\u20ac,Euro,Lithuania",
                LU: "LU,121,978,EUR,\u20ac,Euro,Luxembourg",
                LV: "LV,122,978,EUR,\u20ac,Euro,Latvia",
                LY: "LY,123,434,LYD,\u0644.\u062f,Libyan Dinar,Libya",
                MA: "MA,124,504,MAD,\u062f.\u0645.,Moroccan Dirham,Morocco",
                MC: "MC,125,978,EUR,\u20ac,Euro,Monaco",
                MD: "MD,126,498,MDL,L,Moldovan Leu,Moldova",
                ME: "ME,127,978,EUR,\u20ac,Euro,Montenegro",
                MG: "MG,128,969,MGA,MGA,Malagasy Ariary,Madagascar",
                MH: "MH,129,840,USD,$,US Dollar,Marshall Islands",
                MK: "MK,130,807,MKD,\u0434\u0435\u043d,Denar,Macedonia",
                ML: "ML,131,950,XAF,\u20a3,CFA Franc BCEAO,Mali",
                MM: "MM,132,104,MMK,K,Kyat,Myanmar (Burma)",
                MN: "MN,133,496,MNT,\u20ae,Tugrik,Mongolia",
                MO: "MO,134,446,MOP,P,Pataca,Macao",
                MP: "MP,135,840,USD,$,US Dollar,Northern Mariana Islands",
                MR: "MR,136,929,MRU,UM,Ouguiya,Mauritania",
                MS: "MS,137,951,XCD,$,East Caribbean Dollar,Montserrat",
                MT: "MT,138,978,EUR,\u20ac,Euro,Malta",
                MU: "MU,139,480,MUR,\u20a8,Mauritius Rupee,Mauritius",
                MV: "MV,140,462,MVR,\u0783.,Rufiyaa,Maldives",
                MW: "MW,141,454,MWK,MK,Kwacha,Malawi",
                MX: "MX,142,484,MXN,$,Mexican Peso,Mexico",
                MY: "MY,143,458,MYR,RM,Malaysian Ringgit,Malaysia",
                MZ: "MZ,144,943,MZN,MTn,Metical,Mozambique",
                NA: "NA,146,710,ZAR,R,Rand,Namibia",
                NC: "NC,147,953,XPF,\u20a3,CFP Franc,New Caledonia",
                NE: "NE,148,950,XAF,\u20a3,CFA Franc BCEAO,Niger",
                NG: "NG,149,566,NGN,\u20a6,Naira,Nigeria",
                NI: "NI,150,558,NIO,C$,Cordoba Oro,Nicaragua",
                NL: "NL,151,978,EUR,\u20ac,Euro,Netherlands",
                NO: "NO,152,578,NOK,kr,Norwegian Krone,Norway",
                NP: "NP,153,524,NPR,\u20a8,Nepalese Rupee,Nepal",
                NR: "NR,154,36,AUD,$,Australian Dollar,Nauru",
                NU: "NU,155,554,NZD,$,New Zealand Dollar,Niue",
                NZ: "NZ,156,554,NZD,$,New Zealand Dollar,New Zealand",
                OM: "OM,157,512,OMR,\u0631.\u0639.,Rial Omani,Oman",
                PA: "PA,159,840,USD,$,US Dollar,Panama",
                PE: "PE,160,604,PEN,S/.,Nuevo Sol,Peru",
                PF: "PF,161,953,XPF,\u20a3,CFP Franc,French Polynesia",
                PG: "PG,162,598,PGK,K,Kina,Papua New Guinea",
                PH: "PH,163,608,PHP,\u20b1,Philippine Peso,Philippines",
                PL: "PL,164,985,PLN,z\u0142,PZloty,Poland",
                PN: "PN,165,554,NZD,$,New Zealand Dollar,Pitcairn Island",
                PR: "PR,166,840,USD,$,US Dollar,Puerto Rico",
                PS: "PS,167,376,ILS,\u20aa,New Israeli Shekel,Palestine",
                PT: "PT,168,978,EUR,\u20ac,Euro,Portugal",
                PW: "PW,169,840,USD,$,US Dollar,Palau",
                PY: "PY,170,600,PYG,\u20b2,Guarani,Paraguay",
                QA: "QA,171,634,QAR,\u0631.\u0642,Qatari Rial,Qatar",
                RO: "RO,172,946,RON,L,Leu,Romania",
                RS: "RS,173,941,RSD,din,Serbian Dinar,Serbia",
                RU: "RU,174,643,RUB,\u0440.,Russian Ruble,Russia",
                RW: "RW,175,646,RWF,\u20a3,Rwanda Franc,Rwanda",
                SB: "SB,176,90,SBD,$,Solomon Islands Dollar,Solomon Islands",
                SC: "SC,177,690,SCR,\u20a8,Seychelles Rupee,Seychelles",
                SD: "SD,178,938,SDG,\xa3,Sudanese Pound,Sudan",
                SE: "SE,179,752,SEK,kr,Swedish Krona,Sweden",
                SG: "SG,180,96,BND,$,Brunei Dollar,Singapore",
                SI: "SI,181,978,EUR,\u20ac,Euro,Slovenia",
                SK: "SK,182,978,EUR,\u20ac,Euro,Slovakia",
                SL: "SL,183,694,SLL,Le,Leone,Sierra Leone",
                SM: "SM,184,978,EUR,\u20ac,Euro,San-Marino",
                SN: "SN,185,950,XAF,\u20a3,CFA Franc BCEAO,Senegal",
                SO: "SO,186,706,SOS,Sh,Somali Shilling,Somalia",
                SR: "SR,187,968,SRD,$,Suriname Dollar,Suriname",
                ST: "ST,188,930,STN,Db,Dobra,Sao Tome and Principe",
                SY: "SY,189,760,SYP,\u0644.\u0633,Syrian Pound,Syria",
                SZ: "SZ,190,748,SZL,L,Lilangeni,Swaziland",
                TC: "TC,191,840,USD,$,US Dollar,Turks and Caicos Islands",
                TD: "TD,192,950,XAF,\u20a3,CFA Franc BCEAO,Chad",
                TG: "TG,193,950,XAF,\u20a3,CFA Franc BCEAO,Togo",
                TH: "TH,194,764,THB,\u0e3f,Baht,Thailand",
                TJ: "TJ,195,972,TJS,\u0405\u041c,Somoni,Tajikistan",
                TM: "TM,196,934,TMT,m,Manat,Turkmenistan",
                TN: "TN,197,788,TND,\u062f.\u062a,Tunisian Dinar,Tunisia",
                TO: "TO,198,776,TOP,T$,Pa'anga,Tonga",
                TR: "TR,199,949,TRY,\u20a4,Turkish Lira,Turkey",
                TT: "TT,200,780,TTD,$,Trinidad and Tobago Dollar,Trinidad and Tobago",
                TV: "TV,201,36,AUD,$,Australian Dollar,Tuvalu",
                TW: "TW,202,901,TWD,$,Taiwan Dollar,Taiwan",
                TZ: "TZ,203,834,TZS,Sh,Tanzanian Shilling,Tanzania",
                UA: "UA,204,980,UAH,\u20b4,Hryvnia,Ukraine",
                UG: "UG,205,800,UGX,Sh,Uganda Shilling,Uganda",
                UY: "UY,206,858,UYU,$,Peso Uruguayo,Uruguay",
                UZ: "UZ,207,860,UZS,UZS,Uzbekistan Sum,Uzbekistan",
                VA: "VA,208,978,EUR,\u20ac,Euro,Vatican",
                VE: "VE,209,937,VEF,Bs F,Bolivar Fuerte,Venezuela",
                VG: "VG,210,840,USD,$,US Dollar,British Virgin Islands",
                VI: "VI,211,840,USD,$,US Dollar,US Virgin Islands",
                VN: "VN,212,704,VND,\u20ab,Dong,Vietnam",
                VU: "VU,213,548,VUV,Vt,Vatu,Vanuatu",
                WF: "WF,214,953,XPF,\u20a3,CFP Franc,Wallis and Futuna",
                WS: "WS,215,882,WST,T,Tala,Samoa",
                XK: "XK,216,978,EUR,\u20ac,Euro,Kosovo",
                YE: "YE,217,886,YER,\ufdfc,Yemeni Rial,Yemen",
                ZA: "ZA,218,710,ZAR,R,Rand,South Africa",
                ZM: "ZM,219,967,ZMW,ZK,Zambian Kwacha,Zambia",
                ZW: "ZW,220,932,ZWL,$,Zimbabwe Dollar,Zimbabwe"
            }
        },
        94: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return r
            }));
            var a = t(0),
                o = t(137),
                r = function() {
                    var e = Object(a.useContext)(o.a).state,
                        n = Object(a.useCallback)((function() {
                            return void 0 !== e.app.userInfo
                        }), [e.app.userInfo]);
                    return {
                        getUserInfo: Object(a.useCallback)((function() {
                            return e.app.userInfo
                        }), [e.app.userInfo]),
                        getDeviceInfo: Object(a.useCallback)((function() {
                            return e.app.deviceInfo
                        }), [e.app.deviceInfo]),
                        isLoggedIn: n,
                        isOtpSent: Object(a.useCallback)((function() {
                            return e.app.isOtpSent
                        }), [e.app.isOtpSent]),
                        hasLocale: Object(a.useCallback)((function() {
                            return void 0 !== e.app.locale
                        }), [e.app.locale]),
                        getLocale: Object(a.useCallback)((function() {
                            return e.app.locale
                        }), [e.app.locale]),
                        getCurrentBook: Object(a.useCallback)((function() {
                            return e.app.currentBook
                        }), [e.app.currentBook])
                    }
                }
        },
        95: function(e, n, t) {
            "use strict";
            var a = t(171),
                o = t(0),
                r = t.n(o),
                i = t(362),
                c = ["children", "size"];
            n.a = Object(o.memo)((function(e) {
                var n = e.children,
                    t = e.size,
                    o = void 0 === t ? "large" : t,
                    l = Object(a.a)(e, c);
                return r.a.createElement(i.a, Object.assign({
                    size: o
                }, l), n)
            }))
        },
        96: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return i
            }));
            var a = t(0),
                o = t(137),
                r = t(50),
                i = function() {
                    var e = Object(a.useContext)(o.a).dispatch,
                        n = Object(a.useCallback)((function(n) {
                            e({
                                type: r.a.APP_SET_USER,
                                payload: n
                            })
                        }), [e]),
                        t = Object(a.useCallback)((function(n) {
                            e({
                                type: r.a.APP_SET_CURRENCY,
                                payload: n
                            })
                        }), [e]),
                        i = Object(a.useCallback)((function(n) {
                            e({
                                type: r.a.APP_SET_DEVICE,
                                payload: n
                            })
                        }), [e]),
                        c = Object(a.useCallback)((function(n) {
                            e({
                                type: r.a.APP_SET_LOCALE,
                                payload: n
                            })
                        }), [e]);
                    return {
                        setUser: n,
                        setDevice: i,
                        setOtpSent: Object(a.useCallback)((function(n) {
                            e({
                                type: r.a.APP_OTP_SENT,
                                payload: n
                            })
                        }), [e]),
                        setLocale: c,
                        setBook: Object(a.useCallback)((function(n) {
                            e({
                                type: r.a.APP_SET_BOOK,
                                payload: n
                            })
                        }), [e]),
                        setCurrency: t
                    }
                }
        }
    },
    [
        [317, 33, 41]
    ]
]);
//# sourceMappingURL=main.02e5efe0.chunk.js.map