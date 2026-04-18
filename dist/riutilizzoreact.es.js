import { Fragment as e, useRef as t, useState as n } from "react";
import r from "styled-components";
import i from "react-bootstrap/Card";
import a from "react-bootstrap/ListGroup";
import o from "react-bootstrap/esm/Row";
import s from "react-bootstrap/esm/Col";
import { ChevronDown as c, ChevronLeft as l, ChevronRight as u, ChevronUp as d, Download as f, Euro as p, Eye as m, EyeClosed as h, LogIn as g, Pencil as _, Save as v, Search as y, Trash2 as b, X as x } from "lucide-react";
import { FontAwesomeIcon as S } from "@fortawesome/react-fontawesome";
import { faFile as C, faFileExcel as ee, faFilePdf as w } from "@fortawesome/free-solid-svg-icons";
import { Card as T, Table as E } from "react-bootstrap";
//#region \0rolldown/runtime.js
var D = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), te = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), O = r(i)`
  background-color: #111111;
  overflow: hidden;
  border: 5px solid #000000;
  border-radius: 40px;
  margin-left: 30%;
  margin-right: 30%;

  color: white;
  text-align: center;
`, ne = r(i.Header)`
  color: #ffffff;
  background-color: #000000;
  border: 5px solid #000000;
  min-height: 70px;
`, re = r(a.Item)`
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  min-height: 70px;
`, k = r.div`
  overflow: hidden;
  transition: max-height 1.5s ease-out;
`, ie = r(o)`
  display: flex;
  flex-wrap: wrap;
  padding-left: 3%;
  padding-right: 3%;
`, ae = r(s)`
  position: relative; 
  color: #FFFFFF;
  border-radius: 40px;
  padding: 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: auto;
  min-height: 50px;
  min-width: 300px;
`, A = r.label`
  width: 100%;
  color: #ffffff;
  background-color: transparent;
  border-radius: 40px;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  min-height: 70px;
  margin-top: 2%;
`, j = r.textarea`
  width: 100%;
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  min-height: 70px;
  margin-bottom: 20px;
`, M = r(j)`
  background-color: #000000;
`, oe = r(j)`
  background-color: #0050EF;
`, se = r(j)`
  background-color: #500000;
`, ce = r.input`
  width: 100%;
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  min-height: 70px;
  margin-bottom: 20px;
`, le = r(ce)`
  background-color: #000000;
`, ue = r(ce)`
  background-color: #0050EF;
`, de = r(ce)`
  background-color: #500000;
`, N = "\n  color: #FFFFFF;\n  cursor: pointer;\n  transition: 0.5s all ease-out;\n", P = `
  ${N}
  &:hover {
    color: #0050EF;
  }
`, fe = `
  ${N}
  &:hover {
    color: #500000;
  }
`, pe = r(v)`
  ${P}
`, me = r(v)`
  ${N}
`, he = r(v)`
  ${N}
  color: #0050EF;
`, ge = r(h)`
  ${N}
  transition: 0.5s all ease-out;
`, _e = r(m)`
  ${N}
  transition: 0.5s all ease-out;
  color: #0050EF;
`, ve = r(y)`
  ${P}
`, ye = r(y)`
  ${N}
`, be = r(y)`
  ${N}
  color: #0050EF;
`, xe = r(p)`
  color: #FFFFFF;
  transition: 0.5s all ease-out;
`, Se = r(d)`
  ${P}
`, Ce = r(c)`
  ${P}
`, we = r(g)`
  ${P}
`, Te = r(S)`
  color: #FFFFFF;
`, Ee = r(S)`
  ${N}
`, De = r(S)`
  ${N}
  color: #0050EF;
`, Oe = r(f)`
  ${P}
`;
r(x)`
  ${fe}
`;
var ke = r(b)`
  ${fe}
`, F = r.button`
  border-radius: 40px;
  border: 5px solid #000000;
  background-color: #000000;
  color: #FFFFFF;
  text-align: center;  
  padding: 2% 15%;
  cursor: pointer;
`;
r(F)`
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #0050EF;
    color: #FFFFFF;
  }
`, r(F)`
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #500000;
    color: #FFFFFF;
  }
`, r(F)`
  background-color: #0050EF;
  &:hover {
    background-color: #000000;
    color: #FFFFFF;
  }
`, r(F)`
  background-color: #500000;
  &:hover {
    background-color: #000000;
    color: #FFFFFF;
  }
`;
var Ae = r.select`
  width: 100%;
  min-height: 70px;
  background-color: #0050EF;
  border: 5px solid #000000;
  color: #FFFFFF;
  text-align: center;
`, je = r(Ae)`
  background-color: #111111;
`, Me = r(Ae)`
  background-color: #0050EF;
`, Ne = r(Ae)`
  background-color: #500000;
`;
r.option`
  background-color: #0050EF;
  &:hover {
    background-color: #0050EF;
  }
`;
var Pe = r.span`
  color: #FF0000;
  padding: 10px;
`, I = {
	StyledListGroupItem: re,
	StyledRow: ie,
	StyledCol: ae,
	StyledSaveNotSelected: pe,
	grandezzaIcona: 50,
	StyledSearchNotSelected: ve,
	StyledArrowTopNotSelected: Se,
	StyledArrowBottomNotSelected: Ce,
	StyledLoginNotSelected: we,
	StyledPencilNotSelected: r(_)`
  ${N}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,
	StyledLabel: A,
	StyledInputBlock: le,
	StyledInputModifica: ue,
	StyledInputElimina: de,
	StyledTextAreaBlock: M,
	StyledTextAreaModifica: oe,
	StyledTextAreaElimina: se,
	StyledForm: O,
	StyledHeader: ne,
	SlideContainer: k,
	StyledSpanErrore: Pe,
	StyledSelectBlock: je,
	StyledSelectModifica: Me,
	StyledSelectElimina: Ne,
	StyledEyeClosedNotSelected: ge,
	StyledEyeOpenNotSelected: _e,
	StyledEuroNotSelected: xe,
	StyledFileIconNotSelected: Te,
	StyledDownloadNotSelected: Oe,
	StyledTrashNotSelected: ke,
	StyledSearchNotSelected2: ye,
	StyledSaveNotSelected2: me,
	StyledSearchSelected2: be,
	StyledSaveSelected2: he,
	StyledFileIconNotSelected2: Ee,
	StyledFileIconSelected2: De
};
//#endregion
//#region src/Tags.js
function Fe(e, t) {
	return e === 0 || e === 2 ? t.StyledPencilNotSelected : e === 1 ? t.StyledPencilSelected : _;
}
function Ie(e, t) {
	return e === 0 || e === 1 ? t.StyledTrashNotSelected : e === 2 ? t.StyledTrashSelected : b;
}
function L(e, t, n) {
	return t ? e !== 1 && e !== 2 ? n.StyledInputBlock : e === 1 ? n.StyledInputModifica : n.StyledInputElimina : e === 2 ? n.StyledInputElimina : n.StyledInputBlock;
}
function R(e, t, n) {
	return t ? e !== 1 && e !== 2 ? n.StyledTextAreaBlock : e === 1 ? n.StyledTextAreaModifica : n.StyledTextAreaElimina : e === 2 ? n.StyledTextAreaElimina : n.StyledTextAreaBlock;
}
//#endregion
//#region node_modules/react/cjs/react-jsx-runtime.production.js
var Le = /* @__PURE__ */ D(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), Re = /* @__PURE__ */ D(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === D ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case _: return "Fragment";
				case y: return "Profiler";
				case v: return "StrictMode";
				case C: return "Suspense";
				case ee: return "SuspenseList";
				case E: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case g: return "Portal";
				case x: return e.displayName || "Context";
				case b: return (e._context.displayName || "Context") + ".Consumer";
				case S:
					var n = e.render;
					return e = e.displayName, e ||= (e = n.displayName || n.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case w: return n = e.displayName || null, n === null ? t(e.type) || "Memo" : n;
				case T:
					n = e._payload, e = e._init;
					try {
						return t(e(n));
					} catch {}
			}
			return null;
		}
		function n(e) {
			return "" + e;
		}
		function r(e) {
			try {
				n(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var r = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return r.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), n(e);
			}
		}
		function i(e) {
			if (e === _) return "<>";
			if (typeof e == "object" && e && e.$$typeof === T) return "<...>";
			try {
				var n = t(e);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function a() {
			var e = O.A;
			return e === null ? null : e.getOwner();
		}
		function o() {
			return Error("react-stack-top-frame");
		}
		function s(e) {
			if (ne.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function c(e, t) {
			function n() {
				ie || (ie = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function l() {
			var e = t(this.type);
			return ae[e] || (ae[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function u(e, t, n, r, i, a) {
			var o = n.ref;
			return e = {
				$$typeof: h,
				type: e,
				key: t,
				props: n,
				_owner: r
			}, (o === void 0 ? null : o) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: l
			}), e._store = {}, Object.defineProperty(e._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			}), Object.defineProperty(e, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			}), Object.defineProperty(e, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: i
			}), Object.defineProperty(e, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: a
			}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
		}
		function d(e, n, i, o, l, d) {
			var p = n.children;
			if (p !== void 0) if (o) if (re(p)) {
				for (o = 0; o < p.length; o++) f(p[o]);
				Object.freeze && Object.freeze(p);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else f(p);
			if (ne.call(n, "key")) {
				p = t(e);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				o = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", M[p + o] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", o, p, m, p), M[p + o] = !0);
			}
			if (p = null, i !== void 0 && (r(i), p = "" + i), s(n) && (r(n.key), p = "" + n.key), "key" in n) for (var h in i = {}, n) h !== "key" && (i[h] = n[h]);
			else i = n;
			return p && c(i, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), u(e, p, i, a(), l, d);
		}
		function f(e) {
			p(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === T && (e._payload.status === "fulfilled" ? p(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function p(e) {
			return typeof e == "object" && !!e && e.$$typeof === h;
		}
		var m = te("react"), h = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), x = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), E = Symbol.for("react.activity"), D = Symbol.for("react.client.reference"), O = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ne = Object.prototype.hasOwnProperty, re = Array.isArray, k = console.createTask ? console.createTask : function() {
			return null;
		};
		m = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var ie, ae = {}, A = m.react_stack_bottom_frame.bind(m, o)(), j = k(i(o)), M = {};
		e.Fragment = _, e.jsx = function(e, t, n) {
			var r = 1e4 > O.recentlyCreatedOwnerStacks++;
			return d(e, t, n, !1, r ? Error("react-stack-top-frame") : A, r ? k(i(e)) : j);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > O.recentlyCreatedOwnerStacks++;
			return d(e, t, n, !0, r ? Error("react-stack-top-frame") : A, r ? k(i(e)) : j);
		};
	})();
})), z = (/* @__PURE__ */ D(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = Le() : t.exports = Re();
})))();
function B({ eseguiSalvataggio: e, vistaItem: t, StyledComponents: n }) {
	return t === "card" || t === "form" ? /* @__PURE__ */ (0, z.jsx)(n.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "2%",
			paddingBottom: "2%"
		},
		children: /* @__PURE__ */ (0, z.jsx)(n.StyledRow, { children: /* @__PURE__ */ (0, z.jsx)(n.StyledCol, { children: /* @__PURE__ */ (0, z.jsx)(n.StyledSaveNotSelected, {
			className: "salvaItemButton",
			size: n.grandezzaIcona,
			onClick: e
		}) }) })
	}) : /* @__PURE__ */ (0, z.jsx)(n.StyledColOperazioni, { children: /* @__PURE__ */ (0, z.jsx)(n.StyledSaveNotSelected, {
		className: "center salvaItemButton",
		size: n.grandezzaIcona,
		onClick: e
	}) });
}
function V({ handleSearch: e, vistaItem: t, StyledComponents: n }) {
	return t === "card" || t === "form" ? /* @__PURE__ */ (0, z.jsx)(n.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "2%",
			paddingBottom: "2%"
		},
		children: /* @__PURE__ */ (0, z.jsx)(n.StyledSearchNotSelected, {
			className: "ricercaItemsButton",
			size: n.grandezzaIcona,
			onClick: e
		})
	}) : /* @__PURE__ */ (0, z.jsx)(n.StyledColOperazioni, { children: /* @__PURE__ */ (0, z.jsx)("div", {
		style: { width: "100%" },
		children: /* @__PURE__ */ (0, z.jsx)(n.StyledSearchNotSelected, {
			className: "center ricercaItemsButton",
			size: n.grandezzaIcona,
			onClick: e
		})
	}) });
}
function H({ eseguiRicerca: e, vistaItem: t, StyledComponents: n }) {
	return t === "card" || t === "form" ? /* @__PURE__ */ (0, z.jsx)(n.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "2%",
			paddingBottom: "2%"
		},
		children: /* @__PURE__ */ (0, z.jsx)(n.StyledSearchNotSelected, {
			className: "ricercaEntrateUsciteButton",
			size: n.grandezzaIcona,
			onClick: e
		})
	}) : /* @__PURE__ */ (0, z.jsx)(n.StyledColOperazioni, { children: /* @__PURE__ */ (0, z.jsx)("div", {
		style: { width: "100%" },
		children: /* @__PURE__ */ (0, z.jsx)(n.StyledSearchNotSelected, {
			className: "ricercaEntrateUsciteButton",
			size: n.grandezzaIcona,
			onClick: e
		})
	}) });
}
function U({ eseguiLogin: e, vistaItem: t, StyledComponents: n }) {
	return t === "card" || t === "form" ? /* @__PURE__ */ (0, z.jsx)(n.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "3%",
			paddingBottom: "3%"
		},
		children: /* @__PURE__ */ (0, z.jsx)(n.StyledLoginNotSelected, {
			className: "loginButton",
			size: n.grandezzaIcona,
			onClick: e
		})
	}) : /* @__PURE__ */ (0, z.jsx)(n.StyledColOperazioni, { children: /* @__PURE__ */ (0, z.jsx)(n.StyledLoginNotSelected, {
		className: "center loginButton",
		size: n.grandezzaIcona,
		onClick: e
	}) });
}
function W({ eseguiModificaProfilo: e, vistaItem: t, StyledComponents: n }) {
	let r = t === "form" ? n.StyledPencilNotSelected : n.StyledPencilNotSelected2;
	return t === "card" || t === "form" ? /* @__PURE__ */ (0, z.jsx)(n.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "2%",
			paddingBottom: "2%"
		},
		children: /* @__PURE__ */ (0, z.jsx)(r, {
			className: "modificaProfiloButton",
			size: n.grandezzaIcona,
			onClick: e
		})
	}) : /* @__PURE__ */ (0, z.jsx)(n.StyledColOperazioni, { children: /* @__PURE__ */ (0, z.jsx)(n.StyledPencilNotSelectedModificaProfilo, {
		className: "center modificaProfiloButton",
		size: n.grandezzaIcona,
		onClick: e
	}) });
}
function G({ ottieniFileRangePDF: e, ottieniFileRangeExcel: t, eliminaItemsRange: n, vistaItem: r, StyledComponents: i }) {
	return r === "card" || r === "form" ? /* @__PURE__ */ (0, z.jsxs)(i.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "3%"
		},
		children: [
			/* @__PURE__ */ (0, z.jsxs)("div", { children: [/* @__PURE__ */ (0, z.jsx)(i.StyledFileIconNotSelected, {
				icon: w,
				size: "2xl",
				style: { marginRight: "50%" }
			}), /* @__PURE__ */ (0, z.jsx)(i.StyledFileIconNotSelected, {
				icon: ee,
				size: "2xl"
			})] }),
			/* @__PURE__ */ (0, z.jsx)("br", {}),
			/* @__PURE__ */ (0, z.jsxs)("div", { children: [/* @__PURE__ */ (0, z.jsx)(i.StyledDownloadNotSelected, {
				size: i.grandezzaIcona,
				style: { marginRight: "50%" },
				onClick: e
			}), /* @__PURE__ */ (0, z.jsx)(i.StyledDownloadNotSelected, {
				size: i.grandezzaIcona,
				onClick: t
			})] }),
			/* @__PURE__ */ (0, z.jsx)("br", {}),
			/* @__PURE__ */ (0, z.jsx)("div", { children: /* @__PURE__ */ (0, z.jsx)(i.StyledTrashNotSelected, {
				size: i.grandezzaIcona,
				onClick: n
			}) }),
			/* @__PURE__ */ (0, z.jsx)("br", {})
		]
	}) : /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [
		/* @__PURE__ */ (0, z.jsx)(i.StyledColOperazioni, { children: /* @__PURE__ */ (0, z.jsxs)("div", {
			style: { width: "100%" },
			children: [/* @__PURE__ */ (0, z.jsx)(i.StyledFileIconNotSelected, {
				icon: w,
				className: "left",
				style: { marginRight: "50%" },
				size: "2xl"
			}), /* @__PURE__ */ (0, z.jsx)(i.StyledDownloadNotSelected, {
				size: i.grandezzaIcona,
				className: "rigth",
				onClick: e
			})]
		}) }),
		/* @__PURE__ */ (0, z.jsx)(i.StyledColOperazioni, { children: /* @__PURE__ */ (0, z.jsxs)("div", {
			style: { width: "100%" },
			children: [/* @__PURE__ */ (0, z.jsx)(i.StyledFileIconNotSelected, {
				icon: ee,
				className: "left",
				style: { marginRight: "50%" },
				size: "2xl"
			}), /* @__PURE__ */ (0, z.jsx)(i.StyledDownloadNotSelected, {
				size: i.grandezzaIcona,
				className: "rigth",
				onClick: t
			})]
		}) }),
		/* @__PURE__ */ (0, z.jsx)(i.StyledColOperazioni, { children: /* @__PURE__ */ (0, z.jsx)("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ (0, z.jsx)(i.StyledTrashNotSelected2, {
				size: i.grandezzaIcona,
				className: "center",
				onClick: n
			})
		}) })
	] });
}
function ze({ selectOperation: e, item: t, vistaItem: n, StyledComponents: r }) {
	let i = Ie(t.tipo_selezione, r), a = Fe(t.tipo_selezione, r);
	return n === "card" || n === "form" ? /* @__PURE__ */ (0, z.jsxs)(r.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000"
		},
		children: [/* @__PURE__ */ (0, z.jsx)(a, {
			className: "modificaItemButton",
			size: r.grandezzaIcona,
			onClick: () => e("pencil", t),
			style: { marginRight: "50%" }
		}), /* @__PURE__ */ (0, z.jsx)(i, {
			className: "eliminaItemButton",
			size: r.grandezzaIcona,
			onClick: () => e("trash", t)
		})]
	}) : /* @__PURE__ */ (0, z.jsx)(r.StyledColOperazioni, { children: /* @__PURE__ */ (0, z.jsxs)("div", {
		style: { width: "100%" },
		children: [/* @__PURE__ */ (0, z.jsx)(a, {
			className: "left modificaItemButton",
			size: r.grandezzaIcona,
			onClick: () => e("pencil", t),
			style: { marginRight: "50%" }
		}), /* @__PURE__ */ (0, z.jsx)(i, {
			className: "rigth eliminaItemButton",
			size: r.grandezzaIcona,
			onClick: () => e("trash", t)
		})]
	}) });
}
var Be = ({ selectedIdsModifica: e, selectedIdsEliminazione: t, handleEdit: n, handleDelete: r }) => /* @__PURE__ */ (0, z.jsx)(z.Fragment, { children: /* @__PURE__ */ (0, z.jsx)("div", {
	className: "contenitore-2",
	children: /* @__PURE__ */ (0, z.jsxs)(o, { children: [e.length > 0 && /* @__PURE__ */ (0, z.jsx)(s, { children: /* @__PURE__ */ (0, z.jsx)("button", {
		className: "bottone-blu-non-selezionato",
		onClick: n,
		children: "Modifica"
	}) }), t.length > 0 && /* @__PURE__ */ (0, z.jsx)(s, { children: /* @__PURE__ */ (0, z.jsx)("button", {
		className: "bottone-rosso-non-selezionato",
		onClick: r,
		children: "Elimina"
	}) })] })
}) });
function Ve({ elementi: e, tipoForm: t, setTipoForm: n, StyledComponents: r }) {
	let i = (e) => {
		n(e);
	};
	return /* @__PURE__ */ (0, z.jsxs)(r.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "20px",
			paddingBottom: "20px"
		},
		children: [
			e.includes("insert") && t === "insert" && /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [
				e.includes("search") && /* @__PURE__ */ (0, z.jsx)(r.StyledSearchNotSelected2, {
					size: r.grandezzaIcona,
					style: { marginRight: "50px" },
					onClick: () => i("search")
				}),
				/* @__PURE__ */ (0, z.jsx)(r.StyledSaveSelected2, {
					size: r.grandezzaIcona,
					style: { marginRight: "50px" },
					onClick: () => i("insert")
				}),
				e.includes("file") && /* @__PURE__ */ (0, z.jsx)(r.StyledFileIconNotSelected2, {
					icon: C,
					size: "2xl",
					onClick: () => i("file")
				})
			] }),
			e.includes("search") && t === "search" && /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [
				/* @__PURE__ */ (0, z.jsx)(r.StyledSearchSelected2, {
					size: r.grandezzaIcona,
					style: { marginRight: "50px" },
					onClick: () => i("search")
				}),
				e.includes("insert") && /* @__PURE__ */ (0, z.jsx)(r.StyledSaveNotSelected2, {
					size: r.grandezzaIcona,
					style: { marginRight: "50px" },
					onClick: () => i("insert")
				}),
				e.includes("file") && /* @__PURE__ */ (0, z.jsx)(r.StyledFileIconNotSelected2, {
					icon: C,
					size: "2xl",
					onClick: () => i("file")
				})
			] }),
			e.includes("file") && t === "file" && /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [
				e.includes("search") && /* @__PURE__ */ (0, z.jsx)(r.StyledSearchNotSelected2, {
					size: r.grandezzaIcona,
					style: { marginRight: "50px" },
					onClick: () => i("search")
				}),
				e.includes("insert") && /* @__PURE__ */ (0, z.jsx)(r.StyledSaveNotSelected2, {
					size: r.grandezzaIcona,
					style: { marginRight: "50px" },
					onClick: () => i("insert")
				}),
				/* @__PURE__ */ (0, z.jsx)(r.StyledFileIconNotSelected2, {
					icon: C,
					size: "2xl",
					onClick: () => i("file")
				})
			] })
		]
	});
}
//#endregion
//#region src/form_item/FormItem.jsx
function He({ elementi: e, tipoForm: t, setTipoForm: n, StyledComponents: r }) {
	return /* @__PURE__ */ (0, z.jsx)(r.StyledForm, { children: /* @__PURE__ */ (0, z.jsx)(Ve, {
		elementi: e,
		tipoForm: t,
		setTipoForm: n,
		StyledComponents: r
	}) });
}
function Ue({ elementi: e, tipoForm: t, setTipoForm: n, StyledComponents: r }) {
	return /* @__PURE__ */ (0, z.jsx)(r.StyledForm, { children: /* @__PURE__ */ (0, z.jsx)(Ve, {
		elementi: e,
		tipoForm: t,
		setTipoForm: n,
		StyledComponents: r
	}) });
}
function We({ campi: t, indici: n, eseguiSalvataggio: r }) {
	return /* @__PURE__ */ (0, z.jsxs)(I.StyledForm, { children: [
		/* @__PURE__ */ (0, z.jsx)(I.StyledHeader, { children: t.header }),
		/* @__PURE__ */ (0, z.jsxs)(I.SlideContainer, {
			style: {
				maxHeight: "2000px",
				overflowY: "auto"
			},
			children: [
				n.map((n) => {
					let r = t.type[n] ? L(1, !0, I) : R(1, !0, I);
					return /* @__PURE__ */ (0, z.jsxs)(e, { children: [
						/* @__PURE__ */ (0, z.jsx)(I.StyledLabel, {
							htmlFor: t.name[n],
							children: t.label[n]
						}),
						t.name[n] === "prezzo" ? /* @__PURE__ */ (0, z.jsx)(I.StyledRow, { children: /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [
							/* @__PURE__ */ (0, z.jsx)(r, {
								style: ["prezzo", "totale"].includes(t.name[n]) ? {
									marginLeft: "-10%",
									marginRight: 0,
									minWidth: "105%"
								} : null,
								rows: 1,
								name: t.name[n],
								id: t.id[n],
								type: t.type[n],
								step: t.step[n],
								value: t.value[n],
								placeholder: t.placeholder[n],
								onChange: t.onChange,
								onClick: t.onClick,
								onBlur: t.onBlur
							}),
							["prezzo", "totale"].includes(t.name[n]) && /* @__PURE__ */ (0, z.jsx)(I.StyledEuroNotSelected, {
								style: {
									maxWidth: "5%",
									marginTop: "13px"
								},
								size: I.grandezzaIcona,
								onClick: null
							}),
							t.options[n]
						] }) }) : /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [
							/* @__PURE__ */ (0, z.jsx)(r, {
								style: ["prezzo", "totale"].includes(t.name[n]) ? {
									marginLeft: "-10%",
									marginRight: 0,
									minWidth: "105%"
								} : null,
								rows: 1,
								name: t.name[n],
								id: t.id[n],
								type: t.type[n],
								step: t.step[n],
								value: t.value[n],
								placeholder: t.placeholder[n],
								onChange: t.onChange,
								onClick: t.onClick,
								onBlur: t.onBlur
							}),
							["prezzo", "totale"].includes(t.name[n]) && /* @__PURE__ */ (0, z.jsx)(I.StyledEuroNotSelected, {
								style: {
									maxWidth: "5%",
									marginTop: "13px"
								},
								size: I.grandezzaIcona,
								onClick: null
							}),
							t.options[n]
						] }),
						t.errore[n] !== "" && /* @__PURE__ */ (0, z.jsx)(I.StyledSpanErrore, { children: t.errore[n] })
					] }, n);
				}),
				/* @__PURE__ */ (0, z.jsx)("br", {}),
				" ",
				/* @__PURE__ */ (0, z.jsx)("br", {})
			]
		}),
		/* @__PURE__ */ (0, z.jsx)(B, {
			eseguiSalvataggio: r,
			vistaItem: "form",
			StyledComponents: I
		})
	] });
}
function Ge({ campi: t, indici: r, handleSearch: i }) {
	let [a, o] = n(!0), [s, c] = n(!0);
	return L(1, !0, I), R(1, !0, I), /* @__PURE__ */ (0, z.jsxs)(I.StyledForm, { children: [
		/* @__PURE__ */ (0, z.jsx)(I.StyledHeader, { children: t.header }),
		/* @__PURE__ */ (0, z.jsxs)(I.SlideContainer, {
			style: {
				maxHeight: "2000px",
				overflowY: "auto"
			},
			children: [
				r.map((n) => {
					let r = t.type[n] ? L(1, !0, I) : R(1, !0, I);
					return /* @__PURE__ */ (0, z.jsxs)(e, { children: [/* @__PURE__ */ (0, z.jsx)(I.StyledLabel, {
						htmlFor: t.name[n],
						children: t.label[n]
					}), /* @__PURE__ */ (0, z.jsx)(r, {
						rows: 1,
						name: t.name[n],
						id: t.id[n],
						type: t.type[n],
						step: t.step[n],
						value: t.value[n],
						placeholder: t.placeholder[n],
						onChange: t.onChange,
						onClick: t.onClick,
						onBlur: t.onBlur
					}, n)] }, n);
				}),
				/* @__PURE__ */ (0, z.jsx)("br", {}),
				" ",
				/* @__PURE__ */ (0, z.jsx)("br", {})
			]
		}),
		/* @__PURE__ */ (0, z.jsx)(V, {
			setIsVisible: o,
			arrowUp: s,
			setArrowUp: c,
			handleSearch: i,
			vistaItem: "form",
			StyledComponents: I
		})
	] });
}
function Ke({ campi: t, indici: r, eseguiLogin: i }) {
	let [a, o] = n("password"), s = (e) => {
		e.preventDefault(), o(a === "text" ? "password" : "text");
	};
	return /* @__PURE__ */ (0, z.jsxs)(I.StyledForm, { children: [
		/* @__PURE__ */ (0, z.jsx)(I.StyledHeader, { children: t.header }),
		/* @__PURE__ */ (0, z.jsxs)(I.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: [
				r.map((n) => {
					let r = t.type[n] ? L(1, !0, I) : R(1, !0, I), i = a === "password" ? I.StyledEyeClosedNotSelected : I.StyledEyeOpenNotSelected;
					return /* @__PURE__ */ (0, z.jsxs)(e, { children: [
						/* @__PURE__ */ (0, z.jsx)(I.StyledLabel, {
							htmlFor: t.name[n],
							children: t.label[n]
						}),
						/* @__PURE__ */ (0, z.jsxs)(I.StyledRow, { children: [/* @__PURE__ */ (0, z.jsx)(r, {
							style: t.name[n] === "password" ? {
								marginLeft: "-10%",
								marginRight: 0,
								minWidth: "105%"
							} : {
								marginLeft: "-10%",
								marginRight: 0,
								minWidth: "115%",
								width: "100%"
							},
							rows: 1,
							name: t.name[n],
							id: t.id[n],
							type: t.name[n] === "password" ? a : t.type[n],
							step: t.step[n],
							min: t.min[n],
							value: t.value[n],
							placeholder: t.placeholder[n],
							onChange: t.onChange,
							onClick: t.onClick,
							onBlur: t.onBlur
						}), t.name[n] === "password" && /* @__PURE__ */ (0, z.jsx)(i, {
							style: {
								maxWidth: "5%",
								marginTop: "13px"
							},
							size: I.grandezzaIcona,
							onClick: s
						})] }),
						t.options[n],
						t.errore[n] && /* @__PURE__ */ (0, z.jsx)(I.StyledSpanErrore, { children: t.errore[n] })
					] }, n);
				}),
				/* @__PURE__ */ (0, z.jsx)("br", {}),
				" ",
				/* @__PURE__ */ (0, z.jsx)("br", {})
			]
		}),
		/* @__PURE__ */ (0, z.jsx)(U, {
			eseguiLogin: i,
			vistaItem: "form",
			StyledComponents: I
		})
	] });
}
function qe({ campi: t, indici: r, eseguiModificaProfilo: i }) {
	let [a, o] = n("password"), [s, c] = n("password"), [l, u] = n("password"), d = (e, t) => {
		e.preventDefault(), t === "password_attuale" ? o(a === "text" ? "password" : "text") : t === "nuova_password" ? c(s === "text" ? "password" : "text") : t === "conferma_nuova_password" && u(l === "text" ? "password" : "text");
	};
	return /* @__PURE__ */ (0, z.jsxs)(I.StyledForm, { children: [
		/* @__PURE__ */ (0, z.jsx)(I.StyledHeader, { children: t.header }),
		/* @__PURE__ */ (0, z.jsxs)(I.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: [
				r.map((n) => {
					let r = t.type[n] ? L(1, !0, I) : R(1, !0, I), i = t.name[n] === "password_attuale" && a === "password" || t.name[n] === "nuova_password" && s === "password" || t.name[n] === "conferma_nuova_password" && l === "password" ? I.StyledEyeClosedNotSelected : I.StyledEyeOpenNotSelected;
					return /* @__PURE__ */ (0, z.jsxs)(e, { children: [
						/* @__PURE__ */ (0, z.jsx)(I.StyledLabel, {
							htmlFor: t.name[n],
							children: t.label[n]
						}),
						/* @__PURE__ */ (0, z.jsxs)(I.StyledRow, { children: [/* @__PURE__ */ (0, z.jsx)(r, {
							style: t.name[n].includes("password") ? {
								marginLeft: "-10%",
								marginRight: 0,
								minWidth: "105%"
							} : {
								marginLeft: "-10%",
								marginRight: 0,
								minWidth: "115%",
								width: "100%"
							},
							rows: 1,
							name: t.name[n],
							id: t.id[n],
							type: t.name[n].includes("password") ? t.name[n] === "password_attuale" ? a : t.name[n] === "nuova_password" ? s : l : t.type[n],
							step: t.step[n],
							min: t.min[n],
							value: t.value[n],
							placeholder: t.placeholder[n],
							onChange: t.onChange,
							onClick: t.onClick,
							onBlur: t.onBlur
						}), t.name[n].includes("password") && /* @__PURE__ */ (0, z.jsx)(i, {
							style: {
								maxWidth: "5%",
								marginTop: "13px"
							},
							size: I.grandezzaIcona,
							onClick: (e) => d(e, t.name[n])
						})] }),
						t.options[n],
						t.errore[n] && /* @__PURE__ */ (0, z.jsx)(I.StyledSpanErrore, { children: t.errore[n] })
					] }, n);
				}),
				/* @__PURE__ */ (0, z.jsx)("br", {}),
				" ",
				/* @__PURE__ */ (0, z.jsx)("br", {})
			]
		}),
		/* @__PURE__ */ (0, z.jsx)(W, {
			eseguiModificaProfilo: i,
			vistaItem: "form",
			StyledComponents: I
		})
	] });
}
function Je({ campi: t, indici: r, ottieniFileRangePDF: i, ottieniFileRangeExcel: a, eliminaItemsRange: o }) {
	let [s, c] = n(!0), [l, u] = n(!0), d = s ? "2000px" : "0px";
	return L(1, !0, I), R(1, !0, I), /* @__PURE__ */ (0, z.jsxs)(I.StyledForm, { children: [
		/* @__PURE__ */ (0, z.jsx)(I.StyledHeader, { children: t.header }),
		/* @__PURE__ */ (0, z.jsxs)(I.SlideContainer, {
			style: { maxHeight: `${d}` },
			children: [
				r.map((n) => {
					let r = t.type[n] ? L(1, !0, I) : R(1, !0, I);
					return /* @__PURE__ */ (0, z.jsxs)(e, { children: [/* @__PURE__ */ (0, z.jsx)(I.StyledLabel, {
						htmlFor: t.name[n],
						children: t.label[n]
					}), /* @__PURE__ */ (0, z.jsx)(r, {
						rows: 1,
						name: t.name[n],
						id: t.id[n],
						type: t.type[n],
						step: t.step[n],
						value: t.value[n],
						placeholder: t.placeholder[n],
						onChange: t.onChange,
						onClick: t.onClick,
						onBlur: t.onBlur
					}, n)] }, n);
				}),
				/* @__PURE__ */ (0, z.jsx)("br", {}),
				" ",
				/* @__PURE__ */ (0, z.jsx)("br", {})
			]
		}),
		/* @__PURE__ */ (0, z.jsx)(G, {
			ottieniFileRangePDF: i,
			ottieniFileRangeExcel: a,
			eliminaItemsRange: o,
			vistaItem: "form",
			StyledComponents: I
		})
	] });
}
function Ye({ datiRicerca: e, setDatiRicerca: t, handleInputChange: n, eseguiRicerca: r, lingua: i }) {
	return /* @__PURE__ */ (0, z.jsxs)(I.StyledForm, { children: [
		/* @__PURE__ */ (0, z.jsx)(I.StyledHeader, { children: i === "italiano" ? "Ricerca entrate e uscite" : "Searching for inputs and outputs" }),
		/* @__PURE__ */ (0, z.jsxs)(I.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: [
				/* @__PURE__ */ (0, z.jsx)(I.StyledLabel, {
					htmlFor: "primo_anno",
					children: i === "italiano" ? "Primo anno" : "First year"
				}),
				/* @__PURE__ */ (0, z.jsx)(I.StyledInputModifica, {
					rows: 1,
					name: "primo_anno",
					id: "primo_anno",
					type: "number",
					step: 1,
					value: e.primo_anno,
					placeholder: i === "italiano" ? "Primo anno" : "First year",
					onChange: (e) => n(e, t)
				}),
				/* @__PURE__ */ (0, z.jsx)(I.StyledLabel, {
					htmlFor: "ultimo_anno",
					children: i === "italiano" ? "Ultimo anno" : "Last year"
				}),
				/* @__PURE__ */ (0, z.jsxs)(I.StyledSelectModifica, {
					name: "ultimo_anno",
					id: "ultimo_anno",
					value: e.ultimo_anno,
					onChange: (e) => n(e, t),
					children: [
						/* @__PURE__ */ (0, z.jsx)("option", {
							value: parseInt(e.primo_anno) + 1,
							children: parseInt(e.primo_anno) + 1
						}),
						/* @__PURE__ */ (0, z.jsx)("option", {
							value: parseInt(e.primo_anno) + 2,
							children: parseInt(e.primo_anno) + 2
						}),
						/* @__PURE__ */ (0, z.jsx)("option", {
							value: parseInt(e.primo_anno) + 3,
							children: parseInt(e.primo_anno) + 3
						}),
						/* @__PURE__ */ (0, z.jsx)("option", {
							value: parseInt(e.primo_anno) + 4,
							children: parseInt(e.primo_anno) + 4
						}),
						/* @__PURE__ */ (0, z.jsx)("option", {
							value: parseInt(e.primo_anno) + 5,
							children: parseInt(e.primo_anno) + 5
						})
					]
				}),
				/* @__PURE__ */ (0, z.jsx)("br", {}),
				" ",
				/* @__PURE__ */ (0, z.jsx)("br", {})
			]
		}),
		/* @__PURE__ */ (0, z.jsx)(H, {
			eseguiRicerca: (e) => r(e),
			vistaItem: "form",
			StyledComponents: I
		})
	] });
}
var Xe = r(o)`
  display: flex;
  align-items: stretch; 
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 3%;
  padding-right: 3%;
`, K = r(s)`
  flex: 1;
  display: flex;
  flex-direction: column; /* Organizza il contenuto verticalmente */
  align-items: flex-start; /* Allinea gli elementi al bordo sinistro (se necessario) */
  justify-content: flex-start; /* Allinea gli elementi in alto */
  text-align: center;
  border-radius: 40px;
  padding: 10px; /* Aggiunge spazi interni */
  margin: 10px;
  min-height: 100px;
  color: #FFFFFF;
`;
r(K)`
  max-height: ${(e) => e.isVisible ? "1000px" : "0"}; 
  overflow: hidden;
  transition: max-height 1s ease-out;
`, r(K)`
  border: 5px solid #000000;
  background-color: #000000;
`;
var Ze = r(K)`
  border: 5px solid #000000;
  background-color: #000000;
  min-width: 230px;
  max-width: 230px;
  min-height: 80px;
  max-height: 80px;
`;
r(K)`
  border: 5px solid #000000;
  background-color: #0050EF;
`, r(K)`
  border: 5px solid #000000;
  background-color: #500000;
`, r.div`
  display: flex;
  flex-direction: row-reverse;
`;
var q = "\n  flex: 1;\n  display: flex;\n  align-items: center; /* Centro verticale */\n  justify-content: center; /* Centro orizzontale */\n  width: 100%;\n  height: 100%;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  color: inherit;\n  padding: 0; \n  margin: 0;\n  text-align: center; /* Centro orizzontale del testo */\n  overflow: hidden; /* Nasconde l'overflow */\n  resize: vertical;\n  border-radius: 40px;\n  min-height: 50px;\n  border: 5px solid #000000; \n  color: #FFFFFF;\n  padding: auto;\n", Qe = r.textarea`
  ${q}
`, $e = r(Qe)`
  background-color: #111111;
`, et = r(Qe)`
  background-color: #0050EF;
`, tt = r(Qe)`
  background-color: #500000;
`, nt = r.input`
  ${q}
`, rt = r(nt)`
  background-color: #111111;
`, it = r(nt)`
  background-color: #0050EF;
`, at = r(nt)`
  background-color: #500000;
`, ot = r.button`
  ${q}
`, st = "\n  margin-left: 10%;\n  margin-right: 10%;\n  border: 5px solid #000000;\n  background-color: #000000;\n  cursor: pointer;  \n  transition: 0.5s all ease-out;\n";
r(ot)`
  ${st}
  &:hover {
    background-color: #0050EF;
    color: #FFFFFF;
  }
`, r(ot)`
  ${st}
  &:hover {
    background-color: #500000;
    color: #FFFFFF;
  }
`;
var J = "\n  color: #FFFFFF;\n  cursor: pointer;\n", ct = r(v)`
  ${J}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, lt = r(h)`
  ${J}
  transition: 0.5s all ease-out;
`, ut = r(m)`
  ${J}
  transition: 0.5s all ease-out;
  color: #0050EF;
`, dt = r(y)`
  ${J}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, ft = r(p)`
  color: #FFFFFF;
  transition: 0.5s all ease-out;
`, pt = r(l)`
  ${J}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, mt = r(u)`
  ${J}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, ht = r(g)`
  ${J}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, gt = r(_)`
  ${J}
`, _t = r(_)`
  ${J}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, vt = r(_)`
  color: #0050EF;
  cursor: pointer;
`, yt = r(b)`
  ${J}
`, bt = r(b)`
  color: #500000;
  cursor: pointer;
`, xt = r(S)`
  color: #FFFFFF;
`, St = r(S)`
  ${J}
  color: #0050EF;
`, Ct = r(f)`
  ${J}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`;
r(x)`
  ${J}
  transition: 0.5s all ease-out;
  &:hover {
    color: #500000;
  }
`;
var wt = r(b)`
  ${J}
  transition: 0.5s all ease-out;
  &:hover {
    color: #500000;
  }
`, Tt = r.select`
  cursor: pointer;
  width: 100%;
  border-radius: 40px;
  background-color: #0050EF;
  border: 5px solid #000000;
  color: #FFFFFF;
  text-align: center;
`, Et = r(Tt)`
  background-color: #111111;
`, Dt = r(Tt)`
  background-color: #0050EF;
`, Ot = r(Tt)`
  background-color: #500000;
`;
r.option`
  background-color: #0050EF;
  &:hover {
    background-color: #0050EF;
  }
`;
var Y = {
	StyledPencilNotSelected: gt,
	StyledPencilSelected: vt,
	grandezzaIcona: 50,
	StyledTrashNotSelected: yt,
	StyledTrashSelected: bt,
	StyledColOperazioni: Ze,
	StyledSaveNotSelected: ct,
	StyledSearchNotSelected: dt,
	StyledArrowLeftNotSelected: pt,
	StyledArrowRightNotSelected: mt,
	StyledFileIconNotSelected: xt,
	StyledDownloadNotSelected: Ct,
	StyledTrashNotSelected2: wt,
	StyledLoginNotSelected: ht,
	StyledPencilNotSelectedModificaProfilo: _t,
	StyledInputBlock: rt,
	StyledInputModifica: it,
	StyledInputElimina: at,
	StyledTextAreaBlock: $e,
	StyledTextAreaModifica: et,
	StyledTextAreaElimina: tt,
	StyledRow: Xe,
	StyledCol: K,
	StyledSpanErrore: r.span`
  color: #FF0000;
  border-radius: 40px;
  padding: 10px;
`,
	StyledSelectBlock: Et,
	StyledSelectModifica: Dt,
	StyledSelectElimina: Ot,
	StyledEyeClosedNotSelected: lt,
	StyledEyeOpenNotSelected: ut,
	StyledEuroNotSelected: ft,
	StyledFileIconSelected2: St
}, kt = (e, t, n) => {
	e.preventDefault();
	let { name: r, value: i, id: a } = e.target, o = !0;
	[
		"note_cliente",
		"note_servizio",
		"note_lavoro",
		"note_spesa"
	].includes(a) ? i.length > 200 && (o = !1) : ["descrizione_spesa"].includes(a) ? i.length > 1e3 && (o = !1) : ["nome_servizio"].includes(a) ? i.length > 100 && (o = !1) : ["prezzo_servizio", "totale_spesa"].includes(a) ? (!(!isNaN(i.substr(0, i)) && Number(i) === parseFloat(i)) || i < 0) && (o = !1) : ["email_cliente"].includes(a) ? i.length > 254 && (o = !1) : ["contatto_cliente"].includes(a) && (i === "" ? o = !0 : (!/^\d+$/.test(i) || !(i.startsWith("0") && i.length <= 11 || i.startsWith("3") && i.length <= 10)) && (o = !1)), o === !0 && n((e) => ({
		...e,
		[t]: i
	}));
}, At = (e) => {
	["giorno_spesa", "giorno_lavoro"].includes(e.target.id) ? e.target.type = "date" : ["prezzo_servizio", "totale_spesa"].includes(e.target.id) && (e.target.value = e.target.value.substr(0, e.target.value.length - 2));
};
//#endregion
//#region src/row_item/RowItem.jsx
function jt({ campi: t, indici: n, eseguiSalvataggio: r }) {
	L(1, !0, Y), R(1, !0, Y);
	let i = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ (0, z.jsxs)(Y.StyledRow, { children: [/* @__PURE__ */ (0, z.jsx)(B, {
		eseguiSalvataggio: r,
		vistaItem: "row",
		StyledComponents: Y
	}), n.map((n) => {
		let r = t.type[n] ? L(1, !0, Y) : R(1, !0, Y);
		return /* @__PURE__ */ (0, z.jsx)(e, { children: /* @__PURE__ */ (0, z.jsx)(Y.StyledCol, { children: /* @__PURE__ */ (0, z.jsxs)("div", {
			style: { width: "100%" },
			children: [/* @__PURE__ */ (0, z.jsxs)(Y.StyledRow, { children: [
				/* @__PURE__ */ (0, z.jsx)(r, {
					rows: 1,
					style: ["prezzo", "totale"].includes(t.name[n]) ? { maxWidth: "90%" } : null,
					name: t.name[n],
					id: t.id[n],
					type: t.type[n],
					step: t.step[n],
					value: t.value[n],
					placeholder: t.placeholder[n],
					onChange: t.onChange,
					onClick: t.onClick,
					onBlur: t.onBlur,
					onContextMenu: (e) => i(e, t.placeholder[n])
				}),
				["prezzo", "totale"].includes(t.name[n]) && /* @__PURE__ */ (0, z.jsx)(Y.StyledEuroNotSelected, {
					style: {
						maxWidth: "10%",
						marginLeft: "-6px"
					},
					size: Y.grandezzaIcona,
					onClick: null
				}),
				t.options[n]
			] }), t.errore[n] !== "" && /* @__PURE__ */ (0, z.jsx)(Y.StyledSpanErrore, { children: t.errore[n] })]
		}) }) }, n);
	})] });
}
function Mt({ campi: t, indici: r, handleSearch: i }) {
	let [a, o] = n([
		!0,
		!0,
		!0,
		!0,
		!0,
		!0,
		!0,
		!0
	]), [s, c] = n(!0);
	L(1, !0, Y), R(1, !0, Y);
	let l = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ (0, z.jsxs)(Y.StyledRow, { children: [/* @__PURE__ */ (0, z.jsx)(V, {
		visibilita: a,
		setVisibilita: o,
		arrowUp: s,
		setArrowUp: c,
		handleSearch: i,
		vistaItem: "row",
		StyledComponents: Y
	}), r.map((n) => {
		let r = t.type[n] ? L(1, !0, Y) : R(1, !0, Y);
		return /* @__PURE__ */ (0, z.jsx)(e, { children: /* @__PURE__ */ (0, z.jsx)(Y.StyledCol, { children: /* @__PURE__ */ (0, z.jsx)("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ (0, z.jsx)(Y.StyledRow, { children: a[n] && /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsx)(r, {
				style: [
					"prezzo_min",
					"prezzo_max",
					"totale_min",
					"totale_max"
				].includes(t.name[n]) ? { maxWidth: "90%" } : null,
				rows: 1,
				name: t.name[n],
				id: t.id[n],
				type: t.type[n],
				step: t.step[n],
				value: t.value[n],
				placeholder: t.placeholder[n],
				onChange: t.onChange,
				onClick: t.onClick,
				onBlur: t.onBlur,
				onContextMenu: (e) => l(e, t.placeholder[n])
			}), [
				"prezzo_min",
				"prezzo_max",
				"totale_min",
				"totale_max"
			].includes(t.name[n]) && /* @__PURE__ */ (0, z.jsx)(Y.StyledEuroNotSelected, {
				style: {
					maxWidth: "20%",
					marginLeft: "-6px"
				},
				size: Y.grandezzaIcona,
				onClick: null
			})] }) })
		}) }) }, n);
	})] });
}
function Nt({ item: t, campi: r, indici: i, selectOperation: a, tipoItem: o, handleBlurItem: s }) {
	let c = L(r.tipoSelezione, !1, Y), [l, u] = n(() => i.reduce((e, t) => ({
		...e,
		[t]: r.value[t]
	}), {})), d = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ (0, z.jsxs)(Y.StyledRow, { children: [
		/* @__PURE__ */ (0, z.jsx)(ze, {
			selectOperation: a,
			item: t,
			vistaItem: "row",
			StyledComponents: Y
		}),
		/* @__PURE__ */ (0, z.jsx)(Y.StyledCol, { children: /* @__PURE__ */ (0, z.jsx)("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ (0, z.jsx)(Y.StyledRow, { children: /* @__PURE__ */ (0, z.jsx)(c, {
				rows: 1,
				name: "header",
				value: r.header,
				placeholder: r.header,
				readOnly: !0
			}) })
		}) }),
		i.map((n) => {
			let i = r.type[n] ? L(r.tipoSelezione, r.valoreModificabile[n], Y) : R(r.tipoSelezione, r.valoreModificabile[n], Y);
			return /* @__PURE__ */ (0, z.jsx)(e, { children: /* @__PURE__ */ (0, z.jsx)(Y.StyledCol, { children: /* @__PURE__ */ (0, z.jsxs)("div", {
				style: { width: "100%" },
				children: [/* @__PURE__ */ (0, z.jsxs)(Y.StyledRow, { children: [
					/* @__PURE__ */ (0, z.jsx)(i, {
						style: ["prezzo", "totale"].includes(r.name[n]) ? { maxWidth: "80%" } : null,
						rows: 1,
						name: r.name[n],
						id: r.id[n],
						type: r.type[n],
						step: r.step[n],
						value: l[n],
						placeholder: r.placeholder[n],
						onChange: (e) => kt(e, n, u),
						onBlur: (e) => s(e, t),
						onClick: (e) => At(e),
						readOnly: t.tipo_selezione !== 1,
						onContextMenu: (e) => d(e, r.placeholder[n])
					}),
					["prezzo", "totale"].includes(r.name[n]) && /* @__PURE__ */ (0, z.jsx)(Y.StyledEuroNotSelected, {
						style: {
							maxWidth: "20%",
							marginLeft: "-6px"
						},
						size: Y.grandezzaIcona
					}),
					r.options[n]
				] }), r.errore[n] && /* @__PURE__ */ (0, z.jsx)(Y.StyledSpanErrore, { children: r.errore[n] })]
			}) }) }, n);
		})
	] });
}
function Pt({ campi: t, indici: n, ottieniFileRangePDF: r, ottieniFileRangeExcel: i, eliminaItemsRange: a }) {
	let o = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ (0, z.jsxs)(Y.StyledRow, { children: [/* @__PURE__ */ (0, z.jsx)(G, {
		ottieniFileRangePDF: r,
		ottieniFileRangeExcel: i,
		eliminaItemsRange: a,
		vistaItem: "row",
		StyledComponents: Y
	}), n.map((n) => {
		let r = t.type[n] ? L(1, !0, Y) : R(1, !0, Y);
		return /* @__PURE__ */ (0, z.jsx)(e, { children: /* @__PURE__ */ (0, z.jsx)(Y.StyledCol, { children: /* @__PURE__ */ (0, z.jsx)("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ (0, z.jsx)(Y.StyledRow, { children: /* @__PURE__ */ (0, z.jsx)(r, {
				rows: 1,
				name: t.name[n],
				id: t.id[n],
				type: t.type[n],
				step: t.step[n],
				value: t.value[n],
				placeholder: t.placeholder[n],
				onChange: t.onChange,
				onClick: t.onClick,
				onBlur: t.onBlur,
				onContextMenu: (e) => o(e, t.placeholder[n])
			}) })
		}) }) }, n);
	})] });
}
function Ft({ campi: t, indici: r, eseguiLogin: i }) {
	let [a, o] = n("password"), s = (e) => {
		e.preventDefault(), o(a === "text" ? "password" : "text");
	}, c = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ (0, z.jsxs)(Y.StyledRow, { children: [/* @__PURE__ */ (0, z.jsx)(U, {
		eseguiLogin: i,
		vistaItem: "row",
		StyledComponents: Y
	}), r.map((n) => {
		let r = t.type[n] ? L(1, !0, Y) : R(1, !0, Y), i = a === "password" ? Y.StyledEyeClosedNotSelected : Y.StyledEyeOpenNotSelected;
		return /* @__PURE__ */ (0, z.jsx)(e, { children: /* @__PURE__ */ (0, z.jsx)(Y.StyledCol, { children: /* @__PURE__ */ (0, z.jsxs)("div", {
			style: { width: "100%" },
			children: [
				/* @__PURE__ */ (0, z.jsxs)(Y.StyledRow, { children: [/* @__PURE__ */ (0, z.jsx)(r, {
					style: t.name[n] === "password" ? { maxWidth: "80%" } : null,
					rows: 1,
					name: t.name[n],
					id: t.id[n],
					type: t.name[n] === "password" ? a : t.type[n],
					step: t.step[n],
					min: t.min[n],
					value: t.value[n],
					placeholder: t.placeholder[n],
					onChange: t.onChange,
					onClick: t.onClick,
					onBlur: t.onBlur,
					onContextMenu: (e) => c(e, t.placeholder[n])
				}), t.name[n] === "password" && /* @__PURE__ */ (0, z.jsx)(i, {
					style: {
						maxWidth: "20%",
						marginLeft: "-6px"
					},
					size: Y.grandezzaIcona,
					onClick: s
				})] }),
				t.options[n],
				t.errore[n] && /* @__PURE__ */ (0, z.jsx)(Y.StyledSpanErrore, { children: t.errore[n] })
			]
		}) }) }, n);
	})] });
}
function It({ campi: t, indici: r, eseguiModificaProfilo: i }) {
	let [a, o] = n("password"), [s, c] = n("password"), [l, u] = n("password"), d = (e, t) => {
		e.preventDefault(), t === "password_attuale" ? o(a === "text" ? "password" : "text") : t === "nuova_password" ? c(s === "text" ? "password" : "text") : t === "conferma_nuova_password" && u(l === "text" ? "password" : "text");
	};
	return /* @__PURE__ */ (0, z.jsxs)(Y.StyledRow, { children: [/* @__PURE__ */ (0, z.jsx)(W, {
		eseguiModificaProfilo: i,
		vistaItem: "row",
		StyledComponents: Y
	}), r.map((n) => {
		let r = t.type[n] ? L(1, !0, Y) : R(1, !0, Y), i = t.name[n] === "password_attuale" && a === "password" || t.name[n] === "nuova_password" && s === "password" || t.name[n] === "conferma_nuova_password" && l === "password" ? Y.StyledEyeClosedNotSelected : Y.StyledEyeOpenNotSelected;
		return /* @__PURE__ */ (0, z.jsx)(e, { children: /* @__PURE__ */ (0, z.jsx)(Y.StyledCol, { children: /* @__PURE__ */ (0, z.jsxs)("div", {
			style: { width: "100%" },
			children: [
				/* @__PURE__ */ (0, z.jsxs)(Y.StyledRow, { children: [/* @__PURE__ */ (0, z.jsx)(r, {
					style: t.name[n].includes("password") ? { maxWidth: "80%" } : null,
					rows: 1,
					name: t.name[n],
					id: t.id[n],
					type: t.name[n].includes("password") ? t.name[n] === "password_attuale" ? a : t.name[n] === "nuova_password" ? s : l : t.type[n],
					step: t.step[n],
					min: t.min[n],
					value: t.value[n],
					placeholder: t.placeholder[n],
					onChange: t.onChange,
					onClick: t.onClick,
					onBlur: t.onBlur,
					onContextMenu: (e) => handleRightClick(e, t.placeholder[n])
				}), t.name[n].includes("password") && /* @__PURE__ */ (0, z.jsx)(i, {
					style: {
						maxWidth: "20%",
						marginLeft: "-6px"
					},
					size: Y.grandezzaIcona,
					onClick: (e) => d(e, t.name[n])
				})] }),
				t.options[n],
				t.errore[n] && /* @__PURE__ */ (0, z.jsx)(Y.StyledSpanErrore, { children: t.errore[n] })
			]
		}) }) }, n);
	})] });
}
function Lt({ datiRicerca: e, setDatiRicerca: t, handleInputChange: n, eseguiRicerca: r, lingua: i }) {
	return /* @__PURE__ */ (0, z.jsxs)(Y.StyledRow, { children: [
		/* @__PURE__ */ (0, z.jsx)(H, {
			eseguiRicerca: (e) => r(e),
			vistaItem: "row",
			StyledComponents: Y
		}),
		/* @__PURE__ */ (0, z.jsx)(Y.StyledCol, { children: /* @__PURE__ */ (0, z.jsx)("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ (0, z.jsx)(Y.StyledRow, { children: /* @__PURE__ */ (0, z.jsx)(Y.StyledInputBlock, {
				rows: 1,
				name: "header",
				value: i === "italiano" ? "Ricerca entrate e uscite" : "Searching for inputs and outputs",
				placeholder: i === "italiano" ? "Ricerca entrate e uscite" : "Searching for inputs and outputs",
				readOnly: !0
			}) })
		}) }),
		/* @__PURE__ */ (0, z.jsx)(Y.StyledCol, { children: /* @__PURE__ */ (0, z.jsx)("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ (0, z.jsx)(Y.StyledInputModifica, {
				rows: 1,
				name: "primo_anno",
				id: "primo_anno",
				type: "number",
				step: 1,
				value: e.primo_anno,
				placeholder: "Primo anno",
				onChange: (e) => n(e, t),
				onContextMenu: (e) => handleRightClick(e, "Primo anno")
			})
		}) }),
		/* @__PURE__ */ (0, z.jsx)(Y.StyledCol, { children: /* @__PURE__ */ (0, z.jsx)("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ (0, z.jsxs)(Y.StyledSelectModifica, {
				name: "ultimo_anno",
				id: "ultimo_anno",
				onContextMenu: (e) => handleRightClick(e, "Ultimo anno"),
				value: e.ultimo_anno,
				onChange: (e) => n(e, t),
				children: [
					/* @__PURE__ */ (0, z.jsx)("option", {
						value: parseInt(e.primo_anno) + 1,
						children: parseInt(e.primo_anno) + 1
					}),
					/* @__PURE__ */ (0, z.jsx)("option", {
						value: parseInt(e.primo_anno) + 2,
						children: parseInt(e.primo_anno) + 2
					}),
					/* @__PURE__ */ (0, z.jsx)("option", {
						value: parseInt(e.primo_anno) + 3,
						children: parseInt(e.primo_anno) + 3
					}),
					/* @__PURE__ */ (0, z.jsx)("option", {
						value: parseInt(e.primo_anno) + 4,
						children: parseInt(e.primo_anno) + 4
					}),
					/* @__PURE__ */ (0, z.jsx)("option", {
						value: parseInt(e.primo_anno) + 5,
						children: parseInt(e.primo_anno) + 5
					})
				]
			})
		}) })
	] });
}
var Rt = r(i)`
  width: 18rem;
  background-color: transparent;
  overflow: hidden;
  border-radius: 40px;
  color: white;
  text-align: center;
  padding: 0;
  border: transparent;
`, zt = r(o)`
  display: flex;
  flex-wrap: wrap;
`, Bt = r(s)`
  position: relative; 
  color: #FFFFFF;
  border-radius: 40px;
  padding: 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: auto;
  min-height: 50px;
  min-width: 300px;
`, Vt = r(i.Header)`
  color: #ffffff;
  background-color: #000000;
  border: 5px solid #000000;
  min-height: 70px;
`, Ht = r(a.Item)`
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  min-height: 70px;
`, Ut = r.div`
  overflow: hidden;
  transition: max-height 2s ease-out;
  background-color: #111111;
  border: 10px solid #000000;
`, X = r.textarea`
  width: 100%;
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  min-height: 70px;
`, Wt = r(X)`
  background-color: #111111;
`, Gt = r(X)`
  background-color: #0050EF;
`, Kt = r(X)`
  background-color: #500000;
`, qt = r.input`
  width: 100%;
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  min-height: 70px;
`, Jt = r(qt)`
  background-color: #111111;
`, Yt = r(qt)`
  background-color: #0050EF;
`, Xt = r(qt)`
  background-color: #500000;
`, Z = "\n  color: #FFFFFF;\n  cursor: pointer;\n";
r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-top:10px;
`;
var Zt = r(v)`
  ${Z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, Qt = r(h)`
  ${Z}
  transition: 0.5s all ease-out;
`, $t = r(m)`
  ${Z}
  transition: 0.5s all ease-out;
  color: #0050EF;
`, en = r(y)`
  ${Z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, tn = r(p)`
  color: #FFFFFF;
  transition: 0.5s all ease-out;
`, nn = r(d)`
  ${Z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, rn = r(c)`
  ${Z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, an = r(g)`
  ${Z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, on = r(_)`
  ${Z}
`;
r(_)`
  ${Z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`;
var sn = r(_)`
  color: #0050EF;
  cursor: pointer;
`, cn = r(b)`
  ${Z}
`, ln = r(b)`
  color: #500000;
  cursor: pointer;
`, un = r(S)`
  color: #FFFFFF;
`, dn = r(S)`
  ${Z}
  color: #0050EF;
`, fn = r(f)`
  ${Z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`;
r(x)`
  ${Z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #500000;
  }
`;
var pn = r(_)`
  ${Z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, mn = r(b)`
  ${Z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #500000;
  }
`, hn = r.select`
  width: 100%;
  min-height: 70px;
  background-color: #0050EF;
  border: 5px solid #000000;
  color: #FFFFFF;
  text-align: center;
`, gn = r(hn)`
  background-color: #111111;
`, _n = r(hn)`
  background-color: #0050EF;
`, vn = r(hn)`
  background-color: #500000;
`;
r.option`

  background-color: #0050EF;
  &:hover {
    background-color: #0050EF;
  }
`;
var Q = {
	StyledPencilNotSelected: on,
	StyledPencilSelected: sn,
	grandezzaIcona: 50,
	StyledTrashNotSelected: cn,
	StyledTrashSelected: ln,
	StyledListGroupItem: Ht,
	StyledRow: zt,
	StyledCol: Bt,
	StyledSaveNotSelected: Zt,
	StyledEyeOpenNotSelected: $t,
	StyledEyeClosedNotSelected: Qt,
	StyledSearchNotSelected: en,
	StyledArrowTopNotSelected: nn,
	StyledArrowBottomNotSelected: rn,
	StyledFileIconNotSelected: un,
	StyledDownloadNotSelected: fn,
	StyledTrashNotSelected2: mn,
	StyledLoginNotSelected: an,
	StyledPencilNotSelected2: pn,
	StyledSelectBlock: gn,
	StyledSelectModifica: _n,
	StyledSelectElimina: vn,
	StyledInputBlock: Jt,
	StyledInputModifica: Yt,
	StyledInputElimina: Xt,
	StyledTextAreaBlock: Wt,
	StyledTextAreaModifica: Gt,
	StyledTextAreaElimina: Kt,
	StyledCard: Rt,
	StyledCardHeader: Vt,
	SlideContainer: Ut,
	StyledSpanErrore: r.span`
  color: #FFFFFF;
  padding: 10px;
`,
	StyledEuroNotSelected: tn,
	StyledFileIconSelected2: dn
};
//#endregion
//#region src/Colori.js
function $(e, t, n) {
	return t === 0 ? "#FFFFFF" : e < 0 ? "#FF0000" : e > 0 ? "#00FF00" : "#FFFFFF";
}
//#endregion
//#region src/Calcoli.js
var yn = (e) => e.totale_gennaio + e.totale_febbraio + e.totale_marzo + e.totale_aprile + e.totale_maggio + e.totale_giugno + e.totale_luglio + e.totale_agosto + e.totale_settembre + e.totale_ottobre + e.totale_novembre + e.totale_dicembre, bn = (e) => parseInt(e.quantita_gennaio) + parseInt(e.quantita_febbraio) + parseInt(e.quantita_marzo) + parseInt(e.quantita_aprile) + parseInt(e.quantita_maggio) + parseInt(e.quantita_giugno) + parseInt(e.quantita_luglio) + parseInt(e.quantita_agosto) + parseInt(e.quantita_settembre) + parseInt(e.quantita_ottobre) + parseInt(e.quantita_novembre) + parseInt(e.quantita_dicembre);
//#endregion
//#region src/card_item/CardItem.jsx
function xn({ campi: t, indici: n, eseguiSalvataggio: r }) {
	let i = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ (0, z.jsx)("center", { children: /* @__PURE__ */ (0, z.jsxs)(Q.StyledCard, { children: [
		/* @__PURE__ */ (0, z.jsx)(Q.StyledCardHeader, { children: t.header }),
		/* @__PURE__ */ (0, z.jsx)(Q.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: n.map((n) => {
				let r = t.type[n] ? L(1, !0, Q) : R(1, !0, Q);
				return /* @__PURE__ */ (0, z.jsxs)(e, { children: [/* @__PURE__ */ (0, z.jsxs)(Q.StyledRow, { children: [/* @__PURE__ */ (0, z.jsx)(r, {
					rows: 1,
					name: t.name[n],
					id: t.id[n],
					type: t.type[n],
					step: t.step[n],
					value: t.value[n] === " €" ? "" : t.value[n],
					placeholder: t.placeholder[n],
					onChange: t.onChange,
					onClick: t.onClick,
					onBlur: t.onBlur,
					onContextMenu: (e) => i(e, t.placeholder[n])
				}), t.options[n]] }), t.errore[n] !== "" && /* @__PURE__ */ (0, z.jsx)(Q.StyledSpanErrore, { children: t.errore[n] })] }, n);
			})
		}),
		/* @__PURE__ */ (0, z.jsx)(B, {
			eseguiSalvataggio: r,
			vistaItem: "card",
			StyledComponents: Q
		})
	] }) });
}
function Sn({ campi: t, indici: r, handleSearch: i }) {
	let [a, o] = n(!0), [s, c] = n(!0), l = a ? "2000px" : "0px";
	L(1, !0, Q), R(1, !0, Q);
	let u = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ (0, z.jsx)("center", { children: /* @__PURE__ */ (0, z.jsxs)(Q.StyledCard, { children: [
		/* @__PURE__ */ (0, z.jsx)(Q.StyledCardHeader, { children: t.header }),
		/* @__PURE__ */ (0, z.jsx)(Q.SlideContainer, {
			style: { maxHeight: `${l}` },
			children: r.map((n) => {
				let r = t.type[n] ? L(1, !0, Q) : R(1, !0, Q);
				return /* @__PURE__ */ (0, z.jsx)(e, { children: /* @__PURE__ */ (0, z.jsx)(Q.StyledRow, { children: /* @__PURE__ */ (0, z.jsx)(r, {
					rows: 1,
					name: t.name[n],
					id: t.id[n],
					type: t.value[n],
					value: t.value[n] === " €" ? "" : t.value[n],
					placeholder: t.placeholder[n],
					onChange: t.onChange,
					onClick: t.onClick,
					onBlur: t.onBlur,
					onContextMenu: (e) => u(e, t.placeholder[n])
				}) }) }, n);
			})
		}),
		/* @__PURE__ */ (0, z.jsx)(V, {
			setIsVisible: o,
			arrowUp: s,
			setArrowUp: c,
			handleSearch: i,
			vistaItem: "card",
			StyledComponents: Q
		})
	] }) });
}
function Cn({ item: r, campi: i, indici: a, selectOperation: o, handleBlurItem: s }) {
	let c = t([]), [l, u] = n(() => a.reduce((e, t) => ({
		...e,
		[t]: i.value[t]
	}), {})), d = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ (0, z.jsxs)(Q.StyledCard, { children: [
		/* @__PURE__ */ (0, z.jsx)(Q.StyledCardHeader, { children: i.header }),
		/* @__PURE__ */ (0, z.jsx)(Q.SlideContainer, { children: a.map((t) => {
			let n = i.type[t] ? L(i.tipoSelezione, i.valoreModificabile[t], Q) : R(i.tipoSelezione, i.valoreModificabile[t], Q);
			return /* @__PURE__ */ (0, z.jsxs)(e, { children: [/* @__PURE__ */ (0, z.jsxs)(Q.StyledRow, { children: [/* @__PURE__ */ (0, z.jsx)(n, {
				ref: (e) => c.current[t] = e,
				rows: 1,
				name: i.name[t],
				id: i.id[t],
				type: i.type[t],
				step: i.step[t],
				value: l[t],
				placeholder: i.placeholder[t],
				onChange: (e) => kt(e, t, u),
				onBlur: (e) => s(e, r),
				onClick: (e) => At(e),
				readOnly: r.tipo_selezione !== 1,
				onContextMenu: (e) => d(e, i.placeholder[t])
			}), i.options[t]] }), i.errore[t] && /* @__PURE__ */ (0, z.jsx)(Q.StyledSpanErrore, { children: i.errore[t] })] }, `input-${t}`);
		}) }),
		/* @__PURE__ */ (0, z.jsx)(ze, {
			selectOperation: o,
			item: r,
			vistaItem: "card",
			StyledComponents: Q
		})
	] });
}
function wn({ campi: t, indici: n, ottieniFileRangePDF: r, ottieniFileRangeExcel: i, eliminaItemsRange: a }) {
	let o = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ (0, z.jsx)("center", { children: /* @__PURE__ */ (0, z.jsxs)(Q.StyledCard, { children: [
		/* @__PURE__ */ (0, z.jsx)(Q.StyledCardHeader, { children: t.header }),
		/* @__PURE__ */ (0, z.jsx)(Q.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: n.map((n) => /* @__PURE__ */ (0, z.jsx)(e, { children: /* @__PURE__ */ (0, z.jsx)(t.type[n] ? L(1, !0, Q) : R(1, !0, Q), {
				rows: 1,
				name: t.name[n],
				id: t.id[n],
				type: t.type[n],
				step: t.step[n],
				value: t.value[n],
				placeholder: t.placeholder[n],
				onChange: t.onChange,
				onClick: t.onClick,
				onBlur: t.onBlur,
				onContextMenu: (e) => o(e, t.placeholder[n])
			}, n) }, n))
		}),
		/* @__PURE__ */ (0, z.jsx)(G, {
			ottieniFileRangePDF: r,
			ottieniFileRangeExcel: i,
			eliminaItemsRange: a,
			vistaItem: "card",
			StyledComponents: Q
		})
	] }) });
}
function Tn({ campi: t, indici: r, eseguiLogin: i }) {
	let [a, o] = n("password"), s = (e) => {
		e.preventDefault(), o(a === "text" ? "password" : "text");
	}, c = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ (0, z.jsx)("center", { children: /* @__PURE__ */ (0, z.jsxs)(Q.StyledCard, { children: [
		/* @__PURE__ */ (0, z.jsx)(Q.StyledCardHeader, { children: t.header }),
		/* @__PURE__ */ (0, z.jsx)(Q.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: r.map((n) => {
				let r = t.type[n] ? L(1, !0, Q) : R(1, !0, Q), i = a === "password" ? Q.StyledEyeClosedNotSelected : Q.StyledEyeOpenNotSelected;
				return /* @__PURE__ */ (0, z.jsxs)(e, { children: [
					/* @__PURE__ */ (0, z.jsxs)(Q.StyledRow, { children: [/* @__PURE__ */ (0, z.jsx)(r, {
						style: t.name[n] === "password" ? { maxWidth: "80%" } : null,
						rows: 1,
						name: t.name[n],
						id: t.id[n],
						type: t.name[n] === "password" ? a : t.type[n],
						step: t.step[n],
						min: t.min[n],
						value: t.value[n],
						placeholder: t.placeholder[n],
						onChange: t.onChange,
						onClick: t.onClick,
						onBlur: t.onBlur,
						onContextMenu: (e) => c(e, t.placeholder[n])
					}), t.name[n] === "password" && /* @__PURE__ */ (0, z.jsx)(i, {
						style: {
							maxWidth: "20%",
							marginLeft: "-6px",
							marginTop: "13px"
						},
						size: Q.grandezzaIcona,
						onClick: s
					})] }),
					t.options[n],
					t.errore[n] && /* @__PURE__ */ (0, z.jsx)(Q.StyledSpanErrore, { children: t.errore[n] })
				] }, n);
			})
		}),
		/* @__PURE__ */ (0, z.jsx)(U, {
			eseguiLogin: i,
			vistaItem: "card",
			StyledComponents: Q
		})
	] }) });
}
function En({ campi: t, indici: r, eseguiModificaProfilo: i }) {
	let [a, o] = n("password"), [s, c] = n("password"), [l, u] = n("password"), d = (e, t) => {
		e.preventDefault(), t === "password_attuale" ? o(a === "text" ? "password" : "text") : t === "nuova_password" ? c(s === "text" ? "password" : "text") : t === "conferma_nuova_password" && u(l === "text" ? "password" : "text");
	};
	return /* @__PURE__ */ (0, z.jsx)("center", { children: /* @__PURE__ */ (0, z.jsxs)(Q.StyledCard, { children: [
		/* @__PURE__ */ (0, z.jsx)(Q.StyledCardHeader, { children: t.header }),
		/* @__PURE__ */ (0, z.jsx)(Q.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: r.map((n) => {
				let r = t.type[n] ? L(1, !0, Q) : R(1, !0, Q), i = t.name[n] === "password_attuale" && a === "password" || t.name[n] === "nuova_password" && s === "password" || t.name[n] === "conferma_nuova_password" && l === "password" ? Q.StyledEyeClosedNotSelected : Q.StyledEyeOpenNotSelected;
				return /* @__PURE__ */ (0, z.jsxs)(e, { children: [
					/* @__PURE__ */ (0, z.jsxs)(Q.StyledRow, { children: [/* @__PURE__ */ (0, z.jsx)(r, {
						style: t.name[n].includes("password") ? { maxWidth: "80%" } : null,
						rows: 1,
						name: t.name[n],
						id: t.id[n],
						type: t.name[n].includes("password") ? t.name[n] === "password_attuale" ? a : t.name[n] === "nuova_password" ? s : l : t.type[n],
						step: t.step[n],
						min: t.min[n],
						value: t.value[n],
						placeholder: t.placeholder[n],
						onChange: t.onChange,
						onClick: t.onClick,
						onBlur: t.onBlur,
						onContextMenu: (e) => handleRightClick(e, t.placeholder[n])
					}), t.name[n].includes("password") && /* @__PURE__ */ (0, z.jsx)(i, {
						style: {
							maxWidth: "20%",
							marginLeft: "-6px",
							marginTop: "13px"
						},
						size: Q.grandezzaIcona,
						onClick: (e) => d(e, t.name[n])
					})] }),
					t.options[n],
					t.errore[n] && /* @__PURE__ */ (0, z.jsx)(Q.StyledSpanErrore, { children: t.errore[n] })
				] }, n);
			})
		}),
		/* @__PURE__ */ (0, z.jsx)(W, {
			eseguiModificaProfilo: i,
			vistaItem: "card",
			StyledComponents: Q
		})
	] }) });
}
function Dn({ nome: e, img: t, id: n, onClickWidget: r, backgroundColor: i }) {
	return /* @__PURE__ */ (0, z.jsxs)(T, {
		style: {
			width: "300px",
			height: "400px",
			backgroundColor: i,
			borderRadius: "50px",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center"
		},
		onClick: (e) => {
			r(e, n);
		},
		draggable: !1,
		children: [/* @__PURE__ */ (0, z.jsx)(T.Img, {
			style: {
				width: "220px",
				height: "220px",
				borderRadius: "20px",
				marginTop: "40px",
				marginBottom: "20px",
				pointerEvents: "none"
			},
			variant: "top",
			src: t
		}), /* @__PURE__ */ (0, z.jsx)(T.Body, { children: /* @__PURE__ */ (0, z.jsx)(T.Title, {
			style: {
				color: "#FFFFFF",
				textAlign: "center"
			},
			children: e
		}) })]
	});
}
function On({ entrateItems: e, lingua: t, etichettaIta: n, etichettaEng: r }) {
	return /* @__PURE__ */ (0, z.jsxs)(T, {
		style: {
			display: "inline-block",
			backgroundColor: "rgba(0, 0, 0, 0.5)",
			borderRadius: "50px",
			paddingLeft: "50px",
			paddingRight: "50px",
			paddingBottom: "50px",
			overflowX: "auto"
		},
		children: [/* @__PURE__ */ (0, z.jsx)(T.Body, { children: /* @__PURE__ */ (0, z.jsx)("center", { children: /* @__PURE__ */ (0, z.jsx)(T.Title, {
			style: { color: "#FFFFFF" },
			children: t === "italiano" ? n : r
		}) }) }), /* @__PURE__ */ (0, z.jsx)("center", { children: /* @__PURE__ */ (0, z.jsxs)(E, {
			striped: !0,
			bordered: !0,
			hover: !0,
			variant: "dark",
			style: {
				borderRadius: "50px",
				marginTop: "0",
				marginBottom: "10px",
				textAlign: "center"
			},
			children: [
				/* @__PURE__ */ (0, z.jsx)("thead", { children: /* @__PURE__ */ (0, z.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, z.jsx)("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "ANNO" : "YEAR"
					}),
					/* @__PURE__ */ (0, z.jsx)("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "GEN" : "JAN"
					}),
					/* @__PURE__ */ (0, z.jsx)("th", {
						style: { color: "#FFFFFF" },
						children: "FEB"
					}),
					/* @__PURE__ */ (0, z.jsx)("th", {
						style: { color: "#FFFFFF" },
						children: "MAR"
					}),
					/* @__PURE__ */ (0, z.jsx)("th", {
						style: { color: "#FFFFFF" },
						children: "APR"
					}),
					/* @__PURE__ */ (0, z.jsx)("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "MAG" : "MAY"
					}),
					/* @__PURE__ */ (0, z.jsx)("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "GIU" : "JUN"
					}),
					/* @__PURE__ */ (0, z.jsx)("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "LUG" : "JUL"
					}),
					/* @__PURE__ */ (0, z.jsx)("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "AGO" : "AUG"
					}),
					/* @__PURE__ */ (0, z.jsx)("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "SET" : "SEP"
					}),
					/* @__PURE__ */ (0, z.jsx)("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "OTT" : "OCT"
					}),
					/* @__PURE__ */ (0, z.jsx)("th", {
						style: { color: "#FFFFFF" },
						children: "NOV"
					}),
					/* @__PURE__ */ (0, z.jsx)("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "DIC" : "DEC"
					}),
					/* @__PURE__ */ (0, z.jsx)("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "TOT ENTRATE" : "TOT REVENUE"
					})
				] }) }),
				/* @__PURE__ */ (0, z.jsx)("tbody", { children: e.map((e, t) => t > 1 && /* @__PURE__ */ (0, z.jsx)("tr", { children: Object.values(e).map((e, t) => /* @__PURE__ */ (0, z.jsx)("td", {
					style: {
						color: $(e, t, "entrata"),
						fontWeight: t === 0 ? "bold" : null
					},
					children: t > 0 ? parseFloat(e).toFixed(2) + " €" : e
				}, t)) }, t)) }),
				/* @__PURE__ */ (0, z.jsx)("tbody", { children: /* @__PURE__ */ (0, z.jsx)("tr", { children: Object.values(e[0]).map((e, t) => /* @__PURE__ */ (0, z.jsx)("td", {
					style: {
						color: $(e, t, "entrata"),
						fontWeight: t === 0 ? "bold" : null
					},
					children: t > 0 ? parseFloat(e).toFixed(2) + " €" : e
				}, t)) }) })
			]
		}) })]
	});
}
function kn({ entrateItems: t, lingua: r, tipoItemIta: i, tipoItemEng: a, etichettaIta: o, etichettaEng: s }) {
	let [c, l] = n(0);
	return /* @__PURE__ */ (0, z.jsxs)(T, {
		style: {
			display: "inline-block",
			backgroundColor: "rgba(0, 0, 0, 0.5)",
			borderRadius: "50px",
			paddingLeft: "50px",
			paddingRight: "50px",
			paddingBottom: "50px",
			overflowX: "auto"
		},
		children: [/* @__PURE__ */ (0, z.jsx)(T.Body, { children: /* @__PURE__ */ (0, z.jsx)("center", { children: /* @__PURE__ */ (0, z.jsx)(T.Title, {
			style: { color: "#FFFFFF" },
			children: r === "italiano" ? o : s
		}) }) }), /* @__PURE__ */ (0, z.jsx)("center", { children: /* @__PURE__ */ (0, z.jsxs)(E, {
			striped: !0,
			bordered: !0,
			hover: !0,
			variant: "dark",
			style: {
				borderRadius: "50px",
				marginTop: "0",
				marginBottom: "10px",
				textAlign: "center"
			},
			children: [/* @__PURE__ */ (0, z.jsx)("thead", {}), /* @__PURE__ */ (0, z.jsx)("tbody", { children: t.map((n, o) => /* @__PURE__ */ (0, z.jsxs)(e, { children: [(o === 0 || t[o].anno !== t[o - 1].anno) && /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsx)("tr", { children: /* @__PURE__ */ (0, z.jsxs)("th", {
				colSpan: 14,
				children: [
					r === "italiano" ? "ANNO" : "YEAR",
					" = ",
					n.anno
				]
			}) }), /* @__PURE__ */ (0, z.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, z.jsx)("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? i : a
				}),
				/* @__PURE__ */ (0, z.jsx)("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "GEN" : "JAN"
				}),
				/* @__PURE__ */ (0, z.jsx)("th", {
					style: { color: "#FFFFFF" },
					children: "FEB"
				}),
				/* @__PURE__ */ (0, z.jsx)("th", {
					style: { color: "#FFFFFF" },
					children: "MAR"
				}),
				/* @__PURE__ */ (0, z.jsx)("th", {
					style: { color: "#FFFFFF" },
					children: "APR"
				}),
				/* @__PURE__ */ (0, z.jsx)("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "MAG" : "MAY"
				}),
				/* @__PURE__ */ (0, z.jsx)("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "GIU" : "JUN"
				}),
				/* @__PURE__ */ (0, z.jsx)("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "LUG" : "JUL"
				}),
				/* @__PURE__ */ (0, z.jsx)("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "AGO" : "AUG"
				}),
				/* @__PURE__ */ (0, z.jsx)("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "SET" : "SEP"
				}),
				/* @__PURE__ */ (0, z.jsx)("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "OTT" : "OCT"
				}),
				/* @__PURE__ */ (0, z.jsx)("th", {
					style: { color: "#FFFFFF" },
					children: "NOV"
				}),
				/* @__PURE__ */ (0, z.jsx)("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "DIC" : "DEC"
				}),
				/* @__PURE__ */ (0, z.jsx)("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "TOT ENTRATE" : "TOT REVENUE"
				})
			] })] }), /* @__PURE__ */ (0, z.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, z.jsx)("td", {
					style: {
						color: "#FFFFFF",
						fontWeight: "bold"
					},
					children: n.nome
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: {
						color: $(n.totale_gennaio, 1, "entrata"),
						fontWeight: "bold"
					},
					children: [
						"x ",
						n.quantita_gennaio,
						" = ",
						parseFloat(n.totale_gennaio).toFixed(2) + " €"
					]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: {
						color: $(n.totale_febbraio, 1, "entrata"),
						fontWeight: "bold"
					},
					children: [
						"x ",
						n.quantita_febbraio,
						" = ",
						parseFloat(n.totale_febbraio).toFixed(2) + " €"
					]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: {
						color: $(n.totale_marzo, 1, "entrata"),
						fontWeight: "bold"
					},
					children: [
						"x ",
						n.quantita_marzo,
						" = ",
						parseFloat(n.totale_marzo).toFixed(2) + " €"
					]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: {
						color: $(n.totale_aprile, 1, "entrata"),
						fontWeight: "bold"
					},
					children: [
						"x ",
						n.quantita_aprile,
						" = ",
						parseFloat(n.totale_aprile).toFixed(2) + " €"
					]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: {
						color: $(n.totale_maggio, 1, "entrata"),
						fontWeight: "bold"
					},
					children: [
						"x ",
						n.quantita_maggio,
						" = ",
						parseFloat(n.totale_maggio).toFixed(2) + " €"
					]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: {
						color: $(n.totale_giugno, 1, "entrata"),
						fontWeight: "bold"
					},
					children: [
						"x ",
						n.quantita_giugno,
						" = ",
						parseFloat(n.totale_giugno).toFixed(2) + " €"
					]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: {
						color: $(n.totale_luglio, 1, "entrata"),
						fontWeight: "bold"
					},
					children: [
						"x ",
						n.quantita_luglio,
						" = ",
						parseFloat(n.totale_luglio).toFixed(2) + " €"
					]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: {
						color: $(n.totale_agosto, 1, "entrata"),
						fontWeight: "bold"
					},
					children: [
						"x ",
						n.quantita_agosto,
						" = ",
						parseFloat(n.totale_agosto).toFixed(2) + " €"
					]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: {
						color: $(n.totale_settembre, 1, "entrata"),
						fontWeight: "bold"
					},
					children: [
						"x ",
						n.quantita_settembre,
						" = ",
						parseFloat(n.totale_settembre).toFixed(2) + " €"
					]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: {
						color: $(n.totale_ottobre, 1, "entrata"),
						fontWeight: "bold"
					},
					children: [
						"x ",
						n.quantita_ottobre,
						" = ",
						parseFloat(n.totale_ottobre).toFixed(2) + " €"
					]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: {
						color: $(n.totale_novembre, 1, "entrata"),
						fontWeight: "bold"
					},
					children: [
						"x ",
						n.quantita_novembre,
						" = ",
						parseFloat(n.totale_novembre).toFixed(2) + " €"
					]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: {
						color: $(n.totale_dicembre, 1, "entrata"),
						fontWeight: "bold"
					},
					children: [
						"x ",
						n.quantita_dicembre,
						" = ",
						parseFloat(n.totale_dicembre).toFixed(2) + " €"
					]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: {
						color: $(yn(n), 1, "entrata"),
						fontWeight: "bold"
					},
					children: [
						"x ",
						bn(n),
						" = ",
						parseFloat(yn(n)).toFixed(2) + " €"
					]
				})
			] })] }, o)) })]
		}) })]
	});
}
function An({ usciteItems: e, lingua: t, etichettaIta: n, etichettaEng: r }) {
	return /* @__PURE__ */ (0, z.jsxs)(T, {
		style: {
			display: "inline-block",
			backgroundColor: "rgba(0, 0, 0, 0.5)",
			borderRadius: "50px",
			paddingLeft: "50px",
			paddingRight: "50px",
			paddingBottom: "50px",
			overflowX: "auto"
		},
		children: [/* @__PURE__ */ (0, z.jsx)(T.Body, { children: /* @__PURE__ */ (0, z.jsx)("center", { children: /* @__PURE__ */ (0, z.jsx)(T.Title, {
			style: { color: "#FFFFFF" },
			children: t === "italiano" ? n : r
		}) }) }), /* @__PURE__ */ (0, z.jsx)("center", { children: /* @__PURE__ */ (0, z.jsxs)(E, {
			striped: !0,
			bordered: !0,
			hover: !0,
			variant: "dark",
			style: {
				borderRadius: "50px",
				marginTop: "0",
				marginBottom: "10px",
				textAlign: "center"
			},
			children: [
				/* @__PURE__ */ (0, z.jsx)("thead", { children: /* @__PURE__ */ (0, z.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, z.jsx)("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "ANNO" : "YEAR"
					}),
					/* @__PURE__ */ (0, z.jsx)("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "GEN" : "JAN"
					}),
					/* @__PURE__ */ (0, z.jsx)("th", {
						style: { color: "#FFFFFF" },
						children: "FEB"
					}),
					/* @__PURE__ */ (0, z.jsx)("th", {
						style: { color: "#FFFFFF" },
						children: "MAR"
					}),
					/* @__PURE__ */ (0, z.jsx)("th", {
						style: { color: "#FFFFFF" },
						children: "APR"
					}),
					/* @__PURE__ */ (0, z.jsx)("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "MAG" : "MAY"
					}),
					/* @__PURE__ */ (0, z.jsx)("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "GIU" : "JUN"
					}),
					/* @__PURE__ */ (0, z.jsx)("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "LUG" : "JUL"
					}),
					/* @__PURE__ */ (0, z.jsx)("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "AGO" : "AUG"
					}),
					/* @__PURE__ */ (0, z.jsx)("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "SET" : "SEP"
					}),
					/* @__PURE__ */ (0, z.jsx)("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "OTT" : "OCT"
					}),
					/* @__PURE__ */ (0, z.jsx)("th", {
						style: { color: "#FFFFFF" },
						children: "NOV"
					}),
					/* @__PURE__ */ (0, z.jsx)("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "DIC" : "DEC"
					}),
					/* @__PURE__ */ (0, z.jsx)("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "TOT USCITE" : "TOT EXIT"
					})
				] }) }),
				/* @__PURE__ */ (0, z.jsx)("tbody", { children: e.map((e, t) => t > 1 && /* @__PURE__ */ (0, z.jsx)("tr", { children: Object.values(e).map((e, t) => /* @__PURE__ */ (0, z.jsx)("td", {
					style: {
						color: $(-e, t, "uscita"),
						fontWeight: t === 0 ? "bold" : null
					},
					children: t > 0 ? parseFloat(-e).toFixed(2) + " €" : e
				}, t)) }, t)) }),
				/* @__PURE__ */ (0, z.jsx)("tbody", { children: /* @__PURE__ */ (0, z.jsx)("tr", { children: Object.values(e[0]).map((e, t) => /* @__PURE__ */ (0, z.jsx)("td", {
					style: {
						color: $(-e, t, "uscita"),
						fontWeight: t === 0 ? "bold" : null
					},
					children: t > 0 ? parseFloat(-e).toFixed(2) + " €" : e
				}, t)) }) })
			]
		}) })]
	});
}
function jn({ entrate: e, uscite: t, lingua: n }) {
	return /* @__PURE__ */ (0, z.jsxs)(T, {
		style: {
			display: "inline-block",
			backgroundColor: "rgba(0, 0, 0, 0.5)",
			borderRadius: "50px",
			paddingLeft: "50px",
			paddingRight: "50px",
			paddingBottom: "50px",
			overflowX: "auto"
		},
		children: [/* @__PURE__ */ (0, z.jsx)(T.Body, { children: /* @__PURE__ */ (0, z.jsx)("center", { children: /* @__PURE__ */ (0, z.jsx)(T.Title, {
			style: { color: "#FFFFFF" },
			children: n === "italiano" ? "Ricavi" : "Revenues"
		}) }) }), /* @__PURE__ */ (0, z.jsx)("center", { children: /* @__PURE__ */ (0, z.jsxs)(E, {
			striped: !0,
			bordered: !0,
			hover: !0,
			variant: "dark",
			style: {
				borderRadius: "50px",
				marginTop: "0",
				marginBottom: "10px",
				textAlign: "center"
			},
			children: [/* @__PURE__ */ (0, z.jsx)("thead", { children: /* @__PURE__ */ (0, z.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, z.jsx)("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "ANNO" : "YEAR"
				}),
				/* @__PURE__ */ (0, z.jsx)("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "GEN" : "JAN"
				}),
				/* @__PURE__ */ (0, z.jsx)("th", {
					style: { color: "#FFFFFF" },
					children: "FEB"
				}),
				/* @__PURE__ */ (0, z.jsx)("th", {
					style: { color: "#FFFFFF" },
					children: "MAR"
				}),
				/* @__PURE__ */ (0, z.jsx)("th", {
					style: { color: "#FFFFFF" },
					children: "APR"
				}),
				/* @__PURE__ */ (0, z.jsx)("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "MAG" : "MAY"
				}),
				/* @__PURE__ */ (0, z.jsx)("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "GIU" : "JUN"
				}),
				/* @__PURE__ */ (0, z.jsx)("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "LUG" : "JUL"
				}),
				/* @__PURE__ */ (0, z.jsx)("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "AGO" : "AUG"
				}),
				/* @__PURE__ */ (0, z.jsx)("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "SET" : "SEP"
				}),
				/* @__PURE__ */ (0, z.jsx)("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "OTT" : "OCT"
				}),
				/* @__PURE__ */ (0, z.jsx)("th", {
					style: { color: "#FFFFFF" },
					children: "NOV"
				}),
				/* @__PURE__ */ (0, z.jsx)("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "DIC" : "DEC"
				}),
				/* @__PURE__ */ (0, z.jsx)("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "TOT RICAVI" : "TOT EARNINGS"
				})
			] }) }), /* @__PURE__ */ (0, z.jsxs)("tbody", { children: [e.map((e, n) => n > 1 && /* @__PURE__ */ (0, z.jsxs)("tr", { children: [/* @__PURE__ */ (0, z.jsx)("td", {
				style: { fontWeight: "bold" },
				children: e.Anno
			}), t[n] && /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: { color: $(e.gen - t[n].gen) },
					children: [parseFloat(e.gen - t[n].gen).toFixed(2), " €"]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: { color: $(e.feb - t[n].feb) },
					children: [parseFloat(e.feb - t[n].feb).toFixed(2), " €"]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: { color: $(e.mar - t[n].mar) },
					children: [parseFloat(e.mar - t[n].mar).toFixed(2), " €"]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: { color: $(e.apr - t[n].apr) },
					children: [parseFloat(e.apr - t[n].apr).toFixed(2), " €"]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: { color: $(e.mag - t[n].mag) },
					children: [parseFloat(e.mag - t[n].mag).toFixed(2), " €"]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: { color: $(e.giu - t[n].giu) },
					children: [parseFloat(e.giu - t[n].giu).toFixed(2), " €"]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: { color: $(e.lug - t[n].lug) },
					children: [parseFloat(e.lug - t[n].lug).toFixed(2), " €"]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: { color: $(e.ago - t[n].ago) },
					children: [parseFloat(e.ago - t[n].ago).toFixed(2), " €"]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: { color: $(e.set - t[n].set) },
					children: [parseFloat(e.set - t[n].set).toFixed(2), " €"]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: { color: $(e.ott - t[n].ott) },
					children: [parseFloat(e.ott - t[n].ott).toFixed(2), " €"]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: { color: $(e.nov - t[n].nov) },
					children: [parseFloat(e.nov - t[n].nov).toFixed(2), " €"]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: { color: $(e.dic - t[n].dic) },
					children: [parseFloat(e.dic - t[n].dic).toFixed(2), " €"]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: { color: $(e.totale_anno - t[n].totale_anno) },
					children: [parseFloat(e.totale_anno - t[n].totale_anno).toFixed(2), " €"]
				})
			] })] }, n)), /* @__PURE__ */ (0, z.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, z.jsx)("td", {
					style: { fontWeight: "bold" },
					children: e[0].Anno
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: { color: $(e[0].gen - t[0].gen, 1) },
					children: [parseFloat(e[0].gen - t[0].gen).toFixed(2), " €"]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: { color: $(e[0].feb - t[0].feb) },
					children: [parseFloat(e[0].feb - t[0].feb).toFixed(2), " €"]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: { color: $(e[0].mar - t[0].mar) },
					children: [parseFloat(e[0].mar - t[0].mar).toFixed(2), " €"]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: { color: $(e[0].apr - t[0].apr) },
					children: [parseFloat(e[0].apr - t[0].apr).toFixed(2), " €"]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: { color: $(e[0].mag - t[0].mag) },
					children: [parseFloat(e[0].mag - t[0].mag).toFixed(2), " €"]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: { color: $(e[0].giu - t[0].giu) },
					children: [parseFloat(e[0].giu - t[0].giu).toFixed(2), " €"]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: { color: $(e[0].lug - t[0].lug) },
					children: [parseFloat(e[0].lug - t[0].lug).toFixed(2), " €"]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: { color: $(e[0].ago - t[0].ago) },
					children: [parseFloat(e[0].ago - t[0].ago).toFixed(2), " €"]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: { color: $(e[0].set - t[0].set) },
					children: [parseFloat(e[0].set - t[0].set).toFixed(2), " €"]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: { color: $(e[0].ott - t[0].ott) },
					children: [parseFloat(e[0].ott - t[0].ott).toFixed(2), " €"]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: { color: $(e[0].nov - t[0].nov) },
					children: [parseFloat(e[0].nov - t[0].nov).toFixed(2), " €"]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: { color: $(e[0].dic - t[0].dic) },
					children: [parseFloat(e[0].dic - t[0].dic).toFixed(2), " €"]
				}),
				/* @__PURE__ */ (0, z.jsxs)("td", {
					style: { color: $(e[0].totale_anno - t[0].totale_anno) },
					children: [parseFloat(e[0].totale_anno - t[0].totale_anno).toFixed(2), " €"]
				})
			] }, 0)] })]
		}) })]
	});
}
function Mn({ totaleItems: e }) {
	return /* @__PURE__ */ (0, z.jsxs)(Q.StyledCard, { children: [/* @__PURE__ */ (0, z.jsx)(Q.StyledCardHeader, { children: "Informations" }), /* @__PURE__ */ (0, z.jsx)(Q.SlideContainer, { children: e && /* @__PURE__ */ (0, z.jsx)(Q.StyledInputBlock, {
		rows: 1,
		name: "totale_items",
		id: "totale_items",
		type: "text",
		value: e || "Errore!!",
		readOnly: !0
	}) })] });
}
function Nn({ datiRicerca: e, setDatiRicerca: t, handleInputChange: n, eseguiRicerca: r, lingua: i }) {
	return /* @__PURE__ */ (0, z.jsxs)(Q.StyledCard, { children: [
		/* @__PURE__ */ (0, z.jsx)(Q.StyledCardHeader, { children: i === "italiano" ? "Ricerca entrate e uscite" : "Searching for inputs and outputs" }),
		/* @__PURE__ */ (0, z.jsxs)(Q.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: [/* @__PURE__ */ (0, z.jsx)(Q.StyledInputModifica, {
				rows: 1,
				name: "primo_anno",
				id: "primo_anno",
				type: "number",
				step: 1,
				value: e.primo_anno,
				placeholder: "Primo anno",
				onChange: (e) => n(e, t),
				onContextMenu: (e) => handleRightClick(e, "Primo anno")
			}), /* @__PURE__ */ (0, z.jsxs)(Q.StyledSelectModifica, {
				name: "ultimo_anno",
				id: "ultimo_anno",
				value: e.ultimo_anno,
				onChange: (e) => n(e, t),
				onContextMenu: (e) => handleRightClick(e, "Ultimo anno"),
				children: [
					/* @__PURE__ */ (0, z.jsx)("option", {
						value: parseInt(e.primo_anno) + 1,
						children: parseInt(e.primo_anno) + 1
					}),
					/* @__PURE__ */ (0, z.jsx)("option", {
						value: parseInt(e.primo_anno) + 2,
						children: parseInt(e.primo_anno) + 2
					}),
					/* @__PURE__ */ (0, z.jsx)("option", {
						value: parseInt(e.primo_anno) + 3,
						children: parseInt(e.primo_anno) + 3
					}),
					/* @__PURE__ */ (0, z.jsx)("option", {
						value: parseInt(e.primo_anno) + 4,
						children: parseInt(e.primo_anno) + 4
					}),
					/* @__PURE__ */ (0, z.jsx)("option", {
						value: parseInt(e.primo_anno) + 5,
						children: parseInt(e.primo_anno) + 5
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, z.jsx)(H, {
			eseguiRicerca: (e) => r(e),
			vistaItem: "card",
			StyledComponents: Q
		})
	] });
}
//#endregion
//#region src/Items.jsx
var Pn = ({ tipoItem: e, items: t, setItems: n, selectOperation: r, campi: i, handleBlurItem: a, tipoForm: o, vistaItem: s }) => {
	let c = s === "card" ? Cn : Nt, l = () => /* @__PURE__ */ (0, z.jsx)(z.Fragment, { children: t.map((o, s) => /* @__PURE__ */ (0, z.jsx)(c, {
		item: o,
		campi: o ? i(o, null, null, null) : [],
		indici: [...Array(i(o, null, null, null).label.length).keys()],
		selectOperation: r,
		items: t,
		setItems: n,
		tipoItem: e,
		handleBlurItem: a
	}, s)) });
	return /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [o === "search" && t.length === 0 && /* @__PURE__ */ (0, z.jsx)("div", {
		className: "contenitore-1",
		children: "Nessun elemento trovato."
	}), t.length > 0 && /* @__PURE__ */ (0, z.jsx)(z.Fragment, { children: s === "card" ? /* @__PURE__ */ (0, z.jsx)("div", {
		className: "contenitore-3",
		children: /* @__PURE__ */ (0, z.jsx)(l, {})
	}) : /* @__PURE__ */ (0, z.jsx)(l, {}) })] });
}, Fn = ({ componenti: t, elementi: r, vistaItem: i, vistaForm: a }) => {
	let [o, s] = n("search"), c = a === "form" ? We : a === "card" ? xn : jt, l = a === "form" ? Ge : a === "card" ? Sn : Mt, u = a === "form" ? Je : a === "card" ? wn : Pt;
	return /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [
		/* @__PURE__ */ (0, z.jsx)(He, {
			elementi: r,
			tipoForm: o,
			setTipoForm: s,
			StyledComponents: I
		}),
		/* @__PURE__ */ (0, z.jsx)("br", {}),
		" ",
		/* @__PURE__ */ (0, z.jsx)("br", {}),
		" ",
		/* @__PURE__ */ (0, z.jsx)("br", {}),
		" ",
		/* @__PURE__ */ (0, z.jsx)("br", {}),
		r.map((n, r) => /* @__PURE__ */ (0, z.jsxs)(e, { children: [
			n === "insert" && o === "insert" && /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [
				/* @__PURE__ */ (0, z.jsx)(c, {
					campi: t.campiNuovoItem,
					indici: t.indiciNuovoItem,
					eseguiSalvataggio: t.handleInsert
				}),
				/* @__PURE__ */ (0, z.jsx)("br", {}),
				" ",
				/* @__PURE__ */ (0, z.jsx)("br", {}),
				" ",
				/* @__PURE__ */ (0, z.jsx)("br", {}),
				" ",
				/* @__PURE__ */ (0, z.jsx)("br", {})
			] }),
			n === "search" && o === "search" && /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [
				/* @__PURE__ */ (0, z.jsx)(l, {
					campi: t.campiRicercaItems,
					indici: t.indiciRicercaItems,
					handleSearch: t.handleSearch
				}),
				/* @__PURE__ */ (0, z.jsx)("br", {}),
				" ",
				/* @__PURE__ */ (0, z.jsx)("br", {}),
				" ",
				/* @__PURE__ */ (0, z.jsx)("br", {}),
				" ",
				/* @__PURE__ */ (0, z.jsx)("br", {})
			] }),
			n === "file" && o === "file" && /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [
				/* @__PURE__ */ (0, z.jsx)(u, {
					campi: t.campiFile,
					indici: t.indiciFile,
					ottieniFileRangePDF: t.handleSearchRangeFilePDF,
					ottieniFileRangeExcel: t.handleSearchRangeFileExcel,
					eliminaItemsRange: t.handleDeleteRangeFile
				}),
				/* @__PURE__ */ (0, z.jsx)("br", {}),
				" ",
				/* @__PURE__ */ (0, z.jsx)("br", {}),
				" ",
				/* @__PURE__ */ (0, z.jsx)("br", {}),
				" ",
				/* @__PURE__ */ (0, z.jsx)("br", {})
			] })
		] }, r)),
		o !== "file" && /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [
			/* @__PURE__ */ (0, z.jsx)(Pn, {
				tipoItem: t.tipoItem,
				items: t.items,
				setItems: t.setItems,
				selectOperation: t.selectOperation,
				campi: t.campiItemEsistente,
				handleBlurItem: t.handleBlurItem,
				tipoForm: o,
				vistaItem: i
			}),
			/* @__PURE__ */ (0, z.jsx)("br", {}),
			" ",
			/* @__PURE__ */ (0, z.jsx)("br", {}),
			" ",
			/* @__PURE__ */ (0, z.jsx)("br", {}),
			" ",
			/* @__PURE__ */ (0, z.jsx)("br", {}),
			t.visualizzazioneInformazioni === !0 && t.items.length > 0 && /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [
				/* @__PURE__ */ (0, z.jsx)("center", { children: /* @__PURE__ */ (0, z.jsx)(Mn, { totaleItems: t.totaleItems }) }),
				/* @__PURE__ */ (0, z.jsx)("br", {}),
				" ",
				/* @__PURE__ */ (0, z.jsx)("br", {}),
				" ",
				/* @__PURE__ */ (0, z.jsx)("br", {}),
				" ",
				/* @__PURE__ */ (0, z.jsx)("br", {})
			] }),
			/* @__PURE__ */ (0, z.jsx)(Be, {
				selectedIdsModifica: t.selectedIdsModifica,
				selectedIdsEliminazione: t.selectedIdsEliminazione,
				handleEdit: t.handleEdit,
				handleDelete: t.handleDelete
			}),
			/* @__PURE__ */ (0, z.jsx)("br", {}),
			" ",
			/* @__PURE__ */ (0, z.jsx)("br", {}),
			" ",
			/* @__PURE__ */ (0, z.jsx)("br", {}),
			" ",
			/* @__PURE__ */ (0, z.jsx)("br", {})
		] })
	] });
};
//#endregion
export { He as CambioTipoForm, Ue as CambioTipoForm2, On as CardEntrateItems, kn as CardEntrateItemsByName, Nn as CardEntrateUscite, wn as CardFileItems, Mn as CardInformazioni, Cn as CardItemEsistente, Tn as CardLogin, xn as CardNuovoItem, En as CardProfilo, jn as CardRicavi, Sn as CardRicercaItems, An as CardUsciteItems, Dn as CardWidget, Ye as FormEntrateUscite, Je as FormFileItems, Ke as FormLogin, We as FormNuovoItem, qe as FormProfilo, Ge as FormRicercaItems, Fn as PaginaWeb, Lt as RowEntrateUscite, Pt as RowFileItems, Nt as RowItemEsistente, Ft as RowLogin, jt as RowNuovoItem, It as RowProfilo, Mt as RowRicercaItems };
