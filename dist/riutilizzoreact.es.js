import { Fragment as e, useRef as t, useState as n } from "react";
import r from "styled-components";
import i from "react-bootstrap/Card";
import a from "react-bootstrap/ListGroup";
import o from "react-bootstrap/esm/Row";
import s from "react-bootstrap/esm/Col";
import { ChevronDown as c, ChevronLeft as l, ChevronRight as u, ChevronUp as d, Download as f, Euro as p, Eye as m, EyeClosed as h, LogIn as g, Pencil as _, Save as v, Search as y, Trash2 as b, X as x } from "lucide-react";
import { FontAwesomeIcon as S } from "@fortawesome/react-fontawesome";
import { faFile as C, faFileExcel as ee, faFilePdf as te } from "@fortawesome/free-solid-svg-icons";
import { Fragment as w, jsx as T, jsxs as E } from "react/jsx-runtime";
import { Card as D, Col as ne, Row as re, Table as O } from "react-bootstrap";
var ie = r(i)`
  background-color: #111111;
  overflow: hidden;
  border: 5px solid #000000;
  border-radius: 40px;
  margin-left: 30%;
  margin-right: 30%;

  color: white;
  text-align: center;
`, ae = r(i.Header)`
  color: #ffffff;
  background-color: #000000;
  border: 5px solid #000000;
  min-height: 70px;
`, oe = r(a.Item)`
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  min-height: 70px;
`, se = r.div`
  overflow: hidden;
  transition: max-height 1.5s ease-out;
`, ce = r(o)`
  display: flex;
  flex-wrap: wrap;
  padding-left: 3%;
  padding-right: 3%;
`, le = r(s)`
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
`, k = r.textarea`
  width: 100%;
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  min-height: 70px;
  margin-bottom: 20px;
`, de = r(k)`
  background-color: #000000;
`, fe = r(k)`
  background-color: #0050EF;
`, pe = r(k)`
  background-color: #500000;
`, me = r.input`
  width: 100%;
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  min-height: 70px;
  margin-bottom: 20px;
`, he = r(me)`
  background-color: #000000;
`, ge = r(me)`
  background-color: #0050EF;
`, _e = r(me)`
  background-color: #500000;
`, A = "\n  color: #FFFFFF;\n  cursor: pointer;\n  transition: 0.5s all ease-out;\n", j = `
  ${A}
  &:hover {
    color: #0050EF;
  }
`, ve = `
  ${A}
  &:hover {
    color: #500000;
  }
`, ye = r(v)`
  ${j}
`, be = r(v)`
  ${A}
`, xe = r(v)`
  ${A}
  color: #0050EF;
`, Se = r(h)`
  ${A}
  transition: 0.5s all ease-out;
`, Ce = r(m)`
  ${A}
  transition: 0.5s all ease-out;
  color: #0050EF;
`, we = r(y)`
  ${j}
`, Te = r(y)`
  ${A}
`, Ee = r(y)`
  ${A}
  color: #0050EF;
`, De = r(p)`
  color: #FFFFFF;
  transition: 0.5s all ease-out;
`, Oe = r(d)`
  ${j}
`, ke = r(c)`
  ${j}
`, Ae = r(g)`
  ${j}
`, je = r(S)`
  color: #FFFFFF;
`, Me = r(S)`
  ${A}
`, Ne = r(S)`
  ${A}
  color: #0050EF;
`, Pe = r(f)`
  ${j}
`;
r(x)`
  ${ve}
`;
var Fe = r(b)`
  ${ve}
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
`, Ie = r(N)`
  background-color: #111111;
`, Le = r(N)`
  background-color: #0050EF;
`, Re = r(N)`
  background-color: #500000;
`;
r.option`
  background-color: #0050EF;
  &:hover {
    background-color: #0050EF;
  }
`;
var ze = r.span`
  color: #FF0000;
  padding: 10px;
`, P = {
	StyledListGroupItem: oe,
	StyledRow: ce,
	StyledCol: le,
	StyledSaveNotSelected: ye,
	grandezzaIcona: 50,
	StyledSearchNotSelected: we,
	StyledArrowTopNotSelected: Oe,
	StyledArrowBottomNotSelected: ke,
	StyledLoginNotSelected: Ae,
	StyledPencilNotSelected: r(_)`
  ${A}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,
	StyledLabel: ue,
	StyledInputBlock: he,
	StyledInputModifica: ge,
	StyledInputElimina: _e,
	StyledTextAreaBlock: de,
	StyledTextAreaModifica: fe,
	StyledTextAreaElimina: pe,
	StyledForm: ie,
	StyledHeader: ae,
	SlideContainer: se,
	StyledSpanErrore: ze,
	StyledSelectBlock: Ie,
	StyledSelectModifica: Le,
	StyledSelectElimina: Re,
	StyledEyeClosedNotSelected: Se,
	StyledEyeOpenNotSelected: Ce,
	StyledEuroNotSelected: De,
	StyledFileIconNotSelected: je,
	StyledDownloadNotSelected: Pe,
	StyledTrashNotSelected: Fe,
	StyledSearchNotSelected2: Te,
	StyledSaveNotSelected2: be,
	StyledSearchSelected2: Ee,
	StyledSaveSelected2: xe,
	StyledFileIconNotSelected2: Me,
	StyledFileIconSelected2: Ne
};
//#endregion
//#region src/Tags.js
function Be(e, t) {
	return e === 0 || e === 2 ? t.StyledPencilNotSelected : e === 1 ? t.StyledPencilSelected : _;
}
function Ve(e, t) {
	return e === 0 || e === 1 ? t.StyledTrashNotSelected : e === 2 ? t.StyledTrashSelected : b;
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
	return t === "card" || t === "form" ? /* @__PURE__ */ T(n.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "2%",
			paddingBottom: "2%"
		},
		children: /* @__PURE__ */ T(n.StyledRow, { children: /* @__PURE__ */ T(n.StyledCol, { children: /* @__PURE__ */ T(n.StyledSaveNotSelected, {
			className: "salvaItemButton",
			size: n.grandezzaIcona,
			onClick: e
		}) }) })
	}) : /* @__PURE__ */ T(n.StyledColOperazioni, { children: /* @__PURE__ */ T(n.StyledSaveNotSelected, {
		className: "center salvaItemButton",
		size: n.grandezzaIcona,
		onClick: e
	}) });
}
function R({ handleSearch: e, vistaItem: t, StyledComponents: n }) {
	return t === "card" || t === "form" ? /* @__PURE__ */ T(n.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "2%",
			paddingBottom: "2%"
		},
		children: /* @__PURE__ */ T(n.StyledSearchNotSelected, {
			className: "ricercaItemsButton",
			size: n.grandezzaIcona,
			onClick: e
		})
	}) : /* @__PURE__ */ T(n.StyledColOperazioni, { children: /* @__PURE__ */ T("div", {
		style: { width: "100%" },
		children: /* @__PURE__ */ T(n.StyledSearchNotSelected, {
			className: "center ricercaItemsButton",
			size: n.grandezzaIcona,
			onClick: e
		})
	}) });
}
function z({ eseguiRicerca: e, vistaItem: t, StyledComponents: n }) {
	return t === "card" || t === "form" ? /* @__PURE__ */ T(n.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "2%",
			paddingBottom: "2%"
		},
		children: /* @__PURE__ */ T(n.StyledSearchNotSelected, {
			className: "ricercaEntrateUsciteButton",
			size: n.grandezzaIcona,
			onClick: e
		})
	}) : /* @__PURE__ */ T(n.StyledColOperazioni, { children: /* @__PURE__ */ T("div", {
		style: { width: "100%" },
		children: /* @__PURE__ */ T(n.StyledSearchNotSelected, {
			className: "ricercaEntrateUsciteButton",
			size: n.grandezzaIcona,
			onClick: e
		})
	}) });
}
function B({ eseguiLogin: e, vistaItem: t, StyledComponents: n }) {
	return t === "card" || t === "form" ? /* @__PURE__ */ T(n.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "3%",
			paddingBottom: "3%"
		},
		children: /* @__PURE__ */ T(n.StyledLoginNotSelected, {
			className: "loginButton",
			size: n.grandezzaIcona,
			onClick: e
		})
	}) : /* @__PURE__ */ T(n.StyledColOperazioni, { children: /* @__PURE__ */ T(n.StyledLoginNotSelected, {
		className: "center loginButton",
		size: n.grandezzaIcona,
		onClick: e
	}) });
}
function V({ eseguiModificaProfilo: e, vistaItem: t, StyledComponents: n }) {
	let r = t === "form" ? n.StyledPencilNotSelected : n.StyledPencilNotSelected2;
	return t === "card" || t === "form" ? /* @__PURE__ */ T(n.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "2%",
			paddingBottom: "2%"
		},
		children: /* @__PURE__ */ T(r, {
			className: "modificaProfiloButton",
			size: n.grandezzaIcona,
			onClick: e
		})
	}) : /* @__PURE__ */ T(n.StyledColOperazioni, { children: /* @__PURE__ */ T(n.StyledPencilNotSelectedModificaProfilo, {
		className: "center modificaProfiloButton",
		size: n.grandezzaIcona,
		onClick: e
	}) });
}
function H({ ottieniFileRangePDF: e, ottieniFileRangeExcel: t, eliminaItemsRange: n, vistaItem: r, StyledComponents: i }) {
	return r === "card" || r === "form" ? /* @__PURE__ */ E(i.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "3%"
		},
		children: [
			/* @__PURE__ */ E("div", { children: [/* @__PURE__ */ T(i.StyledFileIconNotSelected, {
				icon: te,
				size: "2xl",
				style: { marginRight: "50%" }
			}), /* @__PURE__ */ T(i.StyledFileIconNotSelected, {
				icon: ee,
				size: "2xl"
			})] }),
			/* @__PURE__ */ T("br", {}),
			/* @__PURE__ */ E("div", { children: [/* @__PURE__ */ T(i.StyledDownloadNotSelected, {
				size: i.grandezzaIcona,
				style: { marginRight: "50%" },
				onClick: e
			}), /* @__PURE__ */ T(i.StyledDownloadNotSelected, {
				size: i.grandezzaIcona,
				onClick: t
			})] }),
			/* @__PURE__ */ T("br", {}),
			/* @__PURE__ */ T("div", { children: /* @__PURE__ */ T(i.StyledTrashNotSelected, {
				size: i.grandezzaIcona,
				onClick: n
			}) }),
			/* @__PURE__ */ T("br", {})
		]
	}) : /* @__PURE__ */ E(w, { children: [
		/* @__PURE__ */ T(i.StyledColOperazioni, { children: /* @__PURE__ */ E("div", {
			style: { width: "100%" },
			children: [/* @__PURE__ */ T(i.StyledFileIconNotSelected, {
				icon: te,
				className: "left",
				style: { marginRight: "50%" },
				size: "2xl"
			}), /* @__PURE__ */ T(i.StyledDownloadNotSelected, {
				size: i.grandezzaIcona,
				className: "rigth",
				onClick: e
			})]
		}) }),
		/* @__PURE__ */ T(i.StyledColOperazioni, { children: /* @__PURE__ */ E("div", {
			style: { width: "100%" },
			children: [/* @__PURE__ */ T(i.StyledFileIconNotSelected, {
				icon: ee,
				className: "left",
				style: { marginRight: "50%" },
				size: "2xl"
			}), /* @__PURE__ */ T(i.StyledDownloadNotSelected, {
				size: i.grandezzaIcona,
				className: "rigth",
				onClick: t
			})]
		}) }),
		/* @__PURE__ */ T(i.StyledColOperazioni, { children: /* @__PURE__ */ T("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ T(i.StyledTrashNotSelected2, {
				size: i.grandezzaIcona,
				className: "center",
				onClick: n
			})
		}) })
	] });
}
function He({ operazioneModifica: e, operazioneElimina: t, item: n, vistaItem: r, StyledComponents: i }) {
	let a = Ve(n.tipo_selezione, i), o = Be(n.tipo_selezione, i);
	return r === "card" || r === "form" ? /* @__PURE__ */ E(i.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000"
		},
		children: [e && /* @__PURE__ */ T(o, {
			className: "modificaItemButton",
			size: i.grandezzaIcona,
			onClick: () => e(n),
			style: { marginRight: "50%" }
		}), t && /* @__PURE__ */ T(a, {
			className: "eliminaItemButton",
			size: i.grandezzaIcona,
			onClick: () => t(n)
		})]
	}) : /* @__PURE__ */ T(i.StyledColOperazioni, { children: /* @__PURE__ */ E("div", {
		style: { width: "100%" },
		children: [e && /* @__PURE__ */ T(o, {
			className: "left modificaItemButton",
			size: i.grandezzaIcona,
			onClick: () => e(n),
			style: { marginRight: "50%" }
		}), t && /* @__PURE__ */ T(a, {
			className: "rigth eliminaItemButton",
			size: i.grandezzaIcona,
			onClick: () => t(n)
		})]
	}) });
}
var Ue = ({ selectedIdsModifica: e, selectedIdsEliminazione: t, handleEdit: n, handleDelete: r }) => /* @__PURE__ */ T(w, { children: /* @__PURE__ */ T("div", {
	className: "contenitore-2",
	children: /* @__PURE__ */ E(o, { children: [e.length > 0 && /* @__PURE__ */ T(s, { children: /* @__PURE__ */ T("button", {
		className: "bottone-blu-non-selezionato",
		onClick: n,
		children: "Modifica"
	}) }), t.length > 0 && /* @__PURE__ */ T(s, { children: /* @__PURE__ */ T("button", {
		className: "bottone-rosso-non-selezionato",
		onClick: r,
		children: "Elimina"
	}) })] })
}) });
function We({ elementi: e, tipoForm: t, setTipoForm: n, StyledComponents: r }) {
	let i = (e) => {
		n(e);
	};
	return /* @__PURE__ */ E(r.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "20px",
			paddingBottom: "20px"
		},
		children: [
			e.includes("insert") && t === "insert" && /* @__PURE__ */ E(w, { children: [
				e.includes("search") && /* @__PURE__ */ T(r.StyledSearchNotSelected2, {
					size: r.grandezzaIcona,
					style: { marginRight: "50px" },
					onClick: () => i("search")
				}),
				/* @__PURE__ */ T(r.StyledSaveSelected2, {
					size: r.grandezzaIcona,
					style: { marginRight: "50px" },
					onClick: () => i("insert")
				}),
				e.includes("file") && /* @__PURE__ */ T(r.StyledFileIconNotSelected2, {
					icon: C,
					size: "2xl",
					onClick: () => i("file")
				})
			] }),
			e.includes("search") && t === "search" && /* @__PURE__ */ E(w, { children: [
				/* @__PURE__ */ T(r.StyledSearchSelected2, {
					size: r.grandezzaIcona,
					style: { marginRight: "50px" },
					onClick: () => i("search")
				}),
				e.includes("insert") && /* @__PURE__ */ T(r.StyledSaveNotSelected2, {
					size: r.grandezzaIcona,
					style: { marginRight: "50px" },
					onClick: () => i("insert")
				}),
				e.includes("file") && /* @__PURE__ */ T(r.StyledFileIconNotSelected2, {
					icon: C,
					size: "2xl",
					onClick: () => i("file")
				})
			] }),
			e.includes("file") && t === "file" && /* @__PURE__ */ E(w, { children: [
				e.includes("search") && /* @__PURE__ */ T(r.StyledSearchNotSelected2, {
					size: r.grandezzaIcona,
					style: { marginRight: "50px" },
					onClick: () => i("search")
				}),
				e.includes("insert") && /* @__PURE__ */ T(r.StyledSaveNotSelected2, {
					size: r.grandezzaIcona,
					style: { marginRight: "50px" },
					onClick: () => i("insert")
				}),
				/* @__PURE__ */ T(r.StyledFileIconNotSelected2, {
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
function Ge({ elementi: e, tipoForm: t, setTipoForm: n, StyledComponents: r }) {
	return /* @__PURE__ */ T(r.StyledForm, { children: /* @__PURE__ */ T(We, {
		elementi: e,
		tipoForm: t,
		setTipoForm: n,
		StyledComponents: r
	}) });
}
function Ke({ elementi: e, tipoForm: t, setTipoForm: n, StyledComponents: r }) {
	return /* @__PURE__ */ T(r.StyledForm, { children: /* @__PURE__ */ T(We, {
		elementi: e,
		tipoForm: t,
		setTipoForm: n,
		StyledComponents: r
	}) });
}
function qe({ campi: t, indici: n, eseguiSalvataggio: r }) {
	return /* @__PURE__ */ E(P.StyledForm, { children: [
		/* @__PURE__ */ T(P.StyledHeader, { children: t.header }),
		/* @__PURE__ */ E(P.SlideContainer, {
			style: {
				maxHeight: "2000px",
				overflowY: "auto"
			},
			children: [
				n.map((n) => {
					let r = t.type[n] ? F(1, !0, P) : I(1, !0, P);
					return /* @__PURE__ */ E(e, { children: [
						/* @__PURE__ */ T(P.StyledLabel, {
							htmlFor: t.name[n],
							children: t.label[n]
						}),
						t.name[n] === "prezzo" ? /* @__PURE__ */ T(P.StyledRow, { children: /* @__PURE__ */ E(w, { children: [
							/* @__PURE__ */ T(r, {
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
							["prezzo", "totale"].includes(t.name[n]) && /* @__PURE__ */ T(P.StyledEuroNotSelected, {
								style: {
									maxWidth: "5%",
									marginTop: "13px"
								},
								size: P.grandezzaIcona,
								onClick: null
							}),
							t.options[n]
						] }) }) : /* @__PURE__ */ E(w, { children: [
							/* @__PURE__ */ T(r, {
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
							["prezzo", "totale"].includes(t.name[n]) && /* @__PURE__ */ T(P.StyledEuroNotSelected, {
								style: {
									maxWidth: "5%",
									marginTop: "13px"
								},
								size: P.grandezzaIcona,
								onClick: null
							}),
							t.options[n]
						] }),
						t.errore[n] !== "" && /* @__PURE__ */ T(P.StyledSpanErrore, { children: t.errore[n] })
					] }, n);
				}),
				/* @__PURE__ */ T("br", {}),
				" ",
				/* @__PURE__ */ T("br", {})
			]
		}),
		/* @__PURE__ */ T(L, {
			eseguiSalvataggio: r,
			vistaItem: "form",
			StyledComponents: P
		})
	] });
}
function Je({ campi: t, indici: r, handleSearch: i }) {
	let [a, o] = n(!0), [s, c] = n(!0);
	return F(1, !0, P), I(1, !0, P), /* @__PURE__ */ E(P.StyledForm, { children: [
		/* @__PURE__ */ T(P.StyledHeader, { children: t.header }),
		/* @__PURE__ */ E(P.SlideContainer, {
			style: {
				maxHeight: "2000px",
				overflowY: "auto"
			},
			children: [
				r.map((n) => {
					let r = t.type[n] ? F(1, !0, P) : I(1, !0, P);
					return /* @__PURE__ */ E(e, { children: [/* @__PURE__ */ T(P.StyledLabel, {
						htmlFor: t.name[n],
						children: t.label[n]
					}), /* @__PURE__ */ T(r, {
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
				/* @__PURE__ */ T("br", {}),
				" ",
				/* @__PURE__ */ T("br", {})
			]
		}),
		/* @__PURE__ */ T(R, {
			setIsVisible: o,
			arrowUp: s,
			setArrowUp: c,
			handleSearch: i,
			vistaItem: "form",
			StyledComponents: P
		})
	] });
}
function Ye({ campi: t, indici: r, eseguiLogin: i }) {
	let [a, o] = n("password"), s = (e) => {
		e.preventDefault(), o(a === "text" ? "password" : "text");
	};
	return /* @__PURE__ */ E(P.StyledForm, { children: [
		/* @__PURE__ */ T(P.StyledHeader, { children: t.header }),
		/* @__PURE__ */ E(P.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: [
				r.map((n) => {
					let r = t.type[n] ? F(1, !0, P) : I(1, !0, P), i = a === "password" ? P.StyledEyeClosedNotSelected : P.StyledEyeOpenNotSelected;
					return /* @__PURE__ */ E(e, { children: [
						/* @__PURE__ */ T(P.StyledLabel, {
							htmlFor: t.name[n],
							children: t.label[n]
						}),
						/* @__PURE__ */ E(P.StyledRow, { children: [/* @__PURE__ */ T(r, {
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
						}), t.name[n] === "password" && /* @__PURE__ */ T(i, {
							style: {
								maxWidth: "5%",
								marginTop: "13px"
							},
							size: P.grandezzaIcona,
							onClick: s
						})] }),
						t.options[n],
						t.errore[n] && /* @__PURE__ */ T(P.StyledSpanErrore, { children: t.errore[n] })
					] }, n);
				}),
				/* @__PURE__ */ T("br", {}),
				" ",
				/* @__PURE__ */ T("br", {})
			]
		}),
		/* @__PURE__ */ T(B, {
			eseguiLogin: i,
			vistaItem: "form",
			StyledComponents: P
		})
	] });
}
function Xe({ campi: t, indici: r, eseguiModificaProfilo: i }) {
	let [a, o] = n("password"), [s, c] = n("password"), [l, u] = n("password"), d = (e, t) => {
		e.preventDefault(), t === "password_attuale" ? o(a === "text" ? "password" : "text") : t === "nuova_password" ? c(s === "text" ? "password" : "text") : t === "conferma_nuova_password" && u(l === "text" ? "password" : "text");
	};
	return /* @__PURE__ */ E(P.StyledForm, { children: [
		/* @__PURE__ */ T(P.StyledHeader, { children: t.header }),
		/* @__PURE__ */ E(P.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: [
				r.map((n) => {
					let r = t.type[n] ? F(1, !0, P) : I(1, !0, P), i = t.name[n] === "password_attuale" && a === "password" || t.name[n] === "nuova_password" && s === "password" || t.name[n] === "conferma_nuova_password" && l === "password" ? P.StyledEyeClosedNotSelected : P.StyledEyeOpenNotSelected;
					return /* @__PURE__ */ E(e, { children: [
						/* @__PURE__ */ T(P.StyledLabel, {
							htmlFor: t.name[n],
							children: t.label[n]
						}),
						/* @__PURE__ */ E(P.StyledRow, { children: [/* @__PURE__ */ T(r, {
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
						}), t.name[n].includes("password") && /* @__PURE__ */ T(i, {
							style: {
								maxWidth: "5%",
								marginTop: "13px"
							},
							size: P.grandezzaIcona,
							onClick: (e) => d(e, t.name[n])
						})] }),
						t.options[n],
						t.errore[n] && /* @__PURE__ */ T(P.StyledSpanErrore, { children: t.errore[n] })
					] }, n);
				}),
				/* @__PURE__ */ T("br", {}),
				" ",
				/* @__PURE__ */ T("br", {})
			]
		}),
		/* @__PURE__ */ T(V, {
			eseguiModificaProfilo: i,
			vistaItem: "form",
			StyledComponents: P
		})
	] });
}
function Ze({ campi: t, indici: r, ottieniFileRangePDF: i, ottieniFileRangeExcel: a, eliminaItemsRange: o }) {
	let [s, c] = n(!0), [l, u] = n(!0), d = s ? "2000px" : "0px";
	return F(1, !0, P), I(1, !0, P), /* @__PURE__ */ E(P.StyledForm, { children: [
		/* @__PURE__ */ T(P.StyledHeader, { children: t.header }),
		/* @__PURE__ */ E(P.SlideContainer, {
			style: { maxHeight: `${d}` },
			children: [
				r.map((n) => {
					let r = t.type[n] ? F(1, !0, P) : I(1, !0, P);
					return /* @__PURE__ */ E(e, { children: [/* @__PURE__ */ T(P.StyledLabel, {
						htmlFor: t.name[n],
						children: t.label[n]
					}), /* @__PURE__ */ T(r, {
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
				/* @__PURE__ */ T("br", {}),
				" ",
				/* @__PURE__ */ T("br", {})
			]
		}),
		/* @__PURE__ */ T(H, {
			ottieniFileRangePDF: i,
			ottieniFileRangeExcel: a,
			eliminaItemsRange: o,
			vistaItem: "form",
			StyledComponents: P
		})
	] });
}
function Qe({ datiRicerca: e, setDatiRicerca: t, handleInputChange: n, eseguiRicerca: r, lingua: i }) {
	return /* @__PURE__ */ E(P.StyledForm, { children: [
		/* @__PURE__ */ T(P.StyledHeader, { children: i === "italiano" ? "Ricerca entrate e uscite" : "Searching for inputs and outputs" }),
		/* @__PURE__ */ E(P.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: [
				/* @__PURE__ */ T(P.StyledLabel, {
					htmlFor: "primo_anno",
					children: i === "italiano" ? "Primo anno" : "First year"
				}),
				/* @__PURE__ */ T(P.StyledInputModifica, {
					rows: 1,
					name: "primo_anno",
					id: "primo_anno",
					type: "number",
					step: 1,
					value: e.primo_anno,
					placeholder: i === "italiano" ? "Primo anno" : "First year",
					onChange: (e) => n(e, t)
				}),
				/* @__PURE__ */ T(P.StyledLabel, {
					htmlFor: "ultimo_anno",
					children: i === "italiano" ? "Ultimo anno" : "Last year"
				}),
				/* @__PURE__ */ E(P.StyledSelectModifica, {
					name: "ultimo_anno",
					id: "ultimo_anno",
					value: e.ultimo_anno,
					onChange: (e) => n(e, t),
					children: [
						/* @__PURE__ */ T("option", {
							value: parseInt(e.primo_anno) + 1,
							children: parseInt(e.primo_anno) + 1
						}),
						/* @__PURE__ */ T("option", {
							value: parseInt(e.primo_anno) + 2,
							children: parseInt(e.primo_anno) + 2
						}),
						/* @__PURE__ */ T("option", {
							value: parseInt(e.primo_anno) + 3,
							children: parseInt(e.primo_anno) + 3
						}),
						/* @__PURE__ */ T("option", {
							value: parseInt(e.primo_anno) + 4,
							children: parseInt(e.primo_anno) + 4
						}),
						/* @__PURE__ */ T("option", {
							value: parseInt(e.primo_anno) + 5,
							children: parseInt(e.primo_anno) + 5
						})
					]
				}),
				/* @__PURE__ */ T("br", {}),
				" ",
				/* @__PURE__ */ T("br", {})
			]
		}),
		/* @__PURE__ */ T(z, {
			eseguiRicerca: (e) => r(e),
			vistaItem: "form",
			StyledComponents: P
		})
	] });
}
var $e = r(re)`
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
var et = r(U)`
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
var W = "\n  flex: 1;\n  display: flex;\n  align-items: center; /* Centro verticale */\n  justify-content: center; /* Centro orizzontale */\n  width: 100%;\n  height: 100%;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  color: inherit;\n  padding: 0; \n  margin: 0;\n  text-align: center; /* Centro orizzontale del testo */\n  overflow: hidden; /* Nasconde l'overflow */\n  resize: vertical;\n  border-radius: 40px;\n  min-height: 50px;\n  border: 5px solid #000000; \n  color: #FFFFFF;\n  padding: auto;\n", tt = r.textarea`
  ${W}
`, nt = r(tt)`
  background-color: #111111;
`, rt = r(tt)`
  background-color: #0050EF;
`, it = r(tt)`
  background-color: #500000;
`, G = r.input`
  ${W}
`, at = r(G)`
  background-color: #111111;
`, ot = r(G)`
  background-color: #0050EF;
`, st = r(G)`
  background-color: #500000;
`, ct = r.button`
  ${W}
`, lt = "\n  margin-left: 10%;\n  margin-right: 10%;\n  border: 5px solid #000000;\n  background-color: #000000;\n  cursor: pointer;  \n  transition: 0.5s all ease-out;\n";
r(ct)`
  ${lt}
  &:hover {
    background-color: #0050EF;
    color: #FFFFFF;
  }
`, r(ct)`
  ${lt}
  &:hover {
    background-color: #500000;
    color: #FFFFFF;
  }
`;
var K = "\n  color: #FFFFFF;\n  cursor: pointer;\n", ut = r(v)`
  ${K}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, dt = r(h)`
  ${K}
  transition: 0.5s all ease-out;
`, ft = r(m)`
  ${K}
  transition: 0.5s all ease-out;
  color: #0050EF;
`, pt = r(y)`
  ${K}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, mt = r(p)`
  color: #FFFFFF;
  transition: 0.5s all ease-out;
`, ht = r(l)`
  ${K}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, gt = r(u)`
  ${K}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, _t = r(g)`
  ${K}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, vt = r(_)`
  ${K}
`, yt = r(_)`
  ${K}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, bt = r(_)`
  color: #0050EF;
  cursor: pointer;
`, xt = r(b)`
  ${K}
`, St = r(b)`
  color: #500000;
  cursor: pointer;
`, Ct = r(S)`
  color: #FFFFFF;
`, wt = r(S)`
  ${K}
  color: #0050EF;
`, Tt = r(f)`
  ${K}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`;
r(x)`
  ${K}
  transition: 0.5s all ease-out;
  &:hover {
    color: #500000;
  }
`;
var Et = r(b)`
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
`, Dt = r(q)`
  background-color: #111111;
`, Ot = r(q)`
  background-color: #0050EF;
`, kt = r(q)`
  background-color: #500000;
`;
r.option`
  background-color: #0050EF;
  &:hover {
    background-color: #0050EF;
  }
`;
var J = {
	StyledPencilNotSelected: vt,
	StyledPencilSelected: bt,
	grandezzaIcona: 50,
	StyledTrashNotSelected: xt,
	StyledTrashSelected: St,
	StyledColOperazioni: et,
	StyledSaveNotSelected: ut,
	StyledSearchNotSelected: pt,
	StyledArrowLeftNotSelected: ht,
	StyledArrowRightNotSelected: gt,
	StyledFileIconNotSelected: Ct,
	StyledDownloadNotSelected: Tt,
	StyledTrashNotSelected2: Et,
	StyledLoginNotSelected: _t,
	StyledPencilNotSelectedModificaProfilo: yt,
	StyledInputBlock: at,
	StyledInputModifica: ot,
	StyledInputElimina: st,
	StyledTextAreaBlock: nt,
	StyledTextAreaModifica: rt,
	StyledTextAreaElimina: it,
	StyledRow: $e,
	StyledCol: U,
	StyledSpanErrore: r.span`
  color: #FF0000;
  border-radius: 40px;
  padding: 10px;
`,
	StyledSelectBlock: Dt,
	StyledSelectModifica: Ot,
	StyledSelectElimina: kt,
	StyledEyeClosedNotSelected: dt,
	StyledEyeOpenNotSelected: ft,
	StyledEuroNotSelected: mt,
	StyledFileIconSelected2: wt
}, At = (e, t, n) => {
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
}, jt = (e) => {
	["giorno_spesa", "giorno_lavoro"].includes(e.target.id) ? e.target.type = "date" : ["prezzo_servizio", "totale_spesa"].includes(e.target.id) && (e.target.value = e.target.value.substr(0, e.target.value.length - 2));
};
//#endregion
//#region src/row_item/RowItem.jsx
function Mt({ campi: t, indici: n, eseguiSalvataggio: r }) {
	F(1, !0, J), I(1, !0, J);
	let i = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ E(J.StyledRow, { children: [/* @__PURE__ */ T(L, {
		eseguiSalvataggio: r,
		vistaItem: "row",
		StyledComponents: J
	}), n.map((n) => {
		let r = t.type[n] ? F(1, !0, J) : I(1, !0, J);
		return /* @__PURE__ */ T(e, { children: /* @__PURE__ */ T(J.StyledCol, { children: /* @__PURE__ */ E("div", {
			style: { width: "100%" },
			children: [/* @__PURE__ */ E(J.StyledRow, { children: [
				/* @__PURE__ */ T(r, {
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
				["prezzo", "totale"].includes(t.name[n]) && /* @__PURE__ */ T(J.StyledEuroNotSelected, {
					style: {
						maxWidth: "10%",
						marginLeft: "-6px"
					},
					size: J.grandezzaIcona,
					onClick: null
				}),
				t.options[n]
			] }), t.errore[n] !== "" && /* @__PURE__ */ T(J.StyledSpanErrore, { children: t.errore[n] })]
		}) }) }, n);
	})] });
}
function Nt({ campi: t, indici: r, handleSearch: i }) {
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
	F(1, !0, J), I(1, !0, J);
	let l = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ E(J.StyledRow, { children: [/* @__PURE__ */ T(R, {
		visibilita: a,
		setVisibilita: o,
		arrowUp: s,
		setArrowUp: c,
		handleSearch: i,
		vistaItem: "row",
		StyledComponents: J
	}), r.map((n) => {
		let r = t.type[n] ? F(1, !0, J) : I(1, !0, J);
		return /* @__PURE__ */ T(e, { children: /* @__PURE__ */ T(J.StyledCol, { children: /* @__PURE__ */ T("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ T(J.StyledRow, { children: a[n] && /* @__PURE__ */ E(w, { children: [/* @__PURE__ */ T(r, {
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
			].includes(t.name[n]) && /* @__PURE__ */ T(J.StyledEuroNotSelected, {
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
function Pt({ item: t, campi: r, indici: i, operazioneModifica: a, operazioneElimina: o, handleBlurItem: s }) {
	let c = F(r.tipoSelezione, !1, J), [l, u] = n(() => i.reduce((e, t) => ({
		...e,
		[t]: r.value[t]
	}), {})), d = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ E(J.StyledRow, { children: [
		(a || o) && /* @__PURE__ */ T(He, {
			operazioneModifica: a,
			operazioneElimina: o,
			item: t,
			vistaItem: "row",
			StyledComponents: J
		}),
		/* @__PURE__ */ T(J.StyledCol, { children: /* @__PURE__ */ T("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ T(J.StyledRow, { children: /* @__PURE__ */ T(c, {
				rows: 1,
				name: "header",
				value: r.header,
				placeholder: r.header,
				readOnly: !0
			}) })
		}) }),
		i.map((n) => {
			let i = r.type[n] ? F(r.tipoSelezione, r.valoreModificabile[n], J) : I(r.tipoSelezione, r.valoreModificabile[n], J);
			return /* @__PURE__ */ T(e, { children: /* @__PURE__ */ T(J.StyledCol, { children: /* @__PURE__ */ E("div", {
				style: { width: "100%" },
				children: [/* @__PURE__ */ E(J.StyledRow, { children: [
					/* @__PURE__ */ T(i, {
						style: ["prezzo", "totale"].includes(r.name[n]) ? { maxWidth: "80%" } : null,
						rows: 1,
						name: r.name[n],
						id: r.id[n],
						type: r.type[n],
						step: r.step[n],
						value: l[n],
						placeholder: r.placeholder[n],
						onChange: (e) => At(e, n, u),
						onBlur: (e) => s(e, t),
						onClick: (e) => jt(e),
						readOnly: t.tipo_selezione !== 1,
						onContextMenu: (e) => d(e, r.placeholder[n])
					}),
					["prezzo", "totale"].includes(r.name[n]) && /* @__PURE__ */ T(J.StyledEuroNotSelected, {
						style: {
							maxWidth: "20%",
							marginLeft: "-6px"
						},
						size: J.grandezzaIcona
					}),
					r.options[n]
				] }), r.errore[n] && /* @__PURE__ */ T(J.StyledSpanErrore, { children: r.errore[n] })]
			}) }) }, n);
		})
	] });
}
function Ft({ campi: t, indici: n, ottieniFileRangePDF: r, ottieniFileRangeExcel: i, eliminaItemsRange: a }) {
	let o = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ E(J.StyledRow, { children: [/* @__PURE__ */ T(H, {
		ottieniFileRangePDF: r,
		ottieniFileRangeExcel: i,
		eliminaItemsRange: a,
		vistaItem: "row",
		StyledComponents: J
	}), n.map((n) => {
		let r = t.type[n] ? F(1, !0, J) : I(1, !0, J);
		return /* @__PURE__ */ T(e, { children: /* @__PURE__ */ T(J.StyledCol, { children: /* @__PURE__ */ T("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ T(J.StyledRow, { children: /* @__PURE__ */ T(r, {
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
function It({ campi: t, indici: r, eseguiLogin: i }) {
	let [a, o] = n("password"), s = (e) => {
		e.preventDefault(), o(a === "text" ? "password" : "text");
	}, c = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ E(J.StyledRow, { children: [/* @__PURE__ */ T(B, {
		eseguiLogin: i,
		vistaItem: "row",
		StyledComponents: J
	}), r.map((n) => {
		let r = t.type[n] ? F(1, !0, J) : I(1, !0, J), i = a === "password" ? J.StyledEyeClosedNotSelected : J.StyledEyeOpenNotSelected;
		return /* @__PURE__ */ T(e, { children: /* @__PURE__ */ T(J.StyledCol, { children: /* @__PURE__ */ E("div", {
			style: { width: "100%" },
			children: [
				/* @__PURE__ */ E(J.StyledRow, { children: [/* @__PURE__ */ T(r, {
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
				}), t.name[n] === "password" && /* @__PURE__ */ T(i, {
					style: {
						maxWidth: "20%",
						marginLeft: "-6px"
					},
					size: J.grandezzaIcona,
					onClick: s
				})] }),
				t.options[n],
				t.errore[n] && /* @__PURE__ */ T(J.StyledSpanErrore, { children: t.errore[n] })
			]
		}) }) }, n);
	})] });
}
function Lt({ campi: t, indici: r, eseguiModificaProfilo: i }) {
	let [a, o] = n("password"), [s, c] = n("password"), [l, u] = n("password"), d = (e, t) => {
		e.preventDefault(), t === "password_attuale" ? o(a === "text" ? "password" : "text") : t === "nuova_password" ? c(s === "text" ? "password" : "text") : t === "conferma_nuova_password" && u(l === "text" ? "password" : "text");
	};
	return /* @__PURE__ */ E(J.StyledRow, { children: [/* @__PURE__ */ T(V, {
		eseguiModificaProfilo: i,
		vistaItem: "row",
		StyledComponents: J
	}), r.map((n) => {
		let r = t.type[n] ? F(1, !0, J) : I(1, !0, J), i = t.name[n] === "password_attuale" && a === "password" || t.name[n] === "nuova_password" && s === "password" || t.name[n] === "conferma_nuova_password" && l === "password" ? J.StyledEyeClosedNotSelected : J.StyledEyeOpenNotSelected;
		return /* @__PURE__ */ T(e, { children: /* @__PURE__ */ T(J.StyledCol, { children: /* @__PURE__ */ E("div", {
			style: { width: "100%" },
			children: [
				/* @__PURE__ */ E(J.StyledRow, { children: [/* @__PURE__ */ T(r, {
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
				}), t.name[n].includes("password") && /* @__PURE__ */ T(i, {
					style: {
						maxWidth: "20%",
						marginLeft: "-6px"
					},
					size: J.grandezzaIcona,
					onClick: (e) => d(e, t.name[n])
				})] }),
				t.options[n],
				t.errore[n] && /* @__PURE__ */ T(J.StyledSpanErrore, { children: t.errore[n] })
			]
		}) }) }, n);
	})] });
}
function Rt({ datiRicerca: e, setDatiRicerca: t, handleInputChange: n, eseguiRicerca: r, lingua: i }) {
	return /* @__PURE__ */ E(J.StyledRow, { children: [
		/* @__PURE__ */ T(z, {
			eseguiRicerca: (e) => r(e),
			vistaItem: "row",
			StyledComponents: J
		}),
		/* @__PURE__ */ T(J.StyledCol, { children: /* @__PURE__ */ T("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ T(J.StyledRow, { children: /* @__PURE__ */ T(J.StyledInputBlock, {
				rows: 1,
				name: "header",
				value: i === "italiano" ? "Ricerca entrate e uscite" : "Searching for inputs and outputs",
				placeholder: i === "italiano" ? "Ricerca entrate e uscite" : "Searching for inputs and outputs",
				readOnly: !0
			}) })
		}) }),
		/* @__PURE__ */ T(J.StyledCol, { children: /* @__PURE__ */ T("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ T(J.StyledInputModifica, {
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
		/* @__PURE__ */ T(J.StyledCol, { children: /* @__PURE__ */ T("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ E(J.StyledSelectModifica, {
				name: "ultimo_anno",
				id: "ultimo_anno",
				onContextMenu: (e) => handleRightClick(e, "Ultimo anno"),
				value: e.ultimo_anno,
				onChange: (e) => n(e, t),
				children: [
					/* @__PURE__ */ T("option", {
						value: parseInt(e.primo_anno) + 1,
						children: parseInt(e.primo_anno) + 1
					}),
					/* @__PURE__ */ T("option", {
						value: parseInt(e.primo_anno) + 2,
						children: parseInt(e.primo_anno) + 2
					}),
					/* @__PURE__ */ T("option", {
						value: parseInt(e.primo_anno) + 3,
						children: parseInt(e.primo_anno) + 3
					}),
					/* @__PURE__ */ T("option", {
						value: parseInt(e.primo_anno) + 4,
						children: parseInt(e.primo_anno) + 4
					}),
					/* @__PURE__ */ T("option", {
						value: parseInt(e.primo_anno) + 5,
						children: parseInt(e.primo_anno) + 5
					})
				]
			})
		}) })
	] });
}
var zt = r(i)`
  width: 18rem;
  background-color: transparent;
  overflow: hidden;
  border-radius: 40px;
  color: white;
  text-align: center;
  padding: 0;
  border: transparent;
`, Bt = r(re)`
  display: flex;
  flex-wrap: wrap;
`, Vt = r(ne)`
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
`, Ht = r(i.Header)`
  color: #ffffff;
  background-color: #000000;
  border: 5px solid #000000;
  min-height: 70px;
`, Ut = r(a.Item)`
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  min-height: 70px;
`, Wt = r.div`
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
`, Gt = r(Y)`
  background-color: #111111;
`, Kt = r(Y)`
  background-color: #0050EF;
`, qt = r(Y)`
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
`, Jt = r(X)`
  background-color: #111111;
`, Yt = r(X)`
  background-color: #0050EF;
`, Xt = r(X)`
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
	StyledListGroupItem: Ut,
	StyledRow: Bt,
	StyledCol: Vt,
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
	StyledTextAreaBlock: Gt,
	StyledTextAreaModifica: Kt,
	StyledTextAreaElimina: qt,
	StyledCard: zt,
	StyledCardHeader: Ht,
	SlideContainer: Wt,
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
	return /* @__PURE__ */ T("center", { children: /* @__PURE__ */ E(Q.StyledCard, { children: [
		/* @__PURE__ */ T(Q.StyledCardHeader, { children: t.header }),
		/* @__PURE__ */ T(Q.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: n.map((n) => {
				let r = t.type[n] ? F(1, !0, Q) : I(1, !0, Q);
				return /* @__PURE__ */ E(e, { children: [/* @__PURE__ */ E(Q.StyledRow, { children: [/* @__PURE__ */ T(r, {
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
				}), t.options[n]] }), t.errore[n] !== "" && /* @__PURE__ */ T(Q.StyledSpanErrore, { children: t.errore[n] })] }, n);
			})
		}),
		/* @__PURE__ */ T(L, {
			eseguiSalvataggio: r,
			vistaItem: "card",
			StyledComponents: Q
		})
	] }) });
}
function Sn({ campi: t, indici: r, handleSearch: i }) {
	let [a, o] = n(!0), [s, c] = n(!0), l = a ? "2000px" : "0px", u = F(1, !0, Q), d = I(1, !0, Q), f = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ T("center", { children: /* @__PURE__ */ E(Q.StyledCard, { children: [
		/* @__PURE__ */ T(Q.StyledCardHeader, { children: t.header }),
		/* @__PURE__ */ T(Q.SlideContainer, {
			style: { maxHeight: `${l}` },
			children: r.map((n) => {
				let r = t.type[n] ? u : d;
				return /* @__PURE__ */ T(e, { children: /* @__PURE__ */ T(Q.StyledRow, { children: /* @__PURE__ */ T(r, {
					rows: 1,
					name: t.name[n],
					id: t.id[n],
					type: t.value[n],
					value: t.value[n] === " €" ? "" : t.value[n],
					placeholder: t.placeholder[n],
					onChange: t.onChange,
					onClick: t.onClick,
					onBlur: t.onBlur,
					onContextMenu: (e) => f(e, t.placeholder[n])
				}) }) }, n);
			})
		}),
		/* @__PURE__ */ T(R, {
			setIsVisible: o,
			arrowUp: s,
			setArrowUp: c,
			handleSearch: i,
			vistaItem: "card",
			StyledComponents: Q
		})
	] }) });
}
function Cn({ item: r, campi: i, indici: a, operazioneModifica: o, operazioneElimina: s, handleBlurItem: c }) {
	let l = t([]), [u, d] = n(() => a.reduce((e, t) => ({
		...e,
		[t]: i.value[t]
	}), {})), f = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ E(Q.StyledCard, { children: [
		/* @__PURE__ */ T(Q.StyledCardHeader, { children: i.header }),
		/* @__PURE__ */ T(Q.SlideContainer, { children: a.map((t) => {
			let n = i.type[t] ? F(i.tipoSelezione, i.valoreModificabile[t], Q) : I(i.tipoSelezione, i.valoreModificabile[t], Q);
			return /* @__PURE__ */ E(e, { children: [/* @__PURE__ */ E(Q.StyledRow, { children: [/* @__PURE__ */ T(n, {
				ref: (e) => l.current[t] = e,
				rows: 1,
				name: i.name[t],
				id: i.id[t],
				type: i.type[t],
				step: i.step[t],
				value: u[t],
				placeholder: i.placeholder[t],
				onChange: (e) => At(e, t, d),
				onBlur: (e) => c(e, r),
				onClick: (e) => jt(e),
				readOnly: r.tipo_selezione !== 1,
				onContextMenu: (e) => f(e, i.placeholder[t])
			}), i.options[t]] }), i.errore[t] && /* @__PURE__ */ T(Q.StyledSpanErrore, { children: i.errore[t] })] }, `input-${t}`);
		}) }),
		/* @__PURE__ */ T(He, {
			operazioneModifica: o,
			operazioneElimina: s,
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
	return /* @__PURE__ */ T("center", { children: /* @__PURE__ */ E(Q.StyledCard, { children: [
		/* @__PURE__ */ T(Q.StyledCardHeader, { children: t.header }),
		/* @__PURE__ */ T(Q.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: n.map((n) => /* @__PURE__ */ T(e, { children: /* @__PURE__ */ T(t.type[n] ? F(1, !0, Q) : I(1, !0, Q), {
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
		/* @__PURE__ */ T(H, {
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
	return /* @__PURE__ */ T("center", { children: /* @__PURE__ */ E(Q.StyledCard, { children: [
		/* @__PURE__ */ T(Q.StyledCardHeader, { children: t.header }),
		/* @__PURE__ */ T(Q.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: r.map((n) => {
				let r = t.type[n] ? F(1, !0, Q) : I(1, !0, Q), i = a === "password" ? Q.StyledEyeClosedNotSelected : Q.StyledEyeOpenNotSelected;
				return /* @__PURE__ */ E(e, { children: [
					/* @__PURE__ */ E(Q.StyledRow, { children: [/* @__PURE__ */ T(r, {
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
					}), t.name[n] === "password" && /* @__PURE__ */ T(i, {
						style: {
							maxWidth: "20%",
							marginLeft: "-6px",
							marginTop: "13px"
						},
						size: Q.grandezzaIcona,
						onClick: s
					})] }),
					t.options[n],
					t.errore[n] && /* @__PURE__ */ T(Q.StyledSpanErrore, { children: t.errore[n] })
				] }, n);
			})
		}),
		/* @__PURE__ */ T(B, {
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
	return /* @__PURE__ */ T("center", { children: /* @__PURE__ */ E(Q.StyledCard, { children: [
		/* @__PURE__ */ T(Q.StyledCardHeader, { children: t.header }),
		/* @__PURE__ */ T(Q.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: r.map((n) => {
				let r = t.type[n] ? F(1, !0, Q) : I(1, !0, Q), i = t.name[n] === "password_attuale" && a === "password" || t.name[n] === "nuova_password" && s === "password" || t.name[n] === "conferma_nuova_password" && l === "password" ? Q.StyledEyeClosedNotSelected : Q.StyledEyeOpenNotSelected;
				return /* @__PURE__ */ E(e, { children: [
					/* @__PURE__ */ E(Q.StyledRow, { children: [/* @__PURE__ */ T(r, {
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
					}), t.name[n].includes("password") && /* @__PURE__ */ T(i, {
						style: {
							maxWidth: "20%",
							marginLeft: "-6px",
							marginTop: "13px"
						},
						size: Q.grandezzaIcona,
						onClick: (e) => d(e, t.name[n])
					})] }),
					t.options[n],
					t.errore[n] && /* @__PURE__ */ T(Q.StyledSpanErrore, { children: t.errore[n] })
				] }, n);
			})
		}),
		/* @__PURE__ */ T(V, {
			eseguiModificaProfilo: i,
			vistaItem: "card",
			StyledComponents: Q
		})
	] }) });
}
function Dn({ nome: e, img: t, id: n, onClickWidget: r, backgroundColor: i }) {
	return /* @__PURE__ */ E(D, {
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
		children: [/* @__PURE__ */ T(D.Img, {
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
		}), /* @__PURE__ */ T(D.Body, { children: /* @__PURE__ */ T(D.Title, {
			style: {
				color: "#FFFFFF",
				textAlign: "center"
			},
			children: e
		}) })]
	});
}
function On({ entrateItems: e, lingua: t, etichettaIta: n, etichettaEng: r }) {
	return /* @__PURE__ */ E(D, {
		style: {
			display: "inline-block",
			backgroundColor: "rgba(0, 0, 0, 0.5)",
			borderRadius: "50px",
			paddingLeft: "50px",
			paddingRight: "50px",
			paddingBottom: "50px",
			overflowX: "auto"
		},
		children: [/* @__PURE__ */ T(D.Body, { children: /* @__PURE__ */ T("center", { children: /* @__PURE__ */ T(D.Title, {
			style: { color: "#FFFFFF" },
			children: t === "italiano" ? n : r
		}) }) }), /* @__PURE__ */ T("center", { children: /* @__PURE__ */ E(O, {
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
				/* @__PURE__ */ T("thead", { children: /* @__PURE__ */ E("tr", { children: [
					/* @__PURE__ */ T("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "ANNO" : "YEAR"
					}),
					/* @__PURE__ */ T("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "GEN" : "JAN"
					}),
					/* @__PURE__ */ T("th", {
						style: { color: "#FFFFFF" },
						children: "FEB"
					}),
					/* @__PURE__ */ T("th", {
						style: { color: "#FFFFFF" },
						children: "MAR"
					}),
					/* @__PURE__ */ T("th", {
						style: { color: "#FFFFFF" },
						children: "APR"
					}),
					/* @__PURE__ */ T("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "MAG" : "MAY"
					}),
					/* @__PURE__ */ T("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "GIU" : "JUN"
					}),
					/* @__PURE__ */ T("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "LUG" : "JUL"
					}),
					/* @__PURE__ */ T("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "AGO" : "AUG"
					}),
					/* @__PURE__ */ T("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "SET" : "SEP"
					}),
					/* @__PURE__ */ T("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "OTT" : "OCT"
					}),
					/* @__PURE__ */ T("th", {
						style: { color: "#FFFFFF" },
						children: "NOV"
					}),
					/* @__PURE__ */ T("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "DIC" : "DEC"
					}),
					/* @__PURE__ */ T("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "TOT ENTRATE" : "TOT REVENUE"
					})
				] }) }),
				/* @__PURE__ */ T("tbody", { children: e.map((e, t) => t > 1 && /* @__PURE__ */ T("tr", { children: Object.values(e).map((e, t) => /* @__PURE__ */ T("td", {
					style: {
						color: $(e, t, "entrata"),
						fontWeight: t === 0 ? "bold" : null
					},
					children: t > 0 ? parseFloat(e).toFixed(2) + " €" : e
				}, t)) }, t)) }),
				/* @__PURE__ */ T("tbody", { children: /* @__PURE__ */ T("tr", { children: Object.values(e[0]).map((e, t) => /* @__PURE__ */ T("td", {
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
	return /* @__PURE__ */ E(D, {
		style: {
			display: "inline-block",
			backgroundColor: "rgba(0, 0, 0, 0.5)",
			borderRadius: "50px",
			paddingLeft: "50px",
			paddingRight: "50px",
			paddingBottom: "50px",
			overflowX: "auto"
		},
		children: [/* @__PURE__ */ T(D.Body, { children: /* @__PURE__ */ T("center", { children: /* @__PURE__ */ T(D.Title, {
			style: { color: "#FFFFFF" },
			children: r === "italiano" ? o : s
		}) }) }), /* @__PURE__ */ T("center", { children: /* @__PURE__ */ E(O, {
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
			children: [/* @__PURE__ */ T("thead", {}), /* @__PURE__ */ T("tbody", { children: t.map((n, o) => /* @__PURE__ */ E(e, { children: [(o === 0 || t[o].anno !== t[o - 1].anno) && /* @__PURE__ */ E(w, { children: [/* @__PURE__ */ T("tr", { children: /* @__PURE__ */ E("th", {
				colSpan: 14,
				children: [
					r === "italiano" ? "ANNO" : "YEAR",
					" = ",
					n.anno
				]
			}) }), /* @__PURE__ */ E("tr", { children: [
				/* @__PURE__ */ T("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? i : a
				}),
				/* @__PURE__ */ T("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "GEN" : "JAN"
				}),
				/* @__PURE__ */ T("th", {
					style: { color: "#FFFFFF" },
					children: "FEB"
				}),
				/* @__PURE__ */ T("th", {
					style: { color: "#FFFFFF" },
					children: "MAR"
				}),
				/* @__PURE__ */ T("th", {
					style: { color: "#FFFFFF" },
					children: "APR"
				}),
				/* @__PURE__ */ T("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "MAG" : "MAY"
				}),
				/* @__PURE__ */ T("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "GIU" : "JUN"
				}),
				/* @__PURE__ */ T("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "LUG" : "JUL"
				}),
				/* @__PURE__ */ T("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "AGO" : "AUG"
				}),
				/* @__PURE__ */ T("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "SET" : "SEP"
				}),
				/* @__PURE__ */ T("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "OTT" : "OCT"
				}),
				/* @__PURE__ */ T("th", {
					style: { color: "#FFFFFF" },
					children: "NOV"
				}),
				/* @__PURE__ */ T("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "DIC" : "DEC"
				}),
				/* @__PURE__ */ T("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "TOT ENTRATE" : "TOT REVENUE"
				})
			] })] }), /* @__PURE__ */ E("tr", { children: [
				/* @__PURE__ */ T("td", {
					style: {
						color: "#FFFFFF",
						fontWeight: "bold"
					},
					children: n.nome
				}),
				/* @__PURE__ */ E("td", {
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
				/* @__PURE__ */ E("td", {
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
				/* @__PURE__ */ E("td", {
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
				/* @__PURE__ */ E("td", {
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
				/* @__PURE__ */ E("td", {
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
				/* @__PURE__ */ E("td", {
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
				/* @__PURE__ */ E("td", {
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
				/* @__PURE__ */ E("td", {
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
				/* @__PURE__ */ E("td", {
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
				/* @__PURE__ */ E("td", {
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
				/* @__PURE__ */ E("td", {
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
				/* @__PURE__ */ E("td", {
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
				/* @__PURE__ */ E("td", {
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
	return /* @__PURE__ */ E(D, {
		style: {
			display: "inline-block",
			backgroundColor: "rgba(0, 0, 0, 0.5)",
			borderRadius: "50px",
			paddingLeft: "50px",
			paddingRight: "50px",
			paddingBottom: "50px",
			overflowX: "auto"
		},
		children: [/* @__PURE__ */ T(D.Body, { children: /* @__PURE__ */ T("center", { children: /* @__PURE__ */ T(D.Title, {
			style: { color: "#FFFFFF" },
			children: t === "italiano" ? n : r
		}) }) }), /* @__PURE__ */ T("center", { children: /* @__PURE__ */ E(O, {
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
				/* @__PURE__ */ T("thead", { children: /* @__PURE__ */ E("tr", { children: [
					/* @__PURE__ */ T("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "ANNO" : "YEAR"
					}),
					/* @__PURE__ */ T("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "GEN" : "JAN"
					}),
					/* @__PURE__ */ T("th", {
						style: { color: "#FFFFFF" },
						children: "FEB"
					}),
					/* @__PURE__ */ T("th", {
						style: { color: "#FFFFFF" },
						children: "MAR"
					}),
					/* @__PURE__ */ T("th", {
						style: { color: "#FFFFFF" },
						children: "APR"
					}),
					/* @__PURE__ */ T("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "MAG" : "MAY"
					}),
					/* @__PURE__ */ T("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "GIU" : "JUN"
					}),
					/* @__PURE__ */ T("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "LUG" : "JUL"
					}),
					/* @__PURE__ */ T("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "AGO" : "AUG"
					}),
					/* @__PURE__ */ T("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "SET" : "SEP"
					}),
					/* @__PURE__ */ T("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "OTT" : "OCT"
					}),
					/* @__PURE__ */ T("th", {
						style: { color: "#FFFFFF" },
						children: "NOV"
					}),
					/* @__PURE__ */ T("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "DIC" : "DEC"
					}),
					/* @__PURE__ */ T("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "TOT USCITE" : "TOT EXIT"
					})
				] }) }),
				/* @__PURE__ */ T("tbody", { children: e.map((e, t) => t > 1 && /* @__PURE__ */ T("tr", { children: Object.values(e).map((e, t) => /* @__PURE__ */ T("td", {
					style: {
						color: $(-e, t, "uscita"),
						fontWeight: t === 0 ? "bold" : null
					},
					children: t > 0 ? parseFloat(-e).toFixed(2) + " €" : e
				}, t)) }, t)) }),
				/* @__PURE__ */ T("tbody", { children: /* @__PURE__ */ T("tr", { children: Object.values(e[0]).map((e, t) => /* @__PURE__ */ T("td", {
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
	return /* @__PURE__ */ E(D, {
		style: {
			display: "inline-block",
			backgroundColor: "rgba(0, 0, 0, 0.5)",
			borderRadius: "50px",
			paddingLeft: "50px",
			paddingRight: "50px",
			paddingBottom: "50px",
			overflowX: "auto"
		},
		children: [/* @__PURE__ */ T(D.Body, { children: /* @__PURE__ */ T("center", { children: /* @__PURE__ */ T(D.Title, {
			style: { color: "#FFFFFF" },
			children: n === "italiano" ? "Ricavi" : "Revenues"
		}) }) }), /* @__PURE__ */ T("center", { children: /* @__PURE__ */ E(O, {
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
			children: [/* @__PURE__ */ T("thead", { children: /* @__PURE__ */ E("tr", { children: [
				/* @__PURE__ */ T("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "ANNO" : "YEAR"
				}),
				/* @__PURE__ */ T("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "GEN" : "JAN"
				}),
				/* @__PURE__ */ T("th", {
					style: { color: "#FFFFFF" },
					children: "FEB"
				}),
				/* @__PURE__ */ T("th", {
					style: { color: "#FFFFFF" },
					children: "MAR"
				}),
				/* @__PURE__ */ T("th", {
					style: { color: "#FFFFFF" },
					children: "APR"
				}),
				/* @__PURE__ */ T("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "MAG" : "MAY"
				}),
				/* @__PURE__ */ T("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "GIU" : "JUN"
				}),
				/* @__PURE__ */ T("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "LUG" : "JUL"
				}),
				/* @__PURE__ */ T("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "AGO" : "AUG"
				}),
				/* @__PURE__ */ T("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "SET" : "SEP"
				}),
				/* @__PURE__ */ T("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "OTT" : "OCT"
				}),
				/* @__PURE__ */ T("th", {
					style: { color: "#FFFFFF" },
					children: "NOV"
				}),
				/* @__PURE__ */ T("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "DIC" : "DEC"
				}),
				/* @__PURE__ */ T("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "TOT RICAVI" : "TOT EARNINGS"
				})
			] }) }), /* @__PURE__ */ E("tbody", { children: [e.map((e, n) => n > 1 && /* @__PURE__ */ E("tr", { children: [/* @__PURE__ */ T("td", {
				style: { fontWeight: "bold" },
				children: e.Anno
			}), t[n] && /* @__PURE__ */ E(w, { children: [
				/* @__PURE__ */ E("td", {
					style: { color: $(e.gen - t[n].gen) },
					children: [parseFloat(e.gen - t[n].gen).toFixed(2), " €"]
				}),
				/* @__PURE__ */ E("td", {
					style: { color: $(e.feb - t[n].feb) },
					children: [parseFloat(e.feb - t[n].feb).toFixed(2), " €"]
				}),
				/* @__PURE__ */ E("td", {
					style: { color: $(e.mar - t[n].mar) },
					children: [parseFloat(e.mar - t[n].mar).toFixed(2), " €"]
				}),
				/* @__PURE__ */ E("td", {
					style: { color: $(e.apr - t[n].apr) },
					children: [parseFloat(e.apr - t[n].apr).toFixed(2), " €"]
				}),
				/* @__PURE__ */ E("td", {
					style: { color: $(e.mag - t[n].mag) },
					children: [parseFloat(e.mag - t[n].mag).toFixed(2), " €"]
				}),
				/* @__PURE__ */ E("td", {
					style: { color: $(e.giu - t[n].giu) },
					children: [parseFloat(e.giu - t[n].giu).toFixed(2), " €"]
				}),
				/* @__PURE__ */ E("td", {
					style: { color: $(e.lug - t[n].lug) },
					children: [parseFloat(e.lug - t[n].lug).toFixed(2), " €"]
				}),
				/* @__PURE__ */ E("td", {
					style: { color: $(e.ago - t[n].ago) },
					children: [parseFloat(e.ago - t[n].ago).toFixed(2), " €"]
				}),
				/* @__PURE__ */ E("td", {
					style: { color: $(e.set - t[n].set) },
					children: [parseFloat(e.set - t[n].set).toFixed(2), " €"]
				}),
				/* @__PURE__ */ E("td", {
					style: { color: $(e.ott - t[n].ott) },
					children: [parseFloat(e.ott - t[n].ott).toFixed(2), " €"]
				}),
				/* @__PURE__ */ E("td", {
					style: { color: $(e.nov - t[n].nov) },
					children: [parseFloat(e.nov - t[n].nov).toFixed(2), " €"]
				}),
				/* @__PURE__ */ E("td", {
					style: { color: $(e.dic - t[n].dic) },
					children: [parseFloat(e.dic - t[n].dic).toFixed(2), " €"]
				}),
				/* @__PURE__ */ E("td", {
					style: { color: $(e.totale_anno - t[n].totale_anno) },
					children: [parseFloat(e.totale_anno - t[n].totale_anno).toFixed(2), " €"]
				})
			] })] }, n)), /* @__PURE__ */ E("tr", { children: [
				/* @__PURE__ */ T("td", {
					style: { fontWeight: "bold" },
					children: e[0].Anno
				}),
				/* @__PURE__ */ E("td", {
					style: { color: $(e[0].gen - t[0].gen, 1) },
					children: [parseFloat(e[0].gen - t[0].gen).toFixed(2), " €"]
				}),
				/* @__PURE__ */ E("td", {
					style: { color: $(e[0].feb - t[0].feb) },
					children: [parseFloat(e[0].feb - t[0].feb).toFixed(2), " €"]
				}),
				/* @__PURE__ */ E("td", {
					style: { color: $(e[0].mar - t[0].mar) },
					children: [parseFloat(e[0].mar - t[0].mar).toFixed(2), " €"]
				}),
				/* @__PURE__ */ E("td", {
					style: { color: $(e[0].apr - t[0].apr) },
					children: [parseFloat(e[0].apr - t[0].apr).toFixed(2), " €"]
				}),
				/* @__PURE__ */ E("td", {
					style: { color: $(e[0].mag - t[0].mag) },
					children: [parseFloat(e[0].mag - t[0].mag).toFixed(2), " €"]
				}),
				/* @__PURE__ */ E("td", {
					style: { color: $(e[0].giu - t[0].giu) },
					children: [parseFloat(e[0].giu - t[0].giu).toFixed(2), " €"]
				}),
				/* @__PURE__ */ E("td", {
					style: { color: $(e[0].lug - t[0].lug) },
					children: [parseFloat(e[0].lug - t[0].lug).toFixed(2), " €"]
				}),
				/* @__PURE__ */ E("td", {
					style: { color: $(e[0].ago - t[0].ago) },
					children: [parseFloat(e[0].ago - t[0].ago).toFixed(2), " €"]
				}),
				/* @__PURE__ */ E("td", {
					style: { color: $(e[0].set - t[0].set) },
					children: [parseFloat(e[0].set - t[0].set).toFixed(2), " €"]
				}),
				/* @__PURE__ */ E("td", {
					style: { color: $(e[0].ott - t[0].ott) },
					children: [parseFloat(e[0].ott - t[0].ott).toFixed(2), " €"]
				}),
				/* @__PURE__ */ E("td", {
					style: { color: $(e[0].nov - t[0].nov) },
					children: [parseFloat(e[0].nov - t[0].nov).toFixed(2), " €"]
				}),
				/* @__PURE__ */ E("td", {
					style: { color: $(e[0].dic - t[0].dic) },
					children: [parseFloat(e[0].dic - t[0].dic).toFixed(2), " €"]
				}),
				/* @__PURE__ */ E("td", {
					style: { color: $(e[0].totale_anno - t[0].totale_anno) },
					children: [parseFloat(e[0].totale_anno - t[0].totale_anno).toFixed(2), " €"]
				})
			] }, 0)] })]
		}) })]
	});
}
function Mn({ totaleItems: e }) {
	return /* @__PURE__ */ E(Q.StyledCard, { children: [/* @__PURE__ */ T(Q.StyledCardHeader, { children: "Informations" }), /* @__PURE__ */ T(Q.SlideContainer, { children: e && /* @__PURE__ */ T(Q.StyledInputBlock, {
		rows: 1,
		name: "totale_items",
		id: "totale_items",
		type: "text",
		value: e ? e.toFixed(2) : "Errore!!",
		readOnly: !0
	}) })] });
}
function Nn({ datiRicerca: e, setDatiRicerca: t, handleInputChange: n, eseguiRicerca: r, lingua: i }) {
	return /* @__PURE__ */ E(Q.StyledCard, { children: [
		/* @__PURE__ */ T(Q.StyledCardHeader, { children: i === "italiano" ? "Ricerca entrate e uscite" : "Searching for inputs and outputs" }),
		/* @__PURE__ */ E(Q.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: [/* @__PURE__ */ T(Q.StyledInputModifica, {
				rows: 1,
				name: "primo_anno",
				id: "primo_anno",
				type: "number",
				step: 1,
				value: e.primo_anno,
				placeholder: "Primo anno",
				onChange: (e) => n(e, t),
				onContextMenu: (e) => handleRightClick(e, "Primo anno")
			}), /* @__PURE__ */ E(Q.StyledSelectModifica, {
				name: "ultimo_anno",
				id: "ultimo_anno",
				value: e.ultimo_anno,
				onChange: (e) => n(e, t),
				onContextMenu: (e) => handleRightClick(e, "Ultimo anno"),
				children: [
					/* @__PURE__ */ T("option", {
						value: parseInt(e.primo_anno) + 1,
						children: parseInt(e.primo_anno) + 1
					}),
					/* @__PURE__ */ T("option", {
						value: parseInt(e.primo_anno) + 2,
						children: parseInt(e.primo_anno) + 2
					}),
					/* @__PURE__ */ T("option", {
						value: parseInt(e.primo_anno) + 3,
						children: parseInt(e.primo_anno) + 3
					}),
					/* @__PURE__ */ T("option", {
						value: parseInt(e.primo_anno) + 4,
						children: parseInt(e.primo_anno) + 4
					}),
					/* @__PURE__ */ T("option", {
						value: parseInt(e.primo_anno) + 5,
						children: parseInt(e.primo_anno) + 5
					})
				]
			})]
		}),
		/* @__PURE__ */ T(z, {
			eseguiRicerca: (e) => r(e),
			vistaItem: "card",
			StyledComponents: Q
		})
	] });
}
//#endregion
//#region src/Items.jsx
var Pn = ({ tipoItem: e, items: t, setItems: n, operazioneModifica: r, operazioneElimina: i, campi: a, handleBlurItem: o, tipoForm: s, vistaItem: c }) => {
	let l = c === "card" ? Cn : Pt, u = () => /* @__PURE__ */ T(w, { children: t.map((s, c) => /* @__PURE__ */ T(l, {
		item: s,
		campi: s ? a(s, null, null, null) : [],
		indici: [...Array(a(s, null, null, null).label.length).keys()],
		operazioneModifica: r,
		operazioneElimina: i,
		items: t,
		setItems: n,
		tipoItem: e,
		handleBlurItem: o
	}, c)) });
	return /* @__PURE__ */ E(w, { children: [s === "search" && t.length === 0 && /* @__PURE__ */ T("div", {
		className: "contenitore-1",
		children: "Nessun elemento trovato."
	}), t.length > 0 && /* @__PURE__ */ T(w, { children: c === "card" ? /* @__PURE__ */ T("div", {
		className: "contenitore-3",
		children: /* @__PURE__ */ T(u, {})
	}) : /* @__PURE__ */ T(u, {}) })] });
}, Fn = ({ componenti: t, elementi: r, vistaItem: i, vistaForm: a }) => {
	let [o, s] = n("search"), c = a === "form" ? qe : a === "card" ? xn : Mt, l = a === "form" ? Je : a === "card" ? Sn : Nt, u = a === "form" ? Ze : a === "card" ? wn : Ft;
	return /* @__PURE__ */ E(w, { children: [
		/* @__PURE__ */ T(Ge, {
			elementi: r,
			tipoForm: o,
			setTipoForm: s,
			StyledComponents: P
		}),
		/* @__PURE__ */ T("br", {}),
		" ",
		/* @__PURE__ */ T("br", {}),
		" ",
		/* @__PURE__ */ T("br", {}),
		" ",
		/* @__PURE__ */ T("br", {}),
		r.map((n, r) => /* @__PURE__ */ E(e, { children: [
			n === "insert" && o === "insert" && /* @__PURE__ */ E(w, { children: [
				/* @__PURE__ */ T(c, {
					campi: t.campiNuovoItem,
					indici: t.indiciNuovoItem,
					eseguiSalvataggio: t.handleInsert
				}),
				/* @__PURE__ */ T("br", {}),
				" ",
				/* @__PURE__ */ T("br", {}),
				" ",
				/* @__PURE__ */ T("br", {}),
				" ",
				/* @__PURE__ */ T("br", {})
			] }),
			n === "search" && o === "search" && /* @__PURE__ */ E(w, { children: [
				/* @__PURE__ */ T(l, {
					campi: t.campiRicercaItems,
					indici: t.indiciRicercaItems,
					handleSearch: t.handleSearch
				}),
				/* @__PURE__ */ T("br", {}),
				" ",
				/* @__PURE__ */ T("br", {}),
				" ",
				/* @__PURE__ */ T("br", {}),
				" ",
				/* @__PURE__ */ T("br", {})
			] }),
			n === "file" && o === "file" && /* @__PURE__ */ E(w, { children: [
				/* @__PURE__ */ T(u, {
					campi: t.campiFile,
					indici: t.indiciFile,
					ottieniFileRangePDF: t.handleSearchRangeFilePDF,
					ottieniFileRangeExcel: t.handleSearchRangeFileExcel,
					eliminaItemsRange: t.handleDeleteRangeFile
				}),
				/* @__PURE__ */ T("br", {}),
				" ",
				/* @__PURE__ */ T("br", {}),
				" ",
				/* @__PURE__ */ T("br", {}),
				" ",
				/* @__PURE__ */ T("br", {})
			] })
		] }, r)),
		o !== "file" && /* @__PURE__ */ E(w, { children: [
			/* @__PURE__ */ T(Pn, {
				tipoItem: t.tipoItem,
				items: t.items,
				setItems: t.setItems,
				operazioneModifica: t.operazioneModifica,
				operazioneElimina: t.operazioneElimina,
				campi: t.campiItemEsistente,
				handleBlurItem: t.handleBlurItem,
				tipoForm: o,
				vistaItem: i
			}),
			/* @__PURE__ */ T("br", {}),
			" ",
			/* @__PURE__ */ T("br", {}),
			" ",
			/* @__PURE__ */ T("br", {}),
			" ",
			/* @__PURE__ */ T("br", {}),
			t.visualizzazioneInformazioni === !0 && t.items.length > 0 && /* @__PURE__ */ E(w, { children: [
				/* @__PURE__ */ T("center", { children: /* @__PURE__ */ T(Mn, { totaleItems: t.totaleItems }) }),
				/* @__PURE__ */ T("br", {}),
				" ",
				/* @__PURE__ */ T("br", {}),
				" ",
				/* @__PURE__ */ T("br", {}),
				" ",
				/* @__PURE__ */ T("br", {})
			] }),
			/* @__PURE__ */ T(Ue, {
				selectedIdsModifica: t.selectedIdsModifica,
				selectedIdsEliminazione: t.selectedIdsEliminazione,
				handleEdit: t.handleEdit,
				handleDelete: t.handleDelete
			}),
			/* @__PURE__ */ T("br", {}),
			" ",
			/* @__PURE__ */ T("br", {}),
			" ",
			/* @__PURE__ */ T("br", {}),
			" ",
			/* @__PURE__ */ T("br", {})
		] })
	] });
};
//#endregion
export { Ge as CambioTipoForm, Ke as CambioTipoForm2, On as CardEntrateItems, kn as CardEntrateItemsByName, Nn as CardEntrateUscite, wn as CardFileItems, Mn as CardInformazioni, Cn as CardItemEsistente, Tn as CardLogin, xn as CardNuovoItem, En as CardProfilo, jn as CardRicavi, Sn as CardRicercaItems, An as CardUsciteItems, Dn as CardWidget, Qe as FormEntrateUscite, Ze as FormFileItems, Ye as FormLogin, qe as FormNuovoItem, Xe as FormProfilo, Je as FormRicercaItems, Fn as PaginaWeb, Rt as RowEntrateUscite, Ft as RowFileItems, Pt as RowItemEsistente, It as RowLogin, Mt as RowNuovoItem, Lt as RowProfilo, Nt as RowRicercaItems };
