(function(e,t){typeof exports==`object`&&typeof module<`u`?t(exports,require(`react`),require(`styled-components`),require(`react-bootstrap/Card`),require(`react-bootstrap/ListGroup`),require(`react-bootstrap/esm/Row`),require(`react-bootstrap/esm/Col`),require(`lucide-react`),require(`@fortawesome/react-fontawesome`),require(`@fortawesome/free-solid-svg-icons`),require(`react/jsx-runtime`),require(`react-bootstrap`)):typeof define==`function`&&define.amd?define([`exports`,`react`,`styled-components`,`react-bootstrap/Card`,`react-bootstrap/ListGroup`,`react-bootstrap/esm/Row`,`react-bootstrap/esm/Col`,`lucide-react`,`@fortawesome/react-fontawesome`,`@fortawesome/free-solid-svg-icons`,`react/jsx-runtime`,`react-bootstrap`],t):(e=typeof globalThis<`u`?globalThis:e||self,t(e.RiutilizzoReact={},e.React,e.styled,e.react_bootstrap_Card,e.react_bootstrap_ListGroup,e.react_bootstrap_esm_Row,e.react_bootstrap_esm_Col,e.LucideReact,e._fortawesome_react_fontawesome,e._fortawesome_free_solid_svg_icons,e.jsxRuntime,e.ReactBootstrap))})(this,function(e,t,n,r,i,a,o,s,c,l,u,d){Object.defineProperty(e,Symbol.toStringTag,{value:`Module`});var ee=Object.create,f=Object.defineProperty,te=Object.getOwnPropertyDescriptor,ne=Object.getOwnPropertyNames,re=Object.getPrototypeOf,ie=Object.prototype.hasOwnProperty,ae=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=ne(t),a=0,o=i.length,s;a<o;a++)s=i[a],!ie.call(e,s)&&s!==n&&f(e,s,{get:(e=>t[e]).bind(null,s),enumerable:!(r=te(t,s))||r.enumerable});return e},p=(e,t,n)=>(n=e==null?{}:ee(re(e)),ae(t||!e||!e.__esModule?f(n,`default`,{value:e,enumerable:!0}):n,e));n=p(n,1),r=p(r,1),i=p(i,1),a=p(a,1),o=p(o,1);var oe=(0,n.default)(r.default)`
  background-color: #111111;
  overflow: hidden;
  border: 5px solid #000000;
  border-radius: 40px;
  margin-left: 30%;
  margin-right: 30%;

  color: white;
  text-align: center;
`,se=(0,n.default)(r.default.Header)`
  color: #ffffff;
  background-color: #000000;
  border: 5px solid #000000;
  min-height: 70px;
`,ce=(0,n.default)(i.default.Item)`
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  min-height: 70px;
`,le=n.default.div`
  overflow: hidden;
  transition: max-height 1.5s ease-out;
`,ue=(0,n.default)(a.default)`
  display: flex;
  flex-wrap: wrap;
  padding-left: 3%;
  padding-right: 3%;
`,de=(0,n.default)(o.default)`
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
`,fe=n.default.label`
  width: 100%;
  color: #ffffff;
  background-color: transparent;
  border-radius: 40px;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  min-height: 70px;
  margin-top: 2%;
`,m=n.default.textarea`
  width: 100%;
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  min-height: 70px;
  margin-bottom: 20px;
`,pe=(0,n.default)(m)`
  background-color: #000000;
`,me=(0,n.default)(m)`
  background-color: #0050EF;
`,he=(0,n.default)(m)`
  background-color: #500000;
`,h=n.default.input`
  width: 100%;
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  min-height: 70px;
  margin-bottom: 20px;
`,ge=(0,n.default)(h)`
  background-color: #000000;
`,_e=(0,n.default)(h)`
  background-color: #0050EF;
`,ve=(0,n.default)(h)`
  background-color: #500000;
`,g=`
  color: #FFFFFF;
  cursor: pointer;
  transition: 0.5s all ease-out;
`,_=`
  ${g}
  &:hover {
    color: #0050EF;
  }
`,v=`
  ${g}
  &:hover {
    color: #500000;
  }
`,ye=(0,n.default)(s.Save)`
  ${_}
`,be=(0,n.default)(s.Save)`
  ${g}
`,xe=(0,n.default)(s.Save)`
  ${g}
  color: #0050EF;
`,Se=(0,n.default)(s.EyeClosed)`
  ${g}
  transition: 0.5s all ease-out;
`,Ce=(0,n.default)(s.Eye)`
  ${g}
  transition: 0.5s all ease-out;
  color: #0050EF;
`,we=(0,n.default)(s.Search)`
  ${_}
`,Te=(0,n.default)(s.Search)`
  ${g}
`,Ee=(0,n.default)(s.Search)`
  ${g}
  color: #0050EF;
`,De=(0,n.default)(s.Euro)`
  color: #FFFFFF;
  transition: 0.5s all ease-out;
`,Oe=(0,n.default)(s.ChevronUp)`
  ${_}
`,ke=(0,n.default)(s.ChevronDown)`
  ${_}
`,Ae=(0,n.default)(s.LogIn)`
  ${_}
`,je=(0,n.default)(c.FontAwesomeIcon)`
  color: #FFFFFF;
`,Me=(0,n.default)(c.FontAwesomeIcon)`
  ${g}
`,Ne=(0,n.default)(c.FontAwesomeIcon)`
  ${g}
  color: #0050EF;
`,Pe=(0,n.default)(s.Download)`
  ${_}
`;(0,n.default)(s.X)`
  ${v}
`;var Fe=(0,n.default)(s.Trash2)`
  ${v}
`,y=n.default.button`
  border-radius: 40px;
  border: 5px solid #000000;
  background-color: #000000;
  color: #FFFFFF;
  text-align: center;  
  padding: 2% 15%;
  cursor: pointer;
`;(0,n.default)(y)`
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #0050EF;
    color: #FFFFFF;
  }
`,(0,n.default)(y)`
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #500000;
    color: #FFFFFF;
  }
`,(0,n.default)(y)`
  background-color: #0050EF;
  &:hover {
    background-color: #000000;
    color: #FFFFFF;
  }
`,(0,n.default)(y)`
  background-color: #500000;
  &:hover {
    background-color: #000000;
    color: #FFFFFF;
  }
`;var b=n.default.select`
  width: 100%;
  min-height: 70px;
  background-color: #0050EF;
  border: 5px solid #000000;
  color: #FFFFFF;
  text-align: center;
`,Ie=(0,n.default)(b)`
  background-color: #111111;
`,Le=(0,n.default)(b)`
  background-color: #0050EF;
`,Re=(0,n.default)(b)`
  background-color: #500000;
`;n.default.option`
  background-color: #0050EF;
  &:hover {
    background-color: #0050EF;
  }
`;var ze=n.default.span`
  color: #FF0000;
  padding: 10px;
`,x={StyledListGroupItem:ce,StyledRow:ue,StyledCol:de,StyledSaveNotSelected:ye,grandezzaIcona:50,StyledSearchNotSelected:we,StyledArrowTopNotSelected:Oe,StyledArrowBottomNotSelected:ke,StyledLoginNotSelected:Ae,StyledPencilNotSelected:(0,n.default)(s.Pencil)`
  ${g}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,StyledLabel:fe,StyledInputBlock:ge,StyledInputModifica:_e,StyledInputElimina:ve,StyledTextAreaBlock:pe,StyledTextAreaModifica:me,StyledTextAreaElimina:he,StyledForm:oe,StyledHeader:se,SlideContainer:le,StyledSpanErrore:ze,StyledSelectBlock:Ie,StyledSelectModifica:Le,StyledSelectElimina:Re,StyledEyeClosedNotSelected:Se,StyledEyeOpenNotSelected:Ce,StyledEuroNotSelected:De,StyledFileIconNotSelected:je,StyledDownloadNotSelected:Pe,StyledTrashNotSelected:Fe,StyledSearchNotSelected2:Te,StyledSaveNotSelected2:be,StyledSearchSelected2:Ee,StyledSaveSelected2:xe,StyledFileIconNotSelected2:Me,StyledFileIconSelected2:Ne};function Be(e,t){return e===0||e===2?t.StyledPencilNotSelected:e===1?t.StyledPencilSelected:s.Pencil}function Ve(e,t){return e===0||e===1?t.StyledTrashNotSelected:e===2?t.StyledTrashSelected:s.Trash2}function S(e,t,n){return t?e!==1&&e!==2?n.StyledInputBlock:e===1?n.StyledInputModifica:n.StyledInputElimina:e===2?n.StyledInputElimina:n.StyledInputBlock}function C(e,t,n){return t?e!==1&&e!==2?n.StyledTextAreaBlock:e===1?n.StyledTextAreaModifica:n.StyledTextAreaElimina:e===2?n.StyledTextAreaElimina:n.StyledTextAreaBlock}function w({eseguiSalvataggio:e,vistaItem:t,StyledComponents:n}){return t===`card`||t===`form`?(0,u.jsx)(n.StyledListGroupItem,{style:{border:`5px solid #000000`,backgroundColor:`#000000`,paddingTop:`2%`,paddingBottom:`2%`},children:(0,u.jsx)(n.StyledRow,{children:(0,u.jsx)(n.StyledCol,{children:(0,u.jsx)(n.StyledSaveNotSelected,{className:`salvaItemButton`,size:n.grandezzaIcona,onClick:e})})})}):(0,u.jsx)(n.StyledColOperazioni,{children:(0,u.jsx)(n.StyledSaveNotSelected,{className:`center salvaItemButton`,size:n.grandezzaIcona,onClick:e})})}function T({handleSearch:e,vistaItem:t,StyledComponents:n}){return t===`card`||t===`form`?(0,u.jsx)(n.StyledListGroupItem,{style:{border:`5px solid #000000`,backgroundColor:`#000000`,paddingTop:`2%`,paddingBottom:`2%`},children:(0,u.jsx)(n.StyledSearchNotSelected,{className:`ricercaItemsButton`,size:n.grandezzaIcona,onClick:e})}):(0,u.jsx)(n.StyledColOperazioni,{children:(0,u.jsx)(`div`,{style:{width:`100%`},children:(0,u.jsx)(n.StyledSearchNotSelected,{className:`center ricercaItemsButton`,size:n.grandezzaIcona,onClick:e})})})}function E({eseguiRicerca:e,vistaItem:t,StyledComponents:n}){return t===`card`||t===`form`?(0,u.jsx)(n.StyledListGroupItem,{style:{border:`5px solid #000000`,backgroundColor:`#000000`,paddingTop:`2%`,paddingBottom:`2%`},children:(0,u.jsx)(n.StyledSearchNotSelected,{className:`ricercaEntrateUsciteButton`,size:n.grandezzaIcona,onClick:e})}):(0,u.jsx)(n.StyledColOperazioni,{children:(0,u.jsx)(`div`,{style:{width:`100%`},children:(0,u.jsx)(n.StyledSearchNotSelected,{className:`ricercaEntrateUsciteButton`,size:n.grandezzaIcona,onClick:e})})})}function D({eseguiLogin:e,vistaItem:t,StyledComponents:n}){return t===`card`||t===`form`?(0,u.jsx)(n.StyledListGroupItem,{style:{border:`5px solid #000000`,backgroundColor:`#000000`,paddingTop:`3%`,paddingBottom:`3%`},children:(0,u.jsx)(n.StyledLoginNotSelected,{className:`loginButton`,size:n.grandezzaIcona,onClick:e})}):(0,u.jsx)(n.StyledColOperazioni,{children:(0,u.jsx)(n.StyledLoginNotSelected,{className:`center loginButton`,size:n.grandezzaIcona,onClick:e})})}function O({eseguiModificaProfilo:e,vistaItem:t,StyledComponents:n}){let r=t===`form`?n.StyledPencilNotSelected:n.StyledPencilNotSelected2;return t===`card`||t===`form`?(0,u.jsx)(n.StyledListGroupItem,{style:{border:`5px solid #000000`,backgroundColor:`#000000`,paddingTop:`2%`,paddingBottom:`2%`},children:(0,u.jsx)(r,{className:`modificaProfiloButton`,size:n.grandezzaIcona,onClick:e})}):(0,u.jsx)(n.StyledColOperazioni,{children:(0,u.jsx)(n.StyledPencilNotSelectedModificaProfilo,{className:`center modificaProfiloButton`,size:n.grandezzaIcona,onClick:e})})}function k({ottieniFileRangePDF:e,ottieniFileRangeExcel:t,eliminaItemsRange:n,vistaItem:r,StyledComponents:i}){return r===`card`||r===`form`?(0,u.jsxs)(i.StyledListGroupItem,{style:{border:`5px solid #000000`,backgroundColor:`#000000`,paddingTop:`3%`},children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(i.StyledFileIconNotSelected,{icon:l.faFilePdf,size:`2xl`,style:{marginRight:`50%`}}),(0,u.jsx)(i.StyledFileIconNotSelected,{icon:l.faFileExcel,size:`2xl`})]}),(0,u.jsx)(`br`,{}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(i.StyledDownloadNotSelected,{size:i.grandezzaIcona,style:{marginRight:`50%`},onClick:e}),(0,u.jsx)(i.StyledDownloadNotSelected,{size:i.grandezzaIcona,onClick:t})]}),(0,u.jsx)(`br`,{}),(0,u.jsx)(`div`,{children:(0,u.jsx)(i.StyledTrashNotSelected,{size:i.grandezzaIcona,onClick:n})}),(0,u.jsx)(`br`,{})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.StyledColOperazioni,{children:(0,u.jsxs)(`div`,{style:{width:`100%`},children:[(0,u.jsx)(i.StyledFileIconNotSelected,{icon:l.faFilePdf,className:`left`,style:{marginRight:`50%`},size:`2xl`}),(0,u.jsx)(i.StyledDownloadNotSelected,{size:i.grandezzaIcona,className:`rigth`,onClick:e})]})}),(0,u.jsx)(i.StyledColOperazioni,{children:(0,u.jsxs)(`div`,{style:{width:`100%`},children:[(0,u.jsx)(i.StyledFileIconNotSelected,{icon:l.faFileExcel,className:`left`,style:{marginRight:`50%`},size:`2xl`}),(0,u.jsx)(i.StyledDownloadNotSelected,{size:i.grandezzaIcona,className:`rigth`,onClick:t})]})}),(0,u.jsx)(i.StyledColOperazioni,{children:(0,u.jsx)(`div`,{style:{width:`100%`},children:(0,u.jsx)(i.StyledTrashNotSelected2,{size:i.grandezzaIcona,className:`center`,onClick:n})})})]})}function A({selectOperation:e,item:t,vistaItem:n,StyledComponents:r}){let i=Ve(t.tipo_selezione,r),a=Be(t.tipo_selezione,r);return n===`card`||n===`form`?(0,u.jsxs)(r.StyledListGroupItem,{style:{border:`5px solid #000000`,backgroundColor:`#000000`},children:[(0,u.jsx)(a,{className:`modificaItemButton`,size:r.grandezzaIcona,onClick:()=>e(`pencil`,t),style:{marginRight:`50%`}}),(0,u.jsx)(i,{className:`eliminaItemButton`,size:r.grandezzaIcona,onClick:()=>e(`trash`,t)})]}):(0,u.jsx)(r.StyledColOperazioni,{children:(0,u.jsxs)(`div`,{style:{width:`100%`},children:[(0,u.jsx)(a,{className:`left modificaItemButton`,size:r.grandezzaIcona,onClick:()=>e(`pencil`,t),style:{marginRight:`50%`}}),(0,u.jsx)(i,{className:`rigth eliminaItemButton`,size:r.grandezzaIcona,onClick:()=>e(`trash`,t)})]})})}var He=({selectedIdsModifica:e,selectedIdsEliminazione:t,handleEdit:n,handleDelete:r})=>(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(`div`,{className:`contenitore-2`,children:(0,u.jsxs)(a.default,{children:[e.length>0&&(0,u.jsx)(o.default,{children:(0,u.jsx)(`button`,{className:`bottone-blu-non-selezionato`,onClick:n,children:`Modifica`})}),t.length>0&&(0,u.jsx)(o.default,{children:(0,u.jsx)(`button`,{className:`bottone-rosso-non-selezionato`,onClick:r,children:`Elimina`})})]})})});function j({elementi:e,tipoForm:t,setTipoForm:n,StyledComponents:r}){let i=e=>{n(e)};return(0,u.jsxs)(r.StyledListGroupItem,{style:{border:`5px solid #000000`,backgroundColor:`#000000`,paddingTop:`20px`,paddingBottom:`20px`},children:[e.includes(`insert`)&&t===`insert`&&(0,u.jsxs)(u.Fragment,{children:[e.includes(`search`)&&(0,u.jsx)(r.StyledSearchNotSelected2,{size:r.grandezzaIcona,style:{marginRight:`50px`},onClick:()=>i(`search`)}),(0,u.jsx)(r.StyledSaveSelected2,{size:r.grandezzaIcona,style:{marginRight:`50px`},onClick:()=>i(`insert`)}),e.includes(`file`)&&(0,u.jsx)(r.StyledFileIconNotSelected2,{icon:l.faFile,size:`2xl`,onClick:()=>i(`file`)})]}),e.includes(`search`)&&t===`search`&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.StyledSearchSelected2,{size:r.grandezzaIcona,style:{marginRight:`50px`},onClick:()=>i(`search`)}),e.includes(`insert`)&&(0,u.jsx)(r.StyledSaveNotSelected2,{size:r.grandezzaIcona,style:{marginRight:`50px`},onClick:()=>i(`insert`)}),e.includes(`file`)&&(0,u.jsx)(r.StyledFileIconNotSelected2,{icon:l.faFile,size:`2xl`,onClick:()=>i(`file`)})]}),e.includes(`file`)&&t===`file`&&(0,u.jsxs)(u.Fragment,{children:[e.includes(`search`)&&(0,u.jsx)(r.StyledSearchNotSelected2,{size:r.grandezzaIcona,style:{marginRight:`50px`},onClick:()=>i(`search`)}),e.includes(`insert`)&&(0,u.jsx)(r.StyledSaveNotSelected2,{size:r.grandezzaIcona,style:{marginRight:`50px`},onClick:()=>i(`insert`)}),(0,u.jsx)(r.StyledFileIconNotSelected2,{icon:l.faFile,size:`2xl`,onClick:()=>i(`file`)})]})]})}function M({elementi:e,tipoForm:t,setTipoForm:n,StyledComponents:r}){return(0,u.jsx)(r.StyledForm,{children:(0,u.jsx)(j,{elementi:e,tipoForm:t,setTipoForm:n,StyledComponents:r})})}function Ue({elementi:e,tipoForm:t,setTipoForm:n,StyledComponents:r}){return(0,u.jsx)(r.StyledForm,{children:(0,u.jsx)(j,{elementi:e,tipoForm:t,setTipoForm:n,StyledComponents:r})})}function We({campi:e,indici:n,eseguiSalvataggio:r}){return(0,u.jsxs)(x.StyledForm,{children:[(0,u.jsx)(x.StyledHeader,{children:e.header}),(0,u.jsxs)(x.SlideContainer,{style:{maxHeight:`2000px`,overflowY:`auto`},children:[n.map(n=>{let r=e.type[n]?S(1,!0,x):C(1,!0,x);return(0,u.jsxs)(t.Fragment,{children:[(0,u.jsx)(x.StyledLabel,{htmlFor:e.name[n],children:e.label[n]}),e.name[n]===`prezzo`?(0,u.jsx)(x.StyledRow,{children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r,{style:[`prezzo`,`totale`].includes(e.name[n])?{marginLeft:`-10%`,marginRight:0,minWidth:`105%`}:null,rows:1,name:e.name[n],id:e.id[n],type:e.type[n],step:e.step[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur}),[`prezzo`,`totale`].includes(e.name[n])&&(0,u.jsx)(x.StyledEuroNotSelected,{style:{maxWidth:`5%`,marginTop:`13px`},size:x.grandezzaIcona,onClick:null}),e.options[n]]})}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r,{style:[`prezzo`,`totale`].includes(e.name[n])?{marginLeft:`-10%`,marginRight:0,minWidth:`105%`}:null,rows:1,name:e.name[n],id:e.id[n],type:e.type[n],step:e.step[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur}),[`prezzo`,`totale`].includes(e.name[n])&&(0,u.jsx)(x.StyledEuroNotSelected,{style:{maxWidth:`5%`,marginTop:`13px`},size:x.grandezzaIcona,onClick:null}),e.options[n]]}),e.errore[n]!==``&&(0,u.jsx)(x.StyledSpanErrore,{children:e.errore[n]})]},n)}),(0,u.jsx)(`br`,{}),` `,(0,u.jsx)(`br`,{})]}),(0,u.jsx)(w,{eseguiSalvataggio:r,vistaItem:`form`,StyledComponents:x})]})}function N({campi:e,indici:n,handleSearch:r}){let[i,a]=(0,t.useState)(!0),[o,s]=(0,t.useState)(!0);return S(1,!0,x),C(1,!0,x),(0,u.jsxs)(x.StyledForm,{children:[(0,u.jsx)(x.StyledHeader,{children:e.header}),(0,u.jsxs)(x.SlideContainer,{style:{maxHeight:`2000px`,overflowY:`auto`},children:[n.map(n=>{let r=e.type[n]?S(1,!0,x):C(1,!0,x);return(0,u.jsxs)(t.Fragment,{children:[(0,u.jsx)(x.StyledLabel,{htmlFor:e.name[n],children:e.label[n]}),(0,u.jsx)(r,{rows:1,name:e.name[n],id:e.id[n],type:e.type[n],step:e.step[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur},n)]},n)}),(0,u.jsx)(`br`,{}),` `,(0,u.jsx)(`br`,{})]}),(0,u.jsx)(T,{setIsVisible:a,arrowUp:o,setArrowUp:s,handleSearch:r,vistaItem:`form`,StyledComponents:x})]})}function Ge({campi:e,indici:n,eseguiLogin:r}){let[i,a]=(0,t.useState)(`password`),o=e=>{e.preventDefault(),a(i===`text`?`password`:`text`)};return(0,u.jsxs)(x.StyledForm,{children:[(0,u.jsx)(x.StyledHeader,{children:e.header}),(0,u.jsxs)(x.SlideContainer,{style:{maxHeight:`2000px`},children:[n.map(n=>{let r=e.type[n]?S(1,!0,x):C(1,!0,x),a=i===`password`?x.StyledEyeClosedNotSelected:x.StyledEyeOpenNotSelected;return(0,u.jsxs)(t.Fragment,{children:[(0,u.jsx)(x.StyledLabel,{htmlFor:e.name[n],children:e.label[n]}),(0,u.jsxs)(x.StyledRow,{children:[(0,u.jsx)(r,{style:e.name[n]===`password`?{marginLeft:`-10%`,marginRight:0,minWidth:`105%`}:{marginLeft:`-10%`,marginRight:0,minWidth:`115%`,width:`100%`},rows:1,name:e.name[n],id:e.id[n],type:e.name[n]===`password`?i:e.type[n],step:e.step[n],min:e.min[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur}),e.name[n]===`password`&&(0,u.jsx)(a,{style:{maxWidth:`5%`,marginTop:`13px`},size:x.grandezzaIcona,onClick:o})]}),e.options[n],e.errore[n]&&(0,u.jsx)(x.StyledSpanErrore,{children:e.errore[n]})]},n)}),(0,u.jsx)(`br`,{}),` `,(0,u.jsx)(`br`,{})]}),(0,u.jsx)(D,{eseguiLogin:r,vistaItem:`form`,StyledComponents:x})]})}function Ke({campi:e,indici:n,eseguiModificaProfilo:r}){let[i,a]=(0,t.useState)(`password`),[o,s]=(0,t.useState)(`password`),[c,l]=(0,t.useState)(`password`),d=(e,t)=>{e.preventDefault(),t===`password_attuale`?a(i===`text`?`password`:`text`):t===`nuova_password`?s(o===`text`?`password`:`text`):t===`conferma_nuova_password`&&l(c===`text`?`password`:`text`)};return(0,u.jsxs)(x.StyledForm,{children:[(0,u.jsx)(x.StyledHeader,{children:e.header}),(0,u.jsxs)(x.SlideContainer,{style:{maxHeight:`2000px`},children:[n.map(n=>{let r=e.type[n]?S(1,!0,x):C(1,!0,x),a=e.name[n]===`password_attuale`&&i===`password`||e.name[n]===`nuova_password`&&o===`password`||e.name[n]===`conferma_nuova_password`&&c===`password`?x.StyledEyeClosedNotSelected:x.StyledEyeOpenNotSelected;return(0,u.jsxs)(t.Fragment,{children:[(0,u.jsx)(x.StyledLabel,{htmlFor:e.name[n],children:e.label[n]}),(0,u.jsxs)(x.StyledRow,{children:[(0,u.jsx)(r,{style:e.name[n].includes(`password`)?{marginLeft:`-10%`,marginRight:0,minWidth:`105%`}:{marginLeft:`-10%`,marginRight:0,minWidth:`115%`,width:`100%`},rows:1,name:e.name[n],id:e.id[n],type:e.name[n].includes(`password`)?e.name[n]===`password_attuale`?i:e.name[n]===`nuova_password`?o:c:e.type[n],step:e.step[n],min:e.min[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur}),e.name[n].includes(`password`)&&(0,u.jsx)(a,{style:{maxWidth:`5%`,marginTop:`13px`},size:x.grandezzaIcona,onClick:t=>d(t,e.name[n])})]}),e.options[n],e.errore[n]&&(0,u.jsx)(x.StyledSpanErrore,{children:e.errore[n]})]},n)}),(0,u.jsx)(`br`,{}),` `,(0,u.jsx)(`br`,{})]}),(0,u.jsx)(O,{eseguiModificaProfilo:r,vistaItem:`form`,StyledComponents:x})]})}function P({campi:e,indici:n,ottieniFileRangePDF:r,ottieniFileRangeExcel:i,eliminaItemsRange:a}){let[o,s]=(0,t.useState)(!0),[c,l]=(0,t.useState)(!0),d=o?`2000px`:`0px`;return S(1,!0,x),C(1,!0,x),(0,u.jsxs)(x.StyledForm,{children:[(0,u.jsx)(x.StyledHeader,{children:e.header}),(0,u.jsxs)(x.SlideContainer,{style:{maxHeight:`${d}`},children:[n.map(n=>{let r=e.type[n]?S(1,!0,x):C(1,!0,x);return(0,u.jsxs)(t.Fragment,{children:[(0,u.jsx)(x.StyledLabel,{htmlFor:e.name[n],children:e.label[n]}),(0,u.jsx)(r,{rows:1,name:e.name[n],id:e.id[n],type:e.type[n],step:e.step[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur},n)]},n)}),(0,u.jsx)(`br`,{}),` `,(0,u.jsx)(`br`,{})]}),(0,u.jsx)(k,{ottieniFileRangePDF:r,ottieniFileRangeExcel:i,eliminaItemsRange:a,vistaItem:`form`,StyledComponents:x})]})}function qe({datiRicerca:e,setDatiRicerca:t,handleInputChange:n,eseguiRicerca:r,lingua:i}){return(0,u.jsxs)(x.StyledForm,{children:[(0,u.jsx)(x.StyledHeader,{children:i===`italiano`?`Ricerca entrate e uscite`:`Searching for inputs and outputs`}),(0,u.jsxs)(x.SlideContainer,{style:{maxHeight:`2000px`},children:[(0,u.jsx)(x.StyledLabel,{htmlFor:`primo_anno`,children:i===`italiano`?`Primo anno`:`First year`}),(0,u.jsx)(x.StyledInputModifica,{rows:1,name:`primo_anno`,id:`primo_anno`,type:`number`,step:1,value:e.primo_anno,placeholder:i===`italiano`?`Primo anno`:`First year`,onChange:e=>n(e,t)}),(0,u.jsx)(x.StyledLabel,{htmlFor:`ultimo_anno`,children:i===`italiano`?`Ultimo anno`:`Last year`}),(0,u.jsxs)(x.StyledSelectModifica,{name:`ultimo_anno`,id:`ultimo_anno`,value:e.ultimo_anno,onChange:e=>n(e,t),children:[(0,u.jsx)(`option`,{value:parseInt(e.primo_anno)+1,children:parseInt(e.primo_anno)+1}),(0,u.jsx)(`option`,{value:parseInt(e.primo_anno)+2,children:parseInt(e.primo_anno)+2}),(0,u.jsx)(`option`,{value:parseInt(e.primo_anno)+3,children:parseInt(e.primo_anno)+3}),(0,u.jsx)(`option`,{value:parseInt(e.primo_anno)+4,children:parseInt(e.primo_anno)+4}),(0,u.jsx)(`option`,{value:parseInt(e.primo_anno)+5,children:parseInt(e.primo_anno)+5})]}),(0,u.jsx)(`br`,{}),` `,(0,u.jsx)(`br`,{})]}),(0,u.jsx)(E,{eseguiRicerca:e=>r(e),vistaItem:`form`,StyledComponents:x})]})}var Je=(0,n.default)(a.default)`
  display: flex;
  align-items: stretch; 
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 3%;
  padding-right: 3%;
`,F=(0,n.default)(o.default)`
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
`;(0,n.default)(F)`
  max-height: ${e=>e.isVisible?`1000px`:`0`}; 
  overflow: hidden;
  transition: max-height 1s ease-out;
`,(0,n.default)(F)`
  border: 5px solid #000000;
  background-color: #000000;
`;var Ye=(0,n.default)(F)`
  border: 5px solid #000000;
  background-color: #000000;
  min-width: 230px;
  max-width: 230px;
  min-height: 80px;
  max-height: 80px;
`;(0,n.default)(F)`
  border: 5px solid #000000;
  background-color: #0050EF;
`,(0,n.default)(F)`
  border: 5px solid #000000;
  background-color: #500000;
`,n.default.div`
  display: flex;
  flex-direction: row-reverse;
`;var I=`
  flex: 1;
  display: flex;
  align-items: center; /* Centro verticale */
  justify-content: center; /* Centro orizzontale */
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  color: inherit;
  padding: 0; 
  margin: 0;
  text-align: center; /* Centro orizzontale del testo */
  overflow: hidden; /* Nasconde l'overflow */
  resize: vertical;
  border-radius: 40px;
  min-height: 50px;
  border: 5px solid #000000; 
  color: #FFFFFF;
  padding: auto;
`,L=n.default.textarea`
  ${I}
`,Xe=(0,n.default)(L)`
  background-color: #111111;
`,Ze=(0,n.default)(L)`
  background-color: #0050EF;
`,Qe=(0,n.default)(L)`
  background-color: #500000;
`,R=n.default.input`
  ${I}
`,$e=(0,n.default)(R)`
  background-color: #111111;
`,et=(0,n.default)(R)`
  background-color: #0050EF;
`,tt=(0,n.default)(R)`
  background-color: #500000;
`,nt=n.default.button`
  ${I}
`,rt=`
  margin-left: 10%;
  margin-right: 10%;
  border: 5px solid #000000;
  background-color: #000000;
  cursor: pointer;  
  transition: 0.5s all ease-out;
`;(0,n.default)(nt)`
  ${rt}
  &:hover {
    background-color: #0050EF;
    color: #FFFFFF;
  }
`,(0,n.default)(nt)`
  ${rt}
  &:hover {
    background-color: #500000;
    color: #FFFFFF;
  }
`;var z=`
  color: #FFFFFF;
  cursor: pointer;
`,it=(0,n.default)(s.Save)`
  ${z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,at=(0,n.default)(s.EyeClosed)`
  ${z}
  transition: 0.5s all ease-out;
`,ot=(0,n.default)(s.Eye)`
  ${z}
  transition: 0.5s all ease-out;
  color: #0050EF;
`,st=(0,n.default)(s.Search)`
  ${z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,ct=(0,n.default)(s.Euro)`
  color: #FFFFFF;
  transition: 0.5s all ease-out;
`,lt=(0,n.default)(s.ChevronLeft)`
  ${z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,ut=(0,n.default)(s.ChevronRight)`
  ${z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,dt=(0,n.default)(s.LogIn)`
  ${z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,ft=(0,n.default)(s.Pencil)`
  ${z}
`,pt=(0,n.default)(s.Pencil)`
  ${z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,mt=(0,n.default)(s.Pencil)`
  color: #0050EF;
  cursor: pointer;
`,ht=(0,n.default)(s.Trash2)`
  ${z}
`,gt=(0,n.default)(s.Trash2)`
  color: #500000;
  cursor: pointer;
`,_t=(0,n.default)(c.FontAwesomeIcon)`
  color: #FFFFFF;
`,vt=(0,n.default)(c.FontAwesomeIcon)`
  ${z}
  color: #0050EF;
`,yt=(0,n.default)(s.Download)`
  ${z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`;(0,n.default)(s.X)`
  ${z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #500000;
  }
`;var bt=(0,n.default)(s.Trash2)`
  ${z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #500000;
  }
`,B=n.default.select`
  cursor: pointer;
  width: 100%;
  border-radius: 40px;
  background-color: #0050EF;
  border: 5px solid #000000;
  color: #FFFFFF;
  text-align: center;
`,xt=(0,n.default)(B)`
  background-color: #111111;
`,St=(0,n.default)(B)`
  background-color: #0050EF;
`,Ct=(0,n.default)(B)`
  background-color: #500000;
`;n.default.option`
  background-color: #0050EF;
  &:hover {
    background-color: #0050EF;
  }
`;var V={StyledPencilNotSelected:ft,StyledPencilSelected:mt,grandezzaIcona:50,StyledTrashNotSelected:ht,StyledTrashSelected:gt,StyledColOperazioni:Ye,StyledSaveNotSelected:it,StyledSearchNotSelected:st,StyledArrowLeftNotSelected:lt,StyledArrowRightNotSelected:ut,StyledFileIconNotSelected:_t,StyledDownloadNotSelected:yt,StyledTrashNotSelected2:bt,StyledLoginNotSelected:dt,StyledPencilNotSelectedModificaProfilo:pt,StyledInputBlock:$e,StyledInputModifica:et,StyledInputElimina:tt,StyledTextAreaBlock:Xe,StyledTextAreaModifica:Ze,StyledTextAreaElimina:Qe,StyledRow:Je,StyledCol:F,StyledSpanErrore:n.default.span`
  color: #FF0000;
  border-radius: 40px;
  padding: 10px;
`,StyledSelectBlock:xt,StyledSelectModifica:St,StyledSelectElimina:Ct,StyledEyeClosedNotSelected:at,StyledEyeOpenNotSelected:ot,StyledEuroNotSelected:ct,StyledFileIconSelected2:vt},H=(e,t,n)=>{e.preventDefault();let{name:r,value:i,id:a}=e.target,o=!0;[`note_cliente`,`note_servizio`,`note_lavoro`,`note_spesa`].includes(a)?i.length>200&&(o=!1):[`descrizione_spesa`].includes(a)?i.length>1e3&&(o=!1):[`nome_servizio`].includes(a)?i.length>100&&(o=!1):[`prezzo_servizio`,`totale_spesa`].includes(a)?(!(!isNaN(i.substr(0,i))&&Number(i)===parseFloat(i))||i<0)&&(o=!1):[`email_cliente`].includes(a)?i.length>254&&(o=!1):[`contatto_cliente`].includes(a)&&(i===``?o=!0:(!/^\d+$/.test(i)||!(i.startsWith(`0`)&&i.length<=11||i.startsWith(`3`)&&i.length<=10))&&(o=!1)),o===!0&&n(e=>({...e,[t]:i}))},U=e=>{[`giorno_spesa`,`giorno_lavoro`].includes(e.target.id)?e.target.type=`date`:[`prezzo_servizio`,`totale_spesa`].includes(e.target.id)&&(e.target.value=e.target.value.substr(0,e.target.value.length-2))};function W({campi:e,indici:n,eseguiSalvataggio:r}){S(1,!0,V),C(1,!0,V);let i=(e,t)=>{e.preventDefault(),alert(t)};return(0,u.jsxs)(V.StyledRow,{children:[(0,u.jsx)(w,{eseguiSalvataggio:r,vistaItem:`row`,StyledComponents:V}),n.map(n=>{let r=e.type[n]?S(1,!0,V):C(1,!0,V);return(0,u.jsx)(t.Fragment,{children:(0,u.jsx)(V.StyledCol,{children:(0,u.jsxs)(`div`,{style:{width:`100%`},children:[(0,u.jsxs)(V.StyledRow,{children:[(0,u.jsx)(r,{rows:1,style:[`prezzo`,`totale`].includes(e.name[n])?{maxWidth:`90%`}:null,name:e.name[n],id:e.id[n],type:e.type[n],step:e.step[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur,onContextMenu:t=>i(t,e.placeholder[n])}),[`prezzo`,`totale`].includes(e.name[n])&&(0,u.jsx)(V.StyledEuroNotSelected,{style:{maxWidth:`10%`,marginLeft:`-6px`},size:V.grandezzaIcona,onClick:null}),e.options[n]]}),e.errore[n]!==``&&(0,u.jsx)(V.StyledSpanErrore,{children:e.errore[n]})]})})},n)})]})}function G({campi:e,indici:n,handleSearch:r}){let[i,a]=(0,t.useState)([!0,!0,!0,!0,!0,!0,!0,!0]),[o,s]=(0,t.useState)(!0);S(1,!0,V),C(1,!0,V);let c=(e,t)=>{e.preventDefault(),alert(t)};return(0,u.jsxs)(V.StyledRow,{children:[(0,u.jsx)(T,{visibilita:i,setVisibilita:a,arrowUp:o,setArrowUp:s,handleSearch:r,vistaItem:`row`,StyledComponents:V}),n.map(n=>{let r=e.type[n]?S(1,!0,V):C(1,!0,V);return(0,u.jsx)(t.Fragment,{children:(0,u.jsx)(V.StyledCol,{children:(0,u.jsx)(`div`,{style:{width:`100%`},children:(0,u.jsx)(V.StyledRow,{children:i[n]&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r,{style:[`prezzo_min`,`prezzo_max`,`totale_min`,`totale_max`].includes(e.name[n])?{maxWidth:`90%`}:null,rows:1,name:e.name[n],id:e.id[n],type:e.type[n],step:e.step[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur,onContextMenu:t=>c(t,e.placeholder[n])}),[`prezzo_min`,`prezzo_max`,`totale_min`,`totale_max`].includes(e.name[n])&&(0,u.jsx)(V.StyledEuroNotSelected,{style:{maxWidth:`20%`,marginLeft:`-6px`},size:V.grandezzaIcona,onClick:null})]})})})})},n)})]})}function K({item:e,campi:n,indici:r,selectOperation:i,tipoItem:a,handleBlurItem:o}){let s=S(n.tipoSelezione,!1,V),[c,l]=(0,t.useState)(()=>r.reduce((e,t)=>({...e,[t]:n.value[t]}),{})),d=(e,t)=>{e.preventDefault(),alert(t)};return(0,u.jsxs)(V.StyledRow,{children:[(0,u.jsx)(A,{selectOperation:i,item:e,vistaItem:`row`,StyledComponents:V}),(0,u.jsx)(V.StyledCol,{children:(0,u.jsx)(`div`,{style:{width:`100%`},children:(0,u.jsx)(V.StyledRow,{children:(0,u.jsx)(s,{rows:1,name:`header`,value:n.header,placeholder:n.header,readOnly:!0})})})}),r.map(r=>{let i=n.type[r]?S(n.tipoSelezione,n.valoreModificabile[r],V):C(n.tipoSelezione,n.valoreModificabile[r],V);return(0,u.jsx)(t.Fragment,{children:(0,u.jsx)(V.StyledCol,{children:(0,u.jsxs)(`div`,{style:{width:`100%`},children:[(0,u.jsxs)(V.StyledRow,{children:[(0,u.jsx)(i,{style:[`prezzo`,`totale`].includes(n.name[r])?{maxWidth:`80%`}:null,rows:1,name:n.name[r],id:n.id[r],type:n.type[r],step:n.step[r],value:c[r],placeholder:n.placeholder[r],onChange:e=>H(e,r,l),onBlur:t=>o(t,e),onClick:e=>U(e),readOnly:e.tipo_selezione!==1,onContextMenu:e=>d(e,n.placeholder[r])}),[`prezzo`,`totale`].includes(n.name[r])&&(0,u.jsx)(V.StyledEuroNotSelected,{style:{maxWidth:`20%`,marginLeft:`-6px`},size:V.grandezzaIcona}),n.options[r]]}),n.errore[r]&&(0,u.jsx)(V.StyledSpanErrore,{children:n.errore[r]})]})})},r)})]})}function q({campi:e,indici:n,ottieniFileRangePDF:r,ottieniFileRangeExcel:i,eliminaItemsRange:a}){let o=(e,t)=>{e.preventDefault(),alert(t)};return(0,u.jsxs)(V.StyledRow,{children:[(0,u.jsx)(k,{ottieniFileRangePDF:r,ottieniFileRangeExcel:i,eliminaItemsRange:a,vistaItem:`row`,StyledComponents:V}),n.map(n=>{let r=e.type[n]?S(1,!0,V):C(1,!0,V);return(0,u.jsx)(t.Fragment,{children:(0,u.jsx)(V.StyledCol,{children:(0,u.jsx)(`div`,{style:{width:`100%`},children:(0,u.jsx)(V.StyledRow,{children:(0,u.jsx)(r,{rows:1,name:e.name[n],id:e.id[n],type:e.type[n],step:e.step[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur,onContextMenu:t=>o(t,e.placeholder[n])})})})})},n)})]})}function wt({campi:e,indici:n,eseguiLogin:r}){let[i,a]=(0,t.useState)(`password`),o=e=>{e.preventDefault(),a(i===`text`?`password`:`text`)},s=(e,t)=>{e.preventDefault(),alert(t)};return(0,u.jsxs)(V.StyledRow,{children:[(0,u.jsx)(D,{eseguiLogin:r,vistaItem:`row`,StyledComponents:V}),n.map(n=>{let r=e.type[n]?S(1,!0,V):C(1,!0,V),a=i===`password`?V.StyledEyeClosedNotSelected:V.StyledEyeOpenNotSelected;return(0,u.jsx)(t.Fragment,{children:(0,u.jsx)(V.StyledCol,{children:(0,u.jsxs)(`div`,{style:{width:`100%`},children:[(0,u.jsxs)(V.StyledRow,{children:[(0,u.jsx)(r,{style:e.name[n]===`password`?{maxWidth:`80%`}:null,rows:1,name:e.name[n],id:e.id[n],type:e.name[n]===`password`?i:e.type[n],step:e.step[n],min:e.min[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur,onContextMenu:t=>s(t,e.placeholder[n])}),e.name[n]===`password`&&(0,u.jsx)(a,{style:{maxWidth:`20%`,marginLeft:`-6px`},size:V.grandezzaIcona,onClick:o})]}),e.options[n],e.errore[n]&&(0,u.jsx)(V.StyledSpanErrore,{children:e.errore[n]})]})})},n)})]})}function Tt({campi:e,indici:n,eseguiModificaProfilo:r}){let[i,a]=(0,t.useState)(`password`),[o,s]=(0,t.useState)(`password`),[c,l]=(0,t.useState)(`password`),d=(e,t)=>{e.preventDefault(),t===`password_attuale`?a(i===`text`?`password`:`text`):t===`nuova_password`?s(o===`text`?`password`:`text`):t===`conferma_nuova_password`&&l(c===`text`?`password`:`text`)};return(0,u.jsxs)(V.StyledRow,{children:[(0,u.jsx)(O,{eseguiModificaProfilo:r,vistaItem:`row`,StyledComponents:V}),n.map(n=>{let r=e.type[n]?S(1,!0,V):C(1,!0,V),a=e.name[n]===`password_attuale`&&i===`password`||e.name[n]===`nuova_password`&&o===`password`||e.name[n]===`conferma_nuova_password`&&c===`password`?V.StyledEyeClosedNotSelected:V.StyledEyeOpenNotSelected;return(0,u.jsx)(t.Fragment,{children:(0,u.jsx)(V.StyledCol,{children:(0,u.jsxs)(`div`,{style:{width:`100%`},children:[(0,u.jsxs)(V.StyledRow,{children:[(0,u.jsx)(r,{style:e.name[n].includes(`password`)?{maxWidth:`80%`}:null,rows:1,name:e.name[n],id:e.id[n],type:e.name[n].includes(`password`)?e.name[n]===`password_attuale`?i:e.name[n]===`nuova_password`?o:c:e.type[n],step:e.step[n],min:e.min[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur,onContextMenu:t=>handleRightClick(t,e.placeholder[n])}),e.name[n].includes(`password`)&&(0,u.jsx)(a,{style:{maxWidth:`20%`,marginLeft:`-6px`},size:V.grandezzaIcona,onClick:t=>d(t,e.name[n])})]}),e.options[n],e.errore[n]&&(0,u.jsx)(V.StyledSpanErrore,{children:e.errore[n]})]})})},n)})]})}function Et({datiRicerca:e,setDatiRicerca:t,handleInputChange:n,eseguiRicerca:r,lingua:i}){return(0,u.jsxs)(V.StyledRow,{children:[(0,u.jsx)(E,{eseguiRicerca:e=>r(e),vistaItem:`row`,StyledComponents:V}),(0,u.jsx)(V.StyledCol,{children:(0,u.jsx)(`div`,{style:{width:`100%`},children:(0,u.jsx)(V.StyledRow,{children:(0,u.jsx)(V.StyledInputBlock,{rows:1,name:`header`,value:i===`italiano`?`Ricerca entrate e uscite`:`Searching for inputs and outputs`,placeholder:i===`italiano`?`Ricerca entrate e uscite`:`Searching for inputs and outputs`,readOnly:!0})})})}),(0,u.jsx)(V.StyledCol,{children:(0,u.jsx)(`div`,{style:{width:`100%`},children:(0,u.jsx)(V.StyledInputModifica,{rows:1,name:`primo_anno`,id:`primo_anno`,type:`number`,step:1,value:e.primo_anno,placeholder:`Primo anno`,onChange:e=>n(e,t),onContextMenu:e=>handleRightClick(e,`Primo anno`)})})}),(0,u.jsx)(V.StyledCol,{children:(0,u.jsx)(`div`,{style:{width:`100%`},children:(0,u.jsxs)(V.StyledSelectModifica,{name:`ultimo_anno`,id:`ultimo_anno`,onContextMenu:e=>handleRightClick(e,`Ultimo anno`),value:e.ultimo_anno,onChange:e=>n(e,t),children:[(0,u.jsx)(`option`,{value:parseInt(e.primo_anno)+1,children:parseInt(e.primo_anno)+1}),(0,u.jsx)(`option`,{value:parseInt(e.primo_anno)+2,children:parseInt(e.primo_anno)+2}),(0,u.jsx)(`option`,{value:parseInt(e.primo_anno)+3,children:parseInt(e.primo_anno)+3}),(0,u.jsx)(`option`,{value:parseInt(e.primo_anno)+4,children:parseInt(e.primo_anno)+4}),(0,u.jsx)(`option`,{value:parseInt(e.primo_anno)+5,children:parseInt(e.primo_anno)+5})]})})})]})}var Dt=(0,n.default)(r.default)`
  width: 18rem;
  background-color: transparent;
  overflow: hidden;
  border-radius: 40px;
  color: white;
  text-align: center;
  padding: 0;
  border: transparent;
`,Ot=(0,n.default)(a.default)`
  display: flex;
  flex-wrap: wrap;
`,kt=(0,n.default)(o.default)`
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
`,At=(0,n.default)(r.default.Header)`
  color: #ffffff;
  background-color: #000000;
  border: 5px solid #000000;
  min-height: 70px;
`,jt=(0,n.default)(i.default.Item)`
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  min-height: 70px;
`,Mt=n.default.div`
  overflow: hidden;
  transition: max-height 2s ease-out;
  background-color: #111111;
  border: 10px solid #000000;
`,J=n.default.textarea`
  width: 100%;
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  min-height: 70px;
`,Nt=(0,n.default)(J)`
  background-color: #111111;
`,Pt=(0,n.default)(J)`
  background-color: #0050EF;
`,Ft=(0,n.default)(J)`
  background-color: #500000;
`,Y=n.default.input`
  width: 100%;
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  min-height: 70px;
`,It=(0,n.default)(Y)`
  background-color: #111111;
`,Lt=(0,n.default)(Y)`
  background-color: #0050EF;
`,Rt=(0,n.default)(Y)`
  background-color: #500000;
`,X=`
  color: #FFFFFF;
  cursor: pointer;
`;n.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-top:10px;
`;var zt=(0,n.default)(s.Save)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,Bt=(0,n.default)(s.EyeClosed)`
  ${X}
  transition: 0.5s all ease-out;
`,Vt=(0,n.default)(s.Eye)`
  ${X}
  transition: 0.5s all ease-out;
  color: #0050EF;
`,Ht=(0,n.default)(s.Search)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,Ut=(0,n.default)(s.Euro)`
  color: #FFFFFF;
  transition: 0.5s all ease-out;
`,Wt=(0,n.default)(s.ChevronUp)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,Gt=(0,n.default)(s.ChevronDown)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,Kt=(0,n.default)(s.LogIn)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,qt=(0,n.default)(s.Pencil)`
  ${X}
`;(0,n.default)(s.Pencil)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`;var Jt=(0,n.default)(s.Pencil)`
  color: #0050EF;
  cursor: pointer;
`,Yt=(0,n.default)(s.Trash2)`
  ${X}
`,Xt=(0,n.default)(s.Trash2)`
  color: #500000;
  cursor: pointer;
`,Zt=(0,n.default)(c.FontAwesomeIcon)`
  color: #FFFFFF;
`,Qt=(0,n.default)(c.FontAwesomeIcon)`
  ${X}
  color: #0050EF;
`,$t=(0,n.default)(s.Download)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`;(0,n.default)(s.X)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #500000;
  }
`;var en=(0,n.default)(s.Pencil)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,tn=(0,n.default)(s.Trash2)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #500000;
  }
`,Z=n.default.select`
  width: 100%;
  min-height: 70px;
  background-color: #0050EF;
  border: 5px solid #000000;
  color: #FFFFFF;
  text-align: center;
`,nn=(0,n.default)(Z)`
  background-color: #111111;
`,rn=(0,n.default)(Z)`
  background-color: #0050EF;
`,an=(0,n.default)(Z)`
  background-color: #500000;
`;n.default.option`

  background-color: #0050EF;
  &:hover {
    background-color: #0050EF;
  }
`;var Q={StyledPencilNotSelected:qt,StyledPencilSelected:Jt,grandezzaIcona:50,StyledTrashNotSelected:Yt,StyledTrashSelected:Xt,StyledListGroupItem:jt,StyledRow:Ot,StyledCol:kt,StyledSaveNotSelected:zt,StyledEyeOpenNotSelected:Vt,StyledEyeClosedNotSelected:Bt,StyledSearchNotSelected:Ht,StyledArrowTopNotSelected:Wt,StyledArrowBottomNotSelected:Gt,StyledFileIconNotSelected:Zt,StyledDownloadNotSelected:$t,StyledTrashNotSelected2:tn,StyledLoginNotSelected:Kt,StyledPencilNotSelected2:en,StyledSelectBlock:nn,StyledSelectModifica:rn,StyledSelectElimina:an,StyledInputBlock:It,StyledInputModifica:Lt,StyledInputElimina:Rt,StyledTextAreaBlock:Nt,StyledTextAreaModifica:Pt,StyledTextAreaElimina:Ft,StyledCard:Dt,StyledCardHeader:At,SlideContainer:Mt,StyledSpanErrore:n.default.span`
  color: #FFFFFF;
  padding: 10px;
`,StyledEuroNotSelected:Ut,StyledFileIconSelected2:Qt};function $(e,t,n){return t===0?`#FFFFFF`:e<0?`#FF0000`:e>0?`#00FF00`:`#FFFFFF`}var on=e=>e.totale_gennaio+e.totale_febbraio+e.totale_marzo+e.totale_aprile+e.totale_maggio+e.totale_giugno+e.totale_luglio+e.totale_agosto+e.totale_settembre+e.totale_ottobre+e.totale_novembre+e.totale_dicembre,sn=e=>parseInt(e.quantita_gennaio)+parseInt(e.quantita_febbraio)+parseInt(e.quantita_marzo)+parseInt(e.quantita_aprile)+parseInt(e.quantita_maggio)+parseInt(e.quantita_giugno)+parseInt(e.quantita_luglio)+parseInt(e.quantita_agosto)+parseInt(e.quantita_settembre)+parseInt(e.quantita_ottobre)+parseInt(e.quantita_novembre)+parseInt(e.quantita_dicembre);function cn({campi:e,indici:n,eseguiSalvataggio:r}){let i=(e,t)=>{e.preventDefault(),alert(t)};return(0,u.jsx)(`center`,{children:(0,u.jsxs)(Q.StyledCard,{children:[(0,u.jsx)(Q.StyledCardHeader,{children:e.header}),(0,u.jsx)(Q.SlideContainer,{style:{maxHeight:`2000px`},children:n.map(n=>{let r=e.type[n]?S(1,!0,Q):C(1,!0,Q);return(0,u.jsxs)(t.Fragment,{children:[(0,u.jsxs)(Q.StyledRow,{children:[(0,u.jsx)(r,{rows:1,name:e.name[n],id:e.id[n],type:e.type[n],step:e.step[n],value:e.value[n]===` €`?``:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur,onContextMenu:t=>i(t,e.placeholder[n])}),e.options[n]]}),e.errore[n]!==``&&(0,u.jsx)(Q.StyledSpanErrore,{children:e.errore[n]})]},n)})}),(0,u.jsx)(w,{eseguiSalvataggio:r,vistaItem:`card`,StyledComponents:Q})]})})}function ln({campi:e,indici:n,handleSearch:r}){let[i,a]=(0,t.useState)(!0),[o,s]=(0,t.useState)(!0),c=i?`2000px`:`0px`;S(1,!0,Q),C(1,!0,Q);let l=(e,t)=>{e.preventDefault(),alert(t)};return(0,u.jsx)(`center`,{children:(0,u.jsxs)(Q.StyledCard,{children:[(0,u.jsx)(Q.StyledCardHeader,{children:e.header}),(0,u.jsx)(Q.SlideContainer,{style:{maxHeight:`${c}`},children:n.map(n=>{let r=e.type[n]?S(1,!0,Q):C(1,!0,Q);return(0,u.jsx)(t.Fragment,{children:(0,u.jsx)(Q.StyledRow,{children:(0,u.jsx)(r,{rows:1,name:e.name[n],id:e.id[n],type:e.value[n],value:e.value[n]===` €`?``:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur,onContextMenu:t=>l(t,e.placeholder[n])})})},n)})}),(0,u.jsx)(T,{setIsVisible:a,arrowUp:o,setArrowUp:s,handleSearch:r,vistaItem:`card`,StyledComponents:Q})]})})}function un({item:e,campi:n,indici:r,selectOperation:i,handleBlurItem:a}){let o=(0,t.useRef)([]),[s,c]=(0,t.useState)(()=>r.reduce((e,t)=>({...e,[t]:n.value[t]}),{})),l=(e,t)=>{e.preventDefault(),alert(t)};return(0,u.jsxs)(Q.StyledCard,{children:[(0,u.jsx)(Q.StyledCardHeader,{children:n.header}),(0,u.jsx)(Q.SlideContainer,{children:r.map(r=>{let i=n.type[r]?S(n.tipoSelezione,n.valoreModificabile[r],Q):C(n.tipoSelezione,n.valoreModificabile[r],Q);return(0,u.jsxs)(t.Fragment,{children:[(0,u.jsxs)(Q.StyledRow,{children:[(0,u.jsx)(i,{ref:e=>o.current[r]=e,rows:1,name:n.name[r],id:n.id[r],type:n.type[r],step:n.step[r],value:s[r],placeholder:n.placeholder[r],onChange:e=>H(e,r,c),onBlur:t=>a(t,e),onClick:e=>U(e),readOnly:e.tipo_selezione!==1,onContextMenu:e=>l(e,n.placeholder[r])}),n.options[r]]}),n.errore[r]&&(0,u.jsx)(Q.StyledSpanErrore,{children:n.errore[r]})]},`input-${r}`)})}),(0,u.jsx)(A,{selectOperation:i,item:e,vistaItem:`card`,StyledComponents:Q})]})}function dn({campi:e,indici:n,ottieniFileRangePDF:r,ottieniFileRangeExcel:i,eliminaItemsRange:a}){let o=(e,t)=>{e.preventDefault(),alert(t)};return(0,u.jsx)(`center`,{children:(0,u.jsxs)(Q.StyledCard,{children:[(0,u.jsx)(Q.StyledCardHeader,{children:e.header}),(0,u.jsx)(Q.SlideContainer,{style:{maxHeight:`2000px`},children:n.map(n=>(0,u.jsx)(t.Fragment,{children:(0,u.jsx)(e.type[n]?S(1,!0,Q):C(1,!0,Q),{rows:1,name:e.name[n],id:e.id[n],type:e.type[n],step:e.step[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur,onContextMenu:t=>o(t,e.placeholder[n])},n)},n))}),(0,u.jsx)(k,{ottieniFileRangePDF:r,ottieniFileRangeExcel:i,eliminaItemsRange:a,vistaItem:`card`,StyledComponents:Q})]})})}function fn({campi:e,indici:n,eseguiLogin:r}){let[i,a]=(0,t.useState)(`password`),o=e=>{e.preventDefault(),a(i===`text`?`password`:`text`)},s=(e,t)=>{e.preventDefault(),alert(t)};return(0,u.jsx)(`center`,{children:(0,u.jsxs)(Q.StyledCard,{children:[(0,u.jsx)(Q.StyledCardHeader,{children:e.header}),(0,u.jsx)(Q.SlideContainer,{style:{maxHeight:`2000px`},children:n.map(n=>{let r=e.type[n]?S(1,!0,Q):C(1,!0,Q),a=i===`password`?Q.StyledEyeClosedNotSelected:Q.StyledEyeOpenNotSelected;return(0,u.jsxs)(t.Fragment,{children:[(0,u.jsxs)(Q.StyledRow,{children:[(0,u.jsx)(r,{style:e.name[n]===`password`?{maxWidth:`80%`}:null,rows:1,name:e.name[n],id:e.id[n],type:e.name[n]===`password`?i:e.type[n],step:e.step[n],min:e.min[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur,onContextMenu:t=>s(t,e.placeholder[n])}),e.name[n]===`password`&&(0,u.jsx)(a,{style:{maxWidth:`20%`,marginLeft:`-6px`,marginTop:`13px`},size:Q.grandezzaIcona,onClick:o})]}),e.options[n],e.errore[n]&&(0,u.jsx)(Q.StyledSpanErrore,{children:e.errore[n]})]},n)})}),(0,u.jsx)(D,{eseguiLogin:r,vistaItem:`card`,StyledComponents:Q})]})})}function pn({campi:e,indici:n,eseguiModificaProfilo:r}){let[i,a]=(0,t.useState)(`password`),[o,s]=(0,t.useState)(`password`),[c,l]=(0,t.useState)(`password`),d=(e,t)=>{e.preventDefault(),t===`password_attuale`?a(i===`text`?`password`:`text`):t===`nuova_password`?s(o===`text`?`password`:`text`):t===`conferma_nuova_password`&&l(c===`text`?`password`:`text`)};return(0,u.jsx)(`center`,{children:(0,u.jsxs)(Q.StyledCard,{children:[(0,u.jsx)(Q.StyledCardHeader,{children:e.header}),(0,u.jsx)(Q.SlideContainer,{style:{maxHeight:`2000px`},children:n.map(n=>{let r=e.type[n]?S(1,!0,Q):C(1,!0,Q),a=e.name[n]===`password_attuale`&&i===`password`||e.name[n]===`nuova_password`&&o===`password`||e.name[n]===`conferma_nuova_password`&&c===`password`?Q.StyledEyeClosedNotSelected:Q.StyledEyeOpenNotSelected;return(0,u.jsxs)(t.Fragment,{children:[(0,u.jsxs)(Q.StyledRow,{children:[(0,u.jsx)(r,{style:e.name[n].includes(`password`)?{maxWidth:`80%`}:null,rows:1,name:e.name[n],id:e.id[n],type:e.name[n].includes(`password`)?e.name[n]===`password_attuale`?i:e.name[n]===`nuova_password`?o:c:e.type[n],step:e.step[n],min:e.min[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur,onContextMenu:t=>handleRightClick(t,e.placeholder[n])}),e.name[n].includes(`password`)&&(0,u.jsx)(a,{style:{maxWidth:`20%`,marginLeft:`-6px`,marginTop:`13px`},size:Q.grandezzaIcona,onClick:t=>d(t,e.name[n])})]}),e.options[n],e.errore[n]&&(0,u.jsx)(Q.StyledSpanErrore,{children:e.errore[n]})]},n)})}),(0,u.jsx)(O,{eseguiModificaProfilo:r,vistaItem:`card`,StyledComponents:Q})]})})}function mn({nome:e,img:t,id:n,onClickWidget:r,backgroundColor:i}){return(0,u.jsxs)(d.Card,{style:{width:`300px`,height:`400px`,backgroundColor:i,borderRadius:`50px`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`},onClick:e=>{r(e,n)},draggable:!1,children:[(0,u.jsx)(d.Card.Img,{style:{width:`220px`,height:`220px`,borderRadius:`20px`,marginTop:`40px`,marginBottom:`20px`,pointerEvents:`none`},variant:`top`,src:t}),(0,u.jsx)(d.Card.Body,{children:(0,u.jsx)(d.Card.Title,{style:{color:`#FFFFFF`,textAlign:`center`},children:e})})]})}function hn({entrateItems:e,lingua:t,etichettaIta:n,etichettaEng:r}){return(0,u.jsxs)(d.Card,{style:{display:`inline-block`,backgroundColor:`rgba(0, 0, 0, 0.5)`,borderRadius:`50px`,paddingLeft:`50px`,paddingRight:`50px`,paddingBottom:`50px`,overflowX:`auto`},children:[(0,u.jsx)(d.Card.Body,{children:(0,u.jsx)(`center`,{children:(0,u.jsx)(d.Card.Title,{style:{color:`#FFFFFF`},children:t===`italiano`?n:r})})}),(0,u.jsx)(`center`,{children:(0,u.jsxs)(d.Table,{striped:!0,bordered:!0,hover:!0,variant:`dark`,style:{borderRadius:`50px`,marginTop:`0`,marginBottom:`10px`,textAlign:`center`},children:[(0,u.jsx)(`thead`,{children:(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`ANNO`:`YEAR`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`GEN`:`JAN`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:`FEB`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:`MAR`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:`APR`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`MAG`:`MAY`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`GIU`:`JUN`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`LUG`:`JUL`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`AGO`:`AUG`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`SET`:`SEP`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`OTT`:`OCT`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:`NOV`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`DIC`:`DEC`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`TOT ENTRATE`:`TOT REVENUE`})]})}),(0,u.jsx)(`tbody`,{children:e.map((e,t)=>t>1&&(0,u.jsx)(`tr`,{children:Object.values(e).map((e,t)=>(0,u.jsx)(`td`,{style:{color:$(e,t,`entrata`),fontWeight:t===0?`bold`:null},children:t>0?parseFloat(e).toFixed(2)+` €`:e},t))},t))}),(0,u.jsx)(`tbody`,{children:(0,u.jsx)(`tr`,{children:Object.values(e[0]).map((e,t)=>(0,u.jsx)(`td`,{style:{color:$(e,t,`entrata`),fontWeight:t===0?`bold`:null},children:t>0?parseFloat(e).toFixed(2)+` €`:e},t))})})]})})]})}function gn({entrateItems:e,lingua:n,tipoItemIta:r,tipoItemEng:i,etichettaIta:a,etichettaEng:o}){let[s,c]=(0,t.useState)(0);return(0,u.jsxs)(d.Card,{style:{display:`inline-block`,backgroundColor:`rgba(0, 0, 0, 0.5)`,borderRadius:`50px`,paddingLeft:`50px`,paddingRight:`50px`,paddingBottom:`50px`,overflowX:`auto`},children:[(0,u.jsx)(d.Card.Body,{children:(0,u.jsx)(`center`,{children:(0,u.jsx)(d.Card.Title,{style:{color:`#FFFFFF`},children:n===`italiano`?a:o})})}),(0,u.jsx)(`center`,{children:(0,u.jsxs)(d.Table,{striped:!0,bordered:!0,hover:!0,variant:`dark`,style:{borderRadius:`50px`,marginTop:`0`,marginBottom:`10px`,textAlign:`center`},children:[(0,u.jsx)(`thead`,{}),(0,u.jsx)(`tbody`,{children:e.map((a,o)=>(0,u.jsxs)(t.Fragment,{children:[(o===0||e[o].anno!==e[o-1].anno)&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`tr`,{children:(0,u.jsxs)(`th`,{colSpan:14,children:[n===`italiano`?`ANNO`:`YEAR`,` = `,a.anno]})}),(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?r:i}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`GEN`:`JAN`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:`FEB`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:`MAR`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:`APR`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`MAG`:`MAY`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`GIU`:`JUN`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`LUG`:`JUL`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`AGO`:`AUG`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`SET`:`SEP`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`OTT`:`OCT`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:`NOV`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`DIC`:`DEC`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`TOT ENTRATE`:`TOT REVENUE`})]})]}),(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`td`,{style:{color:`#FFFFFF`,fontWeight:`bold`},children:a.nome}),(0,u.jsxs)(`td`,{style:{color:$(a.totale_gennaio,1,`entrata`),fontWeight:`bold`},children:[`x `,a.quantita_gennaio,` = `,parseFloat(a.totale_gennaio).toFixed(2)+` €`]}),(0,u.jsxs)(`td`,{style:{color:$(a.totale_febbraio,1,`entrata`),fontWeight:`bold`},children:[`x `,a.quantita_febbraio,` = `,parseFloat(a.totale_febbraio).toFixed(2)+` €`]}),(0,u.jsxs)(`td`,{style:{color:$(a.totale_marzo,1,`entrata`),fontWeight:`bold`},children:[`x `,a.quantita_marzo,` = `,parseFloat(a.totale_marzo).toFixed(2)+` €`]}),(0,u.jsxs)(`td`,{style:{color:$(a.totale_aprile,1,`entrata`),fontWeight:`bold`},children:[`x `,a.quantita_aprile,` = `,parseFloat(a.totale_aprile).toFixed(2)+` €`]}),(0,u.jsxs)(`td`,{style:{color:$(a.totale_maggio,1,`entrata`),fontWeight:`bold`},children:[`x `,a.quantita_maggio,` = `,parseFloat(a.totale_maggio).toFixed(2)+` €`]}),(0,u.jsxs)(`td`,{style:{color:$(a.totale_giugno,1,`entrata`),fontWeight:`bold`},children:[`x `,a.quantita_giugno,` = `,parseFloat(a.totale_giugno).toFixed(2)+` €`]}),(0,u.jsxs)(`td`,{style:{color:$(a.totale_luglio,1,`entrata`),fontWeight:`bold`},children:[`x `,a.quantita_luglio,` = `,parseFloat(a.totale_luglio).toFixed(2)+` €`]}),(0,u.jsxs)(`td`,{style:{color:$(a.totale_agosto,1,`entrata`),fontWeight:`bold`},children:[`x `,a.quantita_agosto,` = `,parseFloat(a.totale_agosto).toFixed(2)+` €`]}),(0,u.jsxs)(`td`,{style:{color:$(a.totale_settembre,1,`entrata`),fontWeight:`bold`},children:[`x `,a.quantita_settembre,` = `,parseFloat(a.totale_settembre).toFixed(2)+` €`]}),(0,u.jsxs)(`td`,{style:{color:$(a.totale_ottobre,1,`entrata`),fontWeight:`bold`},children:[`x `,a.quantita_ottobre,` = `,parseFloat(a.totale_ottobre).toFixed(2)+` €`]}),(0,u.jsxs)(`td`,{style:{color:$(a.totale_novembre,1,`entrata`),fontWeight:`bold`},children:[`x `,a.quantita_novembre,` = `,parseFloat(a.totale_novembre).toFixed(2)+` €`]}),(0,u.jsxs)(`td`,{style:{color:$(a.totale_dicembre,1,`entrata`),fontWeight:`bold`},children:[`x `,a.quantita_dicembre,` = `,parseFloat(a.totale_dicembre).toFixed(2)+` €`]}),(0,u.jsxs)(`td`,{style:{color:$(on(a),1,`entrata`),fontWeight:`bold`},children:[`x `,sn(a),` = `,parseFloat(on(a)).toFixed(2)+` €`]})]})]},o))})]})})]})}function _n({usciteItems:e,lingua:t,etichettaIta:n,etichettaEng:r}){return(0,u.jsxs)(d.Card,{style:{display:`inline-block`,backgroundColor:`rgba(0, 0, 0, 0.5)`,borderRadius:`50px`,paddingLeft:`50px`,paddingRight:`50px`,paddingBottom:`50px`,overflowX:`auto`},children:[(0,u.jsx)(d.Card.Body,{children:(0,u.jsx)(`center`,{children:(0,u.jsx)(d.Card.Title,{style:{color:`#FFFFFF`},children:t===`italiano`?n:r})})}),(0,u.jsx)(`center`,{children:(0,u.jsxs)(d.Table,{striped:!0,bordered:!0,hover:!0,variant:`dark`,style:{borderRadius:`50px`,marginTop:`0`,marginBottom:`10px`,textAlign:`center`},children:[(0,u.jsx)(`thead`,{children:(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`ANNO`:`YEAR`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`GEN`:`JAN`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:`FEB`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:`MAR`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:`APR`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`MAG`:`MAY`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`GIU`:`JUN`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`LUG`:`JUL`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`AGO`:`AUG`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`SET`:`SEP`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`OTT`:`OCT`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:`NOV`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`DIC`:`DEC`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`TOT USCITE`:`TOT EXIT`})]})}),(0,u.jsx)(`tbody`,{children:e.map((e,t)=>t>1&&(0,u.jsx)(`tr`,{children:Object.values(e).map((e,t)=>(0,u.jsx)(`td`,{style:{color:$(-e,t,`uscita`),fontWeight:t===0?`bold`:null},children:t>0?parseFloat(-e).toFixed(2)+` €`:e},t))},t))}),(0,u.jsx)(`tbody`,{children:(0,u.jsx)(`tr`,{children:Object.values(e[0]).map((e,t)=>(0,u.jsx)(`td`,{style:{color:$(-e,t,`uscita`),fontWeight:t===0?`bold`:null},children:t>0?parseFloat(-e).toFixed(2)+` €`:e},t))})})]})})]})}function vn({entrate:e,uscite:t,lingua:n}){return(0,u.jsxs)(d.Card,{style:{display:`inline-block`,backgroundColor:`rgba(0, 0, 0, 0.5)`,borderRadius:`50px`,paddingLeft:`50px`,paddingRight:`50px`,paddingBottom:`50px`,overflowX:`auto`},children:[(0,u.jsx)(d.Card.Body,{children:(0,u.jsx)(`center`,{children:(0,u.jsx)(d.Card.Title,{style:{color:`#FFFFFF`},children:n===`italiano`?`Ricavi`:`Revenues`})})}),(0,u.jsx)(`center`,{children:(0,u.jsxs)(d.Table,{striped:!0,bordered:!0,hover:!0,variant:`dark`,style:{borderRadius:`50px`,marginTop:`0`,marginBottom:`10px`,textAlign:`center`},children:[(0,u.jsx)(`thead`,{children:(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`ANNO`:`YEAR`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`GEN`:`JAN`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:`FEB`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:`MAR`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:`APR`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`MAG`:`MAY`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`GIU`:`JUN`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`LUG`:`JUL`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`AGO`:`AUG`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`SET`:`SEP`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`OTT`:`OCT`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:`NOV`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`DIC`:`DEC`}),(0,u.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`TOT RICAVI`:`TOT EARNINGS`})]})}),(0,u.jsxs)(`tbody`,{children:[e.map((e,n)=>n>1&&(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`td`,{style:{fontWeight:`bold`},children:e.Anno}),t[n]&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(`td`,{style:{color:$(e.gen-t[n].gen)},children:[parseFloat(e.gen-t[n].gen).toFixed(2),` €`]}),(0,u.jsxs)(`td`,{style:{color:$(e.feb-t[n].feb)},children:[parseFloat(e.feb-t[n].feb).toFixed(2),` €`]}),(0,u.jsxs)(`td`,{style:{color:$(e.mar-t[n].mar)},children:[parseFloat(e.mar-t[n].mar).toFixed(2),` €`]}),(0,u.jsxs)(`td`,{style:{color:$(e.apr-t[n].apr)},children:[parseFloat(e.apr-t[n].apr).toFixed(2),` €`]}),(0,u.jsxs)(`td`,{style:{color:$(e.mag-t[n].mag)},children:[parseFloat(e.mag-t[n].mag).toFixed(2),` €`]}),(0,u.jsxs)(`td`,{style:{color:$(e.giu-t[n].giu)},children:[parseFloat(e.giu-t[n].giu).toFixed(2),` €`]}),(0,u.jsxs)(`td`,{style:{color:$(e.lug-t[n].lug)},children:[parseFloat(e.lug-t[n].lug).toFixed(2),` €`]}),(0,u.jsxs)(`td`,{style:{color:$(e.ago-t[n].ago)},children:[parseFloat(e.ago-t[n].ago).toFixed(2),` €`]}),(0,u.jsxs)(`td`,{style:{color:$(e.set-t[n].set)},children:[parseFloat(e.set-t[n].set).toFixed(2),` €`]}),(0,u.jsxs)(`td`,{style:{color:$(e.ott-t[n].ott)},children:[parseFloat(e.ott-t[n].ott).toFixed(2),` €`]}),(0,u.jsxs)(`td`,{style:{color:$(e.nov-t[n].nov)},children:[parseFloat(e.nov-t[n].nov).toFixed(2),` €`]}),(0,u.jsxs)(`td`,{style:{color:$(e.dic-t[n].dic)},children:[parseFloat(e.dic-t[n].dic).toFixed(2),` €`]}),(0,u.jsxs)(`td`,{style:{color:$(e.totale_anno-t[n].totale_anno)},children:[parseFloat(e.totale_anno-t[n].totale_anno).toFixed(2),` €`]})]})]},n)),(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`td`,{style:{fontWeight:`bold`},children:e[0].Anno}),(0,u.jsxs)(`td`,{style:{color:$(e[0].gen-t[0].gen,1)},children:[parseFloat(e[0].gen-t[0].gen).toFixed(2),` €`]}),(0,u.jsxs)(`td`,{style:{color:$(e[0].feb-t[0].feb)},children:[parseFloat(e[0].feb-t[0].feb).toFixed(2),` €`]}),(0,u.jsxs)(`td`,{style:{color:$(e[0].mar-t[0].mar)},children:[parseFloat(e[0].mar-t[0].mar).toFixed(2),` €`]}),(0,u.jsxs)(`td`,{style:{color:$(e[0].apr-t[0].apr)},children:[parseFloat(e[0].apr-t[0].apr).toFixed(2),` €`]}),(0,u.jsxs)(`td`,{style:{color:$(e[0].mag-t[0].mag)},children:[parseFloat(e[0].mag-t[0].mag).toFixed(2),` €`]}),(0,u.jsxs)(`td`,{style:{color:$(e[0].giu-t[0].giu)},children:[parseFloat(e[0].giu-t[0].giu).toFixed(2),` €`]}),(0,u.jsxs)(`td`,{style:{color:$(e[0].lug-t[0].lug)},children:[parseFloat(e[0].lug-t[0].lug).toFixed(2),` €`]}),(0,u.jsxs)(`td`,{style:{color:$(e[0].ago-t[0].ago)},children:[parseFloat(e[0].ago-t[0].ago).toFixed(2),` €`]}),(0,u.jsxs)(`td`,{style:{color:$(e[0].set-t[0].set)},children:[parseFloat(e[0].set-t[0].set).toFixed(2),` €`]}),(0,u.jsxs)(`td`,{style:{color:$(e[0].ott-t[0].ott)},children:[parseFloat(e[0].ott-t[0].ott).toFixed(2),` €`]}),(0,u.jsxs)(`td`,{style:{color:$(e[0].nov-t[0].nov)},children:[parseFloat(e[0].nov-t[0].nov).toFixed(2),` €`]}),(0,u.jsxs)(`td`,{style:{color:$(e[0].dic-t[0].dic)},children:[parseFloat(e[0].dic-t[0].dic).toFixed(2),` €`]}),(0,u.jsxs)(`td`,{style:{color:$(e[0].totale_anno-t[0].totale_anno)},children:[parseFloat(e[0].totale_anno-t[0].totale_anno).toFixed(2),` €`]})]},0)]})]})})]})}function yn({totaleItems:e}){return(0,u.jsxs)(Q.StyledCard,{children:[(0,u.jsx)(Q.StyledCardHeader,{children:`Informations`}),(0,u.jsx)(Q.SlideContainer,{children:e&&(0,u.jsx)(Q.StyledInputBlock,{rows:1,name:`totale_items`,id:`totale_items`,type:`text`,value:e||`Errore!!`,readOnly:!0})})]})}function bn({datiRicerca:e,setDatiRicerca:t,handleInputChange:n,eseguiRicerca:r,lingua:i}){return(0,u.jsxs)(Q.StyledCard,{children:[(0,u.jsx)(Q.StyledCardHeader,{children:i===`italiano`?`Ricerca entrate e uscite`:`Searching for inputs and outputs`}),(0,u.jsxs)(Q.SlideContainer,{style:{maxHeight:`2000px`},children:[(0,u.jsx)(Q.StyledInputModifica,{rows:1,name:`primo_anno`,id:`primo_anno`,type:`number`,step:1,value:e.primo_anno,placeholder:`Primo anno`,onChange:e=>n(e,t),onContextMenu:e=>handleRightClick(e,`Primo anno`)}),(0,u.jsxs)(Q.StyledSelectModifica,{name:`ultimo_anno`,id:`ultimo_anno`,value:e.ultimo_anno,onChange:e=>n(e,t),onContextMenu:e=>handleRightClick(e,`Ultimo anno`),children:[(0,u.jsx)(`option`,{value:parseInt(e.primo_anno)+1,children:parseInt(e.primo_anno)+1}),(0,u.jsx)(`option`,{value:parseInt(e.primo_anno)+2,children:parseInt(e.primo_anno)+2}),(0,u.jsx)(`option`,{value:parseInt(e.primo_anno)+3,children:parseInt(e.primo_anno)+3}),(0,u.jsx)(`option`,{value:parseInt(e.primo_anno)+4,children:parseInt(e.primo_anno)+4}),(0,u.jsx)(`option`,{value:parseInt(e.primo_anno)+5,children:parseInt(e.primo_anno)+5})]})]}),(0,u.jsx)(E,{eseguiRicerca:e=>r(e),vistaItem:`card`,StyledComponents:Q})]})}var xn=({tipoItem:e,items:t,setItems:n,selectOperation:r,campi:i,handleBlurItem:a,tipoForm:o,vistaItem:s})=>{let c=s===`card`?un:K,l=()=>(0,u.jsx)(u.Fragment,{children:t.map((o,s)=>(0,u.jsx)(c,{item:o,campi:o?i(o,null,null,null):[],indici:[...Array(i(o,null,null,null).label.length).keys()],selectOperation:r,items:t,setItems:n,tipoItem:e,handleBlurItem:a},s))});return(0,u.jsxs)(u.Fragment,{children:[o===`search`&&t.length===0&&(0,u.jsx)(`div`,{className:`contenitore-1`,children:`Nessun elemento trovato.`}),t.length>0&&(0,u.jsx)(u.Fragment,{children:s===`card`?(0,u.jsx)(`div`,{className:`contenitore-3`,children:(0,u.jsx)(l,{})}):(0,u.jsx)(l,{})})]})};e.CambioTipoForm=M,e.CambioTipoForm2=Ue,e.CardEntrateItems=hn,e.CardEntrateItemsByName=gn,e.CardEntrateUscite=bn,e.CardFileItems=dn,e.CardInformazioni=yn,e.CardItemEsistente=un,e.CardLogin=fn,e.CardNuovoItem=cn,e.CardProfilo=pn,e.CardRicavi=vn,e.CardRicercaItems=ln,e.CardUsciteItems=_n,e.CardWidget=mn,e.FormEntrateUscite=qe,e.FormFileItems=P,e.FormLogin=Ge,e.FormNuovoItem=We,e.FormProfilo=Ke,e.FormRicercaItems=N,e.PaginaWeb=({componenti:e,elementi:n,vistaItem:r,vistaForm:i})=>{let[a,o]=(0,t.useState)(`search`),s=i===`form`?We:i===`card`?cn:W,c=i===`form`?N:i===`card`?ln:G,l=i===`form`?P:i===`card`?dn:q;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(M,{elementi:n,tipoForm:a,setTipoForm:o,StyledComponents:x}),(0,u.jsx)(`br`,{}),` `,(0,u.jsx)(`br`,{}),` `,(0,u.jsx)(`br`,{}),` `,(0,u.jsx)(`br`,{}),n.map((n,r)=>(0,u.jsxs)(t.Fragment,{children:[n===`insert`&&a===`insert`&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s,{campi:e.campiNuovoItem,indici:e.indiciNuovoItem,eseguiSalvataggio:e.handleInsert}),(0,u.jsx)(`br`,{}),` `,(0,u.jsx)(`br`,{}),` `,(0,u.jsx)(`br`,{}),` `,(0,u.jsx)(`br`,{})]}),n===`search`&&a===`search`&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c,{campi:e.campiRicercaItems,indici:e.indiciRicercaItems,handleSearch:e.handleSearch}),(0,u.jsx)(`br`,{}),` `,(0,u.jsx)(`br`,{}),` `,(0,u.jsx)(`br`,{}),` `,(0,u.jsx)(`br`,{})]}),n===`file`&&a===`file`&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l,{campi:e.campiFile,indici:e.indiciFile,ottieniFileRangePDF:e.handleSearchRangeFilePDF,ottieniFileRangeExcel:e.handleSearchRangeFileExcel,eliminaItemsRange:e.handleDeleteRangeFile}),(0,u.jsx)(`br`,{}),` `,(0,u.jsx)(`br`,{}),` `,(0,u.jsx)(`br`,{}),` `,(0,u.jsx)(`br`,{})]})]},r)),a!==`file`&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(xn,{tipoItem:e.tipoItem,items:e.items,setItems:e.setItems,selectOperation:e.selectOperation,campi:e.campiItemEsistente,handleBlurItem:e.handleBlurItem,tipoForm:a,vistaItem:r}),(0,u.jsx)(`br`,{}),` `,(0,u.jsx)(`br`,{}),` `,(0,u.jsx)(`br`,{}),` `,(0,u.jsx)(`br`,{}),e.visualizzazioneInformazioni===!0&&e.items.length>0&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`center`,{children:(0,u.jsx)(yn,{totaleItems:e.totaleItems})}),(0,u.jsx)(`br`,{}),` `,(0,u.jsx)(`br`,{}),` `,(0,u.jsx)(`br`,{}),` `,(0,u.jsx)(`br`,{})]}),(0,u.jsx)(He,{selectedIdsModifica:e.selectedIdsModifica,selectedIdsEliminazione:e.selectedIdsEliminazione,handleEdit:e.handleEdit,handleDelete:e.handleDelete}),(0,u.jsx)(`br`,{}),` `,(0,u.jsx)(`br`,{}),` `,(0,u.jsx)(`br`,{}),` `,(0,u.jsx)(`br`,{})]})]})},e.RowEntrateUscite=Et,e.RowFileItems=q,e.RowItemEsistente=K,e.RowLogin=wt,e.RowNuovoItem=W,e.RowProfilo=Tt,e.RowRicercaItems=G});