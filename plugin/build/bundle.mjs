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
  var q = Symbol.for("react.element"), p = Symbol.for("react.portal"), Re = Symbol.for("react.fragment"), Q = Symbol.for("react.strict_mode"), pe = Symbol.for("react.profiler"), te = Symbol.for("react.provider"), ne = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), ee = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), U = Symbol.iterator;
  function re(n) {
    return n === null || typeof n != "object" ? null : (n = U && n[U] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var G = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ce = Object.assign, Ie = {};
  function ae(n, s, m) {
    this.props = n, this.context = s, this.refs = Ie, this.updater = m || G;
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
    this.props = n, this.context = s, this.refs = Ie, this.updater = m || G;
  }
  var me = I.prototype = new oe();
  me.constructor = I, ce(me, ae.prototype), me.isPureReactComponent = !0;
  var ie = Array.isArray, M = Object.prototype.hasOwnProperty, H = { current: null }, le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ve(n, s, m) {
    var C, b = {}, P = null, k = null;
    if (s != null)
      for (C in s.ref !== void 0 && (k = s.ref), s.key !== void 0 && (P = "" + s.key), s)
        M.call(s, C) && !le.hasOwnProperty(C) && (b[C] = s[C]);
    var T = arguments.length - 2;
    if (T === 1)
      b.children = m;
    else if (1 < T) {
      for (var w = Array(T), W = 0; W < T; W++)
        w[W] = arguments[W + 2];
      b.children = w;
    }
    if (n && n.defaultProps)
      for (C in T = n.defaultProps, T)
        b[C] === void 0 && (b[C] = T[C]);
    return { $$typeof: q, type: n, key: P, ref: k, props: b, _owner: H.current };
  }
  function Ce(n, s) {
    return { $$typeof: q, type: n.type, key: s, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function we(n) {
    return typeof n == "object" && n !== null && n.$$typeof === q;
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
  function J(n, s, m, C, b) {
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
            case q:
            case p:
              k = !0;
          }
      }
    if (k)
      return k = n, b = b(k), n = C === "" ? "." + K(k, 0) : C, ie(b) ? (m = "", n != null && (m = n.replace(Se, "$&/") + "/"), J(b, s, m, "", function(W) {
        return W;
      })) : b != null && (we(b) && (b = Ce(b, m + (!b.key || k && k.key === b.key ? "" : ("" + b.key).replace(Se, "$&/") + "/") + n)), s.push(b)), 1;
    if (k = 0, C = C === "" ? "." : C + ":", ie(n))
      for (var T = 0; T < n.length; T++) {
        P = n[T];
        var w = C + K(P, T);
        k += J(P, s, m, w, b);
      }
    else if (w = re(n), typeof w == "function")
      for (n = w.call(n), T = 0; !(P = n.next()).done; )
        P = P.value, w = C + K(P, T++), k += J(P, s, m, w, b);
    else if (P === "object")
      throw s = String(n), Error("Objects are not valid as a React child (found: " + (s === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : s) + "). If you meant to render a collection of children, use an array instead.");
    return k;
  }
  function Y(n, s, m) {
    if (n == null)
      return n;
    var C = [], b = 0;
    return J(n, C, "", "", function(P) {
      return s.call(m, P, b++);
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
  var d = { current: null }, fe = { transition: null }, Te = { ReactCurrentDispatcher: d, ReactCurrentBatchConfig: fe, ReactCurrentOwner: H };
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
    var C = ce({}, n.props), b = n.key, P = n.ref, k = n._owner;
    if (s != null) {
      if (s.ref !== void 0 && (P = s.ref, k = H.current), s.key !== void 0 && (b = "" + s.key), n.type && n.type.defaultProps)
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
    return { $$typeof: q, type: n.type, key: b, ref: P, props: C, _owner: k };
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
  return lt || (lt = 1, function(q, p) {
    'development' !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Re = "18.2.0", Q = Symbol.for("react.element"), pe = Symbol.for("react.portal"), te = Symbol.for("react.fragment"), ne = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), N = Symbol.for("react.provider"), ee = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), Ie = Symbol.for("react.offscreen"), ae = Symbol.iterator, oe = "@@iterator";
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
      }, H = {
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
      var we = !1, Ye = !1, Se = !1, K = !1, J = !1, Y = {
        ReactCurrentDispatcher: me,
        ReactCurrentBatchConfig: ie,
        ReactCurrentOwner: H
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
          var v = a.map(function(f) {
            return String(f);
          });
          v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
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
      function b(e, r, a) {
        this.props = e, this.context = r, this.refs = C, this.updater = a || s;
      }
      b.prototype.isReactComponent = {}, b.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, b.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var P = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, k = function(e, r) {
          Object.defineProperty(b.prototype, e, {
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
      w.prototype = b.prototype;
      function W(e, r, a) {
        this.props = e, this.context = r, this.refs = C, this.updater = a || s;
      }
      var he = W.prototype = new w();
      he.constructor = W, m(he, b.prototype), he.isPureReactComponent = !0;
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
            case G:
              var o = e.displayName || null;
              return o !== null ? o : de(e.type) || "Memo";
            case ce: {
              var u = e, v = u._payload, f = u._init;
              try {
                return de(f(v));
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
        if (typeof e.ref == "string" && H.current && e.__self && H.current.stateNode !== e.__self) {
          var r = de(H.current.type);
          Me[r] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Me[r] = !0);
        }
      }
      var xe = function(e, r, a, o, u, v, f) {
        var y = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Q,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: f,
          // Record the component responsible for creating this element.
          _owner: v
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
        var o, u = {}, v = null, f = null, y = null, E = null;
        if (r != null) {
          Be(r) && (f = r.ref, tr(r)), ge(r) && (Pe(r.key), v = "" + r.key), y = r.__self === void 0 ? null : r.__self, E = r.__source === void 0 ? null : r.__source;
          for (o in r)
            je.call(r, o) && !Le.hasOwnProperty(o) && (u[o] = r[o]);
        }
        var O = arguments.length - 2;
        if (O === 1)
          u.children = a;
        else if (O > 1) {
          for (var j = Array(O), x = 0; x < O; x++)
            j[x] = arguments[x + 2];
          Object.freeze && Object.freeze(j), u.children = j;
        }
        if (e && e.defaultProps) {
          var D = e.defaultProps;
          for (o in D)
            u[o] === void 0 && (u[o] = D[o]);
        }
        if (v || f) {
          var V = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && br(u, V), f && rr(u, V);
        }
        return xe(e, v, f, y, E, H.current, u);
      }
      function Er(e, r) {
        var a = xe(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function Rr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, u = m({}, e.props), v = e.key, f = e.ref, y = e._self, E = e._source, O = e._owner;
        if (r != null) {
          Be(r) && (f = r.ref, O = H.current), ge(r) && (Pe(r.key), v = "" + r.key);
          var j;
          e.type && e.type.defaultProps && (j = e.type.defaultProps);
          for (o in r)
            je.call(r, o) && !Le.hasOwnProperty(o) && (r[o] === void 0 && j !== void 0 ? u[o] = j[o] : u[o] = r[o]);
        }
        var x = arguments.length - 2;
        if (x === 1)
          u.children = a;
        else if (x > 1) {
          for (var D = Array(x), V = 0; V < x; V++)
            D[V] = arguments[V + 2];
          u.children = D;
        }
        return xe(e.type, v, f, y, E, O, u);
      }
      function be(e) {
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
      function _e(e, r, a, o, u) {
        var v = typeof e;
        (v === "undefined" || v === "boolean") && (e = null);
        var f = !1;
        if (e === null)
          f = !0;
        else
          switch (v) {
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
          var y = e, E = u(y), O = o === "" ? nr + Ae(y, 0) : o;
          if ($e(E)) {
            var j = "";
            O != null && (j = ye(O) + "/"), _e(E, r, j, "", function(Wt) {
              return Wt;
            });
          } else
            E != null && (be(E) && (E.key && (!y || y.key !== E.key) && Pe(E.key), E = Er(
              E,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (E.key && (!y || y.key !== E.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                ye("" + E.key) + "/"
              ) : "") + O
            )), r.push(E));
          return 1;
        }
        var x, D, V = 0, z = o === "" ? nr : o + Cr;
        if ($e(e))
          for (var yr = 0; yr < e.length; yr++)
            x = e[yr], D = z + Ae(x, yr), V += _e(x, r, a, D, u);
        else {
          var Lr = I(e);
          if (typeof Lr == "function") {
            var it = e;
            Lr === it.entries && (Ve || ue("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ve = !0);
            for (var Mt = Lr.call(it), ut, Vt = 0; !(ut = Mt.next()).done; )
              x = ut.value, D = z + Ae(x, Vt++), V += _e(x, r, a, D, u);
          } else if (v === "object") {
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
        return _e(e, o, "", "", function(v) {
          return r.call(a, v, u++);
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
        if (!be(e))
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
          var v = {
            $$typeof: ee,
            _context: r
          };
          Object.defineProperties(v, {
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
          }), r.Consumer = v;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var Fe = -1, ze = 0, qe = 1, Or = 2;
      function Pr(e) {
        if (e._status === Fe) {
          var r = e._result, a = r();
          if (a.then(function(v) {
            if (e._status === ze || e._status === Fe) {
              var f = e;
              f._status = qe, f._result = v;
            }
          }, function(v) {
            if (e._status === ze || e._status === Fe) {
              var f = e;
              f._status = Or, f._result = v;
            }
          }), e._status === Fe) {
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
              set: function(v) {
                d("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = v, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return u;
              },
              set: function(v) {
                d("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), u = v, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function jr(e) {
        e != null && e.$$typeof === G ? d("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? d("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && d("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && d("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
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
        return !!(typeof e == "string" || typeof e == "function" || e === te || e === Z || J || e === ne || e === U || e === re || K || e === Ie || we || Ye || Se || typeof e == "object" && e !== null && (e.$$typeof === ce || e.$$typeof === G || e.$$typeof === N || e.$$typeof === ee || e.$$typeof === L || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === t || e.getModuleId !== void 0));
      }
      function c(e, r) {
        i(e) || d("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: G,
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
      function _(e, r, a) {
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
      function A(e, r) {
        var a = l();
        return a.useInsertionEffect(e, r);
      }
      function $(e, r) {
        var a = l();
        return a.useLayoutEffect(e, r);
      }
      function X(e, r) {
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
      function bt(e, r, a) {
        var o = l();
        return o.useSyncExternalStore(e, r, a);
      }
      var He = 0, Vr, Wr, Ur, Yr, Br, zr, qr;
      function Hr() {
      }
      Hr.__reactDisabledLog = !0;
      function _t() {
        {
          if (He === 0) {
            Vr = console.log, Wr = console.info, Ur = console.warn, Yr = console.error, Br = console.group, zr = console.groupCollapsed, qr = console.groupEnd;
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
        var v;
        v = xr.current, xr.current = null, _t();
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
              } catch (z) {
                o = z;
              }
              Reflect.construct(e, [], f);
            } else {
              try {
                f.call();
              } catch (z) {
                o = z;
              }
              e.call(f.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (z) {
              o = z;
            }
            e();
          }
        } catch (z) {
          if (z && o && typeof z.stack == "string") {
            for (var y = z.stack.split(`
`), E = o.stack.split(`
`), O = y.length - 1, j = E.length - 1; O >= 1 && j >= 0 && y[O] !== E[j]; )
              j--;
            for (; O >= 1 && j >= 0; O--, j--)
              if (y[O] !== E[j]) {
                if (O !== 1 || j !== 1)
                  do
                    if (O--, j--, j < 0 || y[O] !== E[j]) {
                      var x = `
` + y[O].replace(" at new ", " at ");
                      return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && lr.set(e, x), x;
                    }
                  while (O >= 1 && j >= 0);
                break;
              }
          }
        } finally {
          Dr = !1, xr.current = v, Et(), Error.prepareStackTrace = u;
        }
        var D = e ? e.displayName || e.name : "", V = D ? cr(D) : "";
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
            case G:
              return fr(e.type, r, a);
            case ce: {
              var o = e, u = o._payload, v = o._init;
              try {
                return fr(v(u), r, a);
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
          var v = Function.call.bind(je);
          for (var f in e)
            if (v(e, f)) {
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
              y && !(y instanceof Error) && (dr(u), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, f, typeof y), dr(null)), y instanceof Error && !(y.message in Gr) && (Gr[y.message] = !0, dr(u), d("Failed %s type: %s", a, y.message), dr(null));
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
        if (H.current) {
          var e = de(H.current.type);
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
            e && e._owner && e._owner !== H.current && (o = " It was passed a child from " + de(e._owner.type) + "."), We(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), We(null);
          }
        }
      }
      function et(e, r) {
        if (typeof e == "object") {
          if ($e(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              be(o) && Zr(o, r);
            }
          else if (be(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var u = I(e);
            if (typeof u == "function" && u !== e.entries)
              for (var v = u.call(e), f; !(f = v.next()).done; )
                be(f.value) && Zr(f.value, r);
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
          r.$$typeof === G))
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
          var v = Ot(r);
          v ? u += v : u += Xr();
          var f;
          e === null ? f = "null" : $e(e) ? f = "array" : e !== void 0 && e.$$typeof === Q ? (f = "<" + (de(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, d("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, u);
        }
        var y = _r.apply(this, arguments);
        if (y == null)
          return y;
        if (o)
          for (var E = 2; E < arguments.length; E++)
            et(arguments[E], e);
        return e === te ? kt(y) : rt(y), y;
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
            var r = ("require" + Math.random()).slice(0, 7), a = q && q[r];
            pr = a.call(q, "timers").setImmediate;
          } catch {
            pr = function(u) {
              at === !1 && (at = !0, typeof MessageChannel > "u" && d("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var v = new MessageChannel();
              v.port1.onmessage = u, v.port2.postMessage(void 0);
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
          } catch (D) {
            throw vr(r), D;
          } finally {
            M.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var v = o, f = !1, y = {
              then: function(D, V) {
                f = !0, v.then(function(z) {
                  vr(r), Ue === 0 ? Ir(z, D, V) : D(z);
                }, function(z) {
                  vr(r), V(z);
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
              var O = M.current;
              O !== null && (Nr(O), M.current = null);
              var j = {
                then: function(D, V) {
                  M.current === null ? (M.current = [], Ir(E, D, V)) : D(E);
                }
              };
              return j;
            } else {
              var x = {
                then: function(D, V) {
                  D(E);
                }
              };
              return x;
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
      p.Children = Lt, p.Component = b, p.Fragment = te, p.Profiler = Z, p.PureComponent = W, p.StrictMode = ne, p.Suspense = U, p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y, p.cloneElement = $t, p.createContext = ur, p.createElement = It, p.createFactory = Nt, p.createRef = hr, p.forwardRef = jr, p.isValidElement = be, p.lazy = kr, p.memo = c, p.startTransition = At, p.unstable_act = Ft, p.useCallback = X, p.useContext = R, p.useDebugValue = se, p.useDeferredValue = ht, p.useEffect = B, p.useId = gt, p.useImperativeHandle = sr, p.useInsertionEffect = A, p.useLayoutEffect = $, p.useMemo = Ee, p.useReducer = _, p.useRef = h, p.useState = S, p.useSyncExternalStore = bt, p.useTransition = mt, p.version = Re, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Je, Je.exports)), Je.exports;
}
var ft;
function yt() {
  return ft || (ft = 1, 'development' === "production" ? mr.exports = Ut() : mr.exports = Yt()), mr.exports;
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
  var q = yt(), p = Symbol.for("react.element"), Re = Symbol.for("react.fragment"), Q = Object.prototype.hasOwnProperty, pe = q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ne(Z, N, ee) {
    var L, U = {}, re = null, G = null;
    ee !== void 0 && (re = "" + ee), N.key !== void 0 && (re = "" + N.key), N.ref !== void 0 && (G = N.ref);
    for (L in N)
      Q.call(N, L) && !te.hasOwnProperty(L) && (U[L] = N[L]);
    if (Z && Z.defaultProps)
      for (L in N = Z.defaultProps, N)
        U[L] === void 0 && (U[L] = N[L]);
    return { $$typeof: p, type: Z, key: re, ref: G, props: U, _owner: pe.current };
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
function zt() {
  return pt || (pt = 1, 'development' !== "production" && function() {
    var q = yt(), p = Symbol.for("react.element"), Re = Symbol.for("react.portal"), Q = Symbol.for("react.fragment"), pe = Symbol.for("react.strict_mode"), te = Symbol.for("react.profiler"), ne = Symbol.for("react.provider"), Z = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), re = Symbol.for("react.lazy"), G = Symbol.for("react.offscreen"), ce = Symbol.iterator, Ie = "@@iterator";
    function ae(t) {
      if (t === null || typeof t != "object")
        return null;
      var i = ce && t[ce] || t[Ie];
      return typeof i == "function" ? i : null;
    }
    var oe = q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
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
        var S = c.map(function(_) {
          return String(_);
        });
        S.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, S);
      }
    }
    var ie = !1, M = !1, H = !1, le = !1, ve = !1, Ce;
    Ce = Symbol.for("react.module.reference");
    function we(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === Q || t === te || ve || t === pe || t === ee || t === L || le || t === G || ie || M || H || typeof t == "object" && t !== null && (t.$$typeof === re || t.$$typeof === U || t.$$typeof === ne || t.$$typeof === Z || t.$$typeof === N || // This needs to include all possible module reference object
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
    function K(t) {
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
            return l !== null ? l : K(t.type) || "Memo";
          case re: {
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
    var J = Object.assign, Y = 0, ue, d, fe, Te, n, s, m;
    function C() {
    }
    C.__reactDisabledLog = !0;
    function b() {
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
            log: J({}, t, {
              value: ue
            }),
            info: J({}, t, {
              value: d
            }),
            warn: J({}, t, {
              value: fe
            }),
            error: J({}, t, {
              value: Te
            }),
            group: J({}, t, {
              value: n
            }),
            groupCollapsed: J({}, t, {
              value: s
            }),
            groupEnd: J({}, t, {
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
      S = k.current, k.current = null, b();
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
            } catch (se) {
              l = se;
            }
            Reflect.construct(t, [], _);
          } else {
            try {
              _.call();
            } catch (se) {
              l = se;
            }
            t.call(_.prototype);
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
`), A = h.length - 1, $ = B.length - 1; A >= 1 && $ >= 0 && h[A] !== B[$]; )
            $--;
          for (; A >= 1 && $ >= 0; A--, $--)
            if (h[A] !== B[$]) {
              if (A !== 1 || $ !== 1)
                do
                  if (A--, $--, $ < 0 || h[A] !== B[$]) {
                    var X = `
` + h[A].replace(" at new ", " at ");
                    return t.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", t.displayName)), typeof t == "function" && he.set(t, X), X;
                  }
                while (A >= 1 && $ >= 0);
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
        for (var _ in t)
          if (S(t, _)) {
            var h = void 0;
            try {
              if (typeof t[_] != "function") {
                var B = Error((l || "React class") + ": " + c + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw B.name = "Invariant Violation", B;
              }
              h = t[_](i, _, l, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (A) {
              h = A;
            }
            h && !(h instanceof Error) && (ke(R), I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", c, _, typeof h), ke(null)), h instanceof Error && !(h.message in Pe) && (Pe[h.message] = !0, ke(R), I("Failed %s type: %s", c, h.message), ke(null));
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
    var ge = oe.ReactCurrentOwner, br = {
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
      if (typeof t.ref == "string" && ge.current && i && ge.current.stateNode !== i) {
        var c = K(ge.current.type);
        xe[c] || (I('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(ge.current.type), t.ref), xe[c] = !0);
      }
    }
    function be(t, i) {
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
    var Cr = function(t, i, c, l, R, S, _) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
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
    function wr(t, i, c, l, R) {
      {
        var S, _ = {}, h = null, B = null;
        c !== void 0 && (Be(c), h = "" + c), Er(i) && (Be(i.key), h = "" + i.key), _r(i) && (B = i.ref, Rr(i, R));
        for (S in i)
          Oe.call(i, S) && !br.hasOwnProperty(S) && (_[S] = i[S]);
        if (t && t.defaultProps) {
          var A = t.defaultProps;
          for (S in A)
            _[S] === void 0 && (_[S] = A[S]);
        }
        if (h || B) {
          var $ = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          h && be(_, $), B && nr(_, $);
        }
        return Cr(t, h, B, R, l, ge.current, _);
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
    function _e(t) {
      return typeof t == "object" && t !== null && t.$$typeof === p;
    }
    function De() {
      {
        if (Ve.current) {
          var t = K(Ve.current.type);
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
        t && t._owner && t._owner !== Ve.current && (l = " It was passed a child from " + K(t._owner.type) + "."), ye(t), I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, l), ye(null);
      }
    }
    function ur(t, i) {
      {
        if (typeof t != "object")
          return;
        if (Le(t))
          for (var c = 0; c < t.length; c++) {
            var l = t[c];
            _e(l) && ir(l, i);
          }
        else if (_e(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var R = ae(t);
          if (typeof R == "function" && R !== t.entries)
            for (var S = R.call(t), _; !(_ = S.next()).done; )
              _e(_.value) && ir(_.value, i);
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
          var l = K(i);
          de(c, t.props, "prop", l, t);
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
            ye(t), I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), ye(null);
            break;
          }
        }
        t.ref !== null && (ye(t), I("Invalid attribute `ref` supplied to `React.Fragment`."), ye(null));
      }
    }
    function qe(t, i, c, l, R, S) {
      {
        var _ = we(t);
        if (!_) {
          var h = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var B = Sr(R);
          B ? h += B : h += De();
          var A;
          t === null ? A = "null" : Le(t) ? A = "array" : t !== void 0 && t.$$typeof === p ? (A = "<" + (K(t.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : A = typeof t, I("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", A, h);
        }
        var $ = wr(t, i, c, R, S);
        if ($ == null)
          return $;
        if (_) {
          var X = i.children;
          if (X !== void 0)
            if (l)
              if (Le(X)) {
                for (var Ee = 0; Ee < X.length; Ee++)
                  ur(X[Ee], t);
                Object.freeze && Object.freeze(X);
              } else
                I("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ur(X, t);
        }
        return t === Q ? ze($) : Fe($), $;
      }
    }
    function Or(t, i, c) {
      return qe(t, i, c, !0);
    }
    function Pr(t, i, c) {
      return qe(t, i, c, !1);
    }
    var kr = Pr, jr = Or;
    Ge.Fragment = Q, Ge.jsx = kr, Ge.jsxs = jr;
  }()), Ge;
}
'development' === "production" ? Mr.exports = Bt() : Mr.exports = zt();
var F = Mr.exports;
function qt() {
  const q = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: "VF.DM.651d61657db1bb00087f1291.mw3tSjdw6aUUYIkD"
    },
    body: JSON.stringify({
      action: { type: "text", payload: "a" },
      config: {
        tts: !1,
        stripSSML: !0,
        stopAll: !0,
        excludeTypes: ["block", "debug", "flow"]
      }
    })
  };
  fetch("https://general-runtime.voiceflow.com/state/user/userID/interact?logs=off", q).then((p) => p.json()).then((p) => console.log(p)).catch((p) => console.error(p));
}
const Ht = () => /* @__PURE__ */ F.jsx("div", { className: "wrapper", children: /* @__PURE__ */ F.jsxs("div", { className: "inner", "data-onvisible-trigger": 1, style: { marginBottom: "2rem", paddingLeft: "2rem", paddingRight: "2rem" }, children: [
  /* @__PURE__ */ F.jsx("h1", { style: { color: "#0D0C0C" }, id: "text17", className: "style2", children: "Kontakt" }),
  /* @__PURE__ */ F.jsxs("form", { target: "hiddenFrame", action: "https://bujeconsulting.dk/post/contact", id: "form02", onSubmit: alert('Beskeden er sendt!'), method: "post", className: "style2", children: [
    /* @__PURE__ */ F.jsxs("div", { className: "inner", children: [
      /* @__PURE__ */ F.jsxs("div", { className: "field", children: [
        /* @__PURE__ */ F.jsx("label", { style: { color: "#0D0C0C" }, htmlFor: "form02-name", children: "Navn" }),
        /* @__PURE__ */ F.jsx("input", { type: "text", name: "name", id: "form02-name", maxLength: 128, required: !0 })
      ] }),
      /* @__PURE__ */ F.jsxs("div", { className: "field", children: [
        /* @__PURE__ */ F.jsx("label", { style: { color: "#0D0C0C" }, htmlFor: "form02-email", children: "Email" }),
        /* @__PURE__ */ F.jsx("input", { type: "email", name: "email", id: "form02-email", maxLength: 128, required: !0 })
      ] }),
      /* @__PURE__ */ F.jsxs("div", { className: "field", children: [
        /* @__PURE__ */ F.jsx("label", { style: { color: "#0D0C0C" }, htmlFor: "form02-phone", children: "Telefonnummer" }),
        /* @__PURE__ */ F.jsx("input", { type: "text", name: "phone", id: "form02-phone", maxLength: 64, required: !0 })
      ] }),
      /* @__PURE__ */ F.jsxs("div", { className: "field", children: [
        /* @__PURE__ */ F.jsx("label", { style: { color: "#0D0C0C" }, htmlFor: "form02-message", children: "Besked" }),
        /* @__PURE__ */ F.jsx("textarea", { "data-gramm_editor": "false", name: "message", id: "form02-message", maxLength: 16384, required: !0, defaultValue: "" })
      ] }),
      /* @__PURE__ */ F.jsx("div", { className: "actions", children: /* @__PURE__ */ F.jsxs("button", { type: "submit", children: [
        /* @__PURE__ */ F.jsx("svg", { children: /* @__PURE__ */ F.jsx("use", { xlinkHref: "#icon-67ad41ecc66a1b1cd00d0d3b20c00017" }) }),
        /* @__PURE__ */ F.jsx("span", { className: "label", children: "Send" })
      ] }) })
    ] }),
    /* @__PURE__ */ F.jsx("input", { type: "hidden", name: "id", defaultValue: "form02" })
  ] })
] }) }), vt = {
  name: "tetris",
  Message: Ht
};
window.vfplugin = Object.assign(window.vfplugin ?? {}, {
  [vt.name]: vt
});
