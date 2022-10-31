"use strict";(self.webpackChunkEgecDashboard=self.webpackChunkEgecDashboard||[]).push([[472],{4968:(ct,Y,b)=>{b.d(Y,{R:()=>m});var O=b(8421),A=b(8306),K=b(5577),I=b(1144),V=b(576),$=b(3268);const G=["addListener","removeListener"],P=["addEventListener","removeEventListener"],r=["on","off"];function m(v,H,X,et){if((0,V.m)(X)&&(et=X,X=void 0),et)return m(v,H,X).pipe((0,$.Z)(et));const[rt,it]=function D(v){return(0,V.m)(v.addEventListener)&&(0,V.m)(v.removeEventListener)}(v)?P.map(ot=>d=>v[ot](H,d,X)):function N(v){return(0,V.m)(v.addListener)&&(0,V.m)(v.removeListener)}(v)?G.map(_(v,H)):function B(v){return(0,V.m)(v.on)&&(0,V.m)(v.off)}(v)?r.map(_(v,H)):[];if(!rt&&(0,I.z)(v))return(0,K.z)(ot=>m(ot,H,X))((0,O.Xf)(v));if(!rt)throw new TypeError("Invalid event target");return new A.y(ot=>{const d=(...Q)=>ot.next(1<Q.length?Q:Q[0]);return rt(d),()=>it(d)})}function _(v,H){return X=>et=>v[X](H,et)}},5963:(ct,Y,b)=>{b.d(Y,{H:()=>V});var O=b(8306),A=b(4986),K=b(3532);function V($=0,G,P=A.P){let r=-1;return null!=G&&((0,K.K)(G)?P=G:r=G),new O.y(m=>{let _=function I($){return $ instanceof Date&&!isNaN($)}($)?+$-P.now():$;_<0&&(_=0);let N=0;return P.schedule(function(){m.closed||(m.next(N++),0<=r?this.schedule(void 0,r):m.complete())},_)})}},4986:(ct,Y,b)=>{b.d(Y,{P:()=>I,z:()=>K});var O=b(4408);const K=new(b(7565).v)(O.o),I=K},9062:(ct,Y,b)=>{b.d(Y,{oj:()=>G});var O=b(5e3),A=b(7691),K=b(1377);class V{constructor(r,m,_){this.nodes=r,this.viewRef=m,this.componentRef=_}}class ${constructor(r,m,_,N,B,D,v,H){this._viewContainerRef=r,this._renderer=m,this._elementRef=_,this._injector=N,this._componentFactoryResolver=B,this._ngZone=D,this._applicationRef=v,this._posService=H,this.onBeforeShow=new O.vpe,this.onShown=new O.vpe,this.onBeforeHide=new O.vpe,this.onHidden=new O.vpe,this._providers=[],this._isHiding=!1,this.containerDefaultSelector="body",this._listenOpts={},this._globalListener=Function.prototype}get isShown(){return!this._isHiding&&!!this._componentRef}attach(r){return this._componentFactory=this._componentFactoryResolver.resolveComponentFactory(r),this}to(r){return this.container=r||this.container,this}position(r){return r?(this.attachment=r.attachment||this.attachment,this._elementRef=r.target||this._elementRef,this):this}provide(r){return this._providers.push(r),this}show(r={}){if(this._subscribePositioning(),this._innerComponent=void 0,!this._componentRef){this.onBeforeShow.emit(),this._contentRef=this._getContentRef(r.content,r.context,r.initialState);const m=O.zs3.create({providers:this._providers,parent:this._injector});if(!this._componentFactory)return;if(this._componentRef=this._componentFactory.create(m,this._contentRef.nodes),this._applicationRef.attachView(this._componentRef.hostView),this.instance=this._componentRef.instance,Object.assign(this._componentRef.instance,r),this.container instanceof O.SBq&&this.container.nativeElement.appendChild(this._componentRef.location.nativeElement),"string"==typeof this.container&&"undefined"!=typeof document){const _=document.querySelector(this.container)||document.querySelector(this.containerDefaultSelector);if(!_)return;_.appendChild(this._componentRef.location.nativeElement)}!this.container&&this._elementRef&&this._elementRef.nativeElement.parentElement&&this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement),this._contentRef.componentRef&&(this._innerComponent=this._contentRef.componentRef.instance,this._contentRef.componentRef.changeDetectorRef.markForCheck(),this._contentRef.componentRef.changeDetectorRef.detectChanges()),this._componentRef.changeDetectorRef.markForCheck(),this._componentRef.changeDetectorRef.detectChanges(),this.onShown.emit(r.id?{id:r.id}:this._componentRef.instance)}return this._registerOutsideClick(),this._componentRef}hide(r){var m,_,N,B,D,v;if(!this._componentRef)return this;this._posService.deletePositionElement(this._componentRef.location),this.onBeforeHide.emit(this._componentRef.instance);const H=this._componentRef.location.nativeElement;return null===(m=H.parentNode)||void 0===m||m.removeChild(H),null===(N=null===(_=this._contentRef)||void 0===_?void 0:_.componentRef)||void 0===N||N.destroy(),this._viewContainerRef&&(null===(B=this._contentRef)||void 0===B?void 0:B.viewRef)&&this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef)),null===(v=null===(D=this._contentRef)||void 0===D?void 0:D.viewRef)||void 0===v||v.destroy(),this._contentRef=void 0,this._componentRef=void 0,this._removeGlobalListener(),this.onHidden.emit(r?{id:r}:null),this}toggle(){this.isShown?this.hide():this.show()}dispose(){this.isShown&&this.hide(),this._unsubscribePositioning(),this._unregisterListenersFn&&this._unregisterListenersFn()}listen(r){var m;this.triggers=r.triggers||this.triggers,this._listenOpts.outsideClick=r.outsideClick,this._listenOpts.outsideEsc=r.outsideEsc,r.target=r.target||(null===(m=this._elementRef)||void 0===m?void 0:m.nativeElement);const _=this._listenOpts.hide=()=>r.hide?r.hide():void this.hide(),N=this._listenOpts.show=D=>{r.show?r.show(D):this.show(D),D()};return this._renderer&&(this._unregisterListenersFn=(0,A.wo)(this._renderer,{target:r.target,triggers:r.triggers,show:N,hide:_,toggle:D=>{this.isShown?_():N(D)}})),this}_removeGlobalListener(){this._globalListener&&(this._globalListener(),this._globalListener=Function.prototype)}attachInline(r,m){return r&&m&&(this._inlineViewRef=r.createEmbeddedView(m)),this}_registerOutsideClick(){if(this._componentRef&&this._componentRef.location){if(this._listenOpts.outsideClick){const r=this._componentRef.location.nativeElement;setTimeout(()=>{this._renderer&&this._elementRef&&(this._globalListener=(0,A.Rg)(this._renderer,{targets:[r,this._elementRef.nativeElement],outsideClick:this._listenOpts.outsideClick,hide:()=>this._listenOpts.hide&&this._listenOpts.hide()}))})}this._listenOpts.outsideEsc&&this._renderer&&this._elementRef&&(this._globalListener=(0,A.C)(this._renderer,{targets:[this._componentRef.location.nativeElement,this._elementRef.nativeElement],outsideEsc:this._listenOpts.outsideEsc,hide:()=>this._listenOpts.hide&&this._listenOpts.hide()}))}}getInnerComponent(){return this._innerComponent}_subscribePositioning(){this._zoneSubscription||!this.attachment||(this.onShown.subscribe(()=>{var r;this._posService.position({element:null===(r=this._componentRef)||void 0===r?void 0:r.location,target:this._elementRef,attachment:this.attachment,appendToBody:"body"===this.container})}),this._zoneSubscription=this._ngZone.onStable.subscribe(()=>{!this._componentRef||this._posService.calcPosition()}))}_unsubscribePositioning(){!this._zoneSubscription||(this._zoneSubscription.unsubscribe(),this._zoneSubscription=void 0)}_getContentRef(r,m,_){if(!r)return new V([]);if(r instanceof O.Rgc){if(this._viewContainerRef){const D=this._viewContainerRef.createEmbeddedView(r,m);return D.markForCheck(),new V([D.rootNodes],D)}const B=r.createEmbeddedView({});return this._applicationRef.attachView(B),new V([B.rootNodes],B)}if("function"==typeof r){const B=this._componentFactoryResolver.resolveComponentFactory(r),D=O.zs3.create({providers:this._providers,parent:this._injector}),v=B.create(D);return Object.assign(v.instance,_),this._applicationRef.attachView(v.hostView),new V([[v.location.nativeElement]],v.hostView,v)}const N=this._renderer?[this._renderer.createText(`${r}`)]:[];return new V([N])}}let G=(()=>{class P{constructor(m,_,N,B,D){this._componentFactoryResolver=m,this._ngZone=_,this._injector=N,this._posService=B,this._applicationRef=D}createLoader(m,_,N){return new $(_,N,m,this._injector,this._componentFactoryResolver,this._ngZone,this._applicationRef,this._posService)}}return P.\u0275fac=function(m){return new(m||P)(O.LFG(O._Vd),O.LFG(O.R0b),O.LFG(O.zs3),O.LFG(K.sA),O.LFG(O.z2F))},P.\u0275prov=O.Yz7({token:P,factory:P.\u0275fac,providedIn:"root"}),P})()},1377:(ct,Y,b)=>{b.d(Y,{Bz:()=>m,lx:()=>W,sA:()=>jt});var O=b(7691),A=b(5e3),K=b(9808),I=b(7579),V=b(6451),$=b(4968),G=b(9646),P=b(6406),r=(()=>{return(t=r||(r={})).top="top",t.bottom="bottom",t.left="left",t.right="right",t.auto="auto",t.end="right",t.start="left",t["top left"]="top left",t["top right"]="top right",t["right top"]="right top",t["right bottom"]="right bottom",t["bottom right"]="bottom right",t["bottom left"]="bottom left",t["left bottom"]="left bottom",t["left top"]="left top",t["top start"]="top left",t["top end"]="top right",t["end top"]="right top",t["end bottom"]="right bottom",t["bottom end"]="bottom right",t["bottom start"]="bottom left",t["start bottom"]="start bottom",t["start top"]="left top",r;var t})(),m=(()=>{return(t=m||(m={})).top="top",t.bottom="bottom",t.left="start",t.right="end",t.auto="auto",t.end="end",t.start="start",t["top left"]="top start",t["top right"]="top end",t["right top"]="end top",t["right bottom"]="end bottom",t["bottom right"]="bottom end",t["bottom left"]="bottom start",t["left bottom"]="start bottom",t["left top"]="start top",t["top start"]="top start",t["top end"]="top end",t["end top"]="end top",t["end bottom"]="end bottom",t["bottom end"]="bottom end",t["bottom start"]="bottom start",t["start bottom"]="start bottom",t["start top"]="start top",m;var t})();function _(t,o){if(1!==t.nodeType)return[];const e=t.ownerDocument.defaultView,n=null==e?void 0:e.getComputedStyle(t,null);return o?n&&n[o]:n}function N(t){if(!t)return document.documentElement;let n,e=null==t?void 0:t.offsetParent;for(;null===e&&t.nextElementSibling&&n!==t.nextElementSibling;)n=t.nextElementSibling,e=n.offsetParent;const c=e&&e.nodeName;return c&&"BODY"!==c&&"HTML"!==c?e&&-1!==["TH","TD","TABLE"].indexOf(e.nodeName)&&"static"===_(e,"position")?N(e):e:n?n.ownerDocument.documentElement:document.documentElement}function D(t){return null!==t.parentNode?D(t.parentNode):t}function v(t,o){if(!(t&&t.nodeType&&o&&o.nodeType))return document.documentElement;const e=t.compareDocumentPosition(o)&Node.DOCUMENT_POSITION_FOLLOWING,n=e?t:o,c=e?o:t,f=document.createRange();f.setStart(n,0),f.setEnd(c,0);const u=f.commonAncestorContainer;if(t!==u&&o!==u||n.contains(c))return function B(t){const{nodeName:o}=t;return"BODY"!==o&&("HTML"===o||N(t.firstElementChild)===t)}(u)?u:N(u);const h=D(t);return h.host?v(h.host,o):v(t,D(o).host)}function H(t){if(!t||!t.parentElement)return document.documentElement;let o=t.parentElement;for(;(null==o?void 0:o.parentElement)&&"none"===_(o,"transform");)o=o.parentElement;return o||document.documentElement}function X(t,o){const e="x"===o?"Left":"Top",n="Left"===e?"Right":"Bottom";return parseFloat(t[`border${e}Width`])+parseFloat(t[`border${n}Width`])}function et(t,o,e,n){return Math.max(o[`offset${t}`],o[`scroll${t}`],e[`client${t}`],e[`offset${t}`],e[`scroll${t}`],0)}function rt(t){const o=t.body,e=t.documentElement;return{height:et("Height",o,e),width:et("Width",o,e)}}function it(t){return Object.assign(Object.assign({},t),{right:(t.left||0)+t.width,bottom:(t.top||0)+t.height})}function d(t){return"number"==typeof t||"[object Number]"===Object.prototype.toString.call(t)}function Q(t){const o=t.getBoundingClientRect();if(!(o&&d(o.top)&&d(o.left)&&d(o.bottom)&&d(o.right)))return o;const e={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},n="HTML"===t.nodeName?rt(t.ownerDocument):void 0,c=(null==n?void 0:n.width)||t.clientWidth||d(o.right)&&d(e.left)&&o.right-e.left||0,f=(null==n?void 0:n.height)||t.clientHeight||d(o.bottom)&&d(e.top)&&o.bottom-e.top||0;let u=t.offsetWidth-c,h=t.offsetHeight-f;if(u||h){const a=_(t);u-=X(a,"x"),h-=X(a,"y"),e.width-=u,e.height-=h}return it(e)}function ut(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function st(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}const{overflow:o,overflowX:e,overflowY:n}=_(t);return/(auto|scroll|overlay)/.test(String(o)+String(n)+String(e))?t:st(ut(t))}function lt(t,o,e=!1){var n,c,f,u,h,a;const C="HTML"===o.nodeName,p=Q(t),w=Q(o),x=(st(t),_(o)),L=parseFloat(x.borderTopWidth),S=parseFloat(x.borderLeftWidth);e&&C&&(w.top=Math.max(null!==(n=w.top)&&void 0!==n?n:0,0),w.left=Math.max(null!==(c=w.left)&&void 0!==c?c:0,0));const M=it({top:(null!==(f=p.top)&&void 0!==f?f:0)-(null!==(u=w.top)&&void 0!==u?u:0)-L,left:(null!==(h=p.left)&&void 0!==h?h:0)-(null!==(a=w.left)&&void 0!==a?a:0)-S,width:p.width,height:p.height});if(M.marginTop=0,M.marginLeft=0,C){const j=parseFloat(x.marginTop),F=parseFloat(x.marginLeft);d(M.top)&&(M.top-=L-j),d(M.bottom)&&(M.bottom-=L-j),d(M.left)&&(M.left-=S-F),d(M.right)&&(M.right-=S-F),M.marginTop=j,M.marginLeft=F}return M}function at(t,o="top"){const e="top"===o?"scrollTop":"scrollLeft",n=t.nodeName;if("BODY"===n||"HTML"===n){const c=t.ownerDocument.documentElement;return(t.ownerDocument.scrollingElement||c)[e]}return t[e]}function gt(t){const o=t.nodeName;return"BODY"!==o&&"HTML"!==o&&("fixed"===_(t,"position")||gt(ut(t)))}function pt(t,o,e=0,n,c=!1){let f={top:0,left:0};const u=c?H(t):v(t,o);if("viewport"===n)f=function dt(t,o=!1){const e=t.ownerDocument.documentElement,n=lt(t,e),c=Math.max(e.clientWidth,window.innerWidth||0),f=Math.max(e.clientHeight,window.innerHeight||0),u=o?0:at(e),h=o?0:at(e,"left");return it({top:u-Number(null==n?void 0:n.top)+Number(null==n?void 0:n.marginTop),left:h-Number(null==n?void 0:n.left)+Number(null==n?void 0:n.marginLeft),width:c,height:f})}(u,c);else{let h;"scrollParent"===n?(h=st(ut(o)),"BODY"===h.nodeName&&(h=t.ownerDocument.documentElement)):h="window"===n?t.ownerDocument.documentElement:n;const a=lt(h,u,c);if(a&&"HTML"===h.nodeName&&!gt(u)){const{height:C,width:p}=rt(t.ownerDocument);d(f.top)&&d(a.top)&&d(a.marginTop)&&(f.top+=a.top-a.marginTop),d(f.top)&&(f.bottom=Number(C)+Number(a.top)),d(f.left)&&d(a.left)&&d(a.marginLeft)&&(f.left+=a.left-a.marginLeft),d(f.top)&&(f.right=Number(p)+Number(a.left))}else a&&(f=a)}return d(f.left)&&(f.left+=e),d(f.top)&&(f.top+=e),d(f.right)&&(f.right-=e),d(f.bottom)&&(f.bottom-=e),f}function bt({width:t,height:o}){return t*o}function wt(t,o,e,n,c=["top","bottom","right","left"],f="viewport",u=0){var h,a,C,p,w,E,x,L,S,M,j,F;if(-1===t.indexOf("auto"))return t;const R=pt(e,n,u,f),Z={top:{width:null!==(h=null==R?void 0:R.width)&&void 0!==h?h:0,height:(null!==(a=null==o?void 0:o.top)&&void 0!==a?a:0)-(null!==(C=null==R?void 0:R.top)&&void 0!==C?C:0)},right:{width:(null!==(p=null==R?void 0:R.right)&&void 0!==p?p:0)-(null!==(w=null==o?void 0:o.right)&&void 0!==w?w:0),height:null!==(E=null==R?void 0:R.height)&&void 0!==E?E:0},bottom:{width:null!==(x=null==R?void 0:R.width)&&void 0!==x?x:0,height:(null!==(L=null==R?void 0:R.bottom)&&void 0!==L?L:0)-(null!==(S=null==o?void 0:o.bottom)&&void 0!==S?S:0)},left:{width:(null!==(M=o.left)&&void 0!==M?M:0)-(null!==(j=null==R?void 0:R.left)&&void 0!==j?j:0),height:null!==(F=null==R?void 0:R.height)&&void 0!==F?F:0}},J=Object.keys(Z).map(U=>Object.assign(Object.assign({position:U},Z[U]),{area:bt(Z[U])})).sort((U,nt)=>nt.area-U.area);let q=J.filter(({width:U,height:nt})=>U>=e.clientWidth&&nt>=e.clientHeight);q=q.filter(({position:U})=>c.some(nt=>nt===U));const tt=q.length>0?q[0].position:J[0].position,ft=t.split(" ")[1];return e.className=e.className.replace(/bs-tooltip-auto/g,`bs-tooltip-${(0,O.Wl)().isBs5?m[tt]:tt}`),tt+(ft?`-${ft}`:"")}const g=(t,o=0)=>t?parseFloat(t):o;function s(t){const o=t.ownerDocument.defaultView,e=null==o?void 0:o.getComputedStyle(t),n=g(null==e?void 0:e.marginTop)+g(null==e?void 0:e.marginBottom),c=g(null==e?void 0:e.marginLeft)+g(null==e?void 0:e.marginRight);return{width:Number(t.offsetWidth)+c,height:Number(t.offsetHeight)+n}}function i(t,o,e){return lt(o,e?H(t):v(t,o),e)}function l(t,o,e){var n,c,f;const u=e.split(" ")[0],h=s(t),a={width:h.width,height:h.height},C=-1!==["right","left"].indexOf(u),p=C?"top":"left",w=C?"left":"top",E=C?"height":"width",x=C?"width":"height";return a[p]=(null!==(n=o[p])&&void 0!==n?n:0)+o[E]/2-h[E]/2,a[w]=u===w?(null!==(c=o[w])&&void 0!==c?c:0)-h[x]:null!==(f=o[function Et(t){const o={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,e=>o[e])}(w)])&&void 0!==f?f:0,a}function y(t,o){var e;return!!(null===(e=t.modifiers[o])||void 0===e?void 0:e.enabled)}const T={top:["top","top start","top end"],bottom:["bottom","bottom start","bottom end"],start:["start","start top","start bottom"],end:["end","end top","end bottom"]};function z(t,o){return!!(0,O.Wl)().isBs5&&T[o].includes(t)}function W(t){return(0,O.Wl)().isBs5?z(t,"end")?"ms-2":z(t,"start")?"me-2":z(t,"top")?"mb-2":z(t,"bottom")?"mt-2":"":""}function ht(t,o,e){!t||!o||Object.keys(o).forEach(n=>{let c="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&function ot(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(Number(t))}(o[n])&&(c="px"),e?e.setStyle(t,n,`${String(o[n])}${c}`):t.style[n]=String(o[n])+c})}function yt(t){var o,e,n,c,f,u;let h=t.offsets.target;const a=t.instance.target.querySelector(".arrow");if(!a)return t;const C=-1!==["left","right"].indexOf(t.placement.split(" ")[0]),p=C?"height":"width",w=C?"Top":"Left",E=w.toLowerCase(),x=C?"left":"top",L=C?"bottom":"right",S=s(a)[p],M=t.placement.split(" ")[1];(null!==(o=t.offsets.host[L])&&void 0!==o?o:0)-S<(null!==(e=h[E])&&void 0!==e?e:0)&&(h[E]-=(null!==(n=h[E])&&void 0!==n?n:0)-((null!==(c=t.offsets.host[L])&&void 0!==c?c:0)-S)),Number(t.offsets.host[E])+Number(S)>(null!==(f=h[L])&&void 0!==f?f:0)&&(h[E]+=Number(t.offsets.host[E])+Number(S)-Number(h[L])),h=it(h);const j=_(t.instance.target),F=parseFloat(j[`margin${w}`])||0,R=parseFloat(j[`border${w}Width`])||0;let Z;if(M){const q=parseFloat(j.borderRadius)||0,tt=Number(F+R+q);Z=E===M?Number(t.offsets.host[E])+tt:Number(t.offsets.host[E])+Number(t.offsets.host[p]-tt)}else Z=Number(t.offsets.host[E])+Number(t.offsets.host[p]/2-S/2);let J=Z-(null!==(u=h[E])&&void 0!==u?u:0)-F-R;return J=Math.max(Math.min(h[p]-(S+5),J),0),t.offsets.arrow={[E]:Math.round(J),[x]:""},t.instance.arrow=a,t}function Nt(t){if(t.offsets.target=it(t.offsets.target),!y(t.options,"flip"))return t.offsets.target=Object.assign(Object.assign({},t.offsets.target),l(t.instance.target,t.offsets.host,t.placement)),t;const o=pt(t.instance.target,t.instance.host,0,"viewport",!1);let e=t.placement.split(" ")[0],n=t.placement.split(" ")[1]||"";const h=wt("auto",t.offsets.host,t.instance.target,t.instance.host,t.options.allowedPositions),a=[e,h];return a.forEach((C,p)=>{var w,E,x,L,S,M,j,F,R,Z,J,q,tt,ft,U,nt;if(e!==C||a.length===p+1)return;e=t.placement.split(" ")[0];const Rt="left"===e&&Math.floor(null!==(w=t.offsets.target.right)&&void 0!==w?w:0)>Math.floor(null!==(E=t.offsets.host.left)&&void 0!==E?E:0)||"right"===e&&Math.floor(null!==(x=t.offsets.target.left)&&void 0!==x?x:0)<Math.floor(null!==(L=t.offsets.host.right)&&void 0!==L?L:0)||"top"===e&&Math.floor(null!==(S=t.offsets.target.bottom)&&void 0!==S?S:0)>Math.floor(null!==(M=t.offsets.host.top)&&void 0!==M?M:0)||"bottom"===e&&Math.floor(null!==(j=t.offsets.target.top)&&void 0!==j?j:0)<Math.floor(null!==(F=t.offsets.host.bottom)&&void 0!==F?F:0),Ct=Math.floor(null!==(R=t.offsets.target.left)&&void 0!==R?R:0)<Math.floor(null!==(Z=o.left)&&void 0!==Z?Z:0),Mt=Math.floor(null!==(J=t.offsets.target.right)&&void 0!==J?J:0)>Math.floor(null!==(q=o.right)&&void 0!==q?q:0),Dt=Math.floor(null!==(tt=t.offsets.target.top)&&void 0!==tt?tt:0)<Math.floor(null!==(ft=o.top)&&void 0!==ft?ft:0),xt=Math.floor(null!==(U=t.offsets.target.bottom)&&void 0!==U?U:0)>Math.floor(null!==(nt=o.bottom)&&void 0!==nt?nt:0),Lt="left"===e&&Ct||"right"===e&&Mt||"top"===e&&Dt||"bottom"===e&&xt,_t=-1!==["top","bottom"].indexOf(e),St=_t&&"left"===n&&Ct||_t&&"right"===n&&Mt||!_t&&"left"===n&&Dt||!_t&&"right"===n&&xt;(Rt||Lt||St)&&((Rt||Lt)&&(e=a[p+1]),St&&(n=function Ot(t){return"right"===t?"left":"left"===t?"right":t}(n)),t.placement=e+(n?` ${n}`:""),t.offsets.target=Object.assign(Object.assign({},t.offsets.target),l(t.instance.target,t.offsets.host,t.placement)))}),t}function At(t){var o;if(!y(t.options,"preventOverflow"))return t;const e="transform",n=t.instance.target.style,{top:c,left:f,[e]:u}=n;n.top="",n.left="",n[e]="";const h=pt(t.instance.target,t.instance.host,0,(null===(o=t.options.modifiers.preventOverflow)||void 0===o?void 0:o.boundariesElement)||"scrollParent",!1);n.top=c,n.left=f,n[e]=u;const C={primary(p){var w,E,x,L;let S=t.offsets.target[p];return(null!==(w=t.offsets.target[p])&&void 0!==w?w:0)<(null!==(E=h[p])&&void 0!==E?E:0)&&(S=Math.max(null!==(x=t.offsets.target[p])&&void 0!==x?x:0,null!==(L=h[p])&&void 0!==L?L:0)),{[p]:S}},secondary(p){var w,E,x,L;const S="right"===p,M=S?"left":"top";let F=t.offsets.target[M];return(null!==(w=t.offsets.target[p])&&void 0!==w?w:0)>(null!==(E=h[p])&&void 0!==E?E:0)&&(F=Math.min(null!==(x=t.offsets.target[M])&&void 0!==x?x:0,(null!==(L=h[p])&&void 0!==L?L:0)-t.offsets.target[S?"width":"height"])),{[M]:F}}};return["left","right","top","bottom"].forEach(p=>{const w=-1!==["left","top","start"].indexOf(p)?C.primary:C.secondary;t.offsets.target=Object.assign(Object.assign({},t.offsets.target),w(p))}),t}function Bt(t){var o;const e=t.placement,n=e.split(" ")[0],c=e.split(" ")[1];if(c){const{host:f,target:u}=t.offsets,h=-1!==["bottom","top"].indexOf(n),a=h?"left":"top",C=h?"width":"height",p={start:{[a]:f[a]},end:{[a]:(null!==(o=f[a])&&void 0!==o?o:0)+f[C]-u[C]}};t.offsets.target=Object.assign(Object.assign({},u),{[a]:a===c?p.start[a]:p.end[a]})}return t}const Vt=new class Pt{position(o,e){return this.offset(o,e)}offset(o,e){return i(e,o)}positionElements(o,e,n,c,f){const u=[Nt,Bt,At,yt],a=function Tt(t,o,e,n){if(!t||!o)return;const c=i(t,o);!e.match(/^(auto)*\s*(left|right|top|bottom|start|end)*$/)&&!e.match(/^(left|right|top|bottom|start|end)*(?: (left|right|top|bottom|start|end))*$/)&&(e="auto");const f=!!e.match(/auto/g);let u=e.match(/auto\s(left|right|top|bottom|start|end)/)?e.split(" ")[1]||"auto":e;const h=u.match(/^(left|right|top|bottom|start|end)* ?(?!\1)(left|right|top|bottom|start|end)?/);return h&&(u=h[1]+(h[2]?` ${h[2]}`:"")),-1!==["left right","right left","top bottom","bottom top"].indexOf(u)&&(u="auto"),u=wt(u,c,t,o,n?n.allowedPositions:void 0),{options:n||{modifiers:{}},instance:{target:t,host:o,arrow:void 0},offsets:{target:l(t,c,u),host:c,arrow:void 0},positionFixed:!1,placement:u,placementAuto:f}}(e,o,r[n],f);if(a)return u.reduce((C,p)=>p(C),a)}};let jt=(()=>{class t{constructor(e,n,c){this.update$$=new I.x,this.positionElements=new Map,this.isDisabled=!1,(0,K.NF)(c)&&e.runOutsideAngular(()=>{this.triggerEvent$=(0,V.T)((0,$.R)(window,"scroll",{passive:!0}),(0,$.R)(window,"resize",{passive:!0}),(0,G.of)(0,P.Z),this.update$$),this.triggerEvent$.subscribe(()=>{this.isDisabled||this.positionElements.forEach(f=>{!function Wt(t,o,e,n,c,f){const u=Vt.positionElements(t,o,e,n,c);if(!u)return;const h=function mt(t){var o,e,n,c;return{width:t.offsets.target.width,height:t.offsets.target.height,left:Math.floor(null!==(o=t.offsets.target.left)&&void 0!==o?o:0),top:Math.round(null!==(e=t.offsets.target.top)&&void 0!==e?e:0),bottom:Math.round(null!==(n=t.offsets.target.bottom)&&void 0!==n?n:0),right:Math.floor(null!==(c=t.offsets.target.right)&&void 0!==c?c:0)}}(u);ht(o,{"will-change":"transform",top:"0px",left:"0px",transform:`translate3d(${h.left}px, ${h.top}px, 0px)`},f),u.instance.arrow&&ht(u.instance.arrow,u.offsets.arrow,f),function k(t,o){const e=t.instance.target;let n=e.className;const c=(0,O.Wl)().isBs5?m[t.placement]:t.placement;t.placementAuto&&(n=n.replace(/bs-popover-auto/g,`bs-popover-${c}`),n=n.replace(/ms-2|me-2|mb-2|mt-2/g,""),n=n.replace(/bs-tooltip-auto/g,`bs-tooltip-${c}`),n=n.replace(/\sauto/g,` ${c}`),-1!==n.indexOf("popover")&&(n=n+" "+W(c)),-1!==n.indexOf("popover")&&-1===n.indexOf("popover-auto")&&(n+=" popover-auto"),-1!==n.indexOf("tooltip")&&-1===n.indexOf("tooltip-auto")&&(n+=" tooltip-auto")),n=n.replace(/left|right|top|bottom|end|start/g,`${c.split(" ")[0]}`),o?o.setAttribute(e,"class",n):e.className=n}(u,f)}(vt(f.target),vt(f.element),f.attachment,f.appendToBody,this.options,n.createRenderer(null,null))})})})}position(e){this.addPositionElement(e)}get event$(){return this.triggerEvent$}disable(){this.isDisabled=!0}enable(){this.isDisabled=!1}addPositionElement(e){this.positionElements.set(vt(e.element),e)}calcPosition(){this.update$$.next(null)}deletePositionElement(e){this.positionElements.delete(vt(e))}setOptions(e){this.options=e}}return t.\u0275fac=function(e){return new(e||t)(A.LFG(A.R0b),A.LFG(A.FYo),A.LFG(A.Lbi))},t.\u0275prov=A.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function vt(t){return"string"==typeof t?document.querySelector(t):t instanceof A.SBq?t.nativeElement:null!=t?t:null}},7691:(ct,Y,b)=>{b.d(Y,{AL:()=>I,C:()=>P,GU:()=>bt,O4:()=>Ot,Rg:()=>G,Wl:()=>dt,XA:()=>st,wo:()=>$});var O=b(5e3);class A{constructor(s,i){this.open=s,this.close=i||s}isManual(){return"manual"===this.open||"manual"===this.close}}const K={hover:["mouseover","mouseout"],focus:["focusin","focusout"]};function I(g,s=K){const i=(g||"").trim();if(0===i.length)return[];const l=i.split(/\s+/).map(T=>T.split(":")).map(T=>{const z=s[T[0]]||T;return new A(z[0],z[1])}),y=l.filter(T=>T.isManual());if(y.length>1)throw new Error("Triggers parse error: only one manual trigger is allowed");if(1===y.length&&l.length>1)throw new Error("Triggers parse error: manual trigger can't be mixed with other triggers");return l}function $(g,s){const i=I(s.triggers),l=s.target;if(1===i.length&&i[0].isManual())return Function.prototype;const y=[],T=[],z=()=>{T.forEach(W=>y.push(W())),T.length=0};return i.forEach(W=>{const k=W.open===W.close,ht=k?s.toggle:s.show;if(!k&&W.close&&s.hide){const yt=g.listen(l,W.close,s.hide);T.push(()=>yt)}ht&&y.push(g.listen(l,W.open,()=>ht(z)))}),()=>{y.forEach(W=>W())}}function G(g,s){return s.outsideClick?g.listen("document","click",i=>{s.target&&s.target.contains(i.target)||s.targets&&s.targets.some(l=>l.contains(i.target))||s.hide&&s.hide()}):Function.prototype}function P(g,s){return s.outsideEsc?g.listen("document","keyup.esc",i=>{s.target&&s.target.contains(i.target)||s.targets&&s.targets.some(l=>l.contains(i.target))||s.hide&&s.hide()}):Function.prototype}const r="undefined"!=typeof window&&window||{};let d;function Q(){if(void 0===r.document)return"bs4";const g=r.document.createElement("span");g.innerText="testing bs version",g.classList.add("d-none"),g.classList.add("pl-1"),r.document.head.appendChild(g);const s=g.getBoundingClientRect(),i=r.getComputedStyle(g).paddingLeft;return!s||s&&0!==s.top?(r.document.head.removeChild(g),"bs3"):i&&parseFloat(i)?(r.document.head.removeChild(g),"bs4"):(r.document.head.removeChild(g),"bs5")}function st(){return void 0===r||(void 0===r.__theme?(d||(d=Q()),"bs3"===d):"bs3"===r.__theme)}function lt(){return!st()&&(d||(d=Q()),"bs4"===d)}function dt(){return{isBs3:st(),isBs4:lt(),isBs5:!st()&&!lt()&&(d||(d=Q()),"bs5"===d)}}function bt(){const g="Change";return function(i,l){const y=` __${l}Value`;Object.defineProperty(i,l,{get(){return this[y]},set(T){const z=this[y];this[y]=T,z!==T&&this[l+g]&&this[l+g].emit(T)}})}}const mt={},Et="undefined"==typeof console||!("warn"in console);function Ot(g){!(0,O.X6Q)()||Et||g in mt||(mt[g]=!0,console.warn(g))}}}]);