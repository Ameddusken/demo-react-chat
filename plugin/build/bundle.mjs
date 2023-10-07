var Mr = { exports: {} }, Ke = {}, mr = { exports: {} }, g = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ct;
function Ut() {
  if (ct)
    return g;
  ct = 1;
  var X = Symbol.for("react.element"), y = Symbol.for("react.portal"), Re = Symbol.for("react.fragment"), Q = Symbol.for("react.strict_mode"), pe = Symbol.for("react.profiler"), te = Symbol.for("react.provider"), ne = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), ee = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), U = Symbol.iterator;
  function re(n) {
    return n === null || typeof n != "object" ? null : (n = U && n[U] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var K = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ce = Object.assign, Ie = {};
  function ae(n, s, m) {
    this.props = n, this.context = s, this.refs = Ie, this.updater = m || K;
  }
  ae.prototype.isReactComponent = {}, ae.prototype.setState = function(n, s) {
    if (typeof n != "object" && typeof n != "function" && n != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, s, "setState");
  }, ae.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function oe() {
  }
  oe.prototype = ae.prototype;
  function I(n, s, m) {
    this.props = n, this.context = s, this.refs = Ie, this.updater = m || K;
  }
  var me = I.prototype = new oe();
  me.constructor = I, ce(me, ae.prototype), me.isPureReactComponent = !0;
  var ie = Array.isArray, M = Object.prototype.hasOwnProperty, z = { current: null }, le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ve(n, s, m) {
    var C, _ = {}, P = null, k = null;
    if (s != null)
      for (C in s.ref !== void 0 && (k = s.ref), s.key !== void 0 && (P = "" + s.key), s)
        M.call(s, C) && !le.hasOwnProperty(C) && (_[C] = s[C]);
    var T = arguments.length - 2;
    if (T === 1)
      _.children = m;
    else if (1 < T) {
      for (var w = Array(T), W = 0; W < T; W++)
        w[W] = arguments[W + 2];
      _.children = w;
    }
    if (n && n.defaultProps)
      for (C in T = n.defaultProps, T)
        _[C] === void 0 && (_[C] = T[C]);
    return { $$typeof: X, type: n, key: P, ref: k, props: _, _owner: z.current };
  }
  function Ce(n, s) {
    return { $$typeof: X, type: n.type, key: s, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function we(n) {
    return typeof n == "object" && n !== null && n.$$typeof === X;
  }
  function Ye(n) {
    var s = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(m) {
      return s[m];
    });
  }
  var Se = /\/+/g;
  function H(n, s) {
    return typeof n == "object" && n !== null && n.key != null ? Ye("" + n.key) : s.toString(36);
  }
  function G(n, s, m, C, _) {
    var P = typeof n;
    (P === "undefined" || P === "boolean") && (n = null);
    var k = !1;
    if (n === null)
      k = !0;
    else
      switch (P) {
        case "string":
        case "number":
          k = !0;
          break;
        case "object":
          switch (n.$$typeof) {
            case X:
            case y:
              k = !0;
          }
      }
    if (k)
      return k = n, _ = _(k), n = C === "" ? "." + H(k, 0) : C, ie(_) ? (m = "", n != null && (m = n.replace(Se, "$&/") + "/"), G(_, s, m, "", function(W) {
        return W;
      })) : _ != null && (we(_) && (_ = Ce(_, m + (!_.key || k && k.key === _.key ? "" : ("" + _.key).replace(Se, "$&/") + "/") + n)), s.push(_)), 1;
    if (k = 0, C = C === "" ? "." : C + ":", ie(n))
      for (var T = 0; T < n.length; T++) {
        P = n[T];
        var w = C + H(P, T);
        k += G(P, s, m, w, _);
      }
    else if (w = re(n), typeof w == "function")
      for (n = w.call(n), T = 0; !(P = n.next()).done; )
        P = P.value, w = C + H(P, T++), k += G(P, s, m, w, _);
    else if (P === "object")
      throw s = String(n), Error("Objects are not valid as a React child (found: " + (s === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : s) + "). If you meant to render a collection of children, use an array instead.");
    return k;
  }
  function Y(n, s, m) {
    if (n == null)
      return n;
    var C = [], _ = 0;
    return G(n, C, "", "", function(P) {
      return s.call(m, P, _++);
    }), C;
  }
  function ue(n) {
    if (n._status === -1) {
      var s = n._result;
      s = s(), s.then(function(m) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = m);
      }, function(m) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = m);
      }), n._status === -1 && (n._status = 0, n._result = s);
    }
    if (n._status === 1)
      return n._result.default;
    throw n._result;
  }
  var d = { current: null }, fe = { transition: null }, Te = { ReactCurrentDispatcher: d, ReactCurrentBatchConfig: fe, ReactCurrentOwner: z };
  return g.Children = { map: Y, forEach: function(n, s, m) {
    Y(n, function() {
      s.apply(this, arguments);
    }, m);
  }, count: function(n) {
    var s = 0;
    return Y(n, function() {
      s++;
    }), s;
  }, toArray: function(n) {
    return Y(n, function(s) {
      return s;
    }) || [];
  }, only: function(n) {
    if (!we(n))
      throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, g.Component = ae, g.Fragment = Re, g.Profiler = pe, g.PureComponent = I, g.StrictMode = Q, g.Suspense = N, g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Te, g.cloneElement = function(n, s, m) {
    if (n == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var C = ce({}, n.props), _ = n.key, P = n.ref, k = n._owner;
    if (s != null) {
      if (s.ref !== void 0 && (P = s.ref, k = z.current), s.key !== void 0 && (_ = "" + s.key), n.type && n.type.defaultProps)
        var T = n.type.defaultProps;
      for (w in s)
        M.call(s, w) && !le.hasOwnProperty(w) && (C[w] = s[w] === void 0 && T !== void 0 ? T[w] : s[w]);
    }
    var w = arguments.length - 2;
    if (w === 1)
      C.children = m;
    else if (1 < w) {
      T = Array(w);
      for (var W = 0; W < w; W++)
        T[W] = arguments[W + 2];
      C.children = T;
    }
    return { $$typeof: X, type: n.type, key: _, ref: P, props: C, _owner: k };
  }, g.createContext = function(n) {
    return n = { $$typeof: ne, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: te, _context: n }, n.Consumer = n;
  }, g.createElement = ve, g.createFactory = function(n) {
    var s = ve.bind(null, n);
    return s.type = n, s;
  }, g.createRef = function() {
    return { current: null };
  }, g.forwardRef = function(n) {
    return { $$typeof: Z, render: n };
  }, g.isValidElement = we, g.lazy = function(n) {
    return { $$typeof: L, _payload: { _status: -1, _result: n }, _init: ue };
  }, g.memo = function(n, s) {
    return { $$typeof: ee, type: n, compare: s === void 0 ? null : s };
  }, g.startTransition = function(n) {
    var s = fe.transition;
    fe.transition = {};
    try {
      n();
    } finally {
      fe.transition = s;
    }
  }, g.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, g.useCallback = function(n, s) {
    return d.current.useCallback(n, s);
  }, g.useContext = function(n) {
    return d.current.useContext(n);
  }, g.useDebugValue = function() {
  }, g.useDeferredValue = function(n) {
    return d.current.useDeferredValue(n);
  }, g.useEffect = function(n, s) {
    return d.current.useEffect(n, s);
  }, g.useId = function() {
    return d.current.useId();
  }, g.useImperativeHandle = function(n, s, m) {
    return d.current.useImperativeHandle(n, s, m);
  }, g.useInsertionEffect = function(n, s) {
    return d.current.useInsertionEffect(n, s);
  }, g.useLayoutEffect = function(n, s) {
    return d.current.useLayoutEffect(n, s);
  }, g.useMemo = function(n, s) {
    return d.current.useMemo(n, s);
  }, g.useReducer = function(n, s, m) {
    return d.current.useReducer(n, s, m);
  }, g.useRef = function(n) {
    return d.current.useRef(n);
  }, g.useState = function(n) {
    return d.current.useState(n);
  }, g.useSyncExternalStore = function(n, s, m) {
    return d.current.useSyncExternalStore(n, s, m);
  }, g.useTransition = function() {
    return d.current.useTransition();
  }, g.version = "18.2.0", g;
}
var Je = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Je.exports;
var lt;
function Yt() {
  return lt || (lt = 1, function(X, y) {
    "development" !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Re = "18.2.0", Q = Symbol.for("react.element"), pe = Symbol.for("react.portal"), te = Symbol.for("react.fragment"), ne = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), N = Symbol.for("react.provider"), ee = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), Ie = Symbol.for("react.offscreen"), ae = Symbol.iterator, oe = "@@iterator";
      function I(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = ae && e[ae] || e[oe];
        return typeof r == "function" ? r : null;
      }
      var me = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ie = {
        transition: null
      }, M = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, z = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, le = {}, ve = null;
      function Ce(e) {
        ve = e;
      }
      le.setExtraStackFrame = function(e) {
        ve = e;
      }, le.getCurrentStack = null, le.getStackAddendum = function() {
        var e = "";
        ve && (e += ve);
        var r = le.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var we = !1, Ye = !1, Se = !1, H = !1, G = !1, Y = {
        ReactCurrentDispatcher: me,
        ReactCurrentBatchConfig: ie,
        ReactCurrentOwner: z
      };
      Y.ReactDebugCurrentFrame = le, Y.ReactCurrentActQueue = M;
      function ue(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          fe("warn", e, a);
        }
      }
      function d(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          fe("error", e, a);
        }
      }
      function fe(e, r, a) {
        {
          var o = Y.ReactDebugCurrentFrame, u = o.getStackAddendum();
          u !== "" && (r += "%s", a = a.concat([u]));
          var p = a.map(function(f) {
            return String(f);
          });
          p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
        }
      }
      var Te = {};
      function n(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", u = o + "." + r;
          if (Te[u])
            return;
          d("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), Te[u] = !0;
        }
      }
      var s = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, a) {
          n(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, a, o) {
          n(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, a, o) {
          n(e, "setState");
        }
      }, m = Object.assign, C = {};
      Object.freeze(C);
      function _(e, r, a) {
        this.props = e, this.context = r, this.refs = C, this.updater = a || s;
      }
      _.prototype.isReactComponent = {}, _.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, _.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var P = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, k = function(e, r) {
          Object.defineProperty(_.prototype, e, {
            get: function() {
              ue("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var T in P)
          P.hasOwnProperty(T) && k(T, P[T]);
      }
      function w() {
      }
      w.prototype = _.prototype;
      function W(e, r, a) {
        this.props = e, this.context = r, this.refs = C, this.updater = a || s;
      }
      var he = W.prototype = new w();
      he.constructor = W, m(he, _.prototype), he.isPureReactComponent = !0;
      function hr() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var Xe = Array.isArray;
      function $e(e) {
        return Xe(e);
      }
      function gr(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function Ne(e) {
        try {
          return Oe(e), !1;
        } catch {
          return !0;
        }
      }
      function Oe(e) {
        return "" + e;
      }
      function Pe(e) {
        if (Ne(e))
          return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(e)), Oe(e);
      }
      function Qe(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var u = r.displayName || r.name || "";
        return u !== "" ? a + "(" + u + ")" : a;
      }
      function ke(e) {
        return e.displayName || "Context";
      }
      function de(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case te:
            return "Fragment";
          case pe:
            return "Portal";
          case Z:
            return "Profiler";
          case ne:
            return "StrictMode";
          case U:
            return "Suspense";
          case re:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case ee:
              var r = e;
              return ke(r) + ".Consumer";
            case N:
              var a = e;
              return ke(a._context) + ".Provider";
            case L:
              return Qe(e, e.render, "ForwardRef");
            case K:
              var o = e.displayName || null;
              return o !== null ? o : de(e.type) || "Memo";
            case ce: {
              var u = e, p = u._payload, f = u._init;
              try {
                return de(f(p));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var je = Object.prototype.hasOwnProperty, Le = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ze, er, Me;
      Me = {};
      function Be(e) {
        if (je.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function ge(e) {
        if (je.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function _r(e, r) {
        var a = function() {
          Ze || (Ze = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function rr(e, r) {
        var a = function() {
          er || (er = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function tr(e) {
        if (typeof e.ref == "string" && z.current && e.__self && z.current.stateNode !== e.__self) {
          var r = de(z.current.type);
          Me[r] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Me[r] = !0);
        }
      }
      var xe = function(e, r, a, o, u, p, f) {
        var v = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Q,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: f,
          // Record the component responsible for creating this element.
          _owner: p
        };
        return v._store = {}, Object.defineProperty(v._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(v, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(v, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: u
        }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
      };
      function br(e, r, a) {
        var o, u = {}, p = null, f = null, v = null, E = null;
        if (r != null) {
          Be(r) && (f = r.ref, tr(r)), ge(r) && (Pe(r.key), p = "" + r.key), v = r.__self === void 0 ? null : r.__self, E = r.__source === void 0 ? null : r.__source;
          for (o in r)
            je.call(r, o) && !Le.hasOwnProperty(o) && (u[o] = r[o]);
        }
        var O = arguments.length - 2;
        if (O === 1)
          u.children = a;
        else if (O > 1) {
          for (var x = Array(O), A = 0; A < O; A++)
            x[A] = arguments[A + 2];
          Object.freeze && Object.freeze(x), u.children = x;
        }
        if (e && e.defaultProps) {
          var F = e.defaultProps;
          for (o in F)
            u[o] === void 0 && (u[o] = F[o]);
        }
        if (p || f) {
          var V = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          p && _r(u, V), f && rr(u, V);
        }
        return xe(e, p, f, v, E, z.current, u);
      }
      function Er(e, r) {
        var a = xe(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function Rr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, u = m({}, e.props), p = e.key, f = e.ref, v = e._self, E = e._source, O = e._owner;
        if (r != null) {
          Be(r) && (f = r.ref, O = z.current), ge(r) && (Pe(r.key), p = "" + r.key);
          var x;
          e.type && e.type.defaultProps && (x = e.type.defaultProps);
          for (o in r)
            je.call(r, o) && !Le.hasOwnProperty(o) && (r[o] === void 0 && x !== void 0 ? u[o] = x[o] : u[o] = r[o]);
        }
        var A = arguments.length - 2;
        if (A === 1)
          u.children = a;
        else if (A > 1) {
          for (var F = Array(A), V = 0; V < A; V++)
            F[V] = arguments[V + 2];
          u.children = F;
        }
        return xe(e.type, p, f, v, E, O, u);
      }
      function _e(e) {
        return typeof e == "object" && e !== null && e.$$typeof === Q;
      }
      var nr = ".", Cr = ":";
      function wr(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(u) {
          return a[u];
        });
        return "$" + o;
      }
      var Ve = !1, ar = /\/+/g;
      function ye(e) {
        return e.replace(ar, "$&/");
      }
      function Ae(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (Pe(e.key), wr("" + e.key)) : r.toString(36);
      }
      function be(e, r, a, o, u) {
        var p = typeof e;
        (p === "undefined" || p === "boolean") && (e = null);
        var f = !1;
        if (e === null)
          f = !0;
        else
          switch (p) {
            case "string":
            case "number":
              f = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case Q:
                case pe:
                  f = !0;
              }
          }
        if (f) {
          var v = e, E = u(v), O = o === "" ? nr + Ae(v, 0) : o;
          if ($e(E)) {
            var x = "";
            O != null && (x = ye(O) + "/"), be(E, r, x, "", function(Wt) {
              return Wt;
            });
          } else
            E != null && (_e(E) && (E.key && (!v || v.key !== E.key) && Pe(E.key), E = Er(
              E,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (E.key && (!v || v.key !== E.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                ye("" + E.key) + "/"
              ) : "") + O
            )), r.push(E));
          return 1;
        }
        var A, F, V = 0, q = o === "" ? nr : o + Cr;
        if ($e(e))
          for (var yr = 0; yr < e.length; yr++)
            A = e[yr], F = q + Ae(A, yr), V += be(A, r, a, F, u);
        else {
          var Lr = I(e);
          if (typeof Lr == "function") {
            var it = e;
            Lr === it.entries && (Ve || ue("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ve = !0);
            for (var Mt = Lr.call(it), ut, Vt = 0; !(ut = Mt.next()).done; )
              A = ut.value, F = q + Ae(A, Vt++), V += be(A, r, a, F, u);
          } else if (p === "object") {
            var st = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (st === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : st) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return V;
      }
      function De(e, r, a) {
        if (e == null)
          return e;
        var o = [], u = 0;
        return be(e, o, "", "", function(p) {
          return r.call(a, p, u++);
        }), o;
      }
      function Sr(e) {
        var r = 0;
        return De(e, function() {
          r++;
        }), r;
      }
      function or(e, r, a) {
        De(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function Tr(e) {
        return De(e, function(r) {
          return r;
        }) || [];
      }
      function ir(e) {
        if (!_e(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function ur(e) {
        var r = {
          $$typeof: ee,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: N,
          _context: r
        };
        var a = !1, o = !1, u = !1;
        {
          var p = {
            $$typeof: ee,
            _context: r
          };
          Object.defineProperties(p, {
            Provider: {
              get: function() {
                return o || (o = !0, d("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(f) {
                r.Provider = f;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(f) {
                r._currentValue = f;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(f) {
                r._currentValue2 = f;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(f) {
                r._threadCount = f;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, d("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(f) {
                u || (ue("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", f), u = !0);
              }
            }
          }), r.Consumer = p;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var Fe = -1, qe = 0, ze = 1, Or = 2;
      function Pr(e) {
        if (e._status === Fe) {
          var r = e._result, a = r();
          if (a.then(function(p) {
            if (e._status === qe || e._status === Fe) {
              var f = e;
              f._status = ze, f._result = p;
            }
          }, function(p) {
            if (e._status === qe || e._status === Fe) {
              var f = e;
              f._status = Or, f._result = p;
            }
          }), e._status === Fe) {
            var o = e;
            o._status = qe, o._result = a;
          }
        }
        if (e._status === ze) {
          var u = e._result;
          return u === void 0 && d(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, u), "default" in u || d(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, u), u.default;
        } else
          throw e._result;
      }
      function kr(e) {
        var r = {
          // We use these fields to store the result.
          _status: Fe,
          _result: e
        }, a = {
          $$typeof: ce,
          _payload: r,
          _init: Pr
        };
        {
          var o, u;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(p) {
                d("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = p, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return u;
              },
              set: function(p) {
                d("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), u = p, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function jr(e) {
        e != null && e.$$typeof === K ? d("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? d("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && d("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && d("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: L,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var t;
      t = Symbol.for("react.module.reference");
      function i(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === te || e === Z || G || e === ne || e === U || e === re || H || e === Ie || we || Ye || Se || typeof e == "object" && e !== null && (e.$$typeof === ce || e.$$typeof === K || e.$$typeof === N || e.$$typeof === ee || e.$$typeof === L || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === t || e.getModuleId !== void 0));
      }
      function c(e, r) {
        i(e) || d("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: K,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(u) {
              o = u, !e.name && !e.displayName && (e.displayName = u);
            }
          });
        }
        return a;
      }
      function l() {
        var e = me.current;
        return e === null && d(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function R(e) {
        var r = l();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? d("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && d("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function S(e) {
        var r = l();
        return r.useState(e);
      }
      function b(e, r, a) {
        var o = l();
        return o.useReducer(e, r, a);
      }
      function h(e) {
        var r = l();
        return r.useRef(e);
      }
      function B(e, r) {
        var a = l();
        return a.useEffect(e, r);
      }
      function D(e, r) {
        var a = l();
        return a.useInsertionEffect(e, r);
      }
      function $(e, r) {
        var a = l();
        return a.useLayoutEffect(e, r);
      }
      function J(e, r) {
        var a = l();
        return a.useCallback(e, r);
      }
      function Ee(e, r) {
        var a = l();
        return a.useMemo(e, r);
      }
      function sr(e, r, a) {
        var o = l();
        return o.useImperativeHandle(e, r, a);
      }
      function se(e, r) {
        {
          var a = l();
          return a.useDebugValue(e, r);
        }
      }
      function mt() {
        var e = l();
        return e.useTransition();
      }
      function ht(e) {
        var r = l();
        return r.useDeferredValue(e);
      }
      function gt() {
        var e = l();
        return e.useId();
      }
      function _t(e, r, a) {
        var o = l();
        return o.useSyncExternalStore(e, r, a);
      }
      var He = 0, Vr, Wr, Ur, Yr, Br, qr, zr;
      function Hr() {
      }
      Hr.__reactDisabledLog = !0;
      function bt() {
        {
          if (He === 0) {
            Vr = console.log, Wr = console.info, Ur = console.warn, Yr = console.error, Br = console.group, qr = console.groupCollapsed, zr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Hr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          He++;
        }
      }
      function Et() {
        {
          if (He--, He === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: m({}, e, {
                value: Vr
              }),
              info: m({}, e, {
                value: Wr
              }),
              warn: m({}, e, {
                value: Ur
              }),
              error: m({}, e, {
                value: Yr
              }),
              group: m({}, e, {
                value: Br
              }),
              groupCollapsed: m({}, e, {
                value: qr
              }),
              groupEnd: m({}, e, {
                value: zr
              })
            });
          }
          He < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var xr = Y.ReactCurrentDispatcher, Ar;
      function cr(e, r, a) {
        {
          if (Ar === void 0)
            try {
              throw Error();
            } catch (u) {
              var o = u.stack.trim().match(/\n( *(at )?)/);
              Ar = o && o[1] || "";
            }
          return `
` + Ar + e;
        }
      }
      var Dr = !1, lr;
      {
        var Rt = typeof WeakMap == "function" ? WeakMap : Map;
        lr = new Rt();
      }
      function Kr(e, r) {
        if (!e || Dr)
          return "";
        {
          var a = lr.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        Dr = !0;
        var u = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var p;
        p = xr.current, xr.current = null, bt();
        try {
          if (r) {
            var f = function() {
              throw Error();
            };
            if (Object.defineProperty(f.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(f, []);
              } catch (q) {
                o = q;
              }
              Reflect.construct(e, [], f);
            } else {
              try {
                f.call();
              } catch (q) {
                o = q;
              }
              e.call(f.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (q) {
              o = q;
            }
            e();
          }
        } catch (q) {
          if (q && o && typeof q.stack == "string") {
            for (var v = q.stack.split(`
`), E = o.stack.split(`
`), O = v.length - 1, x = E.length - 1; O >= 1 && x >= 0 && v[O] !== E[x]; )
              x--;
            for (; O >= 1 && x >= 0; O--, x--)
              if (v[O] !== E[x]) {
                if (O !== 1 || x !== 1)
                  do
                    if (O--, x--, x < 0 || v[O] !== E[x]) {
                      var A = `
` + v[O].replace(" at new ", " at ");
                      return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && lr.set(e, A), A;
                    }
                  while (O >= 1 && x >= 0);
                break;
              }
          }
        } finally {
          Dr = !1, xr.current = p, Et(), Error.prepareStackTrace = u;
        }
        var F = e ? e.displayName || e.name : "", V = F ? cr(F) : "";
        return typeof e == "function" && lr.set(e, V), V;
      }
      function Ct(e, r, a) {
        return Kr(e, !1);
      }
      function wt(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function fr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Kr(e, wt(e));
        if (typeof e == "string")
          return cr(e);
        switch (e) {
          case U:
            return cr("Suspense");
          case re:
            return cr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case L:
              return Ct(e.render);
            case K:
              return fr(e.type, r, a);
            case ce: {
              var o = e, u = o._payload, p = o._init;
              try {
                return fr(p(u), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var Gr = {}, Jr = Y.ReactDebugCurrentFrame;
      function dr(e) {
        if (e) {
          var r = e._owner, a = fr(e.type, e._source, r ? r.type : null);
          Jr.setExtraStackFrame(a);
        } else
          Jr.setExtraStackFrame(null);
      }
      function St(e, r, a, o, u) {
        {
          var p = Function.call.bind(je);
          for (var f in e)
            if (p(e, f)) {
              var v = void 0;
              try {
                if (typeof e[f] != "function") {
                  var E = Error((o || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw E.name = "Invariant Violation", E;
                }
                v = e[f](r, f, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (O) {
                v = O;
              }
              v && !(v instanceof Error) && (dr(u), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, f, typeof v), dr(null)), v instanceof Error && !(v.message in Gr) && (Gr[v.message] = !0, dr(u), d("Failed %s type: %s", a, v.message), dr(null));
            }
        }
      }
      function We(e) {
        if (e) {
          var r = e._owner, a = fr(e.type, e._source, r ? r.type : null);
          Ce(a);
        } else
          Ce(null);
      }
      var Fr;
      Fr = !1;
      function Xr() {
        if (z.current) {
          var e = de(z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Tt(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function Ot(e) {
        return e != null ? Tt(e.__source) : "";
      }
      var Qr = {};
      function Pt(e) {
        var r = Xr();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function Zr(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = Pt(r);
          if (!Qr[a]) {
            Qr[a] = !0;
            var o = "";
            e && e._owner && e._owner !== z.current && (o = " It was passed a child from " + de(e._owner.type) + "."), We(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), We(null);
          }
        }
      }
      function et(e, r) {
        if (typeof e == "object") {
          if ($e(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              _e(o) && Zr(o, r);
            }
          else if (_e(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var u = I(e);
            if (typeof u == "function" && u !== e.entries)
              for (var p = u.call(e), f; !(f = p.next()).done; )
                _e(f.value) && Zr(f.value, r);
          }
        }
      }
      function rt(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === L || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === K))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = de(r);
            St(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !Fr) {
            Fr = !0;
            var u = de(r);
            d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function kt(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              We(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), We(null);
              break;
            }
          }
          e.ref !== null && (We(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), We(null));
        }
      }
      function tt(e, r, a) {
        var o = i(e);
        if (!o) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = Ot(r);
          p ? u += p : u += Xr();
          var f;
          e === null ? f = "null" : $e(e) ? f = "array" : e !== void 0 && e.$$typeof === Q ? (f = "<" + (de(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, d("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, u);
        }
        var v = br.apply(this, arguments);
        if (v == null)
          return v;
        if (o)
          for (var E = 2; E < arguments.length; E++)
            et(arguments[E], e);
        return e === te ? kt(v) : rt(v), v;
      }
      var nt = !1;
      function jt(e) {
        var r = tt.bind(null, e);
        return r.type = e, nt || (nt = !0, ue("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return ue("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function xt(e, r, a) {
        for (var o = Rr.apply(this, arguments), u = 2; u < arguments.length; u++)
          et(arguments[u], o.type);
        return rt(o), o;
      }
      function At(e, r) {
        var a = ie.transition;
        ie.transition = {};
        var o = ie.transition;
        ie.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (ie.transition = a, a === null && o._updatedFibers) {
            var u = o._updatedFibers.size;
            u > 10 && ue("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var at = !1, pr = null;
      function Dt(e) {
        if (pr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = X && X[r];
            pr = a.call(X, "timers").setImmediate;
          } catch {
            pr = function(u) {
              at === !1 && (at = !0, typeof MessageChannel > "u" && d("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var p = new MessageChannel();
              p.port1.onmessage = u, p.port2.postMessage(void 0);
            };
          }
        return pr(e);
      }
      var Ue = 0, ot = !1;
      function Ft(e) {
        {
          var r = Ue;
          Ue++, M.current === null && (M.current = []);
          var a = M.isBatchingLegacy, o;
          try {
            if (M.isBatchingLegacy = !0, o = e(), !a && M.didScheduleLegacyUpdate) {
              var u = M.current;
              u !== null && (M.didScheduleLegacyUpdate = !1, Nr(u));
            }
          } catch (F) {
            throw vr(r), F;
          } finally {
            M.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var p = o, f = !1, v = {
              then: function(F, V) {
                f = !0, p.then(function(q) {
                  vr(r), Ue === 0 ? Ir(q, F, V) : F(q);
                }, function(q) {
                  vr(r), V(q);
                });
              }
            };
            return !ot && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              f || (ot = !0, d("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), v;
          } else {
            var E = o;
            if (vr(r), Ue === 0) {
              var O = M.current;
              O !== null && (Nr(O), M.current = null);
              var x = {
                then: function(F, V) {
                  M.current === null ? (M.current = [], Ir(E, F, V)) : F(E);
                }
              };
              return x;
            } else {
              var A = {
                then: function(F, V) {
                  F(E);
                }
              };
              return A;
            }
          }
        }
      }
      function vr(e) {
        e !== Ue - 1 && d("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ue = e;
      }
      function Ir(e, r, a) {
        {
          var o = M.current;
          if (o !== null)
            try {
              Nr(o), Dt(function() {
                o.length === 0 ? (M.current = null, r(e)) : Ir(e, r, a);
              });
            } catch (u) {
              a(u);
            }
          else
            r(e);
        }
      }
      var $r = !1;
      function Nr(e) {
        if (!$r) {
          $r = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            $r = !1;
          }
        }
      }
      var It = tt, $t = xt, Nt = jt, Lt = {
        map: De,
        forEach: or,
        count: Sr,
        toArray: Tr,
        only: ir
      };
      y.Children = Lt, y.Component = _, y.Fragment = te, y.Profiler = Z, y.PureComponent = W, y.StrictMode = ne, y.Suspense = U, y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y, y.cloneElement = $t, y.createContext = ur, y.createElement = It, y.createFactory = Nt, y.createRef = hr, y.forwardRef = jr, y.isValidElement = _e, y.lazy = kr, y.memo = c, y.startTransition = At, y.unstable_act = Ft, y.useCallback = J, y.useContext = R, y.useDebugValue = se, y.useDeferredValue = ht, y.useEffect = B, y.useId = gt, y.useImperativeHandle = sr, y.useInsertionEffect = D, y.useLayoutEffect = $, y.useMemo = Ee, y.useReducer = b, y.useRef = h, y.useState = S, y.useSyncExternalStore = _t, y.useTransition = mt, y.version = Re, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Je, Je.exports)), Je.exports;
}
var ft;
function yt() {
  return ft || (ft = 1, "development" === "production" ? mr.exports = Ut() : mr.exports = Yt()), mr.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function Bt() {
  if (dt)
    return Ke;
  dt = 1;
  var X = yt(), y = Symbol.for("react.element"), Re = Symbol.for("react.fragment"), Q = Object.prototype.hasOwnProperty, pe = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ne(Z, N, ee) {
    var L, U = {}, re = null, K = null;
    ee !== void 0 && (re = "" + ee), N.key !== void 0 && (re = "" + N.key), N.ref !== void 0 && (K = N.ref);
    for (L in N)
      Q.call(N, L) && !te.hasOwnProperty(L) && (U[L] = N[L]);
    if (Z && Z.defaultProps)
      for (L in N = Z.defaultProps, N)
        U[L] === void 0 && (U[L] = N[L]);
    return { $$typeof: y, type: Z, key: re, ref: K, props: U, _owner: pe.current };
  }
  return Ke.Fragment = Re, Ke.jsx = ne, Ke.jsxs = ne, Ke;
}
var Ge = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pt;
function qt() {
  return pt || (pt = 1, "development" !== "production" && function() {
    var X = yt(), y = Symbol.for("react.element"), Re = Symbol.for("react.portal"), Q = Symbol.for("react.fragment"), pe = Symbol.for("react.strict_mode"), te = Symbol.for("react.profiler"), ne = Symbol.for("react.provider"), Z = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), re = Symbol.for("react.lazy"), K = Symbol.for("react.offscreen"), ce = Symbol.iterator, Ie = "@@iterator";
    function ae(t) {
      if (t === null || typeof t != "object")
        return null;
      var i = ce && t[ce] || t[Ie];
      return typeof i == "function" ? i : null;
    }
    var oe = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function I(t) {
      {
        for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
          c[l - 1] = arguments[l];
        me("error", t, c);
      }
    }
    function me(t, i, c) {
      {
        var l = oe.ReactDebugCurrentFrame, R = l.getStackAddendum();
        R !== "" && (i += "%s", c = c.concat([R]));
        var S = c.map(function(b) {
          return String(b);
        });
        S.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, S);
      }
    }
    var ie = !1, M = !1, z = !1, le = !1, ve = !1, Ce;
    Ce = Symbol.for("react.module.reference");
    function we(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === Q || t === te || ve || t === pe || t === ee || t === L || le || t === K || ie || M || z || typeof t == "object" && t !== null && (t.$$typeof === re || t.$$typeof === U || t.$$typeof === ne || t.$$typeof === Z || t.$$typeof === N || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Ce || t.getModuleId !== void 0));
    }
    function Ye(t, i, c) {
      var l = t.displayName;
      if (l)
        return l;
      var R = i.displayName || i.name || "";
      return R !== "" ? c + "(" + R + ")" : c;
    }
    function Se(t) {
      return t.displayName || "Context";
    }
    function H(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && I("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case Q:
          return "Fragment";
        case Re:
          return "Portal";
        case te:
          return "Profiler";
        case pe:
          return "StrictMode";
        case ee:
          return "Suspense";
        case L:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case Z:
            var i = t;
            return Se(i) + ".Consumer";
          case ne:
            var c = t;
            return Se(c._context) + ".Provider";
          case N:
            return Ye(t, t.render, "ForwardRef");
          case U:
            var l = t.displayName || null;
            return l !== null ? l : H(t.type) || "Memo";
          case re: {
            var R = t, S = R._payload, b = R._init;
            try {
              return H(b(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, Y = 0, ue, d, fe, Te, n, s, m;
    function C() {
    }
    C.__reactDisabledLog = !0;
    function _() {
      {
        if (Y === 0) {
          ue = console.log, d = console.info, fe = console.warn, Te = console.error, n = console.group, s = console.groupCollapsed, m = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: C,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        Y++;
      }
    }
    function P() {
      {
        if (Y--, Y === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: G({}, t, {
              value: ue
            }),
            info: G({}, t, {
              value: d
            }),
            warn: G({}, t, {
              value: fe
            }),
            error: G({}, t, {
              value: Te
            }),
            group: G({}, t, {
              value: n
            }),
            groupCollapsed: G({}, t, {
              value: s
            }),
            groupEnd: G({}, t, {
              value: m
            })
          });
        }
        Y < 0 && I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var k = oe.ReactCurrentDispatcher, T;
    function w(t, i, c) {
      {
        if (T === void 0)
          try {
            throw Error();
          } catch (R) {
            var l = R.stack.trim().match(/\n( *(at )?)/);
            T = l && l[1] || "";
          }
        return `
` + T + t;
      }
    }
    var W = !1, he;
    {
      var hr = typeof WeakMap == "function" ? WeakMap : Map;
      he = new hr();
    }
    function Xe(t, i) {
      if (!t || W)
        return "";
      {
        var c = he.get(t);
        if (c !== void 0)
          return c;
      }
      var l;
      W = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = k.current, k.current = null, _();
      try {
        if (i) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (se) {
              l = se;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (se) {
              l = se;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (se) {
            l = se;
          }
          t();
        }
      } catch (se) {
        if (se && l && typeof se.stack == "string") {
          for (var h = se.stack.split(`
`), B = l.stack.split(`
`), D = h.length - 1, $ = B.length - 1; D >= 1 && $ >= 0 && h[D] !== B[$]; )
            $--;
          for (; D >= 1 && $ >= 0; D--, $--)
            if (h[D] !== B[$]) {
              if (D !== 1 || $ !== 1)
                do
                  if (D--, $--, $ < 0 || h[D] !== B[$]) {
                    var J = `
` + h[D].replace(" at new ", " at ");
                    return t.displayName && J.includes("<anonymous>") && (J = J.replace("<anonymous>", t.displayName)), typeof t == "function" && he.set(t, J), J;
                  }
                while (D >= 1 && $ >= 0);
              break;
            }
        }
      } finally {
        W = !1, k.current = S, P(), Error.prepareStackTrace = R;
      }
      var Ee = t ? t.displayName || t.name : "", sr = Ee ? w(Ee) : "";
      return typeof t == "function" && he.set(t, sr), sr;
    }
    function $e(t, i, c) {
      return Xe(t, !1);
    }
    function gr(t) {
      var i = t.prototype;
      return !!(i && i.isReactComponent);
    }
    function Ne(t, i, c) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Xe(t, gr(t));
      if (typeof t == "string")
        return w(t);
      switch (t) {
        case ee:
          return w("Suspense");
        case L:
          return w("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case N:
            return $e(t.render);
          case U:
            return Ne(t.type, i, c);
          case re: {
            var l = t, R = l._payload, S = l._init;
            try {
              return Ne(S(R), i, c);
            } catch {
            }
          }
        }
      return "";
    }
    var Oe = Object.prototype.hasOwnProperty, Pe = {}, Qe = oe.ReactDebugCurrentFrame;
    function ke(t) {
      if (t) {
        var i = t._owner, c = Ne(t.type, t._source, i ? i.type : null);
        Qe.setExtraStackFrame(c);
      } else
        Qe.setExtraStackFrame(null);
    }
    function de(t, i, c, l, R) {
      {
        var S = Function.call.bind(Oe);
        for (var b in t)
          if (S(t, b)) {
            var h = void 0;
            try {
              if (typeof t[b] != "function") {
                var B = Error((l || "React class") + ": " + c + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw B.name = "Invariant Violation", B;
              }
              h = t[b](i, b, l, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (D) {
              h = D;
            }
            h && !(h instanceof Error) && (ke(R), I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", c, b, typeof h), ke(null)), h instanceof Error && !(h.message in Pe) && (Pe[h.message] = !0, ke(R), I("Failed %s type: %s", c, h.message), ke(null));
          }
      }
    }
    var je = Array.isArray;
    function Le(t) {
      return je(t);
    }
    function Ze(t) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, c = i && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return c;
      }
    }
    function er(t) {
      try {
        return Me(t), !1;
      } catch {
        return !0;
      }
    }
    function Me(t) {
      return "" + t;
    }
    function Be(t) {
      if (er(t))
        return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(t)), Me(t);
    }
    var ge = oe.ReactCurrentOwner, _r = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rr, tr, xe;
    xe = {};
    function br(t) {
      if (Oe.call(t, "ref")) {
        var i = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Er(t) {
      if (Oe.call(t, "key")) {
        var i = Object.getOwnPropertyDescriptor(t, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Rr(t, i) {
      if (typeof t.ref == "string" && ge.current && i && ge.current.stateNode !== i) {
        var c = H(ge.current.type);
        xe[c] || (I('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(ge.current.type), t.ref), xe[c] = !0);
      }
    }
    function _e(t, i) {
      {
        var c = function() {
          rr || (rr = !0, I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function nr(t, i) {
      {
        var c = function() {
          tr || (tr = !0, I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var Cr = function(t, i, c, l, R, S, b) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: y,
        // Built-in properties that belong on the element
        type: t,
        key: i,
        ref: c,
        props: b,
        // Record the component responsible for creating this element.
        _owner: S
      };
      return h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(h, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function wr(t, i, c, l, R) {
      {
        var S, b = {}, h = null, B = null;
        c !== void 0 && (Be(c), h = "" + c), Er(i) && (Be(i.key), h = "" + i.key), br(i) && (B = i.ref, Rr(i, R));
        for (S in i)
          Oe.call(i, S) && !_r.hasOwnProperty(S) && (b[S] = i[S]);
        if (t && t.defaultProps) {
          var D = t.defaultProps;
          for (S in D)
            b[S] === void 0 && (b[S] = D[S]);
        }
        if (h || B) {
          var $ = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          h && _e(b, $), B && nr(b, $);
        }
        return Cr(t, h, B, R, l, ge.current, b);
      }
    }
    var Ve = oe.ReactCurrentOwner, ar = oe.ReactDebugCurrentFrame;
    function ye(t) {
      if (t) {
        var i = t._owner, c = Ne(t.type, t._source, i ? i.type : null);
        ar.setExtraStackFrame(c);
      } else
        ar.setExtraStackFrame(null);
    }
    var Ae;
    Ae = !1;
    function be(t) {
      return typeof t == "object" && t !== null && t.$$typeof === y;
    }
    function De() {
      {
        if (Ve.current) {
          var t = H(Ve.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Sr(t) {
      {
        if (t !== void 0) {
          var i = t.fileName.replace(/^.*[\\\/]/, ""), c = t.lineNumber;
          return `

Check your code at ` + i + ":" + c + ".";
        }
        return "";
      }
    }
    var or = {};
    function Tr(t) {
      {
        var i = De();
        if (!i) {
          var c = typeof t == "string" ? t : t.displayName || t.name;
          c && (i = `

Check the top-level render call using <` + c + ">.");
        }
        return i;
      }
    }
    function ir(t, i) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var c = Tr(i);
        if (or[c])
          return;
        or[c] = !0;
        var l = "";
        t && t._owner && t._owner !== Ve.current && (l = " It was passed a child from " + H(t._owner.type) + "."), ye(t), I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, l), ye(null);
      }
    }
    function ur(t, i) {
      {
        if (typeof t != "object")
          return;
        if (Le(t))
          for (var c = 0; c < t.length; c++) {
            var l = t[c];
            be(l) && ir(l, i);
          }
        else if (be(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var R = ae(t);
          if (typeof R == "function" && R !== t.entries)
            for (var S = R.call(t), b; !(b = S.next()).done; )
              be(b.value) && ir(b.value, i);
        }
      }
    }
    function Fe(t) {
      {
        var i = t.type;
        if (i == null || typeof i == "string")
          return;
        var c;
        if (typeof i == "function")
          c = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === N || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === U))
          c = i.propTypes;
        else
          return;
        if (c) {
          var l = H(i);
          de(c, t.props, "prop", l, t);
        } else if (i.PropTypes !== void 0 && !Ae) {
          Ae = !0;
          var R = H(i);
          I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function qe(t) {
      {
        for (var i = Object.keys(t.props), c = 0; c < i.length; c++) {
          var l = i[c];
          if (l !== "children" && l !== "key") {
            ye(t), I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), ye(null);
            break;
          }
        }
        t.ref !== null && (ye(t), I("Invalid attribute `ref` supplied to `React.Fragment`."), ye(null));
      }
    }
    function ze(t, i, c, l, R, S) {
      {
        var b = we(t);
        if (!b) {
          var h = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var B = Sr(R);
          B ? h += B : h += De();
          var D;
          t === null ? D = "null" : Le(t) ? D = "array" : t !== void 0 && t.$$typeof === y ? (D = "<" + (H(t.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : D = typeof t, I("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", D, h);
        }
        var $ = wr(t, i, c, R, S);
        if ($ == null)
          return $;
        if (b) {
          var J = i.children;
          if (J !== void 0)
            if (l)
              if (Le(J)) {
                for (var Ee = 0; Ee < J.length; Ee++)
                  ur(J[Ee], t);
                Object.freeze && Object.freeze(J);
              } else
                I("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ur(J, t);
        }
        return t === Q ? qe($) : Fe($), $;
      }
    }
    function Or(t, i, c) {
      return ze(t, i, c, !0);
    }
    function Pr(t, i, c) {
      return ze(t, i, c, !1);
    }
    var kr = Pr, jr = Or;
    Ge.Fragment = Q, Ge.jsx = kr, Ge.jsxs = jr;
  }()), Ge;
}
"development" === "production" ? Mr.exports = Bt() : Mr.exports = qt();
var j = Mr.exports;
const zt = () => /* @__PURE__ */ j.jsx("div", { className: "wrapper", children: /* @__PURE__ */ j.jsxs("div", { className: "inner", "data-onvisible-trigger": 1, children: [
  /* @__PURE__ */ j.jsx("h1", { id: "text17", className: "style5", children: "Kontakt" }),
  /* @__PURE__ */ j.jsxs("form", { id: "form02", method: "post", className: "style1", children: [
    /* @__PURE__ */ j.jsxs("div", { className: "inner", children: [
      /* @__PURE__ */ j.jsxs("div", { className: "field", children: [
        /* @__PURE__ */ j.jsx("label", { htmlFor: "form02-name", children: "Navn" }),
        /* @__PURE__ */ j.jsx("input", { type: "text", name: "name", id: "form02-name", maxLength: 128, required: !0 })
      ] }),
      /* @__PURE__ */ j.jsxs("div", { className: "field", children: [
        /* @__PURE__ */ j.jsx("label", { htmlFor: "form02-email", children: "Email" }),
        /* @__PURE__ */ j.jsx("input", { type: "email", name: "email", id: "form02-email", maxLength: 128, required: !0 })
      ] }),
      /* @__PURE__ */ j.jsxs("div", { className: "field", children: [
        /* @__PURE__ */ j.jsx("label", { htmlFor: "form02-phone", children: "Telefonnummer" }),
        /* @__PURE__ */ j.jsx("input", { type: "text", name: "phone", id: "form02-phone", maxLength: 64, required: !0 })
      ] }),
      /* @__PURE__ */ j.jsx("div", { className: "field", children: /* @__PURE__ */ j.jsx("input", { type: "text", name: "url", id: "form02-url", placeholder: "Url", maxLength: 128 }) }),
      /* @__PURE__ */ j.jsxs("div", { className: "field", children: [
        /* @__PURE__ */ j.jsx("label", { htmlFor: "form02-message", children: "Besked" }),
        /* @__PURE__ */ j.jsx("textarea", { "data-gramm_editor": "false", name: "message", id: "form02-message", maxLength: 16384, required: !0, defaultValue: "" })
      ] }),
      /* @__PURE__ */ j.jsx("div", { className: "actions", children: /* @__PURE__ */ j.jsxs("button", { type: "submit", children: [
        /* @__PURE__ */ j.jsx("svg", { children: /* @__PURE__ */ j.jsx("use", { xlinkHref: "#icon-67ad41ecc66a1b1cd00d0d3b20c00017" }) }),
        /* @__PURE__ */ j.jsx("span", { className: "label", children: "Send" })
      ] }) })
    ] }),
    /* @__PURE__ */ j.jsx("input", { type: "hidden", name: "id", defaultValue: "form02" })
  ] })
] }) }), vt = {
  name: "tetris",
  Message: zt
};
window.vfplugin = Object.assign(window.vfplugin ?? {}, {
  [vt.name]: vt
});
