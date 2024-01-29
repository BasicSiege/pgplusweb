
(() => {
  var F_ = Object.create;
  var rn = Object.defineProperty;
  var G_ = Object.getOwnPropertyDescriptor;
  var V_ = Object.getOwnPropertyNames;
  var U_ = Object.getPrototypeOf,
    H_ = Object.prototype.hasOwnProperty;
  var ue = (e, t) => () => (e && (t = e((e = 0))), t);
  var u = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Le = (e, t) => {
      for (var r in t) rn(e, r, { get: t[r], enumerable: !0 });
    },
    xs = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of V_(t))
          !H_.call(e, i) &&
            i !== r &&
            rn(e, i, {
              get: () => t[i],
              enumerable: !(n = G_(t, i)) || n.enumerable,
            });
      return e;
    };
  var re = (e, t, r) => (
      (r = e != null ? F_(U_(e)) : {}),
      xs(
        t || !e || !e.__esModule
          ? rn(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    Qe = (e) => xs(rn({}, "__esModule", { value: !0 }), e);
  var Ri = u(() => {
    "use strict";
    window.tram = (function (e) {
      function t(l, E) {
        var T = new ve.Bare();
        return T.init(l, E);
      }
      function r(l) {
        return l.replace(/[A-Z]/g, function (E) {
          return "-" + E.toLowerCase();
        });
      }
      function n(l) {
        var E = parseInt(l.slice(1), 16),
          T = (E >> 16) & 255,
          b = (E >> 8) & 255,
          L = 255 & E;
        return [T, b, L];
      }
      function i(l, E, T) {
        return (
          "#" + ((1 << 24) | (l << 16) | (E << 8) | T).toString(16).slice(1)
        );
      }
      function o() {}
      function a(l, E) {
        f("Type warning: Expected: [" + l + "] Got: [" + typeof E + "] " + E);
      }
      function s(l, E, T) {
        f("Units do not match [" + l + "]: " + E + ", " + T);
      }
      function c(l, E, T) {
        if ((E !== void 0 && (T = E), l === void 0)) return T;
        var b = T;
        return (
          hr.test(l) || !At.test(l)
            ? (b = parseInt(l, 10))
            : At.test(l) && (b = 1e3 * parseFloat(l)),
          0 > b && (b = 0),
          b === b ? b : T
        );
      }
      function f(l) {
        ae.debug && window && window.console.warn(l);
      }
      function p(l) {
        for (var E = -1, T = l ? l.length : 0, b = []; ++E < T; ) {
          var L = l[E];
          L && b.push(L);
        }
        return b;
      }
      var d = (function (l, E, T) {
          function b($) {
            return typeof $ == "object";
          }
          function L($) {
            return typeof $ == "function";
          }
          function C() {}
          function j($, se) {
            function F() {
              var Oe = new Q();
              return L(Oe.init) && Oe.init.apply(Oe, arguments), Oe;
            }
            function Q() {}
            se === T && ((se = $), ($ = Object)), (F.Bare = Q);
            var Z,
              ge = (C[l] = $[l]),
              $e = (Q[l] = F[l] = new C());
            return (
              ($e.constructor = F),
              (F.mixin = function (Oe) {
                return (Q[l] = F[l] = j(F, Oe)[l]), F;
              }),
              (F.open = function (Oe) {
                if (
                  ((Z = {}),
                  L(Oe) ? (Z = Oe.call(F, $e, ge, F, $)) : b(Oe) && (Z = Oe),
                  b(Z))
                )
                  for (var yr in Z) E.call(Z, yr) && ($e[yr] = Z[yr]);
                return L($e.init) || ($e.init = $), F;
              }),
              F.open(se)
            );
          }
          return j;
        })("prototype", {}.hasOwnProperty),
        h = {
          ease: [
            "ease",
            function (l, E, T, b) {
              var L = (l /= b) * l,
                C = L * l;
              return (
                E +
                T * (-2.75 * C * L + 11 * L * L + -15.5 * C + 8 * L + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, E, T, b) {
              var L = (l /= b) * l,
                C = L * l;
              return E + T * (-1 * C * L + 3 * L * L + -3 * C + 2 * L);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, E, T, b) {
              var L = (l /= b) * l,
                C = L * l;
              return (
                E +
                T * (0.3 * C * L + -1.6 * L * L + 2.2 * C + -1.8 * L + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, E, T, b) {
              var L = (l /= b) * l,
                C = L * l;
              return E + T * (2 * C * L + -5 * L * L + 2 * C + 2 * L);
            },
          ],
          linear: [
            "linear",
            function (l, E, T, b) {
              return (T * l) / b + E;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, E, T, b) {
              return T * (l /= b) * l + E;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, E, T, b) {
              return -T * (l /= b) * (l - 2) + E;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, E, T, b) {
              return (l /= b / 2) < 1
                ? (T / 2) * l * l + E
                : (-T / 2) * (--l * (l - 2) - 1) + E;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, E, T, b) {
              return T * (l /= b) * l * l + E;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, E, T, b) {
              return T * ((l = l / b - 1) * l * l + 1) + E;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, E, T, b) {
              return (l /= b / 2) < 1
                ? (T / 2) * l * l * l + E
                : (T / 2) * ((l -= 2) * l * l + 2) + E;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, E, T, b) {
              return T * (l /= b) * l * l * l + E;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, E, T, b) {
              return -T * ((l = l / b - 1) * l * l * l - 1) + E;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, E, T, b) {
              return (l /= b / 2) < 1
                ? (T / 2) * l * l * l * l + E
                : (-T / 2) * ((l -= 2) * l * l * l - 2) + E;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, E, T, b) {
              return T * (l /= b) * l * l * l * l + E;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, E, T, b) {
              return T * ((l = l / b - 1) * l * l * l * l + 1) + E;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, E, T, b) {
              return (l /= b / 2) < 1
                ? (T / 2) * l * l * l * l * l + E
                : (T / 2) * ((l -= 2) * l * l * l * l + 2) + E;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, E, T, b) {
              return -T * Math.cos((l / b) * (Math.PI / 2)) + T + E;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, E, T, b) {
              return T * Math.sin((l / b) * (Math.PI / 2)) + E;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, E, T, b) {
              return (-T / 2) * (Math.cos((Math.PI * l) / b) - 1) + E;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, E, T, b) {
              return l === 0 ? E : T * Math.pow(2, 10 * (l / b - 1)) + E;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, E, T, b) {
              return l === b
                ? E + T
                : T * (-Math.pow(2, (-10 * l) / b) + 1) + E;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, E, T, b) {
              return l === 0
                ? E
                : l === b
                ? E + T
                : (l /= b / 2) < 1
                ? (T / 2) * Math.pow(2, 10 * (l - 1)) + E
                : (T / 2) * (-Math.pow(2, -10 * --l) + 2) + E;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, E, T, b) {
              return -T * (Math.sqrt(1 - (l /= b) * l) - 1) + E;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, E, T, b) {
              return T * Math.sqrt(1 - (l = l / b - 1) * l) + E;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, E, T, b) {
              return (l /= b / 2) < 1
                ? (-T / 2) * (Math.sqrt(1 - l * l) - 1) + E
                : (T / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + E;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, E, T, b, L) {
              return (
                L === void 0 && (L = 1.70158),
                T * (l /= b) * l * ((L + 1) * l - L) + E
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, E, T, b, L) {
              return (
                L === void 0 && (L = 1.70158),
                T * ((l = l / b - 1) * l * ((L + 1) * l + L) + 1) + E
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, E, T, b, L) {
              return (
                L === void 0 && (L = 1.70158),
                (l /= b / 2) < 1
                  ? (T / 2) * l * l * (((L *= 1.525) + 1) * l - L) + E
                  : (T / 2) *
                      ((l -= 2) * l * (((L *= 1.525) + 1) * l + L) + 2) +
                    E
              );
            },
          ],
        },
        y = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        m = document,
        _ = window,
        N = "bkwld-tram",
        O = /[\-\.0-9]/g,
        x = /[A-Z]/,
        I = "number",
        w = /^(rgb|#)/,
        P = /(em|cm|mm|in|pt|pc|px)$/,
        R = /(em|cm|mm|in|pt|pc|px|%)$/,
        V = /(deg|rad|turn)$/,
        H = "unitless",
        X = /(all|none) 0s ease 0s/,
        k = /^(width|height)$/,
        D = " ",
        A = m.createElement("a"),
        v = ["Webkit", "Moz", "O", "ms"],
        S = ["-webkit-", "-moz-", "-o-", "-ms-"],
        q = function (l) {
          if (l in A.style) return { dom: l, css: l };
          var E,
            T,
            b = "",
            L = l.split("-");
          for (E = 0; E < L.length; E++)
            b += L[E].charAt(0).toUpperCase() + L[E].slice(1);
          for (E = 0; E < v.length; E++)
            if (((T = v[E] + b), T in A.style))
              return { dom: T, css: S[E] + l };
        },
        M = (t.support = {
          bind: Function.prototype.bind,
          transform: q("transform"),
          transition: q("transition"),
          backface: q("backface-visibility"),
          timing: q("transition-timing-function"),
        });
      if (M.transition) {
        var B = M.timing.dom;
        if (((A.style[B] = h["ease-in-back"][0]), !A.style[B]))
          for (var z in y) h[z][0] = y[z];
      }
      var J = (t.frame = (function () {
          var l =
            _.requestAnimationFrame ||
            _.webkitRequestAnimationFrame ||
            _.mozRequestAnimationFrame ||
            _.oRequestAnimationFrame ||
            _.msRequestAnimationFrame;
          return l && M.bind
            ? l.bind(_)
            : function (E) {
                _.setTimeout(E, 16);
              };
        })()),
        le = (t.now = (function () {
          var l = _.performance,
            E = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return E && M.bind
            ? E.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        Fe = d(function (l) {
          function E(K, te) {
            var de = p(("" + K).split(D)),
              ne = de[0];
            te = te || {};
            var Ae = U[ne];
            if (!Ae) return f("Unsupported property: " + ne);
            if (!te.weak || !this.props[ne]) {
              var Ue = Ae[0],
                Ne = this.props[ne];
              return (
                Ne || (Ne = this.props[ne] = new Ue.Bare()),
                Ne.init(this.$el, de, Ae, te),
                Ne
              );
            }
          }
          function T(K, te, de) {
            if (K) {
              var ne = typeof K;
              if (
                (te ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                ne == "number" && te)
              )
                return (
                  (this.timer = new pt({
                    duration: K,
                    context: this,
                    complete: C,
                  })),
                  void (this.active = !0)
                );
              if (ne == "string" && te) {
                switch (K) {
                  case "hide":
                    F.call(this);
                    break;
                  case "stop":
                    j.call(this);
                    break;
                  case "redraw":
                    Q.call(this);
                    break;
                  default:
                    E.call(this, K, de && de[1]);
                }
                return C.call(this);
              }
              if (ne == "function") return void K.call(this, this);
              if (ne == "object") {
                var Ae = 0;
                $e.call(
                  this,
                  K,
                  function (he, D_) {
                    he.span > Ae && (Ae = he.span), he.stop(), he.animate(D_);
                  },
                  function (he) {
                    "wait" in he && (Ae = c(he.wait, 0));
                  }
                ),
                  ge.call(this),
                  Ae > 0 &&
                    ((this.timer = new pt({ duration: Ae, context: this })),
                    (this.active = !0),
                    te && (this.timer.complete = C));
                var Ue = this,
                  Ne = !1,
                  tn = {};
                J(function () {
                  $e.call(Ue, K, function (he) {
                    he.active && ((Ne = !0), (tn[he.name] = he.nextStyle));
                  }),
                    Ne && Ue.$el.css(tn);
                });
              }
            }
          }
          function b(K) {
            (K = c(K, 0)),
              this.active
                ? this.queue.push({ options: K })
                : ((this.timer = new pt({
                    duration: K,
                    context: this,
                    complete: C,
                  })),
                  (this.active = !0));
          }
          function L(K) {
            return this.active
              ? (this.queue.push({ options: K, args: arguments }),
                void (this.timer.complete = C))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function C() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var K = this.queue.shift();
              T.call(this, K.options, !0, K.args);
            }
          }
          function j(K) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var te;
            typeof K == "string"
              ? ((te = {}), (te[K] = 1))
              : (te = typeof K == "object" && K != null ? K : this.props),
              $e.call(this, te, Oe),
              ge.call(this);
          }
          function $(K) {
            j.call(this, K), $e.call(this, K, yr, q_);
          }
          function se(K) {
            typeof K != "string" && (K = "block"), (this.el.style.display = K);
          }
          function F() {
            j.call(this), (this.el.style.display = "none");
          }
          function Q() {
            this.el.offsetHeight;
          }
          function Z() {
            j.call(this), e.removeData(this.el, N), (this.$el = this.el = null);
          }
          function ge() {
            var K,
              te,
              de = [];
            this.upstream && de.push(this.upstream);
            for (K in this.props)
              (te = this.props[K]), te.active && de.push(te.string);
            (de = de.join(",")),
              this.style !== de &&
                ((this.style = de), (this.el.style[M.transition.dom] = de));
          }
          function $e(K, te, de) {
            var ne,
              Ae,
              Ue,
              Ne,
              tn = te !== Oe,
              he = {};
            for (ne in K)
              (Ue = K[ne]),
                ne in ce
                  ? (he.transform || (he.transform = {}),
                    (he.transform[ne] = Ue))
                  : (x.test(ne) && (ne = r(ne)),
                    ne in U ? (he[ne] = Ue) : (Ne || (Ne = {}), (Ne[ne] = Ue)));
            for (ne in he) {
              if (((Ue = he[ne]), (Ae = this.props[ne]), !Ae)) {
                if (!tn) continue;
                Ae = E.call(this, ne);
              }
              te.call(this, Ae, Ue);
            }
            de && Ne && de.call(this, Ne);
          }
          function Oe(K) {
            K.stop();
          }
          function yr(K, te) {
            K.set(te);
          }
          function q_(K) {
            this.$el.css(K);
          }
          function Ve(K, te) {
            l[K] = function () {
              return this.children
                ? M_.call(this, te, arguments)
                : (this.el && te.apply(this, arguments), this);
            };
          }
          function M_(K, te) {
            var de,
              ne = this.children.length;
            for (de = 0; ne > de; de++) K.apply(this.children[de], te);
            return this;
          }
          (l.init = function (K) {
            if (
              ((this.$el = e(K)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              ae.keepInherited && !ae.fallback)
            ) {
              var te = G(this.el, "transition");
              te && !X.test(te) && (this.upstream = te);
            }
            M.backface &&
              ae.hideBackface &&
              g(this.el, M.backface.css, "hidden");
          }),
            Ve("add", E),
            Ve("start", T),
            Ve("wait", b),
            Ve("then", L),
            Ve("next", C),
            Ve("stop", j),
            Ve("set", $),
            Ve("show", se),
            Ve("hide", F),
            Ve("redraw", Q),
            Ve("destroy", Z);
        }),
        ve = d(Fe, function (l) {
          function E(T, b) {
            var L = e.data(T, N) || e.data(T, N, new Fe.Bare());
            return L.el || L.init(T), b ? L.start(b) : L;
          }
          l.init = function (T, b) {
            var L = e(T);
            if (!L.length) return this;
            if (L.length === 1) return E(L[0], b);
            var C = [];
            return (
              L.each(function (j, $) {
                C.push(E($, b));
              }),
              (this.children = C),
              this
            );
          };
        }),
        Y = d(function (l) {
          function E() {
            var C = this.get();
            this.update("auto");
            var j = this.get();
            return this.update(C), j;
          }
          function T(C, j, $) {
            return j !== void 0 && ($ = j), C in h ? C : $;
          }
          function b(C) {
            var j = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(C);
            return (j ? i(j[1], j[2], j[3]) : C).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var L = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (C, j, $, se) {
            (this.$el = C), (this.el = C[0]);
            var F = j[0];
            $[2] && (F = $[2]),
              W[F] && (F = W[F]),
              (this.name = F),
              (this.type = $[1]),
              (this.duration = c(j[1], this.duration, L.duration)),
              (this.ease = T(j[2], this.ease, L.ease)),
              (this.delay = c(j[3], this.delay, L.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = k.test(this.name)),
              (this.unit = se.unit || this.unit || ae.defaultUnit),
              (this.angle = se.angle || this.angle || ae.defaultAngle),
              ae.fallback || se.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    D +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? D + h[this.ease][0] : "") +
                    (this.delay ? D + this.delay + "ms" : "")));
          }),
            (l.set = function (C) {
              (C = this.convert(C, this.type)), this.update(C), this.redraw();
            }),
            (l.transition = function (C) {
              (this.active = !0),
                (C = this.convert(C, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  C == "auto" && (C = E.call(this))),
                (this.nextStyle = C);
            }),
            (l.fallback = function (C) {
              var j =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (C = this.convert(C, this.type)),
                this.auto &&
                  (j == "auto" && (j = this.convert(this.get(), this.type)),
                  C == "auto" && (C = E.call(this))),
                (this.tween = new Ot({
                  from: j,
                  to: C,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return G(this.el, this.name);
            }),
            (l.update = function (C) {
              g(this.el, this.name, C);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                g(this.el, this.name, this.get()));
              var C = this.tween;
              C && C.context && C.destroy();
            }),
            (l.convert = function (C, j) {
              if (C == "auto" && this.auto) return C;
              var $,
                se = typeof C == "number",
                F = typeof C == "string";
              switch (j) {
                case I:
                  if (se) return C;
                  if (F && C.replace(O, "") === "") return +C;
                  $ = "number(unitless)";
                  break;
                case w:
                  if (F) {
                    if (C === "" && this.original) return this.original;
                    if (j.test(C))
                      return C.charAt(0) == "#" && C.length == 7 ? C : b(C);
                  }
                  $ = "hex or rgb string";
                  break;
                case P:
                  if (se) return C + this.unit;
                  if (F && j.test(C)) return C;
                  $ = "number(px) or string(unit)";
                  break;
                case R:
                  if (se) return C + this.unit;
                  if (F && j.test(C)) return C;
                  $ = "number(px) or string(unit or %)";
                  break;
                case V:
                  if (se) return C + this.angle;
                  if (F && j.test(C)) return C;
                  $ = "number(deg) or string(angle)";
                  break;
                case H:
                  if (se || (F && R.test(C))) return C;
                  $ = "number(unitless) or string(unit or %)";
              }
              return a($, C), C;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        ee = d(Y, function (l, E) {
          l.init = function () {
            E.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), w));
          };
        }),
        Re = d(Y, function (l, E) {
          (l.init = function () {
            E.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (T) {
              this.$el[this.name](T);
            });
        }),
        Ce = d(Y, function (l, E) {
          function T(b, L) {
            var C, j, $, se, F;
            for (C in b)
              (se = ce[C]),
                ($ = se[0]),
                (j = se[1] || C),
                (F = this.convert(b[C], $)),
                L.call(this, j, F, $);
          }
          (l.init = function () {
            E.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                ce.perspective &&
                  ae.perspective &&
                  ((this.current.perspective = ae.perspective),
                  g(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (b) {
              T.call(this, b, function (L, C) {
                this.current[L] = C;
              }),
                g(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (b) {
              var L = this.values(b);
              this.tween = new gr({
                current: this.current,
                values: L,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var C,
                j = {};
              for (C in this.current) j[C] = C in L ? L[C] : this.current[C];
              (this.active = !0), (this.nextStyle = this.style(j));
            }),
            (l.fallback = function (b) {
              var L = this.values(b);
              this.tween = new gr({
                current: this.current,
                values: L,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              g(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (b) {
              var L,
                C = "";
              for (L in b) C += L + "(" + b[L] + ") ";
              return C;
            }),
            (l.values = function (b) {
              var L,
                C = {};
              return (
                T.call(this, b, function (j, $, se) {
                  (C[j] = $),
                    this.current[j] === void 0 &&
                      ((L = 0),
                      ~j.indexOf("scale") && (L = 1),
                      (this.current[j] = this.convert(L, se)));
                }),
                C
              );
            });
        }),
        Ot = d(function (l) {
          function E(F) {
            $.push(F) === 1 && J(T);
          }
          function T() {
            var F,
              Q,
              Z,
              ge = $.length;
            if (ge)
              for (J(T), Q = le(), F = ge; F--; ) (Z = $[F]), Z && Z.render(Q);
          }
          function b(F) {
            var Q,
              Z = e.inArray(F, $);
            Z >= 0 &&
              ((Q = $.slice(Z + 1)),
              ($.length = Z),
              Q.length && ($ = $.concat(Q)));
          }
          function L(F) {
            return Math.round(F * se) / se;
          }
          function C(F, Q, Z) {
            return i(
              F[0] + Z * (Q[0] - F[0]),
              F[1] + Z * (Q[1] - F[1]),
              F[2] + Z * (Q[2] - F[2])
            );
          }
          var j = { ease: h.ease[1], from: 0, to: 1 };
          (l.init = function (F) {
            (this.duration = F.duration || 0), (this.delay = F.delay || 0);
            var Q = F.ease || j.ease;
            h[Q] && (Q = h[Q][1]),
              typeof Q != "function" && (Q = j.ease),
              (this.ease = Q),
              (this.update = F.update || o),
              (this.complete = F.complete || o),
              (this.context = F.context || this),
              (this.name = F.name);
            var Z = F.from,
              ge = F.to;
            Z === void 0 && (Z = j.from),
              ge === void 0 && (ge = j.to),
              (this.unit = F.unit || ""),
              typeof Z == "number" && typeof ge == "number"
                ? ((this.begin = Z), (this.change = ge - Z))
                : this.format(ge, Z),
              (this.value = this.begin + this.unit),
              (this.start = le()),
              F.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = le()),
                (this.active = !0),
                E(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), b(this));
            }),
            (l.render = function (F) {
              var Q,
                Z = F - this.start;
              if (this.delay) {
                if (Z <= this.delay) return;
                Z -= this.delay;
              }
              if (Z < this.duration) {
                var ge = this.ease(Z, 0, 1, this.duration);
                return (
                  (Q = this.startRGB
                    ? C(this.startRGB, this.endRGB, ge)
                    : L(this.begin + ge * this.change)),
                  (this.value = Q + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (Q = this.endHex || this.begin + this.change),
                (this.value = Q + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (F, Q) {
              if (((Q += ""), (F += ""), F.charAt(0) == "#"))
                return (
                  (this.startRGB = n(Q)),
                  (this.endRGB = n(F)),
                  (this.endHex = F),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var Z = Q.replace(O, ""),
                  ge = F.replace(O, "");
                Z !== ge && s("tween", Q, F), (this.unit = Z);
              }
              (Q = parseFloat(Q)),
                (F = parseFloat(F)),
                (this.begin = this.value = Q),
                (this.change = F - Q);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var $ = [],
            se = 1e3;
        }),
        pt = d(Ot, function (l) {
          (l.init = function (E) {
            (this.duration = E.duration || 0),
              (this.complete = E.complete || o),
              (this.context = E.context),
              this.play();
          }),
            (l.render = function (E) {
              var T = E - this.start;
              T < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        gr = d(Ot, function (l, E) {
          (l.init = function (T) {
            (this.context = T.context),
              (this.update = T.update),
              (this.tweens = []),
              (this.current = T.current);
            var b, L;
            for (b in T.values)
              (L = T.values[b]),
                this.current[b] !== L &&
                  this.tweens.push(
                    new Ot({
                      name: b,
                      from: this.current[b],
                      to: L,
                      duration: T.duration,
                      delay: T.delay,
                      ease: T.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (T) {
              var b,
                L,
                C = this.tweens.length,
                j = !1;
              for (b = C; b--; )
                (L = this.tweens[b]),
                  L.context &&
                    (L.render(T), (this.current[L.name] = L.value), (j = !0));
              return j
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((E.destroy.call(this), this.tweens)) {
                var T,
                  b = this.tweens.length;
                for (T = b; T--; ) this.tweens[T].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        ae = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !M.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!M.transition) return (ae.fallback = !0);
        ae.agentTests.push("(" + l + ")");
        var E = new RegExp(ae.agentTests.join("|"), "i");
        ae.fallback = E.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new Ot(l);
        }),
        (t.delay = function (l, E, T) {
          return new pt({ complete: E, duration: l, context: T });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var g = e.style,
        G = e.css,
        W = { transform: M.transform && M.transform.css },
        U = {
          color: [ee, w],
          background: [ee, w, "background-color"],
          "outline-color": [ee, w],
          "border-color": [ee, w],
          "border-top-color": [ee, w],
          "border-right-color": [ee, w],
          "border-bottom-color": [ee, w],
          "border-left-color": [ee, w],
          "border-width": [Y, P],
          "border-top-width": [Y, P],
          "border-right-width": [Y, P],
          "border-bottom-width": [Y, P],
          "border-left-width": [Y, P],
          "border-spacing": [Y, P],
          "letter-spacing": [Y, P],
          margin: [Y, P],
          "margin-top": [Y, P],
          "margin-right": [Y, P],
          "margin-bottom": [Y, P],
          "margin-left": [Y, P],
          padding: [Y, P],
          "padding-top": [Y, P],
          "padding-right": [Y, P],
          "padding-bottom": [Y, P],
          "padding-left": [Y, P],
          "outline-width": [Y, P],
          opacity: [Y, I],
          top: [Y, R],
          right: [Y, R],
          bottom: [Y, R],
          left: [Y, R],
          "font-size": [Y, R],
          "text-indent": [Y, R],
          "word-spacing": [Y, R],
          width: [Y, R],
          "min-width": [Y, R],
          "max-width": [Y, R],
          height: [Y, R],
          "min-height": [Y, R],
          "max-height": [Y, R],
          "line-height": [Y, H],
          "scroll-top": [Re, I, "scrollTop"],
          "scroll-left": [Re, I, "scrollLeft"],
        },
        ce = {};
      M.transform &&
        ((U.transform = [Ce]),
        (ce = {
          x: [R, "translateX"],
          y: [R, "translateY"],
          rotate: [V],
          rotateX: [V],
          rotateY: [V],
          scale: [I],
          scaleX: [I],
          scaleY: [I],
          skew: [V],
          skewX: [V],
          skewY: [V],
        })),
        M.transform &&
          M.backface &&
          ((ce.z = [R, "translateZ"]),
          (ce.rotateZ = [V]),
          (ce.scaleZ = [I]),
          (ce.perspective = [P]));
      var hr = /ms/,
        At = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var ws = u((xH, Ss) => {
    "use strict";
    var X_ = window.$,
      W_ = Ri() && X_.tram;
    Ss.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        s = r.concat,
        c = n.toString,
        f = n.hasOwnProperty,
        p = r.forEach,
        d = r.map,
        h = r.reduce,
        y = r.reduceRight,
        m = r.filter,
        _ = r.every,
        N = r.some,
        O = r.indexOf,
        x = r.lastIndexOf,
        I = Array.isArray,
        w = Object.keys,
        P = i.bind,
        R =
          (e.each =
          e.forEach =
            function (v, S, q) {
              if (v == null) return v;
              if (p && v.forEach === p) v.forEach(S, q);
              else if (v.length === +v.length) {
                for (var M = 0, B = v.length; M < B; M++)
                  if (S.call(q, v[M], M, v) === t) return;
              } else
                for (var z = e.keys(v), M = 0, B = z.length; M < B; M++)
                  if (S.call(q, v[z[M]], z[M], v) === t) return;
              return v;
            });
      (e.map = e.collect =
        function (v, S, q) {
          var M = [];
          return v == null
            ? M
            : d && v.map === d
            ? v.map(S, q)
            : (R(v, function (B, z, J) {
                M.push(S.call(q, B, z, J));
              }),
              M);
        }),
        (e.find = e.detect =
          function (v, S, q) {
            var M;
            return (
              V(v, function (B, z, J) {
                if (S.call(q, B, z, J)) return (M = B), !0;
              }),
              M
            );
          }),
        (e.filter = e.select =
          function (v, S, q) {
            var M = [];
            return v == null
              ? M
              : m && v.filter === m
              ? v.filter(S, q)
              : (R(v, function (B, z, J) {
                  S.call(q, B, z, J) && M.push(B);
                }),
                M);
          });
      var V =
        (e.some =
        e.any =
          function (v, S, q) {
            S || (S = e.identity);
            var M = !1;
            return v == null
              ? M
              : N && v.some === N
              ? v.some(S, q)
              : (R(v, function (B, z, J) {
                  if (M || (M = S.call(q, B, z, J))) return t;
                }),
                !!M);
          });
      (e.contains = e.include =
        function (v, S) {
          return v == null
            ? !1
            : O && v.indexOf === O
            ? v.indexOf(S) != -1
            : V(v, function (q) {
                return q === S;
              });
        }),
        (e.delay = function (v, S) {
          var q = a.call(arguments, 2);
          return setTimeout(function () {
            return v.apply(null, q);
          }, S);
        }),
        (e.defer = function (v) {
          return e.delay.apply(e, [v, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (v) {
          var S, q, M;
          return function () {
            S ||
              ((S = !0),
              (q = arguments),
              (M = this),
              W_.frame(function () {
                (S = !1), v.apply(M, q);
              }));
          };
        }),
        (e.debounce = function (v, S, q) {
          var M,
            B,
            z,
            J,
            le,
            Fe = function () {
              var ve = e.now() - J;
              ve < S
                ? (M = setTimeout(Fe, S - ve))
                : ((M = null), q || ((le = v.apply(z, B)), (z = B = null)));
            };
          return function () {
            (z = this), (B = arguments), (J = e.now());
            var ve = q && !M;
            return (
              M || (M = setTimeout(Fe, S)),
              ve && ((le = v.apply(z, B)), (z = B = null)),
              le
            );
          };
        }),
        (e.defaults = function (v) {
          if (!e.isObject(v)) return v;
          for (var S = 1, q = arguments.length; S < q; S++) {
            var M = arguments[S];
            for (var B in M) v[B] === void 0 && (v[B] = M[B]);
          }
          return v;
        }),
        (e.keys = function (v) {
          if (!e.isObject(v)) return [];
          if (w) return w(v);
          var S = [];
          for (var q in v) e.has(v, q) && S.push(q);
          return S;
        }),
        (e.has = function (v, S) {
          return f.call(v, S);
        }),
        (e.isObject = function (v) {
          return v === Object(v);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var H = /(.)^/,
        X = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        k = /\\|'|\r|\n|\u2028|\u2029/g,
        D = function (v) {
          return "\\" + X[v];
        },
        A = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (v, S, q) {
          !S && q && (S = q), (S = e.defaults({}, S, e.templateSettings));
          var M = RegExp(
              [
                (S.escape || H).source,
                (S.interpolate || H).source,
                (S.evaluate || H).source,
              ].join("|") + "|$",
              "g"
            ),
            B = 0,
            z = "__p+='";
          v.replace(M, function (ve, Y, ee, Re, Ce) {
            return (
              (z += v.slice(B, Ce).replace(k, D)),
              (B = Ce + ve.length),
              Y
                ? (z +=
                    `'+
((__t=(` +
                    Y +
                    `))==null?'':_.escape(__t))+
'`)
                : ee
                ? (z +=
                    `'+
((__t=(` +
                    ee +
                    `))==null?'':__t)+
'`)
                : Re &&
                  (z +=
                    `';
` +
                    Re +
                    `
__p+='`),
              ve
            );
          }),
            (z += `';
`);
          var J = S.variable;
          if (J) {
            if (!A.test(J))
              throw new Error("variable is not a bare identifier: " + J);
          } else
            (z =
              `with(obj||{}){
` +
              z +
              `}
`),
              (J = "obj");
          z =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            z +
            `return __p;
`;
          var le;
          try {
            le = new Function(S.variable || "obj", "_", z);
          } catch (ve) {
            throw ((ve.source = z), ve);
          }
          var Fe = function (ve) {
            return le.call(this, ve, e);
          };
          return (
            (Fe.source =
              "function(" +
              J +
              `){
` +
              z +
              "}"),
            Fe
          );
        }),
        e
      );
    })();
  });
  var We = u((SH, Ds) => {
    "use strict";
    var ie = {},
      Ft = {},
      Gt = [],
      Ni = window.Webflow || [],
      vt = window.jQuery,
      Xe = vt(window),
      k_ = vt(document),
      Ze = vt.isFunction,
      He = (ie._ = ws()),
      Cs = (ie.tram = Ri() && vt.tram),
      on = !1,
      Li = !1;
    Cs.config.hideBackface = !1;
    Cs.config.keepInherited = !0;
    ie.define = function (e, t, r) {
      Ft[e] && Ls(Ft[e]);
      var n = (Ft[e] = t(vt, He, r) || {});
      return Ns(n), n;
    };
    ie.require = function (e) {
      return Ft[e];
    };
    function Ns(e) {
      ie.env() &&
        (Ze(e.design) && Xe.on("__wf_design", e.design),
        Ze(e.preview) && Xe.on("__wf_preview", e.preview)),
        Ze(e.destroy) && Xe.on("__wf_destroy", e.destroy),
        e.ready && Ze(e.ready) && B_(e);
    }
    function B_(e) {
      if (on) {
        e.ready();
        return;
      }
      He.contains(Gt, e.ready) || Gt.push(e.ready);
    }
    function Ls(e) {
      Ze(e.design) && Xe.off("__wf_design", e.design),
        Ze(e.preview) && Xe.off("__wf_preview", e.preview),
        Ze(e.destroy) && Xe.off("__wf_destroy", e.destroy),
        e.ready && Ze(e.ready) && j_(e);
    }
    function j_(e) {
      Gt = He.filter(Gt, function (t) {
        return t !== e.ready;
      });
    }
    ie.push = function (e) {
      if (on) {
        Ze(e) && e();
        return;
      }
      Ni.push(e);
    };
    ie.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var nn = navigator.userAgent.toLowerCase(),
      Ps = (ie.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      z_ = (ie.env.chrome =
        /chrome/.test(nn) &&
        /Google/.test(navigator.vendor) &&
        parseInt(nn.match(/chrome\/(\d+)\./)[1], 10)),
      K_ = (ie.env.ios = /(ipod|iphone|ipad)/.test(nn));
    ie.env.safari = /safari/.test(nn) && !z_ && !K_;
    var Ci;
    Ps &&
      k_.on("touchstart mousedown", function (e) {
        Ci = e.target;
      });
    ie.validClick = Ps
      ? function (e) {
          return e === Ci || vt.contains(e, Ci);
        }
      : function () {
          return !0;
        };
    var qs = "resize.webflow orientationchange.webflow load.webflow",
      Y_ = "scroll.webflow " + qs;
    ie.resize = Pi(Xe, qs);
    ie.scroll = Pi(Xe, Y_);
    ie.redraw = Pi();
    function Pi(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = He.throttle(function (i) {
          He.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (He.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = He.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    ie.location = function (e) {
      window.location = e;
    };
    ie.env() && (ie.location = function () {});
    ie.ready = function () {
      (on = !0), Li ? $_() : He.each(Gt, Rs), He.each(Ni, Rs), ie.resize.up();
    };
    function Rs(e) {
      Ze(e) && e();
    }
    function $_() {
      (Li = !1), He.each(Ft, Ns);
    }
    var xt;
    ie.load = function (e) {
      xt.then(e);
    };
    function Ms() {
      xt && (xt.reject(), Xe.off("load", xt.resolve)),
        (xt = new vt.Deferred()),
        Xe.on("load", xt.resolve);
    }
    ie.destroy = function (e) {
      (e = e || {}),
        (Li = !0),
        Xe.triggerHandler("__wf_destroy"),
        e.domready != null && (on = e.domready),
        He.each(Ft, Ls),
        ie.resize.off(),
        ie.scroll.off(),
        ie.redraw.off(),
        (Gt = []),
        (Ni = []),
        xt.state() === "pending" && Ms();
    };
    vt(ie.ready);
    Ms();
    Ds.exports = window.Webflow = ie;
  });
  var Vs = u((wH, Gs) => {
    "use strict";
    var Fs = We();
    Fs.define(
      "brand",
      (Gs.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          c =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var y = n.attr("data-wf-status"),
            m = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(m) && a.hostname !== m && (y = !0),
            y &&
              !s &&
              ((f = f || d()),
              h(),
              setTimeout(h, 500),
              e(r).off(c, p).on(c, p));
        };
        function p() {
          var y =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(f).attr("style", y ? "display: none !important;" : "");
        }
        function d() {
          var y = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            m = e("<img>")
              .attr("src", "../images/webflow-badge-icon-d2.89e12c322e.svg")
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            _ = e("<img>")
              .attr("src", "../images/webflow-badge-text-d2.c82cec3b78.svg")
              .attr("alt", "Made in Webflow");
          return y.append(m, _), y[0];
        }
        function h() {
          var y = i.children(o),
            m = y.length && y.get(0) === f,
            _ = Fs.env("editor");
          if (m) {
            _ && y.remove();
            return;
          }
          y.length && y.remove(), _ || i.append(f);
        }
        return t;
      })
    );
  });
  var Hs = u((RH, Us) => {
    "use strict";
    var qi = We();
    qi.define(
      "edit",
      (Us.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (qi.env("test") || qi.env("frame")) && !r.fixture && !Q_())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          c,
          f = r.load || h,
          p = !1;
        try {
          p =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        p
          ? f()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            f()
          : i.on(s, d).triggerHandler(s);
        function d() {
          c || (/\?edit/.test(a.hash) && f());
        }
        function h() {
          (c = !0),
            (window.WebflowEditor = !0),
            i.off(s, d),
            x(function (w) {
              e.ajax({
                url: O("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: y(w),
              });
            });
        }
        function y(w) {
          return function (P) {
            if (!P) {
              console.error("Could not load editor data");
              return;
            }
            (P.thirdPartyCookiesSupported = w),
              m(N(P.bugReporterScriptPath), function () {
                m(N(P.scriptPath), function () {
                  window.WebflowEditor(P);
                });
              });
          };
        }
        function m(w, P) {
          e.ajax({ type: "GET", url: w, dataType: "script", cache: !0 }).then(
            P,
            _
          );
        }
        function _(w, P, R) {
          throw (console.error("Could not load editor script: " + P), R);
        }
        function N(w) {
          return w.indexOf("//") >= 0
            ? w
            : O("https://editor-api.webflow.com" + w);
        }
        function O(w) {
          return w.replace(/([^:])\/\//g, "$1/");
        }
        function x(w) {
          var P = window.document.createElement("iframe");
          (P.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (P.style.display = "none"),
            (P.sandbox = "allow-scripts allow-same-origin");
          var R = function (V) {
            V.data === "WF_third_party_cookies_unsupported"
              ? (I(P, R), w(!1))
              : V.data === "WF_third_party_cookies_supported" &&
                (I(P, R), w(!0));
          };
          (P.onerror = function () {
            I(P, R), w(!1);
          }),
            window.addEventListener("message", R, !1),
            window.document.body.appendChild(P);
        }
        function I(w, P) {
          window.removeEventListener("message", P, !1), w.remove();
        }
        return n;
      })
    );
    function Q_() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Ws = u((CH, Xs) => {
    "use strict";
    var Z_ = We();
    Z_.define(
      "focus-visible",
      (Xs.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(I) {
            return !!(
              I &&
              I !== document &&
              I.nodeName !== "HTML" &&
              I.nodeName !== "BODY" &&
              "classList" in I &&
              "contains" in I.classList
            );
          }
          function c(I) {
            var w = I.type,
              P = I.tagName;
            return !!(
              (P === "INPUT" && a[w] && !I.readOnly) ||
              (P === "TEXTAREA" && !I.readOnly) ||
              I.isContentEditable
            );
          }
          function f(I) {
            I.getAttribute("data-wf-focus-visible") ||
              I.setAttribute("data-wf-focus-visible", "true");
          }
          function p(I) {
            I.getAttribute("data-wf-focus-visible") &&
              I.removeAttribute("data-wf-focus-visible");
          }
          function d(I) {
            I.metaKey ||
              I.altKey ||
              I.ctrlKey ||
              (s(r.activeElement) && f(r.activeElement), (n = !0));
          }
          function h() {
            n = !1;
          }
          function y(I) {
            s(I.target) && (n || c(I.target)) && f(I.target);
          }
          function m(I) {
            s(I.target) &&
              I.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              p(I.target));
          }
          function _() {
            document.visibilityState === "hidden" && (i && (n = !0), N());
          }
          function N() {
            document.addEventListener("mousemove", x),
              document.addEventListener("mousedown", x),
              document.addEventListener("mouseup", x),
              document.addEventListener("pointermove", x),
              document.addEventListener("pointerdown", x),
              document.addEventListener("pointerup", x),
              document.addEventListener("touchmove", x),
              document.addEventListener("touchstart", x),
              document.addEventListener("touchend", x);
          }
          function O() {
            document.removeEventListener("mousemove", x),
              document.removeEventListener("mousedown", x),
              document.removeEventListener("mouseup", x),
              document.removeEventListener("pointermove", x),
              document.removeEventListener("pointerdown", x),
              document.removeEventListener("pointerup", x),
              document.removeEventListener("touchmove", x),
              document.removeEventListener("touchstart", x),
              document.removeEventListener("touchend", x);
          }
          function x(I) {
            (I.target.nodeName && I.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), O());
          }
          document.addEventListener("keydown", d, !0),
            document.addEventListener("mousedown", h, !0),
            document.addEventListener("pointerdown", h, !0),
            document.addEventListener("touchstart", h, !0),
            document.addEventListener("visibilitychange", _, !0),
            N(),
            r.addEventListener("focus", y, !0),
            r.addEventListener("blur", m, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var js = u((NH, Bs) => {
    "use strict";
    var ks = We();
    ks.define(
      "focus",
      (Bs.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            c = s.tagName;
          return (
            (/^a$/i.test(c) && s.href != null) ||
            (/^(button|textarea)$/i.test(c) && s.disabled !== !0) ||
            (/^input$/i.test(c) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(c) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(c) ||
            (/^video$/i.test(c) && s.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            ks.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var Ys = u((LH, Ks) => {
    "use strict";
    var Mi = window.jQuery,
      Je = {},
      an = [],
      zs = ".w-ix",
      sn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Mi(t).triggerHandler(Je.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Mi(t).triggerHandler(Je.types.OUTRO));
        },
      };
    Je.triggers = {};
    Je.types = { INTRO: "w-ix-intro" + zs, OUTRO: "w-ix-outro" + zs };
    Je.init = function () {
      for (var e = an.length, t = 0; t < e; t++) {
        var r = an[t];
        r[0](0, r[1]);
      }
      (an = []), Mi.extend(Je.triggers, sn);
    };
    Je.async = function () {
      for (var e in sn) {
        var t = sn[e];
        sn.hasOwnProperty(e) &&
          (Je.triggers[e] = function (r, n) {
            an.push([t, n]);
          });
      }
    };
    Je.async();
    Ks.exports = Je;
  });
  var cn = u((PH, Zs) => {
    "use strict";
    var Di = Ys();
    function $s(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var J_ = window.jQuery,
      un = {},
      Qs = ".w-ix",
      eT = {
        reset: function (e, t) {
          Di.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Di.triggers.intro(e, t), $s(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Di.triggers.outro(e, t), $s(t, "COMPONENT_INACTIVE");
        },
      };
    un.triggers = {};
    un.types = { INTRO: "w-ix-intro" + Qs, OUTRO: "w-ix-outro" + Qs };
    J_.extend(un.triggers, eT);
    Zs.exports = un;
  });
  var Js = u((qH, at) => {
    function Fi(e) {
      return (
        (at.exports = Fi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (at.exports.__esModule = !0),
        (at.exports.default = at.exports),
        Fi(e)
      );
    }
    (at.exports = Fi),
      (at.exports.__esModule = !0),
      (at.exports.default = at.exports);
  });
  var ln = u((MH, Er) => {
    var tT = Js().default;
    function eu(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (eu = function (i) {
        return i ? r : t;
      })(e);
    }
    function rT(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (tT(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = eu(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (Er.exports = rT),
      (Er.exports.__esModule = !0),
      (Er.exports.default = Er.exports);
  });
  var tu = u((DH, mr) => {
    function nT(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (mr.exports = nT),
      (mr.exports.__esModule = !0),
      (mr.exports.default = mr.exports);
  });
  var fe = u((FH, ru) => {
    var fn = function (e) {
      return e && e.Math == Math && e;
    };
    ru.exports =
      fn(typeof globalThis == "object" && globalThis) ||
      fn(typeof window == "object" && window) ||
      fn(typeof self == "object" && self) ||
      fn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Vt = u((GH, nu) => {
    nu.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var St = u((VH, iu) => {
    var iT = Vt();
    iu.exports = !iT(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var dn = u((UH, ou) => {
    var _r = Function.prototype.call;
    ou.exports = _r.bind
      ? _r.bind(_r)
      : function () {
          return _r.apply(_r, arguments);
        };
  });
  var cu = u((uu) => {
    "use strict";
    var au = {}.propertyIsEnumerable,
      su = Object.getOwnPropertyDescriptor,
      oT = su && !au.call({ 1: 2 }, 1);
    uu.f = oT
      ? function (t) {
          var r = su(this, t);
          return !!r && r.enumerable;
        }
      : au;
  });
  var Gi = u((XH, lu) => {
    lu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var ke = u((WH, du) => {
    var fu = Function.prototype,
      Vi = fu.bind,
      Ui = fu.call,
      aT = Vi && Vi.bind(Ui);
    du.exports = Vi
      ? function (e) {
          return e && aT(Ui, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Ui.apply(e, arguments);
            }
          );
        };
  });
  var gu = u((kH, vu) => {
    var pu = ke(),
      sT = pu({}.toString),
      uT = pu("".slice);
    vu.exports = function (e) {
      return uT(sT(e), 8, -1);
    };
  });
  var yu = u((BH, hu) => {
    var cT = fe(),
      lT = ke(),
      fT = Vt(),
      dT = gu(),
      Hi = cT.Object,
      pT = lT("".split);
    hu.exports = fT(function () {
      return !Hi("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return dT(e) == "String" ? pT(e, "") : Hi(e);
        }
      : Hi;
  });
  var Xi = u((jH, Eu) => {
    var vT = fe(),
      gT = vT.TypeError;
    Eu.exports = function (e) {
      if (e == null) throw gT("Can't call method on " + e);
      return e;
    };
  });
  var Tr = u((zH, mu) => {
    var hT = yu(),
      yT = Xi();
    mu.exports = function (e) {
      return hT(yT(e));
    };
  });
  var et = u((KH, _u) => {
    _u.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Ut = u((YH, Tu) => {
    var ET = et();
    Tu.exports = function (e) {
      return typeof e == "object" ? e !== null : ET(e);
    };
  });
  var Ir = u(($H, Iu) => {
    var Wi = fe(),
      mT = et(),
      _T = function (e) {
        return mT(e) ? e : void 0;
      };
    Iu.exports = function (e, t) {
      return arguments.length < 2 ? _T(Wi[e]) : Wi[e] && Wi[e][t];
    };
  });
  var Ou = u((QH, bu) => {
    var TT = ke();
    bu.exports = TT({}.isPrototypeOf);
  });
  var xu = u((ZH, Au) => {
    var IT = Ir();
    Au.exports = IT("navigator", "userAgent") || "";
  });
  var Pu = u((JH, Lu) => {
    var Nu = fe(),
      ki = xu(),
      Su = Nu.process,
      wu = Nu.Deno,
      Ru = (Su && Su.versions) || (wu && wu.version),
      Cu = Ru && Ru.v8,
      Be,
      pn;
    Cu &&
      ((Be = Cu.split(".")),
      (pn = Be[0] > 0 && Be[0] < 4 ? 1 : +(Be[0] + Be[1])));
    !pn &&
      ki &&
      ((Be = ki.match(/Edge\/(\d+)/)),
      (!Be || Be[1] >= 74) &&
        ((Be = ki.match(/Chrome\/(\d+)/)), Be && (pn = +Be[1])));
    Lu.exports = pn;
  });
  var Bi = u((eX, Mu) => {
    var qu = Pu(),
      bT = Vt();
    Mu.exports =
      !!Object.getOwnPropertySymbols &&
      !bT(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && qu && qu < 41)
        );
      });
  });
  var ji = u((tX, Du) => {
    var OT = Bi();
    Du.exports = OT && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var zi = u((rX, Fu) => {
    var AT = fe(),
      xT = Ir(),
      ST = et(),
      wT = Ou(),
      RT = ji(),
      CT = AT.Object;
    Fu.exports = RT
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = xT("Symbol");
          return ST(t) && wT(t.prototype, CT(e));
        };
  });
  var Vu = u((nX, Gu) => {
    var NT = fe(),
      LT = NT.String;
    Gu.exports = function (e) {
      try {
        return LT(e);
      } catch {
        return "Object";
      }
    };
  });
  var Hu = u((iX, Uu) => {
    var PT = fe(),
      qT = et(),
      MT = Vu(),
      DT = PT.TypeError;
    Uu.exports = function (e) {
      if (qT(e)) return e;
      throw DT(MT(e) + " is not a function");
    };
  });
  var Wu = u((oX, Xu) => {
    var FT = Hu();
    Xu.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : FT(r);
    };
  });
  var Bu = u((aX, ku) => {
    var GT = fe(),
      Ki = dn(),
      Yi = et(),
      $i = Ut(),
      VT = GT.TypeError;
    ku.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && Yi((r = e.toString)) && !$i((n = Ki(r, e)))) ||
        (Yi((r = e.valueOf)) && !$i((n = Ki(r, e)))) ||
        (t !== "string" && Yi((r = e.toString)) && !$i((n = Ki(r, e))))
      )
        return n;
      throw VT("Can't convert object to primitive value");
    };
  });
  var zu = u((sX, ju) => {
    ju.exports = !1;
  });
  var vn = u((uX, Yu) => {
    var Ku = fe(),
      UT = Object.defineProperty;
    Yu.exports = function (e, t) {
      try {
        UT(Ku, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        Ku[e] = t;
      }
      return t;
    };
  });
  var gn = u((cX, Qu) => {
    var HT = fe(),
      XT = vn(),
      $u = "__core-js_shared__",
      WT = HT[$u] || XT($u, {});
    Qu.exports = WT;
  });
  var Qi = u((lX, Ju) => {
    var kT = zu(),
      Zu = gn();
    (Ju.exports = function (e, t) {
      return Zu[e] || (Zu[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: kT ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var tc = u((fX, ec) => {
    var BT = fe(),
      jT = Xi(),
      zT = BT.Object;
    ec.exports = function (e) {
      return zT(jT(e));
    };
  });
  var gt = u((dX, rc) => {
    var KT = ke(),
      YT = tc(),
      $T = KT({}.hasOwnProperty);
    rc.exports =
      Object.hasOwn ||
      function (t, r) {
        return $T(YT(t), r);
      };
  });
  var Zi = u((pX, nc) => {
    var QT = ke(),
      ZT = 0,
      JT = Math.random(),
      eI = QT((1).toString);
    nc.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + eI(++ZT + JT, 36);
    };
  });
  var Ji = u((vX, uc) => {
    var tI = fe(),
      rI = Qi(),
      ic = gt(),
      nI = Zi(),
      oc = Bi(),
      sc = ji(),
      Ht = rI("wks"),
      wt = tI.Symbol,
      ac = wt && wt.for,
      iI = sc ? wt : (wt && wt.withoutSetter) || nI;
    uc.exports = function (e) {
      if (!ic(Ht, e) || !(oc || typeof Ht[e] == "string")) {
        var t = "Symbol." + e;
        oc && ic(wt, e)
          ? (Ht[e] = wt[e])
          : sc && ac
          ? (Ht[e] = ac(t))
          : (Ht[e] = iI(t));
      }
      return Ht[e];
    };
  });
  var dc = u((gX, fc) => {
    var oI = fe(),
      aI = dn(),
      cc = Ut(),
      lc = zi(),
      sI = Wu(),
      uI = Bu(),
      cI = Ji(),
      lI = oI.TypeError,
      fI = cI("toPrimitive");
    fc.exports = function (e, t) {
      if (!cc(e) || lc(e)) return e;
      var r = sI(e, fI),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = aI(r, e, t)), !cc(n) || lc(n))
        )
          return n;
        throw lI("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), uI(e, t);
    };
  });
  var eo = u((hX, pc) => {
    var dI = dc(),
      pI = zi();
    pc.exports = function (e) {
      var t = dI(e, "string");
      return pI(t) ? t : t + "";
    };
  });
  var ro = u((yX, gc) => {
    var vI = fe(),
      vc = Ut(),
      to = vI.document,
      gI = vc(to) && vc(to.createElement);
    gc.exports = function (e) {
      return gI ? to.createElement(e) : {};
    };
  });
  var no = u((EX, hc) => {
    var hI = St(),
      yI = Vt(),
      EI = ro();
    hc.exports =
      !hI &&
      !yI(function () {
        return (
          Object.defineProperty(EI("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var io = u((Ec) => {
    var mI = St(),
      _I = dn(),
      TI = cu(),
      II = Gi(),
      bI = Tr(),
      OI = eo(),
      AI = gt(),
      xI = no(),
      yc = Object.getOwnPropertyDescriptor;
    Ec.f = mI
      ? yc
      : function (t, r) {
          if (((t = bI(t)), (r = OI(r)), xI))
            try {
              return yc(t, r);
            } catch {}
          if (AI(t, r)) return II(!_I(TI.f, t, r), t[r]);
        };
  });
  var br = u((_X, _c) => {
    var mc = fe(),
      SI = Ut(),
      wI = mc.String,
      RI = mc.TypeError;
    _c.exports = function (e) {
      if (SI(e)) return e;
      throw RI(wI(e) + " is not an object");
    };
  });
  var Or = u((bc) => {
    var CI = fe(),
      NI = St(),
      LI = no(),
      Tc = br(),
      PI = eo(),
      qI = CI.TypeError,
      Ic = Object.defineProperty;
    bc.f = NI
      ? Ic
      : function (t, r, n) {
          if ((Tc(t), (r = PI(r)), Tc(n), LI))
            try {
              return Ic(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw qI("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var hn = u((IX, Oc) => {
    var MI = St(),
      DI = Or(),
      FI = Gi();
    Oc.exports = MI
      ? function (e, t, r) {
          return DI.f(e, t, FI(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var ao = u((bX, Ac) => {
    var GI = ke(),
      VI = et(),
      oo = gn(),
      UI = GI(Function.toString);
    VI(oo.inspectSource) ||
      (oo.inspectSource = function (e) {
        return UI(e);
      });
    Ac.exports = oo.inspectSource;
  });
  var wc = u((OX, Sc) => {
    var HI = fe(),
      XI = et(),
      WI = ao(),
      xc = HI.WeakMap;
    Sc.exports = XI(xc) && /native code/.test(WI(xc));
  });
  var so = u((AX, Cc) => {
    var kI = Qi(),
      BI = Zi(),
      Rc = kI("keys");
    Cc.exports = function (e) {
      return Rc[e] || (Rc[e] = BI(e));
    };
  });
  var yn = u((xX, Nc) => {
    Nc.exports = {};
  });
  var Fc = u((SX, Dc) => {
    var jI = wc(),
      Mc = fe(),
      uo = ke(),
      zI = Ut(),
      KI = hn(),
      co = gt(),
      lo = gn(),
      YI = so(),
      $I = yn(),
      Lc = "Object already initialized",
      po = Mc.TypeError,
      QI = Mc.WeakMap,
      En,
      Ar,
      mn,
      ZI = function (e) {
        return mn(e) ? Ar(e) : En(e, {});
      },
      JI = function (e) {
        return function (t) {
          var r;
          if (!zI(t) || (r = Ar(t)).type !== e)
            throw po("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    jI || lo.state
      ? ((ht = lo.state || (lo.state = new QI())),
        (Pc = uo(ht.get)),
        (fo = uo(ht.has)),
        (qc = uo(ht.set)),
        (En = function (e, t) {
          if (fo(ht, e)) throw new po(Lc);
          return (t.facade = e), qc(ht, e, t), t;
        }),
        (Ar = function (e) {
          return Pc(ht, e) || {};
        }),
        (mn = function (e) {
          return fo(ht, e);
        }))
      : ((Rt = YI("state")),
        ($I[Rt] = !0),
        (En = function (e, t) {
          if (co(e, Rt)) throw new po(Lc);
          return (t.facade = e), KI(e, Rt, t), t;
        }),
        (Ar = function (e) {
          return co(e, Rt) ? e[Rt] : {};
        }),
        (mn = function (e) {
          return co(e, Rt);
        }));
    var ht, Pc, fo, qc, Rt;
    Dc.exports = { set: En, get: Ar, has: mn, enforce: ZI, getterFor: JI };
  });
  var Uc = u((wX, Vc) => {
    var vo = St(),
      eb = gt(),
      Gc = Function.prototype,
      tb = vo && Object.getOwnPropertyDescriptor,
      go = eb(Gc, "name"),
      rb = go && function () {}.name === "something",
      nb = go && (!vo || (vo && tb(Gc, "name").configurable));
    Vc.exports = { EXISTS: go, PROPER: rb, CONFIGURABLE: nb };
  });
  var Bc = u((RX, kc) => {
    var ib = fe(),
      Hc = et(),
      ob = gt(),
      Xc = hn(),
      ab = vn(),
      sb = ao(),
      Wc = Fc(),
      ub = Uc().CONFIGURABLE,
      cb = Wc.get,
      lb = Wc.enforce,
      fb = String(String).split("String");
    (kc.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        c;
      if (
        (Hc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!ob(r, "name") || (ub && r.name !== s)) && Xc(r, "name", s),
          (c = lb(r)),
          c.source || (c.source = fb.join(typeof s == "string" ? s : ""))),
        e === ib)
      ) {
        o ? (e[t] = r) : ab(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : Xc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Hc(this) && cb(this).source) || sb(this);
    });
  });
  var ho = u((CX, jc) => {
    var db = Math.ceil,
      pb = Math.floor;
    jc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? pb : db)(t);
    };
  });
  var Kc = u((NX, zc) => {
    var vb = ho(),
      gb = Math.max,
      hb = Math.min;
    zc.exports = function (e, t) {
      var r = vb(e);
      return r < 0 ? gb(r + t, 0) : hb(r, t);
    };
  });
  var $c = u((LX, Yc) => {
    var yb = ho(),
      Eb = Math.min;
    Yc.exports = function (e) {
      return e > 0 ? Eb(yb(e), 9007199254740991) : 0;
    };
  });
  var Zc = u((PX, Qc) => {
    var mb = $c();
    Qc.exports = function (e) {
      return mb(e.length);
    };
  });
  var yo = u((qX, el) => {
    var _b = Tr(),
      Tb = Kc(),
      Ib = Zc(),
      Jc = function (e) {
        return function (t, r, n) {
          var i = _b(t),
            o = Ib(i),
            a = Tb(n, o),
            s;
          if (e && r != r) {
            for (; o > a; ) if (((s = i[a++]), s != s)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    el.exports = { includes: Jc(!0), indexOf: Jc(!1) };
  });
  var mo = u((MX, rl) => {
    var bb = ke(),
      Eo = gt(),
      Ob = Tr(),
      Ab = yo().indexOf,
      xb = yn(),
      tl = bb([].push);
    rl.exports = function (e, t) {
      var r = Ob(e),
        n = 0,
        i = [],
        o;
      for (o in r) !Eo(xb, o) && Eo(r, o) && tl(i, o);
      for (; t.length > n; ) Eo(r, (o = t[n++])) && (~Ab(i, o) || tl(i, o));
      return i;
    };
  });
  var _n = u((DX, nl) => {
    nl.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var ol = u((il) => {
    var Sb = mo(),
      wb = _n(),
      Rb = wb.concat("length", "prototype");
    il.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return Sb(t, Rb);
      };
  });
  var sl = u((al) => {
    al.f = Object.getOwnPropertySymbols;
  });
  var cl = u((VX, ul) => {
    var Cb = Ir(),
      Nb = ke(),
      Lb = ol(),
      Pb = sl(),
      qb = br(),
      Mb = Nb([].concat);
    ul.exports =
      Cb("Reflect", "ownKeys") ||
      function (t) {
        var r = Lb.f(qb(t)),
          n = Pb.f;
        return n ? Mb(r, n(t)) : r;
      };
  });
  var fl = u((UX, ll) => {
    var Db = gt(),
      Fb = cl(),
      Gb = io(),
      Vb = Or();
    ll.exports = function (e, t) {
      for (var r = Fb(t), n = Vb.f, i = Gb.f, o = 0; o < r.length; o++) {
        var a = r[o];
        Db(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var pl = u((HX, dl) => {
    var Ub = Vt(),
      Hb = et(),
      Xb = /#|\.prototype\./,
      xr = function (e, t) {
        var r = kb[Wb(e)];
        return r == jb ? !0 : r == Bb ? !1 : Hb(t) ? Ub(t) : !!t;
      },
      Wb = (xr.normalize = function (e) {
        return String(e).replace(Xb, ".").toLowerCase();
      }),
      kb = (xr.data = {}),
      Bb = (xr.NATIVE = "N"),
      jb = (xr.POLYFILL = "P");
    dl.exports = xr;
  });
  var gl = u((XX, vl) => {
    var _o = fe(),
      zb = io().f,
      Kb = hn(),
      Yb = Bc(),
      $b = vn(),
      Qb = fl(),
      Zb = pl();
    vl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        s,
        c,
        f,
        p;
      if (
        (n
          ? (a = _o)
          : i
          ? (a = _o[r] || $b(r, {}))
          : (a = (_o[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((f = t[s]),
            e.noTargetGet ? ((p = zb(a, s)), (c = p && p.value)) : (c = a[s]),
            (o = Zb(n ? s : r + (i ? "." : "#") + s, e.forced)),
            !o && c !== void 0)
          ) {
            if (typeof f == typeof c) continue;
            Qb(f, c);
          }
          (e.sham || (c && c.sham)) && Kb(f, "sham", !0), Yb(a, s, f, e);
        }
    };
  });
  var yl = u((WX, hl) => {
    var Jb = mo(),
      eO = _n();
    hl.exports =
      Object.keys ||
      function (t) {
        return Jb(t, eO);
      };
  });
  var ml = u((kX, El) => {
    var tO = St(),
      rO = Or(),
      nO = br(),
      iO = Tr(),
      oO = yl();
    El.exports = tO
      ? Object.defineProperties
      : function (t, r) {
          nO(t);
          for (var n = iO(r), i = oO(r), o = i.length, a = 0, s; o > a; )
            rO.f(t, (s = i[a++]), n[s]);
          return t;
        };
  });
  var Tl = u((BX, _l) => {
    var aO = Ir();
    _l.exports = aO("document", "documentElement");
  });
  var Rl = u((jX, wl) => {
    var sO = br(),
      uO = ml(),
      Il = _n(),
      cO = yn(),
      lO = Tl(),
      fO = ro(),
      dO = so(),
      bl = ">",
      Ol = "<",
      Io = "prototype",
      bo = "script",
      xl = dO("IE_PROTO"),
      To = function () {},
      Sl = function (e) {
        return Ol + bo + bl + e + Ol + "/" + bo + bl;
      },
      Al = function (e) {
        e.write(Sl("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      pO = function () {
        var e = fO("iframe"),
          t = "java" + bo + ":",
          r;
        return (
          (e.style.display = "none"),
          lO.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(Sl("document.F=Object")),
          r.close(),
          r.F
        );
      },
      Tn,
      In = function () {
        try {
          Tn = new ActiveXObject("htmlfile");
        } catch {}
        In =
          typeof document < "u"
            ? document.domain && Tn
              ? Al(Tn)
              : pO()
            : Al(Tn);
        for (var e = Il.length; e--; ) delete In[Io][Il[e]];
        return In();
      };
    cO[xl] = !0;
    wl.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((To[Io] = sO(t)), (n = new To()), (To[Io] = null), (n[xl] = t))
            : (n = In()),
          r === void 0 ? n : uO(n, r)
        );
      };
  });
  var Nl = u((zX, Cl) => {
    var vO = Ji(),
      gO = Rl(),
      hO = Or(),
      Oo = vO("unscopables"),
      Ao = Array.prototype;
    Ao[Oo] == null && hO.f(Ao, Oo, { configurable: !0, value: gO(null) });
    Cl.exports = function (e) {
      Ao[Oo][e] = !0;
    };
  });
  var Ll = u(() => {
    "use strict";
    var yO = gl(),
      EO = yo().includes,
      mO = Nl();
    yO(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return EO(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    mO("includes");
  });
  var ql = u(($X, Pl) => {
    var _O = fe(),
      TO = ke();
    Pl.exports = function (e, t) {
      return TO(_O[e].prototype[t]);
    };
  });
  var Dl = u((QX, Ml) => {
    Ll();
    var IO = ql();
    Ml.exports = IO("Array", "includes");
  });
  var Gl = u((ZX, Fl) => {
    var bO = Dl();
    Fl.exports = bO;
  });
  var Ul = u((JX, Vl) => {
    var OO = Gl();
    Vl.exports = OO;
  });
  var xo = u((e5, Hl) => {
    var AO =
      typeof global == "object" && global && global.Object === Object && global;
    Hl.exports = AO;
  });
  var je = u((t5, Xl) => {
    var xO = xo(),
      SO = typeof self == "object" && self && self.Object === Object && self,
      wO = xO || SO || Function("return this")();
    Xl.exports = wO;
  });
  var Xt = u((r5, Wl) => {
    var RO = je(),
      CO = RO.Symbol;
    Wl.exports = CO;
  });
  var zl = u((n5, jl) => {
    var kl = Xt(),
      Bl = Object.prototype,
      NO = Bl.hasOwnProperty,
      LO = Bl.toString,
      Sr = kl ? kl.toStringTag : void 0;
    function PO(e) {
      var t = NO.call(e, Sr),
        r = e[Sr];
      try {
        e[Sr] = void 0;
        var n = !0;
      } catch {}
      var i = LO.call(e);
      return n && (t ? (e[Sr] = r) : delete e[Sr]), i;
    }
    jl.exports = PO;
  });
  var Yl = u((i5, Kl) => {
    var qO = Object.prototype,
      MO = qO.toString;
    function DO(e) {
      return MO.call(e);
    }
    Kl.exports = DO;
  });
  var yt = u((o5, Zl) => {
    var $l = Xt(),
      FO = zl(),
      GO = Yl(),
      VO = "[object Null]",
      UO = "[object Undefined]",
      Ql = $l ? $l.toStringTag : void 0;
    function HO(e) {
      return e == null
        ? e === void 0
          ? UO
          : VO
        : Ql && Ql in Object(e)
        ? FO(e)
        : GO(e);
    }
    Zl.exports = HO;
  });
  var So = u((a5, Jl) => {
    function XO(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    Jl.exports = XO;
  });
  var wo = u((s5, ef) => {
    var WO = So(),
      kO = WO(Object.getPrototypeOf, Object);
    ef.exports = kO;
  });
  var st = u((u5, tf) => {
    function BO(e) {
      return e != null && typeof e == "object";
    }
    tf.exports = BO;
  });
  var Ro = u((c5, nf) => {
    var jO = yt(),
      zO = wo(),
      KO = st(),
      YO = "[object Object]",
      $O = Function.prototype,
      QO = Object.prototype,
      rf = $O.toString,
      ZO = QO.hasOwnProperty,
      JO = rf.call(Object);
    function eA(e) {
      if (!KO(e) || jO(e) != YO) return !1;
      var t = zO(e);
      if (t === null) return !0;
      var r = ZO.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && rf.call(r) == JO;
    }
    nf.exports = eA;
  });
  var of = u((Co) => {
    "use strict";
    Object.defineProperty(Co, "__esModule", { value: !0 });
    Co.default = tA;
    function tA(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var af = u((Lo, No) => {
    "use strict";
    Object.defineProperty(Lo, "__esModule", { value: !0 });
    var rA = of(),
      nA = iA(rA);
    function iA(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Wt;
    typeof self < "u"
      ? (Wt = self)
      : typeof window < "u"
      ? (Wt = window)
      : typeof global < "u"
      ? (Wt = global)
      : typeof No < "u"
      ? (Wt = No)
      : (Wt = Function("return this")());
    var oA = (0, nA.default)(Wt);
    Lo.default = oA;
  });
  var Po = u((wr) => {
    "use strict";
    wr.__esModule = !0;
    wr.ActionTypes = void 0;
    wr.default = lf;
    var aA = Ro(),
      sA = cf(aA),
      uA = af(),
      sf = cf(uA);
    function cf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var uf = (wr.ActionTypes = { INIT: "@@redux/INIT" });
    function lf(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(lf)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        c = !1;
      function f() {
        s === a && (s = a.slice());
      }
      function p() {
        return o;
      }
      function d(_) {
        if (typeof _ != "function")
          throw new Error("Expected listener to be a function.");
        var N = !0;
        return (
          f(),
          s.push(_),
          function () {
            if (N) {
              (N = !1), f();
              var x = s.indexOf(_);
              s.splice(x, 1);
            }
          }
        );
      }
      function h(_) {
        if (!(0, sA.default)(_))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof _.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (c) throw new Error("Reducers may not dispatch actions.");
        try {
          (c = !0), (o = i(o, _));
        } finally {
          c = !1;
        }
        for (var N = (a = s), O = 0; O < N.length; O++) N[O]();
        return _;
      }
      function y(_) {
        if (typeof _ != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = _), h({ type: uf.INIT });
      }
      function m() {
        var _,
          N = d;
        return (
          (_ = {
            subscribe: function (x) {
              if (typeof x != "object")
                throw new TypeError("Expected the observer to be an object.");
              function I() {
                x.next && x.next(p());
              }
              I();
              var w = N(I);
              return { unsubscribe: w };
            },
          }),
          (_[sf.default] = function () {
            return this;
          }),
          _
        );
      }
      return (
        h({ type: uf.INIT }),
        (n = { dispatch: h, subscribe: d, getState: p, replaceReducer: y }),
        (n[sf.default] = m),
        n
      );
    }
  });
  var Mo = u((qo) => {
    "use strict";
    qo.__esModule = !0;
    qo.default = cA;
    function cA(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var pf = u((Do) => {
    "use strict";
    Do.__esModule = !0;
    Do.default = vA;
    var ff = Po(),
      lA = Ro(),
      p5 = df(lA),
      fA = Mo(),
      v5 = df(fA);
    function df(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function dA(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function pA(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: ff.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                ff.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function vA(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        pA(r);
      } catch (c) {
        s = c;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          p = arguments[1];
        if (s) throw s;
        if (!1) var d;
        for (var h = !1, y = {}, m = 0; m < o.length; m++) {
          var _ = o[m],
            N = r[_],
            O = f[_],
            x = N(O, p);
          if (typeof x > "u") {
            var I = dA(_, p);
            throw new Error(I);
          }
          (y[_] = x), (h = h || x !== O);
        }
        return h ? y : f;
      };
    }
  });
  var gf = u((Fo) => {
    "use strict";
    Fo.__esModule = !0;
    Fo.default = gA;
    function vf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function gA(e, t) {
      if (typeof e == "function") return vf(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = vf(a, t));
      }
      return n;
    }
  });
  var Vo = u((Go) => {
    "use strict";
    Go.__esModule = !0;
    Go.default = hA;
    function hA() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var hf = u((Uo) => {
    "use strict";
    Uo.__esModule = !0;
    var yA =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Uo.default = TA;
    var EA = Vo(),
      mA = _A(EA);
    function _A(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function TA() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var s = n(i, o, a),
            c = s.dispatch,
            f = [],
            p = {
              getState: s.getState,
              dispatch: function (h) {
                return c(h);
              },
            };
          return (
            (f = t.map(function (d) {
              return d(p);
            })),
            (c = mA.default.apply(void 0, f)(s.dispatch)),
            yA({}, s, { dispatch: c })
          );
        };
      };
    }
  });
  var Ho = u((Ge) => {
    "use strict";
    Ge.__esModule = !0;
    Ge.compose =
      Ge.applyMiddleware =
      Ge.bindActionCreators =
      Ge.combineReducers =
      Ge.createStore =
        void 0;
    var IA = Po(),
      bA = kt(IA),
      OA = pf(),
      AA = kt(OA),
      xA = gf(),
      SA = kt(xA),
      wA = hf(),
      RA = kt(wA),
      CA = Vo(),
      NA = kt(CA),
      LA = Mo(),
      m5 = kt(LA);
    function kt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Ge.createStore = bA.default;
    Ge.combineReducers = AA.default;
    Ge.bindActionCreators = SA.default;
    Ge.applyMiddleware = RA.default;
    Ge.compose = NA.default;
  });
  var ze,
    Xo,
    tt,
    PA,
    qA,
    bn,
    MA,
    Wo = ue(() => {
      "use strict";
      (ze = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (Xo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (tt = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (PA = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (qA = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (bn = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (MA = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var Pe,
    DA,
    On = ue(() => {
      "use strict";
      (Pe = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (DA = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var FA,
    yf = ue(() => {
      "use strict";
      FA = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var GA,
    VA,
    UA,
    HA,
    XA,
    WA,
    kA,
    ko,
    Ef = ue(() => {
      "use strict";
      On();
      ({
        TRANSFORM_MOVE: GA,
        TRANSFORM_SCALE: VA,
        TRANSFORM_ROTATE: UA,
        TRANSFORM_SKEW: HA,
        STYLE_SIZE: XA,
        STYLE_FILTER: WA,
        STYLE_FONT_VARIATION: kA,
      } = Pe),
        (ko = {
          [GA]: !0,
          [VA]: !0,
          [UA]: !0,
          [HA]: !0,
          [XA]: !0,
          [WA]: !0,
          [kA]: !0,
        });
    });
  var ye = {};
  Le(ye, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => sx,
    IX2_ANIMATION_FRAME_CHANGED: () => tx,
    IX2_CLEAR_REQUESTED: () => ZA,
    IX2_ELEMENT_STATE_CHANGED: () => ax,
    IX2_EVENT_LISTENER_ADDED: () => JA,
    IX2_EVENT_STATE_CHANGED: () => ex,
    IX2_INSTANCE_ADDED: () => nx,
    IX2_INSTANCE_REMOVED: () => ox,
    IX2_INSTANCE_STARTED: () => ix,
    IX2_MEDIA_QUERIES_DEFINED: () => cx,
    IX2_PARAMETER_CHANGED: () => rx,
    IX2_PLAYBACK_REQUESTED: () => $A,
    IX2_PREVIEW_REQUESTED: () => YA,
    IX2_RAW_DATA_IMPORTED: () => BA,
    IX2_SESSION_INITIALIZED: () => jA,
    IX2_SESSION_STARTED: () => zA,
    IX2_SESSION_STOPPED: () => KA,
    IX2_STOP_REQUESTED: () => QA,
    IX2_TEST_FRAME_RENDERED: () => lx,
    IX2_VIEWPORT_WIDTH_CHANGED: () => ux,
  });
  var BA,
    jA,
    zA,
    KA,
    YA,
    $A,
    QA,
    ZA,
    JA,
    ex,
    tx,
    rx,
    nx,
    ix,
    ox,
    ax,
    sx,
    ux,
    cx,
    lx,
    mf = ue(() => {
      "use strict";
      (BA = "IX2_RAW_DATA_IMPORTED"),
        (jA = "IX2_SESSION_INITIALIZED"),
        (zA = "IX2_SESSION_STARTED"),
        (KA = "IX2_SESSION_STOPPED"),
        (YA = "IX2_PREVIEW_REQUESTED"),
        ($A = "IX2_PLAYBACK_REQUESTED"),
        (QA = "IX2_STOP_REQUESTED"),
        (ZA = "IX2_CLEAR_REQUESTED"),
        (JA = "IX2_EVENT_LISTENER_ADDED"),
        (ex = "IX2_EVENT_STATE_CHANGED"),
        (tx = "IX2_ANIMATION_FRAME_CHANGED"),
        (rx = "IX2_PARAMETER_CHANGED"),
        (nx = "IX2_INSTANCE_ADDED"),
        (ix = "IX2_INSTANCE_STARTED"),
        (ox = "IX2_INSTANCE_REMOVED"),
        (ax = "IX2_ELEMENT_STATE_CHANGED"),
        (sx = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (ux = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (cx = "IX2_MEDIA_QUERIES_DEFINED"),
        (lx = "IX2_TEST_FRAME_RENDERED");
    });
  var be = {};
  Le(be, {
    ABSTRACT_NODE: () => uS,
    AUTO: () => Qx,
    BACKGROUND: () => Bx,
    BACKGROUND_COLOR: () => kx,
    BAR_DELIMITER: () => eS,
    BORDER_COLOR: () => jx,
    BOUNDARY_SELECTOR: () => gx,
    CHILDREN: () => tS,
    COLON_DELIMITER: () => Jx,
    COLOR: () => zx,
    COMMA_DELIMITER: () => Zx,
    CONFIG_UNIT: () => bx,
    CONFIG_VALUE: () => mx,
    CONFIG_X_UNIT: () => _x,
    CONFIG_X_VALUE: () => hx,
    CONFIG_Y_UNIT: () => Tx,
    CONFIG_Y_VALUE: () => yx,
    CONFIG_Z_UNIT: () => Ix,
    CONFIG_Z_VALUE: () => Ex,
    DISPLAY: () => Kx,
    FILTER: () => Ux,
    FLEX: () => Yx,
    FONT_VARIATION_SETTINGS: () => Hx,
    HEIGHT: () => Wx,
    HTML_ELEMENT: () => aS,
    IMMEDIATE_CHILDREN: () => rS,
    IX2_ID_DELIMITER: () => fx,
    OPACITY: () => Vx,
    PARENT: () => iS,
    PLAIN_OBJECT: () => sS,
    PRESERVE_3D: () => oS,
    RENDER_GENERAL: () => lS,
    RENDER_PLUGIN: () => dS,
    RENDER_STYLE: () => fS,
    RENDER_TRANSFORM: () => cS,
    ROTATE_X: () => Px,
    ROTATE_Y: () => qx,
    ROTATE_Z: () => Mx,
    SCALE_3D: () => Lx,
    SCALE_X: () => Rx,
    SCALE_Y: () => Cx,
    SCALE_Z: () => Nx,
    SIBLINGS: () => nS,
    SKEW: () => Dx,
    SKEW_X: () => Fx,
    SKEW_Y: () => Gx,
    TRANSFORM: () => Ox,
    TRANSLATE_3D: () => wx,
    TRANSLATE_X: () => Ax,
    TRANSLATE_Y: () => xx,
    TRANSLATE_Z: () => Sx,
    WF_PAGE: () => dx,
    WIDTH: () => Xx,
    WILL_CHANGE: () => $x,
    W_MOD_IX: () => vx,
    W_MOD_JS: () => px,
  });
  var fx,
    dx,
    px,
    vx,
    gx,
    hx,
    yx,
    Ex,
    mx,
    _x,
    Tx,
    Ix,
    bx,
    Ox,
    Ax,
    xx,
    Sx,
    wx,
    Rx,
    Cx,
    Nx,
    Lx,
    Px,
    qx,
    Mx,
    Dx,
    Fx,
    Gx,
    Vx,
    Ux,
    Hx,
    Xx,
    Wx,
    kx,
    Bx,
    jx,
    zx,
    Kx,
    Yx,
    $x,
    Qx,
    Zx,
    Jx,
    eS,
    tS,
    rS,
    nS,
    iS,
    oS,
    aS,
    sS,
    uS,
    cS,
    lS,
    fS,
    dS,
    _f = ue(() => {
      "use strict";
      (fx = "|"),
        (dx = "data-wf-page"),
        (px = "w-mod-js"),
        (vx = "w-mod-ix"),
        (gx = ".w-dyn-item"),
        (hx = "xValue"),
        (yx = "yValue"),
        (Ex = "zValue"),
        (mx = "value"),
        (_x = "xUnit"),
        (Tx = "yUnit"),
        (Ix = "zUnit"),
        (bx = "unit"),
        (Ox = "transform"),
        (Ax = "translateX"),
        (xx = "translateY"),
        (Sx = "translateZ"),
        (wx = "translate3d"),
        (Rx = "scaleX"),
        (Cx = "scaleY"),
        (Nx = "scaleZ"),
        (Lx = "scale3d"),
        (Px = "rotateX"),
        (qx = "rotateY"),
        (Mx = "rotateZ"),
        (Dx = "skew"),
        (Fx = "skewX"),
        (Gx = "skewY"),
        (Vx = "opacity"),
        (Ux = "filter"),
        (Hx = "font-variation-settings"),
        (Xx = "width"),
        (Wx = "height"),
        (kx = "backgroundColor"),
        (Bx = "background"),
        (jx = "borderColor"),
        (zx = "color"),
        (Kx = "display"),
        (Yx = "flex"),
        ($x = "willChange"),
        (Qx = "AUTO"),
        (Zx = ","),
        (Jx = ":"),
        (eS = "|"),
        (tS = "CHILDREN"),
        (rS = "IMMEDIATE_CHILDREN"),
        (nS = "SIBLINGS"),
        (iS = "PARENT"),
        (oS = "preserve-3d"),
        (aS = "HTML_ELEMENT"),
        (sS = "PLAIN_OBJECT"),
        (uS = "ABSTRACT_NODE"),
        (cS = "RENDER_TRANSFORM"),
        (lS = "RENDER_GENERAL"),
        (fS = "RENDER_STYLE"),
        (dS = "RENDER_PLUGIN");
    });
  var Tf = {};
  Le(Tf, {
    ActionAppliesTo: () => DA,
    ActionTypeConsts: () => Pe,
    EventAppliesTo: () => Xo,
    EventBasedOn: () => tt,
    EventContinuousMouseAxes: () => PA,
    EventLimitAffectedElements: () => qA,
    EventTypeConsts: () => ze,
    IX2EngineActionTypes: () => ye,
    IX2EngineConstants: () => be,
    InteractionTypeConsts: () => FA,
    QuickEffectDirectionConsts: () => MA,
    QuickEffectIds: () => bn,
    ReducedMotionTypes: () => ko,
  });
  var qe = ue(() => {
    "use strict";
    Wo();
    On();
    yf();
    Ef();
    mf();
    _f();
    On();
    Wo();
  });
  var pS,
    If,
    bf = ue(() => {
      "use strict";
      qe();
      ({ IX2_RAW_DATA_IMPORTED: pS } = ye),
        (If = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case pS:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Bt = u((pe) => {
    "use strict";
    Object.defineProperty(pe, "__esModule", { value: !0 });
    var vS =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    pe.clone = xn;
    pe.addLast = xf;
    pe.addFirst = Sf;
    pe.removeLast = wf;
    pe.removeFirst = Rf;
    pe.insert = Cf;
    pe.removeAt = Nf;
    pe.replaceAt = Lf;
    pe.getIn = Sn;
    pe.set = wn;
    pe.setIn = Rn;
    pe.update = qf;
    pe.updateIn = Mf;
    pe.merge = Df;
    pe.mergeDeep = Ff;
    pe.mergeIn = Gf;
    pe.omit = Vf;
    pe.addDefaults = Uf;
    var Of = "INVALID_ARGS";
    function Af(e) {
      throw new Error(e);
    }
    function Bo(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var gS = {}.hasOwnProperty;
    function xn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = Bo(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function Me(e, t, r) {
      var n = r;
      n == null && Af(Of);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var c = 0; c < a.length; c++) {
        var f = a[c];
        if (f != null) {
          var p = Bo(f);
          if (p.length)
            for (var d = 0; d <= p.length; d++) {
              var h = p[d];
              if (!(e && n[h] !== void 0)) {
                var y = f[h];
                t && An(n[h]) && An(y) && (y = Me(e, t, n[h], y)),
                  !(y === void 0 || y === n[h]) &&
                    (i || ((i = !0), (n = xn(n))), (n[h] = y));
              }
            }
        }
      }
      return n;
    }
    function An(e) {
      var t = typeof e > "u" ? "undefined" : vS(e);
      return e != null && (t === "object" || t === "function");
    }
    function xf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Sf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function wf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Rf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Cf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Nf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Lf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function Sn(e, t) {
      if ((!Array.isArray(t) && Af(Of), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function wn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = xn(i);
      return (o[t] = r), o;
    }
    function Pf(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          An(e) && An(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = Pf(a, t, r, n + 1);
      }
      return wn(e, o, i);
    }
    function Rn(e, t, r) {
      return t.length ? Pf(e, t, r, 0) : r;
    }
    function qf(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return wn(e, t, i);
    }
    function Mf(e, t, r) {
      var n = Sn(e, t),
        i = r(n);
      return Rn(e, t, i);
    }
    function Df(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Me.call.apply(Me, [null, !1, !1, e, t, r, n, i, o].concat(s))
        : Me(!1, !1, e, t, r, n, i, o);
    }
    function Ff(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Me.call.apply(Me, [null, !1, !0, e, t, r, n, i, o].concat(s))
        : Me(!1, !0, e, t, r, n, i, o);
    }
    function Gf(e, t, r, n, i, o, a) {
      var s = Sn(e, t);
      s == null && (s = {});
      for (
        var c = void 0,
          f = arguments.length,
          p = Array(f > 7 ? f - 7 : 0),
          d = 7;
        d < f;
        d++
      )
        p[d - 7] = arguments[d];
      return (
        p.length
          ? (c = Me.call.apply(Me, [null, !1, !1, s, r, n, i, o, a].concat(p)))
          : (c = Me(!1, !1, s, r, n, i, o, a)),
        Rn(e, t, c)
      );
    }
    function Vf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (gS.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = Bo(e), s = 0; s < a.length; s++) {
        var c = a[s];
        r.indexOf(c) >= 0 || (o[c] = e[c]);
      }
      return o;
    }
    function Uf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Me.call.apply(Me, [null, !0, !1, e, t, r, n, i, o].concat(s))
        : Me(!0, !1, e, t, r, n, i, o);
    }
    var hS = {
      clone: xn,
      addLast: xf,
      addFirst: Sf,
      removeLast: wf,
      removeFirst: Rf,
      insert: Cf,
      removeAt: Nf,
      replaceAt: Lf,
      getIn: Sn,
      set: wn,
      setIn: Rn,
      update: qf,
      updateIn: Mf,
      merge: Df,
      mergeDeep: Ff,
      mergeIn: Gf,
      omit: Vf,
      addDefaults: Uf,
    };
    pe.default = hS;
  });
  var Xf,
    yS,
    ES,
    mS,
    _S,
    TS,
    Hf,
    Wf,
    kf = ue(() => {
      "use strict";
      qe();
      (Xf = re(Bt())),
        ({
          IX2_PREVIEW_REQUESTED: yS,
          IX2_PLAYBACK_REQUESTED: ES,
          IX2_STOP_REQUESTED: mS,
          IX2_CLEAR_REQUESTED: _S,
        } = ye),
        (TS = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (Hf = Object.create(null, {
          [yS]: { value: "preview" },
          [ES]: { value: "playback" },
          [mS]: { value: "stop" },
          [_S]: { value: "clear" },
        })),
        (Wf = (e = TS, t) => {
          if (t.type in Hf) {
            let r = [Hf[t.type]];
            return (0, Xf.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var xe,
    IS,
    bS,
    OS,
    AS,
    xS,
    SS,
    wS,
    RS,
    CS,
    NS,
    Bf,
    LS,
    jf,
    zf = ue(() => {
      "use strict";
      qe();
      (xe = re(Bt())),
        ({
          IX2_SESSION_INITIALIZED: IS,
          IX2_SESSION_STARTED: bS,
          IX2_TEST_FRAME_RENDERED: OS,
          IX2_SESSION_STOPPED: AS,
          IX2_EVENT_LISTENER_ADDED: xS,
          IX2_EVENT_STATE_CHANGED: SS,
          IX2_ANIMATION_FRAME_CHANGED: wS,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: RS,
          IX2_VIEWPORT_WIDTH_CHANGED: CS,
          IX2_MEDIA_QUERIES_DEFINED: NS,
        } = ye),
        (Bf = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (LS = 20),
        (jf = (e = Bf, t) => {
          switch (t.type) {
            case IS: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, xe.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case bS:
              return (0, xe.set)(e, "active", !0);
            case OS: {
              let {
                payload: { step: r = LS },
              } = t;
              return (0, xe.set)(e, "tick", e.tick + r);
            }
            case AS:
              return Bf;
            case wS: {
              let {
                payload: { now: r },
              } = t;
              return (0, xe.set)(e, "tick", r);
            }
            case xS: {
              let r = (0, xe.addLast)(e.eventListeners, t.payload);
              return (0, xe.set)(e, "eventListeners", r);
            }
            case SS: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, xe.setIn)(e, ["eventState", r], n);
            }
            case RS: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, xe.setIn)(e, ["playbackState", r], n);
            }
            case CS: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: s, min: c, max: f } = n[a];
                if (r >= c && r <= f) {
                  o = s;
                  break;
                }
              }
              return (0, xe.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case NS:
              return (0, xe.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var Yf = u((V5, Kf) => {
    function PS() {
      (this.__data__ = []), (this.size = 0);
    }
    Kf.exports = PS;
  });
  var Cn = u((U5, $f) => {
    function qS(e, t) {
      return e === t || (e !== e && t !== t);
    }
    $f.exports = qS;
  });
  var Rr = u((H5, Qf) => {
    var MS = Cn();
    function DS(e, t) {
      for (var r = e.length; r--; ) if (MS(e[r][0], t)) return r;
      return -1;
    }
    Qf.exports = DS;
  });
  var Jf = u((X5, Zf) => {
    var FS = Rr(),
      GS = Array.prototype,
      VS = GS.splice;
    function US(e) {
      var t = this.__data__,
        r = FS(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : VS.call(t, r, 1), --this.size, !0;
    }
    Zf.exports = US;
  });
  var td = u((W5, ed) => {
    var HS = Rr();
    function XS(e) {
      var t = this.__data__,
        r = HS(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    ed.exports = XS;
  });
  var nd = u((k5, rd) => {
    var WS = Rr();
    function kS(e) {
      return WS(this.__data__, e) > -1;
    }
    rd.exports = kS;
  });
  var od = u((B5, id) => {
    var BS = Rr();
    function jS(e, t) {
      var r = this.__data__,
        n = BS(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    id.exports = jS;
  });
  var Cr = u((j5, ad) => {
    var zS = Yf(),
      KS = Jf(),
      YS = td(),
      $S = nd(),
      QS = od();
    function jt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    jt.prototype.clear = zS;
    jt.prototype.delete = KS;
    jt.prototype.get = YS;
    jt.prototype.has = $S;
    jt.prototype.set = QS;
    ad.exports = jt;
  });
  var ud = u((z5, sd) => {
    var ZS = Cr();
    function JS() {
      (this.__data__ = new ZS()), (this.size = 0);
    }
    sd.exports = JS;
  });
  var ld = u((K5, cd) => {
    function ew(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    cd.exports = ew;
  });
  var dd = u((Y5, fd) => {
    function tw(e) {
      return this.__data__.get(e);
    }
    fd.exports = tw;
  });
  var vd = u(($5, pd) => {
    function rw(e) {
      return this.__data__.has(e);
    }
    pd.exports = rw;
  });
  var rt = u((Q5, gd) => {
    function nw(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    gd.exports = nw;
  });
  var jo = u((Z5, hd) => {
    var iw = yt(),
      ow = rt(),
      aw = "[object AsyncFunction]",
      sw = "[object Function]",
      uw = "[object GeneratorFunction]",
      cw = "[object Proxy]";
    function lw(e) {
      if (!ow(e)) return !1;
      var t = iw(e);
      return t == sw || t == uw || t == aw || t == cw;
    }
    hd.exports = lw;
  });
  var Ed = u((J5, yd) => {
    var fw = je(),
      dw = fw["__core-js_shared__"];
    yd.exports = dw;
  });
  var Td = u((eW, _d) => {
    var zo = Ed(),
      md = (function () {
        var e = /[^.]+$/.exec((zo && zo.keys && zo.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function pw(e) {
      return !!md && md in e;
    }
    _d.exports = pw;
  });
  var Ko = u((tW, Id) => {
    var vw = Function.prototype,
      gw = vw.toString;
    function hw(e) {
      if (e != null) {
        try {
          return gw.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Id.exports = hw;
  });
  var Od = u((rW, bd) => {
    var yw = jo(),
      Ew = Td(),
      mw = rt(),
      _w = Ko(),
      Tw = /[\\^$.*+?()[\]{}|]/g,
      Iw = /^\[object .+?Constructor\]$/,
      bw = Function.prototype,
      Ow = Object.prototype,
      Aw = bw.toString,
      xw = Ow.hasOwnProperty,
      Sw = RegExp(
        "^" +
          Aw.call(xw)
            .replace(Tw, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function ww(e) {
      if (!mw(e) || Ew(e)) return !1;
      var t = yw(e) ? Sw : Iw;
      return t.test(_w(e));
    }
    bd.exports = ww;
  });
  var xd = u((nW, Ad) => {
    function Rw(e, t) {
      return e?.[t];
    }
    Ad.exports = Rw;
  });
  var Et = u((iW, Sd) => {
    var Cw = Od(),
      Nw = xd();
    function Lw(e, t) {
      var r = Nw(e, t);
      return Cw(r) ? r : void 0;
    }
    Sd.exports = Lw;
  });
  var Nn = u((oW, wd) => {
    var Pw = Et(),
      qw = je(),
      Mw = Pw(qw, "Map");
    wd.exports = Mw;
  });
  var Nr = u((aW, Rd) => {
    var Dw = Et(),
      Fw = Dw(Object, "create");
    Rd.exports = Fw;
  });
  var Ld = u((sW, Nd) => {
    var Cd = Nr();
    function Gw() {
      (this.__data__ = Cd ? Cd(null) : {}), (this.size = 0);
    }
    Nd.exports = Gw;
  });
  var qd = u((uW, Pd) => {
    function Vw(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Pd.exports = Vw;
  });
  var Dd = u((cW, Md) => {
    var Uw = Nr(),
      Hw = "__lodash_hash_undefined__",
      Xw = Object.prototype,
      Ww = Xw.hasOwnProperty;
    function kw(e) {
      var t = this.__data__;
      if (Uw) {
        var r = t[e];
        return r === Hw ? void 0 : r;
      }
      return Ww.call(t, e) ? t[e] : void 0;
    }
    Md.exports = kw;
  });
  var Gd = u((lW, Fd) => {
    var Bw = Nr(),
      jw = Object.prototype,
      zw = jw.hasOwnProperty;
    function Kw(e) {
      var t = this.__data__;
      return Bw ? t[e] !== void 0 : zw.call(t, e);
    }
    Fd.exports = Kw;
  });
  var Ud = u((fW, Vd) => {
    var Yw = Nr(),
      $w = "__lodash_hash_undefined__";
    function Qw(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = Yw && t === void 0 ? $w : t),
        this
      );
    }
    Vd.exports = Qw;
  });
  var Xd = u((dW, Hd) => {
    var Zw = Ld(),
      Jw = qd(),
      e0 = Dd(),
      t0 = Gd(),
      r0 = Ud();
    function zt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    zt.prototype.clear = Zw;
    zt.prototype.delete = Jw;
    zt.prototype.get = e0;
    zt.prototype.has = t0;
    zt.prototype.set = r0;
    Hd.exports = zt;
  });
  var Bd = u((pW, kd) => {
    var Wd = Xd(),
      n0 = Cr(),
      i0 = Nn();
    function o0() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Wd(),
          map: new (i0 || n0)(),
          string: new Wd(),
        });
    }
    kd.exports = o0;
  });
  var zd = u((vW, jd) => {
    function a0(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    jd.exports = a0;
  });
  var Lr = u((gW, Kd) => {
    var s0 = zd();
    function u0(e, t) {
      var r = e.__data__;
      return s0(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    Kd.exports = u0;
  });
  var $d = u((hW, Yd) => {
    var c0 = Lr();
    function l0(e) {
      var t = c0(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Yd.exports = l0;
  });
  var Zd = u((yW, Qd) => {
    var f0 = Lr();
    function d0(e) {
      return f0(this, e).get(e);
    }
    Qd.exports = d0;
  });
  var ep = u((EW, Jd) => {
    var p0 = Lr();
    function v0(e) {
      return p0(this, e).has(e);
    }
    Jd.exports = v0;
  });
  var rp = u((mW, tp) => {
    var g0 = Lr();
    function h0(e, t) {
      var r = g0(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    tp.exports = h0;
  });
  var Ln = u((_W, np) => {
    var y0 = Bd(),
      E0 = $d(),
      m0 = Zd(),
      _0 = ep(),
      T0 = rp();
    function Kt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Kt.prototype.clear = y0;
    Kt.prototype.delete = E0;
    Kt.prototype.get = m0;
    Kt.prototype.has = _0;
    Kt.prototype.set = T0;
    np.exports = Kt;
  });
  var op = u((TW, ip) => {
    var I0 = Cr(),
      b0 = Nn(),
      O0 = Ln(),
      A0 = 200;
    function x0(e, t) {
      var r = this.__data__;
      if (r instanceof I0) {
        var n = r.__data__;
        if (!b0 || n.length < A0 - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new O0(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    ip.exports = x0;
  });
  var Yo = u((IW, ap) => {
    var S0 = Cr(),
      w0 = ud(),
      R0 = ld(),
      C0 = dd(),
      N0 = vd(),
      L0 = op();
    function Yt(e) {
      var t = (this.__data__ = new S0(e));
      this.size = t.size;
    }
    Yt.prototype.clear = w0;
    Yt.prototype.delete = R0;
    Yt.prototype.get = C0;
    Yt.prototype.has = N0;
    Yt.prototype.set = L0;
    ap.exports = Yt;
  });
  var up = u((bW, sp) => {
    var P0 = "__lodash_hash_undefined__";
    function q0(e) {
      return this.__data__.set(e, P0), this;
    }
    sp.exports = q0;
  });
  var lp = u((OW, cp) => {
    function M0(e) {
      return this.__data__.has(e);
    }
    cp.exports = M0;
  });
  var dp = u((AW, fp) => {
    var D0 = Ln(),
      F0 = up(),
      G0 = lp();
    function Pn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new D0(); ++t < r; ) this.add(e[t]);
    }
    Pn.prototype.add = Pn.prototype.push = F0;
    Pn.prototype.has = G0;
    fp.exports = Pn;
  });
  var vp = u((xW, pp) => {
    function V0(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    pp.exports = V0;
  });
  var hp = u((SW, gp) => {
    function U0(e, t) {
      return e.has(t);
    }
    gp.exports = U0;
  });
  var $o = u((wW, yp) => {
    var H0 = dp(),
      X0 = vp(),
      W0 = hp(),
      k0 = 1,
      B0 = 2;
    function j0(e, t, r, n, i, o) {
      var a = r & k0,
        s = e.length,
        c = t.length;
      if (s != c && !(a && c > s)) return !1;
      var f = o.get(e),
        p = o.get(t);
      if (f && p) return f == t && p == e;
      var d = -1,
        h = !0,
        y = r & B0 ? new H0() : void 0;
      for (o.set(e, t), o.set(t, e); ++d < s; ) {
        var m = e[d],
          _ = t[d];
        if (n) var N = a ? n(_, m, d, t, e, o) : n(m, _, d, e, t, o);
        if (N !== void 0) {
          if (N) continue;
          h = !1;
          break;
        }
        if (y) {
          if (
            !X0(t, function (O, x) {
              if (!W0(y, x) && (m === O || i(m, O, r, n, o))) return y.push(x);
            })
          ) {
            h = !1;
            break;
          }
        } else if (!(m === _ || i(m, _, r, n, o))) {
          h = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), h;
    }
    yp.exports = j0;
  });
  var mp = u((RW, Ep) => {
    var z0 = je(),
      K0 = z0.Uint8Array;
    Ep.exports = K0;
  });
  var Tp = u((CW, _p) => {
    function Y0(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    _p.exports = Y0;
  });
  var bp = u((NW, Ip) => {
    function $0(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Ip.exports = $0;
  });
  var wp = u((LW, Sp) => {
    var Op = Xt(),
      Ap = mp(),
      Q0 = Cn(),
      Z0 = $o(),
      J0 = Tp(),
      eR = bp(),
      tR = 1,
      rR = 2,
      nR = "[object Boolean]",
      iR = "[object Date]",
      oR = "[object Error]",
      aR = "[object Map]",
      sR = "[object Number]",
      uR = "[object RegExp]",
      cR = "[object Set]",
      lR = "[object String]",
      fR = "[object Symbol]",
      dR = "[object ArrayBuffer]",
      pR = "[object DataView]",
      xp = Op ? Op.prototype : void 0,
      Qo = xp ? xp.valueOf : void 0;
    function vR(e, t, r, n, i, o, a) {
      switch (r) {
        case pR:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case dR:
          return !(e.byteLength != t.byteLength || !o(new Ap(e), new Ap(t)));
        case nR:
        case iR:
        case sR:
          return Q0(+e, +t);
        case oR:
          return e.name == t.name && e.message == t.message;
        case uR:
        case lR:
          return e == t + "";
        case aR:
          var s = J0;
        case cR:
          var c = n & tR;
          if ((s || (s = eR), e.size != t.size && !c)) return !1;
          var f = a.get(e);
          if (f) return f == t;
          (n |= rR), a.set(e, t);
          var p = Z0(s(e), s(t), n, i, o, a);
          return a.delete(e), p;
        case fR:
          if (Qo) return Qo.call(e) == Qo.call(t);
      }
      return !1;
    }
    Sp.exports = vR;
  });
  var qn = u((PW, Rp) => {
    function gR(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    Rp.exports = gR;
  });
  var me = u((qW, Cp) => {
    var hR = Array.isArray;
    Cp.exports = hR;
  });
  var Zo = u((MW, Np) => {
    var yR = qn(),
      ER = me();
    function mR(e, t, r) {
      var n = t(e);
      return ER(e) ? n : yR(n, r(e));
    }
    Np.exports = mR;
  });
  var Pp = u((DW, Lp) => {
    function _R(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    Lp.exports = _R;
  });
  var Jo = u((FW, qp) => {
    function TR() {
      return [];
    }
    qp.exports = TR;
  });
  var ea = u((GW, Dp) => {
    var IR = Pp(),
      bR = Jo(),
      OR = Object.prototype,
      AR = OR.propertyIsEnumerable,
      Mp = Object.getOwnPropertySymbols,
      xR = Mp
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                IR(Mp(e), function (t) {
                  return AR.call(e, t);
                }));
          }
        : bR;
    Dp.exports = xR;
  });
  var Gp = u((VW, Fp) => {
    function SR(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Fp.exports = SR;
  });
  var Up = u((UW, Vp) => {
    var wR = yt(),
      RR = st(),
      CR = "[object Arguments]";
    function NR(e) {
      return RR(e) && wR(e) == CR;
    }
    Vp.exports = NR;
  });
  var Pr = u((HW, Wp) => {
    var Hp = Up(),
      LR = st(),
      Xp = Object.prototype,
      PR = Xp.hasOwnProperty,
      qR = Xp.propertyIsEnumerable,
      MR = Hp(
        (function () {
          return arguments;
        })()
      )
        ? Hp
        : function (e) {
            return LR(e) && PR.call(e, "callee") && !qR.call(e, "callee");
          };
    Wp.exports = MR;
  });
  var Bp = u((XW, kp) => {
    function DR() {
      return !1;
    }
    kp.exports = DR;
  });
  var Mn = u((qr, $t) => {
    var FR = je(),
      GR = Bp(),
      Kp = typeof qr == "object" && qr && !qr.nodeType && qr,
      jp = Kp && typeof $t == "object" && $t && !$t.nodeType && $t,
      VR = jp && jp.exports === Kp,
      zp = VR ? FR.Buffer : void 0,
      UR = zp ? zp.isBuffer : void 0,
      HR = UR || GR;
    $t.exports = HR;
  });
  var Dn = u((WW, Yp) => {
    var XR = 9007199254740991,
      WR = /^(?:0|[1-9]\d*)$/;
    function kR(e, t) {
      var r = typeof e;
      return (
        (t = t ?? XR),
        !!t &&
          (r == "number" || (r != "symbol" && WR.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Yp.exports = kR;
  });
  var Fn = u((kW, $p) => {
    var BR = 9007199254740991;
    function jR(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= BR;
    }
    $p.exports = jR;
  });
  var Zp = u((BW, Qp) => {
    var zR = yt(),
      KR = Fn(),
      YR = st(),
      $R = "[object Arguments]",
      QR = "[object Array]",
      ZR = "[object Boolean]",
      JR = "[object Date]",
      eC = "[object Error]",
      tC = "[object Function]",
      rC = "[object Map]",
      nC = "[object Number]",
      iC = "[object Object]",
      oC = "[object RegExp]",
      aC = "[object Set]",
      sC = "[object String]",
      uC = "[object WeakMap]",
      cC = "[object ArrayBuffer]",
      lC = "[object DataView]",
      fC = "[object Float32Array]",
      dC = "[object Float64Array]",
      pC = "[object Int8Array]",
      vC = "[object Int16Array]",
      gC = "[object Int32Array]",
      hC = "[object Uint8Array]",
      yC = "[object Uint8ClampedArray]",
      EC = "[object Uint16Array]",
      mC = "[object Uint32Array]",
      oe = {};
    oe[fC] =
      oe[dC] =
      oe[pC] =
      oe[vC] =
      oe[gC] =
      oe[hC] =
      oe[yC] =
      oe[EC] =
      oe[mC] =
        !0;
    oe[$R] =
      oe[QR] =
      oe[cC] =
      oe[ZR] =
      oe[lC] =
      oe[JR] =
      oe[eC] =
      oe[tC] =
      oe[rC] =
      oe[nC] =
      oe[iC] =
      oe[oC] =
      oe[aC] =
      oe[sC] =
      oe[uC] =
        !1;
    function _C(e) {
      return YR(e) && KR(e.length) && !!oe[zR(e)];
    }
    Qp.exports = _C;
  });
  var ev = u((jW, Jp) => {
    function TC(e) {
      return function (t) {
        return e(t);
      };
    }
    Jp.exports = TC;
  });
  var rv = u((Mr, Qt) => {
    var IC = xo(),
      tv = typeof Mr == "object" && Mr && !Mr.nodeType && Mr,
      Dr = tv && typeof Qt == "object" && Qt && !Qt.nodeType && Qt,
      bC = Dr && Dr.exports === tv,
      ta = bC && IC.process,
      OC = (function () {
        try {
          var e = Dr && Dr.require && Dr.require("util").types;
          return e || (ta && ta.binding && ta.binding("util"));
        } catch {}
      })();
    Qt.exports = OC;
  });
  var Gn = u((zW, ov) => {
    var AC = Zp(),
      xC = ev(),
      nv = rv(),
      iv = nv && nv.isTypedArray,
      SC = iv ? xC(iv) : AC;
    ov.exports = SC;
  });
  var ra = u((KW, av) => {
    var wC = Gp(),
      RC = Pr(),
      CC = me(),
      NC = Mn(),
      LC = Dn(),
      PC = Gn(),
      qC = Object.prototype,
      MC = qC.hasOwnProperty;
    function DC(e, t) {
      var r = CC(e),
        n = !r && RC(e),
        i = !r && !n && NC(e),
        o = !r && !n && !i && PC(e),
        a = r || n || i || o,
        s = a ? wC(e.length, String) : [],
        c = s.length;
      for (var f in e)
        (t || MC.call(e, f)) &&
          !(
            a &&
            (f == "length" ||
              (i && (f == "offset" || f == "parent")) ||
              (o &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              LC(f, c))
          ) &&
          s.push(f);
      return s;
    }
    av.exports = DC;
  });
  var Vn = u((YW, sv) => {
    var FC = Object.prototype;
    function GC(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || FC;
      return e === r;
    }
    sv.exports = GC;
  });
  var cv = u(($W, uv) => {
    var VC = So(),
      UC = VC(Object.keys, Object);
    uv.exports = UC;
  });
  var Un = u((QW, lv) => {
    var HC = Vn(),
      XC = cv(),
      WC = Object.prototype,
      kC = WC.hasOwnProperty;
    function BC(e) {
      if (!HC(e)) return XC(e);
      var t = [];
      for (var r in Object(e)) kC.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    lv.exports = BC;
  });
  var Ct = u((ZW, fv) => {
    var jC = jo(),
      zC = Fn();
    function KC(e) {
      return e != null && zC(e.length) && !jC(e);
    }
    fv.exports = KC;
  });
  var Fr = u((JW, dv) => {
    var YC = ra(),
      $C = Un(),
      QC = Ct();
    function ZC(e) {
      return QC(e) ? YC(e) : $C(e);
    }
    dv.exports = ZC;
  });
  var vv = u((ek, pv) => {
    var JC = Zo(),
      eN = ea(),
      tN = Fr();
    function rN(e) {
      return JC(e, tN, eN);
    }
    pv.exports = rN;
  });
  var yv = u((tk, hv) => {
    var gv = vv(),
      nN = 1,
      iN = Object.prototype,
      oN = iN.hasOwnProperty;
    function aN(e, t, r, n, i, o) {
      var a = r & nN,
        s = gv(e),
        c = s.length,
        f = gv(t),
        p = f.length;
      if (c != p && !a) return !1;
      for (var d = c; d--; ) {
        var h = s[d];
        if (!(a ? h in t : oN.call(t, h))) return !1;
      }
      var y = o.get(e),
        m = o.get(t);
      if (y && m) return y == t && m == e;
      var _ = !0;
      o.set(e, t), o.set(t, e);
      for (var N = a; ++d < c; ) {
        h = s[d];
        var O = e[h],
          x = t[h];
        if (n) var I = a ? n(x, O, h, t, e, o) : n(O, x, h, e, t, o);
        if (!(I === void 0 ? O === x || i(O, x, r, n, o) : I)) {
          _ = !1;
          break;
        }
        N || (N = h == "constructor");
      }
      if (_ && !N) {
        var w = e.constructor,
          P = t.constructor;
        w != P &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof w == "function" &&
            w instanceof w &&
            typeof P == "function" &&
            P instanceof P
          ) &&
          (_ = !1);
      }
      return o.delete(e), o.delete(t), _;
    }
    hv.exports = aN;
  });
  var mv = u((rk, Ev) => {
    var sN = Et(),
      uN = je(),
      cN = sN(uN, "DataView");
    Ev.exports = cN;
  });
  var Tv = u((nk, _v) => {
    var lN = Et(),
      fN = je(),
      dN = lN(fN, "Promise");
    _v.exports = dN;
  });
  var bv = u((ik, Iv) => {
    var pN = Et(),
      vN = je(),
      gN = pN(vN, "Set");
    Iv.exports = gN;
  });
  var na = u((ok, Ov) => {
    var hN = Et(),
      yN = je(),
      EN = hN(yN, "WeakMap");
    Ov.exports = EN;
  });
  var Hn = u((ak, Nv) => {
    var ia = mv(),
      oa = Nn(),
      aa = Tv(),
      sa = bv(),
      ua = na(),
      Cv = yt(),
      Zt = Ko(),
      Av = "[object Map]",
      mN = "[object Object]",
      xv = "[object Promise]",
      Sv = "[object Set]",
      wv = "[object WeakMap]",
      Rv = "[object DataView]",
      _N = Zt(ia),
      TN = Zt(oa),
      IN = Zt(aa),
      bN = Zt(sa),
      ON = Zt(ua),
      Nt = Cv;
    ((ia && Nt(new ia(new ArrayBuffer(1))) != Rv) ||
      (oa && Nt(new oa()) != Av) ||
      (aa && Nt(aa.resolve()) != xv) ||
      (sa && Nt(new sa()) != Sv) ||
      (ua && Nt(new ua()) != wv)) &&
      (Nt = function (e) {
        var t = Cv(e),
          r = t == mN ? e.constructor : void 0,
          n = r ? Zt(r) : "";
        if (n)
          switch (n) {
            case _N:
              return Rv;
            case TN:
              return Av;
            case IN:
              return xv;
            case bN:
              return Sv;
            case ON:
              return wv;
          }
        return t;
      });
    Nv.exports = Nt;
  });
  var Vv = u((sk, Gv) => {
    var ca = Yo(),
      AN = $o(),
      xN = wp(),
      SN = yv(),
      Lv = Hn(),
      Pv = me(),
      qv = Mn(),
      wN = Gn(),
      RN = 1,
      Mv = "[object Arguments]",
      Dv = "[object Array]",
      Xn = "[object Object]",
      CN = Object.prototype,
      Fv = CN.hasOwnProperty;
    function NN(e, t, r, n, i, o) {
      var a = Pv(e),
        s = Pv(t),
        c = a ? Dv : Lv(e),
        f = s ? Dv : Lv(t);
      (c = c == Mv ? Xn : c), (f = f == Mv ? Xn : f);
      var p = c == Xn,
        d = f == Xn,
        h = c == f;
      if (h && qv(e)) {
        if (!qv(t)) return !1;
        (a = !0), (p = !1);
      }
      if (h && !p)
        return (
          o || (o = new ca()),
          a || wN(e) ? AN(e, t, r, n, i, o) : xN(e, t, c, r, n, i, o)
        );
      if (!(r & RN)) {
        var y = p && Fv.call(e, "__wrapped__"),
          m = d && Fv.call(t, "__wrapped__");
        if (y || m) {
          var _ = y ? e.value() : e,
            N = m ? t.value() : t;
          return o || (o = new ca()), i(_, N, r, n, o);
        }
      }
      return h ? (o || (o = new ca()), SN(e, t, r, n, i, o)) : !1;
    }
    Gv.exports = NN;
  });
  var la = u((uk, Xv) => {
    var LN = Vv(),
      Uv = st();
    function Hv(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Uv(e) && !Uv(t))
        ? e !== e && t !== t
        : LN(e, t, r, n, Hv, i);
    }
    Xv.exports = Hv;
  });
  var kv = u((ck, Wv) => {
    var PN = Yo(),
      qN = la(),
      MN = 1,
      DN = 2;
    function FN(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = r[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = r[i];
        var c = s[0],
          f = e[c],
          p = s[1];
        if (a && s[2]) {
          if (f === void 0 && !(c in e)) return !1;
        } else {
          var d = new PN();
          if (n) var h = n(f, p, c, e, t, d);
          if (!(h === void 0 ? qN(p, f, MN | DN, n, d) : h)) return !1;
        }
      }
      return !0;
    }
    Wv.exports = FN;
  });
  var fa = u((lk, Bv) => {
    var GN = rt();
    function VN(e) {
      return e === e && !GN(e);
    }
    Bv.exports = VN;
  });
  var zv = u((fk, jv) => {
    var UN = fa(),
      HN = Fr();
    function XN(e) {
      for (var t = HN(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, UN(i)];
      }
      return t;
    }
    jv.exports = XN;
  });
  var da = u((dk, Kv) => {
    function WN(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Kv.exports = WN;
  });
  var $v = u((pk, Yv) => {
    var kN = kv(),
      BN = zv(),
      jN = da();
    function zN(e) {
      var t = BN(e);
      return t.length == 1 && t[0][2]
        ? jN(t[0][0], t[0][1])
        : function (r) {
            return r === e || kN(r, e, t);
          };
    }
    Yv.exports = zN;
  });
  var Gr = u((vk, Qv) => {
    var KN = yt(),
      YN = st(),
      $N = "[object Symbol]";
    function QN(e) {
      return typeof e == "symbol" || (YN(e) && KN(e) == $N);
    }
    Qv.exports = QN;
  });
  var Wn = u((gk, Zv) => {
    var ZN = me(),
      JN = Gr(),
      eL = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      tL = /^\w*$/;
    function rL(e, t) {
      if (ZN(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        JN(e)
        ? !0
        : tL.test(e) || !eL.test(e) || (t != null && e in Object(t));
    }
    Zv.exports = rL;
  });
  var tg = u((hk, eg) => {
    var Jv = Ln(),
      nL = "Expected a function";
    function pa(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(nL);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (pa.Cache || Jv)()), r;
    }
    pa.Cache = Jv;
    eg.exports = pa;
  });
  var ng = u((yk, rg) => {
    var iL = tg(),
      oL = 500;
    function aL(e) {
      var t = iL(e, function (n) {
          return r.size === oL && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    rg.exports = aL;
  });
  var og = u((Ek, ig) => {
    var sL = ng(),
      uL =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      cL = /\\(\\)?/g,
      lL = sL(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(uL, function (r, n, i, o) {
            t.push(i ? o.replace(cL, "$1") : n || r);
          }),
          t
        );
      });
    ig.exports = lL;
  });
  var va = u((mk, ag) => {
    function fL(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    ag.exports = fL;
  });
  var dg = u((_k, fg) => {
    var sg = Xt(),
      dL = va(),
      pL = me(),
      vL = Gr(),
      gL = 1 / 0,
      ug = sg ? sg.prototype : void 0,
      cg = ug ? ug.toString : void 0;
    function lg(e) {
      if (typeof e == "string") return e;
      if (pL(e)) return dL(e, lg) + "";
      if (vL(e)) return cg ? cg.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -gL ? "-0" : t;
    }
    fg.exports = lg;
  });
  var vg = u((Tk, pg) => {
    var hL = dg();
    function yL(e) {
      return e == null ? "" : hL(e);
    }
    pg.exports = yL;
  });
  var Vr = u((Ik, gg) => {
    var EL = me(),
      mL = Wn(),
      _L = og(),
      TL = vg();
    function IL(e, t) {
      return EL(e) ? e : mL(e, t) ? [e] : _L(TL(e));
    }
    gg.exports = IL;
  });
  var Jt = u((bk, hg) => {
    var bL = Gr(),
      OL = 1 / 0;
    function AL(e) {
      if (typeof e == "string" || bL(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -OL ? "-0" : t;
    }
    hg.exports = AL;
  });
  var kn = u((Ok, yg) => {
    var xL = Vr(),
      SL = Jt();
    function wL(e, t) {
      t = xL(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[SL(t[r++])];
      return r && r == n ? e : void 0;
    }
    yg.exports = wL;
  });
  var Bn = u((Ak, Eg) => {
    var RL = kn();
    function CL(e, t, r) {
      var n = e == null ? void 0 : RL(e, t);
      return n === void 0 ? r : n;
    }
    Eg.exports = CL;
  });
  var _g = u((xk, mg) => {
    function NL(e, t) {
      return e != null && t in Object(e);
    }
    mg.exports = NL;
  });
  var Ig = u((Sk, Tg) => {
    var LL = Vr(),
      PL = Pr(),
      qL = me(),
      ML = Dn(),
      DL = Fn(),
      FL = Jt();
    function GL(e, t, r) {
      t = LL(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = FL(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && DL(i) && ML(a, i) && (qL(e) || PL(e)));
    }
    Tg.exports = GL;
  });
  var Og = u((wk, bg) => {
    var VL = _g(),
      UL = Ig();
    function HL(e, t) {
      return e != null && UL(e, t, VL);
    }
    bg.exports = HL;
  });
  var xg = u((Rk, Ag) => {
    var XL = la(),
      WL = Bn(),
      kL = Og(),
      BL = Wn(),
      jL = fa(),
      zL = da(),
      KL = Jt(),
      YL = 1,
      $L = 2;
    function QL(e, t) {
      return BL(e) && jL(t)
        ? zL(KL(e), t)
        : function (r) {
            var n = WL(r, e);
            return n === void 0 && n === t ? kL(r, e) : XL(t, n, YL | $L);
          };
    }
    Ag.exports = QL;
  });
  var jn = u((Ck, Sg) => {
    function ZL(e) {
      return e;
    }
    Sg.exports = ZL;
  });
  var ga = u((Nk, wg) => {
    function JL(e) {
      return function (t) {
        return t?.[e];
      };
    }
    wg.exports = JL;
  });
  var Cg = u((Lk, Rg) => {
    var eP = kn();
    function tP(e) {
      return function (t) {
        return eP(t, e);
      };
    }
    Rg.exports = tP;
  });
  var Lg = u((Pk, Ng) => {
    var rP = ga(),
      nP = Cg(),
      iP = Wn(),
      oP = Jt();
    function aP(e) {
      return iP(e) ? rP(oP(e)) : nP(e);
    }
    Ng.exports = aP;
  });
  var mt = u((qk, Pg) => {
    var sP = $v(),
      uP = xg(),
      cP = jn(),
      lP = me(),
      fP = Lg();
    function dP(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? cP
        : typeof e == "object"
        ? lP(e)
          ? uP(e[0], e[1])
          : sP(e)
        : fP(e);
    }
    Pg.exports = dP;
  });
  var ha = u((Mk, qg) => {
    var pP = mt(),
      vP = Ct(),
      gP = Fr();
    function hP(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!vP(t)) {
          var o = pP(r, 3);
          (t = gP(t)),
            (r = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    qg.exports = hP;
  });
  var ya = u((Dk, Mg) => {
    function yP(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Mg.exports = yP;
  });
  var Fg = u((Fk, Dg) => {
    var EP = /\s/;
    function mP(e) {
      for (var t = e.length; t-- && EP.test(e.charAt(t)); );
      return t;
    }
    Dg.exports = mP;
  });
  var Vg = u((Gk, Gg) => {
    var _P = Fg(),
      TP = /^\s+/;
    function IP(e) {
      return e && e.slice(0, _P(e) + 1).replace(TP, "");
    }
    Gg.exports = IP;
  });
  var zn = u((Vk, Xg) => {
    var bP = Vg(),
      Ug = rt(),
      OP = Gr(),
      Hg = 0 / 0,
      AP = /^[-+]0x[0-9a-f]+$/i,
      xP = /^0b[01]+$/i,
      SP = /^0o[0-7]+$/i,
      wP = parseInt;
    function RP(e) {
      if (typeof e == "number") return e;
      if (OP(e)) return Hg;
      if (Ug(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Ug(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = bP(e);
      var r = xP.test(e);
      return r || SP.test(e) ? wP(e.slice(2), r ? 2 : 8) : AP.test(e) ? Hg : +e;
    }
    Xg.exports = RP;
  });
  var Bg = u((Uk, kg) => {
    var CP = zn(),
      Wg = 1 / 0,
      NP = 17976931348623157e292;
    function LP(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = CP(e)), e === Wg || e === -Wg)) {
        var t = e < 0 ? -1 : 1;
        return t * NP;
      }
      return e === e ? e : 0;
    }
    kg.exports = LP;
  });
  var Ea = u((Hk, jg) => {
    var PP = Bg();
    function qP(e) {
      var t = PP(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    jg.exports = qP;
  });
  var Kg = u((Xk, zg) => {
    var MP = ya(),
      DP = mt(),
      FP = Ea(),
      GP = Math.max;
    function VP(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : FP(r);
      return i < 0 && (i = GP(n + i, 0)), MP(e, DP(t, 3), i);
    }
    zg.exports = VP;
  });
  var ma = u((Wk, Yg) => {
    var UP = ha(),
      HP = Kg(),
      XP = UP(HP);
    Yg.exports = XP;
  });
  var Zg = {};
  Le(Zg, {
    ELEMENT_MATCHES: () => WP,
    FLEX_PREFIXED: () => _a,
    IS_BROWSER_ENV: () => Ke,
    TRANSFORM_PREFIXED: () => _t,
    TRANSFORM_STYLE_PREFIXED: () => Yn,
    withBrowser: () => Kn,
  });
  var Qg,
    Ke,
    Kn,
    WP,
    _a,
    _t,
    $g,
    Yn,
    $n = ue(() => {
      "use strict";
      (Qg = re(ma())),
        (Ke = typeof window < "u"),
        (Kn = (e, t) => (Ke ? e() : t)),
        (WP = Kn(() =>
          (0, Qg.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (_a = Kn(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (_t = Kn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        ($g = _t.split("transform")[0]),
        (Yn = $g ? $g + "TransformStyle" : "transformStyle");
    });
  var Ta = u((kk, nh) => {
    var kP = 4,
      BP = 0.001,
      jP = 1e-7,
      zP = 10,
      Ur = 11,
      Qn = 1 / (Ur - 1),
      KP = typeof Float32Array == "function";
    function Jg(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function eh(e, t) {
      return 3 * t - 6 * e;
    }
    function th(e) {
      return 3 * e;
    }
    function Zn(e, t, r) {
      return ((Jg(t, r) * e + eh(t, r)) * e + th(t)) * e;
    }
    function rh(e, t, r) {
      return 3 * Jg(t, r) * e * e + 2 * eh(t, r) * e + th(t);
    }
    function YP(e, t, r, n, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (o = Zn(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > jP && ++s < zP);
      return a;
    }
    function $P(e, t, r, n) {
      for (var i = 0; i < kP; ++i) {
        var o = rh(t, r, n);
        if (o === 0) return t;
        var a = Zn(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    nh.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = KP ? new Float32Array(Ur) : new Array(Ur);
      if (t !== r || n !== i)
        for (var a = 0; a < Ur; ++a) o[a] = Zn(a * Qn, t, n);
      function s(c) {
        for (var f = 0, p = 1, d = Ur - 1; p !== d && o[p] <= c; ++p) f += Qn;
        --p;
        var h = (c - o[p]) / (o[p + 1] - o[p]),
          y = f + h * Qn,
          m = rh(y, t, n);
        return m >= BP ? $P(c, y, t, n) : m === 0 ? y : YP(c, f, f + Qn, t, n);
      }
      return function (f) {
        return t === r && n === i
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : Zn(s(f), r, i);
      };
    };
  });
  var Xr = {};
  Le(Xr, {
    bounce: () => Lq,
    bouncePast: () => Pq,
    ease: () => QP,
    easeIn: () => ZP,
    easeInOut: () => eq,
    easeOut: () => JP,
    inBack: () => bq,
    inCirc: () => mq,
    inCubic: () => iq,
    inElastic: () => xq,
    inExpo: () => hq,
    inOutBack: () => Aq,
    inOutCirc: () => Tq,
    inOutCubic: () => aq,
    inOutElastic: () => wq,
    inOutExpo: () => Eq,
    inOutQuad: () => nq,
    inOutQuart: () => cq,
    inOutQuint: () => dq,
    inOutSine: () => gq,
    inQuad: () => tq,
    inQuart: () => sq,
    inQuint: () => lq,
    inSine: () => pq,
    outBack: () => Oq,
    outBounce: () => Iq,
    outCirc: () => _q,
    outCubic: () => oq,
    outElastic: () => Sq,
    outExpo: () => yq,
    outQuad: () => rq,
    outQuart: () => uq,
    outQuint: () => fq,
    outSine: () => vq,
    swingFrom: () => Cq,
    swingFromTo: () => Rq,
    swingTo: () => Nq,
  });
  function tq(e) {
    return Math.pow(e, 2);
  }
  function rq(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function nq(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function iq(e) {
    return Math.pow(e, 3);
  }
  function oq(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function aq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function sq(e) {
    return Math.pow(e, 4);
  }
  function uq(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function cq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function lq(e) {
    return Math.pow(e, 5);
  }
  function fq(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function dq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function pq(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function vq(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function gq(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function hq(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function yq(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function Eq(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function mq(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function _q(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function Tq(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function Iq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function bq(e) {
    let t = ut;
    return e * e * ((t + 1) * e - t);
  }
  function Oq(e) {
    let t = ut;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Aq(e) {
    let t = ut;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function xq(e) {
    let t = ut,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function Sq(e) {
    let t = ut,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function wq(e) {
    let t = ut,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function Rq(e) {
    let t = ut;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Cq(e) {
    let t = ut;
    return e * e * ((t + 1) * e - t);
  }
  function Nq(e) {
    let t = ut;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Lq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Pq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var Hr,
    ut,
    QP,
    ZP,
    JP,
    eq,
    Ia = ue(() => {
      "use strict";
      (Hr = re(Ta())),
        (ut = 1.70158),
        (QP = (0, Hr.default)(0.25, 0.1, 0.25, 1)),
        (ZP = (0, Hr.default)(0.42, 0, 1, 1)),
        (JP = (0, Hr.default)(0, 0, 0.58, 1)),
        (eq = (0, Hr.default)(0.42, 0, 0.58, 1));
    });
  var oh = {};
  Le(oh, {
    applyEasing: () => Mq,
    createBezierEasing: () => qq,
    optimizeFloat: () => Wr,
  });
  function Wr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function qq(e) {
    return (0, ih.default)(...e);
  }
  function Mq(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : Wr(r ? (t > 0 ? r(t) : t) : t > 0 && e && Xr[e] ? Xr[e](t) : t);
  }
  var ih,
    ba = ue(() => {
      "use strict";
      Ia();
      ih = re(Ta());
    });
  var uh = {};
  Le(uh, {
    createElementState: () => sh,
    ixElements: () => Yq,
    mergeActionState: () => Oa,
  });
  function sh(e, t, r, n, i) {
    let o =
      r === Dq ? (0, er.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, er.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function Oa(e, t, r, n, i) {
    let o = Qq(i);
    return (0, er.mergeIn)(e, [t, Kq, r], n, o);
  }
  function Qq(e) {
    let { config: t } = e;
    return $q.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        s = t[o];
      return a != null && s != null && (r[o] = s), r;
    }, {});
  }
  var er,
    jk,
    Dq,
    zk,
    Fq,
    Gq,
    Vq,
    Uq,
    Hq,
    Xq,
    Wq,
    kq,
    Bq,
    jq,
    zq,
    ah,
    Kq,
    Yq,
    $q,
    ch = ue(() => {
      "use strict";
      er = re(Bt());
      qe();
      ({
        HTML_ELEMENT: jk,
        PLAIN_OBJECT: Dq,
        ABSTRACT_NODE: zk,
        CONFIG_X_VALUE: Fq,
        CONFIG_Y_VALUE: Gq,
        CONFIG_Z_VALUE: Vq,
        CONFIG_VALUE: Uq,
        CONFIG_X_UNIT: Hq,
        CONFIG_Y_UNIT: Xq,
        CONFIG_Z_UNIT: Wq,
        CONFIG_UNIT: kq,
      } = be),
        ({
          IX2_SESSION_STOPPED: Bq,
          IX2_INSTANCE_ADDED: jq,
          IX2_ELEMENT_STATE_CHANGED: zq,
        } = ye),
        (ah = {}),
        (Kq = "refState"),
        (Yq = (e = ah, t = {}) => {
          switch (t.type) {
            case Bq:
              return ah;
            case jq: {
              let {
                  elementId: r,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: s } = o,
                c = e;
              return (
                (0, er.getIn)(c, [r, n]) !== n && (c = sh(c, n, a, r, o)),
                Oa(c, r, s, i, o)
              );
            }
            case zq: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return Oa(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      $q = [
        [Fq, Hq],
        [Gq, Xq],
        [Vq, Wq],
        [Uq, kq],
      ];
    });
  var lh = u((_e) => {
    "use strict";
    Object.defineProperty(_e, "__esModule", { value: !0 });
    _e.renderPlugin =
      _e.getPluginOrigin =
      _e.getPluginDuration =
      _e.getPluginDestination =
      _e.getPluginConfig =
      _e.createPluginInstance =
      _e.clearPlugin =
        void 0;
    var Zq = (e) => e.value;
    _e.getPluginConfig = Zq;
    var Jq = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    _e.getPluginDuration = Jq;
    var eM = (e) => e || { value: 0 };
    _e.getPluginOrigin = eM;
    var tM = (e) => ({ value: e.value });
    _e.getPluginDestination = tM;
    var rM = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    _e.createPluginInstance = rM;
    var nM = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    _e.renderPlugin = nM;
    var iM = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    _e.clearPlugin = iM;
  });
  var dh = u((Te) => {
    "use strict";
    Object.defineProperty(Te, "__esModule", { value: !0 });
    Te.renderPlugin =
      Te.getPluginOrigin =
      Te.getPluginDuration =
      Te.getPluginDestination =
      Te.getPluginConfig =
      Te.createPluginInstance =
      Te.clearPlugin =
        void 0;
    var oM = (e) => document.querySelector(`[data-w-id="${e}"]`),
      aM = () => window.Webflow.require("spline"),
      sM = (e, t) => e.filter((r) => !t.includes(r)),
      uM = (e, t) => e.value[t];
    Te.getPluginConfig = uM;
    var cM = () => null;
    Te.getPluginDuration = cM;
    var fh = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      lM = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = sM(n, o);
          return a.length ? a.reduce((c, f) => ((c[f] = fh[f]), c), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = fh[a]), o), {});
      };
    Te.getPluginOrigin = lM;
    var fM = (e) => e.value;
    Te.getPluginDestination = fM;
    var dM = (e, t) => {
      var r, n;
      let i =
        t == null ||
        (r = t.config) === null ||
        r === void 0 ||
        (n = r.target) === null ||
        n === void 0
          ? void 0
          : n.pluginElement;
      return i ? oM(i) : null;
    };
    Te.createPluginInstance = dM;
    var pM = (e, t, r) => {
      let n = aM(),
        i = n.getInstance(e),
        o = r.config.target.objectId,
        a = (s) => {
          if (!s) throw new Error("Invalid spline app passed to renderSpline");
          let c = o && s.findObjectById(o);
          if (!c) return;
          let { PLUGIN_SPLINE: f } = t;
          f.positionX != null && (c.position.x = f.positionX),
            f.positionY != null && (c.position.y = f.positionY),
            f.positionZ != null && (c.position.z = f.positionZ),
            f.rotationX != null && (c.rotation.x = f.rotationX),
            f.rotationY != null && (c.rotation.y = f.rotationY),
            f.rotationZ != null && (c.rotation.z = f.rotationZ),
            f.scaleX != null && (c.scale.x = f.scaleX),
            f.scaleY != null && (c.scale.y = f.scaleY),
            f.scaleZ != null && (c.scale.z = f.scaleZ);
        };
      i ? a(i.spline) : n.setLoadHandler(e, a);
    };
    Te.renderPlugin = pM;
    var vM = () => null;
    Te.clearPlugin = vM;
  });
  var vh = u((Ee) => {
    "use strict";
    Object.defineProperty(Ee, "__esModule", { value: !0 });
    Ee.getPluginOrigin =
      Ee.getPluginDuration =
      Ee.getPluginDestination =
      Ee.getPluginConfig =
      Ee.createPluginInstance =
      Ee.clearPlugin =
        void 0;
    Ee.normalizeColor = ph;
    Ee.renderPlugin = void 0;
    function ph(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase();
      if (o.startsWith("#")) {
        let a = o.substring(1);
        a.length === 3
          ? ((t = parseInt(a[0] + a[0], 16)),
            (r = parseInt(a[1] + a[1], 16)),
            (n = parseInt(a[2] + a[2], 16)))
          : a.length === 6 &&
            ((t = parseInt(a.substring(0, 2), 16)),
            (r = parseInt(a.substring(2, 4), 16)),
            (n = parseInt(a.substring(4, 6), 16)));
      } else if (o.startsWith("rgba")) {
        let a = o.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(a[0], 10)),
          (r = parseInt(a[1], 10)),
          (n = parseInt(a[2], 10)),
          (i = parseFloat(a[3]));
      } else if (o.startsWith("rgb")) {
        let a = o.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(a[0], 10)),
          (r = parseInt(a[1], 10)),
          (n = parseInt(a[2], 10));
      } else if (o.startsWith("hsla")) {
        let a = o.match(/hsla\(([^)]+)\)/)[1].split(","),
          s = parseFloat(a[0]),
          c = parseFloat(a[1].replace("%", "")) / 100,
          f = parseFloat(a[2].replace("%", "")) / 100;
        i = parseFloat(a[3]);
        let p = (1 - Math.abs(2 * f - 1)) * c,
          d = p * (1 - Math.abs(((s / 60) % 2) - 1)),
          h = f - p / 2,
          y,
          m,
          _;
        s >= 0 && s < 60
          ? ((y = p), (m = d), (_ = 0))
          : s >= 60 && s < 120
          ? ((y = d), (m = p), (_ = 0))
          : s >= 120 && s < 180
          ? ((y = 0), (m = p), (_ = d))
          : s >= 180 && s < 240
          ? ((y = 0), (m = d), (_ = p))
          : s >= 240 && s < 300
          ? ((y = d), (m = 0), (_ = p))
          : ((y = p), (m = 0), (_ = d)),
          (t = Math.round((y + h) * 255)),
          (r = Math.round((m + h) * 255)),
          (n = Math.round((_ + h) * 255));
      } else if (o.startsWith("hsl")) {
        let a = o.match(/hsl\(([^)]+)\)/)[1].split(","),
          s = parseFloat(a[0]),
          c = parseFloat(a[1].replace("%", "")) / 100,
          f = parseFloat(a[2].replace("%", "")) / 100,
          p = (1 - Math.abs(2 * f - 1)) * c,
          d = p * (1 - Math.abs(((s / 60) % 2) - 1)),
          h = f - p / 2,
          y,
          m,
          _;
        s >= 0 && s < 60
          ? ((y = p), (m = d), (_ = 0))
          : s >= 60 && s < 120
          ? ((y = d), (m = p), (_ = 0))
          : s >= 120 && s < 180
          ? ((y = 0), (m = p), (_ = d))
          : s >= 180 && s < 240
          ? ((y = 0), (m = d), (_ = p))
          : s >= 240 && s < 300
          ? ((y = d), (m = 0), (_ = p))
          : ((y = p), (m = 0), (_ = d)),
          (t = Math.round((y + h) * 255)),
          (r = Math.round((m + h) * 255)),
          (n = Math.round((_ + h) * 255));
      }
      return (
        (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`,
        { red: t, green: r, blue: n, alpha: i }
      );
    }
    var gM = (e, t) => e.value[t];
    Ee.getPluginConfig = gM;
    var hM = () => null;
    Ee.getPluginDuration = hM;
    var yM = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        i = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(i, 10) };
      if (r.red != null && r.green != null && r.blue != null) return ph(i);
    };
    Ee.getPluginOrigin = yM;
    var EM = (e) => e.value;
    Ee.getPluginDestination = EM;
    var mM = () => null;
    Ee.createPluginInstance = mM;
    var _M = (e, t, r) => {
      let n = r.config.target.objectId,
        i = r.config.value.unit,
        { PLUGIN_VARIABLE: o } = t,
        { size: a, red: s, green: c, blue: f, alpha: p } = o,
        d;
      a != null && (d = a + i),
        s != null &&
          f != null &&
          c != null &&
          p != null &&
          (d = `rgba(${s}, ${c}, ${f}, ${p})`),
        d != null && document.documentElement.style.setProperty(n, d);
    };
    Ee.renderPlugin = _M;
    var TM = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    Ee.clearPlugin = TM;
  });
  var gh = u((Jn) => {
    "use strict";
    var xa = ln().default;
    Object.defineProperty(Jn, "__esModule", { value: !0 });
    Jn.pluginMethodMap = void 0;
    var Aa = (qe(), Qe(Tf)),
      IM = xa(lh()),
      bM = xa(dh()),
      OM = xa(vh()),
      Qk = (Jn.pluginMethodMap = new Map([
        [Aa.ActionTypeConsts.PLUGIN_LOTTIE, { ...IM }],
        [Aa.ActionTypeConsts.PLUGIN_SPLINE, { ...bM }],
        [Aa.ActionTypeConsts.PLUGIN_VARIABLE, { ...OM }],
      ]));
  });
  var hh = {};
  Le(hh, {
    clearPlugin: () => La,
    createPluginInstance: () => xM,
    getPluginConfig: () => wa,
    getPluginDestination: () => Ca,
    getPluginDuration: () => AM,
    getPluginOrigin: () => Ra,
    isPluginType: () => Lt,
    renderPlugin: () => Na,
  });
  function Lt(e) {
    return Sa.pluginMethodMap.has(e);
  }
  var Sa,
    Pt,
    wa,
    Ra,
    AM,
    Ca,
    xM,
    Na,
    La,
    Pa = ue(() => {
      "use strict";
      $n();
      Sa = re(gh());
      (Pt = (e) => (t) => {
        if (!Ke) return () => null;
        let r = Sa.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (wa = Pt("getPluginConfig")),
        (Ra = Pt("getPluginOrigin")),
        (AM = Pt("getPluginDuration")),
        (Ca = Pt("getPluginDestination")),
        (xM = Pt("createPluginInstance")),
        (Na = Pt("renderPlugin")),
        (La = Pt("clearPlugin"));
    });
  var Eh = u((eB, yh) => {
    function SM(e, t) {
      return e == null || e !== e ? t : e;
    }
    yh.exports = SM;
  });
  var _h = u((tB, mh) => {
    function wM(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    mh.exports = wM;
  });
  var Ih = u((rB, Th) => {
    function RM(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
          var c = a[e ? s : ++i];
          if (r(o[c], c, o) === !1) break;
        }
        return t;
      };
    }
    Th.exports = RM;
  });
  var Oh = u((nB, bh) => {
    var CM = Ih(),
      NM = CM();
    bh.exports = NM;
  });
  var qa = u((iB, Ah) => {
    var LM = Oh(),
      PM = Fr();
    function qM(e, t) {
      return e && LM(e, t, PM);
    }
    Ah.exports = qM;
  });
  var Sh = u((oB, xh) => {
    var MM = Ct();
    function DM(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!MM(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    xh.exports = DM;
  });
  var Ma = u((aB, wh) => {
    var FM = qa(),
      GM = Sh(),
      VM = GM(FM);
    wh.exports = VM;
  });
  var Ch = u((sB, Rh) => {
    function UM(e, t, r, n, i) {
      return (
        i(e, function (o, a, s) {
          r = n ? ((n = !1), o) : t(r, o, a, s);
        }),
        r
      );
    }
    Rh.exports = UM;
  });
  var Lh = u((uB, Nh) => {
    var HM = _h(),
      XM = Ma(),
      WM = mt(),
      kM = Ch(),
      BM = me();
    function jM(e, t, r) {
      var n = BM(e) ? HM : kM,
        i = arguments.length < 3;
      return n(e, WM(t, 4), r, i, XM);
    }
    Nh.exports = jM;
  });
  var qh = u((cB, Ph) => {
    var zM = ya(),
      KM = mt(),
      YM = Ea(),
      $M = Math.max,
      QM = Math.min;
    function ZM(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = YM(r)), (i = r < 0 ? $M(n + i, 0) : QM(i, n - 1))),
        zM(e, KM(t, 3), i, !0)
      );
    }
    Ph.exports = ZM;
  });
  var Dh = u((lB, Mh) => {
    var JM = ha(),
      e1 = qh(),
      t1 = JM(e1);
    Mh.exports = t1;
  });
  function Fh(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function n1(e, t) {
    if (Fh(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!r1.call(t, r[i]) || !Fh(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var r1,
    Da,
    Gh = ue(() => {
      "use strict";
      r1 = Object.prototype.hasOwnProperty;
      Da = n1;
    });
  var ty = {};
  Le(ty, {
    cleanupHTMLElement: () => eD,
    clearAllStyles: () => J1,
    clearObjectCache: () => _1,
    getActionListProgress: () => rD,
    getAffectedElements: () => Ha,
    getComputedStyle: () => w1,
    getDestinationValues: () => M1,
    getElementId: () => O1,
    getInstanceId: () => I1,
    getInstanceOrigin: () => N1,
    getItemConfigByKey: () => q1,
    getMaxDurationItemIndex: () => ey,
    getNamespacedParameterId: () => oD,
    getRenderType: () => Qh,
    getStyleProp: () => D1,
    mediaQueriesEqual: () => sD,
    observeStore: () => S1,
    reduceListToGroup: () => nD,
    reifyState: () => A1,
    renderHTMLElement: () => F1,
    shallowEqual: () => Da,
    shouldAllowMediaQuery: () => aD,
    shouldNamespaceEventParameter: () => iD,
    stringifyTarget: () => uD,
  });
  function _1() {
    ei.clear();
  }
  function I1() {
    return "i" + T1++;
  }
  function O1(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + b1++;
  }
  function A1({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, ii.default)(
        e,
        (a, s) => {
          let { eventTypeId: c } = s;
          return a[c] || (a[c] = {}), (a[c][s.id] = s), a;
        },
        {}
      ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function S1({ store: e, select: t, onChange: r, comparator: n = x1 }) {
    let { getState: i, subscribe: o } = e,
      a = o(c),
      s = t(i());
    function c() {
      let f = t(i());
      if (f == null) {
        a();
        return;
      }
      n(f, s) || ((s = f), r(s, e));
    }
    return a;
  }
  function Hh(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function Ha({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (A, v) =>
          A.concat(
            Ha({
              config: { target: v },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: c,
        getChildElements: f,
        getSiblingElements: p,
        matchSelector: d,
        elementContains: h,
        isSiblingNode: y,
      } = i,
      { target: m } = e;
    if (!m) return [];
    let {
      id: _,
      objectId: N,
      selector: O,
      selectorGuids: x,
      appliesTo: I,
      useEventTarget: w,
    } = Hh(m);
    if (N) return [ei.has(N) ? ei.get(N) : ei.set(N, {}).get(N)];
    if (I === Xo.PAGE) {
      let A = a(_);
      return A ? [A] : [];
    }
    let R = (t?.action?.config?.affectedElements ?? {})[_ || O] || {},
      V = !!(R.id || R.selector),
      H,
      X,
      k,
      D = t && s(Hh(t.target));
    if (
      (V
        ? ((H = R.limitAffectedElements), (X = D), (k = s(R)))
        : (X = k = s({ id: _, selector: O, selectorGuids: x })),
      t && w)
    ) {
      let A = r && (k || w === !0) ? [r] : c(D);
      if (k) {
        if (w === y1) return c(k).filter((v) => A.some((S) => h(v, S)));
        if (w === Vh) return c(k).filter((v) => A.some((S) => h(S, v)));
        if (w === Uh) return c(k).filter((v) => A.some((S) => y(S, v)));
      }
      return A;
    }
    return X == null || k == null
      ? []
      : Ke && n
      ? c(k).filter((A) => n.contains(A))
      : H === Vh
      ? c(X, k)
      : H === h1
      ? f(c(X)).filter(d(k))
      : H === Uh
      ? p(c(X)).filter(d(k))
      : c(k);
  }
  function w1({ element: e, actionItem: t }) {
    if (!Ke) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case or:
      case ar:
      case sr:
      case ur:
      case ai:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function N1(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (Lt(a)) return Ra(a)(t[a], n);
    switch (n.actionTypeId) {
      case rr:
      case nr:
      case ir:
      case zr:
        return t[n.actionTypeId] || Xa[n.actionTypeId];
      case Kr:
        return R1(t[n.actionTypeId], n.config.filters);
      case Yr:
        return C1(t[n.actionTypeId], n.config.fontVariations);
      case Kh:
        return { value: (0, ct.default)(parseFloat(o(e, ri)), 1) };
      case or: {
        let s = o(e, nt),
          c = o(e, it),
          f,
          p;
        return (
          n.config.widthUnit === Tt
            ? (f = Xh.test(s) ? parseFloat(s) : parseFloat(r.width))
            : (f = (0, ct.default)(parseFloat(s), parseFloat(r.width))),
          n.config.heightUnit === Tt
            ? (p = Xh.test(c) ? parseFloat(c) : parseFloat(r.height))
            : (p = (0, ct.default)(parseFloat(c), parseFloat(r.height))),
          { widthValue: f, heightValue: p }
        );
      }
      case ar:
      case sr:
      case ur:
        return $1({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case ai:
        return { value: (0, ct.default)(o(e, ni), r.display) };
      case m1:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function M1({ element: e, actionItem: t, elementApi: r }) {
    if (Lt(t.actionTypeId)) return Ca(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case rr:
      case nr:
      case ir:
      case zr: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case or: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: c, heightValue: f } = t.config;
        if (!Ke) return { widthValue: c, heightValue: f };
        if (a === Tt) {
          let p = n(e, nt);
          i(e, nt, ""), (c = o(e, "offsetWidth")), i(e, nt, p);
        }
        if (s === Tt) {
          let p = n(e, it);
          i(e, it, ""), (f = o(e, "offsetHeight")), i(e, it, p);
        }
        return { widthValue: c, heightValue: f };
      }
      case ar:
      case sr:
      case ur: {
        let { rValue: n, gValue: i, bValue: o, aValue: a } = t.config;
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case Kr:
        return t.config.filters.reduce(L1, {});
      case Yr:
        return t.config.fontVariations.reduce(P1, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function Qh(e) {
    if (/^TRANSFORM_/.test(e)) return jh;
    if (/^STYLE_/.test(e)) return Va;
    if (/^GENERAL_/.test(e)) return Ga;
    if (/^PLUGIN_/.test(e)) return zh;
  }
  function D1(e, t) {
    return e === Va ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function F1(e, t, r, n, i, o, a, s, c) {
    switch (s) {
      case jh:
        return X1(e, t, r, i, a);
      case Va:
        return Q1(e, t, r, i, o, a);
      case Ga:
        return Z1(e, i, a);
      case zh: {
        let { actionTypeId: f } = i;
        if (Lt(f)) return Na(f)(c, t, i);
      }
    }
  }
  function X1(e, t, r, n, i) {
    let o = H1.map((s) => {
        let c = Xa[s],
          {
            xValue: f = c.xValue,
            yValue: p = c.yValue,
            zValue: d = c.zValue,
            xUnit: h = "",
            yUnit: y = "",
            zUnit: m = "",
          } = t[s] || {};
        switch (s) {
          case rr:
            return `${a1}(${f}${h}, ${p}${y}, ${d}${m})`;
          case nr:
            return `${s1}(${f}${h}, ${p}${y}, ${d}${m})`;
          case ir:
            return `${u1}(${f}${h}) ${c1}(${p}${y}) ${l1}(${d}${m})`;
          case zr:
            return `${f1}(${f}${h}, ${p}${y})`;
          default:
            return "";
        }
      }).join(" "),
      { setStyle: a } = i;
    qt(e, _t, i), a(e, _t, o), B1(n, r) && a(e, Yn, d1);
  }
  function W1(e, t, r, n) {
    let i = (0, ii.default)(t, (a, s, c) => `${a} ${c}(${s}${U1(c, r)})`, ""),
      { setStyle: o } = n;
    qt(e, kr, n), o(e, kr, i);
  }
  function k1(e, t, r, n) {
    let i = (0, ii.default)(
        t,
        (a, s, c) => (a.push(`"${c}" ${s}`), a),
        []
      ).join(", "),
      { setStyle: o } = n;
    qt(e, Br, n), o(e, Br, i);
  }
  function B1({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === rr && n !== void 0) ||
      (e === nr && n !== void 0) ||
      (e === ir && (t !== void 0 || r !== void 0))
    );
  }
  function Y1(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function $1({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = Ua[t],
      o = n(e, i),
      a = z1.test(o) ? o : r[i],
      s = Y1(K1, a).split(jr);
    return {
      rValue: (0, ct.default)(parseInt(s[0], 10), 255),
      gValue: (0, ct.default)(parseInt(s[1], 10), 255),
      bValue: (0, ct.default)(parseInt(s[2], 10), 255),
      aValue: (0, ct.default)(parseFloat(s[3]), 1),
    };
  }
  function Q1(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case or: {
        let { widthUnit: s = "", heightUnit: c = "" } = n.config,
          { widthValue: f, heightValue: p } = r;
        f !== void 0 && (s === Tt && (s = "px"), qt(e, nt, o), a(e, nt, f + s)),
          p !== void 0 &&
            (c === Tt && (c = "px"), qt(e, it, o), a(e, it, p + c));
        break;
      }
      case Kr: {
        W1(e, r, n.config, o);
        break;
      }
      case Yr: {
        k1(e, r, n.config, o);
        break;
      }
      case ar:
      case sr:
      case ur: {
        let s = Ua[n.actionTypeId],
          c = Math.round(r.rValue),
          f = Math.round(r.gValue),
          p = Math.round(r.bValue),
          d = r.aValue;
        qt(e, s, o),
          a(e, s, d >= 1 ? `rgb(${c},${f},${p})` : `rgba(${c},${f},${p},${d})`);
        break;
      }
      default: {
        let { unit: s = "" } = n.config;
        qt(e, i, o), a(e, i, r.value + s);
        break;
      }
    }
  }
  function Z1(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case ai: {
        let { value: i } = t.config;
        i === p1 && Ke ? n(e, ni, _a) : n(e, ni, i);
        return;
      }
    }
  }
  function qt(e, t, r) {
    if (!Ke) return;
    let n = $h[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, tr);
    if (!a) {
      o(e, tr, n);
      return;
    }
    let s = a.split(jr).map(Yh);
    s.indexOf(n) === -1 && o(e, tr, s.concat(n).join(jr));
  }
  function Zh(e, t, r) {
    if (!Ke) return;
    let n = $h[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, tr);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        tr,
        a
          .split(jr)
          .map(Yh)
          .filter((s) => s !== n)
          .join(jr)
      );
  }
  function J1({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: s } = a.action,
        { actionListId: c } = s,
        f = i[c];
      f && Wh({ actionList: f, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        Wh({ actionList: i[o], elementApi: t });
      });
  }
  function Wh({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        kh({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((s) => {
            kh({ actionGroup: s, event: t, elementApi: r });
          });
        });
  }
  function kh({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        s;
      Lt(o)
        ? (s = (c) => La(o)(c, i))
        : (s = Jh({ effect: tD, actionTypeId: o, elementApi: r })),
        Ha({ config: a, event: t, elementApi: r }).forEach(s);
    });
  }
  function eD(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === or) {
      let { config: a } = t;
      a.widthUnit === Tt && n(e, nt, ""), a.heightUnit === Tt && n(e, it, "");
    }
    i(e, tr) && Jh({ effect: Zh, actionTypeId: o, elementApi: r })(e);
  }
  function tD(e, t, r) {
    let { setStyle: n } = r;
    Zh(e, t, r), n(e, t, ""), t === _t && n(e, Yn, "");
  }
  function ey(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function rD(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      s = 0;
    return (
      r.forEach((c, f) => {
        if (n && f === 0) return;
        let { actionItems: p } = c,
          d = p[ey(p)],
          { config: h, actionTypeId: y } = d;
        i.id === d.id && (s = a + o);
        let m = Qh(y) === Ga ? 0 : h.duration;
        a += h.delay + m;
      }),
      a > 0 ? Wr(s / a) : 0
    );
  }
  function nD({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (s) => (
        o.push((0, oi.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
        s.id === t
      );
    return (
      n && n.some(({ actionItems: s }) => s.some(a)),
      i &&
        i.some((s) => {
          let { continuousActionGroups: c } = s;
          return c.some(({ actionItems: f }) => f.some(a));
        }),
      (0, oi.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function iD(e, { basedOn: t }) {
    return (
      (e === ze.SCROLLING_IN_VIEW && (t === tt.ELEMENT || t == null)) ||
      (e === ze.MOUSE_MOVE && t === tt.ELEMENT)
    );
  }
  function oD(e, t) {
    return e + E1 + t;
  }
  function aD(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function sD(e, t) {
    return Da(e && e.sort(), t && t.sort());
  }
  function uD(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + Fa + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + Fa + r + Fa + n;
  }
  var ct,
    ii,
    ti,
    oi,
    i1,
    o1,
    a1,
    s1,
    u1,
    c1,
    l1,
    f1,
    d1,
    p1,
    ri,
    kr,
    Br,
    nt,
    it,
    Bh,
    v1,
    g1,
    Vh,
    h1,
    Uh,
    y1,
    ni,
    tr,
    Tt,
    jr,
    E1,
    Fa,
    jh,
    Ga,
    Va,
    zh,
    rr,
    nr,
    ir,
    zr,
    Kh,
    Kr,
    Yr,
    or,
    ar,
    sr,
    ur,
    ai,
    m1,
    Yh,
    Ua,
    $h,
    ei,
    T1,
    b1,
    x1,
    Xh,
    R1,
    C1,
    L1,
    P1,
    q1,
    Xa,
    G1,
    V1,
    U1,
    H1,
    j1,
    z1,
    K1,
    Jh,
    ry = ue(() => {
      "use strict";
      (ct = re(Eh())), (ii = re(Lh())), (ti = re(Dh())), (oi = re(Bt()));
      qe();
      Gh();
      ba();
      Pa();
      $n();
      ({
        BACKGROUND: i1,
        TRANSFORM: o1,
        TRANSLATE_3D: a1,
        SCALE_3D: s1,
        ROTATE_X: u1,
        ROTATE_Y: c1,
        ROTATE_Z: l1,
        SKEW: f1,
        PRESERVE_3D: d1,
        FLEX: p1,
        OPACITY: ri,
        FILTER: kr,
        FONT_VARIATION_SETTINGS: Br,
        WIDTH: nt,
        HEIGHT: it,
        BACKGROUND_COLOR: Bh,
        BORDER_COLOR: v1,
        COLOR: g1,
        CHILDREN: Vh,
        IMMEDIATE_CHILDREN: h1,
        SIBLINGS: Uh,
        PARENT: y1,
        DISPLAY: ni,
        WILL_CHANGE: tr,
        AUTO: Tt,
        COMMA_DELIMITER: jr,
        COLON_DELIMITER: E1,
        BAR_DELIMITER: Fa,
        RENDER_TRANSFORM: jh,
        RENDER_GENERAL: Ga,
        RENDER_STYLE: Va,
        RENDER_PLUGIN: zh,
      } = be),
        ({
          TRANSFORM_MOVE: rr,
          TRANSFORM_SCALE: nr,
          TRANSFORM_ROTATE: ir,
          TRANSFORM_SKEW: zr,
          STYLE_OPACITY: Kh,
          STYLE_FILTER: Kr,
          STYLE_FONT_VARIATION: Yr,
          STYLE_SIZE: or,
          STYLE_BACKGROUND_COLOR: ar,
          STYLE_BORDER: sr,
          STYLE_TEXT_COLOR: ur,
          GENERAL_DISPLAY: ai,
          OBJECT_VALUE: m1,
        } = Pe),
        (Yh = (e) => e.trim()),
        (Ua = Object.freeze({ [ar]: Bh, [sr]: v1, [ur]: g1 })),
        ($h = Object.freeze({
          [_t]: o1,
          [Bh]: i1,
          [ri]: ri,
          [kr]: kr,
          [nt]: nt,
          [it]: it,
          [Br]: Br,
        })),
        (ei = new Map());
      T1 = 1;
      b1 = 1;
      x1 = (e, t) => e === t;
      (Xh = /px/),
        (R1 = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = G1[n.type]), r),
            e || {}
          )),
        (C1 = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = V1[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (L1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (P1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (q1 = (e, t, r) => {
          if (Lt(e)) return wa(e)(r, t);
          switch (e) {
            case Kr: {
              let n = (0, ti.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case Yr: {
              let n = (0, ti.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (Xa = {
        [rr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [nr]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [ir]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [zr]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (G1 = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (V1 = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (U1 = (e, t) => {
          let r = (0, ti.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (H1 = Object.keys(Xa));
      (j1 = "\\(([^)]+)\\)"), (z1 = /^rgb/), (K1 = RegExp(`rgba?${j1}`));
      Jh =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case rr:
            case nr:
            case ir:
            case zr:
              e(n, _t, r);
              break;
            case Kr:
              e(n, kr, r);
              break;
            case Yr:
              e(n, Br, r);
              break;
            case Kh:
              e(n, ri, r);
              break;
            case or:
              e(n, nt, r), e(n, it, r);
              break;
            case ar:
            case sr:
            case ur:
              e(n, Ua[t], r);
              break;
            case ai:
              e(n, ni, r);
              break;
          }
        };
    });
  var Mt = u((Se) => {
    "use strict";
    var cr = ln().default;
    Object.defineProperty(Se, "__esModule", { value: !0 });
    Se.IX2VanillaUtils =
      Se.IX2VanillaPlugins =
      Se.IX2ElementsReducer =
      Se.IX2Easings =
      Se.IX2EasingUtils =
      Se.IX2BrowserSupport =
        void 0;
    var cD = cr(($n(), Qe(Zg)));
    Se.IX2BrowserSupport = cD;
    var lD = cr((Ia(), Qe(Xr)));
    Se.IX2Easings = lD;
    var fD = cr((ba(), Qe(oh)));
    Se.IX2EasingUtils = fD;
    var dD = cr((ch(), Qe(uh)));
    Se.IX2ElementsReducer = dD;
    var pD = cr((Pa(), Qe(hh)));
    Se.IX2VanillaPlugins = pD;
    var vD = cr((ry(), Qe(ty)));
    Se.IX2VanillaUtils = vD;
  });
  var ui,
    lt,
    gD,
    hD,
    yD,
    ED,
    mD,
    _D,
    si,
    ny,
    TD,
    ID,
    Wa,
    bD,
    OD,
    AD,
    xD,
    iy,
    oy = ue(() => {
      "use strict";
      qe();
      (ui = re(Mt())),
        (lt = re(Bt())),
        ({
          IX2_RAW_DATA_IMPORTED: gD,
          IX2_SESSION_STOPPED: hD,
          IX2_INSTANCE_ADDED: yD,
          IX2_INSTANCE_STARTED: ED,
          IX2_INSTANCE_REMOVED: mD,
          IX2_ANIMATION_FRAME_CHANGED: _D,
        } = ye),
        ({
          optimizeFloat: si,
          applyEasing: ny,
          createBezierEasing: TD,
        } = ui.IX2EasingUtils),
        ({ RENDER_GENERAL: ID } = be),
        ({
          getItemConfigByKey: Wa,
          getRenderType: bD,
          getStyleProp: OD,
        } = ui.IX2VanillaUtils),
        (AD = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: s,
              actionTypeId: c,
              customEasingFn: f,
              skipMotion: p,
              skipToValue: d,
            } = e,
            { parameters: h } = t.payload,
            y = Math.max(1 - a, 0.01),
            m = h[n];
          m == null && ((y = 1), (m = s));
          let _ = Math.max(m, 0) || 0,
            N = si(_ - r),
            O = p ? d : si(r + N * y),
            x = O * 100;
          if (O === r && e.current) return e;
          let I, w, P, R;
          for (let H = 0, { length: X } = i; H < X; H++) {
            let { keyframe: k, actionItems: D } = i[H];
            if ((H === 0 && (I = D[0]), x >= k)) {
              I = D[0];
              let A = i[H + 1],
                v = A && x !== k;
              (w = v ? A.actionItems[0] : null),
                v && ((P = k / 100), (R = (A.keyframe - k) / 100));
            }
          }
          let V = {};
          if (I && !w)
            for (let H = 0, { length: X } = o; H < X; H++) {
              let k = o[H];
              V[k] = Wa(c, k, I.config);
            }
          else if (I && w && P !== void 0 && R !== void 0) {
            let H = (O - P) / R,
              X = I.config.easing,
              k = ny(X, H, f);
            for (let D = 0, { length: A } = o; D < A; D++) {
              let v = o[D],
                S = Wa(c, v, I.config),
                B = (Wa(c, v, w.config) - S) * k + S;
              V[v] = B;
            }
          }
          return (0, lt.merge)(e, { position: O, current: V });
        }),
        (xD = (e, t) => {
          let {
              active: r,
              origin: n,
              start: i,
              immediate: o,
              renderType: a,
              verbose: s,
              actionItem: c,
              destination: f,
              destinationKeys: p,
              pluginDuration: d,
              instanceDelay: h,
              customEasingFn: y,
              skipMotion: m,
            } = e,
            _ = c.config.easing,
            { duration: N, delay: O } = c.config;
          d != null && (N = d),
            (O = h ?? O),
            a === ID ? (N = 0) : (o || m) && (N = O = 0);
          let { now: x } = t.payload;
          if (r && n) {
            let I = x - (i + O);
            if (s) {
              let H = x - i,
                X = N + O,
                k = si(Math.min(Math.max(0, H / X), 1));
              e = (0, lt.set)(e, "verboseTimeElapsed", X * k);
            }
            if (I < 0) return e;
            let w = si(Math.min(Math.max(0, I / N), 1)),
              P = ny(_, w, y),
              R = {},
              V = null;
            return (
              p.length &&
                (V = p.reduce((H, X) => {
                  let k = f[X],
                    D = parseFloat(n[X]) || 0,
                    v = (parseFloat(k) - D) * P + D;
                  return (H[X] = v), H;
                }, {})),
              (R.current = V),
              (R.position = w),
              w === 1 && ((R.active = !1), (R.complete = !0)),
              (0, lt.merge)(e, R)
            );
          }
          return e;
        }),
        (iy = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case gD:
              return t.payload.ixInstances || Object.freeze({});
            case hD:
              return Object.freeze({});
            case yD: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: c,
                  groupIndex: f,
                  isCarrier: p,
                  origin: d,
                  destination: h,
                  immediate: y,
                  verbose: m,
                  continuous: _,
                  parameterId: N,
                  actionGroups: O,
                  smoothing: x,
                  restingValue: I,
                  pluginInstance: w,
                  pluginDuration: P,
                  instanceDelay: R,
                  skipMotion: V,
                  skipToValue: H,
                } = t.payload,
                { actionTypeId: X } = i,
                k = bD(X),
                D = OD(k, X),
                A = Object.keys(h).filter(
                  (S) => h[S] != null && typeof h[S] != "string"
                ),
                { easing: v } = i.config;
              return (0, lt.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: d,
                destination: h,
                destinationKeys: A,
                immediate: y,
                verbose: m,
                current: null,
                actionItem: i,
                actionTypeId: X,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: c,
                groupIndex: f,
                renderType: k,
                isCarrier: p,
                styleProp: D,
                continuous: _,
                parameterId: N,
                actionGroups: O,
                smoothing: x,
                restingValue: I,
                pluginInstance: w,
                pluginDuration: P,
                instanceDelay: R,
                skipMotion: V,
                skipToValue: H,
                customEasingFn:
                  Array.isArray(v) && v.length === 4 ? TD(v) : void 0,
              });
            }
            case ED: {
              let { instanceId: r, time: n } = t.payload;
              return (0, lt.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case mD: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let s = i[a];
                s !== r && (n[s] = e[s]);
              }
              return n;
            }
            case _D: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  s = e[a],
                  c = s.continuous ? AD : xD;
                r = (0, lt.set)(r, a, c(s, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var SD,
    wD,
    RD,
    ay,
    sy = ue(() => {
      "use strict";
      qe();
      ({
        IX2_RAW_DATA_IMPORTED: SD,
        IX2_SESSION_STOPPED: wD,
        IX2_PARAMETER_CHANGED: RD,
      } = ye),
        (ay = (e = {}, t) => {
          switch (t.type) {
            case SD:
              return t.payload.ixParameters || {};
            case wD:
              return {};
            case RD: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var ly = {};
  Le(ly, { default: () => ND });
  var uy,
    cy,
    CD,
    ND,
    fy = ue(() => {
      "use strict";
      uy = re(Ho());
      bf();
      kf();
      zf();
      cy = re(Mt());
      oy();
      sy();
      ({ ixElements: CD } = cy.IX2ElementsReducer),
        (ND = (0, uy.combineReducers)({
          ixData: If,
          ixRequest: Wf,
          ixSession: jf,
          ixElements: CD,
          ixInstances: iy,
          ixParameters: ay,
        }));
    });
  var py = u((SB, dy) => {
    var LD = yt(),
      PD = me(),
      qD = st(),
      MD = "[object String]";
    function DD(e) {
      return typeof e == "string" || (!PD(e) && qD(e) && LD(e) == MD);
    }
    dy.exports = DD;
  });
  var gy = u((wB, vy) => {
    var FD = ga(),
      GD = FD("length");
    vy.exports = GD;
  });
  var yy = u((RB, hy) => {
    var VD = "\\ud800-\\udfff",
      UD = "\\u0300-\\u036f",
      HD = "\\ufe20-\\ufe2f",
      XD = "\\u20d0-\\u20ff",
      WD = UD + HD + XD,
      kD = "\\ufe0e\\ufe0f",
      BD = "\\u200d",
      jD = RegExp("[" + BD + VD + WD + kD + "]");
    function zD(e) {
      return jD.test(e);
    }
    hy.exports = zD;
  });
  var xy = u((CB, Ay) => {
    var my = "\\ud800-\\udfff",
      KD = "\\u0300-\\u036f",
      YD = "\\ufe20-\\ufe2f",
      $D = "\\u20d0-\\u20ff",
      QD = KD + YD + $D,
      ZD = "\\ufe0e\\ufe0f",
      JD = "[" + my + "]",
      ka = "[" + QD + "]",
      Ba = "\\ud83c[\\udffb-\\udfff]",
      e2 = "(?:" + ka + "|" + Ba + ")",
      _y = "[^" + my + "]",
      Ty = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Iy = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      t2 = "\\u200d",
      by = e2 + "?",
      Oy = "[" + ZD + "]?",
      r2 = "(?:" + t2 + "(?:" + [_y, Ty, Iy].join("|") + ")" + Oy + by + ")*",
      n2 = Oy + by + r2,
      i2 = "(?:" + [_y + ka + "?", ka, Ty, Iy, JD].join("|") + ")",
      Ey = RegExp(Ba + "(?=" + Ba + ")|" + i2 + n2, "g");
    function o2(e) {
      for (var t = (Ey.lastIndex = 0); Ey.test(e); ) ++t;
      return t;
    }
    Ay.exports = o2;
  });
  var wy = u((NB, Sy) => {
    var a2 = gy(),
      s2 = yy(),
      u2 = xy();
    function c2(e) {
      return s2(e) ? u2(e) : a2(e);
    }
    Sy.exports = c2;
  });
  var Cy = u((LB, Ry) => {
    var l2 = Un(),
      f2 = Hn(),
      d2 = Ct(),
      p2 = py(),
      v2 = wy(),
      g2 = "[object Map]",
      h2 = "[object Set]";
    function y2(e) {
      if (e == null) return 0;
      if (d2(e)) return p2(e) ? v2(e) : e.length;
      var t = f2(e);
      return t == g2 || t == h2 ? e.size : l2(e).length;
    }
    Ry.exports = y2;
  });
  var Ly = u((PB, Ny) => {
    var E2 = "Expected a function";
    function m2(e) {
      if (typeof e != "function") throw new TypeError(E2);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    Ny.exports = m2;
  });
  var ja = u((qB, Py) => {
    var _2 = Et(),
      T2 = (function () {
        try {
          var e = _2(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    Py.exports = T2;
  });
  var za = u((MB, My) => {
    var qy = ja();
    function I2(e, t, r) {
      t == "__proto__" && qy
        ? qy(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    My.exports = I2;
  });
  var Fy = u((DB, Dy) => {
    var b2 = za(),
      O2 = Cn(),
      A2 = Object.prototype,
      x2 = A2.hasOwnProperty;
    function S2(e, t, r) {
      var n = e[t];
      (!(x2.call(e, t) && O2(n, r)) || (r === void 0 && !(t in e))) &&
        b2(e, t, r);
    }
    Dy.exports = S2;
  });
  var Uy = u((FB, Vy) => {
    var w2 = Fy(),
      R2 = Vr(),
      C2 = Dn(),
      Gy = rt(),
      N2 = Jt();
    function L2(e, t, r, n) {
      if (!Gy(e)) return e;
      t = R2(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var c = N2(t[i]),
          f = r;
        if (c === "__proto__" || c === "constructor" || c === "prototype")
          return e;
        if (i != a) {
          var p = s[c];
          (f = n ? n(p, c, s) : void 0),
            f === void 0 && (f = Gy(p) ? p : C2(t[i + 1]) ? [] : {});
        }
        w2(s, c, f), (s = s[c]);
      }
      return e;
    }
    Vy.exports = L2;
  });
  var Xy = u((GB, Hy) => {
    var P2 = kn(),
      q2 = Uy(),
      M2 = Vr();
    function D2(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          s = P2(e, a);
        r(s, a) && q2(o, M2(a, e), s);
      }
      return o;
    }
    Hy.exports = D2;
  });
  var ky = u((VB, Wy) => {
    var F2 = qn(),
      G2 = wo(),
      V2 = ea(),
      U2 = Jo(),
      H2 = Object.getOwnPropertySymbols,
      X2 = H2
        ? function (e) {
            for (var t = []; e; ) F2(t, V2(e)), (e = G2(e));
            return t;
          }
        : U2;
    Wy.exports = X2;
  });
  var jy = u((UB, By) => {
    function W2(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    By.exports = W2;
  });
  var Ky = u((HB, zy) => {
    var k2 = rt(),
      B2 = Vn(),
      j2 = jy(),
      z2 = Object.prototype,
      K2 = z2.hasOwnProperty;
    function Y2(e) {
      if (!k2(e)) return j2(e);
      var t = B2(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !K2.call(e, n))) || r.push(n);
      return r;
    }
    zy.exports = Y2;
  });
  var $y = u((XB, Yy) => {
    var $2 = ra(),
      Q2 = Ky(),
      Z2 = Ct();
    function J2(e) {
      return Z2(e) ? $2(e, !0) : Q2(e);
    }
    Yy.exports = J2;
  });
  var Zy = u((WB, Qy) => {
    var eF = Zo(),
      tF = ky(),
      rF = $y();
    function nF(e) {
      return eF(e, rF, tF);
    }
    Qy.exports = nF;
  });
  var eE = u((kB, Jy) => {
    var iF = va(),
      oF = mt(),
      aF = Xy(),
      sF = Zy();
    function uF(e, t) {
      if (e == null) return {};
      var r = iF(sF(e), function (n) {
        return [n];
      });
      return (
        (t = oF(t)),
        aF(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    Jy.exports = uF;
  });
  var rE = u((BB, tE) => {
    var cF = mt(),
      lF = Ly(),
      fF = eE();
    function dF(e, t) {
      return fF(e, lF(cF(t)));
    }
    tE.exports = dF;
  });
  var iE = u((jB, nE) => {
    var pF = Un(),
      vF = Hn(),
      gF = Pr(),
      hF = me(),
      yF = Ct(),
      EF = Mn(),
      mF = Vn(),
      _F = Gn(),
      TF = "[object Map]",
      IF = "[object Set]",
      bF = Object.prototype,
      OF = bF.hasOwnProperty;
    function AF(e) {
      if (e == null) return !0;
      if (
        yF(e) &&
        (hF(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          EF(e) ||
          _F(e) ||
          gF(e))
      )
        return !e.length;
      var t = vF(e);
      if (t == TF || t == IF) return !e.size;
      if (mF(e)) return !pF(e).length;
      for (var r in e) if (OF.call(e, r)) return !1;
      return !0;
    }
    nE.exports = AF;
  });
  var aE = u((zB, oE) => {
    var xF = za(),
      SF = qa(),
      wF = mt();
    function RF(e, t) {
      var r = {};
      return (
        (t = wF(t, 3)),
        SF(e, function (n, i, o) {
          xF(r, i, t(n, i, o));
        }),
        r
      );
    }
    oE.exports = RF;
  });
  var uE = u((KB, sE) => {
    function CF(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    sE.exports = CF;
  });
  var lE = u((YB, cE) => {
    var NF = jn();
    function LF(e) {
      return typeof e == "function" ? e : NF;
    }
    cE.exports = LF;
  });
  var dE = u(($B, fE) => {
    var PF = uE(),
      qF = Ma(),
      MF = lE(),
      DF = me();
    function FF(e, t) {
      var r = DF(e) ? PF : qF;
      return r(e, MF(t));
    }
    fE.exports = FF;
  });
  var vE = u((QB, pE) => {
    var GF = je(),
      VF = function () {
        return GF.Date.now();
      };
    pE.exports = VF;
  });
  var yE = u((ZB, hE) => {
    var UF = rt(),
      Ka = vE(),
      gE = zn(),
      HF = "Expected a function",
      XF = Math.max,
      WF = Math.min;
    function kF(e, t, r) {
      var n,
        i,
        o,
        a,
        s,
        c,
        f = 0,
        p = !1,
        d = !1,
        h = !0;
      if (typeof e != "function") throw new TypeError(HF);
      (t = gE(t) || 0),
        UF(r) &&
          ((p = !!r.leading),
          (d = "maxWait" in r),
          (o = d ? XF(gE(r.maxWait) || 0, t) : o),
          (h = "trailing" in r ? !!r.trailing : h));
      function y(R) {
        var V = n,
          H = i;
        return (n = i = void 0), (f = R), (a = e.apply(H, V)), a;
      }
      function m(R) {
        return (f = R), (s = setTimeout(O, t)), p ? y(R) : a;
      }
      function _(R) {
        var V = R - c,
          H = R - f,
          X = t - V;
        return d ? WF(X, o - H) : X;
      }
      function N(R) {
        var V = R - c,
          H = R - f;
        return c === void 0 || V >= t || V < 0 || (d && H >= o);
      }
      function O() {
        var R = Ka();
        if (N(R)) return x(R);
        s = setTimeout(O, _(R));
      }
      function x(R) {
        return (s = void 0), h && n ? y(R) : ((n = i = void 0), a);
      }
      function I() {
        s !== void 0 && clearTimeout(s), (f = 0), (n = c = i = s = void 0);
      }
      function w() {
        return s === void 0 ? a : x(Ka());
      }
      function P() {
        var R = Ka(),
          V = N(R);
        if (((n = arguments), (i = this), (c = R), V)) {
          if (s === void 0) return m(c);
          if (d) return clearTimeout(s), (s = setTimeout(O, t)), y(c);
        }
        return s === void 0 && (s = setTimeout(O, t)), a;
      }
      return (P.cancel = I), (P.flush = w), P;
    }
    hE.exports = kF;
  });
  var mE = u((JB, EE) => {
    var BF = yE(),
      jF = rt(),
      zF = "Expected a function";
    function KF(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(zF);
      return (
        jF(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        BF(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    EE.exports = KF;
  });
  var TE = {};
  Le(TE, {
    actionListPlaybackChanged: () => fr,
    animationFrameChanged: () => li,
    clearRequested: () => mG,
    elementStateChanged: () => rs,
    eventListenerAdded: () => ci,
    eventStateChanged: () => Ja,
    instanceAdded: () => es,
    instanceRemoved: () => ts,
    instanceStarted: () => fi,
    mediaQueriesDefined: () => is,
    parameterChanged: () => lr,
    playbackRequested: () => yG,
    previewRequested: () => hG,
    rawDataImported: () => Ya,
    sessionInitialized: () => $a,
    sessionStarted: () => Qa,
    sessionStopped: () => Za,
    stopRequested: () => EG,
    testFrameRendered: () => _G,
    viewportWidthChanged: () => ns,
  });
  var _E,
    YF,
    $F,
    QF,
    ZF,
    JF,
    eG,
    tG,
    rG,
    nG,
    iG,
    oG,
    aG,
    sG,
    uG,
    cG,
    lG,
    fG,
    dG,
    pG,
    vG,
    gG,
    Ya,
    $a,
    Qa,
    Za,
    hG,
    yG,
    EG,
    mG,
    ci,
    _G,
    Ja,
    li,
    lr,
    es,
    fi,
    ts,
    rs,
    fr,
    ns,
    is,
    di = ue(() => {
      "use strict";
      qe();
      (_E = re(Mt())),
        ({
          IX2_RAW_DATA_IMPORTED: YF,
          IX2_SESSION_INITIALIZED: $F,
          IX2_SESSION_STARTED: QF,
          IX2_SESSION_STOPPED: ZF,
          IX2_PREVIEW_REQUESTED: JF,
          IX2_PLAYBACK_REQUESTED: eG,
          IX2_STOP_REQUESTED: tG,
          IX2_CLEAR_REQUESTED: rG,
          IX2_EVENT_LISTENER_ADDED: nG,
          IX2_TEST_FRAME_RENDERED: iG,
          IX2_EVENT_STATE_CHANGED: oG,
          IX2_ANIMATION_FRAME_CHANGED: aG,
          IX2_PARAMETER_CHANGED: sG,
          IX2_INSTANCE_ADDED: uG,
          IX2_INSTANCE_STARTED: cG,
          IX2_INSTANCE_REMOVED: lG,
          IX2_ELEMENT_STATE_CHANGED: fG,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: dG,
          IX2_VIEWPORT_WIDTH_CHANGED: pG,
          IX2_MEDIA_QUERIES_DEFINED: vG,
        } = ye),
        ({ reifyState: gG } = _E.IX2VanillaUtils),
        (Ya = (e) => ({ type: YF, payload: { ...gG(e) } })),
        ($a = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: $F,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (Qa = () => ({ type: QF })),
        (Za = () => ({ type: ZF })),
        (hG = ({ rawData: e, defer: t }) => ({
          type: JF,
          payload: { defer: t, rawData: e },
        })),
        (yG = ({
          actionTypeId: e = Pe.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: s,
          rawData: c,
        }) => ({
          type: eG,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: s,
            rawData: c,
          },
        })),
        (EG = (e) => ({ type: tG, payload: { actionListId: e } })),
        (mG = () => ({ type: rG })),
        (ci = (e, t) => ({
          type: nG,
          payload: { target: e, listenerParams: t },
        })),
        (_G = (e = 1) => ({ type: iG, payload: { step: e } })),
        (Ja = (e, t) => ({ type: oG, payload: { stateKey: e, newState: t } })),
        (li = (e, t) => ({ type: aG, payload: { now: e, parameters: t } })),
        (lr = (e, t) => ({ type: sG, payload: { key: e, value: t } })),
        (es = (e) => ({ type: uG, payload: { ...e } })),
        (fi = (e, t) => ({ type: cG, payload: { instanceId: e, time: t } })),
        (ts = (e) => ({ type: lG, payload: { instanceId: e } })),
        (rs = (e, t, r, n) => ({
          type: fG,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (fr = ({ actionListId: e, isPlaying: t }) => ({
          type: dG,
          payload: { actionListId: e, isPlaying: t },
        })),
        (ns = ({ width: e, mediaQueries: t }) => ({
          type: pG,
          payload: { width: e, mediaQueries: t },
        })),
        (is = () => ({ type: vG }));
    });
  var we = {};
  Le(we, {
    elementContains: () => ss,
    getChildElements: () => CG,
    getClosestElement: () => $r,
    getProperty: () => AG,
    getQuerySelector: () => as,
    getRefType: () => us,
    getSiblingElements: () => NG,
    getStyle: () => OG,
    getValidDocument: () => SG,
    isSiblingNode: () => RG,
    matchSelector: () => xG,
    queryDocument: () => wG,
    setStyle: () => bG,
  });
  function bG(e, t, r) {
    e.style[t] = r;
  }
  function OG(e, t) {
    return e.style[t];
  }
  function AG(e, t) {
    return e[t];
  }
  function xG(e) {
    return (t) => t[os](e);
  }
  function as({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(IE) !== -1) {
        let n = e.split(IE),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(OE)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function SG(e) {
    return e == null || e === document.documentElement.getAttribute(OE)
      ? document
      : null;
  }
  function wG(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function ss(e, t) {
    return e.contains(t);
  }
  function RG(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function CG(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function NG(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function us(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? TG
        : IG
      : null;
  }
  var bE,
    os,
    IE,
    TG,
    IG,
    OE,
    $r,
    AE = ue(() => {
      "use strict";
      bE = re(Mt());
      qe();
      ({ ELEMENT_MATCHES: os } = bE.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: IE,
          HTML_ELEMENT: TG,
          PLAIN_OBJECT: IG,
          WF_PAGE: OE,
        } = be);
      $r = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[os] && r[os](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var cs = u((rj, SE) => {
    var LG = rt(),
      xE = Object.create,
      PG = (function () {
        function e() {}
        return function (t) {
          if (!LG(t)) return {};
          if (xE) return xE(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    SE.exports = PG;
  });
  var pi = u((nj, wE) => {
    function qG() {}
    wE.exports = qG;
  });
  var gi = u((ij, RE) => {
    var MG = cs(),
      DG = pi();
    function vi(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    vi.prototype = MG(DG.prototype);
    vi.prototype.constructor = vi;
    RE.exports = vi;
  });
  var PE = u((oj, LE) => {
    var CE = Xt(),
      FG = Pr(),
      GG = me(),
      NE = CE ? CE.isConcatSpreadable : void 0;
    function VG(e) {
      return GG(e) || FG(e) || !!(NE && e && e[NE]);
    }
    LE.exports = VG;
  });
  var DE = u((aj, ME) => {
    var UG = qn(),
      HG = PE();
    function qE(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = HG), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && r(s)
          ? t > 1
            ? qE(s, t - 1, r, n, i)
            : UG(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    ME.exports = qE;
  });
  var GE = u((sj, FE) => {
    var XG = DE();
    function WG(e) {
      var t = e == null ? 0 : e.length;
      return t ? XG(e, 1) : [];
    }
    FE.exports = WG;
  });
  var UE = u((uj, VE) => {
    function kG(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    VE.exports = kG;
  });
  var WE = u((cj, XE) => {
    var BG = UE(),
      HE = Math.max;
    function jG(e, t, r) {
      return (
        (t = HE(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = HE(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
          return (s[t] = r(a)), BG(e, this, s);
        }
      );
    }
    XE.exports = jG;
  });
  var BE = u((lj, kE) => {
    function zG(e) {
      return function () {
        return e;
      };
    }
    kE.exports = zG;
  });
  var KE = u((fj, zE) => {
    var KG = BE(),
      jE = ja(),
      YG = jn(),
      $G = jE
        ? function (e, t) {
            return jE(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: KG(t),
              writable: !0,
            });
          }
        : YG;
    zE.exports = $G;
  });
  var $E = u((dj, YE) => {
    var QG = 800,
      ZG = 16,
      JG = Date.now;
    function eV(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = JG(),
          i = ZG - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= QG) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    YE.exports = eV;
  });
  var ZE = u((pj, QE) => {
    var tV = KE(),
      rV = $E(),
      nV = rV(tV);
    QE.exports = nV;
  });
  var em = u((vj, JE) => {
    var iV = GE(),
      oV = WE(),
      aV = ZE();
    function sV(e) {
      return aV(oV(e, void 0, iV), e + "");
    }
    JE.exports = sV;
  });
  var nm = u((gj, rm) => {
    var tm = na(),
      uV = tm && new tm();
    rm.exports = uV;
  });
  var om = u((hj, im) => {
    function cV() {}
    im.exports = cV;
  });
  var ls = u((yj, sm) => {
    var am = nm(),
      lV = om(),
      fV = am
        ? function (e) {
            return am.get(e);
          }
        : lV;
    sm.exports = fV;
  });
  var cm = u((Ej, um) => {
    var dV = {};
    um.exports = dV;
  });
  var fs = u((mj, fm) => {
    var lm = cm(),
      pV = Object.prototype,
      vV = pV.hasOwnProperty;
    function gV(e) {
      for (
        var t = e.name + "", r = lm[t], n = vV.call(lm, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    fm.exports = gV;
  });
  var yi = u((_j, dm) => {
    var hV = cs(),
      yV = pi(),
      EV = 4294967295;
    function hi(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = EV),
        (this.__views__ = []);
    }
    hi.prototype = hV(yV.prototype);
    hi.prototype.constructor = hi;
    dm.exports = hi;
  });
  var vm = u((Tj, pm) => {
    function mV(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    pm.exports = mV;
  });
  var hm = u((Ij, gm) => {
    var _V = yi(),
      TV = gi(),
      IV = vm();
    function bV(e) {
      if (e instanceof _V) return e.clone();
      var t = new TV(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = IV(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    gm.exports = bV;
  });
  var mm = u((bj, Em) => {
    var OV = yi(),
      ym = gi(),
      AV = pi(),
      xV = me(),
      SV = st(),
      wV = hm(),
      RV = Object.prototype,
      CV = RV.hasOwnProperty;
    function Ei(e) {
      if (SV(e) && !xV(e) && !(e instanceof OV)) {
        if (e instanceof ym) return e;
        if (CV.call(e, "__wrapped__")) return wV(e);
      }
      return new ym(e);
    }
    Ei.prototype = AV.prototype;
    Ei.prototype.constructor = Ei;
    Em.exports = Ei;
  });
  var Tm = u((Oj, _m) => {
    var NV = yi(),
      LV = ls(),
      PV = fs(),
      qV = mm();
    function MV(e) {
      var t = PV(e),
        r = qV[t];
      if (typeof r != "function" || !(t in NV.prototype)) return !1;
      if (e === r) return !0;
      var n = LV(r);
      return !!n && e === n[0];
    }
    _m.exports = MV;
  });
  var Am = u((Aj, Om) => {
    var Im = gi(),
      DV = em(),
      FV = ls(),
      ds = fs(),
      GV = me(),
      bm = Tm(),
      VV = "Expected a function",
      UV = 8,
      HV = 32,
      XV = 128,
      WV = 256;
    function kV(e) {
      return DV(function (t) {
        var r = t.length,
          n = r,
          i = Im.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(VV);
          if (i && !a && ds(o) == "wrapper") var a = new Im([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var s = ds(o),
            c = s == "wrapper" ? FV(o) : void 0;
          c &&
          bm(c[0]) &&
          c[1] == (XV | UV | HV | WV) &&
          !c[4].length &&
          c[9] == 1
            ? (a = a[ds(c[0])].apply(a, c[3]))
            : (a = o.length == 1 && bm(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var f = arguments,
            p = f[0];
          if (a && f.length == 1 && GV(p)) return a.plant(p).value();
          for (var d = 0, h = r ? t[d].apply(this, f) : p; ++d < r; )
            h = t[d].call(this, h);
          return h;
        };
      });
    }
    Om.exports = kV;
  });
  var Sm = u((xj, xm) => {
    var BV = Am(),
      jV = BV();
    xm.exports = jV;
  });
  var Rm = u((Sj, wm) => {
    function zV(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    wm.exports = zV;
  });
  var Nm = u((wj, Cm) => {
    var KV = Rm(),
      ps = zn();
    function YV(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = ps(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = ps(t)), (t = t === t ? t : 0)),
        KV(ps(e), t, r)
      );
    }
    Cm.exports = YV;
  });
  var Um,
    Hm,
    Xm,
    Wm,
    $V,
    QV,
    ZV,
    JV,
    eU,
    tU,
    rU,
    nU,
    iU,
    oU,
    aU,
    sU,
    uU,
    cU,
    lU,
    km,
    Bm,
    fU,
    dU,
    pU,
    jm,
    vU,
    gU,
    zm,
    hU,
    vs,
    Km,
    Lm,
    Pm,
    Ym,
    Zr,
    yU,
    ot,
    $m,
    EU,
    De,
    Ye,
    Jr,
    Qm,
    gs,
    qm,
    hs,
    mU,
    Qr,
    _U,
    TU,
    IU,
    Zm,
    Mm,
    bU,
    Dm,
    OU,
    AU,
    xU,
    Fm,
    mi,
    _i,
    Gm,
    Vm,
    Jm,
    e_ = ue(() => {
      "use strict";
      (Um = re(Sm())), (Hm = re(Bn())), (Xm = re(Nm()));
      qe();
      ys();
      di();
      (Wm = re(Mt())),
        ({
          MOUSE_CLICK: $V,
          MOUSE_SECOND_CLICK: QV,
          MOUSE_DOWN: ZV,
          MOUSE_UP: JV,
          MOUSE_OVER: eU,
          MOUSE_OUT: tU,
          DROPDOWN_CLOSE: rU,
          DROPDOWN_OPEN: nU,
          SLIDER_ACTIVE: iU,
          SLIDER_INACTIVE: oU,
          TAB_ACTIVE: aU,
          TAB_INACTIVE: sU,
          NAVBAR_CLOSE: uU,
          NAVBAR_OPEN: cU,
          MOUSE_MOVE: lU,
          PAGE_SCROLL_DOWN: km,
          SCROLL_INTO_VIEW: Bm,
          SCROLL_OUT_OF_VIEW: fU,
          PAGE_SCROLL_UP: dU,
          SCROLLING_IN_VIEW: pU,
          PAGE_FINISH: jm,
          ECOMMERCE_CART_CLOSE: vU,
          ECOMMERCE_CART_OPEN: gU,
          PAGE_START: zm,
          PAGE_SCROLL: hU,
        } = ze),
        (vs = "COMPONENT_ACTIVE"),
        (Km = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: Lm } = be),
        ({ getNamespacedParameterId: Pm } = Wm.IX2VanillaUtils),
        (Ym = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (Zr = Ym(({ element: e, nativeEvent: t }) => e === t.target)),
        (yU = Ym(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (ot = (0, Um.default)([Zr, yU])),
        ($m = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !mU[i.eventTypeId]) return i;
          }
          return null;
        }),
        (EU = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!$m(e, n);
        }),
        (De = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: s, autoStopEventId: c } = o.config,
            f = $m(e, c);
          return (
            f &&
              dr({
                store: e,
                eventId: c,
                eventTarget: r,
                eventStateKey: c + Lm + n.split(Lm)[1],
                actionListId: (0, Hm.default)(f, "action.config.actionListId"),
              }),
            dr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            en({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            i
          );
        }),
        (Ye = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (Jr = { handler: Ye(ot, De) }),
        (Qm = { ...Jr, types: [vs, Km].join(" ") }),
        (gs = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (qm = "mouseover mouseout"),
        (hs = { types: gs }),
        (mU = { PAGE_START: zm, PAGE_FINISH: jm }),
        (Qr = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, Xm.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (_U = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (TU = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (IU = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: i } = Qr(),
            o = r.scrollOffsetValue,
            c = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return _U(t.getBoundingClientRect(), {
            left: 0,
            top: c,
            right: n,
            bottom: i - c,
          });
        }),
        (Zm = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [vs, Km].indexOf(n) !== -1 ? n === vs : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (Mm = (e) => (t, r) => {
          let n = { elementHovered: TU(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (bU = (e) => (t, r) => {
          let n = { ...r, elementVisible: IU(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (Dm =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = Qr(),
              {
                event: { config: a, eventTypeId: s },
              } = t,
              { scrollOffsetValue: c, scrollOffsetUnit: f } = a,
              p = f === "PX",
              d = i - o,
              h = Number((n / d).toFixed(2));
            if (r && r.percentTop === h) return r;
            let y = (p ? c : (o * (c || 0)) / 100) / d,
              m,
              _,
              N = 0;
            r &&
              ((m = h > r.percentTop),
              (_ = r.scrollingDown !== m),
              (N = _ ? h : r.anchorTop));
            let O = s === km ? h >= N + y : h <= N - y,
              x = {
                ...r,
                percentTop: h,
                inBounds: O,
                anchorTop: N,
                scrollingDown: m,
              };
            return (r && O && (_ || x.inBounds !== r.inBounds) && e(t, x)) || x;
          }),
        (OU = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (AU = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (xU = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (Fm =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (mi = (e = !0) => ({
          ...Qm,
          handler: Ye(
            e ? ot : Zr,
            Zm((t, r) => (r.isActive ? Jr.handler(t, r) : r))
          ),
        })),
        (_i = (e = !0) => ({
          ...Qm,
          handler: Ye(
            e ? ot : Zr,
            Zm((t, r) => (r.isActive ? r : Jr.handler(t, r)))
          ),
        })),
        (Gm = {
          ...hs,
          handler: bU((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === Bm) === r
              ? (De(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (Vm = 0.05),
        (Jm = {
          [iU]: mi(),
          [oU]: _i(),
          [nU]: mi(),
          [rU]: _i(),
          [cU]: mi(!1),
          [uU]: _i(!1),
          [aU]: mi(),
          [sU]: _i(),
          [gU]: { types: "ecommerce-cart-open", handler: Ye(ot, De) },
          [vU]: { types: "ecommerce-cart-close", handler: Ye(ot, De) },
          [$V]: {
            types: "click",
            handler: Ye(
              ot,
              Fm((e, { clickCount: t }) => {
                EU(e) ? t === 1 && De(e) : De(e);
              })
            ),
          },
          [QV]: {
            types: "click",
            handler: Ye(
              ot,
              Fm((e, { clickCount: t }) => {
                t === 2 && De(e);
              })
            ),
          },
          [ZV]: { ...Jr, types: "mousedown" },
          [JV]: { ...Jr, types: "mouseup" },
          [eU]: {
            types: qm,
            handler: Ye(
              ot,
              Mm((e, t) => {
                t.elementHovered && De(e);
              })
            ),
          },
          [tU]: {
            types: qm,
            handler: Ye(
              ot,
              Mm((e, t) => {
                t.elementHovered || De(e);
              })
            ),
          },
          [lU]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: s,
                  continuousParameterGroupId: c,
                  reverse: f,
                  restingState: p = 0,
                } = r,
                {
                  clientX: d = o.clientX,
                  clientY: h = o.clientY,
                  pageX: y = o.pageX,
                  pageY: m = o.pageY,
                } = n,
                _ = s === "X_AXIS",
                N = n.type === "mouseout",
                O = p / 100,
                x = c,
                I = !1;
              switch (a) {
                case tt.VIEWPORT: {
                  O = _
                    ? Math.min(d, window.innerWidth) / window.innerWidth
                    : Math.min(h, window.innerHeight) / window.innerHeight;
                  break;
                }
                case tt.PAGE: {
                  let {
                    scrollLeft: w,
                    scrollTop: P,
                    scrollWidth: R,
                    scrollHeight: V,
                  } = Qr();
                  O = _ ? Math.min(w + y, R) / R : Math.min(P + m, V) / V;
                  break;
                }
                case tt.ELEMENT:
                default: {
                  x = Pm(i, c);
                  let w = n.type.indexOf("mouse") === 0;
                  if (w && ot({ element: t, nativeEvent: n }) !== !0) break;
                  let P = t.getBoundingClientRect(),
                    { left: R, top: V, width: H, height: X } = P;
                  if (!w && !OU({ left: d, top: h }, P)) break;
                  (I = !0), (O = _ ? (d - R) / H : (h - V) / X);
                  break;
                }
              }
              return (
                N && (O > 1 - Vm || O < Vm) && (O = Math.round(O)),
                (a !== tt.ELEMENT || I || I !== o.elementHovered) &&
                  ((O = f ? 1 - O : O), e.dispatch(lr(x, O))),
                {
                  elementHovered: I,
                  clientX: d,
                  clientY: h,
                  pageX: y,
                  pageY: m,
                }
              );
            },
          },
          [hU]: {
            types: gs,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = Qr(),
                s = i / (o - a);
              (s = n ? 1 - s : s), e.dispatch(lr(r, s));
            },
          },
          [pU]: {
            types: gs,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: s,
                  scrollHeight: c,
                  clientHeight: f,
                } = Qr(),
                {
                  basedOn: p,
                  selectedAxis: d,
                  continuousParameterGroupId: h,
                  startsEntering: y,
                  startsExiting: m,
                  addEndOffset: _,
                  addStartOffset: N,
                  addOffsetValue: O = 0,
                  endOffsetValue: x = 0,
                } = r,
                I = d === "X_AXIS";
              if (p === tt.VIEWPORT) {
                let w = I ? o / s : a / c;
                return (
                  w !== i.scrollPercent && t.dispatch(lr(h, w)),
                  { scrollPercent: w }
                );
              } else {
                let w = Pm(n, h),
                  P = e.getBoundingClientRect(),
                  R = (N ? O : 0) / 100,
                  V = (_ ? x : 0) / 100;
                (R = y ? R : 1 - R), (V = m ? V : 1 - V);
                let H = P.top + Math.min(P.height * R, f),
                  k = P.top + P.height * V - H,
                  D = Math.min(f + k, c),
                  v = Math.min(Math.max(0, f - H), D) / D;
                return (
                  v !== i.scrollPercent && t.dispatch(lr(w, v)),
                  { scrollPercent: v }
                );
              }
            },
          },
          [Bm]: Gm,
          [fU]: Gm,
          [km]: {
            ...hs,
            handler: Dm((e, t) => {
              t.scrollingDown && De(e);
            }),
          },
          [dU]: {
            ...hs,
            handler: Dm((e, t) => {
              t.scrollingDown || De(e);
            }),
          },
          [jm]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Ye(Zr, AU(De)),
          },
          [zm]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Ye(Zr, xU(De)),
          },
        });
    });
  var y_ = {};
  Le(y_, {
    observeRequests: () => jU,
    startActionGroup: () => en,
    startEngine: () => xi,
    stopActionGroup: () => dr,
    stopAllActionGroups: () => v_,
    stopEngine: () => Si,
  });
  function jU(e) {
    Dt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: YU }),
      Dt({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: $U }),
      Dt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: QU }),
      Dt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: ZU });
  }
  function zU(e) {
    Dt({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Si(e),
          l_({ store: e, elementApi: we }),
          xi({ store: e, allowEvents: !0 }),
          f_();
      },
    });
  }
  function KU(e, t) {
    let r = Dt({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function YU({ rawData: e, defer: t }, r) {
    let n = () => {
      xi({ store: r, rawData: e, allowEvents: !0 }), f_();
    };
    t ? setTimeout(n, 0) : n();
  }
  function f_() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function $U(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: s,
        testManual: c,
        verbose: f = !0,
      } = e,
      { rawData: p } = e;
    if (n && i && p && s) {
      let d = p.actionLists[n];
      d && (p = MU({ actionList: d, actionItemId: i, rawData: p }));
    }
    if (
      (xi({ store: t, rawData: p, allowEvents: a, testManual: c }),
      (n && r === Pe.GENERAL_START_ACTION) || Es(r))
    ) {
      dr({ store: t, actionListId: n }),
        p_({ store: t, actionListId: n, eventId: o });
      let d = en({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: s,
        verbose: f,
      });
      f && d && t.dispatch(fr({ actionListId: n, isPlaying: !s }));
    }
  }
  function QU({ actionListId: e }, t) {
    e ? dr({ store: t, actionListId: e }) : v_({ store: t }), Si(t);
  }
  function ZU(e, t) {
    Si(t), l_({ store: t, elementApi: we });
  }
  function xi({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(Ya(t)),
      i.active ||
        (e.dispatch(
          $a({
            hasBoundaryNodes: !!document.querySelector(Ii),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (iH(e), JU(), e.getState().ixSession.hasDefinedMediaQueries && zU(e)),
        e.dispatch(Qa()),
        eH(e, n));
  }
  function JU() {
    let { documentElement: e } = document;
    e.className.indexOf(t_) === -1 && (e.className += ` ${t_}`);
  }
  function eH(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(li(n, o)), t ? KU(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function Si(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(tH), VU(), e.dispatch(Za());
    }
  }
  function tH({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function rH({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: s,
    restingValue: c,
  }) {
    let { ixData: f, ixSession: p } = e.getState(),
      { events: d } = f,
      h = d[n],
      { eventTypeId: y } = h,
      m = {},
      _ = {},
      N = [],
      { continuousActionGroups: O } = a,
      { id: x } = a;
    DU(y, i) && (x = FU(t, x));
    let I = p.hasBoundaryNodes && r ? $r(r, Ii) : null;
    O.forEach((w) => {
      let { keyframe: P, actionItems: R } = w;
      R.forEach((V) => {
        let { actionTypeId: H } = V,
          { target: X } = V.config;
        if (!X) return;
        let k = X.boundaryMode ? I : null,
          D = UU(X) + ms + H;
        if (((_[D] = nH(_[D], P, V)), !m[D])) {
          m[D] = !0;
          let { config: A } = V;
          bi({
            config: A,
            event: h,
            eventTarget: r,
            elementRoot: k,
            elementApi: we,
          }).forEach((v) => {
            N.push({ element: v, key: D });
          });
        }
      });
    }),
      N.forEach(({ element: w, key: P }) => {
        let R = _[P],
          V = (0, ft.default)(R, "[0].actionItems[0]", {}),
          { actionTypeId: H } = V,
          X = Ai(H) ? Ts(H)(w, V) : null,
          k = _s({ element: w, actionItem: V, elementApi: we }, X);
        Is({
          store: e,
          element: w,
          eventId: n,
          actionListId: o,
          actionItem: V,
          destination: k,
          continuous: !0,
          parameterId: x,
          actionGroups: R,
          smoothing: s,
          restingValue: c,
          pluginInstance: X,
        });
      });
  }
  function nH(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function iH(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    d_(e),
      (0, pr.default)(r, (i, o) => {
        let a = Jm[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        lH({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && aH(e);
  }
  function aH(e) {
    let t = () => {
      d_(e);
    };
    oH.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(ci(window, [r, t]));
    }),
      t();
  }
  function d_(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(ns({ width: n, mediaQueries: i }));
    }
  }
  function lH({ logic: e, store: t, events: r }) {
    fH(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      s = sH(r, cH);
    if (!(0, i_.default)(s)) return;
    (0, pr.default)(s, (d, h) => {
      let y = r[h],
        { action: m, id: _, mediaQueries: N = o.mediaQueryKeys } = y,
        { actionListId: O } = m.config;
      HU(N, o.mediaQueryKeys) || t.dispatch(is()),
        m.actionTypeId === Pe.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(y.config) ? y.config : [y.config]).forEach((I) => {
            let { continuousParameterGroupId: w } = I,
              P = (0, ft.default)(a, `${O}.continuousParameterGroups`, []),
              R = (0, n_.default)(P, ({ id: X }) => X === w),
              V = (I.smoothing || 0) / 100,
              H = (I.restingState || 0) / 100;
            R &&
              d.forEach((X, k) => {
                let D = _ + ms + k;
                rH({
                  store: t,
                  eventStateKey: D,
                  eventTarget: X,
                  eventId: _,
                  eventConfig: I,
                  actionListId: O,
                  parameterGroup: R,
                  smoothing: V,
                  restingValue: H,
                });
              });
          }),
        (m.actionTypeId === Pe.GENERAL_START_ACTION || Es(m.actionTypeId)) &&
          p_({ store: t, actionListId: O, eventId: _ });
    });
    let c = (d) => {
        let { ixSession: h } = t.getState();
        uH(s, (y, m, _) => {
          let N = r[m],
            O = h.eventState[_],
            { action: x, mediaQueries: I = o.mediaQueryKeys } = N;
          if (!Oi(I, h.mediaQueryKey)) return;
          let w = (P = {}) => {
            let R = i(
              {
                store: t,
                element: y,
                event: N,
                eventConfig: P,
                nativeEvent: d,
                eventStateKey: _,
              },
              O
            );
            XU(R, O) || t.dispatch(Ja(_, R));
          };
          x.actionTypeId === Pe.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(N.config) ? N.config : [N.config]).forEach(w)
            : w();
        });
      },
      f = (0, u_.default)(c, BU),
      p = ({ target: d = document, types: h, throttle: y }) => {
        h.split(" ")
          .filter(Boolean)
          .forEach((m) => {
            let _ = y ? f : c;
            d.addEventListener(m, _), t.dispatch(ci(d, [m, _]));
          });
      };
    Array.isArray(n) ? n.forEach(p) : typeof n == "string" && p(e);
  }
  function fH(e) {
    if (!kU) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = as(o);
      t[a] ||
        ((i === ze.MOUSE_CLICK || i === ze.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function p_({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      s = a[r],
      c = o[t];
    if (c && c.useFirstGroupAsInitialState) {
      let f = (0, ft.default)(c, "actionItemGroups[0].actionItems", []),
        p = (0, ft.default)(s, "mediaQueries", n.mediaQueryKeys);
      if (!Oi(p, i.mediaQueryKey)) return;
      f.forEach((d) => {
        let { config: h, actionTypeId: y } = d,
          m =
            h?.target?.useEventTarget === !0 && h?.target?.objectId == null
              ? { target: s.target, targets: s.targets }
              : h,
          _ = bi({ config: m, event: s, elementApi: we }),
          N = Ai(y);
        _.forEach((O) => {
          let x = N ? Ts(y)(O, d) : null;
          Is({
            destination: _s({ element: O, actionItem: d, elementApi: we }, x),
            immediate: !0,
            store: e,
            element: O,
            eventId: r,
            actionItem: d,
            actionListId: t,
            pluginInstance: x,
          });
        });
      });
    }
  }
  function v_({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, pr.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        bs(r, e), i && e.dispatch(fr({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function dr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && r ? $r(r, Ii) : null;
    (0, pr.default)(o, (c) => {
      let f = (0, ft.default)(c, "actionItem.config.target.boundaryMode"),
        p = n ? c.eventStateKey === n : !0;
      if (c.actionListId === i && c.eventId === t && p) {
        if (s && f && !ss(s, c.element)) return;
        bs(c, e),
          c.verbose && e.dispatch(fr({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function en({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: c, ixSession: f } = e.getState(),
      { events: p } = c,
      d = p[t] || {},
      { mediaQueries: h = c.mediaQueryKeys } = d,
      y = (0, ft.default)(c, `actionLists.${i}`, {}),
      { actionItemGroups: m, useFirstGroupAsInitialState: _ } = y;
    if (!m || !m.length) return !1;
    o >= m.length && (0, ft.default)(d, "config.loop") && (o = 0),
      o === 0 && _ && o++;
    let O =
        (o === 0 || (o === 1 && _)) && Es(d.action?.actionTypeId)
          ? d.config.delay
          : void 0,
      x = (0, ft.default)(m, [o, "actionItems"], []);
    if (!x.length || !Oi(h, f.mediaQueryKey)) return !1;
    let I = f.hasBoundaryNodes && r ? $r(r, Ii) : null,
      w = LU(x),
      P = !1;
    return (
      x.forEach((R, V) => {
        let { config: H, actionTypeId: X } = R,
          k = Ai(X),
          { target: D } = H;
        if (!D) return;
        let A = D.boundaryMode ? I : null;
        bi({
          config: H,
          event: d,
          eventTarget: r,
          elementRoot: A,
          elementApi: we,
        }).forEach((S, q) => {
          let M = k ? Ts(X)(S, R) : null,
            B = k ? WU(X)(S, R) : null;
          P = !0;
          let z = w === V && q === 0,
            J = PU({ element: S, actionItem: R }),
            le = _s({ element: S, actionItem: R, elementApi: we }, M);
          Is({
            store: e,
            element: S,
            actionItem: R,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: z,
            computedStyle: J,
            destination: le,
            immediate: a,
            verbose: s,
            pluginInstance: M,
            pluginDuration: B,
            instanceDelay: O,
          });
        });
      }),
      P
    );
  }
  function Is(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: s,
        continuous: c,
        restingValue: f,
        eventId: p,
      } = n,
      d = !c,
      h = CU(),
      { ixElements: y, ixSession: m, ixData: _ } = t.getState(),
      N = RU(y, i),
      { refState: O } = y[N] || {},
      x = us(i),
      I = m.reducedMotion && ko[o.actionTypeId],
      w;
    if (I && c)
      switch (_.events[p]?.eventTypeId) {
        case ze.MOUSE_MOVE:
        case ze.MOUSE_MOVE_IN_VIEWPORT:
          w = f;
          break;
        default:
          w = 0.5;
          break;
      }
    let P = qU(i, O, r, o, we, s);
    if (
      (t.dispatch(
        es({
          instanceId: h,
          elementId: N,
          origin: P,
          refType: x,
          skipMotion: I,
          skipToValue: w,
          ...n,
        })
      ),
      g_(document.body, "ix2-animation-started", h),
      a)
    ) {
      dH(t, h);
      return;
    }
    Dt({ store: t, select: ({ ixInstances: R }) => R[h], onChange: h_ }),
      d && t.dispatch(fi(h, m.tick));
  }
  function bs(e, t) {
    g_(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === c_ && GU(o, n, we), t.dispatch(ts(e.id));
  }
  function g_(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function dH(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(fi(t, 0)), e.dispatch(li(performance.now(), r));
    let { ixInstances: n } = e.getState();
    h_(n[t], e);
  }
  function h_(e, t) {
    let {
        active: r,
        continuous: n,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: s,
        renderType: c,
        current: f,
        groupIndex: p,
        eventId: d,
        eventTarget: h,
        eventStateKey: y,
        actionListId: m,
        isCarrier: _,
        styleProp: N,
        verbose: O,
        pluginInstance: x,
      } = e,
      { ixData: I, ixSession: w } = t.getState(),
      { events: P } = I,
      R = P[d] || {},
      { mediaQueries: V = I.mediaQueryKeys } = R;
    if (Oi(V, w.mediaQueryKey) && (n || r || i)) {
      if (f || (c === wU && i)) {
        t.dispatch(rs(o, s, f, a));
        let { ixElements: H } = t.getState(),
          { ref: X, refType: k, refState: D } = H[o] || {},
          A = D && D[s];
        (k === c_ || Ai(s)) && NU(X, D, A, d, a, N, we, c, x);
      }
      if (i) {
        if (_) {
          let H = en({
            store: t,
            eventId: d,
            eventTarget: h,
            eventStateKey: y,
            actionListId: m,
            groupIndex: p + 1,
            verbose: O,
          });
          O && !H && t.dispatch(fr({ actionListId: m, isPlaying: !1 }));
        }
        bs(e, t);
      }
    }
  }
  var n_,
    ft,
    i_,
    o_,
    a_,
    s_,
    pr,
    u_,
    Ti,
    SU,
    Es,
    ms,
    Ii,
    c_,
    wU,
    t_,
    bi,
    RU,
    _s,
    Dt,
    CU,
    NU,
    l_,
    LU,
    PU,
    qU,
    MU,
    DU,
    FU,
    Oi,
    GU,
    VU,
    UU,
    HU,
    XU,
    Ai,
    Ts,
    WU,
    r_,
    kU,
    BU,
    oH,
    sH,
    uH,
    cH,
    ys = ue(() => {
      "use strict";
      (n_ = re(ma())),
        (ft = re(Bn())),
        (i_ = re(Cy())),
        (o_ = re(rE())),
        (a_ = re(iE())),
        (s_ = re(aE())),
        (pr = re(dE())),
        (u_ = re(mE()));
      qe();
      Ti = re(Mt());
      di();
      AE();
      e_();
      (SU = Object.keys(bn)),
        (Es = (e) => SU.includes(e)),
        ({
          COLON_DELIMITER: ms,
          BOUNDARY_SELECTOR: Ii,
          HTML_ELEMENT: c_,
          RENDER_GENERAL: wU,
          W_MOD_IX: t_,
        } = be),
        ({
          getAffectedElements: bi,
          getElementId: RU,
          getDestinationValues: _s,
          observeStore: Dt,
          getInstanceId: CU,
          renderHTMLElement: NU,
          clearAllStyles: l_,
          getMaxDurationItemIndex: LU,
          getComputedStyle: PU,
          getInstanceOrigin: qU,
          reduceListToGroup: MU,
          shouldNamespaceEventParameter: DU,
          getNamespacedParameterId: FU,
          shouldAllowMediaQuery: Oi,
          cleanupHTMLElement: GU,
          clearObjectCache: VU,
          stringifyTarget: UU,
          mediaQueriesEqual: HU,
          shallowEqual: XU,
        } = Ti.IX2VanillaUtils),
        ({
          isPluginType: Ai,
          createPluginInstance: Ts,
          getPluginDuration: WU,
        } = Ti.IX2VanillaPlugins),
        (r_ = navigator.userAgent),
        (kU = r_.match(/iPad/i) || r_.match(/iPhone/)),
        (BU = 12);
      oH = ["resize", "orientationchange"];
      (sH = (e, t) => (0, o_.default)((0, s_.default)(e, t), a_.default)),
        (uH = (e, t) => {
          (0, pr.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + ms + o;
              t(i, n, a);
            });
          });
        }),
        (cH = (e) => {
          let t = { target: e.target, targets: e.targets };
          return bi({ config: t, elementApi: we });
        });
    });
  var m_ = u((dt) => {
    "use strict";
    var pH = ln().default,
      vH = tu().default;
    Object.defineProperty(dt, "__esModule", { value: !0 });
    dt.actions = void 0;
    dt.destroy = E_;
    dt.init = mH;
    dt.setEnv = EH;
    dt.store = void 0;
    Ul();
    var gH = Ho(),
      hH = vH((fy(), Qe(ly))),
      Os = (ys(), Qe(y_)),
      yH = pH((di(), Qe(TE)));
    dt.actions = yH;
    var As = (dt.store = (0, gH.createStore)(hH.default));
    function EH(e) {
      e() && (0, Os.observeRequests)(As);
    }
    function mH(e) {
      E_(), (0, Os.startEngine)({ store: As, rawData: e, allowEvents: !0 });
    }
    function E_() {
      (0, Os.stopEngine)(As);
    }
  });
  var b_ = u((Fj, I_) => {
    "use strict";
    var __ = We(),
      T_ = m_();
    T_.setEnv(__.env);
    __.define(
      "ix2",
      (I_.exports = function () {
        return T_;
      })
    );
  });
  var A_ = u((Gj, O_) => {
    "use strict";
    var vr = We();
    vr.define(
      "links",
      (O_.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = vr.env(),
          a = window.location,
          s = document.createElement("a"),
          c = "w--current",
          f = /index\.(html|php)$/,
          p = /\/$/,
          d,
          h;
        r.ready = r.design = r.preview = y;
        function y() {
          (i = o && vr.env("design")),
            (h = vr.env("slug") || a.pathname || ""),
            vr.scroll.off(_),
            (d = []);
          for (var O = document.links, x = 0; x < O.length; ++x) m(O[x]);
          d.length && (vr.scroll.on(_), _());
        }
        function m(O) {
          if (!O.getAttribute("hreflang")) {
            var x =
              (i && O.getAttribute("href-disabled")) || O.getAttribute("href");
            if (((s.href = x), !(x.indexOf(":") >= 0))) {
              var I = e(O);
              if (
                s.hash.length > 1 &&
                s.host + s.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                var w = e(s.hash);
                w.length && d.push({ link: I, sec: w, active: !1 });
                return;
              }
              if (!(x === "#" || x === "")) {
                var P =
                  s.href === a.href || x === h || (f.test(x) && p.test(h));
                N(I, c, P);
              }
            }
          }
        }
        function _() {
          var O = n.scrollTop(),
            x = n.height();
          t.each(d, function (I) {
            if (!I.link.attr("hreflang")) {
              var w = I.link,
                P = I.sec,
                R = P.offset().top,
                V = P.outerHeight(),
                H = x * 0.5,
                X = P.is(":visible") && R + V - H >= O && R + H <= O + x;
              I.active !== X && ((I.active = X), N(w, c, X));
            }
          });
        }
        function N(O, x, I) {
          var w = O.hasClass(x);
          (I && w) || (!I && !w) || (I ? O.addClass(x) : O.removeClass(x));
        }
        return r;
      })
    );
  });
  var S_ = u((Vj, x_) => {
    "use strict";
    var wi = We();
    wi.define(
      "scroll",
      (x_.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = m() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (A) {
              window.setTimeout(A, 15);
            },
          c = wi.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            c +
            " > .header, " +
            c +
            " > .w-nav:not([data-no-scroll])",
          p = 'a[href="#"]',
          d = 'a[href*="#"]:not(.w-tab-link):not(' + p + ")",
          h = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          y = document.createElement("style");
        y.appendChild(document.createTextNode(h));
        function m() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var _ = /^#[a-zA-Z0-9][\w:.-]*$/;
        function N(A) {
          return _.test(A.hash) && A.host + A.pathname === r.host + r.pathname;
        }
        let O =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function x() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            O.matches
          );
        }
        function I(A, v) {
          var S;
          switch (v) {
            case "add":
              (S = A.attr("tabindex")),
                S
                  ? A.attr("data-wf-tabindex-swap", S)
                  : A.attr("tabindex", "-1");
              break;
            case "remove":
              (S = A.attr("data-wf-tabindex-swap")),
                S
                  ? (A.attr("tabindex", S),
                    A.removeAttr("data-wf-tabindex-swap"))
                  : A.removeAttr("tabindex");
              break;
          }
          A.toggleClass("wf-force-outline-none", v === "add");
        }
        function w(A) {
          var v = A.currentTarget;
          if (
            !(
              wi.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(v.className))
            )
          ) {
            var S = N(v) ? v.hash : "";
            if (S !== "") {
              var q = e(S);
              q.length &&
                (A && (A.preventDefault(), A.stopPropagation()),
                P(S, A),
                window.setTimeout(
                  function () {
                    R(q, function () {
                      I(q, "add"),
                        q.get(0).focus({ preventScroll: !0 }),
                        I(q, "remove");
                    });
                  },
                  A ? 0 : 300
                ));
            }
          }
        }
        function P(A) {
          if (
            r.hash !== A &&
            n &&
            n.pushState &&
            !(wi.env.chrome && r.protocol === "file:")
          ) {
            var v = n.state && n.state.hash;
            v !== A && n.pushState({ hash: A }, "", A);
          }
        }
        function R(A, v) {
          var S = i.scrollTop(),
            q = V(A);
          if (S !== q) {
            var M = H(A, S, q),
              B = Date.now(),
              z = function () {
                var J = Date.now() - B;
                window.scroll(0, X(S, q, J, M)),
                  J <= M ? s(z) : typeof v == "function" && v();
              };
            s(z);
          }
        }
        function V(A) {
          var v = e(f),
            S = v.css("position") === "fixed" ? v.outerHeight() : 0,
            q = A.offset().top - S;
          if (A.data("scroll") === "mid") {
            var M = i.height() - S,
              B = A.outerHeight();
            B < M && (q -= Math.round((M - B) / 2));
          }
          return q;
        }
        function H(A, v, S) {
          if (x()) return 0;
          var q = 1;
          return (
            a.add(A).each(function (M, B) {
              var z = parseFloat(B.getAttribute("data-scroll-time"));
              !isNaN(z) && z >= 0 && (q = z);
            }),
            (472.143 * Math.log(Math.abs(v - S) + 125) - 2e3) * q
          );
        }
        function X(A, v, S, q) {
          return S > q ? v : A + (v - A) * k(S / q);
        }
        function k(A) {
          return A < 0.5
            ? 4 * A * A * A
            : (A - 1) * (2 * A - 2) * (2 * A - 2) + 1;
        }
        function D() {
          var { WF_CLICK_EMPTY: A, WF_CLICK_SCROLL: v } = t;
          o.on(v, d, w),
            o.on(A, p, function (S) {
              S.preventDefault();
            }),
            document.head.insertBefore(y, document.head.firstChild);
        }
        return { ready: D };
      })
    );
  });
  var R_ = u((Uj, w_) => {
    "use strict";
    var _H = We();
    _H.define(
      "touch",
      (w_.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            s = !1,
            c = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            p;
          o.addEventListener("touchstart", d, !1),
            o.addEventListener("touchmove", h, !1),
            o.addEventListener("touchend", y, !1),
            o.addEventListener("touchcancel", m, !1),
            o.addEventListener("mousedown", d, !1),
            o.addEventListener("mousemove", h, !1),
            o.addEventListener("mouseup", y, !1),
            o.addEventListener("mouseout", m, !1);
          function d(N) {
            var O = N.touches;
            (O && O.length > 1) ||
              ((a = !0),
              O ? ((s = !0), (f = O[0].clientX)) : (f = N.clientX),
              (p = f));
          }
          function h(N) {
            if (a) {
              if (s && N.type === "mousemove") {
                N.preventDefault(), N.stopPropagation();
                return;
              }
              var O = N.touches,
                x = O ? O[0].clientX : N.clientX,
                I = x - p;
              (p = x),
                Math.abs(I) > c &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", N, { direction: I > 0 ? "right" : "left" }), m());
            }
          }
          function y(N) {
            if (a && ((a = !1), s && N.type === "mouseup")) {
              N.preventDefault(), N.stopPropagation(), (s = !1);
              return;
            }
          }
          function m() {
            a = !1;
          }
          function _() {
            o.removeEventListener("touchstart", d, !1),
              o.removeEventListener("touchmove", h, !1),
              o.removeEventListener("touchend", y, !1),
              o.removeEventListener("touchcancel", m, !1),
              o.removeEventListener("mousedown", d, !1),
              o.removeEventListener("mousemove", h, !1),
              o.removeEventListener("mouseup", y, !1),
              o.removeEventListener("mouseout", m, !1),
              (o = null);
          }
          this.destroy = _;
        }
        function i(o, a, s) {
          var c = e.Event(o, { originalEvent: a });
          e(a.target).trigger(c, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var N_ = u((Hj, C_) => {
    "use strict";
    var It = We(),
      TH = cn(),
      Ie = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    It.define(
      "navbar",
      (C_.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          s,
          c,
          f,
          p,
          d = It.env(),
          h = '<div class="w-nav-overlay" data-wf-ignore />',
          y = ".w-nav",
          m = "w--open",
          _ = "w--nav-dropdown-open",
          N = "w--nav-dropdown-toggle-open",
          O = "w--nav-dropdown-list-open",
          x = "w--nav-link-open",
          I = TH.triggers,
          w = e();
        (r.ready = r.design = r.preview = P),
          (r.destroy = function () {
            (w = e()), R(), c && c.length && c.each(k);
          });
        function P() {
          (f = d && It.env("design")),
            (p = It.env("editor")),
            (s = e(document.body)),
            (c = o.find(y)),
            c.length && (c.each(X), R(), V());
        }
        function R() {
          It.resize.off(H);
        }
        function V() {
          It.resize.on(H);
        }
        function H() {
          c.each(Y);
        }
        function X(g, G) {
          var W = e(G),
            U = e.data(G, y);
          U ||
            (U = e.data(G, y, {
              open: !1,
              el: W,
              config: {},
              selectedIdx: -1,
            })),
            (U.menu = W.find(".w-nav-menu")),
            (U.links = U.menu.find(".w-nav-link")),
            (U.dropdowns = U.menu.find(".w-dropdown")),
            (U.dropdownToggle = U.menu.find(".w-dropdown-toggle")),
            (U.dropdownList = U.menu.find(".w-dropdown-list")),
            (U.button = W.find(".w-nav-button")),
            (U.container = W.find(".w-container")),
            (U.overlayContainerId = "w-nav-overlay-" + g),
            (U.outside = Fe(U));
          var ce = W.find(".w-nav-brand");
          ce &&
            ce.attr("href") === "/" &&
            ce.attr("aria-label") == null &&
            ce.attr("aria-label", "home"),
            U.button.attr("style", "-webkit-user-select: text;"),
            U.button.attr("aria-label") == null &&
              U.button.attr("aria-label", "menu"),
            U.button.attr("role", "button"),
            U.button.attr("tabindex", "0"),
            U.button.attr("aria-controls", U.overlayContainerId),
            U.button.attr("aria-haspopup", "menu"),
            U.button.attr("aria-expanded", "false"),
            U.el.off(y),
            U.button.off(y),
            U.menu.off(y),
            v(U),
            f
              ? (D(U), U.el.on("setting" + y, S(U)))
              : (A(U),
                U.button.on("click" + y, J(U)),
                U.menu.on("click" + y, "a", le(U)),
                U.button.on("keydown" + y, q(U)),
                U.el.on("keydown" + y, M(U))),
            Y(g, G);
        }
        function k(g, G) {
          var W = e.data(G, y);
          W && (D(W), e.removeData(G, y));
        }
        function D(g) {
          g.overlay && (ae(g, !0), g.overlay.remove(), (g.overlay = null));
        }
        function A(g) {
          g.overlay ||
            ((g.overlay = e(h).appendTo(g.el)),
            g.overlay.attr("id", g.overlayContainerId),
            (g.parent = g.menu.parent()),
            ae(g, !0));
        }
        function v(g) {
          var G = {},
            W = g.config || {},
            U = (G.animation = g.el.attr("data-animation") || "default");
          (G.animOver = /^over/.test(U)),
            (G.animDirect = /left$/.test(U) ? -1 : 1),
            W.animation !== U && g.open && t.defer(z, g),
            (G.easing = g.el.attr("data-easing") || "ease"),
            (G.easing2 = g.el.attr("data-easing2") || "ease");
          var ce = g.el.attr("data-duration");
          (G.duration = ce != null ? Number(ce) : 400),
            (G.docHeight = g.el.attr("data-doc-height")),
            (g.config = G);
        }
        function S(g) {
          return function (G, W) {
            W = W || {};
            var U = i.width();
            v(g),
              W.open === !0 && pt(g, !0),
              W.open === !1 && ae(g, !0),
              g.open &&
                t.defer(function () {
                  U !== i.width() && z(g);
                });
          };
        }
        function q(g) {
          return function (G) {
            switch (G.keyCode) {
              case Ie.SPACE:
              case Ie.ENTER:
                return J(g)(), G.preventDefault(), G.stopPropagation();
              case Ie.ESCAPE:
                return ae(g), G.preventDefault(), G.stopPropagation();
              case Ie.ARROW_RIGHT:
              case Ie.ARROW_DOWN:
              case Ie.HOME:
              case Ie.END:
                return g.open
                  ? (G.keyCode === Ie.END
                      ? (g.selectedIdx = g.links.length - 1)
                      : (g.selectedIdx = 0),
                    B(g),
                    G.preventDefault(),
                    G.stopPropagation())
                  : (G.preventDefault(), G.stopPropagation());
            }
          };
        }
        function M(g) {
          return function (G) {
            if (g.open)
              switch (
                ((g.selectedIdx = g.links.index(document.activeElement)),
                G.keyCode)
              ) {
                case Ie.HOME:
                case Ie.END:
                  return (
                    G.keyCode === Ie.END
                      ? (g.selectedIdx = g.links.length - 1)
                      : (g.selectedIdx = 0),
                    B(g),
                    G.preventDefault(),
                    G.stopPropagation()
                  );
                case Ie.ESCAPE:
                  return (
                    ae(g),
                    g.button.focus(),
                    G.preventDefault(),
                    G.stopPropagation()
                  );
                case Ie.ARROW_LEFT:
                case Ie.ARROW_UP:
                  return (
                    (g.selectedIdx = Math.max(-1, g.selectedIdx - 1)),
                    B(g),
                    G.preventDefault(),
                    G.stopPropagation()
                  );
                case Ie.ARROW_RIGHT:
                case Ie.ARROW_DOWN:
                  return (
                    (g.selectedIdx = Math.min(
                      g.links.length - 1,
                      g.selectedIdx + 1
                    )),
                    B(g),
                    G.preventDefault(),
                    G.stopPropagation()
                  );
              }
          };
        }
        function B(g) {
          if (g.links[g.selectedIdx]) {
            var G = g.links[g.selectedIdx];
            G.focus(), le(G);
          }
        }
        function z(g) {
          g.open && (ae(g, !0), pt(g, !0));
        }
        function J(g) {
          return a(function () {
            g.open ? ae(g) : pt(g);
          });
        }
        function le(g) {
          return function (G) {
            var W = e(this),
              U = W.attr("href");
            if (!It.validClick(G.currentTarget)) {
              G.preventDefault();
              return;
            }
            U && U.indexOf("#") === 0 && g.open && ae(g);
          };
        }
        function Fe(g) {
          return (
            g.outside && o.off("click" + y, g.outside),
            function (G) {
              var W = e(G.target);
              (p && W.closest(".w-editor-bem-EditorOverlay").length) ||
                ve(g, W);
            }
          );
        }
        var ve = a(function (g, G) {
          if (g.open) {
            var W = G.closest(".w-nav-menu");
            g.menu.is(W) || ae(g);
          }
        });
        function Y(g, G) {
          var W = e.data(G, y),
            U = (W.collapsed = W.button.css("display") !== "none");
          if ((W.open && !U && !f && ae(W, !0), W.container.length)) {
            var ce = Re(W);
            W.links.each(ce), W.dropdowns.each(ce);
          }
          W.open && gr(W);
        }
        var ee = "max-width";
        function Re(g) {
          var G = g.container.css(ee);
          return (
            G === "none" && (G = ""),
            function (W, U) {
              (U = e(U)), U.css(ee, ""), U.css(ee) === "none" && U.css(ee, G);
            }
          );
        }
        function Ce(g, G) {
          G.setAttribute("data-nav-menu-open", "");
        }
        function Ot(g, G) {
          G.removeAttribute("data-nav-menu-open");
        }
        function pt(g, G) {
          if (g.open) return;
          (g.open = !0),
            g.menu.each(Ce),
            g.links.addClass(x),
            g.dropdowns.addClass(_),
            g.dropdownToggle.addClass(N),
            g.dropdownList.addClass(O),
            g.button.addClass(m);
          var W = g.config,
            U = W.animation;
          (U === "none" || !n.support.transform || W.duration <= 0) && (G = !0);
          var ce = gr(g),
            hr = g.menu.outerHeight(!0),
            At = g.menu.outerWidth(!0),
            l = g.el.height(),
            E = g.el[0];
          if (
            (Y(0, E),
            I.intro(0, E),
            It.redraw.up(),
            f || o.on("click" + y, g.outside),
            G)
          ) {
            L();
            return;
          }
          var T = "transform " + W.duration + "ms " + W.easing;
          if (
            (g.overlay &&
              ((w = g.menu.prev()), g.overlay.show().append(g.menu)),
            W.animOver)
          ) {
            n(g.menu)
              .add(T)
              .set({ x: W.animDirect * At, height: ce })
              .start({ x: 0 })
              .then(L),
              g.overlay && g.overlay.width(At);
            return;
          }
          var b = l + hr;
          n(g.menu).add(T).set({ y: -b }).start({ y: 0 }).then(L);
          function L() {
            g.button.attr("aria-expanded", "true");
          }
        }
        function gr(g) {
          var G = g.config,
            W = G.docHeight ? o.height() : s.height();
          return (
            G.animOver
              ? g.menu.height(W)
              : g.el.css("position") !== "fixed" && (W -= g.el.outerHeight(!0)),
            g.overlay && g.overlay.height(W),
            W
          );
        }
        function ae(g, G) {
          if (!g.open) return;
          (g.open = !1), g.button.removeClass(m);
          var W = g.config;
          if (
            ((W.animation === "none" ||
              !n.support.transform ||
              W.duration <= 0) &&
              (G = !0),
            I.outro(0, g.el[0]),
            o.off("click" + y, g.outside),
            G)
          ) {
            n(g.menu).stop(), E();
            return;
          }
          var U = "transform " + W.duration + "ms " + W.easing2,
            ce = g.menu.outerHeight(!0),
            hr = g.menu.outerWidth(!0),
            At = g.el.height();
          if (W.animOver) {
            n(g.menu)
              .add(U)
              .start({ x: hr * W.animDirect })
              .then(E);
            return;
          }
          var l = At + ce;
          n(g.menu).add(U).start({ y: -l }).then(E);
          function E() {
            g.menu.height(""),
              n(g.menu).set({ x: 0, y: 0 }),
              g.menu.each(Ot),
              g.links.removeClass(x),
              g.dropdowns.removeClass(_),
              g.dropdownToggle.removeClass(N),
              g.dropdownList.removeClass(O),
              g.overlay &&
                g.overlay.children().length &&
                (w.length ? g.menu.insertAfter(w) : g.menu.prependTo(g.parent),
                g.overlay.attr("style", "").hide()),
              g.el.triggerHandler("w-close"),
              g.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var P_ = u((Xj, L_) => {
    "use strict";
    var bt = We(),
      IH = cn();
    bt.define(
      "tabs",
      (L_.exports = function (e) {
        var t = {},
          r = e.tram,
          n = e(document),
          i,
          o,
          a = bt.env,
          s = a.safari,
          c = a(),
          f = "data-w-tab",
          p = "data-w-pane",
          d = ".w-tabs",
          h = "w--current",
          y = "w--tab-active",
          m = IH.triggers,
          _ = !1;
        (t.ready = t.design = t.preview = N),
          (t.redraw = function () {
            (_ = !0), N(), (_ = !1);
          }),
          (t.destroy = function () {
            (i = n.find(d)), i.length && (i.each(I), O());
          });
        function N() {
          (o = c && bt.env("design")),
            (i = n.find(d)),
            i.length &&
              (i.each(w), bt.env("preview") && !_ && i.each(I), O(), x());
        }
        function O() {
          bt.redraw.off(t.redraw);
        }
        function x() {
          bt.redraw.on(t.redraw);
        }
        function I(D, A) {
          var v = e.data(A, d);
          v &&
            (v.links && v.links.each(m.reset),
            v.panes && v.panes.each(m.reset));
        }
        function w(D, A) {
          var v = d.substr(1) + "-" + D,
            S = e(A),
            q = e.data(A, d);
          if (
            (q || (q = e.data(A, d, { el: S, config: {} })),
            (q.current = null),
            (q.tabIdentifier = v + "-" + f),
            (q.paneIdentifier = v + "-" + p),
            (q.menu = S.children(".w-tab-menu")),
            (q.links = q.menu.children(".w-tab-link")),
            (q.content = S.children(".w-tab-content")),
            (q.panes = q.content.children(".w-tab-pane")),
            q.el.off(d),
            q.links.off(d),
            q.menu.attr("role", "tablist"),
            q.links.attr("tabindex", "-1"),
            P(q),
            !o)
          ) {
            q.links.on("click" + d, V(q)), q.links.on("keydown" + d, H(q));
            var M = q.links.filter("." + h),
              B = M.attr(f);
            B && X(q, { tab: B, immediate: !0 });
          }
        }
        function P(D) {
          var A = {};
          A.easing = D.el.attr("data-easing") || "ease";
          var v = parseInt(D.el.attr("data-duration-in"), 10);
          v = A.intro = v === v ? v : 0;
          var S = parseInt(D.el.attr("data-duration-out"), 10);
          (S = A.outro = S === S ? S : 0),
            (A.immediate = !v && !S),
            (D.config = A);
        }
        function R(D) {
          var A = D.current;
          return Array.prototype.findIndex.call(
            D.links,
            (v) => v.getAttribute(f) === A,
            null
          );
        }
        function V(D) {
          return function (A) {
            A.preventDefault();
            var v = A.currentTarget.getAttribute(f);
            v && X(D, { tab: v });
          };
        }
        function H(D) {
          return function (A) {
            var v = R(D),
              S = A.key,
              q = {
                ArrowLeft: v - 1,
                ArrowUp: v - 1,
                ArrowRight: v + 1,
                ArrowDown: v + 1,
                End: D.links.length - 1,
                Home: 0,
              };
            if (S in q) {
              A.preventDefault();
              var M = q[S];
              M === -1 && (M = D.links.length - 1),
                M === D.links.length && (M = 0);
              var B = D.links[M],
                z = B.getAttribute(f);
              z && X(D, { tab: z });
            }
          };
        }
        function X(D, A) {
          A = A || {};
          var v = D.config,
            S = v.easing,
            q = A.tab;
          if (q !== D.current) {
            D.current = q;
            var M;
            D.links.each(function (Y, ee) {
              var Re = e(ee);
              if (A.immediate || v.immediate) {
                var Ce = D.panes[Y];
                ee.id || (ee.id = D.tabIdentifier + "-" + Y),
                  Ce.id || (Ce.id = D.paneIdentifier + "-" + Y),
                  (ee.href = "#" + Ce.id),
                  ee.setAttribute("role", "tab"),
                  ee.setAttribute("aria-controls", Ce.id),
                  ee.setAttribute("aria-selected", "false"),
                  Ce.setAttribute("role", "tabpanel"),
                  Ce.setAttribute("aria-labelledby", ee.id);
              }
              ee.getAttribute(f) === q
                ? ((M = ee),
                  Re.addClass(h)
                    .removeAttr("tabindex")
                    .attr({ "aria-selected": "true" })
                    .each(m.intro))
                : Re.hasClass(h) &&
                  Re.removeClass(h)
                    .attr({ tabindex: "-1", "aria-selected": "false" })
                    .each(m.outro);
            });
            var B = [],
              z = [];
            D.panes.each(function (Y, ee) {
              var Re = e(ee);
              ee.getAttribute(f) === q
                ? B.push(ee)
                : Re.hasClass(y) && z.push(ee);
            });
            var J = e(B),
              le = e(z);
            if (A.immediate || v.immediate) {
              J.addClass(y).each(m.intro),
                le.removeClass(y),
                _ || bt.redraw.up();
              return;
            } else {
              var Fe = window.scrollX,
                ve = window.scrollY;
              M.focus(), window.scrollTo(Fe, ve);
            }
            le.length && v.outro
              ? (le.each(m.outro),
                r(le)
                  .add("opacity " + v.outro + "ms " + S, { fallback: s })
                  .start({ opacity: 0 })
                  .then(() => k(v, le, J)))
              : k(v, le, J);
          }
        }
        function k(D, A, v) {
          if (
            (A.removeClass(y).css({
              opacity: "",
              transition: "",
              transform: "",
              width: "",
              height: "",
            }),
            v.addClass(y).each(m.intro),
            bt.redraw.up(),
            !D.intro)
          )
            return r(v).set({ opacity: 1 });
          r(v)
            .set({ opacity: 0 })
            .redraw()
            .add("opacity " + D.intro + "ms " + D.easing, { fallback: s })
            .start({ opacity: 1 });
        }
        return t;
      })
    );
  });
  Vs();
  Hs();
  Ws();
  js();
  cn();
  b_();
  A_();
  S_();
  R_();
  N_();
  P_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    e: {
      id: "e",
      name: "",
      animationType: "custom",
      eventTypeId: "NAVBAR_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2",
        },
      },
      mediaQueries: ["medium", "small", "tiny"],
      target: {
        selector: ".fn-navbar-box",
        originalId:
          "633a8c879841f97233b55cdb|ad0ba315-fc13-bfab-7541-7ee7c9ab8f63",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".fn-navbar-box",
          originalId:
            "633a8c879841f97233b55cdb|ad0ba315-fc13-bfab-7541-7ee7c9ab8f63",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1665414429807,
    },
    "e-2": {
      id: "e-2",
      name: "",
      animationType: "custom",
      eventTypeId: "NAVBAR_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e",
        },
      },
      mediaQueries: ["medium", "small", "tiny"],
      target: {
        selector: ".fn-navbar-box",
        originalId:
          "633a8c879841f97233b55cdb|ad0ba315-fc13-bfab-7541-7ee7c9ab8f63",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".fn-navbar-box",
          originalId:
            "633a8c879841f97233b55cdb|ad0ba315-fc13-bfab-7541-7ee7c9ab8f63",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1665414429807,
    },
    "e-3": {
      id: "e-3",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-4",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".fn-faq-item-toggle",
        originalId:
          "65aeaa8be30f44d6344a8b57|a0a1eda3-a892-bc3f-1bd8-40785da95cc8",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".fn-faq-item-toggle",
          originalId:
            "65aeaa8be30f44d6344a8b57|a0a1eda3-a892-bc3f-1bd8-40785da95cc8",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1665570341921,
    },
    "e-4": {
      id: "e-4",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".fn-faq-item-toggle",
        originalId:
          "65aeaa8be30f44d6344a8b57|a0a1eda3-a892-bc3f-1bd8-40785da95cc8",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".fn-faq-item-toggle",
          originalId:
            "65aeaa8be30f44d6344a8b57|a0a1eda3-a892-bc3f-1bd8-40785da95cc8",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1665570341923,
    },
    "e-7": {
      id: "e-7",
      name: "",
      animationType: "custom",
      eventTypeId: "TAB_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-8",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".fn-tabs-link",
        originalId:
          "65aeaa8be30f44d6344a8b57|8f19ca9c-ab5d-7bc0-d481-773906cf8b36",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".fn-tabs-link",
          originalId:
            "65aeaa8be30f44d6344a8b57|8f19ca9c-ab5d-7bc0-d481-773906cf8b36",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1665518887380,
    },
    "e-8": {
      id: "e-8",
      name: "",
      animationType: "custom",
      eventTypeId: "TAB_INACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-7",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".fn-tabs-link",
        originalId:
          "65aeaa8be30f44d6344a8b57|8f19ca9c-ab5d-7bc0-d481-773906cf8b36",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".fn-tabs-link",
          originalId:
            "65aeaa8be30f44d6344a8b57|8f19ca9c-ab5d-7bc0-d481-773906cf8b36",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1665518887381,
    },
  },
  actionLists: {
    a: {
      id: "a",
      title: "FN Open Nav",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".fn-nav-line-2",
                  selectorGuids: ["8f37b943-bc4b-a1cb-3f95-7064a0df78c1"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".fn-nav-line-1",
                  selectorGuids: ["8f37b943-bc4b-a1cb-3f95-7064a0df78c2"],
                },
                zValue: 45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".fn-nav-line-1",
                  selectorGuids: ["8f37b943-bc4b-a1cb-3f95-7064a0df78c2"],
                },
                yValue: 6,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".fn-nav-line-3",
                  selectorGuids: ["8f37b943-bc4b-a1cb-3f95-7064a0df78c0"],
                },
                yValue: -6,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-n-5",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".fn-nav-line-3",
                  selectorGuids: ["8f37b943-bc4b-a1cb-3f95-7064a0df78c0"],
                },
                zValue: -45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1635931496114,
    },
    "a-2": {
      id: "a-2",
      title: "FN Close Nav",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".fn-nav-line-2",
                  selectorGuids: ["8f37b943-bc4b-a1cb-3f95-7064a0df78c1"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-2-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".fn-nav-line-1",
                  selectorGuids: ["8f37b943-bc4b-a1cb-3f95-7064a0df78c2"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-2-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".fn-nav-line-1",
                  selectorGuids: ["8f37b943-bc4b-a1cb-3f95-7064a0df78c2"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".fn-nav-line-3",
                  selectorGuids: ["8f37b943-bc4b-a1cb-3f95-7064a0df78c0"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-5",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".fn-nav-line-3",
                  selectorGuids: ["8f37b943-bc4b-a1cb-3f95-7064a0df78c0"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1635931496114,
    },
    "a-5": {
      id: "a-5",
      title: "FN FAQ Open Box",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-5-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".fn-paragraph-no-margin",
                  selectorGuids: ["1494e824-2658-a875-a92b-98fa27391d57"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-5-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".spacer-s",
                  selectorGuids: ["1494e824-2658-a875-a92b-98fa27391d58"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-5-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".spacer-s",
                  selectorGuids: ["1494e824-2658-a875-a92b-98fa27391d58"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-5-n-4",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".fn-faq-arrow-down",
                  selectorGuids: ["1494e824-2658-a875-a92b-98fa27391d59"],
                },
                globalSwatchId: "",
                rValue: 102,
                bValue: 38,
                gValue: 38,
                aValue: 1,
              },
            },
            {
              id: "a-5-n-5",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".fn-faq-arrow-down",
                  selectorGuids: ["1494e824-2658-a875-a92b-98fa27391d59"],
                },
                zValue: 180,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-5-n-6",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 100,
                easing: "outQuint",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".fn-paragraph-no-margin",
                  selectorGuids: ["1494e824-2658-a875-a92b-98fa27391d57"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1665570350081,
    },
    "a-6": {
      id: "a-6",
      title: "FN FAQ Close / Box",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".fn-faq-arrow-down",
                  selectorGuids: ["1494e824-2658-a875-a92b-98fa27391d59"],
                },
                globalSwatchId: "",
                rValue: 236,
                bValue: 239,
                gValue: 240,
                aValue: 1,
              },
            },
            {
              id: "a-6-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".fn-faq-arrow-down",
                  selectorGuids: ["1494e824-2658-a875-a92b-98fa27391d59"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-6-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".fn-paragraph-no-margin",
                  selectorGuids: ["1494e824-2658-a875-a92b-98fa27391d57"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-6-n-4",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 100,
                easing: "outQuint",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".spacer-s",
                  selectorGuids: ["1494e824-2658-a875-a92b-98fa27391d58"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1665570350081,
    },
    "a-9": {
      id: "a-9",
      title: "FN Feature Tab In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-9-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".fn-tabs-paragraph",
                  selectorGuids: ["9564c397-fdf6-120c-99eb-3010e7d3a426"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-9-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".fn-tabs-paragraph",
                  selectorGuids: ["9564c397-fdf6-120c-99eb-3010e7d3a426"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1665518896000,
    },
    "a-10": {
      id: "a-10",
      title: "FN Feature Tab Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-10-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".fn-tabs-paragraph",
                  selectorGuids: ["9564c397-fdf6-120c-99eb-3010e7d3a426"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1665518896000,
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
