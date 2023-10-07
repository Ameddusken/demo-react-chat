var Wr = { exports: {} }, Ge = {}, mr = { exports: {} }, g = {};
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
  var H = Symbol.for("react.element"), v = Symbol.for("react.portal"), ae = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), oe = Symbol.for("react.profiler"), Z = Symbol.for("react.provider"), ee = Symbol.for("react.context"), re = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), te = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), Y = Symbol.iterator;
  function ne(n) {
    return n === null || typeof n != "object" ? null : (n = Y && n[Y] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var J = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, fe = Object.assign, Ie = {};
  function ie(n, s, m) {
    this.props = n, this.context = s, this.refs = Ie, this.updater = m || J;
  }
  ie.prototype.isReactComponent = {}, ie.prototype.setState = function(n, s) {
    if (typeof n != "object" && typeof n != "function" && n != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, s, "setState");
  }, ie.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function ue() {
  }
  ue.prototype = ie.prototype;
  function I(n, s, m) {
    this.props = n, this.context = s, this.refs = Ie, this.updater = m || J;
  }
  var he = I.prototype = new ue();
  he.constructor = I, fe(he, ie.prototype), he.isPureReactComponent = !0;
  var se = Array.isArray, W = Object.prototype.hasOwnProperty, G = { current: null }, de = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ye(n, s, m) {
    var w, b = {}, k = null, P = null;
    if (s != null)
      for (w in s.ref !== void 0 && (P = s.ref), s.key !== void 0 && (k = "" + s.key), s)
        W.call(s, w) && !de.hasOwnProperty(w) && (b[w] = s[w]);
    var T = arguments.length - 2;
    if (T === 1)
      b.children = m;
    else if (1 < T) {
      for (var C = Array(T), U = 0; U < T; U++)
        C[U] = arguments[U + 2];
      b.children = C;
    }
    if (n && n.defaultProps)
      for (w in T = n.defaultProps, T)
        b[w] === void 0 && (b[w] = T[w]);
    return { $$typeof: H, type: n, key: k, ref: P, props: b, _owner: G.current };
  }
  function we(n, s) {
    return { $$typeof: H, type: n.type, key: s, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function Ce(n) {
    return typeof n == "object" && n !== null && n.$$typeof === H;
  }
  function Ye(n) {
    var s = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(m) {
      return s[m];
    });
  }
  var Se = /\/+/g;
  function K(n, s) {
    return typeof n == "object" && n !== null && n.key != null ? Ye("" + n.key) : s.toString(36);
  }
  function X(n, s, m, w, b) {
    var k = typeof n;
    (k === "undefined" || k === "boolean") && (n = null);
    var P = !1;
    if (n === null)
      P = !0;
    else
      switch (k) {
        case "string":
        case "number":
          P = !0;
          break;
        case "object":
          switch (n.$$typeof) {
            case H:
            case v:
              P = !0;
          }
      }
    if (P)
      return P = n, b = b(P), n = w === "" ? "." + K(P, 0) : w, se(b) ? (m = "", n != null && (m = n.replace(Se, "$&/") + "/"), X(b, s, m, "", function(U) {
        return U;
      })) : b != null && (Ce(b) && (b = we(b, m + (!b.key || P && P.key === b.key ? "" : ("" + b.key).replace(Se, "$&/") + "/") + n)), s.push(b)), 1;
    if (P = 0, w = w === "" ? "." : w + ":", se(n))
      for (var T = 0; T < n.length; T++) {
        k = n[T];
        var C = w + K(k, T);
        P += X(k, s, m, C, b);
      }
    else if (C = ne(n), typeof C == "function")
      for (n = C.call(n), T = 0; !(k = n.next()).done; )
        k = k.value, C = w + K(k, T++), P += X(k, s, m, C, b);
    else if (k === "object")
      throw s = String(n), Error("Objects are not valid as a React child (found: " + (s === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : s) + "). If you meant to render a collection of children, use an array instead.");
    return P;
  }
  function B(n, s, m) {
    if (n == null)
      return n;
    var w = [], b = 0;
    return X(n, w, "", "", function(k) {
      return s.call(m, k, b++);
    }), w;
  }
  function ce(n) {
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
  var d = { current: null }, pe = { transition: null }, Te = { ReactCurrentDispatcher: d, ReactCurrentBatchConfig: pe, ReactCurrentOwner: G };
  return g.Children = { map: B, forEach: function(n, s, m) {
    B(n, function() {
      s.apply(this, arguments);
    }, m);
  }, count: function(n) {
    var s = 0;
    return B(n, function() {
      s++;
    }), s;
  }, toArray: function(n) {
    return B(n, function(s) {
      return s;
    }) || [];
  }, only: function(n) {
    if (!Ce(n))
      throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, g.Component = ie, g.Fragment = ae, g.Profiler = oe, g.PureComponent = I, g.StrictMode = V, g.Suspense = L, g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Te, g.cloneElement = function(n, s, m) {
    if (n == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var w = fe({}, n.props), b = n.key, k = n.ref, P = n._owner;
    if (s != null) {
      if (s.ref !== void 0 && (k = s.ref, P = G.current), s.key !== void 0 && (b = "" + s.key), n.type && n.type.defaultProps)
        var T = n.type.defaultProps;
      for (C in s)
        W.call(s, C) && !de.hasOwnProperty(C) && (w[C] = s[C] === void 0 && T !== void 0 ? T[C] : s[C]);
    }
    var C = arguments.length - 2;
    if (C === 1)
      w.children = m;
    else if (1 < C) {
      T = Array(C);
      for (var U = 0; U < C; U++)
        T[U] = arguments[U + 2];
      w.children = T;
    }
    return { $$typeof: H, type: n.type, key: b, ref: k, props: w, _owner: P };
  }, g.createContext = function(n) {
    return n = { $$typeof: ee, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: Z, _context: n }, n.Consumer = n;
  }, g.createElement = ye, g.createFactory = function(n) {
    var s = ye.bind(null, n);
    return s.type = n, s;
  }, g.createRef = function() {
    return { current: null };
  }, g.forwardRef = function(n) {
    return { $$typeof: re, render: n };
  }, g.isValidElement = Ce, g.lazy = function(n) {
    return { $$typeof: N, _payload: { _status: -1, _result: n }, _init: ce };
  }, g.memo = function(n, s) {
    return { $$typeof: te, type: n, compare: s === void 0 ? null : s };
  }, g.startTransition = function(n) {
    var s = pe.transition;
    pe.transition = {};
    try {
      n();
    } finally {
      pe.transition = s;
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
  return lt || (lt = 1, function(H, v) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var ae = "18.2.0", V = Symbol.for("react.element"), oe = Symbol.for("react.portal"), Z = Symbol.for("react.fragment"), ee = Symbol.for("react.strict_mode"), re = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), te = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), ne = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), Ie = Symbol.for("react.offscreen"), ie = Symbol.iterator, ue = "@@iterator";
      function I(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = ie && e[ie] || e[ue];
        return typeof r == "function" ? r : null;
      }
      var he = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, se = {
        transition: null
      }, W = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, G = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, de = {}, ye = null;
      function we(e) {
        ye = e;
      }
      de.setExtraStackFrame = function(e) {
        ye = e;
      }, de.getCurrentStack = null, de.getStackAddendum = function() {
        var e = "";
        ye && (e += ye);
        var r = de.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var Ce = !1, Ye = !1, Se = !1, K = !1, X = !1, B = {
        ReactCurrentDispatcher: he,
        ReactCurrentBatchConfig: se,
        ReactCurrentOwner: G
      };
      B.ReactDebugCurrentFrame = de, B.ReactCurrentActQueue = W;
      function ce(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          pe("warn", e, a);
        }
      }
      function d(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          pe("error", e, a);
        }
      }
      function pe(e, r, a) {
        {
          var o = B.ReactDebugCurrentFrame, u = o.getStackAddendum();
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
      }, m = Object.assign, w = {};
      Object.freeze(w);
      function b(e, r, a) {
        this.props = e, this.context = r, this.refs = w, this.updater = a || s;
      }
      b.prototype.isReactComponent = {}, b.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, b.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var k = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, P = function(e, r) {
          Object.defineProperty(b.prototype, e, {
            get: function() {
              ce("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var T in k)
          k.hasOwnProperty(T) && P(T, k[T]);
      }
      function C() {
      }
      C.prototype = b.prototype;
      function U(e, r, a) {
        this.props = e, this.context = r, this.refs = w, this.updater = a || s;
      }
      var ge = U.prototype = new C();
      ge.constructor = U, m(ge, b.prototype), ge.isPureReactComponent = !0;
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
      function Le(e) {
        try {
          return Oe(e), !1;
        } catch {
          return !0;
        }
      }
      function Oe(e) {
        return "" + e;
      }
      function ke(e) {
        if (Le(e))
          return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(e)), Oe(e);
      }
      function Qe(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var u = r.displayName || r.name || "";
        return u !== "" ? a + "(" + u + ")" : a;
      }
      function Pe(e) {
        return e.displayName || "Context";
      }
      function ve(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case Z:
            return "Fragment";
          case oe:
            return "Portal";
          case re:
            return "Profiler";
          case ee:
            return "StrictMode";
          case Y:
            return "Suspense";
          case ne:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case te:
              var r = e;
              return Pe(r) + ".Consumer";
            case L:
              var a = e;
              return Pe(a._context) + ".Provider";
            case N:
              return Qe(e, e.render, "ForwardRef");
            case J:
              var o = e.displayName || null;
              return o !== null ? o : ve(e.type) || "Memo";
            case fe: {
              var u = e, p = u._payload, f = u._init;
              try {
                return ve(f(p));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var je = Object.prototype.hasOwnProperty, Ne = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ze, er, We;
      We = {};
      function Be(e) {
        if (je.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function be(e) {
        if (je.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function br(e, r) {
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
        if (typeof e.ref == "string" && G.current && e.__self && G.current.stateNode !== e.__self) {
          var r = ve(G.current.type);
          We[r] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), We[r] = !0);
        }
      }
      var xe = function(e, r, a, o, u, p, f) {
        var y = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: V,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: f,
          // Record the component responsible for creating this element.
          _owner: p
        };
        return y._store = {}, Object.defineProperty(y._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(y, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(y, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: u
        }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
      };
      function _r(e, r, a) {
        var o, u = {}, p = null, f = null, y = null, E = null;
        if (r != null) {
          Be(r) && (f = r.ref, tr(r)), be(r) && (ke(r.key), p = "" + r.key), y = r.__self === void 0 ? null : r.__self, E = r.__source === void 0 ? null : r.__source;
          for (o in r)
            je.call(r, o) && !Ne.hasOwnProperty(o) && (u[o] = r[o]);
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
          var D = e.defaultProps;
          for (o in D)
            u[o] === void 0 && (u[o] = D[o]);
        }
        if (p || f) {
          var M = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          p && br(u, M), f && rr(u, M);
        }
        return xe(e, p, f, y, E, G.current, u);
      }
      function Er(e, r) {
        var a = xe(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function Rr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, u = m({}, e.props), p = e.key, f = e.ref, y = e._self, E = e._source, O = e._owner;
        if (r != null) {
          Be(r) && (f = r.ref, O = G.current), be(r) && (ke(r.key), p = "" + r.key);
          var x;
          e.type && e.type.defaultProps && (x = e.type.defaultProps);
          for (o in r)
            je.call(r, o) && !Ne.hasOwnProperty(o) && (r[o] === void 0 && x !== void 0 ? u[o] = x[o] : u[o] = r[o]);
        }
        var A = arguments.length - 2;
        if (A === 1)
          u.children = a;
        else if (A > 1) {
          for (var D = Array(A), M = 0; M < A; M++)
            D[M] = arguments[M + 2];
          u.children = D;
        }
        return xe(e.type, p, f, y, E, O, u);
      }
      function _e(e) {
        return typeof e == "object" && e !== null && e.$$typeof === V;
      }
      var nr = ".", wr = ":";
      function Cr(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(u) {
          return a[u];
        });
        return "$" + o;
      }
      var Me = !1, ar = /\/+/g;
      function me(e) {
        return e.replace(ar, "$&/");
      }
      function Ae(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (ke(e.key), Cr("" + e.key)) : r.toString(36);
      }
      function Ee(e, r, a, o, u) {
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
                case V:
                case oe:
                  f = !0;
              }
          }
        if (f) {
          var y = e, E = u(y), O = o === "" ? nr + Ae(y, 0) : o;
          if ($e(E)) {
            var x = "";
            O != null && (x = me(O) + "/"), Ee(E, r, x, "", function(Vt) {
              return Vt;
            });
          } else
            E != null && (_e(E) && (E.key && (!y || y.key !== E.key) && ke(E.key), E = Er(
              E,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (E.key && (!y || y.key !== E.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                me("" + E.key) + "/"
              ) : "") + O
            )), r.push(E));
          return 1;
        }
        var A, D, M = 0, q = o === "" ? nr : o + wr;
        if ($e(e))
          for (var yr = 0; yr < e.length; yr++)
            A = e[yr], D = q + Ae(A, yr), M += Ee(A, r, a, D, u);
        else {
          var Nr = I(e);
          if (typeof Nr == "function") {
            var it = e;
            Nr === it.entries && (Me || ce("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Me = !0);
            for (var Wt = Nr.call(it), ut, Mt = 0; !(ut = Wt.next()).done; )
              A = ut.value, D = q + Ae(A, Mt++), M += Ee(A, r, a, D, u);
          } else if (p === "object") {
            var st = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (st === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : st) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return M;
      }
      function Fe(e, r, a) {
        if (e == null)
          return e;
        var o = [], u = 0;
        return Ee(e, o, "", "", function(p) {
          return r.call(a, p, u++);
        }), o;
      }
      function Sr(e) {
        var r = 0;
        return Fe(e, function() {
          r++;
        }), r;
      }
      function or(e, r, a) {
        Fe(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function Tr(e) {
        return Fe(e, function(r) {
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
          $$typeof: te,
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
          $$typeof: L,
          _context: r
        };
        var a = !1, o = !1, u = !1;
        {
          var p = {
            $$typeof: te,
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
                u || (ce("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", f), u = !0);
              }
            }
          }), r.Consumer = p;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var De = -1, ze = 0, qe = 1, Or = 2;
      function kr(e) {
        if (e._status === De) {
          var r = e._result, a = r();
          if (a.then(function(p) {
            if (e._status === ze || e._status === De) {
              var f = e;
              f._status = qe, f._result = p;
            }
          }, function(p) {
            if (e._status === ze || e._status === De) {
              var f = e;
              f._status = Or, f._result = p;
            }
          }), e._status === De) {
            var o = e;
            o._status = ze, o._result = a;
          }
        }
        if (e._status === qe) {
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
      function Pr(e) {
        var r = {
          // We use these fields to store the result.
          _status: De,
          _result: e
        }, a = {
          $$typeof: fe,
          _payload: r,
          _init: kr
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
        e != null && e.$$typeof === J ? d("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? d("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && d("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && d("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: N,
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
        return !!(typeof e == "string" || typeof e == "function" || e === Z || e === re || X || e === ee || e === Y || e === ne || K || e === Ie || Ce || Ye || Se || typeof e == "object" && e !== null && (e.$$typeof === fe || e.$$typeof === J || e.$$typeof === L || e.$$typeof === te || e.$$typeof === N || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === t || e.getModuleId !== void 0));
      }
      function c(e, r) {
        i(e) || d("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: J,
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
        var e = he.current;
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
      function _(e, r, a) {
        var o = l();
        return o.useReducer(e, r, a);
      }
      function h(e) {
        var r = l();
        return r.useRef(e);
      }
      function z(e, r) {
        var a = l();
        return a.useEffect(e, r);
      }
      function F(e, r) {
        var a = l();
        return a.useInsertionEffect(e, r);
      }
      function $(e, r) {
        var a = l();
        return a.useLayoutEffect(e, r);
      }
      function Q(e, r) {
        var a = l();
        return a.useCallback(e, r);
      }
      function Re(e, r) {
        var a = l();
        return a.useMemo(e, r);
      }
      function sr(e, r, a) {
        var o = l();
        return o.useImperativeHandle(e, r, a);
      }
      function le(e, r) {
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
      function bt(e, r, a) {
        var o = l();
        return o.useSyncExternalStore(e, r, a);
      }
      var He = 0, Mr, Vr, Ur, Yr, Br, zr, qr;
      function Hr() {
      }
      Hr.__reactDisabledLog = !0;
      function _t() {
        {
          if (He === 0) {
            Mr = console.log, Vr = console.info, Ur = console.warn, Yr = console.error, Br = console.group, zr = console.groupCollapsed, qr = console.groupEnd;
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
                value: Mr
              }),
              info: m({}, e, {
                value: Vr
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
                value: zr
              }),
              groupEnd: m({}, e, {
                value: qr
              })
            });
          }
          He < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var xr = B.ReactCurrentDispatcher, Ar;
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
      var Fr = !1, lr;
      {
        var Rt = typeof WeakMap == "function" ? WeakMap : Map;
        lr = new Rt();
      }
      function Gr(e, r) {
        if (!e || Fr)
          return "";
        {
          var a = lr.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        Fr = !0;
        var u = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var p;
        p = xr.current, xr.current = null, _t();
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
            for (var y = q.stack.split(`
`), E = o.stack.split(`
`), O = y.length - 1, x = E.length - 1; O >= 1 && x >= 0 && y[O] !== E[x]; )
              x--;
            for (; O >= 1 && x >= 0; O--, x--)
              if (y[O] !== E[x]) {
                if (O !== 1 || x !== 1)
                  do
                    if (O--, x--, x < 0 || y[O] !== E[x]) {
                      var A = `
` + y[O].replace(" at new ", " at ");
                      return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && lr.set(e, A), A;
                    }
                  while (O >= 1 && x >= 0);
                break;
              }
          }
        } finally {
          Fr = !1, xr.current = p, Et(), Error.prepareStackTrace = u;
        }
        var D = e ? e.displayName || e.name : "", M = D ? cr(D) : "";
        return typeof e == "function" && lr.set(e, M), M;
      }
      function wt(e, r, a) {
        return Gr(e, !1);
      }
      function Ct(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function fr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Gr(e, Ct(e));
        if (typeof e == "string")
          return cr(e);
        switch (e) {
          case Y:
            return cr("Suspense");
          case ne:
            return cr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case N:
              return wt(e.render);
            case J:
              return fr(e.type, r, a);
            case fe: {
              var o = e, u = o._payload, p = o._init;
              try {
                return fr(p(u), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var Kr = {}, Jr = B.ReactDebugCurrentFrame;
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
              var y = void 0;
              try {
                if (typeof e[f] != "function") {
                  var E = Error((o || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw E.name = "Invariant Violation", E;
                }
                y = e[f](r, f, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (O) {
                y = O;
              }
              y && !(y instanceof Error) && (dr(u), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, f, typeof y), dr(null)), y instanceof Error && !(y.message in Kr) && (Kr[y.message] = !0, dr(u), d("Failed %s type: %s", a, y.message), dr(null));
            }
        }
      }
      function Ve(e) {
        if (e) {
          var r = e._owner, a = fr(e.type, e._source, r ? r.type : null);
          we(a);
        } else
          we(null);
      }
      var Dr;
      Dr = !1;
      function Xr() {
        if (G.current) {
          var e = ve(G.current.type);
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
      function kt(e) {
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
          var a = kt(r);
          if (!Qr[a]) {
            Qr[a] = !0;
            var o = "";
            e && e._owner && e._owner !== G.current && (o = " It was passed a child from " + ve(e._owner.type) + "."), Ve(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), Ve(null);
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
          else if (typeof r == "object" && (r.$$typeof === N || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === J))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = ve(r);
            St(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !Dr) {
            Dr = !0;
            var u = ve(r);
            d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Pt(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              Ve(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), Ve(null);
              break;
            }
          }
          e.ref !== null && (Ve(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), Ve(null));
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
          e === null ? f = "null" : $e(e) ? f = "array" : e !== void 0 && e.$$typeof === V ? (f = "<" + (ve(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, d("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, u);
        }
        var y = _r.apply(this, arguments);
        if (y == null)
          return y;
        if (o)
          for (var E = 2; E < arguments.length; E++)
            et(arguments[E], e);
        return e === Z ? Pt(y) : rt(y), y;
      }
      var nt = !1;
      function jt(e) {
        var r = tt.bind(null, e);
        return r.type = e, nt || (nt = !0, ce("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return ce("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
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
        var a = se.transition;
        se.transition = {};
        var o = se.transition;
        se.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (se.transition = a, a === null && o._updatedFibers) {
            var u = o._updatedFibers.size;
            u > 10 && ce("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var at = !1, pr = null;
      function Ft(e) {
        if (pr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = H && H[r];
            pr = a.call(H, "timers").setImmediate;
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
      function Dt(e) {
        {
          var r = Ue;
          Ue++, W.current === null && (W.current = []);
          var a = W.isBatchingLegacy, o;
          try {
            if (W.isBatchingLegacy = !0, o = e(), !a && W.didScheduleLegacyUpdate) {
              var u = W.current;
              u !== null && (W.didScheduleLegacyUpdate = !1, Lr(u));
            }
          } catch (D) {
            throw vr(r), D;
          } finally {
            W.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var p = o, f = !1, y = {
              then: function(D, M) {
                f = !0, p.then(function(q) {
                  vr(r), Ue === 0 ? Ir(q, D, M) : D(q);
                }, function(q) {
                  vr(r), M(q);
                });
              }
            };
            return !ot && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              f || (ot = !0, d("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), y;
          } else {
            var E = o;
            if (vr(r), Ue === 0) {
              var O = W.current;
              O !== null && (Lr(O), W.current = null);
              var x = {
                then: function(D, M) {
                  W.current === null ? (W.current = [], Ir(E, D, M)) : D(E);
                }
              };
              return x;
            } else {
              var A = {
                then: function(D, M) {
                  D(E);
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
          var o = W.current;
          if (o !== null)
            try {
              Lr(o), Ft(function() {
                o.length === 0 ? (W.current = null, r(e)) : Ir(e, r, a);
              });
            } catch (u) {
              a(u);
            }
          else
            r(e);
        }
      }
      var $r = !1;
      function Lr(e) {
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
      var It = tt, $t = xt, Lt = jt, Nt = {
        map: Fe,
        forEach: or,
        count: Sr,
        toArray: Tr,
        only: ir
      };
      v.Children = Nt, v.Component = b, v.Fragment = Z, v.Profiler = re, v.PureComponent = U, v.StrictMode = ee, v.Suspense = Y, v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B, v.cloneElement = $t, v.createContext = ur, v.createElement = It, v.createFactory = Lt, v.createRef = hr, v.forwardRef = jr, v.isValidElement = _e, v.lazy = Pr, v.memo = c, v.startTransition = At, v.unstable_act = Dt, v.useCallback = Q, v.useContext = R, v.useDebugValue = le, v.useDeferredValue = ht, v.useEffect = z, v.useId = gt, v.useImperativeHandle = sr, v.useInsertionEffect = F, v.useLayoutEffect = $, v.useMemo = Re, v.useReducer = _, v.useRef = h, v.useState = S, v.useSyncExternalStore = bt, v.useTransition = mt, v.version = ae, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Je, Je.exports)), Je.exports;
}
var ft;
function yt() {
  return ft || (ft = 1, process.env.NODE_ENV === "production" ? mr.exports = Ut() : mr.exports = Yt()), mr.exports;
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
    return Ge;
  dt = 1;
  var H = yt(), v = Symbol.for("react.element"), ae = Symbol.for("react.fragment"), V = Object.prototype.hasOwnProperty, oe = H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Z = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ee(re, L, te) {
    var N, Y = {}, ne = null, J = null;
    te !== void 0 && (ne = "" + te), L.key !== void 0 && (ne = "" + L.key), L.ref !== void 0 && (J = L.ref);
    for (N in L)
      V.call(L, N) && !Z.hasOwnProperty(N) && (Y[N] = L[N]);
    if (re && re.defaultProps)
      for (N in L = re.defaultProps, L)
        Y[N] === void 0 && (Y[N] = L[N]);
    return { $$typeof: v, type: re, key: ne, ref: J, props: Y, _owner: oe.current };
  }
  return Ge.Fragment = ae, Ge.jsx = ee, Ge.jsxs = ee, Ge;
}
var Ke = {};
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
function zt() {
  return pt || (pt = 1, process.env.NODE_ENV !== "production" && function() {
    var H = yt(), v = Symbol.for("react.element"), ae = Symbol.for("react.portal"), V = Symbol.for("react.fragment"), oe = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), ee = Symbol.for("react.provider"), re = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), J = Symbol.for("react.offscreen"), fe = Symbol.iterator, Ie = "@@iterator";
    function ie(t) {
      if (t === null || typeof t != "object")
        return null;
      var i = fe && t[fe] || t[Ie];
      return typeof i == "function" ? i : null;
    }
    var ue = H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function I(t) {
      {
        for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
          c[l - 1] = arguments[l];
        he("error", t, c);
      }
    }
    function he(t, i, c) {
      {
        var l = ue.ReactDebugCurrentFrame, R = l.getStackAddendum();
        R !== "" && (i += "%s", c = c.concat([R]));
        var S = c.map(function(_) {
          return String(_);
        });
        S.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, S);
      }
    }
    var se = !1, W = !1, G = !1, de = !1, ye = !1, we;
    we = Symbol.for("react.module.reference");
    function Ce(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === V || t === Z || ye || t === oe || t === te || t === N || de || t === J || se || W || G || typeof t == "object" && t !== null && (t.$$typeof === ne || t.$$typeof === Y || t.$$typeof === ee || t.$$typeof === re || t.$$typeof === L || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === we || t.getModuleId !== void 0));
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
    function K(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && I("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case V:
          return "Fragment";
        case ae:
          return "Portal";
        case Z:
          return "Profiler";
        case oe:
          return "StrictMode";
        case te:
          return "Suspense";
        case N:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case re:
            var i = t;
            return Se(i) + ".Consumer";
          case ee:
            var c = t;
            return Se(c._context) + ".Provider";
          case L:
            return Ye(t, t.render, "ForwardRef");
          case Y:
            var l = t.displayName || null;
            return l !== null ? l : K(t.type) || "Memo";
          case ne: {
            var R = t, S = R._payload, _ = R._init;
            try {
              return K(_(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, B = 0, ce, d, pe, Te, n, s, m;
    function w() {
    }
    w.__reactDisabledLog = !0;
    function b() {
      {
        if (B === 0) {
          ce = console.log, d = console.info, pe = console.warn, Te = console.error, n = console.group, s = console.groupCollapsed, m = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: w,
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
        B++;
      }
    }
    function k() {
      {
        if (B--, B === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, t, {
              value: ce
            }),
            info: X({}, t, {
              value: d
            }),
            warn: X({}, t, {
              value: pe
            }),
            error: X({}, t, {
              value: Te
            }),
            group: X({}, t, {
              value: n
            }),
            groupCollapsed: X({}, t, {
              value: s
            }),
            groupEnd: X({}, t, {
              value: m
            })
          });
        }
        B < 0 && I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var P = ue.ReactCurrentDispatcher, T;
    function C(t, i, c) {
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
    var U = !1, ge;
    {
      var hr = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new hr();
    }
    function Xe(t, i) {
      if (!t || U)
        return "";
      {
        var c = ge.get(t);
        if (c !== void 0)
          return c;
      }
      var l;
      U = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = P.current, P.current = null, b();
      try {
        if (i) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (le) {
              l = le;
            }
            Reflect.construct(t, [], _);
          } else {
            try {
              _.call();
            } catch (le) {
              l = le;
            }
            t.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (le) {
            l = le;
          }
          t();
        }
      } catch (le) {
        if (le && l && typeof le.stack == "string") {
          for (var h = le.stack.split(`
`), z = l.stack.split(`
`), F = h.length - 1, $ = z.length - 1; F >= 1 && $ >= 0 && h[F] !== z[$]; )
            $--;
          for (; F >= 1 && $ >= 0; F--, $--)
            if (h[F] !== z[$]) {
              if (F !== 1 || $ !== 1)
                do
                  if (F--, $--, $ < 0 || h[F] !== z[$]) {
                    var Q = `
` + h[F].replace(" at new ", " at ");
                    return t.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", t.displayName)), typeof t == "function" && ge.set(t, Q), Q;
                  }
                while (F >= 1 && $ >= 0);
              break;
            }
        }
      } finally {
        U = !1, P.current = S, k(), Error.prepareStackTrace = R;
      }
      var Re = t ? t.displayName || t.name : "", sr = Re ? C(Re) : "";
      return typeof t == "function" && ge.set(t, sr), sr;
    }
    function $e(t, i, c) {
      return Xe(t, !1);
    }
    function gr(t) {
      var i = t.prototype;
      return !!(i && i.isReactComponent);
    }
    function Le(t, i, c) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Xe(t, gr(t));
      if (typeof t == "string")
        return C(t);
      switch (t) {
        case te:
          return C("Suspense");
        case N:
          return C("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case L:
            return $e(t.render);
          case Y:
            return Le(t.type, i, c);
          case ne: {
            var l = t, R = l._payload, S = l._init;
            try {
              return Le(S(R), i, c);
            } catch {
            }
          }
        }
      return "";
    }
    var Oe = Object.prototype.hasOwnProperty, ke = {}, Qe = ue.ReactDebugCurrentFrame;
    function Pe(t) {
      if (t) {
        var i = t._owner, c = Le(t.type, t._source, i ? i.type : null);
        Qe.setExtraStackFrame(c);
      } else
        Qe.setExtraStackFrame(null);
    }
    function ve(t, i, c, l, R) {
      {
        var S = Function.call.bind(Oe);
        for (var _ in t)
          if (S(t, _)) {
            var h = void 0;
            try {
              if (typeof t[_] != "function") {
                var z = Error((l || "React class") + ": " + c + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              h = t[_](i, _, l, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              h = F;
            }
            h && !(h instanceof Error) && (Pe(R), I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", c, _, typeof h), Pe(null)), h instanceof Error && !(h.message in ke) && (ke[h.message] = !0, Pe(R), I("Failed %s type: %s", c, h.message), Pe(null));
          }
      }
    }
    var je = Array.isArray;
    function Ne(t) {
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
        return We(t), !1;
      } catch {
        return !0;
      }
    }
    function We(t) {
      return "" + t;
    }
    function Be(t) {
      if (er(t))
        return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(t)), We(t);
    }
    var be = ue.ReactCurrentOwner, br = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rr, tr, xe;
    xe = {};
    function _r(t) {
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
      if (typeof t.ref == "string" && be.current && i && be.current.stateNode !== i) {
        var c = K(be.current.type);
        xe[c] || (I('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(be.current.type), t.ref), xe[c] = !0);
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
    var wr = function(t, i, c, l, R, S, _) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
        // Built-in properties that belong on the element
        type: t,
        key: i,
        ref: c,
        props: _,
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
    function Cr(t, i, c, l, R) {
      {
        var S, _ = {}, h = null, z = null;
        c !== void 0 && (Be(c), h = "" + c), Er(i) && (Be(i.key), h = "" + i.key), _r(i) && (z = i.ref, Rr(i, R));
        for (S in i)
          Oe.call(i, S) && !br.hasOwnProperty(S) && (_[S] = i[S]);
        if (t && t.defaultProps) {
          var F = t.defaultProps;
          for (S in F)
            _[S] === void 0 && (_[S] = F[S]);
        }
        if (h || z) {
          var $ = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          h && _e(_, $), z && nr(_, $);
        }
        return wr(t, h, z, R, l, be.current, _);
      }
    }
    var Me = ue.ReactCurrentOwner, ar = ue.ReactDebugCurrentFrame;
    function me(t) {
      if (t) {
        var i = t._owner, c = Le(t.type, t._source, i ? i.type : null);
        ar.setExtraStackFrame(c);
      } else
        ar.setExtraStackFrame(null);
    }
    var Ae;
    Ae = !1;
    function Ee(t) {
      return typeof t == "object" && t !== null && t.$$typeof === v;
    }
    function Fe() {
      {
        if (Me.current) {
          var t = K(Me.current.type);
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
        var i = Fe();
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
        t && t._owner && t._owner !== Me.current && (l = " It was passed a child from " + K(t._owner.type) + "."), me(t), I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, l), me(null);
      }
    }
    function ur(t, i) {
      {
        if (typeof t != "object")
          return;
        if (Ne(t))
          for (var c = 0; c < t.length; c++) {
            var l = t[c];
            Ee(l) && ir(l, i);
          }
        else if (Ee(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var R = ie(t);
          if (typeof R == "function" && R !== t.entries)
            for (var S = R.call(t), _; !(_ = S.next()).done; )
              Ee(_.value) && ir(_.value, i);
        }
      }
    }
    function De(t) {
      {
        var i = t.type;
        if (i == null || typeof i == "string")
          return;
        var c;
        if (typeof i == "function")
          c = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === L || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === Y))
          c = i.propTypes;
        else
          return;
        if (c) {
          var l = K(i);
          ve(c, t.props, "prop", l, t);
        } else if (i.PropTypes !== void 0 && !Ae) {
          Ae = !0;
          var R = K(i);
          I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ze(t) {
      {
        for (var i = Object.keys(t.props), c = 0; c < i.length; c++) {
          var l = i[c];
          if (l !== "children" && l !== "key") {
            me(t), I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), me(null);
            break;
          }
        }
        t.ref !== null && (me(t), I("Invalid attribute `ref` supplied to `React.Fragment`."), me(null));
      }
    }
    function qe(t, i, c, l, R, S) {
      {
        var _ = Ce(t);
        if (!_) {
          var h = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = Sr(R);
          z ? h += z : h += Fe();
          var F;
          t === null ? F = "null" : Ne(t) ? F = "array" : t !== void 0 && t.$$typeof === v ? (F = "<" + (K(t.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : F = typeof t, I("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, h);
        }
        var $ = Cr(t, i, c, R, S);
        if ($ == null)
          return $;
        if (_) {
          var Q = i.children;
          if (Q !== void 0)
            if (l)
              if (Ne(Q)) {
                for (var Re = 0; Re < Q.length; Re++)
                  ur(Q[Re], t);
                Object.freeze && Object.freeze(Q);
              } else
                I("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ur(Q, t);
        }
        return t === V ? ze($) : De($), $;
      }
    }
    function Or(t, i, c) {
      return qe(t, i, c, !0);
    }
    function kr(t, i, c) {
      return qe(t, i, c, !1);
    }
    var Pr = kr, jr = Or;
    Ke.Fragment = V, Ke.jsx = Pr, Ke.jsxs = jr;
  }()), Ke;
}
process.env.NODE_ENV === "production" ? Wr.exports = Bt() : Wr.exports = zt();
var j = Wr.exports;
const qt = () => {
  const H = {
    paddingRight: "2rem",
    paddingLeft: "2rem"
  }, v = {
    margin: "1.25rem 0 0 0",
    maxWidth: "100%"
  }, ae = {
    margin: "0.25rem 0 0.9375rem 0",
    fontSize: "1em",
    lineHeight: 2,
    fontFamily: "Archivo, sans-serif",
    letterSpacing: "0.025rem",
    paddingLeft: "0.025rem",
    fontWeight: 500,
    color: "#0D0C0C"
  }, V = {
    fontSize: "1em",
    fontFamily: "Inter, sans-serif",
    fontWeight: 300,
    borderRadius: "2.5rem",
    color: "#0D0C0C",
    backgroundColor: "rgba(255,255,255,0.722)",
    boxShadow: "0rem 0.5rem 2rem 0rem rgba(0,0,0,0.149)"
  }, oe = {
    display: "inline-flex",
    width: "100vw",
    height: "4rem",
    lineHeight: "4rem",
    padding: "0 2rem",
    fontSize: "1em",
    fontFamily: "Inter, sans-serif",
    letterSpacing: "0.025rem",
    paddingLeft: "calc(0.025rem + 2rem)",
    fontWeight: 500,
    borderRadius: "2.5rem",
    backgroundColor: "#DE3366",
    color: "#FFFFFF",
    backgroundImage: "linear-gradient(45deg, #E68047 0%, rgba(222,51,102,0.008) 100%)",
    backgroundPosition: "0% 0%",
    backgroundRepeat: "repeat",
    backgroundSize: "cover",
    transition: "transform 0.375s ease, color 0.375s ease, background-color 0.375s ease, border-color 0.375s ease"
    /*position: 'relative',*/
  }, Z = {
    display: "block",
    fill: "#FFFFFF",
    flexGrow: 0,
    flexShrink: 0,
    height: "100%",
    minWidth: "16px",
    width: "1.25em",
    marginLeft: "0.75rem",
    marginRight: "calc(-0.125em + 0.025rem)",
    transition: "fill 0.375s ease"
  }, ee = {
    /* direction: 'left',*/
    overflow: "hidden"
  };
  return /* @__PURE__ */ j.jsx("div", { className: "wrapper", children: /* @__PURE__ */ j.jsxs("div", { className: "inner", "data-onvisible-trigger": 1, children: [
    /* @__PURE__ */ j.jsx("h1", { id: "text17", style: H, children: "Kontakt" }),
    /* @__PURE__ */ j.jsxs("form", { id: "form02", method: "post", style: H, children: [
      /* @__PURE__ */ j.jsxs("div", { style: v, children: [
        /* @__PURE__ */ j.jsxs("div", { className: "field", children: [
          /* @__PURE__ */ j.jsx("label", { htmlFor: "form02-name", style: ae, children: "Navn" }),
          /* @__PURE__ */ j.jsx("input", { type: "text", name: "name", id: "form02-name", maxLength: 128, required: !0, style: V })
        ] }),
        /* @__PURE__ */ j.jsxs("div", { className: "field", children: [
          /* @__PURE__ */ j.jsx("label", { htmlFor: "form02-email", style: ae, children: "Email" }),
          /* @__PURE__ */ j.jsx("input", { type: "email", name: "email", id: "form02-email", maxLength: 128, required: !0, style: V })
        ] }),
        /* @__PURE__ */ j.jsxs("div", { className: "field", children: [
          /* @__PURE__ */ j.jsx("label", { htmlFor: "form02-phone", style: ae, children: "Telefonnummer" }),
          /* @__PURE__ */ j.jsx("input", { type: "text", name: "phone", id: "form02-phone", maxLength: 64, required: !0, style: V })
        ] }),
        /* @__PURE__ */ j.jsx("div", { className: "field", children: /* @__PURE__ */ j.jsx("input", { type: "text", name: "www", id: "form02-www", placeholder: "Www", maxLength: 128, style: V }) }),
        /* @__PURE__ */ j.jsxs("div", { className: "field", children: [
          /* @__PURE__ */ j.jsx("label", { htmlFor: "form02-message", style: ae, children: "Besked" }),
          /* @__PURE__ */ j.jsx("textarea", { "data-gramm_editor": "false", name: "message", id: "form02-message", maxLength: 16384, required: !0, defaultValue: "", style: V })
        ] }),
        /* @__PURE__ */ j.jsx("div", { className: "actions", children: /* @__PURE__ */ j.jsxs("button", { type: "submit", style: oe, children: [
          /* @__PURE__ */ j.jsx("svg", { style: Z, children: /* @__PURE__ */ j.jsx("use", { xlinkHref: "#icon-67ad41ecc66a1b1cd00d0d3b20c00017" }) }),
          /* @__PURE__ */ j.jsx("span", { className: "label", style: ee, children: "Send" })
        ] }) })
      ] }),
      /* @__PURE__ */ j.jsx("input", { type: "hidden", name: "id", defaultValue: "form02" })
    ] })
  ] }) });
}, vt = {
  name: "tetris",
  Message: qt
};
window.vfplugin = Object.assign(window.vfplugin ?? {}, {
  [vt.name]: vt
});
