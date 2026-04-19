import { Fragment as e, useRef as t, useState as n } from "react";
import r from "styled-components";
import i from "react-bootstrap/Card";
import a from "react-bootstrap/ListGroup";
import o from "react-bootstrap/esm/Row";
import s from "react-bootstrap/esm/Col";
import { ChevronDown as c, ChevronLeft as l, ChevronRight as u, ChevronUp as d, Download as f, Euro as p, Eye as m, EyeClosed as h, LogIn as ee, Pencil as g, Save as _, Search as v, Trash2 as y, X as b } from "lucide-react";
import { FontAwesomeIcon as x } from "@fortawesome/react-fontawesome";
import { faFile as te, faFileExcel as ne, faFilePdf as re } from "@fortawesome/free-solid-svg-icons";
import { Fragment as S, jsx as C, jsxs as w } from "react/jsx-runtime";
import { Card as T, Table as E } from "react-bootstrap";
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
`, D = r.textarea`
  width: 100%;
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  min-height: 70px;
  margin-bottom: 20px;
`, de = r(D)`
  background-color: #000000;
`, fe = r(D)`
  background-color: #0050EF;
`, pe = r(D)`
  background-color: #500000;
`, O = r.input`
  width: 100%;
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  min-height: 70px;
  margin-bottom: 20px;
`, me = r(O)`
  background-color: #000000;
`, he = r(O)`
  background-color: #0050EF;
`, ge = r(O)`
  background-color: #500000;
`, k = "\n  color: #FFFFFF;\n  cursor: pointer;\n  transition: 0.5s all ease-out;\n", A = `
  ${k}
  &:hover {
    color: #0050EF;
  }
`, _e = `
  ${k}
  &:hover {
    color: #500000;
  }
`, ve = r(_)`
  ${A}
`, ye = r(_)`
  ${k}
`, be = r(_)`
  ${k}
  color: #0050EF;
`, xe = r(h)`
  ${k}
  transition: 0.5s all ease-out;
`, Se = r(m)`
  ${k}
  transition: 0.5s all ease-out;
  color: #0050EF;
`, Ce = r(v)`
  ${A}
`, we = r(v)`
  ${k}
`, Te = r(v)`
  ${k}
  color: #0050EF;
`, Ee = r(p)`
  color: #FFFFFF;
  transition: 0.5s all ease-out;
`, De = r(d)`
  ${A}
`, Oe = r(c)`
  ${A}
`, ke = r(ee)`
  ${A}
`, Ae = r(x)`
  color: #FFFFFF;
`, je = r(x)`
  ${k}
`, Me = r(x)`
  ${k}
  color: #0050EF;
`, Ne = r(f)`
  ${A}
`;
r(b)`
  ${_e}
`;
var Pe = r(y)`
  ${_e}
`, j = r.button`
  border-radius: 40px;
  border: 5px solid #000000;
  background-color: #000000;
  color: #FFFFFF;
  text-align: center;  
  padding: 2% 15%;
  cursor: pointer;
`;
r(j)`
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #0050EF;
    color: #FFFFFF;
  }
`, r(j)`
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #500000;
    color: #FFFFFF;
  }
`, r(j)`
  background-color: #0050EF;
  &:hover {
    background-color: #000000;
    color: #FFFFFF;
  }
`, r(j)`
  background-color: #500000;
  &:hover {
    background-color: #000000;
    color: #FFFFFF;
  }
`;
var M = r.select`
  width: 100%;
  min-height: 70px;
  background-color: #0050EF;
  border: 5px solid #000000;
  color: #FFFFFF;
  text-align: center;
`, Fe = r(M)`
  background-color: #111111;
`, Ie = r(M)`
  background-color: #0050EF;
`, Le = r(M)`
  background-color: #500000;
`;
r.option`
  background-color: #0050EF;
  &:hover {
    background-color: #0050EF;
  }
`;
var Re = r.span`
  color: #FF0000;
  padding: 10px;
