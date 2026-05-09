import { Fragment as e, useRef as t, useState as n } from "react";
import r from "styled-components";
import i from "react-bootstrap/Card";
import a from "react-bootstrap/ListGroup";
import o from "react-bootstrap/esm/Row";
import s from "react-bootstrap/esm/Col";
import { ChevronDown as c, ChevronLeft as l, ChevronRight as u, ChevronUp as d, Download as f, Euro as p, Eye as m, EyeClosed as h, LogIn as g, Pencil as _, Save as v, Search as y, Trash2 as b, X as x } from "lucide-react";
import { FontAwesomeIcon as S } from "@fortawesome/react-fontawesome";
import { faFile as ee, faFileExcel as te, faFilePdf as ne } from "@fortawesome/free-solid-svg-icons";
import { Fragment as C, jsx as w, jsxs as T } from "react/jsx-runtime";
import { Card as E, Table as D } from "react-bootstrap";
var re = r(i)`
  background-color: #111111;
  overflow: hidden;
  border: 5px solid #000000;
  border-radius: 40px;
  margin-left: 30%;
  margin-right: 30%;

  color: white;
  text-align: center;
`, ie = r(i.Header)`
  color: #ffffff;
  background-color: #000000;
  border: 5px solid #000000;
  min-height: 70px;
`, ae = r(a.Item)`
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  min-height: 70px;
`, oe = r.div`
  overflow: hidden;
  transition: max-height 1.5s ease-out;
`, se = r(o)`
  display: flex;
  flex-wrap: wrap;
  padding-left: 3%;
  padding-right: 3%;
`, ce = r(s)`
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
`, le = r.label`
  width: 100%;
  color: #ffffff;
  background-color: transparent;
  border-radius: 40px;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  min-height: 70px;
  margin-top: 2%;
`, O = r.textarea`
  width: 100%;
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  min-height: 70px;
  margin-bottom: 20px;
`, ue = r(O)`
  background-color: #000000;
`, de = r(O)`
  background-color: #0050EF;
`, fe = r(O)`
  background-color: #500000;
`, k = r.input`
  width: 100%;
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  min-height: 70px;
  margin-bottom: 20px;
`, pe = r(k)`
  background-color: #000000;
`, me = r(k)`
  background-color: #0050EF;
`, he = r(k)`
  background-color: #500000;
`, A = "\n  color: #FFFFFF;\n  cursor: pointer;\n  transition: 0.5s all ease-out;\n", j = `
  ${A}
  &:hover {
    color: #0050EF;
  }
`, ge = `
  ${A}
  &:hover {
    color: #500000;
  }
`, _e = r(v)`
  ${j}
`, ve = r(v)`
  ${A}
`, ye = r(v)`
  ${A}
  color: #0050EF;
`, be = r(h)`
  ${A}
  transition: 0.5s all ease-out;
`, xe = r(m)`
  ${A}
  transition: 0.5s all ease-out;
  color: #0050EF;
`, Se = r(y)`
  ${j}
`, Ce = r(y)`
  ${A}
`, we = r(y)`
  ${A}
  color: #0050EF;
`, Te = r(p)`
  color: #FFFFFF;
  transition: 0.5s all ease-out;
`, Ee = r(d)`
  ${j}
`, De = r(c)`
  ${j}
`, Oe = r(g)`
  ${j}
`, ke = r(S)`
  color: #FFFFFF;
`, Ae = r(S)`
  ${A}
`, je = r(S)`
  ${A}
  color: #0050EF;
`, Me = r(f)`
  ${j}
`;
r(x)`
  ${ge}
`;
var Ne = r(b)`
  ${ge}
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
var Pe = r.select`
  width: 100%;
  min-height: 70px;
  background-color: #0050EF;
  border: 5px solid #000000;
  color: #FFFFFF;
  text-align: center;
`, Fe = r(Pe)`
  background-color: #111111;
`, Ie = r(Pe)`
  background-color: #0050EF;
