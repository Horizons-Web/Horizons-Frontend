import {
  require_react
} from "./chunk-ZAUFE7H7.js";
import {
  __commonJS
} from "./chunk-UXIASGQL.js";

// node_modules/react-typed/dist/react-typed.js
var require_react_typed = __commonJS({
  "node_modules/react-typed/dist/react-typed.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t(require_react()) : "function" == typeof define && define.amd ? define(["react"], t) : "object" == typeof exports ? exports["react-typed"] = t(require_react()) : e["react-typed"] = t(e.React);
    }(exports, function(e) {
      return function(e2) {
        var t = {};
        function n(r) {
          if (t[r])
            return t[r].exports;
          var o = t[r] = { i: r, l: false, exports: {} };
          return e2[r].call(o.exports, o, o.exports, n), o.l = true, o.exports;
        }
        return n.m = e2, n.c = t, n.d = function(e3, t2, r) {
          n.o(e3, t2) || Object.defineProperty(e3, t2, { enumerable: true, get: r });
        }, n.r = function(e3) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e3, "__esModule", { value: true });
        }, n.t = function(e3, t2) {
          if (1 & t2 && (e3 = n(e3)), 8 & t2)
            return e3;
          if (4 & t2 && "object" == typeof e3 && e3 && e3.__esModule)
            return e3;
          var r = /* @__PURE__ */ Object.create(null);
          if (n.r(r), Object.defineProperty(r, "default", { enumerable: true, value: e3 }), 2 & t2 && "string" != typeof e3)
            for (var o in e3)
              n.d(r, o, (function(t3) {
                return e3[t3];
              }).bind(null, o));
          return r;
        }, n.n = function(e3) {
          var t2 = e3 && e3.__esModule ? function() {
            return e3.default;
          } : function() {
            return e3;
          };
          return n.d(t2, "a", t2), t2;
        }, n.o = function(e3, t2) {
          return Object.prototype.hasOwnProperty.call(e3, t2);
        }, n.p = "/", n(n.s = 5);
      }([function(e2, t, n) {
        var r = n(3);
        e2.exports = n(8)(r.isElement, true);
      }, function(t, n) {
        t.exports = e;
      }, function(e2, t, n) {
        "use strict";
        e2.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      }, function(e2, t, n) {
        "use strict";
        e2.exports = n(7);
      }, function(e2, t, n) {
        var r;
        r = function() {
          return function(e3) {
            var t2 = {};
            function n2(r2) {
              if (t2[r2])
                return t2[r2].exports;
              var o = t2[r2] = { exports: {}, id: r2, loaded: false };
              return e3[r2].call(o.exports, o, o.exports, n2), o.loaded = true, o.exports;
            }
            return n2.m = e3, n2.c = t2, n2.p = "", n2(0);
          }([function(e3, t2, n2) {
            "use strict";
            Object.defineProperty(t2, "__esModule", { value: true });
            var r2 = function() {
              function e4(e5, t3) {
                for (var n3 = 0; n3 < t3.length; n3++) {
                  var r3 = t3[n3];
                  r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(e5, r3.key, r3);
                }
              }
              return function(t3, n3, r3) {
                return n3 && e4(t3.prototype, n3), r3 && e4(t3, r3), t3;
              };
            }();
            var o = n2(1), s = n2(3), i = function() {
              function e4(t3, n3) {
                !function(e5, t4) {
                  if (!(e5 instanceof t4))
                    throw new TypeError("Cannot call a class as a function");
                }(this, e4), o.initializer.load(this, n3, t3), this.begin();
              }
              return r2(e4, [{ key: "toggle", value: function() {
                this.pause.status ? this.start() : this.stop();
              } }, { key: "stop", value: function() {
                this.typingComplete || this.pause.status || (this.toggleBlinking(true), this.pause.status = true, this.options.onStop(this.arrayPos, this));
              } }, { key: "start", value: function() {
                this.typingComplete || this.pause.status && (this.pause.status = false, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this));
              } }, { key: "destroy", value: function() {
                this.reset(false), this.options.onDestroy(this);
              } }, { key: "reset", value: function() {
                var e5 = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, e5 && (this.insertCursor(), this.options.onReset(this), this.begin());
              } }, { key: "begin", value: function() {
                var e5 = this;
                this.typingComplete = false, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function() {
                  e5.currentElContent && 0 !== e5.currentElContent.length ? e5.backspace(e5.currentElContent, e5.currentElContent.length) : e5.typewrite(e5.strings[e5.sequence[e5.arrayPos]], e5.strPos);
                }, this.startDelay);
              } }, { key: "typewrite", value: function(e5, t3) {
                var n3 = this;
                this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                var r3 = this.humanizer(this.typeSpeed), o2 = 1;
                true !== this.pause.status ? this.timeout = setTimeout(function() {
                  t3 = s.htmlParser.typeHtmlChars(e5, t3, n3);
                  var r4 = 0, i2 = e5.substr(t3);
                  if ("^" === i2.charAt(0) && /^\^\d+/.test(i2)) {
                    var a = 1;
                    a += (i2 = /\d+/.exec(i2)[0]).length, r4 = parseInt(i2), n3.temporaryPause = true, n3.options.onTypingPaused(n3.arrayPos, n3), e5 = e5.substring(0, t3) + e5.substring(t3 + a), n3.toggleBlinking(true);
                  }
                  if ("`" === i2.charAt(0)) {
                    for (; "`" !== e5.substr(t3 + o2).charAt(0) && !(t3 + ++o2 > e5.length); )
                      ;
                    var u = e5.substring(0, t3), c = e5.substring(u.length + 1, t3 + o2), l = e5.substring(t3 + o2 + 1);
                    e5 = u + c + l, o2--;
                  }
                  n3.timeout = setTimeout(function() {
                    n3.toggleBlinking(false), t3 >= e5.length ? n3.doneTyping(e5, t3) : n3.keepTyping(e5, t3, o2), n3.temporaryPause && (n3.temporaryPause = false, n3.options.onTypingResumed(n3.arrayPos, n3));
                  }, r4);
                }, r3) : this.setPauseStatus(e5, t3, true);
              } }, { key: "keepTyping", value: function(e5, t3, n3) {
                0 === t3 && (this.toggleBlinking(false), this.options.preStringTyped(this.arrayPos, this)), t3 += n3;
                var r3 = e5.substr(0, t3);
                this.replaceText(r3), this.typewrite(e5, t3);
              } }, { key: "doneTyping", value: function(e5, t3) {
                var n3 = this;
                this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(true), this.arrayPos === this.strings.length - 1 && (this.complete(), false === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function() {
                  n3.backspace(e5, t3);
                }, this.backDelay));
              } }, { key: "backspace", value: function(e5, t3) {
                var n3 = this;
                if (true !== this.pause.status) {
                  if (this.fadeOut)
                    return this.initFadeOut();
                  this.toggleBlinking(false);
                  var r3 = this.humanizer(this.backSpeed);
                  this.timeout = setTimeout(function() {
                    t3 = s.htmlParser.backSpaceHtmlChars(e5, t3, n3);
                    var r4 = e5.substr(0, t3);
                    if (n3.replaceText(r4), n3.smartBackspace) {
                      var o2 = n3.strings[n3.arrayPos + 1];
                      o2 && r4 === o2.substr(0, t3) ? n3.stopNum = t3 : n3.stopNum = 0;
                    }
                    t3 > n3.stopNum ? (t3--, n3.backspace(e5, t3)) : t3 <= n3.stopNum && (n3.arrayPos++, n3.arrayPos === n3.strings.length ? (n3.arrayPos = 0, n3.options.onLastStringBackspaced(), n3.shuffleStringsIfNeeded(), n3.begin()) : n3.typewrite(n3.strings[n3.sequence[n3.arrayPos]], t3));
                  }, r3);
                } else
                  this.setPauseStatus(e5, t3, true);
              } }, { key: "complete", value: function() {
                this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = true;
              } }, { key: "setPauseStatus", value: function(e5, t3, n3) {
                this.pause.typewrite = n3, this.pause.curString = e5, this.pause.curStrPos = t3;
              } }, { key: "toggleBlinking", value: function(e5) {
                this.cursor && (this.pause.status || this.cursorBlinking !== e5 && (this.cursorBlinking = e5, e5 ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")));
              } }, { key: "humanizer", value: function(e5) {
                return Math.round(Math.random() * e5 / 2) + e5;
              } }, { key: "shuffleStringsIfNeeded", value: function() {
                this.shuffle && (this.sequence = this.sequence.sort(function() {
                  return Math.random() - 0.5;
                }));
              } }, { key: "initFadeOut", value: function() {
                var e5 = this;
                return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function() {
                  e5.arrayPos++, e5.replaceText(""), e5.strings.length > e5.arrayPos ? e5.typewrite(e5.strings[e5.sequence[e5.arrayPos]], 0) : (e5.typewrite(e5.strings[0], 0), e5.arrayPos = 0);
                }, this.fadeOutDelay);
              } }, { key: "replaceText", value: function(e5) {
                this.attr ? this.el.setAttribute(this.attr, e5) : this.isInput ? this.el.value = e5 : "html" === this.contentType ? this.el.innerHTML = e5 : this.el.textContent = e5;
              } }, { key: "bindFocusEvents", value: function() {
                var e5 = this;
                this.isInput && (this.el.addEventListener("focus", function(t3) {
                  e5.stop();
                }), this.el.addEventListener("blur", function(t3) {
                  e5.el.value && 0 !== e5.el.value.length || e5.start();
                }));
              } }, { key: "insertCursor", value: function() {
                this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)));
              } }]), e4;
            }();
            t2.default = i, e3.exports = t2.default;
          }, function(e3, t2, n2) {
            "use strict";
            Object.defineProperty(t2, "__esModule", { value: true });
            var r2 = Object.assign || function(e4) {
              for (var t3 = 1; t3 < arguments.length; t3++) {
                var n3 = arguments[t3];
                for (var r3 in n3)
                  Object.prototype.hasOwnProperty.call(n3, r3) && (e4[r3] = n3[r3]);
              }
              return e4;
            }, o = function() {
              function e4(e5, t3) {
                for (var n3 = 0; n3 < t3.length; n3++) {
                  var r3 = t3[n3];
                  r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(e5, r3.key, r3);
                }
              }
              return function(t3, n3, r3) {
                return n3 && e4(t3.prototype, n3), r3 && e4(t3, r3), t3;
              };
            }();
            var s, i = n2(2), a = (s = i) && s.__esModule ? s : { default: s }, u = function() {
              function e4() {
                !function(e5, t3) {
                  if (!(e5 instanceof t3))
                    throw new TypeError("Cannot call a class as a function");
                }(this, e4);
              }
              return o(e4, [{ key: "load", value: function(e5, t3, n3) {
                if (e5.el = "string" == typeof n3 ? document.querySelector(n3) : n3, e5.options = r2({}, a.default, t3), e5.isInput = "input" === e5.el.tagName.toLowerCase(), e5.attr = e5.options.attr, e5.bindInputFocusEvents = e5.options.bindInputFocusEvents, e5.showCursor = !e5.isInput && e5.options.showCursor, e5.cursorChar = e5.options.cursorChar, e5.cursorBlinking = true, e5.elContent = e5.attr ? e5.el.getAttribute(e5.attr) : e5.el.textContent, e5.contentType = e5.options.contentType, e5.typeSpeed = e5.options.typeSpeed, e5.startDelay = e5.options.startDelay, e5.backSpeed = e5.options.backSpeed, e5.smartBackspace = e5.options.smartBackspace, e5.backDelay = e5.options.backDelay, e5.fadeOut = e5.options.fadeOut, e5.fadeOutClass = e5.options.fadeOutClass, e5.fadeOutDelay = e5.options.fadeOutDelay, e5.isPaused = false, e5.strings = e5.options.strings.map(function(e6) {
                  return e6.trim();
                }), "string" == typeof e5.options.stringsElement ? e5.stringsElement = document.querySelector(e5.options.stringsElement) : e5.stringsElement = e5.options.stringsElement, e5.stringsElement) {
                  e5.strings = [], e5.stringsElement.style.display = "none";
                  var o2 = Array.prototype.slice.apply(e5.stringsElement.children), s2 = o2.length;
                  if (s2)
                    for (var i2 = 0; i2 < s2; i2 += 1) {
                      var u2 = o2[i2];
                      e5.strings.push(u2.innerHTML.trim());
                    }
                }
                for (var i2 in e5.strPos = 0, e5.arrayPos = 0, e5.stopNum = 0, e5.loop = e5.options.loop, e5.loopCount = e5.options.loopCount, e5.curLoop = 0, e5.shuffle = e5.options.shuffle, e5.sequence = [], e5.pause = { status: false, typewrite: true, curString: "", curStrPos: 0 }, e5.typingComplete = false, e5.strings)
                  e5.sequence[i2] = i2;
                e5.currentElContent = this.getCurrentElContent(e5), e5.autoInsertCss = e5.options.autoInsertCss, this.appendAnimationCss(e5);
              } }, { key: "getCurrentElContent", value: function(e5) {
                return e5.attr ? e5.el.getAttribute(e5.attr) : e5.isInput ? e5.el.value : "html" === e5.contentType ? e5.el.innerHTML : e5.el.textContent;
              } }, { key: "appendAnimationCss", value: function(e5) {
                if (e5.autoInsertCss && (e5.showCursor || e5.fadeOut) && !document.querySelector("[data-typed-js-css]")) {
                  var t3 = document.createElement("style");
                  t3.type = "text/css", t3.setAttribute("data-typed-js-css", true);
                  var n3 = "";
                  e5.showCursor && (n3 += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "), e5.fadeOut && (n3 += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "), 0 !== t3.length && (t3.innerHTML = n3, document.body.appendChild(t3));
                }
              } }]), e4;
            }();
            t2.default = u;
            var c = new u();
            t2.initializer = c;
          }, function(e3, t2) {
            "use strict";
            Object.defineProperty(t2, "__esModule", { value: true });
            var n2 = { strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"], stringsElement: null, typeSpeed: 0, startDelay: 0, backSpeed: 0, smartBackspace: true, shuffle: false, backDelay: 700, fadeOut: false, fadeOutClass: "typed-fade-out", fadeOutDelay: 500, loop: false, loopCount: 1 / 0, showCursor: true, cursorChar: "|", autoInsertCss: true, attr: null, bindInputFocusEvents: false, contentType: "html", onComplete: function(e4) {
            }, preStringTyped: function(e4, t3) {
            }, onStringTyped: function(e4, t3) {
            }, onLastStringBackspaced: function(e4) {
            }, onTypingPaused: function(e4, t3) {
            }, onTypingResumed: function(e4, t3) {
            }, onReset: function(e4) {
            }, onStop: function(e4, t3) {
            }, onStart: function(e4, t3) {
            }, onDestroy: function(e4) {
            } };
            t2.default = n2, e3.exports = t2.default;
          }, function(e3, t2) {
            "use strict";
            Object.defineProperty(t2, "__esModule", { value: true });
            var n2 = function() {
              function e4(e5, t3) {
                for (var n3 = 0; n3 < t3.length; n3++) {
                  var r3 = t3[n3];
                  r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(e5, r3.key, r3);
                }
              }
              return function(t3, n3, r3) {
                return n3 && e4(t3.prototype, n3), r3 && e4(t3, r3), t3;
              };
            }();
            var r2 = function() {
              function e4() {
                !function(e5, t3) {
                  if (!(e5 instanceof t3))
                    throw new TypeError("Cannot call a class as a function");
                }(this, e4);
              }
              return n2(e4, [{ key: "typeHtmlChars", value: function(e5, t3, n3) {
                if ("html" !== n3.contentType)
                  return t3;
                var r3 = e5.substr(t3).charAt(0);
                if ("<" === r3 || "&" === r3) {
                  var o2 = "";
                  for (o2 = "<" === r3 ? ">" : ";"; e5.substr(t3 + 1).charAt(0) !== o2 && !(++t3 + 1 > e5.length); )
                    ;
                  t3++;
                }
                return t3;
              } }, { key: "backSpaceHtmlChars", value: function(e5, t3, n3) {
                if ("html" !== n3.contentType)
                  return t3;
                var r3 = e5.substr(t3).charAt(0);
                if (">" === r3 || ";" === r3) {
                  var o2 = "";
                  for (o2 = ">" === r3 ? "<" : "&"; e5.substr(t3 - 1).charAt(0) !== o2 && !(--t3 < 0); )
                    ;
                  t3--;
                }
                return t3;
              } }]), e4;
            }();
            t2.default = r2;
            var o = new r2();
            t2.htmlParser = o;
          }]);
        }, e2.exports = r();
      }, function(e2, t, n) {
        "use strict";
        n.r(t);
        var r = n(1), o = n.n(r), s = n(0), i = n.n(s), a = n(4), u = n.n(a);
        function c(e3) {
          return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          })(e3);
        }
        function l(e3, t2) {
          if (null == e3)
            return {};
          var n2, r2, o2 = function(e4, t3) {
            if (null == e4)
              return {};
            var n3, r3, o3 = {}, s3 = Object.keys(e4);
            for (r3 = 0; r3 < s3.length; r3++)
              n3 = s3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e4[n3]);
            return o3;
          }(e3, t2);
          if (Object.getOwnPropertySymbols) {
            var s2 = Object.getOwnPropertySymbols(e3);
            for (r2 = 0; r2 < s2.length; r2++)
              n2 = s2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e3, n2) && (o2[n2] = e3[n2]);
          }
          return o2;
        }
        function f(e3, t2) {
          for (var n2 = 0; n2 < t2.length; n2++) {
            var r2 = t2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
          }
        }
        function p(e3) {
          return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          })(e3);
        }
        function y(e3) {
          if (void 0 === e3)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e3;
        }
        function d(e3, t2) {
          return (d = Object.setPrototypeOf || function(e4, t3) {
            return e4.__proto__ = t3, e4;
          })(e3, t2);
        }
        var h = function(e3) {
          function t2() {
            var e4, n3, r2, s3, i3, a2, u2;
            !function(e5, t3) {
              if (!(e5 instanceof t3))
                throw new TypeError("Cannot call a class as a function");
            }(this, t2);
            for (var l2 = arguments.length, f2 = new Array(l2), d2 = 0; d2 < l2; d2++)
              f2[d2] = arguments[d2];
            return r2 = this, n3 = !(s3 = (e4 = p(t2)).call.apply(e4, [this].concat(f2))) || "object" !== c(s3) && "function" != typeof s3 ? y(r2) : s3, i3 = y(n3), a2 = "rootElement", u2 = o.a.createRef(), a2 in i3 ? Object.defineProperty(i3, a2, { value: u2, enumerable: true, configurable: true, writable: true }) : i3[a2] = u2, n3;
          }
          var n2, s2, i2;
          return function(e4, t3) {
            if ("function" != typeof t3 && null !== t3)
              throw new TypeError("Super expression must either be null or a function");
            e4.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e4, writable: true, configurable: true } }), t3 && d(e4, t3);
          }(t2, r["Component"]), n2 = t2, (s2 = [{ key: "componentDidMount", value: function() {
            var e4 = this.props, t3 = (e4.style, e4.typedRef, e4.stopped), n3 = (e4.className, l(e4, ["style", "typedRef", "stopped", "className"]));
            this.constructTyped(n3), t3 && this.typed.stop();
          } }, { key: "constructTyped", value: function() {
            var e4 = this, t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n3 = this.props, r2 = (n3.style, n3.typedRef, n3.stopped, n3.className, l(n3, ["style", "typedRef", "stopped", "className"]));
            this.typed && this.typed.destroy(), this.typed = new u.a(this.rootElement.current, Object.assign(r2, t3)), this.props.typedRef && this.props.typedRef(this.typed), this.typed.reConstruct = function(t4) {
              e4.constructTyped(t4);
            };
          } }, { key: "shouldComponentUpdate", value: function(e4) {
            var t3 = this;
            if (this.props !== e4) {
              e4.style, e4.typedRef, e4.stopped, e4.className;
              var n3 = l(e4, ["style", "typedRef", "stopped", "className"]);
              return this.typed.options = Object.assign(this.typed.options, n3), !Object.keys(e4).every(function(n4) {
                return !t3.props[n4] && e4[n4] ? (t3.constructTyped(e4), false) : (t3.typed[n4] && (t3.typed[n4] = e4[n4]), true);
              }) || this.props.strings.length === e4.strings.length || this.constructTyped(e4), true;
            }
            return false;
          } }, { key: "render", value: function() {
            var e4 = this.props, t3 = e4.style, n3 = e4.className, r2 = e4.children, s3 = o.a.createElement("span", { ref: this.rootElement });
            return r2 && (s3 = o.a.cloneElement(r2, { ref: this.rootElement })), o.a.createElement("span", { style: t3, className: n3 }, s3);
          } }]) && f(n2.prototype, s2), i2 && f(n2, i2), t2;
        }();
        h.propTypes = { style: i.a.object, className: i.a.string, children: i.a.object, typedRef: i.a.func, stopped: i.a.bool, strings: i.a.arrayOf(i.a.string), typeSpeed: i.a.number, startDelay: i.a.number, backSpeed: i.a.number, smartBackspace: i.a.bool, shuffle: i.a.bool, backDelay: i.a.number, fadeOut: i.a.bool, fadeOutClass: i.a.string, fadeOutDelay: i.a.number, loop: i.a.bool, loopCount: i.a.number, showCursor: i.a.bool, cursorChar: i.a.string, autoInsertCss: i.a.bool, attr: i.a.string, bindInputFocusEvents: i.a.bool, contentType: i.a.oneOf(["html", ""]), onComplete: i.a.func, preStringTyped: i.a.func, onStringTyped: i.a.func, onLastStringBackspaced: i.a.func, onTypingPaused: i.a.func, onTypingResumed: i.a.func, onReset: i.a.func, onStop: i.a.func, onStart: i.a.func, onDestroy: i.a.func }, t.default = h;
      }, function(e2, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var r = "function" == typeof Symbol && Symbol.for, o = r ? Symbol.for("react.element") : 60103, s = r ? Symbol.for("react.portal") : 60106, i = r ? Symbol.for("react.fragment") : 60107, a = r ? Symbol.for("react.strict_mode") : 60108, u = r ? Symbol.for("react.profiler") : 60114, c = r ? Symbol.for("react.provider") : 60109, l = r ? Symbol.for("react.context") : 60110, f = r ? Symbol.for("react.async_mode") : 60111, p = r ? Symbol.for("react.concurrent_mode") : 60111, y = r ? Symbol.for("react.forward_ref") : 60112, d = r ? Symbol.for("react.suspense") : 60113, h = r ? Symbol.for("react.suspense_list") : 60120, m = r ? Symbol.for("react.memo") : 60115, b = r ? Symbol.for("react.lazy") : 60116, v = r ? Symbol.for("react.fundamental") : 60117, g = r ? Symbol.for("react.responder") : 60118;
        function S(e3) {
          if ("object" == typeof e3 && null !== e3) {
            var t2 = e3.$$typeof;
            switch (t2) {
              case o:
                switch (e3 = e3.type) {
                  case f:
                  case p:
                  case i:
                  case u:
                  case a:
                  case d:
                    return e3;
                  default:
                    switch (e3 = e3 && e3.$$typeof) {
                      case l:
                      case y:
                      case c:
                        return e3;
                      default:
                        return t2;
                    }
                }
              case b:
              case m:
              case s:
                return t2;
            }
          }
        }
        function O(e3) {
          return S(e3) === p;
        }
        t.typeOf = S, t.AsyncMode = f, t.ConcurrentMode = p, t.ContextConsumer = l, t.ContextProvider = c, t.Element = o, t.ForwardRef = y, t.Fragment = i, t.Lazy = b, t.Memo = m, t.Portal = s, t.Profiler = u, t.StrictMode = a, t.Suspense = d, t.isValidElementType = function(e3) {
          return "string" == typeof e3 || "function" == typeof e3 || e3 === i || e3 === p || e3 === u || e3 === a || e3 === d || e3 === h || "object" == typeof e3 && null !== e3 && (e3.$$typeof === b || e3.$$typeof === m || e3.$$typeof === c || e3.$$typeof === l || e3.$$typeof === y || e3.$$typeof === v || e3.$$typeof === g);
        }, t.isAsyncMode = function(e3) {
          return O(e3) || S(e3) === f;
        }, t.isConcurrentMode = O, t.isContextConsumer = function(e3) {
          return S(e3) === l;
        }, t.isContextProvider = function(e3) {
          return S(e3) === c;
        }, t.isElement = function(e3) {
          return "object" == typeof e3 && null !== e3 && e3.$$typeof === o;
        }, t.isForwardRef = function(e3) {
          return S(e3) === y;
        }, t.isFragment = function(e3) {
          return S(e3) === i;
        }, t.isLazy = function(e3) {
          return S(e3) === b;
        }, t.isMemo = function(e3) {
          return S(e3) === m;
        }, t.isPortal = function(e3) {
          return S(e3) === s;
        }, t.isProfiler = function(e3) {
          return S(e3) === u;
        }, t.isStrictMode = function(e3) {
          return S(e3) === a;
        }, t.isSuspense = function(e3) {
          return S(e3) === d;
        };
      }, function(e2, t, n) {
        "use strict";
        (function() {
          Object.defineProperty(t, "__esModule", { value: true });
          var e3 = "function" == typeof Symbol && Symbol.for, n2 = e3 ? Symbol.for("react.element") : 60103, r = e3 ? Symbol.for("react.portal") : 60106, o = e3 ? Symbol.for("react.fragment") : 60107, s = e3 ? Symbol.for("react.strict_mode") : 60108, i = e3 ? Symbol.for("react.profiler") : 60114, a = e3 ? Symbol.for("react.provider") : 60109, u = e3 ? Symbol.for("react.context") : 60110, c = e3 ? Symbol.for("react.async_mode") : 60111, l = e3 ? Symbol.for("react.concurrent_mode") : 60111, f = e3 ? Symbol.for("react.forward_ref") : 60112, p = e3 ? Symbol.for("react.suspense") : 60113, y = e3 ? Symbol.for("react.suspense_list") : 60120, d = e3 ? Symbol.for("react.memo") : 60115, h = e3 ? Symbol.for("react.lazy") : 60116, m = e3 ? Symbol.for("react.fundamental") : 60117, b = e3 ? Symbol.for("react.responder") : 60118;
          var v = function(e4) {
            for (var t2 = arguments.length, n3 = Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
              n3[r2 - 1] = arguments[r2];
            var o2 = 0, s2 = "Warning: " + e4.replace(/%s/g, function() {
              return n3[o2++];
            });
            "undefined" != typeof console && console.warn(s2);
            try {
              throw new Error(s2);
            } catch (e5) {
            }
          }, g = function(e4, t2) {
            if (void 0 === t2)
              throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");
            if (!e4) {
              for (var n3 = arguments.length, r2 = Array(n3 > 2 ? n3 - 2 : 0), o2 = 2; o2 < n3; o2++)
                r2[o2 - 2] = arguments[o2];
              v.apply(void 0, [t2].concat(r2));
            }
          };
          function S(e4) {
            if ("object" == typeof e4 && null !== e4) {
              var t2 = e4.$$typeof;
              switch (t2) {
                case n2:
                  var y2 = e4.type;
                  switch (y2) {
                    case c:
                    case l:
                    case o:
                    case i:
                    case s:
                    case p:
                      return y2;
                    default:
                      var m2 = y2 && y2.$$typeof;
                      switch (m2) {
                        case u:
                        case f:
                        case a:
                          return m2;
                        default:
                          return t2;
                      }
                  }
                case h:
                case d:
                case r:
                  return t2;
              }
            }
          }
          var O = c, w = l, k = u, P = a, C = n2, j = f, T = o, x = h, E = d, I = r, _ = i, R = s, $ = p, M = false;
          function A(e4) {
            return S(e4) === l;
          }
          t.typeOf = S, t.AsyncMode = O, t.ConcurrentMode = w, t.ContextConsumer = k, t.ContextProvider = P, t.Element = C, t.ForwardRef = j, t.Fragment = T, t.Lazy = x, t.Memo = E, t.Portal = I, t.Profiler = _, t.StrictMode = R, t.Suspense = $, t.isValidElementType = function(e4) {
            return "string" == typeof e4 || "function" == typeof e4 || e4 === o || e4 === l || e4 === i || e4 === s || e4 === p || e4 === y || "object" == typeof e4 && null !== e4 && (e4.$$typeof === h || e4.$$typeof === d || e4.$$typeof === a || e4.$$typeof === u || e4.$$typeof === f || e4.$$typeof === m || e4.$$typeof === b);
          }, t.isAsyncMode = function(e4) {
            return M || (M = true, g(false, "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), A(e4) || S(e4) === c;
          }, t.isConcurrentMode = A, t.isContextConsumer = function(e4) {
            return S(e4) === u;
          }, t.isContextProvider = function(e4) {
            return S(e4) === a;
          }, t.isElement = function(e4) {
            return "object" == typeof e4 && null !== e4 && e4.$$typeof === n2;
          }, t.isForwardRef = function(e4) {
            return S(e4) === f;
          }, t.isFragment = function(e4) {
            return S(e4) === o;
          }, t.isLazy = function(e4) {
            return S(e4) === h;
          }, t.isMemo = function(e4) {
            return S(e4) === d;
          }, t.isPortal = function(e4) {
            return S(e4) === r;
          }, t.isProfiler = function(e4) {
            return S(e4) === i;
          }, t.isStrictMode = function(e4) {
            return S(e4) === s;
          }, t.isSuspense = function(e4) {
            return S(e4) === p;
          };
        })();
      }, function(e2, t, n) {
        "use strict";
        var r = n(3), o = n(9), s = n(2), i = n(10), a = Function.call.bind(Object.prototype.hasOwnProperty), u = function() {
        };
        function c() {
          return null;
        }
        u = function(e3) {
          var t2 = "Warning: " + e3;
          "undefined" != typeof console && console.error(t2);
          try {
            throw new Error(t2);
          } catch (e4) {
          }
        }, e2.exports = function(e3, t2) {
          var n2 = "function" == typeof Symbol && Symbol.iterator, l = "@@iterator";
          var f = "<<anonymous>>", p = { array: m("array"), bool: m("boolean"), func: m("function"), number: m("number"), object: m("object"), string: m("string"), symbol: m("symbol"), any: h(c), arrayOf: function(e4) {
            return h(function(t3, n3, r2, o2, i2) {
              if ("function" != typeof e4)
                return new d("Property `" + i2 + "` of component `" + r2 + "` has invalid PropType notation inside arrayOf.");
              var a2 = t3[n3];
              if (!Array.isArray(a2))
                return new d("Invalid " + o2 + " `" + i2 + "` of type `" + v(a2) + "` supplied to `" + r2 + "`, expected an array.");
              for (var u2 = 0; u2 < a2.length; u2++) {
                var c2 = e4(a2, u2, r2, o2, i2 + "[" + u2 + "]", s);
                if (c2 instanceof Error)
                  return c2;
              }
              return null;
            });
          }, element: h(function(t3, n3, r2, o2, s2) {
            var i2 = t3[n3];
            return e3(i2) ? null : new d("Invalid " + o2 + " `" + s2 + "` of type `" + v(i2) + "` supplied to `" + r2 + "`, expected a single ReactElement.");
          }), elementType: h(function(e4, t3, n3, o2, s2) {
            var i2 = e4[t3];
            return r.isValidElementType(i2) ? null : new d("Invalid " + o2 + " `" + s2 + "` of type `" + v(i2) + "` supplied to `" + n3 + "`, expected a single ReactElement type.");
          }), instanceOf: function(e4) {
            return h(function(t3, n3, r2, o2, s2) {
              if (!(t3[n3] instanceof e4)) {
                var i2 = e4.name || f;
                return new d("Invalid " + o2 + " `" + s2 + "` of type `" + function(e5) {
                  if (!e5.constructor || !e5.constructor.name)
                    return f;
                  return e5.constructor.name;
                }(t3[n3]) + "` supplied to `" + r2 + "`, expected instance of `" + i2 + "`.");
              }
              return null;
            });
          }, node: h(function(e4, t3, n3, r2, o2) {
            return b(e4[t3]) ? null : new d("Invalid " + r2 + " `" + o2 + "` supplied to `" + n3 + "`, expected a ReactNode.");
          }), objectOf: function(e4) {
            return h(function(t3, n3, r2, o2, i2) {
              if ("function" != typeof e4)
                return new d("Property `" + i2 + "` of component `" + r2 + "` has invalid PropType notation inside objectOf.");
              var u2 = t3[n3], c2 = v(u2);
              if ("object" !== c2)
                return new d("Invalid " + o2 + " `" + i2 + "` of type `" + c2 + "` supplied to `" + r2 + "`, expected an object.");
              for (var l2 in u2)
                if (a(u2, l2)) {
                  var f2 = e4(u2, l2, r2, o2, i2 + "." + l2, s);
                  if (f2 instanceof Error)
                    return f2;
                }
              return null;
            });
          }, oneOf: function(e4) {
            if (!Array.isArray(e4))
              return arguments.length > 1 ? u("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).") : u("Invalid argument supplied to oneOf, expected an array."), c;
            return h(function(t3, n3, r2, o2, s2) {
              for (var i2 = t3[n3], a2 = 0; a2 < e4.length; a2++)
                if (y(i2, e4[a2]))
                  return null;
              var u2 = JSON.stringify(e4, function(e5, t4) {
                return "symbol" === g(t4) ? String(t4) : t4;
              });
              return new d("Invalid " + o2 + " `" + s2 + "` of value `" + String(i2) + "` supplied to `" + r2 + "`, expected one of " + u2 + ".");
            });
          }, oneOfType: function(e4) {
            if (!Array.isArray(e4))
              return u("Invalid argument supplied to oneOfType, expected an instance of array."), c;
            for (var t3 = 0; t3 < e4.length; t3++) {
              var n3 = e4[t3];
              if ("function" != typeof n3)
                return u("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + S(n3) + " at index " + t3 + "."), c;
            }
            return h(function(t4, n4, r2, o2, i2) {
              for (var a2 = 0; a2 < e4.length; a2++) {
                if (null == (0, e4[a2])(t4, n4, r2, o2, i2, s))
                  return null;
              }
              return new d("Invalid " + o2 + " `" + i2 + "` supplied to `" + r2 + "`.");
            });
          }, shape: function(e4) {
            return h(function(t3, n3, r2, o2, i2) {
              var a2 = t3[n3], u2 = v(a2);
              if ("object" !== u2)
                return new d("Invalid " + o2 + " `" + i2 + "` of type `" + u2 + "` supplied to `" + r2 + "`, expected `object`.");
              for (var c2 in e4) {
                var l2 = e4[c2];
                if (l2) {
                  var f2 = l2(a2, c2, r2, o2, i2 + "." + c2, s);
                  if (f2)
                    return f2;
                }
              }
              return null;
            });
          }, exact: function(e4) {
            return h(function(t3, n3, r2, i2, a2) {
              var u2 = t3[n3], c2 = v(u2);
              if ("object" !== c2)
                return new d("Invalid " + i2 + " `" + a2 + "` of type `" + c2 + "` supplied to `" + r2 + "`, expected `object`.");
              var l2 = o({}, t3[n3], e4);
              for (var f2 in l2) {
                var p2 = e4[f2];
                if (!p2)
                  return new d("Invalid " + i2 + " `" + a2 + "` key `" + f2 + "` supplied to `" + r2 + "`.\nBad object: " + JSON.stringify(t3[n3], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e4), null, "  "));
                var y2 = p2(u2, f2, r2, i2, a2 + "." + f2, s);
                if (y2)
                  return y2;
              }
              return null;
            });
          } };
          function y(e4, t3) {
            return e4 === t3 ? 0 !== e4 || 1 / e4 == 1 / t3 : e4 != e4 && t3 != t3;
          }
          function d(e4) {
            this.message = e4, this.stack = "";
          }
          function h(e4) {
            var n3 = {}, r2 = 0;
            function o2(o3, i3, a2, c2, l2, p2, y2) {
              if (c2 = c2 || f, p2 = p2 || a2, y2 !== s) {
                if (t2) {
                  var h2 = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                  throw h2.name = "Invariant Violation", h2;
                }
                if ("undefined" != typeof console) {
                  var m2 = c2 + ":" + a2;
                  !n3[m2] && r2 < 3 && (u("You are manually calling a React.PropTypes validation function for the `" + p2 + "` prop on `" + c2 + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), n3[m2] = true, r2++);
                }
              }
              return null == i3[a2] ? o3 ? null === i3[a2] ? new d("The " + l2 + " `" + p2 + "` is marked as required in `" + c2 + "`, but its value is `null`.") : new d("The " + l2 + " `" + p2 + "` is marked as required in `" + c2 + "`, but its value is `undefined`.") : null : e4(i3, a2, c2, l2, p2);
            }
            var i2 = o2.bind(null, false);
            return i2.isRequired = o2.bind(null, true), i2;
          }
          function m(e4) {
            return h(function(t3, n3, r2, o2, s2, i2) {
              var a2 = t3[n3];
              return v(a2) !== e4 ? new d("Invalid " + o2 + " `" + s2 + "` of type `" + g(a2) + "` supplied to `" + r2 + "`, expected `" + e4 + "`.") : null;
            });
          }
          function b(t3) {
            switch (typeof t3) {
              case "number":
              case "string":
              case "undefined":
                return true;
              case "boolean":
                return !t3;
              case "object":
                if (Array.isArray(t3))
                  return t3.every(b);
                if (null === t3 || e3(t3))
                  return true;
                var r2 = function(e4) {
                  var t4 = e4 && (n2 && e4[n2] || e4[l]);
                  if ("function" == typeof t4)
                    return t4;
                }(t3);
                if (!r2)
                  return false;
                var o2, s2 = r2.call(t3);
                if (r2 !== t3.entries) {
                  for (; !(o2 = s2.next()).done; )
                    if (!b(o2.value))
                      return false;
                } else
                  for (; !(o2 = s2.next()).done; ) {
                    var i2 = o2.value;
                    if (i2 && !b(i2[1]))
                      return false;
                  }
                return true;
              default:
                return false;
            }
          }
          function v(e4) {
            var t3 = typeof e4;
            return Array.isArray(e4) ? "array" : e4 instanceof RegExp ? "object" : function(e5, t4) {
              return "symbol" === e5 || !!t4 && ("Symbol" === t4["@@toStringTag"] || "function" == typeof Symbol && t4 instanceof Symbol);
            }(t3, e4) ? "symbol" : t3;
          }
          function g(e4) {
            if (null == e4)
              return "" + e4;
            var t3 = v(e4);
            if ("object" === t3) {
              if (e4 instanceof Date)
                return "date";
              if (e4 instanceof RegExp)
                return "regexp";
            }
            return t3;
          }
          function S(e4) {
            var t3 = g(e4);
            switch (t3) {
              case "array":
              case "object":
                return "an " + t3;
              case "boolean":
              case "date":
              case "regexp":
                return "a " + t3;
              default:
                return t3;
            }
          }
          return d.prototype = Error.prototype, p.checkPropTypes = i, p.resetWarningCache = i.resetWarningCache, p.PropTypes = p, p;
        };
      }, function(e2, t, n) {
        "use strict";
        var r = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
        function i(e3) {
          if (null == e3)
            throw new TypeError("Object.assign cannot be called with null or undefined");
          return Object(e3);
        }
        e2.exports = function() {
          try {
            if (!Object.assign)
              return false;
            var e3 = new String("abc");
            if (e3[5] = "de", "5" === Object.getOwnPropertyNames(e3)[0])
              return false;
            for (var t2 = {}, n2 = 0; n2 < 10; n2++)
              t2["_" + String.fromCharCode(n2)] = n2;
            if ("0123456789" !== Object.getOwnPropertyNames(t2).map(function(e4) {
              return t2[e4];
            }).join(""))
              return false;
            var r2 = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(e4) {
              r2[e4] = e4;
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r2)).join("");
          } catch (e4) {
            return false;
          }
        }() ? Object.assign : function(e3, t2) {
          for (var n2, a, u = i(e3), c = 1; c < arguments.length; c++) {
            for (var l in n2 = Object(arguments[c]))
              o.call(n2, l) && (u[l] = n2[l]);
            if (r) {
              a = r(n2);
              for (var f = 0; f < a.length; f++)
                s.call(n2, a[f]) && (u[a[f]] = n2[a[f]]);
            }
          }
          return u;
        };
      }, function(e2, t, n) {
        "use strict";
        var r = function() {
        }, o = n(2), s = {}, i = Function.call.bind(Object.prototype.hasOwnProperty);
        function a(e3, t2, n2, a2, u) {
          for (var c in e3)
            if (i(e3, c)) {
              var l;
              try {
                if ("function" != typeof e3[c]) {
                  var f = Error((a2 || "React class") + ": " + n2 + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e3[c] + "`.");
                  throw f.name = "Invariant Violation", f;
                }
                l = e3[c](t2, c, a2, n2, null, o);
              } catch (e4) {
                l = e4;
              }
              if (!l || l instanceof Error || r((a2 || "React class") + ": type specification of " + n2 + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof l + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), l instanceof Error && !(l.message in s)) {
                s[l.message] = true;
                var p = u ? u() : "";
                r("Failed " + n2 + " type: " + l.message + (null != p ? p : ""));
              }
            }
        }
        r = function(e3) {
          var t2 = "Warning: " + e3;
          "undefined" != typeof console && console.error(t2);
          try {
            throw new Error(t2);
          } catch (e4) {
          }
        }, a.resetWarningCache = function() {
          s = {};
        }, e2.exports = a;
      }, function(e2, t, n) {
        "use strict";
        var r = n(2);
        function o() {
        }
        function s() {
        }
        s.resetWarningCache = o, e2.exports = function() {
          function e3(e4, t3, n3, o2, s2, i) {
            if (i !== r) {
              var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
              throw a.name = "Invariant Violation", a;
            }
          }
          function t2() {
            return e3;
          }
          e3.isRequired = e3;
          var n2 = { array: e3, bool: e3, func: e3, number: e3, object: e3, string: e3, symbol: e3, any: e3, arrayOf: t2, element: e3, elementType: e3, instanceOf: t2, node: e3, objectOf: t2, oneOf: t2, oneOfType: t2, shape: t2, exact: t2, checkPropTypes: s, resetWarningCache: o };
          return n2.PropTypes = n2, n2;
        };
      }]);
    });
  }
});
export default require_react_typed();
/*! Bundled license information:

react-typed/dist/react-typed.js:
  (*!
   * 
   *   typed.js - A JavaScript Typing Animation Library
   *   Author: Matt Boldt <me@mattboldt.com>
   *   Version: v2.0.9
   *   Url: https://github.com/mattboldt/typed.js
   *   License(s): MIT
   * 
   *)
  (** @license React v16.9.0
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
  (** @license React v16.9.0
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=react-typed.js.map