`, N = {
	StyledListGroupItem: oe,
	StyledRow: ce,
	StyledCol: le,
	StyledSaveNotSelected: ve,
	grandezzaIcona: 50,
	StyledSearchNotSelected: Ce,
	StyledArrowTopNotSelected: De,
	StyledArrowBottomNotSelected: Oe,
	StyledLoginNotSelected: ke,
	StyledPencilNotSelected: r(g)`
  ${k}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,
	StyledLabel: ue,
	StyledInputBlock: me,
	StyledInputModifica: he,
	StyledInputElimina: ge,
	StyledTextAreaBlock: de,
	StyledTextAreaModifica: fe,
	StyledTextAreaElimina: pe,
	StyledForm: ie,
	StyledHeader: ae,
	SlideContainer: se,
	StyledSpanErrore: Re,
	StyledSelectBlock: Fe,
	StyledSelectModifica: Ie,
	StyledSelectElimina: Le,
	StyledEyeClosedNotSelected: xe,
	StyledEyeOpenNotSelected: Se,
	StyledEuroNotSelected: Ee,
	StyledFileIconNotSelected: Ae,
	StyledDownloadNotSelected: Ne,
	StyledTrashNotSelected: Pe,
	StyledSearchNotSelected2: we,
	StyledSaveNotSelected2: ye,
	StyledSearchSelected2: Te,
	StyledSaveSelected2: be,
	StyledFileIconNotSelected2: je,
	StyledFileIconSelected2: Me
};
//#endregion
//#region src/Tags.js
function ze(e, t) {
	return e === 0 || e === 2 ? t.StyledPencilNotSelected : e === 1 ? t.StyledPencilSelected : g;
}
function Be(e, t) {
	return e === 0 || e === 1 ? t.StyledTrashNotSelected : e === 2 ? t.StyledTrashSelected : y;
}
function P(e, t, n) {
	return t ? e !== 1 && e !== 2 ? n.StyledInputBlock : e === 1 ? n.StyledInputModifica : n.StyledInputElimina : e === 2 ? n.StyledInputElimina : n.StyledInputBlock;
}
function F(e, t, n) {
	return t ? e !== 1 && e !== 2 ? n.StyledTextAreaBlock : e === 1 ? n.StyledTextAreaModifica : n.StyledTextAreaElimina : e === 2 ? n.StyledTextAreaElimina : n.StyledTextAreaBlock;
}
//#endregion
//#region src/Operazioni.jsx
function I({ eseguiSalvataggio: e, vistaItem: t, StyledComponents: n }) {
	return t === "card" || t === "form" ? /* @__PURE__ */ C(n.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "2%",
			paddingBottom: "2%"
		},
		children: /* @__PURE__ */ C(n.StyledRow, { children: /* @__PURE__ */ C(n.StyledCol, { children: /* @__PURE__ */ C(n.StyledSaveNotSelected, {
			className: "salvaItemButton",
			size: n.grandezzaIcona,
			onClick: e
		}) }) })
	}) : /* @__PURE__ */ C(n.StyledColOperazioni, { children: /* @__PURE__ */ C(n.StyledSaveNotSelected, {
		className: "center salvaItemButton",
		size: n.grandezzaIcona,
		onClick: e
	}) });
}
function L({ handleSearch: e, vistaItem: t, StyledComponents: n }) {
	return t === "card" || t === "form" ? /* @__PURE__ */ C(n.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "2%",
			paddingBottom: "2%"
		},
		children: /* @__PURE__ */ C(n.StyledSearchNotSelected, {
			className: "ricercaItemsButton",
			size: n.grandezzaIcona,
			onClick: e
		})
	}) : /* @__PURE__ */ C(n.StyledColOperazioni, { children: /* @__PURE__ */ C("div", {
		style: { width: "100%" },
		children: /* @__PURE__ */ C(n.StyledSearchNotSelected, {
			className: "center ricercaItemsButton",
			size: n.grandezzaIcona,
			onClick: e
		})
	}) });
}
function R({ eseguiRicerca: e, vistaItem: t, StyledComponents: n }) {
	return t === "card" || t === "form" ? /* @__PURE__ */ C(n.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "2%",
			paddingBottom: "2%"
		},
		children: /* @__PURE__ */ C(n.StyledSearchNotSelected, {
			className: "ricercaEntrateUsciteButton",
			size: n.grandezzaIcona,
			onClick: e
		})
	}) : /* @__PURE__ */ C(n.StyledColOperazioni, { children: /* @__PURE__ */ C("div", {
		style: { width: "100%" },
		children: /* @__PURE__ */ C(n.StyledSearchNotSelected, {
			className: "ricercaEntrateUsciteButton",
			size: n.grandezzaIcona,
			onClick: e
		})
	}) });
}
function z({ eseguiLogin: e, vistaItem: t, StyledComponents: n }) {
	return t === "card" || t === "form" ? /* @__PURE__ */ C(n.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "3%",
			paddingBottom: "3%"
		},
		children: /* @__PURE__ */ C(n.StyledLoginNotSelected, {
			className: "loginButton",
			size: n.grandezzaIcona,
			onClick: e
		})
	}) : /* @__PURE__ */ C(n.StyledColOperazioni, { children: /* @__PURE__ */ C(n.StyledLoginNotSelected, {
		className: "center loginButton",
		size: n.grandezzaIcona,
		onClick: e
	}) });
}
function B({ eseguiModificaProfilo: e, vistaItem: t, StyledComponents: n }) {
	let r = t === "form" ? n.StyledPencilNotSelected : n.StyledPencilNotSelected2;
	return t === "card" || t === "form" ? /* @__PURE__ */ C(n.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "2%",
			paddingBottom: "2%"
		},
		children: /* @__PURE__ */ C(r, {
			className: "modificaProfiloButton",
			size: n.grandezzaIcona,
			onClick: e
		})
	}) : /* @__PURE__ */ C(n.StyledColOperazioni, { children: /* @__PURE__ */ C(n.StyledPencilNotSelectedModificaProfilo, {
		className: "center modificaProfiloButton",
		size: n.grandezzaIcona,
		onClick: e
	}) });
}
function V({ ottieniFileRangePDF: e, ottieniFileRangeExcel: t, eliminaItemsRange: n, vistaItem: r, StyledComponents: i }) {
	return r === "card" || r === "form" ? /* @__PURE__ */ w(i.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "3%"
		},
		children: [
			/* @__PURE__ */ w("div", { children: [/* @__PURE__ */ C(i.StyledFileIconNotSelected, {
				icon: re,
				size: "2xl",
				style: { marginRight: "50%" }
			}), /* @__PURE__ */ C(i.StyledFileIconNotSelected, {
				icon: ne,
				size: "2xl"
			})] }),
			/* @__PURE__ */ C("br", {}),
			/* @__PURE__ */ w("div", { children: [/* @__PURE__ */ C(i.StyledDownloadNotSelected, {
				size: i.grandezzaIcona,
				style: { marginRight: "50%" },
				onClick: e
			}), /* @__PURE__ */ C(i.StyledDownloadNotSelected, {
				size: i.grandezzaIcona,
				onClick: t
			})] }),
			/* @__PURE__ */ C("br", {}),
			/* @__PURE__ */ C("div", { children: /* @__PURE__ */ C(i.StyledTrashNotSelected, {
				size: i.grandezzaIcona,
				onClick: n
			}) }),
			/* @__PURE__ */ C("br", {})
		]
	}) : /* @__PURE__ */ w(S, { children: [
		/* @__PURE__ */ C(i.StyledColOperazioni, { children: /* @__PURE__ */ w("div", {
			style: { width: "100%" },
			children: [/* @__PURE__ */ C(i.StyledFileIconNotSelected, {
				icon: re,
				className: "left",
				style: { marginRight: "50%" },
				size: "2xl"
			}), /* @__PURE__ */ C(i.StyledDownloadNotSelected, {
				size: i.grandezzaIcona,
				className: "rigth",
				onClick: e
			})]
		}) }),
		/* @__PURE__ */ C(i.StyledColOperazioni, { children: /* @__PURE__ */ w("div", {
			style: { width: "100%" },
			children: [/* @__PURE__ */ C(i.StyledFileIconNotSelected, {
				icon: ne,
				className: "left",
				style: { marginRight: "50%" },
				size: "2xl"
			}), /* @__PURE__ */ C(i.StyledDownloadNotSelected, {
				size: i.grandezzaIcona,
				className: "rigth",
				onClick: t
			})]
		}) }),
		/* @__PURE__ */ C(i.StyledColOperazioni, { children: /* @__PURE__ */ C("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ C(i.StyledTrashNotSelected2, {
				size: i.grandezzaIcona,
				className: "center",
				onClick: n
			})
		}) })
	] });
}
function Ve({ selectOperation: e, item: t, vistaItem: n, StyledComponents: r }) {
	let i = Be(t.tipo_selezione, r), a = ze(t.tipo_selezione, r);
	return n === "card" || n === "form" ? /* @__PURE__ */ w(r.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000"
		},
		children: [/* @__PURE__ */ C(a, {
			className: "modificaItemButton",
			size: r.grandezzaIcona,
			onClick: () => e("pencil", t),
			style: { marginRight: "50%" }
		}), /* @__PURE__ */ C(i, {
			className: "eliminaItemButton",
			size: r.grandezzaIcona,
			onClick: () => e("trash", t)
		})]
	}) : /* @__PURE__ */ C(r.StyledColOperazioni, { children: /* @__PURE__ */ w("div", {
		style: { width: "100%" },
		children: [/* @__PURE__ */ C(a, {
			className: "left modificaItemButton",
			size: r.grandezzaIcona,
			onClick: () => e("pencil", t),
			style: { marginRight: "50%" }
		}), /* @__PURE__ */ C(i, {
			className: "rigth eliminaItemButton",
			size: r.grandezzaIcona,
			onClick: () => e("trash", t)
		})]
	}) });
}
var He = ({ selectedIdsModifica: e, selectedIdsEliminazione: t, handleEdit: n, handleDelete: r }) => /* @__PURE__ */ C(S, { children: /* @__PURE__ */ C("div", {
	className: "contenitore-2",
	children: /* @__PURE__ */ w(o, { children: [e.length > 0 && /* @__PURE__ */ C(s, { children: /* @__PURE__ */ C("button", {
		className: "bottone-blu-non-selezionato",
		onClick: n,
		children: "Modifica"
	}) }), t.length > 0 && /* @__PURE__ */ C(s, { children: /* @__PURE__ */ C("button", {
		className: "bottone-rosso-non-selezionato",
		onClick: r,
		children: "Elimina"
	}) })] })
}) });
function Ue({ elementi: e, tipoForm: t, setTipoForm: n, StyledComponents: r }) {
	let i = (e) => {
		n(e);
	};
	return /* @__PURE__ */ w(r.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "20px",
			paddingBottom: "20px"
		},
		children: [
			e.includes("insert") && t === "insert" && /* @__PURE__ */ w(S, { children: [
				e.includes("search") && /* @__PURE__ */ C(r.StyledSearchNotSelected2, {
					size: r.grandezzaIcona,
					style: { marginRight: "50px" },
					onClick: () => i("search")
				}),
				/* @__PURE__ */ C(r.StyledSaveSelected2, {
					size: r.grandezzaIcona,
					style: { marginRight: "50px" },
					onClick: () => i("insert")
				}),
				e.includes("file") && /* @__PURE__ */ C(r.StyledFileIconNotSelected2, {
					icon: te,
					size: "2xl",
					onClick: () => i("file")
				})
			] }),
			e.includes("search") && t === "search" && /* @__PURE__ */ w(S, { children: [
				/* @__PURE__ */ C(r.StyledSearchSelected2, {
					size: r.grandezzaIcona,
					style: { marginRight: "50px" },
					onClick: () => i("search")
				}),
				e.includes("insert") && /* @__PURE__ */ C(r.StyledSaveNotSelected2, {
					size: r.grandezzaIcona,
					style: { marginRight: "50px" },
					onClick: () => i("insert")
				}),
				e.includes("file") && /* @__PURE__ */ C(r.StyledFileIconNotSelected2, {
					icon: te,
					size: "2xl",
					onClick: () => i("file")
				})
			] }),
			e.includes("file") && t === "file" && /* @__PURE__ */ w(S, { children: [
				e.includes("search") && /* @__PURE__ */ C(r.StyledSearchNotSelected2, {
					size: r.grandezzaIcona,
					style: { marginRight: "50px" },
					onClick: () => i("search")
				}),
				e.includes("insert") && /* @__PURE__ */ C(r.StyledSaveNotSelected2, {
					size: r.grandezzaIcona,
					style: { marginRight: "50px" },
					onClick: () => i("insert")
				}),
				/* @__PURE__ */ C(r.StyledFileIconNotSelected2, {
					icon: te,
					size: "2xl",
					onClick: () => i("file")
				})
			] })
		]
	});
}
//#endregion
//#region src/form_item/FormItem.jsx
function We({ elementi: e, tipoForm: t, setTipoForm: n, StyledComponents: r }) {
	return /* @__PURE__ */ C(r.StyledForm, { children: /* @__PURE__ */ C(Ue, {
		elementi: e,
		tipoForm: t,
		setTipoForm: n,
		StyledComponents: r
	}) });
}
function Ge({ elementi: e, tipoForm: t, setTipoForm: n, StyledComponents: r }) {
	return /* @__PURE__ */ C(r.StyledForm, { children: /* @__PURE__ */ C(Ue, {
		elementi: e,
		tipoForm: t,
		setTipoForm: n,
		StyledComponents: r
	}) });
}
function Ke({ campi: t, indici: n, eseguiSalvataggio: r }) {
	return /* @__PURE__ */ w(N.StyledForm, { children: [
		/* @__PURE__ */ C(N.StyledHeader, { children: t.header }),
		/* @__PURE__ */ w(N.SlideContainer, {
			style: {
				maxHeight: "2000px",
				overflowY: "auto"
			},
			children: [
				n.map((n) => {
					let r = t.type[n] ? P(1, !0, N) : F(1, !0, N);
					return /* @__PURE__ */ w(e, { children: [
						/* @__PURE__ */ C(N.StyledLabel, {
							htmlFor: t.name[n],
							children: t.label[n]
						}),
						t.name[n] === "prezzo" ? /* @__PURE__ */ C(N.StyledRow, { children: /* @__PURE__ */ w(S, { children: [
							/* @__PURE__ */ C(r, {
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
							["prezzo", "totale"].includes(t.name[n]) && /* @__PURE__ */ C(N.StyledEuroNotSelected, {
								style: {
									maxWidth: "5%",
									marginTop: "13px"
								},
								size: N.grandezzaIcona,
								onClick: null
							}),
							t.options[n]
						] }) }) : /* @__PURE__ */ w(S, { children: [
							/* @__PURE__ */ C(r, {
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
							["prezzo", "totale"].includes(t.name[n]) && /* @__PURE__ */ C(N.StyledEuroNotSelected, {
								style: {
									maxWidth: "5%",
									marginTop: "13px"
								},
								size: N.grandezzaIcona,
								onClick: null
							}),
							t.options[n]
						] }),
						t.errore[n] !== "" && /* @__PURE__ */ C(N.StyledSpanErrore, { children: t.errore[n] })
					] }, n);
				}),
				/* @__PURE__ */ C("br", {}),
				" ",
				/* @__PURE__ */ C("br", {})
			]
		}),
		/* @__PURE__ */ C(I, {
			eseguiSalvataggio: r,
			vistaItem: "form",
			StyledComponents: N
		})
	] });
}
function qe({ campi: t, indici: r, handleSearch: i }) {
	let [a, o] = n(!0), [s, c] = n(!0);
	return P(1, !0, N), F(1, !0, N), /* @__PURE__ */ w(N.StyledForm, { children: [
		/* @__PURE__ */ C(N.StyledHeader, { children: t.header }),
		/* @__PURE__ */ w(N.SlideContainer, {
			style: {
				maxHeight: "2000px",
				overflowY: "auto"
			},
			children: [
				r.map((n) => {
					let r = t.type[n] ? P(1, !0, N) : F(1, !0, N);
					return /* @__PURE__ */ w(e, { children: [/* @__PURE__ */ C(N.StyledLabel, {
						htmlFor: t.name[n],
						children: t.label[n]
					}), /* @__PURE__ */ C(r, {
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
				/* @__PURE__ */ C("br", {}),
				" ",
				/* @__PURE__ */ C("br", {})
			]
		}),
		/* @__PURE__ */ C(L, {
			setIsVisible: o,
			arrowUp: s,
			setArrowUp: c,
			handleSearch: i,
			vistaItem: "form",
			StyledComponents: N
		})
	] });
}
function Je({ campi: t, indici: r, eseguiLogin: i }) {
	let [a, o] = n("password"), s = (e) => {
		e.preventDefault(), o(a === "text" ? "password" : "text");
	};
	return /* @__PURE__ */ w(N.StyledForm, { children: [
		/* @__PURE__ */ C(N.StyledHeader, { children: t.header }),
		/* @__PURE__ */ w(N.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: [
				r.map((n) => {
					let r = t.type[n] ? P(1, !0, N) : F(1, !0, N), i = a === "password" ? N.StyledEyeClosedNotSelected : N.StyledEyeOpenNotSelected;
					return /* @__PURE__ */ w(e, { children: [
						/* @__PURE__ */ C(N.StyledLabel, {
							htmlFor: t.name[n],
							children: t.label[n]
						}),
						/* @__PURE__ */ w(N.StyledRow, { children: [/* @__PURE__ */ C(r, {
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
						}), t.name[n] === "password" && /* @__PURE__ */ C(i, {
							style: {
								maxWidth: "5%",
								marginTop: "13px"
							},
							size: N.grandezzaIcona,
							onClick: s
						})] }),
						t.options[n],
						t.errore[n] && /* @__PURE__ */ C(N.StyledSpanErrore, { children: t.errore[n] })
					] }, n);
				}),
				/* @__PURE__ */ C("br", {}),
				" ",
				/* @__PURE__ */ C("br", {})
			]
		}),
		/* @__PURE__ */ C(z, {
			eseguiLogin: i,
			vistaItem: "form",
			StyledComponents: N
		})
	] });
}
function Ye({ campi: t, indici: r, eseguiModificaProfilo: i }) {
	let [a, o] = n("password"), [s, c] = n("password"), [l, u] = n("password"), d = (e, t) => {
		e.preventDefault(), t === "password_attuale" ? o(a === "text" ? "password" : "text") : t === "nuova_password" ? c(s === "text" ? "password" : "text") : t === "conferma_nuova_password" && u(l === "text" ? "password" : "text");
	};
	return /* @__PURE__ */ w(N.StyledForm, { children: [
		/* @__PURE__ */ C(N.StyledHeader, { children: t.header }),
		/* @__PURE__ */ w(N.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: [
				r.map((n) => {
					let r = t.type[n] ? P(1, !0, N) : F(1, !0, N), i = t.name[n] === "password_attuale" && a === "password" || t.name[n] === "nuova_password" && s === "password" || t.name[n] === "conferma_nuova_password" && l === "password" ? N.StyledEyeClosedNotSelected : N.StyledEyeOpenNotSelected;
					return /* @__PURE__ */ w(e, { children: [
						/* @__PURE__ */ C(N.StyledLabel, {
							htmlFor: t.name[n],
							children: t.label[n]
						}),
						/* @__PURE__ */ w(N.StyledRow, { children: [/* @__PURE__ */ C(r, {
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
						}), t.name[n].includes("password") && /* @__PURE__ */ C(i, {
							style: {
								maxWidth: "5%",
								marginTop: "13px"
							},
							size: N.grandezzaIcona,
							onClick: (e) => d(e, t.name[n])
						})] }),
						t.options[n],
						t.errore[n] && /* @__PURE__ */ C(N.StyledSpanErrore, { children: t.errore[n] })
					] }, n);
				}),
				/* @__PURE__ */ C("br", {}),
				" ",
				/* @__PURE__ */ C("br", {})
			]
		}),
		/* @__PURE__ */ C(B, {
			eseguiModificaProfilo: i,
			vistaItem: "form",
			StyledComponents: N
		})
	] });
}
function Xe({ campi: t, indici: r, ottieniFileRangePDF: i, ottieniFileRangeExcel: a, eliminaItemsRange: o }) {
	let [s, c] = n(!0), [l, u] = n(!0), d = s ? "2000px" : "0px";
	return P(1, !0, N), F(1, !0, N), /* @__PURE__ */ w(N.StyledForm, { children: [
		/* @__PURE__ */ C(N.StyledHeader, { children: t.header }),
		/* @__PURE__ */ w(N.SlideContainer, {
			style: { maxHeight: `${d}` },
			children: [
				r.map((n) => {
					let r = t.type[n] ? P(1, !0, N) : F(1, !0, N);
					return /* @__PURE__ */ w(e, { children: [/* @__PURE__ */ C(N.StyledLabel, {
						htmlFor: t.name[n],
						children: t.label[n]
					}), /* @__PURE__ */ C(r, {
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
				/* @__PURE__ */ C("br", {}),
				" ",
				/* @__PURE__ */ C("br", {})
			]
		}),
		/* @__PURE__ */ C(V, {
			ottieniFileRangePDF: i,
			ottieniFileRangeExcel: a,
			eliminaItemsRange: o,
			vistaItem: "form",
			StyledComponents: N
		})
	] });
}
function Ze({ datiRicerca: e, setDatiRicerca: t, handleInputChange: n, eseguiRicerca: r, lingua: i }) {
	return /* @__PURE__ */ w(N.StyledForm, { children: [
		/* @__PURE__ */ C(N.StyledHeader, { children: i === "italiano" ? "Ricerca entrate e uscite" : "Searching for inputs and outputs" }),
		/* @__PURE__ */ w(N.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: [
				/* @__PURE__ */ C(N.StyledLabel, {
					htmlFor: "primo_anno",
					children: i === "italiano" ? "Primo anno" : "First year"
				}),
				/* @__PURE__ */ C(N.StyledInputModifica, {
					rows: 1,
					name: "primo_anno",
					id: "primo_anno",
					type: "number",
					step: 1,
					value: e.primo_anno,
					placeholder: i === "italiano" ? "Primo anno" : "First year",
					onChange: (e) => n(e, t)
				}),
				/* @__PURE__ */ C(N.StyledLabel, {
					htmlFor: "ultimo_anno",
					children: i === "italiano" ? "Ultimo anno" : "Last year"
				}),
				/* @__PURE__ */ w(N.StyledSelectModifica, {
					name: "ultimo_anno",
					id: "ultimo_anno",
					value: e.ultimo_anno,
					onChange: (e) => n(e, t),
					children: [
						/* @__PURE__ */ C("option", {
							value: parseInt(e.primo_anno) + 1,
							children: parseInt(e.primo_anno) + 1
						}),
						/* @__PURE__ */ C("option", {
							value: parseInt(e.primo_anno) + 2,
							children: parseInt(e.primo_anno) + 2
						}),
						/* @__PURE__ */ C("option", {
							value: parseInt(e.primo_anno) + 3,
							children: parseInt(e.primo_anno) + 3
						}),
						/* @__PURE__ */ C("option", {
							value: parseInt(e.primo_anno) + 4,
							children: parseInt(e.primo_anno) + 4
						}),
						/* @__PURE__ */ C("option", {
							value: parseInt(e.primo_anno) + 5,
							children: parseInt(e.primo_anno) + 5
						})
					]
				}),
				/* @__PURE__ */ C("br", {}),
				" ",
				/* @__PURE__ */ C("br", {})
			]
		}),
		/* @__PURE__ */ C(R, {
			eseguiRicerca: (e) => r(e),
			vistaItem: "form",
			StyledComponents: N
		})
	] });
}
var Qe = r(o)`
  display: flex;
  align-items: stretch; 
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 3%;
  padding-right: 3%;
`, H = r(s)`
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
r(H)`
  max-height: ${(e) => e.isVisible ? "1000px" : "0"}; 
  overflow: hidden;
  transition: max-height 1s ease-out;
`, r(H)`
  border: 5px solid #000000;
  background-color: #000000;
`;
var $e = r(H)`
  border: 5px solid #000000;
  background-color: #000000;
  min-width: 230px;
  max-width: 230px;
  min-height: 80px;
  max-height: 80px;
`;
r(H)`
  border: 5px solid #000000;
  background-color: #0050EF;
`, r(H)`
  border: 5px solid #000000;
  background-color: #500000;
`, r.div`
  display: flex;
  flex-direction: row-reverse;
`;
var U = "\n  flex: 1;\n  display: flex;\n  align-items: center; /* Centro verticale */\n  justify-content: center; /* Centro orizzontale */\n  width: 100%;\n  height: 100%;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  color: inherit;\n  padding: 0; \n  margin: 0;\n  text-align: center; /* Centro orizzontale del testo */\n  overflow: hidden; /* Nasconde l'overflow */\n  resize: vertical;\n  border-radius: 40px;\n  min-height: 50px;\n  border: 5px solid #000000; \n  color: #FFFFFF;\n  padding: auto;\n", W = r.textarea`
  ${U}
`, et = r(W)`
  background-color: #111111;
`, tt = r(W)`
  background-color: #0050EF;
`, nt = r(W)`
  background-color: #500000;
`, rt = r.input`
  ${U}
`, it = r(rt)`
  background-color: #111111;
`, at = r(rt)`
  background-color: #0050EF;
`, ot = r(rt)`
  background-color: #500000;
`, st = r.button`
  ${U}
`, ct = "\n  margin-left: 10%;\n  margin-right: 10%;\n  border: 5px solid #000000;\n  background-color: #000000;\n  cursor: pointer;  \n  transition: 0.5s all ease-out;\n";
r(st)`
  ${ct}
  &:hover {
    background-color: #0050EF;
    color: #FFFFFF;
  }
`, r(st)`
  ${ct}
  &:hover {
    background-color: #500000;
    color: #FFFFFF;
  }
`;
var G = "\n  color: #FFFFFF;\n  cursor: pointer;\n", lt = r(_)`
  ${G}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, ut = r(h)`
  ${G}
  transition: 0.5s all ease-out;
`, dt = r(m)`
  ${G}
  transition: 0.5s all ease-out;
  color: #0050EF;
`, ft = r(v)`
  ${G}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, pt = r(p)`
  color: #FFFFFF;
  transition: 0.5s all ease-out;
`, mt = r(l)`
  ${G}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, ht = r(u)`
  ${G}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, gt = r(ee)`
  ${G}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, _t = r(g)`
  ${G}
`, vt = r(g)`
  ${G}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, yt = r(g)`
  color: #0050EF;
  cursor: pointer;
`, bt = r(y)`
  ${G}
`, xt = r(y)`
  color: #500000;
  cursor: pointer;
`, St = r(x)`
  color: #FFFFFF;
`, Ct = r(x)`
  ${G}
  color: #0050EF;
`, wt = r(f)`
  ${G}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`;
r(b)`
  ${G}
  transition: 0.5s all ease-out;
  &:hover {
    color: #500000;
  }
`;
var Tt = r(y)`
  ${G}
  transition: 0.5s all ease-out;
  &:hover {
    color: #500000;
  }
`, K = r.select`
  cursor: pointer;
  width: 100%;
  border-radius: 40px;
  background-color: #0050EF;
  border: 5px solid #000000;
  color: #FFFFFF;
  text-align: center;
`, Et = r(K)`
  background-color: #111111;
`, Dt = r(K)`
  background-color: #0050EF;
`, Ot = r(K)`
  background-color: #500000;
`;
r.option`
  background-color: #0050EF;
  &:hover {
    background-color: #0050EF;
  }
`;
var q = {
	StyledPencilNotSelected: _t,
	StyledPencilSelected: yt,
	grandezzaIcona: 50,
	StyledTrashNotSelected: bt,
	StyledTrashSelected: xt,
	StyledColOperazioni: $e,
	StyledSaveNotSelected: lt,
	StyledSearchNotSelected: ft,
	StyledArrowLeftNotSelected: mt,
	StyledArrowRightNotSelected: ht,
	StyledFileIconNotSelected: St,
	StyledDownloadNotSelected: wt,
	StyledTrashNotSelected2: Tt,
	StyledLoginNotSelected: gt,
	StyledPencilNotSelectedModificaProfilo: vt,
	StyledInputBlock: it,
	StyledInputModifica: at,
	StyledInputElimina: ot,
	StyledTextAreaBlock: et,
	StyledTextAreaModifica: tt,
	StyledTextAreaElimina: nt,
	StyledRow: Qe,
	StyledCol: H,
	StyledSpanErrore: r.span`
  color: #FF0000;
  border-radius: 40px;
  padding: 10px;
`,
	StyledSelectBlock: Et,
	StyledSelectModifica: Dt,
	StyledSelectElimina: Ot,
	StyledEyeClosedNotSelected: ut,
	StyledEyeOpenNotSelected: dt,
	StyledEuroNotSelected: pt,
	StyledFileIconSelected2: Ct
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
	P(1, !0, q), F(1, !0, q);
	let i = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ w(q.StyledRow, { children: [/* @__PURE__ */ C(I, {
		eseguiSalvataggio: r,
		vistaItem: "row",
		StyledComponents: q
	}), n.map((n) => {
		let r = t.type[n] ? P(1, !0, q) : F(1, !0, q);
		return /* @__PURE__ */ C(e, { children: /* @__PURE__ */ C(q.StyledCol, { children: /* @__PURE__ */ w("div", {
			style: { width: "100%" },
			children: [/* @__PURE__ */ w(q.StyledRow, { children: [
				/* @__PURE__ */ C(r, {
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
				["prezzo", "totale"].includes(t.name[n]) && /* @__PURE__ */ C(q.StyledEuroNotSelected, {
					style: {
						maxWidth: "10%",
						marginLeft: "-6px"
					},
					size: q.grandezzaIcona,
					onClick: null
				}),
				t.options[n]
			] }), t.errore[n] !== "" && /* @__PURE__ */ C(q.StyledSpanErrore, { children: t.errore[n] })]
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
	P(1, !0, q), F(1, !0, q);
	let l = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ w(q.StyledRow, { children: [/* @__PURE__ */ C(L, {
		visibilita: a,
		setVisibilita: o,
		arrowUp: s,
		setArrowUp: c,
		handleSearch: i,
		vistaItem: "row",
		StyledComponents: q
	}), r.map((n) => {
		let r = t.type[n] ? P(1, !0, q) : F(1, !0, q);
		return /* @__PURE__ */ C(e, { children: /* @__PURE__ */ C(q.StyledCol, { children: /* @__PURE__ */ C("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ C(q.StyledRow, { children: a[n] && /* @__PURE__ */ w(S, { children: [/* @__PURE__ */ C(r, {
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
			].includes(t.name[n]) && /* @__PURE__ */ C(q.StyledEuroNotSelected, {
				style: {
					maxWidth: "20%",
					marginLeft: "-6px"
				},
				size: q.grandezzaIcona,
				onClick: null
			})] }) })
		}) }) }, n);
	})] });
}
function Nt({ item: t, campi: r, indici: i, selectOperation: a, tipoItem: o, handleBlurItem: s }) {
	let c = P(r.tipoSelezione, !1, q), [l, u] = n(() => i.reduce((e, t) => ({
		...e,
		[t]: r.value[t]
	}), {})), d = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ w(q.StyledRow, { children: [
		/* @__PURE__ */ C(Ve, {
			selectOperation: a,
			item: t,
			vistaItem: "row",
			StyledComponents: q
		}),
		/* @__PURE__ */ C(q.StyledCol, { children: /* @__PURE__ */ C("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ C(q.StyledRow, { children: /* @__PURE__ */ C(c, {
				rows: 1,
				name: "header",
				value: r.header,
				placeholder: r.header,
				readOnly: !0
			}) })
		}) }),
		i.map((n) => {
			let i = r.type[n] ? P(r.tipoSelezione, r.valoreModificabile[n], q) : F(r.tipoSelezione, r.valoreModificabile[n], q);
			return /* @__PURE__ */ C(e, { children: /* @__PURE__ */ C(q.StyledCol, { children: /* @__PURE__ */ w("div", {
				style: { width: "100%" },
				children: [/* @__PURE__ */ w(q.StyledRow, { children: [
					/* @__PURE__ */ C(i, {
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
					["prezzo", "totale"].includes(r.name[n]) && /* @__PURE__ */ C(q.StyledEuroNotSelected, {
						style: {
							maxWidth: "20%",
							marginLeft: "-6px"
						},
						size: q.grandezzaIcona
					}),
					r.options[n]
				] }), r.errore[n] && /* @__PURE__ */ C(q.StyledSpanErrore, { children: r.errore[n] })]
			}) }) }, n);
		})
	] });
}
function Pt({ campi: t, indici: n, ottieniFileRangePDF: r, ottieniFileRangeExcel: i, eliminaItemsRange: a }) {
	let o = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ w(q.StyledRow, { children: [/* @__PURE__ */ C(V, {
		ottieniFileRangePDF: r,
		ottieniFileRangeExcel: i,
		eliminaItemsRange: a,
		vistaItem: "row",
		StyledComponents: q
	}), n.map((n) => {
		let r = t.type[n] ? P(1, !0, q) : F(1, !0, q);
		return /* @__PURE__ */ C(e, { children: /* @__PURE__ */ C(q.StyledCol, { children: /* @__PURE__ */ C("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ C(q.StyledRow, { children: /* @__PURE__ */ C(r, {
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
	return /* @__PURE__ */ w(q.StyledRow, { children: [/* @__PURE__ */ C(z, {
		eseguiLogin: i,
		vistaItem: "row",
		StyledComponents: q
	}), r.map((n) => {
		let r = t.type[n] ? P(1, !0, q) : F(1, !0, q), i = a === "password" ? q.StyledEyeClosedNotSelected : q.StyledEyeOpenNotSelected;
		return /* @__PURE__ */ C(e, { children: /* @__PURE__ */ C(q.StyledCol, { children: /* @__PURE__ */ w("div", {
			style: { width: "100%" },
			children: [
				/* @__PURE__ */ w(q.StyledRow, { children: [/* @__PURE__ */ C(r, {
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
				}), t.name[n] === "password" && /* @__PURE__ */ C(i, {
					style: {
						maxWidth: "20%",
						marginLeft: "-6px"
					},
					size: q.grandezzaIcona,
					onClick: s
				})] }),
				t.options[n],
				t.errore[n] && /* @__PURE__ */ C(q.StyledSpanErrore, { children: t.errore[n] })
			]
		}) }) }, n);
	})] });
}
function It({ campi: t, indici: r, eseguiModificaProfilo: i }) {
	let [a, o] = n("password"), [s, c] = n("password"), [l, u] = n("password"), d = (e, t) => {
		e.preventDefault(), t === "password_attuale" ? o(a === "text" ? "password" : "text") : t === "nuova_password" ? c(s === "text" ? "password" : "text") : t === "conferma_nuova_password" && u(l === "text" ? "password" : "text");
	};
	return /* @__PURE__ */ w(q.StyledRow, { children: [/* @__PURE__ */ C(B, {
		eseguiModificaProfilo: i,
		vistaItem: "row",
		StyledComponents: q
	}), r.map((n) => {
		let r = t.type[n] ? P(1, !0, q) : F(1, !0, q), i = t.name[n] === "password_attuale" && a === "password" || t.name[n] === "nuova_password" && s === "password" || t.name[n] === "conferma_nuova_password" && l === "password" ? q.StyledEyeClosedNotSelected : q.StyledEyeOpenNotSelected;
		return /* @__PURE__ */ C(e, { children: /* @__PURE__ */ C(q.StyledCol, { children: /* @__PURE__ */ w("div", {
			style: { width: "100%" },
			children: [
				/* @__PURE__ */ w(q.StyledRow, { children: [/* @__PURE__ */ C(r, {
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
				}), t.name[n].includes("password") && /* @__PURE__ */ C(i, {
					style: {
						maxWidth: "20%",
						marginLeft: "-6px"
					},
					size: q.grandezzaIcona,
					onClick: (e) => d(e, t.name[n])
				})] }),
				t.options[n],
				t.errore[n] && /* @__PURE__ */ C(q.StyledSpanErrore, { children: t.errore[n] })
			]
		}) }) }, n);
	})] });
}
function Lt({ datiRicerca: e, setDatiRicerca: t, handleInputChange: n, eseguiRicerca: r, lingua: i }) {
	return /* @__PURE__ */ w(q.StyledRow, { children: [
		/* @__PURE__ */ C(R, {
			eseguiRicerca: (e) => r(e),
			vistaItem: "row",
			StyledComponents: q
		}),
		/* @__PURE__ */ C(q.StyledCol, { children: /* @__PURE__ */ C("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ C(q.StyledRow, { children: /* @__PURE__ */ C(q.StyledInputBlock, {
				rows: 1,
				name: "header",
				value: i === "italiano" ? "Ricerca entrate e uscite" : "Searching for inputs and outputs",
				placeholder: i === "italiano" ? "Ricerca entrate e uscite" : "Searching for inputs and outputs",
				readOnly: !0
			}) })
		}) }),
		/* @__PURE__ */ C(q.StyledCol, { children: /* @__PURE__ */ C("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ C(q.StyledInputModifica, {
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
		/* @__PURE__ */ C(q.StyledCol, { children: /* @__PURE__ */ C("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ w(q.StyledSelectModifica, {
				name: "ultimo_anno",
				id: "ultimo_anno",
				onContextMenu: (e) => handleRightClick(e, "Ultimo anno"),
				value: e.ultimo_anno,
				onChange: (e) => n(e, t),
				children: [
					/* @__PURE__ */ C("option", {
						value: parseInt(e.primo_anno) + 1,
						children: parseInt(e.primo_anno) + 1
					}),
					/* @__PURE__ */ C("option", {
						value: parseInt(e.primo_anno) + 2,
						children: parseInt(e.primo_anno) + 2
					}),
					/* @__PURE__ */ C("option", {
						value: parseInt(e.primo_anno) + 3,
						children: parseInt(e.primo_anno) + 3
					}),
					/* @__PURE__ */ C("option", {
						value: parseInt(e.primo_anno) + 4,
						children: parseInt(e.primo_anno) + 4
					}),
					/* @__PURE__ */ C("option", {
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
`, J = r.textarea`
  width: 100%;
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  min-height: 70px;
`, Wt = r(J)`
  background-color: #111111;
`, Gt = r(J)`
  background-color: #0050EF;
`, Kt = r(J)`
  background-color: #500000;
`, Y = r.input`
  width: 100%;
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  min-height: 70px;
`, qt = r(Y)`
  background-color: #111111;
`, Jt = r(Y)`
  background-color: #0050EF;
`, Yt = r(Y)`
  background-color: #500000;
`, X = "\n  color: #FFFFFF;\n  cursor: pointer;\n";
r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-top:10px;
`;
var Xt = r(_)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, Zt = r(h)`
  ${X}
  transition: 0.5s all ease-out;
`, Qt = r(m)`
  ${X}
  transition: 0.5s all ease-out;
  color: #0050EF;
`, $t = r(v)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, en = r(p)`
  color: #FFFFFF;
  transition: 0.5s all ease-out;
`, tn = r(d)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, nn = r(c)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, rn = r(ee)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, an = r(g)`
  ${X}
`;
r(g)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`;
var on = r(g)`
  color: #0050EF;
  cursor: pointer;
`, sn = r(y)`
  ${X}
`, cn = r(y)`
  color: #500000;
  cursor: pointer;
`, ln = r(x)`
  color: #FFFFFF;
`, un = r(x)`
  ${X}
  color: #0050EF;
`, dn = r(f)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`;
r(b)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #500000;
  }
`;
var fn = r(g)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, pn = r(y)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #500000;
  }
`, Z = r.select`
  width: 100%;
  min-height: 70px;
  background-color: #0050EF;
  border: 5px solid #000000;
  color: #FFFFFF;
  text-align: center;
`, mn = r(Z)`
  background-color: #111111;
`, hn = r(Z)`
  background-color: #0050EF;
`, gn = r(Z)`
  background-color: #500000;
`;
r.option`

  background-color: #0050EF;
  &:hover {
    background-color: #0050EF;
  }
`;
var Q = {
	StyledPencilNotSelected: an,
	StyledPencilSelected: on,
	grandezzaIcona: 50,
	StyledTrashNotSelected: sn,
	StyledTrashSelected: cn,
	StyledListGroupItem: Ht,
	StyledRow: zt,
	StyledCol: Bt,
	StyledSaveNotSelected: Xt,
	StyledEyeOpenNotSelected: Qt,
	StyledEyeClosedNotSelected: Zt,
	StyledSearchNotSelected: $t,
	StyledArrowTopNotSelected: tn,
	StyledArrowBottomNotSelected: nn,
	StyledFileIconNotSelected: ln,
	StyledDownloadNotSelected: dn,
	StyledTrashNotSelected2: pn,
	StyledLoginNotSelected: rn,
	StyledPencilNotSelected2: fn,
	StyledSelectBlock: mn,
	StyledSelectModifica: hn,
	StyledSelectElimina: gn,
	StyledInputBlock: qt,
	StyledInputModifica: Jt,
	StyledInputElimina: Yt,
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
	StyledEuroNotSelected: en,
	StyledFileIconSelected2: un
};
//#endregion
//#region src/Colori.js
function $(e, t, n) {
	return t === 0 ? "#FFFFFF" : e < 0 ? "#FF0000" : e > 0 ? "#00FF00" : "#FFFFFF";
}
//#endregion
//#region src/Calcoli.js
var _n = (e) => e.totale_gennaio + e.totale_febbraio + e.totale_marzo + e.totale_aprile + e.totale_maggio + e.totale_giugno + e.totale_luglio + e.totale_agosto + e.totale_settembre + e.totale_ottobre + e.totale_novembre + e.totale_dicembre, vn = (e) => parseInt(e.quantita_gennaio) + parseInt(e.quantita_febbraio) + parseInt(e.quantita_marzo) + parseInt(e.quantita_aprile) + parseInt(e.quantita_maggio) + parseInt(e.quantita_giugno) + parseInt(e.quantita_luglio) + parseInt(e.quantita_agosto) + parseInt(e.quantita_settembre) + parseInt(e.quantita_ottobre) + parseInt(e.quantita_novembre) + parseInt(e.quantita_dicembre);
//#endregion
//#region src/card_item/CardItem.jsx
function yn({ campi: t, indici: n, eseguiSalvataggio: r }) {
	let i = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ C("center", { children: /* @__PURE__ */ w(Q.StyledCard, { children: [
		/* @__PURE__ */ C(Q.StyledCardHeader, { children: t.header }),
		/* @__PURE__ */ C(Q.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: n.map((n) => {
				let r = t.type[n] ? P(1, !0, Q) : F(1, !0, Q);
				return /* @__PURE__ */ w(e, { children: [/* @__PURE__ */ w(Q.StyledRow, { children: [/* @__PURE__ */ C(r, {
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
				}), t.options[n]] }), t.errore[n] !== "" && /* @__PURE__ */ C(Q.StyledSpanErrore, { children: t.errore[n] })] }, n);
			})
		}),
		/* @__PURE__ */ C(I, {
			eseguiSalvataggio: r,
			vistaItem: "card",
			StyledComponents: Q
		})
	] }) });
}
function bn({ campi: t, indici: r, handleSearch: i }) {
	let [a, o] = n(!0), [s, c] = n(!0), l = a ? "2000px" : "0px";
	P(1, !0, Q), F(1, !0, Q);
	let u = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ C("center", { children: /* @__PURE__ */ w(Q.StyledCard, { children: [
		/* @__PURE__ */ C(Q.StyledCardHeader, { children: t.header }),
		/* @__PURE__ */ C(Q.SlideContainer, {
			style: { maxHeight: `${l}` },
			children: r.map((n) => {
				let r = t.type[n] ? P(1, !0, Q) : F(1, !0, Q);
				return /* @__PURE__ */ C(e, { children: /* @__PURE__ */ C(Q.StyledRow, { children: /* @__PURE__ */ C(r, {
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
		/* @__PURE__ */ C(L, {
			setIsVisible: o,
			arrowUp: s,
			setArrowUp: c,
			handleSearch: i,
			vistaItem: "card",
			StyledComponents: Q
		})
	] }) });
}
function xn({ item: r, campi: i, indici: a, selectOperation: o, handleBlurItem: s }) {
	let c = t([]), [l, u] = n(() => a.reduce((e, t) => ({
		...e,
		[t]: i.value[t]
	}), {})), d = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ w(Q.StyledCard, { children: [
		/* @__PURE__ */ C(Q.StyledCardHeader, { children: i.header }),
		/* @__PURE__ */ C(Q.SlideContainer, { children: a.map((t) => {
			let n = i.type[t] ? P(i.tipoSelezione, i.valoreModificabile[t], Q) : F(i.tipoSelezione, i.valoreModificabile[t], Q);
			return /* @__PURE__ */ w(e, { children: [/* @__PURE__ */ w(Q.StyledRow, { children: [/* @__PURE__ */ C(n, {
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
			}), i.options[t]] }), i.errore[t] && /* @__PURE__ */ C(Q.StyledSpanErrore, { children: i.errore[t] })] }, `input-${t}`);
		}) }),
		/* @__PURE__ */ C(Ve, {
			selectOperation: o,
			item: r,
			vistaItem: "card",
			StyledComponents: Q
		})
	] });
}
function Sn({ campi: t, indici: n, ottieniFileRangePDF: r, ottieniFileRangeExcel: i, eliminaItemsRange: a }) {
	let o = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ C("center", { children: /* @__PURE__ */ w(Q.StyledCard, { children: [
		/* @__PURE__ */ C(Q.StyledCardHeader, { children: t.header }),
		/* @__PURE__ */ C(Q.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: n.map((n) => /* @__PURE__ */ C(e, { children: /* @__PURE__ */ C(t.type[n] ? P(1, !0, Q) : F(1, !0, Q), {
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
		/* @__PURE__ */ C(V, {
			ottieniFileRangePDF: r,
			ottieniFileRangeExcel: i,
			eliminaItemsRange: a,
			vistaItem: "card",
			StyledComponents: Q
		})
	] }) });
}
function Cn({ campi: t, indici: r, eseguiLogin: i }) {
	let [a, o] = n("password"), s = (e) => {
		e.preventDefault(), o(a === "text" ? "password" : "text");
	}, c = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ C("center", { children: /* @__PURE__ */ w(Q.StyledCard, { children: [
		/* @__PURE__ */ C(Q.StyledCardHeader, { children: t.header }),
		/* @__PURE__ */ C(Q.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: r.map((n) => {
				let r = t.type[n] ? P(1, !0, Q) : F(1, !0, Q), i = a === "password" ? Q.StyledEyeClosedNotSelected : Q.StyledEyeOpenNotSelected;
				return /* @__PURE__ */ w(e, { children: [
					/* @__PURE__ */ w(Q.StyledRow, { children: [/* @__PURE__ */ C(r, {
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
					}), t.name[n] === "password" && /* @__PURE__ */ C(i, {
						style: {
							maxWidth: "20%",
							marginLeft: "-6px",
							marginTop: "13px"
						},
						size: Q.grandezzaIcona,
						onClick: s
					})] }),
					t.options[n],
					t.errore[n] && /* @__PURE__ */ C(Q.StyledSpanErrore, { children: t.errore[n] })
				] }, n);
			})
		}),
		/* @__PURE__ */ C(z, {
			eseguiLogin: i,
			vistaItem: "card",
			StyledComponents: Q
		})
	] }) });
}
function wn({ campi: t, indici: r, eseguiModificaProfilo: i }) {
	let [a, o] = n("password"), [s, c] = n("password"), [l, u] = n("password"), d = (e, t) => {
		e.preventDefault(), t === "password_attuale" ? o(a === "text" ? "password" : "text") : t === "nuova_password" ? c(s === "text" ? "password" : "text") : t === "conferma_nuova_password" && u(l === "text" ? "password" : "text");
	};
	return /* @__PURE__ */ C("center", { children: /* @__PURE__ */ w(Q.StyledCard, { children: [
		/* @__PURE__ */ C(Q.StyledCardHeader, { children: t.header }),
		/* @__PURE__ */ C(Q.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: r.map((n) => {
				let r = t.type[n] ? P(1, !0, Q) : F(1, !0, Q), i = t.name[n] === "password_attuale" && a === "password" || t.name[n] === "nuova_password" && s === "password" || t.name[n] === "conferma_nuova_password" && l === "password" ? Q.StyledEyeClosedNotSelected : Q.StyledEyeOpenNotSelected;
				return /* @__PURE__ */ w(e, { children: [
					/* @__PURE__ */ w(Q.StyledRow, { children: [/* @__PURE__ */ C(r, {
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
					}), t.name[n].includes("password") && /* @__PURE__ */ C(i, {
						style: {
							maxWidth: "20%",
							marginLeft: "-6px",
							marginTop: "13px"
						},
						size: Q.grandezzaIcona,
						onClick: (e) => d(e, t.name[n])
					})] }),
					t.options[n],
					t.errore[n] && /* @__PURE__ */ C(Q.StyledSpanErrore, { children: t.errore[n] })
				] }, n);
			})
		}),
		/* @__PURE__ */ C(B, {
			eseguiModificaProfilo: i,
			vistaItem: "card",
			StyledComponents: Q
		})
	] }) });
}
function Tn({ nome: e, img: t, id: n, onClickWidget: r, backgroundColor: i }) {
	return /* @__PURE__ */ w(T, {
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
		children: [/* @__PURE__ */ C(T.Img, {
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
		}), /* @__PURE__ */ C(T.Body, { children: /* @__PURE__ */ C(T.Title, {
			style: {
				color: "#FFFFFF",
				textAlign: "center"
			},
			children: e
		}) })]
	});
}
function En({ entrateItems: e, lingua: t, etichettaIta: n, etichettaEng: r }) {
	return /* @__PURE__ */ w(T, {
		style: {
			display: "inline-block",
			backgroundColor: "rgba(0, 0, 0, 0.5)",
			borderRadius: "50px",
			paddingLeft: "50px",
			paddingRight: "50px",
			paddingBottom: "50px",
			overflowX: "auto"
		},
		children: [/* @__PURE__ */ C(T.Body, { children: /* @__PURE__ */ C("center", { children: /* @__PURE__ */ C(T.Title, {
			style: { color: "#FFFFFF" },
			children: t === "italiano" ? n : r
		}) }) }), /* @__PURE__ */ C("center", { children: /* @__PURE__ */ w(E, {
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
				/* @__PURE__ */ C("thead", { children: /* @__PURE__ */ w("tr", { children: [
					/* @__PURE__ */ C("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "ANNO" : "YEAR"
					}),
					/* @__PURE__ */ C("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "GEN" : "JAN"
					}),
					/* @__PURE__ */ C("th", {
						style: { color: "#FFFFFF" },
						children: "FEB"
					}),
					/* @__PURE__ */ C("th", {
						style: { color: "#FFFFFF" },
						children: "MAR"
					}),
					/* @__PURE__ */ C("th", {
						style: { color: "#FFFFFF" },
						children: "APR"
					}),
					/* @__PURE__ */ C("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "MAG" : "MAY"
					}),
					/* @__PURE__ */ C("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "GIU" : "JUN"
					}),
					/* @__PURE__ */ C("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "LUG" : "JUL"
					}),
					/* @__PURE__ */ C("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "AGO" : "AUG"
					}),
					/* @__PURE__ */ C("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "SET" : "SEP"
					}),
					/* @__PURE__ */ C("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "OTT" : "OCT"
					}),
					/* @__PURE__ */ C("th", {
						style: { color: "#FFFFFF" },
						children: "NOV"
					}),
					/* @__PURE__ */ C("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "DIC" : "DEC"
					}),
					/* @__PURE__ */ C("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "TOT ENTRATE" : "TOT REVENUE"
					})
				] }) }),
				/* @__PURE__ */ C("tbody", { children: e.map((e, t) => t > 1 && /* @__PURE__ */ C("tr", { children: Object.values(e).map((e, t) => /* @__PURE__ */ C("td", {
					style: {
						color: $(e, t, "entrata"),
						fontWeight: t === 0 ? "bold" : null
					},
					children: t > 0 ? parseFloat(e).toFixed(2) + " €" : e
				}, t)) }, t)) }),
				/* @__PURE__ */ C("tbody", { children: /* @__PURE__ */ C("tr", { children: Object.values(e[0]).map((e, t) => /* @__PURE__ */ C("td", {
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
function Dn({ entrateItems: t, lingua: r, tipoItemIta: i, tipoItemEng: a, etichettaIta: o, etichettaEng: s }) {
	let [c, l] = n(0);
	return /* @__PURE__ */ w(T, {
		style: {
			display: "inline-block",
			backgroundColor: "rgba(0, 0, 0, 0.5)",
			borderRadius: "50px",
			paddingLeft: "50px",
			paddingRight: "50px",
			paddingBottom: "50px",
			overflowX: "auto"
		},
		children: [/* @__PURE__ */ C(T.Body, { children: /* @__PURE__ */ C("center", { children: /* @__PURE__ */ C(T.Title, {
			style: { color: "#FFFFFF" },
			children: r === "italiano" ? o : s
		}) }) }), /* @__PURE__ */ C("center", { children: /* @__PURE__ */ w(E, {
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
			children: [/* @__PURE__ */ C("thead", {}), /* @__PURE__ */ C("tbody", { children: t.map((n, o) => /* @__PURE__ */ w(e, { children: [(o === 0 || t[o].anno !== t[o - 1].anno) && /* @__PURE__ */ w(S, { children: [/* @__PURE__ */ C("tr", { children: /* @__PURE__ */ w("th", {
				colSpan: 14,
				children: [
					r === "italiano" ? "ANNO" : "YEAR",
					" = ",
					n.anno
				]
			}) }), /* @__PURE__ */ w("tr", { children: [
				/* @__PURE__ */ C("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? i : a
				}),
				/* @__PURE__ */ C("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "GEN" : "JAN"
				}),
				/* @__PURE__ */ C("th", {
					style: { color: "#FFFFFF" },
					children: "FEB"
				}),
				/* @__PURE__ */ C("th", {
					style: { color: "#FFFFFF" },
					children: "MAR"
				}),
				/* @__PURE__ */ C("th", {
					style: { color: "#FFFFFF" },
					children: "APR"
				}),
				/* @__PURE__ */ C("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "MAG" : "MAY"
				}),
				/* @__PURE__ */ C("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "GIU" : "JUN"
				}),
				/* @__PURE__ */ C("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "LUG" : "JUL"
				}),
				/* @__PURE__ */ C("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "AGO" : "AUG"
				}),
				/* @__PURE__ */ C("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "SET" : "SEP"
				}),
				/* @__PURE__ */ C("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "OTT" : "OCT"
				}),
				/* @__PURE__ */ C("th", {
					style: { color: "#FFFFFF" },
					children: "NOV"
				}),
				/* @__PURE__ */ C("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "DIC" : "DEC"
				}),
				/* @__PURE__ */ C("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "TOT ENTRATE" : "TOT REVENUE"
				})
			] })] }), /* @__PURE__ */ w("tr", { children: [
				/* @__PURE__ */ C("td", {
					style: {
						color: "#FFFFFF",
						fontWeight: "bold"
					},
					children: n.nome
				}),
				/* @__PURE__ */ w("td", {
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
				/* @__PURE__ */ w("td", {
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
				/* @__PURE__ */ w("td", {
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
				/* @__PURE__ */ w("td", {
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
				/* @__PURE__ */ w("td", {
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
				/* @__PURE__ */ w("td", {
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
				/* @__PURE__ */ w("td", {
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
				/* @__PURE__ */ w("td", {
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
				/* @__PURE__ */ w("td", {
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
				/* @__PURE__ */ w("td", {
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
				/* @__PURE__ */ w("td", {
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
				/* @__PURE__ */ w("td", {
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
				/* @__PURE__ */ w("td", {
					style: {
						color: $(_n(n), 1, "entrata"),
						fontWeight: "bold"
					},
					children: [
						"x ",
						vn(n),
						" = ",
						parseFloat(_n(n)).toFixed(2) + " €"
					]
				})
			] })] }, o)) })]
		}) })]
	});
}
function On({ usciteItems: e, lingua: t, etichettaIta: n, etichettaEng: r }) {
	return /* @__PURE__ */ w(T, {
		style: {
			display: "inline-block",
			backgroundColor: "rgba(0, 0, 0, 0.5)",
			borderRadius: "50px",
			paddingLeft: "50px",
			paddingRight: "50px",
			paddingBottom: "50px",
			overflowX: "auto"
		},
		children: [/* @__PURE__ */ C(T.Body, { children: /* @__PURE__ */ C("center", { children: /* @__PURE__ */ C(T.Title, {
			style: { color: "#FFFFFF" },
			children: t === "italiano" ? n : r
		}) }) }), /* @__PURE__ */ C("center", { children: /* @__PURE__ */ w(E, {
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
				/* @__PURE__ */ C("thead", { children: /* @__PURE__ */ w("tr", { children: [
					/* @__PURE__ */ C("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "ANNO" : "YEAR"
					}),
					/* @__PURE__ */ C("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "GEN" : "JAN"
					}),
					/* @__PURE__ */ C("th", {
						style: { color: "#FFFFFF" },
						children: "FEB"
					}),
					/* @__PURE__ */ C("th", {
						style: { color: "#FFFFFF" },
						children: "MAR"
					}),
					/* @__PURE__ */ C("th", {
						style: { color: "#FFFFFF" },
						children: "APR"
					}),
					/* @__PURE__ */ C("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "MAG" : "MAY"
					}),
					/* @__PURE__ */ C("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "GIU" : "JUN"
					}),
					/* @__PURE__ */ C("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "LUG" : "JUL"
					}),
					/* @__PURE__ */ C("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "AGO" : "AUG"
					}),
					/* @__PURE__ */ C("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "SET" : "SEP"
					}),
					/* @__PURE__ */ C("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "OTT" : "OCT"
					}),
					/* @__PURE__ */ C("th", {
						style: { color: "#FFFFFF" },
						children: "NOV"
					}),
					/* @__PURE__ */ C("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "DIC" : "DEC"
					}),
					/* @__PURE__ */ C("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "TOT USCITE" : "TOT EXIT"
					})
				] }) }),
				/* @__PURE__ */ C("tbody", { children: e.map((e, t) => t > 1 && /* @__PURE__ */ C("tr", { children: Object.values(e).map((e, t) => /* @__PURE__ */ C("td", {
					style: {
						color: $(-e, t, "uscita"),
						fontWeight: t === 0 ? "bold" : null
					},
					children: t > 0 ? parseFloat(-e).toFixed(2) + " €" : e
				}, t)) }, t)) }),
				/* @__PURE__ */ C("tbody", { children: /* @__PURE__ */ C("tr", { children: Object.values(e[0]).map((e, t) => /* @__PURE__ */ C("td", {
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
function kn({ entrate: e, uscite: t, lingua: n }) {
	return /* @__PURE__ */ w(T, {
		style: {
			display: "inline-block",
			backgroundColor: "rgba(0, 0, 0, 0.5)",
			borderRadius: "50px",
			paddingLeft: "50px",
			paddingRight: "50px",
			paddingBottom: "50px",
			overflowX: "auto"
		},
		children: [/* @__PURE__ */ C(T.Body, { children: /* @__PURE__ */ C("center", { children: /* @__PURE__ */ C(T.Title, {
			style: { color: "#FFFFFF" },
			children: n === "italiano" ? "Ricavi" : "Revenues"
		}) }) }), /* @__PURE__ */ C("center", { children: /* @__PURE__ */ w(E, {
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
			children: [/* @__PURE__ */ C("thead", { children: /* @__PURE__ */ w("tr", { children: [
				/* @__PURE__ */ C("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "ANNO" : "YEAR"
				}),
				/* @__PURE__ */ C("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "GEN" : "JAN"
				}),
				/* @__PURE__ */ C("th", {
					style: { color: "#FFFFFF" },
					children: "FEB"
				}),
				/* @__PURE__ */ C("th", {
					style: { color: "#FFFFFF" },
					children: "MAR"
				}),
				/* @__PURE__ */ C("th", {
					style: { color: "#FFFFFF" },
					children: "APR"
				}),
				/* @__PURE__ */ C("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "MAG" : "MAY"
				}),
				/* @__PURE__ */ C("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "GIU" : "JUN"
				}),
				/* @__PURE__ */ C("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "LUG" : "JUL"
				}),
				/* @__PURE__ */ C("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "AGO" : "AUG"
				}),
				/* @__PURE__ */ C("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "SET" : "SEP"
				}),
				/* @__PURE__ */ C("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "OTT" : "OCT"
				}),
				/* @__PURE__ */ C("th", {
					style: { color: "#FFFFFF" },
					children: "NOV"
				}),
				/* @__PURE__ */ C("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "DIC" : "DEC"
				}),
				/* @__PURE__ */ C("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "TOT RICAVI" : "TOT EARNINGS"
				})
			] }) }), /* @__PURE__ */ w("tbody", { children: [e.map((e, n) => n > 1 && /* @__PURE__ */ w("tr", { children: [/* @__PURE__ */ C("td", {
				style: { fontWeight: "bold" },
				children: e.Anno
			}), t[n] && /* @__PURE__ */ w(S, { children: [
				/* @__PURE__ */ w("td", {
					style: { color: $(e.gen - t[n].gen) },
					children: [parseFloat(e.gen - t[n].gen).toFixed(2), " €"]
				}),
				/* @__PURE__ */ w("td", {
					style: { color: $(e.feb - t[n].feb) },
					children: [parseFloat(e.feb - t[n].feb).toFixed(2), " €"]
				}),
				/* @__PURE__ */ w("td", {
					style: { color: $(e.mar - t[n].mar) },
					children: [parseFloat(e.mar - t[n].mar).toFixed(2), " €"]
				}),
				/* @__PURE__ */ w("td", {
					style: { color: $(e.apr - t[n].apr) },
					children: [parseFloat(e.apr - t[n].apr).toFixed(2), " €"]
				}),
				/* @__PURE__ */ w("td", {
					style: { color: $(e.mag - t[n].mag) },
					children: [parseFloat(e.mag - t[n].mag).toFixed(2), " €"]
				}),
				/* @__PURE__ */ w("td", {
					style: { color: $(e.giu - t[n].giu) },
					children: [parseFloat(e.giu - t[n].giu).toFixed(2), " €"]
				}),
				/* @__PURE__ */ w("td", {
					style: { color: $(e.lug - t[n].lug) },
					children: [parseFloat(e.lug - t[n].lug).toFixed(2), " €"]
				}),
				/* @__PURE__ */ w("td", {
					style: { color: $(e.ago - t[n].ago) },
					children: [parseFloat(e.ago - t[n].ago).toFixed(2), " €"]
				}),
				/* @__PURE__ */ w("td", {
					style: { color: $(e.set - t[n].set) },
					children: [parseFloat(e.set - t[n].set).toFixed(2), " €"]
				}),
				/* @__PURE__ */ w("td", {
					style: { color: $(e.ott - t[n].ott) },
					children: [parseFloat(e.ott - t[n].ott).toFixed(2), " €"]
				}),
				/* @__PURE__ */ w("td", {
					style: { color: $(e.nov - t[n].nov) },
					children: [parseFloat(e.nov - t[n].nov).toFixed(2), " €"]
				}),
				/* @__PURE__ */ w("td", {
					style: { color: $(e.dic - t[n].dic) },
					children: [parseFloat(e.dic - t[n].dic).toFixed(2), " €"]
				}),
				/* @__PURE__ */ w("td", {
					style: { color: $(e.totale_anno - t[n].totale_anno) },
					children: [parseFloat(e.totale_anno - t[n].totale_anno).toFixed(2), " €"]
				})
			] })] }, n)), /* @__PURE__ */ w("tr", { children: [
				/* @__PURE__ */ C("td", {
					style: { fontWeight: "bold" },
					children: e[0].Anno
				}),
				/* @__PURE__ */ w("td", {
					style: { color: $(e[0].gen - t[0].gen, 1) },
					children: [parseFloat(e[0].gen - t[0].gen).toFixed(2), " €"]
				}),
				/* @__PURE__ */ w("td", {
					style: { color: $(e[0].feb - t[0].feb) },
					children: [parseFloat(e[0].feb - t[0].feb).toFixed(2), " €"]
				}),
				/* @__PURE__ */ w("td", {
					style: { color: $(e[0].mar - t[0].mar) },
					children: [parseFloat(e[0].mar - t[0].mar).toFixed(2), " €"]
				}),
				/* @__PURE__ */ w("td", {
					style: { color: $(e[0].apr - t[0].apr) },
					children: [parseFloat(e[0].apr - t[0].apr).toFixed(2), " €"]
				}),
				/* @__PURE__ */ w("td", {
					style: { color: $(e[0].mag - t[0].mag) },
					children: [parseFloat(e[0].mag - t[0].mag).toFixed(2), " €"]
				}),
				/* @__PURE__ */ w("td", {
					style: { color: $(e[0].giu - t[0].giu) },
					children: [parseFloat(e[0].giu - t[0].giu).toFixed(2), " €"]
				}),
				/* @__PURE__ */ w("td", {
					style: { color: $(e[0].lug - t[0].lug) },
					children: [parseFloat(e[0].lug - t[0].lug).toFixed(2), " €"]
				}),
				/* @__PURE__ */ w("td", {
					style: { color: $(e[0].ago - t[0].ago) },
					children: [parseFloat(e[0].ago - t[0].ago).toFixed(2), " €"]
				}),
				/* @__PURE__ */ w("td", {
					style: { color: $(e[0].set - t[0].set) },
					children: [parseFloat(e[0].set - t[0].set).toFixed(2), " €"]
				}),
				/* @__PURE__ */ w("td", {
					style: { color: $(e[0].ott - t[0].ott) },
					children: [parseFloat(e[0].ott - t[0].ott).toFixed(2), " €"]
				}),
				/* @__PURE__ */ w("td", {
					style: { color: $(e[0].nov - t[0].nov) },
					children: [parseFloat(e[0].nov - t[0].nov).toFixed(2), " €"]
				}),
				/* @__PURE__ */ w("td", {
					style: { color: $(e[0].dic - t[0].dic) },
					children: [parseFloat(e[0].dic - t[0].dic).toFixed(2), " €"]
				}),
				/* @__PURE__ */ w("td", {
					style: { color: $(e[0].totale_anno - t[0].totale_anno) },
					children: [parseFloat(e[0].totale_anno - t[0].totale_anno).toFixed(2), " €"]
				})
			] }, 0)] })]
		}) })]
	});
}
function An({ totaleItems: e }) {
	return /* @__PURE__ */ w(Q.StyledCard, { children: [/* @__PURE__ */ C(Q.StyledCardHeader, { children: "Informations" }), /* @__PURE__ */ C(Q.SlideContainer, { children: e && /* @__PURE__ */ C(Q.StyledInputBlock, {
		rows: 1,
		name: "totale_items",
		id: "totale_items",
		type: "text",
		value: e || "Errore!!",
		readOnly: !0
	}) })] });
}
function jn({ datiRicerca: e, setDatiRicerca: t, handleInputChange: n, eseguiRicerca: r, lingua: i }) {
	return /* @__PURE__ */ w(Q.StyledCard, { children: [
		/* @__PURE__ */ C(Q.StyledCardHeader, { children: i === "italiano" ? "Ricerca entrate e uscite" : "Searching for inputs and outputs" }),
		/* @__PURE__ */ w(Q.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: [/* @__PURE__ */ C(Q.StyledInputModifica, {
				rows: 1,
				name: "primo_anno",
				id: "primo_anno",
				type: "number",
				step: 1,
				value: e.primo_anno,
				placeholder: "Primo anno",
				onChange: (e) => n(e, t),
				onContextMenu: (e) => handleRightClick(e, "Primo anno")
			}), /* @__PURE__ */ w(Q.StyledSelectModifica, {
				name: "ultimo_anno",
				id: "ultimo_anno",
				value: e.ultimo_anno,
				onChange: (e) => n(e, t),
				onContextMenu: (e) => handleRightClick(e, "Ultimo anno"),
				children: [
					/* @__PURE__ */ C("option", {
						value: parseInt(e.primo_anno) + 1,
						children: parseInt(e.primo_anno) + 1
					}),
					/* @__PURE__ */ C("option", {
						value: parseInt(e.primo_anno) + 2,
						children: parseInt(e.primo_anno) + 2
					}),
					/* @__PURE__ */ C("option", {
						value: parseInt(e.primo_anno) + 3,
						children: parseInt(e.primo_anno) + 3
					}),
					/* @__PURE__ */ C("option", {
						value: parseInt(e.primo_anno) + 4,
						children: parseInt(e.primo_anno) + 4
					}),
					/* @__PURE__ */ C("option", {
						value: parseInt(e.primo_anno) + 5,
						children: parseInt(e.primo_anno) + 5
					})
				]
			})]
		}),
		/* @__PURE__ */ C(R, {
			eseguiRicerca: (e) => r(e),
			vistaItem: "card",
			StyledComponents: Q
		})
	] });
}
//#endregion
//#region src/Items.jsx
var Mn = ({ tipoItem: e, items: t, setItems: n, selectOperation: r, campi: i, handleBlurItem: a, tipoForm: o, vistaItem: s }) => {
	let c = s === "card" ? xn : Nt, l = () => /* @__PURE__ */ C(S, { children: t.map((o, s) => /* @__PURE__ */ C(c, {
		item: o,
		campi: o ? i(o, null, null, null) : [],
		indici: [...Array(i(o, null, null, null).label.length).keys()],
		selectOperation: r,
		items: t,
		setItems: n,
		tipoItem: e,
		handleBlurItem: a
	}, s)) });
	return /* @__PURE__ */ w(S, { children: [o === "search" && t.length === 0 && /* @__PURE__ */ C("div", {
		className: "contenitore-1",
		children: "Nessun elemento trovato."
	}), t.length > 0 && /* @__PURE__ */ C(S, { children: s === "card" ? /* @__PURE__ */ C("div", {
		className: "contenitore-3",
		children: /* @__PURE__ */ C(l, {})
	}) : /* @__PURE__ */ C(l, {}) })] });
}, Nn = ({ componenti: t, elementi: r, vistaItem: i, vistaForm: a }) => {
	let [o, s] = n("search"), c = a === "form" ? Ke : a === "card" ? yn : jt, l = a === "form" ? qe : a === "card" ? bn : Mt, u = a === "form" ? Xe : a === "card" ? Sn : Pt;
	return /* @__PURE__ */ w(S, { children: [
		/* @__PURE__ */ C(We, {
			elementi: r,
			tipoForm: o,
			setTipoForm: s,
			StyledComponents: N
		}),
		/* @__PURE__ */ C("br", {}),
		" ",
		/* @__PURE__ */ C("br", {}),
		" ",
		/* @__PURE__ */ C("br", {}),
		" ",
		/* @__PURE__ */ C("br", {}),
		r.map((n, r) => /* @__PURE__ */ w(e, { children: [
			n === "insert" && o === "insert" && /* @__PURE__ */ w(S, { children: [
				/* @__PURE__ */ C(c, {
					campi: t.campiNuovoItem,
					indici: t.indiciNuovoItem,
					eseguiSalvataggio: t.handleInsert
				}),
				/* @__PURE__ */ C("br", {}),
				" ",
				/* @__PURE__ */ C("br", {}),
				" ",
				/* @__PURE__ */ C("br", {}),
				" ",
				/* @__PURE__ */ C("br", {})
			] }),
			n === "search" && o === "search" && /* @__PURE__ */ w(S, { children: [
				/* @__PURE__ */ C(l, {
					campi: t.campiRicercaItems,
					indici: t.indiciRicercaItems,
					handleSearch: t.handleSearch
				}),
				/* @__PURE__ */ C("br", {}),
				" ",
				/* @__PURE__ */ C("br", {}),
				" ",
				/* @__PURE__ */ C("br", {}),
				" ",
				/* @__PURE__ */ C("br", {})
			] }),
			n === "file" && o === "file" && /* @__PURE__ */ w(S, { children: [
				/* @__PURE__ */ C(u, {
					campi: t.campiFile,
					indici: t.indiciFile,
					ottieniFileRangePDF: t.handleSearchRangeFilePDF,
					ottieniFileRangeExcel: t.handleSearchRangeFileExcel,
					eliminaItemsRange: t.handleDeleteRangeFile
				}),
				/* @__PURE__ */ C("br", {}),
				" ",
				/* @__PURE__ */ C("br", {}),
				" ",
				/* @__PURE__ */ C("br", {}),
				" ",
				/* @__PURE__ */ C("br", {})
			] })
		] }, r)),
		o !== "file" && /* @__PURE__ */ w(S, { children: [
			/* @__PURE__ */ C(Mn, {
				tipoItem: t.tipoItem,
				items: t.items,
				setItems: t.setItems,
				selectOperation: t.selectOperation,
				campi: t.campiItemEsistente,
				handleBlurItem: t.handleBlurItem,
				tipoForm: o,
				vistaItem: i
			}),
			/* @__PURE__ */ C("br", {}),
			" ",
			/* @__PURE__ */ C("br", {}),
			" ",
			/* @__PURE__ */ C("br", {}),
			" ",
			/* @__PURE__ */ C("br", {}),
			t.visualizzazioneInformazioni === !0 && t.items.length > 0 && /* @__PURE__ */ w(S, { children: [
				/* @__PURE__ */ C("center", { children: /* @__PURE__ */ C(An, { totaleItems: t.totaleItems }) }),
				/* @__PURE__ */ C("br", {}),
				" ",
				/* @__PURE__ */ C("br", {}),
				" ",
				/* @__PURE__ */ C("br", {}),
				" ",
				/* @__PURE__ */ C("br", {})
			] }),
			/* @__PURE__ */ C(He, {
				selectedIdsModifica: t.selectedIdsModifica,
				selectedIdsEliminazione: t.selectedIdsEliminazione,
				handleEdit: t.handleEdit,
				handleDelete: t.handleDelete
			}),
			/* @__PURE__ */ C("br", {}),
			" ",
			/* @__PURE__ */ C("br", {}),
			" ",
			/* @__PURE__ */ C("br", {}),
			" ",
			/* @__PURE__ */ C("br", {})
		] })
	] });
};
//#endregion
export { We as CambioTipoForm, Ge as CambioTipoForm2, En as CardEntrateItems, Dn as CardEntrateItemsByName, jn as CardEntrateUscite, Sn as CardFileItems, An as CardInformazioni, xn as CardItemEsistente, Cn as CardLogin, yn as CardNuovoItem, wn as CardProfilo, kn as CardRicavi, bn as CardRicercaItems, On as CardUsciteItems, Tn as CardWidget, Ze as FormEntrateUscite, Xe as FormFileItems, Je as FormLogin, Ke as FormNuovoItem, Ye as FormProfilo, qe as FormRicercaItems, Nn as PaginaWeb, Lt as RowEntrateUscite, Pt as RowFileItems, Nt as RowItemEsistente, Ft as RowLogin, jt as RowNuovoItem, It as RowProfilo, Mt as RowRicercaItems };
