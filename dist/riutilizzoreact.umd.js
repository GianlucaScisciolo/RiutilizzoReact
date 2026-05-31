(function(e,t){typeof exports==`object`&&typeof module<`u`?t(exports,require(`react`),require(`styled-components`),require(`react-bootstrap/Card`),require(`react-bootstrap/ListGroup`),require(`react-bootstrap/esm/Row`),require(`react-bootstrap/esm/Col`),require(`lucide-react`),require(`@fortawesome/react-fontawesome`),require(`@fortawesome/free-solid-svg-icons`),require(`react/jsx-runtime`),require(`react-bootstrap`)):typeof define==`function`&&define.amd?define([`exports`,`react`,`styled-components`,`react-bootstrap/Card`,`react-bootstrap/ListGroup`,`react-bootstrap/esm/Row`,`react-bootstrap/esm/Col`,`lucide-react`,`@fortawesome/react-fontawesome`,`@fortawesome/free-solid-svg-icons`,`react/jsx-runtime`,`react-bootstrap`],t):(e=typeof globalThis<`u`?globalThis:e||self,t(e.RiutilizzoReact={},e.React,e.styled,e.ReactBootstrap.Card,e.ReactBootstrap.ListGroup,e.ReactBootstrap.Row,e.ReactBootstrap.Col,e.LucideReact,e.FontAwesomeIcon,e.FreeSolidSvgIcons,e.jsxRuntime,e.ReactBootstrap))})(this,function(e,t,n,r,a,o,s,c,l,u,d,f){Object.defineProperty(e,Symbol.toStringTag,{value:`Module`});var ee=Object.create,te=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,re=Object.getOwnPropertyNames,ie=Object.getPrototypeOf,ae=Object.prototype.hasOwnProperty,oe=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var a=re(t),o=0,s=a.length,c;o<s;o++)c=a[o],!ae.call(e,c)&&c!==n&&te(e,c,{get:(e=>t[e]).bind(null,c),enumerable:!(r=ne(t,c))||r.enumerable});return e},p=(e,t,n)=>(n=e==null?{}:ee(ie(e)),oe(t||!e||!e.__esModule?te(n,`default`,{value:e,enumerable:!0}):n,e));n=p(n,1),r=p(r,1),a=p(a,1),o=p(o,1),s=p(s,1);var se=(0,n.default)(r.default)`
  background-color: #111111;
  overflow: hidden;
  border: 5px solid #000000;
  border-radius: 40px;
  margin-left: 30%;
  margin-right: 30%;

  color: white;
  text-align: center;
`,ce=(0,n.default)(r.default.Header)`
  color: #ffffff;
  background-color: #000000;
  border: 5px solid #000000;
  min-height: 70px;
`,le=(0,n.default)(a.default.Item)`
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  min-height: 70px;
`,ue=n.default.div`
  overflow: hidden;
  transition: max-height 1.5s ease-out;
`,de=(0,n.default)(o.default)`
  display: flex;
  flex-wrap: wrap;
  padding-left: 3%;
  padding-right: 3%;
`,fe=(0,n.default)(s.default)`
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
`,pe=n.default.label`
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
`,me=(0,n.default)(m)`
  background-color: #000000;
`,he=(0,n.default)(m)`
  background-color: #0050EF;
`,ge=(0,n.default)(m)`
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
`,_e=(0,n.default)(h)`
  background-color: #000000;
`,ve=(0,n.default)(h)`
  background-color: #0050EF;
`,ye=(0,n.default)(h)`
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
`,be=(0,n.default)(c.Save)`
  ${_}
`,xe=(0,n.default)(c.Save)`
  ${g}
`,Se=(0,n.default)(c.Save)`
  ${g}
  color: #0050EF;
`,Ce=(0,n.default)(c.EyeClosed)`
  ${g}
  transition: 0.5s all ease-out;
`,we=(0,n.default)(c.Eye)`
  ${g}
  transition: 0.5s all ease-out;
  color: #0050EF;
`,Te=(0,n.default)(c.Search)`
  ${_}
`,Ee=(0,n.default)(c.Search)`
  ${g}
`,De=(0,n.default)(c.Search)`
  ${g}
  color: #0050EF;
`,Oe=(0,n.default)(c.Euro)`
  color: #FFFFFF;
  transition: 0.5s all ease-out;
`,ke=(0,n.default)(c.ChevronUp)`
  ${_}
`,Ae=(0,n.default)(c.ChevronDown)`
  ${_}
`,je=(0,n.default)(c.LogIn)`
  ${_}
`,Me=(0,n.default)(l.FontAwesomeIcon)`
  color: #FFFFFF;
`,Ne=(0,n.default)(l.FontAwesomeIcon)`
  ${g}
`,Pe=(0,n.default)(l.FontAwesomeIcon)`
  ${g}
  color: #0050EF;
`,Fe=(0,n.default)(c.Download)`
  ${_}
`;(0,n.default)(c.X)`
  ${v}
`;var Ie=(0,n.default)(c.Trash2)`
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
`,Le=(0,n.default)(b)`
  background-color: #111111;
`,Re=(0,n.default)(b)`
  background-color: #0050EF;
`,ze=(0,n.default)(b)`
  background-color: #500000;
`;n.default.option`
  background-color: #0050EF;
  &:hover {
    background-color: #0050EF;
  }
`;var Be=n.default.span`
  color: #FF0000;
  padding: 10px;
`,x={StyledListGroupItem:le,StyledRow:de,StyledCol:fe,StyledSaveNotSelected:be,grandezzaIcona:50,StyledSearchNotSelected:Te,StyledArrowTopNotSelected:ke,StyledArrowBottomNotSelected:Ae,StyledLoginNotSelected:je,StyledPencilNotSelected:(0,n.default)(c.Pencil)`
  ${g}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,StyledLabel:pe,StyledInputBlock:_e,StyledInputModifica:ve,StyledInputElimina:ye,StyledTextAreaBlock:me,StyledTextAreaModifica:he,StyledTextAreaElimina:ge,StyledForm:se,StyledHeader:ce,SlideContainer:ue,StyledSpanErrore:Be,StyledSelectBlock:Le,StyledSelectModifica:Re,StyledSelectElimina:ze,StyledEyeClosedNotSelected:Ce,StyledEyeOpenNotSelected:we,StyledEuroNotSelected:Oe,StyledFileIconNotSelected:Me,StyledDownloadNotSelected:Fe,StyledTrashNotSelected:Ie,StyledSearchNotSelected2:Ee,StyledSaveNotSelected2:xe,StyledSearchSelected2:De,StyledSaveSelected2:Se,StyledFileIconNotSelected2:Ne,StyledFileIconSelected2:Pe};function Ve(e,t){return e===0||e===2?t.StyledPencilNotSelected:e===1?t.StyledPencilSelected:c.Pencil}function He(e,t){return e===0||e===1?t.StyledTrashNotSelected:e===2?t.StyledTrashSelected:c.Trash2}function S(e,t,n){return t?e!==1&&e!==2?n.StyledInputBlock:e===1?n.StyledInputModifica:n.StyledInputElimina:e===2?n.StyledInputElimina:n.StyledInputBlock}function C(e,t,n){return t?e!==1&&e!==2?n.StyledTextAreaBlock:e===1?n.StyledTextAreaModifica:n.StyledTextAreaElimina:e===2?n.StyledTextAreaElimina:n.StyledTextAreaBlock}function w({eseguiSalvataggio:e,vistaItem:t,StyledComponents:n}){return t===`card`||t===`form`?(0,d.jsx)(n.StyledListGroupItem,{style:{border:`5px solid #000000`,backgroundColor:`#000000`,paddingTop:`2%`,paddingBottom:`2%`},children:(0,d.jsx)(n.StyledRow,{children:(0,d.jsx)(n.StyledCol,{children:(0,d.jsx)(n.StyledSaveNotSelected,{className:`salvaItemButton`,size:n.grandezzaIcona,onClick:e})})})}):(0,d.jsx)(n.StyledColOperazioni,{children:(0,d.jsx)(n.StyledSaveNotSelected,{className:`center salvaItemButton`,size:n.grandezzaIcona,onClick:e})})}function T({handleSearch:e,vistaItem:t,StyledComponents:n}){return t===`card`||t===`form`?(0,d.jsx)(n.StyledListGroupItem,{style:{border:`5px solid #000000`,backgroundColor:`#000000`,paddingTop:`2%`,paddingBottom:`2%`},children:(0,d.jsx)(n.StyledSearchNotSelected,{className:`ricercaItemsButton`,size:n.grandezzaIcona,onClick:e})}):(0,d.jsx)(n.StyledColOperazioni,{children:(0,d.jsx)(`div`,{style:{width:`100%`},children:(0,d.jsx)(n.StyledSearchNotSelected,{className:`center ricercaItemsButton`,size:n.grandezzaIcona,onClick:e})})})}function E({eseguiRicerca:e,vistaItem:t,StyledComponents:n}){return t===`card`||t===`form`?(0,d.jsx)(n.StyledListGroupItem,{style:{border:`5px solid #000000`,backgroundColor:`#000000`,paddingTop:`2%`,paddingBottom:`2%`},children:(0,d.jsx)(n.StyledSearchNotSelected,{className:`ricercaEntrateUsciteButton`,size:n.grandezzaIcona,onClick:e})}):(0,d.jsx)(n.StyledColOperazioni,{children:(0,d.jsx)(`div`,{style:{width:`100%`},children:(0,d.jsx)(n.StyledSearchNotSelected,{className:`ricercaEntrateUsciteButton`,size:n.grandezzaIcona,onClick:e})})})}function D({eseguiLogin:e,vistaItem:t,StyledComponents:n}){return t===`card`||t===`form`?(0,d.jsx)(n.StyledListGroupItem,{style:{border:`5px solid #000000`,backgroundColor:`#000000`,paddingTop:`3%`,paddingBottom:`3%`},children:(0,d.jsx)(n.StyledLoginNotSelected,{className:`loginButton`,size:n.grandezzaIcona,onClick:e})}):(0,d.jsx)(n.StyledColOperazioni,{children:(0,d.jsx)(n.StyledLoginNotSelected,{className:`center loginButton`,size:n.grandezzaIcona,onClick:e})})}function O({eseguiModificaProfilo:e,vistaItem:t,StyledComponents:n}){let r=t===`form`?n.StyledPencilNotSelected:n.StyledPencilNotSelected2;return t===`card`||t===`form`?(0,d.jsx)(n.StyledListGroupItem,{style:{border:`5px solid #000000`,backgroundColor:`#000000`,paddingTop:`2%`,paddingBottom:`2%`},children:(0,d.jsx)(r,{className:`modificaProfiloButton`,size:n.grandezzaIcona,onClick:e})}):(0,d.jsx)(n.StyledColOperazioni,{children:(0,d.jsx)(n.StyledPencilNotSelectedModificaProfilo,{className:`center modificaProfiloButton`,size:n.grandezzaIcona,onClick:e})})}function k({ottieniFileRangePDF:e,ottieniFileRangeExcel:t,eliminaItemsRange:n,vistaItem:r,StyledComponents:a}){return r===`card`||r===`form`?(0,d.jsxs)(a.StyledListGroupItem,{style:{border:`5px solid #000000`,backgroundColor:`#000000`,paddingTop:`3%`},children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(a.StyledFileIconNotSelected,{icon:u.faFilePdf,size:`2xl`,style:{marginRight:`50%`}}),(0,d.jsx)(a.StyledFileIconNotSelected,{icon:u.faFileExcel,size:`2xl`})]}),(0,d.jsx)(`br`,{}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(a.StyledDownloadNotSelected,{size:a.grandezzaIcona,style:{marginRight:`50%`},onClick:e}),(0,d.jsx)(a.StyledDownloadNotSelected,{size:a.grandezzaIcona,onClick:t})]}),(0,d.jsx)(`br`,{}),(0,d.jsx)(`div`,{children:(0,d.jsx)(a.StyledTrashNotSelected,{size:a.grandezzaIcona,onClick:n})}),(0,d.jsx)(`br`,{})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.StyledColOperazioni,{children:(0,d.jsxs)(`div`,{style:{width:`100%`},children:[(0,d.jsx)(a.StyledFileIconNotSelected,{icon:u.faFilePdf,className:`left`,style:{marginRight:`50%`},size:`2xl`}),(0,d.jsx)(a.StyledDownloadNotSelected,{size:a.grandezzaIcona,className:`rigth`,onClick:e})]})}),(0,d.jsx)(a.StyledColOperazioni,{children:(0,d.jsxs)(`div`,{style:{width:`100%`},children:[(0,d.jsx)(a.StyledFileIconNotSelected,{icon:u.faFileExcel,className:`left`,style:{marginRight:`50%`},size:`2xl`}),(0,d.jsx)(a.StyledDownloadNotSelected,{size:a.grandezzaIcona,className:`rigth`,onClick:t})]})}),(0,d.jsx)(a.StyledColOperazioni,{children:(0,d.jsx)(`div`,{style:{width:`100%`},children:(0,d.jsx)(a.StyledTrashNotSelected2,{size:a.grandezzaIcona,className:`center`,onClick:n})})})]})}function A({operazioneModifica:e,operazioneElimina:t,item:n,vistaItem:r,StyledComponents:a}){let o=He(n.tipo_selezione,a),s=Ve(n.tipo_selezione,a);return r===`card`||r===`form`?(0,d.jsxs)(a.StyledListGroupItem,{style:{border:`5px solid #000000`,backgroundColor:`#000000`},children:[e&&(0,d.jsx)(s,{className:`modificaItemButton`,size:a.grandezzaIcona,onClick:()=>e(n),style:{marginRight:`50%`}}),t&&(0,d.jsx)(o,{className:`eliminaItemButton`,size:a.grandezzaIcona,onClick:()=>t(n)})]}):(0,d.jsx)(a.StyledColOperazioni,{children:(0,d.jsxs)(`div`,{style:{width:`100%`},children:[e&&(0,d.jsx)(s,{className:`left modificaItemButton`,size:a.grandezzaIcona,onClick:()=>e(n),style:{marginRight:`50%`}}),t&&(0,d.jsx)(o,{className:`rigth eliminaItemButton`,size:a.grandezzaIcona,onClick:()=>t(n)})]})})}var Ue=({selectedIdsModifica:e,selectedIdsEliminazione:t,handleEdit:n,handleDelete:r})=>(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(`div`,{className:`contenitore-2`,children:(0,d.jsxs)(o.default,{children:[e.length>0&&(0,d.jsx)(s.default,{children:(0,d.jsx)(`button`,{className:`bottone-blu-non-selezionato`,onClick:n,children:`Modifica`})}),t.length>0&&(0,d.jsx)(s.default,{children:(0,d.jsx)(`button`,{className:`bottone-rosso-non-selezionato`,onClick:r,children:`Elimina`})})]})})});function We({elementi:e,tipoForm:t,setTipoForm:n,StyledComponents:r}){let a=e=>{n(e)};return(0,d.jsxs)(r.StyledListGroupItem,{style:{border:`5px solid #000000`,backgroundColor:`#000000`,paddingTop:`20px`,paddingBottom:`20px`},children:[e.includes(`insert`)&&t===`insert`&&(0,d.jsxs)(d.Fragment,{children:[e.includes(`search`)&&(0,d.jsx)(r.StyledSearchNotSelected2,{size:r.grandezzaIcona,style:{marginRight:`50px`},onClick:()=>a(`search`)}),(0,d.jsx)(r.StyledSaveSelected2,{size:r.grandezzaIcona,style:{marginRight:`50px`},onClick:()=>a(`insert`)}),e.includes(`file`)&&(0,d.jsx)(r.StyledFileIconNotSelected2,{icon:u.faFile,size:`2xl`,onClick:()=>a(`file`)})]}),e.includes(`search`)&&t===`search`&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.StyledSearchSelected2,{size:r.grandezzaIcona,style:{marginRight:`50px`},onClick:()=>a(`search`)}),e.includes(`insert`)&&(0,d.jsx)(r.StyledSaveNotSelected2,{size:r.grandezzaIcona,style:{marginRight:`50px`},onClick:()=>a(`insert`)}),e.includes(`file`)&&(0,d.jsx)(r.StyledFileIconNotSelected2,{icon:u.faFile,size:`2xl`,onClick:()=>a(`file`)})]}),e.includes(`file`)&&t===`file`&&(0,d.jsxs)(d.Fragment,{children:[e.includes(`search`)&&(0,d.jsx)(r.StyledSearchNotSelected2,{size:r.grandezzaIcona,style:{marginRight:`50px`},onClick:()=>a(`search`)}),e.includes(`insert`)&&(0,d.jsx)(r.StyledSaveNotSelected2,{size:r.grandezzaIcona,style:{marginRight:`50px`},onClick:()=>a(`insert`)}),(0,d.jsx)(r.StyledFileIconNotSelected2,{icon:u.faFile,size:`2xl`,onClick:()=>a(`file`)})]})]})}function Ge({elementi:e,tipoForm:t,setTipoForm:n,StyledComponents:r}){return(0,d.jsx)(r.StyledForm,{children:(0,d.jsx)(We,{elementi:e,tipoForm:t,setTipoForm:n,StyledComponents:r})})}function Ke({elementi:e,tipoForm:t,setTipoForm:n,StyledComponents:r}){return(0,d.jsx)(r.StyledForm,{children:(0,d.jsx)(We,{elementi:e,tipoForm:t,setTipoForm:n,StyledComponents:r})})}function j({campi:e,indici:n,eseguiSalvataggio:r}){return(0,d.jsxs)(x.StyledForm,{children:[(0,d.jsx)(x.StyledHeader,{children:e.header}),(0,d.jsxs)(x.SlideContainer,{style:{maxHeight:`2000px`,overflowY:`auto`},children:[n.map(n=>{let r=e.type[n]?S(1,!0,x):C(1,!0,x);return(0,d.jsxs)(t.Fragment,{children:[(0,d.jsx)(x.StyledLabel,{htmlFor:e.name[n],children:e.label[n]}),e.name[n]===`prezzo`?(0,d.jsx)(x.StyledRow,{children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{style:[`prezzo`,`totale`].includes(e.name[n])?{marginLeft:`-10%`,marginRight:0,minWidth:`105%`}:null,rows:1,name:e.name[n],id:e.id[n],type:e.type[n],step:e.step[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur}),[`prezzo`,`totale`].includes(e.name[n])&&(0,d.jsx)(x.StyledEuroNotSelected,{style:{maxWidth:`5%`,marginTop:`13px`},size:x.grandezzaIcona,onClick:null}),e.options[n]]})}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{style:[`prezzo`,`totale`].includes(e.name[n])?{marginLeft:`-10%`,marginRight:0,minWidth:`105%`}:null,rows:1,name:e.name[n],id:e.id[n],type:e.type[n],step:e.step[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur}),[`prezzo`,`totale`].includes(e.name[n])&&(0,d.jsx)(x.StyledEuroNotSelected,{style:{maxWidth:`5%`,marginTop:`13px`},size:x.grandezzaIcona,onClick:null}),e.options[n]]}),e.errore[n]!==``&&(0,d.jsx)(x.StyledSpanErrore,{children:e.errore[n]})]},n)}),(0,d.jsx)(`br`,{}),` `,(0,d.jsx)(`br`,{})]}),(0,d.jsx)(w,{eseguiSalvataggio:r,vistaItem:`form`,StyledComponents:x})]})}function M({campi:e,indici:n,handleSearch:r}){let[a,o]=(0,t.useState)(!0),[s,c]=(0,t.useState)(!0);return S(1,!0,x),C(1,!0,x),(0,d.jsxs)(x.StyledForm,{children:[(0,d.jsx)(x.StyledHeader,{children:e.header}),(0,d.jsxs)(x.SlideContainer,{style:{maxHeight:`2000px`,overflowY:`auto`},children:[n.map(n=>{let r=e.type[n]?S(1,!0,x):C(1,!0,x);return(0,d.jsxs)(t.Fragment,{children:[(0,d.jsx)(x.StyledLabel,{htmlFor:e.name[n],children:e.label[n]}),(0,d.jsx)(r,{rows:1,name:e.name[n],id:e.id[n],type:e.type[n],step:e.step[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur},n)]},n)}),(0,d.jsx)(`br`,{}),` `,(0,d.jsx)(`br`,{})]}),(0,d.jsx)(T,{setIsVisible:o,arrowUp:s,setArrowUp:c,handleSearch:r,vistaItem:`form`,StyledComponents:x})]})}function qe({campi:e,indici:n,eseguiLogin:r}){let[a,o]=(0,t.useState)(`password`),s=e=>{e.preventDefault(),o(a===`text`?`password`:`text`)};return(0,d.jsxs)(x.StyledForm,{children:[(0,d.jsx)(x.StyledHeader,{children:e.header}),(0,d.jsxs)(x.SlideContainer,{style:{maxHeight:`2000px`},children:[n.map(n=>{let r=e.type[n]?S(1,!0,x):C(1,!0,x),o=a===`password`?x.StyledEyeClosedNotSelected:x.StyledEyeOpenNotSelected;return(0,d.jsxs)(t.Fragment,{children:[(0,d.jsx)(x.StyledLabel,{htmlFor:e.name[n],children:e.label[n]}),(0,d.jsxs)(x.StyledRow,{children:[(0,d.jsx)(r,{style:e.name[n]===`password`?{marginLeft:`-10%`,marginRight:0,minWidth:`105%`}:{marginLeft:`-10%`,marginRight:0,minWidth:`115%`,width:`100%`},rows:1,name:e.name[n],id:e.id[n],type:e.name[n]===`password`?a:e.type[n],step:e.step[n],min:e.min[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur}),e.name[n]===`password`&&(0,d.jsx)(o,{style:{maxWidth:`5%`,marginTop:`13px`},size:x.grandezzaIcona,onClick:s})]}),e.options[n],e.errore[n]&&(0,d.jsx)(x.StyledSpanErrore,{children:e.errore[n]})]},n)}),(0,d.jsx)(`br`,{}),` `,(0,d.jsx)(`br`,{})]}),(0,d.jsx)(D,{eseguiLogin:r,vistaItem:`form`,StyledComponents:x})]})}function Je({campi:e,indici:n,eseguiModificaProfilo:r}){let[a,o]=(0,t.useState)(`password`),[s,c]=(0,t.useState)(`password`),[l,u]=(0,t.useState)(`password`),f=(e,t)=>{e.preventDefault(),t===`password_attuale`?o(a===`text`?`password`:`text`):t===`nuova_password`?c(s===`text`?`password`:`text`):t===`conferma_nuova_password`&&u(l===`text`?`password`:`text`)};return(0,d.jsxs)(x.StyledForm,{children:[(0,d.jsx)(x.StyledHeader,{children:e.header}),(0,d.jsxs)(x.SlideContainer,{style:{maxHeight:`2000px`},children:[n.map(n=>{let r=e.type[n]?S(1,!0,x):C(1,!0,x),o=e.name[n]===`password_attuale`&&a===`password`||e.name[n]===`nuova_password`&&s===`password`||e.name[n]===`conferma_nuova_password`&&l===`password`?x.StyledEyeClosedNotSelected:x.StyledEyeOpenNotSelected;return(0,d.jsxs)(t.Fragment,{children:[(0,d.jsx)(x.StyledLabel,{htmlFor:e.name[n],children:e.label[n]}),(0,d.jsxs)(x.StyledRow,{children:[(0,d.jsx)(r,{style:e.name[n].includes(`password`)?{marginLeft:`-10%`,marginRight:0,minWidth:`105%`}:{marginLeft:`-10%`,marginRight:0,minWidth:`115%`,width:`100%`},rows:1,name:e.name[n],id:e.id[n],type:e.name[n].includes(`password`)?e.name[n]===`password_attuale`?a:e.name[n]===`nuova_password`?s:l:e.type[n],step:e.step[n],min:e.min[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur}),e.name[n].includes(`password`)&&(0,d.jsx)(o,{style:{maxWidth:`5%`,marginTop:`13px`},size:x.grandezzaIcona,onClick:t=>f(t,e.name[n])})]}),e.options[n],e.errore[n]&&(0,d.jsx)(x.StyledSpanErrore,{children:e.errore[n]})]},n)}),(0,d.jsx)(`br`,{}),` `,(0,d.jsx)(`br`,{})]}),(0,d.jsx)(O,{eseguiModificaProfilo:r,vistaItem:`form`,StyledComponents:x})]})}function N({campi:e,indici:n,ottieniFileRangePDF:r,ottieniFileRangeExcel:a,eliminaItemsRange:o}){let[s,c]=(0,t.useState)(!0),[l,u]=(0,t.useState)(!0),f=s?`2000px`:`0px`;return S(1,!0,x),C(1,!0,x),(0,d.jsxs)(x.StyledForm,{children:[(0,d.jsx)(x.StyledHeader,{children:e.header}),(0,d.jsxs)(x.SlideContainer,{style:{maxHeight:`${f}`},children:[n.map(n=>{let r=e.type[n]?S(1,!0,x):C(1,!0,x);return(0,d.jsxs)(t.Fragment,{children:[(0,d.jsx)(x.StyledLabel,{htmlFor:e.name[n],children:e.label[n]}),(0,d.jsx)(r,{rows:1,name:e.name[n],id:e.id[n],type:e.type[n],step:e.step[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur},n)]},n)}),(0,d.jsx)(`br`,{}),` `,(0,d.jsx)(`br`,{})]}),(0,d.jsx)(k,{ottieniFileRangePDF:r,ottieniFileRangeExcel:a,eliminaItemsRange:o,vistaItem:`form`,StyledComponents:x})]})}function Ye({datiRicerca:e,setDatiRicerca:t,handleInputChange:n,eseguiRicerca:r,lingua:a}){return(0,d.jsxs)(x.StyledForm,{children:[(0,d.jsx)(x.StyledHeader,{children:a===`italiano`?`Ricerca entrate e uscite`:`Searching for inputs and outputs`}),(0,d.jsxs)(x.SlideContainer,{style:{maxHeight:`2000px`},children:[(0,d.jsx)(x.StyledLabel,{htmlFor:`primo_anno`,children:a===`italiano`?`Primo anno`:`First year`}),(0,d.jsx)(x.StyledInputModifica,{rows:1,name:`primo_anno`,id:`primo_anno`,type:`number`,step:1,value:e.primo_anno,placeholder:a===`italiano`?`Primo anno`:`First year`,onChange:e=>n(e,t)}),(0,d.jsx)(x.StyledLabel,{htmlFor:`ultimo_anno`,children:a===`italiano`?`Ultimo anno`:`Last year`}),(0,d.jsxs)(x.StyledSelectModifica,{name:`ultimo_anno`,id:`ultimo_anno`,value:e.ultimo_anno,onChange:e=>n(e,t),children:[(0,d.jsx)(`option`,{value:parseInt(e.primo_anno)+1,children:parseInt(e.primo_anno)+1}),(0,d.jsx)(`option`,{value:parseInt(e.primo_anno)+2,children:parseInt(e.primo_anno)+2}),(0,d.jsx)(`option`,{value:parseInt(e.primo_anno)+3,children:parseInt(e.primo_anno)+3}),(0,d.jsx)(`option`,{value:parseInt(e.primo_anno)+4,children:parseInt(e.primo_anno)+4}),(0,d.jsx)(`option`,{value:parseInt(e.primo_anno)+5,children:parseInt(e.primo_anno)+5})]}),(0,d.jsx)(`br`,{}),` `,(0,d.jsx)(`br`,{})]}),(0,d.jsx)(E,{eseguiRicerca:e=>r(e),vistaItem:`form`,StyledComponents:x})]})}var Xe=(0,n.default)(f.Row)`
  display: flex;
  align-items: stretch; 
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 3%;
  padding-right: 3%;
`,P=(0,n.default)(f.Col)`
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
`;(0,n.default)(P)`
  max-height: ${e=>e.isVisible?`1000px`:`0`}; 
  overflow: hidden;
  transition: max-height 1s ease-out;
`,(0,n.default)(P)`
  border: 5px solid #000000;
  background-color: #000000;
`;var Ze=(0,n.default)(P)`
  border: 5px solid #000000;
  background-color: #000000;
  min-width: 230px;
  max-width: 230px;
  min-height: 80px;
  max-height: 80px;
`;(0,n.default)(P)`
  border: 5px solid #000000;
  background-color: #0050EF;
`,(0,n.default)(P)`
  border: 5px solid #000000;
  background-color: #500000;
`,n.default.div`
  display: flex;
  flex-direction: row-reverse;
`;var F=`
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
`,I=n.default.textarea`
  ${F}
`,Qe=(0,n.default)(I)`
  background-color: #111111;
`,$e=(0,n.default)(I)`
  background-color: #0050EF;
`,et=(0,n.default)(I)`
  background-color: #500000;
`,L=n.default.input`
  ${F}
`,tt=(0,n.default)(L)`
  background-color: #111111;
`,nt=(0,n.default)(L)`
  background-color: #0050EF;
`,rt=(0,n.default)(L)`
  background-color: #500000;
`,it=n.default.button`
  ${F}
`,R=`
  margin-left: 10%;
  margin-right: 10%;
  border: 5px solid #000000;
  background-color: #000000;
  cursor: pointer;  
  transition: 0.5s all ease-out;
`;(0,n.default)(it)`
  ${R}
  &:hover {
    background-color: #0050EF;
    color: #FFFFFF;
  }
`,(0,n.default)(it)`
  ${R}
  &:hover {
    background-color: #500000;
    color: #FFFFFF;
  }
`;var z=`
  color: #FFFFFF;
  cursor: pointer;
`,at=(0,n.default)(c.Save)`
  ${z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,ot=(0,n.default)(c.EyeClosed)`
  ${z}
  transition: 0.5s all ease-out;
`,st=(0,n.default)(c.Eye)`
  ${z}
  transition: 0.5s all ease-out;
  color: #0050EF;
`,ct=(0,n.default)(c.Search)`
  ${z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,lt=(0,n.default)(c.Euro)`
  color: #FFFFFF;
  transition: 0.5s all ease-out;
`,ut=(0,n.default)(c.ChevronLeft)`
  ${z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,dt=(0,n.default)(c.ChevronRight)`
  ${z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,ft=(0,n.default)(c.LogIn)`
  ${z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,pt=(0,n.default)(c.Pencil)`
  ${z}
`,mt=(0,n.default)(c.Pencil)`
  ${z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,ht=(0,n.default)(c.Pencil)`
  color: #0050EF;
  cursor: pointer;
`,gt=(0,n.default)(c.Trash2)`
  ${z}
`,_t=(0,n.default)(c.Trash2)`
  color: #500000;
  cursor: pointer;
`,vt=(0,n.default)(l.FontAwesomeIcon)`
  color: #FFFFFF;
`,yt=(0,n.default)(l.FontAwesomeIcon)`
  ${z}
  color: #0050EF;
`,bt=(0,n.default)(c.Download)`
  ${z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`;(0,n.default)(c.X)`
  ${z}
  transition: 0.5s all ease-out;
  &:hover {
    color: #500000;
  }
`;var xt=(0,n.default)(c.Trash2)`
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
`,St=(0,n.default)(B)`
  background-color: #111111;
`,Ct=(0,n.default)(B)`
  background-color: #0050EF;
`,wt=(0,n.default)(B)`
  background-color: #500000;
`;n.default.option`
  background-color: #0050EF;
  &:hover {
    background-color: #0050EF;
  }
`;var V={StyledPencilNotSelected:pt,StyledPencilSelected:ht,grandezzaIcona:50,StyledTrashNotSelected:gt,StyledTrashSelected:_t,StyledColOperazioni:Ze,StyledSaveNotSelected:at,StyledSearchNotSelected:ct,StyledArrowLeftNotSelected:ut,StyledArrowRightNotSelected:dt,StyledFileIconNotSelected:vt,StyledDownloadNotSelected:bt,StyledTrashNotSelected2:xt,StyledLoginNotSelected:ft,StyledPencilNotSelectedModificaProfilo:mt,StyledInputBlock:tt,StyledInputModifica:nt,StyledInputElimina:rt,StyledTextAreaBlock:Qe,StyledTextAreaModifica:$e,StyledTextAreaElimina:et,StyledRow:Xe,StyledCol:P,StyledSpanErrore:n.default.span`
  color: #FF0000;
  border-radius: 40px;
  padding: 10px;
`,StyledSelectBlock:St,StyledSelectModifica:Ct,StyledSelectElimina:wt,StyledEyeClosedNotSelected:ot,StyledEyeOpenNotSelected:st,StyledEuroNotSelected:lt,StyledFileIconSelected2:yt},H=(e,t,n)=>{e.preventDefault();let{name:r,value:a,id:o}=e.target,s=!0;[`note_cliente`,`note_servizio`,`note_lavoro`,`note_spesa`].includes(o)?a.length>200&&(s=!1):[`descrizione_spesa`].includes(o)?a.length>1e3&&(s=!1):[`nome_servizio`].includes(o)?a.length>100&&(s=!1):[`prezzo_servizio`,`totale_spesa`].includes(o)?(!(!isNaN(a.substr(0,a))&&Number(a)===parseFloat(a))||a<0)&&(s=!1):[`email_cliente`].includes(o)?a.length>254&&(s=!1):[`contatto_cliente`].includes(o)&&(a===``?s=!0:(!/^\d+$/.test(a)||!(a.startsWith(`0`)&&a.length<=11||a.startsWith(`3`)&&a.length<=10))&&(s=!1)),s===!0&&n(e=>({...e,[t]:a}))},U=e=>{[`giorno_spesa`,`giorno_lavoro`].includes(e.target.id)?e.target.type=`date`:[`prezzo_servizio`,`totale_spesa`].includes(e.target.id)&&(e.target.value=e.target.value.substr(0,e.target.value.length-2))};function W({campi:e,indici:n,eseguiSalvataggio:r}){S(1,!0,V),C(1,!0,V);let a=(e,t)=>{e.preventDefault(),alert(t)};return(0,d.jsxs)(V.StyledRow,{children:[(0,d.jsx)(w,{eseguiSalvataggio:r,vistaItem:`row`,StyledComponents:V}),n.map(n=>{let r=e.type[n]?S(1,!0,V):C(1,!0,V);return(0,d.jsx)(t.Fragment,{children:(0,d.jsx)(V.StyledCol,{children:(0,d.jsxs)(`div`,{style:{width:`100%`},children:[(0,d.jsxs)(V.StyledRow,{children:[(0,d.jsx)(r,{rows:1,style:[`prezzo`,`totale`].includes(e.name[n])?{maxWidth:`90%`}:null,name:e.name[n],id:e.id[n],type:e.type[n],step:e.step[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur,onContextMenu:t=>a(t,e.placeholder[n])}),[`prezzo`,`totale`].includes(e.name[n])&&(0,d.jsx)(V.StyledEuroNotSelected,{style:{maxWidth:`10%`,marginLeft:`-6px`},size:V.grandezzaIcona,onClick:null}),e.options[n]]}),e.errore[n]!==``&&(0,d.jsx)(V.StyledSpanErrore,{children:e.errore[n]})]})})},n)})]})}function G({campi:e,indici:n,handleSearch:r}){let[a,o]=(0,t.useState)([!0,!0,!0,!0,!0,!0,!0,!0]),[s,c]=(0,t.useState)(!0);S(1,!0,V),C(1,!0,V);let l=(e,t)=>{e.preventDefault(),alert(t)};return(0,d.jsxs)(V.StyledRow,{children:[(0,d.jsx)(T,{visibilita:a,setVisibilita:o,arrowUp:s,setArrowUp:c,handleSearch:r,vistaItem:`row`,StyledComponents:V}),n.map(n=>{let r=e.type[n]?S(1,!0,V):C(1,!0,V);return(0,d.jsx)(t.Fragment,{children:(0,d.jsx)(V.StyledCol,{children:(0,d.jsx)(`div`,{style:{width:`100%`},children:(0,d.jsx)(V.StyledRow,{children:a[n]&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{style:[`prezzo_min`,`prezzo_max`,`totale_min`,`totale_max`].includes(e.name[n])?{maxWidth:`90%`}:null,rows:1,name:e.name[n],id:e.id[n],type:e.type[n],step:e.step[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur,onContextMenu:t=>l(t,e.placeholder[n])}),[`prezzo_min`,`prezzo_max`,`totale_min`,`totale_max`].includes(e.name[n])&&(0,d.jsx)(V.StyledEuroNotSelected,{style:{maxWidth:`20%`,marginLeft:`-6px`},size:V.grandezzaIcona,onClick:null})]})})})})},n)})]})}function K({item:e,campi:n,indici:r,operazioneModifica:a,operazioneElimina:o,handleBlurItem:s}){let c=S(n.tipoSelezione,!1,V),[l,u]=(0,t.useState)(()=>r.reduce((e,t)=>({...e,[t]:n.value[t]}),{})),f=(e,t)=>{e.preventDefault(),alert(t)};return(0,d.jsxs)(V.StyledRow,{children:[(a||o)&&(0,d.jsx)(A,{operazioneModifica:a,operazioneElimina:o,item:e,vistaItem:`row`,StyledComponents:V}),(0,d.jsx)(V.StyledCol,{children:(0,d.jsx)(`div`,{style:{width:`100%`},children:(0,d.jsx)(V.StyledRow,{children:(0,d.jsx)(c,{rows:1,name:`header`,value:n.header,placeholder:n.header,readOnly:!0})})})}),r.map(r=>{let a=n.type[r]?S(n.tipoSelezione,n.valoreModificabile[r],V):C(n.tipoSelezione,n.valoreModificabile[r],V);return(0,d.jsx)(t.Fragment,{children:(0,d.jsx)(V.StyledCol,{children:(0,d.jsxs)(`div`,{style:{width:`100%`},children:[(0,d.jsxs)(V.StyledRow,{children:[(0,d.jsx)(a,{style:[`prezzo`,`totale`].includes(n.name[r])?{maxWidth:`80%`}:null,rows:1,name:n.name[r],id:n.id[r],type:n.type[r],step:n.step[r],value:l[r],placeholder:n.placeholder[r],onChange:e=>H(e,r,u),onBlur:t=>s(t,e),onClick:e=>U(e),readOnly:e.tipo_selezione!==1,onContextMenu:e=>f(e,n.placeholder[r])}),[`prezzo`,`totale`].includes(n.name[r])&&(0,d.jsx)(V.StyledEuroNotSelected,{style:{maxWidth:`20%`,marginLeft:`-6px`},size:V.grandezzaIcona}),n.options[r]]}),n.errore[r]&&(0,d.jsx)(V.StyledSpanErrore,{children:n.errore[r]})]})})},r)})]})}function q({campi:e,indici:n,ottieniFileRangePDF:r,ottieniFileRangeExcel:a,eliminaItemsRange:o}){let s=(e,t)=>{e.preventDefault(),alert(t)};return(0,d.jsxs)(V.StyledRow,{children:[(0,d.jsx)(k,{ottieniFileRangePDF:r,ottieniFileRangeExcel:a,eliminaItemsRange:o,vistaItem:`row`,StyledComponents:V}),n.map(n=>{let r=e.type[n]?S(1,!0,V):C(1,!0,V);return(0,d.jsx)(t.Fragment,{children:(0,d.jsx)(V.StyledCol,{children:(0,d.jsx)(`div`,{style:{width:`100%`},children:(0,d.jsx)(V.StyledRow,{children:(0,d.jsx)(r,{rows:1,name:e.name[n],id:e.id[n],type:e.type[n],step:e.step[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur,onContextMenu:t=>s(t,e.placeholder[n])})})})})},n)})]})}function Tt({campi:e,indici:n,eseguiLogin:r}){let[a,o]=(0,t.useState)(`password`),s=e=>{e.preventDefault(),o(a===`text`?`password`:`text`)},c=(e,t)=>{e.preventDefault(),alert(t)};return(0,d.jsxs)(V.StyledRow,{children:[(0,d.jsx)(D,{eseguiLogin:r,vistaItem:`row`,StyledComponents:V}),n.map(n=>{let r=e.type[n]?S(1,!0,V):C(1,!0,V),o=a===`password`?V.StyledEyeClosedNotSelected:V.StyledEyeOpenNotSelected;return(0,d.jsx)(t.Fragment,{children:(0,d.jsx)(V.StyledCol,{children:(0,d.jsxs)(`div`,{style:{width:`100%`},children:[(0,d.jsxs)(V.StyledRow,{children:[(0,d.jsx)(r,{style:e.name[n]===`password`?{maxWidth:`80%`}:null,rows:1,name:e.name[n],id:e.id[n],type:e.name[n]===`password`?a:e.type[n],step:e.step[n],min:e.min[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur,onContextMenu:t=>c(t,e.placeholder[n])}),e.name[n]===`password`&&(0,d.jsx)(o,{style:{maxWidth:`20%`,marginLeft:`-6px`},size:V.grandezzaIcona,onClick:s})]}),e.options[n],e.errore[n]&&(0,d.jsx)(V.StyledSpanErrore,{children:e.errore[n]})]})})},n)})]})}function Et({campi:e,indici:n,eseguiModificaProfilo:r}){let[a,o]=(0,t.useState)(`password`),[s,c]=(0,t.useState)(`password`),[l,u]=(0,t.useState)(`password`),f=(e,t)=>{e.preventDefault(),t===`password_attuale`?o(a===`text`?`password`:`text`):t===`nuova_password`?c(s===`text`?`password`:`text`):t===`conferma_nuova_password`&&u(l===`text`?`password`:`text`)};return(0,d.jsxs)(V.StyledRow,{children:[(0,d.jsx)(O,{eseguiModificaProfilo:r,vistaItem:`row`,StyledComponents:V}),n.map(n=>{let r=e.type[n]?S(1,!0,V):C(1,!0,V),o=e.name[n]===`password_attuale`&&a===`password`||e.name[n]===`nuova_password`&&s===`password`||e.name[n]===`conferma_nuova_password`&&l===`password`?V.StyledEyeClosedNotSelected:V.StyledEyeOpenNotSelected;return(0,d.jsx)(t.Fragment,{children:(0,d.jsx)(V.StyledCol,{children:(0,d.jsxs)(`div`,{style:{width:`100%`},children:[(0,d.jsxs)(V.StyledRow,{children:[(0,d.jsx)(r,{style:e.name[n].includes(`password`)?{maxWidth:`80%`}:null,rows:1,name:e.name[n],id:e.id[n],type:e.name[n].includes(`password`)?e.name[n]===`password_attuale`?a:e.name[n]===`nuova_password`?s:l:e.type[n],step:e.step[n],min:e.min[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur,onContextMenu:t=>handleRightClick(t,e.placeholder[n])}),e.name[n].includes(`password`)&&(0,d.jsx)(o,{style:{maxWidth:`20%`,marginLeft:`-6px`},size:V.grandezzaIcona,onClick:t=>f(t,e.name[n])})]}),e.options[n],e.errore[n]&&(0,d.jsx)(V.StyledSpanErrore,{children:e.errore[n]})]})})},n)})]})}function Dt({datiRicerca:e,setDatiRicerca:t,handleInputChange:n,eseguiRicerca:r,lingua:a}){return(0,d.jsxs)(V.StyledRow,{children:[(0,d.jsx)(E,{eseguiRicerca:e=>r(e),vistaItem:`row`,StyledComponents:V}),(0,d.jsx)(V.StyledCol,{children:(0,d.jsx)(`div`,{style:{width:`100%`},children:(0,d.jsx)(V.StyledRow,{children:(0,d.jsx)(V.StyledInputBlock,{rows:1,name:`header`,value:a===`italiano`?`Ricerca entrate e uscite`:`Searching for inputs and outputs`,placeholder:a===`italiano`?`Ricerca entrate e uscite`:`Searching for inputs and outputs`,readOnly:!0})})})}),(0,d.jsx)(V.StyledCol,{children:(0,d.jsx)(`div`,{style:{width:`100%`},children:(0,d.jsx)(V.StyledInputModifica,{rows:1,name:`primo_anno`,id:`primo_anno`,type:`number`,step:1,value:e.primo_anno,placeholder:`Primo anno`,onChange:e=>n(e,t),onContextMenu:e=>handleRightClick(e,`Primo anno`)})})}),(0,d.jsx)(V.StyledCol,{children:(0,d.jsx)(`div`,{style:{width:`100%`},children:(0,d.jsxs)(V.StyledSelectModifica,{name:`ultimo_anno`,id:`ultimo_anno`,onContextMenu:e=>handleRightClick(e,`Ultimo anno`),value:e.ultimo_anno,onChange:e=>n(e,t),children:[(0,d.jsx)(`option`,{value:parseInt(e.primo_anno)+1,children:parseInt(e.primo_anno)+1}),(0,d.jsx)(`option`,{value:parseInt(e.primo_anno)+2,children:parseInt(e.primo_anno)+2}),(0,d.jsx)(`option`,{value:parseInt(e.primo_anno)+3,children:parseInt(e.primo_anno)+3}),(0,d.jsx)(`option`,{value:parseInt(e.primo_anno)+4,children:parseInt(e.primo_anno)+4}),(0,d.jsx)(`option`,{value:parseInt(e.primo_anno)+5,children:parseInt(e.primo_anno)+5})]})})})]})}var Ot=(0,n.default)(r.default)`
  width: 18rem;
  background-color: transparent;
  overflow: hidden;
  border-radius: 40px;
  color: white;
  text-align: center;
  padding: 0;
  border: transparent;
`,kt=(0,n.default)(f.Row)`
  display: flex;
  flex-wrap: wrap;
`,At=(0,n.default)(f.Col)`
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
`,jt=(0,n.default)(r.default.Header)`
  color: #ffffff;
  background-color: #000000;
  border: 5px solid #000000;
  min-height: 70px;
`,Mt=(0,n.default)(a.default.Item)`
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  min-height: 70px;
`,Nt=n.default.div`
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
`,Pt=(0,n.default)(J)`
  background-color: #111111;
`,Ft=(0,n.default)(J)`
  background-color: #0050EF;
`,It=(0,n.default)(J)`
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
`,Lt=(0,n.default)(Y)`
  background-color: #111111;
`,Rt=(0,n.default)(Y)`
  background-color: #0050EF;
`,zt=(0,n.default)(Y)`
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
`;var Bt=(0,n.default)(c.Save)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,Vt=(0,n.default)(c.EyeClosed)`
  ${X}
  transition: 0.5s all ease-out;
`,Ht=(0,n.default)(c.Eye)`
  ${X}
  transition: 0.5s all ease-out;
  color: #0050EF;
`,Ut=(0,n.default)(c.Search)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,Wt=(0,n.default)(c.Euro)`
  color: #FFFFFF;
  transition: 0.5s all ease-out;
`,Gt=(0,n.default)(c.ChevronUp)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,Kt=(0,n.default)(c.ChevronDown)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,qt=(0,n.default)(c.LogIn)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,Jt=(0,n.default)(c.Pencil)`
  ${X}
`;(0,n.default)(c.Pencil)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`;var Yt=(0,n.default)(c.Pencil)`
  color: #0050EF;
  cursor: pointer;
`,Xt=(0,n.default)(c.Trash2)`
  ${X}
`,Zt=(0,n.default)(c.Trash2)`
  color: #500000;
  cursor: pointer;
`,Qt=(0,n.default)(l.FontAwesomeIcon)`
  color: #FFFFFF;
`,$t=(0,n.default)(l.FontAwesomeIcon)`
  ${X}
  color: #0050EF;
`,en=(0,n.default)(c.Download)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`;(0,n.default)(c.X)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #500000;
  }
`;var tn=(0,n.default)(c.Pencil)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,nn=(0,n.default)(c.Trash2)`
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
`,rn=(0,n.default)(Z)`
  background-color: #111111;
`,an=(0,n.default)(Z)`
  background-color: #0050EF;
`,on=(0,n.default)(Z)`
  background-color: #500000;
`;n.default.option`

  background-color: #0050EF;
  &:hover {
    background-color: #0050EF;
  }
`;var Q={StyledPencilNotSelected:Jt,StyledPencilSelected:Yt,grandezzaIcona:50,StyledTrashNotSelected:Xt,StyledTrashSelected:Zt,StyledListGroupItem:Mt,StyledRow:kt,StyledCol:At,StyledSaveNotSelected:Bt,StyledEyeOpenNotSelected:Ht,StyledEyeClosedNotSelected:Vt,StyledSearchNotSelected:Ut,StyledArrowTopNotSelected:Gt,StyledArrowBottomNotSelected:Kt,StyledFileIconNotSelected:Qt,StyledDownloadNotSelected:en,StyledTrashNotSelected2:nn,StyledLoginNotSelected:qt,StyledPencilNotSelected2:tn,StyledSelectBlock:rn,StyledSelectModifica:an,StyledSelectElimina:on,StyledInputBlock:Lt,StyledInputModifica:Rt,StyledInputElimina:zt,StyledTextAreaBlock:Pt,StyledTextAreaModifica:Ft,StyledTextAreaElimina:It,StyledCard:Ot,StyledCardHeader:jt,SlideContainer:Nt,StyledSpanErrore:n.default.span`
  color: #FFFFFF;
  padding: 10px;
`,StyledEuroNotSelected:Wt,StyledFileIconSelected2:$t};function $(e,t,n){return t===0?`#FFFFFF`:e<0?`#FF0000`:e>0?`#00FF00`:`#FFFFFF`}var sn=e=>e.totale_gennaio+e.totale_febbraio+e.totale_marzo+e.totale_aprile+e.totale_maggio+e.totale_giugno+e.totale_luglio+e.totale_agosto+e.totale_settembre+e.totale_ottobre+e.totale_novembre+e.totale_dicembre,cn=e=>parseInt(e.quantita_gennaio)+parseInt(e.quantita_febbraio)+parseInt(e.quantita_marzo)+parseInt(e.quantita_aprile)+parseInt(e.quantita_maggio)+parseInt(e.quantita_giugno)+parseInt(e.quantita_luglio)+parseInt(e.quantita_agosto)+parseInt(e.quantita_settembre)+parseInt(e.quantita_ottobre)+parseInt(e.quantita_novembre)+parseInt(e.quantita_dicembre);function ln({campi:e,indici:n,eseguiSalvataggio:r}){let a=(e,t)=>{e.preventDefault(),alert(t)};return(0,d.jsx)(`center`,{children:(0,d.jsxs)(Q.StyledCard,{children:[(0,d.jsx)(Q.StyledCardHeader,{children:e.header}),(0,d.jsx)(Q.SlideContainer,{style:{maxHeight:`2000px`},children:n.map(n=>{let r=e.type[n]?S(1,!0,Q):C(1,!0,Q);return(0,d.jsxs)(t.Fragment,{children:[(0,d.jsxs)(Q.StyledRow,{children:[(0,d.jsx)(r,{rows:1,name:e.name[n],id:e.id[n],type:e.type[n],step:e.step[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur,onContextMenu:t=>a(t,e.placeholder[n])}),e.options[n]]}),e.errore[n]!==``&&(0,d.jsx)(Q.StyledSpanErrore,{children:e.errore[n]})]},n)})}),(0,d.jsx)(w,{eseguiSalvataggio:r,vistaItem:`card`,StyledComponents:Q})]})})}function un({campi:e,indici:n,handleSearch:r}){let[a,o]=(0,t.useState)(!0),[s,c]=(0,t.useState)(!0),l=a?`2000px`:`0px`,u=S(1,!0,Q),f=C(1,!0,Q),ee=(e,t)=>{e.preventDefault(),alert(t)};return(0,d.jsxs)(`center`,{children:[(0,d.jsxs)(Q.StyledCard,{children:[(0,d.jsx)(Q.StyledCardHeader,{children:e.header}),(0,d.jsx)(Q.SlideContainer,{style:{maxHeight:`${l}`},children:n.map(n=>{let r=e.type[n]?u:f;return(0,d.jsx)(t.Fragment,{children:(0,d.jsx)(Q.StyledRow,{children:(0,d.jsx)(r,{rows:1,name:e.name[n],id:e.id[n],type:e.type[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur,onContextMenu:t=>ee(t,e.placeholder[n])})})},n)})}),(0,d.jsx)(T,{setIsVisible:o,arrowUp:s,setArrowUp:c,handleSearch:r,vistaItem:`card`,StyledComponents:Q})]}),e.errore[i]&&(0,d.jsx)(Q.StyledSpanErrore,{children:e.errore[i]})]})}function dn({item:e,campi:n,indici:r,operazioneModifica:a,operazioneElimina:o,handleBlurItem:s}){let c=(0,t.useRef)([]),[l,u]=(0,t.useState)(()=>r.reduce((e,t)=>({...e,[t]:n.value[t]}),{})),f=(e,t)=>{e.preventDefault(),alert(t)};return(0,d.jsxs)(Q.StyledCard,{children:[(0,d.jsx)(Q.StyledCardHeader,{children:n.header}),(0,d.jsx)(Q.SlideContainer,{children:r.map(r=>{let a=n.type[r]?S(n.tipoSelezione,n.valoreModificabile[r],Q):C(n.tipoSelezione,n.valoreModificabile[r],Q);return(0,d.jsxs)(t.Fragment,{children:[(0,d.jsxs)(Q.StyledRow,{children:[(0,d.jsx)(a,{ref:e=>c.current[r]=e,rows:1,name:n.name[r],id:n.id[r],type:n.type[r],step:n.step[r],value:l[r],placeholder:n.placeholder[r],onChange:e=>H(e,r,u),onBlur:t=>s(t,e),onClick:e=>U(e),readOnly:e.tipo_selezione!==1,onContextMenu:e=>f(e,n.placeholder[r])}),n.options[r]]}),n.errore[r]&&(0,d.jsx)(Q.StyledSpanErrore,{children:n.errore[r]})]},`input-${r}`)})}),(0,d.jsx)(A,{operazioneModifica:a,operazioneElimina:o,item:e,vistaItem:`card`,StyledComponents:Q})]})}function fn({campi:e,indici:n,ottieniFileRangePDF:r,ottieniFileRangeExcel:a,eliminaItemsRange:o}){let s=(e,t)=>{e.preventDefault(),alert(t)};return(0,d.jsx)(`center`,{children:(0,d.jsxs)(Q.StyledCard,{children:[(0,d.jsx)(Q.StyledCardHeader,{children:e.header}),(0,d.jsx)(Q.SlideContainer,{style:{maxHeight:`2000px`},children:n.map(n=>(0,d.jsx)(t.Fragment,{children:(0,d.jsx)(e.type[n]?S(1,!0,Q):C(1,!0,Q),{rows:1,name:e.name[n],id:e.id[n],type:e.type[n],step:e.step[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur,onContextMenu:t=>s(t,e.placeholder[n])},n)},n))}),(0,d.jsx)(k,{ottieniFileRangePDF:r,ottieniFileRangeExcel:a,eliminaItemsRange:o,vistaItem:`card`,StyledComponents:Q})]})})}function pn({campi:e,indici:n,eseguiLogin:r}){let[a,o]=(0,t.useState)(`password`),s=e=>{e.preventDefault(),o(a===`text`?`password`:`text`)},c=(e,t)=>{e.preventDefault(),alert(t)};return(0,d.jsx)(`center`,{children:(0,d.jsxs)(Q.StyledCard,{children:[(0,d.jsx)(Q.StyledCardHeader,{children:e.header}),(0,d.jsx)(Q.SlideContainer,{style:{maxHeight:`2000px`},children:n.map(n=>{let r=e.type[n]?S(1,!0,Q):C(1,!0,Q),o=a===`password`?Q.StyledEyeClosedNotSelected:Q.StyledEyeOpenNotSelected;return(0,d.jsxs)(t.Fragment,{children:[(0,d.jsxs)(Q.StyledRow,{children:[(0,d.jsx)(r,{style:e.name[n]===`password`?{maxWidth:`80%`}:null,rows:1,name:e.name[n],id:e.id[n],type:e.name[n]===`password`?a:e.type[n],step:e.step[n],min:e.min[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur,onContextMenu:t=>c(t,e.placeholder[n])}),e.name[n]===`password`&&(0,d.jsx)(o,{style:{maxWidth:`20%`,marginLeft:`-6px`,marginTop:`13px`},size:Q.grandezzaIcona,onClick:s})]}),e.options[n],e.errore[n]&&(0,d.jsx)(Q.StyledSpanErrore,{children:e.errore[n]})]},n)})}),(0,d.jsx)(D,{eseguiLogin:r,vistaItem:`card`,StyledComponents:Q})]})})}function mn({campi:e,indici:n,eseguiModificaProfilo:r}){let[a,o]=(0,t.useState)(`password`),[s,c]=(0,t.useState)(`password`),[l,u]=(0,t.useState)(`password`),f=(e,t)=>{e.preventDefault(),t===`password_attuale`?o(a===`text`?`password`:`text`):t===`nuova_password`?c(s===`text`?`password`:`text`):t===`conferma_nuova_password`&&u(l===`text`?`password`:`text`)};return(0,d.jsx)(`center`,{children:(0,d.jsxs)(Q.StyledCard,{children:[(0,d.jsx)(Q.StyledCardHeader,{children:e.header}),(0,d.jsx)(Q.SlideContainer,{style:{maxHeight:`2000px`},children:n.map(n=>{let r=e.type[n]?S(1,!0,Q):C(1,!0,Q),o=e.name[n]===`password_attuale`&&a===`password`||e.name[n]===`nuova_password`&&s===`password`||e.name[n]===`conferma_nuova_password`&&l===`password`?Q.StyledEyeClosedNotSelected:Q.StyledEyeOpenNotSelected;return(0,d.jsxs)(t.Fragment,{children:[(0,d.jsxs)(Q.StyledRow,{children:[(0,d.jsx)(r,{style:e.name[n].includes(`password`)?{maxWidth:`80%`}:null,rows:1,name:e.name[n],id:e.id[n],type:e.name[n].includes(`password`)?e.name[n]===`password_attuale`?a:e.name[n]===`nuova_password`?s:l:e.type[n],step:e.step[n],min:e.min[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur,onContextMenu:t=>handleRightClick(t,e.placeholder[n])}),e.name[n].includes(`password`)&&(0,d.jsx)(o,{style:{maxWidth:`20%`,marginLeft:`-6px`,marginTop:`13px`},size:Q.grandezzaIcona,onClick:t=>f(t,e.name[n])})]}),e.options[n],e.errore[n]&&(0,d.jsx)(Q.StyledSpanErrore,{children:e.errore[n]})]},n)})}),(0,d.jsx)(O,{eseguiModificaProfilo:r,vistaItem:`card`,StyledComponents:Q})]})})}function hn({nome:e,img:t,id:n,onClickWidget:r,backgroundColor:a}){return(0,d.jsxs)(f.Card,{style:{width:`300px`,height:`400px`,backgroundColor:a,borderRadius:`50px`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`},onClick:e=>{r(e,n)},draggable:!1,children:[(0,d.jsx)(f.Card.Img,{style:{width:`220px`,height:`220px`,borderRadius:`20px`,marginTop:`40px`,marginBottom:`20px`,pointerEvents:`none`},variant:`top`,src:t}),(0,d.jsx)(f.Card.Body,{children:(0,d.jsx)(f.Card.Title,{style:{color:`#FFFFFF`,textAlign:`center`},children:e})})]})}function gn({entrateItems:e,lingua:t,etichettaIta:n,etichettaEng:r}){return(0,d.jsxs)(f.Card,{style:{display:`inline-block`,backgroundColor:`rgba(0, 0, 0, 0.5)`,borderRadius:`50px`,paddingLeft:`50px`,paddingRight:`50px`,paddingBottom:`50px`,overflowX:`auto`},children:[(0,d.jsx)(f.Card.Body,{children:(0,d.jsx)(`center`,{children:(0,d.jsx)(f.Card.Title,{style:{color:`#FFFFFF`},children:t===`italiano`?n:r})})}),(0,d.jsx)(`center`,{children:(0,d.jsxs)(f.Table,{striped:!0,bordered:!0,hover:!0,variant:`dark`,style:{borderRadius:`50px`,marginTop:`0`,marginBottom:`10px`,textAlign:`center`},children:[(0,d.jsx)(`thead`,{children:(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`ANNO`:`YEAR`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`GEN`:`JAN`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:`FEB`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:`MAR`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:`APR`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`MAG`:`MAY`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`GIU`:`JUN`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`LUG`:`JUL`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`AGO`:`AUG`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`SET`:`SEP`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`OTT`:`OCT`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:`NOV`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`DIC`:`DEC`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`TOT ENTRATE`:`TOT REVENUE`})]})}),(0,d.jsx)(`tbody`,{children:e.map((e,t)=>t>1&&(0,d.jsx)(`tr`,{children:Object.values(e).map((e,t)=>(0,d.jsx)(`td`,{style:{color:$(e,t,`entrata`),fontWeight:t===0?`bold`:null},children:t>0?parseFloat(e).toFixed(2)+` €`:e},t))},t))}),(0,d.jsx)(`tbody`,{children:(0,d.jsx)(`tr`,{children:Object.values(e[0]).map((e,t)=>(0,d.jsx)(`td`,{style:{color:$(e,t,`entrata`),fontWeight:t===0?`bold`:null},children:t>0?parseFloat(e).toFixed(2)+` €`:e},t))})})]})})]})}function _n({entrateItems:e,lingua:n,tipoItemIta:r,tipoItemEng:a,etichettaIta:o,etichettaEng:s}){let[c,l]=(0,t.useState)(0);return(0,d.jsxs)(f.Card,{style:{display:`inline-block`,backgroundColor:`rgba(0, 0, 0, 0.5)`,borderRadius:`50px`,paddingLeft:`50px`,paddingRight:`50px`,paddingBottom:`50px`,overflowX:`auto`},children:[(0,d.jsx)(f.Card.Body,{children:(0,d.jsx)(`center`,{children:(0,d.jsx)(f.Card.Title,{style:{color:`#FFFFFF`},children:n===`italiano`?o:s})})}),(0,d.jsx)(`center`,{children:(0,d.jsxs)(f.Table,{striped:!0,bordered:!0,hover:!0,variant:`dark`,style:{borderRadius:`50px`,marginTop:`0`,marginBottom:`10px`,textAlign:`center`},children:[(0,d.jsx)(`thead`,{}),(0,d.jsx)(`tbody`,{children:e.map((o,s)=>(0,d.jsxs)(t.Fragment,{children:[(s===0||e[s].anno!==e[s-1].anno)&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`tr`,{children:(0,d.jsxs)(`th`,{colSpan:14,children:[n===`italiano`?`ANNO`:`YEAR`,` = `,o.anno]})}),(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?r:a}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`GEN`:`JAN`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:`FEB`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:`MAR`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:`APR`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`MAG`:`MAY`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`GIU`:`JUN`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`LUG`:`JUL`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`AGO`:`AUG`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`SET`:`SEP`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`OTT`:`OCT`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:`NOV`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`DIC`:`DEC`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`TOT ENTRATE`:`TOT REVENUE`})]})]}),(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{style:{color:`#FFFFFF`,fontWeight:`bold`},children:o.nome}),(0,d.jsxs)(`td`,{style:{color:$(o.totale_gennaio,1,`entrata`),fontWeight:`bold`},children:[`x `,o.quantita_gennaio,` = `,parseFloat(o.totale_gennaio).toFixed(2)+` €`]}),(0,d.jsxs)(`td`,{style:{color:$(o.totale_febbraio,1,`entrata`),fontWeight:`bold`},children:[`x `,o.quantita_febbraio,` = `,parseFloat(o.totale_febbraio).toFixed(2)+` €`]}),(0,d.jsxs)(`td`,{style:{color:$(o.totale_marzo,1,`entrata`),fontWeight:`bold`},children:[`x `,o.quantita_marzo,` = `,parseFloat(o.totale_marzo).toFixed(2)+` €`]}),(0,d.jsxs)(`td`,{style:{color:$(o.totale_aprile,1,`entrata`),fontWeight:`bold`},children:[`x `,o.quantita_aprile,` = `,parseFloat(o.totale_aprile).toFixed(2)+` €`]}),(0,d.jsxs)(`td`,{style:{color:$(o.totale_maggio,1,`entrata`),fontWeight:`bold`},children:[`x `,o.quantita_maggio,` = `,parseFloat(o.totale_maggio).toFixed(2)+` €`]}),(0,d.jsxs)(`td`,{style:{color:$(o.totale_giugno,1,`entrata`),fontWeight:`bold`},children:[`x `,o.quantita_giugno,` = `,parseFloat(o.totale_giugno).toFixed(2)+` €`]}),(0,d.jsxs)(`td`,{style:{color:$(o.totale_luglio,1,`entrata`),fontWeight:`bold`},children:[`x `,o.quantita_luglio,` = `,parseFloat(o.totale_luglio).toFixed(2)+` €`]}),(0,d.jsxs)(`td`,{style:{color:$(o.totale_agosto,1,`entrata`),fontWeight:`bold`},children:[`x `,o.quantita_agosto,` = `,parseFloat(o.totale_agosto).toFixed(2)+` €`]}),(0,d.jsxs)(`td`,{style:{color:$(o.totale_settembre,1,`entrata`),fontWeight:`bold`},children:[`x `,o.quantita_settembre,` = `,parseFloat(o.totale_settembre).toFixed(2)+` €`]}),(0,d.jsxs)(`td`,{style:{color:$(o.totale_ottobre,1,`entrata`),fontWeight:`bold`},children:[`x `,o.quantita_ottobre,` = `,parseFloat(o.totale_ottobre).toFixed(2)+` €`]}),(0,d.jsxs)(`td`,{style:{color:$(o.totale_novembre,1,`entrata`),fontWeight:`bold`},children:[`x `,o.quantita_novembre,` = `,parseFloat(o.totale_novembre).toFixed(2)+` €`]}),(0,d.jsxs)(`td`,{style:{color:$(o.totale_dicembre,1,`entrata`),fontWeight:`bold`},children:[`x `,o.quantita_dicembre,` = `,parseFloat(o.totale_dicembre).toFixed(2)+` €`]}),(0,d.jsxs)(`td`,{style:{color:$(sn(o),1,`entrata`),fontWeight:`bold`},children:[`x `,cn(o),` = `,parseFloat(sn(o)).toFixed(2)+` €`]})]})]},s))})]})})]})}function vn({usciteItems:e,lingua:t,etichettaIta:n,etichettaEng:r}){return(0,d.jsxs)(f.Card,{style:{display:`inline-block`,backgroundColor:`rgba(0, 0, 0, 0.5)`,borderRadius:`50px`,paddingLeft:`50px`,paddingRight:`50px`,paddingBottom:`50px`,overflowX:`auto`},children:[(0,d.jsx)(f.Card.Body,{children:(0,d.jsx)(`center`,{children:(0,d.jsx)(f.Card.Title,{style:{color:`#FFFFFF`},children:t===`italiano`?n:r})})}),(0,d.jsx)(`center`,{children:(0,d.jsxs)(f.Table,{striped:!0,bordered:!0,hover:!0,variant:`dark`,style:{borderRadius:`50px`,marginTop:`0`,marginBottom:`10px`,textAlign:`center`},children:[(0,d.jsx)(`thead`,{children:(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`ANNO`:`YEAR`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`GEN`:`JAN`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:`FEB`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:`MAR`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:`APR`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`MAG`:`MAY`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`GIU`:`JUN`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`LUG`:`JUL`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`AGO`:`AUG`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`SET`:`SEP`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`OTT`:`OCT`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:`NOV`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`DIC`:`DEC`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`TOT USCITE`:`TOT EXIT`})]})}),(0,d.jsx)(`tbody`,{children:e.map((e,t)=>t>1&&(0,d.jsx)(`tr`,{children:Object.values(e).map((e,t)=>(0,d.jsx)(`td`,{style:{color:$(-e,t,`uscita`),fontWeight:t===0?`bold`:null},children:t>0?parseFloat(-e).toFixed(2)+` €`:e},t))},t))}),(0,d.jsx)(`tbody`,{children:(0,d.jsx)(`tr`,{children:Object.values(e[0]).map((e,t)=>(0,d.jsx)(`td`,{style:{color:$(-e,t,`uscita`),fontWeight:t===0?`bold`:null},children:t>0?parseFloat(-e).toFixed(2)+` €`:e},t))})})]})})]})}function yn({entrate:e,uscite:t,lingua:n}){return(0,d.jsxs)(f.Card,{style:{display:`inline-block`,backgroundColor:`rgba(0, 0, 0, 0.5)`,borderRadius:`50px`,paddingLeft:`50px`,paddingRight:`50px`,paddingBottom:`50px`,overflowX:`auto`},children:[(0,d.jsx)(f.Card.Body,{children:(0,d.jsx)(`center`,{children:(0,d.jsx)(f.Card.Title,{style:{color:`#FFFFFF`},children:n===`italiano`?`Ricavi`:`Revenues`})})}),(0,d.jsx)(`center`,{children:(0,d.jsxs)(f.Table,{striped:!0,bordered:!0,hover:!0,variant:`dark`,style:{borderRadius:`50px`,marginTop:`0`,marginBottom:`10px`,textAlign:`center`},children:[(0,d.jsx)(`thead`,{children:(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`ANNO`:`YEAR`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`GEN`:`JAN`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:`FEB`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:`MAR`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:`APR`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`MAG`:`MAY`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`GIU`:`JUN`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`LUG`:`JUL`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`AGO`:`AUG`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`SET`:`SEP`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`OTT`:`OCT`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:`NOV`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`DIC`:`DEC`}),(0,d.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`TOT RICAVI`:`TOT EARNINGS`})]})}),(0,d.jsxs)(`tbody`,{children:[e.map((e,n)=>n>1&&(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{style:{fontWeight:`bold`},children:e.Anno}),t[n]&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(`td`,{style:{color:$(e.gen-t[n].gen)},children:[parseFloat(e.gen-t[n].gen).toFixed(2),` €`]}),(0,d.jsxs)(`td`,{style:{color:$(e.feb-t[n].feb)},children:[parseFloat(e.feb-t[n].feb).toFixed(2),` €`]}),(0,d.jsxs)(`td`,{style:{color:$(e.mar-t[n].mar)},children:[parseFloat(e.mar-t[n].mar).toFixed(2),` €`]}),(0,d.jsxs)(`td`,{style:{color:$(e.apr-t[n].apr)},children:[parseFloat(e.apr-t[n].apr).toFixed(2),` €`]}),(0,d.jsxs)(`td`,{style:{color:$(e.mag-t[n].mag)},children:[parseFloat(e.mag-t[n].mag).toFixed(2),` €`]}),(0,d.jsxs)(`td`,{style:{color:$(e.giu-t[n].giu)},children:[parseFloat(e.giu-t[n].giu).toFixed(2),` €`]}),(0,d.jsxs)(`td`,{style:{color:$(e.lug-t[n].lug)},children:[parseFloat(e.lug-t[n].lug).toFixed(2),` €`]}),(0,d.jsxs)(`td`,{style:{color:$(e.ago-t[n].ago)},children:[parseFloat(e.ago-t[n].ago).toFixed(2),` €`]}),(0,d.jsxs)(`td`,{style:{color:$(e.set-t[n].set)},children:[parseFloat(e.set-t[n].set).toFixed(2),` €`]}),(0,d.jsxs)(`td`,{style:{color:$(e.ott-t[n].ott)},children:[parseFloat(e.ott-t[n].ott).toFixed(2),` €`]}),(0,d.jsxs)(`td`,{style:{color:$(e.nov-t[n].nov)},children:[parseFloat(e.nov-t[n].nov).toFixed(2),` €`]}),(0,d.jsxs)(`td`,{style:{color:$(e.dic-t[n].dic)},children:[parseFloat(e.dic-t[n].dic).toFixed(2),` €`]}),(0,d.jsxs)(`td`,{style:{color:$(e.totale_anno-t[n].totale_anno)},children:[parseFloat(e.totale_anno-t[n].totale_anno).toFixed(2),` €`]})]})]},n)),(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{style:{fontWeight:`bold`},children:e[0].Anno}),(0,d.jsxs)(`td`,{style:{color:$(e[0].gen-t[0].gen,1)},children:[parseFloat(e[0].gen-t[0].gen).toFixed(2),` €`]}),(0,d.jsxs)(`td`,{style:{color:$(e[0].feb-t[0].feb)},children:[parseFloat(e[0].feb-t[0].feb).toFixed(2),` €`]}),(0,d.jsxs)(`td`,{style:{color:$(e[0].mar-t[0].mar)},children:[parseFloat(e[0].mar-t[0].mar).toFixed(2),` €`]}),(0,d.jsxs)(`td`,{style:{color:$(e[0].apr-t[0].apr)},children:[parseFloat(e[0].apr-t[0].apr).toFixed(2),` €`]}),(0,d.jsxs)(`td`,{style:{color:$(e[0].mag-t[0].mag)},children:[parseFloat(e[0].mag-t[0].mag).toFixed(2),` €`]}),(0,d.jsxs)(`td`,{style:{color:$(e[0].giu-t[0].giu)},children:[parseFloat(e[0].giu-t[0].giu).toFixed(2),` €`]}),(0,d.jsxs)(`td`,{style:{color:$(e[0].lug-t[0].lug)},children:[parseFloat(e[0].lug-t[0].lug).toFixed(2),` €`]}),(0,d.jsxs)(`td`,{style:{color:$(e[0].ago-t[0].ago)},children:[parseFloat(e[0].ago-t[0].ago).toFixed(2),` €`]}),(0,d.jsxs)(`td`,{style:{color:$(e[0].set-t[0].set)},children:[parseFloat(e[0].set-t[0].set).toFixed(2),` €`]}),(0,d.jsxs)(`td`,{style:{color:$(e[0].ott-t[0].ott)},children:[parseFloat(e[0].ott-t[0].ott).toFixed(2),` €`]}),(0,d.jsxs)(`td`,{style:{color:$(e[0].nov-t[0].nov)},children:[parseFloat(e[0].nov-t[0].nov).toFixed(2),` €`]}),(0,d.jsxs)(`td`,{style:{color:$(e[0].dic-t[0].dic)},children:[parseFloat(e[0].dic-t[0].dic).toFixed(2),` €`]}),(0,d.jsxs)(`td`,{style:{color:$(e[0].totale_anno-t[0].totale_anno)},children:[parseFloat(e[0].totale_anno-t[0].totale_anno).toFixed(2),` €`]})]},0)]})]})})]})}function bn({totaleItems:e}){return(0,d.jsxs)(Q.StyledCard,{children:[(0,d.jsx)(Q.StyledCardHeader,{children:`Informations`}),(0,d.jsx)(Q.SlideContainer,{children:e&&(0,d.jsx)(Q.StyledInputBlock,{rows:1,name:`totale_items`,id:`totale_items`,type:`text`,value:e||`Errore!!`,readOnly:!0})})]})}function xn({datiRicerca:e,setDatiRicerca:t,handleInputChange:n,eseguiRicerca:r,lingua:a}){return(0,d.jsxs)(Q.StyledCard,{children:[(0,d.jsx)(Q.StyledCardHeader,{children:a===`italiano`?`Ricerca entrate e uscite`:`Searching for inputs and outputs`}),(0,d.jsxs)(Q.SlideContainer,{style:{maxHeight:`2000px`},children:[(0,d.jsx)(Q.StyledInputModifica,{rows:1,name:`primo_anno`,id:`primo_anno`,type:`number`,step:1,value:e.primo_anno,placeholder:`Primo anno`,onChange:e=>n(e,t),onContextMenu:e=>handleRightClick(e,`Primo anno`)}),(0,d.jsxs)(Q.StyledSelectModifica,{name:`ultimo_anno`,id:`ultimo_anno`,value:e.ultimo_anno,onChange:e=>n(e,t),onContextMenu:e=>handleRightClick(e,`Ultimo anno`),children:[(0,d.jsx)(`option`,{value:parseInt(e.primo_anno)+1,children:parseInt(e.primo_anno)+1}),(0,d.jsx)(`option`,{value:parseInt(e.primo_anno)+2,children:parseInt(e.primo_anno)+2}),(0,d.jsx)(`option`,{value:parseInt(e.primo_anno)+3,children:parseInt(e.primo_anno)+3}),(0,d.jsx)(`option`,{value:parseInt(e.primo_anno)+4,children:parseInt(e.primo_anno)+4}),(0,d.jsx)(`option`,{value:parseInt(e.primo_anno)+5,children:parseInt(e.primo_anno)+5})]})]}),(0,d.jsx)(E,{eseguiRicerca:e=>r(e),vistaItem:`card`,StyledComponents:Q})]})}var Sn=({tipoItem:e,items:t,setItems:n,operazioneModifica:r,operazioneElimina:a,campi:o,handleBlurItem:s,tipoForm:c,vistaItem:l})=>{let u=l===`card`?dn:K,f=()=>(0,d.jsx)(d.Fragment,{children:t.map((c,l)=>(0,d.jsx)(u,{item:c,campi:c?o(c,null,null,null):[],indici:[...Array(o(c,null,null,null).label.length).keys()],operazioneModifica:r,operazioneElimina:a,items:t,setItems:n,tipoItem:e,handleBlurItem:s},l))});return(0,d.jsxs)(d.Fragment,{children:[c===`search`&&t.length===0&&(0,d.jsx)(`div`,{className:`contenitore-1`,children:`Nessun elemento trovato.`}),t.length>0&&(0,d.jsx)(d.Fragment,{children:l===`card`?(0,d.jsx)(`div`,{className:`contenitore-3`,children:(0,d.jsx)(f,{})}):(0,d.jsx)(f,{})})]})};e.CambioTipoForm=Ge,e.CambioTipoForm2=Ke,e.CardEntrateItems=gn,e.CardEntrateItemsByName=_n,e.CardEntrateUscite=xn,e.CardFileItems=fn,e.CardInformazioni=bn,e.CardItemEsistente=dn,e.CardLogin=pn,e.CardNuovoItem=ln,e.CardProfilo=mn,e.CardRicavi=yn,e.CardRicercaItems=un,e.CardUsciteItems=vn,e.CardWidget=hn,e.FormEntrateUscite=Ye,e.FormFileItems=N,e.FormLogin=qe,e.FormNuovoItem=j,e.FormProfilo=Je,e.FormRicercaItems=M,e.PaginaWeb=({componenti:e,elementi:n,vistaItem:r,vistaForm:a})=>{let[o,s]=(0,t.useState)(`search`),c=a===`form`?j:a===`card`?ln:W,l=a===`form`?M:a===`card`?un:G,u=a===`form`?N:a===`card`?fn:q;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(Ge,{elementi:n,tipoForm:o,setTipoForm:s,StyledComponents:x}),(0,d.jsx)(`br`,{}),` `,(0,d.jsx)(`br`,{}),` `,(0,d.jsx)(`br`,{}),` `,(0,d.jsx)(`br`,{}),n.map((n,r)=>(0,d.jsxs)(t.Fragment,{children:[n===`insert`&&o===`insert`&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c,{campi:e.campiNuovoItem,indici:e.indiciNuovoItem,eseguiSalvataggio:e.handleInsert}),(0,d.jsx)(`br`,{}),` `,(0,d.jsx)(`br`,{}),` `,(0,d.jsx)(`br`,{}),` `,(0,d.jsx)(`br`,{})]}),n===`search`&&o===`search`&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l,{campi:e.campiRicercaItems,indici:e.indiciRicercaItems,handleSearch:e.handleSearch}),(0,d.jsx)(`br`,{}),` `,(0,d.jsx)(`br`,{}),` `,(0,d.jsx)(`br`,{}),` `,(0,d.jsx)(`br`,{})]}),n===`file`&&o===`file`&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(u,{campi:e.campiFile,indici:e.indiciFile,ottieniFileRangePDF:e.handleSearchRangeFilePDF,ottieniFileRangeExcel:e.handleSearchRangeFileExcel,eliminaItemsRange:e.handleDeleteRangeFile}),(0,d.jsx)(`br`,{}),` `,(0,d.jsx)(`br`,{}),` `,(0,d.jsx)(`br`,{}),` `,(0,d.jsx)(`br`,{})]})]},r)),o!==`file`&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(Sn,{tipoItem:e.tipoItem,items:e.items,setItems:e.setItems,operazioneModifica:e.operazioneModifica,operazioneElimina:e.operazioneElimina,campi:e.campiItemEsistente,handleBlurItem:e.handleBlurItem,tipoForm:o,vistaItem:r}),(0,d.jsx)(`br`,{}),` `,(0,d.jsx)(`br`,{}),` `,(0,d.jsx)(`br`,{}),` `,(0,d.jsx)(`br`,{}),e.visualizzazioneInformazioni===!0&&e.items.length>0&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`center`,{children:(0,d.jsx)(bn,{totaleItems:e.totaleItems})}),(0,d.jsx)(`br`,{}),` `,(0,d.jsx)(`br`,{}),` `,(0,d.jsx)(`br`,{}),` `,(0,d.jsx)(`br`,{})]}),(0,d.jsx)(Ue,{selectedIdsModifica:e.selectedIdsModifica,selectedIdsEliminazione:e.selectedIdsEliminazione,handleEdit:e.handleEdit,handleDelete:e.handleDelete}),(0,d.jsx)(`br`,{}),` `,(0,d.jsx)(`br`,{}),` `,(0,d.jsx)(`br`,{}),` `,(0,d.jsx)(`br`,{})]})]})},e.RowEntrateUscite=Dt,e.RowFileItems=q,e.RowItemEsistente=K,e.RowLogin=Tt,e.RowNuovoItem=W,e.RowProfilo=Et,e.RowRicercaItems=G});