`, Le = r(Pe)`
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
	StyledListGroupItem: ae,
	StyledRow: se,
	StyledCol: ce,
	StyledSaveNotSelected: _e,
	grandezzaIcona: 50,
	StyledSearchNotSelected: Se,
	StyledArrowTopNotSelected: Ee,
	StyledArrowBottomNotSelected: De,
	StyledLoginNotSelected: Oe,
	StyledPencilNotSelected: r(_)`
  ${A}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,
	StyledLabel: le,
	StyledInputBlock: pe,
	StyledInputModifica: me,
	StyledInputElimina: he,
	StyledTextAreaBlock: ue,
	StyledTextAreaModifica: de,
	StyledTextAreaElimina: fe,
	StyledForm: re,
	StyledHeader: ie,
	SlideContainer: oe,
	StyledSpanErrore: Re,
	StyledSelectBlock: Fe,
	StyledSelectModifica: Ie,
	StyledSelectElimina: Le,
	StyledEyeClosedNotSelected: be,
	StyledEyeOpenNotSelected: xe,
	StyledEuroNotSelected: Te,
	StyledFileIconNotSelected: ke,
	StyledDownloadNotSelected: Me,
	StyledTrashNotSelected: Ne,
	StyledSearchNotSelected2: Ce,
	StyledSaveNotSelected2: ve,
	StyledSearchSelected2: we,
	StyledSaveSelected2: ye,
	StyledFileIconNotSelected2: Ae,
	StyledFileIconSelected2: je
};
//#endregion
//#region src/Tags.js
function ze(e, t) {
	return e === 0 || e === 2 ? t.StyledPencilNotSelected : e === 1 ? t.StyledPencilSelected : _;
}
function Be(e, t) {
	return e === 0 || e === 1 ? t.StyledTrashNotSelected : e === 2 ? t.StyledTrashSelected : b;
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
	return t === "card" || t === "form" ? /* @__PURE__ */ w(n.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "2%",
			paddingBottom: "2%"
		},
		children: /* @__PURE__ */ w(n.StyledRow, { children: /* @__PURE__ */ w(n.StyledCol, { children: /* @__PURE__ */ w(n.StyledSaveNotSelected, {
			className: "salvaItemButton",
			size: n.grandezzaIcona,
			onClick: e
		}) }) })
	}) : /* @__PURE__ */ w(n.StyledColOperazioni, { children: /* @__PURE__ */ w(n.StyledSaveNotSelected, {
		className: "center salvaItemButton",
		size: n.grandezzaIcona,
		onClick: e
	}) });
}
function L({ handleSearch: e, vistaItem: t, StyledComponents: n }) {
	return t === "card" || t === "form" ? /* @__PURE__ */ w(n.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "2%",
			paddingBottom: "2%"
		},
		children: /* @__PURE__ */ w(n.StyledSearchNotSelected, {
			className: "ricercaItemsButton",
			size: n.grandezzaIcona,
			onClick: e
		})
	}) : /* @__PURE__ */ w(n.StyledColOperazioni, { children: /* @__PURE__ */ w("div", {
		style: { width: "100%" },
		children: /* @__PURE__ */ w(n.StyledSearchNotSelected, {
			className: "center ricercaItemsButton",
			size: n.grandezzaIcona,
			onClick: e
		})
	}) });
}
function R({ eseguiRicerca: e, vistaItem: t, StyledComponents: n }) {
	return t === "card" || t === "form" ? /* @__PURE__ */ w(n.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "2%",
			paddingBottom: "2%"
		},
		children: /* @__PURE__ */ w(n.StyledSearchNotSelected, {
			className: "ricercaEntrateUsciteButton",
			size: n.grandezzaIcona,
			onClick: e
		})
	}) : /* @__PURE__ */ w(n.StyledColOperazioni, { children: /* @__PURE__ */ w("div", {
		style: { width: "100%" },
		children: /* @__PURE__ */ w(n.StyledSearchNotSelected, {
			className: "ricercaEntrateUsciteButton",
			size: n.grandezzaIcona,
			onClick: e
		})
	}) });
}
function z({ eseguiLogin: e, vistaItem: t, StyledComponents: n }) {
	return t === "card" || t === "form" ? /* @__PURE__ */ w(n.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "3%",
			paddingBottom: "3%"
		},
		children: /* @__PURE__ */ w(n.StyledLoginNotSelected, {
			className: "loginButton",
			size: n.grandezzaIcona,
			onClick: e
		})
	}) : /* @__PURE__ */ w(n.StyledColOperazioni, { children: /* @__PURE__ */ w(n.StyledLoginNotSelected, {
		className: "center loginButton",
		size: n.grandezzaIcona,
		onClick: e
	}) });
}
function B({ eseguiModificaProfilo: e, vistaItem: t, StyledComponents: n }) {
	let r = t === "form" ? n.StyledPencilNotSelected : n.StyledPencilNotSelected2;
	return t === "card" || t === "form" ? /* @__PURE__ */ w(n.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "2%",
			paddingBottom: "2%"
		},
		children: /* @__PURE__ */ w(r, {
			className: "modificaProfiloButton",
			size: n.grandezzaIcona,
			onClick: e
		})
	}) : /* @__PURE__ */ w(n.StyledColOperazioni, { children: /* @__PURE__ */ w(n.StyledPencilNotSelectedModificaProfilo, {
		className: "center modificaProfiloButton",
		size: n.grandezzaIcona,
		onClick: e
	}) });
}
function V({ ottieniFileRangePDF: e, ottieniFileRangeExcel: t, eliminaItemsRange: n, vistaItem: r, StyledComponents: i }) {
	return r === "card" || r === "form" ? /* @__PURE__ */ T(i.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "3%"
		},
		children: [
			/* @__PURE__ */ T("div", { children: [/* @__PURE__ */ w(i.StyledFileIconNotSelected, {
				icon: ne,
				size: "2xl",
				style: { marginRight: "50%" }
			}), /* @__PURE__ */ w(i.StyledFileIconNotSelected, {
				icon: te,
				size: "2xl"
			})] }),
			/* @__PURE__ */ w("br", {}),
			/* @__PURE__ */ T("div", { children: [/* @__PURE__ */ w(i.StyledDownloadNotSelected, {
				size: i.grandezzaIcona,
				style: { marginRight: "50%" },
				onClick: e
			}), /* @__PURE__ */ w(i.StyledDownloadNotSelected, {
				size: i.grandezzaIcona,
				onClick: t
			})] }),
			/* @__PURE__ */ w("br", {}),
			/* @__PURE__ */ w("div", { children: /* @__PURE__ */ w(i.StyledTrashNotSelected, {
				size: i.grandezzaIcona,
				onClick: n
			}) }),
			/* @__PURE__ */ w("br", {})
		]
	}) : /* @__PURE__ */ T(C, { children: [
		/* @__PURE__ */ w(i.StyledColOperazioni, { children: /* @__PURE__ */ T("div", {
			style: { width: "100%" },
			children: [/* @__PURE__ */ w(i.StyledFileIconNotSelected, {
				icon: ne,
				className: "left",
				style: { marginRight: "50%" },
				size: "2xl"
			}), /* @__PURE__ */ w(i.StyledDownloadNotSelected, {
				size: i.grandezzaIcona,
				className: "rigth",
				onClick: e
			})]
		}) }),
		/* @__PURE__ */ w(i.StyledColOperazioni, { children: /* @__PURE__ */ T("div", {
			style: { width: "100%" },
			children: [/* @__PURE__ */ w(i.StyledFileIconNotSelected, {
				icon: te,
				className: "left",
				style: { marginRight: "50%" },
				size: "2xl"
			}), /* @__PURE__ */ w(i.StyledDownloadNotSelected, {
				size: i.grandezzaIcona,
				className: "rigth",
				onClick: t
			})]
		}) }),
		/* @__PURE__ */ w(i.StyledColOperazioni, { children: /* @__PURE__ */ w("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ w(i.StyledTrashNotSelected2, {
				size: i.grandezzaIcona,
				className: "center",
				onClick: n
			})
		}) })
	] });
}
function Ve({ operazioneModifica: e, operazioneElimina: t, item: n, vistaItem: r, StyledComponents: i }) {
	let a = Be(n.tipo_selezione, i), o = ze(n.tipo_selezione, i);
	return r === "card" || r === "form" ? /* @__PURE__ */ T(i.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000"
		},
		children: [e && /* @__PURE__ */ w(o, {
			className: "modificaItemButton",
			size: i.grandezzaIcona,
			onClick: () => e(n),
			style: { marginRight: "50%" }
		}), t && /* @__PURE__ */ w(a, {
			className: "eliminaItemButton",
			size: i.grandezzaIcona,
			onClick: () => t(n)
		})]
	}) : /* @__PURE__ */ w(i.StyledColOperazioni, { children: /* @__PURE__ */ T("div", {
		style: { width: "100%" },
		children: [e && /* @__PURE__ */ w(o, {
			className: "left modificaItemButton",
			size: i.grandezzaIcona,
			onClick: () => e(n),
			style: { marginRight: "50%" }
		}), t && /* @__PURE__ */ w(a, {
			className: "rigth eliminaItemButton",
			size: i.grandezzaIcona,
			onClick: () => t(n)
		})]
	}) });
}
var He = ({ selectedIdsModifica: e, selectedIdsEliminazione: t, handleEdit: n, handleDelete: r }) => /* @__PURE__ */ w(C, { children: /* @__PURE__ */ w("div", {
	className: "contenitore-2",
	children: /* @__PURE__ */ T(o, { children: [e.length > 0 && /* @__PURE__ */ w(s, { children: /* @__PURE__ */ w("button", {
		className: "bottone-blu-non-selezionato",
		onClick: n,
		children: "Modifica"
	}) }), t.length > 0 && /* @__PURE__ */ w(s, { children: /* @__PURE__ */ w("button", {
		className: "bottone-rosso-non-selezionato",
		onClick: r,
		children: "Elimina"
	}) })] })
}) });
function Ue({ elementi: e, tipoForm: t, setTipoForm: n, StyledComponents: r }) {
	let i = (e) => {
		n(e);
	};
	return /* @__PURE__ */ T(r.StyledListGroupItem, {
		style: {
			border: "5px solid #000000",
			backgroundColor: "#000000",
			paddingTop: "20px",
			paddingBottom: "20px"
		},
		children: [
			e.includes("insert") && t === "insert" && /* @__PURE__ */ T(C, { children: [
				e.includes("search") && /* @__PURE__ */ w(r.StyledSearchNotSelected2, {
					size: r.grandezzaIcona,
					style: { marginRight: "50px" },
					onClick: () => i("search")
				}),
				/* @__PURE__ */ w(r.StyledSaveSelected2, {
					size: r.grandezzaIcona,
					style: { marginRight: "50px" },
					onClick: () => i("insert")
				}),
				e.includes("file") && /* @__PURE__ */ w(r.StyledFileIconNotSelected2, {
					icon: ee,
					size: "2xl",
					onClick: () => i("file")
				})
			] }),
			e.includes("search") && t === "search" && /* @__PURE__ */ T(C, { children: [
				/* @__PURE__ */ w(r.StyledSearchSelected2, {
					size: r.grandezzaIcona,
					style: { marginRight: "50px" },
					onClick: () => i("search")
				}),
				e.includes("insert") && /* @__PURE__ */ w(r.StyledSaveNotSelected2, {
					size: r.grandezzaIcona,
					style: { marginRight: "50px" },
					onClick: () => i("insert")
				}),
				e.includes("file") && /* @__PURE__ */ w(r.StyledFileIconNotSelected2, {
					icon: ee,
					size: "2xl",
					onClick: () => i("file")
				})
			] }),
			e.includes("file") && t === "file" && /* @__PURE__ */ T(C, { children: [
				e.includes("search") && /* @__PURE__ */ w(r.StyledSearchNotSelected2, {
					size: r.grandezzaIcona,
					style: { marginRight: "50px" },
					onClick: () => i("search")
				}),
				e.includes("insert") && /* @__PURE__ */ w(r.StyledSaveNotSelected2, {
					size: r.grandezzaIcona,
					style: { marginRight: "50px" },
					onClick: () => i("insert")
				}),
				/* @__PURE__ */ w(r.StyledFileIconNotSelected2, {
					icon: ee,
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
	return /* @__PURE__ */ w(r.StyledForm, { children: /* @__PURE__ */ w(Ue, {
		elementi: e,
		tipoForm: t,
		setTipoForm: n,
		StyledComponents: r
	}) });
}
function Ge({ elementi: e, tipoForm: t, setTipoForm: n, StyledComponents: r }) {
	return /* @__PURE__ */ w(r.StyledForm, { children: /* @__PURE__ */ w(Ue, {
		elementi: e,
		tipoForm: t,
		setTipoForm: n,
		StyledComponents: r
	}) });
}
function Ke({ campi: t, indici: n, eseguiSalvataggio: r }) {
	return /* @__PURE__ */ T(N.StyledForm, { children: [
		/* @__PURE__ */ w(N.StyledHeader, { children: t.header }),
		/* @__PURE__ */ T(N.SlideContainer, {
			style: {
				maxHeight: "2000px",
				overflowY: "auto"
			},
			children: [
				n.map((n) => {
					let r = t.type[n] ? P(1, !0, N) : F(1, !0, N);
					return /* @__PURE__ */ T(e, { children: [
						/* @__PURE__ */ w(N.StyledLabel, {
							htmlFor: t.name[n],
							children: t.label[n]
						}),
						t.name[n] === "prezzo" ? /* @__PURE__ */ w(N.StyledRow, { children: /* @__PURE__ */ T(C, { children: [
							/* @__PURE__ */ w(r, {
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
							["prezzo", "totale"].includes(t.name[n]) && /* @__PURE__ */ w(N.StyledEuroNotSelected, {
								style: {
									maxWidth: "5%",
									marginTop: "13px"
								},
								size: N.grandezzaIcona,
								onClick: null
							}),
							t.options[n]
						] }) }) : /* @__PURE__ */ T(C, { children: [
							/* @__PURE__ */ w(r, {
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
							["prezzo", "totale"].includes(t.name[n]) && /* @__PURE__ */ w(N.StyledEuroNotSelected, {
								style: {
									maxWidth: "5%",
									marginTop: "13px"
								},
								size: N.grandezzaIcona,
								onClick: null
							}),
							t.options[n]
						] }),
						t.errore[n] !== "" && /* @__PURE__ */ w(N.StyledSpanErrore, { children: t.errore[n] })
					] }, n);
				}),
				/* @__PURE__ */ w("br", {}),
				" ",
				/* @__PURE__ */ w("br", {})
			]
		}),
		/* @__PURE__ */ w(I, {
			eseguiSalvataggio: r,
			vistaItem: "form",
			StyledComponents: N
		})
	] });
}
function qe({ campi: t, indici: r, handleSearch: i }) {
	let [a, o] = n(!0), [s, c] = n(!0);
	return P(1, !0, N), F(1, !0, N), /* @__PURE__ */ T(N.StyledForm, { children: [
		/* @__PURE__ */ w(N.StyledHeader, { children: t.header }),
		/* @__PURE__ */ T(N.SlideContainer, {
			style: {
				maxHeight: "2000px",
				overflowY: "auto"
			},
			children: [
				r.map((n) => {
					let r = t.type[n] ? P(1, !0, N) : F(1, !0, N);
					return /* @__PURE__ */ T(e, { children: [/* @__PURE__ */ w(N.StyledLabel, {
						htmlFor: t.name[n],
						children: t.label[n]
					}), /* @__PURE__ */ w(r, {
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
				/* @__PURE__ */ w("br", {}),
				" ",
				/* @__PURE__ */ w("br", {})
			]
		}),
		/* @__PURE__ */ w(L, {
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
	return /* @__PURE__ */ T(N.StyledForm, { children: [
		/* @__PURE__ */ w(N.StyledHeader, { children: t.header }),
		/* @__PURE__ */ T(N.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: [
				r.map((n) => {
					let r = t.type[n] ? P(1, !0, N) : F(1, !0, N), i = a === "password" ? N.StyledEyeClosedNotSelected : N.StyledEyeOpenNotSelected;
					return /* @__PURE__ */ T(e, { children: [
						/* @__PURE__ */ w(N.StyledLabel, {
							htmlFor: t.name[n],
							children: t.label[n]
						}),
						/* @__PURE__ */ T(N.StyledRow, { children: [/* @__PURE__ */ w(r, {
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
						}), t.name[n] === "password" && /* @__PURE__ */ w(i, {
							style: {
								maxWidth: "5%",
								marginTop: "13px"
							},
							size: N.grandezzaIcona,
							onClick: s
						})] }),
						t.options[n],
						t.errore[n] && /* @__PURE__ */ w(N.StyledSpanErrore, { children: t.errore[n] })
					] }, n);
				}),
				/* @__PURE__ */ w("br", {}),
				" ",
				/* @__PURE__ */ w("br", {})
			]
		}),
		/* @__PURE__ */ w(z, {
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
	return /* @__PURE__ */ T(N.StyledForm, { children: [
		/* @__PURE__ */ w(N.StyledHeader, { children: t.header }),
		/* @__PURE__ */ T(N.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: [
				r.map((n) => {
					let r = t.type[n] ? P(1, !0, N) : F(1, !0, N), i = t.name[n] === "password_attuale" && a === "password" || t.name[n] === "nuova_password" && s === "password" || t.name[n] === "conferma_nuova_password" && l === "password" ? N.StyledEyeClosedNotSelected : N.StyledEyeOpenNotSelected;
					return /* @__PURE__ */ T(e, { children: [
						/* @__PURE__ */ w(N.StyledLabel, {
							htmlFor: t.name[n],
							children: t.label[n]
						}),
						/* @__PURE__ */ T(N.StyledRow, { children: [/* @__PURE__ */ w(r, {
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
						}), t.name[n].includes("password") && /* @__PURE__ */ w(i, {
							style: {
								maxWidth: "5%",
								marginTop: "13px"
							},
							size: N.grandezzaIcona,
							onClick: (e) => d(e, t.name[n])
						})] }),
						t.options[n],
						t.errore[n] && /* @__PURE__ */ w(N.StyledSpanErrore, { children: t.errore[n] })
					] }, n);
				}),
				/* @__PURE__ */ w("br", {}),
				" ",
				/* @__PURE__ */ w("br", {})
			]
		}),
		/* @__PURE__ */ w(B, {
			eseguiModificaProfilo: i,
			vistaItem: "form",
			StyledComponents: N
		})
	] });
}
function Xe({ campi: t, indici: r, ottieniFileRangePDF: i, ottieniFileRangeExcel: a, eliminaItemsRange: o }) {
	let [s, c] = n(!0), [l, u] = n(!0), d = s ? "2000px" : "0px";
	return P(1, !0, N), F(1, !0, N), /* @__PURE__ */ T(N.StyledForm, { children: [
		/* @__PURE__ */ w(N.StyledHeader, { children: t.header }),
		/* @__PURE__ */ T(N.SlideContainer, {
			style: { maxHeight: `${d}` },
			children: [
				r.map((n) => {
					let r = t.type[n] ? P(1, !0, N) : F(1, !0, N);
					return /* @__PURE__ */ T(e, { children: [/* @__PURE__ */ w(N.StyledLabel, {
						htmlFor: t.name[n],
						children: t.label[n]
					}), /* @__PURE__ */ w(r, {
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
				/* @__PURE__ */ w("br", {}),
				" ",
				/* @__PURE__ */ w("br", {})
			]
		}),
		/* @__PURE__ */ w(V, {
			ottieniFileRangePDF: i,
			ottieniFileRangeExcel: a,
			eliminaItemsRange: o,
			vistaItem: "form",
			StyledComponents: N
		})
	] });
}
function Ze({ datiRicerca: e, setDatiRicerca: t, handleInputChange: n, eseguiRicerca: r, lingua: i }) {
	return /* @__PURE__ */ T(N.StyledForm, { children: [
		/* @__PURE__ */ w(N.StyledHeader, { children: i === "italiano" ? "Ricerca entrate e uscite" : "Searching for inputs and outputs" }),
		/* @__PURE__ */ T(N.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: [
				/* @__PURE__ */ w(N.StyledLabel, {
					htmlFor: "primo_anno",
					children: i === "italiano" ? "Primo anno" : "First year"
				}),
				/* @__PURE__ */ w(N.StyledInputModifica, {
					rows: 1,
					name: "primo_anno",
					id: "primo_anno",
					type: "number",
					step: 1,
					value: e.primo_anno,
					placeholder: i === "italiano" ? "Primo anno" : "First year",
					onChange: (e) => n(e, t)
				}),
				/* @__PURE__ */ w(N.StyledLabel, {
					htmlFor: "ultimo_anno",
					children: i === "italiano" ? "Ultimo anno" : "Last year"
				}),
				/* @__PURE__ */ T(N.StyledSelectModifica, {
					name: "ultimo_anno",
					id: "ultimo_anno",
					value: e.ultimo_anno,
					onChange: (e) => n(e, t),
					children: [
						/* @__PURE__ */ w("option", {
							value: parseInt(e.primo_anno) + 1,
							children: parseInt(e.primo_anno) + 1
						}),
						/* @__PURE__ */ w("option", {
							value: parseInt(e.primo_anno) + 2,
							children: parseInt(e.primo_anno) + 2
						}),
						/* @__PURE__ */ w("option", {
							value: parseInt(e.primo_anno) + 3,
							children: parseInt(e.primo_anno) + 3
						}),
						/* @__PURE__ */ w("option", {
							value: parseInt(e.primo_anno) + 4,
							children: parseInt(e.primo_anno) + 4
						}),
						/* @__PURE__ */ w("option", {
							value: parseInt(e.primo_anno) + 5,
							children: parseInt(e.primo_anno) + 5
						})
					]
				}),
				/* @__PURE__ */ w("br", {}),
				" ",
				/* @__PURE__ */ w("br", {})
			]
		}),
		/* @__PURE__ */ w(R, {
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
`, G = r.input`
  ${U}
`, rt = r(G)`
  background-color: #111111;
`, it = r(G)`
  background-color: #0050EF;
`, at = r(G)`
  background-color: #500000;
`, ot = r.button`
  ${U}
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
var K = "\n  color: #FFFFFF;\n  cursor: pointer;\n", ct = r(v)`
  ${K}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, lt = r(h)`
  ${K}
  transition: 0.5s all ease-out;
`, ut = r(m)`
  ${K}
  transition: 0.5s all ease-out;
  color: #0050EF;
`, dt = r(y)`
  ${K}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, ft = r(p)`
  color: #FFFFFF;
  transition: 0.5s all ease-out;
