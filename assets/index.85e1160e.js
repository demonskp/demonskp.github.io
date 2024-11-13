import{k as D,m,o as u,b as _,y as g,g as e,x as q,Q as h,z as ne,ar as _e,l as C,as as Ce,s as Le,n as fe,C as ye,q as he,c as Y,j as p,w as z,d as f,a0 as Ee,F as K,P as Se,i as we,T as $e,W as Te,X as xe,Y as Ne,a9 as Oe,t as P,U as Re,G as Ae,_ as be,$ as ke,r as Ve,e as Be,u as Me,ap as Pe}from"./index.ed1d8821.js";import{j as B,b as ve,d as se,u as pe,_ as me,w as ge,i as oe,h as M,l as Ye,g as De,K as Xe}from"./plugin-vue_export-helper.3585fd15.js";import{p as He,m as Ie,$ as je,a0 as Fe,u as ze,f as We,a as x,c as qe,Y as Ke,X as Ze,a1 as Ge,a2 as Ue,a3 as Qe,a4 as Je,k as et,E as V,j as tt}from"./index.44c702c3.js";import{d as at}from"./debounce.63ed12e7.js";import{T as nt}from"./tags.41a97576.js";const st=(l,r)=>{if(!B||!l||!r)return!1;const t=l.getBoundingClientRect();let s;return r instanceof Element?s=r.getBoundingClientRect():s={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},t.top<s.bottom&&t.bottom>s.top&&t.right>s.left&&t.left<s.right};var ot="Expected a function";function de(l,r,t){var s=!0,i=!0;if(typeof l!="function")throw new TypeError(ot);return He(t)&&(s="leading"in t?!!t.leading:s,i="trailing"in t?!!t.trailing:i),at(l,r,{leading:s,maxWait:r,trailing:i})}const lt=ve({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:se(String),default:"solid"}}),rt=D({name:"ElDivider"}),it=D({...rt,props:lt,setup(l){const r=l,t=pe("divider"),s=m(()=>t.cssVar({"border-style":r.borderStyle}));return(i,y)=>(u(),_("div",{class:g([e(t).b(),e(t).m(i.direction)]),style:ne(e(s)),role:"separator"},[i.$slots.default&&i.direction!=="vertical"?(u(),_("div",{key:0,class:g([e(t).e("text"),e(t).is(i.contentPosition)])},[q(i.$slots,"default")],2)):h("v-if",!0)],6))}});var ct=me(it,[["__file","/home/runner/work/element-plus/element-plus/packages/components/divider/src/divider.vue"]]);const ut=ge(ct),dt=ve({urlList:{type:se(Array),default:()=>Ie([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),ft={close:()=>!0,switch:l=>oe(l),rotate:l=>oe(l)},vt=["src"],pt=D({name:"ElImageViewer"}),mt=D({...pt,props:dt,emits:ft,setup(l,{expose:r,emit:t}){const s=l,i={CONTAIN:{name:"contain",icon:_e(je)},ORIGINAL:{name:"original",icon:_e(Fe)}},{t:y}=ze(),c=pe("image-viewer"),{nextZIndex:X}=We(),N=C(),T=C([]),E=Ce(),L=C(!0),w=C(s.initialIndex),b=Le(i.CONTAIN),v=C({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),H=m(()=>{const{urlList:a}=s;return a.length<=1}),R=m(()=>w.value===0),Z=m(()=>w.value===s.urlList.length-1),le=m(()=>s.urlList[w.value]),re=m(()=>[c.e("btn"),c.e("prev"),c.is("disabled",!s.infinite&&R.value)]),j=m(()=>[c.e("btn"),c.e("next"),c.is("disabled",!s.infinite&&Z.value)]),ie=m(()=>{const{scale:a,deg:o,offsetX:d,offsetY:k,enableTransition:S}=v.value;let I=d/a,$=k/a;switch(o%360){case 90:case-270:[I,$]=[$,-I];break;case 180:case-180:[I,$]=[-I,-$];break;case 270:case-90:[I,$]=[-$,I];break}const A={transform:`scale(${a}) rotate(${o}deg) translate(${I}px, ${$}px)`,transition:S?"transform .3s":""};return b.value.name===i.CONTAIN.name&&(A.maxWidth=A.maxHeight="100%"),A}),G=m(()=>oe(s.zIndex)?s.zIndex:X());function O(){ue(),t("close")}function ce(){const a=de(d=>{switch(d.code){case V.esc:s.closeOnPressEscape&&O();break;case V.space:ee();break;case V.left:te();break;case V.up:n("zoomIn");break;case V.right:ae();break;case V.down:n("zoomOut");break}}),o=de(d=>{const k=d.deltaY||d.deltaX;n(k<0?"zoomIn":"zoomOut",{zoomRate:s.zoomRate,enableTransition:!1})});E.run(()=>{M(document,"keydown",a),M(document,"wheel",o)})}function ue(){E.stop()}function U(){L.value=!1}function Q(a){L.value=!1,a.target.alt=y("el.image.error")}function J(a){if(L.value||a.button!==0||!N.value)return;v.value.enableTransition=!1;const{offsetX:o,offsetY:d}=v.value,k=a.pageX,S=a.pageY,I=de(A=>{v.value={...v.value,offsetX:o+A.pageX-k,offsetY:d+A.pageY-S}}),$=M(document,"mousemove",I);M(document,"mouseup",()=>{$()}),a.preventDefault()}function F(){v.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function ee(){if(L.value)return;const a=et(i),o=Object.values(i),d=b.value.name,S=(o.findIndex(I=>I.name===d)+1)%a.length;b.value=i[a[S]],F()}function W(a){const o=s.urlList.length;w.value=(a+o)%o}function te(){R.value&&!s.infinite||W(w.value-1)}function ae(){Z.value&&!s.infinite||W(w.value+1)}function n(a,o={}){if(L.value)return;const{zoomRate:d,rotateDeg:k,enableTransition:S}={zoomRate:s.zoomRate,rotateDeg:90,enableTransition:!0,...o};switch(a){case"zoomOut":v.value.scale>.2&&(v.value.scale=Number.parseFloat((v.value.scale/d).toFixed(3)));break;case"zoomIn":v.value.scale<7&&(v.value.scale=Number.parseFloat((v.value.scale*d).toFixed(3)));break;case"clockwise":v.value.deg+=k,t("rotate",v.value.deg);break;case"anticlockwise":v.value.deg-=k,t("rotate",v.value.deg);break}v.value.enableTransition=S}return fe(le,()=>{ye(()=>{const a=T.value[0];a!=null&&a.complete||(L.value=!0)})}),fe(w,a=>{F(),t("switch",a)}),he(()=>{var a,o;ce(),(o=(a=N.value)==null?void 0:a.focus)==null||o.call(a)}),r({setActiveItem:W}),(a,o)=>(u(),Y(Ne,{to:"body",disabled:!a.teleported},[p(xe,{name:"viewer-fade",appear:""},{default:z(()=>[f("div",{ref_key:"wrapper",ref:N,tabindex:-1,class:g(e(c).e("wrapper")),style:ne({zIndex:e(G)})},[f("div",{class:g(e(c).e("mask")),onClick:o[0]||(o[0]=Ee(d=>a.hideOnClickModal&&O(),["self"]))},null,2),h(" CLOSE "),f("span",{class:g([e(c).e("btn"),e(c).e("close")]),onClick:O},[p(e(x),null,{default:z(()=>[p(e(qe))]),_:1})],2),h(" ARROW "),e(H)?h("v-if",!0):(u(),_(K,{key:0},[f("span",{class:g(e(re)),onClick:te},[p(e(x),null,{default:z(()=>[p(e(Ke))]),_:1})],2),f("span",{class:g(e(j)),onClick:ae},[p(e(x),null,{default:z(()=>[p(e(Ze))]),_:1})],2)],64)),h(" ACTIONS "),f("div",{class:g([e(c).e("btn"),e(c).e("actions")])},[f("div",{class:g(e(c).e("actions__inner"))},[p(e(x),{onClick:o[1]||(o[1]=d=>n("zoomOut"))},{default:z(()=>[p(e(Ge))]),_:1}),p(e(x),{onClick:o[2]||(o[2]=d=>n("zoomIn"))},{default:z(()=>[p(e(Ue))]),_:1}),f("i",{class:g(e(c).e("actions__divider"))},null,2),p(e(x),{onClick:ee},{default:z(()=>[(u(),Y(Se(e(b).icon)))]),_:1}),f("i",{class:g(e(c).e("actions__divider"))},null,2),p(e(x),{onClick:o[3]||(o[3]=d=>n("anticlockwise"))},{default:z(()=>[p(e(Qe))]),_:1}),p(e(x),{onClick:o[4]||(o[4]=d=>n("clockwise"))},{default:z(()=>[p(e(Je))]),_:1})],2)],2),h(" CANVAS "),f("div",{class:g(e(c).e("canvas"))},[(u(!0),_(K,null,we(a.urlList,(d,k)=>$e((u(),_("img",{ref_for:!0,ref:S=>T.value[k]=S,key:d,src:d,style:ne(e(ie)),class:g(e(c).e("img")),onLoad:U,onError:Q,onMousedown:J},null,46,vt)),[[Te,k===w.value]])),128))],2),q(a.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var gt=me(mt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const _t=ge(gt),yt=ve({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:se([String,Object])},previewSrcList:{type:se(Array),default:()=>Ie([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),ht={load:l=>l instanceof Event,error:l=>l instanceof Event,switch:l=>oe(l),close:()=>!0,show:()=>!0},wt=["src","loading"],bt={key:0},kt=D({name:"ElImage",inheritAttrs:!1}),It=D({...kt,props:yt,emits:ht,setup(l,{emit:r}){const t=l;let s="";const{t:i}=ze(),y=pe("image"),c=Oe(),X=tt(),N=C(),T=C(!1),E=C(!0),L=C(!1),w=C(),b=C(),v=B&&"loading"in HTMLImageElement.prototype;let H,R;const Z=m(()=>[y.e("inner"),j.value&&y.e("preview"),E.value&&y.is("loading")]),le=m(()=>c.style),re=m(()=>{const{fit:n}=t;return B&&n?{objectFit:n}:{}}),j=m(()=>{const{previewSrcList:n}=t;return Array.isArray(n)&&n.length>0}),ie=m(()=>{const{previewSrcList:n,initialIndex:a}=t;let o=a;return a>n.length-1&&(o=0),o}),G=m(()=>t.loading==="eager"?!1:!v&&t.loading==="lazy"||t.lazy),O=()=>{!B||(E.value=!0,T.value=!1,N.value=t.src)};function ce(n){E.value=!1,T.value=!1,r("load",n)}function ue(n){E.value=!1,T.value=!0,r("error",n)}function U(){st(w.value,b.value)&&(O(),F())}const Q=Xe(U,200,!0);async function J(){var n;if(!B)return;await ye();const{scrollContainer:a}=t;Ye(a)?b.value=a:Ae(a)&&a!==""?b.value=(n=document.querySelector(a))!=null?n:void 0:w.value&&(b.value=De(w.value)),b.value&&(H=M(b,"scroll",Q),setTimeout(()=>U(),100))}function F(){!B||!b.value||!Q||(H==null||H(),b.value=void 0)}function ee(n){if(!!n.ctrlKey){if(n.deltaY<0)return n.preventDefault(),!1;if(n.deltaY>0)return n.preventDefault(),!1}}function W(){!j.value||(R=M("wheel",ee,{passive:!1}),s=document.body.style.overflow,document.body.style.overflow="hidden",L.value=!0,r("show"))}function te(){R==null||R(),document.body.style.overflow=s,L.value=!1,r("close")}function ae(n){r("switch",n)}return fe(()=>t.src,()=>{G.value?(E.value=!0,T.value=!1,F(),J()):O()}),he(()=>{G.value?J():O()}),(n,a)=>(u(),_("div",{ref_key:"container",ref:w,class:g([e(y).b(),n.$attrs.class]),style:ne(e(le))},[T.value?q(n.$slots,"error",{key:0},()=>[f("div",{class:g(e(y).e("error"))},P(e(i)("el.image.error")),3)]):(u(),_(K,{key:1},[N.value!==void 0?(u(),_("img",Re({key:0},e(X),{src:N.value,loading:n.loading,style:e(re),class:e(Z),onClick:W,onLoad:ce,onError:ue}),null,16,wt)):h("v-if",!0),E.value?(u(),_("div",{key:1,class:g(e(y).e("wrapper"))},[q(n.$slots,"placeholder",{},()=>[f("div",{class:g(e(y).e("placeholder"))},null,2)])],2)):h("v-if",!0)],64)),e(j)?(u(),_(K,{key:2},[L.value?(u(),Y(e(_t),{key:0,"z-index":n.zIndex,"initial-index":e(ie),infinite:n.infinite,"zoom-rate":n.zoomRate,"url-list":n.previewSrcList,"hide-on-click-modal":n.hideOnClickModal,teleported:n.previewTeleported,"close-on-press-escape":n.closeOnPressEscape,onClose:te,onSwitch:ae},{default:z(()=>[n.$slots.viewer?(u(),_("div",bt,[q(n.$slots,"viewer")])):h("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):h("v-if",!0)],64)):h("v-if",!0)],6))}});var zt=me(It,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const Ct=ge(zt);const Lt={class:"card"},Et={class:"content"},St={class:"description"},$t={class:"meta"},Tt={__name:"NoteItem",props:{item:{type:Object,default(){return{id:String,title:String,description:String,createTime:String}}}},setup(l){const r=l,{item:t}=ke(r),s=m(()=>t.value.description?t.value.description.slice(0,80)+"...":"");return(i,y)=>{const c=Ve("router-link");return u(),_("div",Lt,[f("div",Et,[p(c,{class:"title",to:`/notes/detail/${e(t).id}`},{default:z(()=>[f("div",null,P(e(t).title),1)]),_:1},8,["to"]),f("div",St,P(s.value),1),f("div",$t,P(e(t).createTime),1)]),e(t).poster?(u(),Y(e(Ct),{key:0,fit:"cover",class:"image",src:e(t).poster,lazy:"",alt:"\u9884\u89C8"},null,8,["src"])):h("",!0)])}}},xt=be(Tt,[["__scopeId","data-v-0d61e558"]]);const Nt={class:"tag_header_wrap"},Ot={class:"tag_header"},Rt=["src"],At={class:"info"},Vt={class:"title"},Bt={key:0},Mt={class:"tips"},Pt={__name:"TagHeader",props:{tag:String,numb:Number},setup(l){const r=l,t=m(()=>nt[r.tag]||{poster:"",description:""});return(s,i)=>(u(),_("div",Nt,[f("div",Ot,[t.value.poster?(u(),_("img",{key:0,src:t.value.poster,alt:""},null,8,Rt)):h("",!0),f("div",At,[f("div",Vt,[t.value.poster?h("",!0):(u(),_("span",Bt,"\u6807\u7B7E\uFF1A")),Be(P(r.tag),1)]),f("div",Mt,"\u6536\u5F55\u4E86"+P(r.numb)+"\u7BC7\u6587\u7AE0",1)])]),p(e(ut))]))}},Yt=be(Pt,[["__scopeId","data-v-d8d7c44b"]]),Wt={__name:"index",setup(l){const r=Me(),t=m(()=>{const{tag:s={}}=ke(r.query||{});let i=Pe;return s.value!==void 0&&s.value!==null&&(i=i.filter(y=>{var c;return(c=y.tags)==null?void 0:c.find(X=>X===s.value)})),i});return(s,i)=>(u(),_("div",null,[e(r).query.tag?(u(),Y(Yt,{key:0,tag:e(r).query.tag,numb:t.value.length},null,8,["tag","numb"])):h("",!0),(u(!0),_(K,null,we(t.value,y=>(u(),Y(xt,{key:y.id,item:y},null,8,["item"]))),128))]))}};export{Wt as default};