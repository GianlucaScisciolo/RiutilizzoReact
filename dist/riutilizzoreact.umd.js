(function(e,t){typeof exports==`object`&&typeof module<`u`?t(exports,require(`react`),require(`styled-components`),require(`react-bootstrap/Card`),require(`react-bootstrap/ListGroup`),require(`react-bootstrap/esm/Row`),require(`react-bootstrap/esm/Col`),require(`lucide-react`),require(`@fortawesome/react-fontawesome`),require(`@fortawesome/free-solid-svg-icons`),require(`react-bootstrap`)):typeof define==`function`&&define.amd?define([`exports`,`react`,`styled-components`,`react-bootstrap/Card`,`react-bootstrap/ListGroup`,`react-bootstrap/esm/Row`,`react-bootstrap/esm/Col`,`lucide-react`,`@fortawesome/react-fontawesome`,`@fortawesome/free-solid-svg-icons`,`react-bootstrap`],t):(e=typeof globalThis<`u`?globalThis:e||self,t(e.RiutilizzoReact={},e.React,e.styled,e.ReactBootstrap.Card,e.ReactBootstrap.ListGroup,e.ReactBootstrap.Row,e.ReactBootstrap.Col,e.LucideReact,e.FontAwesomeIcon,e.FreeSolidSvgIcons,e.ReactBootstrap))})(this,function(e,t,n,r,i,a,o,s,c,l,u){Object.defineProperty(e,Symbol.toStringTag,{value:`Module`});var d=Object.create,f=Object.defineProperty,p=Object.getOwnPropertyDescriptor,m=Object.getOwnPropertyNames,h=Object.getPrototypeOf,ee=Object.prototype.hasOwnProperty,g=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),te=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=m(t),a=0,o=i.length,s;a<o;a++)s=i[a],!ee.call(e,s)&&s!==n&&f(e,s,{get:(e=>t[e]).bind(null,s),enumerable:!(r=p(t,s))||r.enumerable});return e},_=(e,t,n)=>(n=e==null?{}:d(h(e)),te(t||!e||!e.__esModule?f(n,`default`,{value:e,enumerable:!0}):n,e));n=_(n,1),r=_(r,1),i=_(i,1),a=_(a,1),o=_(o,1);var ne=(0,n.default)(r.default)`
  background-color: #111111;
  overflow: hidden;
  border: 5px solid #000000;
  border-radius: 40px;
  margin-left: 30%;
  margin-right: 30%;

  color: white;
  text-align: center;
`,re=(0,n.default)(r.default.Header)`
  color: #ffffff;
  background-color: #000000;
  border: 5px solid #000000;
  min-height: 70px;
`,ie=(0,n.default)(i.default.Item)`
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  min-height: 70px;
`,ae=n.default.div`
  overflow: hidden;
  transition: max-height 1.5s ease-out;
`,oe=(0,n.default)(a.default)`
  display: flex;
  flex-wrap: wrap;
  padding-left: 3%;
  padding-right: 3%;
`,se=(0,n.default)(o.default)`
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
`,v=n.default.label`
  width: 100%;
  color: #ffffff;
  background-color: transparent;
  border-radius: 40px;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  min-height: 70px;
  margin-top: 2%;
`,y=n.default.textarea`
  width: 100%;
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  min-height: 70px;
  margin-bottom: 20px;
`,ce=(0,n.default)(y)`
  background-color: #000000;
`,b=(0,n.default)(y)`
  background-color: #0050EF;
`,x=(0,n.default)(y)`
  background-color: #500000;
`,S=n.default.input`
  width: 100%;
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  min-height: 70px;
  margin-bottom: 20px;
`,C=(0,n.default)(S)`
  background-color: #000000;
`,w=(0,n.default)(S)`
  background-color: #0050EF;
`,T=(0,n.default)(S)`
  background-color: #500000;
`,E=`
  color: #FFFFFF;
  cursor: pointer;
  transition: 0.5s all ease-out;
`,D=`
  ${E}
  &:hover {
    color: #0050EF;
  }
`,O=`
  ${E}
  &:hover {
    color: #500000;
  }
`,le=(0,n.default)(s.Save)`
  ${D}
`,ue=(0,n.default)(s.Save)`
  ${E}
`,de=(0,n.default)(s.Save)`
  ${E}
  color: #0050EF;
`,fe=(0,n.default)(s.EyeClosed)`
  ${E}
  transition: 0.5s all ease-out;
`,pe=(0,n.default)(s.Eye)`
  ${E}
  transition: 0.5s all ease-out;
  color: #0050EF;
`,me=(0,n.default)(s.Search)`
  ${D}
`,he=(0,n.default)(s.Search)`
  ${E}
`,ge=(0,n.default)(s.Search)`
  ${E}
  color: #0050EF;
`,_e=(0,n.default)(s.Euro)`
  color: #FFFFFF;
  transition: 0.5s all ease-out;
`,ve=(0,n.default)(s.ChevronUp)`
  ${D}
`,ye=(0,n.default)(s.ChevronDown)`
  ${D}
`,be=(0,n.default)(s.LogIn)`
  ${D}
`,xe=(0,n.default)(c.FontAwesomeIcon)`
  color: #FFFFFF;
`,Se=(0,n.default)(c.FontAwesomeIcon)`
  ${E}
`,Ce=(0,n.default)(c.FontAwesomeIcon)`
  ${E}
  color: #0050EF;
`,we=(0,n.default)(s.Download)`
  ${D}
`;(0,n.default)(s.X)`
  ${O}
`;var Te=(0,n.default)(s.Trash2)`
  ${O}
`,k=n.default.button`
  border-radius: 40px;
  border: 5px solid #000000;
  background-color: #000000;
  color: #FFFFFF;
  text-align: center;  
  padding: 2% 15%;
  cursor: pointer;
`;(0,n.default)(k)`
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #0050EF;
    color: #FFFFFF;
  }
`,(0,n.default)(k)`
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #500000;
    color: #FFFFFF;
  }
`,(0,n.default)(k)`
  background-color: #0050EF;
  &:hover {
    background-color: #000000;
    color: #FFFFFF;
  }
`,(0,n.default)(k)`
  background-color: #500000;
  &:hover {
    background-color: #000000;
    color: #FFFFFF;
  }
`;var A=n.default.select`
  width: 100%;
  min-height: 70px;
  background-color: #0050EF;
  border: 5px solid #000000;
  color: #FFFFFF;
  text-align: center;
`,Ee=(0,n.default)(A)`
  background-color: #111111;
`,De=(0,n.default)(A)`
  background-color: #0050EF;
`,Oe=(0,n.default)(A)`
  background-color: #500000;
`;n.default.option`
  background-color: #0050EF;
  &:hover {
    background-color: #0050EF;
  }
`;var ke=n.default.span`
  color: #FF0000;
  padding: 10px;
`,j={StyledListGroupItem:ie,StyledRow:oe,StyledCol:se,StyledSaveNotSelected:le,grandezzaIcona:50,StyledSearchNotSelected:me,StyledArrowTopNotSelected:ve,StyledArrowBottomNotSelected:ye,StyledLoginNotSelected:be,StyledPencilNotSelected:(0,n.default)(s.Pencil)`
  ${E}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,StyledLabel:v,StyledInputBlock:C,StyledInputModifica:w,StyledInputElimina:T,StyledTextAreaBlock:ce,StyledTextAreaModifica:b,StyledTextAreaElimina:x,StyledForm:ne,StyledHeader:re,SlideContainer:ae,StyledSpanErrore:ke,StyledSelectBlock:Ee,StyledSelectModifica:De,StyledSelectElimina:Oe,StyledEyeClosedNotSelected:fe,StyledEyeOpenNotSelected:pe,StyledEuroNotSelected:_e,StyledFileIconNotSelected:xe,StyledDownloadNotSelected:we,StyledTrashNotSelected:Te,StyledSearchNotSelected2:he,StyledSaveNotSelected2:ue,StyledSearchSelected2:ge,StyledSaveSelected2:de,StyledFileIconNotSelected2:Se,StyledFileIconSelected2:Ce};function Ae(e,t){return e===0||e===2?t.StyledPencilNotSelected:e===1?t.StyledPencilSelected:s.Pencil}function je(e,t){return e===0||e===1?t.StyledTrashNotSelected:e===2?t.StyledTrashSelected:s.Trash2}function M(e,t,n){return t?e!==1&&e!==2?n.StyledInputBlock:e===1?n.StyledInputModifica:n.StyledInputElimina:e===2?n.StyledInputElimina:n.StyledInputBlock}function N(e,t,n){return t?e!==1&&e!==2?n.StyledTextAreaBlock:e===1?n.StyledTextAreaModifica:n.StyledTextAreaElimina:e===2?n.StyledTextAreaElimina:n.StyledTextAreaBlock}var Me=g((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),Ne=g((e=>{process.env.NODE_ENV!==`production`&&(function(){function t(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case g:return`Fragment`;case _:return`Profiler`;case te:return`StrictMode`;case ae:return`Suspense`;case oe:return`SuspenseList`;case y:return`Activity`}if(typeof e==`object`)switch(typeof e.tag==`number`&&console.error(`Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.`),e.$$typeof){case ee:return`Portal`;case re:return e.displayName||`Context`;case ne:return(e._context.displayName||`Context`)+`.Consumer`;case ie:var n=e.render;return e=e.displayName,e||=(e=n.displayName||n.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case se:return n=e.displayName||null,n===null?t(e.type)||`Memo`:n;case v:n=e._payload,e=e._init;try{return t(e(n))}catch{}}return null}function n(e){return``+e}function r(e){try{n(e);var t=!1}catch{t=!0}if(t){t=console;var r=t.error,i=typeof Symbol==`function`&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||`Object`;return r.call(t,`The provided key is an unsupported type %s. This value must be coerced to a string before using it here.`,i),n(e)}}function i(e){if(e===g)return`<>`;if(typeof e==`object`&&e&&e.$$typeof===v)return`<...>`;try{var n=t(e);return n?`<`+n+`>`:`<...>`}catch{return`<...>`}}function a(){var e=b.A;return e===null?null:e.getOwner()}function o(){return Error(`react-stack-top-frame`)}function s(e){if(x.call(e,`key`)){var t=Object.getOwnPropertyDescriptor(e,`key`).get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function c(e,t){function n(){w||(w=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",t))}n.isReactWarning=!0,Object.defineProperty(e,`key`,{get:n,configurable:!0})}function l(){var e=t(this.type);return T[e]||(T[e]=!0,console.error(`Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.`)),e=this.props.ref,e===void 0?null:e}function u(e,t,n,r,i,a){var o=n.ref;return e={$$typeof:h,type:e,key:t,props:n,_owner:r},(o===void 0?null:o)===null?Object.defineProperty(e,`ref`,{enumerable:!1,value:null}):Object.defineProperty(e,`ref`,{enumerable:!1,get:l}),e._store={},Object.defineProperty(e._store,`validated`,{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,`_debugInfo`,{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(e,`_debugStack`,{configurable:!1,enumerable:!1,writable:!0,value:i}),Object.defineProperty(e,`_debugTask`,{configurable:!1,enumerable:!1,writable:!0,value:a}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function d(e,n,i,o,l,d){var p=n.children;if(p!==void 0)if(o)if(S(p)){for(o=0;o<p.length;o++)f(p[o]);Object.freeze&&Object.freeze(p)}else console.error(`React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.`);else f(p);if(x.call(n,`key`)){p=t(e);var m=Object.keys(n).filter(function(e){return e!==`key`});o=0<m.length?`{key: someKey, `+m.join(`: ..., `)+`: ...}`:`{key: someKey}`,O[p+o]||(m=0<m.length?`{`+m.join(`: ..., `)+`: ...}`:`{}`,console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,o,p,m,p),O[p+o]=!0)}if(p=null,i!==void 0&&(r(i),p=``+i),s(n)&&(r(n.key),p=``+n.key),`key`in n)for(var h in i={},n)h!==`key`&&(i[h]=n[h]);else i=n;return p&&c(i,typeof e==`function`?e.displayName||e.name||`Unknown`:e),u(e,p,i,a(),l,d)}function f(e){p(e)?e._store&&(e._store.validated=1):typeof e==`object`&&e&&e.$$typeof===v&&(e._payload.status===`fulfilled`?p(e._payload.value)&&e._payload.value._store&&(e._payload.value._store.validated=1):e._store&&(e._store.validated=1))}function p(e){return typeof e==`object`&&!!e&&e.$$typeof===h}var m=require(`react`),h=Symbol.for(`react.transitional.element`),ee=Symbol.for(`react.portal`),g=Symbol.for(`react.fragment`),te=Symbol.for(`react.strict_mode`),_=Symbol.for(`react.profiler`),ne=Symbol.for(`react.consumer`),re=Symbol.for(`react.context`),ie=Symbol.for(`react.forward_ref`),ae=Symbol.for(`react.suspense`),oe=Symbol.for(`react.suspense_list`),se=Symbol.for(`react.memo`),v=Symbol.for(`react.lazy`),y=Symbol.for(`react.activity`),ce=Symbol.for(`react.client.reference`),b=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,x=Object.prototype.hasOwnProperty,S=Array.isArray,C=console.createTask?console.createTask:function(){return null};m={react_stack_bottom_frame:function(e){return e()}};var w,T={},E=m.react_stack_bottom_frame.bind(m,o)(),D=C(i(o)),O={};e.Fragment=g,e.jsx=function(e,t,n){var r=1e4>b.recentlyCreatedOwnerStacks++;return d(e,t,n,!1,r?Error(`react-stack-top-frame`):E,r?C(i(e)):D)},e.jsxs=function(e,t,n){var r=1e4>b.recentlyCreatedOwnerStacks++;return d(e,t,n,!0,r?Error(`react-stack-top-frame`):E,r?C(i(e)):D)}})()})),P=g(((e,t)=>{process.env.NODE_ENV===`production`?t.exports=Me():t.exports=Ne()}))();function F({eseguiSalvataggio:e,vistaItem:t,StyledComponents:n}){return t===`card`||t===`form`?(0,P.jsx)(n.StyledListGroupItem,{style:{border:`5px solid #000000`,backgroundColor:`#000000`,paddingTop:`2%`,paddingBottom:`2%`},children:(0,P.jsx)(n.StyledRow,{children:(0,P.jsx)(n.StyledCol,{children:(0,P.jsx)(n.StyledSaveNotSelected,{className:`salvaItemButton`,size:n.grandezzaIcona,onClick:e})})})}):(0,P.jsx)(n.StyledColOperazioni,{children:(0,P.jsx)(n.StyledSaveNotSelected,{className:`center salvaItemButton`,size:n.grandezzaIcona,onClick:e})})}function I({handleSearch:e,vistaItem:t,StyledComponents:n}){return t===`card`||t===`form`?(0,P.jsx)(n.StyledListGroupItem,{style:{border:`5px solid #000000`,backgroundColor:`#000000`,paddingTop:`2%`,paddingBottom:`2%`},children:(0,P.jsx)(n.StyledSearchNotSelected,{className:`ricercaItemsButton`,size:n.grandezzaIcona,onClick:e})}):(0,P.jsx)(n.StyledColOperazioni,{children:(0,P.jsx)(`div`,{style:{width:`100%`},children:(0,P.jsx)(n.StyledSearchNotSelected,{className:`center ricercaItemsButton`,size:n.grandezzaIcona,onClick:e})})})}function L({eseguiRicerca:e,vistaItem:t,StyledComponents:n}){return t===`card`||t===`form`?(0,P.jsx)(n.StyledListGroupItem,{style:{border:`5px solid #000000`,backgroundColor:`#000000`,paddingTop:`2%`,paddingBottom:`2%`},children:(0,P.jsx)(n.StyledSearchNotSelected,{className:`ricercaEntrateUsciteButton`,size:n.grandezzaIcona,onClick:e})}):(0,P.jsx)(n.StyledColOperazioni,{children:(0,P.jsx)(`div`,{style:{width:`100%`},children:(0,P.jsx)(n.StyledSearchNotSelected,{className:`ricercaEntrateUsciteButton`,size:n.grandezzaIcona,onClick:e})})})}function R({eseguiLogin:e,vistaItem:t,StyledComponents:n}){return t===`card`||t===`form`?(0,P.jsx)(n.StyledListGroupItem,{style:{border:`5px solid #000000`,backgroundColor:`#000000`,paddingTop:`3%`,paddingBottom:`3%`},children:(0,P.jsx)(n.StyledLoginNotSelected,{className:`loginButton`,size:n.grandezzaIcona,onClick:e})}):(0,P.jsx)(n.StyledColOperazioni,{children:(0,P.jsx)(n.StyledLoginNotSelected,{className:`center loginButton`,size:n.grandezzaIcona,onClick:e})})}function z({eseguiModificaProfilo:e,vistaItem:t,StyledComponents:n}){let r=t===`form`?n.StyledPencilNotSelected:n.StyledPencilNotSelected2;return t===`card`||t===`form`?(0,P.jsx)(n.StyledListGroupItem,{style:{border:`5px solid #000000`,backgroundColor:`#000000`,paddingTop:`2%`,paddingBottom:`2%`},children:(0,P.jsx)(r,{className:`modificaProfiloButton`,size:n.grandezzaIcona,onClick:e})}):(0,P.jsx)(n.StyledColOperazioni,{children:(0,P.jsx)(n.StyledPencilNotSelectedModificaProfilo,{className:`center modificaProfiloButton`,size:n.grandezzaIcona,onClick:e})})}function B({ottieniFileRangePDF:e,ottieniFileRangeExcel:t,eliminaItemsRange:n,vistaItem:r,StyledComponents:i}){return r===`card`||r===`form`?(0,P.jsxs)(i.StyledListGroupItem,{style:{border:`5px solid #000000`,backgroundColor:`#000000`,paddingTop:`3%`},children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(i.StyledFileIconNotSelected,{icon:l.faFilePdf,size:`2xl`,style:{marginRight:`50%`}}),(0,P.jsx)(i.StyledFileIconNotSelected,{icon:l.faFileExcel,size:`2xl`})]}),(0,P.jsx)(`br`,{}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(i.StyledDownloadNotSelected,{size:i.grandezzaIcona,style:{marginRight:`50%`},onClick:e}),(0,P.jsx)(i.StyledDownloadNotSelected,{size:i.grandezzaIcona,onClick:t})]}),(0,P.jsx)(`br`,{}),(0,P.jsx)(`div`,{children:(0,P.jsx)(i.StyledTrashNotSelected,{size:i.grandezzaIcona,onClick:n})}),(0,P.jsx)(`br`,{})]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(i.StyledColOperazioni,{children:(0,P.jsxs)(`div`,{style:{width:`100%`},children:[(0,P.jsx)(i.StyledFileIconNotSelected,{icon:l.faFilePdf,className:`left`,style:{marginRight:`50%`},size:`2xl`}),(0,P.jsx)(i.StyledDownloadNotSelected,{size:i.grandezzaIcona,className:`rigth`,onClick:e})]})}),(0,P.jsx)(i.StyledColOperazioni,{children:(0,P.jsxs)(`div`,{style:{width:`100%`},children:[(0,P.jsx)(i.StyledFileIconNotSelected,{icon:l.faFileExcel,className:`left`,style:{marginRight:`50%`},size:`2xl`}),(0,P.jsx)(i.StyledDownloadNotSelected,{size:i.grandezzaIcona,className:`rigth`,onClick:t})]})}),(0,P.jsx)(i.StyledColOperazioni,{children:(0,P.jsx)(`div`,{style:{width:`100%`},children:(0,P.jsx)(i.StyledTrashNotSelected2,{size:i.grandezzaIcona,className:`center`,onClick:n})})})]})}function Pe({selectOperation:e,item:t,vistaItem:n,StyledComponents:r}){let i=je(t.tipo_selezione,r),a=Ae(t.tipo_selezione,r);return n===`card`||n===`form`?(0,P.jsxs)(r.StyledListGroupItem,{style:{border:`5px solid #000000`,backgroundColor:`#000000`},children:[(0,P.jsx)(a,{className:`modificaItemButton`,size:r.grandezzaIcona,onClick:()=>e(`pencil`,t),style:{marginRight:`50%`}}),(0,P.jsx)(i,{className:`eliminaItemButton`,size:r.grandezzaIcona,onClick:()=>e(`trash`,t)})]}):(0,P.jsx)(r.StyledColOperazioni,{children:(0,P.jsxs)(`div`,{style:{width:`100%`},children:[(0,P.jsx)(a,{className:`left modificaItemButton`,size:r.grandezzaIcona,onClick:()=>e(`pencil`,t),style:{marginRight:`50%`}}),(0,P.jsx)(i,{className:`rigth eliminaItemButton`,size:r.grandezzaIcona,onClick:()=>e(`trash`,t)})]})})}var Fe=({selectedIdsModifica:e,selectedIdsEliminazione:t,handleEdit:n,handleDelete:r})=>(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(`div`,{className:`contenitore-2`,children:(0,P.jsxs)(a.default,{children:[e.length>0&&(0,P.jsx)(o.default,{children:(0,P.jsx)(`button`,{className:`bottone-blu-non-selezionato`,onClick:n,children:`Modifica`})}),t.length>0&&(0,P.jsx)(o.default,{children:(0,P.jsx)(`button`,{className:`bottone-rosso-non-selezionato`,onClick:r,children:`Elimina`})})]})})});function Ie({elementi:e,tipoForm:t,setTipoForm:n,StyledComponents:r}){let i=e=>{n(e)};return(0,P.jsxs)(r.StyledListGroupItem,{style:{border:`5px solid #000000`,backgroundColor:`#000000`,paddingTop:`20px`,paddingBottom:`20px`},children:[e.includes(`insert`)&&t===`insert`&&(0,P.jsxs)(P.Fragment,{children:[e.includes(`search`)&&(0,P.jsx)(r.StyledSearchNotSelected2,{size:r.grandezzaIcona,style:{marginRight:`50px`},onClick:()=>i(`search`)}),(0,P.jsx)(r.StyledSaveSelected2,{size:r.grandezzaIcona,style:{marginRight:`50px`},onClick:()=>i(`insert`)}),e.includes(`file`)&&(0,P.jsx)(r.StyledFileIconNotSelected2,{icon:l.faFile,size:`2xl`,onClick:()=>i(`file`)})]}),e.includes(`search`)&&t===`search`&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(r.StyledSearchSelected2,{size:r.grandezzaIcona,style:{marginRight:`50px`},onClick:()=>i(`search`)}),e.includes(`insert`)&&(0,P.jsx)(r.StyledSaveNotSelected2,{size:r.grandezzaIcona,style:{marginRight:`50px`},onClick:()=>i(`insert`)}),e.includes(`file`)&&(0,P.jsx)(r.StyledFileIconNotSelected2,{icon:l.faFile,size:`2xl`,onClick:()=>i(`file`)})]}),e.includes(`file`)&&t===`file`&&(0,P.jsxs)(P.Fragment,{children:[e.includes(`search`)&&(0,P.jsx)(r.StyledSearchNotSelected2,{size:r.grandezzaIcona,style:{marginRight:`50px`},onClick:()=>i(`search`)}),e.includes(`insert`)&&(0,P.jsx)(r.StyledSaveNotSelected2,{size:r.grandezzaIcona,style:{marginRight:`50px`},onClick:()=>i(`insert`)}),(0,P.jsx)(r.StyledFileIconNotSelected2,{icon:l.faFile,size:`2xl`,onClick:()=>i(`file`)})]})]})}function Le({elementi:e,tipoForm:t,setTipoForm:n,StyledComponents:r}){return(0,P.jsx)(r.StyledForm,{children:(0,P.jsx)(Ie,{elementi:e,tipoForm:t,setTipoForm:n,StyledComponents:r})})}function Re({elementi:e,tipoForm:t,setTipoForm:n,StyledComponents:r}){return(0,P.jsx)(r.StyledForm,{children:(0,P.jsx)(Ie,{elementi:e,tipoForm:t,setTipoForm:n,StyledComponents:r})})}function ze({campi:e,indici:n,eseguiSalvataggio:r}){return(0,P.jsxs)(j.StyledForm,{children:[(0,P.jsx)(j.StyledHeader,{children:e.header}),(0,P.jsxs)(j.SlideContainer,{style:{maxHeight:`2000px`,overflowY:`auto`},children:[n.map(n=>{let r=e.type[n]?M(1,!0,j):N(1,!0,j);return(0,P.jsxs)(t.Fragment,{children:[(0,P.jsx)(j.StyledLabel,{htmlFor:e.name[n],children:e.label[n]}),e.name[n]===`prezzo`?(0,P.jsx)(j.StyledRow,{children:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(r,{style:[`prezzo`,`totale`].includes(e.name[n])?{marginLeft:`-10%`,marginRight:0,minWidth:`105%`}:null,rows:1,name:e.name[n],id:e.id[n],type:e.type[n],step:e.step[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur}),[`prezzo`,`totale`].includes(e.name[n])&&(0,P.jsx)(j.StyledEuroNotSelected,{style:{maxWidth:`5%`,marginTop:`13px`},size:j.grandezzaIcona,onClick:null}),e.options[n]]})}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(r,{style:[`prezzo`,`totale`].includes(e.name[n])?{marginLeft:`-10%`,marginRight:0,minWidth:`105%`}:null,rows:1,name:e.name[n],id:e.id[n],type:e.type[n],step:e.step[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur}),[`prezzo`,`totale`].includes(e.name[n])&&(0,P.jsx)(j.StyledEuroNotSelected,{style:{maxWidth:`5%`,marginTop:`13px`},size:j.grandezzaIcona,onClick:null}),e.options[n]]}),e.errore[n]!==``&&(0,P.jsx)(j.StyledSpanErrore,{children:e.errore[n]})]},n)}),(0,P.jsx)(`br`,{}),` `,(0,P.jsx)(`br`,{})]}),(0,P.jsx)(F,{eseguiSalvataggio:r,vistaItem:`form`,StyledComponents:j})]})}function Be({campi:e,indici:n,handleSearch:r}){let[i,a]=(0,t.useState)(!0),[o,s]=(0,t.useState)(!0);return M(1,!0,j),N(1,!0,j),(0,P.jsxs)(j.StyledForm,{children:[(0,P.jsx)(j.StyledHeader,{children:e.header}),(0,P.jsxs)(j.SlideContainer,{style:{maxHeight:`2000px`,overflowY:`auto`},children:[n.map(n=>{let r=e.type[n]?M(1,!0,j):N(1,!0,j);return(0,P.jsxs)(t.Fragment,{children:[(0,P.jsx)(j.StyledLabel,{htmlFor:e.name[n],children:e.label[n]}),(0,P.jsx)(r,{rows:1,name:e.name[n],id:e.id[n],type:e.type[n],step:e.step[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur},n)]},n)}),(0,P.jsx)(`br`,{}),` `,(0,P.jsx)(`br`,{})]}),(0,P.jsx)(I,{setIsVisible:a,arrowUp:o,setArrowUp:s,handleSearch:r,vistaItem:`form`,StyledComponents:j})]})}function Ve({campi:e,indici:n,eseguiLogin:r}){let[i,a]=(0,t.useState)(`password`),o=e=>{e.preventDefault(),a(i===`text`?`password`:`text`)};return(0,P.jsxs)(j.StyledForm,{children:[(0,P.jsx)(j.StyledHeader,{children:e.header}),(0,P.jsxs)(j.SlideContainer,{style:{maxHeight:`2000px`},children:[n.map(n=>{let r=e.type[n]?M(1,!0,j):N(1,!0,j),a=i===`password`?j.StyledEyeClosedNotSelected:j.StyledEyeOpenNotSelected;return(0,P.jsxs)(t.Fragment,{children:[(0,P.jsx)(j.StyledLabel,{htmlFor:e.name[n],children:e.label[n]}),(0,P.jsxs)(j.StyledRow,{children:[(0,P.jsx)(r,{style:e.name[n]===`password`?{marginLeft:`-10%`,marginRight:0,minWidth:`105%`}:{marginLeft:`-10%`,marginRight:0,minWidth:`115%`,width:`100%`},rows:1,name:e.name[n],id:e.id[n],type:e.name[n]===`password`?i:e.type[n],step:e.step[n],min:e.min[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur}),e.name[n]===`password`&&(0,P.jsx)(a,{style:{maxWidth:`5%`,marginTop:`13px`},size:j.grandezzaIcona,onClick:o})]}),e.options[n],e.errore[n]&&(0,P.jsx)(j.StyledSpanErrore,{children:e.errore[n]})]},n)}),(0,P.jsx)(`br`,{}),` `,(0,P.jsx)(`br`,{})]}),(0,P.jsx)(R,{eseguiLogin:r,vistaItem:`form`,StyledComponents:j})]})}function He({campi:e,indici:n,eseguiModificaProfilo:r}){let[i,a]=(0,t.useState)(`password`),[o,s]=(0,t.useState)(`password`),[c,l]=(0,t.useState)(`password`),u=(e,t)=>{e.preventDefault(),t===`password_attuale`?a(i===`text`?`password`:`text`):t===`nuova_password`?s(o===`text`?`password`:`text`):t===`conferma_nuova_password`&&l(c===`text`?`password`:`text`)};return(0,P.jsxs)(j.StyledForm,{children:[(0,P.jsx)(j.StyledHeader,{children:e.header}),(0,P.jsxs)(j.SlideContainer,{style:{maxHeight:`2000px`},children:[n.map(n=>{let r=e.type[n]?M(1,!0,j):N(1,!0,j),a=e.name[n]===`password_attuale`&&i===`password`||e.name[n]===`nuova_password`&&o===`password`||e.name[n]===`conferma_nuova_password`&&c===`password`?j.StyledEyeClosedNotSelected:j.StyledEyeOpenNotSelected;return(0,P.jsxs)(t.Fragment,{children:[(0,P.jsx)(j.StyledLabel,{htmlFor:e.name[n],children:e.label[n]}),(0,P.jsxs)(j.StyledRow,{children:[(0,P.jsx)(r,{style:e.name[n].includes(`password`)?{marginLeft:`-10%`,marginRight:0,minWidth:`105%`}:{marginLeft:`-10%`,marginRight:0,minWidth:`115%`,width:`100%`},rows:1,name:e.name[n],id:e.id[n],type:e.name[n].includes(`password`)?e.name[n]===`password_attuale`?i:e.name[n]===`nuova_password`?o:c:e.type[n],step:e.step[n],min:e.min[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur}),e.name[n].includes(`password`)&&(0,P.jsx)(a,{style:{maxWidth:`5%`,marginTop:`13px`},size:j.grandezzaIcona,onClick:t=>u(t,e.name[n])})]}),e.options[n],e.errore[n]&&(0,P.jsx)(j.StyledSpanErrore,{children:e.errore[n]})]},n)}),(0,P.jsx)(`br`,{}),` `,(0,P.jsx)(`br`,{})]}),(0,P.jsx)(z,{eseguiModificaProfilo:r,vistaItem:`form`,StyledComponents:j})]})}function Ue({campi:e,indici:n,ottieniFileRangePDF:r,ottieniFileRangeExcel:i,eliminaItemsRange:a}){let[o,s]=(0,t.useState)(!0),[c,l]=(0,t.useState)(!0),u=o?`2000px`:`0px`;return M(1,!0,j),N(1,!0,j),(0,P.jsxs)(j.StyledForm,{children:[(0,P.jsx)(j.StyledHeader,{children:e.header}),(0,P.jsxs)(j.SlideContainer,{style:{maxHeight:`${u}`},children:[n.map(n=>{let r=e.type[n]?M(1,!0,j):N(1,!0,j);return(0,P.jsxs)(t.Fragment,{children:[(0,P.jsx)(j.StyledLabel,{htmlFor:e.name[n],children:e.label[n]}),(0,P.jsx)(r,{rows:1,name:e.name[n],id:e.id[n],type:e.type[n],step:e.step[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur},n)]},n)}),(0,P.jsx)(`br`,{}),` `,(0,P.jsx)(`br`,{})]}),(0,P.jsx)(B,{ottieniFileRangePDF:r,ottieniFileRangeExcel:i,eliminaItemsRange:a,vistaItem:`form`,StyledComponents:j})]})}function We({datiRicerca:e,setDatiRicerca:t,handleInputChange:n,eseguiRicerca:r,lingua:i}){return(0,P.jsxs)(j.StyledForm,{children:[(0,P.jsx)(j.StyledHeader,{children:i===`italiano`?`Ricerca entrate e uscite`:`Searching for inputs and outputs`}),(0,P.jsxs)(j.SlideContainer,{style:{maxHeight:`2000px`},children:[(0,P.jsx)(j.StyledLabel,{htmlFor:`primo_anno`,children:i===`italiano`?`Primo anno`:`First year`}),(0,P.jsx)(j.StyledInputModifica,{rows:1,name:`primo_anno`,id:`primo_anno`,type:`number`,step:1,value:e.primo_anno,placeholder:i===`italiano`?`Primo anno`:`First year`,onChange:e=>n(e,t)}),(0,P.jsx)(j.StyledLabel,{htmlFor:`ultimo_anno`,children:i===`italiano`?`Ultimo anno`:`Last year`}),(0,P.jsxs)(j.StyledSelectModifica,{name:`ultimo_anno`,id:`ultimo_anno`,value:e.ultimo_anno,onChange:e=>n(e,t),children:[(0,P.jsx)(`option`,{value:parseInt(e.primo_anno)+1,children:parseInt(e.primo_anno)+1}),(0,P.jsx)(`option`,{value:parseInt(e.primo_anno)+2,children:parseInt(e.primo_anno)+2}),(0,P.jsx)(`option`,{value:parseInt(e.primo_anno)+3,children:parseInt(e.primo_anno)+3}),(0,P.jsx)(`option`,{value:parseInt(e.primo_anno)+4,children:parseInt(e.primo_anno)+4}),(0,P.jsx)(`option`,{value:parseInt(e.primo_anno)+5,children:parseInt(e.primo_anno)+5})]}),(0,P.jsx)(`br`,{}),` `,(0,P.jsx)(`br`,{})]}),(0,P.jsx)(L,{eseguiRicerca:e=>r(e),vistaItem:`form`,StyledComponents:j})]})}var Ge=(0,n.default)(a.default)`
  display: flex;
  align-items: stretch; 
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 3%;
  padding-right: 3%;
`,V=(0,n.default)(o.default)`
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
`;(0,n.default)(V)`
  max-height: ${e=>e.isVisible?`1000px`:`0`}; 
  overflow: hidden;
  transition: max-height 1s ease-out;
`,(0,n.default)(V)`
  border: 5px solid #000000;
  background-color: #000000;
`;var Ke=(0,n.default)(V)`
  border: 5px solid #000000;
  background-color: #000000;
  min-width: 230px;
  max-width: 230px;
  min-height: 80px;
  max-height: 80px;
`;(0,n.default)(V)`
  border: 5px solid #000000;
  background-color: #0050EF;
`,(0,n.default)(V)`
  border: 5px solid #000000;
  background-color: #500000;
`,n.default.div`
  display: flex;
  flex-direction: row-reverse;
`;var H=`
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
`,U=n.default.textarea`
  ${H}
`,qe=(0,n.default)(U)`
  background-color: #111111;
`,Je=(0,n.default)(U)`
  background-color: #0050EF;
`,Ye=(0,n.default)(U)`
  background-color: #500000;
`,W=n.default.input`
  ${H}
`,Xe=(0,n.default)(W)`
  background-color: #111111;
`,Ze=(0,n.default)(W)`
  background-color: #0050EF;
`,Qe=(0,n.default)(W)`
  background-color: #500000;
`,$e=n.default.button`
  ${H}
`,et=`
  margin-left: 10%;
  margin-right: 10%;
  border: 5px solid #000000;
  background-color: #000000;
  cursor: pointer;  
  transition: 0.5s all ease-out;
`;(0,n.default)($e)`
  ${et}
  &:hover {
    background-color: #0050EF;
    color: #FFFFFF;
  }
`,(0,n.default)($e)`
  ${et}
  &:hover {
    background-color: #500000;
    color: #FFFFFF;
  }
`;var G=`
  color: #FFFFFF;
  cursor: pointer;
`,tt=(0,n.default)(s.Save)`
  ${G}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,nt=(0,n.default)(s.EyeClosed)`
  ${G}
  transition: 0.5s all ease-out;
`,rt=(0,n.default)(s.Eye)`
  ${G}
  transition: 0.5s all ease-out;
  color: #0050EF;
`,it=(0,n.default)(s.Search)`
  ${G}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,at=(0,n.default)(s.Euro)`
  color: #FFFFFF;
  transition: 0.5s all ease-out;
`,ot=(0,n.default)(s.ChevronLeft)`
  ${G}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,st=(0,n.default)(s.ChevronRight)`
  ${G}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,ct=(0,n.default)(s.LogIn)`
  ${G}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,lt=(0,n.default)(s.Pencil)`
  ${G}
`,ut=(0,n.default)(s.Pencil)`
  ${G}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,dt=(0,n.default)(s.Pencil)`
  color: #0050EF;
  cursor: pointer;
`,ft=(0,n.default)(s.Trash2)`
  ${G}
`,pt=(0,n.default)(s.Trash2)`
  color: #500000;
  cursor: pointer;
`,mt=(0,n.default)(c.FontAwesomeIcon)`
  color: #FFFFFF;
`,ht=(0,n.default)(c.FontAwesomeIcon)`
  ${G}
  color: #0050EF;
`,gt=(0,n.default)(s.Download)`
  ${G}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`;(0,n.default)(s.X)`
  ${G}
  transition: 0.5s all ease-out;
  &:hover {
    color: #500000;
  }
`;var _t=(0,n.default)(s.Trash2)`
  ${G}
  transition: 0.5s all ease-out;
  &:hover {
    color: #500000;
  }
`,K=n.default.select`
  cursor: pointer;
  width: 100%;
  border-radius: 40px;
  background-color: #0050EF;
  border: 5px solid #000000;
  color: #FFFFFF;
  text-align: center;
`,vt=(0,n.default)(K)`
  background-color: #111111;
`,yt=(0,n.default)(K)`
  background-color: #0050EF;
`,bt=(0,n.default)(K)`
  background-color: #500000;
`;n.default.option`
  background-color: #0050EF;
  &:hover {
    background-color: #0050EF;
  }
`;var q={StyledPencilNotSelected:lt,StyledPencilSelected:dt,grandezzaIcona:50,StyledTrashNotSelected:ft,StyledTrashSelected:pt,StyledColOperazioni:Ke,StyledSaveNotSelected:tt,StyledSearchNotSelected:it,StyledArrowLeftNotSelected:ot,StyledArrowRightNotSelected:st,StyledFileIconNotSelected:mt,StyledDownloadNotSelected:gt,StyledTrashNotSelected2:_t,StyledLoginNotSelected:ct,StyledPencilNotSelectedModificaProfilo:ut,StyledInputBlock:Xe,StyledInputModifica:Ze,StyledInputElimina:Qe,StyledTextAreaBlock:qe,StyledTextAreaModifica:Je,StyledTextAreaElimina:Ye,StyledRow:Ge,StyledCol:V,StyledSpanErrore:n.default.span`
  color: #FF0000;
  border-radius: 40px;
  padding: 10px;
`,StyledSelectBlock:vt,StyledSelectModifica:yt,StyledSelectElimina:bt,StyledEyeClosedNotSelected:nt,StyledEyeOpenNotSelected:rt,StyledEuroNotSelected:at,StyledFileIconSelected2:ht},xt=(e,t,n)=>{e.preventDefault();let{name:r,value:i,id:a}=e.target,o=!0;[`note_cliente`,`note_servizio`,`note_lavoro`,`note_spesa`].includes(a)?i.length>200&&(o=!1):[`descrizione_spesa`].includes(a)?i.length>1e3&&(o=!1):[`nome_servizio`].includes(a)?i.length>100&&(o=!1):[`prezzo_servizio`,`totale_spesa`].includes(a)?(!(!isNaN(i.substr(0,i))&&Number(i)===parseFloat(i))||i<0)&&(o=!1):[`email_cliente`].includes(a)?i.length>254&&(o=!1):[`contatto_cliente`].includes(a)&&(i===``?o=!0:(!/^\d+$/.test(i)||!(i.startsWith(`0`)&&i.length<=11||i.startsWith(`3`)&&i.length<=10))&&(o=!1)),o===!0&&n(e=>({...e,[t]:i}))},St=e=>{[`giorno_spesa`,`giorno_lavoro`].includes(e.target.id)?e.target.type=`date`:[`prezzo_servizio`,`totale_spesa`].includes(e.target.id)&&(e.target.value=e.target.value.substr(0,e.target.value.length-2))};function Ct({campi:e,indici:n,eseguiSalvataggio:r}){M(1,!0,q),N(1,!0,q);let i=(e,t)=>{e.preventDefault(),alert(t)};return(0,P.jsxs)(q.StyledRow,{children:[(0,P.jsx)(F,{eseguiSalvataggio:r,vistaItem:`row`,StyledComponents:q}),n.map(n=>{let r=e.type[n]?M(1,!0,q):N(1,!0,q);return(0,P.jsx)(t.Fragment,{children:(0,P.jsx)(q.StyledCol,{children:(0,P.jsxs)(`div`,{style:{width:`100%`},children:[(0,P.jsxs)(q.StyledRow,{children:[(0,P.jsx)(r,{rows:1,style:[`prezzo`,`totale`].includes(e.name[n])?{maxWidth:`90%`}:null,name:e.name[n],id:e.id[n],type:e.type[n],step:e.step[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur,onContextMenu:t=>i(t,e.placeholder[n])}),[`prezzo`,`totale`].includes(e.name[n])&&(0,P.jsx)(q.StyledEuroNotSelected,{style:{maxWidth:`10%`,marginLeft:`-6px`},size:q.grandezzaIcona,onClick:null}),e.options[n]]}),e.errore[n]!==``&&(0,P.jsx)(q.StyledSpanErrore,{children:e.errore[n]})]})})},n)})]})}function wt({campi:e,indici:n,handleSearch:r}){let[i,a]=(0,t.useState)([!0,!0,!0,!0,!0,!0,!0,!0]),[o,s]=(0,t.useState)(!0);M(1,!0,q),N(1,!0,q);let c=(e,t)=>{e.preventDefault(),alert(t)};return(0,P.jsxs)(q.StyledRow,{children:[(0,P.jsx)(I,{visibilita:i,setVisibilita:a,arrowUp:o,setArrowUp:s,handleSearch:r,vistaItem:`row`,StyledComponents:q}),n.map(n=>{let r=e.type[n]?M(1,!0,q):N(1,!0,q);return(0,P.jsx)(t.Fragment,{children:(0,P.jsx)(q.StyledCol,{children:(0,P.jsx)(`div`,{style:{width:`100%`},children:(0,P.jsx)(q.StyledRow,{children:i[n]&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(r,{style:[`prezzo_min`,`prezzo_max`,`totale_min`,`totale_max`].includes(e.name[n])?{maxWidth:`90%`}:null,rows:1,name:e.name[n],id:e.id[n],type:e.type[n],step:e.step[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur,onContextMenu:t=>c(t,e.placeholder[n])}),[`prezzo_min`,`prezzo_max`,`totale_min`,`totale_max`].includes(e.name[n])&&(0,P.jsx)(q.StyledEuroNotSelected,{style:{maxWidth:`20%`,marginLeft:`-6px`},size:q.grandezzaIcona,onClick:null})]})})})})},n)})]})}function Tt({item:e,campi:n,indici:r,selectOperation:i,tipoItem:a,handleBlurItem:o}){let s=M(n.tipoSelezione,!1,q),[c,l]=(0,t.useState)(()=>r.reduce((e,t)=>({...e,[t]:n.value[t]}),{})),u=(e,t)=>{e.preventDefault(),alert(t)};return(0,P.jsxs)(q.StyledRow,{children:[(0,P.jsx)(Pe,{selectOperation:i,item:e,vistaItem:`row`,StyledComponents:q}),(0,P.jsx)(q.StyledCol,{children:(0,P.jsx)(`div`,{style:{width:`100%`},children:(0,P.jsx)(q.StyledRow,{children:(0,P.jsx)(s,{rows:1,name:`header`,value:n.header,placeholder:n.header,readOnly:!0})})})}),r.map(r=>{let i=n.type[r]?M(n.tipoSelezione,n.valoreModificabile[r],q):N(n.tipoSelezione,n.valoreModificabile[r],q);return(0,P.jsx)(t.Fragment,{children:(0,P.jsx)(q.StyledCol,{children:(0,P.jsxs)(`div`,{style:{width:`100%`},children:[(0,P.jsxs)(q.StyledRow,{children:[(0,P.jsx)(i,{style:[`prezzo`,`totale`].includes(n.name[r])?{maxWidth:`80%`}:null,rows:1,name:n.name[r],id:n.id[r],type:n.type[r],step:n.step[r],value:c[r],placeholder:n.placeholder[r],onChange:e=>xt(e,r,l),onBlur:t=>o(t,e),onClick:e=>St(e),readOnly:e.tipo_selezione!==1,onContextMenu:e=>u(e,n.placeholder[r])}),[`prezzo`,`totale`].includes(n.name[r])&&(0,P.jsx)(q.StyledEuroNotSelected,{style:{maxWidth:`20%`,marginLeft:`-6px`},size:q.grandezzaIcona}),n.options[r]]}),n.errore[r]&&(0,P.jsx)(q.StyledSpanErrore,{children:n.errore[r]})]})})},r)})]})}function Et({campi:e,indici:n,ottieniFileRangePDF:r,ottieniFileRangeExcel:i,eliminaItemsRange:a}){let o=(e,t)=>{e.preventDefault(),alert(t)};return(0,P.jsxs)(q.StyledRow,{children:[(0,P.jsx)(B,{ottieniFileRangePDF:r,ottieniFileRangeExcel:i,eliminaItemsRange:a,vistaItem:`row`,StyledComponents:q}),n.map(n=>{let r=e.type[n]?M(1,!0,q):N(1,!0,q);return(0,P.jsx)(t.Fragment,{children:(0,P.jsx)(q.StyledCol,{children:(0,P.jsx)(`div`,{style:{width:`100%`},children:(0,P.jsx)(q.StyledRow,{children:(0,P.jsx)(r,{rows:1,name:e.name[n],id:e.id[n],type:e.type[n],step:e.step[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur,onContextMenu:t=>o(t,e.placeholder[n])})})})})},n)})]})}function Dt({campi:e,indici:n,eseguiLogin:r}){let[i,a]=(0,t.useState)(`password`),o=e=>{e.preventDefault(),a(i===`text`?`password`:`text`)},s=(e,t)=>{e.preventDefault(),alert(t)};return(0,P.jsxs)(q.StyledRow,{children:[(0,P.jsx)(R,{eseguiLogin:r,vistaItem:`row`,StyledComponents:q}),n.map(n=>{let r=e.type[n]?M(1,!0,q):N(1,!0,q),a=i===`password`?q.StyledEyeClosedNotSelected:q.StyledEyeOpenNotSelected;return(0,P.jsx)(t.Fragment,{children:(0,P.jsx)(q.StyledCol,{children:(0,P.jsxs)(`div`,{style:{width:`100%`},children:[(0,P.jsxs)(q.StyledRow,{children:[(0,P.jsx)(r,{style:e.name[n]===`password`?{maxWidth:`80%`}:null,rows:1,name:e.name[n],id:e.id[n],type:e.name[n]===`password`?i:e.type[n],step:e.step[n],min:e.min[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur,onContextMenu:t=>s(t,e.placeholder[n])}),e.name[n]===`password`&&(0,P.jsx)(a,{style:{maxWidth:`20%`,marginLeft:`-6px`},size:q.grandezzaIcona,onClick:o})]}),e.options[n],e.errore[n]&&(0,P.jsx)(q.StyledSpanErrore,{children:e.errore[n]})]})})},n)})]})}function Ot({campi:e,indici:n,eseguiModificaProfilo:r}){let[i,a]=(0,t.useState)(`password`),[o,s]=(0,t.useState)(`password`),[c,l]=(0,t.useState)(`password`),u=(e,t)=>{e.preventDefault(),t===`password_attuale`?a(i===`text`?`password`:`text`):t===`nuova_password`?s(o===`text`?`password`:`text`):t===`conferma_nuova_password`&&l(c===`text`?`password`:`text`)};return(0,P.jsxs)(q.StyledRow,{children:[(0,P.jsx)(z,{eseguiModificaProfilo:r,vistaItem:`row`,StyledComponents:q}),n.map(n=>{let r=e.type[n]?M(1,!0,q):N(1,!0,q),a=e.name[n]===`password_attuale`&&i===`password`||e.name[n]===`nuova_password`&&o===`password`||e.name[n]===`conferma_nuova_password`&&c===`password`?q.StyledEyeClosedNotSelected:q.StyledEyeOpenNotSelected;return(0,P.jsx)(t.Fragment,{children:(0,P.jsx)(q.StyledCol,{children:(0,P.jsxs)(`div`,{style:{width:`100%`},children:[(0,P.jsxs)(q.StyledRow,{children:[(0,P.jsx)(r,{style:e.name[n].includes(`password`)?{maxWidth:`80%`}:null,rows:1,name:e.name[n],id:e.id[n],type:e.name[n].includes(`password`)?e.name[n]===`password_attuale`?i:e.name[n]===`nuova_password`?o:c:e.type[n],step:e.step[n],min:e.min[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur,onContextMenu:t=>handleRightClick(t,e.placeholder[n])}),e.name[n].includes(`password`)&&(0,P.jsx)(a,{style:{maxWidth:`20%`,marginLeft:`-6px`},size:q.grandezzaIcona,onClick:t=>u(t,e.name[n])})]}),e.options[n],e.errore[n]&&(0,P.jsx)(q.StyledSpanErrore,{children:e.errore[n]})]})})},n)})]})}function kt({datiRicerca:e,setDatiRicerca:t,handleInputChange:n,eseguiRicerca:r,lingua:i}){return(0,P.jsxs)(q.StyledRow,{children:[(0,P.jsx)(L,{eseguiRicerca:e=>r(e),vistaItem:`row`,StyledComponents:q}),(0,P.jsx)(q.StyledCol,{children:(0,P.jsx)(`div`,{style:{width:`100%`},children:(0,P.jsx)(q.StyledRow,{children:(0,P.jsx)(q.StyledInputBlock,{rows:1,name:`header`,value:i===`italiano`?`Ricerca entrate e uscite`:`Searching for inputs and outputs`,placeholder:i===`italiano`?`Ricerca entrate e uscite`:`Searching for inputs and outputs`,readOnly:!0})})})}),(0,P.jsx)(q.StyledCol,{children:(0,P.jsx)(`div`,{style:{width:`100%`},children:(0,P.jsx)(q.StyledInputModifica,{rows:1,name:`primo_anno`,id:`primo_anno`,type:`number`,step:1,value:e.primo_anno,placeholder:`Primo anno`,onChange:e=>n(e,t),onContextMenu:e=>handleRightClick(e,`Primo anno`)})})}),(0,P.jsx)(q.StyledCol,{children:(0,P.jsx)(`div`,{style:{width:`100%`},children:(0,P.jsxs)(q.StyledSelectModifica,{name:`ultimo_anno`,id:`ultimo_anno`,onContextMenu:e=>handleRightClick(e,`Ultimo anno`),value:e.ultimo_anno,onChange:e=>n(e,t),children:[(0,P.jsx)(`option`,{value:parseInt(e.primo_anno)+1,children:parseInt(e.primo_anno)+1}),(0,P.jsx)(`option`,{value:parseInt(e.primo_anno)+2,children:parseInt(e.primo_anno)+2}),(0,P.jsx)(`option`,{value:parseInt(e.primo_anno)+3,children:parseInt(e.primo_anno)+3}),(0,P.jsx)(`option`,{value:parseInt(e.primo_anno)+4,children:parseInt(e.primo_anno)+4}),(0,P.jsx)(`option`,{value:parseInt(e.primo_anno)+5,children:parseInt(e.primo_anno)+5})]})})})]})}var At=(0,n.default)(r.default)`
  width: 18rem;
  background-color: transparent;
  overflow: hidden;
  border-radius: 40px;
  color: white;
  text-align: center;
  padding: 0;
  border: transparent;
`,jt=(0,n.default)(a.default)`
  display: flex;
  flex-wrap: wrap;
`,Mt=(0,n.default)(o.default)`
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
`,Nt=(0,n.default)(r.default.Header)`
  color: #ffffff;
  background-color: #000000;
  border: 5px solid #000000;
  min-height: 70px;
`,Pt=(0,n.default)(i.default.Item)`
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #000000;
  min-height: 70px;
`,Ft=n.default.div`
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
`,It=(0,n.default)(J)`
  background-color: #111111;
`,Lt=(0,n.default)(J)`
  background-color: #0050EF;
`,Rt=(0,n.default)(J)`
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
`,zt=(0,n.default)(Y)`
  background-color: #111111;
`,Bt=(0,n.default)(Y)`
  background-color: #0050EF;
`,Vt=(0,n.default)(Y)`
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
`;var Ht=(0,n.default)(s.Save)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,Ut=(0,n.default)(s.EyeClosed)`
  ${X}
  transition: 0.5s all ease-out;
`,Wt=(0,n.default)(s.Eye)`
  ${X}
  transition: 0.5s all ease-out;
  color: #0050EF;
`,Gt=(0,n.default)(s.Search)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,Kt=(0,n.default)(s.Euro)`
  color: #FFFFFF;
  transition: 0.5s all ease-out;
`,qt=(0,n.default)(s.ChevronUp)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,Jt=(0,n.default)(s.ChevronDown)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,Yt=(0,n.default)(s.LogIn)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,Xt=(0,n.default)(s.Pencil)`
  ${X}
`;(0,n.default)(s.Pencil)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`;var Zt=(0,n.default)(s.Pencil)`
  color: #0050EF;
  cursor: pointer;
`,Qt=(0,n.default)(s.Trash2)`
  ${X}
`,$t=(0,n.default)(s.Trash2)`
  color: #500000;
  cursor: pointer;
`,en=(0,n.default)(c.FontAwesomeIcon)`
  color: #FFFFFF;
`,tn=(0,n.default)(c.FontAwesomeIcon)`
  ${X}
  color: #0050EF;
`,nn=(0,n.default)(s.Download)`
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
`;var rn=(0,n.default)(s.Pencil)`
  ${X}
  transition: 0.5s all ease-out;
  &:hover {
    color: #0050EF;
  }
`,an=(0,n.default)(s.Trash2)`
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
`,on=(0,n.default)(Z)`
  background-color: #111111;
`,sn=(0,n.default)(Z)`
  background-color: #0050EF;
`,cn=(0,n.default)(Z)`
  background-color: #500000;
`;n.default.option`

  background-color: #0050EF;
  &:hover {
    background-color: #0050EF;
  }
`;var Q={StyledPencilNotSelected:Xt,StyledPencilSelected:Zt,grandezzaIcona:50,StyledTrashNotSelected:Qt,StyledTrashSelected:$t,StyledListGroupItem:Pt,StyledRow:jt,StyledCol:Mt,StyledSaveNotSelected:Ht,StyledEyeOpenNotSelected:Wt,StyledEyeClosedNotSelected:Ut,StyledSearchNotSelected:Gt,StyledArrowTopNotSelected:qt,StyledArrowBottomNotSelected:Jt,StyledFileIconNotSelected:en,StyledDownloadNotSelected:nn,StyledTrashNotSelected2:an,StyledLoginNotSelected:Yt,StyledPencilNotSelected2:rn,StyledSelectBlock:on,StyledSelectModifica:sn,StyledSelectElimina:cn,StyledInputBlock:zt,StyledInputModifica:Bt,StyledInputElimina:Vt,StyledTextAreaBlock:It,StyledTextAreaModifica:Lt,StyledTextAreaElimina:Rt,StyledCard:At,StyledCardHeader:Nt,SlideContainer:Ft,StyledSpanErrore:n.default.span`
  color: #FFFFFF;
  padding: 10px;
`,StyledEuroNotSelected:Kt,StyledFileIconSelected2:tn};function $(e,t,n){return t===0?`#FFFFFF`:e<0?`#FF0000`:e>0?`#00FF00`:`#FFFFFF`}var ln=e=>e.totale_gennaio+e.totale_febbraio+e.totale_marzo+e.totale_aprile+e.totale_maggio+e.totale_giugno+e.totale_luglio+e.totale_agosto+e.totale_settembre+e.totale_ottobre+e.totale_novembre+e.totale_dicembre,un=e=>parseInt(e.quantita_gennaio)+parseInt(e.quantita_febbraio)+parseInt(e.quantita_marzo)+parseInt(e.quantita_aprile)+parseInt(e.quantita_maggio)+parseInt(e.quantita_giugno)+parseInt(e.quantita_luglio)+parseInt(e.quantita_agosto)+parseInt(e.quantita_settembre)+parseInt(e.quantita_ottobre)+parseInt(e.quantita_novembre)+parseInt(e.quantita_dicembre);function dn({campi:e,indici:n,eseguiSalvataggio:r}){let i=(e,t)=>{e.preventDefault(),alert(t)};return(0,P.jsx)(`center`,{children:(0,P.jsxs)(Q.StyledCard,{children:[(0,P.jsx)(Q.StyledCardHeader,{children:e.header}),(0,P.jsx)(Q.SlideContainer,{style:{maxHeight:`2000px`},children:n.map(n=>{let r=e.type[n]?M(1,!0,Q):N(1,!0,Q);return(0,P.jsxs)(t.Fragment,{children:[(0,P.jsxs)(Q.StyledRow,{children:[(0,P.jsx)(r,{rows:1,name:e.name[n],id:e.id[n],type:e.type[n],step:e.step[n],value:e.value[n]===` €`?``:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur,onContextMenu:t=>i(t,e.placeholder[n])}),e.options[n]]}),e.errore[n]!==``&&(0,P.jsx)(Q.StyledSpanErrore,{children:e.errore[n]})]},n)})}),(0,P.jsx)(F,{eseguiSalvataggio:r,vistaItem:`card`,StyledComponents:Q})]})})}function fn({campi:e,indici:n,handleSearch:r}){let[i,a]=(0,t.useState)(!0),[o,s]=(0,t.useState)(!0),c=i?`2000px`:`0px`;M(1,!0,Q),N(1,!0,Q);let l=(e,t)=>{e.preventDefault(),alert(t)};return(0,P.jsx)(`center`,{children:(0,P.jsxs)(Q.StyledCard,{children:[(0,P.jsx)(Q.StyledCardHeader,{children:e.header}),(0,P.jsx)(Q.SlideContainer,{style:{maxHeight:`${c}`},children:n.map(n=>{let r=e.type[n]?M(1,!0,Q):N(1,!0,Q);return(0,P.jsx)(t.Fragment,{children:(0,P.jsx)(Q.StyledRow,{children:(0,P.jsx)(r,{rows:1,name:e.name[n],id:e.id[n],type:e.value[n],value:e.value[n]===` €`?``:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur,onContextMenu:t=>l(t,e.placeholder[n])})})},n)})}),(0,P.jsx)(I,{setIsVisible:a,arrowUp:o,setArrowUp:s,handleSearch:r,vistaItem:`card`,StyledComponents:Q})]})})}function pn({item:e,campi:n,indici:r,selectOperation:i,handleBlurItem:a}){let o=(0,t.useRef)([]),[s,c]=(0,t.useState)(()=>r.reduce((e,t)=>({...e,[t]:n.value[t]}),{})),l=(e,t)=>{e.preventDefault(),alert(t)};return(0,P.jsxs)(Q.StyledCard,{children:[(0,P.jsx)(Q.StyledCardHeader,{children:n.header}),(0,P.jsx)(Q.SlideContainer,{children:r.map(r=>{let i=n.type[r]?M(n.tipoSelezione,n.valoreModificabile[r],Q):N(n.tipoSelezione,n.valoreModificabile[r],Q);return(0,P.jsxs)(t.Fragment,{children:[(0,P.jsxs)(Q.StyledRow,{children:[(0,P.jsx)(i,{ref:e=>o.current[r]=e,rows:1,name:n.name[r],id:n.id[r],type:n.type[r],step:n.step[r],value:s[r],placeholder:n.placeholder[r],onChange:e=>xt(e,r,c),onBlur:t=>a(t,e),onClick:e=>St(e),readOnly:e.tipo_selezione!==1,onContextMenu:e=>l(e,n.placeholder[r])}),n.options[r]]}),n.errore[r]&&(0,P.jsx)(Q.StyledSpanErrore,{children:n.errore[r]})]},`input-${r}`)})}),(0,P.jsx)(Pe,{selectOperation:i,item:e,vistaItem:`card`,StyledComponents:Q})]})}function mn({campi:e,indici:n,ottieniFileRangePDF:r,ottieniFileRangeExcel:i,eliminaItemsRange:a}){let o=(e,t)=>{e.preventDefault(),alert(t)};return(0,P.jsx)(`center`,{children:(0,P.jsxs)(Q.StyledCard,{children:[(0,P.jsx)(Q.StyledCardHeader,{children:e.header}),(0,P.jsx)(Q.SlideContainer,{style:{maxHeight:`2000px`},children:n.map(n=>(0,P.jsx)(t.Fragment,{children:(0,P.jsx)(e.type[n]?M(1,!0,Q):N(1,!0,Q),{rows:1,name:e.name[n],id:e.id[n],type:e.type[n],step:e.step[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur,onContextMenu:t=>o(t,e.placeholder[n])},n)},n))}),(0,P.jsx)(B,{ottieniFileRangePDF:r,ottieniFileRangeExcel:i,eliminaItemsRange:a,vistaItem:`card`,StyledComponents:Q})]})})}function hn({campi:e,indici:n,eseguiLogin:r}){let[i,a]=(0,t.useState)(`password`),o=e=>{e.preventDefault(),a(i===`text`?`password`:`text`)},s=(e,t)=>{e.preventDefault(),alert(t)};return(0,P.jsx)(`center`,{children:(0,P.jsxs)(Q.StyledCard,{children:[(0,P.jsx)(Q.StyledCardHeader,{children:e.header}),(0,P.jsx)(Q.SlideContainer,{style:{maxHeight:`2000px`},children:n.map(n=>{let r=e.type[n]?M(1,!0,Q):N(1,!0,Q),a=i===`password`?Q.StyledEyeClosedNotSelected:Q.StyledEyeOpenNotSelected;return(0,P.jsxs)(t.Fragment,{children:[(0,P.jsxs)(Q.StyledRow,{children:[(0,P.jsx)(r,{style:e.name[n]===`password`?{maxWidth:`80%`}:null,rows:1,name:e.name[n],id:e.id[n],type:e.name[n]===`password`?i:e.type[n],step:e.step[n],min:e.min[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur,onContextMenu:t=>s(t,e.placeholder[n])}),e.name[n]===`password`&&(0,P.jsx)(a,{style:{maxWidth:`20%`,marginLeft:`-6px`,marginTop:`13px`},size:Q.grandezzaIcona,onClick:o})]}),e.options[n],e.errore[n]&&(0,P.jsx)(Q.StyledSpanErrore,{children:e.errore[n]})]},n)})}),(0,P.jsx)(R,{eseguiLogin:r,vistaItem:`card`,StyledComponents:Q})]})})}function gn({campi:e,indici:n,eseguiModificaProfilo:r}){let[i,a]=(0,t.useState)(`password`),[o,s]=(0,t.useState)(`password`),[c,l]=(0,t.useState)(`password`),u=(e,t)=>{e.preventDefault(),t===`password_attuale`?a(i===`text`?`password`:`text`):t===`nuova_password`?s(o===`text`?`password`:`text`):t===`conferma_nuova_password`&&l(c===`text`?`password`:`text`)};return(0,P.jsx)(`center`,{children:(0,P.jsxs)(Q.StyledCard,{children:[(0,P.jsx)(Q.StyledCardHeader,{children:e.header}),(0,P.jsx)(Q.SlideContainer,{style:{maxHeight:`2000px`},children:n.map(n=>{let r=e.type[n]?M(1,!0,Q):N(1,!0,Q),a=e.name[n]===`password_attuale`&&i===`password`||e.name[n]===`nuova_password`&&o===`password`||e.name[n]===`conferma_nuova_password`&&c===`password`?Q.StyledEyeClosedNotSelected:Q.StyledEyeOpenNotSelected;return(0,P.jsxs)(t.Fragment,{children:[(0,P.jsxs)(Q.StyledRow,{children:[(0,P.jsx)(r,{style:e.name[n].includes(`password`)?{maxWidth:`80%`}:null,rows:1,name:e.name[n],id:e.id[n],type:e.name[n].includes(`password`)?e.name[n]===`password_attuale`?i:e.name[n]===`nuova_password`?o:c:e.type[n],step:e.step[n],min:e.min[n],value:e.value[n],placeholder:e.placeholder[n],onChange:e.onChange,onClick:e.onClick,onBlur:e.onBlur,onContextMenu:t=>handleRightClick(t,e.placeholder[n])}),e.name[n].includes(`password`)&&(0,P.jsx)(a,{style:{maxWidth:`20%`,marginLeft:`-6px`,marginTop:`13px`},size:Q.grandezzaIcona,onClick:t=>u(t,e.name[n])})]}),e.options[n],e.errore[n]&&(0,P.jsx)(Q.StyledSpanErrore,{children:e.errore[n]})]},n)})}),(0,P.jsx)(z,{eseguiModificaProfilo:r,vistaItem:`card`,StyledComponents:Q})]})})}function _n({nome:e,img:t,id:n,onClickWidget:r,backgroundColor:i}){return(0,P.jsxs)(u.Card,{style:{width:`300px`,height:`400px`,backgroundColor:i,borderRadius:`50px`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`},onClick:e=>{r(e,n)},draggable:!1,children:[(0,P.jsx)(u.Card.Img,{style:{width:`220px`,height:`220px`,borderRadius:`20px`,marginTop:`40px`,marginBottom:`20px`,pointerEvents:`none`},variant:`top`,src:t}),(0,P.jsx)(u.Card.Body,{children:(0,P.jsx)(u.Card.Title,{style:{color:`#FFFFFF`,textAlign:`center`},children:e})})]})}function vn({entrateItems:e,lingua:t,etichettaIta:n,etichettaEng:r}){return(0,P.jsxs)(u.Card,{style:{display:`inline-block`,backgroundColor:`rgba(0, 0, 0, 0.5)`,borderRadius:`50px`,paddingLeft:`50px`,paddingRight:`50px`,paddingBottom:`50px`,overflowX:`auto`},children:[(0,P.jsx)(u.Card.Body,{children:(0,P.jsx)(`center`,{children:(0,P.jsx)(u.Card.Title,{style:{color:`#FFFFFF`},children:t===`italiano`?n:r})})}),(0,P.jsx)(`center`,{children:(0,P.jsxs)(u.Table,{striped:!0,bordered:!0,hover:!0,variant:`dark`,style:{borderRadius:`50px`,marginTop:`0`,marginBottom:`10px`,textAlign:`center`},children:[(0,P.jsx)(`thead`,{children:(0,P.jsxs)(`tr`,{children:[(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`ANNO`:`YEAR`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`GEN`:`JAN`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:`FEB`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:`MAR`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:`APR`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`MAG`:`MAY`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`GIU`:`JUN`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`LUG`:`JUL`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`AGO`:`AUG`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`SET`:`SEP`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`OTT`:`OCT`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:`NOV`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`DIC`:`DEC`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`TOT ENTRATE`:`TOT REVENUE`})]})}),(0,P.jsx)(`tbody`,{children:e.map((e,t)=>t>1&&(0,P.jsx)(`tr`,{children:Object.values(e).map((e,t)=>(0,P.jsx)(`td`,{style:{color:$(e,t,`entrata`),fontWeight:t===0?`bold`:null},children:t>0?parseFloat(e).toFixed(2)+` €`:e},t))},t))}),(0,P.jsx)(`tbody`,{children:(0,P.jsx)(`tr`,{children:Object.values(e[0]).map((e,t)=>(0,P.jsx)(`td`,{style:{color:$(e,t,`entrata`),fontWeight:t===0?`bold`:null},children:t>0?parseFloat(e).toFixed(2)+` €`:e},t))})})]})})]})}function yn({entrateItems:e,lingua:n,tipoItemIta:r,tipoItemEng:i,etichettaIta:a,etichettaEng:o}){let[s,c]=(0,t.useState)(0);return(0,P.jsxs)(u.Card,{style:{display:`inline-block`,backgroundColor:`rgba(0, 0, 0, 0.5)`,borderRadius:`50px`,paddingLeft:`50px`,paddingRight:`50px`,paddingBottom:`50px`,overflowX:`auto`},children:[(0,P.jsx)(u.Card.Body,{children:(0,P.jsx)(`center`,{children:(0,P.jsx)(u.Card.Title,{style:{color:`#FFFFFF`},children:n===`italiano`?a:o})})}),(0,P.jsx)(`center`,{children:(0,P.jsxs)(u.Table,{striped:!0,bordered:!0,hover:!0,variant:`dark`,style:{borderRadius:`50px`,marginTop:`0`,marginBottom:`10px`,textAlign:`center`},children:[(0,P.jsx)(`thead`,{}),(0,P.jsx)(`tbody`,{children:e.map((a,o)=>(0,P.jsxs)(t.Fragment,{children:[(o===0||e[o].anno!==e[o-1].anno)&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`tr`,{children:(0,P.jsxs)(`th`,{colSpan:14,children:[n===`italiano`?`ANNO`:`YEAR`,` = `,a.anno]})}),(0,P.jsxs)(`tr`,{children:[(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?r:i}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`GEN`:`JAN`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:`FEB`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:`MAR`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:`APR`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`MAG`:`MAY`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`GIU`:`JUN`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`LUG`:`JUL`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`AGO`:`AUG`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`SET`:`SEP`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`OTT`:`OCT`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:`NOV`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`DIC`:`DEC`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`TOT ENTRATE`:`TOT REVENUE`})]})]}),(0,P.jsxs)(`tr`,{children:[(0,P.jsx)(`td`,{style:{color:`#FFFFFF`,fontWeight:`bold`},children:a.nome}),(0,P.jsxs)(`td`,{style:{color:$(a.totale_gennaio,1,`entrata`),fontWeight:`bold`},children:[`x `,a.quantita_gennaio,` = `,parseFloat(a.totale_gennaio).toFixed(2)+` €`]}),(0,P.jsxs)(`td`,{style:{color:$(a.totale_febbraio,1,`entrata`),fontWeight:`bold`},children:[`x `,a.quantita_febbraio,` = `,parseFloat(a.totale_febbraio).toFixed(2)+` €`]}),(0,P.jsxs)(`td`,{style:{color:$(a.totale_marzo,1,`entrata`),fontWeight:`bold`},children:[`x `,a.quantita_marzo,` = `,parseFloat(a.totale_marzo).toFixed(2)+` €`]}),(0,P.jsxs)(`td`,{style:{color:$(a.totale_aprile,1,`entrata`),fontWeight:`bold`},children:[`x `,a.quantita_aprile,` = `,parseFloat(a.totale_aprile).toFixed(2)+` €`]}),(0,P.jsxs)(`td`,{style:{color:$(a.totale_maggio,1,`entrata`),fontWeight:`bold`},children:[`x `,a.quantita_maggio,` = `,parseFloat(a.totale_maggio).toFixed(2)+` €`]}),(0,P.jsxs)(`td`,{style:{color:$(a.totale_giugno,1,`entrata`),fontWeight:`bold`},children:[`x `,a.quantita_giugno,` = `,parseFloat(a.totale_giugno).toFixed(2)+` €`]}),(0,P.jsxs)(`td`,{style:{color:$(a.totale_luglio,1,`entrata`),fontWeight:`bold`},children:[`x `,a.quantita_luglio,` = `,parseFloat(a.totale_luglio).toFixed(2)+` €`]}),(0,P.jsxs)(`td`,{style:{color:$(a.totale_agosto,1,`entrata`),fontWeight:`bold`},children:[`x `,a.quantita_agosto,` = `,parseFloat(a.totale_agosto).toFixed(2)+` €`]}),(0,P.jsxs)(`td`,{style:{color:$(a.totale_settembre,1,`entrata`),fontWeight:`bold`},children:[`x `,a.quantita_settembre,` = `,parseFloat(a.totale_settembre).toFixed(2)+` €`]}),(0,P.jsxs)(`td`,{style:{color:$(a.totale_ottobre,1,`entrata`),fontWeight:`bold`},children:[`x `,a.quantita_ottobre,` = `,parseFloat(a.totale_ottobre).toFixed(2)+` €`]}),(0,P.jsxs)(`td`,{style:{color:$(a.totale_novembre,1,`entrata`),fontWeight:`bold`},children:[`x `,a.quantita_novembre,` = `,parseFloat(a.totale_novembre).toFixed(2)+` €`]}),(0,P.jsxs)(`td`,{style:{color:$(a.totale_dicembre,1,`entrata`),fontWeight:`bold`},children:[`x `,a.quantita_dicembre,` = `,parseFloat(a.totale_dicembre).toFixed(2)+` €`]}),(0,P.jsxs)(`td`,{style:{color:$(ln(a),1,`entrata`),fontWeight:`bold`},children:[`x `,un(a),` = `,parseFloat(ln(a)).toFixed(2)+` €`]})]})]},o))})]})})]})}function bn({usciteItems:e,lingua:t,etichettaIta:n,etichettaEng:r}){return(0,P.jsxs)(u.Card,{style:{display:`inline-block`,backgroundColor:`rgba(0, 0, 0, 0.5)`,borderRadius:`50px`,paddingLeft:`50px`,paddingRight:`50px`,paddingBottom:`50px`,overflowX:`auto`},children:[(0,P.jsx)(u.Card.Body,{children:(0,P.jsx)(`center`,{children:(0,P.jsx)(u.Card.Title,{style:{color:`#FFFFFF`},children:t===`italiano`?n:r})})}),(0,P.jsx)(`center`,{children:(0,P.jsxs)(u.Table,{striped:!0,bordered:!0,hover:!0,variant:`dark`,style:{borderRadius:`50px`,marginTop:`0`,marginBottom:`10px`,textAlign:`center`},children:[(0,P.jsx)(`thead`,{children:(0,P.jsxs)(`tr`,{children:[(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`ANNO`:`YEAR`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`GEN`:`JAN`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:`FEB`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:`MAR`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:`APR`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`MAG`:`MAY`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`GIU`:`JUN`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`LUG`:`JUL`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`AGO`:`AUG`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`SET`:`SEP`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`OTT`:`OCT`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:`NOV`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`DIC`:`DEC`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:t===`italiano`?`TOT USCITE`:`TOT EXIT`})]})}),(0,P.jsx)(`tbody`,{children:e.map((e,t)=>t>1&&(0,P.jsx)(`tr`,{children:Object.values(e).map((e,t)=>(0,P.jsx)(`td`,{style:{color:$(-e,t,`uscita`),fontWeight:t===0?`bold`:null},children:t>0?parseFloat(-e).toFixed(2)+` €`:e},t))},t))}),(0,P.jsx)(`tbody`,{children:(0,P.jsx)(`tr`,{children:Object.values(e[0]).map((e,t)=>(0,P.jsx)(`td`,{style:{color:$(-e,t,`uscita`),fontWeight:t===0?`bold`:null},children:t>0?parseFloat(-e).toFixed(2)+` €`:e},t))})})]})})]})}function xn({entrate:e,uscite:t,lingua:n}){return(0,P.jsxs)(u.Card,{style:{display:`inline-block`,backgroundColor:`rgba(0, 0, 0, 0.5)`,borderRadius:`50px`,paddingLeft:`50px`,paddingRight:`50px`,paddingBottom:`50px`,overflowX:`auto`},children:[(0,P.jsx)(u.Card.Body,{children:(0,P.jsx)(`center`,{children:(0,P.jsx)(u.Card.Title,{style:{color:`#FFFFFF`},children:n===`italiano`?`Ricavi`:`Revenues`})})}),(0,P.jsx)(`center`,{children:(0,P.jsxs)(u.Table,{striped:!0,bordered:!0,hover:!0,variant:`dark`,style:{borderRadius:`50px`,marginTop:`0`,marginBottom:`10px`,textAlign:`center`},children:[(0,P.jsx)(`thead`,{children:(0,P.jsxs)(`tr`,{children:[(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`ANNO`:`YEAR`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`GEN`:`JAN`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:`FEB`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:`MAR`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:`APR`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`MAG`:`MAY`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`GIU`:`JUN`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`LUG`:`JUL`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`AGO`:`AUG`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`SET`:`SEP`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`OTT`:`OCT`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:`NOV`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`DIC`:`DEC`}),(0,P.jsx)(`th`,{style:{color:`#FFFFFF`},children:n===`italiano`?`TOT RICAVI`:`TOT EARNINGS`})]})}),(0,P.jsxs)(`tbody`,{children:[e.map((e,n)=>n>1&&(0,P.jsxs)(`tr`,{children:[(0,P.jsx)(`td`,{style:{fontWeight:`bold`},children:e.Anno}),t[n]&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(`td`,{style:{color:$(e.gen-t[n].gen)},children:[parseFloat(e.gen-t[n].gen).toFixed(2),` €`]}),(0,P.jsxs)(`td`,{style:{color:$(e.feb-t[n].feb)},children:[parseFloat(e.feb-t[n].feb).toFixed(2),` €`]}),(0,P.jsxs)(`td`,{style:{color:$(e.mar-t[n].mar)},children:[parseFloat(e.mar-t[n].mar).toFixed(2),` €`]}),(0,P.jsxs)(`td`,{style:{color:$(e.apr-t[n].apr)},children:[parseFloat(e.apr-t[n].apr).toFixed(2),` €`]}),(0,P.jsxs)(`td`,{style:{color:$(e.mag-t[n].mag)},children:[parseFloat(e.mag-t[n].mag).toFixed(2),` €`]}),(0,P.jsxs)(`td`,{style:{color:$(e.giu-t[n].giu)},children:[parseFloat(e.giu-t[n].giu).toFixed(2),` €`]}),(0,P.jsxs)(`td`,{style:{color:$(e.lug-t[n].lug)},children:[parseFloat(e.lug-t[n].lug).toFixed(2),` €`]}),(0,P.jsxs)(`td`,{style:{color:$(e.ago-t[n].ago)},children:[parseFloat(e.ago-t[n].ago).toFixed(2),` €`]}),(0,P.jsxs)(`td`,{style:{color:$(e.set-t[n].set)},children:[parseFloat(e.set-t[n].set).toFixed(2),` €`]}),(0,P.jsxs)(`td`,{style:{color:$(e.ott-t[n].ott)},children:[parseFloat(e.ott-t[n].ott).toFixed(2),` €`]}),(0,P.jsxs)(`td`,{style:{color:$(e.nov-t[n].nov)},children:[parseFloat(e.nov-t[n].nov).toFixed(2),` €`]}),(0,P.jsxs)(`td`,{style:{color:$(e.dic-t[n].dic)},children:[parseFloat(e.dic-t[n].dic).toFixed(2),` €`]}),(0,P.jsxs)(`td`,{style:{color:$(e.totale_anno-t[n].totale_anno)},children:[parseFloat(e.totale_anno-t[n].totale_anno).toFixed(2),` €`]})]})]},n)),(0,P.jsxs)(`tr`,{children:[(0,P.jsx)(`td`,{style:{fontWeight:`bold`},children:e[0].Anno}),(0,P.jsxs)(`td`,{style:{color:$(e[0].gen-t[0].gen,1)},children:[parseFloat(e[0].gen-t[0].gen).toFixed(2),` €`]}),(0,P.jsxs)(`td`,{style:{color:$(e[0].feb-t[0].feb)},children:[parseFloat(e[0].feb-t[0].feb).toFixed(2),` €`]}),(0,P.jsxs)(`td`,{style:{color:$(e[0].mar-t[0].mar)},children:[parseFloat(e[0].mar-t[0].mar).toFixed(2),` €`]}),(0,P.jsxs)(`td`,{style:{color:$(e[0].apr-t[0].apr)},children:[parseFloat(e[0].apr-t[0].apr).toFixed(2),` €`]}),(0,P.jsxs)(`td`,{style:{color:$(e[0].mag-t[0].mag)},children:[parseFloat(e[0].mag-t[0].mag).toFixed(2),` €`]}),(0,P.jsxs)(`td`,{style:{color:$(e[0].giu-t[0].giu)},children:[parseFloat(e[0].giu-t[0].giu).toFixed(2),` €`]}),(0,P.jsxs)(`td`,{style:{color:$(e[0].lug-t[0].lug)},children:[parseFloat(e[0].lug-t[0].lug).toFixed(2),` €`]}),(0,P.jsxs)(`td`,{style:{color:$(e[0].ago-t[0].ago)},children:[parseFloat(e[0].ago-t[0].ago).toFixed(2),` €`]}),(0,P.jsxs)(`td`,{style:{color:$(e[0].set-t[0].set)},children:[parseFloat(e[0].set-t[0].set).toFixed(2),` €`]}),(0,P.jsxs)(`td`,{style:{color:$(e[0].ott-t[0].ott)},children:[parseFloat(e[0].ott-t[0].ott).toFixed(2),` €`]}),(0,P.jsxs)(`td`,{style:{color:$(e[0].nov-t[0].nov)},children:[parseFloat(e[0].nov-t[0].nov).toFixed(2),` €`]}),(0,P.jsxs)(`td`,{style:{color:$(e[0].dic-t[0].dic)},children:[parseFloat(e[0].dic-t[0].dic).toFixed(2),` €`]}),(0,P.jsxs)(`td`,{style:{color:$(e[0].totale_anno-t[0].totale_anno)},children:[parseFloat(e[0].totale_anno-t[0].totale_anno).toFixed(2),` €`]})]},0)]})]})})]})}function Sn({totaleItems:e}){return(0,P.jsxs)(Q.StyledCard,{children:[(0,P.jsx)(Q.StyledCardHeader,{children:`Informations`}),(0,P.jsx)(Q.SlideContainer,{children:e&&(0,P.jsx)(Q.StyledInputBlock,{rows:1,name:`totale_items`,id:`totale_items`,type:`text`,value:e||`Errore!!`,readOnly:!0})})]})}function Cn({datiRicerca:e,setDatiRicerca:t,handleInputChange:n,eseguiRicerca:r,lingua:i}){return(0,P.jsxs)(Q.StyledCard,{children:[(0,P.jsx)(Q.StyledCardHeader,{children:i===`italiano`?`Ricerca entrate e uscite`:`Searching for inputs and outputs`}),(0,P.jsxs)(Q.SlideContainer,{style:{maxHeight:`2000px`},children:[(0,P.jsx)(Q.StyledInputModifica,{rows:1,name:`primo_anno`,id:`primo_anno`,type:`number`,step:1,value:e.primo_anno,placeholder:`Primo anno`,onChange:e=>n(e,t),onContextMenu:e=>handleRightClick(e,`Primo anno`)}),(0,P.jsxs)(Q.StyledSelectModifica,{name:`ultimo_anno`,id:`ultimo_anno`,value:e.ultimo_anno,onChange:e=>n(e,t),onContextMenu:e=>handleRightClick(e,`Ultimo anno`),children:[(0,P.jsx)(`option`,{value:parseInt(e.primo_anno)+1,children:parseInt(e.primo_anno)+1}),(0,P.jsx)(`option`,{value:parseInt(e.primo_anno)+2,children:parseInt(e.primo_anno)+2}),(0,P.jsx)(`option`,{value:parseInt(e.primo_anno)+3,children:parseInt(e.primo_anno)+3}),(0,P.jsx)(`option`,{value:parseInt(e.primo_anno)+4,children:parseInt(e.primo_anno)+4}),(0,P.jsx)(`option`,{value:parseInt(e.primo_anno)+5,children:parseInt(e.primo_anno)+5})]})]}),(0,P.jsx)(L,{eseguiRicerca:e=>r(e),vistaItem:`card`,StyledComponents:Q})]})}var wn=({tipoItem:e,items:t,setItems:n,selectOperation:r,campi:i,handleBlurItem:a,tipoForm:o,vistaItem:s})=>{let c=s===`card`?pn:Tt,l=()=>(0,P.jsx)(P.Fragment,{children:t.map((o,s)=>(0,P.jsx)(c,{item:o,campi:o?i(o,null,null,null):[],indici:[...Array(i(o,null,null,null).label.length).keys()],selectOperation:r,items:t,setItems:n,tipoItem:e,handleBlurItem:a},s))});return(0,P.jsxs)(P.Fragment,{children:[o===`search`&&t.length===0&&(0,P.jsx)(`div`,{className:`contenitore-1`,children:`Nessun elemento trovato.`}),t.length>0&&(0,P.jsx)(P.Fragment,{children:s===`card`?(0,P.jsx)(`div`,{className:`contenitore-3`,children:(0,P.jsx)(l,{})}):(0,P.jsx)(l,{})})]})};e.CambioTipoForm=Le,e.CambioTipoForm2=Re,e.CardEntrateItems=vn,e.CardEntrateItemsByName=yn,e.CardEntrateUscite=Cn,e.CardFileItems=mn,e.CardInformazioni=Sn,e.CardItemEsistente=pn,e.CardLogin=hn,e.CardNuovoItem=dn,e.CardProfilo=gn,e.CardRicavi=xn,e.CardRicercaItems=fn,e.CardUsciteItems=bn,e.CardWidget=_n,e.FormEntrateUscite=We,e.FormFileItems=Ue,e.FormLogin=Ve,e.FormNuovoItem=ze,e.FormProfilo=He,e.FormRicercaItems=Be,e.PaginaWeb=({componenti:e,elementi:n,vistaItem:r,vistaForm:i})=>{let[a,o]=(0,t.useState)(`search`),s=i===`form`?ze:i===`card`?dn:Ct,c=i===`form`?Be:i===`card`?fn:wt,l=i===`form`?Ue:i===`card`?mn:Et;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Le,{elementi:n,tipoForm:a,setTipoForm:o,StyledComponents:j}),(0,P.jsx)(`br`,{}),` `,(0,P.jsx)(`br`,{}),` `,(0,P.jsx)(`br`,{}),` `,(0,P.jsx)(`br`,{}),n.map((n,r)=>(0,P.jsxs)(t.Fragment,{children:[n===`insert`&&a===`insert`&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(s,{campi:e.campiNuovoItem,indici:e.indiciNuovoItem,eseguiSalvataggio:e.handleInsert}),(0,P.jsx)(`br`,{}),` `,(0,P.jsx)(`br`,{}),` `,(0,P.jsx)(`br`,{}),` `,(0,P.jsx)(`br`,{})]}),n===`search`&&a===`search`&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(c,{campi:e.campiRicercaItems,indici:e.indiciRicercaItems,handleSearch:e.handleSearch}),(0,P.jsx)(`br`,{}),` `,(0,P.jsx)(`br`,{}),` `,(0,P.jsx)(`br`,{}),` `,(0,P.jsx)(`br`,{})]}),n===`file`&&a===`file`&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(l,{campi:e.campiFile,indici:e.indiciFile,ottieniFileRangePDF:e.handleSearchRangeFilePDF,ottieniFileRangeExcel:e.handleSearchRangeFileExcel,eliminaItemsRange:e.handleDeleteRangeFile}),(0,P.jsx)(`br`,{}),` `,(0,P.jsx)(`br`,{}),` `,(0,P.jsx)(`br`,{}),` `,(0,P.jsx)(`br`,{})]})]},r)),a!==`file`&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(wn,{tipoItem:e.tipoItem,items:e.items,setItems:e.setItems,selectOperation:e.selectOperation,campi:e.campiItemEsistente,handleBlurItem:e.handleBlurItem,tipoForm:a,vistaItem:r}),(0,P.jsx)(`br`,{}),` `,(0,P.jsx)(`br`,{}),` `,(0,P.jsx)(`br`,{}),` `,(0,P.jsx)(`br`,{}),e.visualizzazioneInformazioni===!0&&e.items.length>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`center`,{children:(0,P.jsx)(Sn,{totaleItems:e.totaleItems})}),(0,P.jsx)(`br`,{}),` `,(0,P.jsx)(`br`,{}),` `,(0,P.jsx)(`br`,{}),` `,(0,P.jsx)(`br`,{})]}),(0,P.jsx)(Fe,{selectedIdsModifica:e.selectedIdsModifica,selectedIdsEliminazione:e.selectedIdsEliminazione,handleEdit:e.handleEdit,handleDelete:e.handleDelete}),(0,P.jsx)(`br`,{}),` `,(0,P.jsx)(`br`,{}),` `,(0,P.jsx)(`br`,{}),` `,(0,P.jsx)(`br`,{})]})]})},e.RowEntrateUscite=kt,e.RowFileItems=Et,e.RowItemEsistente=Tt,e.RowLogin=Dt,e.RowNuovoItem=Ct,e.RowProfilo=Ot,e.RowRicercaItems=wt});