`, pt = r(l)`
  ${K}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, mt = r(u)`
  ${K}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, ht = r(g)`
  ${K}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, gt = r(_)`
  ${K}
`, _t = r(_)`
  ${K}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, vt = r(_)`
  color: #0050EF;
  cursor: pointer;
`, yt = r(b)`
  ${K}
`, bt = r(b)`
  color: #500000;
  cursor: pointer;
`, xt = r(S)`
  color: #FFFFFF;
`, St = r(S)`
  ${K}
  color: #0050EF;
`, Ct = r(f)`
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
var wt = r(b)`
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
`, Tt = r(q)`
  background-color: #111111;
`, Et = r(q)`
  background-color: #0050EF;
`, Dt = r(q)`
  background-color: #500000;
`;
r.option`
  background-color: #0050EF;
  &:hover {
    background-color: #0050EF;
  }
`;
var J = {
	StyledPencilNotSelected: gt,
	StyledPencilSelected: vt,
	grandezzaIcona: 50,
	StyledTrashNotSelected: yt,
	StyledTrashSelected: bt,
	StyledColOperazioni: $e,
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
	StyledSelectBlock: Tt,
	StyledSelectModifica: Et,
	StyledSelectElimina: Dt,
	StyledEyeClosedNotSelected: lt,
	StyledEyeOpenNotSelected: ut,
	StyledEuroNotSelected: ft,
	StyledFileIconSelected2: St
}, Ot = (e, t, n) => {
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
}, kt = (e) => {
	["giorno_spesa", "giorno_lavoro"].includes(e.target.id) ? e.target.type = "date" : ["prezzo_servizio", "totale_spesa"].includes(e.target.id) && (e.target.value = e.target.value.substr(0, e.target.value.length - 2));
};
//#endregion
//#region src/row_item/RowItem.jsx
function At({ campi: t, indici: n, eseguiSalvataggio: r }) {
	P(1, !0, J), F(1, !0, J);
	let i = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ T(J.StyledRow, { children: [/* @__PURE__ */ w(I, {
		eseguiSalvataggio: r,
		vistaItem: "row",
		StyledComponents: J
	}), n.map((n) => {
		let r = t.type[n] ? P(1, !0, J) : F(1, !0, J);
		return /* @__PURE__ */ w(e, { children: /* @__PURE__ */ w(J.StyledCol, { children: /* @__PURE__ */ T("div", {
			style: { width: "100%" },
			children: [/* @__PURE__ */ T(J.StyledRow, { children: [
				/* @__PURE__ */ w(r, {
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
				["prezzo", "totale"].includes(t.name[n]) && /* @__PURE__ */ w(J.StyledEuroNotSelected, {
					style: {
						maxWidth: "10%",
						marginLeft: "-6px"
					},
					size: J.grandezzaIcona,
					onClick: null
				}),
				t.options[n]
			] }), t.errore[n] !== "" && /* @__PURE__ */ w(J.StyledSpanErrore, { children: t.errore[n] })]
		}) }) }, n);
	})] });
}
function jt({ campi: t, indici: r, handleSearch: i }) {
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
	P(1, !0, J), F(1, !0, J);
	let l = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ T(J.StyledRow, { children: [/* @__PURE__ */ w(L, {
		visibilita: a,
		setVisibilita: o,
		arrowUp: s,
		setArrowUp: c,
		handleSearch: i,
		vistaItem: "row",
		StyledComponents: J
	}), r.map((n) => {
		let r = t.type[n] ? P(1, !0, J) : F(1, !0, J);
		return /* @__PURE__ */ w(e, { children: /* @__PURE__ */ w(J.StyledCol, { children: /* @__PURE__ */ w("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ w(J.StyledRow, { children: a[n] && /* @__PURE__ */ T(C, { children: [/* @__PURE__ */ w(r, {
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
			].includes(t.name[n]) && /* @__PURE__ */ w(J.StyledEuroNotSelected, {
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
function Mt({ item: t, campi: r, indici: i, operazioneModifica: a, operazioneElimina: o, tipoItem: s, handleBlurItem: c }) {
	let l = P(r.tipoSelezione, !1, J), [u, d] = n(() => i.reduce((e, t) => ({
		...e,
		[t]: r.value[t]
	}), {})), f = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ T(J.StyledRow, { children: [
		/* @__PURE__ */ w(Ve, {
			operazioneModifica: a,
			operazioneElimina: o,
			item: t,
			vistaItem: "card",
			StyledComponents: J
		}),
		/* @__PURE__ */ w(J.StyledCol, { children: /* @__PURE__ */ w("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ w(J.StyledRow, { children: /* @__PURE__ */ w(l, {
				rows: 1,
				name: "header",
				value: r.header,
				placeholder: r.header,
				readOnly: !0
			}) })
		}) }),
		i.map((n) => {
			let i = r.type[n] ? P(r.tipoSelezione, r.valoreModificabile[n], J) : F(r.tipoSelezione, r.valoreModificabile[n], J);
			return /* @__PURE__ */ w(e, { children: /* @__PURE__ */ w(J.StyledCol, { children: /* @__PURE__ */ T("div", {
				style: { width: "100%" },
				children: [/* @__PURE__ */ T(J.StyledRow, { children: [
					/* @__PURE__ */ w(i, {
						style: ["prezzo", "totale"].includes(r.name[n]) ? { maxWidth: "80%" } : null,
						rows: 1,
						name: r.name[n],
						id: r.id[n],
						type: r.type[n],
						step: r.step[n],
						value: u[n],
						placeholder: r.placeholder[n],
						onChange: (e) => Ot(e, n, d),
						onBlur: (e) => c(e, t),
						onClick: (e) => kt(e),
						readOnly: t.tipo_selezione !== 1,
						onContextMenu: (e) => f(e, r.placeholder[n])
					}),
					["prezzo", "totale"].includes(r.name[n]) && /* @__PURE__ */ w(J.StyledEuroNotSelected, {
						style: {
							maxWidth: "20%",
							marginLeft: "-6px"
						},
						size: J.grandezzaIcona
					}),
					r.options[n]
				] }), r.errore[n] && /* @__PURE__ */ w(J.StyledSpanErrore, { children: r.errore[n] })]
			}) }) }, n);
		})
	] });
}
function Nt({ campi: t, indici: n, ottieniFileRangePDF: r, ottieniFileRangeExcel: i, eliminaItemsRange: a }) {
	let o = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ T(J.StyledRow, { children: [/* @__PURE__ */ w(V, {
		ottieniFileRangePDF: r,
		ottieniFileRangeExcel: i,
		eliminaItemsRange: a,
		vistaItem: "row",
		StyledComponents: J
	}), n.map((n) => {
		let r = t.type[n] ? P(1, !0, J) : F(1, !0, J);
		return /* @__PURE__ */ w(e, { children: /* @__PURE__ */ w(J.StyledCol, { children: /* @__PURE__ */ w("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ w(J.StyledRow, { children: /* @__PURE__ */ w(r, {
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
function Pt({ campi: t, indici: r, eseguiLogin: i }) {
	let [a, o] = n("password"), s = (e) => {
		e.preventDefault(), o(a === "text" ? "password" : "text");
	}, c = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ T(J.StyledRow, { children: [/* @__PURE__ */ w(z, {
		eseguiLogin: i,
		vistaItem: "row",
		StyledComponents: J
	}), r.map((n) => {
		let r = t.type[n] ? P(1, !0, J) : F(1, !0, J), i = a === "password" ? J.StyledEyeClosedNotSelected : J.StyledEyeOpenNotSelected;
		return /* @__PURE__ */ w(e, { children: /* @__PURE__ */ w(J.StyledCol, { children: /* @__PURE__ */ T("div", {
			style: { width: "100%" },
			children: [
				/* @__PURE__ */ T(J.StyledRow, { children: [/* @__PURE__ */ w(r, {
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
				}), t.name[n] === "password" && /* @__PURE__ */ w(i, {
					style: {
						maxWidth: "20%",
						marginLeft: "-6px"
					},
					size: J.grandezzaIcona,
					onClick: s
				})] }),
				t.options[n],
				t.errore[n] && /* @__PURE__ */ w(J.StyledSpanErrore, { children: t.errore[n] })
			]
		}) }) }, n);
	})] });
}
function Ft({ campi: t, indici: r, eseguiModificaProfilo: i }) {
	let [a, o] = n("password"), [s, c] = n("password"), [l, u] = n("password"), d = (e, t) => {
		e.preventDefault(), t === "password_attuale" ? o(a === "text" ? "password" : "text") : t === "nuova_password" ? c(s === "text" ? "password" : "text") : t === "conferma_nuova_password" && u(l === "text" ? "password" : "text");
	};
	return /* @__PURE__ */ T(J.StyledRow, { children: [/* @__PURE__ */ w(B, {
		eseguiModificaProfilo: i,
		vistaItem: "row",
		StyledComponents: J
	}), r.map((n) => {
		let r = t.type[n] ? P(1, !0, J) : F(1, !0, J), i = t.name[n] === "password_attuale" && a === "password" || t.name[n] === "nuova_password" && s === "password" || t.name[n] === "conferma_nuova_password" && l === "password" ? J.StyledEyeClosedNotSelected : J.StyledEyeOpenNotSelected;
		return /* @__PURE__ */ w(e, { children: /* @__PURE__ */ w(J.StyledCol, { children: /* @__PURE__ */ T("div", {
			style: { width: "100%" },
			children: [
				/* @__PURE__ */ T(J.StyledRow, { children: [/* @__PURE__ */ w(r, {
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
				}), t.name[n].includes("password") && /* @__PURE__ */ w(i, {
					style: {
						maxWidth: "20%",
						marginLeft: "-6px"
					},
					size: J.grandezzaIcona,
					onClick: (e) => d(e, t.name[n])
				})] }),
				t.options[n],
				t.errore[n] && /* @__PURE__ */ w(J.StyledSpanErrore, { children: t.errore[n] })
			]
		}) }) }, n);
	})] });
}
function It({ datiRicerca: e, setDatiRicerca: t, handleInputChange: n, eseguiRicerca: r, lingua: i }) {
	return /* @__PURE__ */ T(J.StyledRow, { children: [
		/* @__PURE__ */ w(R, {
			eseguiRicerca: (e) => r(e),
			vistaItem: "row",
			StyledComponents: J
		}),
		/* @__PURE__ */ w(J.StyledCol, { children: /* @__PURE__ */ w("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ w(J.StyledRow, { children: /* @__PURE__ */ w(J.StyledInputBlock, {
				rows: 1,
				name: "header",
				value: i === "italiano" ? "Ricerca entrate e uscite" : "Searching for inputs and outputs",
				placeholder: i === "italiano" ? "Ricerca entrate e uscite" : "Searching for inputs and outputs",
				readOnly: !0
			}) })
		}) }),
		/* @__PURE__ */ w(J.StyledCol, { children: /* @__PURE__ */ w("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ w(J.StyledInputModifica, {
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
		/* @__PURE__ */ w(J.StyledCol, { children: /* @__PURE__ */ w("div", {
			style: { width: "100%" },
			children: /* @__PURE__ */ T(J.StyledSelectModifica, {
				name: "ultimo_anno",
				id: "ultimo_anno",
				onContextMenu: (e) => handleRightClick(e, "Ultimo anno"),
				value: e.ultimo_anno,
				onChange: (e) => n(e, t),
				children: [
					/* @__PURE__ */ w("option", {
						value: parseInt(e.primo_anno) + 1,
						children: parseInt(e.primo_anno) + 1
					}),
					/* @__PURE__ */ w("option", {
						value: parseInt(e.primo_anno) + 2,
						children: parseInt(e.primo_anno) + 2
					}),
					/* @__PURE__ */ w("option", {
						value: parseInt(e.primo_anno) + 3,
						children: parseInt(e.primo_anno) + 3
					}),
					/* @__PURE__ */ w("option", {
						value: parseInt(e.primo_anno) + 4,
						children: parseInt(e.primo_anno) + 4
					}),
					/* @__PURE__ */ w("option", {
						value: parseInt(e.primo_anno) + 5,
						children: parseInt(e.primo_anno) + 5
					})
				]
			})
		}) })
	] });
}
var Lt = r(i)`
  width: 18rem;
  background-color: transparent;
  overflow: hidden;
  border-radius: 40px;
  color: white;
  text-align: center;
  padding: 0;
  border: transparent;
`, Rt = r(o)`
  display: flex;
  flex-wrap: wrap;
`, zt = r(s)`
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
`, Bt = r(i.Header)`
  color: #ffffff;
  background-color: #000000;
  border: 5px solid #000000;
  min-height: 70px;
`, Vt = r(a.Item)`
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  min-height: 70px;
`, Ht = r.div`
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
`, Ut = r(Y)`
  background-color: #111111;
`, Wt = r(Y)`
  background-color: #0050EF;
`, Gt = r(Y)`
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
`, Kt = r(X)`
  background-color: #111111;
`, qt = r(X)`
  background-color: #0050EF;
`, Jt = r(X)`
  background-color: #500000;
`, Z = "\n  color: #FFFFFF;\n  cursor: pointer;\n";
r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-top:10px;
`;
var Yt = r(v)`
  ${Z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, Xt = r(h)`
  ${Z}
  transition: 0.5s all ease-out;
`, Zt = r(m)`
  ${Z}
  transition: 0.5s all ease-out;
  color: #0050EF;
`, Qt = r(y)`
  ${Z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, $t = r(p)`
  color: #FFFFFF;
  transition: 0.5s all ease-out;
`, en = r(d)`
  ${Z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, tn = r(c)`
  ${Z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, nn = r(g)`
  ${Z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, rn = r(_)`
  ${Z}
`;
r(_)`
  ${Z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`;
var an = r(_)`
  color: #0050EF;
  cursor: pointer;
`, on = r(b)`
  ${Z}
`, sn = r(b)`
  color: #500000;
  cursor: pointer;
`, cn = r(S)`
  color: #FFFFFF;
`, ln = r(S)`
  ${Z}
  color: #0050EF;
`, un = r(f)`
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
var dn = r(_)`
  ${Z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`, fn = r(b)`
  ${Z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #500000;
  }
`, pn = r.select`
  width: 100%;
  min-height: 70px;
  background-color: #0050EF;
  border: 5px solid #000000;
  color: #FFFFFF;
  text-align: center;
`, mn = r(pn)`
  background-color: #111111;
`, hn = r(pn)`
  background-color: #0050EF;
`, gn = r(pn)`
  background-color: #500000;
`;
r.option`

  background-color: #0050EF;
  &:hover {
    background-color: #0050EF;
  }
`;
var Q = {
	StyledPencilNotSelected: rn,
	StyledPencilSelected: an,
	grandezzaIcona: 50,
	StyledTrashNotSelected: on,
	StyledTrashSelected: sn,
	StyledListGroupItem: Vt,
	StyledRow: Rt,
	StyledCol: zt,
	StyledSaveNotSelected: Yt,
	StyledEyeOpenNotSelected: Zt,
	StyledEyeClosedNotSelected: Xt,
	StyledSearchNotSelected: Qt,
	StyledArrowTopNotSelected: en,
	StyledArrowBottomNotSelected: tn,
	StyledFileIconNotSelected: cn,
	StyledDownloadNotSelected: un,
	StyledTrashNotSelected2: fn,
	StyledLoginNotSelected: nn,
	StyledPencilNotSelected2: dn,
	StyledSelectBlock: mn,
	StyledSelectModifica: hn,
	StyledSelectElimina: gn,
	StyledInputBlock: Kt,
	StyledInputModifica: qt,
	StyledInputElimina: Jt,
	StyledTextAreaBlock: Ut,
	StyledTextAreaModifica: Wt,
	StyledTextAreaElimina: Gt,
	StyledCard: Lt,
	StyledCardHeader: Bt,
	SlideContainer: Ht,
	StyledSpanErrore: r.span`
  color: #FFFFFF;
  padding: 10px;
`,
	StyledEuroNotSelected: $t,
	StyledFileIconSelected2: ln
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
	return /* @__PURE__ */ w("center", { children: /* @__PURE__ */ T(Q.StyledCard, { children: [
		/* @__PURE__ */ w(Q.StyledCardHeader, { children: t.header }),
		/* @__PURE__ */ w(Q.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: n.map((n) => {
				let r = t.type[n] ? P(1, !0, Q) : F(1, !0, Q);
				return /* @__PURE__ */ T(e, { children: [/* @__PURE__ */ T(Q.StyledRow, { children: [/* @__PURE__ */ w(r, {
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
				}), t.options[n]] }), t.errore[n] !== "" && /* @__PURE__ */ w(Q.StyledSpanErrore, { children: t.errore[n] })] }, n);
			})
		}),
		/* @__PURE__ */ w(I, {
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
	return /* @__PURE__ */ w("center", { children: /* @__PURE__ */ T(Q.StyledCard, { children: [
		/* @__PURE__ */ w(Q.StyledCardHeader, { children: t.header }),
		/* @__PURE__ */ w(Q.SlideContainer, {
			style: { maxHeight: `${l}` },
			children: r.map((n) => {
				let r = t.type[n] ? P(1, !0, Q) : F(1, !0, Q);
				return /* @__PURE__ */ w(e, { children: /* @__PURE__ */ w(Q.StyledRow, { children: /* @__PURE__ */ w(r, {
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
		/* @__PURE__ */ w(L, {
			setIsVisible: o,
			arrowUp: s,
			setArrowUp: c,
			handleSearch: i,
			vistaItem: "card",
			StyledComponents: Q
		})
	] }) });
}
function xn({ item: r, campi: i, indici: a, operazioneModifica: o, operazioneElimina: s, handleBlurItem: c }) {
	let l = t([]), [u, d] = n(() => a.reduce((e, t) => ({
		...e,
		[t]: i.value[t]
	}), {})), f = (e, t) => {
		e.preventDefault(), alert(t);
	};
	return /* @__PURE__ */ T(Q.StyledCard, { children: [
		/* @__PURE__ */ w(Q.StyledCardHeader, { children: i.header }),
		/* @__PURE__ */ w(Q.SlideContainer, { children: a.map((t) => {
			let n = i.type[t] ? P(i.tipoSelezione, i.valoreModificabile[t], Q) : F(i.tipoSelezione, i.valoreModificabile[t], Q);
			return /* @__PURE__ */ T(e, { children: [/* @__PURE__ */ T(Q.StyledRow, { children: [/* @__PURE__ */ w(n, {
				ref: (e) => l.current[t] = e,
				rows: 1,
				name: i.name[t],
				id: i.id[t],
				type: i.type[t],
				step: i.step[t],
				value: u[t],
				placeholder: i.placeholder[t],
				onChange: (e) => Ot(e, t, d),
				onBlur: (e) => c(e, r),
				onClick: (e) => kt(e),
				readOnly: r.tipo_selezione !== 1,
				onContextMenu: (e) => f(e, i.placeholder[t])
			}), i.options[t]] }), i.errore[t] && /* @__PURE__ */ w(Q.StyledSpanErrore, { children: i.errore[t] })] }, `input-${t}`);
		}) }),
		/* @__PURE__ */ w(Ve, {
			operazioneModifica: o,
			operazioneElimina: s,
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
	return /* @__PURE__ */ w("center", { children: /* @__PURE__ */ T(Q.StyledCard, { children: [
		/* @__PURE__ */ w(Q.StyledCardHeader, { children: t.header }),
		/* @__PURE__ */ w(Q.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: n.map((n) => /* @__PURE__ */ w(e, { children: /* @__PURE__ */ w(t.type[n] ? P(1, !0, Q) : F(1, !0, Q), {
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
		/* @__PURE__ */ w(V, {
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
	return /* @__PURE__ */ w("center", { children: /* @__PURE__ */ T(Q.StyledCard, { children: [
		/* @__PURE__ */ w(Q.StyledCardHeader, { children: t.header }),
		/* @__PURE__ */ w(Q.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: r.map((n) => {
				let r = t.type[n] ? P(1, !0, Q) : F(1, !0, Q), i = a === "password" ? Q.StyledEyeClosedNotSelected : Q.StyledEyeOpenNotSelected;
				return /* @__PURE__ */ T(e, { children: [
					/* @__PURE__ */ T(Q.StyledRow, { children: [/* @__PURE__ */ w(r, {
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
					}), t.name[n] === "password" && /* @__PURE__ */ w(i, {
						style: {
							maxWidth: "20%",
							marginLeft: "-6px",
							marginTop: "13px"
						},
						size: Q.grandezzaIcona,
						onClick: s
					})] }),
					t.options[n],
					t.errore[n] && /* @__PURE__ */ w(Q.StyledSpanErrore, { children: t.errore[n] })
				] }, n);
			})
		}),
		/* @__PURE__ */ w(z, {
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
	return /* @__PURE__ */ w("center", { children: /* @__PURE__ */ T(Q.StyledCard, { children: [
		/* @__PURE__ */ w(Q.StyledCardHeader, { children: t.header }),
		/* @__PURE__ */ w(Q.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: r.map((n) => {
				let r = t.type[n] ? P(1, !0, Q) : F(1, !0, Q), i = t.name[n] === "password_attuale" && a === "password" || t.name[n] === "nuova_password" && s === "password" || t.name[n] === "conferma_nuova_password" && l === "password" ? Q.StyledEyeClosedNotSelected : Q.StyledEyeOpenNotSelected;
				return /* @__PURE__ */ T(e, { children: [
					/* @__PURE__ */ T(Q.StyledRow, { children: [/* @__PURE__ */ w(r, {
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
					}), t.name[n].includes("password") && /* @__PURE__ */ w(i, {
						style: {
							maxWidth: "20%",
							marginLeft: "-6px",
							marginTop: "13px"
						},
						size: Q.grandezzaIcona,
						onClick: (e) => d(e, t.name[n])
					})] }),
					t.options[n],
					t.errore[n] && /* @__PURE__ */ w(Q.StyledSpanErrore, { children: t.errore[n] })
				] }, n);
			})
		}),
		/* @__PURE__ */ w(B, {
			eseguiModificaProfilo: i,
			vistaItem: "card",
			StyledComponents: Q
		})
	] }) });
}
function Tn({ nome: e, img: t, id: n, onClickWidget: r, backgroundColor: i }) {
	return /* @__PURE__ */ T(E, {
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
		children: [/* @__PURE__ */ w(E.Img, {
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
		}), /* @__PURE__ */ w(E.Body, { children: /* @__PURE__ */ w(E.Title, {
			style: {
				color: "#FFFFFF",
				textAlign: "center"
			},
			children: e
		}) })]
	});
}
function En({ entrateItems: e, lingua: t, etichettaIta: n, etichettaEng: r }) {
	return /* @__PURE__ */ T(E, {
		style: {
			display: "inline-block",
			backgroundColor: "rgba(0, 0, 0, 0.5)",
			borderRadius: "50px",
			paddingLeft: "50px",
			paddingRight: "50px",
			paddingBottom: "50px",
			overflowX: "auto"
		},
		children: [/* @__PURE__ */ w(E.Body, { children: /* @__PURE__ */ w("center", { children: /* @__PURE__ */ w(E.Title, {
			style: { color: "#FFFFFF" },
			children: t === "italiano" ? n : r
		}) }) }), /* @__PURE__ */ w("center", { children: /* @__PURE__ */ T(D, {
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
				/* @__PURE__ */ w("thead", { children: /* @__PURE__ */ T("tr", { children: [
					/* @__PURE__ */ w("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "ANNO" : "YEAR"
					}),
					/* @__PURE__ */ w("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "GEN" : "JAN"
					}),
					/* @__PURE__ */ w("th", {
						style: { color: "#FFFFFF" },
						children: "FEB"
					}),
					/* @__PURE__ */ w("th", {
						style: { color: "#FFFFFF" },
						children: "MAR"
					}),
					/* @__PURE__ */ w("th", {
						style: { color: "#FFFFFF" },
						children: "APR"
					}),
					/* @__PURE__ */ w("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "MAG" : "MAY"
					}),
					/* @__PURE__ */ w("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "GIU" : "JUN"
					}),
					/* @__PURE__ */ w("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "LUG" : "JUL"
					}),
					/* @__PURE__ */ w("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "AGO" : "AUG"
					}),
					/* @__PURE__ */ w("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "SET" : "SEP"
					}),
					/* @__PURE__ */ w("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "OTT" : "OCT"
					}),
					/* @__PURE__ */ w("th", {
						style: { color: "#FFFFFF" },
						children: "NOV"
					}),
					/* @__PURE__ */ w("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "DIC" : "DEC"
					}),
					/* @__PURE__ */ w("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "TOT ENTRATE" : "TOT REVENUE"
					})
				] }) }),
				/* @__PURE__ */ w("tbody", { children: e.map((e, t) => t > 1 && /* @__PURE__ */ w("tr", { children: Object.values(e).map((e, t) => /* @__PURE__ */ w("td", {
					style: {
						color: $(e, t, "entrata"),
						fontWeight: t === 0 ? "bold" : null
					},
					children: t > 0 ? parseFloat(e).toFixed(2) + " €" : e
				}, t)) }, t)) }),
				/* @__PURE__ */ w("tbody", { children: /* @__PURE__ */ w("tr", { children: Object.values(e[0]).map((e, t) => /* @__PURE__ */ w("td", {
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
	return /* @__PURE__ */ T(E, {
		style: {
			display: "inline-block",
			backgroundColor: "rgba(0, 0, 0, 0.5)",
			borderRadius: "50px",
			paddingLeft: "50px",
			paddingRight: "50px",
			paddingBottom: "50px",
			overflowX: "auto"
		},
		children: [/* @__PURE__ */ w(E.Body, { children: /* @__PURE__ */ w("center", { children: /* @__PURE__ */ w(E.Title, {
			style: { color: "#FFFFFF" },
			children: r === "italiano" ? o : s
		}) }) }), /* @__PURE__ */ w("center", { children: /* @__PURE__ */ T(D, {
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
			children: [/* @__PURE__ */ w("thead", {}), /* @__PURE__ */ w("tbody", { children: t.map((n, o) => /* @__PURE__ */ T(e, { children: [(o === 0 || t[o].anno !== t[o - 1].anno) && /* @__PURE__ */ T(C, { children: [/* @__PURE__ */ w("tr", { children: /* @__PURE__ */ T("th", {
				colSpan: 14,
				children: [
					r === "italiano" ? "ANNO" : "YEAR",
					" = ",
					n.anno
				]
			}) }), /* @__PURE__ */ T("tr", { children: [
				/* @__PURE__ */ w("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? i : a
				}),
				/* @__PURE__ */ w("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "GEN" : "JAN"
				}),
				/* @__PURE__ */ w("th", {
					style: { color: "#FFFFFF" },
					children: "FEB"
				}),
				/* @__PURE__ */ w("th", {
					style: { color: "#FFFFFF" },
					children: "MAR"
				}),
				/* @__PURE__ */ w("th", {
					style: { color: "#FFFFFF" },
					children: "APR"
				}),
				/* @__PURE__ */ w("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "MAG" : "MAY"
				}),
				/* @__PURE__ */ w("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "GIU" : "JUN"
				}),
				/* @__PURE__ */ w("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "LUG" : "JUL"
				}),
				/* @__PURE__ */ w("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "AGO" : "AUG"
				}),
				/* @__PURE__ */ w("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "SET" : "SEP"
				}),
				/* @__PURE__ */ w("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "OTT" : "OCT"
				}),
				/* @__PURE__ */ w("th", {
					style: { color: "#FFFFFF" },
					children: "NOV"
				}),
				/* @__PURE__ */ w("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "DIC" : "DEC"
				}),
				/* @__PURE__ */ w("th", {
					style: { color: "#FFFFFF" },
					children: r === "italiano" ? "TOT ENTRATE" : "TOT REVENUE"
				})
			] })] }), /* @__PURE__ */ T("tr", { children: [
				/* @__PURE__ */ w("td", {
					style: {
						color: "#FFFFFF",
						fontWeight: "bold"
					},
					children: n.nome
				}),
				/* @__PURE__ */ T("td", {
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
				/* @__PURE__ */ T("td", {
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
				/* @__PURE__ */ T("td", {
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
				/* @__PURE__ */ T("td", {
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
				/* @__PURE__ */ T("td", {
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
				/* @__PURE__ */ T("td", {
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
				/* @__PURE__ */ T("td", {
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
				/* @__PURE__ */ T("td", {
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
				/* @__PURE__ */ T("td", {
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
				/* @__PURE__ */ T("td", {
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
				/* @__PURE__ */ T("td", {
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
				/* @__PURE__ */ T("td", {
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
				/* @__PURE__ */ T("td", {
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
	return /* @__PURE__ */ T(E, {
		style: {
			display: "inline-block",
			backgroundColor: "rgba(0, 0, 0, 0.5)",
			borderRadius: "50px",
			paddingLeft: "50px",
			paddingRight: "50px",
			paddingBottom: "50px",
			overflowX: "auto"
		},
		children: [/* @__PURE__ */ w(E.Body, { children: /* @__PURE__ */ w("center", { children: /* @__PURE__ */ w(E.Title, {
			style: { color: "#FFFFFF" },
			children: t === "italiano" ? n : r
		}) }) }), /* @__PURE__ */ w("center", { children: /* @__PURE__ */ T(D, {
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
				/* @__PURE__ */ w("thead", { children: /* @__PURE__ */ T("tr", { children: [
					/* @__PURE__ */ w("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "ANNO" : "YEAR"
					}),
					/* @__PURE__ */ w("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "GEN" : "JAN"
					}),
					/* @__PURE__ */ w("th", {
						style: { color: "#FFFFFF" },
						children: "FEB"
					}),
					/* @__PURE__ */ w("th", {
						style: { color: "#FFFFFF" },
						children: "MAR"
					}),
					/* @__PURE__ */ w("th", {
						style: { color: "#FFFFFF" },
						children: "APR"
					}),
					/* @__PURE__ */ w("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "MAG" : "MAY"
					}),
					/* @__PURE__ */ w("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "GIU" : "JUN"
					}),
					/* @__PURE__ */ w("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "LUG" : "JUL"
					}),
					/* @__PURE__ */ w("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "AGO" : "AUG"
					}),
					/* @__PURE__ */ w("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "SET" : "SEP"
					}),
					/* @__PURE__ */ w("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "OTT" : "OCT"
					}),
					/* @__PURE__ */ w("th", {
						style: { color: "#FFFFFF" },
						children: "NOV"
					}),
					/* @__PURE__ */ w("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "DIC" : "DEC"
					}),
					/* @__PURE__ */ w("th", {
						style: { color: "#FFFFFF" },
						children: t === "italiano" ? "TOT USCITE" : "TOT EXIT"
					})
				] }) }),
				/* @__PURE__ */ w("tbody", { children: e.map((e, t) => t > 1 && /* @__PURE__ */ w("tr", { children: Object.values(e).map((e, t) => /* @__PURE__ */ w("td", {
					style: {
						color: $(-e, t, "uscita"),
						fontWeight: t === 0 ? "bold" : null
					},
					children: t > 0 ? parseFloat(-e).toFixed(2) + " €" : e
				}, t)) }, t)) }),
				/* @__PURE__ */ w("tbody", { children: /* @__PURE__ */ w("tr", { children: Object.values(e[0]).map((e, t) => /* @__PURE__ */ w("td", {
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
	return /* @__PURE__ */ T(E, {
		style: {
			display: "inline-block",
			backgroundColor: "rgba(0, 0, 0, 0.5)",
			borderRadius: "50px",
			paddingLeft: "50px",
			paddingRight: "50px",
			paddingBottom: "50px",
			overflowX: "auto"
		},
		children: [/* @__PURE__ */ w(E.Body, { children: /* @__PURE__ */ w("center", { children: /* @__PURE__ */ w(E.Title, {
			style: { color: "#FFFFFF" },
			children: n === "italiano" ? "Ricavi" : "Revenues"
		}) }) }), /* @__PURE__ */ w("center", { children: /* @__PURE__ */ T(D, {
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
			children: [/* @__PURE__ */ w("thead", { children: /* @__PURE__ */ T("tr", { children: [
				/* @__PURE__ */ w("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "ANNO" : "YEAR"
				}),
				/* @__PURE__ */ w("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "GEN" : "JAN"
				}),
				/* @__PURE__ */ w("th", {
					style: { color: "#FFFFFF" },
					children: "FEB"
				}),
				/* @__PURE__ */ w("th", {
					style: { color: "#FFFFFF" },
					children: "MAR"
				}),
				/* @__PURE__ */ w("th", {
					style: { color: "#FFFFFF" },
					children: "APR"
				}),
				/* @__PURE__ */ w("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "MAG" : "MAY"
				}),
				/* @__PURE__ */ w("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "GIU" : "JUN"
				}),
				/* @__PURE__ */ w("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "LUG" : "JUL"
				}),
				/* @__PURE__ */ w("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "AGO" : "AUG"
				}),
				/* @__PURE__ */ w("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "SET" : "SEP"
				}),
				/* @__PURE__ */ w("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "OTT" : "OCT"
				}),
				/* @__PURE__ */ w("th", {
					style: { color: "#FFFFFF" },
					children: "NOV"
				}),
				/* @__PURE__ */ w("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "DIC" : "DEC"
				}),
				/* @__PURE__ */ w("th", {
					style: { color: "#FFFFFF" },
					children: n === "italiano" ? "TOT RICAVI" : "TOT EARNINGS"
				})
			] }) }), /* @__PURE__ */ T("tbody", { children: [e.map((e, n) => n > 1 && /* @__PURE__ */ T("tr", { children: [/* @__PURE__ */ w("td", {
				style: { fontWeight: "bold" },
				children: e.Anno
			}), t[n] && /* @__PURE__ */ T(C, { children: [
				/* @__PURE__ */ T("td", {
					style: { color: $(e.gen - t[n].gen) },
					children: [parseFloat(e.gen - t[n].gen).toFixed(2), " €"]
				}),
				/* @__PURE__ */ T("td", {
					style: { color: $(e.feb - t[n].feb) },
					children: [parseFloat(e.feb - t[n].feb).toFixed(2), " €"]
				}),
				/* @__PURE__ */ T("td", {
					style: { color: $(e.mar - t[n].mar) },
					children: [parseFloat(e.mar - t[n].mar).toFixed(2), " €"]
				}),
				/* @__PURE__ */ T("td", {
					style: { color: $(e.apr - t[n].apr) },
					children: [parseFloat(e.apr - t[n].apr).toFixed(2), " €"]
				}),
				/* @__PURE__ */ T("td", {
					style: { color: $(e.mag - t[n].mag) },
					children: [parseFloat(e.mag - t[n].mag).toFixed(2), " €"]
				}),
				/* @__PURE__ */ T("td", {
					style: { color: $(e.giu - t[n].giu) },
					children: [parseFloat(e.giu - t[n].giu).toFixed(2), " €"]
				}),
				/* @__PURE__ */ T("td", {
					style: { color: $(e.lug - t[n].lug) },
					children: [parseFloat(e.lug - t[n].lug).toFixed(2), " €"]
				}),
				/* @__PURE__ */ T("td", {
					style: { color: $(e.ago - t[n].ago) },
					children: [parseFloat(e.ago - t[n].ago).toFixed(2), " €"]
				}),
				/* @__PURE__ */ T("td", {
					style: { color: $(e.set - t[n].set) },
					children: [parseFloat(e.set - t[n].set).toFixed(2), " €"]
				}),
				/* @__PURE__ */ T("td", {
					style: { color: $(e.ott - t[n].ott) },
					children: [parseFloat(e.ott - t[n].ott).toFixed(2), " €"]
				}),
				/* @__PURE__ */ T("td", {
					style: { color: $(e.nov - t[n].nov) },
					children: [parseFloat(e.nov - t[n].nov).toFixed(2), " €"]
				}),
				/* @__PURE__ */ T("td", {
					style: { color: $(e.dic - t[n].dic) },
					children: [parseFloat(e.dic - t[n].dic).toFixed(2), " €"]
				}),
				/* @__PURE__ */ T("td", {
					style: { color: $(e.totale_anno - t[n].totale_anno) },
					children: [parseFloat(e.totale_anno - t[n].totale_anno).toFixed(2), " €"]
				})
			] })] }, n)), /* @__PURE__ */ T("tr", { children: [
				/* @__PURE__ */ w("td", {
					style: { fontWeight: "bold" },
					children: e[0].Anno
				}),
				/* @__PURE__ */ T("td", {
					style: { color: $(e[0].gen - t[0].gen, 1) },
					children: [parseFloat(e[0].gen - t[0].gen).toFixed(2), " €"]
				}),
				/* @__PURE__ */ T("td", {
					style: { color: $(e[0].feb - t[0].feb) },
					children: [parseFloat(e[0].feb - t[0].feb).toFixed(2), " €"]
				}),
				/* @__PURE__ */ T("td", {
					style: { color: $(e[0].mar - t[0].mar) },
					children: [parseFloat(e[0].mar - t[0].mar).toFixed(2), " €"]
				}),
				/* @__PURE__ */ T("td", {
					style: { color: $(e[0].apr - t[0].apr) },
					children: [parseFloat(e[0].apr - t[0].apr).toFixed(2), " €"]
				}),
				/* @__PURE__ */ T("td", {
					style: { color: $(e[0].mag - t[0].mag) },
					children: [parseFloat(e[0].mag - t[0].mag).toFixed(2), " €"]
				}),
				/* @__PURE__ */ T("td", {
					style: { color: $(e[0].giu - t[0].giu) },
					children: [parseFloat(e[0].giu - t[0].giu).toFixed(2), " €"]
				}),
				/* @__PURE__ */ T("td", {
					style: { color: $(e[0].lug - t[0].lug) },
					children: [parseFloat(e[0].lug - t[0].lug).toFixed(2), " €"]
				}),
				/* @__PURE__ */ T("td", {
					style: { color: $(e[0].ago - t[0].ago) },
					children: [parseFloat(e[0].ago - t[0].ago).toFixed(2), " €"]
				}),
				/* @__PURE__ */ T("td", {
					style: { color: $(e[0].set - t[0].set) },
					children: [parseFloat(e[0].set - t[0].set).toFixed(2), " €"]
				}),
				/* @__PURE__ */ T("td", {
					style: { color: $(e[0].ott - t[0].ott) },
					children: [parseFloat(e[0].ott - t[0].ott).toFixed(2), " €"]
				}),
				/* @__PURE__ */ T("td", {
					style: { color: $(e[0].nov - t[0].nov) },
					children: [parseFloat(e[0].nov - t[0].nov).toFixed(2), " €"]
				}),
				/* @__PURE__ */ T("td", {
					style: { color: $(e[0].dic - t[0].dic) },
					children: [parseFloat(e[0].dic - t[0].dic).toFixed(2), " €"]
				}),
				/* @__PURE__ */ T("td", {
					style: { color: $(e[0].totale_anno - t[0].totale_anno) },
					children: [parseFloat(e[0].totale_anno - t[0].totale_anno).toFixed(2), " €"]
				})
			] }, 0)] })]
		}) })]
	});
}
function An({ totaleItems: e }) {
	return /* @__PURE__ */ T(Q.StyledCard, { children: [/* @__PURE__ */ w(Q.StyledCardHeader, { children: "Informations" }), /* @__PURE__ */ w(Q.SlideContainer, { children: e && /* @__PURE__ */ w(Q.StyledInputBlock, {
		rows: 1,
		name: "totale_items",
		id: "totale_items",
		type: "text",
		value: e || "Errore!!",
		readOnly: !0
	}) })] });
}
function jn({ datiRicerca: e, setDatiRicerca: t, handleInputChange: n, eseguiRicerca: r, lingua: i }) {
	return /* @__PURE__ */ T(Q.StyledCard, { children: [
		/* @__PURE__ */ w(Q.StyledCardHeader, { children: i === "italiano" ? "Ricerca entrate e uscite" : "Searching for inputs and outputs" }),
		/* @__PURE__ */ T(Q.SlideContainer, {
			style: { maxHeight: "2000px" },
			children: [/* @__PURE__ */ w(Q.StyledInputModifica, {
				rows: 1,
				name: "primo_anno",
				id: "primo_anno",
				type: "number",
				step: 1,
				value: e.primo_anno,
				placeholder: "Primo anno",
				onChange: (e) => n(e, t),
				onContextMenu: (e) => handleRightClick(e, "Primo anno")
			}), /* @__PURE__ */ T(Q.StyledSelectModifica, {
				name: "ultimo_anno",
				id: "ultimo_anno",
				value: e.ultimo_anno,
				onChange: (e) => n(e, t),
				onContextMenu: (e) => handleRightClick(e, "Ultimo anno"),
				children: [
					/* @__PURE__ */ w("option", {
						value: parseInt(e.primo_anno) + 1,
						children: parseInt(e.primo_anno) + 1
					}),
					/* @__PURE__ */ w("option", {
						value: parseInt(e.primo_anno) + 2,
						children: parseInt(e.primo_anno) + 2
					}),
					/* @__PURE__ */ w("option", {
						value: parseInt(e.primo_anno) + 3,
						children: parseInt(e.primo_anno) + 3
					}),
					/* @__PURE__ */ w("option", {
						value: parseInt(e.primo_anno) + 4,
						children: parseInt(e.primo_anno) + 4
					}),
					/* @__PURE__ */ w("option", {
						value: parseInt(e.primo_anno) + 5,
						children: parseInt(e.primo_anno) + 5
					})
				]
			})]
		}),
		/* @__PURE__ */ w(R, {
			eseguiRicerca: (e) => r(e),
			vistaItem: "card",
			StyledComponents: Q
		})
	] });
}
//#endregion
//#region src/Items.jsx
var Mn = ({ tipoItem: e, items: t, setItems: n, selectOperation: r, campi: i, handleBlurItem: a, tipoForm: o, vistaItem: s }) => {
	let c = s === "card" ? xn : Mt, l = () => /* @__PURE__ */ w(C, { children: t.map((o, s) => /* @__PURE__ */ w(c, {
		item: o,
		campi: o ? i(o, null, null, null) : [],
		indici: [...Array(i(o, null, null, null).label.length).keys()],
		selectOperation: r,
		items: t,
		setItems: n,
		tipoItem: e,
		handleBlurItem: a
	}, s)) });
	return /* @__PURE__ */ T(C, { children: [o === "search" && t.length === 0 && /* @__PURE__ */ w("div", {
		className: "contenitore-1",
		children: "Nessun elemento trovato."
	}), t.length > 0 && /* @__PURE__ */ w(C, { children: s === "card" ? /* @__PURE__ */ w("div", {
		className: "contenitore-3",
		children: /* @__PURE__ */ w(l, {})
	}) : /* @__PURE__ */ w(l, {}) })] });
}, Nn = ({ componenti: t, elementi: r, vistaItem: i, vistaForm: a }) => {
	let [o, s] = n("search"), c = a === "form" ? Ke : a === "card" ? yn : At, l = a === "form" ? qe : a === "card" ? bn : jt, u = a === "form" ? Xe : a === "card" ? Sn : Nt;
	return /* @__PURE__ */ T(C, { children: [
		/* @__PURE__ */ w(We, {
			elementi: r,
			tipoForm: o,
			setTipoForm: s,
			StyledComponents: N
		}),
		/* @__PURE__ */ w("br", {}),
		" ",
		/* @__PURE__ */ w("br", {}),
		" ",
		/* @__PURE__ */ w("br", {}),
		" ",
		/* @__PURE__ */ w("br", {}),
		r.map((n, r) => /* @__PURE__ */ T(e, { children: [
			n === "insert" && o === "insert" && /* @__PURE__ */ T(C, { children: [
				/* @__PURE__ */ w(c, {
					campi: t.campiNuovoItem,
					indici: t.indiciNuovoItem,
					eseguiSalvataggio: t.handleInsert
				}),
				/* @__PURE__ */ w("br", {}),
				" ",
				/* @__PURE__ */ w("br", {}),
				" ",
				/* @__PURE__ */ w("br", {}),
				" ",
				/* @__PURE__ */ w("br", {})
			] }),
			n === "search" && o === "search" && /* @__PURE__ */ T(C, { children: [
				/* @__PURE__ */ w(l, {
					campi: t.campiRicercaItems,
					indici: t.indiciRicercaItems,
					handleSearch: t.handleSearch
				}),
				/* @__PURE__ */ w("br", {}),
				" ",
				/* @__PURE__ */ w("br", {}),
				" ",
				/* @__PURE__ */ w("br", {}),
				" ",
				/* @__PURE__ */ w("br", {})
			] }),
			n === "file" && o === "file" && /* @__PURE__ */ T(C, { children: [
				/* @__PURE__ */ w(u, {
					campi: t.campiFile,
					indici: t.indiciFile,
					ottieniFileRangePDF: t.handleSearchRangeFilePDF,
					ottieniFileRangeExcel: t.handleSearchRangeFileExcel,
					eliminaItemsRange: t.handleDeleteRangeFile
				}),
				/* @__PURE__ */ w("br", {}),
				" ",
				/* @__PURE__ */ w("br", {}),
				" ",
				/* @__PURE__ */ w("br", {}),
				" ",
				/* @__PURE__ */ w("br", {})
			] })
		] }, r)),
		o !== "file" && /* @__PURE__ */ T(C, { children: [
			/* @__PURE__ */ w(Mn, {
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
			/* @__PURE__ */ w("br", {}),
			" ",
			/* @__PURE__ */ w("br", {}),
			" ",
			/* @__PURE__ */ w("br", {}),
			" ",
			/* @__PURE__ */ w("br", {}),
			t.visualizzazioneInformazioni === !0 && t.items.length > 0 && /* @__PURE__ */ T(C, { children: [
				/* @__PURE__ */ w("center", { children: /* @__PURE__ */ w(An, { totaleItems: t.totaleItems }) }),
				/* @__PURE__ */ w("br", {}),
				" ",
				/* @__PURE__ */ w("br", {}),
				" ",
				/* @__PURE__ */ w("br", {}),
				" ",
				/* @__PURE__ */ w("br", {})
			] }),
			/* @__PURE__ */ w(He, {
				selectedIdsModifica: t.selectedIdsModifica,
				selectedIdsEliminazione: t.selectedIdsEliminazione,
				handleEdit: t.handleEdit,
				handleDelete: t.handleDelete
			}),
			/* @__PURE__ */ w("br", {}),
			" ",
			/* @__PURE__ */ w("br", {}),
			" ",
			/* @__PURE__ */ w("br", {}),
			" ",
			/* @__PURE__ */ w("br", {})
		] })
	] });
};
//#endregion
export { We as CambioTipoForm, Ge as CambioTipoForm2, En as CardEntrateItems, Dn as CardEntrateItemsByName, jn as CardEntrateUscite, Sn as CardFileItems, An as CardInformazioni, xn as CardItemEsistente, Cn as CardLogin, yn as CardNuovoItem, wn as CardProfilo, kn as CardRicavi, bn as CardRicercaItems, On as CardUsciteItems, Tn as CardWidget, Ze as FormEntrateUscite, Xe as FormFileItems, Je as FormLogin, Ke as FormNuovoItem, Ye as FormProfilo, qe as FormRicercaItems, Nn as PaginaWeb, It as RowEntrateUscite, Nt as RowFileItems, Mt as RowItemEsistente, Pt as RowLogin, At as RowNuovoItem, Ft as RowProfilo, jt as RowRicercaItems };
