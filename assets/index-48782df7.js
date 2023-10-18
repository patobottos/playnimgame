function o_(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ap(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var O1={exports:{}},yc={},D1={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ta=Symbol.for("react.element"),a_=Symbol.for("react.portal"),l_=Symbol.for("react.fragment"),u_=Symbol.for("react.strict_mode"),c_=Symbol.for("react.profiler"),h_=Symbol.for("react.provider"),f_=Symbol.for("react.context"),d_=Symbol.for("react.forward_ref"),p_=Symbol.for("react.suspense"),m_=Symbol.for("react.memo"),g_=Symbol.for("react.lazy"),av=Symbol.iterator;function v_(t){return t===null||typeof t!="object"?null:(t=av&&t[av]||t["@@iterator"],typeof t=="function"?t:null)}var L1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$1=Object.assign,M1={};function Fs(t,e,n){this.props=t,this.context=e,this.refs=M1,this.updater=n||L1}Fs.prototype.isReactComponent={};Fs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function j1(){}j1.prototype=Fs.prototype;function Np(t,e,n){this.props=t,this.context=e,this.refs=M1,this.updater=n||L1}var Pp=Np.prototype=new j1;Pp.constructor=Np;$1(Pp,Fs.prototype);Pp.isPureReactComponent=!0;var lv=Array.isArray,F1=Object.prototype.hasOwnProperty,Rp={current:null},U1={key:!0,ref:!0,__self:!0,__source:!0};function z1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)F1.call(e,r)&&!U1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ta,type:t,key:s,ref:o,props:i,_owner:Rp.current}}function y_(t,e){return{$$typeof:Ta,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Op(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ta}function w_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var uv=/\/+/g;function Oh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?w_(""+t.key):e.toString(36)}function Yl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ta:case a_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Oh(o,0):r,lv(i)?(n="",t!=null&&(n=t.replace(uv,"$&/")+"/"),Yl(i,e,n,"",function(u){return u})):i!=null&&(Op(i)&&(i=y_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(uv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",lv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Oh(s,a);o+=Yl(s,e,n,l,i)}else if(l=v_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Oh(s,a++),o+=Yl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ol(t,e,n){if(t==null)return t;var r=[],i=0;return Yl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function k_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Rt={current:null},Ql={transition:null},E_={ReactCurrentDispatcher:Rt,ReactCurrentBatchConfig:Ql,ReactCurrentOwner:Rp};ie.Children={map:ol,forEach:function(t,e,n){ol(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ol(t,function(){e++}),e},toArray:function(t){return ol(t,function(e){return e})||[]},only:function(t){if(!Op(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=Fs;ie.Fragment=l_;ie.Profiler=c_;ie.PureComponent=Np;ie.StrictMode=u_;ie.Suspense=p_;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E_;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=$1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Rp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)F1.call(e,l)&&!U1.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ta,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:f_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:h_,_context:t},t.Consumer=t};ie.createElement=z1;ie.createFactory=function(t){var e=z1.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:d_,render:t}};ie.isValidElement=Op;ie.lazy=function(t){return{$$typeof:g_,_payload:{_status:-1,_result:t},_init:k_}};ie.memo=function(t,e){return{$$typeof:m_,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=Ql.transition;Ql.transition={};try{t()}finally{Ql.transition=e}};ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ie.useCallback=function(t,e){return Rt.current.useCallback(t,e)};ie.useContext=function(t){return Rt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return Rt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return Rt.current.useEffect(t,e)};ie.useId=function(){return Rt.current.useId()};ie.useImperativeHandle=function(t,e,n){return Rt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return Rt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return Rt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return Rt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return Rt.current.useReducer(t,e,n)};ie.useRef=function(t){return Rt.current.useRef(t)};ie.useState=function(t){return Rt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return Rt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return Rt.current.useTransition()};ie.version="18.2.0";D1.exports=ie;var b=D1.exports;const Wr=Ap(b),S_=o_({__proto__:null,default:Wr},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_=b,__=Symbol.for("react.element"),I_=Symbol.for("react.fragment"),T_=Object.prototype.hasOwnProperty,C_=x_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b_={key:!0,ref:!0,__self:!0,__source:!0};function V1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)T_.call(e,r)&&!b_.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:__,type:t,key:s,ref:o,props:i,_owner:C_.current}}yc.Fragment=I_;yc.jsx=V1;yc.jsxs=V1;O1.exports=yc;var p=O1.exports,Df={},B1={exports:{}},Yt={},H1={exports:{}},W1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,W){var q=P.length;P.push(W);e:for(;0<q;){var ke=q-1>>>1,O=P[ke];if(0<i(O,W))P[ke]=W,P[q]=O,q=ke;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var W=P[0],q=P.pop();if(q!==W){P[0]=q;e:for(var ke=0,O=P.length,$=O>>>1;ke<$;){var j=2*(ke+1)-1,Y=P[j],S=j+1,se=P[S];if(0>i(Y,q))S<O&&0>i(se,Y)?(P[ke]=se,P[S]=q,ke=S):(P[ke]=Y,P[j]=q,ke=j);else if(S<O&&0>i(se,q))P[ke]=se,P[S]=q,ke=S;else break e}}return W}function i(P,W){var q=P.sortIndex-W.sortIndex;return q!==0?q:P.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,g=!1,y=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(P){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=P)r(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function E(P){if(w=!1,v(P),!y)if(n(l)!==null)y=!0,an(x);else{var W=n(u);W!==null&&Ke(E,W.startTime-P)}}function x(P,W){y=!1,w&&(w=!1,m(T),T=-1),g=!0;var q=f;try{for(v(W),h=n(l);h!==null&&(!(h.expirationTime>W)||P&&!fe());){var ke=h.callback;if(typeof ke=="function"){h.callback=null,f=h.priorityLevel;var O=ke(h.expirationTime<=W);W=t.unstable_now(),typeof O=="function"?h.callback=O:h===n(l)&&r(l),v(W)}else r(l);h=n(l)}if(h!==null)var $=!0;else{var j=n(u);j!==null&&Ke(E,j.startTime-W),$=!1}return $}finally{h=null,f=q,g=!1}}var A=!1,N=null,T=-1,H=5,L=-1;function fe(){return!(t.unstable_now()-L<H)}function ae(){if(N!==null){var P=t.unstable_now();L=P;var W=!0;try{W=N(!0,P)}finally{W?le():(A=!1,N=null)}}else A=!1}var le;if(typeof d=="function")le=function(){d(ae)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,Fe=Ne.port2;Ne.port1.onmessage=ae,le=function(){Fe.postMessage(null)}}else le=function(){k(ae,0)};function an(P){N=P,A||(A=!0,le())}function Ke(P,W){T=k(function(){P(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,an(x))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var q=f;f=W;try{return P()}finally{f=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,W){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var q=f;f=P;try{return W()}finally{f=q}},t.unstable_scheduleCallback=function(P,W,q){var ke=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ke+q:ke):q=ke,P){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=q+O,P={id:c++,callback:W,priorityLevel:P,startTime:q,expirationTime:O,sortIndex:-1},q>ke?(P.sortIndex=q,e(u,P),n(l)===null&&P===n(u)&&(w?(m(T),T=-1):w=!0,Ke(E,q-ke))):(P.sortIndex=O,e(l,P),y||g||(y=!0,an(x))),P},t.unstable_shouldYield=fe,t.unstable_wrapCallback=function(P){var W=f;return function(){var q=f;f=W;try{return P.apply(this,arguments)}finally{f=q}}}})(W1);H1.exports=W1;var A_=H1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G1=b,Kt=A_;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var K1=new Set,jo={};function Ci(t,e){ys(t,e),ys(t+"Capture",e)}function ys(t,e){for(jo[t]=e,t=0;t<e.length;t++)K1.add(e[t])}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lf=Object.prototype.hasOwnProperty,N_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cv={},hv={};function P_(t){return Lf.call(hv,t)?!0:Lf.call(cv,t)?!1:N_.test(t)?hv[t]=!0:(cv[t]=!0,!1)}function R_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function O_(t,e,n,r){if(e===null||typeof e>"u"||R_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ot(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ft[t]=new Ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ft[e]=new Ot(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ft[t]=new Ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ft[t]=new Ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ft[t]=new Ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ft[t]=new Ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ft[t]=new Ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ft[t]=new Ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ft[t]=new Ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dp=/[\-:]([a-z])/g;function Lp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dp,Lp);ft[e]=new Ot(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dp,Lp);ft[e]=new Ot(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dp,Lp);ft[e]=new Ot(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ft[t]=new Ot(t,1,!1,t.toLowerCase(),null,!1,!1)});ft.xlinkHref=new Ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ft[t]=new Ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function $p(t,e,n,r){var i=ft.hasOwnProperty(e)?ft[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(O_(e,n,i,r)&&(n=null),r||i===null?P_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var nr=G1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,al=Symbol.for("react.element"),Ui=Symbol.for("react.portal"),zi=Symbol.for("react.fragment"),Mp=Symbol.for("react.strict_mode"),$f=Symbol.for("react.profiler"),q1=Symbol.for("react.provider"),Y1=Symbol.for("react.context"),jp=Symbol.for("react.forward_ref"),Mf=Symbol.for("react.suspense"),jf=Symbol.for("react.suspense_list"),Fp=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),Q1=Symbol.for("react.offscreen"),fv=Symbol.iterator;function eo(t){return t===null||typeof t!="object"?null:(t=fv&&t[fv]||t["@@iterator"],typeof t=="function"?t:null)}var Oe=Object.assign,Dh;function co(t){if(Dh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Dh=e&&e[1]||""}return`
`+Dh+t}var Lh=!1;function $h(t,e){if(!t||Lh)return"";Lh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Lh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?co(t):""}function D_(t){switch(t.tag){case 5:return co(t.type);case 16:return co("Lazy");case 13:return co("Suspense");case 19:return co("SuspenseList");case 0:case 2:case 15:return t=$h(t.type,!1),t;case 11:return t=$h(t.type.render,!1),t;case 1:return t=$h(t.type,!0),t;default:return""}}function Ff(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zi:return"Fragment";case Ui:return"Portal";case $f:return"Profiler";case Mp:return"StrictMode";case Mf:return"Suspense";case jf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Y1:return(t.displayName||"Context")+".Consumer";case q1:return(t._context.displayName||"Context")+".Provider";case jp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Fp:return e=t.displayName||null,e!==null?e:Ff(t.type)||"Memo";case ur:e=t._payload,t=t._init;try{return Ff(t(e))}catch{}}return null}function L_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ff(e);case 8:return e===Mp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function X1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $_(t){var e=X1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ll(t){t._valueTracker||(t._valueTracker=$_(t))}function J1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=X1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function yu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Uf(t,e){var n=e.checked;return Oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function dv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Z1(t,e){e=e.checked,e!=null&&$p(t,"checked",e,!1)}function zf(t,e){Z1(t,e);var n=Mr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vf(t,e.type,Mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vf(t,e,n){(e!=="number"||yu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ho=Array.isArray;function ss(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Mr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Bf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return Oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(ho(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mr(n)}}function ew(t,e){var n=Mr(e.value),r=Mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function gv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function tw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?tw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ul,nw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ul=ul||document.createElement("div"),ul.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ul.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},M_=["Webkit","ms","Moz","O"];Object.keys(ko).forEach(function(t){M_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ko[e]=ko[t]})});function rw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ko.hasOwnProperty(t)&&ko[t]?(""+e).trim():e+"px"}function iw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=rw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var j_=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wf(t,e){if(e){if(j_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function Gf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kf=null;function Up(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qf=null,os=null,as=null;function vv(t){if(t=Aa(t)){if(typeof qf!="function")throw Error(I(280));var e=t.stateNode;e&&(e=xc(e),qf(t.stateNode,t.type,e))}}function sw(t){os?as?as.push(t):as=[t]:os=t}function ow(){if(os){var t=os,e=as;if(as=os=null,vv(t),e)for(t=0;t<e.length;t++)vv(e[t])}}function aw(t,e){return t(e)}function lw(){}var Mh=!1;function uw(t,e,n){if(Mh)return t(e,n);Mh=!0;try{return aw(t,e,n)}finally{Mh=!1,(os!==null||as!==null)&&(lw(),ow())}}function Uo(t,e){var n=t.stateNode;if(n===null)return null;var r=xc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var Yf=!1;if(Bn)try{var to={};Object.defineProperty(to,"passive",{get:function(){Yf=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{Yf=!1}function F_(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Eo=!1,wu=null,ku=!1,Qf=null,U_={onError:function(t){Eo=!0,wu=t}};function z_(t,e,n,r,i,s,o,a,l){Eo=!1,wu=null,F_.apply(U_,arguments)}function V_(t,e,n,r,i,s,o,a,l){if(z_.apply(this,arguments),Eo){if(Eo){var u=wu;Eo=!1,wu=null}else throw Error(I(198));ku||(ku=!0,Qf=u)}}function bi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function cw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yv(t){if(bi(t)!==t)throw Error(I(188))}function B_(t){var e=t.alternate;if(!e){if(e=bi(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return yv(i),t;if(s===r)return yv(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function hw(t){return t=B_(t),t!==null?fw(t):null}function fw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=fw(t);if(e!==null)return e;t=t.sibling}return null}var dw=Kt.unstable_scheduleCallback,wv=Kt.unstable_cancelCallback,H_=Kt.unstable_shouldYield,W_=Kt.unstable_requestPaint,ze=Kt.unstable_now,G_=Kt.unstable_getCurrentPriorityLevel,zp=Kt.unstable_ImmediatePriority,pw=Kt.unstable_UserBlockingPriority,Eu=Kt.unstable_NormalPriority,K_=Kt.unstable_LowPriority,mw=Kt.unstable_IdlePriority,wc=null,Tn=null;function q_(t){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(wc,t,void 0,(t.current.flags&128)===128)}catch{}}var pn=Math.clz32?Math.clz32:X_,Y_=Math.log,Q_=Math.LN2;function X_(t){return t>>>=0,t===0?32:31-(Y_(t)/Q_|0)|0}var cl=64,hl=4194304;function fo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Su(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=fo(a):(s&=o,s!==0&&(r=fo(s)))}else o=n&~i,o!==0?r=fo(o):s!==0&&(r=fo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-pn(e),i=1<<n,r|=t[n],e&=~i;return r}function J_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z_(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-pn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=J_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Xf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gw(){var t=cl;return cl<<=1,!(cl&4194240)&&(cl=64),t}function jh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pn(e),t[e]=n}function eI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-pn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Vp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-pn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ve=0;function vw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yw,Bp,ww,kw,Ew,Jf=!1,fl=[],Sr=null,xr=null,_r=null,zo=new Map,Vo=new Map,hr=[],tI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kv(t,e){switch(t){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":zo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(e.pointerId)}}function no(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Aa(e),e!==null&&Bp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function nI(t,e,n,r,i){switch(e){case"focusin":return Sr=no(Sr,t,e,n,r,i),!0;case"dragenter":return xr=no(xr,t,e,n,r,i),!0;case"mouseover":return _r=no(_r,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return zo.set(s,no(zo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Vo.set(s,no(Vo.get(s)||null,t,e,n,r,i)),!0}return!1}function Sw(t){var e=ti(t.target);if(e!==null){var n=bi(e);if(n!==null){if(e=n.tag,e===13){if(e=cw(n),e!==null){t.blockedOn=e,Ew(t.priority,function(){ww(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Kf=r,n.target.dispatchEvent(r),Kf=null}else return e=Aa(n),e!==null&&Bp(e),t.blockedOn=n,!1;e.shift()}return!0}function Ev(t,e,n){Xl(t)&&n.delete(e)}function rI(){Jf=!1,Sr!==null&&Xl(Sr)&&(Sr=null),xr!==null&&Xl(xr)&&(xr=null),_r!==null&&Xl(_r)&&(_r=null),zo.forEach(Ev),Vo.forEach(Ev)}function ro(t,e){t.blockedOn===e&&(t.blockedOn=null,Jf||(Jf=!0,Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority,rI)))}function Bo(t){function e(i){return ro(i,t)}if(0<fl.length){ro(fl[0],t);for(var n=1;n<fl.length;n++){var r=fl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Sr!==null&&ro(Sr,t),xr!==null&&ro(xr,t),_r!==null&&ro(_r,t),zo.forEach(e),Vo.forEach(e),n=0;n<hr.length;n++)r=hr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<hr.length&&(n=hr[0],n.blockedOn===null);)Sw(n),n.blockedOn===null&&hr.shift()}var ls=nr.ReactCurrentBatchConfig,xu=!0;function iI(t,e,n,r){var i=ve,s=ls.transition;ls.transition=null;try{ve=1,Hp(t,e,n,r)}finally{ve=i,ls.transition=s}}function sI(t,e,n,r){var i=ve,s=ls.transition;ls.transition=null;try{ve=4,Hp(t,e,n,r)}finally{ve=i,ls.transition=s}}function Hp(t,e,n,r){if(xu){var i=Zf(t,e,n,r);if(i===null)qh(t,e,r,_u,n),kv(t,r);else if(nI(i,t,e,n,r))r.stopPropagation();else if(kv(t,r),e&4&&-1<tI.indexOf(t)){for(;i!==null;){var s=Aa(i);if(s!==null&&yw(s),s=Zf(t,e,n,r),s===null&&qh(t,e,r,_u,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else qh(t,e,r,null,n)}}var _u=null;function Zf(t,e,n,r){if(_u=null,t=Up(r),t=ti(t),t!==null)if(e=bi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=cw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _u=t,null}function xw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(G_()){case zp:return 1;case pw:return 4;case Eu:case K_:return 16;case mw:return 536870912;default:return 16}default:return 16}}var vr=null,Wp=null,Jl=null;function _w(){if(Jl)return Jl;var t,e=Wp,n=e.length,r,i="value"in vr?vr.value:vr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Jl=i.slice(t,1<r?1-r:void 0)}function Zl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function dl(){return!0}function Sv(){return!1}function Qt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?dl:Sv,this.isPropagationStopped=Sv,this}return Oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),e}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gp=Qt(Us),ba=Oe({},Us,{view:0,detail:0}),oI=Qt(ba),Fh,Uh,io,kc=Oe({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(Fh=t.screenX-io.screenX,Uh=t.screenY-io.screenY):Uh=Fh=0,io=t),Fh)},movementY:function(t){return"movementY"in t?t.movementY:Uh}}),xv=Qt(kc),aI=Oe({},kc,{dataTransfer:0}),lI=Qt(aI),uI=Oe({},ba,{relatedTarget:0}),zh=Qt(uI),cI=Oe({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),hI=Qt(cI),fI=Oe({},Us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dI=Qt(fI),pI=Oe({},Us,{data:0}),_v=Qt(pI),mI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=vI[t])?!!e[t]:!1}function Kp(){return yI}var wI=Oe({},ba,{key:function(t){if(t.key){var e=mI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kp,charCode:function(t){return t.type==="keypress"?Zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kI=Qt(wI),EI=Oe({},kc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Iv=Qt(EI),SI=Oe({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kp}),xI=Qt(SI),_I=Oe({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),II=Qt(_I),TI=Oe({},kc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),CI=Qt(TI),bI=[9,13,27,32],qp=Bn&&"CompositionEvent"in window,So=null;Bn&&"documentMode"in document&&(So=document.documentMode);var AI=Bn&&"TextEvent"in window&&!So,Iw=Bn&&(!qp||So&&8<So&&11>=So),Tv=String.fromCharCode(32),Cv=!1;function Tw(t,e){switch(t){case"keyup":return bI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vi=!1;function NI(t,e){switch(t){case"compositionend":return Cw(e);case"keypress":return e.which!==32?null:(Cv=!0,Tv);case"textInput":return t=e.data,t===Tv&&Cv?null:t;default:return null}}function PI(t,e){if(Vi)return t==="compositionend"||!qp&&Tw(t,e)?(t=_w(),Jl=Wp=vr=null,Vi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Iw&&e.locale!=="ko"?null:e.data;default:return null}}var RI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!RI[t.type]:e==="textarea"}function bw(t,e,n,r){sw(r),e=Iu(e,"onChange"),0<e.length&&(n=new Gp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var xo=null,Ho=null;function OI(t){Fw(t,0)}function Ec(t){var e=Wi(t);if(J1(e))return t}function DI(t,e){if(t==="change")return e}var Aw=!1;if(Bn){var Vh;if(Bn){var Bh="oninput"in document;if(!Bh){var Av=document.createElement("div");Av.setAttribute("oninput","return;"),Bh=typeof Av.oninput=="function"}Vh=Bh}else Vh=!1;Aw=Vh&&(!document.documentMode||9<document.documentMode)}function Nv(){xo&&(xo.detachEvent("onpropertychange",Nw),Ho=xo=null)}function Nw(t){if(t.propertyName==="value"&&Ec(Ho)){var e=[];bw(e,Ho,t,Up(t)),uw(OI,e)}}function LI(t,e,n){t==="focusin"?(Nv(),xo=e,Ho=n,xo.attachEvent("onpropertychange",Nw)):t==="focusout"&&Nv()}function $I(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ec(Ho)}function MI(t,e){if(t==="click")return Ec(e)}function jI(t,e){if(t==="input"||t==="change")return Ec(e)}function FI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gn=typeof Object.is=="function"?Object.is:FI;function Wo(t,e){if(gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Lf.call(e,i)||!gn(t[i],e[i]))return!1}return!0}function Pv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rv(t,e){var n=Pv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pv(n)}}function Pw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Pw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Rw(){for(var t=window,e=yu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yu(t.document)}return e}function Yp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function UI(t){var e=Rw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Pw(n.ownerDocument.documentElement,n)){if(r!==null&&Yp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Rv(n,s);var o=Rv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zI=Bn&&"documentMode"in document&&11>=document.documentMode,Bi=null,ed=null,_o=null,td=!1;function Ov(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;td||Bi==null||Bi!==yu(r)||(r=Bi,"selectionStart"in r&&Yp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_o&&Wo(_o,r)||(_o=r,r=Iu(ed,"onSelect"),0<r.length&&(e=new Gp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Bi)))}function pl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Hi={animationend:pl("Animation","AnimationEnd"),animationiteration:pl("Animation","AnimationIteration"),animationstart:pl("Animation","AnimationStart"),transitionend:pl("Transition","TransitionEnd")},Hh={},Ow={};Bn&&(Ow=document.createElement("div").style,"AnimationEvent"in window||(delete Hi.animationend.animation,delete Hi.animationiteration.animation,delete Hi.animationstart.animation),"TransitionEvent"in window||delete Hi.transitionend.transition);function Sc(t){if(Hh[t])return Hh[t];if(!Hi[t])return t;var e=Hi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ow)return Hh[t]=e[n];return t}var Dw=Sc("animationend"),Lw=Sc("animationiteration"),$w=Sc("animationstart"),Mw=Sc("transitionend"),jw=new Map,Dv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(t,e){jw.set(t,e),Ci(e,[t])}for(var Wh=0;Wh<Dv.length;Wh++){var Gh=Dv[Wh],VI=Gh.toLowerCase(),BI=Gh[0].toUpperCase()+Gh.slice(1);Gr(VI,"on"+BI)}Gr(Dw,"onAnimationEnd");Gr(Lw,"onAnimationIteration");Gr($w,"onAnimationStart");Gr("dblclick","onDoubleClick");Gr("focusin","onFocus");Gr("focusout","onBlur");Gr(Mw,"onTransitionEnd");ys("onMouseEnter",["mouseout","mouseover"]);ys("onMouseLeave",["mouseout","mouseover"]);ys("onPointerEnter",["pointerout","pointerover"]);ys("onPointerLeave",["pointerout","pointerover"]);Ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ci("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),HI=new Set("cancel close invalid load scroll toggle".split(" ").concat(po));function Lv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,V_(r,e,void 0,t),t.currentTarget=null}function Fw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Lv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Lv(i,a,u),s=l}}}if(ku)throw t=Qf,ku=!1,Qf=null,t}function Se(t,e){var n=e[od];n===void 0&&(n=e[od]=new Set);var r=t+"__bubble";n.has(r)||(Uw(e,t,2,!1),n.add(r))}function Kh(t,e,n){var r=0;e&&(r|=4),Uw(n,t,r,e)}var ml="_reactListening"+Math.random().toString(36).slice(2);function Go(t){if(!t[ml]){t[ml]=!0,K1.forEach(function(n){n!=="selectionchange"&&(HI.has(n)||Kh(n,!1,t),Kh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ml]||(e[ml]=!0,Kh("selectionchange",!1,e))}}function Uw(t,e,n,r){switch(xw(e)){case 1:var i=iI;break;case 4:i=sI;break;default:i=Hp}n=i.bind(null,e,n,t),i=void 0,!Yf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function qh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ti(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}uw(function(){var u=s,c=Up(n),h=[];e:{var f=jw.get(t);if(f!==void 0){var g=Gp,y=t;switch(t){case"keypress":if(Zl(n)===0)break e;case"keydown":case"keyup":g=kI;break;case"focusin":y="focus",g=zh;break;case"focusout":y="blur",g=zh;break;case"beforeblur":case"afterblur":g=zh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=xv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=lI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=xI;break;case Dw:case Lw:case $w:g=hI;break;case Mw:g=II;break;case"scroll":g=oI;break;case"wheel":g=CI;break;case"copy":case"cut":case"paste":g=dI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Iv}var w=(e&4)!==0,k=!w&&t==="scroll",m=w?f!==null?f+"Capture":null:f;w=[];for(var d=u,v;d!==null;){v=d;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,m!==null&&(E=Uo(d,m),E!=null&&w.push(Ko(d,E,v)))),k)break;d=d.return}0<w.length&&(f=new g(f,y,null,n,c),h.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Kf&&(y=n.relatedTarget||n.fromElement)&&(ti(y)||y[Hn]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?ti(y):null,y!==null&&(k=bi(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(w=xv,E="onMouseLeave",m="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(w=Iv,E="onPointerLeave",m="onPointerEnter",d="pointer"),k=g==null?f:Wi(g),v=y==null?f:Wi(y),f=new w(E,d+"leave",g,n,c),f.target=k,f.relatedTarget=v,E=null,ti(c)===u&&(w=new w(m,d+"enter",y,n,c),w.target=v,w.relatedTarget=k,E=w),k=E,g&&y)t:{for(w=g,m=y,d=0,v=w;v;v=Oi(v))d++;for(v=0,E=m;E;E=Oi(E))v++;for(;0<d-v;)w=Oi(w),d--;for(;0<v-d;)m=Oi(m),v--;for(;d--;){if(w===m||m!==null&&w===m.alternate)break t;w=Oi(w),m=Oi(m)}w=null}else w=null;g!==null&&$v(h,f,g,w,!1),y!==null&&k!==null&&$v(h,k,y,w,!0)}}e:{if(f=u?Wi(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var x=DI;else if(bv(f))if(Aw)x=jI;else{x=$I;var A=LI}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(x=MI);if(x&&(x=x(t,u))){bw(h,x,n,c);break e}A&&A(t,f,u),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Vf(f,"number",f.value)}switch(A=u?Wi(u):window,t){case"focusin":(bv(A)||A.contentEditable==="true")&&(Bi=A,ed=u,_o=null);break;case"focusout":_o=ed=Bi=null;break;case"mousedown":td=!0;break;case"contextmenu":case"mouseup":case"dragend":td=!1,Ov(h,n,c);break;case"selectionchange":if(zI)break;case"keydown":case"keyup":Ov(h,n,c)}var N;if(qp)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Vi?Tw(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Iw&&n.locale!=="ko"&&(Vi||T!=="onCompositionStart"?T==="onCompositionEnd"&&Vi&&(N=_w()):(vr=c,Wp="value"in vr?vr.value:vr.textContent,Vi=!0)),A=Iu(u,T),0<A.length&&(T=new _v(T,t,null,n,c),h.push({event:T,listeners:A}),N?T.data=N:(N=Cw(n),N!==null&&(T.data=N)))),(N=AI?NI(t,n):PI(t,n))&&(u=Iu(u,"onBeforeInput"),0<u.length&&(c=new _v("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=N))}Fw(h,e)})}function Ko(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Iu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Uo(t,n),s!=null&&r.unshift(Ko(t,s,i)),s=Uo(t,e),s!=null&&r.push(Ko(t,s,i))),t=t.return}return r}function Oi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $v(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Uo(n,s),l!=null&&o.unshift(Ko(n,l,a))):i||(l=Uo(n,s),l!=null&&o.push(Ko(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var WI=/\r\n?/g,GI=/\u0000|\uFFFD/g;function Mv(t){return(typeof t=="string"?t:""+t).replace(WI,`
`).replace(GI,"")}function gl(t,e,n){if(e=Mv(e),Mv(t)!==e&&n)throw Error(I(425))}function Tu(){}var nd=null,rd=null;function id(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sd=typeof setTimeout=="function"?setTimeout:void 0,KI=typeof clearTimeout=="function"?clearTimeout:void 0,jv=typeof Promise=="function"?Promise:void 0,qI=typeof queueMicrotask=="function"?queueMicrotask:typeof jv<"u"?function(t){return jv.resolve(null).then(t).catch(YI)}:sd;function YI(t){setTimeout(function(){throw t})}function Yh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Bo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Bo(e)}function Ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zs=Math.random().toString(36).slice(2),En="__reactFiber$"+zs,qo="__reactProps$"+zs,Hn="__reactContainer$"+zs,od="__reactEvents$"+zs,QI="__reactListeners$"+zs,XI="__reactHandles$"+zs;function ti(t){var e=t[En];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Hn]||n[En]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fv(t);t!==null;){if(n=t[En])return n;t=Fv(t)}return e}t=n,n=t.parentNode}return null}function Aa(t){return t=t[En]||t[Hn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function xc(t){return t[qo]||null}var ad=[],Gi=-1;function Kr(t){return{current:t}}function Te(t){0>Gi||(t.current=ad[Gi],ad[Gi]=null,Gi--)}function Ee(t,e){Gi++,ad[Gi]=t.current,t.current=e}var jr={},It=Kr(jr),Ft=Kr(!1),di=jr;function ws(t,e){var n=t.type.contextTypes;if(!n)return jr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ut(t){return t=t.childContextTypes,t!=null}function Cu(){Te(Ft),Te(It)}function Uv(t,e,n){if(It.current!==jr)throw Error(I(168));Ee(It,e),Ee(Ft,n)}function zw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,L_(t)||"Unknown",i));return Oe({},n,r)}function bu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||jr,di=It.current,Ee(It,t),Ee(Ft,Ft.current),!0}function zv(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=zw(t,e,di),r.__reactInternalMemoizedMergedChildContext=t,Te(Ft),Te(It),Ee(It,t)):Te(Ft),Ee(Ft,n)}var Ln=null,_c=!1,Qh=!1;function Vw(t){Ln===null?Ln=[t]:Ln.push(t)}function JI(t){_c=!0,Vw(t)}function qr(){if(!Qh&&Ln!==null){Qh=!0;var t=0,e=ve;try{var n=Ln;for(ve=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ln=null,_c=!1}catch(i){throw Ln!==null&&(Ln=Ln.slice(t+1)),dw(zp,qr),i}finally{ve=e,Qh=!1}}return null}var Ki=[],qi=0,Au=null,Nu=0,Zt=[],en=0,pi=null,$n=1,Mn="";function Jr(t,e){Ki[qi++]=Nu,Ki[qi++]=Au,Au=t,Nu=e}function Bw(t,e,n){Zt[en++]=$n,Zt[en++]=Mn,Zt[en++]=pi,pi=t;var r=$n;t=Mn;var i=32-pn(r)-1;r&=~(1<<i),n+=1;var s=32-pn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,$n=1<<32-pn(e)+i|n<<i|r,Mn=s+t}else $n=1<<s|n<<i|r,Mn=t}function Qp(t){t.return!==null&&(Jr(t,1),Bw(t,1,0))}function Xp(t){for(;t===Au;)Au=Ki[--qi],Ki[qi]=null,Nu=Ki[--qi],Ki[qi]=null;for(;t===pi;)pi=Zt[--en],Zt[en]=null,Mn=Zt[--en],Zt[en]=null,$n=Zt[--en],Zt[en]=null}var Wt=null,Bt=null,Ae=!1,fn=null;function Hw(t,e){var n=nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wt=t,Bt=Ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wt=t,Bt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=pi!==null?{id:$n,overflow:Mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wt=t,Bt=null,!0):!1;default:return!1}}function ld(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ud(t){if(Ae){var e=Bt;if(e){var n=e;if(!Vv(t,e)){if(ld(t))throw Error(I(418));e=Ir(n.nextSibling);var r=Wt;e&&Vv(t,e)?Hw(r,n):(t.flags=t.flags&-4097|2,Ae=!1,Wt=t)}}else{if(ld(t))throw Error(I(418));t.flags=t.flags&-4097|2,Ae=!1,Wt=t}}}function Bv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wt=t}function vl(t){if(t!==Wt)return!1;if(!Ae)return Bv(t),Ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!id(t.type,t.memoizedProps)),e&&(e=Bt)){if(ld(t))throw Ww(),Error(I(418));for(;e;)Hw(t,e),e=Ir(e.nextSibling)}if(Bv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Bt=Ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Bt=null}}else Bt=Wt?Ir(t.stateNode.nextSibling):null;return!0}function Ww(){for(var t=Bt;t;)t=Ir(t.nextSibling)}function ks(){Bt=Wt=null,Ae=!1}function Jp(t){fn===null?fn=[t]:fn.push(t)}var ZI=nr.ReactCurrentBatchConfig;function cn(t,e){if(t&&t.defaultProps){e=Oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Pu=Kr(null),Ru=null,Yi=null,Zp=null;function em(){Zp=Yi=Ru=null}function tm(t){var e=Pu.current;Te(Pu),t._currentValue=e}function cd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function us(t,e){Ru=t,Zp=Yi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Mt=!0),t.firstContext=null)}function sn(t){var e=t._currentValue;if(Zp!==t)if(t={context:t,memoizedValue:e,next:null},Yi===null){if(Ru===null)throw Error(I(308));Yi=t,Ru.dependencies={lanes:0,firstContext:t}}else Yi=Yi.next=t;return e}var ni=null;function nm(t){ni===null?ni=[t]:ni.push(t)}function Gw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,nm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Wn(t,r)}function Wn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var cr=!1;function rm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Tr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Wn(t,n)}return i=r.interleaved,i===null?(e.next=e,nm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Wn(t,n)}function eu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vp(t,n)}}function Hv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ou(t,e,n,r){var i=t.updateQueue;cr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,w=a;switch(f=e,g=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){h=y.call(g,h,f);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,f=typeof y=="function"?y.call(g,h,f):y,f==null)break e;h=Oe({},h,f);break e;case 2:cr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);gi|=o,t.lanes=o,t.memoizedState=h}}function Wv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var qw=new G1.Component().refs;function hd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ic={isMounted:function(t){return(t=t._reactInternals)?bi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Pt(),i=br(t),s=Vn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,i),e!==null&&(mn(e,t,i,r),eu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Pt(),i=br(t),s=Vn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,i),e!==null&&(mn(e,t,i,r),eu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pt(),r=br(t),i=Vn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Tr(t,i,r),e!==null&&(mn(e,t,r,n),eu(e,t,r))}};function Gv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Wo(n,r)||!Wo(i,s):!0}function Yw(t,e,n){var r=!1,i=jr,s=e.contextType;return typeof s=="object"&&s!==null?s=sn(s):(i=Ut(e)?di:It.current,r=e.contextTypes,s=(r=r!=null)?ws(t,i):jr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ic,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Kv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ic.enqueueReplaceState(e,e.state,null)}function fd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=qw,rm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=sn(s):(s=Ut(e)?di:It.current,i.context=ws(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ic.enqueueReplaceState(i,i.state,null),Ou(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function so(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===qw&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function yl(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qv(t){var e=t._init;return e(t._payload)}function Qw(t){function e(m,d){if(t){var v=m.deletions;v===null?(m.deletions=[d],m.flags|=16):v.push(d)}}function n(m,d){if(!t)return null;for(;d!==null;)e(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function i(m,d){return m=Ar(m,d),m.index=0,m.sibling=null,m}function s(m,d,v){return m.index=v,t?(v=m.alternate,v!==null?(v=v.index,v<d?(m.flags|=2,d):v):(m.flags|=2,d)):(m.flags|=1048576,d)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,d,v,E){return d===null||d.tag!==6?(d=rf(v,m.mode,E),d.return=m,d):(d=i(d,v),d.return=m,d)}function l(m,d,v,E){var x=v.type;return x===zi?c(m,d,v.props.children,E,v.key):d!==null&&(d.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===ur&&qv(x)===d.type)?(E=i(d,v.props),E.ref=so(m,d,v),E.return=m,E):(E=ou(v.type,v.key,v.props,null,m.mode,E),E.ref=so(m,d,v),E.return=m,E)}function u(m,d,v,E){return d===null||d.tag!==4||d.stateNode.containerInfo!==v.containerInfo||d.stateNode.implementation!==v.implementation?(d=sf(v,m.mode,E),d.return=m,d):(d=i(d,v.children||[]),d.return=m,d)}function c(m,d,v,E,x){return d===null||d.tag!==7?(d=ci(v,m.mode,E,x),d.return=m,d):(d=i(d,v),d.return=m,d)}function h(m,d,v){if(typeof d=="string"&&d!==""||typeof d=="number")return d=rf(""+d,m.mode,v),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case al:return v=ou(d.type,d.key,d.props,null,m.mode,v),v.ref=so(m,null,d),v.return=m,v;case Ui:return d=sf(d,m.mode,v),d.return=m,d;case ur:var E=d._init;return h(m,E(d._payload),v)}if(ho(d)||eo(d))return d=ci(d,m.mode,v,null),d.return=m,d;yl(m,d)}return null}function f(m,d,v,E){var x=d!==null?d.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return x!==null?null:a(m,d,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case al:return v.key===x?l(m,d,v,E):null;case Ui:return v.key===x?u(m,d,v,E):null;case ur:return x=v._init,f(m,d,x(v._payload),E)}if(ho(v)||eo(v))return x!==null?null:c(m,d,v,E,null);yl(m,v)}return null}function g(m,d,v,E,x){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(v)||null,a(d,m,""+E,x);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case al:return m=m.get(E.key===null?v:E.key)||null,l(d,m,E,x);case Ui:return m=m.get(E.key===null?v:E.key)||null,u(d,m,E,x);case ur:var A=E._init;return g(m,d,v,A(E._payload),x)}if(ho(E)||eo(E))return m=m.get(v)||null,c(d,m,E,x,null);yl(d,E)}return null}function y(m,d,v,E){for(var x=null,A=null,N=d,T=d=0,H=null;N!==null&&T<v.length;T++){N.index>T?(H=N,N=null):H=N.sibling;var L=f(m,N,v[T],E);if(L===null){N===null&&(N=H);break}t&&N&&L.alternate===null&&e(m,N),d=s(L,d,T),A===null?x=L:A.sibling=L,A=L,N=H}if(T===v.length)return n(m,N),Ae&&Jr(m,T),x;if(N===null){for(;T<v.length;T++)N=h(m,v[T],E),N!==null&&(d=s(N,d,T),A===null?x=N:A.sibling=N,A=N);return Ae&&Jr(m,T),x}for(N=r(m,N);T<v.length;T++)H=g(N,m,T,v[T],E),H!==null&&(t&&H.alternate!==null&&N.delete(H.key===null?T:H.key),d=s(H,d,T),A===null?x=H:A.sibling=H,A=H);return t&&N.forEach(function(fe){return e(m,fe)}),Ae&&Jr(m,T),x}function w(m,d,v,E){var x=eo(v);if(typeof x!="function")throw Error(I(150));if(v=x.call(v),v==null)throw Error(I(151));for(var A=x=null,N=d,T=d=0,H=null,L=v.next();N!==null&&!L.done;T++,L=v.next()){N.index>T?(H=N,N=null):H=N.sibling;var fe=f(m,N,L.value,E);if(fe===null){N===null&&(N=H);break}t&&N&&fe.alternate===null&&e(m,N),d=s(fe,d,T),A===null?x=fe:A.sibling=fe,A=fe,N=H}if(L.done)return n(m,N),Ae&&Jr(m,T),x;if(N===null){for(;!L.done;T++,L=v.next())L=h(m,L.value,E),L!==null&&(d=s(L,d,T),A===null?x=L:A.sibling=L,A=L);return Ae&&Jr(m,T),x}for(N=r(m,N);!L.done;T++,L=v.next())L=g(N,m,T,L.value,E),L!==null&&(t&&L.alternate!==null&&N.delete(L.key===null?T:L.key),d=s(L,d,T),A===null?x=L:A.sibling=L,A=L);return t&&N.forEach(function(ae){return e(m,ae)}),Ae&&Jr(m,T),x}function k(m,d,v,E){if(typeof v=="object"&&v!==null&&v.type===zi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case al:e:{for(var x=v.key,A=d;A!==null;){if(A.key===x){if(x=v.type,x===zi){if(A.tag===7){n(m,A.sibling),d=i(A,v.props.children),d.return=m,m=d;break e}}else if(A.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===ur&&qv(x)===A.type){n(m,A.sibling),d=i(A,v.props),d.ref=so(m,A,v),d.return=m,m=d;break e}n(m,A);break}else e(m,A);A=A.sibling}v.type===zi?(d=ci(v.props.children,m.mode,E,v.key),d.return=m,m=d):(E=ou(v.type,v.key,v.props,null,m.mode,E),E.ref=so(m,d,v),E.return=m,m=E)}return o(m);case Ui:e:{for(A=v.key;d!==null;){if(d.key===A)if(d.tag===4&&d.stateNode.containerInfo===v.containerInfo&&d.stateNode.implementation===v.implementation){n(m,d.sibling),d=i(d,v.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else e(m,d);d=d.sibling}d=sf(v,m.mode,E),d.return=m,m=d}return o(m);case ur:return A=v._init,k(m,d,A(v._payload),E)}if(ho(v))return y(m,d,v,E);if(eo(v))return w(m,d,v,E);yl(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,d!==null&&d.tag===6?(n(m,d.sibling),d=i(d,v),d.return=m,m=d):(n(m,d),d=rf(v,m.mode,E),d.return=m,m=d),o(m)):n(m,d)}return k}var Es=Qw(!0),Xw=Qw(!1),Na={},Cn=Kr(Na),Yo=Kr(Na),Qo=Kr(Na);function ri(t){if(t===Na)throw Error(I(174));return t}function im(t,e){switch(Ee(Qo,e),Ee(Yo,t),Ee(Cn,Na),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Hf(e,t)}Te(Cn),Ee(Cn,e)}function Ss(){Te(Cn),Te(Yo),Te(Qo)}function Jw(t){ri(Qo.current);var e=ri(Cn.current),n=Hf(e,t.type);e!==n&&(Ee(Yo,t),Ee(Cn,n))}function sm(t){Yo.current===t&&(Te(Cn),Te(Yo))}var Pe=Kr(0);function Du(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xh=[];function om(){for(var t=0;t<Xh.length;t++)Xh[t]._workInProgressVersionPrimary=null;Xh.length=0}var tu=nr.ReactCurrentDispatcher,Jh=nr.ReactCurrentBatchConfig,mi=0,Re=null,qe=null,Ze=null,Lu=!1,Io=!1,Xo=0,eT=0;function pt(){throw Error(I(321))}function am(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gn(t[n],e[n]))return!1;return!0}function lm(t,e,n,r,i,s){if(mi=s,Re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tu.current=t===null||t.memoizedState===null?iT:sT,t=n(r,i),Io){s=0;do{if(Io=!1,Xo=0,25<=s)throw Error(I(301));s+=1,Ze=qe=null,e.updateQueue=null,tu.current=oT,t=n(r,i)}while(Io)}if(tu.current=$u,e=qe!==null&&qe.next!==null,mi=0,Ze=qe=Re=null,Lu=!1,e)throw Error(I(300));return t}function um(){var t=Xo!==0;return Xo=0,t}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Re.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function on(){if(qe===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=qe.next;var e=Ze===null?Re.memoizedState:Ze.next;if(e!==null)Ze=e,qe=t;else{if(t===null)throw Error(I(310));qe=t,t={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},Ze===null?Re.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function Jo(t,e){return typeof e=="function"?e(t):e}function Zh(t){var e=on(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((mi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Re.lanes|=c,gi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,gn(r,e.memoizedState)||(Mt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Re.lanes|=s,gi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ef(t){var e=on(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);gn(s,e.memoizedState)||(Mt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Zw(){}function ek(t,e){var n=Re,r=on(),i=e(),s=!gn(r.memoizedState,i);if(s&&(r.memoizedState=i,Mt=!0),r=r.queue,cm(rk.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,Zo(9,nk.bind(null,n,r,i,e),void 0,null),et===null)throw Error(I(349));mi&30||tk(n,e,i)}return i}function tk(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function nk(t,e,n,r){e.value=n,e.getSnapshot=r,ik(e)&&sk(t)}function rk(t,e,n){return n(function(){ik(e)&&sk(t)})}function ik(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gn(t,n)}catch{return!0}}function sk(t){var e=Wn(t,1);e!==null&&mn(e,t,1,-1)}function Yv(t){var e=kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:t},e.queue=t,t=t.dispatch=rT.bind(null,Re,t),[e.memoizedState,t]}function Zo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ok(){return on().memoizedState}function nu(t,e,n,r){var i=kn();Re.flags|=t,i.memoizedState=Zo(1|e,n,void 0,r===void 0?null:r)}function Tc(t,e,n,r){var i=on();r=r===void 0?null:r;var s=void 0;if(qe!==null){var o=qe.memoizedState;if(s=o.destroy,r!==null&&am(r,o.deps)){i.memoizedState=Zo(e,n,s,r);return}}Re.flags|=t,i.memoizedState=Zo(1|e,n,s,r)}function Qv(t,e){return nu(8390656,8,t,e)}function cm(t,e){return Tc(2048,8,t,e)}function ak(t,e){return Tc(4,2,t,e)}function lk(t,e){return Tc(4,4,t,e)}function uk(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ck(t,e,n){return n=n!=null?n.concat([t]):null,Tc(4,4,uk.bind(null,e,t),n)}function hm(){}function hk(t,e){var n=on();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&am(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function fk(t,e){var n=on();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&am(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function dk(t,e,n){return mi&21?(gn(n,e)||(n=gw(),Re.lanes|=n,gi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Mt=!0),t.memoizedState=n)}function tT(t,e){var n=ve;ve=n!==0&&4>n?n:4,t(!0);var r=Jh.transition;Jh.transition={};try{t(!1),e()}finally{ve=n,Jh.transition=r}}function pk(){return on().memoizedState}function nT(t,e,n){var r=br(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mk(t))gk(e,n);else if(n=Gw(t,e,n,r),n!==null){var i=Pt();mn(n,t,r,i),vk(n,e,r)}}function rT(t,e,n){var r=br(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mk(t))gk(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,gn(a,o)){var l=e.interleaved;l===null?(i.next=i,nm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Gw(t,e,i,r),n!==null&&(i=Pt(),mn(n,t,r,i),vk(n,e,r))}}function mk(t){var e=t.alternate;return t===Re||e!==null&&e===Re}function gk(t,e){Io=Lu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function vk(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vp(t,n)}}var $u={readContext:sn,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},iT={readContext:sn,useCallback:function(t,e){return kn().memoizedState=[t,e===void 0?null:e],t},useContext:sn,useEffect:Qv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nu(4194308,4,uk.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nu(4194308,4,t,e)},useInsertionEffect:function(t,e){return nu(4,2,t,e)},useMemo:function(t,e){var n=kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=kn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=nT.bind(null,Re,t),[r.memoizedState,t]},useRef:function(t){var e=kn();return t={current:t},e.memoizedState=t},useState:Yv,useDebugValue:hm,useDeferredValue:function(t){return kn().memoizedState=t},useTransition:function(){var t=Yv(!1),e=t[0];return t=tT.bind(null,t[1]),kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Re,i=kn();if(Ae){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),et===null)throw Error(I(349));mi&30||tk(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Qv(rk.bind(null,r,s,t),[t]),r.flags|=2048,Zo(9,nk.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=kn(),e=et.identifierPrefix;if(Ae){var n=Mn,r=$n;n=(r&~(1<<32-pn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Xo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=eT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sT={readContext:sn,useCallback:hk,useContext:sn,useEffect:cm,useImperativeHandle:ck,useInsertionEffect:ak,useLayoutEffect:lk,useMemo:fk,useReducer:Zh,useRef:ok,useState:function(){return Zh(Jo)},useDebugValue:hm,useDeferredValue:function(t){var e=on();return dk(e,qe.memoizedState,t)},useTransition:function(){var t=Zh(Jo)[0],e=on().memoizedState;return[t,e]},useMutableSource:Zw,useSyncExternalStore:ek,useId:pk,unstable_isNewReconciler:!1},oT={readContext:sn,useCallback:hk,useContext:sn,useEffect:cm,useImperativeHandle:ck,useInsertionEffect:ak,useLayoutEffect:lk,useMemo:fk,useReducer:ef,useRef:ok,useState:function(){return ef(Jo)},useDebugValue:hm,useDeferredValue:function(t){var e=on();return qe===null?e.memoizedState=t:dk(e,qe.memoizedState,t)},useTransition:function(){var t=ef(Jo)[0],e=on().memoizedState;return[t,e]},useMutableSource:Zw,useSyncExternalStore:ek,useId:pk,unstable_isNewReconciler:!1};function xs(t,e){try{var n="",r=e;do n+=D_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function tf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function dd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var aT=typeof WeakMap=="function"?WeakMap:Map;function yk(t,e,n){n=Vn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ju||(ju=!0,xd=r),dd(t,e)},n}function wk(t,e,n){n=Vn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){dd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){dd(t,e),typeof r!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Xv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new aT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ET.bind(null,t,e,n),e.then(t,t))}function Jv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vn(-1,1),e.tag=2,Tr(n,e,1))),n.lanes|=1),t)}var lT=nr.ReactCurrentOwner,Mt=!1;function At(t,e,n,r){e.child=t===null?Xw(e,null,n,r):Es(e,t.child,n,r)}function ey(t,e,n,r,i){n=n.render;var s=e.ref;return us(e,i),r=lm(t,e,n,r,s,i),n=um(),t!==null&&!Mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gn(t,e,i)):(Ae&&n&&Qp(e),e.flags|=1,At(t,e,r,i),e.child)}function ty(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!wm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,kk(t,e,s,r,i)):(t=ou(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wo,n(o,r)&&t.ref===e.ref)return Gn(t,e,i)}return e.flags|=1,t=Ar(s,r),t.ref=e.ref,t.return=e,e.child=t}function kk(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Wo(s,r)&&t.ref===e.ref)if(Mt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Mt=!0);else return e.lanes=t.lanes,Gn(t,e,i)}return pd(t,e,n,r,i)}function Ek(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(Xi,Vt),Vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ee(Xi,Vt),Vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ee(Xi,Vt),Vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ee(Xi,Vt),Vt|=r;return At(t,e,i,n),e.child}function Sk(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pd(t,e,n,r,i){var s=Ut(n)?di:It.current;return s=ws(e,s),us(e,i),n=lm(t,e,n,r,s,i),r=um(),t!==null&&!Mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gn(t,e,i)):(Ae&&r&&Qp(e),e.flags|=1,At(t,e,n,i),e.child)}function ny(t,e,n,r,i){if(Ut(n)){var s=!0;bu(e)}else s=!1;if(us(e,i),e.stateNode===null)ru(t,e),Yw(e,n,r),fd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=sn(u):(u=Ut(n)?di:It.current,u=ws(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Kv(e,o,r,u),cr=!1;var f=e.memoizedState;o.state=f,Ou(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Ft.current||cr?(typeof c=="function"&&(hd(e,n,c,r),l=e.memoizedState),(a=cr||Gv(e,n,a,r,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Kw(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:cn(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=sn(l):(l=Ut(n)?di:It.current,l=ws(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Kv(e,o,r,l),cr=!1,f=e.memoizedState,o.state=f,Ou(e,r,o,i);var y=e.memoizedState;a!==h||f!==y||Ft.current||cr?(typeof g=="function"&&(hd(e,n,g,r),y=e.memoizedState),(u=cr||Gv(e,n,u,r,f,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return md(t,e,n,r,s,i)}function md(t,e,n,r,i,s){Sk(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&zv(e,n,!1),Gn(t,e,s);r=e.stateNode,lT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Es(e,t.child,null,s),e.child=Es(e,null,a,s)):At(t,e,a,s),e.memoizedState=r.state,i&&zv(e,n,!0),e.child}function xk(t){var e=t.stateNode;e.pendingContext?Uv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Uv(t,e.context,!1),im(t,e.containerInfo)}function ry(t,e,n,r,i){return ks(),Jp(i),e.flags|=256,At(t,e,n,r),e.child}var gd={dehydrated:null,treeContext:null,retryLane:0};function vd(t){return{baseLanes:t,cachePool:null,transitions:null}}function _k(t,e,n){var r=e.pendingProps,i=Pe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ee(Pe,i&1),t===null)return ud(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ac(o,r,0,null),t=ci(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=vd(n),e.memoizedState=gd,t):fm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return uT(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ar(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ar(a,s):(s=ci(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?vd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=gd,r}return s=t.child,t=s.sibling,r=Ar(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function fm(t,e){return e=Ac({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function wl(t,e,n,r){return r!==null&&Jp(r),Es(e,t.child,null,n),t=fm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function uT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=tf(Error(I(422))),wl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ac({mode:"visible",children:r.children},i,0,null),s=ci(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Es(e,t.child,null,o),e.child.memoizedState=vd(o),e.memoizedState=gd,s);if(!(e.mode&1))return wl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(I(419)),r=tf(s,r,void 0),wl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Mt||a){if(r=et,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Wn(t,i),mn(r,t,i,-1))}return ym(),r=tf(Error(I(421))),wl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ST.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Bt=Ir(i.nextSibling),Wt=e,Ae=!0,fn=null,t!==null&&(Zt[en++]=$n,Zt[en++]=Mn,Zt[en++]=pi,$n=t.id,Mn=t.overflow,pi=e),e=fm(e,r.children),e.flags|=4096,e)}function iy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),cd(t.return,e,n)}function nf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ik(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(At(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&iy(t,n,e);else if(t.tag===19)iy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ee(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Du(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),nf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Du(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}nf(e,!0,n,null,s);break;case"together":nf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ru(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),gi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=Ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cT(t,e,n){switch(e.tag){case 3:xk(e),ks();break;case 5:Jw(e);break;case 1:Ut(e.type)&&bu(e);break;case 4:im(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ee(Pu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ee(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?_k(t,e,n):(Ee(Pe,Pe.current&1),t=Gn(t,e,n),t!==null?t.sibling:null);Ee(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ik(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,Ek(t,e,n)}return Gn(t,e,n)}var Tk,yd,Ck,bk;Tk=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yd=function(){};Ck=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ri(Cn.current);var s=null;switch(n){case"input":i=Uf(t,i),r=Uf(t,r),s=[];break;case"select":i=Oe({},i,{value:void 0}),r=Oe({},r,{value:void 0}),s=[];break;case"textarea":i=Bf(t,i),r=Bf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Tu)}Wf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(jo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(jo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Se("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};bk=function(t,e,n,r){n!==r&&(e.flags|=4)};function oo(t,e){if(!Ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function hT(t,e,n){var r=e.pendingProps;switch(Xp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return Ut(e.type)&&Cu(),mt(e),null;case 3:return r=e.stateNode,Ss(),Te(Ft),Te(It),om(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(vl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fn!==null&&(Td(fn),fn=null))),yd(t,e),mt(e),null;case 5:sm(e);var i=ri(Qo.current);if(n=e.type,t!==null&&e.stateNode!=null)Ck(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return mt(e),null}if(t=ri(Cn.current),vl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[En]=e,r[qo]=s,t=(e.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(i=0;i<po.length;i++)Se(po[i],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":dv(r,s),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Se("invalid",r);break;case"textarea":mv(r,s),Se("invalid",r)}Wf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&gl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&gl(r.textContent,a,t),i=["children",""+a]):jo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Se("scroll",r)}switch(n){case"input":ll(r),pv(r,s,!0);break;case"textarea":ll(r),gv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Tu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=tw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[En]=e,t[qo]=r,Tk(t,e,!1,!1),e.stateNode=t;e:{switch(o=Gf(n,r),n){case"dialog":Se("cancel",t),Se("close",t),i=r;break;case"iframe":case"object":case"embed":Se("load",t),i=r;break;case"video":case"audio":for(i=0;i<po.length;i++)Se(po[i],t);i=r;break;case"source":Se("error",t),i=r;break;case"img":case"image":case"link":Se("error",t),Se("load",t),i=r;break;case"details":Se("toggle",t),i=r;break;case"input":dv(t,r),i=Uf(t,r),Se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Oe({},r,{value:void 0}),Se("invalid",t);break;case"textarea":mv(t,r),i=Bf(t,r),Se("invalid",t);break;default:i=r}Wf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?iw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&nw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Fo(t,l):typeof l=="number"&&Fo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(jo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Se("scroll",t):l!=null&&$p(t,s,l,o))}switch(n){case"input":ll(t),pv(t,r,!1);break;case"textarea":ll(t),gv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Mr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ss(t,!!r.multiple,s,!1):r.defaultValue!=null&&ss(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Tu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mt(e),null;case 6:if(t&&e.stateNode!=null)bk(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=ri(Qo.current),ri(Cn.current),vl(e)){if(r=e.stateNode,n=e.memoizedProps,r[En]=e,(s=r.nodeValue!==n)&&(t=Wt,t!==null))switch(t.tag){case 3:gl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&gl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[En]=e,e.stateNode=r}return mt(e),null;case 13:if(Te(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ae&&Bt!==null&&e.mode&1&&!(e.flags&128))Ww(),ks(),e.flags|=98560,s=!1;else if(s=vl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[En]=e}else ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mt(e),s=!1}else fn!==null&&(Td(fn),fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?Ye===0&&(Ye=3):ym())),e.updateQueue!==null&&(e.flags|=4),mt(e),null);case 4:return Ss(),yd(t,e),t===null&&Go(e.stateNode.containerInfo),mt(e),null;case 10:return tm(e.type._context),mt(e),null;case 17:return Ut(e.type)&&Cu(),mt(e),null;case 19:if(Te(Pe),s=e.memoizedState,s===null)return mt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)oo(s,!1);else{if(Ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Du(t),o!==null){for(e.flags|=128,oo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ee(Pe,Pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&ze()>_s&&(e.flags|=128,r=!0,oo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Du(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),oo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ae)return mt(e),null}else 2*ze()-s.renderingStartTime>_s&&n!==1073741824&&(e.flags|=128,r=!0,oo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ze(),e.sibling=null,n=Pe.current,Ee(Pe,r?n&1|2:n&1),e):(mt(e),null);case 22:case 23:return vm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Vt&1073741824&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function fT(t,e){switch(Xp(e),e.tag){case 1:return Ut(e.type)&&Cu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ss(),Te(Ft),Te(It),om(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sm(e),null;case 13:if(Te(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(Pe),null;case 4:return Ss(),null;case 10:return tm(e.type._context),null;case 22:case 23:return vm(),null;case 24:return null;default:return null}}var kl=!1,wt=!1,dT=typeof WeakSet=="function"?WeakSet:Set,F=null;function Qi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$e(t,e,r)}else n.current=null}function wd(t,e,n){try{n()}catch(r){$e(t,e,r)}}var sy=!1;function pT(t,e){if(nd=xu,t=Rw(),Yp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,f=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(rd={focusedElem:t,selectionRange:n},xu=!1,F=e;F!==null;)if(e=F,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,F=t;else for(;F!==null;){e=F;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,k=y.memoizedState,m=e.stateNode,d=m.getSnapshotBeforeUpdate(e.elementType===e.type?w:cn(e.type,w),k);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(E){$e(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,F=t;break}F=e.return}return y=sy,sy=!1,y}function To(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&wd(e,n,s)}i=i.next}while(i!==r)}}function Cc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function kd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ak(t){var e=t.alternate;e!==null&&(t.alternate=null,Ak(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[En],delete e[qo],delete e[od],delete e[QI],delete e[XI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Nk(t){return t.tag===5||t.tag===3||t.tag===4}function oy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Nk(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ed(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Tu));else if(r!==4&&(t=t.child,t!==null))for(Ed(t,e,n),t=t.sibling;t!==null;)Ed(t,e,n),t=t.sibling}function Sd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Sd(t,e,n),t=t.sibling;t!==null;)Sd(t,e,n),t=t.sibling}var at=null,hn=!1;function or(t,e,n){for(n=n.child;n!==null;)Pk(t,e,n),n=n.sibling}function Pk(t,e,n){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(wc,n)}catch{}switch(n.tag){case 5:wt||Qi(n,e);case 6:var r=at,i=hn;at=null,or(t,e,n),at=r,hn=i,at!==null&&(hn?(t=at,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):at.removeChild(n.stateNode));break;case 18:at!==null&&(hn?(t=at,n=n.stateNode,t.nodeType===8?Yh(t.parentNode,n):t.nodeType===1&&Yh(t,n),Bo(t)):Yh(at,n.stateNode));break;case 4:r=at,i=hn,at=n.stateNode.containerInfo,hn=!0,or(t,e,n),at=r,hn=i;break;case 0:case 11:case 14:case 15:if(!wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&wd(n,e,o),i=i.next}while(i!==r)}or(t,e,n);break;case 1:if(!wt&&(Qi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){$e(n,e,a)}or(t,e,n);break;case 21:or(t,e,n);break;case 22:n.mode&1?(wt=(r=wt)||n.memoizedState!==null,or(t,e,n),wt=r):or(t,e,n);break;default:or(t,e,n)}}function ay(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dT),e.forEach(function(r){var i=xT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function un(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:at=a.stateNode,hn=!1;break e;case 3:at=a.stateNode.containerInfo,hn=!0;break e;case 4:at=a.stateNode.containerInfo,hn=!0;break e}a=a.return}if(at===null)throw Error(I(160));Pk(s,o,i),at=null,hn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){$e(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Rk(e,t),e=e.sibling}function Rk(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(un(e,t),wn(t),r&4){try{To(3,t,t.return),Cc(3,t)}catch(w){$e(t,t.return,w)}try{To(5,t,t.return)}catch(w){$e(t,t.return,w)}}break;case 1:un(e,t),wn(t),r&512&&n!==null&&Qi(n,n.return);break;case 5:if(un(e,t),wn(t),r&512&&n!==null&&Qi(n,n.return),t.flags&32){var i=t.stateNode;try{Fo(i,"")}catch(w){$e(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Z1(i,s),Gf(a,o);var u=Gf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?iw(i,h):c==="dangerouslySetInnerHTML"?nw(i,h):c==="children"?Fo(i,h):$p(i,c,h,u)}switch(a){case"input":zf(i,s);break;case"textarea":ew(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ss(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?ss(i,!!s.multiple,s.defaultValue,!0):ss(i,!!s.multiple,s.multiple?[]:"",!1))}i[qo]=s}catch(w){$e(t,t.return,w)}}break;case 6:if(un(e,t),wn(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){$e(t,t.return,w)}}break;case 3:if(un(e,t),wn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bo(e.containerInfo)}catch(w){$e(t,t.return,w)}break;case 4:un(e,t),wn(t);break;case 13:un(e,t),wn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(mm=ze())),r&4&&ay(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(wt=(u=wt)||c,un(e,t),wt=u):un(e,t),wn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(F=t,c=t.child;c!==null;){for(h=F=c;F!==null;){switch(f=F,g=f.child,f.tag){case 0:case 11:case 14:case 15:To(4,f,f.return);break;case 1:Qi(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(w){$e(r,n,w)}}break;case 5:Qi(f,f.return);break;case 22:if(f.memoizedState!==null){uy(h);continue}}g!==null?(g.return=f,F=g):uy(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=rw("display",o))}catch(w){$e(t,t.return,w)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){$e(t,t.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:un(e,t),wn(t),r&4&&ay(t);break;case 21:break;default:un(e,t),wn(t)}}function wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Nk(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fo(i,""),r.flags&=-33);var s=oy(t);Sd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=oy(t);Ed(t,a,o);break;default:throw Error(I(161))}}catch(l){$e(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mT(t,e,n){F=t,Ok(t)}function Ok(t,e,n){for(var r=(t.mode&1)!==0;F!==null;){var i=F,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||kl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||wt;a=kl;var u=wt;if(kl=o,(wt=l)&&!u)for(F=i;F!==null;)o=F,l=o.child,o.tag===22&&o.memoizedState!==null?cy(i):l!==null?(l.return=o,F=l):cy(i);for(;s!==null;)F=s,Ok(s),s=s.sibling;F=i,kl=a,wt=u}ly(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,F=s):ly(t)}}function ly(t){for(;F!==null;){var e=F;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:wt||Cc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!wt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:cn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Wv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Wv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Bo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}wt||e.flags&512&&kd(e)}catch(f){$e(e,e.return,f)}}if(e===t){F=null;break}if(n=e.sibling,n!==null){n.return=e.return,F=n;break}F=e.return}}function uy(t){for(;F!==null;){var e=F;if(e===t){F=null;break}var n=e.sibling;if(n!==null){n.return=e.return,F=n;break}F=e.return}}function cy(t){for(;F!==null;){var e=F;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Cc(4,e)}catch(l){$e(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){$e(e,i,l)}}var s=e.return;try{kd(e)}catch(l){$e(e,s,l)}break;case 5:var o=e.return;try{kd(e)}catch(l){$e(e,o,l)}}}catch(l){$e(e,e.return,l)}if(e===t){F=null;break}var a=e.sibling;if(a!==null){a.return=e.return,F=a;break}F=e.return}}var gT=Math.ceil,Mu=nr.ReactCurrentDispatcher,dm=nr.ReactCurrentOwner,rn=nr.ReactCurrentBatchConfig,ue=0,et=null,He=null,ct=0,Vt=0,Xi=Kr(0),Ye=0,ea=null,gi=0,bc=0,pm=0,Co=null,Lt=null,mm=0,_s=1/0,Dn=null,ju=!1,xd=null,Cr=null,El=!1,yr=null,Fu=0,bo=0,_d=null,iu=-1,su=0;function Pt(){return ue&6?ze():iu!==-1?iu:iu=ze()}function br(t){return t.mode&1?ue&2&&ct!==0?ct&-ct:ZI.transition!==null?(su===0&&(su=gw()),su):(t=ve,t!==0||(t=window.event,t=t===void 0?16:xw(t.type)),t):1}function mn(t,e,n,r){if(50<bo)throw bo=0,_d=null,Error(I(185));Ca(t,n,r),(!(ue&2)||t!==et)&&(t===et&&(!(ue&2)&&(bc|=n),Ye===4&&fr(t,ct)),zt(t,r),n===1&&ue===0&&!(e.mode&1)&&(_s=ze()+500,_c&&qr()))}function zt(t,e){var n=t.callbackNode;Z_(t,e);var r=Su(t,t===et?ct:0);if(r===0)n!==null&&wv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&wv(n),e===1)t.tag===0?JI(hy.bind(null,t)):Vw(hy.bind(null,t)),qI(function(){!(ue&6)&&qr()}),n=null;else{switch(vw(r)){case 1:n=zp;break;case 4:n=pw;break;case 16:n=Eu;break;case 536870912:n=mw;break;default:n=Eu}n=zk(n,Dk.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Dk(t,e){if(iu=-1,su=0,ue&6)throw Error(I(327));var n=t.callbackNode;if(cs()&&t.callbackNode!==n)return null;var r=Su(t,t===et?ct:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Uu(t,r);else{e=r;var i=ue;ue|=2;var s=$k();(et!==t||ct!==e)&&(Dn=null,_s=ze()+500,ui(t,e));do try{wT();break}catch(a){Lk(t,a)}while(1);em(),Mu.current=s,ue=i,He!==null?e=0:(et=null,ct=0,e=Ye)}if(e!==0){if(e===2&&(i=Xf(t),i!==0&&(r=i,e=Id(t,i))),e===1)throw n=ea,ui(t,0),fr(t,r),zt(t,ze()),n;if(e===6)fr(t,r);else{if(i=t.current.alternate,!(r&30)&&!vT(i)&&(e=Uu(t,r),e===2&&(s=Xf(t),s!==0&&(r=s,e=Id(t,s))),e===1))throw n=ea,ui(t,0),fr(t,r),zt(t,ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:Zr(t,Lt,Dn);break;case 3:if(fr(t,r),(r&130023424)===r&&(e=mm+500-ze(),10<e)){if(Su(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Pt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=sd(Zr.bind(null,t,Lt,Dn),e);break}Zr(t,Lt,Dn);break;case 4:if(fr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-pn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gT(r/1960))-r,10<r){t.timeoutHandle=sd(Zr.bind(null,t,Lt,Dn),r);break}Zr(t,Lt,Dn);break;case 5:Zr(t,Lt,Dn);break;default:throw Error(I(329))}}}return zt(t,ze()),t.callbackNode===n?Dk.bind(null,t):null}function Id(t,e){var n=Co;return t.current.memoizedState.isDehydrated&&(ui(t,e).flags|=256),t=Uu(t,e),t!==2&&(e=Lt,Lt=n,e!==null&&Td(e)),t}function Td(t){Lt===null?Lt=t:Lt.push.apply(Lt,t)}function vT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!gn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fr(t,e){for(e&=~pm,e&=~bc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pn(e),r=1<<n;t[n]=-1,e&=~r}}function hy(t){if(ue&6)throw Error(I(327));cs();var e=Su(t,0);if(!(e&1))return zt(t,ze()),null;var n=Uu(t,e);if(t.tag!==0&&n===2){var r=Xf(t);r!==0&&(e=r,n=Id(t,r))}if(n===1)throw n=ea,ui(t,0),fr(t,e),zt(t,ze()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Zr(t,Lt,Dn),zt(t,ze()),null}function gm(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(_s=ze()+500,_c&&qr())}}function vi(t){yr!==null&&yr.tag===0&&!(ue&6)&&cs();var e=ue;ue|=1;var n=rn.transition,r=ve;try{if(rn.transition=null,ve=1,t)return t()}finally{ve=r,rn.transition=n,ue=e,!(ue&6)&&qr()}}function vm(){Vt=Xi.current,Te(Xi)}function ui(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,KI(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(Xp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Cu();break;case 3:Ss(),Te(Ft),Te(It),om();break;case 5:sm(r);break;case 4:Ss();break;case 13:Te(Pe);break;case 19:Te(Pe);break;case 10:tm(r.type._context);break;case 22:case 23:vm()}n=n.return}if(et=t,He=t=Ar(t.current,null),ct=Vt=e,Ye=0,ea=null,pm=bc=gi=0,Lt=Co=null,ni!==null){for(e=0;e<ni.length;e++)if(n=ni[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ni=null}return t}function Lk(t,e){do{var n=He;try{if(em(),tu.current=$u,Lu){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Lu=!1}if(mi=0,Ze=qe=Re=null,Io=!1,Xo=0,dm.current=null,n===null||n.return===null){Ye=1,ea=e,He=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ct,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Jv(o);if(g!==null){g.flags&=-257,Zv(g,o,a,s,e),g.mode&1&&Xv(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var w=new Set;w.add(l),e.updateQueue=w}else y.add(l);break e}else{if(!(e&1)){Xv(s,u,e),ym();break e}l=Error(I(426))}}else if(Ae&&a.mode&1){var k=Jv(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Zv(k,o,a,s,e),Jp(xs(l,a));break e}}s=l=xs(l,a),Ye!==4&&(Ye=2),Co===null?Co=[s]:Co.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=yk(s,l,e);Hv(s,m);break e;case 1:a=l;var d=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Cr===null||!Cr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=wk(s,a,e);Hv(s,E);break e}}s=s.return}while(s!==null)}jk(n)}catch(x){e=x,He===n&&n!==null&&(He=n=n.return);continue}break}while(1)}function $k(){var t=Mu.current;return Mu.current=$u,t===null?$u:t}function ym(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),et===null||!(gi&268435455)&&!(bc&268435455)||fr(et,ct)}function Uu(t,e){var n=ue;ue|=2;var r=$k();(et!==t||ct!==e)&&(Dn=null,ui(t,e));do try{yT();break}catch(i){Lk(t,i)}while(1);if(em(),ue=n,Mu.current=r,He!==null)throw Error(I(261));return et=null,ct=0,Ye}function yT(){for(;He!==null;)Mk(He)}function wT(){for(;He!==null&&!H_();)Mk(He)}function Mk(t){var e=Uk(t.alternate,t,Vt);t.memoizedProps=t.pendingProps,e===null?jk(t):He=e,dm.current=null}function jk(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=fT(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ye=6,He=null;return}}else if(n=hT(n,e,Vt),n!==null){He=n;return}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Ye===0&&(Ye=5)}function Zr(t,e,n){var r=ve,i=rn.transition;try{rn.transition=null,ve=1,kT(t,e,n,r)}finally{rn.transition=i,ve=r}return null}function kT(t,e,n,r){do cs();while(yr!==null);if(ue&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(eI(t,s),t===et&&(He=et=null,ct=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||El||(El=!0,zk(Eu,function(){return cs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=rn.transition,rn.transition=null;var o=ve;ve=1;var a=ue;ue|=4,dm.current=null,pT(t,n),Rk(n,t),UI(rd),xu=!!nd,rd=nd=null,t.current=n,mT(n),W_(),ue=a,ve=o,rn.transition=s}else t.current=n;if(El&&(El=!1,yr=t,Fu=i),s=t.pendingLanes,s===0&&(Cr=null),q_(n.stateNode),zt(t,ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ju)throw ju=!1,t=xd,xd=null,t;return Fu&1&&t.tag!==0&&cs(),s=t.pendingLanes,s&1?t===_d?bo++:(bo=0,_d=t):bo=0,qr(),null}function cs(){if(yr!==null){var t=vw(Fu),e=rn.transition,n=ve;try{if(rn.transition=null,ve=16>t?16:t,yr===null)var r=!1;else{if(t=yr,yr=null,Fu=0,ue&6)throw Error(I(331));var i=ue;for(ue|=4,F=t.current;F!==null;){var s=F,o=s.child;if(F.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(F=u;F!==null;){var c=F;switch(c.tag){case 0:case 11:case 15:To(8,c,s)}var h=c.child;if(h!==null)h.return=c,F=h;else for(;F!==null;){c=F;var f=c.sibling,g=c.return;if(Ak(c),c===u){F=null;break}if(f!==null){f.return=g,F=f;break}F=g}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}F=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,F=o;else e:for(;F!==null;){if(s=F,s.flags&2048)switch(s.tag){case 0:case 11:case 15:To(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,F=m;break e}F=s.return}}var d=t.current;for(F=d;F!==null;){o=F;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,F=v;else e:for(o=d;F!==null;){if(a=F,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Cc(9,a)}}catch(x){$e(a,a.return,x)}if(a===o){F=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,F=E;break e}F=a.return}}if(ue=i,qr(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(wc,t)}catch{}r=!0}return r}finally{ve=n,rn.transition=e}}return!1}function fy(t,e,n){e=xs(n,e),e=yk(t,e,1),t=Tr(t,e,1),e=Pt(),t!==null&&(Ca(t,1,e),zt(t,e))}function $e(t,e,n){if(t.tag===3)fy(t,t,n);else for(;e!==null;){if(e.tag===3){fy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cr===null||!Cr.has(r))){t=xs(n,t),t=wk(e,t,1),e=Tr(e,t,1),t=Pt(),e!==null&&(Ca(e,1,t),zt(e,t));break}}e=e.return}}function ET(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Pt(),t.pingedLanes|=t.suspendedLanes&n,et===t&&(ct&n)===n&&(Ye===4||Ye===3&&(ct&130023424)===ct&&500>ze()-mm?ui(t,0):pm|=n),zt(t,e)}function Fk(t,e){e===0&&(t.mode&1?(e=hl,hl<<=1,!(hl&130023424)&&(hl=4194304)):e=1);var n=Pt();t=Wn(t,e),t!==null&&(Ca(t,e,n),zt(t,n))}function ST(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Fk(t,n)}function xT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),Fk(t,n)}var Uk;Uk=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ft.current)Mt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Mt=!1,cT(t,e,n);Mt=!!(t.flags&131072)}else Mt=!1,Ae&&e.flags&1048576&&Bw(e,Nu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ru(t,e),t=e.pendingProps;var i=ws(e,It.current);us(e,n),i=lm(null,e,r,t,i,n);var s=um();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ut(r)?(s=!0,bu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,rm(e),i.updater=Ic,e.stateNode=i,i._reactInternals=e,fd(e,r,t,n),e=md(null,e,r,!0,s,n)):(e.tag=0,Ae&&s&&Qp(e),At(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ru(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=IT(r),t=cn(r,t),i){case 0:e=pd(null,e,r,t,n);break e;case 1:e=ny(null,e,r,t,n);break e;case 11:e=ey(null,e,r,t,n);break e;case 14:e=ty(null,e,r,cn(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),pd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),ny(t,e,r,i,n);case 3:e:{if(xk(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Kw(t,e),Ou(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=xs(Error(I(423)),e),e=ry(t,e,r,n,i);break e}else if(r!==i){i=xs(Error(I(424)),e),e=ry(t,e,r,n,i);break e}else for(Bt=Ir(e.stateNode.containerInfo.firstChild),Wt=e,Ae=!0,fn=null,n=Xw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ks(),r===i){e=Gn(t,e,n);break e}At(t,e,r,n)}e=e.child}return e;case 5:return Jw(e),t===null&&ud(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,id(r,i)?o=null:s!==null&&id(r,s)&&(e.flags|=32),Sk(t,e),At(t,e,o,n),e.child;case 6:return t===null&&ud(e),null;case 13:return _k(t,e,n);case 4:return im(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Es(e,null,r,n):At(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),ey(t,e,r,i,n);case 7:return At(t,e,e.pendingProps,n),e.child;case 8:return At(t,e,e.pendingProps.children,n),e.child;case 12:return At(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ee(Pu,r._currentValue),r._currentValue=o,s!==null)if(gn(s.value,o)){if(s.children===i.children&&!Ft.current){e=Gn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Vn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),cd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),cd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}At(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,us(e,n),i=sn(i),r=r(i),e.flags|=1,At(t,e,r,n),e.child;case 14:return r=e.type,i=cn(r,e.pendingProps),i=cn(r.type,i),ty(t,e,r,i,n);case 15:return kk(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),ru(t,e),e.tag=1,Ut(r)?(t=!0,bu(e)):t=!1,us(e,n),Yw(e,r,i),fd(e,r,i,n),md(null,e,r,!0,t,n);case 19:return Ik(t,e,n);case 22:return Ek(t,e,n)}throw Error(I(156,e.tag))};function zk(t,e){return dw(t,e)}function _T(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nn(t,e,n,r){return new _T(t,e,n,r)}function wm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function IT(t){if(typeof t=="function")return wm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===jp)return 11;if(t===Fp)return 14}return 2}function Ar(t,e){var n=t.alternate;return n===null?(n=nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ou(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")wm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case zi:return ci(n.children,i,s,e);case Mp:o=8,i|=8;break;case $f:return t=nn(12,n,e,i|2),t.elementType=$f,t.lanes=s,t;case Mf:return t=nn(13,n,e,i),t.elementType=Mf,t.lanes=s,t;case jf:return t=nn(19,n,e,i),t.elementType=jf,t.lanes=s,t;case Q1:return Ac(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case q1:o=10;break e;case Y1:o=9;break e;case jp:o=11;break e;case Fp:o=14;break e;case ur:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=nn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ci(t,e,n,r){return t=nn(7,t,r,e),t.lanes=n,t}function Ac(t,e,n,r){return t=nn(22,t,r,e),t.elementType=Q1,t.lanes=n,t.stateNode={isHidden:!1},t}function rf(t,e,n){return t=nn(6,t,null,e),t.lanes=n,t}function sf(t,e,n){return e=nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function TT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jh(0),this.expirationTimes=jh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function km(t,e,n,r,i,s,o,a,l){return t=new TT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=nn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rm(s),t}function CT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ui,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Vk(t){if(!t)return jr;t=t._reactInternals;e:{if(bi(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ut(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(Ut(n))return zw(t,n,e)}return e}function Bk(t,e,n,r,i,s,o,a,l){return t=km(n,r,!0,t,i,s,o,a,l),t.context=Vk(null),n=t.current,r=Pt(),i=br(n),s=Vn(r,i),s.callback=e??null,Tr(n,s,i),t.current.lanes=i,Ca(t,i,r),zt(t,r),t}function Nc(t,e,n,r){var i=e.current,s=Pt(),o=br(i);return n=Vk(n),e.context===null?e.context=n:e.pendingContext=n,e=Vn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Tr(i,e,o),t!==null&&(mn(t,i,o,s),eu(t,i,o)),o}function zu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Em(t,e){dy(t,e),(t=t.alternate)&&dy(t,e)}function bT(){return null}var Hk=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sm(t){this._internalRoot=t}Pc.prototype.render=Sm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));Nc(t,e,null,null)};Pc.prototype.unmount=Sm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;vi(function(){Nc(null,t,null,null)}),e[Hn]=null}};function Pc(t){this._internalRoot=t}Pc.prototype.unstable_scheduleHydration=function(t){if(t){var e=kw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hr.length&&e!==0&&e<hr[n].priority;n++);hr.splice(n,0,t),n===0&&Sw(t)}};function xm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Rc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function py(){}function AT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=zu(o);s.call(u)}}var o=Bk(e,r,t,0,null,!1,!1,"",py);return t._reactRootContainer=o,t[Hn]=o.current,Go(t.nodeType===8?t.parentNode:t),vi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=zu(l);a.call(u)}}var l=km(t,0,!1,null,null,!1,!1,"",py);return t._reactRootContainer=l,t[Hn]=l.current,Go(t.nodeType===8?t.parentNode:t),vi(function(){Nc(e,l,n,r)}),l}function Oc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=zu(o);a.call(l)}}Nc(e,o,t,i)}else o=AT(n,e,t,i,r);return zu(o)}yw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=fo(e.pendingLanes);n!==0&&(Vp(e,n|1),zt(e,ze()),!(ue&6)&&(_s=ze()+500,qr()))}break;case 13:vi(function(){var r=Wn(t,1);if(r!==null){var i=Pt();mn(r,t,1,i)}}),Em(t,1)}};Bp=function(t){if(t.tag===13){var e=Wn(t,134217728);if(e!==null){var n=Pt();mn(e,t,134217728,n)}Em(t,134217728)}};ww=function(t){if(t.tag===13){var e=br(t),n=Wn(t,e);if(n!==null){var r=Pt();mn(n,t,e,r)}Em(t,e)}};kw=function(){return ve};Ew=function(t,e){var n=ve;try{return ve=t,e()}finally{ve=n}};qf=function(t,e,n){switch(e){case"input":if(zf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=xc(r);if(!i)throw Error(I(90));J1(r),zf(r,i)}}}break;case"textarea":ew(t,n);break;case"select":e=n.value,e!=null&&ss(t,!!n.multiple,e,!1)}};aw=gm;lw=vi;var NT={usingClientEntryPoint:!1,Events:[Aa,Wi,xc,sw,ow,gm]},ao={findFiberByHostInstance:ti,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},PT={bundleType:ao.bundleType,version:ao.version,rendererPackageName:ao.rendererPackageName,rendererConfig:ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=hw(t),t===null?null:t.stateNode},findFiberByHostInstance:ao.findFiberByHostInstance||bT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sl.isDisabled&&Sl.supportsFiber)try{wc=Sl.inject(PT),Tn=Sl}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NT;Yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xm(e))throw Error(I(200));return CT(t,e,null,n)};Yt.createRoot=function(t,e){if(!xm(t))throw Error(I(299));var n=!1,r="",i=Hk;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=km(t,1,!1,null,null,n,!1,r,i),t[Hn]=e.current,Go(t.nodeType===8?t.parentNode:t),new Sm(e)};Yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=hw(e),t=t===null?null:t.stateNode,t};Yt.flushSync=function(t){return vi(t)};Yt.hydrate=function(t,e,n){if(!Rc(e))throw Error(I(200));return Oc(null,t,e,!0,n)};Yt.hydrateRoot=function(t,e,n){if(!xm(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Hk;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Bk(e,null,t,1,n??null,i,!1,s,o),t[Hn]=e.current,Go(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Pc(e)};Yt.render=function(t,e,n){if(!Rc(e))throw Error(I(200));return Oc(null,t,e,!1,n)};Yt.unmountComponentAtNode=function(t){if(!Rc(t))throw Error(I(40));return t._reactRootContainer?(vi(function(){Oc(null,null,t,!1,function(){t._reactRootContainer=null,t[Hn]=null})}),!0):!1};Yt.unstable_batchedUpdates=gm;Yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Rc(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return Oc(t,e,n,!1,r)};Yt.version="18.2.0-next-9e3b772b8-20220608";function Wk(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wk)}catch(t){console.error(t)}}Wk(),B1.exports=Yt;var RT=B1.exports,my=RT;Df.createRoot=my.createRoot,Df.hydrateRoot=my.hydrateRoot;const Gk=b.createContext(),Dc=()=>b.useContext(Gk),OT=({children:t})=>{const[e,n]=b.useState({persons:"",userEmailLogin:"",userIndex:"",loggedIn:!1});return p.jsx(Gk.Provider,{value:[e,n],children:t})};/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ta(){return ta=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ta.apply(this,arguments)}var wr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(wr||(wr={}));const gy="popstate";function DT(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Cd("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Vu(i)}return $T(e,n,null,t)}function Ge(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function _m(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function LT(){return Math.random().toString(36).substr(2,8)}function vy(t,e){return{usr:t.state,key:t.key,idx:e}}function Cd(t,e,n,r){return n===void 0&&(n=null),ta({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Vs(e):e,{state:n,key:e&&e.key||r||LT()})}function Vu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Vs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function $T(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=wr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ta({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=wr.Pop;let k=c(),m=k==null?null:k-u;u=k,l&&l({action:a,location:w.location,delta:m})}function f(k,m){a=wr.Push;let d=Cd(w.location,k,m);n&&n(d,k),u=c()+1;let v=vy(d,u),E=w.createHref(d);try{o.pushState(v,"",E)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;i.location.assign(E)}s&&l&&l({action:a,location:w.location,delta:1})}function g(k,m){a=wr.Replace;let d=Cd(w.location,k,m);n&&n(d,k),u=c();let v=vy(d,u),E=w.createHref(d);o.replaceState(v,"",E),s&&l&&l({action:a,location:w.location,delta:0})}function y(k){let m=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof k=="string"?k:Vu(k);return Ge(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let w={get action(){return a},get location(){return t(i,o)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(gy,h),l=k,()=>{i.removeEventListener(gy,h),l=null}},createHref(k){return e(i,k)},createURL:y,encodeLocation(k){let m=y(k);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:g,go(k){return o.go(k)}};return w}var yy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(yy||(yy={}));function MT(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Vs(e):e,i=Im(r.pathname||"/",n);if(i==null)return null;let s=Kk(t);jT(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=KT(s[a],QT(i));return o}function Kk(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ge(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Nr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Ge(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Kk(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:WT(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of qk(s.path))i(s,o,l)}),e}function qk(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=qk(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function jT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:GT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const FT=/^:\w+$/,UT=3,zT=2,VT=1,BT=10,HT=-2,wy=t=>t==="*";function WT(t,e){let n=t.split("/"),r=n.length;return n.some(wy)&&(r+=HT),e&&(r+=zT),n.filter(i=>!wy(i)).reduce((i,s)=>i+(FT.test(s)?UT:s===""?VT:BT),r)}function GT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function KT(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=qT({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Nr([i,c.pathname]),pathnameBase:eC(Nr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Nr([i,c.pathnameBase]))}return s}function qT(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=YT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let f=a[h]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=XT(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function YT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),_m(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function QT(t){try{return decodeURI(t)}catch(e){return _m(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function XT(t,e){try{return decodeURIComponent(t)}catch(n){return _m(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Im(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function JT(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Vs(t):t;return{pathname:n?n.startsWith("/")?n:ZT(n,e):e,search:tC(r),hash:nC(i)}}function ZT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function of(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Yk(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Qk(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Vs(t):(i=ta({},t),Ge(!i.pathname||!i.pathname.includes("?"),of("?","pathname","search",i)),Ge(!i.pathname||!i.pathname.includes("#"),of("#","pathname","hash",i)),Ge(!i.search||!i.search.includes("#"),of("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;i.pathname=f.join("/")}a=h>=0?e[h]:"/"}let l=JT(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Nr=t=>t.join("/").replace(/\/\/+/g,"/"),eC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),tC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,nC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function rC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Xk=["post","put","patch","delete"];new Set(Xk);const iC=["get",...Xk];new Set(iC);/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bu(){return Bu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bu.apply(this,arguments)}const Tm=b.createContext(null),sC=b.createContext(null),Bs=b.createContext(null),Lc=b.createContext(null),Ai=b.createContext({outlet:null,matches:[],isDataRoute:!1}),Jk=b.createContext(null);function oC(t,e){let{relative:n}=e===void 0?{}:e;Pa()||Ge(!1);let{basename:r,navigator:i}=b.useContext(Bs),{hash:s,pathname:o,search:a}=eE(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Nr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Pa(){return b.useContext(Lc)!=null}function $c(){return Pa()||Ge(!1),b.useContext(Lc).location}function Zk(t){b.useContext(Bs).static||b.useLayoutEffect(t)}function Mc(){let{isDataRoute:t}=b.useContext(Ai);return t?wC():aC()}function aC(){Pa()||Ge(!1);let t=b.useContext(Tm),{basename:e,navigator:n}=b.useContext(Bs),{matches:r}=b.useContext(Ai),{pathname:i}=$c(),s=JSON.stringify(Yk(r).map(l=>l.pathnameBase)),o=b.useRef(!1);return Zk(()=>{o.current=!0}),b.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Qk(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Nr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function eE(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=b.useContext(Ai),{pathname:i}=$c(),s=JSON.stringify(Yk(r).map(o=>o.pathnameBase));return b.useMemo(()=>Qk(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function lC(t,e){return uC(t,e)}function uC(t,e,n){Pa()||Ge(!1);let{navigator:r}=b.useContext(Bs),{matches:i}=b.useContext(Ai),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=$c(),u;if(e){var c;let w=typeof e=="string"?Vs(e):e;a==="/"||(c=w.pathname)!=null&&c.startsWith(a)||Ge(!1),u=w}else u=l;let h=u.pathname||"/",f=a==="/"?h:h.slice(a.length)||"/",g=MT(t,{pathname:f}),y=pC(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:Nr([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:Nr([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return e&&y?b.createElement(Lc.Provider,{value:{location:Bu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:wr.Pop}},y):y}function cC(){let t=yC(),e=rC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,s)}const hC=b.createElement(cC,null);class fC extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?b.createElement(Ai.Provider,{value:this.props.routeContext},b.createElement(Jk.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function dC(t){let{routeContext:e,match:n,children:r}=t,i=b.useContext(Tm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Ai.Provider,{value:e},r)}function pC(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Ge(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||hC);let f=e.concat(s.slice(0,u+1)),g=()=>{let y;return c?y=h:l.route.Component?y=b.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,b.createElement(dC,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?b.createElement(fC,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:g(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):g()},null)}var bd;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(bd||(bd={}));var na;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(na||(na={}));function mC(t){let e=b.useContext(Tm);return e||Ge(!1),e}function gC(t){let e=b.useContext(sC);return e||Ge(!1),e}function vC(t){let e=b.useContext(Ai);return e||Ge(!1),e}function tE(t){let e=vC(),n=e.matches[e.matches.length-1];return n.route.id||Ge(!1),n.route.id}function yC(){var t;let e=b.useContext(Jk),n=gC(na.UseRouteError),r=tE(na.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function wC(){let{router:t}=mC(bd.UseNavigateStable),e=tE(na.UseNavigateStable),n=b.useRef(!1);return Zk(()=>{n.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Bu({fromRouteId:e},s)))},[t,e])}function On(t){Ge(!1)}function kC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=wr.Pop,navigator:s,static:o=!1}=t;Pa()&&Ge(!1);let a=e.replace(/^\/*/,"/"),l=b.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Vs(r));let{pathname:u="/",search:c="",hash:h="",state:f=null,key:g="default"}=r,y=b.useMemo(()=>{let w=Im(u,a);return w==null?null:{location:{pathname:w,search:c,hash:h,state:f,key:g},navigationType:i}},[a,u,c,h,f,g,i]);return y==null?null:b.createElement(Bs.Provider,{value:l},b.createElement(Lc.Provider,{children:n,value:y}))}function EC(t){let{children:e,location:n}=t;return lC(Ad(e),n)}var ky;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(ky||(ky={}));new Promise(()=>{});function Ad(t,e){e===void 0&&(e=[]);let n=[];return b.Children.forEach(t,(r,i)=>{if(!b.isValidElement(r))return;let s=[...e,i];if(r.type===b.Fragment){n.push.apply(n,Ad(r.props.children,s));return}r.type!==On&&Ge(!1),!r.props.index||!r.props.children||Ge(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ad(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nd(){return Nd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Nd.apply(this,arguments)}function SC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function xC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function _C(t,e){return t.button===0&&(!e||e==="_self")&&!xC(t)}const IC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],TC="startTransition",Ey=S_[TC];function CC(t){let{basename:e,children:n,future:r,window:i}=t,s=b.useRef();s.current==null&&(s.current=DT({window:i,v5Compat:!0}));let o=s.current,[a,l]=b.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=b.useCallback(h=>{u&&Ey?Ey(()=>l(h)):l(h)},[l,u]);return b.useLayoutEffect(()=>o.listen(c),[o,c]),b.createElement(kC,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const bC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",AC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cm=b.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=SC(e,IC),{basename:f}=b.useContext(Bs),g,y=!1;if(typeof u=="string"&&AC.test(u)&&(g=u,bC))try{let d=new URL(window.location.href),v=u.startsWith("//")?new URL(d.protocol+u):new URL(u),E=Im(v.pathname,f);v.origin===d.origin&&E!=null?u=E+v.search+v.hash:y=!0}catch{}let w=oC(u,{relative:i}),k=NC(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(d){r&&r(d),d.defaultPrevented||k(d)}return b.createElement("a",Nd({},h,{href:g||w,onClick:y||s?r:m,ref:n,target:l}))});var Sy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Sy||(Sy={}));var xy;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(xy||(xy={}));function NC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Mc(),l=$c(),u=eE(t,{relative:o});return b.useCallback(c=>{if(_C(c,n)){c.preventDefault();let h=r!==void 0?r:Vu(l)===Vu(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var nE={exports:{}},we={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nt=typeof Symbol=="function"&&Symbol.for,bm=nt?Symbol.for("react.element"):60103,Am=nt?Symbol.for("react.portal"):60106,jc=nt?Symbol.for("react.fragment"):60107,Fc=nt?Symbol.for("react.strict_mode"):60108,Uc=nt?Symbol.for("react.profiler"):60114,zc=nt?Symbol.for("react.provider"):60109,Vc=nt?Symbol.for("react.context"):60110,Nm=nt?Symbol.for("react.async_mode"):60111,Bc=nt?Symbol.for("react.concurrent_mode"):60111,Hc=nt?Symbol.for("react.forward_ref"):60112,Wc=nt?Symbol.for("react.suspense"):60113,PC=nt?Symbol.for("react.suspense_list"):60120,Gc=nt?Symbol.for("react.memo"):60115,Kc=nt?Symbol.for("react.lazy"):60116,RC=nt?Symbol.for("react.block"):60121,OC=nt?Symbol.for("react.fundamental"):60117,DC=nt?Symbol.for("react.responder"):60118,LC=nt?Symbol.for("react.scope"):60119;function Xt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case bm:switch(t=t.type,t){case Nm:case Bc:case jc:case Uc:case Fc:case Wc:return t;default:switch(t=t&&t.$$typeof,t){case Vc:case Hc:case Kc:case Gc:case zc:return t;default:return e}}case Am:return e}}}function rE(t){return Xt(t)===Bc}we.AsyncMode=Nm;we.ConcurrentMode=Bc;we.ContextConsumer=Vc;we.ContextProvider=zc;we.Element=bm;we.ForwardRef=Hc;we.Fragment=jc;we.Lazy=Kc;we.Memo=Gc;we.Portal=Am;we.Profiler=Uc;we.StrictMode=Fc;we.Suspense=Wc;we.isAsyncMode=function(t){return rE(t)||Xt(t)===Nm};we.isConcurrentMode=rE;we.isContextConsumer=function(t){return Xt(t)===Vc};we.isContextProvider=function(t){return Xt(t)===zc};we.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===bm};we.isForwardRef=function(t){return Xt(t)===Hc};we.isFragment=function(t){return Xt(t)===jc};we.isLazy=function(t){return Xt(t)===Kc};we.isMemo=function(t){return Xt(t)===Gc};we.isPortal=function(t){return Xt(t)===Am};we.isProfiler=function(t){return Xt(t)===Uc};we.isStrictMode=function(t){return Xt(t)===Fc};we.isSuspense=function(t){return Xt(t)===Wc};we.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===jc||t===Bc||t===Uc||t===Fc||t===Wc||t===PC||typeof t=="object"&&t!==null&&(t.$$typeof===Kc||t.$$typeof===Gc||t.$$typeof===zc||t.$$typeof===Vc||t.$$typeof===Hc||t.$$typeof===OC||t.$$typeof===DC||t.$$typeof===LC||t.$$typeof===RC)};we.typeOf=Xt;nE.exports=we;var Pm=nE.exports;function $C(t){function e(O,$,j,Y,S){for(var se=0,R=0,Le=0,pe=0,ge,te,it=0,Dt=0,ce,dt=ce=ge=0,me=0,st=0,Js=0,ot=0,sl=j.length,Zs=sl-1,ln,X="",Ue="",Ph="",Rh="",sr;me<sl;){if(te=j.charCodeAt(me),me===Zs&&R+pe+Le+se!==0&&(R!==0&&(te=R===47?10:47),pe=Le=se=0,sl++,Zs++),R+pe+Le+se===0){if(me===Zs&&(0<st&&(X=X.replace(f,"")),0<X.trim().length)){switch(te){case 32:case 9:case 59:case 13:case 10:break;default:X+=j.charAt(me)}te=59}switch(te){case 123:for(X=X.trim(),ge=X.charCodeAt(0),ce=1,ot=++me;me<sl;){switch(te=j.charCodeAt(me)){case 123:ce++;break;case 125:ce--;break;case 47:switch(te=j.charCodeAt(me+1)){case 42:case 47:e:{for(dt=me+1;dt<Zs;++dt)switch(j.charCodeAt(dt)){case 47:if(te===42&&j.charCodeAt(dt-1)===42&&me+2!==dt){me=dt+1;break e}break;case 10:if(te===47){me=dt+1;break e}}me=dt}}break;case 91:te++;case 40:te++;case 34:case 39:for(;me++<Zs&&j.charCodeAt(me)!==te;);}if(ce===0)break;me++}switch(ce=j.substring(ot,me),ge===0&&(ge=(X=X.replace(h,"").trim()).charCodeAt(0)),ge){case 64:switch(0<st&&(X=X.replace(f,"")),te=X.charCodeAt(1),te){case 100:case 109:case 115:case 45:st=$;break;default:st=an}if(ce=e($,st,ce,te,S+1),ot=ce.length,0<P&&(st=n(an,X,Js),sr=a(3,ce,st,$,le,ae,ot,te,S,Y),X=st.join(""),sr!==void 0&&(ot=(ce=sr.trim()).length)===0&&(te=0,ce="")),0<ot)switch(te){case 115:X=X.replace(A,o);case 100:case 109:case 45:ce=X+"{"+ce+"}";break;case 107:X=X.replace(d,"$1 $2"),ce=X+"{"+ce+"}",ce=Fe===1||Fe===2&&s("@"+ce,3)?"@-webkit-"+ce+"@"+ce:"@"+ce;break;default:ce=X+ce,Y===112&&(ce=(Ue+=ce,""))}else ce="";break;default:ce=e($,n($,X,Js),ce,Y,S+1)}Ph+=ce,ce=Js=st=dt=ge=0,X="",te=j.charCodeAt(++me);break;case 125:case 59:if(X=(0<st?X.replace(f,""):X).trim(),1<(ot=X.length))switch(dt===0&&(ge=X.charCodeAt(0),ge===45||96<ge&&123>ge)&&(ot=(X=X.replace(" ",":")).length),0<P&&(sr=a(1,X,$,O,le,ae,Ue.length,Y,S,Y))!==void 0&&(ot=(X=sr.trim()).length)===0&&(X="\0\0"),ge=X.charCodeAt(0),te=X.charCodeAt(1),ge){case 0:break;case 64:if(te===105||te===99){Rh+=X+j.charAt(me);break}default:X.charCodeAt(ot-1)!==58&&(Ue+=i(X,ge,te,X.charCodeAt(2)))}Js=st=dt=ge=0,X="",te=j.charCodeAt(++me)}}switch(te){case 13:case 10:R===47?R=0:1+ge===0&&Y!==107&&0<X.length&&(st=1,X+="\0"),0<P*q&&a(0,X,$,O,le,ae,Ue.length,Y,S,Y),ae=1,le++;break;case 59:case 125:if(R+pe+Le+se===0){ae++;break}default:switch(ae++,ln=j.charAt(me),te){case 9:case 32:if(pe+se+R===0)switch(it){case 44:case 58:case 9:case 32:ln="";break;default:te!==32&&(ln=" ")}break;case 0:ln="\\0";break;case 12:ln="\\f";break;case 11:ln="\\v";break;case 38:pe+R+se===0&&(st=Js=1,ln="\f"+ln);break;case 108:if(pe+R+se+Ne===0&&0<dt)switch(me-dt){case 2:it===112&&j.charCodeAt(me-3)===58&&(Ne=it);case 8:Dt===111&&(Ne=Dt)}break;case 58:pe+R+se===0&&(dt=me);break;case 44:R+Le+pe+se===0&&(st=1,ln+="\r");break;case 34:case 39:R===0&&(pe=pe===te?0:pe===0?te:pe);break;case 91:pe+R+Le===0&&se++;break;case 93:pe+R+Le===0&&se--;break;case 41:pe+R+se===0&&Le--;break;case 40:if(pe+R+se===0){if(ge===0)switch(2*it+3*Dt){case 533:break;default:ge=1}Le++}break;case 64:R+Le+pe+se+dt+ce===0&&(ce=1);break;case 42:case 47:if(!(0<pe+se+Le))switch(R){case 0:switch(2*te+3*j.charCodeAt(me+1)){case 235:R=47;break;case 220:ot=me,R=42}break;case 42:te===47&&it===42&&ot+2!==me&&(j.charCodeAt(ot+2)===33&&(Ue+=j.substring(ot,me+1)),ln="",R=0)}}R===0&&(X+=ln)}Dt=it,it=te,me++}if(ot=Ue.length,0<ot){if(st=$,0<P&&(sr=a(2,Ue,st,O,le,ae,ot,Y,S,Y),sr!==void 0&&(Ue=sr).length===0))return Rh+Ue+Ph;if(Ue=st.join(",")+"{"+Ue+"}",Fe*Ne!==0){switch(Fe!==2||s(Ue,2)||(Ne=0),Ne){case 111:Ue=Ue.replace(E,":-moz-$1")+Ue;break;case 112:Ue=Ue.replace(v,"::-webkit-input-$1")+Ue.replace(v,"::-moz-$1")+Ue.replace(v,":-ms-input-$1")+Ue}Ne=0}}return Rh+Ue+Ph}function n(O,$,j){var Y=$.trim().split(k);$=Y;var S=Y.length,se=O.length;switch(se){case 0:case 1:var R=0;for(O=se===0?"":O[0]+" ";R<S;++R)$[R]=r(O,$[R],j).trim();break;default:var Le=R=0;for($=[];R<S;++R)for(var pe=0;pe<se;++pe)$[Le++]=r(O[pe]+" ",Y[R],j).trim()}return $}function r(O,$,j){var Y=$.charCodeAt(0);switch(33>Y&&(Y=($=$.trim()).charCodeAt(0)),Y){case 38:return $.replace(m,"$1"+O.trim());case 58:return O.trim()+$.replace(m,"$1"+O.trim());default:if(0<1*j&&0<$.indexOf("\f"))return $.replace(m,(O.charCodeAt(0)===58?"":"$1")+O.trim())}return O+$}function i(O,$,j,Y){var S=O+";",se=2*$+3*j+4*Y;if(se===944){O=S.indexOf(":",9)+1;var R=S.substring(O,S.length-1).trim();return R=S.substring(0,O).trim()+R+";",Fe===1||Fe===2&&s(R,1)?"-webkit-"+R+R:R}if(Fe===0||Fe===2&&!s(S,1))return S;switch(se){case 1015:return S.charCodeAt(10)===97?"-webkit-"+S+S:S;case 951:return S.charCodeAt(3)===116?"-webkit-"+S+S:S;case 963:return S.charCodeAt(5)===110?"-webkit-"+S+S:S;case 1009:if(S.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+S+S;case 978:return"-webkit-"+S+"-moz-"+S+S;case 1019:case 983:return"-webkit-"+S+"-moz-"+S+"-ms-"+S+S;case 883:if(S.charCodeAt(8)===45)return"-webkit-"+S+S;if(0<S.indexOf("image-set(",11))return S.replace(fe,"$1-webkit-$2")+S;break;case 932:if(S.charCodeAt(4)===45)switch(S.charCodeAt(5)){case 103:return"-webkit-box-"+S.replace("-grow","")+"-webkit-"+S+"-ms-"+S.replace("grow","positive")+S;case 115:return"-webkit-"+S+"-ms-"+S.replace("shrink","negative")+S;case 98:return"-webkit-"+S+"-ms-"+S.replace("basis","preferred-size")+S}return"-webkit-"+S+"-ms-"+S+S;case 964:return"-webkit-"+S+"-ms-flex-"+S+S;case 1023:if(S.charCodeAt(8)!==99)break;return R=S.substring(S.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+R+"-webkit-"+S+"-ms-flex-pack"+R+S;case 1005:return y.test(S)?S.replace(g,":-webkit-")+S.replace(g,":-moz-")+S:S;case 1e3:switch(R=S.substring(13).trim(),$=R.indexOf("-")+1,R.charCodeAt(0)+R.charCodeAt($)){case 226:R=S.replace(x,"tb");break;case 232:R=S.replace(x,"tb-rl");break;case 220:R=S.replace(x,"lr");break;default:return S}return"-webkit-"+S+"-ms-"+R+S;case 1017:if(S.indexOf("sticky",9)===-1)break;case 975:switch($=(S=O).length-10,R=(S.charCodeAt($)===33?S.substring(0,$):S).substring(O.indexOf(":",7)+1).trim(),se=R.charCodeAt(0)+(R.charCodeAt(7)|0)){case 203:if(111>R.charCodeAt(8))break;case 115:S=S.replace(R,"-webkit-"+R)+";"+S;break;case 207:case 102:S=S.replace(R,"-webkit-"+(102<se?"inline-":"")+"box")+";"+S.replace(R,"-webkit-"+R)+";"+S.replace(R,"-ms-"+R+"box")+";"+S}return S+";";case 938:if(S.charCodeAt(5)===45)switch(S.charCodeAt(6)){case 105:return R=S.replace("-items",""),"-webkit-"+S+"-webkit-box-"+R+"-ms-flex-"+R+S;case 115:return"-webkit-"+S+"-ms-flex-item-"+S.replace(T,"")+S;default:return"-webkit-"+S+"-ms-flex-line-pack"+S.replace("align-content","").replace(T,"")+S}break;case 973:case 989:if(S.charCodeAt(3)!==45||S.charCodeAt(4)===122)break;case 931:case 953:if(L.test(O)===!0)return(R=O.substring(O.indexOf(":")+1)).charCodeAt(0)===115?i(O.replace("stretch","fill-available"),$,j,Y).replace(":fill-available",":stretch"):S.replace(R,"-webkit-"+R)+S.replace(R,"-moz-"+R.replace("fill-",""))+S;break;case 962:if(S="-webkit-"+S+(S.charCodeAt(5)===102?"-ms-"+S:"")+S,j+Y===211&&S.charCodeAt(13)===105&&0<S.indexOf("transform",10))return S.substring(0,S.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+S}return S}function s(O,$){var j=O.indexOf($===1?":":"{"),Y=O.substring(0,$!==3?j:10);return j=O.substring(j+1,O.length-1),W($!==2?Y:Y.replace(H,"$1"),j,$)}function o(O,$){var j=i($,$.charCodeAt(0),$.charCodeAt(1),$.charCodeAt(2));return j!==$+";"?j.replace(N," or ($1)").substring(4):"("+$+")"}function a(O,$,j,Y,S,se,R,Le,pe,ge){for(var te=0,it=$,Dt;te<P;++te)switch(Dt=Ke[te].call(c,O,it,j,Y,S,se,R,Le,pe,ge)){case void 0:case!1:case!0:case null:break;default:it=Dt}if(it!==$)return it}function l(O){switch(O){case void 0:case null:P=Ke.length=0;break;default:if(typeof O=="function")Ke[P++]=O;else if(typeof O=="object")for(var $=0,j=O.length;$<j;++$)l(O[$]);else q=!!O|0}return l}function u(O){return O=O.prefix,O!==void 0&&(W=null,O?typeof O!="function"?Fe=1:(Fe=2,W=O):Fe=0),u}function c(O,$){var j=O;if(33>j.charCodeAt(0)&&(j=j.trim()),ke=j,j=[ke],0<P){var Y=a(-1,$,j,j,le,ae,0,0,0,0);Y!==void 0&&typeof Y=="string"&&($=Y)}var S=e(an,j,$,0,0);return 0<P&&(Y=a(-2,S,j,j,le,ae,S.length,0,0,0),Y!==void 0&&(S=Y)),ke="",Ne=0,ae=le=1,S}var h=/^\0+/g,f=/[\0\r\f]/g,g=/: */g,y=/zoo|gra/,w=/([,: ])(transform)/g,k=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,d=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,E=/:(read-only)/g,x=/[svh]\w+-[tblr]{2}/,A=/\(\s*(.*)\s*\)/g,N=/([\s\S]*?);/g,T=/-self|flex-/g,H=/[^]*?(:[rp][el]a[\w-]+)[^]*/,L=/stretch|:\s*\w+\-(?:conte|avail)/,fe=/([^-])(image-set\()/,ae=1,le=1,Ne=0,Fe=1,an=[],Ke=[],P=0,W=null,q=0,ke="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var MC={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function jC(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var FC=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,_y=jC(function(t){return FC.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),Rm=Pm,UC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},zC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},VC={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},iE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Om={};Om[Rm.ForwardRef]=VC;Om[Rm.Memo]=iE;function Iy(t){return Rm.isMemo(t)?iE:Om[t.$$typeof]||UC}var BC=Object.defineProperty,HC=Object.getOwnPropertyNames,Ty=Object.getOwnPropertySymbols,WC=Object.getOwnPropertyDescriptor,GC=Object.getPrototypeOf,Cy=Object.prototype;function sE(t,e,n){if(typeof e!="string"){if(Cy){var r=GC(e);r&&r!==Cy&&sE(t,r,n)}var i=HC(e);Ty&&(i=i.concat(Ty(e)));for(var s=Iy(t),o=Iy(e),a=0;a<i.length;++a){var l=i[a];if(!zC[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=WC(e,l);try{BC(t,l,u)}catch{}}}}return t}var KC=sE;const qC=Ap(KC);function jn(){return(jn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var by=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},Pd=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!Pm.typeOf(t)},Hu=Object.freeze([]),Pr=Object.freeze({});function ra(t){return typeof t=="function"}function Ay(t){return t.displayName||t.name||"Component"}function Dm(t){return t&&typeof t.styledComponentId=="string"}var Is=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Lm=typeof window<"u"&&"HTMLElement"in window,YC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function Ra(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var QC=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Ra(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),au=new Map,Wu=new Map,Ao=1,xl=function(t){if(au.has(t))return au.get(t);for(;Wu.has(Ao);)Ao++;var e=Ao++;return au.set(t,e),Wu.set(e,t),e},XC=function(t){return Wu.get(t)},JC=function(t,e){e>=Ao&&(Ao=e+1),au.set(t,e),Wu.set(e,t)},ZC="style["+Is+'][data-styled-version="5.3.11"]',eb=new RegExp("^"+Is+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),tb=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},nb=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(eb);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(JC(u,l),tb(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},rb=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},oE=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(Is))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Is,"active"),r.setAttribute("data-styled-version","5.3.11");var o=rb();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},ib=function(){function t(n){var r=this.element=oE(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}Ra(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),sb=function(){function t(n){var r=this.element=oE(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),ob=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),Ny=Lm,ab={isServer:!Lm,useCSSOMInjection:!YC},aE=function(){function t(n,r,i){n===void 0&&(n=Pr),r===void 0&&(r={}),this.options=jn({},ab,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Lm&&Ny&&(Ny=!1,function(s){for(var o=document.querySelectorAll(ZC),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Is)!=="active"&&(nb(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return xl(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(jn({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new ob(o):s?new ib(o):new sb(o),new QC(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(xl(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(xl(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(xl(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=XC(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=Is+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(f){f.length>0&&(h+=f+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),lb=/(a)(d)/gi,Py=function(t){return String.fromCharCode(t+(t>25?39:97))};function Rd(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Py(e%52)+n;return(Py(e%52)+n).replace(lb,"$1-$2")}var Ji=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},lE=function(t){return Ji(5381,t)};function ub(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ra(n)&&!Dm(n))return!1}return!0}var cb=lE("5.3.11"),hb=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ub(e),this.componentId=n,this.baseHash=Ji(cb,n),this.baseStyle=r,aE.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Ts(this.rules,e,n,r).join(""),a=Rd(Ji(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Ji(this.baseHash,r.hash),h="",f=0;f<u;f++){var g=this.rules[f];if(typeof g=="string")h+=g;else if(g){var y=Ts(g,e,n,r),w=Array.isArray(y)?y.join(""):y;c=Ji(c,w+f),h+=w}}if(h){var k=Rd(c>>>0);if(!n.hasNameForId(i,k)){var m=r(h,"."+k,void 0,i);n.insertRules(i,k,m)}s.push(k)}}return s.join(" ")},t}(),fb=/^\s*\/\/.*$/gm,db=[":","[",".","#"];function pb(t){var e,n,r,i,s=t===void 0?Pr:t,o=s.options,a=o===void 0?Pr:o,l=s.plugins,u=l===void 0?Hu:l,c=new $C(a),h=[],f=function(w){function k(m){if(m)try{w(m+"}")}catch{}}return function(m,d,v,E,x,A,N,T,H,L){switch(m){case 1:if(H===0&&d.charCodeAt(0)===64)return w(d+";"),"";break;case 2:if(T===0)return d+"/*|*/";break;case 3:switch(T){case 102:case 112:return w(v[0]+d),"";default:return d+(L===0?"/*|*/":"")}case-2:d.split("/*|*/}").forEach(k)}}}(function(w){h.push(w)}),g=function(w,k,m){return k===0&&db.indexOf(m[n.length])!==-1||m.match(i)?w:"."+e};function y(w,k,m,d){d===void 0&&(d="&");var v=w.replace(fb,""),E=k&&m?m+" "+k+" { "+v+" }":v;return e=d,n=k,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!k?"":k,E)}return c.use([].concat(u,[function(w,k,m){w===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,g))},f,function(w){if(w===-2){var k=h;return h=[],k}}])),y.hash=u.length?u.reduce(function(w,k){return k.name||Ra(15),Ji(w,k.name)},5381).toString():"",y}var uE=Wr.createContext();uE.Consumer;var cE=Wr.createContext(),mb=(cE.Consumer,new aE),Od=pb();function gb(){return b.useContext(uE)||mb}function vb(){return b.useContext(cE)||Od}var yb=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Od);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Ra(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=Od),this.name+e.hash},t}(),wb=/([A-Z])/,kb=/([A-Z])/g,Eb=/^ms-/,Sb=function(t){return"-"+t.toLowerCase()};function Ry(t){return wb.test(t)?t.replace(kb,Sb).replace(Eb,"-ms-"):t}var Oy=function(t){return t==null||t===!1||t===""};function Ts(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=Ts(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(Oy(t))return"";if(Dm(t))return"."+t.styledComponentId;if(ra(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return Ts(l,e,n,r)}var u;return t instanceof yb?n?(t.inject(n,r),t.getName(r)):t:Pd(t)?function c(h,f){var g,y,w=[];for(var k in h)h.hasOwnProperty(k)&&!Oy(h[k])&&(Array.isArray(h[k])&&h[k].isCss||ra(h[k])?w.push(Ry(k)+":",h[k],";"):Pd(h[k])?w.push.apply(w,c(h[k],k)):w.push(Ry(k)+": "+(g=k,(y=h[k])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||g in MC||g.startsWith("--")?String(y).trim():y+"px")+";"));return f?[f+" {"].concat(w,["}"]):w}(t):t.toString()}var Dy=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function yi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return ra(t)||Pd(t)?Dy(Ts(by(Hu,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:Dy(Ts(by(t,n)))}var xb=function(t,e,n){return n===void 0&&(n=Pr),t.theme!==n.theme&&t.theme||e||n.theme},_b=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ib=/(^-|-$)/g;function af(t){return t.replace(_b,"-").replace(Ib,"")}var Tb=function(t){return Rd(lE(t)>>>0)};function _l(t){return typeof t=="string"&&!0}var Dd=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},Cb=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function bb(t,e,n){var r=t[n];Dd(e)&&Dd(r)?hE(r,e):t[n]=e}function hE(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(Dd(o))for(var a in o)Cb(a)&&bb(t,o[a],a)}return t}var fE=Wr.createContext();fE.Consumer;var lf={};function dE(t,e,n){var r=Dm(t),i=!_l(t),s=e.attrs,o=s===void 0?Hu:s,a=e.componentId,l=a===void 0?function(d,v){var E=typeof d!="string"?"sc":af(d);lf[E]=(lf[E]||0)+1;var x=E+"-"+Tb("5.3.11"+E+lf[E]);return v?v+"-"+x:x}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(d){return _l(d)?"styled."+d:"Styled("+Ay(d)+")"}(t):u,h=e.displayName&&e.componentId?af(e.displayName)+"-"+e.componentId:e.componentId||l,f=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,g=e.shouldForwardProp;r&&t.shouldForwardProp&&(g=e.shouldForwardProp?function(d,v,E){return t.shouldForwardProp(d,v,E)&&e.shouldForwardProp(d,v,E)}:t.shouldForwardProp);var y,w=new hb(n,h,r?t.componentStyle:void 0),k=w.isStatic&&o.length===0,m=function(d,v){return function(E,x,A,N){var T=E.attrs,H=E.componentStyle,L=E.defaultProps,fe=E.foldedComponentIds,ae=E.shouldForwardProp,le=E.styledComponentId,Ne=E.target,Fe=function(Y,S,se){Y===void 0&&(Y=Pr);var R=jn({},S,{theme:Y}),Le={};return se.forEach(function(pe){var ge,te,it,Dt=pe;for(ge in ra(Dt)&&(Dt=Dt(R)),Dt)R[ge]=Le[ge]=ge==="className"?(te=Le[ge],it=Dt[ge],te&&it?te+" "+it:te||it):Dt[ge]}),[R,Le]}(xb(x,b.useContext(fE),L)||Pr,x,T),an=Fe[0],Ke=Fe[1],P=function(Y,S,se,R){var Le=gb(),pe=vb(),ge=S?Y.generateAndInjectStyles(Pr,Le,pe):Y.generateAndInjectStyles(se,Le,pe);return ge}(H,N,an),W=A,q=Ke.$as||x.$as||Ke.as||x.as||Ne,ke=_l(q),O=Ke!==x?jn({},x,{},Ke):x,$={};for(var j in O)j[0]!=="$"&&j!=="as"&&(j==="forwardedAs"?$.as=O[j]:(ae?ae(j,_y,q):!ke||_y(j))&&($[j]=O[j]));return x.style&&Ke.style!==x.style&&($.style=jn({},x.style,{},Ke.style)),$.className=Array.prototype.concat(fe,le,P!==le?P:null,x.className,Ke.className).filter(Boolean).join(" "),$.ref=W,b.createElement(q,$)}(y,d,v,k)};return m.displayName=c,(y=Wr.forwardRef(m)).attrs=f,y.componentStyle=w,y.displayName=c,y.shouldForwardProp=g,y.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Hu,y.styledComponentId=h,y.target=r?t.target:t,y.withComponent=function(d){var v=e.componentId,E=function(A,N){if(A==null)return{};var T,H,L={},fe=Object.keys(A);for(H=0;H<fe.length;H++)T=fe[H],N.indexOf(T)>=0||(L[T]=A[T]);return L}(e,["componentId"]),x=v&&v+"-"+(_l(d)?d:af(Ay(d)));return dE(d,jn({},E,{attrs:f,componentId:x}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(d){this._foldedDefaultProps=r?hE({},t.defaultProps,d):d}}),Object.defineProperty(y,"toString",{value:function(){return"."+y.styledComponentId}}),i&&qC(y,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var Ld=function(t){return function e(n,r,i){if(i===void 0&&(i=Pr),!Pm.isValidElementType(r))return Ra(1,String(r));var s=function(){return n(r,i,yi.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,jn({},i,{},o))},s.attrs=function(o){return e(n,r,jn({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(dE,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Ld[t]=Ld(t)});const G=Ld,Ab=G.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,Nb=G.div`
  margin: 0;
  padding: 5px 1.5vw;
  border-bottom: 0.5px solid grey;
  position: relative;
  display: flex;
  z-index: 9999;

  .title {
    margin-left: 20px;
    font-size: 3rem;
    font-family: Raleway, sans-serif;
    font-weight: 800;
    letter-spacing: 0.1rem;

    :hover {
      :hover {
        color: #9f9daf;
        /* offset-x | offset-y | blur-radius | spread-radius | color */
        text-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
      }
    }
  }

  .allowPopup {
    cursor: pointer;
  }
`,Pb=G.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
  margin: 0 20px;

  nav {
    display: flex;
    flex-direction: row;
  }

  .icons {
    color: white;
    margin: 10px 1.4vw;
    height: 25px;
    padding: 5px;
    cursor: pointer;

    

    :hover {
      color: #9f9daf;
      /* offset-x | offset-y | blur-radius | spread-radius | color */
      text-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
    }
  }

`;function Ly(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ly(Object(n),!0).forEach(function(r){Xe(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ly(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Gu(t){"@babel/helpers - typeof";return Gu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gu(t)}function Rb(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function $y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Ob(t,e,n){return e&&$y(t.prototype,e),n&&$y(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Xe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function $m(t,e){return Lb(t)||Mb(t,e)||pE(t,e)||Fb()}function Oa(t){return Db(t)||$b(t)||pE(t)||jb()}function Db(t){if(Array.isArray(t))return $d(t)}function Lb(t){if(Array.isArray(t))return t}function $b(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Mb(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function pE(t,e){if(t){if(typeof t=="string")return $d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $d(t,e)}}function $d(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function jb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var My=function(){},Mm={},mE={},gE=null,vE={mark:My,measure:My};try{typeof window<"u"&&(Mm=window),typeof document<"u"&&(mE=document),typeof MutationObserver<"u"&&(gE=MutationObserver),typeof performance<"u"&&(vE=performance)}catch{}var Ub=Mm.navigator||{},jy=Ub.userAgent,Fy=jy===void 0?"":jy,Fr=Mm,Ce=mE,Uy=gE,Il=vE;Fr.document;var rr=!!Ce.documentElement&&!!Ce.head&&typeof Ce.addEventListener=="function"&&typeof Ce.createElement=="function",yE=~Fy.indexOf("MSIE")||~Fy.indexOf("Trident/"),Tl,Cl,bl,Al,Nl,Kn="___FONT_AWESOME___",Md=16,wE="fa",kE="svg-inline--fa",wi="data-fa-i2svg",jd="data-fa-pseudo-element",zb="data-fa-pseudo-element-pending",jm="data-prefix",Fm="data-icon",zy="fontawesome-i2svg",Vb="async",Bb=["HTML","HEAD","STYLE","SCRIPT"],EE=function(){try{return!0}catch{return!1}}(),xe="classic",Me="sharp",Um=[xe,Me];function Da(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[xe]}})}var ia=Da((Tl={},Xe(Tl,xe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Xe(Tl,Me,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Tl)),sa=Da((Cl={},Xe(Cl,xe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Xe(Cl,Me,{solid:"fass",regular:"fasr",light:"fasl"}),Cl)),oa=Da((bl={},Xe(bl,xe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Xe(bl,Me,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),bl)),Hb=Da((Al={},Xe(Al,xe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Xe(Al,Me,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Al)),Wb=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,SE="fa-layers-text",Gb=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Kb=Da((Nl={},Xe(Nl,xe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Xe(Nl,Me,{900:"fass",400:"fasr",300:"fasl"}),Nl)),xE=[1,2,3,4,5,6,7,8,9,10],qb=xE.concat([11,12,13,14,15,16,17,18,19,20]),Yb=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ii={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},aa=new Set;Object.keys(sa[xe]).map(aa.add.bind(aa));Object.keys(sa[Me]).map(aa.add.bind(aa));var Qb=[].concat(Um,Oa(aa),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ii.GROUP,ii.SWAP_OPACITY,ii.PRIMARY,ii.SECONDARY]).concat(xE.map(function(t){return"".concat(t,"x")})).concat(qb.map(function(t){return"w-".concat(t)})),No=Fr.FontAwesomeConfig||{};function Xb(t){var e=Ce.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Jb(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ce&&typeof Ce.querySelector=="function"){var Zb=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Zb.forEach(function(t){var e=$m(t,2),n=e[0],r=e[1],i=Jb(Xb(n));i!=null&&(No[r]=i)})}var _E={styleDefault:"solid",familyDefault:"classic",cssPrefix:wE,replacementClass:kE,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};No.familyPrefix&&(No.cssPrefix=No.familyPrefix);var Cs=M(M({},_E),No);Cs.autoReplaceSvg||(Cs.observeMutations=!1);var z={};Object.keys(_E).forEach(function(t){Object.defineProperty(z,t,{enumerable:!0,set:function(n){Cs[t]=n,Po.forEach(function(r){return r(z)})},get:function(){return Cs[t]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(e){Cs.cssPrefix=e,Po.forEach(function(n){return n(z)})},get:function(){return Cs.cssPrefix}});Fr.FontAwesomeConfig=z;var Po=[];function eA(t){return Po.push(t),function(){Po.splice(Po.indexOf(t),1)}}var ar=Md,xn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function tA(t){if(!(!t||!rr)){var e=Ce.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ce.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Ce.head.insertBefore(e,r),t}}var nA="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function la(){for(var t=12,e="";t-- >0;)e+=nA[Math.random()*62|0];return e}function Hs(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function zm(t){return t.classList?Hs(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function IE(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function rA(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(IE(t[n]),'" ')},"").trim()}function qc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Vm(t){return t.size!==xn.size||t.x!==xn.x||t.y!==xn.y||t.rotate!==xn.rotate||t.flipX||t.flipY}function iA(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function sA(t){var e=t.transform,n=t.width,r=n===void 0?Md:n,i=t.height,s=i===void 0?Md:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&yE?l+="translate(".concat(e.x/ar-r/2,"em, ").concat(e.y/ar-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/ar,"em), calc(-50% + ").concat(e.y/ar,"em)) "):l+="translate(".concat(e.x/ar,"em, ").concat(e.y/ar,"em) "),l+="scale(".concat(e.size/ar*(e.flipX?-1:1),", ").concat(e.size/ar*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var oA=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function TE(){var t=wE,e=kE,n=z.cssPrefix,r=z.replacementClass,i=oA;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Vy=!1;function uf(){z.autoAddCss&&!Vy&&(tA(TE()),Vy=!0)}var aA={mixout:function(){return{dom:{css:TE,insertCss:uf}}},hooks:function(){return{beforeDOMElementCreation:function(){uf()},beforeI2svg:function(){uf()}}}},qn=Fr||{};qn[Kn]||(qn[Kn]={});qn[Kn].styles||(qn[Kn].styles={});qn[Kn].hooks||(qn[Kn].hooks={});qn[Kn].shims||(qn[Kn].shims=[]);var dn=qn[Kn],CE=[],lA=function t(){Ce.removeEventListener("DOMContentLoaded",t),Ku=1,CE.map(function(e){return e()})},Ku=!1;rr&&(Ku=(Ce.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ce.readyState),Ku||Ce.addEventListener("DOMContentLoaded",lA));function uA(t){rr&&(Ku?setTimeout(t,0):CE.push(t))}function La(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?IE(t):"<".concat(e," ").concat(rA(r),">").concat(s.map(La).join(""),"</").concat(e,">")}function By(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var cA=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},cf=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?cA(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function hA(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Fd(t){var e=hA(t);return e.length===1?e[0].toString(16):null}function fA(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Hy(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Ud(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Hy(e);typeof dn.hooks.addPack=="function"&&!i?dn.hooks.addPack(t,Hy(e)):dn.styles[t]=M(M({},dn.styles[t]||{}),s),t==="fas"&&Ud("fa",e)}var Pl,Rl,Ol,Zi=dn.styles,dA=dn.shims,pA=(Pl={},Xe(Pl,xe,Object.values(oa[xe])),Xe(Pl,Me,Object.values(oa[Me])),Pl),Bm=null,bE={},AE={},NE={},PE={},RE={},mA=(Rl={},Xe(Rl,xe,Object.keys(ia[xe])),Xe(Rl,Me,Object.keys(ia[Me])),Rl);function gA(t){return~Qb.indexOf(t)}function vA(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!gA(i)?i:null}var OE=function(){var e=function(s){return cf(Zi,function(o,a,l){return o[l]=cf(a,s,{}),o},{})};bE=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),AE=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),RE=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Zi||z.autoFetchSvg,r=cf(dA,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});NE=r.names,PE=r.unicodes,Bm=Yc(z.styleDefault,{family:z.familyDefault})};eA(function(t){Bm=Yc(t.styleDefault,{family:z.familyDefault})});OE();function Hm(t,e){return(bE[t]||{})[e]}function yA(t,e){return(AE[t]||{})[e]}function si(t,e){return(RE[t]||{})[e]}function DE(t){return NE[t]||{prefix:null,iconName:null}}function wA(t){var e=PE[t],n=Hm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ur(){return Bm}var Wm=function(){return{prefix:null,iconName:null,rest:[]}};function Yc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?xe:n,i=ia[r][t],s=sa[r][t]||sa[r][i],o=t in dn.styles?t:null;return s||o||null}var Wy=(Ol={},Xe(Ol,xe,Object.keys(oa[xe])),Xe(Ol,Me,Object.keys(oa[Me])),Ol);function Qc(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Xe(e,xe,"".concat(z.cssPrefix,"-").concat(xe)),Xe(e,Me,"".concat(z.cssPrefix,"-").concat(Me)),e),o=null,a=xe;(t.includes(s[xe])||t.some(function(u){return Wy[xe].includes(u)}))&&(a=xe),(t.includes(s[Me])||t.some(function(u){return Wy[Me].includes(u)}))&&(a=Me);var l=t.reduce(function(u,c){var h=vA(z.cssPrefix,c);if(Zi[c]?(c=pA[a].includes(c)?Hb[a][c]:c,o=c,u.prefix=c):mA[a].indexOf(c)>-1?(o=c,u.prefix=Yc(c,{family:a})):h?u.iconName=h:c!==z.replacementClass&&c!==s[xe]&&c!==s[Me]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?DE(u.iconName):{},g=si(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||g||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!Zi.far&&Zi.fas&&!z.autoFetchSvg&&(u.prefix="fas")}return u},Wm());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Me&&(Zi.fass||z.autoFetchSvg)&&(l.prefix="fass",l.iconName=si(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ur()||"fas"),l}var kA=function(){function t(){Rb(this,t),this.definitions={}}return Ob(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=M(M({},n.definitions[a]||{}),o[a]),Ud(a,o[a]);var l=oa[xe][a];l&&Ud(l,o[a]),OE()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(h){typeof h=="string"&&(n[a][h]=u)}),n[a][l]=u}),n}}]),t}(),Gy=[],es={},hs={},EA=Object.keys(hs);function SA(t,e){var n=e.mixoutsTo;return Gy=t,es={},Object.keys(hs).forEach(function(r){EA.indexOf(r)===-1&&delete hs[r]}),Gy.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Gu(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){es[o]||(es[o]=[]),es[o].push(s[o])})}r.provides&&r.provides(hs)}),n}function zd(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=es[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function ki(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=es[t]||[];i.forEach(function(s){s.apply(null,n)})}function Yn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return hs[t]?hs[t].apply(null,e):void 0}function Vd(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Ur();if(e)return e=si(n,e)||e,By(LE.definitions,n,e)||By(dn.styles,n,e)}var LE=new kA,xA=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,ki("noAuto")},_A={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return rr?(ki("beforeI2svg",e),Yn("pseudoElements2svg",e),Yn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,uA(function(){TA({autoReplaceSvgRoot:n}),ki("watch",e)})}},IA={icon:function(e){if(e===null)return null;if(Gu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:si(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Yc(e[0]);return{prefix:r,iconName:si(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(z.cssPrefix,"-"))>-1||e.match(Wb))){var i=Qc(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Ur(),iconName:si(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Ur();return{prefix:s,iconName:si(s,e)||e}}}},Jt={noAuto:xA,config:z,dom:_A,parse:IA,library:LE,findIconDefinition:Vd,toHtml:La},TA=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Ce:n;(Object.keys(dn.styles).length>0||z.autoFetchSvg)&&rr&&z.autoReplaceSvg&&Jt.dom.i2svg({node:r})};function Xc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return La(r)})}}),Object.defineProperty(t,"node",{get:function(){if(rr){var r=Ce.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function CA(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Vm(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=qc(M(M({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function bA(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(z.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},i),{},{id:o}),children:r}]}]}function Gm(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,h=t.extra,f=t.watchable,g=f===void 0?!1:f,y=r.found?r:n,w=y.width,k=y.height,m=i==="fak",d=[z.replacementClass,s?"".concat(z.cssPrefix,"-").concat(s):""].filter(function(H){return h.classes.indexOf(H)===-1}).filter(function(H){return H!==""||!!H}).concat(h.classes).join(" "),v={children:[],attributes:M(M({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:d,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(k)})},E=m&&!~h.classes.indexOf("fa-fw")?{width:"".concat(w/k*16*.0625,"em")}:{};g&&(v.attributes[wi]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(c||la())},children:[l]}),delete v.attributes.title);var x=M(M({},v),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:M(M({},E),h.styles)}),A=r.found&&n.found?Yn("generateAbstractMask",x)||{children:[],attributes:{}}:Yn("generateAbstractIcon",x)||{children:[],attributes:{}},N=A.children,T=A.attributes;return x.children=N,x.attributes=T,a?bA(x):CA(x)}function Ky(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=M(M(M({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[wi]="");var c=M({},o.styles);Vm(i)&&(c.transform=sA({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var h=qc(c);h.length>0&&(u.style=h);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function AA(t){var e=t.content,n=t.title,r=t.extra,i=M(M(M({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=qc(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var hf=dn.styles;function Bd(t){var e=t[0],n=t[1],r=t.slice(4),i=$m(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(ii.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(ii.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(ii.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var NA={found:!1,width:512,height:512};function PA(t,e){!EE&&!z.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Hd(t,e){var n=e;return e==="fa"&&z.styleDefault!==null&&(e=Ur()),new Promise(function(r,i){if(Yn("missingIconAbstract"),n==="fa"){var s=DE(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&hf[e]&&hf[e][t]){var o=hf[e][t];return r(Bd(o))}PA(t,e),r(M(M({},NA),{},{icon:z.showMissingIcons&&t?Yn("missingIconAbstract")||{}:{}}))})}var qy=function(){},Wd=z.measurePerformance&&Il&&Il.mark&&Il.measure?Il:{mark:qy,measure:qy},mo='FA "6.4.0"',RA=function(e){return Wd.mark("".concat(mo," ").concat(e," begins")),function(){return $E(e)}},$E=function(e){Wd.mark("".concat(mo," ").concat(e," ends")),Wd.measure("".concat(mo," ").concat(e),"".concat(mo," ").concat(e," begins"),"".concat(mo," ").concat(e," ends"))},Km={begin:RA,end:$E},lu=function(){};function Yy(t){var e=t.getAttribute?t.getAttribute(wi):null;return typeof e=="string"}function OA(t){var e=t.getAttribute?t.getAttribute(jm):null,n=t.getAttribute?t.getAttribute(Fm):null;return e&&n}function DA(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(z.replacementClass)}function LA(){if(z.autoReplaceSvg===!0)return uu.replace;var t=uu[z.autoReplaceSvg];return t||uu.replace}function $A(t){return Ce.createElementNS("http://www.w3.org/2000/svg",t)}function MA(t){return Ce.createElement(t)}function ME(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?$A:MA:n;if(typeof t=="string")return Ce.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(ME(o,{ceFn:r}))}),i}function jA(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var uu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(ME(i),n)}),n.getAttribute(wi)===null&&z.keepOriginalSource){var r=Ce.createComment(jA(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~zm(n).indexOf(z.replacementClass))return uu.replace(e);var i=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===z.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return La(a)}).join(`
`);n.setAttribute(wi,""),n.innerHTML=o}};function Qy(t){t()}function jE(t,e){var n=typeof e=="function"?e:lu;if(t.length===0)n();else{var r=Qy;z.mutateApproach===Vb&&(r=Fr.requestAnimationFrame||Qy),r(function(){var i=LA(),s=Km.begin("mutate");t.map(i),s(),n()})}}var qm=!1;function FE(){qm=!0}function Gd(){qm=!1}var qu=null;function Xy(t){if(Uy&&z.observeMutations){var e=t.treeCallback,n=e===void 0?lu:e,r=t.nodeCallback,i=r===void 0?lu:r,s=t.pseudoElementsCallback,o=s===void 0?lu:s,a=t.observeMutationsRoot,l=a===void 0?Ce:a;qu=new Uy(function(u){if(!qm){var c=Ur();Hs(u).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Yy(h.addedNodes[0])&&(z.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&z.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&Yy(h.target)&&~Yb.indexOf(h.attributeName))if(h.attributeName==="class"&&OA(h.target)){var f=Qc(zm(h.target)),g=f.prefix,y=f.iconName;h.target.setAttribute(jm,g||c),y&&h.target.setAttribute(Fm,y)}else DA(h.target)&&i(h.target)})}}),rr&&qu.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function FA(){qu&&qu.disconnect()}function UA(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function zA(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Qc(zm(t));return i.prefix||(i.prefix=Ur()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=yA(i.prefix,t.innerText)||Hm(i.prefix,Fd(t.innerText))),!i.iconName&&z.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function VA(t){var e=Hs(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return z.autoA11y&&(n?e["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||la()):(e["aria-hidden"]="true",e.focusable="false")),e}function BA(){return{iconName:null,title:null,titleId:null,prefix:null,transform:xn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Jy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=zA(t),r=n.iconName,i=n.prefix,s=n.rest,o=VA(t),a=zd("parseNodeAttributes",{},t),l=e.styleParser?UA(t):[];return M({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:xn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var HA=dn.styles;function UE(t){var e=z.autoReplaceSvg==="nest"?Jy(t,{styleParser:!1}):Jy(t);return~e.extra.classes.indexOf(SE)?Yn("generateLayersText",t,e):Yn("generateSvgReplacementMutation",t,e)}var zr=new Set;Um.map(function(t){zr.add("fa-".concat(t))});Object.keys(ia[xe]).map(zr.add.bind(zr));Object.keys(ia[Me]).map(zr.add.bind(zr));zr=Oa(zr);function Zy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!rr)return Promise.resolve();var n=Ce.documentElement.classList,r=function(h){return n.add("".concat(zy,"-").concat(h))},i=function(h){return n.remove("".concat(zy,"-").concat(h))},s=z.autoFetchSvg?zr:Um.map(function(c){return"fa-".concat(c)}).concat(Object.keys(HA));s.includes("fa")||s.push("fa");var o=[".".concat(SE,":not([").concat(wi,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(wi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Hs(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Km.begin("onTree"),u=a.reduce(function(c,h){try{var f=UE(h);f&&c.push(f)}catch(g){EE||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,h){Promise.all(u).then(function(f){jE(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),h(f)})})}function WA(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;UE(t).then(function(n){n&&jE([n],e)})}function GA(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Vd(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Vd(i||{})),t(r,M(M({},n),{},{mask:i}))}}var KA=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?xn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,h=n.title,f=h===void 0?null:h,g=n.titleId,y=g===void 0?null:g,w=n.classes,k=w===void 0?[]:w,m=n.attributes,d=m===void 0?{}:m,v=n.styles,E=v===void 0?{}:v;if(e){var x=e.prefix,A=e.iconName,N=e.icon;return Xc(M({type:"icon"},e),function(){return ki("beforeDOMElementCreation",{iconDefinition:e,params:n}),z.autoA11y&&(f?d["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(y||la()):(d["aria-hidden"]="true",d.focusable="false")),Gm({icons:{main:Bd(N),mask:l?Bd(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:A,transform:M(M({},xn),i),symbol:o,title:f,maskId:c,titleId:y,extra:{attributes:d,styles:E,classes:k}})})}},qA={mixout:function(){return{icon:GA(KA)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Zy,n.nodeCallback=WA,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Ce:r,s=n.callback,o=s===void 0?function(){}:s;return Zy(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,h=r.maskId,f=r.extra;return new Promise(function(g,y){Promise.all([Hd(i,a),c.iconName?Hd(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var k=$m(w,2),m=k[0],d=k[1];g([n,Gm({icons:{main:m,mask:d},prefix:a,iconName:i,transform:l,symbol:u,maskId:h,title:s,titleId:o,extra:f,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=qc(a);l.length>0&&(i.style=l);var u;return Vm(o)&&(u=Yn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},YA={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Xc({type:"layer"},function(){ki("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(Oa(s)).join(" ")},children:o}]})}}}},QA={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,h=c===void 0?{}:c;return Xc({type:"counter",content:n},function(){return ki("beforeDOMElementCreation",{content:n,params:r}),AA({content:n.toString(),title:s,extra:{attributes:u,styles:h,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(Oa(a))}})})}}}},XA={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?xn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,h=c===void 0?{}:c,f=r.styles,g=f===void 0?{}:f;return Xc({type:"text",content:n},function(){return ki("beforeDOMElementCreation",{content:n,params:r}),Ky({content:n,transform:M(M({},xn),s),title:a,extra:{attributes:h,styles:g,classes:["".concat(z.cssPrefix,"-layers-text")].concat(Oa(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(yE){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return z.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ky({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},JA=new RegExp('"',"ug"),e0=[1105920,1112319];function ZA(t){var e=t.replace(JA,""),n=fA(e,0),r=n>=e0[0]&&n<=e0[1],i=e.length===2?e[0]===e[1]:!1;return{value:Fd(i?e[0]:e),isSecondary:r||i}}function t0(t,e){var n="".concat(zb).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Hs(t.children),o=s.filter(function(N){return N.getAttribute(jd)===e})[0],a=Fr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(Gb),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?Me:xe,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?sa[f][l[2].toLowerCase()]:Kb[f][u],y=ZA(h),w=y.value,k=y.isSecondary,m=l[0].startsWith("FontAwesome"),d=Hm(g,w),v=d;if(m){var E=wA(w);E.iconName&&E.prefix&&(d=E.iconName,g=E.prefix)}if(d&&!k&&(!o||o.getAttribute(jm)!==g||o.getAttribute(Fm)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);var x=BA(),A=x.extra;A.attributes[jd]=e,Hd(d,g).then(function(N){var T=Gm(M(M({},x),{},{icons:{main:N,mask:Wm()},prefix:g,iconName:v,extra:A,watchable:!0})),H=Ce.createElement("svg");e==="::before"?t.insertBefore(H,t.firstChild):t.appendChild(H),H.outerHTML=T.map(function(L){return La(L)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function eN(t){return Promise.all([t0(t,"::before"),t0(t,"::after")])}function tN(t){return t.parentNode!==document.head&&!~Bb.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(jd)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function n0(t){if(rr)return new Promise(function(e,n){var r=Hs(t.querySelectorAll("*")).filter(tN).map(eN),i=Km.begin("searchPseudoElements");FE(),Promise.all(r).then(function(){i(),Gd(),e()}).catch(function(){i(),Gd(),n()})})}var nN={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=n0,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Ce:r;z.searchPseudoElements&&n0(i)}}},r0=!1,rN={mixout:function(){return{dom:{unwatch:function(){FE(),r0=!0}}}},hooks:function(){return{bootstrap:function(){Xy(zd("mutationObserverCallbacks",{}))},noAuto:function(){FA()},watch:function(n){var r=n.observeMutationsRoot;r0?Gd():Xy(zd("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},i0=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},iN={mixout:function(){return{parse:{transform:function(n){return i0(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=i0(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},g={outer:a,inner:h,path:f};return{tag:"g",attributes:M({},g.outer),children:[{tag:"g",attributes:M({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:M(M({},r.icon.attributes),g.path)}]}]}}}},ff={x:0,y:0,width:"100%",height:"100%"};function s0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function sN(t){return t.tag==="g"?t.children:[t]}var oN={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Qc(i.split(" ").map(function(o){return o.trim()})):Wm();return s.prefix||(s.prefix=Ur()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,h=o.width,f=o.icon,g=iA({transform:l,containerWidth:h,iconWidth:u}),y={tag:"rect",attributes:M(M({},ff),{},{fill:"white"})},w=c.children?{children:c.children.map(s0)}:{},k={tag:"g",attributes:M({},g.inner),children:[s0(M({tag:c.tag,attributes:M(M({},c.attributes),g.path)},w))]},m={tag:"g",attributes:M({},g.outer),children:[k]},d="mask-".concat(a||la()),v="clip-".concat(a||la()),E={tag:"mask",attributes:M(M({},ff),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,m]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:sN(f)},E]};return r.push(x,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(d,")")},ff)}),{children:r,attributes:i}}}},aN={provides:function(e){var n=!1;Fr.matchMedia&&(n=Fr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:M(M({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=M(M({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:M(M({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:M(M({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:M(M({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:M(M({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:M(M({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},lN={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},uN=[aA,qA,YA,QA,XA,nN,rN,iN,oN,aN,lN];SA(uN,{mixoutsTo:Jt});Jt.noAuto;Jt.config;Jt.library;Jt.dom;var Kd=Jt.parse;Jt.findIconDefinition;Jt.toHtml;var cN=Jt.icon;Jt.layer;Jt.text;Jt.counter;var zE={exports:{}},hN="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",fN=hN,dN=fN;function VE(){}function BE(){}BE.resetWarningCache=VE;var pN=function(){function t(r,i,s,o,a,l){if(l!==dN){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:BE,resetWarningCache:VE};return n.PropTypes=n,n};zE.exports=pN();var mN=zE.exports;const ne=Ap(mN);function o0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function kr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?o0(Object(n),!0).forEach(function(r){ts(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Yu(t){"@babel/helpers - typeof";return Yu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Yu(t)}function ts(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function gN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function vN(t,e){if(t==null)return{};var n=gN(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function qd(t){return yN(t)||wN(t)||kN(t)||EN()}function yN(t){if(Array.isArray(t))return Yd(t)}function wN(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function kN(t,e){if(t){if(typeof t=="string")return Yd(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yd(t,e)}}function Yd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function EN(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function SN(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,h=t.pulse,f=t.fixedWidth,g=t.inverse,y=t.border,w=t.listItem,k=t.flip,m=t.size,d=t.rotation,v=t.pull,E=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":h,"fa-fw":f,"fa-inverse":g,"fa-border":y,"fa-li":w,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},ts(e,"fa-".concat(m),typeof m<"u"&&m!==null),ts(e,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),ts(e,"fa-pull-".concat(v),typeof v<"u"&&v!==null),ts(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(x){return E[x]?x:null}).filter(function(x){return x})}function xN(t){return t=t-0,t===t}function HE(t){return xN(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var _N=["style"];function IN(t){return t.charAt(0).toUpperCase()+t.slice(1)}function TN(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=HE(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[IN(i)]=s:e[i]=s,e},{})}function WE(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return WE(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=TN(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[HE(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=vN(n,_N);return i.attrs.style=kr(kr({},i.attrs.style),o),t.apply(void 0,[e.tag,kr(kr({},i.attrs),a)].concat(qd(r)))}var GE=!1;try{GE=!0}catch{}function CN(){if(!GE&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function a0(t){if(t&&Yu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Kd.icon)return Kd.icon(t);if(t===null)return null;if(t&&Yu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function df(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ts({},t,e):{}}var jt=Wr.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=a0(n),c=df("classes",[].concat(qd(SN(t)),qd(s.split(" ")))),h=df("transform",typeof t.transform=="string"?Kd.transform(t.transform):t.transform),f=df("mask",a0(r)),g=cN(u,kr(kr(kr(kr({},c),h),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!g)return CN("Could not find icon",u),null;var y=g.abstract,w={ref:e};return Object.keys(t).forEach(function(k){jt.defaultProps.hasOwnProperty(k)||(w[k]=t[k])}),bN(y[0],w)});jt.displayName="FontAwesomeIcon";jt.propTypes={beat:ne.bool,border:ne.bool,beatFade:ne.bool,bounce:ne.bool,className:ne.string,fade:ne.bool,flash:ne.bool,mask:ne.oneOfType([ne.object,ne.array,ne.string]),maskId:ne.string,fixedWidth:ne.bool,inverse:ne.bool,flip:ne.oneOf([!0,!1,"horizontal","vertical","both"]),icon:ne.oneOfType([ne.object,ne.array,ne.string]),listItem:ne.bool,pull:ne.oneOf(["right","left"]),pulse:ne.bool,rotation:ne.oneOf([0,90,180,270]),shake:ne.bool,size:ne.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ne.bool,spinPulse:ne.bool,spinReverse:ne.bool,symbol:ne.oneOfType([ne.bool,ne.string]),title:ne.string,titleId:ne.string,transform:ne.oneOfType([ne.string,ne.object]),swapOpacity:ne.bool};jt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var bN=WE.bind(null,Wr.createElement),AN={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},NN={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},KE={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},PN={prefix:"fas",iconName:"scroll",icon:[576,512,[128220],"f70e","M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z"]},RN={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},ON={prefix:"fas",iconName:"ranking-star",icon:[640,512,[],"e561","M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0L286.2 54.1l-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32H256zM32 320c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zm416 96v64c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V416c0-17.7-14.3-32-32-32H480c-17.7 0-32 14.3-32 32z"]},DN={prefix:"fas",iconName:"pen-nib",icon:[512,512,[10001],"f5ad","M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.8-9.2L288 94.6z"]},LN={prefix:"fas",iconName:"anchor",icon:[576,512,[9875],"f13d","M320 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm21.1 80C367 158.8 384 129.4 384 96c0-53-43-96-96-96s-96 43-96 96c0 33.4 17 62.8 42.9 80H224c-17.7 0-32 14.3-32 32s14.3 32 32 32h32V448H208c-53 0-96-43-96-96v-6.1l7 7c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L97 263c-9.4-9.4-24.6-9.4-33.9 0L7 319c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l7-7V352c0 88.4 71.6 160 160 160h80 80c88.4 0 160-71.6 160-160v-6.1l7 7c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-56-56c-9.4-9.4-24.6-9.4-33.9 0l-56 56c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l7-7V352c0 53-43 96-96 96H320V240h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H341.1z"]},$N={prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]};const MN=G.div`
  display: flex;
  ${({visible:t})=>t?yi`
          opacity: 1;
          visibility: visible;
        `:yi`
          opacity: 0;
          visibility: hidden;
        `};
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.3s;
`,jN=G.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  overflow: hidden;
`,FN=G.div`
  background: rgb(183, 186, 210, 0.9);
  border-radius: 4px;
  width: 70vw;
  min-height: 30%;
  min-height: 50%;
  padding: 20px;
  position: relative;
  font-size: 1.2rem;
  text-align: left;
  margin: 40px auto;
  border: 1px solid #455367;
  z-index: 9999;
  p,
  h1,
  h2 {
    color: black;
  }
`,UN=G.div`
  margin: 3vh auto;
  text-align: left;
  line-height: 25px;
  font-family: Raleway;
  font-size: 0.9rem;
  font-weight: 500;
  color: #2c394e;
`;G.div`
  display: flex;
  justify-content: center;
`;const zN=G.button`
  position: relative;
  height: 30px;
  with: 30px;
  background-color: transparent;
  border: 1px solid transparent;
  color: #666;
  cursor: pointer;
  font-size: 1.4rem;
  transition: transform 0.4s ease-in-out, color 0.4s ease-in-out;

  :hover {
    transform: rotate(180deg);
    color: #fff;
  }
`,VN=G.div`
  padding: 1px 25px;
  font-size: 1rem;
  line-height: 1.5rem; 

  ul {
    list-style-type: none;
  }

  li {
    padding-bottom: 20px;
  }

  .bold {
    font-weight: bold;
  } 
`,BN=()=>p.jsxs(VN,{children:[p.jsx("h4",{children:"These are the rules of Marienbad Nim Game:"}),p.jsxs("ul",{children:[p.jsxs("li",{children:["a) you may delete"," ",p.jsx("span",{className:"bold",children:"all the sticks you want"})," in each move, and it must be ",p.jsx("span",{className:"bold",children:"at least one"}),"."]}),p.jsxs("li",{children:["b) you may delete the sticks"," ",p.jsx("span",{className:"bold",children:"from one single line"})," in each move."]}),p.jsxs("li",{children:["c) you win if you leave the computer"," ",p.jsx("span",{className:"bold",children:"with the last stick"}),"."]}),p.jsxs("li",{children:["d) you can make the ",p.jsx("span",{className:"bold",children:"first move"})," or you can leave the computer start the game."]})]})]}),HN=({visible:t,setVisible:e})=>p.jsx(MN,{visible:t,children:p.jsx(jN,{onClick:()=>e(!1),children:p.jsxs(FN,{children:[p.jsx(zN,{onClick:n=>{n.stopPropagation(),e(!1)},children:"X"}),p.jsx(UN,{children:p.jsx(BN,{})})]})})}),WN=G.div`
  display: flex;
  ${({visible:t})=>t?yi`
          opacity: 1;
          visibility: visible;
        `:yi`
          opacity: 0;
          visibility: hidden;
        `};
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.3s;
`,GN=G.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9998;
  overflow: hidden;
  display: flex;
`,KN=G.div`
  background: rgb(183, 186, 210, 0.9);
  border: 1px solid #455367;
  border-radius: 4px;
  width: 20vw;
  max-width: 300px;
  min-width: 200px;
  min-height: 25%;
  position: fixed;
  right: 20px;
  top: 20px;
  text-align: left;
  margin: 0px auto;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`,qN=G.div`
  margin: 10px auto;
  border-radius: 3px;
  min-height: 200px;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  line-height: 3rem;
  font-family: Raleway, sans serif;
  font-size: 1rem;
  font-weight: 800;
  color: #2c394e;

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 30px auto;
    padding: 0;
  }

  li {
    display: block;
    text-align: left;
    justify-content: center;
    padding: 0px 20px;
    border-bottom: 1px solid #2c394e;
    cursor: pointer;
    
    :hover {
      color: #666666;
    }
  }

  .icons {
    padding-right: 20px;

    :hover {
      color: #666666;
    }
  }

  .listTop {
    border-top: 1px solid #2c394e;
  }
`,YN=G.button`
  position: relative;
  height: 27px;
  with: 27px;
  background-color: transparent;
  border: 1px solid transparent;
  color: #666;
  cursor: pointer;
  font-size: 1.2rem;
  transition: transform 0.4s ease-in-out, color 0.4s ease-in-out;

  :hover {
    transform: rotate(180deg);
    color: #fff;
  }
`,ns=G(Cm)`
  color: #2c394e;

  :hover {
    color: #666666;
  }
`,QN=G.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  text-align: center;
  font-family: Roboto, sans-serif;
  background-color: #3f3c5f;
  color: white;
`,XN=({visible:t,setVisible:e})=>p.jsx(WN,{visible:t,children:p.jsx(GN,{onClick:()=>e(!1),children:p.jsxs(KN,{children:[p.jsx(YN,{onClick:n=>{n.stopPropagation(),e(!1)},children:"X"}),p.jsx(qN,{children:p.jsx("div",{children:p.jsxs("ul",{children:[p.jsx("li",{className:"gamerules listTop",children:p.jsx(ns,{to:"/gamerules/",children:p.jsxs("a",{children:[p.jsx("span",{children:p.jsx(jt,{className:"icons",icon:PN,onClick:()=>console.log("click log in!")})}),"GAME RULES"]})})}),p.jsx("li",{className:"ranking",children:p.jsx(ns,{to:"/ranking/",children:p.jsxs("a",{children:[p.jsx("span",{children:p.jsx(jt,{className:"icons",icon:ON,onClick:()=>console.log("click log in!")})}),"RANKING"]})})}),p.jsx("li",{className:"nimHistory",children:p.jsx(ns,{to:"/history/",children:p.jsxs("a",{children:[p.jsx("span",{children:p.jsx(jt,{className:"icons",icon:$N,onClick:()=>console.log("click history!")})}),"NIM HISTORY"]})})}),p.jsx("li",{className:"externalLinks",children:p.jsx(ns,{to:"/external-links/",children:p.jsxs("a",{children:[p.jsx("span",{children:p.jsx(jt,{className:"icons",icon:LN,onClick:()=>console.log("click log in!")})}),"OTHER LINKS"]})})})]})})})]})})}),JN=G.div`
  display: flex;
  ${({visible:t})=>t?yi`
          opacity: 1;
          visibility: visible;
        `:yi`
          opacity: 0;
          visibility: hidden;
        `};
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.3s;
`,ZN=G.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9998;
  overflow: hidden;
  display: flex;
`,eP=G.div`
  background: rgb(183, 186, 210, 0.9);
  border: 1px solid #455367;
  border-radius: 4px;
  width: 20vw;
  max-width: 300px;
  min-width: 180px;
  min-height: 25%;
  position: fixed;
  right: 20px;
  top: 20px;
  text-align: left;
  margin: 0px auto;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`,tP=G.div`
  margin: 10px auto;
  border-radius: 3px;
  min-height: 200px;
  justify-content: center;
  align-items: center;

  line-height: 3rem;
  font-family: Raleway, sans serif;
  font-size: 1rem;
  font-weight: 800;
  color: #2c394e;

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 30px auto;
    padding: 0;
  }

  li {
    display: block;
    text-align: left;
    justify-content: center;
    padding: 0px 30px;
    border-bottom: 1px solid #2c394e;
    cursor: pointer;

    :hover {
      color: #666666;
    }
  }

  .icons {
    padding-right: 20px;

    :hover {
      color: #666666;
    }
  }

  .listTop {
    border-top: 1px solid #2c394e;
  }
`,nP=G.button`
  position: relative;
  height: 27px;
  with: 27px;
  background-color: transparent;
  border: 1px solid transparent;
  color: #666;
  cursor: pointer;
  font-size: 1.2rem;
  transition: transform 0.4s ease-in-out, color 0.4s ease-in-out;

  :hover {
    transform: rotate(180deg);
    color: #fff;
  }
`,rP=({visible:t,setVisible:e})=>{const[n,r]=Dc(),i=Mc(),s=()=>{console.log("click to log out"),localStorage.clear(),r({}),console.log("Successfully logged out!"),console.log("user after logout=>",n),i("/")};return p.jsx(JN,{visible:t,children:p.jsx(ZN,{onClick:()=>e(!1),children:p.jsxs(eP,{children:[p.jsx(nP,{onClick:o=>{o.stopPropagation(),e(!1)},children:"X"}),p.jsx(tP,{children:p.jsxs("ul",{children:[p.jsx("li",{className:"listTop",children:p.jsx(ns,{to:"/signup/",children:p.jsxs("a",{children:[p.jsx("span",{children:p.jsx(jt,{className:"icons",icon:DN})}),"SIGN UP"]})})}),p.jsx("li",{children:p.jsx(ns,{to:"/login/",children:p.jsxs("a",{children:[p.jsx("span",{children:p.jsx(jt,{className:"icons",icon:KE})}),"LOG IN"]})})}),p.jsx("li",{children:p.jsx("div",{onClick:s,children:p.jsxs("a",{children:[p.jsx("span",{children:p.jsx(jt,{className:"icons",icon:AN})}),"LOGOUT"]})})})]})})]})})})},iP=()=>{const[t,e]=b.useState(!1),[n,r]=b.useState(!1),[i,s]=b.useState(!1);return p.jsxs(Nb,{children:[p.jsx("p",{className:"title allowPopup",onClick:()=>e(!0),children:"NIM GAME"}),p.jsx(Pb,{children:p.jsxs("nav",{children:[p.jsx("div",{className:"home",children:p.jsx(Cm,{to:"/",children:p.jsx("span",{children:p.jsx(jt,{className:"icons",icon:RN})})})}),p.jsx("div",{className:"menu",children:p.jsx("span",{children:p.jsx(jt,{className:"icons allowPopup",icon:NN,onClick:()=>r(!0)})})}),p.jsx("div",{className:"user",children:p.jsx("span",{children:p.jsx(jt,{className:"icons",icon:KE,onClick:()=>s(!0)})})})]})}),t&&p.jsx(HN,{visible:t,setVisible:()=>e(!1)}),n&&p.jsx(XN,{visible:n,setVisible:()=>r(!1)}),i&&p.jsx(rP,{visible:i,setVisible:()=>s(!1)})]})},sP=G.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: 600;
  margin: 10px auto;
  padding: 5px 0;
  min-width: 320px;
  height: 50vh;
`,Dl=G.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
`;G.button`
  background-color: skyblue;
  color: white;
`;const oP=G.div`
  margin: 0 auto;
  align-content: center;
  justify-content: center;
  width: 100vw;
  border-top: 1px solid grey;
`,aP=G.div`
  margin: 0 auto;
  padding-top: 30px;
  align-content: center;
  justify-content: center;
  justify-items: center;
  align-items: center;
  max-width: 600px;
  display: grid;
  grid-template-columns: 0.8fr 0.8fr 0.8fr;

  p {
    color: yellow;
    font-family: Roboto, Inter, Lato, Raleway, Montserrat, "Open Sans",
      sans-serif;
    font-weight: 400;
    font-size: 0.8rem;
    letter-spacing: 0.06rem;
  }

  span {
    color: orange;
    font-weight: 300;
    padding-left: 5px;
  }
`,Ym=G.div`
  max-width: 25px;
  max-height: 40px;
  margin: 5px 20px;
  display: flex;
  justify-content: center;


  img {
    max-width: 30px;
    max-height: 30px;
    cursor: pointer;
  }
`,lP="/playnimgame/assets/yes-0244da85.png",uP=()=>p.jsx(Ym,{children:p.jsx("img",{alt:"stick",src:lP})}),cP="/playnimgame/assets/no-3ec6db88.png",hP=()=>p.jsx(Ym,{children:p.jsx("img",{alt:"erased",src:cP})}),gt=({stickValue:t,eraseStick:e})=>p.jsx(Ym,{onClick:e,children:t===1?p.jsx(uP,{}):p.jsx(hP,{})}),l0=[{stickId:1,lineId:1,lineEnabled:!0,stickEnabled:!0,stickValue:1},{stickId:2,lineId:3,lineEnabled:!0,stickEnabled:!0,stickValue:1},{stickId:3,lineId:3,lineEnabled:!0,stickEnabled:!0,stickValue:1},{stickId:4,lineId:3,lineEnabled:!0,stickEnabled:!0,stickValue:1},{stickId:5,lineId:5,lineEnabled:!0,stickEnabled:!0,stickValue:1},{stickId:6,lineId:5,lineEnabled:!0,stickEnabled:!0,stickValue:1},{stickId:7,lineId:5,lineEnabled:!0,stickEnabled:!0,stickValue:1},{stickId:8,lineId:5,lineEnabled:!0,stickEnabled:!0,stickValue:1},{stickId:9,lineId:5,lineEnabled:!0,stickEnabled:!0,stickValue:1},{stickId:10,lineId:7,lineEnabled:!0,stickEnabled:!0,stickValue:1},{stickId:11,lineId:7,lineEnabled:!0,stickEnabled:!0,stickValue:1},{stickId:12,lineId:7,lineEnabled:!0,stickEnabled:!0,stickValue:1},{stickId:13,lineId:7,lineEnabled:!0,stickEnabled:!0,stickValue:1},{stickId:14,lineId:7,lineEnabled:!0,stickEnabled:!0,stickValue:1},{stickId:15,lineId:7,lineEnabled:!0,stickEnabled:!0,stickValue:1},{stickId:16,lineId:7,lineEnabled:!0,stickEnabled:!0,stickValue:1}],fP=G.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 20px 0;
`,u0=G.button`
background-color: #9f9daf;
color: white;
border: 1px solid transparent;
height: 50px;
width: 110px;
border-radius: 10px;
margin: 30px 30px;
padding: 5px;
cursor: pointer;
font-family: Open Sans;
font-weight: 500;
letter-spacing: 0.04rem;
transition: background-color 0.1s, box-shadow 0.1s;

:hover {
  background-color: #6f6d7a;
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
}
`,Ll=t=>{const e=t.length-1;return{...t[e],stickValue:0,stickEnabled:!1}},$l=(t,e)=>t.filter(i=>i.lineId===e).reduce((i,{stickValue:s})=>i+s,0),qE=t=>{const e=$l(t,1),n=$l(t,3),r=$l(t,5),i=$l(t,7),s=[];return s.push(e,n,r,i),s},dP=t=>{const e=[[],[],[]],n=[],r=[],i=[];function s(o){const a=Math.trunc(o/4),l=o%4;n.push(a);const u=Math.trunc(l/2),c=l%2;r.push(u);const h=c;i.push(h)}for(let o=0;o<=3;o++)s(t[o]);return e[0].push(i),e[1].push(r),e[2].push(n),e},pP=t=>{const e=a=>a.reduce((l,u)=>l+u),n=e(e(t[0])),r=e(e(t[1])),i=e(e(t[2])),s=[];return s.push(n,r,i),s.map(a=>a%2!==0)},mP=t=>t.every(e=>e===!1),Ml=t=>{const e=qE(t);console.log("sticksPerLine",e);const n=dP(e);console.log("decomposed",n);const r=pP(n);console.log("findUnpaired",r);const i=mP(r);return console.log("checkIfValidMove ? ",i),i},gP=t=>{const e=t.filter(a=>a.stickValue!==0),n=e.map(a=>a.lineId).filter((a,l,u)=>u.indexOf(a)===l),r=Math.floor(Math.random()*n.length),i=n[r],s=e.filter(a=>a.lineId===i);return s[s.length-1]},vP=t=>{const n={...gP(t),stickValue:0,stickEnabled:!1};return t[n.stickId-1]=n,[...t]},yP=t=>{const e=qE(t);console.log("l6 sticksperLine",e);const n=e.filter(i=>i===0).length;console.log("numberOfEmptyLines",n);const r=e.filter(i=>i===1).length;if(console.log("numberOfOnes",r),n===2&&r===1){const i=[];e.forEach((s,o)=>{s!==0&&s!==1&&i.push(o)}),console.log("indexLineToErase",i[0])}},wP=t=>{const e=[...t];let n=[];const r=e.filter(f=>f.stickValue!==0),i=r.filter(f=>f.lineId===1),s=r.filter(f=>f.lineId===3),o=r.filter(f=>f.lineId===5),a=r.filter(f=>f.lineId===7);console.log("sticksToTryLineOne",i),console.log("sticksToTryLineThree",s),console.log("sticksToTryLineFive",o),console.log("sticksToTryLineSeven",a);const l=[...e],u=[...e],c=[...e],h=[...e];if(yP(e),i.length>0){const f=Ll(i);l[f.stickId-1]=f,Ml(l)===!0&&(console.log("We have a winning move!=> ",l),n=[...l])}if(n.length<1&&s.length>0)for(let f=s.length-1;f>=0;f--){const g=Ll(s);if(u[g.stickId-1]=g,Ml(u)){console.log("We have a winning move!=> ",u),n=[...u];break}else s.pop()}if(n.length<1&&o.length>0)for(let f=o.length-1;f>=0;f--){const g=Ll(o);if(c[g.stickId-1]=g,Ml(c)){console.log("We have a winning move!=> ",c),n=[...c];break}else o.pop()}if(n.length<1&&a.length>0)for(let f=a.length-1;f>=0;f--){const g=Ll(a);if(h[g.stickId-1]=g,Ml(h)){n=[...h];break}else a.pop()}return n.length>0||(console.log("Nothing to be done, just pick a random stick"),n=vP(e)),n};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},kP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},QE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(f=64)),r.push(n[c],n[h],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(YE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new EP;const f=s<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class EP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const SP=function(t){const e=YE(t);return QE.encodeByteArray(e,!0)},Qu=function(t){return SP(t).replace(/\./g,"")},XE=function(t){try{return QE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P=()=>xP().__FIREBASE_DEFAULTS__,IP=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},TP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&XE(t[1]);return e&&JSON.parse(e)},Qm=()=>{try{return _P()||IP()||TP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},JE=t=>{var e,n;return(n=(e=Qm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},CP=t=>{const e=JE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ZE=()=>{var t;return(t=Qm())===null||t===void 0?void 0:t.config},e2=t=>{var e;return(e=Qm())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Qu(JSON.stringify(n)),Qu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function NP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function PP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function RP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function OP(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function DP(){try{return typeof indexedDB=="object"}catch{return!1}}function LP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P="FirebaseError";class ir extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$P,Object.setPrototypeOf(this,ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$a.prototype.create)}}class $a{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?MP(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ir(i,a,r)}}function MP(t,e){return t.replace(jP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const jP=/\{\$([^}]+)}/g;function FP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(c0(s)&&c0(o)){if(!Xu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function c0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function UP(t,e){const n=new zP(t,e);return n.subscribe.bind(n)}class zP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");VP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=pf),i.error===void 0&&(i.error=pf),i.complete===void 0&&(i.complete=pf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pf(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t){return t&&t._delegate?t._delegate:t}class Ei{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new bP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WP(e))try{this.getOrInitializeService({instanceIdentifier:ei})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ei){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ei){return this.instances.has(e)}getOptions(e=ei){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:HP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ei){return this.component?this.component.multipleInstances?e:ei:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function HP(t){return t===ei?void 0:t}function WP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new BP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const KP={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},qP=he.INFO,YP={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},QP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=YP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xm{constructor(e){this.name=e,this._logLevel=qP,this._logHandler=QP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const XP=(t,e)=>e.some(n=>t instanceof n);let h0,f0;function JP(){return h0||(h0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ZP(){return f0||(f0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const t2=new WeakMap,Qd=new WeakMap,n2=new WeakMap,mf=new WeakMap,Jm=new WeakMap;function e4(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Rr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&t2.set(n,t)}).catch(()=>{}),Jm.set(e,t),e}function t4(t){if(Qd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Qd.set(t,e)}let Xd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||n2.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function n4(t){Xd=t(Xd)}function r4(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(gf(this),e,...n);return n2.set(r,e.sort?e.sort():[e]),Rr(r)}:ZP().includes(t)?function(...e){return t.apply(gf(this),e),Rr(t2.get(this))}:function(...e){return Rr(t.apply(gf(this),e))}}function i4(t){return typeof t=="function"?r4(t):(t instanceof IDBTransaction&&t4(t),XP(t,JP())?new Proxy(t,Xd):t)}function Rr(t){if(t instanceof IDBRequest)return e4(t);if(mf.has(t))return mf.get(t);const e=i4(t);return e!==t&&(mf.set(t,e),Jm.set(e,t)),e}const gf=t=>Jm.get(t);function s4(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Rr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Rr(o.result),l.oldVersion,l.newVersion,Rr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const o4=["get","getKey","getAll","getAllKeys","count"],a4=["put","add","delete","clear"],vf=new Map;function d0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vf.get(e))return vf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=a4.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||o4.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return vf.set(e,s),s}n4(t=>({...t,get:(e,n,r)=>d0(e,n)||t.get(e,n,r),has:(e,n)=>!!d0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l4{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(u4(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function u4(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jd="@firebase/app",p0="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=new Xm("@firebase/app"),c4="@firebase/app-compat",h4="@firebase/analytics-compat",f4="@firebase/analytics",d4="@firebase/app-check-compat",p4="@firebase/app-check",m4="@firebase/auth",g4="@firebase/auth-compat",v4="@firebase/database",y4="@firebase/database-compat",w4="@firebase/functions",k4="@firebase/functions-compat",E4="@firebase/installations",S4="@firebase/installations-compat",x4="@firebase/messaging",_4="@firebase/messaging-compat",I4="@firebase/performance",T4="@firebase/performance-compat",C4="@firebase/remote-config",b4="@firebase/remote-config-compat",A4="@firebase/storage",N4="@firebase/storage-compat",P4="@firebase/firestore",R4="@firebase/firestore-compat",O4="firebase",D4="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd="[DEFAULT]",L4={[Jd]:"fire-core",[c4]:"fire-core-compat",[f4]:"fire-analytics",[h4]:"fire-analytics-compat",[p4]:"fire-app-check",[d4]:"fire-app-check-compat",[m4]:"fire-auth",[g4]:"fire-auth-compat",[v4]:"fire-rtdb",[y4]:"fire-rtdb-compat",[w4]:"fire-fn",[k4]:"fire-fn-compat",[E4]:"fire-iid",[S4]:"fire-iid-compat",[x4]:"fire-fcm",[_4]:"fire-fcm-compat",[I4]:"fire-perf",[T4]:"fire-perf-compat",[C4]:"fire-rc",[b4]:"fire-rc-compat",[A4]:"fire-gcs",[N4]:"fire-gcs-compat",[P4]:"fire-fst",[R4]:"fire-fst-compat","fire-js":"fire-js",[O4]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=new Map,ep=new Map;function $4(t,e){try{t.container.addComponent(e)}catch(n){Si.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bs(t){const e=t.name;if(ep.has(e))return Si.debug(`There were multiple attempts to register component ${e}.`),!1;ep.set(e,t);for(const n of Ju.values())$4(n,t);return!0}function Zm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M4={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Or=new $a("app","Firebase",M4);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j4{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ei("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Or.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=D4;function r2(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Or.create("bad-app-name",{appName:String(i)});if(n||(n=ZE()),!n)throw Or.create("no-options");const s=Ju.get(i);if(s){if(Xu(n,s.options)&&Xu(r,s.config))return s;throw Or.create("duplicate-app",{appName:i})}const o=new GP(i);for(const l of ep.values())o.addComponent(l);const a=new j4(n,r,o);return Ju.set(i,a),a}function i2(t=Zd){const e=Ju.get(t);if(!e&&t===Zd&&ZE())return r2();if(!e)throw Or.create("no-app",{appName:t});return e}function Dr(t,e,n){var r;let i=(r=L4[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Si.warn(a.join(" "));return}bs(new Ei(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F4="firebase-heartbeat-database",U4=1,ua="firebase-heartbeat-store";let yf=null;function s2(){return yf||(yf=s4(F4,U4,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ua)}}}).catch(t=>{throw Or.create("idb-open",{originalErrorMessage:t.message})})),yf}async function z4(t){try{return await(await s2()).transaction(ua).objectStore(ua).get(o2(t))}catch(e){if(e instanceof ir)Si.warn(e.message);else{const n=Or.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Si.warn(n.message)}}}async function m0(t,e){try{const r=(await s2()).transaction(ua,"readwrite");await r.objectStore(ua).put(e,o2(t)),await r.done}catch(n){if(n instanceof ir)Si.warn(n.message);else{const r=Or.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Si.warn(r.message)}}}function o2(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V4=1024,B4=30*24*60*60*1e3;class H4{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new G4(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=g0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=B4}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=g0(),{heartbeatsToSend:n,unsentEntries:r}=W4(this._heartbeatsCache.heartbeats),i=Qu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function g0(){return new Date().toISOString().substring(0,10)}function W4(t,e=V4){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),v0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),v0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class G4{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return DP()?LP().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await z4(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return m0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return m0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function v0(t){return Qu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K4(t){bs(new Ei("platform-logger",e=>new l4(e),"PRIVATE")),bs(new Ei("heartbeat",e=>new H4(e),"PRIVATE")),Dr(Jd,p0,t),Dr(Jd,p0,"esm2017"),Dr("fire-js","")}K4("");var q4=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,eg=eg||{},Q=q4||self;function Jc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ja(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Y4(t){return Object.prototype.hasOwnProperty.call(t,wf)&&t[wf]||(t[wf]=++Q4)}var wf="closure_uid_"+(1e9*Math.random()>>>0),Q4=0;function X4(t,e,n){return t.call.apply(t.bind,arguments)}function J4(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function St(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?St=X4:St=J4,St.apply(null,arguments)}function jl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function rt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Yr(){this.s=this.s,this.o=this.o}var Z4=0;Yr.prototype.s=!1;Yr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Z4!=0)&&Y4(this)};Yr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const a2=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function tg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function y0(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Jc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function xt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}xt.prototype.h=function(){this.defaultPrevented=!0};var eR=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",()=>{},e),Q.removeEventListener("test",()=>{},e)}catch{}return t}();function ca(t){return/^[\s\xa0]*$/.test(t)}function Zc(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function Sn(t){return Zc().indexOf(t)!=-1}function ng(t){return ng[" "](t),t}ng[" "]=function(){};function tR(t,e){var n=KR;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var nR=Sn("Opera"),As=Sn("Trident")||Sn("MSIE"),l2=Sn("Edge"),tp=l2||As,u2=Sn("Gecko")&&!(Zc().toLowerCase().indexOf("webkit")!=-1&&!Sn("Edge"))&&!(Sn("Trident")||Sn("MSIE"))&&!Sn("Edge"),rR=Zc().toLowerCase().indexOf("webkit")!=-1&&!Sn("Edge");function c2(){var t=Q.document;return t?t.documentMode:void 0}var np;e:{var kf="",Ef=function(){var t=Zc();if(u2)return/rv:([^\);]+)(\)|;)/.exec(t);if(l2)return/Edge\/([\d\.]+)/.exec(t);if(As)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(rR)return/WebKit\/(\S+)/.exec(t);if(nR)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ef&&(kf=Ef?Ef[1]:""),As){var Sf=c2();if(Sf!=null&&Sf>parseFloat(kf)){np=String(Sf);break e}}np=kf}var rp;if(Q.document&&As){var w0=c2();rp=w0||parseInt(np,10)||void 0}else rp=void 0;var iR=rp;function ha(t,e){if(xt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(u2){e:{try{ng(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:sR[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ha.$.h.call(this)}}rt(ha,xt);var sR={2:"touch",3:"pen",4:"mouse"};ha.prototype.h=function(){ha.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Fa="closure_listenable_"+(1e6*Math.random()|0),oR=0;function aR(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++oR,this.fa=this.ia=!1}function eh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function rg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function lR(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function h2(t){const e={};for(const n in t)e[n]=t[n];return e}const k0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function f2(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<k0.length;s++)n=k0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function th(t){this.src=t,this.g={},this.h=0}th.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=sp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new aR(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function ip(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=a2(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(eh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function sp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var ig="closure_lm_"+(1e6*Math.random()|0),xf={};function d2(t,e,n,r,i){if(r&&r.once)return m2(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)d2(t,e[s],n,r,i);return null}return n=ag(n),t&&t[Fa]?t.O(e,n,ja(r)?!!r.capture:!!r,i):p2(t,e,n,!1,r,i)}function p2(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ja(i)?!!i.capture:!!i,a=og(t);if(a||(t[ig]=a=new th(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=uR(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)eR||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(v2(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function uR(){function t(n){return e.call(t.src,t.listener,n)}const e=cR;return t}function m2(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)m2(t,e[s],n,r,i);return null}return n=ag(n),t&&t[Fa]?t.P(e,n,ja(r)?!!r.capture:!!r,i):p2(t,e,n,!0,r,i)}function g2(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)g2(t,e[s],n,r,i);else r=ja(r)?!!r.capture:!!r,n=ag(n),t&&t[Fa]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=sp(s,n,r,i),-1<n&&(eh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=og(t))&&(e=t.g[e.toString()],t=-1,e&&(t=sp(e,n,r,i)),(n=-1<t?e[t]:null)&&sg(n))}function sg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Fa])ip(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(v2(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=og(e))?(ip(n,t),n.h==0&&(n.src=null,e[ig]=null)):eh(t)}}}function v2(t){return t in xf?xf[t]:xf[t]="on"+t}function cR(t,e){if(t.fa)t=!0;else{e=new ha(e,this);var n=t.listener,r=t.la||t.src;t.ia&&sg(t),t=n.call(r,e)}return t}function og(t){return t=t[ig],t instanceof th?t:null}var _f="__closure_events_fn_"+(1e9*Math.random()>>>0);function ag(t){return typeof t=="function"?t:(t[_f]||(t[_f]=function(e){return t.handleEvent(e)}),t[_f])}function tt(){Yr.call(this),this.i=new th(this),this.S=this,this.J=null}rt(tt,Yr);tt.prototype[Fa]=!0;tt.prototype.removeEventListener=function(t,e,n,r){g2(this,t,e,n,r)};function ht(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new xt(e,t);else if(e instanceof xt)e.target=e.target||t;else{var i=e;e=new xt(r,t),f2(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Fl(o,r,!0,e)&&i}if(o=e.g=t,i=Fl(o,r,!0,e)&&i,i=Fl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Fl(o,r,!1,e)&&i}tt.prototype.N=function(){if(tt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)eh(n[r]);delete t.g[e],t.h--}}this.J=null};tt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};tt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Fl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&ip(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var lg=Q.JSON.stringify;class hR{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function fR(){var t=ug;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class dR{constructor(){this.h=this.g=null}add(e,n){const r=y2.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var y2=new hR(()=>new pR,t=>t.reset());class pR{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function mR(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function gR(t){Q.setTimeout(()=>{throw t},0)}let fa,da=!1,ug=new dR,w2=()=>{const t=Q.Promise.resolve(void 0);fa=()=>{t.then(vR)}};var vR=()=>{for(var t;t=fR();){try{t.h.call(t.g)}catch(n){gR(n)}var e=y2;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}da=!1};function nh(t,e){tt.call(this),this.h=t||1,this.g=e||Q,this.j=St(this.qb,this),this.l=Date.now()}rt(nh,tt);D=nh.prototype;D.ga=!1;D.T=null;D.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ht(this,"tick"),this.ga&&(cg(this),this.start()))}};D.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function cg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}D.N=function(){nh.$.N.call(this),cg(this),delete this.g};function hg(t,e,n){if(typeof t=="function")n&&(t=St(t,n));else if(t&&typeof t.handleEvent=="function")t=St(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function k2(t){t.g=hg(()=>{t.g=null,t.i&&(t.i=!1,k2(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class yR extends Yr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:k2(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pa(t){Yr.call(this),this.h=t,this.g={}}rt(pa,Yr);var E0=[];function E2(t,e,n,r){Array.isArray(n)||(n&&(E0[0]=n.toString()),n=E0);for(var i=0;i<n.length;i++){var s=d2(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function S2(t){rg(t.g,function(e,n){this.g.hasOwnProperty(n)&&sg(e)},t),t.g={}}pa.prototype.N=function(){pa.$.N.call(this),S2(this)};pa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function rh(){this.g=!0}rh.prototype.Ea=function(){this.g=!1};function wR(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function kR(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function rs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+SR(t,n)+(r?" "+r:"")})}function ER(t,e){t.info(function(){return"TIMEOUT: "+e})}rh.prototype.info=function(){};function SR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return lg(n)}catch{return e}}var Ni={},S0=null;function ih(){return S0=S0||new tt}Ni.Ta="serverreachability";function x2(t){xt.call(this,Ni.Ta,t)}rt(x2,xt);function ma(t){const e=ih();ht(e,new x2(e))}Ni.STAT_EVENT="statevent";function _2(t,e){xt.call(this,Ni.STAT_EVENT,t),this.stat=e}rt(_2,xt);function Nt(t){const e=ih();ht(e,new _2(e,t))}Ni.Ua="timingevent";function I2(t,e){xt.call(this,Ni.Ua,t),this.size=e}rt(I2,xt);function Ua(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var sh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},T2={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function fg(){}fg.prototype.h=null;function x0(t){return t.h||(t.h=t.i())}function C2(){}var za={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function dg(){xt.call(this,"d")}rt(dg,xt);function pg(){xt.call(this,"c")}rt(pg,xt);var op;function oh(){}rt(oh,fg);oh.prototype.g=function(){return new XMLHttpRequest};oh.prototype.i=function(){return{}};op=new oh;function Va(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new pa(this),this.P=xR,t=tp?125:void 0,this.V=new nh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new b2}function b2(){this.i=null,this.g="",this.h=!1}var xR=45e3,ap={},Zu={};D=Va.prototype;D.setTimeout=function(t){this.P=t};function lp(t,e,n){t.L=1,t.v=lh(Qn(e)),t.s=n,t.S=!0,A2(t,null)}function A2(t,e){t.G=Date.now(),Ba(t),t.A=Qn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),M2(n.i,"t",r),t.C=0,n=t.l.J,t.h=new b2,t.g=iS(t.l,n?e:null,!t.s),0<t.O&&(t.M=new yR(St(t.Pa,t,t.g),t.O)),E2(t.U,t.g,"readystatechange",t.nb),e=t.I?h2(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ma(),wR(t.j,t.u,t.A,t.m,t.W,t.s)}D.nb=function(t){t=t.target;const e=this.M;e&&_n(t)==3?e.l():this.Pa(t)};D.Pa=function(t){try{if(t==this.g)e:{const c=_n(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||tp||this.g&&(this.h.h||this.g.ja()||C0(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?ma(3):ma(2)),ah(this);var n=this.g.da();this.ca=n;t:if(N2(this)){var r=C0(this.g);t="";var i=r.length,s=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){oi(this),Ro(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,kR(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ca(a)){var u=a;break t}}u=null}if(n=u)rs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,up(this,n);else{this.i=!1,this.o=3,Nt(12),oi(this),Ro(this);break e}}this.S?(P2(this,c,o),tp&&this.i&&c==3&&(E2(this.U,this.V,"tick",this.mb),this.V.start())):(rs(this.j,this.m,o,null),up(this,o)),c==4&&oi(this),this.i&&!this.J&&(c==4?eS(this.l,this):(this.i=!1,Ba(this)))}else HR(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Nt(12)):(this.o=0,Nt(13)),oi(this),Ro(this)}}}catch{}finally{}};function N2(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function P2(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=_R(t,n),i==Zu){e==4&&(t.o=4,Nt(14),r=!1),rs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==ap){t.o=4,Nt(15),rs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else rs(t.j,t.m,i,null),up(t,i);N2(t)&&i!=Zu&&i!=ap&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Nt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),kg(e),e.M=!0,Nt(11))):(rs(t.j,t.m,n,"[Invalid Chunked Response]"),oi(t),Ro(t))}D.mb=function(){if(this.g){var t=_n(this.g),e=this.g.ja();this.C<e.length&&(ah(this),P2(this,t,e),this.i&&t!=4&&Ba(this))}};function _R(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Zu:(n=Number(e.substring(n,r)),isNaN(n)?ap:(r+=1,r+n>e.length?Zu:(e=e.slice(r,r+n),t.C=r+n,e)))}D.cancel=function(){this.J=!0,oi(this)};function Ba(t){t.Y=Date.now()+t.P,R2(t,t.P)}function R2(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ua(St(t.lb,t),e)}function ah(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}D.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ER(this.j,this.A),this.L!=2&&(ma(),Nt(17)),oi(this),this.o=2,Ro(this)):R2(this,this.Y-t)};function Ro(t){t.l.H==0||t.J||eS(t.l,t)}function oi(t){ah(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,cg(t.V),S2(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function up(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||cp(n.i,t))){if(!t.K&&cp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)nc(n),hh(n);else break e;wg(n),Nt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ua(St(n.ib,n),6e3));if(1>=U2(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ai(n,11)}else if((t.K||n.g==t)&&nc(n),!ca(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(mg(s,s.h),s.h=null))}if(r.F){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,_e(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=rS(r,r.J?r.pa:null,r.Y),o.K){z2(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(ah(a),Ba(a)),r.g=o}else J2(r);0<n.j.length&&fh(n)}else u[0]!="stop"&&u[0]!="close"||ai(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ai(n,7):yg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ma(4)}catch{}}function IR(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Jc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function TR(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Jc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function O2(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Jc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=TR(t),r=IR(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var D2=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function CR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function hi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof hi){this.h=t.h,ec(this,t.j),this.s=t.s,this.g=t.g,tc(this,t.m),this.l=t.l;var e=t.i,n=new ga;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),_0(this,n),this.o=t.o}else t&&(e=String(t).match(D2))?(this.h=!1,ec(this,e[1]||"",!0),this.s=go(e[2]||""),this.g=go(e[3]||"",!0),tc(this,e[4]),this.l=go(e[5]||"",!0),_0(this,e[6]||"",!0),this.o=go(e[7]||"")):(this.h=!1,this.i=new ga(null,this.h))}hi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(vo(e,I0,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(vo(e,I0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(vo(n,n.charAt(0)=="/"?NR:AR,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",vo(n,RR)),t.join("")};function Qn(t){return new hi(t)}function ec(t,e,n){t.j=n?go(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function tc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function _0(t,e,n){e instanceof ga?(t.i=e,OR(t.i,t.h)):(n||(e=vo(e,PR)),t.i=new ga(e,t.h))}function _e(t,e,n){t.i.set(e,n)}function lh(t){return _e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function go(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function vo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,bR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function bR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var I0=/[#\/\?@]/g,AR=/[#\?:]/g,NR=/[#\?]/g,PR=/[#\?@]/g,RR=/#/g;function ga(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Qr(t){t.g||(t.g=new Map,t.h=0,t.i&&CR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=ga.prototype;D.add=function(t,e){Qr(this),this.i=null,t=Gs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function L2(t,e){Qr(t),e=Gs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $2(t,e){return Qr(t),e=Gs(t,e),t.g.has(e)}D.forEach=function(t,e){Qr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};D.ta=function(){Qr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};D.Z=function(t){Qr(this);let e=[];if(typeof t=="string")$2(this,t)&&(e=e.concat(this.g.get(Gs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return Qr(this),this.i=null,t=Gs(this,t),$2(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function M2(t,e,n){L2(t,e),0<n.length&&(t.i=null,t.g.set(Gs(t,e),tg(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Gs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function OR(t,e){e&&!t.j&&(Qr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(L2(this,r),M2(this,i,n))},t)),t.j=e}var DR=class{constructor(t,e){this.g=t,this.map=e}};function j2(t){this.l=t||LR,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var LR=10;function F2(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function U2(t){return t.h?1:t.g?t.g.size:0}function cp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function mg(t,e){t.g?t.g.add(e):t.h=e}function z2(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}j2.prototype.cancel=function(){if(this.i=V2(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function V2(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return tg(t.i)}var $R=class{stringify(t){return Q.JSON.stringify(t,void 0)}parse(t){return Q.JSON.parse(t,void 0)}};function MR(){this.g=new $R}function jR(t,e,n){const r=n||"";try{O2(t,function(i,s){let o=i;ja(i)&&(o=lg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function FR(t,e){const n=new rh;if(Q.Image){const r=new Image;r.onload=jl(Ul,n,r,"TestLoadImage: loaded",!0,e),r.onerror=jl(Ul,n,r,"TestLoadImage: error",!1,e),r.onabort=jl(Ul,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=jl(Ul,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ul(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ha(t){this.l=t.fc||null,this.j=t.ob||!1}rt(Ha,fg);Ha.prototype.g=function(){return new uh(this.l,this.j)};Ha.prototype.i=function(t){return function(){return t}}({});function uh(t,e){tt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=gg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}rt(uh,tt);var gg=0;D=uh.prototype;D.open=function(t,e){if(this.readyState!=gg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,va(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wa(this)),this.readyState=gg};D.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,va(this)),this.g&&(this.readyState=3,va(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;B2(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function B2(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}D.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Wa(this):va(this),this.readyState==3&&B2(this)}};D.Za=function(t){this.g&&(this.response=this.responseText=t,Wa(this))};D.Ya=function(t){this.g&&(this.response=t,Wa(this))};D.ka=function(){this.g&&Wa(this)};function Wa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,va(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function va(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(uh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var UR=Q.JSON.parse;function je(t){tt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=H2,this.L=this.M=!1}rt(je,tt);var H2="",zR=/^https?$/i,VR=["POST","PUT"];D=je.prototype;D.Oa=function(t){this.M=t};D.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():op.g(),this.C=this.u?x0(this.u):x0(op),this.g.onreadystatechange=St(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){T0(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Q.FormData&&t instanceof Q.FormData,!(0<=a2(VR,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{K2(this),0<this.B&&((this.L=BR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=St(this.ua,this)):this.A=hg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){T0(this,s)}};function BR(t){return As&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.ua=function(){typeof eg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ht(this,"timeout"),this.abort(8))};function T0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,W2(t),ch(t)}function W2(t){t.F||(t.F=!0,ht(t,"complete"),ht(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ht(this,"complete"),ht(this,"abort"),ch(this))};D.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ch(this,!0)),je.$.N.call(this)};D.La=function(){this.s||(this.G||this.v||this.l?G2(this):this.kb())};D.kb=function(){G2(this)};function G2(t){if(t.h&&typeof eg<"u"&&(!t.C[1]||_n(t)!=4||t.da()!=2)){if(t.v&&_n(t)==4)hg(t.La,0,t);else if(ht(t,"readystatechange"),_n(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(D2)[1]||null;!i&&Q.self&&Q.self.location&&(i=Q.self.location.protocol.slice(0,-1)),r=!zR.test(i?i.toLowerCase():"")}n=r}if(n)ht(t,"complete"),ht(t,"success");else{t.m=6;try{var s=2<_n(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",W2(t)}}finally{ch(t)}}}}function ch(t,e){if(t.g){K2(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ht(t,"ready");try{n.onreadystatechange=r}catch{}}}function K2(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}D.isActive=function(){return!!this.g};function _n(t){return t.g?t.g.readyState:0}D.da=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}};D.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),UR(e)}};function C0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case H2:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function HR(t){const e={};t=(t.g&&2<=_n(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ca(t[r]))continue;var n=mR(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}lR(e,function(r){return r.join(", ")})}D.Ia=function(){return this.m};D.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function q2(t){let e="";return rg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function vg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=q2(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):_e(t,e,n))}function lo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Y2(t){this.Ga=0,this.j=[],this.l=new rh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=lo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=lo("baseRetryDelayMs",5e3,t),this.hb=lo("retryDelaySeedMs",1e4,t),this.eb=lo("forwardChannelMaxRetries",2,t),this.xa=lo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new j2(t&&t.concurrentRequestLimit),this.Ja=new MR,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}D=Y2.prototype;D.ra=8;D.H=1;function yg(t){if(Q2(t),t.H==3){var e=t.W++,n=Qn(t.I);if(_e(n,"SID",t.K),_e(n,"RID",e),_e(n,"TYPE","terminate"),Ga(t,n),e=new Va(t,t.l,e),e.L=2,e.v=lh(Qn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon)try{n=Q.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=iS(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ba(e)}nS(t)}function hh(t){t.g&&(kg(t),t.g.cancel(),t.g=null)}function Q2(t){hh(t),t.u&&(Q.clearTimeout(t.u),t.u=null),nc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function fh(t){if(!F2(t.i)&&!t.m){t.m=!0;var e=t.Na;fa||w2(),da||(fa(),da=!0),ug.add(e,t),t.C=0}}function WR(t,e){return U2(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ua(St(t.Na,t,e),tS(t,t.C)),t.C++,!0)}D.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Va(this,this.l,t);let s=this.s;if(this.U&&(s?(s=h2(s),f2(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=X2(this,i,e),n=Qn(this.I),_e(n,"RID",t),_e(n,"CVER",22),this.F&&_e(n,"X-HTTP-Session-Id",this.F),Ga(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(q2(s)))+"&"+e:this.o&&vg(n,this.o,s)),mg(this.i,i),this.bb&&_e(n,"TYPE","init"),this.P?(_e(n,"$req",e),_e(n,"SID","null"),i.aa=!0,lp(i,n,null)):lp(i,n,e),this.H=2}}else this.H==3&&(t?b0(this,t):this.j.length==0||F2(this.i)||b0(this))};function b0(t,e){var n;e?n=e.m:n=t.W++;const r=Qn(t.I);_e(r,"SID",t.K),_e(r,"RID",n),_e(r,"AID",t.V),Ga(t,r),t.o&&t.s&&vg(r,t.o,t.s),n=new Va(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=X2(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),mg(t.i,n),lp(n,r,e)}function Ga(t,e){t.na&&rg(t.na,function(n,r){_e(e,r,n)}),t.h&&O2({},function(n,r){_e(e,r,n)})}function X2(t,e,n){n=Math.min(t.j.length,n);var r=t.h?St(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{jR(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function J2(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;fa||w2(),da||(fa(),da=!0),ug.add(e,t),t.A=0}}function wg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ua(St(t.Ma,t),tS(t,t.A)),t.A++,!0)}D.Ma=function(){if(this.u=null,Z2(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ua(St(this.jb,this),t)}};D.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Nt(10),hh(this),Z2(this))};function kg(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function Z2(t){t.g=new Va(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Qn(t.wa);_e(e,"RID","rpc"),_e(e,"SID",t.K),_e(e,"AID",t.V),_e(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&_e(e,"TO",t.qa),_e(e,"TYPE","xmlhttp"),Ga(t,e),t.o&&t.s&&vg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=lh(Qn(e)),n.s=null,n.S=!0,A2(n,t)}D.ib=function(){this.v!=null&&(this.v=null,hh(this),wg(this),Nt(19))};function nc(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function eS(t,e){var n=null;if(t.g==e){nc(t),kg(t),t.g=null;var r=2}else if(cp(t.i,e))n=e.F,z2(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=ih(),ht(r,new I2(r,n)),fh(t)}else J2(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&WR(t,e)||r==2&&wg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ai(t,5);break;case 4:ai(t,10);break;case 3:ai(t,6);break;default:ai(t,2)}}}function tS(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ai(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=St(t.pb,t);n||(n=new hi("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||ec(n,"https"),lh(n)),FR(n.toString(),r)}else Nt(2);t.H=0,t.h&&t.h.za(e),nS(t),Q2(t)}D.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Nt(2)):(this.l.info("Failed to ping google.com"),Nt(1))};function nS(t){if(t.H=0,t.ma=[],t.h){const e=V2(t.i);(e.length!=0||t.j.length!=0)&&(y0(t.ma,e),y0(t.ma,t.j),t.i.i.length=0,tg(t.j),t.j.length=0),t.h.ya()}}function rS(t,e,n){var r=n instanceof hi?Qn(n):new hi(n);if(r.g!="")e&&(r.g=e+"."+r.g),tc(r,r.m);else{var i=Q.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new hi(null);r&&ec(s,r),e&&(s.g=e),i&&tc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&_e(r,n,e),_e(r,"VER",t.ra),Ga(t,r),r}function iS(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new je(new Ha({ob:!0})):new je(t.va),e.Oa(t.J),e}D.isActive=function(){return!!this.h&&this.h.isActive(this)};function sS(){}D=sS.prototype;D.Ba=function(){};D.Aa=function(){};D.za=function(){};D.ya=function(){};D.isActive=function(){return!0};D.Va=function(){};function rc(){if(As&&!(10<=Number(iR)))throw Error("Environmental error: no available transport.")}rc.prototype.g=function(t,e){return new qt(t,e)};function qt(t,e){tt.call(this),this.g=new Y2(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ca(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ca(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ks(this)}rt(qt,tt);qt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Nt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=rS(t,null,t.Y),fh(t)};qt.prototype.close=function(){yg(this.g)};qt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=lg(t),t=n);e.j.push(new DR(e.fb++,t)),e.H==3&&fh(e)};qt.prototype.N=function(){this.g.h=null,delete this.j,yg(this.g),delete this.g,qt.$.N.call(this)};function oS(t){dg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}rt(oS,dg);function aS(){pg.call(this),this.status=1}rt(aS,pg);function Ks(t){this.g=t}rt(Ks,sS);Ks.prototype.Ba=function(){ht(this.g,"a")};Ks.prototype.Aa=function(t){ht(this.g,new oS(t))};Ks.prototype.za=function(t){ht(this.g,new aS)};Ks.prototype.ya=function(){ht(this.g,"b")};function GR(){this.blockSize=-1}function vn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}rt(vn,GR);vn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function If(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}vn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)If(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){If(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){If(this,r),i=0;break}}this.h=i,this.i+=e};vn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ye(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var KR={};function Eg(t){return-128<=t&&128>t?tR(t,function(e){return new ye([e|0],0>e?-1:0)}):new ye([t|0],0>t?-1:0)}function In(t){if(isNaN(t)||!isFinite(t))return fs;if(0>t)return ut(In(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=hp;return new ye(e,0)}function lS(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ut(lS(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=In(Math.pow(e,8)),r=fs,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=In(Math.pow(e,s)),r=r.R(s).add(In(o))):(r=r.R(n),r=r.add(In(o)))}return r}var hp=4294967296,fs=Eg(0),fp=Eg(1),A0=Eg(16777216);D=ye.prototype;D.ea=function(){if(tn(this))return-ut(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:hp+r)*e,e*=hp}return t};D.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Fn(this))return"0";if(tn(this))return"-"+ut(this).toString(t);for(var e=In(Math.pow(t,6)),n=this,r="";;){var i=sc(n,e).g;n=ic(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Fn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};D.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Fn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function tn(t){return t.h==-1}D.X=function(t){return t=ic(this,t),tn(t)?-1:Fn(t)?0:1};function ut(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ye(n,~t.h).add(fp)}D.abs=function(){return tn(this)?ut(this):this};D.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ye(n,n[n.length-1]&-2147483648?-1:0)};function ic(t,e){return t.add(ut(e))}D.R=function(t){if(Fn(this)||Fn(t))return fs;if(tn(this))return tn(t)?ut(this).R(ut(t)):ut(ut(this).R(t));if(tn(t))return ut(this.R(ut(t)));if(0>this.X(A0)&&0>t.X(A0))return In(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,zl(n,2*r+2*i),n[2*r+2*i+1]+=s*l,zl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,zl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,zl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ye(n,0)};function zl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function uo(t,e){this.g=t,this.h=e}function sc(t,e){if(Fn(e))throw Error("division by zero");if(Fn(t))return new uo(fs,fs);if(tn(t))return e=sc(ut(t),e),new uo(ut(e.g),ut(e.h));if(tn(e))return e=sc(t,ut(e)),new uo(ut(e.g),e.h);if(30<t.g.length){if(tn(t)||tn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=fp,r=e;0>=r.X(t);)n=N0(n),r=N0(r);var i=Di(n,1),s=Di(r,1);for(r=Di(r,2),n=Di(n,2);!Fn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Di(r,1),n=Di(n,1)}return e=ic(t,i.R(e)),new uo(i,e)}for(i=fs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=In(n),o=s.R(e);tn(o)||0<o.X(t);)n-=r,s=In(n),o=s.R(e);Fn(s)&&(s=fp),i=i.add(s),t=ic(t,o)}return new uo(i,t)}D.gb=function(t){return sc(this,t).h};D.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ye(n,this.h&t.h)};D.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ye(n,this.h|t.h)};D.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ye(n,this.h^t.h)};function N0(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ye(n,t.h)}function Di(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ye(i,t.h)}rc.prototype.createWebChannel=rc.prototype.g;qt.prototype.send=qt.prototype.u;qt.prototype.open=qt.prototype.m;qt.prototype.close=qt.prototype.close;sh.NO_ERROR=0;sh.TIMEOUT=8;sh.HTTP_ERROR=6;T2.COMPLETE="complete";C2.EventType=za;za.OPEN="a";za.CLOSE="b";za.ERROR="c";za.MESSAGE="d";tt.prototype.listen=tt.prototype.O;je.prototype.listenOnce=je.prototype.P;je.prototype.getLastError=je.prototype.Sa;je.prototype.getLastErrorCode=je.prototype.Ia;je.prototype.getStatus=je.prototype.da;je.prototype.getResponseJson=je.prototype.Wa;je.prototype.getResponseText=je.prototype.ja;je.prototype.send=je.prototype.ha;je.prototype.setWithCredentials=je.prototype.Oa;vn.prototype.digest=vn.prototype.l;vn.prototype.reset=vn.prototype.reset;vn.prototype.update=vn.prototype.j;ye.prototype.add=ye.prototype.add;ye.prototype.multiply=ye.prototype.R;ye.prototype.modulo=ye.prototype.gb;ye.prototype.compare=ye.prototype.X;ye.prototype.toNumber=ye.prototype.ea;ye.prototype.toString=ye.prototype.toString;ye.prototype.getBits=ye.prototype.D;ye.fromNumber=In;ye.fromString=lS;var qR=function(){return new rc},YR=function(){return ih()},Tf=sh,QR=T2,XR=Ni,P0={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},JR=Ha,Vl=C2,ZR=je,e3=vn,ds=ye;const R0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qs="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=new Xm("@firebase/firestore");function O0(){return xi.logLevel}function V(t,...e){if(xi.logLevel<=he.DEBUG){const n=e.map(Sg);xi.debug(`Firestore (${qs}): ${t}`,...n)}}function Xn(t,...e){if(xi.logLevel<=he.ERROR){const n=e.map(Sg);xi.error(`Firestore (${qs}): ${t}`,...n)}}function Ns(t,...e){if(xi.logLevel<=he.WARN){const n=e.map(Sg);xi.warn(`Firestore (${qs}): ${t}`,...n)}}function Sg(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${qs}) INTERNAL ASSERTION FAILED: `+t;throw Xn(e),new Error(e)}function be(t,e){t||K()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends ir{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class t3{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class n3{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class r3{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Lr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Lr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Lr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string"),new uS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new yt(e)}}class i3{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class s3{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new i3(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class o3{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class a3{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.T=n.token,new o3(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l3(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=l3(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function Ps(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Qe(0,0))}static max(){return new J(new Qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ya.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ya?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends ya{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const u3=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends ya{construct(e,n,r){return new Et(e,n,r)}static isValidIdentifier(e){return u3.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Et(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new U(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new U(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new U(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new U(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Et(n)}static emptyPath(){return new Et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(Ie.fromString(e))}static fromName(e){return new B(Ie.fromString(e).popFirst(5))}static empty(){return new B(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new Ie(e.slice()))}}function c3(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Qe(n+1,0):new Qe(n,r));return new Vr(i,B.empty(),e)}function h3(t){return new Vr(t.readTime,t.key,-1)}class Vr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Vr(J.min(),B.empty(),-1)}static max(){return new Vr(J.max(),B.empty(),-1)}}function f3(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d3="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class p3{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ka(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==d3)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,r)=>{n(e)})}static reject(e){return new C((n,r)=>{r(e)})}static waitFor(e){return new C((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=C.resolve(!1);for(const r of e)n=n.next(i=>i?C.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new C((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new C((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function qa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}xg.ct=-1;function dh(t){return t==null}function oc(t){return t===0&&1/t==-1/0}function m3(t){return typeof t=="number"&&Number.isInteger(t)&&!oc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Pi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bl(this.root,e,this.comparator,!0)}}class Bl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??lt.RED,this.left=i??lt.EMPTY,this.right=s??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new lt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,n,r,i){return this}insert(t,e,n){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new L0(this.data.getIterator())}getIteratorFrom(e){return new L0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _t(this.comparator);return n.data=e,n}}class L0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.fields=e,e.sort(Et.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new _t(Et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ps(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new fS("Invalid base64 string: "+i):i}}(e);return new bt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const g3=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Br(t){if(be(!!t),typeof t=="string"){let e=0;const n=g3.exec(t);if(be(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _i(t){return typeof t=="string"?bt.fromBase64String(t):bt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ig(t){const e=t.mapValue.fields.__previous_value__;return _g(e)?Ig(e):e}function wa(t){const e=Br(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v3{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class ka{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ka("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ka&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ii(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?_g(t)?4:y3(t)?9007199254740991:10:K()}function Rn(t,e){if(t===e)return!0;const n=Ii(t);if(n!==Ii(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wa(t).isEqual(wa(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Br(r.timestampValue),o=Br(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return _i(r.bytesValue).isEqual(_i(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Be(r.geoPointValue.latitude)===Be(i.geoPointValue.latitude)&&Be(r.geoPointValue.longitude)===Be(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Be(r.integerValue)===Be(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Be(r.doubleValue),o=Be(i.doubleValue);return s===o?oc(s)===oc(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Ps(t.arrayValue.values||[],e.arrayValue.values||[],Rn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(D0(s)!==D0(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Rn(s[a],o[a])))return!1;return!0}(t,e);default:return K()}}function Ea(t,e){return(t.values||[]).find(n=>Rn(n,e))!==void 0}function Rs(t,e){if(t===e)return 0;const n=Ii(t),r=Ii(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Be(i.integerValue||i.doubleValue),a=Be(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return $0(t.timestampValue,e.timestampValue);case 4:return $0(wa(t),wa(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(i,s){const o=_i(i),a=_i(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=de(o[l],a[l]);if(u!==0)return u}return de(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=de(Be(i.latitude),Be(s.latitude));return o!==0?o:de(Be(i.longitude),Be(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Rs(o[l],a[l]);if(u)return u}return de(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Hl.mapValue&&s===Hl.mapValue)return 0;if(i===Hl.mapValue)return 1;if(s===Hl.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=de(a[c],u[c]);if(h!==0)return h;const f=Rs(o[a[c]],l[u[c]]);if(f!==0)return f}return de(a.length,u.length)}(t.mapValue,e.mapValue);default:throw K()}}function $0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=Br(t),r=Br(e),i=de(n.seconds,r.seconds);return i!==0?i:de(n.nanos,r.nanos)}function Os(t){return dp(t)}function dp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Br(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?_i(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=dp(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${dp(r.fields[a])}`;return s+"}"}(t.mapValue):K();var e,n}function M0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function pp(t){return!!t&&"integerValue"in t}function Tg(t){return!!t&&"arrayValue"in t}function j0(t){return!!t&&"nullValue"in t}function F0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function cu(t){return!!t&&"mapValue"in t}function Oo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Pi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Oo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Oo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function y3(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.value=e}static empty(){return new $t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!cu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Oo(n)}setAll(e){let n=Et.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Oo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());cu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];cu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Pi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new $t(Oo(this.value))}}function dS(t){const e=[];return Pi(t.fields,(n,r)=>{const i=new Et([n]);if(cu(r)){const s=dS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ht(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new kt(e,0,J.min(),J.min(),J.min(),$t.empty(),0)}static newFoundDocument(e,n,r,i){return new kt(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new kt(e,2,n,J.min(),J.min(),$t.empty(),0)}static newUnknownDocument(e,n){return new kt(e,3,n,J.min(),J.min(),$t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,n){this.position=e,this.inclusive=n}}function U0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),n.key):r=Rs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function z0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Rn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n="asc"){this.field=e,this.dir=n}}function w3(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{}class We extends pS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new E3(e,n,r):n==="array-contains"?new _3(e,r):n==="in"?new I3(e,r):n==="not-in"?new T3(e,r):n==="array-contains-any"?new C3(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new S3(e,r):new x3(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Rs(n,this.value)):n!==null&&Ii(this.value)===Ii(n)&&this.matchesComparison(Rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class yn extends pS{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new yn(e,n)}matches(e){return mS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function mS(t){return t.op==="and"}function gS(t){return k3(t)&&mS(t)}function k3(t){for(const e of t.filters)if(e instanceof yn)return!1;return!0}function mp(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+Os(t.value);if(gS(t))return t.filters.map(e=>mp(e)).join(",");{const e=t.filters.map(n=>mp(n)).join(",");return`${t.op}(${e})`}}function vS(t,e){return t instanceof We?function(n,r){return r instanceof We&&n.op===r.op&&n.field.isEqual(r.field)&&Rn(n.value,r.value)}(t,e):t instanceof yn?function(n,r){return r instanceof yn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&vS(s,r.filters[o]),!0):!1}(t,e):void K()}function yS(t){return t instanceof We?function(e){return`${e.field.canonicalString()} ${e.op} ${Os(e.value)}`}(t):t instanceof yn?function(e){return e.op.toString()+" {"+e.getFilters().map(yS).join(" ,")+"}"}(t):"Filter"}class E3 extends We{constructor(e,n,r){super(e,n,r),this.key=B.fromName(r.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.matchesComparison(n)}}class S3 extends We{constructor(e,n){super(e,"in",n),this.keys=wS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class x3 extends We{constructor(e,n){super(e,"not-in",n),this.keys=wS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function wS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>B.fromName(r.referenceValue))}class _3 extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Tg(n)&&Ea(n.arrayValue,this.value)}}class I3 extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ea(this.value.arrayValue,n)}}class T3 extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ea(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ea(this.value.arrayValue,n)}}class C3 extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Tg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ea(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b3{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function V0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new b3(t,e,n,r,i,s,o)}function Cg(t){const e=ee(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>mp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),dh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Os(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Os(r)).join(",")),e.dt=n}return e.dt}function bg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!w3(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!vS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!z0(t.startAt,e.startAt)&&z0(t.endAt,e.endAt)}function gp(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function A3(t,e,n,r,i,s,o,a){return new Ya(t,e,n,r,i,s,o,a)}function kS(t){return new Ya(t)}function B0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ES(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ag(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function SS(t){return t.collectionGroup!==null}function ps(t){const e=ee(t);if(e.wt===null){e.wt=[];const n=Ag(e),r=ES(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new Do(n)),e.wt.push(new Do(Et.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Do(Et.keyField(),s))}}}return e.wt}function Jn(t){const e=ee(t);if(!e._t)if(e.limitType==="F")e._t=V0(e.path,e.collectionGroup,ps(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of ps(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Do(s.field,o))}const r=e.endAt?new ac(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ac(e.startAt.position,e.startAt.inclusive):null;e._t=V0(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function vp(t,e){e.getFirstInequalityField(),Ag(t);const n=t.filters.concat([e]);return new Ya(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function yp(t,e,n){return new Ya(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ph(t,e){return bg(Jn(t),Jn(e))&&t.limitType===e.limitType}function xS(t){return`${Cg(Jn(t))}|lt:${t.limitType}`}function wp(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>yS(r)).join(", ")}]`),dh(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Os(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Os(r)).join(",")),`Target(${n})`}(Jn(t))}; limitType=${t.limitType})`}function mh(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):B.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of ps(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=U0(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,ps(n),r)||n.endAt&&!function(i,s,o){const a=U0(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,ps(n),r))}(t,e)}function N3(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function _S(t){return(e,n)=>{let r=!1;for(const i of ps(t)){const s=P3(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function P3(t,e,n){const r=t.field.isKeyField()?B.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Rs(a,l):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Pi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return hS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R3=new De(B.comparator);function Zn(){return R3}const IS=new De(B.comparator);function yo(...t){let e=IS;for(const n of t)e=e.insert(n.key,n);return e}function TS(t){let e=IS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function li(){return Lo()}function CS(){return Lo()}function Lo(){return new Ys(t=>t.toString(),(t,e)=>t.isEqual(e))}const O3=new De(B.comparator),D3=new _t(B.comparator);function re(...t){let e=D3;for(const n of t)e=e.add(n);return e}const L3=new _t(de);function $3(){return L3}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oc(e)?"-0":e}}function AS(t){return{integerValue:""+t}}function M3(t,e){return m3(e)?AS(e):bS(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(){this._=void 0}}function j3(t,e,n){return t instanceof lc?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&_g(i)&&(i=Ig(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Sa?PS(t,e):t instanceof xa?RS(t,e):function(r,i){const s=NS(r,i),o=H0(s)+H0(r.gt);return pp(s)&&pp(r.gt)?AS(o):bS(r.serializer,o)}(t,e)}function F3(t,e,n){return t instanceof Sa?PS(t,e):t instanceof xa?RS(t,e):n}function NS(t,e){return t instanceof uc?pp(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class lc extends gh{}class Sa extends gh{constructor(e){super(),this.elements=e}}function PS(t,e){const n=OS(e);for(const r of t.elements)n.some(i=>Rn(i,r))||n.push(r);return{arrayValue:{values:n}}}class xa extends gh{constructor(e){super(),this.elements=e}}function RS(t,e){let n=OS(e);for(const r of t.elements)n=n.filter(i=>!Rn(i,r));return{arrayValue:{values:n}}}class uc extends gh{constructor(e,n){super(),this.serializer=e,this.gt=n}}function H0(t){return Be(t.integerValue||t.doubleValue)}function OS(t){return Tg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function U3(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Sa&&r instanceof Sa||n instanceof xa&&r instanceof xa?Ps(n.elements,r.elements,Rn):n instanceof uc&&r instanceof uc?Rn(n.gt,r.gt):n instanceof lc&&r instanceof lc}(t.transform,e.transform)}class z3{constructor(e,n){this.version=e,this.transformResults=n}}class bn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new bn}static exists(e){return new bn(void 0,e)}static updateTime(e){return new bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class vh{}function DS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new $S(t.key,bn.none()):new Qa(t.key,t.data,bn.none());{const n=t.data,r=$t.empty();let i=new _t(Et.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Xr(t.key,r,new Ht(i.toArray()),bn.none())}}function V3(t,e,n){t instanceof Qa?function(r,i,s){const o=r.value.clone(),a=G0(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Xr?function(r,i,s){if(!hu(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=G0(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(LS(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function $o(t,e,n,r){return t instanceof Qa?function(i,s,o,a){if(!hu(i.precondition,s))return o;const l=i.value.clone(),u=K0(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Xr?function(i,s,o,a){if(!hu(i.precondition,s))return o;const l=K0(i.fieldTransforms,a,s),u=s.data;return u.setAll(LS(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return hu(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function B3(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=NS(r.transform,i||null);s!=null&&(n===null&&(n=$t.empty()),n.set(r.field,s))}return n||null}function W0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Ps(n,r,(i,s)=>U3(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qa extends vh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Xr extends vh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function LS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function G0(t,e,n){const r=new Map;be(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,F3(o,a,n[i]))}return r}function K0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,j3(s,o,e))}return r}class $S extends vh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class H3 extends vh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W3{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&V3(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=$o(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=$o(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=CS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=DS(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Ps(this.mutations,e.mutations,(n,r)=>W0(n,r))&&Ps(this.baseMutations,e.baseMutations,(n,r)=>W0(n,r))}}class Ng{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){be(e.mutations.length===r.length);let i=O3;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ng(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G3{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K3{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,oe;function q3(t){switch(t){default:return K();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function MS(t){if(t===void 0)return Xn("GRPC error has no .code"),_.UNKNOWN;switch(t){case Ve.OK:return _.OK;case Ve.CANCELLED:return _.CANCELLED;case Ve.UNKNOWN:return _.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return _.INTERNAL;case Ve.UNAVAILABLE:return _.UNAVAILABLE;case Ve.UNAUTHENTICATED:return _.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case Ve.NOT_FOUND:return _.NOT_FOUND;case Ve.ALREADY_EXISTS:return _.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return _.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case Ve.ABORTED:return _.ABORTED;case Ve.OUT_OF_RANGE:return _.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return _.UNIMPLEMENTED;case Ve.DATA_LOSS:return _.DATA_LOSS;default:return K()}}(oe=Ve||(Ve={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Wl}static getOrCreateInstance(){return Wl===null&&(Wl=new Pg),Wl}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Wl=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y3(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q3=new ds([4294967295,4294967295],0);function q0(t){const e=Y3().encode(t),n=new e3;return n.update(e),new Uint8Array(n.digest())}function Y0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ds([n,r],0),new ds([i,s],0)]}class Rg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new wo(`Invalid padding: ${n}`);if(r<0)throw new wo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new wo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new wo(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=ds.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(ds.fromNumber(r)));return i.compare(Q3)===1&&(i=new ds([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=q0(e),[r,i]=Y0(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Rg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=q0(e),[r,i]=Y0(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class wo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Xa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new yh(J.min(),i,new De(de),Zn(),re())}}class Xa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Xa(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class jS{constructor(e,n){this.targetId=e,this.Vt=n}}class FS{constructor(e,n,r=bt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Q0{constructor(){this.St=0,this.Dt=J0(),this.Ct=bt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=re(),n=re(),r=re();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new Xa(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=J0()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class X3{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Zn(),this.zt=X0(),this.Wt=new De(de)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(gp(o))if(i===0){const a=new B(o.path);this.Yt(r,a,kt.newNoDocument(a,J.min()))}else be(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=Pg.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var f,g,y,w,k,m;const d={localCacheCount:c,existenceFilterCount:h.count},v=h.unchangedNames;return v&&(d.bloomFilter={applied:u===0,hashCount:(f=v==null?void 0:v.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(w=(y=(g=v==null?void 0:v.bits)===null||g===void 0?void 0:g.bitmap)===null||y===void 0?void 0:y.length)!==null&&w!==void 0?w:0,padding:(m=(k=v==null?void 0:v.bits)===null||k===void 0?void 0:k.padding)!==null&&m!==void 0?m:0}),d}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=_i(s).toUint8Array()}catch(c){if(c instanceof fS)return Ns("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new Rg(l,o,a)}catch(c){return Ns(c instanceof wo?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&gp(a.target)){const l=new B(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,kt.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=re();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new yh(e,n,this.Wt,this.jt,r);return this.jt=Zn(),this.zt=X0(),this.Wt=new De(de),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new Q0,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new _t(de),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Q0),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function X0(){return new De(B.comparator)}function J0(){return new De(B.comparator)}const J3=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Z3=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),eO=(()=>({and:"AND",or:"OR"}))();class tO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kp(t,e){return t.useProto3Json||dh(e)?e:{value:e}}function cc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function US(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function nO(t,e){return cc(t,e.toTimestamp())}function An(t){return be(!!t),J.fromTimestamp(function(e){const n=Br(e);return new Qe(n.seconds,n.nanos)}(t))}function Og(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function zS(t){const e=Ie.fromString(t);return be(WS(e)),e}function Ep(t,e){return Og(t.databaseId,e.path)}function Cf(t,e){const n=zS(e);if(n.get(1)!==t.databaseId.projectId)throw new U(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(VS(n))}function Sp(t,e){return Og(t.databaseId,e)}function rO(t){const e=zS(t);return e.length===4?Ie.emptyPath():VS(e)}function xp(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function VS(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Z0(t,e,n){return{name:Ep(t,e),fields:n.value.mapValue.fields}}function iO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(be(u===void 0||typeof u=="string"),bt.fromBase64String(u||"")):(be(u===void 0||u instanceof Uint8Array),bt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?_.UNKNOWN:MS(l.code);return new U(u,l.message||"")}(o);n=new FS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Cf(t,r.document.name),s=An(r.document.updateTime),o=r.document.createTime?An(r.document.createTime):J.min(),a=new $t({mapValue:{fields:r.document.fields}}),l=kt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new fu(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Cf(t,r.document),s=r.readTime?An(r.readTime):J.min(),o=kt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new fu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Cf(t,r.document),s=r.removedTargetIds||[];n=new fu([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new K3(i,s),a=r.targetId;n=new jS(a,o)}}return n}function sO(t,e){let n;if(e instanceof Qa)n={update:Z0(t,e.key,e.value)};else if(e instanceof $S)n={delete:Ep(t,e.key)};else if(e instanceof Xr)n={update:Z0(t,e.key,e.data),updateMask:pO(e.fieldMask)};else{if(!(e instanceof H3))return K();n={verify:Ep(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof lc)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Sa)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof xa)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof uc)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:nO(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K()}(t,e.precondition)),n}function oO(t,e){return t&&t.length>0?(be(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?An(r.updateTime):An(i);return s.isEqual(J.min())&&(s=An(i)),new z3(s,r.transformResults||[])}(n,e))):[]}function aO(t,e){return{documents:[Sp(t,e.path)]}}function lO(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Sp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Sp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return HS(yn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:ji(c.field),direction:hO(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=kp(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function uO(t){let e=rO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){be(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=BS(c);return h instanceof yn&&gS(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Do(Fi(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,dh(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,f=c.values||[];return new ac(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,f=c.values||[];return new ac(f,h)}(n.endAt)),A3(e,i,o,s,a,"F",l,u)}function cO(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function BS(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Fi(e.unaryFilter.field);return We.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Fi(e.unaryFilter.field);return We.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fi(e.unaryFilter.field);return We.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Fi(e.unaryFilter.field);return We.create(s,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(e){return We.create(Fi(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return yn.create(e.compositeFilter.filters.map(n=>BS(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return K()}}(e.compositeFilter.op))}(t):K()}function hO(t){return J3[t]}function fO(t){return Z3[t]}function dO(t){return eO[t]}function ji(t){return{fieldPath:t.canonicalString()}}function Fi(t){return Et.fromServerFormat(t.fieldPath)}function HS(t){return t instanceof We?function(e){if(e.op==="=="){if(F0(e.value))return{unaryFilter:{field:ji(e.field),op:"IS_NAN"}};if(j0(e.value))return{unaryFilter:{field:ji(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(F0(e.value))return{unaryFilter:{field:ji(e.field),op:"IS_NOT_NAN"}};if(j0(e.value))return{unaryFilter:{field:ji(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ji(e.field),op:fO(e.op),value:e.value}}}(t):t instanceof yn?function(e){const n=e.getFilters().map(r=>HS(r));return n.length===1?n[0]:{compositeFilter:{op:dO(e.op),filters:n}}}(t):K()}function pO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function WS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n,r,i,s=J.min(),o=J.min(),a=bt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(e){this.fe=e}}function gO(t){const e=uO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?yp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(){this.rn=new yO}addToCollectionParentIndex(e,n){return this.rn.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(Vr.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(Vr.min())}updateCollectionGroup(e,n,r){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class yO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new _t(Ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new _t(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Ds(0)}static Mn(){return new Ds(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(){this.changes=new Ys(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,kt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&$o(r.mutation,i,Ht.empty(),Qe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=li();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=yo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=li();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Zn();const o=Lo(),a=Lo();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Xr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),$o(c.mutation,u,c.mutation.getFieldMask(),Qe.now())):o.set(u.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new kO(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Lo();let i=new De((o,a)=>o-a),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Ht.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||re()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=CS();c.forEach(f=>{if(!s.has(f)){const g=DS(n.get(f),r.get(f));g!==null&&h.set(f,g),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return B.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):SS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):C.resolve(li());let a=-1,l=s;return o.next(u=>C.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?C.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,re())).next(c=>({batchId:a,changes:TS(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(r=>{let i=yo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=yo();return this.indexManager.getCollectionParents(e,i).next(o=>C.forEach(o,a=>{const l=function(u,c){return new Ya(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,kt.newInvalidDocument(u)))});let o=yo();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&$o(u.mutation,l,Ht.empty(),Qe.now()),mh(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return C.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:An(r.createTime)}),C.resolve()}getNamedQuery(e,n){return C.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:gO(r.bundledQuery),readTime:An(r.readTime)}}(n)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(){this.overlays=new De(B.comparator),this.ls=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const r=li();return C.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),C.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),C.resolve()}getOverlaysForCollection(e,n,r){const i=li(),s=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return C.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new De((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=li(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=li(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return C.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new G3(n,r));let s=this.ls.get(n);s===void 0&&(s=re(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(){this.fs=new _t(Je.ds),this.ws=new _t(Je._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new Je(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new Je(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new B(new Ie([])),r=new Je(n,e),i=new Je(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new B(new Ie([])),r=new Je(n,e),i=new Je(n,e+1);let s=re();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Je(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return B.comparator(e.key,n.key)||de(e.As,n.As)}static _s(e,n){return de(e.As,n.As)||B.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new _t(Je.ds)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new W3(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Je(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return C.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),i=new Je(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),C.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _t(de);return n.forEach(i=>{const s=new Je(i,0),o=new Je(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),C.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;B.isDocumentKey(s)||(s=s.child(""));const o=new Je(new B(s),0);let a=new _t(de);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),C.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){be(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return C.forEach(n.mutations,i=>{const s=new Je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new Je(n,0),i=this.Rs.firstAfterOrEqual(r);return C.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e){this.Ds=e,this.docs=new De(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():kt.newInvalidDocument(n))}getEntries(e,n){let r=Zn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():kt.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Zn();const o=n.path,a=new B(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||f3(h3(c),r)<=0||(i.has(c.key)||mh(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return C.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K()}Cs(e,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new TO(this)}getSize(e){return C.resolve(this.size)}}class TO extends wO{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),C.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(e){this.persistence=e,this.xs=new Ys(n=>Cg(n),bg),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Dg,this.targetCount=0,this.Ms=Ds.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),C.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Ds(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.Fn(n),C.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),C.waitFor(s).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return C.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),C.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),C.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),C.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return C.resolve(r)}containsKey(e,n){return C.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e,n){this.$s={},this.overlays={},this.Os=new xg(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new CO(this),this.indexManager=new vO,this.remoteDocumentCache=function(r){return new IO(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new mO(n),this.qs=new SO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new xO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new _O(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){V("MemoryPersistence","Starting transaction:",e);const i=new AO(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return C.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class AO extends p3{constructor(e){super(),this.currentSequenceNumber=e}}class Lg{constructor(e){this.persistence=e,this.Qs=new Dg,this.js=null}static zs(e){return new Lg(e)}get Ws(){if(this.js)return this.js;throw K()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),C.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),C.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Ws,r=>{const i=B.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return C.or([()=>C.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new $g(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(B0(n))return C.resolve(null);let r=Jn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=yp(n,null,"F"),r=Jn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,yp(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return B0(n)||i.isEqual(J.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(O0()<=he.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),wp(n)),this.Wi(e,o,n,c3(i,-1)))})}ji(e,n){let r=new _t(_S(e));return n.forEach((i,s)=>{mh(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return O0()<=he.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",wp(n)),this.Ui.getDocumentsMatchingQuery(e,n,Vr.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new De(de),this.Yi=new Ys(s=>Cg(s),bg),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new EO(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function RO(t,e,n,r){return new PO(t,e,n,r)}async function GS(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=re();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function OO(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let f=C.resolve();return h.forEach(g=>{f=f.next(()=>u.getEntry(a,g)).next(y=>{const w=l.docVersions.get(g);be(w!==null),y.version.compareTo(w)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=re();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function KS(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function DO(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const f=i.get(h);if(!f)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,h)));let g=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(bt.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(y,w,k){return y.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(f,g,c)&&a.push(n.Bs.updateTargetData(s,g))});let l=Zn(),u=re();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(LO(s,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!r.isEqual(J.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(h=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return C.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function LO(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Zn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(J.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function $O(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function MO(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,C.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new Er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function _p(t,e,n){const r=ee(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!qa(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function e1(t,e,n){const r=ee(t);let i=J.min(),s=re();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=ee(a),h=c.Yi.get(u);return h!==void 0?C.resolve(c.Ji.get(h)):c.Bs.getTargetData(l,u)}(r,o,Jn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:re())).next(a=>(jO(r,N3(e),a),{documents:a,ir:s})))}function jO(t,e,n){let r=t.Xi.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class t1{constructor(){this.activeTargetIds=$3()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class FO{constructor(){this.Hr=new t1,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new t1,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gl=null;function bf(){return Gl===null?Gl=268435456+Math.round(2147483648*Math.random()):Gl++,"0x"+Gl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="WebChannelConnection";class BO extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=bf(),a=this.To(e,n);V("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(V("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Ns("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+qs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=zO[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=bf();return new Promise((o,a)=>{const l=new ZR;l.setWithCredentials(!0),l.listenOnce(QR.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Tf.NO_ERROR:const c=l.getResponseJson();V(vt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Tf.TIMEOUT:V(vt,`RPC '${e}' ${s} timed out`),a(new U(_.DEADLINE_EXCEEDED,"Request time out"));break;case Tf.HTTP_ERROR:const h=l.getStatus();if(V(vt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const y=function(w){const k=w.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(k)>=0?k:_.UNKNOWN}(g.status);a(new U(y,g.message))}else a(new U(_.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new U(_.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{V(vt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);V(vt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=bf(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=qR(),a=YR(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new JR({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");V(vt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let f=!1,g=!1;const y=new VO({ro:k=>{g?V(vt,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(f||(V(vt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),f=!0),V(vt,`RPC '${e}' stream ${i} sending:`,k),h.send(k))},oo:()=>h.close()}),w=(k,m,d)=>{k.listen(m,v=>{try{d(v)}catch(E){setTimeout(()=>{throw E},0)}})};return w(h,Vl.EventType.OPEN,()=>{g||V(vt,`RPC '${e}' stream ${i} transport opened.`)}),w(h,Vl.EventType.CLOSE,()=>{g||(g=!0,V(vt,`RPC '${e}' stream ${i} transport closed`),y.wo())}),w(h,Vl.EventType.ERROR,k=>{g||(g=!0,Ns(vt,`RPC '${e}' stream ${i} transport errored:`,k),y.wo(new U(_.UNAVAILABLE,"The operation could not be completed")))}),w(h,Vl.EventType.MESSAGE,k=>{var m;if(!g){const d=k.data[0];be(!!d);const v=d,E=v.error||((m=v[0])===null||m===void 0?void 0:m.error);if(E){V(vt,`RPC '${e}' stream ${i} received error:`,E);const x=E.status;let A=function(T){const H=Ve[T];if(H!==void 0)return MS(H)}(x),N=E.message;A===void 0&&(A=_.INTERNAL,N="Unknown error status: "+x+" with message "+E.message),g=!0,y.wo(new U(A,N)),h.close()}else V(vt,`RPC '${e}' stream ${i} received:`,d),y._o(d)}}),w(a,XR.STAT_EVENT,k=>{k.stat===P0.PROXY?V(vt,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===P0.NOPROXY&&V(vt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.fo()},0),y}}function Af(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(t){return new tO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new qS(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(Xn(n.toString()),Xn("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new U(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class HO extends YS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=iO(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?J.min():s.readTime?An(s.readTime):J.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=xp(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=gp(a)?{documents:aO(i,a)}:{query:lO(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=US(i,s.resumeToken);const l=kp(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(J.min())>0){o.readTime=cc(i,s.snapshotVersion.toTimestamp());const l=kp(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=cO(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=xp(this.serializer),n.removeTarget=e,this.Wo(n)}}class WO extends YS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=oO(e.writeResults,e.commitTime),r=An(e.commitTime);return this.listener.cu(r,n)}return be(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=xp(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>sO(this.serializer,r))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new U(_.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(_.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(_.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class KO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Xn(n),this.mu=!1):V("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{Ri(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ee(a);l.vu.add(4),await Ja(l),l.bu.set("Unknown"),l.vu.delete(4),await kh(l)}(this))})}),this.bu=new KO(r,i)}}async function kh(t){if(Ri(t))for(const e of t.Ru)await e(!0)}async function Ja(t){for(const e of t.Ru)await e(!1)}function QS(t,e){const n=ee(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Fg(n)?jg(n):Qs(n).Ko()&&Mg(n,e))}function XS(t,e){const n=ee(t),r=Qs(n);n.Au.delete(e),r.Ko()&&JS(n,e),n.Au.size===0&&(r.Ko()?r.jo():Ri(n)&&n.bu.set("Unknown"))}function Mg(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qs(t).su(e)}function JS(t,e){t.Vu.qt(e),Qs(t).iu(e)}function jg(t){t.Vu=new X3({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Qs(t).start(),t.bu.gu()}function Fg(t){return Ri(t)&&!Qs(t).Uo()&&t.Au.size>0}function Ri(t){return ee(t).vu.size===0}function ZS(t){t.Vu=void 0}async function YO(t){t.Au.forEach((e,n)=>{Mg(t,e)})}async function QO(t,e){ZS(t),Fg(t)?(t.bu.Iu(e),jg(t)):t.bu.set("Unknown")}async function XO(t,e,n){if(t.bu.set("Online"),e instanceof FS&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await hc(t,r)}else if(e instanceof fu?t.Vu.Ht(e):e instanceof jS?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(J.min()))try{const r=await KS(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(bt.EMPTY_BYTE_STRING,u.snapshotVersion)),JS(i,a);const c=new Er(u.target,a,l,u.sequenceNumber);Mg(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await hc(t,r)}}async function hc(t,e,n){if(!qa(e))throw e;t.vu.add(1),await Ja(t),t.bu.set("Offline"),n||(n=()=>KS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await kh(t)})}function ex(t,e){return e().catch(n=>hc(t,n,e))}async function Eh(t){const e=ee(t),n=Hr(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;JO(e);)try{const i=await $O(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,ZO(e,i)}catch(i){await hc(e,i)}tx(e)&&nx(e)}function JO(t){return Ri(t)&&t.Eu.length<10}function ZO(t,e){t.Eu.push(e);const n=Hr(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function tx(t){return Ri(t)&&!Hr(t).Uo()&&t.Eu.length>0}function nx(t){Hr(t).start()}async function eD(t){Hr(t).hu()}async function tD(t){const e=Hr(t);for(const n of t.Eu)e.uu(n.mutations)}async function nD(t,e,n){const r=t.Eu.shift(),i=Ng.from(r,e,n);await ex(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Eh(t)}async function rD(t,e){e&&Hr(t).ou&&await async function(n,r){if(i=r.code,q3(i)&&i!==_.ABORTED){const s=n.Eu.shift();Hr(n).Qo(),await ex(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Eh(n)}var i}(t,e),tx(t)&&nx(t)}async function r1(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=Ri(n);n.vu.add(3),await Ja(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await kh(n)}async function iD(t,e){const n=ee(t);e?(n.vu.delete(2),await kh(n)):e||(n.vu.add(2),await Ja(n),n.bu.set("Unknown"))}function Qs(t){return t.Su||(t.Su=function(e,n,r){const i=ee(e);return i.fu(),new HO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:YO.bind(null,t),ao:QO.bind(null,t),nu:XO.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Fg(t)?jg(t):t.bu.set("Unknown")):(await t.Su.stop(),ZS(t))})),t.Su}function Hr(t){return t.Du||(t.Du=function(e,n,r){const i=ee(e);return i.fu(),new WO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:eD.bind(null,t),ao:rD.bind(null,t),au:tD.bind(null,t),cu:nD.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Eh(t)):(await t.Du.stop(),t.Eu.length>0&&(V("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Lr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Ug(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zg(t,e){if(Xn("AsyncQueue",`${e}: ${t}`),qa(t))return new U(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.comparator=e?(n,r)=>e(n,r)||B.comparator(n.key,r.key):(n,r)=>B.comparator(n.key,r.key),this.keyedMap=yo(),this.sortedSet=new De(this.comparator)}static emptySet(e){return new ms(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ms)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ms;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(){this.Cu=new De(B.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):K():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ls{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ls(e,n,ms.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ph(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(){this.Nu=void 0,this.listeners=[]}}class oD{constructor(){this.queries=new Ys(e=>xS(e),ph),this.onlineState="Unknown",this.ku=new Set}}async function aD(t,e){const n=ee(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new sD),i)try{s.Nu=await n.onListen(r)}catch(o){const a=zg(o,`Initialization of query '${wp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&Vg(n)}async function lD(t,e){const n=ee(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function uD(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&Vg(n)}function cD(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Vg(t){t.ku.forEach(e=>{e.next()})}class hD{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ls(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Ls.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e){this.key=e}}class ix{constructor(e){this.key=e}}class fD{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=re(),this.mutatedKeys=re(),this.tc=_S(e),this.ec=new ms(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new i1,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const f=i.get(c),g=mh(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let k=!1;f&&g?f.data.isEqual(g.data)?y!==w&&(r.track({type:3,doc:g}),k=!0):this.rc(f,g)||(r.track({type:2,doc:g}),k=!0,(l&&this.tc(g,l)>0||u&&this.tc(g,u)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),k=!0):f&&!g&&(r.track({type:1,doc:f}),k=!0,(l||u)&&(a=!0)),k&&(g?(o=o.add(g),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,c)=>function(h,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return g(h)-g(f)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new Ls(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new i1,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=re(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new ix(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new rx(r))}),n}hc(e){this.Yu=e.ir,this.Zu=re();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Ls.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class dD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class pD{constructor(e){this.key=e,this.fc=!1}}class mD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Ys(a=>xS(a),ph),this._c=new Map,this.mc=new Set,this.gc=new De(B.comparator),this.yc=new Map,this.Ic=new Dg,this.Tc={},this.Ec=new Map,this.Ac=Ds.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function gD(t,e){const n=TD(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await MO(n.localStore,Jn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await vD(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&QS(n.remoteStore,o)}return i}async function vD(t,e,n,r,i){t.Rc=(h,f,g)=>async function(y,w,k,m){let d=w.view.sc(k);d.zi&&(d=await e1(y.localStore,w.query,!1).then(({documents:x})=>w.view.sc(x,d)));const v=m&&m.targetChanges.get(w.targetId),E=w.view.applyChanges(d,y.isPrimaryClient,v);return o1(y,w.targetId,E.cc),E.snapshot}(t,h,f,g);const s=await e1(t.localStore,e,!0),o=new fD(e,s.ir),a=o.sc(s.documents),l=Xa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);o1(t,n,u.cc);const c=new dD(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function yD(t,e){const n=ee(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!ph(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await _p(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),XS(n.remoteStore,r.targetId),Ip(n,r.targetId)}).catch(Ka)):(Ip(n,r.targetId),await _p(n.localStore,r.targetId,!0))}async function wD(t,e,n){const r=CD(t);try{const i=await function(s,o){const a=ee(s),l=Qe.now(),u=o.reduce((f,g)=>f.add(g.key),re());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=Zn(),y=re();return a.Zi.getEntries(f,u).next(w=>{g=w,g.forEach((k,m)=>{m.isValidDocument()||(y=y.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(w=>{c=w;const k=[];for(const m of o){const d=B3(m,c.get(m.key).overlayedDocument);d!=null&&k.push(new Xr(m.key,d,dS(d.value.mapValue),bn.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,k,o)}).next(w=>{h=w;const k=w.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(f,w.batchId,k)})}).then(()=>({batchId:h.batchId,changes:TS(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new De(de)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await Za(r,i.changes),await Eh(r.remoteStore)}catch(i){const s=zg(i,"Failed to persist write");n.reject(s)}}async function sx(t,e){const n=ee(t);try{const r=await DO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(be(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?be(o.fc):i.removedDocuments.size>0&&(be(o.fc),o.fc=!1))}),await Za(n,r,e)}catch(r){await Ka(r)}}function s1(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ee(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Mu(o)&&(l=!0)}),l&&Vg(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function kD(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new De(B.comparator);o=o.insert(s,kt.newNoDocument(s,J.min()));const a=re().add(s),l=new yh(J.min(),new Map,new De(de),o,a);await sx(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),Bg(r)}else await _p(r.localStore,e,!1).then(()=>Ip(r,e,n)).catch(Ka)}async function ED(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await OO(n.localStore,e);ax(n,r,null),ox(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Za(n,i)}catch(i){await Ka(i)}}async function SD(t,e,n){const r=ee(t);try{const i=await function(s,o){const a=ee(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(be(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);ax(r,e,n),ox(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Za(r,i)}catch(i){await Ka(i)}}function ox(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function ax(t,e,n){const r=ee(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function Ip(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||lx(t,r)})}function lx(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(XS(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Bg(t))}function o1(t,e,n){for(const r of n)r instanceof rx?(t.Ic.addReference(r.key,e),xD(t,r)):r instanceof ix?(V("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||lx(t,r.key)):K()}function xD(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(V("SyncEngine","New document in limbo: "+n),t.mc.add(r),Bg(t))}function Bg(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new B(Ie.fromString(e)),r=t.Ac.next();t.yc.set(r,new pD(n)),t.gc=t.gc.insert(n,r),QS(t.remoteStore,new Er(Jn(kS(n.path)),r,"TargetPurposeLimboResolution",xg.ct))}}async function Za(t,e,n){const r=ee(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=$g.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=ee(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>C.forEach(l,h=>C.forEach(h.Fi,f=>u.persistence.referenceDelegate.addReference(c,h.targetId,f)).next(()=>C.forEach(h.Bi,f=>u.persistence.referenceDelegate.removeReference(c,h.targetId,f)))))}catch(c){if(!qa(c))throw c;V("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const f=u.Ji.get(h),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);u.Ji=u.Ji.insert(h,y)}}}(r.localStore,s))}async function _D(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await GS(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new U(_.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Za(n,r.er)}}function ID(t,e){const n=ee(t),r=n.yc.get(e);if(r&&r.fc)return re().add(r.key);{let i=re();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function TD(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ID.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kD.bind(null,e),e.dc.nu=uD.bind(null,e.eventManager),e.dc.Pc=cD.bind(null,e.eventManager),e}function CD(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ED.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SD.bind(null,e),e}class a1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=wh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return RO(this.persistence,new NO,e.initialUser,this.serializer)}createPersistence(e){return new bO(Lg.zs,this.serializer)}createSharedClientState(e){return new FO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class bD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>s1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=_D.bind(null,this.syncEngine),await iD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new oD}createDatastore(e){const n=wh(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new BO(i));var i;return function(s,o,a,l){return new GO(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>s1(this.syncEngine,a,0),o=n1.D()?new n1:new UO,new qO(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new mD(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ee(e);V("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Ja(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Xn("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=cS.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{V("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(V("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Lr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=zg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Nf(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await GS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function l1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await RD(t);V("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>r1(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>r1(e.remoteStore,s)),t._onlineComponents=e}function PD(t){return t.name==="FirebaseError"?t.code===_.FAILED_PRECONDITION||t.code===_.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function RD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!PD(n))throw n;Ns("Error using user provided cache. Falling back to memory cache: "+n),await Nf(t,new a1)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await Nf(t,new a1);return t._offlineComponents}async function ux(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await l1(t,t._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await l1(t,new bD))),t._onlineComponents}function OD(t){return ux(t).then(e=>e.syncEngine)}async function DD(t){const e=await ux(t),n=e.eventManager;return n.onListen=gD.bind(null,e.syncEngine),n.onUnlisten=yD.bind(null,e.syncEngine),n}function LD(t,e,n={}){const r=new Lr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new AD({next:h=>{s.enqueueAndForget(()=>lD(i,c)),h.fromCache&&a.source==="server"?l.reject(new U(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new hD(o,u,{includeMetadataChanges:!0,Ku:!0});return aD(i,c)}(await DD(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cx(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hx(t,e,n){if(!n)throw new U(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $D(t,e,n,r){if(e===!0&&r===!0)throw new U(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function c1(t){if(!B.isDocumentKey(t))throw new U(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function h1(t){if(B.isDocumentKey(t))throw new U(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Sh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function $s(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sh(t);throw new U(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new U(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$D("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cx((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new U(_.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new U(_.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new U(_.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class xh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new f1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new f1(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new t3;switch(n.type){case"firstParty":return new s3(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new U(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=u1.get(e);n&&(V("ComponentProvider","Removing Datastore"),u1.delete(e),n.terminate())}(this),Promise.resolve()}}function MD(t,e,n,r={}){var i;const s=(t=$s(t,xh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ns("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=yt.MOCK_USER;else{a=AP(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new U(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new yt(u)}t._authCredentials=new n3(new uS(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $r(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Gt(this.firestore,e,this._key)}}class Xs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Xs(this.firestore,e,this._query)}}class $r extends Xs{constructor(e,n,r){super(e,n,kS(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Gt(this.firestore,null,new B(e))}withConverter(e){return new $r(this.firestore,e,this._path)}}function fx(t,e,...n){if(t=Ct(t),hx("collection","path",e),t instanceof xh){const r=Ie.fromString(e,...n);return h1(r),new $r(t,null,r)}{if(!(t instanceof Gt||t instanceof $r))throw new U(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return h1(r),new $r(t.firestore,null,r)}}function dx(t,e,...n){if(t=Ct(t),arguments.length===1&&(e=cS.A()),hx("doc","path",e),t instanceof xh){const r=Ie.fromString(e,...n);return c1(r),new Gt(t,null,new B(r))}{if(!(t instanceof Gt||t instanceof $r))throw new U(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return c1(r),new Gt(t.firestore,t instanceof $r?t.converter:null,new B(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new qS(this,"async_queue_retry"),this.Xc=()=>{const n=Af();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Af();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Af();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Lr;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!qa(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Xn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=Ug.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&K()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class _h extends xh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new jD,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||mx(this),this._firestoreClient.terminate()}}function FD(t,e){const n=typeof t=="object"?t:i2(),r=typeof t=="string"?t:e||"(default)",i=Zm(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=CP("firestore");s&&MD(i,...s)}return i}function px(t){return t._firestoreClient||mx(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function mx(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new v3(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,cx(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new ND(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ms(bt.fromBase64String(e))}catch(n){throw new U(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ms(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD=/^__.*__$/;class zD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Xr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qa(e,this.data,n,this.fieldTransforms)}}class gx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Xr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function vx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Gg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Gg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return fc(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(vx(this.ca)&&UD.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class VD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||wh(e)}ya(e,n,r,i=!1){return new Gg({ca:e,methodName:n,ga:r,path:Et.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kg(t){const e=t._freezeSettings(),n=wh(t._databaseId);return new VD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function BD(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);qg("Data must be an object, but it was:",o,r);const a=yx(r,o);let l,u;if(s.merge)l=new Ht(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const f=Tp(e,h,n);if(!o.contains(f))throw new U(_.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);kx(c,f)||c.push(f)}l=new Ht(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new zD(new $t(a),l,u)}class Th extends Hg{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Th}}function HD(t,e,n,r){const i=t.ya(1,e,n);qg("Data must be an object, but it was:",i,r);const s=[],o=$t.empty();Pi(r,(l,u)=>{const c=Yg(e,l,n);u=Ct(u);const h=i.da(c);if(u instanceof Th)s.push(c);else{const f=el(u,h);f!=null&&(s.push(c),o.set(c,f))}});const a=new Ht(s);return new gx(o,a,i.fieldTransforms)}function WD(t,e,n,r,i,s){const o=t.ya(1,e,n),a=[Tp(e,r,n)],l=[i];if(s.length%2!=0)throw new U(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(Tp(e,s[f])),l.push(s[f+1]);const u=[],c=$t.empty();for(let f=a.length-1;f>=0;--f)if(!kx(u,a[f])){const g=a[f];let y=l[f];y=Ct(y);const w=o.da(g);if(y instanceof Th)u.push(g);else{const k=el(y,w);k!=null&&(u.push(g),c.set(g,k))}}const h=new Ht(u);return new gx(c,h,o.fieldTransforms)}function GD(t,e,n,r=!1){return el(n,t.ya(r?4:3,e))}function el(t,e){if(wx(t=Ct(t)))return qg("Unsupported field value:",e,t),yx(t,e);if(t instanceof Hg)return function(n,r){if(!vx(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=el(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Ct(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return M3(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Qe.fromDate(n);return{timestampValue:cc(r.serializer,i)}}if(n instanceof Qe){const i=new Qe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:cc(r.serializer,i)}}if(n instanceof Wg)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ms)return{bytesValue:US(r.serializer,n._byteString)};if(n instanceof Gt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Og(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Sh(n)}`)}(t,e)}function yx(t,e){const n={};return hS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pi(t,(r,i)=>{const s=el(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function wx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof Wg||t instanceof Ms||t instanceof Gt||t instanceof Hg)}function qg(t,e,n){if(!wx(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Sh(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function Tp(t,e,n){if((e=Ct(e))instanceof Ih)return e._internalPath;if(typeof e=="string")return Yg(t,e);throw fc("Field path arguments must be of type string or ",t,!1,void 0,n)}const KD=new RegExp("[~\\*/\\[\\]]");function Yg(t,e,n){if(e.search(KD)>=0)throw fc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ih(...e.split("."))._internalPath}catch{throw fc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new U(_.INVALID_ARGUMENT,a+t+l)}function kx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Sx("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class qD extends Ex{data(){return super.data()}}function Sx(t,e){return typeof e=="string"?Yg(t,e):e instanceof Ih?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qg{}class QD extends Qg{}function XD(t,e,...n){let r=[];e instanceof Qg&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Jg).length,o=i.filter(a=>a instanceof Xg).length;if(s>1||s>0&&o>0)throw new U(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Xg extends QD{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Xg(e,n,r)}_apply(e){const n=this._parse(e);return xx(e._query,n),new Xs(e.firestore,e.converter,vp(e._query,n))}_parse(e){const n=Kg(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new U(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){p1(c,u);const f=[];for(const g of c)f.push(d1(a,i,g));h={arrayValue:{values:f}}}else h=d1(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||p1(c,u),h=GD(o,s,c,u==="in"||u==="not-in");return We.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Jg extends Qg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Jg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:yn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)xx(s,a),s=vp(s,a)}(e._query,n),new Xs(e.firestore,e.converter,vp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function d1(t,e,n){if(typeof(n=Ct(n))=="string"){if(n==="")throw new U(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!SS(e)&&n.indexOf("/")!==-1)throw new U(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!B.isDocumentKey(r))throw new U(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return M0(t,new B(r))}if(n instanceof Gt)return M0(t,n._key);throw new U(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Sh(n)}.`)}function p1(t,e){if(!Array.isArray(t)||t.length===0)throw new U(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function xx(t,e){if(e.isInequality()){const r=Ag(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new U(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=ES(t);s!==null&&JD(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new U(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function JD(t,e,n){if(!n.isEqual(e))throw new U(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class ZD{convertValue(e,n="none"){switch(Ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_i(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Pi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Wg(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ig(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(wa(e));default:return null}}convertTimestamp(e){const n=Br(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);be(WS(r));const i=new ka(r.get(1),r.get(3)),s=new B(r.popFirst(5));return i.isEqual(n)||Xn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eL(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tL extends Ex{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new du(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Sx("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class du extends tL{data(e={}){return super.data(e)}}class nL{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Kl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new du(this._firestore,this._userDataWriter,r.key,r,new Kl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new du(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Kl(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new du(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Kl(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:rL(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function rL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}class iL extends ZD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ms(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Gt(this.firestore,null,n)}}function sL(t){t=$s(t,Xs);const e=$s(t.firestore,_h),n=px(e),r=new iL(e);return YD(t._query),LD(n,t._query).then(i=>new nL(e,r,t,i))}function oL(t,e,n,...r){t=$s(t,Gt);const i=$s(t.firestore,_h),s=Kg(i);let o;return o=typeof(e=Ct(e))=="string"||e instanceof Ih?WD(s,"updateDoc",t._key,e,n,r):HD(s,"updateDoc",t._key,e),_x(i,[o.toMutation(t._key,bn.exists(!0))])}function aL(t,e){const n=$s(t.firestore,_h),r=dx(t),i=eL(t.converter,e);return _x(n,[BD(Kg(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,bn.exists(!1))]).then(()=>r)}function _x(t,e){return function(n,r){const i=new Lr;return n.asyncQueue.enqueueAndForget(async()=>wD(await OD(n),r,i)),i.promise}(px(t),e)}(function(t,e=!0){(function(n){qs=n})(Ws),bs(new Ei("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new _h(new r3(n.getProvider("auth-internal")),new a3(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new U(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ka(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Dr(R0,"3.13.0",t),Dr(R0,"3.13.0","esm2017")})();var lL="firebase",uL="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dr(lL,uL,"app");function Zg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Ix(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cL=Ix,Tx=new $a("auth","Firebase",Ix());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=new Xm("@firebase/auth");function hL(t,...e){dc.logLevel<=he.WARN&&dc.warn(`Auth (${Ws}): ${t}`,...e)}function pu(t,...e){dc.logLevel<=he.ERROR&&dc.error(`Auth (${Ws}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t,...e){throw ev(t,...e)}function Nn(t,...e){return ev(t,...e)}function fL(t,e,n){const r=Object.assign(Object.assign({},cL()),{[e]:n});return new $a("auth","Firebase",r).create(e,{appName:t.name})}function ev(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Tx.create(t,...e)}function Z(t,e,...n){if(!t)throw ev(e,...n)}function Un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pu(e),new Error(e)}function tr(t,e){t||Un(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dL(){return m1()==="http:"||m1()==="https:"}function m1(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pL(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dL()||PP()||"connection"in navigator)?navigator.onLine:!0}function mL(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n){this.shortDelay=e,this.longDelay=n,tr(n>e,"Short delay should be less than long delay!"),this.isMobile=NP()||RP()}get(){return pL()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(t,e){tr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vL=new tl(3e4,6e4);function bx(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function nl(t,e,n,r,i={}){return Ax(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ma(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Cx.fetch()(Nx(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Ax(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},gL),e);try{const i=new wL(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ql(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ql(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ql(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ql(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw fL(t,c,u);er(t,c)}}catch(i){if(i instanceof ir)throw i;er(t,"network-request-failed",{message:String(i)})}}async function yL(t,e,n,r,i={}){const s=await nl(t,e,n,r,i);return"mfaPendingCredential"in s&&er(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Nx(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?tv(t.config,i):`${t.config.apiScheme}://${i}`}class wL{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Nn(this.auth,"network-request-failed")),vL.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ql(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Nn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kL(t,e){return nl(t,"POST","/v1/accounts:delete",e)}async function EL(t,e){return nl(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function SL(t,e=!1){const n=Ct(t),r=await n.getIdToken(e),i=nv(r);Z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Mo(Pf(i.auth_time)),issuedAtTime:Mo(Pf(i.iat)),expirationTime:Mo(Pf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Pf(t){return Number(t)*1e3}function nv(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return pu("JWT malformed, contained fewer than 3 sections"),null;try{const i=XE(n);return i?JSON.parse(i):(pu("Failed to decode base64 JWT payload"),null)}catch(i){return pu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function xL(t){const e=nv(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _a(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ir&&_L(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function _L({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mo(this.lastLoginAt),this.creationTime=Mo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await _a(t,EL(n,{idToken:r}));Z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?bL(s.providerUserInfo):[],a=CL(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Px(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function TL(t){const e=Ct(t);await pc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function CL(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function bL(t){return t.map(e=>{var{providerId:n}=e,r=Zg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AL(t,e){const n=await Ax(t,{},async()=>{const r=Ma({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Nx(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Cx.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xL(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await AL(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ia;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ia,this.toJSON())}_performRefresh(){return Un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Zg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new IL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Px(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await _a(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return SL(this,e)}reload(){return TL(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await pc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _a(this,kL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:E,isAnonymous:x,providerData:A,stsTokenManager:N}=n;Z(v&&N,e,"internal-error");const T=Ia.fromJSON(this.name,N);Z(typeof v=="string",e,"internal-error"),lr(h,e.name),lr(f,e.name),Z(typeof E=="boolean",e,"internal-error"),Z(typeof x=="boolean",e,"internal-error"),lr(g,e.name),lr(y,e.name),lr(w,e.name),lr(k,e.name),lr(m,e.name),lr(d,e.name);const H=new fi({uid:v,auth:e,email:f,emailVerified:E,displayName:h,isAnonymous:x,photoURL:y,phoneNumber:g,tenantId:w,stsTokenManager:T,createdAt:m,lastLoginAt:d});return A&&Array.isArray(A)&&(H.providerData=A.map(L=>Object.assign({},L))),k&&(H._redirectEventId=k),H}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ia;i.updateFromServerResponse(n);const s=new fi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await pc(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1=new Map;function zn(t){tr(t instanceof Function,"Expected a class definition");let e=g1.get(t);return e?(tr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,g1.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Rx.type="NONE";const v1=Rx;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(t,e,n){return`firebase:${t}:${e}:${n}`}class gs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=mu(this.userKey,i.apiKey,s),this.fullPersistenceKey=mu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new gs(zn(v1),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||zn(v1);const o=mu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=fi._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new gs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new gs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lx(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ox(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Mx(e))return"Blackberry";if(jx(e))return"Webos";if(rv(e))return"Safari";if((e.includes("chrome/")||Dx(e))&&!e.includes("edge/"))return"Chrome";if($x(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ox(t=Tt()){return/firefox\//i.test(t)}function rv(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dx(t=Tt()){return/crios\//i.test(t)}function Lx(t=Tt()){return/iemobile/i.test(t)}function $x(t=Tt()){return/android/i.test(t)}function Mx(t=Tt()){return/blackberry/i.test(t)}function jx(t=Tt()){return/webos/i.test(t)}function Ch(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function NL(t=Tt()){var e;return Ch(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function PL(){return OP()&&document.documentMode===10}function Fx(t=Tt()){return Ch(t)||$x(t)||jx(t)||Mx(t)||/windows phone/i.test(t)||Lx(t)}function RL(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ux(t,e=[]){let n;switch(t){case"Browser":n=y1(Tt());break;case"Worker":n=`${y1(Tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ws}/${r}`}async function zx(t,e){return nl(t,"GET","/v2/recaptchaConfig",bx(t,e))}function w1(t){return t!==void 0&&t.enterprise!==void 0}class Vx{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Bx(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Nn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",OL().appendChild(r)})}function DL(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const LL="https://www.google.com/recaptcha/enterprise.js?render=",$L="recaptcha-enterprise",ML="NO_RECAPTCHA";class jL{constructor(e){this.type=$L,this.auth=bh(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{zx(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Vx(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;w1(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(ML)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&w1(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Bx(LL+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UL{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new k1(this),this.idTokenSubscription=new k1(this),this.beforeStateQueue=new FL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await gs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ct(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(zn(e))})}async initializeRecaptchaConfig(){const e=await zx(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Vx(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new jL(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $a("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zn(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await gs.create(this,[zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Z(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ux(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&hL(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function bh(t){return Ct(t)}class k1{constructor(e){this.auth=e,this.observer=null,this.addObserver=UP(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zL(t,e){const n=Zm(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Xu(s,e??{}))return i;er(i,"already-initialized")}return n.initialize({options:e})}function VL(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function BL(t,e,n){const r=bh(t);Z(r._canInitEmulator,r,"emulator-config-failed"),Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Hx(e),{host:o,port:a}=HL(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||WL()}function Hx(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function HL(t){const e=Hx(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:E1(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:E1(o)}}}function E1(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function WL(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Un("not implemented")}_getIdTokenResponse(e){return Un("not implemented")}_linkToIdToken(e,n){return Un("not implemented")}_getReauthenticationResolver(e){return Un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(t,e){return yL(t,"POST","/v1/accounts:signInWithIdp",bx(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GL="http://localhost";class Ti extends Wx{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ti(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):er("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Zg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ti(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vs(e,n)}buildRequest(){const e={requestUri:GL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ma(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl extends Gx{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends rl{constructor(){super("facebook.com")}static credential(e){return Ti._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";dr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends rl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ti._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.GOOGLE_SIGN_IN_METHOD="google.com";pr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends rl{constructor(){super("github.com")}static credential(e){return Ti._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mr.credential(e.oauthAccessToken)}catch{return null}}}mr.GITHUB_SIGN_IN_METHOD="github.com";mr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends rl{constructor(){super("twitter.com")}static credential(e,n){return Ti._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gr.credential(n,r)}catch{return null}}}gr.TWITTER_SIGN_IN_METHOD="twitter.com";gr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await fi._fromIdTokenResponse(e,r,i),o=S1(r);return new js({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=S1(r);return new js({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function S1(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc extends ir{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,mc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new mc(e,n,r,i)}}function Kx(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?mc._fromErrorAndOperation(t,s,e,r):s})}async function KL(t,e,n=!1){const r=await _a(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return js._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qL(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await _a(t,Kx(r,i,e,t),n);Z(s.idToken,r,"internal-error");const o=nv(s.idToken);Z(o,r,"internal-error");const{sub:a}=o;return Z(t.uid===a,r,"user-mismatch"),js._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&er(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YL(t,e,n=!1){const r="signIn",i=await Kx(t,r,e),s=await js._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QL(t,e){return Ct(t).setPersistence(e)}function XL(t,e,n,r){return Ct(t).onIdTokenChanged(e,n,r)}function JL(t,e,n){return Ct(t).beforeAuthStateChanged(e,n)}const gc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gc,"1"),this.storage.removeItem(gc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZL(){const t=Tt();return rv(t)||Ch(t)}const e$=1e3,t$=10;class Yx extends qx{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ZL()&&RL(),this.fallbackToPolling=Fx(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);PL()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,t$):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},e$)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yx.type="LOCAL";const Qx=Yx;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx extends qx{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Xx.type="SESSION";const Jx=Xx;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n$(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ah(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await n$(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ah.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r${constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=iv("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(){return window}function i$(t){Pn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zx(){return typeof Pn().WorkerGlobalScope<"u"&&typeof Pn().importScripts=="function"}async function s$(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function o$(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function a$(){return Zx()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_="firebaseLocalStorageDb",l$=1,vc="firebaseLocalStorage",t_="fbase_key";class il{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nh(t,e){return t.transaction([vc],e?"readwrite":"readonly").objectStore(vc)}function u$(){const t=indexedDB.deleteDatabase(e_);return new il(t).toPromise()}function bp(){const t=indexedDB.open(e_,l$);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(vc,{keyPath:t_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(vc)?e(r):(r.close(),await u$(),e(await bp()))})})}async function x1(t,e,n){const r=Nh(t,!0).put({[t_]:e,value:n});return new il(r).toPromise()}async function c$(t,e){const n=Nh(t,!1).get(e),r=await new il(n).toPromise();return r===void 0?null:r.value}function _1(t,e){const n=Nh(t,!0).delete(e);return new il(n).toPromise()}const h$=800,f$=3;class n_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>f$)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zx()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ah._getInstance(a$()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await s$(),!this.activeServiceWorker)return;this.sender=new r$(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||o$()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bp();return await x1(e,gc,"1"),await _1(e,gc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>x1(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>c$(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_1(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Nh(i,!1).getAll();return new il(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),h$)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}n_.type="LOCAL";const d$=n_;new tl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p$(t,e){return e?zn(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv extends Wx{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function m$(t){return YL(t.auth,new sv(t),t.bypassAuthState)}function g$(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),qL(n,new sv(t),t.bypassAuthState)}async function v$(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),KL(n,new sv(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return m$;case"linkViaPopup":case"linkViaRedirect":return v$;case"reauthViaPopup":case"reauthViaRedirect":return g$;default:er(this.auth,"internal-error")}}resolve(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y$=new tl(2e3,1e4);class is extends r_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,is.currentPopupAction&&is.currentPopupAction.cancel(),is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){tr(this.filter.length===1,"Popup operations only handle one event");const e=iv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,y$.get())};e()}}is.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w$="pendingRedirect",gu=new Map;class k$ extends r_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=gu.get(this.auth._key());if(!e){try{const r=await E$(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}gu.set(this.auth._key(),e)}return this.bypassAuthState||gu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function E$(t,e){const n=_$(e),r=x$(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function S$(t,e){gu.set(t._key(),e)}function x$(t){return zn(t._redirectPersistence)}function _$(t){return mu(w$,t.config.apiKey,t.name)}async function I$(t,e,n=!1){const r=bh(t),i=p$(r,e),o=await new k$(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T$=10*60*1e3;class C${constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!b$(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!i_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Nn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=T$&&this.cachedEventUids.clear(),this.cachedEventUids.has(I1(e))}saveEventToCache(e){this.cachedEventUids.add(I1(e)),this.lastProcessedEventTime=Date.now()}}function I1(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function i_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function b$(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return i_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A$(t,e={}){return nl(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N$=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,P$=/^https?/;async function R$(t){if(t.config.emulator)return;const{authorizedDomains:e}=await A$(t);for(const n of e)try{if(O$(n))return}catch{}er(t,"unauthorized-domain")}function O$(t){const e=Cp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!P$.test(n))return!1;if(N$.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D$=new tl(3e4,6e4);function T1(){const t=Pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function L$(t){return new Promise((e,n)=>{var r,i,s;function o(){T1(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{T1(),n(Nn(t,"network-request-failed"))},timeout:D$.get()})}if(!((i=(r=Pn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Pn().gapi)===null||s===void 0)&&s.load)o();else{const a=DL("iframefcb");return Pn()[a]=()=>{gapi.load?o():n(Nn(t,"network-request-failed"))},Bx(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw vu=null,e})}let vu=null;function $$(t){return vu=vu||L$(t),vu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M$=new tl(5e3,15e3),j$="__/auth/iframe",F$="emulator/auth/iframe",U$={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},z$=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function V$(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tv(e,F$):`https://${t.config.authDomain}/${j$}`,r={apiKey:e.apiKey,appName:t.name,v:Ws},i=z$.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ma(r).slice(1)}`}async function B$(t){const e=await $$(t),n=Pn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:V$(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:U$,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Nn(t,"network-request-failed"),a=Pn().setTimeout(()=>{s(o)},M$.get());function l(){Pn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H$={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},W$=500,G$=600,K$="_blank",q$="http://localhost";class C1{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Y$(t,e,n,r=W$,i=G$){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},H$),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Tt().toLowerCase();n&&(a=Dx(u)?K$:n),Ox(u)&&(e=e||q$,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(NL(u)&&a!=="_self")return Q$(e||"",a),new C1(null);const h=window.open(e||"",a,c);Z(h,t,"popup-blocked");try{h.focus()}catch{}return new C1(h)}function Q$(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X$="__/auth/handler",J$="emulator/auth/handler",Z$=encodeURIComponent("fac");async function b1(t,e,n,r,i,s){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ws,eventId:i};if(e instanceof Gx){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",FP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof rl){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${Z$}=${encodeURIComponent(l)}`:"";return`${eM(t)}?${Ma(a).slice(1)}${u}`}function eM({config:t}){return t.emulator?tv(t,J$):`https://${t.authDomain}/${X$}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf="webStorageSupport";class tM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jx,this._completeRedirectFn=I$,this._overrideRedirectResult=S$}async _openPopup(e,n,r,i){var s;tr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await b1(e,n,r,Cp(),i);return Y$(e,o,iv())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await b1(e,n,r,Cp(),i);return i$(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(tr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await B$(e),r=new C$(e);return n.register("authEvent",i=>(Z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rf,{type:Rf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Rf];o!==void 0&&n(!!o),er(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=R$(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Fx()||rv()||Ch()}}const nM=tM;var A1="@firebase/auth",N1="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function sM(t){bs(new Ei("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ux(t)},u=new UL(r,i,s,l);return VL(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),bs(new Ei("auth-internal",e=>{const n=bh(e.getProvider("auth").getImmediate());return(r=>new rM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dr(A1,N1,iM(t)),Dr(A1,N1,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oM=5*60,aM=e2("authIdTokenMaxAge")||oM;let P1=null;const lM=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>aM)return;const i=n==null?void 0:n.token;P1!==i&&(P1=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function uM(t=i2()){const e=Zm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=zL(t,{popupRedirectResolver:nM,persistence:[d$,Qx,Jx]}),r=e2("authTokenSyncURL");if(r){const s=lM(r);JL(n,s,()=>s(n.currentUser)),XL(n,o=>s(o))}const i=JE("auth");return i&&BL(n,`http://${i}`),n}sM("Browser");const cM={apiKey:"AIzaSyBDHD7ieVSyVlez1KSzaysAMT3sw0Z6zLE",authDomain:"nimgame-5af34.firebaseapp.com",projectId:"nimgame-5af34",storageBucket:"nimgame-5af34.appspot.com"},hM=r2(cM),ov=FD(),fM=uM(hM);QL(fM,Qx);const dM=async t=>{const e=fx(ov,"users");return(await aL(e,t)).id},pM=async(t,e)=>{const n=dx(ov,"users",t);await oL(n,e)},mM=async()=>{const t=fx(ov,"users"),e=await sL(XD(t));return gM(e)},gM=t=>t.docs.map(e=>({...e.data(),id:e.id})),vM=()=>{const[t,e]=Dc(),[n,r]=b.useState(l0),i=[...n],[s,o]=b.useState(!0),[a,l]=b.useState(!0),[u,c]=b.useState(!1),[h,f]=b.useState(!1),[g,y]=b.useState(""),[w,k]=b.useState(0),m={...t},[d,v]=b.useState(),E=m.loggedIn,[x,A]=b.useState({currentPlayer:"",playerMatches:"",playerVictories:"",allData:""});b.useEffect(()=>{if(E&&!u){const L=m.userIndex,fe=m.persons[L].username,ae=m.persons[L].totalMatches,le=m.persons[L].totalVictories,Ne={...m.persons[L]},Fe=m.persons[L].id;v(Fe),A({...x,currentPlayer:fe,playerMatches:ae,playerVictories:le,allData:Ne})}},[]),b.useEffect(()=>{if(E){const L=m.persons,fe=x.playerMatches,ae=x.playerVictories,le=x.allData;g=="human"?(A({...x,playerMatches:fe+1,playerVictories:ae+1,allData:le,allPlayersArray:L}),c(!0)):g=="computer"&&(A({...x,playerMatches:fe+1,playerVictories:ae,allData:le,allPlayersArray:L}),c(!0))}},[g]),b.useEffect(()=>{if(E&&g=="human"|g=="computer"&&!h){const L={...x};console.log("userId",d);const fe=L.playerMatches,ae=L.playerVictories,le={...L.allData,totalMatches:fe,totalVictories:ae};console.log("L117 playerUpdatedData",le),console.log("userId L121",d),pM(d,le),f(!0)}},[u]),b.useEffect(()=>{if(a&&!u)l(!1);else if(!s){const L=[...n];k(0);let fe=N(L);fe===1&&(alert("You win!"),y("human"));const ae=wP(L);r(ae),fe=N(ae),fe===1?(alert("Computer wins!"),y("computer")):o(!0)}},[s]);const N=L=>L.reduce((ae,{stickValue:le})=>ae+le,0),T=L=>{const ae=((le,Ne)=>{const Fe=Ne[le].lineId;if(k(Fe),Ne[le].stickValue===0)return alert("You are picking a stick already erased. Pick a valid one, please."),Ne;if(w===0||w===Fe){k(Ne[le].lineId);const an={...Ne[le],stickValue:0,stickEnabled:!1},Ke=[...Ne];return Ke[le]=an,console.log("newValues at erase",Ke),Ke}else return alert("In each move, you can remove any number of matches but only from one row. Make your move again, please"),Ne})(L,i);r(ae)},H=()=>{console.log("ok, let's play a new game!"),f(!1),c(!1),y(""),r(l0),l(!0),o(!0),k(0)};return p.jsxs(sP,{children:[p.jsx(Dl,{className:"line1",children:p.jsx(gt,{stickValue:i[0].stickValue,eraseStick:()=>T(0)})}),p.jsxs(Dl,{className:"line3",children:[p.jsx(gt,{stickValue:i[1].stickValue,eraseStick:()=>T(1)}),p.jsx(gt,{stickValue:i[2].stickValue,eraseStick:()=>T(2)}),p.jsx(gt,{stickValue:i[3].stickValue,eraseStick:()=>T(3)})]}),p.jsxs(Dl,{className:"line5",children:[p.jsx(gt,{stickValue:i[4].stickValue,eraseStick:()=>T(4)}),p.jsx(gt,{stickValue:i[5].stickValue,eraseStick:()=>T(5)}),p.jsx(gt,{stickValue:i[6].stickValue,eraseStick:()=>T(6)}),p.jsx(gt,{stickValue:i[7].stickValue,eraseStick:()=>T(7)}),p.jsx(gt,{stickValue:i[8].stickValue,eraseStick:()=>T(8)})]}),p.jsxs(Dl,{className:"line7",children:[p.jsx(gt,{stickValue:i[9].stickValue,eraseStick:()=>T(9)}),p.jsx(gt,{stickValue:i[10].stickValue,eraseStick:()=>T(10)}),p.jsx(gt,{stickValue:i[11].stickValue,eraseStick:()=>T(11)}),p.jsx(gt,{stickValue:i[12].stickValue,eraseStick:()=>T(12)}),p.jsx(gt,{stickValue:i[13].stickValue,eraseStick:()=>T(13)}),p.jsx(gt,{stickValue:i[14].stickValue,eraseStick:()=>T(14)}),p.jsx(gt,{stickValue:i[15].stickValue,eraseStick:()=>T(15)})]}),p.jsxs(fP,{children:[p.jsx(u0,{onClick:H,children:"NEW GAME"}),p.jsx(u0,{onClick:()=>o(!1),children:"COMPUTER TURN"})]}),E?p.jsx(oP,{children:p.jsxs(aP,{children:[p.jsxs("p",{children:["User name:",p.jsx("span",{children:x.currentPlayer})]}),p.jsxs("p",{children:["Total matches:",p.jsx("span",{children:x.playerMatches})]}),p.jsxs("p",{children:["Total victories:",p.jsx("span",{children:x.playerVictories})]})]})}):""]})},yM=()=>p.jsx(vM,{}),wM=G.div`
  border-top: 0.5px solid grey;
  margin-top: auto;
  margin-bottom: 30px;
  padding: 20px 0;
  max-height: 1vh;
  font-family: Roboto, Inter, Lato, Raleway, Montserrat, "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 0.8rem;
  letter-spacing: 0.06rem;

  .mentor {
    padding: 0 5px;
    color: yellow;

    a {
      color: inherit;
      padding-left: 5px;
      text-decoration: none !important;

      :hover {
        cursor: pointer;
      }
    }
  }

  .city {
    color: #D6A6E8;
  }
`,kM=()=>p.jsx(wM,{children:p.jsxs("p",{children:["Pato Bottos for IT Academy |",p.jsxs("span",{className:"mentor",children:["Mentoring:",p.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://pablomonteserin.com/",children:"Pablo Monteserín"})]}),"| ",p.jsx("span",{className:"city",children:"Barcelona | 2023 "})]})}),EM=G.div`
  margin: 15px 5vw;
  padding: 5px 1.5vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family: Raleway, Raleway, Montserrat, "Open Sans", sans-serif;
  font-size: 1rem;
  letter-spacing: 0.03rem;
  line-height: 1.6rem;
  font-weight: 300;

  .italics {
    font-style: italic;
  }

  .bold {
    font-weight: bold;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 10px auto;
    text-align: left;
  }

  li {
    margin-top: 15px;
    text-decoration: none;
  }
`,SM=()=>p.jsx("div",{children:p.jsxs(EM,{children:[p.jsx("h2",{children:"These are the rules of Marienbad Nim Game:"}),p.jsxs("ul",{children:[p.jsxs("li",{children:["a) you may delete",p.jsx("span",{className:"bold",children:" all the sticks you want"})," in each move, and it must be ",p.jsx("span",{className:"bold",children:"at least one"}),"."]}),p.jsxs("li",{children:["b) you may delete the sticks",p.jsx("span",{className:"bold",children:"from one single line"})," in each move."]}),p.jsxs("li",{children:["c) you win if you leave the computer",p.jsx("span",{className:"bold",children:"with the last stick"}),"."]}),p.jsxs("li",{children:["d) you can make the ",p.jsx("span",{className:"bold",children:"first move"})," or you can leave the computer start the game."]})]})]})}),xM=G.div`
  margin: 15px auto;
  padding: 0;
  font-family: Raleway, Raleway, Montserrat, "Open Sans", sans-serif;
  font-size: 1rem;
  letter-spacing: 0.03rem;
  line-height: 2rem;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;const _M=({data:t})=>{const e=[{id:1,key:"rank",label:"Rank"},{id:2,key:"username",label:"User name"},{id:3,key:"totalMatches",label:"Total Matches"},{id:4,key:"totalVictories",label:"Total Victories"},{id:5,key:"winPercentage",label:"Winning %"}],n=[...t];n.forEach(o=>{o.winPercentage=Math.round(o.totalVictories/o.totalMatches*100)});const r=n.sort((o,a)=>a.winPercentage-o.winPercentage);r.map(o=>o.totalMatches===0?o.winPercentage=0:o.winPercentage=Math.round(o.totalVictories/o.totalMatches*100));let i=1;for(let o=0;o<r.length;o++)o>0&&r[o].winPercentage<r[o-1].winPercentage&&i++,r[o].rank=i;const s=r.slice(0,4);return p.jsxs("table",{children:[p.jsx("thead",{children:p.jsx("tr",{children:e.map((o,a)=>p.jsx("th",{children:p.jsx("span",{className:"tableHeader",children:o.label})},a))})}),p.jsx("tbody",{children:s.map((o,a)=>p.jsx("tr",{children:e.map((l,u)=>p.jsx("td",{children:o[l.key]},u))},a))})]})},IM=G.div`
  width: 400px;
  padding: 10px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: #B7BAD2;
  border: 1px solid #2C394E;
  border-radius: 4px;
  line-height: 3rem;
  font-family: Raleway, sans serif;
  font-size: 1rem;
  font-weight: 800;
  color: #2c394e;
`,R1=G.div`
  width: 350px;
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
  line-height: 2.5rem;

  label {
    text-transform: uppercase;
    color: #2C394E;
    font-size: 1.2rem;
    letter-spacing: 0.05rem;
    margin-bottom: 0.5rem;
  }

  input {
    padding: 5px 20px;
    line-height: 2rem;
    font-size: 1rem;
    font-weight: 200;
    letter-spacing: 0.075rem;
    color: #d4d4d4;
    background-color: #404040;
    border: 0.5px solid skyblue;
    margin-bottom: 10px;
    border-radius: 4px;

    :focus {
      border: 1px solid #9fd7ee;
    }
  }
`,TM=G.button`
  min-width: 350px;
  margin: 30px 20px;
  padding: 5px 20px;
  justify-content: center;
  line-height: 2rem;
  font-size: 1rem;
  letter-spacing: 0.05rem;
  background-color: #65627e;
  color: #f5f5f5;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  font-family: Raleway, sans serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.05rem;

  :hover {
    background-color: #484848;
  }
`,CM=G.div`
  margin: 20px 0;
  cursor: pointer;

  :hover {
    color: #666666;
  }
`,s_=()=>{const[t,e]=Dc(),[n,r]=b.useState(""),i=Mc();b.useEffect(()=>{s()},[]);const s=async()=>{const a=await mM();e({...t,persons:a})},o=a=>{a.preventDefault();const l=t.persons.findIndex(u=>u.email===t.userEmailLogin);if(l<0)alert("Please, sign up first"),i("/signup/");else{const u=t.persons[l];t.userEmailLogin===u.email&&n===u.password?(e({...t,loggedIn:!0,userIndex:l}),console.log("userState at Login",t),console.log("Succesful login!!"),i("/")):(alert("Login error! Please, try it again."),i("/login/"))}};return p.jsx("div",{children:p.jsxs(IM,{children:[p.jsxs("form",{children:[p.jsxs(R1,{children:[p.jsx("label",{htmlFor:"email",children:"email: "}),p.jsx("input",{type:"email",value:t.userEmailLogin,id:"userEmail",name:"userEmail",placeholder:"Enter your email",required:!0,onChange:a=>{e({...t,userEmailLogin:a.target.value})}})]}),p.jsxs(R1,{children:[p.jsx("label",{htmlFor:"password",children:"password: "}),p.jsx("input",{type:"password",value:n,id:"password",name:"password",placeholder:"Enter your password",required:!0,onChange:a=>r(a.target.value)})]}),p.jsx(TM,{type:"submit",onClick:o,children:"LOG IN"})]}),p.jsx(CM,{onClick:()=>i("/signup"),children:"Don't you have an account? Register here!"})]})})},bM=()=>{const[t,e]=Dc();return p.jsxs(xM,{children:[p.jsx("h1",{children:"Ranking"}),t.loggedIn?p.jsx(_M,{data:t.persons}):p.jsx(s_,{})]})},AM=G.div`
  margin: 15px 5vw;
  padding: 5px 1.5vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: Raleway, Raleway, Montserrat, "Open Sans", sans-serif;
  font-size: 1rem;
  letter-spacing: 0.03rem;
  line-height: 1.4rem;
  font-weight: 300;

  p {
    text-align: left;
  }

  .italics {
    font-style: italic;
  }

  .bold {
    font-weight: bold;
  }

  .video-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    max-width: 320px;
    margin: 15px auto;
    

    .video-screen {
      border: 1px solid grey;
    }

    .video-footer {
      margin: 0.9vh 5px;
      width: 300px;
      text-align: left;
      line-height: 1rem;
      font-family: Raleway;
      font-size: 0.75rem;
      font-weight: 300;
      letter-spacing: 0.03rem;
    }
  }

  a {
    text-decoration: none;
    color: #fefd98;
    font-weight: 500;
  }
`,NM=()=>p.jsx("div",{children:p.jsxs(AM,{children:[p.jsx("div",{children:p.jsxs("p",{children:[p.jsx("span",{className:"bold",children:"Nim"})," is a mathematical game of logic and strategy in which two players take turns removing objects from different piles or groups."," ",p.jsx("a",{href:"https://books.google.es/books/about/The_Words_of_Mathematics.html?id=wWzBAQAACAAJ&redir_esc=y",children:"Steven Schwartzman"})," ","traces the possible origin of the word to the German verb"," ",p.jsx("span",{className:"italics",children:"nehmen"}),', "to take", with an imperative singular form ',p.jsx("span",{className:"italics",children:"nim"}),"."]})}),p.jsx("div",{children:p.jsxs("p",{children:["On each turn, a player must remove at least one object, and may remove any number of objects provided they all come from the same pile. Depending on the version being played, the goal of the game is either to take the last object or to avoid taking it (a"," ",p.jsx("span",{className:"italics",children:"misère"})," game). The name and the complete theory of the game were invented by the Harvard University professor"," ",p.jsx("a",{href:"https://en.wikipedia.org/wiki/Charles_L._Bouton",children:"Charles L. Bouton"}),", who published the article"," ",p.jsx("span",{className:"italics",children:p.jsx("a",{href:"https://doi.org/10.2307/1967631",children:'"Nim, A Game with a Complete Mathematical Theory"'})}),", at Annals of Mathematics, in 1902."]})}),p.jsx("div",{children:p.jsxs("p",{children:[p.jsx("span",{className:"italics bold",children:"Marienbad"})," was a 1962 Polish puzzle mainframe game created by Elwro engineer"," ",p.jsx("a",{href:"https://pl.wikipedia.org/wiki/Witold_Podg%C3%B3rski",children:"Witold Podgórski"})," ","in Wrocław, Poland for its Odra 1003. It was an adaption of the logic game of nim. Inspired by the discussion in the magazine Przekrój of a variant of nim in the 1961 film"," ",p.jsx("span",{className:"italics",children:"Last Year at Marienbad (L'année dernière à Marienbad)"}),', named "Marienbad" by the magazine, Podgórski programmed the game for the in-development 1003 mainframe, released in 1963. The game had players opposing the computer in alternating rounds of removing matches from a set, with the last player to take a match the loser. As the computer always played the optimal moves, it was essentially unbeatable.']})}),p.jsxs("div",{className:"video-box",children:[p.jsx("iframe",{className:"video-screen",src:"https://www.youtube.com/embed/-aPDfqYrIcg?autoplay=1&mute=1",frameborder:"0",allow:"accelerometer; encrypted-media; gyroscope;",allowfullscreen:!0}),p.jsxs("p",{className:"video-footer",children:["Extract of the film:",p.jsx("span",{className:"italics",children:`"L'année dernière à Marienbad"`}),", by Alain Resnais, 1961."]})]})]})}),PM=G.div`
  margin: 15px 5vw;
  padding: 5px 1.5vw;
  font-family: Raleway, Raleway, Montserrat, "Open Sans", sans-serif;
  font-size: 1rem;
  letter-spacing: 0.03rem;
  line-height: 2rem;
  font-weight: 300;

  img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    cursor: pointer;
  }

  p {
    text-align: left;
  }

  .italics {
    font-style: italic;
  }

  .bold {
    font-weight: bold;
  }

  ul {
    margin: 30px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 20px;
    list-style-type: none;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #fefd98;
    font-weight: 500;
  }
`,Li=G.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 5px;
  padding: 10px;
  font-size: 0.75rem;
`,$i=G.div`
  margin: 10px 0;
  font-weight: 500;
  text-align: center;
  font-size: 0.8rem;
  line-height: 1rem;
`,Mi=G.div`
  margin: 10px 0;
  font-weight: 300;
  text-align: center;
  font-size: 0.8rem;
  line-height: 1rem;
  color:#CFCED7;
  letter-spacing: 0.8px;
`,RM="/playnimgame/assets/ExternalLink_Page_1-09d6797e.png",OM="/playnimgame/assets/ExternalLink_Page_2-30d28ce0.png",DM="/playnimgame/assets/ExternalLink_Page_3-727c21ac.png",LM="/playnimgame/assets/ExternalLink_Page_4-45a1e260.png",$M="/playnimgame/assets/ExternalLink_Page_5-98a4f646.png",MM="/playnimgame/assets/ExternalLink_Page_6-702e421a.png",jM=()=>p.jsxs(PM,{children:[p.jsx("h1",{children:"We provide you with some interesting links:"}),p.jsxs("ul",{children:[p.jsx("li",{children:p.jsxs(Li,{children:[p.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://es.goobix.com/juegos-en-linea/nim/",children:p.jsx("img",{src:OM,alt:"Goobix"})}),p.jsx($i,{className:"project-title",children:"Goobix"}),p.jsx(Mi,{children:"You play against the computer. In your turn, you may only remove pieces of a single pile, the number of pieces you decide. The player who removes the last piece is the winner."})]})}),p.jsx("li",{children:p.jsxs(Li,{children:[p.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://www.archimedes-lab.org/game_nim/play_nim_game.html",children:p.jsx("img",{src:DM,alt:"Archimedes Lab"})}),p.jsx($i,{className:"project-title",children:"Archimedes' Lab Nim Game"}),p.jsx(Mi,{children:"In one move, you can remove any number of matches but only from one row. You win if you leave the last match for the computer."})]})}),p.jsx("li",{children:p.jsxs(Li,{children:[p.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://education.jlab.org/nim/s_gamepage.html",children:p.jsx("img",{src:RM,alt:"J Lab"})}),p.jsx($i,{className:"project-title",children:"The Nim Number Game"}),p.jsx(Mi,{children:"One single row of protons, and the one to get the last proton wins!"})]})}),p.jsx("li",{children:p.jsxs(Li,{children:[p.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://www.crazygames.com/game/nim-game",children:p.jsx("img",{src:LM,alt:"Crazy Games"})}),p.jsx($i,{className:"project-title",children:"Crazy Games Nim for kids"}),p.jsx(Mi,{children:"You play against the monkey. A move consists of eating cookies from a pile. The player who eats the last cookie wins."})]})}),p.jsx("li",{children:p.jsxs(Li,{children:[p.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://www.transum.org/Software/Nim/",children:p.jsx("img",{src:$M,alt:"Transum"})}),p.jsx($i,{className:"project-title",children:"Transum Nim Game for kids"}),p.jsx(Mi,{children:"Remove any number of sticks from any row by clicking on them. Whoever removes the last stick wins!"})]})}),p.jsx("li",{children:p.jsxs(Li,{children:[p.jsx("a",{target:"_blank",rel:"noreferrer",href:"http://benpyle.com/nim/",children:p.jsx("img",{src:MM,alt:"Ben Pyle"})}),p.jsx($i,{className:"project-title",children:"Ben Pyle's Nim"}),p.jsx(Mi,{children:"You can remove any number of pennies from any row at a time. You win if the computer takes the last penny."})]})})]})]}),FM=G.div`
  width: 400px;
  padding: 10px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: #B7BAD2;
  border: 1px solid #2C394E;
  border-radius: 4px;
  line-height: 3rem;
  font-family: Raleway, sans serif;
  font-size: 1rem;
  font-weight: 800;
  color: #2c394e;
`,Of=G.div`
  width: 350px;
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
  line-height: 2.5rem;

  label {
    text-transform: uppercase;
    color: #2C394E;
    font-size: 1.2rem;
    letter-spacing: 0.05rem;
    margin-bottom: 0.5rem;
  }

  input {
    padding: 5px 20px;
    line-height: 2rem;
    font-size: 1rem;
    font-weight: 200;
    letter-spacing: 0.075rem;
    color: #d4d4d4;
    background-color: #404040;
    border: 0.5px solid skyblue;
    margin-bottom: 10px;
    border-radius: 4px;

    :focus {
      border: 1px solid #9fd7ee;
    }
  }
`,UM=G.button`
  min-width: 350px;
  margin: 30px 20px;
  padding: 5px 20px;
  justify-content: center;
  line-height: 2rem;
  font-size: 1rem;
  letter-spacing: 0.05rem;
  background-color: #65627e;
  color: #f5f5f5;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  font-family: Raleway, sans serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.05rem;

  :hover {
    background-color: #484848;
  }
`,zM=G.div`
  margin: 20px 0;
  cursor: pointer;

  :hover {
    color: #666666;
  }
`,VM=G.div`
  width: 400px;
  padding: 10px;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: white;
  font-size: 1.1rem;
  font-size: 2rem;
  color: white;
  text-decoration: underline;
  cursor: pointer;
  
  :hover {
    color: green;
  }
`;function BM(){const[t,e]=b.useState({username:"",email:"",password:"",totalMatches:0,totalVictories:0}),[n,r]=b.useState(!1),i=Mc(),s=o=>{o.preventDefault(),!t.username||!t.email||!t.password?alert("Please, fill in all the fields"):(e({username:"",email:"",password:"",totalMatches:0,totalVictories:0}),dM(t),r(!0),i("/login/"))};return p.jsx("div",{children:p.jsx("div",{children:n?p.jsx("div",{children:p.jsx(VM,{children:p.jsx(Cm,{to:"/",children:"Successful registration!"})})}):p.jsxs(FM,{children:[p.jsxs("form",{id:"signup-form",onSubmit:s,children:[p.jsxs(Of,{children:[p.jsx("label",{htmlFor:"username",children:"Your user name: "}),p.jsx("input",{type:"text",value:t.username,id:"username",username:"username",placeholder:"Enter your user name",required:!0,onChange:o=>e({...t,username:o.target.value})})]}),p.jsxs(Of,{children:[p.jsx("label",{htmlFor:"email",children:"email: "}),p.jsx("input",{type:"email",value:t.email,id:"userEmail",name:"userEmail",placeholder:"Enter your email",required:!0,onChange:o=>e({...t,email:o.target.value})})]}),p.jsxs(Of,{children:[p.jsx("label",{htmlFor:"password",children:"password: "}),p.jsx("input",{type:"password",value:t.password,id:"password",name:"password",placeholder:"Enter your password",required:!0,onChange:o=>e({...t,password:o.target.value})})]}),p.jsx(UM,{type:"submit",children:"SIGN UP"})]}),p.jsx(zM,{onClick:()=>i("/login"),children:"You already have an account? Log in here!"})]})})})}const HM=()=>p.jsx(CC,{children:p.jsxs(Ab,{children:[p.jsx(iP,{}),p.jsxs(EC,{children:[p.jsx(On,{path:"/",element:p.jsx(yM,{})}),p.jsx(On,{path:"/gamerules/",element:p.jsx(SM,{})}),p.jsx(On,{path:"/ranking/",element:p.jsx(bM,{})}),p.jsx(On,{path:"/history/",element:p.jsx(NM,{})}),p.jsx(On,{path:"/external-links/",element:p.jsx(jM,{})}),p.jsx(On,{path:"/signup/",element:p.jsx(BM,{})}),p.jsx(On,{path:"/login/",element:p.jsx(s_,{})}),p.jsx(On,{path:"*",element:p.jsx("div",{children:"* * * Error 404 * * *"})})]}),p.jsx(kM,{})]})});function WM(){return p.jsx(QN,{children:p.jsx(OT,{children:p.jsx(HM,{})})})}function GM(t){return typeof t=="function"}function KM(t){const e=typeof t;return e==="function"||e==="object"&&!!t}function qM(){return typeof window<"u"&&window.document}function YM(){if(qM()){if(!KM(window.__REACT_DEVTOOLS_GLOBAL_HOOK__))return;for(const t in window.__REACT_DEVTOOLS_GLOBAL_HOOK__){if(t==="renderers"){window.__REACT_DEVTOOLS_GLOBAL_HOOK__[t]=new Map;continue}window.__REACT_DEVTOOLS_GLOBAL_HOOK__[t]=GM(window.__REACT_DEVTOOLS_GLOBAL_HOOK__[t])?Function.prototype:null}}}YM();const QM=Df.createRoot(document.getElementById("root"));QM.render(p.jsx(Wr.StrictMode,{children:p.jsx(WM,{})}));
