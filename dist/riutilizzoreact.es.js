import { Fragment as e, useRef as t, useState as n } from "react";
import r from "styled-components";
import a from "react-bootstrap/Card";
import o from "react-bootstrap/ListGroup";
import s from "react-bootstrap/esm/Row";
import c from "react-bootstrap/esm/Col";
import { ChevronDown as l, ChevronLeft as u, ChevronRight as d, ChevronUp as f, Download as p, Euro as m, Eye as h, EyeClosed as g, LogIn as _, Pencil as v, Save as y, Search as b, Trash2 as x, X as S } from "lucide-react";
import { FontAwesomeIcon as C } from "@fortawesome/react-fontawesome";
import { faFile as w, faFileExcel as ee, faFilePdf as te } from "@fortawesome/free-solid-svg-icons";
import { Fragment as T, jsx as E, jsxs as D } from "react/jsx-runtime";
import { Card as O, Col as ne, Row as re, Table as k } from "react-bootstrap";
var ie = r(a)`
  background-color: #111111;
  overflow: hidden;
  border: 5px solid #000000;
  border-radius: 40px;
  margin-left: 30%;
  margin-right: 30%;

  color: white;
  text-align: center;
`, ae = r(a.Header)`
  color: #ffffff;
  background-color: #000000;
  border: 5px solid #000000;
  min-height: 70px;
`, oe = r(o.Item)`
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  min-height: 70px;
`, se = r.div`
  overflow: hidden;
  transition: max-height 1.5s ease-out;
`, ce = r(s)`
  display: flex;
  flex-wrap: wrap;
  padding-left: 3%;
  padding-right: 3%;
`, le = r(c)`
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
`, ue = r.label`
  width: 100%;
  color: #ffffff;
  background-color: transparent;
  border-radius: 40px;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  min-height: 70px;
  margin-top: 2%;
`, de = r.textarea`
  width: 100%;
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  min-height: 70px;
  margin-bottom: 20px;
`, fe = r(de)`
  background-color: #000000;
`, pe = r(de)`
  background-color: #0050EF;
`, me = r(de)`
  background-color: #500000;
`, he = r.input`
  width: 100%;
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  min-height: 70px;
  margin-bottom: 20px;
`, ge = r(he)`
  background-color: #000000;
`, _e = r(he)`
  background-color: #0050EF;
`, ve = r(he)`
  background-color: #500000;
`, A = "\n  color: #FFFFFF;\n  cursor: pointer;\n  transition: 0.5s all ease-out;\n", j = `
  ${A}
  &:hover {
    color: #0050EF;
  }
`, ye = `
  ${A}
  &:hover {
    color: #500000;
  }
`, be = r(y)`
  ${j}
`, xe = r(y)`
  ${A}
`, Se = r(y)`
  ${A}
  color: #0050EF;
`, Ce = r(g)`
  ${A}
  transition: 0.5s all ease-out;
`, we = r(h)`
  ${A}
  transition: 0.5s all ease-out;
  color: #0050EF;
`, Te = r(b)`
  ${j}
`, Ee = r(b)`
  ${A}
`, De = r(b)`
  ${A}
  color: #0050EF;
`, Oe = r(m)`
  color: #FFFFFF;
  transition: 0.5s all ease-out;
`, ke = r(f)`
  ${j}
`, Ae = r(l)`
  ${j}
`, je = r(_)`
  ${j}
`, Me = r(C)`
  color: #FFFFFF;
`, Ne = r(C)`
  ${A}
`, Pe = r(C)`
  ${A}
  color: #0050EF;
`, Fe = r(p)`
  ${j}
`;
r(S)`
  ${ye}
`;
var Ie = r(x)`
  ${ye}
`, M = r.button`
  border-radius: 40px;
  border: 5px solid #000000;
  background-color: #000000;
  color: #FFFFFF;
  text-align: center;  
  padding: 2% 15%;
  cursor: pointer;
`;
r(M)`
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #0050EF;
    color: #FFFFFF;
  }
`, r(M)`
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #500000;
    color: #FFFFFF;
  }
`, r(M)`
  background-color: #0050EF;
  &:hover {
    background-color: #000000;
    color: #FFFFFF;
  }
`, r(M)`
  background-color: #500000;
  &:hover {
    background-color: #000000;
    color: #FFFFFF;
  }
`;
var N = r.select`
  width: 100%;
  min-height: 70px;
  background-color: #0050EF;
  border: 5px solid #000000;
  color: #FFFFFF;
  text-align: center;
`, Le = r(N)`
  background-color: #111111;
`, Re = r(N)`
  background-color: #0050EF;
`, ze = r(N)`
  background-color: #500000;
`;
r.option`
  background-color: #0050EF;
  &:hover {
    background-color: #0050EF;
  }
`;
var Be = r.span`
  color: #FF0000;
  padding: 10px;
`, P = {
	StyledListGroupItem: oe,
	StyledRow: ce,
	StyledCol: le,
	StyledSaveNotSelected: be,
	grandezzaIcona: 50,
	StyledSearchNotSelected: Te,
	StyledArrowTopNotSelected: ke,
	StyledArrowBottomNotSelected: Ae,
	StyledLoginNotSelected: je,
	StyledPencilNotSelected: r(v)`
  ${A}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,
	StyledLabel: ue,
	StyledInputBlock: ge,
	StyledInputModifica: _e,
	StyledInputElimina: ve,
	StyledTextAreaBlock: fe,
	StyledTextAreaModifica: pe,
	StyledTextAreaElimina: me,
	StyledForm: ie,
	StyledHeader: ae,
	SlideContainer: se,
	StyledSpanErrore: Be,
	StyledSelectBlock: Le,
	StyledSelectModifica: Re,
	StyledSelectElimina: ze,
	StyledEyeClosedNotSelected: Ce,
	StyledEyeOpenNotSelected: we,
	StyledEuroNotSelected: Oe,
	StyledFileIconNotSelected: Me,
	StyledDownloadNotSelected: Fe,
	StyledTrashNotSelected: Ie,
	StyledSearchNotSelected2: Ee,
	StyledSaveNotSelected2: xe,
	StyledSearchSelected2: De,
	StyledSaveSelected2: Se,
	StyledFileIconNotSelected2: Ne,
	StyledFileIconSelected2: Pe
};
//#endregion
//#region src/Tags.js
function Ve(e, t) {
	return e === 0 || e === 2 ? t.StyledPencilNotSelected : e === 1 ? t.StyledPencilSelected : v;
}
function He(e, t) {
	return e === 0 || e === 1 ? t.StyledTrashNotSelected : e === 2 ? t.StyledTrashSelected : x;
}
function F(e, t, n) {
	return t ? e !== 1 && e !== 2 ? n.StyledInputBlock : e === 1 ? n.StyledInputModifica : n.StyledInputElimina : e === 2 ? n.StyledInputElimina : n.StyledInputBlock;
}
function I(e, t, n) {
	return t ? e !== 1 && e !== 2 ? n.StyledTextAreaBlock : e === 1 ? n.StyledTextAreaModifica : n.StyledTextAreaElimina : e === 2 ? n.StyledTextAreaElimina : n.StyledTextAreaBlock;
}
//#endregion
//#region src/Operazioni.jsx
function L({ eseguiSalvataggio: e, vistaItem: t, StyledComponents: n }) {
	return t === "card" || t === "form" ? /* @__PURE__ */ E(n.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "2%",
			paddingBottom: "2%"
		},
		children: /* @__PURE__ */ E(n.StyledRow, { children: /* @__PURE__ */ E(n.StyledCol, { children: /* @__PURE__ */ E(n.StyledSaveNotSelected, {
			className: "salvaItemButton",
			size: n.grandezzaIcona,
			onClick: e
		}) }) })
	}) : /* @__PURE__ */ E(n.StyledColOperazioni, { children: /* @__PURE__ */ E(n.StyledSaveNotSelected, {
		className: "center salvaItemButton",
		size: n.grandezzaIcona,
		onClick: e
	}) });
}
function R({ handleSearch: e, vistaItem: t, StyledComponents: n }) {
	return t === "card" || t === "form" ? /* @__PURE__ */ E(n.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "2%",
			paddingBottom: "2%"
		},
		children: /* @__PURE__ */ E(n.StyledSearchNotSelected, {
			className: "ricercaItemsButton",
			size: n.grandezzaIcona,
			onClick: e
		})
	}) : /* @__PURE__ */ E(n.StyledColOperazioni, { children: /* @__PURE__ */ E("div", {
		style: { width: "100%" },
		children: /* @__PURE__ */ E(n.StyledSearchNotSelected, {
			className: "center ricercaItemsButton",
			size: n.grandezzaIcona,
			onClick: e
		})
	}) });
}
function z({ eseguiRicerca: e, vistaItem: t, StyledComponents: n }) {
	return t === "card" || t === "form" ? /* @__PURE__ */ E(n.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "2%",
			paddingBottom: "2%"
		},
		children: /* @__PURE__ */ E(n.StyledSearchNotSelected, {
			className: "ricercaEntrateUsciteButton",
			size: n.grandezzaIcona,
			onClick: e
		})
	}) : /* @__PURE__ */ E(n.StyledColOperazioni, { children: /* @__PURE__ */ E("div", {
		style: { width: "100%" },
		children: /* @__PURE__ */ E(n.StyledSearchNotSelected, {
			className: "ricercaEntrateUsciteButton",
			size: n.grandezzaIcona,
			onClick: e
		})
	}) });
}
function B({ eseguiLogin: e, vistaItem: t, StyledComponents: n }) {
	return t === "card" || t === "form" ? /* @__PURE__ */ E(n.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "3%",
			paddingBottom: "3%"
		},
		children: /* @__PURE__ */ E(n.StyledLoginNotSelected, {
			className: "loginButton",
			size: n.grandezzaIcona,
			onClick: e
		})
	}) : /* @__PURE__ */ E(n.StyledColOperazioni, { children: /* @__PURE__ */ E(n.StyledLoginNotSelected, {
		className: "center loginButton",
		size: n.grandezzaIcona,
		onClick: e
	}) });
}
function V({ eseguiModificaProfilo: e, vistaItem: t, StyledComponents: n }) {
	let r = t === "form" ? n.StyledPencilNotSelected : n.StyledPencilNotSelected2;
	return t === "card" || t === "form" ? /* @__PURE__ */ E(n.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "2%",
			paddingBottom: "2%"
		},
		children: /* @__PURE__ */ E(r, {
			className: "modificaProfiloButton",
			size: n.grandezzaIcona,
			onClick: e
		})
	}) : /* @__PURE__ */ E(n.StyledColOperazioni, { children: /* @__PURE__ */ E(n.StyledPencilNotSelectedModificaProfilo, {
		className: "center modificaProfiloButton",
		size: n.grandezzaIcona,
		onClick: e
	}) });
}
function H({ ottieniFileRangePDF: e, ottieniFileRangeExcel: t, eliminaItemsRange: n, vistaItem: r, StyledComponents: a }) {
	return r === "card" || r === "form" ? /* @__PURE__ */ D(a.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "3%"
		},
		children: [
			/* @__PURE__ */ D("div", { children: [/* @__PURE__ */ E(a.StyledFileIconNotSelected, {
				icon: te,
				size: "2xl",
				style: { marginRight: "50%" }
			}), /* @__PURE__ */ E(a.StyledFileIconNotSelected, {
				icon: ee,
				size: "2xl"
			})] }),
			/* @__PURE__ */ E("br", {}),
			/* @__PURE__ */ D("div", { children: [/* @__PURE__ */ E(a.StyledDownloadNotSelected, {
				size: a.grandezzaIcona,
				style: { marginRight: "50%" },
				onClick: e
			}), /* @__PURE__ */ E(a.StyledDownloadNotSelected, {
				size: a.grandezzaIcona,
				onClick: t
			})] }),
			/* @__PURE__ */ E("br", {}),
			/* @__PURE__ */ E("div", { children: /* @__PURE__ */ E(a.StyledTrashNotSelected, {
				size: a.grandezzaIcona,
				onClick: n
			}) }),
			/* @__PURE__ */ E("br", {})
		]
	}) : /* @__PURE__ */ D(T, { children: [
		/* @__PURE__ */ E(a.StyledColOperazioni, { children: /* @__PURE__ */ D("div", {
			style: { width: "100%" },
			children: [/* @__PURE__ */ E(a.StyledFileIconNotSelected, {
				icon: te,
				className: "left",
				style: { marginRight: "50%" },
				size: "2xl"
			}), /* @__PURE__ */ E(a.StyledDownloadNotSelected, {
				size: a.grandezzaIcona,
				className: "rigth",
				onClick: e
			})]
		}) }),
		/* @__PURE__ */ E(a.StyledColOperazioni, { children: /* @__PURE__ */ D("div", {
			style: { width: "100%" },
			children: [/* @__PURE__ */ E(a.StyledFileIconNotSelected, {
				icon: ee,
				className: "left",
				style: { marginRight: "50%" },
				size: "2xl"
			}), /* @__PURE__ */ E(a.StyledDownloadNotSelected, {
				size: a.grandezzaIcona,
				className: "rigth",
				onClick: t
			})]
		}) }),
		/* @__PURE__ */ E(a.StyledColOperazioni, { children: /* @__PURE__ */ E("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ E(a.StyledTrashNotSelected2, {
				size: a.grandezzaIcona,
				className: "center",
				onClick: n
			})
		}) })
	] });
}
function Ue({ operazioneModifica: e, operazioneElimina: t, item: n, vistaItem: r, StyledComponents: a }) {
	let o = He(n.tipo_selezione, a), s = Ve(n.tipo_selezione, a);
	return r === "card" || r === "form" ? /* @__PURE__ */ D(a.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000"
		},
		children: [e && /* @__PURE__ */ E(s, {
			className: "modificaItemButton",
			size: a.grandezzaIcona,
			onClick: () => e(n),
			style: { marginRight: "50%" }
		}), t && /* @__PURE__ */ E(o, {
			className: "eliminaItemButton",
			size: a.grandezzaIcona,
			onClick: () => t(n)
		})]
	}) : /* @__PURE__ */ E(a.StyledColOperazioni, { children: /* @__PURE__ */ D("div", {
		style: { width: "100%" },
		children: [e && /* @__PURE__ */ E(s, {
			className: "left modificaItemButton",
			size: a.grandezzaIcona,
			onClick: () => e(n),
			style: { marginRight: "50%" }
		}), t && /* @__PURE__ */ E(o, {
			className: "rigth eliminaItemButton",
			size: a.grandezzaIcona,
			onClick: () => t(n)
		})]
	}) });
}
var We = ({ selectedIdsModifica: e, selectedIdsEliminazione: t, handleEdit: n, handleDelete: r }) => /* @__PURE__ */ E(T, { children: /* @__PURE__ */ E("div", {
	className: "contenitore-2",
	children: /* @__PURE__ */ D(s, { children: [e.length > 0 && /* @__PURE__ */ E(c, { children: /* @__PURE__ */ E("button", {
		className: "bottone-blu-non-selezionato",
		onClick: n,
		children: "Modifica"
	}) }), t.length > 0 && /* @__PURE__ */ E(c, { children: /* @__PURE__ */ E("button", {
		className: "bottone-rosso-non-selezionato",
		onClick: r,
		children: "Elimina"
	}) })] })
}) });
function Ge({ elementi: e, tipoForm: t, setTipoForm: n, StyledComponents: r }) {
	let a = (e) => {
		n(e);
	};
	return /* @__PURE__ */ D(r.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "20px",
			paddingBottom: "20px"
		},
		children: [
			e.includes("insert") && t === "insert" && /* @__PURE__ */ D(T, { children: [
				e.includes("search") && /* @__PURE__ */ E(r.StyledSearchNotSelected2, {
					size: r.grandezzaIcona,
					style: { marginRight: "50px" },
					onClick: () => a("search")
				}),
				/* @__PURE__ */ E(r.StyledSaveSelected2, {
					size: r.grandezzaIcona,
					style: { marginRight: "50px" },
					onClick: () => a("insert")
				}),
				e.includes("file") && /* @__PURE__ */ E(r.StyledFileIconNotSelected2, {
					icon: w,
					size: "2xl",
					onClick: () => a("file")
				})
			] }),
			e.includes("search") && t === "search" && /* @__PURE__ */ D(T, { children: [
				/* @__PURE__ */ E(r.StyledSearchSelected2, {
					size: r.grandezzaIcona,
					style: { marginRight: "50px" },
					onClick: () => a("search")
				}),
				e.includes("insert") && /* @__PURE__ */ E(r.StyledSaveNotSelected2, {
					size: r.grandezzaIcona,
					style: { marginRight: "50px" },
					onClick: () => a("insert")
				}),
				e.includes("file") && /* @__PURE__ */ E(r.StyledFileIconNotSelected2, {
					icon: w,
					size: "2xl",
					onClick: () => a("file")
				})
			] }),
			e.includes("file") && t === "file" && /* @__PURE__ */ D(T, { children: [
				e.includes("search") && /* @__PURE__ */ E(r.StyledSearchNotSelected2, {
					size: r.grandezzaIcona,
					style: { marginRight: "50px" },
					onClick: () => a("search")
				}),
				e.includes("insert") && /* @__PURE__ */ E(r.StyledSaveNotSelected2, {
					size: r.grandezzaIcona,
					style: { marginRight: "50px" },
					onClick: () => a("insert")
				}),
				/* @__PURE__ */ E(r.StyledFileIconNotSelected2, {
					icon: w,
					size: "2xl",
					onClick: () => a("file")
				})
			] })
		]
	});
}
//#endregion
//#region src/form_item/FormItem.jsx
function Ke({ elementi: e, tipoForm: t, setTipoForm: n, StyledComponents: r }) {
	return /* @__PURE__ */ E(r.StyledForm, { children: /* @__PURE__ */ E(Ge, {
		elementi: e,
		tipoForm: t,
		setTipoForm: n,
		StyledComponents: r
	}) });
}
function qe({ elementi: e, tipoForm: t, setTipoForm: n, StyledComponents: r }) {
	return /* @__PURE__ */ E(r.StyledForm, { children: /* @__PURE__ */ E(Ge, {
		elementi: e,
		tipoForm: t,
		setTipoForm: n,
		StyledComponents: r
	}) });
}
function Je({ campi: t, indici: n, eseguiSalvataggio: r }) {
	return /* @__PURE__ */ D(P.StyledForm, { children: [
		/* @__PURE__ */ E(P.StyledHeader, { children: t.header }),
		/* @__PURE__ */ D(P.SlideContainer, {
			style: {
				maxHeight: "2000px",
				overflowY: "auto"
			},
			children: [
				n.map((n) => {
					let r = t.type[n] ? F(1, !0, P) : I(1, !0, P);
					return /* @__PURE__ */ D(e, { children: [
						/* @__PURE__ */ E(P.StyledLabel, {
							htmlFor: t.name[n],
							children: t.label[n]
						}),
						t.name[n] === "prezzo" ? /* @__PURE__ */ E(P.StyledRow, { children: /* @__PURE__ */ D(T, { children: [
							/* @__PURE__ */ E(r, {
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
							["prezzo", "totale"].includes(t.name[n]) && /* @__PURE__ */ E(P.StyledEuroNotSelected, {
								style: {
									maxWidth: "5%",
									marginTop: "13px"
								},
								size: P.grandezzaIcona,
								onClick: null
							}),
							t.options[n]
						] }) }) : /* @__PURE__ */ D(T, { children: [
							/* @__PURE__ */ E(r, {
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
							["prezzo", "totale"].includes(t.name[n]) && /* @__PURE__ */ E(P.StyledEuroNotSelected, {
								style: {
									maxWidth: "5%",
									marginTop: "13px"
								},
								size: P.grandezzaIcona,
								onClick: null
							}),
							t.options[n]
						] }),
						t.errore[n] !== "" && /* @__PURE__ */ E(P.StyledSpanErrore, { children: t.errore[n] })
					] }, n);
				}),
				/* @__PURE__ */ E("br", {}),
				" ",
				/* @__PURE__ */ E("br", {})
			]
		}),
		/* @__PURE__ */ E(L, {
			eseguiSalvataggio: r,
			vistaItem: "form",
			StyledComponents: P
		})
	] });
}
function Ye({ campi: t, indici: r, handleSearch: a }) {
	let [o, s] = n(!0), [c, l] = n(!0);
	return F(1, !0, P), I(1, !0, P), /* @__PURE__ */ D(P.StyledForm, { children: [
		/* @__PURE__ */ E(P.StyledHeader, { children: t.header }),
		/* @__PURE__ */ D(P.SlideContainer, {
			style: {
				maxHeight: "2000px",
				overflowY: "auto"
			},
			children: [
				r.map((n) => {
					let r = t.type[n] ? F(1, !0, P) : I(1, !0, P);
					return /* @__PURE__ */ D(e, { children: [/* @__PURE__ */ E(P.StyledLabel, {
						htmlFor: t.name[n],
						children: t.label[n]
					}), /* @__PURE__ */ E(r, {
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
				/* @__PURE__ */ E("br", {}),
				" ",
				/* @__PURE__ */ E("br", {})
			]
		}),
		/* @__PURE__ */ E(R, {
			setIsVisible: s,
			arrowUp: c,
			setArrowUp: l,
			handleSearch: a,
			vistaItem: "form",
			StyledComponents: P
		})
	] });
}
function Xe({ campi: t, indici: r, eseguiLogin: a }) {
	let [o, s] = n("password"), c = (e) => {
		e.preventDefault(), s(o === "text" ? "password" : "text");
	};
	return /* @__PURE__ */ D(P.StyledForm, { children: [
		/* @__PURE__ */ E(P.StyledHeader, { children: t.header }),
		/* @__PURE__ */ D(P.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: [
				r.map((n) => {
					let r = t.type[n] ? F(1, !0, P) : I(1, !0, P), a = o === "password" ? P.StyledEyeClosedNotSelected : P.StyledEyeOpenNotSelected;
					return /* @__PURE__ */ D(e, { children: [
						/* @__PURE__ */ E(P.StyledLabel, {
							htmlFor: t.name[n],
							children: t.label[n]
						}),
						/* @__PURE__ */ D(P.StyledRow, { children: [/* @__PURE__ */ E(r, {
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
							type: t.name[n] === "password" ? o : t.type[n],
							step: t.step[n],
							min: t.min[n],
							value: t.value[n],
							placeholder: t.placeholder[n],
							onChange: t.onChange,
							onClick: t.onClick,
							onBlur: t.onBlur
						}), t.name[n] === "password" && /* @__PURE__ */ E(a, {
							style: {
								maxWidth: "5%",
								marginTop: "13px"
							},
							size: P.grandezzaIcona,
							onClick: c
						})] }),
						t.options[n],
						t.errore[n] && /* @__PURE__ */ E(P.StyledSpanErrore, { children: t.errore[n] })
					] }, n);
				}),
				/* @__PURE__ */ E("br", {}),
				" ",
				/* @__PURE__ */ E("br", {})
			]
		}),
		/* @__PURE__ */ E(B, {
			eseguiLogin: a,
			vistaItem: "form",
			StyledComponents: P
		})
	] });
}
function Ze({ campi: t, indici: r, eseguiModificaProfilo: a }) {
	let [o, s] = n("password"), [c, l] = n("password"), [u, d] = n("password"), f = (e, t) => {
		e.preventDefault(), t === "password_attuale" ? s(o === "text" ? "password" : "text") : t === "nuova_password" ? l(c === "text" ? "password" : "text") : t === "conferma_nuova_password" && d(u === "text" ? "password" : "text");
	};
	return /* @__PURE__ */ D(P.StyledForm, { children: [
		/* @__PURE__ */ E(P.StyledHeader, { children: t.header }),
		/* @__PURE__ */ D(P.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: [
				r.map((n) => {
					let r = t.type[n] ? F(1, !0, P) : I(1, !0, P), a = t.name[n] === "password_attuale" && o === "password" || t.name[n] === "nuova_password" && c === "password" || t.name[n] === "conferma_nuova_password" && u === "password" ? P.StyledEyeClosedNotSelected : P.StyledEyeOpenNotSelected;
					return /* @__PURE__ */ D(e, { children: [
						/* @__PURE__ */ E(P.StyledLabel, {
							htmlFor: t.name[n],
							children: t.label[n]
						}),
						/* @__PURE__ */ D(P.StyledRow, { children: [/* @__PURE__ */ E(r, {
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
							type: t.name[n].includes("password") ? t.name[n] === "password_attuale" ? o : t.name[n] === "nuova_password" ? c : u : t.type[n],
							step: t.step[n],
							min: t.min[n],
							value: t.value[n],
							placeholder: t.placeholder[n],
							onChange: t.onChange,
							onClick: t.onClick,
							onBlur: t.onBlur
						}), t.name[n].includes("password") && /* @__PURE__ */ E(a, {
							style: {
								maxWidth: "5%",
								marginTop: "13px"
							},
							size: P.grandezzaIcona,
							onClick: (e) => f(e, t.name[n])
						})] }),
						t.options[n],
						t.errore[n] && /* @__PURE__ */ E(P.StyledSpanErrore, { children: t.errore[n] })
					] }, n);
				}),
				/* @__PURE__ */ E("br", {}),
				" ",
				/* @__PURE__ */ E("br", {})
			]
		}),
		/* @__PURE__ */ E(V, {
			eseguiModificaProfilo: a,
			vistaItem: "form",
			StyledComponents: P
		})
	] });
}
function Qe({ campi: t, indici: r, ottieniFileRangePDF: a, ottieniFileRangeExcel: o, eliminaItemsRange: s }) {
	let [c, l] = n(!0), [u, d] = n(!0), f = c ? "2000px" : "0px";
	return F(1, !0, P), I(1, !0, P), /* @__PURE__ */ D(P.StyledForm, { children: [
		/* @__PURE__ */ E(P.StyledHeader, { children: t.header }),
		/* @__PURE__ */ D(P.SlideContainer, {
			style: { maxHeight: `${f}` },
			children: [
				r.map((n) => {
					let r = t.type[n] ? F(1, !0, P) : I(1, !0, P);
					return /* @__PURE__ */ D(e, { children: [/* @__PURE__ */ E(P.StyledLabel, {
						htmlFor: t.name[n],
						children: t.label[n]
					}), /* @__PURE__ */ E(r, {
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
				/* @__PURE__ */ E("br", {}),
				" ",
				/* @__PURE__ */ E("br", {})
			]
		}),
		/* @__PURE__ */ E(H, {
			ottieniFileRangePDF: a,
			ottieniFileRangeExcel: o,
			eliminaItemsRange: s,
			vistaItem: "form",
			StyledComponents: P
		})
	] });
}
function $e({ datiRicerca: e, setDatiRicerca: t, handleInputChange: n, eseguiRicerca: r, lingua: a }) {
	return /* @__PURE__ */ D(P.StyledForm, { children: [
		/* @__PURE__ */ E(P.StyledHeader, { children: a === "italiano" ? "Ricerca entrate e uscite" : "Searching for inputs and outputs" }),
		/* @__PURE__ */ D(P.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: [
				/* @__PURE__ */ E(P.StyledLabel, {
					htmlFor: "primo_anno",
					children: a === "italiano" ? "Primo anno" : "First year"
				}),
				/* @__PURE__ */ E(P.StyledInputModifica, {
					rows: 1,
					name: "primo_anno",
					id: "primo_anno",
					type: "number",
					step: 1,
					value: e.primo_anno,
					placeholder: a === "italiano" ? "Primo anno" : "First year",
					onChange: (e) => n(e, t)
				}),
				/* @__PURE__ */ E(P.StyledLabel, {
					htmlFor: "ultimo_anno",
					children: a === "italiano" ? "Ultimo anno" : "Last year"
				}),
				/* @__PURE__ */ D(P.StyledSelectModifica, {
					name: "ultimo_anno",
					id: "ultimo_anno",
					value: e.ultimo_anno,
					onChange: (e) => n(e, t),
					children: [
						/* @__PURE__ */ E("option", {
							value: parseInt(e.primo_anno) + 1,
							children: parseInt(e.primo_anno) + 1
						}),
						/* @__PURE__ */ E("option", {
							value: parseInt(e.primo_anno) + 2,
							children: parseInt(e.primo_anno) + 2
						}),
						/* @__PURE__ */ E("option", {
							value: parseInt(e.primo_anno) + 3,
							children: parseInt(e.primo_anno) + 3
						}),
						/* @__PURE__ */ E("option", {
							value: parseInt(e.primo_anno) + 4,
							children: parseInt(e.primo_anno) + 4
						}),
						/* @__PURE__ */ E("option", {
							value: parseInt(e.primo_anno) + 5,
							children: parseInt(e.primo_anno) + 5
						})
					]
				}),
				/* @__PURE__ */ E("br", {}),
				" ",
				/* @__PURE__ */ E("br", {})
			]
		}),
		/* @__PURE__ */ E(z, {
			eseguiRicerca: (e) => r(e),
			vistaItem: "form",
			StyledComponents: P
		})
	] });
}
var et = r(re)`
  display: flex;
  align-items: stretch; 
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 3%;
  padding-right: 3%;
`, U = r(ne)`
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
r(U)`
  max-height: ${(e) => e.isVisible ? "1000px" : "0"}; 
  overflow: hidden;
  transition: max-height 1s ease-out;
`, r(U)`
  border: 5px solid #000000;
  background-color: #000000;
`;
var tt = r(U)`
  border: 5px solid #000000;
  background-color: #000000;
  min-width: 230px;
  max-width: 230px;
  min-height: 80px;
  max-height: 80px;
`;
r(U)`
  border: 5px solid #000000;
  background-color: #0050EF;
`, r(U)`
  border: 5px solid #000000;
  background-color: #500000;
`, r.div`
  display: flex;
  flex-direction: row-reverse;
`;
var W = "\n  flex: 1;\n  display: flex;\n  align-items: center; /* Centro verticale */\n  justify-content: center; /* Centro orizzontale */\n  width: 100%;\n  height: 100%;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  color: inherit;\n  padding: 0; \n  margin: 0;\n  text-align: center; /* Centro orizzontale del testo */\n  overflow: hidden; /* Nasconde l'overflow */\n  resize: vertical;\n  border-radius: 40px;\n  min-height: 50px;\n  border: 5px solid #000000; \n  color: #FFFFFF;\n  padding: auto;\n", nt = r.textarea`
  ${W}
`, rt = r(nt)`
  background-color: #111111;
`, it = r(nt)`
  background-color: #0050EF;
`, at = r(nt)`
  background-color: #500000;
`, G = r.input`
  ${W}
`, ot = r(G)`
  background-color: #111111;
`, st = r(G)`
  background-color: #0050EF;
`, ct = r(G)`
  background-color: #500000;
`, lt = r.button`
  ${W}
`, ut = "\n  margin-left: 10%;\n  margin-right: 10%;\n  border: 5px solid #000000;\n  background-color: #000000;\n  cursor: pointer;  \n  transition: 0.5s all ease-out;\n";
r(lt)`
  ${ut}
  &:hover {
    background-color: #0050EF;
    color: #FFFFFF;
  }
`, r(lt)`
  ${ut}
  &:hover {
    background-color: #500000;
    color: #FFFFFF;
  }
`;
var K = "\n  color: #FFFFFF;\n  cursor: pointer;\n", dt = r(y)`
  ${K}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, ft = r(g)`
  ${K}
  transition: 0.5s all ease-out;
`, pt = r(h)`
  ${K}
  transition: 0.5s all ease-out;
  color: #0050EF;
`, mt = r(b)`
  ${K}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, ht = r(m)`
  color: #FFFFFF;
  transition: 0.5s all ease-out;
`, gt = r(u)`
  ${K}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, _t = r(d)`
  ${K}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, vt = r(_)`
  ${K}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, yt = r(v)`
  ${K}
`, bt = r(v)`
  ${K}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, xt = r(v)`
  color: #0050EF;
  cursor: pointer;
`, St = r(x)`
  ${K}
`, Ct = r(x)`
  color: #500000;
  cursor: pointer;
`, wt = r(C)`
  color: #FFFFFF;
`, Tt = r(C)`
  ${K}
  color: #0050EF;
`, Et = r(p)`
  ${K}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`;
r(S)`
  ${K}
  transition: 0.5s all ease-out;
  &:hover {
    color: #500000;
  }
`;
var Dt = r(x)`
  ${K}
  transition: 0.5s all ease-out;
  &:hover {
    color: #500000;
  }
`, q = r.select`
  cursor: pointer;
  width: 100%;
  border-radius: 40px;
  background-color: #0050EF;
  border: 5px solid #000000;
  color: #FFFFFF;
  text-align: center;
`, Ot = r(q)`
  background-color: #111111;
`, kt = r(q)`
  background-color: #0050EF;
`, At = r(q)`
  background-color: #500000;
`;
r.option`
  background-color: #0050EF;
  &:hover {
    background-color: #0050EF;
  }
`;
var J = {
	StyledPencilNotSelected: yt,
	StyledPencilSelected: xt,
	grandezzaIcona: 50,
	StyledTrashNotSelected: St,
	StyledTrashSelected: Ct,
	StyledColOperazioni: tt,
	StyledSaveNotSelected: dt,
	StyledSearchNotSelected: mt,
	StyledArrowLeftNotSelected: gt,
	StyledArrowRightNotSelected: _t,
	StyledFileIconNotSelected: wt,
	StyledDownloadNotSelected: Et,
	StyledTrashNotSelected2: Dt,
	StyledLoginNotSelected: vt,
	StyledPencilNotSelectedModificaProfilo: bt,
	StyledInputBlock: ot,
	StyledInputModifica: st,
	StyledInputElimina: ct,
	StyledTextAreaBlock: rt,
	StyledTextAreaModifica: it,
	StyledTextAreaElimina: at,
	StyledRow: et,
	StyledCol: U,
	StyledSpanErrore: r.span`
  color: #FF0000;
  border-radius: 40px;
  padding: 10px;
`,
	StyledSelectBlock: Ot,
	StyledSelectModifica: kt,
	StyledSelectElimina: At,
	StyledEyeClosedNotSelected: ft,
	StyledEyeOpenNotSelected: pt,
	StyledEuroNotSelected: ht,
	StyledFileIconSelected2: Tt
}, jt = (e, t, n) => {
	e.preventDefault();
	let { name: r, value: a, id: o } = e.target, s = !0;
	[
		"note_cliente",
		"note_servizio",
		"note_lavoro",
		"note_spesa"
	].includes(o) ? a.length > 200 && (s = !1) : ["descrizione_spesa"].includes(o) ? a.length > 1e3 && (s = !1) : ["nome_servizio"].includes(o) ? a.length > 100 && (s = !1) : ["prezzo_servizio", "totale_spesa"].includes(o) ? (!(!isNaN(a.substr(0, a)) && Number(a) === parseFloat(a)) || a < 0) && (s = !1) : ["email_cliente"].includes(o) ? a.length > 254 && (s = !1) : ["contatto_cliente"].includes(o) && (a === "" ? s = !0 : (!/^\d+$/.test(a) || !(a.startsWith("0") && a.length <= 11 || a.startsWith("3") && a.length <= 10)) && (s = !1)), s === !0 && n((e) => ({
		...e,
		[t]: a
	}));
}, Mt = (e) => {
	["giorno_spesa", "giorno_lavoro"].includes(e.target.id) ? e.target.type = "date" : ["prezzo_servizio", "totale_spesa"].includes(e.target.id) && (e.target.value = e.target.value.substr(0, e.target.value.length - 2));
};
//#endregion
//#region src/row_item/RowItem.jsx
function Nt({ campi: t, indici: n, eseguiSalvataggio: r }) {
	F(1, !0, J), I(1, !0, J);
	let a = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ D(J.StyledRow, { children: [/* @__PURE__ */ E(L, {
		eseguiSalvataggio: r,
		vistaItem: "row",
		StyledComponents: J
	}), n.map((n) => {
		let r = t.type[n] ? F(1, !0, J) : I(1, !0, J);
		return /* @__PURE__ */ E(e, { children: /* @__PURE__ */ E(J.StyledCol, { children: /* @__PURE__ */ D("div", {
			style: { width: "100%" },
			children: [/* @__PURE__ */ D(J.StyledRow, { children: [
				/* @__PURE__ */ E(r, {
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
					onContextMenu: (e) => a(e, t.placeholder[n])
				}),
				["prezzo", "totale"].includes(t.name[n]) && /* @__PURE__ */ E(J.StyledEuroNotSelected, {
					style: {
						maxWidth: "10%",
						marginLeft: "-6px"
					},
					size: J.grandezzaIcona,
					onClick: null
				}),
				t.options[n]
			] }), t.errore[n] !== "" && /* @__PURE__ */ E(J.StyledSpanErrore, { children: t.errore[n] })]
		}) }) }, n);
	})] });
}
function Pt({ campi: t, indici: r, handleSearch: a }) {
	let [o, s] = n([
		!0,
		!0,
		!0,
		!0,
		!0,
		!0,
		!0,
		!0
	]), [c, l] = n(!0);
	F(1, !0, J), I(1, !0, J);
	let u = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ D(J.StyledRow, { children: [/* @__PURE__ */ E(R, {
		visibilita: o,
		setVisibilita: s,
		arrowUp: c,
		setArrowUp: l,
		handleSearch: a,
		vistaItem: "row",
		StyledComponents: J
	}), r.map((n) => {
		let r = t.type[n] ? F(1, !0, J) : I(1, !0, J);
		return /* @__PURE__ */ E(e, { children: /* @__PURE__ */ E(J.StyledCol, { children: /* @__PURE__ */ E("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ E(J.StyledRow, { children: o[n] && /* @__PURE__ */ D(T, { children: [/* @__PURE__ */ E(r, {
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
				onContextMenu: (e) => u(e, t.placeholder[n])
			}), [
				"prezzo_min",
				"prezzo_max",
				"totale_min",
				"totale_max"
			].includes(t.name[n]) && /* @__PURE__ */ E(J.StyledEuroNotSelected, {
				style: {
					maxWidth: "20%",
					marginLeft: "-6px"
				},
				size: J.grandezzaIcona,
				onClick: null
			})] }) })
		}) }) }, n);
	})] });
}
function Ft({ item: t, campi: r, indici: a, operazioneModifica: o, operazioneElimina: s, handleBlurItem: c }) {
	let l = F(r.tipoSelezione, !1, J), [u, d] = n(() => a.reduce((e, t) => ({
		...e,
		[t]: r.value[t]
	}), {})), f = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ D(J.StyledRow, { children: [
		(o || s) && /* @__PURE__ */ E(Ue, {
			operazioneModifica: o,
			operazioneElimina: s,
			item: t,
			vistaItem: "row",
			StyledComponents: J
		}),
		/* @__PURE__ */ E(J.StyledCol, { children: /* @__PURE__ */ E("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ E(J.StyledRow, { children: /* @__PURE__ */ E(l, {
				rows: 1,
				name: "header",
				value: r.header,
				placeholder: r.header,
				readOnly: !0
			}) })
		}) }),
		a.map((n) => {
			let a = r.type[n] ? F(r.tipoSelezione, r.valoreModificabile[n], J) : I(r.tipoSelezione, r.valoreModificabile[n], J);
			return /* @__PURE__ */ E(e, { children: /* @__PURE__ */ E(J.StyledCol, { children: /* @__PURE__ */ D("div", {
				style: { width: "100%" },
				children: [/* @__PURE__ */ D(J.StyledRow, { children: [
					/* @__PURE__ */ E(a, {
						style: ["prezzo", "totale"].includes(r.name[n]) ? { maxWidth: "80%" } : null,
						rows: 1,
						name: r.name[n],
						id: r.id[n],
						type: r.type[n],
						step: r.step[n],
						value: u[n],
						placeholder: r.placeholder[n],
						onChange: (e) => jt(e, n, d),
						onBlur: (e) => c(e, t),
						onClick: (e) => Mt(e),
						readOnly: t.tipo_selezione !== 1,
						onContextMenu: (e) => f(e, r.placeholder[n])
					}),
					["prezzo", "totale"].includes(r.name[n]) && /* @__PURE__ */ E(J.StyledEuroNotSelected, {
						style: {
							maxWidth: "20%",
							marginLeft: "-6px"
						},
						size: J.grandezzaIcona
					}),
					r.options[n]
				] }), r.errore[n] && /* @__PURE__ */ E(J.StyledSpanErrore, { children: r.errore[n] })]
			}) }) }, n);
		})
	] });
}
function It({ campi: t, indici: n, ottieniFileRangePDF: r, ottieniFileRangeExcel: a, eliminaItemsRange: o }) {
	let s = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ D(J.StyledRow, { children: [/* @__PURE__ */ E(H, {
		ottieniFileRangePDF: r,
		ottieniFileRangeExcel: a,
		eliminaItemsRange: o,
		vistaItem: "row",
		StyledComponents: J
	}), n.map((n) => {
		let r = t.type[n] ? F(1, !0, J) : I(1, !0, J);
		return /* @__PURE__ */ E(e, { children: /* @__PURE__ */ E(J.StyledCol, { children: /* @__PURE__ */ E("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ E(J.StyledRow, { children: /* @__PURE__ */ E(r, {
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
				onContextMenu: (e) => s(e, t.placeholder[n])
			}) })
		}) }) }, n);
	})] });
}
function Lt({ campi: t, indici: r, eseguiLogin: a }) {
	let [o, s] = n("password"), c = (e) => {
		e.preventDefault(), s(o === "text" ? "password" : "text");
	}, l = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ D(J.StyledRow, { children: [/* @__PURE__ */ E(B, {
		eseguiLogin: a,
		vistaItem: "row",
		StyledComponents: J
	}), r.map((n) => {
		let r = t.type[n] ? F(1, !0, J) : I(1, !0, J), a = o === "password" ? J.StyledEyeClosedNotSelected : J.StyledEyeOpenNotSelected;
		return /* @__PURE__ */ E(e, { children: /* @__PURE__ */ E(J.StyledCol, { children: /* @__PURE__ */ D("div", {
			style: { width: "100%" },
			children: [
				/* @__PURE__ */ D(J.StyledRow, { children: [/* @__PURE__ */ E(r, {
					style: t.name[n] === "password" ? { maxWidth: "80%" } : null,
					rows: 1,
					name: t.name[n],
					id: t.id[n],
					type: t.name[n] === "password" ? o : t.type[n],
					step: t.step[n],
					min: t.min[n],
					value: t.value[n],
					placeholder: t.placeholder[n],
					onChange: t.onChange,
					onClick: t.onClick,
					onBlur: t.onBlur,
					onContextMenu: (e) => l(e, t.placeholder[n])
				}), t.name[n] === "password" && /* @__PURE__ */ E(a, {
					style: {
						maxWidth: "20%",
						marginLeft: "-6px"
					},
					size: J.grandezzaIcona,
					onClick: c
				})] }),
				t.options[n],
				t.errore[n] && /* @__PURE__ */ E(J.StyledSpanErrore, { children: t.errore[n] })
			]
		}) }) }, n);
	})] });
}
function Rt({ campi: t, indici: r, eseguiModificaProfilo: a }) {
	let [o, s] = n("password"), [c, l] = n("password"), [u, d] = n("password"), f = (e, t) => {
		e.preventDefault(), t === "password_attuale" ? s(o === "text" ? "password" : "text") : t === "nuova_password" ? l(c === "text" ? "password" : "text") : t === "conferma_nuova_password" && d(u === "text" ? "password" : "text");
	};
	return /* @__PURE__ */ D(J.StyledRow, { children: [/* @__PURE__ */ E(V, {
		eseguiModificaProfilo: a,
		vistaItem: "row",
		StyledComponents: J
	}), r.map((n) => {
		let r = t.type[n] ? F(1, !0, J) : I(1, !0, J), a = t.name[n] === "password_attuale" && o === "password" || t.name[n] === "nuova_password" && c === "password" || t.name[n] === "conferma_nuova_password" && u === "password" ? J.StyledEyeClosedNotSelected : J.StyledEyeOpenNotSelected;
		return /* @__PURE__ */ E(e, { children: /* @__PURE__ */ E(J.StyledCol, { children: /* @__PURE__ */ D("div", {
			style: { width: "100%" },
			children: [
				/* @__PURE__ */ D(J.StyledRow, { children: [/* @__PURE__ */ E(r, {
					style: t.name[n].includes("password") ? { maxWidth: "80%" } : null,
					rows: 1,
					name: t.name[n],
					id: t.id[n],
					type: t.name[n].includes("password") ? t.name[n] === "password_attuale" ? o : t.name[n] === "nuova_password" ? c : u : t.type[n],
					step: t.step[n],
					min: t.min[n],
					value: t.value[n],
					placeholder: t.placeholder[n],
					onChange: t.onChange,
					onClick: t.onClick,
					onBlur: t.onBlur,
					onContextMenu: (e) => handleRightClick(e, t.placeholder[n])
				}), t.name[n].includes("password") && /* @__PURE__ */ E(a, {
					style: {
						maxWidth: "20%",
						marginLeft: "-6px"
					},
					size: J.grandezzaIcona,
					onClick: (e) => f(e, t.name[n])
				})] }),
				t.options[n],
				t.errore[n] && /* @__PURE__ */ E(J.StyledSpanErrore, { children: t.errore[n] })
			]
		}) }) }, n);
	})] });
}
function zt({ datiRicerca: e, setDatiRicerca: t, handleInputChange: n, eseguiRicerca: r, lingua: a }) {
	return /* @__PURE__ */ D(J.StyledRow, { children: [
		/* @__PURE__ */ E(z, {
			eseguiRicerca: (e) => r(e),
			vistaItem: "row",
			StyledComponents: J
		}),
		/* @__PURE__ */ E(J.StyledCol, { children: /* @__PURE__ */ E("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ E(J.StyledRow, { children: /* @__PURE__ */ E(J.StyledInputBlock, {
				rows: 1,
				name: "header",
				value: a === "italiano" ? "Ricerca entrate e uscite" : "Searching for inputs and outputs",
				placeholder: a === "italiano" ? "Ricerca entrate e uscite" : "Searching for inputs and outputs",
				readOnly: !0
			}) })
		}) }),
		/* @__PURE__ */ E(J.StyledCol, { children: /* @__PURE__ */ E("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ E(J.StyledInputModifica, {
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
		/* @__PURE__ */ E(J.StyledCol, { children: /* @__PURE__ */ E("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ D(J.StyledSelectModifica, {
				name: "ultimo_anno",
				id: "ultimo_anno",
				onContextMenu: (e) => handleRightClick(e, "Ultimo anno"),
				value: e.ultimo_anno,
				onChange: (e) => n(e, t),
				children: [
					/* @__PURE__ */ E("option", {
						value: parseInt(e.primo_anno) + 1,
						children: parseInt(e.primo_anno) + 1
					}),
					/* @__PURE__ */ E("option", {
						value: parseInt(e.primo_anno) + 2,
						children: parseInt(e.primo_anno) + 2
					}),
					/* @__PURE__ */ E("option", {
						value: parseInt(e.primo_anno) + 3,
						children: parseInt(e.primo_anno) + 3
					}),
					/* @__PURE__ */ E("option", {
						value: parseInt(e.primo_anno) + 4,
						children: parseInt(e.primo_anno) + 4
					}),
					/* @__PURE__ */ E("option", {
						value: parseInt(e.primo_anno) + 5,
						children: parseInt(e.primo_anno) + 5
					})
				]
			})
		}) })
	] });
}
var Bt = r(a)`
  width: 18rem;
  background-color: transparent;
  overflow: hidden;
  border-radius: 40px;
  color: white;
  text-align: center;
  padding: 0;
  border: transparent;
`, Vt = r(re)`
  display: flex;
  flex-wrap: wrap;
`, Ht = r(ne)`
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
`, Ut = r(a.Header)`
  color: #ffffff;
  background-color: #000000;
  border: 5px solid #000000;
  min-height: 70px;
`, Wt = r(o.Item)`
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  min-height: 70px;
`, Gt = r.div`
  overflow: hidden;
  transition: max-height 2s ease-out;
  background-color: #111111;
  border: 10px solid #000000;
`, Y = r.textarea`
  width: 100%;
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  min-height: 70px;
`, Kt = r(Y)`
  background-color: #111111;
`, qt = r(Y)`
  background-color: #0050EF;
`, Jt = r(Y)`
  background-color: #500000;
`, X = r.input`
  width: 100%;
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  min-height: 70px;
`, Yt = r(X)`
  background-color: #111111;
`, Xt = r(X)`
  background-color: #0050EF;
`, Zt = r(X)`
  background-color: #500000;
`, Z = "\n  color: #FFFFFF;\n  cursor: pointer;\n";
r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-top:10px;
`;
var Qt = r(y)`
  ${Z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, $t = r(g)`
  ${Z}
  transition: 0.5s all ease-out;
`, en = r(h)`
  ${Z}
  transition: 0.5s all ease-out;
  color: #0050EF;
`, tn = r(b)`
  ${Z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, nn = r(m)`
  color: #FFFFFF;
  transition: 0.5s all ease-out;
`, rn = r(f)`
  ${Z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, an = r(l)`
  ${Z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, on = r(_)`
  ${Z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, sn = r(v)`
  ${Z}
`;
r(v)`
  ${Z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`;
var cn = r(v)`
  color: #0050EF;
  cursor: pointer;
`, ln = r(x)`
  ${Z}
`, un = r(x)`
  color: #500000;
  cursor: pointer;
`, dn = r(C)`
  color: #FFFFFF;
`, fn = r(C)`
  ${Z}
  color: #0050EF;
`, pn = r(p)`
  ${Z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`;
r(S)`
  ${Z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #500000;
  }
`;
var mn = r(v)`
  ${Z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, hn = r(x)`
  ${Z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #500000;
  }
`, gn = r.select`
  width: 100%;
  min-height: 70px;
  background-color: #0050EF;
  border: 5px solid #000000;
  color: #FFFFFF;
  text-align: center;
`, _n = r(gn)`
  background-color: #111111;
`, vn = r(gn)`
  background-color: #0050EF;
`, yn = r(gn)`
  background-color: #500000;
`;
r.option`

  background-color: #0050EF;
  &:hover {
    background-color: #0050EF;
  }
`;
var Q = {
	StyledPencilNotSelected: sn,
	StyledPencilSelected: cn,
	grandezzaIcona: 50,
	StyledTrashNotSelected: ln,
	StyledTrashSelected: un,
	StyledListGroupItem: Wt,
	StyledRow: Vt,
	StyledCol: Ht,
	StyledSaveNotSelected: Qt,
	StyledEyeOpenNotSelected: en,
	StyledEyeClosedNotSelected: $t,
	StyledSearchNotSelected: tn,
	StyledArrowTopNotSelected: rn,
	StyledArrowBottomNotSelected: an,
	StyledFileIconNotSelected: dn,
	StyledDownloadNotSelected: pn,
	StyledTrashNotSelected2: hn,
	StyledLoginNotSelected: on,
	StyledPencilNotSelected2: mn,
	StyledSelectBlock: _n,
	StyledSelectModifica: vn,
	StyledSelectElimina: yn,
	StyledInputBlock: Yt,
	StyledInputModifica: Xt,
	StyledInputElimina: Zt,
	StyledTextAreaBlock: Kt,
	StyledTextAreaModifica: qt,
	StyledTextAreaElimina: Jt,
	StyledCard: Bt,
	StyledCardHeader: Ut,
	SlideContainer: Gt,
	StyledSpanErrore: r.span`
  color: #FFFFFF;
  padding: 10px;
`,
	StyledEuroNotSelected: nn,
	StyledFileIconSelected2: fn
};
//#endregion
//#region src/Colori.js
function $(e, t, n) {
	return t === 0 ? "#FFFFFF" : e < 0 ? "#FF0000" : e > 0 ? "#00FF00" : "#FFFFFF";
}
//#endregion
//#region src/Calcoli.js
var bn = (e) => e.totale_gennaio + e.totale_febbraio + e.totale_marzo + e.totale_aprile + e.totale_maggio + e.totale_giugno + e.totale_luglio + e.totale_agosto + e.totale_settembre + e.totale_ottobre + e.totale_novembre + e.totale_dicembre, xn = (e) => parseInt(e.quantita_gennaio) + parseInt(e.quantita_febbraio) + parseInt(e.quantita_marzo) + parseInt(e.quantita_aprile) + parseInt(e.quantita_maggio) + parseInt(e.quantita_giugno) + parseInt(e.quantita_luglio) + parseInt(e.quantita_agosto) + parseInt(e.quantita_settembre) + parseInt(e.quantita_ottobre) + parseInt(e.quantita_novembre) + parseInt(e.quantita_dicembre);
//#endregion
//#region src/card_item/CardItem.jsx
function Sn({ campi: t, indici: n, eseguiSalvataggio: r }) {
	let a = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ E("center", { children: /* @__PURE__ */ D(Q.StyledCard, { children: [
		/* @__PURE__ */ E(Q.StyledCardHeader, { children: t.header }),
		/* @__PURE__ */ E(Q.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: n.map((n) => {
				let r = t.type[n] ? F(1, !0, Q) : I(1, !0, Q);
				return /* @__PURE__ */ D(e, { children: [/* @__PURE__ */ D(Q.StyledRow, { children: [/* @__PURE__ */ E(r, {
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
					onContextMenu: (e) => a(e, t.placeholder[n])
				}), t.options[n]] }), t.errore[n] !== "" && /* @__PURE__ */ E(Q.StyledSpanErrore, { children: t.errore[n] })] }, n);
			})
		}),
		/* @__PURE__ */ E(L, {
			eseguiSalvataggio: r,
			vistaItem: "card",
			StyledComponents: Q
		})
	] }) });
}
function Cn({ campi: t, indici: r, handleSearch: a }) {
	let [o, s] = n(!0), [c, l] = n(!0), u = o ? "2000px" : "0px", d = F(1, !0, Q), f = I(1, !0, Q), p = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ D("center", { children: [/* @__PURE__ */ D(Q.StyledCard, { children: [
		/* @__PURE__ */ E(Q.StyledCardHeader, { children: t.header }),
		/* @__PURE__ */ E(Q.SlideContainer, {
			style: { maxHeight: `${u}` },
			children: r.map((n) => {
				let r = t.type[n] ? d : f;
				return /* @__PURE__ */ E(e, { children: /* @__PURE__ */ E(Q.StyledRow, { children: /* @__PURE__ */ E(r, {
					rows: 1,
					name: t.name[n],
					id: t.id[n],
					type: t.type[n],
					value: t.value[n],
					placeholder: t.placeholder[n],
					onChange: t.onChange,
					onClick: t.onClick,
					onBlur: t.onBlur,
					onContextMenu: (e) => p(e, t.placeholder[n])
				}) }) }, n);
			})
		}),
		/* @__PURE__ */ E(R, {
			setIsVisible: s,
			arrowUp: c,
			setArrowUp: l,
			handleSearch: a,
			vistaItem: "card",
			StyledComponents: Q
		})
	] }), t.errore[i] && /* @__PURE__ */ E(Q.StyledSpanErrore, { children: t.errore[i] })] });
}
function wn({ item: r, campi: a, indici: o, operazioneModifica: s, operazioneElimina: c, handleBlurItem: l }) {
	let u = t([]), [d, f] = n(() => o.reduce((e, t) => ({
		...e,
		[t]: a.value[t]
	}), {})), p = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ D(Q.StyledCard, { children: [
		/* @__PURE__ */ E(Q.StyledCardHeader, { children: a.header }),
		/* @__PURE__ */ E(Q.SlideContainer, { children: o.map((t) => {
			let n = a.type[t] ? F(a.tipoSelezione, a.valoreModificabile[t], Q) : I(a.tipoSelezione, a.valoreModificabile[t], Q);
			return /* @__PURE__ */ D(e, { children: [/* @__PURE__ */ D(Q.StyledRow, { children: [/* @__PURE__ */ E(n, {
				ref: (e) => u.current[t] = e,
				rows: 1,
				name: a.name[t],
				id: a.id[t],
				type: a.type[t],
				step: a.step[t],
				value: d[t],
				placeholder: a.placeholder[t],
				onChange: (e) => jt(e, t, f),
				onBlur: (e) => l(e, r),
				onClick: (e) => Mt(e),
				readOnly: r.tipo_selezione !== 1,
				onContextMenu: (e) => p(e, a.placeholder[t])
			}), a.options[t]] }), a.errore[t] && /* @__PURE__ */ E(Q.StyledSpanErrore, { children: a.errore[t] })] }, `input-${t}`);
		}) }),
		/* @__PURE__ */ E(Ue, {
			operazioneModifica: s,
			operazioneElimina: c,
			item: r,
			vistaItem: "card",
			StyledComponents: Q
		})
	] });
}
function Tn({ campi: t, indici: n, ottieniFileRangePDF: r, ottieniFileRangeExcel: a, eliminaItemsRange: o }) {
	let s = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ E("center", { children: /* @__PURE__ */ D(Q.StyledCard, { children: [
		/* @__PURE__ */ E(Q.StyledCardHeader, { children: t.header }),
		/* @__PURE__ */ E(Q.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: n.map((n) => /* @__PURE__ */ E(e, { children: /* @__PURE__ */ E(t.type[n] ? F(1, !0, Q) : I(1, !0, Q), {
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
				onContextMenu: (e) => s(e, t.placeholder[n])
			}, n) }, n))
		}),
		/* @__PURE__ */ E(H, {
			ottieniFileRangePDF: r,
			ottieniFileRangeExcel: a,
			eliminaItemsRange: o,
			vistaItem: "card",
			StyledComponents: Q
		})
	] }) });
}
function En({ campi: t, indici: r, eseguiLogin: a }) {
	let [o, s] = n("password"), c = (e) => {
		e.preventDefault(), s(o === "text" ? "password" : "text");
	}, l = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ E("center", { children: /* @__PURE__ */ D(Q.StyledCard, { children: [
		/* @__PURE__ */ E(Q.StyledCardHeader, { children: t.header }),
		/* @__PURE__ */ E(Q.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: r.map((n) => {
				let r = t.type[n] ? F(1, !0, Q) : I(1, !0, Q), a = o === "password" ? Q.StyledEyeClosedNotSelected : Q.StyledEyeOpenNotSelected;
				return /* @__PURE__ */ D(e, { children: [
					/* @__PURE__ */ D(Q.StyledRow, { children: [/* @__PURE__ */ E(r, {
						style: t.name[n] === "password" ? { maxWidth: "80%" } : null,
						rows: 1,
						name: t.name[n],
						id: t.id[n],
						type: t.name[n] === "password" ? o : t.type[n],
						step: t.step[n],
						min: t.min[n],
						value: t.value[n],
						placeholder: t.placeholder[n],
						onChange: t.onChange,
						onClick: t.onClick,
						onBlur: t.onBlur,
						onContextMenu: (e) => l(e, t.placeholder[n])
					}), t.name[n] === "password" && /* @__PURE__ */ E(a, {
						style: {
							maxWidth: "20%",
							marginLeft: "-6px",
							marginTop: "13px"
						},
						size: Q.grandezzaIcona,
						onClick: c
					})] }),
					t.options[n],
					t.errore[n] && /* @__PURE__ */ E(Q.StyledSpanErrore, { children: t.errore[n] })
				] }, n);
			})
		}),
		/* @__PURE__ */ E(B, {
			eseguiLogin: a,
			vistaItem: "card",
			StyledComponents: Q
		})
	] }) });
}
function Dn({ campi: t, indici: r, eseguiModificaProfilo: a }) {
	let [o, s] = n("password"), [c, l] = n("password"), [u, d] = n("password"), f = (e, t) => {
		e.preventDefault(), t === "password_attuale" ? s(o === "text" ? "password" : "text") : t === "nuova_password" ? l(c === "text" ? "password" : "text") : t === "conferma_nuova_password" && d(u === "text" ? "password" : "text");
	};
	return /* @__PURE__ */ E("center", { children: /* @__PURE__ */ D(Q.StyledCard, { children: [
		/* @__PURE__ */ E(Q.StyledCardHeader, { children: t.header }),
		/* @__PURE__ */ E(Q.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: r.map((n) => {
				let r = t.type[n] ? F(1, !0, Q) : I(1, !0, Q), a = t.name[n] === "password_attuale" && o === "password" || t.name[n] === "nuova_password" && c === "password" || t.name[n] === "conferma_nuova_password" && u === "password" ? Q.StyledEyeClosedNotSelected : Q.StyledEyeOpenNotSelected;
				return /* @__PURE__ */ D(e, { children: [
					/* @__PURE__ */ D(Q.StyledRow, { children: [/* @__PURE__ */ E(r, {
						style: t.name[n].includes("password") ? { maxWidth: "80%" } : null,
						rows: 1,
						name: t.name[n],
						id: t.id[n],
						type: t.name[n].includes("password") ? t.name[n] === "password_attuale" ? o : t.name[n] === "nuova_password" ? c : u : t.type[n],
						step: t.step[n],
						min: t.min[n],
						value: t.value[n],
						placeholder: t.placeholder[n],
						onChange: t.onChange,
						onClick: t.onClick,
						onBlur: t.onBlur,
						onContextMenu: (e) => handleRightClick(e, t.placeholder[n])
					}), t.name[n].includes("password") && /* @__PURE__ */ E(a, {
						style: {
							maxWidth: "20%",
							marginLeft: "-6px",
							marginTop: "13px"
						},
						size: Q.grandezzaIcona,
						onClick: (e) => f(e, t.name[n])
					})] }),
					t.options[n],
					t.errore[n] && /* @__PURE__ */ E(Q.StyledSpanErrore, { children: t.errore[n] })
				] }, n);
			})
		}),
		/* @__PURE__ */ E(V, {
			eseguiModificaProfilo: a,
			vistaItem: "card",
			StyledComponents: Q
		})
	] }) });
}
function On({ nome: e, img: t, id: n, onClickWidget: r, backgroundColor: a }) {
	return /* @__PURE__ */ D(O, {
		style: {
			width: "300px",
			height: "400px",
			backgroundColor: a,
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
		children: [/* @__PURE__ */ E(O.Img, {
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
		}), /* @__PURE__ */ E(O.Body, { children: /* @__PURE__ */ E(O.Title, {
			style: {
				color: "#FFFFFF",
				textAlign: "center"
			},
			children: e
		}) })]
	});
}
function kn({ entrateItems: e, lingua: t, etichettaIta: n, etichettaEng: r }) {
	return /* @__PURE__ */ D(O, {
		style: {
			display: "inline-block",
			backgroundColor: "rgba(0, 0, 0, 0.5)",
			borderRadius: "50px",
			paddingLeft: "50px",
			paddingRight: "50px",
			paddingBottom: "50px",
			overflowX: "auto"
		},
		children: [/* @__PURE__ */ E(O.Body, { children: /* @__PURE__ */ E("center", { children: /* @__PURE__ */ E(O.Title, {
			style: { color: "#FFFFFF" },
			children: t === "italiano" ? n : r
		}) }) }), /* @__PURE__ */ E("center", { children: /* @__PURE__ */ D(k, {
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
				/* @__PURE__ */ E("thead", { children: /* @__PURE__ */ D("tr", { children: [
					/* @__PURE__ */ E("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "ANNO" : "YEAR"
					}),
					/* @__PURE__ */ E("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "GEN" : "JAN"
					}),
					/* @__PURE__ */ E("th", {
						style: { color: "#FFFFFF" },
						children: "FEB"
					}),
					/* @__PURE__ */ E("th", {
						style: { color: "#FFFFFF" },
						children: "MAR"
					}),
					/* @__PURE__ */ E("th", {
						style: { color: "#FFFFFF" },
						children: "APR"
					}),
					/* @__PURE__ */ E("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "MAG" : "MAY"
					}),
					/* @__PURE__ */ E("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "GIU" : "JUN"
					}),
					/* @__PURE__ */ E("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "LUG" : "JUL"
					}),
					/* @__PURE__ */ E("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "AGO" : "AUG"
					}),
					/* @__PURE__ */ E("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "SET" : "SEP"
					}),
					/* @__PURE__ */ E("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "OTT" : "OCT"
					}),
					/* @__PURE__ */ E("th", {
						style: { color: "#FFFFFF" },
						children: "NOV"
					}),
					/* @__PURE__ */ E("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "DIC" : "DEC"
					}),
					/* @__PURE__ */ E("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "TOT ENTRATE" : "TOT REVENUE"
					})
				] }) }),
				/* @__PURE__ */ E("tbody", { children: e.map((e, t) => t > 1 && /* @__PURE__ */ E("tr", { children: Object.values(e).map((e, t) => /* @__PURE__ */ E("td", {
					style: {
						color: $(e, t, "entrata"),
						fontWeight: t === 0 ? "bold" : null
					},
					children: t > 0 ? parseFloat(e).toFixed(2) + " €" : e
				}, t)) }, t)) }),
				/* @__PURE__ */ E("tbody", { children: /* @__PURE__ */ E("tr", { children: Object.values(e[0]).map((e, t) => /* @__PURE__ */ E("td", {
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
function An({ entrateItems: t, lingua: r, tipoItemIta: a, tipoItemEng: o, etichettaIta: s, etichettaEng: c }) {
	let [l, u] = n(0);
	return /* @__PURE__ */ D(O, {
		style: {
			display: "inline-block",
			backgroundColor: "rgba(0, 0, 0, 0.5)",
			borderRadius: "50px",
			paddingLeft: "50px",
			paddingRight: "50px",
			paddingBottom: "50px",
			overflowX: "auto"
		},
		children: [/* @__PURE__ */ E(O.Body, { children: /* @__PURE__ */ E("center", { children: /* @__PURE__ */ E(O.Title, {
			style: { color: "#FFFFFF" },
			children: r === "italiano" ? s : c
		}) }) }), /* @__PURE__ */ E("center", { children: /* @__PURE__ */ D(k, {
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
			children: [/* @__PURE__ */ E("thead", {}), /* @__PURE__ */ E("tbody", { children: t.map((n, s) => /* @__PURE__ */ D(e, { children: [(s === 0 || t[s].anno !== t[s - 1].anno) && /* @__PURE__ */ D(T, { children: [/* @__PURE__ */ E("tr", { children: /* @__PURE__ */ D("th", {
				colSpan: 14,
				children: [
					r === "italiano" ? "ANNO" : "YEAR",
					" = ",
					n.anno
				]
			}) }), /* @__PURE__ */ D("tr", { children: [
				/* @__PURE__ */ E("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? a : o
				}),
				/* @__PURE__ */ E("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "GEN" : "JAN"
				}),
				/* @__PURE__ */ E("th", {
					style: { color: "#FFFFFF" },
					children: "FEB"
				}),
				/* @__PURE__ */ E("th", {
					style: { color: "#FFFFFF" },
					children: "MAR"
				}),
				/* @__PURE__ */ E("th", {
					style: { color: "#FFFFFF" },
					children: "APR"
				}),
				/* @__PURE__ */ E("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "MAG" : "MAY"
				}),
				/* @__PURE__ */ E("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "GIU" : "JUN"
				}),
				/* @__PURE__ */ E("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "LUG" : "JUL"
				}),
				/* @__PURE__ */ E("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "AGO" : "AUG"
				}),
				/* @__PURE__ */ E("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "SET" : "SEP"
				}),
				/* @__PURE__ */ E("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "OTT" : "OCT"
				}),
				/* @__PURE__ */ E("th", {
					style: { color: "#FFFFFF" },
					children: "NOV"
				}),
				/* @__PURE__ */ E("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "DIC" : "DEC"
				}),
				/* @__PURE__ */ E("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "TOT ENTRATE" : "TOT REVENUE"
				})
			] })] }), /* @__PURE__ */ D("tr", { children: [
				/* @__PURE__ */ E("td", {
					style: {
						color: "#FFFFFF",
						fontWeight: "bold"
					},
					children: n.nome
				}),
				/* @__PURE__ */ D("td", {
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
				/* @__PURE__ */ D("td", {
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
				/* @__PURE__ */ D("td", {
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
				/* @__PURE__ */ D("td", {
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
				/* @__PURE__ */ D("td", {
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
				/* @__PURE__ */ D("td", {
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
				/* @__PURE__ */ D("td", {
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
				/* @__PURE__ */ D("td", {
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
				/* @__PURE__ */ D("td", {
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
				/* @__PURE__ */ D("td", {
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
				/* @__PURE__ */ D("td", {
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
				/* @__PURE__ */ D("td", {
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
				/* @__PURE__ */ D("td", {
					style: {
						color: $(bn(n), 1, "entrata"),
						fontWeight: "bold"
					},
					children: [
						"x ",
						xn(n),
						" = ",
						parseFloat(bn(n)).toFixed(2) + " €"
					]
				})
			] })] }, s)) })]
		}) })]
	});
}
function jn({ usciteItems: e, lingua: t, etichettaIta: n, etichettaEng: r }) {
	return /* @__PURE__ */ D(O, {
		style: {
			display: "inline-block",
			backgroundColor: "rgba(0, 0, 0, 0.5)",
			borderRadius: "50px",
			paddingLeft: "50px",
			paddingRight: "50px",
			paddingBottom: "50px",
			overflowX: "auto"
		},
		children: [/* @__PURE__ */ E(O.Body, { children: /* @__PURE__ */ E("center", { children: /* @__PURE__ */ E(O.Title, {
			style: { color: "#FFFFFF" },
			children: t === "italiano" ? n : r
		}) }) }), /* @__PURE__ */ E("center", { children: /* @__PURE__ */ D(k, {
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
				/* @__PURE__ */ E("thead", { children: /* @__PURE__ */ D("tr", { children: [
					/* @__PURE__ */ E("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "ANNO" : "YEAR"
					}),
					/* @__PURE__ */ E("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "GEN" : "JAN"
					}),
					/* @__PURE__ */ E("th", {
						style: { color: "#FFFFFF" },
						children: "FEB"
					}),
					/* @__PURE__ */ E("th", {
						style: { color: "#FFFFFF" },
						children: "MAR"
					}),
					/* @__PURE__ */ E("th", {
						style: { color: "#FFFFFF" },
						children: "APR"
					}),
					/* @__PURE__ */ E("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "MAG" : "MAY"
					}),
					/* @__PURE__ */ E("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "GIU" : "JUN"
					}),
					/* @__PURE__ */ E("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "LUG" : "JUL"
					}),
					/* @__PURE__ */ E("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "AGO" : "AUG"
					}),
					/* @__PURE__ */ E("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "SET" : "SEP"
					}),
					/* @__PURE__ */ E("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "OTT" : "OCT"
					}),
					/* @__PURE__ */ E("th", {
						style: { color: "#FFFFFF" },
						children: "NOV"
					}),
					/* @__PURE__ */ E("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "DIC" : "DEC"
					}),
					/* @__PURE__ */ E("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "TOT USCITE" : "TOT EXIT"
					})
				] }) }),
				/* @__PURE__ */ E("tbody", { children: e.map((e, t) => t > 1 && /* @__PURE__ */ E("tr", { children: Object.values(e).map((e, t) => /* @__PURE__ */ E("td", {
					style: {
						color: $(-e, t, "uscita"),
						fontWeight: t === 0 ? "bold" : null
					},
					children: t > 0 ? parseFloat(-e).toFixed(2) + " €" : e
				}, t)) }, t)) }),
				/* @__PURE__ */ E("tbody", { children: /* @__PURE__ */ E("tr", { children: Object.values(e[0]).map((e, t) => /* @__PURE__ */ E("td", {
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
function Mn({ entrate: e, uscite: t, lingua: n }) {
	return /* @__PURE__ */ D(O, {
		style: {
			display: "inline-block",
			backgroundColor: "rgba(0, 0, 0, 0.5)",
			borderRadius: "50px",
			paddingLeft: "50px",
			paddingRight: "50px",
			paddingBottom: "50px",
			overflowX: "auto"
		},
		children: [/* @__PURE__ */ E(O.Body, { children: /* @__PURE__ */ E("center", { children: /* @__PURE__ */ E(O.Title, {
			style: { color: "#FFFFFF" },
			children: n === "italiano" ? "Ricavi" : "Revenues"
		}) }) }), /* @__PURE__ */ E("center", { children: /* @__PURE__ */ D(k, {
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
			children: [/* @__PURE__ */ E("thead", { children: /* @__PURE__ */ D("tr", { children: [
				/* @__PURE__ */ E("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "ANNO" : "YEAR"
				}),
				/* @__PURE__ */ E("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "GEN" : "JAN"
				}),
				/* @__PURE__ */ E("th", {
					style: { color: "#FFFFFF" },
					children: "FEB"
				}),
				/* @__PURE__ */ E("th", {
					style: { color: "#FFFFFF" },
					children: "MAR"
				}),
				/* @__PURE__ */ E("th", {
					style: { color: "#FFFFFF" },
					children: "APR"
				}),
				/* @__PURE__ */ E("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "MAG" : "MAY"
				}),
				/* @__PURE__ */ E("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "GIU" : "JUN"
				}),
				/* @__PURE__ */ E("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "LUG" : "JUL"
				}),
				/* @__PURE__ */ E("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "AGO" : "AUG"
				}),
				/* @__PURE__ */ E("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "SET" : "SEP"
				}),
				/* @__PURE__ */ E("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "OTT" : "OCT"
				}),
				/* @__PURE__ */ E("th", {
					style: { color: "#FFFFFF" },
					children: "NOV"
				}),
				/* @__PURE__ */ E("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "DIC" : "DEC"
				}),
				/* @__PURE__ */ E("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "TOT RICAVI" : "TOT EARNINGS"
				})
			] }) }), /* @__PURE__ */ D("tbody", { children: [e.map((e, n) => n > 1 && /* @__PURE__ */ D("tr", { children: [/* @__PURE__ */ E("td", {
				style: { fontWeight: "bold" },
				children: e.Anno
			}), t[n] && /* @__PURE__ */ D(T, { children: [
				/* @__PURE__ */ D("td", {
					style: { color: $(e.gen - t[n].gen) },
					children: [parseFloat(e.gen - t[n].gen).toFixed(2), " €"]
				}),
				/* @__PURE__ */ D("td", {
					style: { color: $(e.feb - t[n].feb) },
					children: [parseFloat(e.feb - t[n].feb).toFixed(2), " €"]
				}),
				/* @__PURE__ */ D("td", {
					style: { color: $(e.mar - t[n].mar) },
					children: [parseFloat(e.mar - t[n].mar).toFixed(2), " €"]
				}),
				/* @__PURE__ */ D("td", {
					style: { color: $(e.apr - t[n].apr) },
					children: [parseFloat(e.apr - t[n].apr).toFixed(2), " €"]
				}),
				/* @__PURE__ */ D("td", {
					style: { color: $(e.mag - t[n].mag) },
					children: [parseFloat(e.mag - t[n].mag).toFixed(2), " €"]
				}),
				/* @__PURE__ */ D("td", {
					style: { color: $(e.giu - t[n].giu) },
					children: [parseFloat(e.giu - t[n].giu).toFixed(2), " €"]
				}),
				/* @__PURE__ */ D("td", {
					style: { color: $(e.lug - t[n].lug) },
					children: [parseFloat(e.lug - t[n].lug).toFixed(2), " €"]
				}),
				/* @__PURE__ */ D("td", {
					style: { color: $(e.ago - t[n].ago) },
					children: [parseFloat(e.ago - t[n].ago).toFixed(2), " €"]
				}),
				/* @__PURE__ */ D("td", {
					style: { color: $(e.set - t[n].set) },
					children: [parseFloat(e.set - t[n].set).toFixed(2), " €"]
				}),
				/* @__PURE__ */ D("td", {
					style: { color: $(e.ott - t[n].ott) },
					children: [parseFloat(e.ott - t[n].ott).toFixed(2), " €"]
				}),
				/* @__PURE__ */ D("td", {
					style: { color: $(e.nov - t[n].nov) },
					children: [parseFloat(e.nov - t[n].nov).toFixed(2), " €"]
				}),
				/* @__PURE__ */ D("td", {
					style: { color: $(e.dic - t[n].dic) },
					children: [parseFloat(e.dic - t[n].dic).toFixed(2), " €"]
				}),
				/* @__PURE__ */ D("td", {
					style: { color: $(e.totale_anno - t[n].totale_anno) },
					children: [parseFloat(e.totale_anno - t[n].totale_anno).toFixed(2), " €"]
				})
			] })] }, n)), /* @__PURE__ */ D("tr", { children: [
				/* @__PURE__ */ E("td", {
					style: { fontWeight: "bold" },
					children: e[0].Anno
				}),
				/* @__PURE__ */ D("td", {
					style: { color: $(e[0].gen - t[0].gen, 1) },
					children: [parseFloat(e[0].gen - t[0].gen).toFixed(2), " €"]
				}),
				/* @__PURE__ */ D("td", {
					style: { color: $(e[0].feb - t[0].feb) },
					children: [parseFloat(e[0].feb - t[0].feb).toFixed(2), " €"]
				}),
				/* @__PURE__ */ D("td", {
					style: { color: $(e[0].mar - t[0].mar) },
					children: [parseFloat(e[0].mar - t[0].mar).toFixed(2), " €"]
				}),
				/* @__PURE__ */ D("td", {
					style: { color: $(e[0].apr - t[0].apr) },
					children: [parseFloat(e[0].apr - t[0].apr).toFixed(2), " €"]
				}),
				/* @__PURE__ */ D("td", {
					style: { color: $(e[0].mag - t[0].mag) },
					children: [parseFloat(e[0].mag - t[0].mag).toFixed(2), " €"]
				}),
				/* @__PURE__ */ D("td", {
					style: { color: $(e[0].giu - t[0].giu) },
					children: [parseFloat(e[0].giu - t[0].giu).toFixed(2), " €"]
				}),
				/* @__PURE__ */ D("td", {
					style: { color: $(e[0].lug - t[0].lug) },
					children: [parseFloat(e[0].lug - t[0].lug).toFixed(2), " €"]
				}),
				/* @__PURE__ */ D("td", {
					style: { color: $(e[0].ago - t[0].ago) },
					children: [parseFloat(e[0].ago - t[0].ago).toFixed(2), " €"]
				}),
				/* @__PURE__ */ D("td", {
					style: { color: $(e[0].set - t[0].set) },
					children: [parseFloat(e[0].set - t[0].set).toFixed(2), " €"]
				}),
				/* @__PURE__ */ D("td", {
					style: { color: $(e[0].ott - t[0].ott) },
					children: [parseFloat(e[0].ott - t[0].ott).toFixed(2), " €"]
				}),
				/* @__PURE__ */ D("td", {
					style: { color: $(e[0].nov - t[0].nov) },
					children: [parseFloat(e[0].nov - t[0].nov).toFixed(2), " €"]
				}),
				/* @__PURE__ */ D("td", {
					style: { color: $(e[0].dic - t[0].dic) },
					children: [parseFloat(e[0].dic - t[0].dic).toFixed(2), " €"]
				}),
				/* @__PURE__ */ D("td", {
					style: { color: $(e[0].totale_anno - t[0].totale_anno) },
					children: [parseFloat(e[0].totale_anno - t[0].totale_anno).toFixed(2), " €"]
				})
			] }, 0)] })]
		}) })]
	});
}
function Nn({ totaleItems: e }) {
	return /* @__PURE__ */ D(Q.StyledCard, { children: [/* @__PURE__ */ E(Q.StyledCardHeader, { children: "Informations" }), /* @__PURE__ */ E(Q.SlideContainer, { children: e && /* @__PURE__ */ E(Q.StyledInputBlock, {
		rows: 1,
		name: "totale_items",
		id: "totale_items",
		type: "text",
		value: e || "Errore!!",
		readOnly: !0
	}) })] });
}
function Pn({ datiRicerca: e, setDatiRicerca: t, handleInputChange: n, eseguiRicerca: r, lingua: a }) {
	return /* @__PURE__ */ D(Q.StyledCard, { children: [
		/* @__PURE__ */ E(Q.StyledCardHeader, { children: a === "italiano" ? "Ricerca entrate e uscite" : "Searching for inputs and outputs" }),
		/* @__PURE__ */ D(Q.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: [/* @__PURE__ */ E(Q.StyledInputModifica, {
				rows: 1,
				name: "primo_anno",
				id: "primo_anno",
				type: "number",
				step: 1,
				value: e.primo_anno,
				placeholder: "Primo anno",
				onChange: (e) => n(e, t),
				onContextMenu: (e) => handleRightClick(e, "Primo anno")
			}), /* @__PURE__ */ D(Q.StyledSelectModifica, {
				name: "ultimo_anno",
				id: "ultimo_anno",
				value: e.ultimo_anno,
				onChange: (e) => n(e, t),
				onContextMenu: (e) => handleRightClick(e, "Ultimo anno"),
				children: [
					/* @__PURE__ */ E("option", {
						value: parseInt(e.primo_anno) + 1,
						children: parseInt(e.primo_anno) + 1
					}),
					/* @__PURE__ */ E("option", {
						value: parseInt(e.primo_anno) + 2,
						children: parseInt(e.primo_anno) + 2
					}),
					/* @__PURE__ */ E("option", {
						value: parseInt(e.primo_anno) + 3,
						children: parseInt(e.primo_anno) + 3
					}),
					/* @__PURE__ */ E("option", {
						value: parseInt(e.primo_anno) + 4,
						children: parseInt(e.primo_anno) + 4
					}),
					/* @__PURE__ */ E("option", {
						value: parseInt(e.primo_anno) + 5,
						children: parseInt(e.primo_anno) + 5
					})
				]
			})]
		}),
		/* @__PURE__ */ E(z, {
			eseguiRicerca: (e) => r(e),
			vistaItem: "card",
			StyledComponents: Q
		})
	] });
}
//#endregion
//#region src/Items.jsx
var Fn = ({ tipoItem: e, items: t, setItems: n, operazioneModifica: r, operazioneElimina: a, campi: o, handleBlurItem: s, tipoForm: c, vistaItem: l }) => {
	let u = l === "card" ? wn : Ft, d = () => /* @__PURE__ */ E(T, { children: t.map((c, l) => /* @__PURE__ */ E(u, {
		item: c,
		campi: c ? o(c, null, null, null) : [],
		indici: [...Array(o(c, null, null, null).label.length).keys()],
		operazioneModifica: r,
		operazioneElimina: a,
		items: t,
		setItems: n,
		tipoItem: e,
		handleBlurItem: s
	}, l)) });
	return /* @__PURE__ */ D(T, { children: [c === "search" && t.length === 0 && /* @__PURE__ */ E("div", {
		className: "contenitore-1",
		children: "Nessun elemento trovato."
	}), t.length > 0 && /* @__PURE__ */ E(T, { children: l === "card" ? /* @__PURE__ */ E("div", {
		className: "contenitore-3",
		children: /* @__PURE__ */ E(d, {})
	}) : /* @__PURE__ */ E(d, {}) })] });
}, In = ({ componenti: t, elementi: r, vistaItem: a, vistaForm: o }) => {
	let [s, c] = n("search"), l = o === "form" ? Je : o === "card" ? Sn : Nt, u = o === "form" ? Ye : o === "card" ? Cn : Pt, d = o === "form" ? Qe : o === "card" ? Tn : It;
	return /* @__PURE__ */ D(T, { children: [
		/* @__PURE__ */ E(Ke, {
			elementi: r,
			tipoForm: s,
			setTipoForm: c,
			StyledComponents: P
		}),
		/* @__PURE__ */ E("br", {}),
		" ",
		/* @__PURE__ */ E("br", {}),
		" ",
		/* @__PURE__ */ E("br", {}),
		" ",
		/* @__PURE__ */ E("br", {}),
		r.map((n, r) => /* @__PURE__ */ D(e, { children: [
			n === "insert" && s === "insert" && /* @__PURE__ */ D(T, { children: [
				/* @__PURE__ */ E(l, {
					campi: t.campiNuovoItem,
					indici: t.indiciNuovoItem,
					eseguiSalvataggio: t.handleInsert
				}),
				/* @__PURE__ */ E("br", {}),
				" ",
				/* @__PURE__ */ E("br", {}),
				" ",
				/* @__PURE__ */ E("br", {}),
				" ",
				/* @__PURE__ */ E("br", {})
			] }),
			n === "search" && s === "search" && /* @__PURE__ */ D(T, { children: [
				/* @__PURE__ */ E(u, {
					campi: t.campiRicercaItems,
					indici: t.indiciRicercaItems,
					handleSearch: t.handleSearch
				}),
				/* @__PURE__ */ E("br", {}),
				" ",
				/* @__PURE__ */ E("br", {}),
				" ",
				/* @__PURE__ */ E("br", {}),
				" ",
				/* @__PURE__ */ E("br", {})
			] }),
			n === "file" && s === "file" && /* @__PURE__ */ D(T, { children: [
				/* @__PURE__ */ E(d, {
					campi: t.campiFile,
					indici: t.indiciFile,
					ottieniFileRangePDF: t.handleSearchRangeFilePDF,
					ottieniFileRangeExcel: t.handleSearchRangeFileExcel,
					eliminaItemsRange: t.handleDeleteRangeFile
				}),
				/* @__PURE__ */ E("br", {}),
				" ",
				/* @__PURE__ */ E("br", {}),
				" ",
				/* @__PURE__ */ E("br", {}),
				" ",
				/* @__PURE__ */ E("br", {})
			] })
		] }, r)),
		s !== "file" && /* @__PURE__ */ D(T, { children: [
			/* @__PURE__ */ E(Fn, {
				tipoItem: t.tipoItem,
				items: t.items,
				setItems: t.setItems,
				operazioneModifica: t.operazioneModifica,
				operazioneElimina: t.operazioneElimina,
				campi: t.campiItemEsistente,
				handleBlurItem: t.handleBlurItem,
				tipoForm: s,
				vistaItem: a
			}),
			/* @__PURE__ */ E("br", {}),
			" ",
			/* @__PURE__ */ E("br", {}),
			" ",
			/* @__PURE__ */ E("br", {}),
			" ",
			/* @__PURE__ */ E("br", {}),
			t.visualizzazioneInformazioni === !0 && t.items.length > 0 && /* @__PURE__ */ D(T, { children: [
				/* @__PURE__ */ E("center", { children: /* @__PURE__ */ E(Nn, { totaleItems: t.totaleItems }) }),
				/* @__PURE__ */ E("br", {}),
				" ",
				/* @__PURE__ */ E("br", {}),
				" ",
				/* @__PURE__ */ E("br", {}),
				" ",
				/* @__PURE__ */ E("br", {})
			] }),
			/* @__PURE__ */ E(We, {
				selectedIdsModifica: t.selectedIdsModifica,
				selectedIdsEliminazione: t.selectedIdsEliminazione,
				handleEdit: t.handleEdit,
				handleDelete: t.handleDelete
			}),
			/* @__PURE__ */ E("br", {}),
			" ",
			/* @__PURE__ */ E("br", {}),
			" ",
			/* @__PURE__ */ E("br", {}),
			" ",
			/* @__PURE__ */ E("br", {})
		] })
	] });
};
//#endregion
export { Ke as CambioTipoForm, qe as CambioTipoForm2, kn as CardEntrateItems, An as CardEntrateItemsByName, Pn as CardEntrateUscite, Tn as CardFileItems, Nn as CardInformazioni, wn as CardItemEsistente, En as CardLogin, Sn as CardNuovoItem, Dn as CardProfilo, Mn as CardRicavi, Cn as CardRicercaItems, jn as CardUsciteItems, On as CardWidget, $e as FormEntrateUscite, Qe as FormFileItems, Xe as FormLogin, Je as FormNuovoItem, Ze as FormProfilo, Ye as FormRicercaItems, In as PaginaWeb, zt as RowEntrateUscite, It as RowFileItems, Ft as RowItemEsistente, Lt as RowLogin, Nt as RowNuovoItem, Rt as RowProfilo, Pt as RowRicercaItems };
