import{_ as se}from"./dialog.vue_vue_type_script_setup_true_lang-967a02b7.js";import{_ as ie}from"./base-button.vue_vue_type_script_setup_true_lang-4a31ead5.js";import{_ as ue,a as de}from"./input-label.vue_vue_type_script_setup_true_lang-82236da6.js";import{_ as ce}from"./input-text.vue_vue_type_script_setup_true_lang-1b53ec83.js";import{_ as pe}from"./icon-close-88e52529.js";import{_ as me}from"./_plugin-vue_export-helper-c27b6911.js";import{y as fe,l as $,b as m,z as W,d as B,A as G,B as Z,u as p,C as q,D as k,E as ve,G as D,F as L,o as N,c as P,a as v,T as be,h as _,w as S,g as R,x as ge,e as _e,n as T,t as H,H as ye,Z as he}from"./app-97dd6c0a.js";import{m as V,t as F,H as z,O as xe,o as j,f as we,K as Se,a as ke,T as Ee,b as E,P as U,N as C,c as K}from"./transition-e17a068e.js";import{M as J,E as $e}from"./dialog-7d08f294.js";import"./use-input-size-f8e233a3.js";function Re({container:e,accept:a,walk:l,enabled:r}){fe(()=>{let o=e.value;if(!o||r!==void 0&&!r.value)return;let u=V(e);if(!u)return;let s=Object.assign(x=>a(x),{acceptNode:a}),c=u.createTreeWalker(o,NodeFilter.SHOW_ELEMENT,s,!1);for(;c.nextNode();)l(c.currentNode)})}function Y(e={},a=null,l=[]){for(let[r,o]of Object.entries(e))X(l,Q(a,r),o);return l}function Q(e,a){return e?e+"["+a+"]":a}function X(e,a,l){if(Array.isArray(l))for(let[r,o]of l.entries())X(e,Q(a,r.toString()),o);else l instanceof Date?e.push([a,l.toISOString()]):typeof l=="boolean"?e.push([a,l?"1":"0"]):typeof l=="string"?e.push([a,l]):typeof l=="number"?e.push([a,`${l}`]):l==null?e.push([a,""]):Y(l,a,e)}function Oe(e){var a,l;let r=(a=e==null?void 0:e.form)!=null?a:e.closest("form");if(r){for(let o of r.elements)if(o!==e&&(o.tagName==="INPUT"&&o.type==="submit"||o.tagName==="BUTTON"&&o.type==="submit"||o.nodeName==="INPUT"&&o.type==="image")){o.click();return}(l=r.requestSubmit)==null||l.call(r)}}function Te(e,a,l){let r=$(l==null?void 0:l.value),o=m(()=>e.value!==void 0);return[m(()=>o.value?e.value:r.value),function(u){return o.value||(r.value=u),a==null?void 0:a(u)}]}let ee=Symbol("LabelContext");function te(){let e=q(ee,null);if(e===null){let a=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(a,te),a}return e}function ae({slot:e={},name:a="Label",props:l={}}={}){let r=$([]);function o(u){return r.value.push(u),()=>{let s=r.value.indexOf(u);s!==-1&&r.value.splice(s,1)}}return W(ee,{register:o,slot:e,name:a,props:l}),m(()=>r.value.length>0?r.value.join(" "):void 0)}let Ce=B({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-label-${F()}`}},setup(e,{slots:a,attrs:l}){let r=te();return G(()=>Z(r.register(e.id))),()=>{let{name:o="Label",slot:u={},props:s={}}=r,{id:c,passive:x,...g}=e,w={...Object.entries(s).reduce((b,[y,h])=>Object.assign(b,{[y]:p(h)}),{}),id:c};return x&&(delete w.onClick,delete w.htmlFor,delete g.onClick),z({ourProps:w,theirProps:g,slot:u,attrs:l,slots:a,name:o})}}});function Ne(e,a){return e===a}let le=Symbol("RadioGroupContext");function re(e){let a=q(le,null);if(a===null){let l=new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,re),l}return a}let Ve=B({name:"RadioGroup",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"div"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>Ne},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},id:{type:String,default:()=>`headlessui-radiogroup-${F()}`}},inheritAttrs:!1,setup(e,{emit:a,attrs:l,slots:r,expose:o}){let u=$(null),s=$([]),c=ae({name:"RadioGroupLabel"}),x=J({name:"RadioGroupDescription"});o({el:u,$el:u});let[g,w]=Te(m(()=>e.modelValue),t=>a("update:modelValue",t),m(()=>e.defaultValue)),b={options:s,value:g,disabled:m(()=>e.disabled),firstOption:m(()=>s.value.find(t=>!t.propsRef.disabled)),containsCheckedOption:m(()=>s.value.some(t=>b.compare(k(t.propsRef.value),k(e.modelValue)))),compare(t,i){if(typeof e.by=="string"){let n=e.by;return(t==null?void 0:t[n])===(i==null?void 0:i[n])}return e.by(t,i)},change(t){var i;if(e.disabled||b.compare(k(g.value),k(t)))return!1;let n=(i=s.value.find(f=>b.compare(k(f.propsRef.value),k(t))))==null?void 0:i.propsRef;return n!=null&&n.disabled?!1:(w(t),!0)},registerOption(t){s.value.push(t),s.value=xe(s.value,i=>i.element)},unregisterOption(t){let i=s.value.findIndex(n=>n.id===t);i!==-1&&s.value.splice(i,1)}};W(le,b),Re({container:m(()=>j(u)),accept(t){return t.getAttribute("role")==="radio"?NodeFilter.FILTER_REJECT:t.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(t){t.setAttribute("role","none")}});function y(t){if(!u.value||!u.value.contains(t.target))return;let i=s.value.filter(n=>n.propsRef.disabled===!1).map(n=>n.element);switch(t.key){case E.Enter:Oe(t.currentTarget);break;case E.ArrowLeft:case E.ArrowUp:if(t.preventDefault(),t.stopPropagation(),U(i,C.Previous|C.WrapAround)===K.Success){let n=s.value.find(f=>{var d;return f.element===((d=V(u))==null?void 0:d.activeElement)});n&&b.change(n.propsRef.value)}break;case E.ArrowRight:case E.ArrowDown:if(t.preventDefault(),t.stopPropagation(),U(i,C.Next|C.WrapAround)===K.Success){let n=s.value.find(f=>{var d;return f.element===((d=V(f.element))==null?void 0:d.activeElement)});n&&b.change(n.propsRef.value)}break;case E.Space:{t.preventDefault(),t.stopPropagation();let n=s.value.find(f=>{var d;return f.element===((d=V(f.element))==null?void 0:d.activeElement)});n&&b.change(n.propsRef.value)}break}}let h=m(()=>{var t;return(t=j(u))==null?void 0:t.closest("form")});return G(()=>{ve([h],()=>{if(!h.value||e.defaultValue===void 0)return;function t(){b.change(e.defaultValue)}return h.value.addEventListener("reset",t),()=>{var i;(i=h.value)==null||i.removeEventListener("reset",t)}},{immediate:!0})}),()=>{let{disabled:t,name:i,id:n,form:f,...d}=e,O={ref:u,id:n,role:"radiogroup","aria-labelledby":c.value,"aria-describedby":x.value,onKeydown:y};return D(L,[...i!=null&&g.value!=null?Y({[i]:g.value}).map(([A,I])=>D(we,Se({features:ke.Hidden,key:A,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:f,name:A,value:I}))):[],z({ourProps:O,theirProps:{...l,...Ee(d,["modelValue","defaultValue","by"])},slot:{},attrs:l,slots:r,name:"RadioGroup"})])}}});var je=(e=>(e[e.Empty=1]="Empty",e[e.Active=2]="Active",e))(je||{});let Be=B({name:"RadioGroupOption",props:{as:{type:[Object,String],default:"div"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-radiogroup-option-${F()}`}},setup(e,{attrs:a,slots:l,expose:r}){let o=re("RadioGroupOption"),u=ae({name:"RadioGroupLabel"}),s=J({name:"RadioGroupDescription"}),c=$(null),x=m(()=>({value:e.value,disabled:e.disabled})),g=$(1);r({el:c,$el:c});let w=m(()=>j(c));G(()=>o.registerOption({id:e.id,element:w,propsRef:x})),Z(()=>o.unregisterOption(e.id));let b=m(()=>{var d;return((d=o.firstOption.value)==null?void 0:d.id)===e.id}),y=m(()=>o.disabled.value||e.disabled),h=m(()=>o.compare(k(o.value.value),k(e.value))),t=m(()=>y.value?-1:h.value||!o.containsCheckedOption.value&&b.value?0:-1);function i(){var d;o.change(e.value)&&(g.value|=2,(d=j(c))==null||d.focus())}function n(){g.value|=2}function f(){g.value&=-3}return()=>{let{id:d,value:O,disabled:A,...I}=e,oe={checked:h.value,disabled:y.value,active:!!(g.value&2)},ne={id:d,ref:c,role:"radio","aria-checked":h.value?"true":"false","aria-labelledby":u.value,"aria-describedby":s.value,"aria-disabled":y.value?!0:void 0,tabIndex:t.value,onClick:y.value?void 0:i,onFocus:y.value?void 0:n,onBlur:y.value?void 0:f};return z({ourProps:ne,theirProps:I,slot:oe,attrs:a,slots:l,name:"RadioGroupOption"})}}}),M=Ce,Ae=$e;const Ie={},Le={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Pe=v("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"},null,-1),Ge=[Pe];function Fe(e,a){return N(),P("svg",Le,Ge)}const ze=me(Ie,[["render",Fe]]),De={class:"flex items-start justify-between gap-4 border-b px-6 py-4"},He={class:"flex size-12 shrink-0 items-center justify-center rounded-full border"},Ue=v("div",{class:"w-full"},[v("h3",{class:"text-base font-semibold leading-6 text-gray-600"},"Invite Contributor by e-mail"),v("p",{class:"mt-1 text-sm text-gray-500"},"Invite a new contributor to your project.")],-1),Ke={class:"flex w-full flex-col space-y-6 p-6"},Me={class:"w-full space-y-1"},We={class:"w-full space-y-1"},Ze={class:"-space-y-px rounded-md bg-white"},qe=v("span",{class:"size-1.5 rounded-full bg-white"},null,-1),Je=[qe],Ye={class:"ml-3 flex flex-col space-y-2"},Qe={class:"grid grid-cols-1 gap-6 border-t px-6 py-4 md:grid-cols-2"},ut=B({__name:"invite",props:{roles:{}},setup(e){const a=e,{close:l}=ye(),r=be({email:"",role:a.roles[1].value}),o=m(()=>r.email.length>0&&r.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)),u=()=>{r.post(route("ltu.contributors.invite.store"),{preserveScroll:!0,onSuccess:()=>{l()}})};return(s,c)=>{const x=he,g=ze,w=pe,b=ue,y=ce,h=de,t=ie,i=se;return N(),P(L,null,[_(x,{title:"Invite Contributor by e-mail"}),_(i,{size:"lg"},{default:S(()=>[v("div",De,[v("div",He,[_(g,{class:"size-6 text-gray-400"})]),Ue,v("div",{class:"flex w-8 cursor-pointer items-center justify-center text-gray-400 hover:text-gray-600",onClick:c[0]||(c[0]=(...n)=>p(l)&&p(l)(...n))},[_(w,{class:"size-5"})])]),v("div",Ke,[v("div",Me,[_(b,{value:"E-mail address"}),_(y,{modelValue:p(r).email,"onUpdate:modelValue":c[1]||(c[1]=n=>p(r).email=n),label:"E-mail",type:"email",placeholder:"E-mail address of the contributor",error:p(r).errors.email,disabled:p(r).processing},null,8,["modelValue","error","disabled"]),_(h,{message:p(r).errors.email},null,8,["message"])]),v("div",We,[_(b,{value:"Select role"}),_(p(Ve),{modelValue:p(r).role,"onUpdate:modelValue":c[2]||(c[2]=n=>p(r).role=n)},{default:S(()=>[_(p(M),{class:"sr-only"},{default:S(()=>[R("Role")]),_:1}),v("div",Ze,[(N(!0),P(L,null,ge(s.roles,(n,f)=>(N(),_e(p(Be),{key:n.value,as:"template",value:n.value},{default:S(({checked:d,active:O})=>[v("div",{class:T(["relative flex cursor-pointer border p-4 focus:outline-none",[f===0?"rounded-t-md":"",f===s.roles.length-1?"rounded-b-md":"",d?"z-10 border-blue-200 bg-blue-50":"border-gray-200"]])},[v("div",{class:T(["mt-0.5 flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-full border",[d?"border-transparent bg-blue-600":"border-gray-300 bg-white",O?"ring-2 ring-blue-600 ring-offset-2":""]]),"aria-hidden":"true"},Je,2),v("div",Ye,[_(p(M),{as:"span",class:T(["block text-sm font-medium",[d?"text-blue-900":"text-gray-900"]])},{default:S(()=>[R(H(n.label),1)]),_:2},1032,["class"]),_(p(Ae),{as:"span",class:T(["block text-sm",[d?"text-blue-700":"text-gray-500"]])},{default:S(()=>[R(H(n.description),1)]),_:2},1032,["class"])])],2)]),_:2},1032,["value"]))),128))])]),_:1},8,["modelValue"])])]),v("div",Qe,[_(t,{variant:"secondary",type:"button",size:"lg",onClick:p(l)},{default:S(()=>[R(" Close ")]),_:1},8,["onClick"]),_(t,{variant:"primary",type:"button",size:"lg",disabled:!p(o)||p(r).processing,"is-loading":p(r).processing,onClick:u},{default:S(()=>[R(" Send Invitation ")]),_:1},8,["disabled","is-loading"])])]),_:1})],64)}}});export{ut as default};
