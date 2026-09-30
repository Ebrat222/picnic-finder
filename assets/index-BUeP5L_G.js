(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Rv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Qf={exports:{}},rl={},Yf={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ls=Symbol.for("react.element"),Pv=Symbol.for("react.portal"),xv=Symbol.for("react.fragment"),Av=Symbol.for("react.strict_mode"),Ov=Symbol.for("react.profiler"),Dv=Symbol.for("react.provider"),Lv=Symbol.for("react.context"),Mv=Symbol.for("react.forward_ref"),bv=Symbol.for("react.suspense"),Fv=Symbol.for("react.memo"),Uv=Symbol.for("react.lazy"),kd=Symbol.iterator;function jv(t){return t===null||typeof t!="object"?null:(t=kd&&t[kd]||t["@@iterator"],typeof t=="function"?t:null)}var qf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xf=Object.assign,Jf={};function Ur(t,e,n){this.props=t,this.context=e,this.refs=Jf,this.updater=n||qf}Ur.prototype.isReactComponent={};Ur.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ur.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Zf(){}Zf.prototype=Ur.prototype;function bu(t,e,n){this.props=t,this.context=e,this.refs=Jf,this.updater=n||qf}var Fu=bu.prototype=new Zf;Fu.constructor=bu;Xf(Fu,Ur.prototype);Fu.isPureReactComponent=!0;var Td=Array.isArray,ep=Object.prototype.hasOwnProperty,Uu={current:null},tp={key:!0,ref:!0,__self:!0,__source:!0};function np(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ep.call(e,r)&&!tp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ls,type:t,key:s,ref:o,props:i,_owner:Uu.current}}function zv(t,e){return{$$typeof:ls,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ju(t){return typeof t=="object"&&t!==null&&t.$$typeof===ls}function Wv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Nd=/\/+/g;function Ul(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Wv(""+t.key):e.toString(36)}function $s(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ls:case Pv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ul(o,0):r,Td(i)?(n="",t!=null&&(n=t.replace(Nd,"$&/")+"/"),$s(i,e,n,"",function(u){return u})):i!=null&&(ju(i)&&(i=zv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Nd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Td(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Ul(s,l);o+=$s(s,e,n,a,i)}else if(a=jv(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Ul(s,l++),o+=$s(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ks(t,e,n){if(t==null)return t;var r=[],i=0;return $s(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Vv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xe={current:null},Gs={transition:null},Bv={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Gs,ReactCurrentOwner:Uu};function rp(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:ks,forEach:function(t,e,n){ks(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ks(t,function(){e++}),e},toArray:function(t){return ks(t,function(e){return e})||[]},only:function(t){if(!ju(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Component=Ur;U.Fragment=xv;U.Profiler=Ov;U.PureComponent=bu;U.StrictMode=Av;U.Suspense=bv;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bv;U.act=rp;U.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Xf({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Uu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)ep.call(e,a)&&!tp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ls,type:t.type,key:i,ref:s,props:r,_owner:o}};U.createContext=function(t){return t={$$typeof:Lv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Dv,_context:t},t.Consumer=t};U.createElement=np;U.createFactory=function(t){var e=np.bind(null,t);return e.type=t,e};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:Mv,render:t}};U.isValidElement=ju;U.lazy=function(t){return{$$typeof:Uv,_payload:{_status:-1,_result:t},_init:Vv}};U.memo=function(t,e){return{$$typeof:Fv,type:t,compare:e===void 0?null:e}};U.startTransition=function(t){var e=Gs.transition;Gs.transition={};try{t()}finally{Gs.transition=e}};U.unstable_act=rp;U.useCallback=function(t,e){return xe.current.useCallback(t,e)};U.useContext=function(t){return xe.current.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t){return xe.current.useDeferredValue(t)};U.useEffect=function(t,e){return xe.current.useEffect(t,e)};U.useId=function(){return xe.current.useId()};U.useImperativeHandle=function(t,e,n){return xe.current.useImperativeHandle(t,e,n)};U.useInsertionEffect=function(t,e){return xe.current.useInsertionEffect(t,e)};U.useLayoutEffect=function(t,e){return xe.current.useLayoutEffect(t,e)};U.useMemo=function(t,e){return xe.current.useMemo(t,e)};U.useReducer=function(t,e,n){return xe.current.useReducer(t,e,n)};U.useRef=function(t){return xe.current.useRef(t)};U.useState=function(t){return xe.current.useState(t)};U.useSyncExternalStore=function(t,e,n){return xe.current.useSyncExternalStore(t,e,n)};U.useTransition=function(){return xe.current.useTransition()};U.version="18.3.1";Yf.exports=U;var j=Yf.exports;const Hv=Rv(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $v=j,Gv=Symbol.for("react.element"),Kv=Symbol.for("react.fragment"),Qv=Object.prototype.hasOwnProperty,Yv=$v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qv={key:!0,ref:!0,__self:!0,__source:!0};function ip(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Qv.call(e,r)&&!qv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Gv,type:t,key:s,ref:o,props:i,_owner:Yv.current}}rl.Fragment=Kv;rl.jsx=ip;rl.jsxs=ip;Qf.exports=rl;var m=Qf.exports,sp={exports:{}},He={},op={exports:{}},lp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(T,O){var D=T.length;T.push(O);e:for(;0<D;){var re=D-1>>>1,ce=T[re];if(0<i(ce,O))T[re]=O,T[D]=ce,D=re;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var O=T[0],D=T.pop();if(D!==O){T[0]=D;e:for(var re=0,ce=T.length,Cs=ce>>>1;re<Cs;){var kn=2*(re+1)-1,Fl=T[kn],Tn=kn+1,Is=T[Tn];if(0>i(Fl,D))Tn<ce&&0>i(Is,Fl)?(T[re]=Is,T[Tn]=D,re=Tn):(T[re]=Fl,T[kn]=D,re=kn);else if(Tn<ce&&0>i(Is,D))T[re]=Is,T[Tn]=D,re=Tn;else break e}}return O}function i(T,O){var D=T.sortIndex-O.sortIndex;return D!==0?D:T.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,d=null,h=3,_=!1,v=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=T)r(u),O.sortIndex=O.expirationTime,e(a,O);else break;O=n(u)}}function w(T){if(y=!1,g(T),!v)if(n(a)!==null)v=!0,Ml(I);else{var O=n(u);O!==null&&bl(w,O.startTime-T)}}function I(T,O){v=!1,y&&(y=!1,p(P),P=-1),_=!0;var D=h;try{for(g(O),d=n(a);d!==null&&(!(d.expirationTime>O)||T&&!Je());){var re=d.callback;if(typeof re=="function"){d.callback=null,h=d.priorityLevel;var ce=re(d.expirationTime<=O);O=t.unstable_now(),typeof ce=="function"?d.callback=ce:d===n(a)&&r(a),g(O)}else r(a);d=n(a)}if(d!==null)var Cs=!0;else{var kn=n(u);kn!==null&&bl(w,kn.startTime-O),Cs=!1}return Cs}finally{d=null,h=D,_=!1}}var N=!1,R=null,P=-1,K=5,b=-1;function Je(){return!(t.unstable_now()-b<K)}function Yr(){if(R!==null){var T=t.unstable_now();b=T;var O=!0;try{O=R(!0,T)}finally{O?qr():(N=!1,R=null)}}else N=!1}var qr;if(typeof f=="function")qr=function(){f(Yr)};else if(typeof MessageChannel<"u"){var Id=new MessageChannel,Nv=Id.port2;Id.port1.onmessage=Yr,qr=function(){Nv.postMessage(null)}}else qr=function(){S(Yr,0)};function Ml(T){R=T,N||(N=!0,qr())}function bl(T,O){P=S(function(){T(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,Ml(I))},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<T?Math.floor(1e3/T):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(T){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var D=h;h=O;try{return T()}finally{h=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(T,O){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var D=h;h=T;try{return O()}finally{h=D}},t.unstable_scheduleCallback=function(T,O,D){var re=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?re+D:re):D=re,T){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=D+ce,T={id:c++,callback:O,priorityLevel:T,startTime:D,expirationTime:ce,sortIndex:-1},D>re?(T.sortIndex=D,e(u,T),n(a)===null&&T===n(u)&&(y?(p(P),P=-1):y=!0,bl(w,D-re))):(T.sortIndex=ce,e(a,T),v||_||(v=!0,Ml(I))),T},t.unstable_shouldYield=Je,t.unstable_wrapCallback=function(T){var O=h;return function(){var D=h;h=O;try{return T.apply(this,arguments)}finally{h=D}}}})(lp);op.exports=lp;var Xv=op.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jv=j,Be=Xv;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ap=new Set,xi={};function Qn(t,e){kr(t,e),kr(t+"Capture",e)}function kr(t,e){for(xi[t]=e,t=0;t<e.length;t++)ap.add(e[t])}var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ia=Object.prototype.hasOwnProperty,Zv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rd={},Pd={};function ey(t){return Ia.call(Pd,t)?!0:Ia.call(Rd,t)?!1:Zv.test(t)?Pd[t]=!0:(Rd[t]=!0,!1)}function ty(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ny(t,e,n,r){if(e===null||typeof e>"u"||ty(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ae(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ve[t]=new Ae(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ve[e]=new Ae(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ve[t]=new Ae(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ve[t]=new Ae(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ve[t]=new Ae(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ve[t]=new Ae(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ve[t]=new Ae(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ve[t]=new Ae(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ve[t]=new Ae(t,5,!1,t.toLowerCase(),null,!1,!1)});var zu=/[\-:]([a-z])/g;function Wu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(zu,Wu);ve[e]=new Ae(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(zu,Wu);ve[e]=new Ae(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(zu,Wu);ve[e]=new Ae(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ve[t]=new Ae(t,1,!1,t.toLowerCase(),null,!1,!1)});ve.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ve[t]=new Ae(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vu(t,e,n,r){var i=ve.hasOwnProperty(e)?ve[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ny(e,n,i,r)&&(n=null),r||i===null?ey(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jt=Jv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ts=Symbol.for("react.element"),er=Symbol.for("react.portal"),tr=Symbol.for("react.fragment"),Bu=Symbol.for("react.strict_mode"),ka=Symbol.for("react.profiler"),up=Symbol.for("react.provider"),cp=Symbol.for("react.context"),Hu=Symbol.for("react.forward_ref"),Ta=Symbol.for("react.suspense"),Na=Symbol.for("react.suspense_list"),$u=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy"),dp=Symbol.for("react.offscreen"),xd=Symbol.iterator;function Xr(t){return t===null||typeof t!="object"?null:(t=xd&&t[xd]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Object.assign,jl;function ui(t){if(jl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);jl=e&&e[1]||""}return`
`+jl+t}var zl=!1;function Wl(t,e){if(!t||zl)return"";zl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{zl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ui(t):""}function ry(t){switch(t.tag){case 5:return ui(t.type);case 16:return ui("Lazy");case 13:return ui("Suspense");case 19:return ui("SuspenseList");case 0:case 2:case 15:return t=Wl(t.type,!1),t;case 11:return t=Wl(t.type.render,!1),t;case 1:return t=Wl(t.type,!0),t;default:return""}}function Ra(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case tr:return"Fragment";case er:return"Portal";case ka:return"Profiler";case Bu:return"StrictMode";case Ta:return"Suspense";case Na:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cp:return(t.displayName||"Context")+".Consumer";case up:return(t._context.displayName||"Context")+".Provider";case Hu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $u:return e=t.displayName||null,e!==null?e:Ra(t.type)||"Memo";case Ht:e=t._payload,t=t._init;try{return Ra(t(e))}catch{}}return null}function iy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ra(e);case 8:return e===Bu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function hp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sy(t){var e=hp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ns(t){t._valueTracker||(t._valueTracker=sy(t))}function fp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=hp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function uo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Pa(t,e){var n=e.checked;return ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ad(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=mn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function pp(t,e){e=e.checked,e!=null&&Vu(t,"checked",e,!1)}function xa(t,e){pp(t,e);var n=mn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Aa(t,e.type,n):e.hasOwnProperty("defaultValue")&&Aa(t,e.type,mn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Od(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Aa(t,e,n){(e!=="number"||uo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ci=Array.isArray;function pr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+mn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Oa(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Dd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(ci(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mn(n)}}function mp(t,e){var n=mn(e.value),r=mn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ld(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Da(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Rs,_p=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Rs=Rs||document.createElement("div"),Rs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Rs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ai(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var mi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oy=["Webkit","ms","Moz","O"];Object.keys(mi).forEach(function(t){oy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),mi[e]=mi[t]})});function vp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||mi.hasOwnProperty(t)&&mi[t]?(""+e).trim():e+"px"}function yp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=vp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ly=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function La(t,e){if(e){if(ly[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function Ma(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ba=null;function Gu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fa=null,mr=null,gr=null;function Md(t){if(t=cs(t)){if(typeof Fa!="function")throw Error(E(280));var e=t.stateNode;e&&(e=al(e),Fa(t.stateNode,t.type,e))}}function wp(t){mr?gr?gr.push(t):gr=[t]:mr=t}function Ep(){if(mr){var t=mr,e=gr;if(gr=mr=null,Md(t),e)for(t=0;t<e.length;t++)Md(e[t])}}function Sp(t,e){return t(e)}function Cp(){}var Vl=!1;function Ip(t,e,n){if(Vl)return t(e,n);Vl=!0;try{return Sp(t,e,n)}finally{Vl=!1,(mr!==null||gr!==null)&&(Cp(),Ep())}}function Oi(t,e){var n=t.stateNode;if(n===null)return null;var r=al(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var Ua=!1;if(xt)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){Ua=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{Ua=!1}function ay(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var gi=!1,co=null,ho=!1,ja=null,uy={onError:function(t){gi=!0,co=t}};function cy(t,e,n,r,i,s,o,l,a){gi=!1,co=null,ay.apply(uy,arguments)}function dy(t,e,n,r,i,s,o,l,a){if(cy.apply(this,arguments),gi){if(gi){var u=co;gi=!1,co=null}else throw Error(E(198));ho||(ho=!0,ja=u)}}function Yn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function kp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bd(t){if(Yn(t)!==t)throw Error(E(188))}function hy(t){var e=t.alternate;if(!e){if(e=Yn(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return bd(i),t;if(s===r)return bd(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function Tp(t){return t=hy(t),t!==null?Np(t):null}function Np(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Np(t);if(e!==null)return e;t=t.sibling}return null}var Rp=Be.unstable_scheduleCallback,Fd=Be.unstable_cancelCallback,fy=Be.unstable_shouldYield,py=Be.unstable_requestPaint,ie=Be.unstable_now,my=Be.unstable_getCurrentPriorityLevel,Ku=Be.unstable_ImmediatePriority,Pp=Be.unstable_UserBlockingPriority,fo=Be.unstable_NormalPriority,gy=Be.unstable_LowPriority,xp=Be.unstable_IdlePriority,il=null,pt=null;function _y(t){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(il,t,void 0,(t.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:wy,vy=Math.log,yy=Math.LN2;function wy(t){return t>>>=0,t===0?32:31-(vy(t)/yy|0)|0}var Ps=64,xs=4194304;function di(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function po(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=di(l):(s&=o,s!==0&&(r=di(s)))}else o=n&~i,o!==0?r=di(o):s!==0&&(r=di(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ot(e),i=1<<n,r|=t[n],e&=~i;return r}function Ey(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sy(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ot(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Ey(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function za(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ap(){var t=Ps;return Ps<<=1,!(Ps&4194240)&&(Ps=64),t}function Bl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function as(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ot(e),t[e]=n}function Cy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ot(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Qu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ot(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var V=0;function Op(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Dp,Yu,Lp,Mp,bp,Wa=!1,As=[],en=null,tn=null,nn=null,Di=new Map,Li=new Map,Gt=[],Iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ud(t,e){switch(t){case"focusin":case"focusout":en=null;break;case"dragenter":case"dragleave":tn=null;break;case"mouseover":case"mouseout":nn=null;break;case"pointerover":case"pointerout":Di.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Li.delete(e.pointerId)}}function Zr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=cs(e),e!==null&&Yu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ky(t,e,n,r,i){switch(e){case"focusin":return en=Zr(en,t,e,n,r,i),!0;case"dragenter":return tn=Zr(tn,t,e,n,r,i),!0;case"mouseover":return nn=Zr(nn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Di.set(s,Zr(Di.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Li.set(s,Zr(Li.get(s)||null,t,e,n,r,i)),!0}return!1}function Fp(t){var e=An(t.target);if(e!==null){var n=Yn(e);if(n!==null){if(e=n.tag,e===13){if(e=kp(n),e!==null){t.blockedOn=e,bp(t.priority,function(){Lp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ks(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Va(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ba=r,n.target.dispatchEvent(r),ba=null}else return e=cs(n),e!==null&&Yu(e),t.blockedOn=n,!1;e.shift()}return!0}function jd(t,e,n){Ks(t)&&n.delete(e)}function Ty(){Wa=!1,en!==null&&Ks(en)&&(en=null),tn!==null&&Ks(tn)&&(tn=null),nn!==null&&Ks(nn)&&(nn=null),Di.forEach(jd),Li.forEach(jd)}function ei(t,e){t.blockedOn===e&&(t.blockedOn=null,Wa||(Wa=!0,Be.unstable_scheduleCallback(Be.unstable_NormalPriority,Ty)))}function Mi(t){function e(i){return ei(i,t)}if(0<As.length){ei(As[0],t);for(var n=1;n<As.length;n++){var r=As[n];r.blockedOn===t&&(r.blockedOn=null)}}for(en!==null&&ei(en,t),tn!==null&&ei(tn,t),nn!==null&&ei(nn,t),Di.forEach(e),Li.forEach(e),n=0;n<Gt.length;n++)r=Gt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Gt.length&&(n=Gt[0],n.blockedOn===null);)Fp(n),n.blockedOn===null&&Gt.shift()}var _r=jt.ReactCurrentBatchConfig,mo=!0;function Ny(t,e,n,r){var i=V,s=_r.transition;_r.transition=null;try{V=1,qu(t,e,n,r)}finally{V=i,_r.transition=s}}function Ry(t,e,n,r){var i=V,s=_r.transition;_r.transition=null;try{V=4,qu(t,e,n,r)}finally{V=i,_r.transition=s}}function qu(t,e,n,r){if(mo){var i=Va(t,e,n,r);if(i===null)Zl(t,e,r,go,n),Ud(t,r);else if(ky(i,t,e,n,r))r.stopPropagation();else if(Ud(t,r),e&4&&-1<Iy.indexOf(t)){for(;i!==null;){var s=cs(i);if(s!==null&&Dp(s),s=Va(t,e,n,r),s===null&&Zl(t,e,r,go,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Zl(t,e,r,null,n)}}var go=null;function Va(t,e,n,r){if(go=null,t=Gu(r),t=An(t),t!==null)if(e=Yn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=kp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return go=t,null}function Up(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(my()){case Ku:return 1;case Pp:return 4;case fo:case gy:return 16;case xp:return 536870912;default:return 16}default:return 16}}var Jt=null,Xu=null,Qs=null;function jp(){if(Qs)return Qs;var t,e=Xu,n=e.length,r,i="value"in Jt?Jt.value:Jt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Qs=i.slice(t,1<r?1-r:void 0)}function Ys(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Os(){return!0}function zd(){return!1}function $e(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Os:zd,this.isPropagationStopped=zd,this}return ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Os)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Os)},persist:function(){},isPersistent:Os}),e}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ju=$e(jr),us=ee({},jr,{view:0,detail:0}),Py=$e(us),Hl,$l,ti,sl=ee({},us,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ti&&(ti&&t.type==="mousemove"?(Hl=t.screenX-ti.screenX,$l=t.screenY-ti.screenY):$l=Hl=0,ti=t),Hl)},movementY:function(t){return"movementY"in t?t.movementY:$l}}),Wd=$e(sl),xy=ee({},sl,{dataTransfer:0}),Ay=$e(xy),Oy=ee({},us,{relatedTarget:0}),Gl=$e(Oy),Dy=ee({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ly=$e(Dy),My=ee({},jr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),by=$e(My),Fy=ee({},jr,{data:0}),Vd=$e(Fy),Uy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=zy[t])?!!e[t]:!1}function Zu(){return Wy}var Vy=ee({},us,{key:function(t){if(t.key){var e=Uy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ys(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zu,charCode:function(t){return t.type==="keypress"?Ys(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ys(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),By=$e(Vy),Hy=ee({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bd=$e(Hy),$y=ee({},us,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zu}),Gy=$e($y),Ky=ee({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qy=$e(Ky),Yy=ee({},sl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qy=$e(Yy),Xy=[9,13,27,32],ec=xt&&"CompositionEvent"in window,_i=null;xt&&"documentMode"in document&&(_i=document.documentMode);var Jy=xt&&"TextEvent"in window&&!_i,zp=xt&&(!ec||_i&&8<_i&&11>=_i),Hd=" ",$d=!1;function Wp(t,e){switch(t){case"keyup":return Xy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var nr=!1;function Zy(t,e){switch(t){case"compositionend":return Vp(e);case"keypress":return e.which!==32?null:($d=!0,Hd);case"textInput":return t=e.data,t===Hd&&$d?null:t;default:return null}}function ew(t,e){if(nr)return t==="compositionend"||!ec&&Wp(t,e)?(t=jp(),Qs=Xu=Jt=null,nr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zp&&e.locale!=="ko"?null:e.data;default:return null}}var tw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!tw[t.type]:e==="textarea"}function Bp(t,e,n,r){wp(r),e=_o(e,"onChange"),0<e.length&&(n=new Ju("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var vi=null,bi=null;function nw(t){em(t,0)}function ol(t){var e=sr(t);if(fp(e))return t}function rw(t,e){if(t==="change")return e}var Hp=!1;if(xt){var Kl;if(xt){var Ql="oninput"in document;if(!Ql){var Kd=document.createElement("div");Kd.setAttribute("oninput","return;"),Ql=typeof Kd.oninput=="function"}Kl=Ql}else Kl=!1;Hp=Kl&&(!document.documentMode||9<document.documentMode)}function Qd(){vi&&(vi.detachEvent("onpropertychange",$p),bi=vi=null)}function $p(t){if(t.propertyName==="value"&&ol(bi)){var e=[];Bp(e,bi,t,Gu(t)),Ip(nw,e)}}function iw(t,e,n){t==="focusin"?(Qd(),vi=e,bi=n,vi.attachEvent("onpropertychange",$p)):t==="focusout"&&Qd()}function sw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ol(bi)}function ow(t,e){if(t==="click")return ol(e)}function lw(t,e){if(t==="input"||t==="change")return ol(e)}function aw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ut=typeof Object.is=="function"?Object.is:aw;function Fi(t,e){if(ut(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ia.call(e,i)||!ut(t[i],e[i]))return!1}return!0}function Yd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qd(t,e){var n=Yd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yd(n)}}function Gp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Kp(){for(var t=window,e=uo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=uo(t.document)}return e}function tc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uw(t){var e=Kp(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Gp(n.ownerDocument.documentElement,n)){if(r!==null&&tc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=qd(n,s);var o=qd(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cw=xt&&"documentMode"in document&&11>=document.documentMode,rr=null,Ba=null,yi=null,Ha=!1;function Xd(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ha||rr==null||rr!==uo(r)||(r=rr,"selectionStart"in r&&tc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yi&&Fi(yi,r)||(yi=r,r=_o(Ba,"onSelect"),0<r.length&&(e=new Ju("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=rr)))}function Ds(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ir={animationend:Ds("Animation","AnimationEnd"),animationiteration:Ds("Animation","AnimationIteration"),animationstart:Ds("Animation","AnimationStart"),transitionend:Ds("Transition","TransitionEnd")},Yl={},Qp={};xt&&(Qp=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function ll(t){if(Yl[t])return Yl[t];if(!ir[t])return t;var e=ir[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Qp)return Yl[t]=e[n];return t}var Yp=ll("animationend"),qp=ll("animationiteration"),Xp=ll("animationstart"),Jp=ll("transitionend"),Zp=new Map,Jd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wn(t,e){Zp.set(t,e),Qn(e,[t])}for(var ql=0;ql<Jd.length;ql++){var Xl=Jd[ql],dw=Xl.toLowerCase(),hw=Xl[0].toUpperCase()+Xl.slice(1);wn(dw,"on"+hw)}wn(Yp,"onAnimationEnd");wn(qp,"onAnimationIteration");wn(Xp,"onAnimationStart");wn("dblclick","onDoubleClick");wn("focusin","onFocus");wn("focusout","onBlur");wn(Jp,"onTransitionEnd");kr("onMouseEnter",["mouseout","mouseover"]);kr("onMouseLeave",["mouseout","mouseover"]);kr("onPointerEnter",["pointerout","pointerover"]);kr("onPointerLeave",["pointerout","pointerover"]);Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fw=new Set("cancel close invalid load scroll toggle".split(" ").concat(hi));function Zd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,dy(r,e,void 0,t),t.currentTarget=null}function em(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Zd(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Zd(i,l,u),s=a}}}if(ho)throw t=ja,ho=!1,ja=null,t}function Q(t,e){var n=e[Ya];n===void 0&&(n=e[Ya]=new Set);var r=t+"__bubble";n.has(r)||(tm(e,t,2,!1),n.add(r))}function Jl(t,e,n){var r=0;e&&(r|=4),tm(n,t,r,e)}var Ls="_reactListening"+Math.random().toString(36).slice(2);function Ui(t){if(!t[Ls]){t[Ls]=!0,ap.forEach(function(n){n!=="selectionchange"&&(fw.has(n)||Jl(n,!1,t),Jl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ls]||(e[Ls]=!0,Jl("selectionchange",!1,e))}}function tm(t,e,n,r){switch(Up(e)){case 1:var i=Ny;break;case 4:i=Ry;break;default:i=qu}n=i.bind(null,e,n,t),i=void 0,!Ua||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Zl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=An(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Ip(function(){var u=s,c=Gu(n),d=[];e:{var h=Zp.get(t);if(h!==void 0){var _=Ju,v=t;switch(t){case"keypress":if(Ys(n)===0)break e;case"keydown":case"keyup":_=By;break;case"focusin":v="focus",_=Gl;break;case"focusout":v="blur",_=Gl;break;case"beforeblur":case"afterblur":_=Gl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Ay;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Gy;break;case Yp:case qp:case Xp:_=Ly;break;case Jp:_=Qy;break;case"scroll":_=Py;break;case"wheel":_=qy;break;case"copy":case"cut":case"paste":_=by;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Bd}var y=(e&4)!==0,S=!y&&t==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var f=u,g;f!==null;){g=f;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,p!==null&&(w=Oi(f,p),w!=null&&y.push(ji(f,w,g)))),S)break;f=f.return}0<y.length&&(h=new _(h,v,null,n,c),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",h&&n!==ba&&(v=n.relatedTarget||n.fromElement)&&(An(v)||v[At]))break e;if((_||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=u,v=v?An(v):null,v!==null&&(S=Yn(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=u),_!==v)){if(y=Wd,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=Bd,w="onPointerLeave",p="onPointerEnter",f="pointer"),S=_==null?h:sr(_),g=v==null?h:sr(v),h=new y(w,f+"leave",_,n,c),h.target=S,h.relatedTarget=g,w=null,An(c)===u&&(y=new y(p,f+"enter",v,n,c),y.target=g,y.relatedTarget=S,w=y),S=w,_&&v)t:{for(y=_,p=v,f=0,g=y;g;g=Jn(g))f++;for(g=0,w=p;w;w=Jn(w))g++;for(;0<f-g;)y=Jn(y),f--;for(;0<g-f;)p=Jn(p),g--;for(;f--;){if(y===p||p!==null&&y===p.alternate)break t;y=Jn(y),p=Jn(p)}y=null}else y=null;_!==null&&eh(d,h,_,y,!1),v!==null&&S!==null&&eh(d,S,v,y,!0)}}e:{if(h=u?sr(u):window,_=h.nodeName&&h.nodeName.toLowerCase(),_==="select"||_==="input"&&h.type==="file")var I=rw;else if(Gd(h))if(Hp)I=lw;else{I=sw;var N=iw}else(_=h.nodeName)&&_.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=ow);if(I&&(I=I(t,u))){Bp(d,I,n,c);break e}N&&N(t,h,u),t==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&Aa(h,"number",h.value)}switch(N=u?sr(u):window,t){case"focusin":(Gd(N)||N.contentEditable==="true")&&(rr=N,Ba=u,yi=null);break;case"focusout":yi=Ba=rr=null;break;case"mousedown":Ha=!0;break;case"contextmenu":case"mouseup":case"dragend":Ha=!1,Xd(d,n,c);break;case"selectionchange":if(cw)break;case"keydown":case"keyup":Xd(d,n,c)}var R;if(ec)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else nr?Wp(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(zp&&n.locale!=="ko"&&(nr||P!=="onCompositionStart"?P==="onCompositionEnd"&&nr&&(R=jp()):(Jt=c,Xu="value"in Jt?Jt.value:Jt.textContent,nr=!0)),N=_o(u,P),0<N.length&&(P=new Vd(P,t,null,n,c),d.push({event:P,listeners:N}),R?P.data=R:(R=Vp(n),R!==null&&(P.data=R)))),(R=Jy?Zy(t,n):ew(t,n))&&(u=_o(u,"onBeforeInput"),0<u.length&&(c=new Vd("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=R))}em(d,e)})}function ji(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _o(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Oi(t,n),s!=null&&r.unshift(ji(t,s,i)),s=Oi(t,e),s!=null&&r.push(ji(t,s,i))),t=t.return}return r}function Jn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function eh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Oi(n,s),a!=null&&o.unshift(ji(n,a,l))):i||(a=Oi(n,s),a!=null&&o.push(ji(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var pw=/\r\n?/g,mw=/\u0000|\uFFFD/g;function th(t){return(typeof t=="string"?t:""+t).replace(pw,`
`).replace(mw,"")}function Ms(t,e,n){if(e=th(e),th(t)!==e&&n)throw Error(E(425))}function vo(){}var $a=null,Ga=null;function Ka(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qa=typeof setTimeout=="function"?setTimeout:void 0,gw=typeof clearTimeout=="function"?clearTimeout:void 0,nh=typeof Promise=="function"?Promise:void 0,_w=typeof queueMicrotask=="function"?queueMicrotask:typeof nh<"u"?function(t){return nh.resolve(null).then(t).catch(vw)}:Qa;function vw(t){setTimeout(function(){throw t})}function ea(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Mi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Mi(e)}function rn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function rh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zr=Math.random().toString(36).slice(2),ft="__reactFiber$"+zr,zi="__reactProps$"+zr,At="__reactContainer$"+zr,Ya="__reactEvents$"+zr,yw="__reactListeners$"+zr,ww="__reactHandles$"+zr;function An(t){var e=t[ft];if(e)return e;for(var n=t.parentNode;n;){if(e=n[At]||n[ft]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=rh(t);t!==null;){if(n=t[ft])return n;t=rh(t)}return e}t=n,n=t.parentNode}return null}function cs(t){return t=t[ft]||t[At],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function sr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function al(t){return t[zi]||null}var qa=[],or=-1;function En(t){return{current:t}}function q(t){0>or||(t.current=qa[or],qa[or]=null,or--)}function G(t,e){or++,qa[or]=t.current,t.current=e}var gn={},Ce=En(gn),Me=En(!1),Un=gn;function Tr(t,e){var n=t.type.contextTypes;if(!n)return gn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function be(t){return t=t.childContextTypes,t!=null}function yo(){q(Me),q(Ce)}function ih(t,e,n){if(Ce.current!==gn)throw Error(E(168));G(Ce,e),G(Me,n)}function nm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,iy(t)||"Unknown",i));return ee({},n,r)}function wo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gn,Un=Ce.current,G(Ce,t),G(Me,Me.current),!0}function sh(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=nm(t,e,Un),r.__reactInternalMemoizedMergedChildContext=t,q(Me),q(Ce),G(Ce,t)):q(Me),G(Me,n)}var wt=null,ul=!1,ta=!1;function rm(t){wt===null?wt=[t]:wt.push(t)}function Ew(t){ul=!0,rm(t)}function Sn(){if(!ta&&wt!==null){ta=!0;var t=0,e=V;try{var n=wt;for(V=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}wt=null,ul=!1}catch(i){throw wt!==null&&(wt=wt.slice(t+1)),Rp(Ku,Sn),i}finally{V=e,ta=!1}}return null}var lr=[],ar=0,Eo=null,So=0,Ge=[],Ke=0,jn=null,Et=1,St="";function Nn(t,e){lr[ar++]=So,lr[ar++]=Eo,Eo=t,So=e}function im(t,e,n){Ge[Ke++]=Et,Ge[Ke++]=St,Ge[Ke++]=jn,jn=t;var r=Et;t=St;var i=32-ot(r)-1;r&=~(1<<i),n+=1;var s=32-ot(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Et=1<<32-ot(e)+i|n<<i|r,St=s+t}else Et=1<<s|n<<i|r,St=t}function nc(t){t.return!==null&&(Nn(t,1),im(t,1,0))}function rc(t){for(;t===Eo;)Eo=lr[--ar],lr[ar]=null,So=lr[--ar],lr[ar]=null;for(;t===jn;)jn=Ge[--Ke],Ge[Ke]=null,St=Ge[--Ke],Ge[Ke]=null,Et=Ge[--Ke],Ge[Ke]=null}var Ve=null,We=null,X=!1,nt=null;function sm(t,e){var n=Qe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function oh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ve=t,We=rn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ve=t,We=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=jn!==null?{id:Et,overflow:St}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ve=t,We=null,!0):!1;default:return!1}}function Xa(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ja(t){if(X){var e=We;if(e){var n=e;if(!oh(t,e)){if(Xa(t))throw Error(E(418));e=rn(n.nextSibling);var r=Ve;e&&oh(t,e)?sm(r,n):(t.flags=t.flags&-4097|2,X=!1,Ve=t)}}else{if(Xa(t))throw Error(E(418));t.flags=t.flags&-4097|2,X=!1,Ve=t}}}function lh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ve=t}function bs(t){if(t!==Ve)return!1;if(!X)return lh(t),X=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ka(t.type,t.memoizedProps)),e&&(e=We)){if(Xa(t))throw om(),Error(E(418));for(;e;)sm(t,e),e=rn(e.nextSibling)}if(lh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){We=rn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}We=null}}else We=Ve?rn(t.stateNode.nextSibling):null;return!0}function om(){for(var t=We;t;)t=rn(t.nextSibling)}function Nr(){We=Ve=null,X=!1}function ic(t){nt===null?nt=[t]:nt.push(t)}var Sw=jt.ReactCurrentBatchConfig;function ni(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function Fs(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ah(t){var e=t._init;return e(t._payload)}function lm(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=an(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,g,w){return f===null||f.tag!==6?(f=aa(g,p.mode,w),f.return=p,f):(f=i(f,g),f.return=p,f)}function a(p,f,g,w){var I=g.type;return I===tr?c(p,f,g.props.children,w,g.key):f!==null&&(f.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Ht&&ah(I)===f.type)?(w=i(f,g.props),w.ref=ni(p,f,g),w.return=p,w):(w=no(g.type,g.key,g.props,null,p.mode,w),w.ref=ni(p,f,g),w.return=p,w)}function u(p,f,g,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=ua(g,p.mode,w),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,w,I){return f===null||f.tag!==7?(f=Fn(g,p.mode,w,I),f.return=p,f):(f=i(f,g),f.return=p,f)}function d(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=aa(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ts:return g=no(f.type,f.key,f.props,null,p.mode,g),g.ref=ni(p,null,f),g.return=p,g;case er:return f=ua(f,p.mode,g),f.return=p,f;case Ht:var w=f._init;return d(p,w(f._payload),g)}if(ci(f)||Xr(f))return f=Fn(f,p.mode,g,null),f.return=p,f;Fs(p,f)}return null}function h(p,f,g,w){var I=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return I!==null?null:l(p,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ts:return g.key===I?a(p,f,g,w):null;case er:return g.key===I?u(p,f,g,w):null;case Ht:return I=g._init,h(p,f,I(g._payload),w)}if(ci(g)||Xr(g))return I!==null?null:c(p,f,g,w,null);Fs(p,g)}return null}function _(p,f,g,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(g)||null,l(f,p,""+w,I);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ts:return p=p.get(w.key===null?g:w.key)||null,a(f,p,w,I);case er:return p=p.get(w.key===null?g:w.key)||null,u(f,p,w,I);case Ht:var N=w._init;return _(p,f,g,N(w._payload),I)}if(ci(w)||Xr(w))return p=p.get(g)||null,c(f,p,w,I,null);Fs(f,w)}return null}function v(p,f,g,w){for(var I=null,N=null,R=f,P=f=0,K=null;R!==null&&P<g.length;P++){R.index>P?(K=R,R=null):K=R.sibling;var b=h(p,R,g[P],w);if(b===null){R===null&&(R=K);break}t&&R&&b.alternate===null&&e(p,R),f=s(b,f,P),N===null?I=b:N.sibling=b,N=b,R=K}if(P===g.length)return n(p,R),X&&Nn(p,P),I;if(R===null){for(;P<g.length;P++)R=d(p,g[P],w),R!==null&&(f=s(R,f,P),N===null?I=R:N.sibling=R,N=R);return X&&Nn(p,P),I}for(R=r(p,R);P<g.length;P++)K=_(R,p,P,g[P],w),K!==null&&(t&&K.alternate!==null&&R.delete(K.key===null?P:K.key),f=s(K,f,P),N===null?I=K:N.sibling=K,N=K);return t&&R.forEach(function(Je){return e(p,Je)}),X&&Nn(p,P),I}function y(p,f,g,w){var I=Xr(g);if(typeof I!="function")throw Error(E(150));if(g=I.call(g),g==null)throw Error(E(151));for(var N=I=null,R=f,P=f=0,K=null,b=g.next();R!==null&&!b.done;P++,b=g.next()){R.index>P?(K=R,R=null):K=R.sibling;var Je=h(p,R,b.value,w);if(Je===null){R===null&&(R=K);break}t&&R&&Je.alternate===null&&e(p,R),f=s(Je,f,P),N===null?I=Je:N.sibling=Je,N=Je,R=K}if(b.done)return n(p,R),X&&Nn(p,P),I;if(R===null){for(;!b.done;P++,b=g.next())b=d(p,b.value,w),b!==null&&(f=s(b,f,P),N===null?I=b:N.sibling=b,N=b);return X&&Nn(p,P),I}for(R=r(p,R);!b.done;P++,b=g.next())b=_(R,p,P,b.value,w),b!==null&&(t&&b.alternate!==null&&R.delete(b.key===null?P:b.key),f=s(b,f,P),N===null?I=b:N.sibling=b,N=b);return t&&R.forEach(function(Yr){return e(p,Yr)}),X&&Nn(p,P),I}function S(p,f,g,w){if(typeof g=="object"&&g!==null&&g.type===tr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ts:e:{for(var I=g.key,N=f;N!==null;){if(N.key===I){if(I=g.type,I===tr){if(N.tag===7){n(p,N.sibling),f=i(N,g.props.children),f.return=p,p=f;break e}}else if(N.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Ht&&ah(I)===N.type){n(p,N.sibling),f=i(N,g.props),f.ref=ni(p,N,g),f.return=p,p=f;break e}n(p,N);break}else e(p,N);N=N.sibling}g.type===tr?(f=Fn(g.props.children,p.mode,w,g.key),f.return=p,p=f):(w=no(g.type,g.key,g.props,null,p.mode,w),w.ref=ni(p,f,g),w.return=p,p=w)}return o(p);case er:e:{for(N=g.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=ua(g,p.mode,w),f.return=p,p=f}return o(p);case Ht:return N=g._init,S(p,f,N(g._payload),w)}if(ci(g))return v(p,f,g,w);if(Xr(g))return y(p,f,g,w);Fs(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=aa(g,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return S}var Rr=lm(!0),am=lm(!1),Co=En(null),Io=null,ur=null,sc=null;function oc(){sc=ur=Io=null}function lc(t){var e=Co.current;q(Co),t._currentValue=e}function Za(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function vr(t,e){Io=t,sc=ur=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(De=!0),t.firstContext=null)}function qe(t){var e=t._currentValue;if(sc!==t)if(t={context:t,memoizedValue:e,next:null},ur===null){if(Io===null)throw Error(E(308));ur=t,Io.dependencies={lanes:0,firstContext:t}}else ur=ur.next=t;return e}var On=null;function ac(t){On===null?On=[t]:On.push(t)}function um(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ac(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ot(t,r)}function Ot(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $t=!1;function uc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function sn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ot(t,n)}return i=r.interleaved,i===null?(e.next=e,ac(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ot(t,n)}function qs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qu(t,n)}}function uh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ko(t,e,n,r){var i=t.updateQueue;$t=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,c=u=a=null,l=s;do{var h=l.lane,_=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,y=l;switch(h=e,_=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(_,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(_,d,h):v,h==null)break e;d=ee({},d,h);break e;case 2:$t=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else _={eventTime:_,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=_,a=d):c=c.next=_,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Wn|=o,t.lanes=o,t.memoizedState=d}}function ch(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var ds={},mt=En(ds),Wi=En(ds),Vi=En(ds);function Dn(t){if(t===ds)throw Error(E(174));return t}function cc(t,e){switch(G(Vi,e),G(Wi,t),G(mt,ds),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Da(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Da(e,t)}q(mt),G(mt,e)}function Pr(){q(mt),q(Wi),q(Vi)}function dm(t){Dn(Vi.current);var e=Dn(mt.current),n=Da(e,t.type);e!==n&&(G(Wi,t),G(mt,n))}function dc(t){Wi.current===t&&(q(mt),q(Wi))}var J=En(0);function To(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var na=[];function hc(){for(var t=0;t<na.length;t++)na[t]._workInProgressVersionPrimary=null;na.length=0}var Xs=jt.ReactCurrentDispatcher,ra=jt.ReactCurrentBatchConfig,zn=0,Z=null,oe=null,he=null,No=!1,wi=!1,Bi=0,Cw=0;function ye(){throw Error(E(321))}function fc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ut(t[n],e[n]))return!1;return!0}function pc(t,e,n,r,i,s){if(zn=s,Z=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xs.current=t===null||t.memoizedState===null?Nw:Rw,t=n(r,i),wi){s=0;do{if(wi=!1,Bi=0,25<=s)throw Error(E(301));s+=1,he=oe=null,e.updateQueue=null,Xs.current=Pw,t=n(r,i)}while(wi)}if(Xs.current=Ro,e=oe!==null&&oe.next!==null,zn=0,he=oe=Z=null,No=!1,e)throw Error(E(300));return t}function mc(){var t=Bi!==0;return Bi=0,t}function ht(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?Z.memoizedState=he=t:he=he.next=t,he}function Xe(){if(oe===null){var t=Z.alternate;t=t!==null?t.memoizedState:null}else t=oe.next;var e=he===null?Z.memoizedState:he.next;if(e!==null)he=e,oe=t;else{if(t===null)throw Error(E(310));oe=t,t={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},he===null?Z.memoizedState=he=t:he=he.next=t}return he}function Hi(t,e){return typeof e=="function"?e(t):e}function ia(t){var e=Xe(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((zn&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,Z.lanes|=c,Wn|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,ut(r,e.memoizedState)||(De=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Z.lanes|=s,Wn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sa(t){var e=Xe(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ut(s,e.memoizedState)||(De=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function hm(){}function fm(t,e){var n=Z,r=Xe(),i=e(),s=!ut(r.memoizedState,i);if(s&&(r.memoizedState=i,De=!0),r=r.queue,gc(gm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,$i(9,mm.bind(null,n,r,i,e),void 0,null),me===null)throw Error(E(349));zn&30||pm(n,e,i)}return i}function pm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function mm(t,e,n,r){e.value=n,e.getSnapshot=r,_m(e)&&vm(t)}function gm(t,e,n){return n(function(){_m(e)&&vm(t)})}function _m(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ut(t,n)}catch{return!0}}function vm(t){var e=Ot(t,1);e!==null&&lt(e,t,1,-1)}function dh(t){var e=ht();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:t},e.queue=t,t=t.dispatch=Tw.bind(null,Z,t),[e.memoizedState,t]}function $i(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ym(){return Xe().memoizedState}function Js(t,e,n,r){var i=ht();Z.flags|=t,i.memoizedState=$i(1|e,n,void 0,r===void 0?null:r)}function cl(t,e,n,r){var i=Xe();r=r===void 0?null:r;var s=void 0;if(oe!==null){var o=oe.memoizedState;if(s=o.destroy,r!==null&&fc(r,o.deps)){i.memoizedState=$i(e,n,s,r);return}}Z.flags|=t,i.memoizedState=$i(1|e,n,s,r)}function hh(t,e){return Js(8390656,8,t,e)}function gc(t,e){return cl(2048,8,t,e)}function wm(t,e){return cl(4,2,t,e)}function Em(t,e){return cl(4,4,t,e)}function Sm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Cm(t,e,n){return n=n!=null?n.concat([t]):null,cl(4,4,Sm.bind(null,e,t),n)}function _c(){}function Im(t,e){var n=Xe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function km(t,e){var n=Xe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Tm(t,e,n){return zn&21?(ut(n,e)||(n=Ap(),Z.lanes|=n,Wn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,De=!0),t.memoizedState=n)}function Iw(t,e){var n=V;V=n!==0&&4>n?n:4,t(!0);var r=ra.transition;ra.transition={};try{t(!1),e()}finally{V=n,ra.transition=r}}function Nm(){return Xe().memoizedState}function kw(t,e,n){var r=ln(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Rm(t))Pm(e,n);else if(n=um(t,e,n,r),n!==null){var i=Re();lt(n,t,r,i),xm(n,e,r)}}function Tw(t,e,n){var r=ln(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rm(t))Pm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ut(l,o)){var a=e.interleaved;a===null?(i.next=i,ac(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=um(t,e,i,r),n!==null&&(i=Re(),lt(n,t,r,i),xm(n,e,r))}}function Rm(t){var e=t.alternate;return t===Z||e!==null&&e===Z}function Pm(t,e){wi=No=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function xm(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qu(t,n)}}var Ro={readContext:qe,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},Nw={readContext:qe,useCallback:function(t,e){return ht().memoizedState=[t,e===void 0?null:e],t},useContext:qe,useEffect:hh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Js(4194308,4,Sm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Js(4194308,4,t,e)},useInsertionEffect:function(t,e){return Js(4,2,t,e)},useMemo:function(t,e){var n=ht();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ht();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=kw.bind(null,Z,t),[r.memoizedState,t]},useRef:function(t){var e=ht();return t={current:t},e.memoizedState=t},useState:dh,useDebugValue:_c,useDeferredValue:function(t){return ht().memoizedState=t},useTransition:function(){var t=dh(!1),e=t[0];return t=Iw.bind(null,t[1]),ht().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Z,i=ht();if(X){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),me===null)throw Error(E(349));zn&30||pm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,hh(gm.bind(null,r,s,t),[t]),r.flags|=2048,$i(9,mm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ht(),e=me.identifierPrefix;if(X){var n=St,r=Et;n=(r&~(1<<32-ot(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Bi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Cw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Rw={readContext:qe,useCallback:Im,useContext:qe,useEffect:gc,useImperativeHandle:Cm,useInsertionEffect:wm,useLayoutEffect:Em,useMemo:km,useReducer:ia,useRef:ym,useState:function(){return ia(Hi)},useDebugValue:_c,useDeferredValue:function(t){var e=Xe();return Tm(e,oe.memoizedState,t)},useTransition:function(){var t=ia(Hi)[0],e=Xe().memoizedState;return[t,e]},useMutableSource:hm,useSyncExternalStore:fm,useId:Nm,unstable_isNewReconciler:!1},Pw={readContext:qe,useCallback:Im,useContext:qe,useEffect:gc,useImperativeHandle:Cm,useInsertionEffect:wm,useLayoutEffect:Em,useMemo:km,useReducer:sa,useRef:ym,useState:function(){return sa(Hi)},useDebugValue:_c,useDeferredValue:function(t){var e=Xe();return oe===null?e.memoizedState=t:Tm(e,oe.memoizedState,t)},useTransition:function(){var t=sa(Hi)[0],e=Xe().memoizedState;return[t,e]},useMutableSource:hm,useSyncExternalStore:fm,useId:Nm,unstable_isNewReconciler:!1};function et(t,e){if(t&&t.defaultProps){e=ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function eu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var dl={isMounted:function(t){return(t=t._reactInternals)?Yn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Re(),i=ln(t),s=Rt(r,i);s.payload=e,n!=null&&(s.callback=n),e=sn(t,s,i),e!==null&&(lt(e,t,i,r),qs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Re(),i=ln(t),s=Rt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=sn(t,s,i),e!==null&&(lt(e,t,i,r),qs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Re(),r=ln(t),i=Rt(n,r);i.tag=2,e!=null&&(i.callback=e),e=sn(t,i,r),e!==null&&(lt(e,t,r,n),qs(e,t,r))}};function fh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Fi(n,r)||!Fi(i,s):!0}function Am(t,e,n){var r=!1,i=gn,s=e.contextType;return typeof s=="object"&&s!==null?s=qe(s):(i=be(e)?Un:Ce.current,r=e.contextTypes,s=(r=r!=null)?Tr(t,i):gn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=dl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ph(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&dl.enqueueReplaceState(e,e.state,null)}function tu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},uc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=qe(s):(s=be(e)?Un:Ce.current,i.context=Tr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(eu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&dl.enqueueReplaceState(i,i.state,null),ko(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function xr(t,e){try{var n="",r=e;do n+=ry(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function oa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function nu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var xw=typeof WeakMap=="function"?WeakMap:Map;function Om(t,e,n){n=Rt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){xo||(xo=!0,hu=r),nu(t,e)},n}function Dm(t,e,n){n=Rt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){nu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){nu(t,e),typeof r!="function"&&(on===null?on=new Set([this]):on.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function mh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new xw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Hw.bind(null,t,e,n),e.then(t,t))}function gh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _h(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Rt(-1,1),e.tag=2,sn(n,e,1))),n.lanes|=1),t)}var Aw=jt.ReactCurrentOwner,De=!1;function ke(t,e,n,r){e.child=t===null?am(e,null,n,r):Rr(e,t.child,n,r)}function vh(t,e,n,r,i){n=n.render;var s=e.ref;return vr(e,i),r=pc(t,e,n,r,s,i),n=mc(),t!==null&&!De?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dt(t,e,i)):(X&&n&&nc(e),e.flags|=1,ke(t,e,r,i),e.child)}function yh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!kc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Lm(t,e,s,r,i)):(t=no(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fi,n(o,r)&&t.ref===e.ref)return Dt(t,e,i)}return e.flags|=1,t=an(s,r),t.ref=e.ref,t.return=e,e.child=t}function Lm(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Fi(s,r)&&t.ref===e.ref)if(De=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(De=!0);else return e.lanes=t.lanes,Dt(t,e,i)}return ru(t,e,n,r,i)}function Mm(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(dr,ze),ze|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,G(dr,ze),ze|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,G(dr,ze),ze|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,G(dr,ze),ze|=r;return ke(t,e,i,n),e.child}function bm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ru(t,e,n,r,i){var s=be(n)?Un:Ce.current;return s=Tr(e,s),vr(e,i),n=pc(t,e,n,r,s,i),r=mc(),t!==null&&!De?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dt(t,e,i)):(X&&r&&nc(e),e.flags|=1,ke(t,e,n,i),e.child)}function wh(t,e,n,r,i){if(be(n)){var s=!0;wo(e)}else s=!1;if(vr(e,i),e.stateNode===null)Zs(t,e),Am(e,n,r),tu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=qe(u):(u=be(n)?Un:Ce.current,u=Tr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&ph(e,o,r,u),$t=!1;var h=e.memoizedState;o.state=h,ko(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Me.current||$t?(typeof c=="function"&&(eu(e,n,c,r),a=e.memoizedState),(l=$t||fh(e,n,l,r,h,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,cm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:et(e.type,l),o.props=u,d=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=qe(a):(a=be(n)?Un:Ce.current,a=Tr(e,a));var _=n.getDerivedStateFromProps;(c=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==a)&&ph(e,o,r,a),$t=!1,h=e.memoizedState,o.state=h,ko(e,r,o,i);var v=e.memoizedState;l!==d||h!==v||Me.current||$t?(typeof _=="function"&&(eu(e,n,_,r),v=e.memoizedState),(u=$t||fh(e,n,u,r,h,v,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return iu(t,e,n,r,s,i)}function iu(t,e,n,r,i,s){bm(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&sh(e,n,!1),Dt(t,e,s);r=e.stateNode,Aw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Rr(e,t.child,null,s),e.child=Rr(e,null,l,s)):ke(t,e,l,s),e.memoizedState=r.state,i&&sh(e,n,!0),e.child}function Fm(t){var e=t.stateNode;e.pendingContext?ih(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ih(t,e.context,!1),cc(t,e.containerInfo)}function Eh(t,e,n,r,i){return Nr(),ic(i),e.flags|=256,ke(t,e,n,r),e.child}var su={dehydrated:null,treeContext:null,retryLane:0};function ou(t){return{baseLanes:t,cachePool:null,transitions:null}}function Um(t,e,n){var r=e.pendingProps,i=J.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),G(J,i&1),t===null)return Ja(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=pl(o,r,0,null),t=Fn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ou(n),e.memoizedState=su,t):vc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Ow(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=an(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=an(l,s):(s=Fn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ou(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=su,r}return s=t.child,t=s.sibling,r=an(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function vc(t,e){return e=pl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Us(t,e,n,r){return r!==null&&ic(r),Rr(e,t.child,null,n),t=vc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ow(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=oa(Error(E(422))),Us(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=pl({mode:"visible",children:r.children},i,0,null),s=Fn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Rr(e,t.child,null,o),e.child.memoizedState=ou(o),e.memoizedState=su,s);if(!(e.mode&1))return Us(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(E(419)),r=oa(s,r,void 0),Us(t,e,o,r)}if(l=(o&t.childLanes)!==0,De||l){if(r=me,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ot(t,i),lt(r,t,i,-1))}return Ic(),r=oa(Error(E(421))),Us(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=$w.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,We=rn(i.nextSibling),Ve=e,X=!0,nt=null,t!==null&&(Ge[Ke++]=Et,Ge[Ke++]=St,Ge[Ke++]=jn,Et=t.id,St=t.overflow,jn=e),e=vc(e,r.children),e.flags|=4096,e)}function Sh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Za(t.return,e,n)}function la(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function jm(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ke(t,e,r.children,n),r=J.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sh(t,n,e);else if(t.tag===19)Sh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(G(J,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&To(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),la(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&To(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}la(e,!0,n,null,s);break;case"together":la(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zs(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Wn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=an(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=an(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Dw(t,e,n){switch(e.tag){case 3:Fm(e),Nr();break;case 5:dm(e);break;case 1:be(e.type)&&wo(e);break;case 4:cc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;G(Co,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(G(J,J.current&1),e.flags|=128,null):n&e.child.childLanes?Um(t,e,n):(G(J,J.current&1),t=Dt(t,e,n),t!==null?t.sibling:null);G(J,J.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return jm(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(J,J.current),r)break;return null;case 22:case 23:return e.lanes=0,Mm(t,e,n)}return Dt(t,e,n)}var zm,lu,Wm,Vm;zm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lu=function(){};Wm=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Dn(mt.current);var s=null;switch(n){case"input":i=Pa(t,i),r=Pa(t,r),s=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),s=[];break;case"textarea":i=Oa(t,i),r=Oa(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=vo)}La(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Q("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Vm=function(t,e,n,r){n!==r&&(e.flags|=4)};function ri(t,e){if(!X)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function we(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Lw(t,e,n){var r=e.pendingProps;switch(rc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(e),null;case 1:return be(e.type)&&yo(),we(e),null;case 3:return r=e.stateNode,Pr(),q(Me),q(Ce),hc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(bs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,nt!==null&&(mu(nt),nt=null))),lu(t,e),we(e),null;case 5:dc(e);var i=Dn(Vi.current);if(n=e.type,t!==null&&e.stateNode!=null)Wm(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return we(e),null}if(t=Dn(mt.current),bs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ft]=e,r[zi]=s,t=(e.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<hi.length;i++)Q(hi[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":Ad(r,s),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Q("invalid",r);break;case"textarea":Dd(r,s),Q("invalid",r)}La(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ms(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ms(r.textContent,l,t),i=["children",""+l]):xi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Q("scroll",r)}switch(n){case"input":Ns(r),Od(r,s,!0);break;case"textarea":Ns(r),Ld(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=vo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ft]=e,t[zi]=r,zm(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ma(n,r),n){case"dialog":Q("cancel",t),Q("close",t),i=r;break;case"iframe":case"object":case"embed":Q("load",t),i=r;break;case"video":case"audio":for(i=0;i<hi.length;i++)Q(hi[i],t);i=r;break;case"source":Q("error",t),i=r;break;case"img":case"image":case"link":Q("error",t),Q("load",t),i=r;break;case"details":Q("toggle",t),i=r;break;case"input":Ad(t,r),i=Pa(t,r),Q("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),Q("invalid",t);break;case"textarea":Dd(t,r),i=Oa(t,r),Q("invalid",t);break;default:i=r}La(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?yp(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&_p(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ai(t,a):typeof a=="number"&&Ai(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Q("scroll",t):a!=null&&Vu(t,s,a,o))}switch(n){case"input":Ns(t),Od(t,r,!1);break;case"textarea":Ns(t),Ld(t);break;case"option":r.value!=null&&t.setAttribute("value",""+mn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?pr(t,!!r.multiple,s,!1):r.defaultValue!=null&&pr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=vo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return we(e),null;case 6:if(t&&e.stateNode!=null)Vm(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=Dn(Vi.current),Dn(mt.current),bs(e)){if(r=e.stateNode,n=e.memoizedProps,r[ft]=e,(s=r.nodeValue!==n)&&(t=Ve,t!==null))switch(t.tag){case 3:Ms(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ms(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ft]=e,e.stateNode=r}return we(e),null;case 13:if(q(J),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(X&&We!==null&&e.mode&1&&!(e.flags&128))om(),Nr(),e.flags|=98560,s=!1;else if(s=bs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[ft]=e}else Nr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;we(e),s=!1}else nt!==null&&(mu(nt),nt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||J.current&1?ue===0&&(ue=3):Ic())),e.updateQueue!==null&&(e.flags|=4),we(e),null);case 4:return Pr(),lu(t,e),t===null&&Ui(e.stateNode.containerInfo),we(e),null;case 10:return lc(e.type._context),we(e),null;case 17:return be(e.type)&&yo(),we(e),null;case 19:if(q(J),s=e.memoizedState,s===null)return we(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ri(s,!1);else{if(ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=To(t),o!==null){for(e.flags|=128,ri(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return G(J,J.current&1|2),e.child}t=t.sibling}s.tail!==null&&ie()>Ar&&(e.flags|=128,r=!0,ri(s,!1),e.lanes=4194304)}else{if(!r)if(t=To(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ri(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!X)return we(e),null}else 2*ie()-s.renderingStartTime>Ar&&n!==1073741824&&(e.flags|=128,r=!0,ri(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ie(),e.sibling=null,n=J.current,G(J,r?n&1|2:n&1),e):(we(e),null);case 22:case 23:return Cc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ze&1073741824&&(we(e),e.subtreeFlags&6&&(e.flags|=8192)):we(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function Mw(t,e){switch(rc(e),e.tag){case 1:return be(e.type)&&yo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Pr(),q(Me),q(Ce),hc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return dc(e),null;case 13:if(q(J),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));Nr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return q(J),null;case 4:return Pr(),null;case 10:return lc(e.type._context),null;case 22:case 23:return Cc(),null;case 24:return null;default:return null}}var js=!1,Ee=!1,bw=typeof WeakSet=="function"?WeakSet:Set,k=null;function cr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(t,e,r)}else n.current=null}function au(t,e,n){try{n()}catch(r){te(t,e,r)}}var Ch=!1;function Fw(t,e){if($a=mo,t=Kp(),tc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var _;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(_=d.firstChild)!==null;)h=d,d=_;for(;;){if(d===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++c===r&&(a=o),(_=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=_}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ga={focusedElem:t,selectionRange:n},mo=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,S=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:et(e.type,y),S);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){te(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return v=Ch,Ch=!1,v}function Ei(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&au(e,n,s)}i=i.next}while(i!==r)}}function hl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function uu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Bm(t){var e=t.alternate;e!==null&&(t.alternate=null,Bm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ft],delete e[zi],delete e[Ya],delete e[yw],delete e[ww])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Hm(t){return t.tag===5||t.tag===3||t.tag===4}function Ih(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vo));else if(r!==4&&(t=t.child,t!==null))for(cu(t,e,n),t=t.sibling;t!==null;)cu(t,e,n),t=t.sibling}function du(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(du(t,e,n),t=t.sibling;t!==null;)du(t,e,n),t=t.sibling}var ge=null,tt=!1;function Vt(t,e,n){for(n=n.child;n!==null;)$m(t,e,n),n=n.sibling}function $m(t,e,n){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(il,n)}catch{}switch(n.tag){case 5:Ee||cr(n,e);case 6:var r=ge,i=tt;ge=null,Vt(t,e,n),ge=r,tt=i,ge!==null&&(tt?(t=ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ge.removeChild(n.stateNode));break;case 18:ge!==null&&(tt?(t=ge,n=n.stateNode,t.nodeType===8?ea(t.parentNode,n):t.nodeType===1&&ea(t,n),Mi(t)):ea(ge,n.stateNode));break;case 4:r=ge,i=tt,ge=n.stateNode.containerInfo,tt=!0,Vt(t,e,n),ge=r,tt=i;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&au(n,e,o),i=i.next}while(i!==r)}Vt(t,e,n);break;case 1:if(!Ee&&(cr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,e,l)}Vt(t,e,n);break;case 21:Vt(t,e,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Vt(t,e,n),Ee=r):Vt(t,e,n);break;default:Vt(t,e,n)}}function kh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bw),e.forEach(function(r){var i=Gw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ze(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ge=l.stateNode,tt=!1;break e;case 3:ge=l.stateNode.containerInfo,tt=!0;break e;case 4:ge=l.stateNode.containerInfo,tt=!0;break e}l=l.return}if(ge===null)throw Error(E(160));$m(s,o,i),ge=null,tt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){te(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Gm(e,t),e=e.sibling}function Gm(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ze(e,t),dt(t),r&4){try{Ei(3,t,t.return),hl(3,t)}catch(y){te(t,t.return,y)}try{Ei(5,t,t.return)}catch(y){te(t,t.return,y)}}break;case 1:Ze(e,t),dt(t),r&512&&n!==null&&cr(n,n.return);break;case 5:if(Ze(e,t),dt(t),r&512&&n!==null&&cr(n,n.return),t.flags&32){var i=t.stateNode;try{Ai(i,"")}catch(y){te(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&pp(i,s),Ma(l,o);var u=Ma(l,s);for(o=0;o<a.length;o+=2){var c=a[o],d=a[o+1];c==="style"?yp(i,d):c==="dangerouslySetInnerHTML"?_p(i,d):c==="children"?Ai(i,d):Vu(i,c,d,u)}switch(l){case"input":xa(i,s);break;case"textarea":mp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?pr(i,!!s.multiple,_,!1):h!==!!s.multiple&&(s.defaultValue!=null?pr(i,!!s.multiple,s.defaultValue,!0):pr(i,!!s.multiple,s.multiple?[]:"",!1))}i[zi]=s}catch(y){te(t,t.return,y)}}break;case 6:if(Ze(e,t),dt(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){te(t,t.return,y)}}break;case 3:if(Ze(e,t),dt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mi(e.containerInfo)}catch(y){te(t,t.return,y)}break;case 4:Ze(e,t),dt(t);break;case 13:Ze(e,t),dt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ec=ie())),r&4&&kh(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ee=(u=Ee)||c,Ze(e,t),Ee=u):Ze(e,t),dt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(k=t,c=t.child;c!==null;){for(d=k=c;k!==null;){switch(h=k,_=h.child,h.tag){case 0:case 11:case 14:case 15:Ei(4,h,h.return);break;case 1:cr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){te(r,n,y)}}break;case 5:cr(h,h.return);break;case 22:if(h.memoizedState!==null){Nh(d);continue}}_!==null?(_.return=h,k=_):Nh(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=vp("display",o))}catch(y){te(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){te(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ze(e,t),dt(t),r&4&&kh(t);break;case 21:break;default:Ze(e,t),dt(t)}}function dt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Hm(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ai(i,""),r.flags&=-33);var s=Ih(t);du(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Ih(t);cu(t,l,o);break;default:throw Error(E(161))}}catch(a){te(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Uw(t,e,n){k=t,Km(t)}function Km(t,e,n){for(var r=(t.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||js;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ee;l=js;var u=Ee;if(js=o,(Ee=a)&&!u)for(k=i;k!==null;)o=k,a=o.child,o.tag===22&&o.memoizedState!==null?Rh(i):a!==null?(a.return=o,k=a):Rh(i);for(;s!==null;)k=s,Km(s),s=s.sibling;k=i,js=l,Ee=u}Th(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,k=s):Th(t)}}function Th(t){for(;k!==null;){var e=k;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ee||hl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:et(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ch(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ch(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Mi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Ee||e.flags&512&&uu(e)}catch(h){te(e,e.return,h)}}if(e===t){k=null;break}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}}function Nh(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var n=e.sibling;if(n!==null){n.return=e.return,k=n;break}k=e.return}}function Rh(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hl(4,e)}catch(a){te(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){te(e,i,a)}}var s=e.return;try{uu(e)}catch(a){te(e,s,a)}break;case 5:var o=e.return;try{uu(e)}catch(a){te(e,o,a)}}}catch(a){te(e,e.return,a)}if(e===t){k=null;break}var l=e.sibling;if(l!==null){l.return=e.return,k=l;break}k=e.return}}var jw=Math.ceil,Po=jt.ReactCurrentDispatcher,yc=jt.ReactCurrentOwner,Ye=jt.ReactCurrentBatchConfig,z=0,me=null,se=null,_e=0,ze=0,dr=En(0),ue=0,Gi=null,Wn=0,fl=0,wc=0,Si=null,Oe=null,Ec=0,Ar=1/0,yt=null,xo=!1,hu=null,on=null,zs=!1,Zt=null,Ao=0,Ci=0,fu=null,eo=-1,to=0;function Re(){return z&6?ie():eo!==-1?eo:eo=ie()}function ln(t){return t.mode&1?z&2&&_e!==0?_e&-_e:Sw.transition!==null?(to===0&&(to=Ap()),to):(t=V,t!==0||(t=window.event,t=t===void 0?16:Up(t.type)),t):1}function lt(t,e,n,r){if(50<Ci)throw Ci=0,fu=null,Error(E(185));as(t,n,r),(!(z&2)||t!==me)&&(t===me&&(!(z&2)&&(fl|=n),ue===4&&Kt(t,_e)),Fe(t,r),n===1&&z===0&&!(e.mode&1)&&(Ar=ie()+500,ul&&Sn()))}function Fe(t,e){var n=t.callbackNode;Sy(t,e);var r=po(t,t===me?_e:0);if(r===0)n!==null&&Fd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Fd(n),e===1)t.tag===0?Ew(Ph.bind(null,t)):rm(Ph.bind(null,t)),_w(function(){!(z&6)&&Sn()}),n=null;else{switch(Op(r)){case 1:n=Ku;break;case 4:n=Pp;break;case 16:n=fo;break;case 536870912:n=xp;break;default:n=fo}n=tg(n,Qm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Qm(t,e){if(eo=-1,to=0,z&6)throw Error(E(327));var n=t.callbackNode;if(yr()&&t.callbackNode!==n)return null;var r=po(t,t===me?_e:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Oo(t,r);else{e=r;var i=z;z|=2;var s=qm();(me!==t||_e!==e)&&(yt=null,Ar=ie()+500,bn(t,e));do try{Vw();break}catch(l){Ym(t,l)}while(!0);oc(),Po.current=s,z=i,se!==null?e=0:(me=null,_e=0,e=ue)}if(e!==0){if(e===2&&(i=za(t),i!==0&&(r=i,e=pu(t,i))),e===1)throw n=Gi,bn(t,0),Kt(t,r),Fe(t,ie()),n;if(e===6)Kt(t,r);else{if(i=t.current.alternate,!(r&30)&&!zw(i)&&(e=Oo(t,r),e===2&&(s=za(t),s!==0&&(r=s,e=pu(t,s))),e===1))throw n=Gi,bn(t,0),Kt(t,r),Fe(t,ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:Rn(t,Oe,yt);break;case 3:if(Kt(t,r),(r&130023424)===r&&(e=Ec+500-ie(),10<e)){if(po(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Re(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Qa(Rn.bind(null,t,Oe,yt),e);break}Rn(t,Oe,yt);break;case 4:if(Kt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ot(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jw(r/1960))-r,10<r){t.timeoutHandle=Qa(Rn.bind(null,t,Oe,yt),r);break}Rn(t,Oe,yt);break;case 5:Rn(t,Oe,yt);break;default:throw Error(E(329))}}}return Fe(t,ie()),t.callbackNode===n?Qm.bind(null,t):null}function pu(t,e){var n=Si;return t.current.memoizedState.isDehydrated&&(bn(t,e).flags|=256),t=Oo(t,e),t!==2&&(e=Oe,Oe=n,e!==null&&mu(e)),t}function mu(t){Oe===null?Oe=t:Oe.push.apply(Oe,t)}function zw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ut(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kt(t,e){for(e&=~wc,e&=~fl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ot(e),r=1<<n;t[n]=-1,e&=~r}}function Ph(t){if(z&6)throw Error(E(327));yr();var e=po(t,0);if(!(e&1))return Fe(t,ie()),null;var n=Oo(t,e);if(t.tag!==0&&n===2){var r=za(t);r!==0&&(e=r,n=pu(t,r))}if(n===1)throw n=Gi,bn(t,0),Kt(t,e),Fe(t,ie()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rn(t,Oe,yt),Fe(t,ie()),null}function Sc(t,e){var n=z;z|=1;try{return t(e)}finally{z=n,z===0&&(Ar=ie()+500,ul&&Sn())}}function Vn(t){Zt!==null&&Zt.tag===0&&!(z&6)&&yr();var e=z;z|=1;var n=Ye.transition,r=V;try{if(Ye.transition=null,V=1,t)return t()}finally{V=r,Ye.transition=n,z=e,!(z&6)&&Sn()}}function Cc(){ze=dr.current,q(dr)}function bn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,gw(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(rc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&yo();break;case 3:Pr(),q(Me),q(Ce),hc();break;case 5:dc(r);break;case 4:Pr();break;case 13:q(J);break;case 19:q(J);break;case 10:lc(r.type._context);break;case 22:case 23:Cc()}n=n.return}if(me=t,se=t=an(t.current,null),_e=ze=e,ue=0,Gi=null,wc=fl=Wn=0,Oe=Si=null,On!==null){for(e=0;e<On.length;e++)if(n=On[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}On=null}return t}function Ym(t,e){do{var n=se;try{if(oc(),Xs.current=Ro,No){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}No=!1}if(zn=0,he=oe=Z=null,wi=!1,Bi=0,yc.current=null,n===null||n.return===null){ue=1,Gi=e,se=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=_e,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var _=gh(o);if(_!==null){_.flags&=-257,_h(_,o,l,s,e),_.mode&1&&mh(s,u,e),e=_,a=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(a),e.updateQueue=y}else v.add(a);break e}else{if(!(e&1)){mh(s,u,e),Ic();break e}a=Error(E(426))}}else if(X&&l.mode&1){var S=gh(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),_h(S,o,l,s,e),ic(xr(a,l));break e}}s=a=xr(a,l),ue!==4&&(ue=2),Si===null?Si=[s]:Si.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Om(s,a,e);uh(s,p);break e;case 1:l=a;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(on===null||!on.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Dm(s,l,e);uh(s,w);break e}}s=s.return}while(s!==null)}Jm(n)}catch(I){e=I,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function qm(){var t=Po.current;return Po.current=Ro,t===null?Ro:t}function Ic(){(ue===0||ue===3||ue===2)&&(ue=4),me===null||!(Wn&268435455)&&!(fl&268435455)||Kt(me,_e)}function Oo(t,e){var n=z;z|=2;var r=qm();(me!==t||_e!==e)&&(yt=null,bn(t,e));do try{Ww();break}catch(i){Ym(t,i)}while(!0);if(oc(),z=n,Po.current=r,se!==null)throw Error(E(261));return me=null,_e=0,ue}function Ww(){for(;se!==null;)Xm(se)}function Vw(){for(;se!==null&&!fy();)Xm(se)}function Xm(t){var e=eg(t.alternate,t,ze);t.memoizedProps=t.pendingProps,e===null?Jm(t):se=e,yc.current=null}function Jm(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Mw(n,e),n!==null){n.flags&=32767,se=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ue=6,se=null;return}}else if(n=Lw(n,e,ze),n!==null){se=n;return}if(e=e.sibling,e!==null){se=e;return}se=e=t}while(e!==null);ue===0&&(ue=5)}function Rn(t,e,n){var r=V,i=Ye.transition;try{Ye.transition=null,V=1,Bw(t,e,n,r)}finally{Ye.transition=i,V=r}return null}function Bw(t,e,n,r){do yr();while(Zt!==null);if(z&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Cy(t,s),t===me&&(se=me=null,_e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zs||(zs=!0,tg(fo,function(){return yr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ye.transition,Ye.transition=null;var o=V;V=1;var l=z;z|=4,yc.current=null,Fw(t,n),Gm(n,t),uw(Ga),mo=!!$a,Ga=$a=null,t.current=n,Uw(n),py(),z=l,V=o,Ye.transition=s}else t.current=n;if(zs&&(zs=!1,Zt=t,Ao=i),s=t.pendingLanes,s===0&&(on=null),_y(n.stateNode),Fe(t,ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xo)throw xo=!1,t=hu,hu=null,t;return Ao&1&&t.tag!==0&&yr(),s=t.pendingLanes,s&1?t===fu?Ci++:(Ci=0,fu=t):Ci=0,Sn(),null}function yr(){if(Zt!==null){var t=Op(Ao),e=Ye.transition,n=V;try{if(Ye.transition=null,V=16>t?16:t,Zt===null)var r=!1;else{if(t=Zt,Zt=null,Ao=0,z&6)throw Error(E(331));var i=z;for(z|=4,k=t.current;k!==null;){var s=k,o=s.child;if(k.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(k=u;k!==null;){var c=k;switch(c.tag){case 0:case 11:case 15:Ei(8,c,s)}var d=c.child;if(d!==null)d.return=c,k=d;else for(;k!==null;){c=k;var h=c.sibling,_=c.return;if(Bm(c),c===u){k=null;break}if(h!==null){h.return=_,k=h;break}k=_}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}k=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ei(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,k=p;break e}k=s.return}}var f=t.current;for(k=f;k!==null;){o=k;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,k=g;else e:for(o=f;k!==null;){if(l=k,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:hl(9,l)}}catch(I){te(l,l.return,I)}if(l===o){k=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,k=w;break e}k=l.return}}if(z=i,Sn(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(il,t)}catch{}r=!0}return r}finally{V=n,Ye.transition=e}}return!1}function xh(t,e,n){e=xr(n,e),e=Om(t,e,1),t=sn(t,e,1),e=Re(),t!==null&&(as(t,1,e),Fe(t,e))}function te(t,e,n){if(t.tag===3)xh(t,t,n);else for(;e!==null;){if(e.tag===3){xh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(on===null||!on.has(r))){t=xr(n,t),t=Dm(e,t,1),e=sn(e,t,1),t=Re(),e!==null&&(as(e,1,t),Fe(e,t));break}}e=e.return}}function Hw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Re(),t.pingedLanes|=t.suspendedLanes&n,me===t&&(_e&n)===n&&(ue===4||ue===3&&(_e&130023424)===_e&&500>ie()-Ec?bn(t,0):wc|=n),Fe(t,e)}function Zm(t,e){e===0&&(t.mode&1?(e=xs,xs<<=1,!(xs&130023424)&&(xs=4194304)):e=1);var n=Re();t=Ot(t,e),t!==null&&(as(t,e,n),Fe(t,n))}function $w(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Zm(t,n)}function Gw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),Zm(t,n)}var eg;eg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Me.current)De=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return De=!1,Dw(t,e,n);De=!!(t.flags&131072)}else De=!1,X&&e.flags&1048576&&im(e,So,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Zs(t,e),t=e.pendingProps;var i=Tr(e,Ce.current);vr(e,n),i=pc(null,e,r,t,i,n);var s=mc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,be(r)?(s=!0,wo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,uc(e),i.updater=dl,e.stateNode=i,i._reactInternals=e,tu(e,r,t,n),e=iu(null,e,r,!0,s,n)):(e.tag=0,X&&s&&nc(e),ke(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Zs(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Qw(r),t=et(r,t),i){case 0:e=ru(null,e,r,t,n);break e;case 1:e=wh(null,e,r,t,n);break e;case 11:e=vh(null,e,r,t,n);break e;case 14:e=yh(null,e,r,et(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),ru(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),wh(t,e,r,i,n);case 3:e:{if(Fm(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,cm(t,e),ko(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=xr(Error(E(423)),e),e=Eh(t,e,r,n,i);break e}else if(r!==i){i=xr(Error(E(424)),e),e=Eh(t,e,r,n,i);break e}else for(We=rn(e.stateNode.containerInfo.firstChild),Ve=e,X=!0,nt=null,n=am(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Nr(),r===i){e=Dt(t,e,n);break e}ke(t,e,r,n)}e=e.child}return e;case 5:return dm(e),t===null&&Ja(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ka(r,i)?o=null:s!==null&&Ka(r,s)&&(e.flags|=32),bm(t,e),ke(t,e,o,n),e.child;case 6:return t===null&&Ja(e),null;case 13:return Um(t,e,n);case 4:return cc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Rr(e,null,r,n):ke(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),vh(t,e,r,i,n);case 7:return ke(t,e,e.pendingProps,n),e.child;case 8:return ke(t,e,e.pendingProps.children,n),e.child;case 12:return ke(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,G(Co,r._currentValue),r._currentValue=o,s!==null)if(ut(s.value,o)){if(s.children===i.children&&!Me.current){e=Dt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Rt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Za(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Za(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ke(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,vr(e,n),i=qe(i),r=r(i),e.flags|=1,ke(t,e,r,n),e.child;case 14:return r=e.type,i=et(r,e.pendingProps),i=et(r.type,i),yh(t,e,r,i,n);case 15:return Lm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),Zs(t,e),e.tag=1,be(r)?(t=!0,wo(e)):t=!1,vr(e,n),Am(e,r,i),tu(e,r,i,n),iu(null,e,r,!0,t,n);case 19:return jm(t,e,n);case 22:return Mm(t,e,n)}throw Error(E(156,e.tag))};function tg(t,e){return Rp(t,e)}function Kw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(t,e,n,r){return new Kw(t,e,n,r)}function kc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qw(t){if(typeof t=="function")return kc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hu)return 11;if(t===$u)return 14}return 2}function an(t,e){var n=t.alternate;return n===null?(n=Qe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function no(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")kc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case tr:return Fn(n.children,i,s,e);case Bu:o=8,i|=8;break;case ka:return t=Qe(12,n,e,i|2),t.elementType=ka,t.lanes=s,t;case Ta:return t=Qe(13,n,e,i),t.elementType=Ta,t.lanes=s,t;case Na:return t=Qe(19,n,e,i),t.elementType=Na,t.lanes=s,t;case dp:return pl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case up:o=10;break e;case cp:o=9;break e;case Hu:o=11;break e;case $u:o=14;break e;case Ht:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=Qe(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Fn(t,e,n,r){return t=Qe(7,t,r,e),t.lanes=n,t}function pl(t,e,n,r){return t=Qe(22,t,r,e),t.elementType=dp,t.lanes=n,t.stateNode={isHidden:!1},t}function aa(t,e,n){return t=Qe(6,t,null,e),t.lanes=n,t}function ua(t,e,n){return e=Qe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Yw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bl(0),this.expirationTimes=Bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Tc(t,e,n,r,i,s,o,l,a){return t=new Yw(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uc(s),t}function qw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:er,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ng(t){if(!t)return gn;t=t._reactInternals;e:{if(Yn(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(be(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(be(n))return nm(t,n,e)}return e}function rg(t,e,n,r,i,s,o,l,a){return t=Tc(n,r,!0,t,i,s,o,l,a),t.context=ng(null),n=t.current,r=Re(),i=ln(n),s=Rt(r,i),s.callback=e??null,sn(n,s,i),t.current.lanes=i,as(t,i,r),Fe(t,r),t}function ml(t,e,n,r){var i=e.current,s=Re(),o=ln(i);return n=ng(n),e.context===null?e.context=n:e.pendingContext=n,e=Rt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=sn(i,e,o),t!==null&&(lt(t,i,o,s),qs(t,i,o)),o}function Do(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ah(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Nc(t,e){Ah(t,e),(t=t.alternate)&&Ah(t,e)}function Xw(){return null}var ig=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rc(t){this._internalRoot=t}gl.prototype.render=Rc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));ml(t,e,null,null)};gl.prototype.unmount=Rc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vn(function(){ml(null,t,null,null)}),e[At]=null}};function gl(t){this._internalRoot=t}gl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Mp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gt.length&&e!==0&&e<Gt[n].priority;n++);Gt.splice(n,0,t),n===0&&Fp(t)}};function Pc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Oh(){}function Jw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Do(o);s.call(u)}}var o=rg(e,r,t,0,null,!1,!1,"",Oh);return t._reactRootContainer=o,t[At]=o.current,Ui(t.nodeType===8?t.parentNode:t),Vn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Do(a);l.call(u)}}var a=Tc(t,0,!1,null,null,!1,!1,"",Oh);return t._reactRootContainer=a,t[At]=a.current,Ui(t.nodeType===8?t.parentNode:t),Vn(function(){ml(e,a,n,r)}),a}function vl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Do(o);l.call(a)}}ml(e,o,t,i)}else o=Jw(n,e,t,i,r);return Do(o)}Dp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=di(e.pendingLanes);n!==0&&(Qu(e,n|1),Fe(e,ie()),!(z&6)&&(Ar=ie()+500,Sn()))}break;case 13:Vn(function(){var r=Ot(t,1);if(r!==null){var i=Re();lt(r,t,1,i)}}),Nc(t,1)}};Yu=function(t){if(t.tag===13){var e=Ot(t,134217728);if(e!==null){var n=Re();lt(e,t,134217728,n)}Nc(t,134217728)}};Lp=function(t){if(t.tag===13){var e=ln(t),n=Ot(t,e);if(n!==null){var r=Re();lt(n,t,e,r)}Nc(t,e)}};Mp=function(){return V};bp=function(t,e){var n=V;try{return V=t,e()}finally{V=n}};Fa=function(t,e,n){switch(e){case"input":if(xa(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=al(r);if(!i)throw Error(E(90));fp(r),xa(r,i)}}}break;case"textarea":mp(t,n);break;case"select":e=n.value,e!=null&&pr(t,!!n.multiple,e,!1)}};Sp=Sc;Cp=Vn;var Zw={usingClientEntryPoint:!1,Events:[cs,sr,al,wp,Ep,Sc]},ii={findFiberByHostInstance:An,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},eE={bundleType:ii.bundleType,version:ii.version,rendererPackageName:ii.rendererPackageName,rendererConfig:ii.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Tp(t),t===null?null:t.stateNode},findFiberByHostInstance:ii.findFiberByHostInstance||Xw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ws=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ws.isDisabled&&Ws.supportsFiber)try{il=Ws.inject(eE),pt=Ws}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zw;He.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pc(e))throw Error(E(200));return qw(t,e,null,n)};He.createRoot=function(t,e){if(!Pc(t))throw Error(E(299));var n=!1,r="",i=ig;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Tc(t,1,!1,null,null,n,!1,r,i),t[At]=e.current,Ui(t.nodeType===8?t.parentNode:t),new Rc(e)};He.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=Tp(e),t=t===null?null:t.stateNode,t};He.flushSync=function(t){return Vn(t)};He.hydrate=function(t,e,n){if(!_l(e))throw Error(E(200));return vl(null,t,e,!0,n)};He.hydrateRoot=function(t,e,n){if(!Pc(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ig;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=rg(e,null,t,1,n??null,i,!1,s,o),t[At]=e.current,Ui(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new gl(e)};He.render=function(t,e,n){if(!_l(e))throw Error(E(200));return vl(null,t,e,!1,n)};He.unmountComponentAtNode=function(t){if(!_l(t))throw Error(E(40));return t._reactRootContainer?(Vn(function(){vl(null,null,t,!1,function(){t._reactRootContainer=null,t[At]=null})}),!0):!1};He.unstable_batchedUpdates=Sc;He.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!_l(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return vl(t,e,n,!1,r)};He.version="18.3.1-next-f1338f8080-20240426";function sg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sg)}catch(t){console.error(t)}}sg(),sp.exports=He;var tE=sp.exports,og,Dh=tE;og=Dh.createRoot,Dh.hydrateRoot;var Lh={};/**
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
 */const lg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const C=function(t,e){if(!t)throw Wr(e)},Wr=function(t){return new Error("Firebase Database ("+lg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const ag=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},nE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},xc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,d=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,_=u&63;a||(_=64,o||(h=64)),r.push(n[c],n[d],n[h],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ag(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw new rE;const h=s<<2|l>>4;if(r.push(h),u!==64){const _=l<<4&240|u>>2;if(r.push(_),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ug=function(t){const e=ag(t);return xc.encodeByteArray(e,!0)},Lo=function(t){return ug(t).replace(/\./g,"")},Mo=function(t){try{return xc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function iE(t){return cg(void 0,t)}function cg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!sE(n)||(t[n]=cg(t[n],e[n]));return t}function sE(t){return t!=="__proto__"}/**
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
 */function oE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const lE=()=>oE().__FIREBASE_DEFAULTS__,aE=()=>{if(typeof process>"u"||typeof Lh>"u")return;const t=Lh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},uE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Mo(t[1]);return e&&JSON.parse(e)},Ac=()=>{try{return lE()||aE()||uE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dg=t=>{var e,n;return(n=(e=Ac())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cE=t=>{const e=dg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},hg=()=>{var t;return(t=Ac())===null||t===void 0?void 0:t.config},fg=t=>{var e;return(e=Ac())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class yl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function dE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Lo(JSON.stringify(n)),Lo(JSON.stringify(o)),""].join(".")}/**
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
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Oc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function hE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pE(){const t=Pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mE(){return lg.NODE_ADMIN===!0}function gE(){try{return typeof indexedDB=="object"}catch{return!1}}function _E(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const vE="FirebaseError";class Cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vE,Object.setPrototypeOf(this,Cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hs.prototype.create)}}class hs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?yE(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Cn(i,l,r)}}function yE(t,e){return t.replace(wE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wE=/\{\$([^}]+)}/g;/**
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
 */function Ki(t){return JSON.parse(t)}function le(t){return JSON.stringify(t)}/**
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
 */const mg=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ki(Mo(s[0])||""),n=Ki(Mo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},EE=function(t){const e=mg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},SE=function(t){const e=mg(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function zt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Or(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function gu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Fo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Mh(s)&&Mh(o)){if(!Fo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Mh(t){return t!==null&&typeof t=="object"}/**
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
 */function Vr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function pi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class CE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):d<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const h=(i<<5|i>>>27)+u+a+c+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function IE(t,e){const n=new kE(t,e);return n.subscribe.bind(n)}class kE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");TE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ca),i.error===void 0&&(i.error=ca),i.complete===void 0&&(i.complete=ca);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ca(){}function Dc(t,e){return`${t} failed: ${e} argument `}/**
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
 */const NE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,C(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ie(t){return t&&t._delegate?t._delegate:t}class Bn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Pn="[DEFAULT]";/**
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
 */class RE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new yl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xE(e))try{this.getOrInitializeService({instanceIdentifier:Pn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Pn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pn){return this.instances.has(e)}getOptions(e=Pn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:PE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pn){return this.component?this.component.multipleInstances?e:Pn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PE(t){return t===Pn?void 0:t}function xE(t){return t.instantiationMode==="EAGER"}/**
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
 */class AE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new RE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var B;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(B||(B={}));const OE={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},DE=B.INFO,LE={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},ME=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=LE[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lc{constructor(e){this.name=e,this._logLevel=DE,this._logHandler=ME,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}const bE=(t,e)=>e.some(n=>t instanceof n);let bh,Fh;function FE(){return bh||(bh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function UE(){return Fh||(Fh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gg=new WeakMap,_u=new WeakMap,_g=new WeakMap,da=new WeakMap,Mc=new WeakMap;function jE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(un(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gg.set(n,t)}).catch(()=>{}),Mc.set(e,t),e}function zE(t){if(_u.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});_u.set(t,e)}let vu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _u.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_g.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function WE(t){vu=t(vu)}function VE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ha(this),e,...n);return _g.set(r,e.sort?e.sort():[e]),un(r)}:UE().includes(t)?function(...e){return t.apply(ha(this),e),un(gg.get(this))}:function(...e){return un(t.apply(ha(this),e))}}function BE(t){return typeof t=="function"?VE(t):(t instanceof IDBTransaction&&zE(t),bE(t,FE())?new Proxy(t,vu):t)}function un(t){if(t instanceof IDBRequest)return jE(t);if(da.has(t))return da.get(t);const e=BE(t);return e!==t&&(da.set(t,e),Mc.set(e,t)),e}const ha=t=>Mc.get(t);function HE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=un(o);return r&&o.addEventListener("upgradeneeded",a=>{r(un(o.result),a.oldVersion,a.newVersion,un(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const $E=["get","getKey","getAll","getAllKeys","count"],GE=["put","add","delete","clear"],fa=new Map;function Uh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fa.get(e))return fa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=GE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||$E.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return fa.set(e,s),s}WE(t=>({...t,get:(e,n,r)=>Uh(e,n)||t.get(e,n,r),has:(e,n)=>!!Uh(e,n)||t.has(e,n)}));/**
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
 */class KE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function QE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yu="@firebase/app",jh="0.10.13";/**
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
 */const Lt=new Lc("@firebase/app"),YE="@firebase/app-compat",qE="@firebase/analytics-compat",XE="@firebase/analytics",JE="@firebase/app-check-compat",ZE="@firebase/app-check",e0="@firebase/auth",t0="@firebase/auth-compat",n0="@firebase/database",r0="@firebase/data-connect",i0="@firebase/database-compat",s0="@firebase/functions",o0="@firebase/functions-compat",l0="@firebase/installations",a0="@firebase/installations-compat",u0="@firebase/messaging",c0="@firebase/messaging-compat",d0="@firebase/performance",h0="@firebase/performance-compat",f0="@firebase/remote-config",p0="@firebase/remote-config-compat",m0="@firebase/storage",g0="@firebase/storage-compat",_0="@firebase/firestore",v0="@firebase/vertexai-preview",y0="@firebase/firestore-compat",w0="firebase",E0="10.14.1";/**
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
 */const wu="[DEFAULT]",S0={[yu]:"fire-core",[YE]:"fire-core-compat",[XE]:"fire-analytics",[qE]:"fire-analytics-compat",[ZE]:"fire-app-check",[JE]:"fire-app-check-compat",[e0]:"fire-auth",[t0]:"fire-auth-compat",[n0]:"fire-rtdb",[r0]:"fire-data-connect",[i0]:"fire-rtdb-compat",[s0]:"fire-fn",[o0]:"fire-fn-compat",[l0]:"fire-iid",[a0]:"fire-iid-compat",[u0]:"fire-fcm",[c0]:"fire-fcm-compat",[d0]:"fire-perf",[h0]:"fire-perf-compat",[f0]:"fire-rc",[p0]:"fire-rc-compat",[m0]:"fire-gcs",[g0]:"fire-gcs-compat",[_0]:"fire-fst",[y0]:"fire-fst-compat",[v0]:"fire-vertex","fire-js":"fire-js",[w0]:"fire-js-all"};/**
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
 */const Uo=new Map,C0=new Map,Eu=new Map;function zh(t,e){try{t.container.addComponent(e)}catch(n){Lt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Dr(t){const e=t.name;if(Eu.has(e))return Lt.debug(`There were multiple attempts to register component ${e}.`),!1;Eu.set(e,t);for(const n of Uo.values())zh(n,t);for(const n of C0.values())zh(n,t);return!0}function bc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ct(t){return t.settings!==void 0}/**
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
 */const I0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},cn=new hs("app","Firebase",I0);/**
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
 */class k0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cn.create("app-deleted",{appName:this._name})}}/**
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
 */const Br=E0;function vg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw cn.create("bad-app-name",{appName:String(i)});if(n||(n=hg()),!n)throw cn.create("no-options");const s=Uo.get(i);if(s){if(Fo(n,s.options)&&Fo(r,s.config))return s;throw cn.create("duplicate-app",{appName:i})}const o=new AE(i);for(const a of Eu.values())o.addComponent(a);const l=new k0(n,r,o);return Uo.set(i,l),l}function yg(t=wu){const e=Uo.get(t);if(!e&&t===wu&&hg())return vg();if(!e)throw cn.create("no-app",{appName:t});return e}function dn(t,e,n){var r;let i=(r=S0[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lt.warn(l.join(" "));return}Dr(new Bn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const T0="firebase-heartbeat-database",N0=1,Qi="firebase-heartbeat-store";let pa=null;function wg(){return pa||(pa=HE(T0,N0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qi)}catch(n){console.warn(n)}}}}).catch(t=>{throw cn.create("idb-open",{originalErrorMessage:t.message})})),pa}async function R0(t){try{const n=(await wg()).transaction(Qi),r=await n.objectStore(Qi).get(Eg(t));return await n.done,r}catch(e){if(e instanceof Cn)Lt.warn(e.message);else{const n=cn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Lt.warn(n.message)}}}async function Wh(t,e){try{const r=(await wg()).transaction(Qi,"readwrite");await r.objectStore(Qi).put(e,Eg(t)),await r.done}catch(n){if(n instanceof Cn)Lt.warn(n.message);else{const r=cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Lt.warn(r.message)}}}function Eg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const P0=1024,x0=30*24*60*60*1e3;class A0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new D0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Vh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=x0}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Lt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Vh(),{heartbeatsToSend:r,unsentEntries:i}=O0(this._heartbeatsCache.heartbeats),s=Lo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Lt.warn(n),""}}}function Vh(){return new Date().toISOString().substring(0,10)}function O0(t,e=P0){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Bh(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Bh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class D0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gE()?_E().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await R0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Bh(t){return Lo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function L0(t){Dr(new Bn("platform-logger",e=>new KE(e),"PRIVATE")),Dr(new Bn("heartbeat",e=>new A0(e),"PRIVATE")),dn(yu,jh,t),dn(yu,jh,"esm2017"),dn("fire-js","")}L0("");var Hh={};const $h="@firebase/database",Gh="1.0.8";/**
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
 */let Sg="";function M0(t){Sg=t}/**
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
 */class b0{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),le(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ki(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class F0{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return zt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Cg=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new b0(e)}}catch{}return new F0},Ln=Cg("localStorage"),U0=Cg("sessionStorage");/**
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
 */const wr=new Lc("@firebase/database"),j0=function(){let t=1;return function(){return t++}}(),Ig=function(t){const e=NE(t),n=new CE;n.update(e);const r=n.digest();return xc.encodeByteArray(r)},fs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=fs.apply(null,r):typeof r=="object"?e+=le(r):e+=r,e+=" "}return e};let Ii=null,Kh=!0;const z0=function(t,e){C(!0,"Can't turn on custom loggers persistently."),wr.logLevel=B.VERBOSE,Ii=wr.log.bind(wr)},Se=function(...t){if(Kh===!0&&(Kh=!1,Ii===null&&U0.get("logging_enabled")===!0&&z0()),Ii){const e=fs.apply(null,t);Ii(e)}},ps=function(t){return function(...e){Se(t,...e)}},Su=function(...t){const e="FIREBASE INTERNAL ERROR: "+fs(...t);wr.error(e)},Mt=function(...t){const e=`FIREBASE FATAL ERROR: ${fs(...t)}`;throw wr.error(e),new Error(e)},Ue=function(...t){const e="FIREBASE WARNING: "+fs(...t);wr.warn(e)},W0=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ue("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},kg=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},V0=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Lr="[MIN_NAME]",Hn="[MAX_NAME]",Hr=function(t,e){if(t===e)return 0;if(t===Lr||e===Hn)return-1;if(e===Lr||t===Hn)return 1;{const n=Qh(t),r=Qh(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},B0=function(t,e){return t===e?0:t<e?-1:1},si=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+le(e))},Fc=function(t){if(typeof t!="object"||t===null)return le(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=le(e[r]),n+=":",n+=Fc(t[e[r]]);return n+="}",n},Tg=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function je(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ng=function(t){C(!kg(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(a=0;a<64;a+=8){let h=parseInt(c.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},H0=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$0=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function G0(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const K0=new RegExp("^-?(0*)\\d{1,10}$"),Q0=-2147483648,Y0=2147483647,Qh=function(t){if(K0.test(t)){const e=Number(t);if(e>=Q0&&e<=Y0)return e}return null},$r=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ue("Exception was thrown by user callback.",n),e},Math.floor(0))}},q0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ki=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class X0{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ue(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class J0{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ue(e)}}class ro{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ro.OWNER="owner";/**
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
 */const Uc="5",Rg="v",Pg="s",xg="r",Ag="f",Og=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Dg="ls",Lg="p",Cu="ac",Mg="websocket",bg="long_polling";/**
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
 */class Fg{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ln.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ln.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Z0(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ug(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let r;if(e===Mg)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===bg)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Z0(t)&&(n.ns=t.namespace);const i=[];return je(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class eS{constructor(){this.counters_={}}incrementCounter(e,n=1){zt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return iE(this.counters_)}}/**
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
 */const ma={},ga={};function jc(t){const e=t.toString();return ma[e]||(ma[e]=new eS),ma[e]}function tS(t,e){const n=t.toString();return ga[n]||(ga[n]=e()),ga[n]}/**
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
 */class nS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&$r(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Yh="start",rS="close",iS="pLPCommand",sS="pRTLPCB",jg="id",zg="pw",Wg="ser",oS="cb",lS="seg",aS="ts",uS="d",cS="dframe",Vg=1870,Bg=30,dS=Vg-Bg,hS=25e3,fS=3e4;class hr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ps(e),this.stats_=jc(n),this.urlFn=a=>(this.appCheckToken&&(a[Cu]=this.appCheckToken),Ug(n,bg,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new nS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(fS)),V0(()=>{if(this.isClosed_)return;this.scriptTagHolder=new zc((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Yh)this.id=l,this.password=a;else if(o===rS)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Yh]="t",r[Wg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[oS]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Rg]=Uc,this.transportSessionId&&(r[Pg]=this.transportSessionId),this.lastSessionId&&(r[Dg]=this.lastSessionId),this.applicationId&&(r[Lg]=this.applicationId),this.appCheckToken&&(r[Cu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Og.test(location.hostname)&&(r[xg]=Ag);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){hr.forceAllow_=!0}static forceDisallow(){hr.forceDisallow_=!0}static isAvailable(){return hr.forceAllow_?!0:!hr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!H0()&&!$0()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=le(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ug(n),i=Tg(r,dS);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[cS]="t",r[jg]=e,r[zg]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=le(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class zc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=j0(),window[iS+this.uniqueCallbackIdentifier]=e,window[sS+this.uniqueCallbackIdentifier]=n,this.myIFrame=zc.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Se("frame writing exception"),l.stack&&Se(l.stack),Se(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Se("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[jg]=this.myID,e[zg]=this.myPW,e[Wg]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Bg+r.length<=Vg;){const o=this.pendingSegs.shift();r=r+"&"+lS+i+"="+o.seg+"&"+aS+i+"="+o.ts+"&"+uS+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(hS)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const pS=16384,mS=45e3;let jo=null;typeof MozWebSocket<"u"?jo=MozWebSocket:typeof WebSocket<"u"&&(jo=WebSocket);class rt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ps(this.connId),this.stats_=jc(n),this.connURL=rt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Rg]=Uc,typeof location<"u"&&location.hostname&&Og.test(location.hostname)&&(o[xg]=Ag),n&&(o[Pg]=n),r&&(o[Dg]=r),i&&(o[Cu]=i),s&&(o[Lg]=s),Ug(e,Mg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ln.set("previous_websocket_failure",!0);try{let r;mE(),this.mySock=new jo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){rt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&jo!==null&&!rt.forceDisallow_}static previouslyFailed(){return Ln.isInMemoryStorage||Ln.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ln.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ki(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=le(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Tg(n,pS);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(mS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}rt.responsesRequiredToBeHealthy=2;rt.healthyTimeout=3e4;/**
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
 */class Yi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[hr,rt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=rt&&rt.isAvailable();let r=n&&!rt.previouslyFailed();if(e.webSocketOnly&&(n||Ue("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[rt];else{const i=this.transports_=[];for(const s of Yi.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Yi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Yi.globalTransportInitialized_=!1;/**
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
 */const gS=6e4,_S=5e3,vS=10*1024,yS=100*1024,_a="t",qh="d",wS="s",Xh="r",ES="e",Jh="o",Zh="a",ef="n",tf="p",SS="h";class CS{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ps("c:"+this.id+":"),this.transportManager_=new Yi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ki(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>yS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>vS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(_a in e){const n=e[_a];n===Zh?this.upgradeIfSecondaryHealthy_():n===Xh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Jh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=si("t",e),r=si("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Zh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ef,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=si("t",e),r=si("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=si(_a,e);if(qh in e){const r=e[qh];if(n===SS){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===ef){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===wS?this.onConnectionShutdown_(r):n===Xh?this.onReset_(r):n===ES?Su("Server Error: "+r):n===Jh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Su("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Uc!==r&&Ue("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ki(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(gS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ki(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(_S))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ln.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Hg{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class $g{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class zo extends $g{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Oc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new zo}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const nf=32,rf=768;class H{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function W(){return new H("")}function L(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function _n(t){return t.pieces_.length-t.pieceNum_}function $(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new H(t.pieces_,e)}function Gg(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function IS(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Kg(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Qg(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new H(e,0)}function ae(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof H)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new H(n,0)}function F(t){return t.pieceNum_>=t.pieces_.length}function Ne(t,e){const n=L(t),r=L(e);if(n===null)return e;if(n===r)return Ne($(t),$(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Wc(t,e){if(_n(t)!==_n(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function it(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(_n(t)>_n(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class kS{constructor(e,n){this.errorPrefix_=n,this.parts_=Kg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=wl(this.parts_[r]);Yg(this)}}function TS(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=wl(e),Yg(t)}function NS(t){const e=t.parts_.pop();t.byteLength_-=wl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Yg(t){if(t.byteLength_>rf)throw new Error(t.errorPrefix_+"has a key path longer than "+rf+" bytes ("+t.byteLength_+").");if(t.parts_.length>nf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+nf+") or object contains a cycle "+xn(t))}function xn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Vc extends $g{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Vc}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const oi=1e3,RS=60*5*1e3,sf=30*1e3,PS=1.3,xS=3e4,AS="server_kill",of=3;class Pt extends Hg{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Pt.nextPersistentConnectionId_++,this.log_=ps("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=oi,this.maxReconnectDelay_=RS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Vc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&zo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(le(s)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new yl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Pt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&zt(e,"w")){const r=Or(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ue(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||SE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=sf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=EE(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+le(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Su("Unrecognized action received from server: "+le(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=oi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=oi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>xS&&(this.reconnectDelay_=oi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*PS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Pt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){C(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Se("getToken() completed but was canceled"):(Se("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,l=new CS(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Ue(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(AS)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Ue(d),a())}}}interrupt(e){Se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gu(this.interruptReasons_)&&(this.reconnectDelay_=oi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Fc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new H(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Se("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=of&&(this.reconnectDelay_=sf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Se("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=of&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Sg.replace(/\./g,"-")]=1,Oc()?e["framework.cordova"]=1:pg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=zo.getInstance().currentlyOnline();return gu(this.interruptReasons_)&&e}}Pt.nextPersistentConnectionId_=0;Pt.nextConnectionId_=0;/**
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
 */class M{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new M(e,n)}}/**
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
 */class El{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new M(Lr,e),i=new M(Lr,n);return this.compare(r,i)!==0}minPost(){return M.MIN}}/**
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
 */let Vs;class qg extends El{static get __EMPTY_NODE(){return Vs}static set __EMPTY_NODE(e){Vs=e}compare(e,n){return Hr(e.name,n.name)}isDefinedOn(e){throw Wr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return M.MIN}maxPost(){return new M(Hn,Vs)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new M(e,Vs)}toString(){return".key"}}const Er=new qg;/**
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
 */class Bs{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??fe.RED,this.left=i??Le.EMPTY_NODE,this.right=s??Le.EMPTY_NODE}copy(e,n,r,i,s){return new fe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Le.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}fe.RED=!0;fe.BLACK=!1;class OS{copy(e,n,r,i,s){return this}insert(e,n,r){return new fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Le{constructor(e,n=Le.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Le(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,fe.BLACK,null,null))}remove(e){return new Le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,fe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Bs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Bs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Bs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Bs(this.root_,null,this.comparator_,!0,e)}}Le.EMPTY_NODE=new OS;/**
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
 */function DS(t,e){return Hr(t.name,e.name)}function Bc(t,e){return Hr(t,e)}/**
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
 */let Iu;function LS(t){Iu=t}const Xg=function(t){return typeof t=="number"?"number:"+Ng(t):"string:"+t},Jg=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&zt(e,".sv"),"Priority must be a string or number.")}else C(t===Iu||t.isEmpty(),"priority of unexpected type.");C(t===Iu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let lf;class de{constructor(e,n=de.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Jg(this.priorityNode_)}static set __childrenNodeConstructor(e){lf=e}static get __childrenNodeConstructor(){return lf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new de(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return F(e)?this:L(e)===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:de.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=L(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(C(r!==".priority"||_n(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,de.__childrenNodeConstructor.EMPTY_NODE.updateChild($(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ng(this.value_):e+=this.value_,this.lazyHash_=Ig(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===de.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof de.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=de.VALUE_TYPE_ORDER.indexOf(n),s=de.VALUE_TYPE_ORDER.indexOf(r);return C(i>=0,"Unknown leaf type: "+n),C(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}de.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Zg,e_;function MS(t){Zg=t}function bS(t){e_=t}class FS extends El{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Hr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return M.MIN}maxPost(){return new M(Hn,new de("[PRIORITY-POST]",e_))}makePost(e,n){const r=Zg(e);return new M(n,new de("[PRIORITY-POST]",r))}toString(){return".priority"}}const ne=new FS;/**
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
 */const US=Math.log(2);class jS{constructor(e){const n=s=>parseInt(Math.log(s)/US,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Wo=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let d,h;if(c===0)return null;if(c===1)return d=t[a],h=n?n(d):d,new fe(h,d.node,fe.BLACK,null,null);{const _=parseInt(c/2,10)+a,v=i(a,_),y=i(_+1,u);return d=t[_],h=n?n(d):d,new fe(h,d.node,fe.BLACK,v,y)}},s=function(a){let u=null,c=null,d=t.length;const h=function(v,y){const S=d-v,p=d;d-=v;const f=i(S+1,p),g=t[S],w=n?n(g):g;_(new fe(w,g.node,y,null,f))},_=function(v){u?(u.left=v,u=v):(c=v,u=v)};for(let v=0;v<a.count;++v){const y=a.nextBitIsOne(),S=Math.pow(2,a.count-(v+1));y?h(S,fe.BLACK):(h(S,fe.BLACK),h(S,fe.RED))}return c},o=new jS(t.length),l=s(o);return new Le(r||e,l)};/**
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
 */let va;const Zn={};class It{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return C(Zn&&ne,"ChildrenNode.ts has not been loaded"),va=va||new It({".priority":Zn},{".priority":ne}),va}get(e){const n=Or(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Le?n:null}hasIndex(e){return zt(this.indexSet_,e.toString())}addIndex(e,n){C(e!==Er,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(M.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Wo(r,e.getCompare()):l=Zn;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new It(c,u)}addToIndexes(e,n){const r=bo(this.indexes_,(i,s)=>{const o=Or(this.indexSet_,s);if(C(o,"Missing index implementation for "+s),i===Zn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(M.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Wo(l,o.getCompare())}else return Zn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new M(e.name,l))),a.insert(e,e.node)}});return new It(r,this.indexSet_)}removeFromIndexes(e,n){const r=bo(this.indexes_,i=>{if(i===Zn)return i;{const s=n.get(e.name);return s?i.remove(new M(e.name,s)):i}});return new It(r,this.indexSet_)}}/**
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
 */let li;class x{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Jg(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return li||(li=new x(new Le(Bc),null,It.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||li}updatePriority(e){return this.children_.isEmpty()?this:new x(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?li:n}}getChild(e){const n=L(e);return n===null?this:this.getImmediateChild(n).getChild($(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new M(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?li:this.priorityNode_;return new x(i,o,s)}}updateChild(e,n){const r=L(e);if(r===null)return n;{C(L(e)!==".priority"||_n(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild($(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ne,(o,l)=>{n[o]=l.val(e),r++,s&&x.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xg(this.getPriority().val())+":"),this.forEachChild(ne,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Ig(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new M(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new M(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new M(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,M.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,M.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ms?-1:0}withIndex(e){if(e===Er||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new x(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Er||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ne),i=n.getIterator(ne);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Er?null:this.indexMap_.get(e.toString())}}x.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class zS extends x{constructor(){super(new Le(Bc),x.EMPTY_NODE,It.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return x.EMPTY_NODE}isEmpty(){return!1}}const ms=new zS;Object.defineProperties(M,{MIN:{value:new M(Lr,x.EMPTY_NODE)},MAX:{value:new M(Hn,ms)}});qg.__EMPTY_NODE=x.EMPTY_NODE;de.__childrenNodeConstructor=x;LS(ms);bS(ms);/**
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
 */const WS=!0;function pe(t,e=null){if(t===null)return x.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new de(n,pe(e))}if(!(t instanceof Array)&&WS){const n=[];let r=!1;if(je(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=pe(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new M(o,a)))}}),n.length===0)return x.EMPTY_NODE;const s=Wo(n,DS,o=>o.name,Bc);if(r){const o=Wo(n,ne.getCompare());return new x(s,pe(e),new It({".priority":o},{".priority":ne}))}else return new x(s,pe(e),It.Default)}else{let n=x.EMPTY_NODE;return je(t,(r,i)=>{if(zt(t,r)&&r.substring(0,1)!=="."){const s=pe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(pe(e))}}MS(pe);/**
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
 */class VS extends El{constructor(e){super(),this.indexPath_=e,C(!F(e)&&L(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Hr(e.name,n.name):s}makePost(e,n){const r=pe(e),i=x.EMPTY_NODE.updateChild(this.indexPath_,r);return new M(n,i)}maxPost(){const e=x.EMPTY_NODE.updateChild(this.indexPath_,ms);return new M(Hn,e)}toString(){return Kg(this.indexPath_,0).join("/")}}/**
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
 */class BS extends El{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Hr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return M.MIN}maxPost(){return M.MAX}makePost(e,n){const r=pe(e);return new M(n,r)}toString(){return".value"}}const HS=new BS;/**
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
 */function t_(t){return{type:"value",snapshotNode:t}}function Mr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function qi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Xi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function $S(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Hc{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(qi(n,l)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Mr(n,r)):o.trackChildChange(Xi(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ne,(i,s)=>{n.hasChild(i)||r.trackChildChange(qi(i,s))}),n.isLeafNode()||n.forEachChild(ne,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Xi(i,s,o))}else r.trackChildChange(Mr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?x.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ji{constructor(e){this.indexedFilter_=new Hc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ji.getStartPost_(e),this.endPost_=Ji.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new M(n,r))||(r=x.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=x.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(x.EMPTY_NODE);const s=this;return n.forEachChild(ne,(o,l)=>{s.matches(new M(o,l))||(i=i.updateImmediateChild(o,x.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class GS{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ji(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new M(n,r))||(r=x.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=x.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=x.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(x.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,x.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,_)=>d(_,h)}else o=this.index_.getCompare();const l=e;C(l.numChildren()===this.limit_,"");const a=new M(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,a);if(c&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(Xi(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(qi(n,d));const y=l.updateImmediateChild(n,x.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Mr(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:c&&o(u,a)>=0?(s!=null&&(s.trackChildChange(qi(u.name,u.node)),s.trackChildChange(Mr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,x.EMPTY_NODE)):e}}/**
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
 */class $c{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ne}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Lr}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Hn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ne}copy(){const e=new $c;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function KS(t){return t.loadsAllData()?new Hc(t.getIndex()):t.hasLimit()?new GS(t):new Ji(t)}function af(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ne?n="$priority":t.index_===HS?n="$value":t.index_===Er?n="$key":(C(t.index_ instanceof VS,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=le(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=le(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+le(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=le(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+le(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function uf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ne&&(e.i=t.index_.toString()),e}/**
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
 */class Vo extends Hg{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ps("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Vo.getListenId_(e,r),l={};this.listens_[o]=l;const a=af(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Or(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Vo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=af(e._queryParams),r=e._path.toString(),i=new yl;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Vr(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Ki(l.responseText)}catch{Ue("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Ue("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class QS{constructor(){this.rootNode_=x.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Bo(){return{value:null,children:new Map}}function n_(t,e,n){if(F(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=L(e);t.children.has(r)||t.children.set(r,Bo());const i=t.children.get(r);e=$(e),n_(i,e,n)}}function ku(t,e,n){t.value!==null?n(e,t.value):YS(t,(r,i)=>{const s=new H(e.toString()+"/"+r);ku(i,s,n)})}function YS(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class qS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&je(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const cf=10*1e3,XS=30*1e3,JS=5*60*1e3;class ZS{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new qS(e);const r=cf+(XS-cf)*Math.random();ki(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;je(e,(i,s)=>{s>0&&zt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ki(this.reportStats_.bind(this),Math.floor(Math.random()*2*JS))}}/**
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
 */var st;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(st||(st={}));function r_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Gc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Kc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ho{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=st.ACK_USER_WRITE,this.source=r_()}operationForChild(e){if(F(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new H(e));return new Ho(W(),n,this.revert)}}else return C(L(this.path)===e,"operationForChild called for unrelated child."),new Ho($(this.path),this.affectedTree,this.revert)}}/**
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
 */class Zi{constructor(e,n){this.source=e,this.path=n,this.type=st.LISTEN_COMPLETE}operationForChild(e){return F(this.path)?new Zi(this.source,W()):new Zi(this.source,$(this.path))}}/**
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
 */class $n{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=st.OVERWRITE}operationForChild(e){return F(this.path)?new $n(this.source,W(),this.snap.getImmediateChild(e)):new $n(this.source,$(this.path),this.snap)}}/**
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
 */class es{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=st.MERGE}operationForChild(e){if(F(this.path)){const n=this.children.subtree(new H(e));return n.isEmpty()?null:n.value?new $n(this.source,W(),n.value):new es(this.source,W(),n)}else return C(L(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new es(this.source,$(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class vn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(F(e))return this.isFullyInitialized()&&!this.filtered_;const n=L(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class eC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function tC(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push($S(o.childName,o.snapshotNode))}),ai(t,i,"child_removed",e,r,n),ai(t,i,"child_added",e,r,n),ai(t,i,"child_moved",s,r,n),ai(t,i,"child_changed",e,r,n),ai(t,i,"value",e,r,n),i}function ai(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>rC(t,l,a)),o.forEach(l=>{const a=nC(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function nC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function rC(t,e,n){if(e.childName==null||n.childName==null)throw Wr("Should only compare child_ events.");const r=new M(e.childName,e.snapshotNode),i=new M(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Sl(t,e){return{eventCache:t,serverCache:e}}function Ti(t,e,n,r){return Sl(new vn(e,n,r),t.serverCache)}function i_(t,e,n,r){return Sl(t.eventCache,new vn(e,n,r))}function $o(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Gn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let ya;const iC=()=>(ya||(ya=new Le(B0)),ya);class Y{constructor(e,n=iC()){this.value=e,this.children=n}static fromObject(e){let n=new Y(null);return je(e,(r,i)=>{n=n.set(new H(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:W(),value:this.value};if(F(e))return null;{const r=L(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue($(e),n);return s!=null?{path:ae(new H(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(F(e))return this;{const n=L(e),r=this.children.get(n);return r!==null?r.subtree($(e)):new Y(null)}}set(e,n){if(F(e))return new Y(n,this.children);{const r=L(e),s=(this.children.get(r)||new Y(null)).set($(e),n),o=this.children.insert(r,s);return new Y(this.value,o)}}remove(e){if(F(e))return this.children.isEmpty()?new Y(null):new Y(null,this.children);{const n=L(e),r=this.children.get(n);if(r){const i=r.remove($(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Y(null):new Y(this.value,s)}else return this}}get(e){if(F(e))return this.value;{const n=L(e),r=this.children.get(n);return r?r.get($(e)):null}}setTree(e,n){if(F(e))return n;{const r=L(e),s=(this.children.get(r)||new Y(null)).setTree($(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Y(this.value,o)}}fold(e){return this.fold_(W(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ae(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,W(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(F(e))return null;{const s=L(e),o=this.children.get(s);return o?o.findOnPath_($(e),ae(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,W(),n)}foreachOnPath_(e,n,r){if(F(e))return this;{this.value&&r(n,this.value);const i=L(e),s=this.children.get(i);return s?s.foreachOnPath_($(e),ae(n,i),r):new Y(null)}}foreach(e){this.foreach_(W(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ae(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class at{constructor(e){this.writeTree_=e}static empty(){return new at(new Y(null))}}function Ni(t,e,n){if(F(e))return new at(new Y(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ne(i,e);return s=s.updateChild(o,n),new at(t.writeTree_.set(i,s))}else{const i=new Y(n),s=t.writeTree_.setTree(e,i);return new at(s)}}}function df(t,e,n){let r=t;return je(n,(i,s)=>{r=Ni(r,ae(e,i),s)}),r}function hf(t,e){if(F(e))return at.empty();{const n=t.writeTree_.setTree(e,new Y(null));return new at(n)}}function Tu(t,e){return qn(t,e)!=null}function qn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ne(n.path,e)):null}function ff(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ne,(r,i)=>{e.push(new M(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new M(r,i.value))}),e}function hn(t,e){if(F(e))return t;{const n=qn(t,e);return n!=null?new at(new Y(n)):new at(t.writeTree_.subtree(e))}}function Nu(t){return t.writeTree_.isEmpty()}function br(t,e){return s_(W(),t.writeTree_,e)}function s_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(C(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=s_(ae(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ae(t,".priority"),r)),n}}/**
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
 */function Cl(t,e){return u_(e,t)}function sC(t,e,n,r,i){C(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ni(t.visibleWrites,e,n)),t.lastWriteId=r}function oC(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function lC(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&aC(l,r.path)?i=!1:it(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return uC(t),!0;if(r.snap)t.visibleWrites=hf(t.visibleWrites,r.path);else{const l=r.children;je(l,a=>{t.visibleWrites=hf(t.visibleWrites,ae(r.path,a))})}return!0}else return!1}function aC(t,e){if(t.snap)return it(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&it(ae(t.path,n),e))return!0;return!1}function uC(t){t.visibleWrites=o_(t.allWrites,cC,W()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function cC(t){return t.visible}function o_(t,e,n){let r=at.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)it(n,o)?(l=Ne(n,o),r=Ni(r,l,s.snap)):it(o,n)&&(l=Ne(o,n),r=Ni(r,W(),s.snap.getChild(l)));else if(s.children){if(it(n,o))l=Ne(n,o),r=df(r,l,s.children);else if(it(o,n))if(l=Ne(o,n),F(l))r=df(r,W(),s.children);else{const a=Or(s.children,L(l));if(a){const u=a.getChild($(l));r=Ni(r,W(),u)}}}else throw Wr("WriteRecord should have .snap or .children")}}return r}function l_(t,e,n,r,i){if(!r&&!i){const s=qn(t.visibleWrites,e);if(s!=null)return s;{const o=hn(t.visibleWrites,e);if(Nu(o))return n;if(n==null&&!Tu(o,W()))return null;{const l=n||x.EMPTY_NODE;return br(o,l)}}}else{const s=hn(t.visibleWrites,e);if(!i&&Nu(s))return n;if(!i&&n==null&&!Tu(s,W()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(it(u.path,e)||it(e,u.path))},l=o_(t.allWrites,o,e),a=n||x.EMPTY_NODE;return br(l,a)}}}function dC(t,e,n){let r=x.EMPTY_NODE;const i=qn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ne,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=hn(t.visibleWrites,e);return n.forEachChild(ne,(o,l)=>{const a=br(hn(s,new H(o)),l);r=r.updateImmediateChild(o,a)}),ff(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=hn(t.visibleWrites,e);return ff(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function hC(t,e,n,r,i){C(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ae(e,n);if(Tu(t.visibleWrites,s))return null;{const o=hn(t.visibleWrites,s);return Nu(o)?i.getChild(n):br(o,i.getChild(n))}}function fC(t,e,n,r){const i=ae(e,n),s=qn(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=hn(t.visibleWrites,i);return br(o,r.getNode().getImmediateChild(n))}else return null}function pC(t,e){return qn(t.visibleWrites,e)}function mC(t,e,n,r,i,s,o){let l;const a=hn(t.visibleWrites,e),u=qn(a,W());if(u!=null)l=u;else if(n!=null)l=br(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],d=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=h.getNext();for(;_&&c.length<i;)d(_,r)!==0&&c.push(_),_=h.getNext();return c}else return[]}function gC(){return{visibleWrites:at.empty(),allWrites:[],lastWriteId:-1}}function Go(t,e,n,r){return l_(t.writeTree,t.treePath,e,n,r)}function Qc(t,e){return dC(t.writeTree,t.treePath,e)}function pf(t,e,n,r){return hC(t.writeTree,t.treePath,e,n,r)}function Ko(t,e){return pC(t.writeTree,ae(t.treePath,e))}function _C(t,e,n,r,i,s){return mC(t.writeTree,t.treePath,e,n,r,i,s)}function Yc(t,e,n){return fC(t.writeTree,t.treePath,e,n)}function a_(t,e){return u_(ae(t.treePath,e),t.writeTree)}function u_(t,e){return{treePath:t,writeTree:e}}/**
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
 */class vC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Xi(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,qi(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Mr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Xi(r,e.snapshotNode,i.oldSnap));else throw Wr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class yC{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const c_=new yC;class qc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new vn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Gn(this.viewCache_),s=_C(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function wC(t){return{filter:t}}function EC(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function SC(t,e,n,r,i){const s=new vC;let o,l;if(n.type===st.OVERWRITE){const u=n;u.source.fromUser?o=Ru(t,e,u.path,u.snap,r,i,s):(C(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!F(u.path),o=Qo(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===st.MERGE){const u=n;u.source.fromUser?o=IC(t,e,u.path,u.children,r,i,s):(C(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Pu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===st.ACK_USER_WRITE){const u=n;u.revert?o=NC(t,e,u.path,r,i,s):o=kC(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===st.LISTEN_COMPLETE)o=TC(t,e,n.path,r,s);else throw Wr("Unknown operation type: "+n.type);const a=s.getChanges();return CC(e,o,a),{viewCache:o,changes:a}}function CC(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=$o(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(t_($o(e)))}}function d_(t,e,n,r,i,s){const o=e.eventCache;if(Ko(r,n)!=null)return e;{let l,a;if(F(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Gn(e),c=u instanceof x?u:x.EMPTY_NODE,d=Qc(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Go(r,Gn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=L(n);if(u===".priority"){C(_n(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const d=pf(r,n,c,a);d!=null?l=t.filter.updatePriority(c,d):l=o.getNode()}else{const c=$(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=pf(r,n,o.getNode(),a);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=Yc(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,c,i,s):l=o.getNode()}}return Ti(e,l,o.isFullyInitialized()||F(n),t.filter.filtersNodes())}}function Qo(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(F(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),_,null)}else{const _=L(n);if(!a.isCompleteForPath(n)&&_n(n)>1)return e;const v=$(n),S=a.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?u=c.updatePriority(a.getNode(),S):u=c.updateChild(a.getNode(),_,S,v,c_,null)}const d=i_(e,u,a.isFullyInitialized()||F(n),c.filtersNodes()),h=new qc(i,d,s);return d_(t,d,n,i,h,l)}function Ru(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new qc(i,e,s);if(F(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Ti(e,u,!0,t.filter.filtersNodes());else{const d=L(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Ti(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=$(n),_=l.getNode().getImmediateChild(d);let v;if(F(h))v=r;else{const y=c.getCompleteChild(d);y!=null?Gg(h)===".priority"&&y.getChild(Qg(h)).isEmpty()?v=y:v=y.updateChild(h,r):v=x.EMPTY_NODE}if(_.equals(v))a=e;else{const y=t.filter.updateChild(l.getNode(),d,v,h,c,o);a=Ti(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function mf(t,e){return t.eventCache.isCompleteForChild(e)}function IC(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=ae(n,a);mf(e,L(c))&&(l=Ru(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=ae(n,a);mf(e,L(c))||(l=Ru(t,l,c,u,i,s,o))}),l}function gf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Pu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;F(n)?u=r:u=new Y(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),v=gf(t,_,h);a=Qo(t,a,new H(d),v,i,s,o,l)}}),u.children.inorderTraversal((d,h)=>{const _=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!_){const v=e.serverCache.getNode().getImmediateChild(d),y=gf(t,v,h);a=Qo(t,a,new H(d),y,i,s,o,l)}}),a}function kC(t,e,n,r,i,s,o){if(Ko(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(F(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Qo(t,e,n,a.getNode().getChild(n),i,s,l,o);if(F(n)){let u=new Y(null);return a.getNode().forEachChild(Er,(c,d)=>{u=u.set(new H(c),d)}),Pu(t,e,n,u,i,s,l,o)}else return e}else{let u=new Y(null);return r.foreach((c,d)=>{const h=ae(n,c);a.isCompleteForPath(h)&&(u=u.set(c,a.getNode().getChild(h)))}),Pu(t,e,n,u,i,s,l,o)}}function TC(t,e,n,r,i){const s=e.serverCache,o=i_(e,s.getNode(),s.isFullyInitialized()||F(n),s.isFiltered());return d_(t,o,n,r,c_,i)}function NC(t,e,n,r,i,s){let o;if(Ko(r,n)!=null)return e;{const l=new qc(r,e,i),a=e.eventCache.getNode();let u;if(F(n)||L(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Go(r,Gn(e));else{const d=e.serverCache.getNode();C(d instanceof x,"serverChildren would be complete if leaf node"),c=Qc(r,d)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=L(n);let d=Yc(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=a.getImmediateChild(c)),d!=null?u=t.filter.updateChild(a,c,d,$(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,x.EMPTY_NODE,$(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Go(r,Gn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Ko(r,W())!=null,Ti(e,u,o,t.filter.filtersNodes())}}/**
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
 */class RC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Hc(r.getIndex()),s=KS(r);this.processor_=wC(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(x.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(x.EMPTY_NODE,l.getNode(),null),c=new vn(a,o.isFullyInitialized(),i.filtersNodes()),d=new vn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Sl(d,c),this.eventGenerator_=new eC(this.query_)}get query(){return this.query_}}function PC(t){return t.viewCache_.serverCache.getNode()}function xC(t){return $o(t.viewCache_)}function AC(t,e){const n=Gn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!F(e)&&!n.getImmediateChild(L(e)).isEmpty())?n.getChild(e):null}function _f(t){return t.eventRegistrations_.length===0}function OC(t,e){t.eventRegistrations_.push(e)}function vf(t,e,n){const r=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function yf(t,e,n,r){e.type===st.MERGE&&e.source.queryId!==null&&(C(Gn(t.viewCache_),"We should always have a full cache before handling merges"),C($o(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=SC(t.processor_,i,e,n,r);return EC(t.processor_,s.viewCache),C(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,h_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function DC(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ne,(s,o)=>{r.push(Mr(s,o))}),n.isFullyInitialized()&&r.push(t_(n.getNode())),h_(t,r,n.getNode(),e)}function h_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return tC(t.eventGenerator_,e,n,i)}/**
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
 */let Yo;class f_{constructor(){this.views=new Map}}function LC(t){C(!Yo,"__referenceConstructor has already been defined"),Yo=t}function MC(){return C(Yo,"Reference.ts has not been loaded"),Yo}function bC(t){return t.views.size===0}function Xc(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return C(s!=null,"SyncTree gave us an op for an invalid query."),yf(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(yf(o,e,n,r));return s}}function p_(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Go(n,i?r:null),a=!1;l?a=!0:r instanceof x?(l=Qc(n,r),a=!1):(l=x.EMPTY_NODE,a=!1);const u=Sl(new vn(l,a,!1),new vn(r,i,!1));return new RC(e,u)}return o}function FC(t,e,n,r,i,s){const o=p_(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),OC(o,n),DC(o,n)}function UC(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=yn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(vf(u,n,r)),_f(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(vf(a,n,r)),_f(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!yn(t)&&s.push(new(MC())(e._repo,e._path)),{removed:s,events:o}}function m_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function fn(t,e){let n=null;for(const r of t.views.values())n=n||AC(r,e);return n}function g_(t,e){if(e._queryParams.loadsAllData())return Il(t);{const r=e._queryIdentifier;return t.views.get(r)}}function __(t,e){return g_(t,e)!=null}function yn(t){return Il(t)!=null}function Il(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let qo;function jC(t){C(!qo,"__referenceConstructor has already been defined"),qo=t}function zC(){return C(qo,"Reference.ts has not been loaded"),qo}let WC=1;class wf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Y(null),this.pendingWriteTree_=gC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function v_(t,e,n,r,i){return sC(t.pendingWriteTree_,e,n,r,i),i?_s(t,new $n(r_(),e,n)):[]}function Mn(t,e,n=!1){const r=oC(t.pendingWriteTree_,e);if(lC(t.pendingWriteTree_,e)){let s=new Y(null);return r.snap!=null?s=s.set(W(),!0):je(r.children,o=>{s=s.set(new H(o),!0)}),_s(t,new Ho(r.path,s,n))}else return[]}function gs(t,e,n){return _s(t,new $n(Gc(),e,n))}function VC(t,e,n){const r=Y.fromObject(n);return _s(t,new es(Gc(),e,r))}function BC(t,e){return _s(t,new Zi(Gc(),e))}function HC(t,e,n){const r=Zc(t,n);if(r){const i=ed(r),s=i.path,o=i.queryId,l=Ne(s,e),a=new Zi(Kc(o),l);return td(t,s,a)}else return[]}function Xo(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||__(o,e))){const a=UC(o,e,n,r);bC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,_)=>yn(_));if(c&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const _=KC(h);for(let v=0;v<_.length;++v){const y=_[v],S=y.query,p=S_(t,y);t.listenProvider_.startListening(Ri(S),ts(t,S),p.hashFn,p.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Ri(e),null):u.forEach(h=>{const _=t.queryToTagMap.get(kl(h));t.listenProvider_.stopListening(Ri(h),_)}))}QC(t,u)}return l}function y_(t,e,n,r){const i=Zc(t,r);if(i!=null){const s=ed(i),o=s.path,l=s.queryId,a=Ne(o,e),u=new $n(Kc(l),a,n);return td(t,o,u)}else return[]}function $C(t,e,n,r){const i=Zc(t,r);if(i){const s=ed(i),o=s.path,l=s.queryId,a=Ne(o,e),u=Y.fromObject(n),c=new es(Kc(l),a,u);return td(t,o,c)}else return[]}function xu(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,_)=>{const v=Ne(h,i);s=s||fn(_,v),o=o||yn(_)});let l=t.syncPointTree_.get(i);l?(o=o||yn(l),s=s||fn(l,W())):(l=new f_,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=x.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const y=fn(v,W());y&&(s=s.updateImmediateChild(_,y))}));const u=__(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=kl(e);C(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const _=YC();t.queryToTagMap.set(h,_),t.tagToQueryMap.set(_,h)}const c=Cl(t.pendingWriteTree_,i);let d=FC(l,e,n,c,s,a);if(!u&&!o&&!r){const h=g_(l,e);d=d.concat(qC(t,e,h))}return d}function Jc(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ne(o,e),u=fn(l,a);if(u)return u});return l_(i,e,s,n,!0)}function GC(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=Ne(u,n);r=r||fn(c,d)});let i=t.syncPointTree_.get(n);i?r=r||fn(i,W()):(i=new f_,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new vn(r,!0,!1):null,l=Cl(t.pendingWriteTree_,e._path),a=p_(i,e,l,s?o.getNode():x.EMPTY_NODE,s);return xC(a)}function _s(t,e){return w_(e,t.syncPointTree_,null,Cl(t.pendingWriteTree_,W()))}function w_(t,e,n,r){if(F(t.path))return E_(t,e,n,r);{const i=e.get(W());n==null&&i!=null&&(n=fn(i,W()));let s=[];const o=L(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=a_(r,o);s=s.concat(w_(l,a,u,c))}return i&&(s=s.concat(Xc(i,t,r,n))),s}}function E_(t,e,n,r){const i=e.get(W());n==null&&i!=null&&(n=fn(i,W()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=a_(r,o),c=t.operationForChild(o);c&&(s=s.concat(E_(c,l,a,u)))}),i&&(s=s.concat(Xc(i,t,r,n))),s}function S_(t,e){const n=e.query,r=ts(t,n);return{hashFn:()=>(PC(e)||x.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?HC(t,n._path,r):BC(t,n._path);{const s=G0(i,n);return Xo(t,n,null,s)}}}}function ts(t,e){const n=kl(e);return t.queryToTagMap.get(n)}function kl(t){return t._path.toString()+"$"+t._queryIdentifier}function Zc(t,e){return t.tagToQueryMap.get(e)}function ed(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new H(t.substr(0,e))}}function td(t,e,n){const r=t.syncPointTree_.get(e);C(r,"Missing sync point for query tag that we're tracking");const i=Cl(t.pendingWriteTree_,e);return Xc(r,n,i,null)}function KC(t){return t.fold((e,n,r)=>{if(n&&yn(n))return[Il(n)];{let i=[];return n&&(i=m_(n)),je(r,(s,o)=>{i=i.concat(o)}),i}})}function Ri(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(zC())(t._repo,t._path):t}function QC(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=kl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function YC(){return WC++}function qC(t,e,n){const r=e._path,i=ts(t,e),s=S_(t,n),o=t.listenProvider_.startListening(Ri(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)C(!yn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,d)=>{if(!F(u)&&c&&yn(c))return[Il(c).query];{let h=[];return c&&(h=h.concat(m_(c).map(_=>_.query))),je(d,(_,v)=>{h=h.concat(v)}),h}});for(let u=0;u<a.length;++u){const c=a[u];t.listenProvider_.stopListening(Ri(c),ts(t,c))}}return o}/**
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
 */class nd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new nd(n)}node(){return this.node_}}class rd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ae(this.path_,e);return new rd(this.syncTree_,n)}node(){return Jc(this.syncTree_,this.path_)}}const XC=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ef=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return JC(t[".sv"],e,n);if(typeof t[".sv"]=="object")return ZC(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},JC=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},ZC=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&C(!1,"Unexpected increment value: "+r);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},eI=function(t,e,n,r){return id(e,new rd(n,t),r)},C_=function(t,e,n){return id(t,new nd(e),n)};function id(t,e,n){const r=t.getPriority().val(),i=Ef(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Ef(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new de(l,pe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new de(i))),o.forEachChild(ne,(l,a)=>{const u=id(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class sd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function od(t,e){let n=e instanceof H?e:new H(e),r=t,i=L(n);for(;i!==null;){const s=Or(r.node.children,i)||{children:{},childCount:0};r=new sd(i,r,s),n=$(n),i=L(n)}return r}function Gr(t){return t.node.value}function I_(t,e){t.node.value=e,Au(t)}function k_(t){return t.node.childCount>0}function tI(t){return Gr(t)===void 0&&!k_(t)}function Tl(t,e){je(t.node.children,(n,r)=>{e(new sd(n,t,r))})}function T_(t,e,n,r){n&&e(t),Tl(t,i=>{T_(i,e,!0)})}function nI(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function vs(t){return new H(t.parent===null?t.name:vs(t.parent)+"/"+t.name)}function Au(t){t.parent!==null&&rI(t.parent,t.name,t)}function rI(t,e,n){const r=tI(n),i=zt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Au(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Au(t))}/**
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
 */const iI=/[\[\].#$\/\u0000-\u001F\u007F]/,sI=/[\[\].#$\u0000-\u001F\u007F]/,wa=10*1024*1024,N_=function(t){return typeof t=="string"&&t.length!==0&&!iI.test(t)},R_=function(t){return typeof t=="string"&&t.length!==0&&!sI.test(t)},oI=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),R_(t)},P_=function(t,e,n,r){r&&e===void 0||ld(Dc(t,"value"),e,n)},ld=function(t,e,n){const r=n instanceof H?new kS(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+xn(r));if(typeof e=="function")throw new Error(t+"contains a function "+xn(r)+" with contents = "+e.toString());if(kg(e))throw new Error(t+"contains "+e.toString()+" "+xn(r));if(typeof e=="string"&&e.length>wa/3&&wl(e)>wa)throw new Error(t+"contains a string greater than "+wa+" utf8 bytes "+xn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(je(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!N_(o)))throw new Error(t+" contains an invalid key ("+o+") "+xn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);TS(r,o),ld(t,l,r),NS(r)}),i&&s)throw new Error(t+' contains ".value" child '+xn(r)+" in addition to actual children.")}},x_=function(t,e,n,r){if(!R_(n))throw new Error(Dc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},lI=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),x_(t,e,n)},ad=function(t,e){if(L(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},aI=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!N_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!oI(n))throw new Error(Dc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class uI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ud(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Wc(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function A_(t,e,n){ud(t,n),O_(t,r=>Wc(r,e))}function vt(t,e,n){ud(t,n),O_(t,r=>it(r,e)||it(e,r))}function O_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(cI(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function cI(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ii&&Se("event: "+n.toString()),$r(r)}}}/**
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
 */const dI="repo_interrupt",hI=25;class fI{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new uI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Bo(),this.transactionQueueTree_=new sd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function pI(t,e,n){if(t.stats_=jc(t.repoInfo_),t.forceRestClient_||q0())t.server_=new Vo(t.repoInfo_,(r,i,s,o)=>{Sf(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Cf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{le(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Pt(t.repoInfo_,e,(r,i,s,o)=>{Sf(t,r,i,s,o)},r=>{Cf(t,r)},r=>{mI(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=tS(t.repoInfo_,()=>new ZS(t.stats_,t.server_)),t.infoData_=new QS,t.infoSyncTree_=new wf({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=gs(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),dd(t,"connected",!1),t.serverSyncTree_=new wf({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);vt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function D_(t){const n=t.infoData_.getNode(new H(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function cd(t){return XC({timestamp:D_(t)})}function Sf(t,e,n,r,i){t.dataUpdateCount++;const s=new H(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=bo(n,u=>pe(u));o=$C(t.serverSyncTree_,s,a,i)}else{const a=pe(n);o=y_(t.serverSyncTree_,s,a,i)}else if(r){const a=bo(n,u=>pe(u));o=VC(t.serverSyncTree_,s,a)}else{const a=pe(n);o=gs(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Rl(t,s)),vt(t.eventQueue_,l,o)}function Cf(t,e){dd(t,"connected",e),e===!1&&vI(t)}function mI(t,e){je(e,(n,r)=>{dd(t,n,r)})}function dd(t,e,n){const r=new H("/.info/"+e),i=pe(n);t.infoData_.updateSnapshot(r,i);const s=gs(t.infoSyncTree_,r,i);vt(t.eventQueue_,r,s)}function L_(t){return t.nextWriteId_++}function gI(t,e,n){const r=GC(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=pe(i).withIndex(e._queryParams.getIndex());xu(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=gs(t.serverSyncTree_,e._path,s);else{const l=ts(t.serverSyncTree_,e);o=y_(t.serverSyncTree_,e._path,s,l)}return vt(t.eventQueue_,e._path,o),Xo(t.serverSyncTree_,e,n,null,!0),s},i=>(Nl(t,"get for query "+le(e)+" failed: "+i),Promise.reject(new Error(i))))}function _I(t,e,n,r,i){Nl(t,"set",{path:e.toString(),value:n,priority:r});const s=cd(t),o=pe(n,r),l=Jc(t.serverSyncTree_,e),a=C_(o,l,s),u=L_(t),c=v_(t.serverSyncTree_,e,a,u,!0);ud(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(h,_)=>{const v=h==="ok";v||Ue("set at "+e+" failed: "+h);const y=Mn(t.serverSyncTree_,u,!v);vt(t.eventQueue_,e,y),EI(t,i,h,_)});const d=j_(t,e);Rl(t,d),vt(t.eventQueue_,d,[])}function vI(t){Nl(t,"onDisconnectEvents");const e=cd(t),n=Bo();ku(t.onDisconnect_,W(),(i,s)=>{const o=eI(i,s,t.serverSyncTree_,e);n_(n,i,o)});let r=[];ku(n,W(),(i,s)=>{r=r.concat(gs(t.serverSyncTree_,i,s));const o=j_(t,i);Rl(t,o)}),t.onDisconnect_=Bo(),vt(t.eventQueue_,W(),r)}function yI(t,e,n){let r;L(e._path)===".info"?r=xu(t.infoSyncTree_,e,n):r=xu(t.serverSyncTree_,e,n),A_(t.eventQueue_,e._path,r)}function If(t,e,n){let r;L(e._path)===".info"?r=Xo(t.infoSyncTree_,e,n):r=Xo(t.serverSyncTree_,e,n),A_(t.eventQueue_,e._path,r)}function wI(t){t.persistentConnection_&&t.persistentConnection_.interrupt(dI)}function Nl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Se(n,...e)}function EI(t,e,n,r){e&&$r(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function M_(t,e,n){return Jc(t.serverSyncTree_,e,n)||x.EMPTY_NODE}function hd(t,e=t.transactionQueueTree_){if(e||Pl(t,e),Gr(e)){const n=F_(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&SI(t,vs(e),n)}else k_(e)&&Tl(e,n=>{hd(t,n)})}function SI(t,e,n){const r=n.map(u=>u.currentWriteId),i=M_(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];C(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=Ne(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Nl(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(Mn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Pl(t,od(t.transactionQueueTree_,e)),hd(t,t.transactionQueueTree_),vt(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)$r(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Ue("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Rl(t,e)}},o)}function Rl(t,e){const n=b_(t,e),r=vs(n),i=F_(t,n);return CI(t,i,r),r}function CI(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Ne(n,a.path);let c=!1,d;if(C(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,d=a.abortReason,i=i.concat(Mn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=hI)c=!0,d="maxretry",i=i.concat(Mn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=M_(t,a.path,o);a.currentInputSnapshot=h;const _=e[l].update(h.val());if(_!==void 0){ld("transaction failed: Data returned ",_,a.path);let v=pe(_);typeof _=="object"&&_!=null&&zt(_,".priority")||(v=v.updatePriority(h.getPriority()));const S=a.currentWriteId,p=cd(t),f=C_(v,h,p);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=f,a.currentWriteId=L_(t),o.splice(o.indexOf(S),1),i=i.concat(v_(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(Mn(t.serverSyncTree_,S,!0))}else c=!0,d="nodata",i=i.concat(Mn(t.serverSyncTree_,a.currentWriteId,!0))}vt(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}Pl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)$r(r[l]);hd(t,t.transactionQueueTree_)}function b_(t,e){let n,r=t.transactionQueueTree_;for(n=L(e);n!==null&&Gr(r)===void 0;)r=od(r,n),e=$(e),n=L(e);return r}function F_(t,e){const n=[];return U_(t,e,n),n.sort((r,i)=>r.order-i.order),n}function U_(t,e,n){const r=Gr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Tl(e,i=>{U_(t,i,n)})}function Pl(t,e){const n=Gr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,I_(e,n.length>0?n:void 0)}Tl(e,r=>{Pl(t,r)})}function j_(t,e){const n=vs(b_(t,e)),r=od(t.transactionQueueTree_,e);return nI(r,i=>{Ea(t,i)}),Ea(t,r),T_(r,i=>{Ea(t,i)}),n}function Ea(t,e){const n=Gr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Mn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?I_(e,void 0):n.length=s+1,vt(t.eventQueue_,vs(e),i);for(let o=0;o<r.length;o++)$r(r[o])}}/**
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
 */function II(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function kI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ue(`Invalid query segment '${n}' in query '${t}'`)}return e}const kf=function(t,e){const n=TI(t),r=n.namespace;n.domain==="firebase.com"&&Mt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Mt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||W0();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Fg(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new H(n.pathString)}},TI=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=II(t.substring(c,d)));const h=kI(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */const Tf="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",NI=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Tf.charAt(n%64),n=Math.floor(n/64);C(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Tf.charAt(e[i]);return C(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class RI{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+le(this.snapshot.exportVal())}}class PI{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class z_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class fd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return F(this._path)?null:Gg(this._path)}get ref(){return new Wt(this._repo,this._path)}get _queryIdentifier(){const e=uf(this._queryParams),n=Fc(e);return n==="{}"?"default":n}get _queryObject(){return uf(this._queryParams)}isEqual(e){if(e=Ie(e),!(e instanceof fd))return!1;const n=this._repo===e._repo,r=Wc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+IS(this._path)}}class Wt extends fd{constructor(e,n){super(e,n,new $c,!1)}get parent(){const e=Qg(this._path);return e===null?null:new Wt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ns{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new H(e),r=rs(this.ref,e);return new ns(this._node.getChild(n),r,ne)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ns(i,rs(this.ref,r),ne)))}hasChild(e){const n=new H(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function bt(t,e){return t=Ie(t),t._checkNotDeleted("ref"),e!==void 0?rs(t._root,e):t._root}function rs(t,e){return t=Ie(t),L(t._path)===null?lI("child","path",e):x_("child","path",e),new Wt(t._repo,ae(t._path,e))}function W_(t,e){t=Ie(t),ad("push",t._path),P_("push",e,t._path,!0);const n=D_(t._repo),r=NI(n),i=rs(t,r),s=rs(t,r);let o;return e!=null?o=ys(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function V_(t){return ad("remove",t._path),ys(t,null)}function ys(t,e){t=Ie(t),ad("set",t._path),P_("set",e,t._path,!1);const n=new yl;return _I(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function xI(t){t=Ie(t);const e=new z_(()=>{}),n=new xl(e);return gI(t._repo,t,n).then(r=>new ns(r,new Wt(t._repo,t._path),t._queryParams.getIndex()))}class xl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new RI("value",this,new ns(e.snapshotNode,new Wt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new PI(this,e,n):null}matches(e){return e instanceof xl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function AI(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(c,d)=>{If(t._repo,t,l),a(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new z_(n,s||void 0),l=new xl(o);return yI(t._repo,t,l),()=>If(t._repo,t,l)}function OI(t,e,n,r){return AI(t,"value",e,n,r)}LC(Wt);jC(Wt);/**
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
 */const DI="FIREBASE_DATABASE_EMULATOR_HOST",Ou={};let LI=!1;function MI(t,e,n,r){t.repoInfo_=new Fg(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function bI(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Mt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Se("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=kf(s,i),l=o.repoInfo,a;typeof process<"u"&&Hh&&(a=Hh[DI]),a?(s=`http://${a}?ns=${l.namespace}`,o=kf(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new J0(t.name,t.options,e);aI("Invalid Firebase Database URL",o),F(o.path)||Mt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=UI(l,t,u,new X0(t.name,n));return new jI(c,t)}function FI(t,e){const n=Ou[e];(!n||n[t.key]!==t)&&Mt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),wI(t),delete n[t.key]}function UI(t,e,n,r){let i=Ou[e.name];i||(i={},Ou[e.name]=i);let s=i[t.toURLString()];return s&&Mt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new fI(t,LI,n,r),i[t.toURLString()]=s,s}class jI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(pI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Wt(this._repo,W())),this._rootInternal}_delete(){return this._rootInternal!==null&&(FI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Mt("Cannot call "+e+" on a deleted database.")}}function zI(t=yg(),e){const n=bc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=cE("database");r&&WI(n,...r)}return n}function WI(t,e,n,r={}){t=Ie(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Mt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Mt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ro(ro.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:dE(r.mockUserToken,t.app.options.projectId);s=new ro(o)}MI(i,e,n,s)}/**
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
 */function VI(t){M0(Br),Dr(new Bn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return bI(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),dn($h,Gh,t),dn($h,Gh,"esm2017")}/**
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
 */const BI={".sv":"timestamp"};function io(){return BI}Pt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Pt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};VI();var HI="firebase",$I="10.14.1";/**
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
 */dn(HI,$I,"app");function pd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function B_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GI=B_,H_=new hs("auth","Firebase",B_());/**
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
 */const Jo=new Lc("@firebase/auth");function KI(t,...e){Jo.logLevel<=B.WARN&&Jo.warn(`Auth (${Br}): ${t}`,...e)}function so(t,...e){Jo.logLevel<=B.ERROR&&Jo.error(`Auth (${Br}): ${t}`,...e)}/**
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
 */function ct(t,...e){throw md(t,...e)}function gt(t,...e){return md(t,...e)}function $_(t,e,n){const r=Object.assign(Object.assign({},GI()),{[e]:n});return new hs("auth","Firebase",r).create(e,{appName:t.name})}function pn(t){return $_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function md(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return H_.create(t,...e)}function A(t,e,...n){if(!t)throw md(e,...n)}function kt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw so(e),new Error(e)}function Ft(t,e){t||kt(e)}/**
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
 */function Du(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function QI(){return Nf()==="http:"||Nf()==="https:"}function Nf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function YI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(QI()||fE()||"connection"in navigator)?navigator.onLine:!0}function qI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ws{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ft(n>e,"Short delay should be less than long delay!"),this.isMobile=Oc()||pg()}get(){return YI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function gd(t,e){Ft(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class G_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const XI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const JI=new ws(3e4,6e4);function Xn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function In(t,e,n,r,i={}){return K_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Vr(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:a},s);return hE()||(u.referrerPolicy="no-referrer"),G_.fetch()(Q_(t,t.config.apiHost,n,l),u)})}async function K_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},XI),e);try{const i=new ek(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Hs(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hs(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Hs(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Hs(t,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw $_(t,c,u);ct(t,c)}}catch(i){if(i instanceof Cn)throw i;ct(t,"network-request-failed",{message:String(i)})}}async function Al(t,e,n,r,i={}){const s=await In(t,e,n,r,i);return"mfaPendingCredential"in s&&ct(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Q_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?gd(t.config,i):`${t.config.apiScheme}://${i}`}function ZI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ek{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gt(this.auth,"network-request-failed")),JI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Hs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=gt(t,e,r);return i.customData._tokenResponse=n,i}function Rf(t){return t!==void 0&&t.enterprise!==void 0}class tk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ZI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function nk(t,e){return In(t,"GET","/v2/recaptchaConfig",Xn(t,e))}/**
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
 */async function rk(t,e){return In(t,"POST","/v1/accounts:delete",e)}async function Y_(t,e){return In(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Pi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ik(t,e=!1){const n=Ie(t),r=await n.getIdToken(e),i=_d(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Pi(Sa(i.auth_time)),issuedAtTime:Pi(Sa(i.iat)),expirationTime:Pi(Sa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Sa(t){return Number(t)*1e3}function _d(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return so("JWT malformed, contained fewer than 3 sections"),null;try{const i=Mo(n);return i?JSON.parse(i):(so("Failed to decode base64 JWT payload"),null)}catch(i){return so("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Pf(t){const e=_d(t);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function is(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Cn&&sk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function sk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ok{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Lu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pi(this.lastLoginAt),this.creationTime=Pi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await is(t,Y_(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?q_(s.providerUserInfo):[],l=ak(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Lu(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function lk(t){const e=Ie(t);await Zo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ak(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function q_(t){return t.map(e=>{var{providerId:n}=e,r=pd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function uk(t,e){const n=await K_(t,{},async()=>{const r=Vr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Q_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",G_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ck(t,e){return In(t,"POST","/v2/accounts:revokeToken",Xn(t,e))}/**
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
 */class Sr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){A(e.length!==0,"internal-error");const n=Pf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await uk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Sr;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Sr,this.toJSON())}_performRefresh(){return kt("not implemented")}}/**
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
 */function Bt(t,e){A(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=pd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ok(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Lu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await is(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ik(this,e)}reload(){return lk(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Zo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ct(this.auth.app))return Promise.reject(pn(this.auth));const e=await this.getIdToken();return await is(this,rk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,S=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:w,isAnonymous:I,providerData:N,stsTokenManager:R}=n;A(g&&R,e,"internal-error");const P=Sr.fromJSON(this.name,R);A(typeof g=="string",e,"internal-error"),Bt(d,e.name),Bt(h,e.name),A(typeof w=="boolean",e,"internal-error"),A(typeof I=="boolean",e,"internal-error"),Bt(_,e.name),Bt(v,e.name),Bt(y,e.name),Bt(S,e.name),Bt(p,e.name),Bt(f,e.name);const K=new Tt({uid:g,auth:e,email:h,emailVerified:w,displayName:d,isAnonymous:I,photoURL:v,phoneNumber:_,tenantId:y,stsTokenManager:P,createdAt:p,lastLoginAt:f});return N&&Array.isArray(N)&&(K.providerData=N.map(b=>Object.assign({},b))),S&&(K._redirectEventId=S),K}static async _fromIdTokenResponse(e,n,r=!1){const i=new Sr;i.updateFromServerResponse(n);const s=new Tt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Zo(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];A(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?q_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Sr;l.updateFromIdToken(r);const a=new Tt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Lu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
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
 */const xf=new Map;function Nt(t){Ft(t instanceof Function,"Expected a class definition");let e=xf.get(t);return e?(Ft(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,xf.set(t,e),e)}/**
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
 */class X_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}X_.type="NONE";const Af=X_;/**
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
 */function oo(t,e,n){return`firebase:${t}:${e}:${n}`}class Cr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=oo(this.userKey,i.apiKey,s),this.fullPersistenceKey=oo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Cr(Nt(Af),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Nt(Af);const o=oo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Tt._fromJSON(e,c);u!==s&&(l=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Cr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Cr(s,e,r))}}/**
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
 */function Of(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(J_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rv(e))return"Blackberry";if(iv(e))return"Webos";if(Z_(e))return"Safari";if((e.includes("chrome/")||ev(e))&&!e.includes("edge/"))return"Chrome";if(nv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function J_(t=Pe()){return/firefox\//i.test(t)}function Z_(t=Pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ev(t=Pe()){return/crios\//i.test(t)}function tv(t=Pe()){return/iemobile/i.test(t)}function nv(t=Pe()){return/android/i.test(t)}function rv(t=Pe()){return/blackberry/i.test(t)}function iv(t=Pe()){return/webos/i.test(t)}function vd(t=Pe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dk(t=Pe()){var e;return vd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hk(){return pE()&&document.documentMode===10}function sv(t=Pe()){return vd(t)||nv(t)||iv(t)||rv(t)||/windows phone/i.test(t)||tv(t)}/**
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
 */function ov(t,e=[]){let n;switch(t){case"Browser":n=Of(Pe());break;case"Worker":n=`${Of(Pe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Br}/${r}`}/**
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
 */class fk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function pk(t,e={}){return In(t,"GET","/v2/passwordPolicy",Xn(t,e))}/**
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
 */const mk=6;class gk{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:mk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class _k{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Df(this),this.idTokenSubscription=new Df(this),this.beforeStateQueue=new fk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=H_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Cr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Y_(this,{idToken:e}),r=await Tt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ct(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ct(this.app))return Promise.reject(pn(this));const n=e?Ie(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ct(this.app)?Promise.reject(pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ct(this.app)?Promise.reject(pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pk(this),n=new gk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ck(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nt(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await Cr.create(this,[Nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ov(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&KI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Kr(t){return Ie(t)}class Df{constructor(e){this.auth=e,this.observer=null,this.addObserver=IE(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ol={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vk(t){Ol=t}function lv(t){return Ol.loadJS(t)}function yk(){return Ol.recaptchaEnterpriseScript}function wk(){return Ol.gapiScript}function Ek(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Sk="recaptcha-enterprise",Ck="NO_RECAPTCHA";class Ik{constructor(e){this.type=Sk,this.auth=Kr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{nk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new tk(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;Rf(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(Ck)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Rf(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=yk();a.length!==0&&(a+=l),lv(a).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Lf(t,e,n,r=!1){const i=new Ik(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Mf(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Lf(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Lf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function kk(t,e){const n=bc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Fo(s,e??{}))return i;ct(i,"already-initialized")}return n.initialize({options:e})}function Tk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Nk(t,e,n){const r=Kr(t);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=av(e),{host:o,port:l}=Rk(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Pk()}function av(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Rk(t){const e=av(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:bf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:bf(o)}}}function bf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Pk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class yd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kt("not implemented")}_getIdTokenResponse(e){return kt("not implemented")}_linkToIdToken(e,n){return kt("not implemented")}_getReauthenticationResolver(e){return kt("not implemented")}}async function xk(t,e){return In(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Ak(t,e){return Al(t,"POST","/v1/accounts:signInWithPassword",Xn(t,e))}/**
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
 */async function Ok(t,e){return Al(t,"POST","/v1/accounts:signInWithEmailLink",Xn(t,e))}async function Dk(t,e){return Al(t,"POST","/v1/accounts:signInWithEmailLink",Xn(t,e))}/**
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
 */class ss extends yd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ss(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ss(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mf(e,n,"signInWithPassword",Ak);case"emailLink":return Ok(e,{email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mf(e,r,"signUpPassword",xk);case"emailLink":return Dk(e,{idToken:n,email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ir(t,e){return Al(t,"POST","/v1/accounts:signInWithIdp",Xn(t,e))}/**
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
 */const Lk="http://localhost";class Kn extends yd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Kn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=pd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Kn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ir(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ir(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ir(e,n)}buildRequest(){const e={requestUri:Lk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vr(n)}return e}}/**
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
 */function Mk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bk(t){const e=fi(pi(t)).link,n=e?fi(pi(e)).deep_link_id:null,r=fi(pi(t)).deep_link_id;return(r?fi(pi(r)).link:null)||r||n||e||t}class wd{constructor(e){var n,r,i,s,o,l;const a=fi(pi(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,c=(r=a.oobCode)!==null&&r!==void 0?r:null,d=Mk((i=a.mode)!==null&&i!==void 0?i:null);A(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=bk(e);try{return new wd(n)}catch{return null}}}/**
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
 */class Qr{constructor(){this.providerId=Qr.PROVIDER_ID}static credential(e,n){return ss._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=wd.parseLink(n);return A(r,"argument-error"),ss._fromEmailAndCode(e,r.code,r.tenantId)}}Qr.PROVIDER_ID="password";Qr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class uv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Es extends uv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Qt extends Es{constructor(){super("facebook.com")}static credential(e){return Kn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qt.PROVIDER_ID="facebook.com";/**
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
 */class Yt extends Es{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Kn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yt.credential(n,r)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
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
 */class qt extends Es{constructor(){super("github.com")}static credential(e){return Kn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.GITHUB_SIGN_IN_METHOD="github.com";qt.PROVIDER_ID="github.com";/**
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
 */class Xt extends Es{constructor(){super("twitter.com")}static credential(e,n){return Kn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xt.credential(n,r)}catch{return null}}}Xt.TWITTER_SIGN_IN_METHOD="twitter.com";Xt.PROVIDER_ID="twitter.com";/**
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
 */class Fr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Tt._fromIdTokenResponse(e,r,i),o=Ff(r);return new Fr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ff(r);return new Fr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ff(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class el extends Cn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,el.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new el(e,n,r,i)}}function cv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?el._fromErrorAndOperation(t,s,e,r):s})}async function Fk(t,e,n=!1){const r=await is(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fr._forOperation(t,"link",r)}/**
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
 */async function Uk(t,e,n=!1){const{auth:r}=t;if(Ct(r.app))return Promise.reject(pn(r));const i="reauthenticate";try{const s=await is(t,cv(r,i,e,t),n);A(s.idToken,r,"internal-error");const o=_d(s.idToken);A(o,r,"internal-error");const{sub:l}=o;return A(t.uid===l,r,"user-mismatch"),Fr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ct(r,"user-mismatch"),s}}/**
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
 */async function dv(t,e,n=!1){if(Ct(t.app))return Promise.reject(pn(t));const r="signIn",i=await cv(t,r,e),s=await Fr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function jk(t,e){return dv(Kr(t),e)}/**
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
 */async function zk(t){const e=Kr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Wk(t,e,n){return Ct(t.app)?Promise.reject(pn(t)):jk(Ie(t),Qr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&zk(t),r})}function Vk(t,e,n,r){return Ie(t).onIdTokenChanged(e,n,r)}function Bk(t,e,n){return Ie(t).beforeAuthStateChanged(e,n)}function Hk(t,e,n,r){return Ie(t).onAuthStateChanged(e,n,r)}function $k(t){return Ie(t).signOut()}const tl="__sak";/**
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
 */class hv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(tl,"1"),this.storage.removeItem(tl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Gk=1e3,Kk=10;class fv extends hv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);hk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Kk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Gk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fv.type="LOCAL";const Qk=fv;/**
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
 */class pv extends hv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pv.type="SESSION";const mv=pv;/**
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
 */function Yk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Dl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Dl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await Yk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dl.receivers=[];/**
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
 */function Ed(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class qk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Ed("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function _t(){return window}function Xk(t){_t().location.href=t}/**
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
 */function gv(){return typeof _t().WorkerGlobalScope<"u"&&typeof _t().importScripts=="function"}async function Jk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Zk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function eT(){return gv()?self:null}/**
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
 */const _v="firebaseLocalStorageDb",tT=1,nl="firebaseLocalStorage",vv="fbase_key";class Ss{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ll(t,e){return t.transaction([nl],e?"readwrite":"readonly").objectStore(nl)}function nT(){const t=indexedDB.deleteDatabase(_v);return new Ss(t).toPromise()}function Mu(){const t=indexedDB.open(_v,tT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(nl,{keyPath:vv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(nl)?e(r):(r.close(),await nT(),e(await Mu()))})})}async function Uf(t,e,n){const r=Ll(t,!0).put({[vv]:e,value:n});return new Ss(r).toPromise()}async function rT(t,e){const n=Ll(t,!1).get(e),r=await new Ss(n).toPromise();return r===void 0?null:r.value}function jf(t,e){const n=Ll(t,!0).delete(e);return new Ss(n).toPromise()}const iT=800,sT=3;class yv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dl._getInstance(eT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Jk(),!this.activeServiceWorker)return;this.sender=new qk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Zk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mu();return await Uf(e,tl,"1"),await jf(e,tl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Uf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>rT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>jf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ll(i,!1).getAll();return new Ss(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yv.type="LOCAL";const oT=yv;new ws(3e4,6e4);/**
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
 */function lT(t,e){return e?Nt(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Sd extends yd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ir(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ir(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ir(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aT(t){return dv(t.auth,new Sd(t),t.bypassAuthState)}function uT(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),Uk(n,new Sd(t),t.bypassAuthState)}async function cT(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),Fk(n,new Sd(t),t.bypassAuthState)}/**
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
 */class wv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aT;case"linkViaPopup":case"linkViaRedirect":return cT;case"reauthViaPopup":case"reauthViaRedirect":return uT;default:ct(this.auth,"internal-error")}}resolve(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const dT=new ws(2e3,1e4);class fr extends wv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,fr.currentPopupAction&&fr.currentPopupAction.cancel(),fr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){Ft(this.filter.length===1,"Popup operations only handle one event");const e=Ed();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dT.get())};e()}}fr.currentPopupAction=null;/**
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
 */const hT="pendingRedirect",lo=new Map;class fT extends wv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=lo.get(this.auth._key());if(!e){try{const r=await pT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}lo.set(this.auth._key(),e)}return this.bypassAuthState||lo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pT(t,e){const n=_T(e),r=gT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function mT(t,e){lo.set(t._key(),e)}function gT(t){return Nt(t._redirectPersistence)}function _T(t){return oo(hT,t.config.apiKey,t.name)}async function vT(t,e,n=!1){if(Ct(t.app))return Promise.reject(pn(t));const r=Kr(t),i=lT(r,e),o=await new fT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const yT=10*60*1e3;class wT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ET(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ev(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yT&&this.cachedEventUids.clear(),this.cachedEventUids.has(zf(e))}saveEventToCache(e){this.cachedEventUids.add(zf(e)),this.lastProcessedEventTime=Date.now()}}function zf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ev({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ET(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ev(t);default:return!1}}/**
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
 */async function ST(t,e={}){return In(t,"GET","/v1/projects",e)}/**
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
 */const CT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IT=/^https?/;async function kT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ST(t);for(const n of e)try{if(TT(n))return}catch{}ct(t,"unauthorized-domain")}function TT(t){const e=Du(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!IT.test(n))return!1;if(CT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const NT=new ws(3e4,6e4);function Wf(){const t=_t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function RT(t){return new Promise((e,n)=>{var r,i,s;function o(){Wf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wf(),n(gt(t,"network-request-failed"))},timeout:NT.get()})}if(!((i=(r=_t().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=_t().gapi)===null||s===void 0)&&s.load)o();else{const l=Ek("iframefcb");return _t()[l]=()=>{gapi.load?o():n(gt(t,"network-request-failed"))},lv(`${wk()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw ao=null,e})}let ao=null;function PT(t){return ao=ao||RT(t),ao}/**
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
 */const xT=new ws(5e3,15e3),AT="__/auth/iframe",OT="emulator/auth/iframe",DT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MT(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gd(e,OT):`https://${t.config.authDomain}/${AT}`,r={apiKey:e.apiKey,appName:t.name,v:Br},i=LT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Vr(r).slice(1)}`}async function bT(t){const e=await PT(t),n=_t().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:MT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=gt(t,"network-request-failed"),l=_t().setTimeout(()=>{s(o)},xT.get());function a(){_t().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const FT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UT=500,jT=600,zT="_blank",WT="http://localhost";class Vf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function VT(t,e,n,r=UT,i=jT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},FT),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Pe().toLowerCase();n&&(l=ev(u)?zT:n),J_(u)&&(e=e||WT,a.scrollbars="yes");const c=Object.entries(a).reduce((h,[_,v])=>`${h}${_}=${v},`,"");if(dk(u)&&l!=="_self")return BT(e||"",l),new Vf(null);const d=window.open(e||"",l,c);A(d,t,"popup-blocked");try{d.focus()}catch{}return new Vf(d)}function BT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const HT="__/auth/handler",$T="emulator/auth/handler",GT=encodeURIComponent("fac");async function Bf(t,e,n,r,i,s){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Br,eventId:i};if(e instanceof uv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries({}))o[c]=d}if(e instanceof Es){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const c of Object.keys(l))l[c]===void 0&&delete l[c];const a=await t._getAppCheckToken(),u=a?`#${GT}=${encodeURIComponent(a)}`:"";return`${KT(t)}?${Vr(l).slice(1)}${u}`}function KT({config:t}){return t.emulator?gd(t,$T):`https://${t.authDomain}/${HT}`}/**
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
 */const Ca="webStorageSupport";class QT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mv,this._completeRedirectFn=vT,this._overrideRedirectResult=mT}async _openPopup(e,n,r,i){var s;Ft((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Bf(e,n,r,Du(),i);return VT(e,o,Ed())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Bf(e,n,r,Du(),i);return Xk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ft(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await bT(e),r=new wT(e);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ca,{type:Ca},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ca];o!==void 0&&n(!!o),ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return sv()||Z_()||vd()}}const YT=QT;var Hf="@firebase/auth",$f="1.7.9";/**
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
 */class qT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function XT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function JT(t){Dr(new Bn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ov(t)},u=new _k(r,i,s,a);return Tk(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Dr(new Bn("auth-internal",e=>{const n=Kr(e.getProvider("auth").getImmediate());return(r=>new qT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(Hf,$f,XT(t)),dn(Hf,$f,"esm2017")}/**
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
 */const ZT=5*60,e1=fg("authIdTokenMaxAge")||ZT;let Gf=null;const t1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>e1)return;const i=n==null?void 0:n.token;Gf!==i&&(Gf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function n1(t=yg()){const e=bc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kk(t,{popupRedirectResolver:YT,persistence:[oT,Qk,mv]}),r=fg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=t1(s.toString());Bk(n,o,()=>o(n.currentUser)),Vk(n,l=>o(l))}}const i=dg("auth");return i&&Nk(n,`http://${i}`),n}function r1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}vk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=gt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",r1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});JT("Browser");const i1={apiKey:"AIzaSyDVjzDOGFRRYLwFZgwQ77eKlCQWvvxIvxk",authDomain:"picnic-c822c.firebaseapp.com",databaseURL:"https://picnic-c822c-default-rtdb.firebaseio.com",projectId:"picnic-c822c",storageBucket:"picnic-c822c.firebasestorage.app",messagingSenderId:"182444088435",appId:"1:182444088435:android:a8d1f5532c9898fd2e9e06"},Sv=vg(i1),Cd=n1(Sv),Ut=zI(Sv),s1="880";function Kf(t){return t?(Array.isArray(t)?t:Object.values(t)).filter(Boolean):[]}function o1(t,e){return{id:t,title:"",description:"",category:"",fee:"free",feeAmount:"",address:"",mapCode:"",whatsapp:"",facebook:"",...e,contacts:Kf(e.contacts),tags:Kf(e.tags)}}function l1(t){const e=(t||"").trim();return e?/^https?:\/\//i.test(e)?e:`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e)}`:null}function a1(t){return`tel:${(t||"").replace(/[^\d+]/g,"")}`}function u1(t){let e=(t||"").replace(/\D/g,"");return e?(e.startsWith("0")&&(e=s1+e.slice(1)),`https://wa.me/${e}`):null}function c1(t){const e=(t||"").trim();return e?/^https?:\/\//i.test(e)?e:/^\d+$/.test(e)?`https://www.facebook.com/profile.php?id=${e}`:`https://www.facebook.com/${e.replace(/^@/,"")}`:null}const Cv=[{id:"park",name:"Park"},{id:"swimming_pool",name:"Swimming pool"},{id:"forest",name:"Forest"}];function Iv(t,e){const[n,r]=j.useState({items:[],loading:!0,error:null});return j.useEffect(()=>OI(bt(Ut,t),s=>{const o=s.val()||{};r({items:Object.entries(o).map(([l,a])=>e(l,a)),loading:!1,error:null})},s=>r({items:[],loading:!1,error:s.message})),[t]),n}const kv=()=>Iv("places",o1);function Tv(){const t=Iv("categories",(r,i)=>({id:r,name:i.name||r,createdAt:i.createdAt||0})),e=t.items.length>0,n=e?[...t.items].sort((r,i)=>r.createdAt-i.createdAt):Cv;return{...t,items:n,isDefault:!e&&!t.loading}}const d1={pin:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>',chat:'<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',facebook:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',x:'<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',tag:'<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>',plus:'<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',edit:'<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>',trash:'<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',search:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>'};function Te({name:t,size:e=20}){return m.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:d1[t]}})}function h1({place:t,typeName:e,onClose:n}){const[r,i]=j.useState(!1);j.useEffect(()=>{const c=h=>h.key==="Escape"&&n();document.addEventListener("keydown",c);const d=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",c),document.body.style.overflow=d}},[n]);const s=l1(t.mapCode),o=u1(t.whatsapp),l=c1(t.facebook),a=t.contacts.filter(c=>c.phone),u=t.fee==="paid";return m.jsx("div",{className:"scrim",onClick:n,children:m.jsxs("article",{className:"sheet",role:"dialog","aria-modal":"true","aria-labelledby":"place-title",onClick:c=>c.stopPropagation(),children:[m.jsxs("div",{className:"sheet-head",children:[m.jsxs("div",{children:[m.jsx("h2",{id:"place-title",children:t.title}),m.jsxs("div",{className:"meta",children:[m.jsx("span",{className:"type",children:e}),m.jsx("span",{className:`badge ${u?"paid":""}`,children:u?`Paid${t.feeAmount?`: ${t.feeAmount}`:""}`:"Free entry"})]})]}),m.jsx("button",{className:"close",onClick:n,"aria-label":"Close",children:m.jsx(Te,{name:"x"})})]}),t.description&&m.jsx("p",{className:"desc",children:t.description}),(t.address||s)&&m.jsxs("section",{className:"section",children:[m.jsx("h4",{children:"Address"}),m.jsxs("div",{className:"addr-row",children:[m.jsx("p",{children:t.address||"Address not added"}),s&&m.jsxs("a",{className:"btn primary",href:s,target:"_blank",rel:"noopener noreferrer","aria-label":"Open in map app",children:[m.jsx(Te,{name:"pin",size:18})," Map"]})]})]}),(a.length>0||o||l)&&m.jsxs("section",{className:"section",children:[m.jsx("h4",{children:"Contact"}),m.jsxs("div",{className:"btn-row",children:[a.map((c,d)=>m.jsxs("a",{className:"btn",href:a1(c.phone),"aria-label":`Call ${c.name||c.phone}`,children:[m.jsx(Te,{name:"phone",size:18})," ",c.name||"Call"]},d)),o&&m.jsxs("a",{className:"btn wa",href:o,target:"_blank",rel:"noopener noreferrer",children:[m.jsx(Te,{name:"chat",size:18})," WhatsApp"]}),l&&m.jsxs("a",{className:"btn fb",href:l,target:"_blank",rel:"noopener noreferrer",children:[m.jsx(Te,{name:"facebook",size:18})," Facebook"]})]})]}),t.tags.length>0&&m.jsxs("section",{className:"section",children:[m.jsxs("button",{className:"btn",onClick:()=>i(c=>!c),"aria-expanded":r,children:[m.jsx(Te,{name:"tag",size:18})," ",r?"Hide tags":`Show tags (${t.tags.length})`]}),r&&m.jsx("div",{className:"tags",children:t.tags.map(c=>m.jsx("span",{className:"tag",children:c},c))})]})]})})}const f1=[["all","All"],["free","Free"],["paid","Paid"]];function p1(){const t=kv(),e=Tv(),[n,r]=j.useState("all"),[i,s]=j.useState("all"),[o,l]=j.useState(""),[a,u]=j.useState(null),c=j.useMemo(()=>Object.fromEntries(e.items.map(y=>[y.id,y.name])),[e.items]),d=j.useMemo(()=>{const y=o.trim().toLowerCase();return t.items.filter(S=>n==="all"||S.fee===n).filter(S=>i==="all"||S.category===i).filter(S=>!y||[S.title,S.address,...S.tags].join(" ").toLowerCase().includes(y)).sort((S,p)=>(p.createdAt||0)-(S.createdAt||0))},[t.items,n,i,o]),h=t.items.find(y=>y.id===a),_=n!=="all"||i!=="all"||o.trim()!=="";function v(){r("all"),s("all"),l("")}return m.jsxs(m.Fragment,{children:[m.jsx("header",{className:"hero",children:m.jsxs("div",{className:"plate",children:[m.jsx("h1",{children:"Find a picnic spot"}),m.jsx("p",{className:"lede",children:"Parks, swimming pools and forests, with entry fee, directions and who to call."}),m.jsxs("div",{className:"search",children:[m.jsx(Te,{name:"search",size:18}),m.jsx("input",{className:"input",type:"search",value:o,onChange:y=>l(y.target.value),placeholder:"Search by name, address or tag","aria-label":"Search places"})]})]})}),m.jsxs("main",{className:"wrap",children:[m.jsxs("div",{className:"filters",children:[m.jsxs("div",{className:"fgroup",role:"group","aria-label":"Filter by entry fee",children:[m.jsx("span",{className:"fgroup-label",children:"Entry fee"}),f1.map(([y,S])=>m.jsx("button",{className:"chip","aria-pressed":n===y,onClick:()=>r(y),children:S},y))]}),m.jsxs("div",{className:"fgroup",role:"group","aria-label":"Filter by place type",children:[m.jsx("span",{className:"fgroup-label",children:"Place"}),m.jsx("button",{className:"chip","aria-pressed":i==="all",onClick:()=>s("all"),children:"All"}),e.items.map(y=>m.jsx("button",{className:"chip","aria-pressed":i===y.id,onClick:()=>s(y.id),children:y.name},y.id))]})]}),t.error&&m.jsxs("p",{className:"err",children:["Couldn't load places: ",t.error,". Check the database rules allow public reads."]}),t.loading&&m.jsx("p",{className:"count",children:"Loading places…"}),!t.loading&&!t.error&&m.jsxs(m.Fragment,{children:[m.jsxs("p",{className:"count",children:[d.length," ",d.length===1?"place":"places"]}),d.length===0?m.jsxs("div",{className:"empty",children:[m.jsx("p",{children:_?"No places match these filters.":"No places have been added yet."}),_&&m.jsx("button",{className:"btn",onClick:v,children:"Clear filters"})]}):m.jsx("ul",{className:"list",children:d.map(y=>m.jsx("li",{children:m.jsxs("button",{className:`item ${y.fee==="paid"?"paid":""}`,onClick:()=>u(y.id),children:[m.jsxs("span",{className:"item-top",children:[m.jsx("h3",{children:y.title}),m.jsx("span",{className:`badge ${y.fee==="paid"?"paid":""}`,children:y.fee==="paid"?"Paid":"Free"})]}),m.jsx("span",{className:"type",children:c[y.category]||"Other"}),y.address&&m.jsx("p",{children:y.address})]})},y.id))})]})]}),h&&m.jsx(h1,{place:h,typeName:c[h.category]||"Other",onClose:()=>u(null)})]})}function m1(t){var e;return{title:(t==null?void 0:t.title)||"",description:(t==null?void 0:t.description)||"",category:(t==null?void 0:t.category)||"",fee:(t==null?void 0:t.fee)||"free",feeAmount:(t==null?void 0:t.feeAmount)||"",address:(t==null?void 0:t.address)||"",mapCode:(t==null?void 0:t.mapCode)||"",contacts:(e=t==null?void 0:t.contacts)!=null&&e.length?t.contacts.map(n=>({name:n.name||"",phone:n.phone||""})):[{name:"",phone:""}],whatsapp:(t==null?void 0:t.whatsapp)||"",facebook:(t==null?void 0:t.facebook)||"",tags:(t==null?void 0:t.tags)||[]}}function g1({place:t,categories:e,allTags:n,onDone:r}){const[i,s]=j.useState(()=>m1(t)),[o,l]=j.useState(""),[a,u]=j.useState(""),[c,d]=j.useState(!1),h=S=>p=>s(f=>({...f,[S]:p.target.value}));function _(S,p,f){s(g=>({...g,contacts:g.contacts.map((w,I)=>I===S?{...w,[p]:f}:w)}))}function v(S){const p=S.trim().replace(/,$/,"").trim();p&&(s(f=>f.tags.some(g=>g.toLowerCase()===p.toLowerCase())?f:{...f,tags:[...f.tags,p]}),l(""))}async function y(S){if(S.preventDefault(),u(""),!i.title.trim())return u("Add a title.");if(!i.category)return u("Choose a place type.");d(!0);try{const p=o.trim(),f=p&&!i.tags.includes(p)?[...i.tags,p]:i.tags,g={title:i.title.trim(),description:i.description.trim(),category:i.category,fee:i.fee,feeAmount:i.fee==="paid"?i.feeAmount.trim():"",address:i.address.trim(),mapCode:i.mapCode.trim(),contacts:i.contacts.map(w=>({name:w.name.trim(),phone:w.phone.trim()})).filter(w=>w.name||w.phone),whatsapp:i.whatsapp.trim(),facebook:i.facebook.trim(),tags:f,updatedAt:io()};t?(g.createdAt=t.createdAt||io(),await ys(bt(Ut,`places/${t.id}`),g)):(g.createdAt=io(),await W_(bt(Ut,"places"),g)),r()}catch(p){u(p.message),d(!1)}}return m.jsxs("form",{className:"panel",onSubmit:y,children:[m.jsx("h1",{children:t?"Edit place":"Add place"}),m.jsxs("div",{className:"field",children:[m.jsx("label",{htmlFor:"title",children:"Title"}),m.jsx("input",{id:"title",className:"input",value:i.title,onChange:h("title"),placeholder:"American Park"})]}),m.jsxs("div",{className:"field",children:[m.jsx("label",{htmlFor:"desc",children:"Description"}),m.jsx("textarea",{id:"desc",className:"input",rows:4,value:i.description,onChange:h("description"),placeholder:"What makes this place good for a picnic?"})]}),m.jsxs("div",{className:"row-2",children:[m.jsxs("div",{className:"field",children:[m.jsx("label",{htmlFor:"cat",children:"Place type"}),m.jsxs("select",{id:"cat",className:"input",value:i.category,onChange:h("category"),children:[m.jsx("option",{value:"",children:"Choose…"}),e.map(S=>m.jsx("option",{value:S.id,children:S.name},S.id))]})]}),m.jsxs("div",{className:"field",children:[m.jsx("label",{htmlFor:"fee",children:"Entry fee"}),m.jsxs("select",{id:"fee",className:"input",value:i.fee,onChange:h("fee"),children:[m.jsx("option",{value:"free",children:"Free"}),m.jsx("option",{value:"paid",children:"Paid"})]})]})]}),i.fee==="paid"&&m.jsxs("div",{className:"field",children:[m.jsx("label",{htmlFor:"amt",children:"Fee details (optional)"}),m.jsx("input",{id:"amt",className:"input",value:i.feeAmount,onChange:h("feeAmount"),placeholder:"৳50 per person"})]}),m.jsxs("div",{className:"field",children:[m.jsx("label",{htmlFor:"addr",children:"Address"}),m.jsx("input",{id:"addr",className:"input",value:i.address,onChange:h("address"),placeholder:"Road, area, city"})]}),m.jsxs("div",{className:"field",children:[m.jsx("label",{htmlFor:"map",children:"Google Map link or code"}),m.jsx("input",{id:"map",className:"input",value:i.mapCode,onChange:h("mapCode"),placeholder:"https://maps.app.goo.gl/… or 23.8103,90.4125"}),m.jsx("span",{className:"hint",children:"Paste a Google Maps share link, latitude and longitude, or a Plus Code."})]}),m.jsxs("fieldset",{className:"field",children:[m.jsx("legend",{children:"Phone contacts"}),i.contacts.map((S,p)=>m.jsxs("div",{className:"contact-edit",children:[m.jsx("input",{className:"input","aria-label":`Owner name ${p+1}`,value:S.name,onChange:f=>_(p,"name",f.target.value),placeholder:"Owner name"}),m.jsx("input",{className:"input","aria-label":`Phone number ${p+1}`,type:"tel",value:S.phone,onChange:f=>_(p,"phone",f.target.value),placeholder:"01XXXXXXXXX"}),m.jsx("button",{type:"button",className:"btn danger","aria-label":`Remove contact ${p+1}`,onClick:()=>s(f=>({...f,contacts:f.contacts.filter((g,w)=>w!==p)})),children:m.jsx(Te,{name:"trash",size:18})})]},p)),m.jsx("div",{children:m.jsxs("button",{type:"button",className:"btn",onClick:()=>s(S=>({...S,contacts:[...S.contacts,{name:"",phone:""}]})),children:[m.jsx(Te,{name:"plus",size:18})," Add contact"]})})]}),m.jsxs("div",{className:"row-2",children:[m.jsxs("div",{className:"field",children:[m.jsx("label",{htmlFor:"wa",children:"WhatsApp number"}),m.jsx("input",{id:"wa",className:"input",type:"tel",value:i.whatsapp,onChange:h("whatsapp"),placeholder:"01XXXXXXXXX"})]}),m.jsxs("div",{className:"field",children:[m.jsx("label",{htmlFor:"fb",children:"Facebook ID or link"}),m.jsx("input",{id:"fb",className:"input",value:i.facebook,onChange:h("facebook"),placeholder:"americanpark or full link"})]})]}),m.jsxs("div",{className:"field",children:[m.jsx("label",{htmlFor:"tags",children:"Tags"}),m.jsx("input",{id:"tags",className:"input",list:"tag-suggestions",value:o,onChange:S=>l(S.target.value),onKeyDown:S=>{(S.key==="Enter"||S.key===",")&&(S.preventDefault(),v(o))},onBlur:()=>v(o),placeholder:"Type a tag, then press Enter"}),m.jsx("datalist",{id:"tag-suggestions",children:n.map(S=>m.jsx("option",{value:S},S))}),m.jsx("div",{className:"tags",children:i.tags.map(S=>m.jsxs("button",{type:"button",className:"tag removable",onClick:()=>s(p=>({...p,tags:p.tags.filter(f=>f!==S)})),"aria-label":`Remove tag ${S}`,children:[S," ×"]},S))})]}),a&&m.jsx("p",{className:"err",role:"alert",children:a}),m.jsxs("div",{className:"btn-row",children:[m.jsx("button",{className:"btn primary",disabled:c,children:c?"Saving…":"Save place"}),m.jsx("button",{type:"button",className:"btn",onClick:r,disabled:c,children:"Cancel"})]})]})}function _1({cat:t}){const[e,n]=j.useState(t.name),[r,i]=j.useState("");async function s(){try{await ys(bt(Ut,`categories/${t.id}`),{name:e.trim(),createdAt:t.createdAt||Date.now()}),i("")}catch(l){i(l.message)}}async function o(){if(window.confirm(`Delete "${t.name}"? Places using it will show as Other.`))try{await V_(bt(Ut,`categories/${t.id}`))}catch(l){i(l.message)}}return m.jsxs("div",{className:"admin-row",children:[m.jsx("input",{className:"input","aria-label":"Place type name",value:e,onChange:l=>n(l.target.value)}),m.jsxs("div",{className:"btn-row",children:[m.jsx("button",{className:"btn",onClick:s,disabled:!e.trim()||e.trim()===t.name,children:"Save"}),m.jsx("button",{className:"btn danger",onClick:o,"aria-label":`Delete ${t.name}`,children:m.jsx(Te,{name:"trash",size:18})})]}),r&&m.jsx("p",{className:"err",children:r})]})}function v1({cats:t}){const[e,n]=j.useState(""),[r,i]=j.useState("");async function s(l){if(l.preventDefault(),!!e.trim())try{await W_(bt(Ut,"categories"),{name:e.trim(),createdAt:io()}),n(""),i("")}catch(a){i(a.message)}}async function o(){try{const l=Date.now();await Promise.all(Cv.map((a,u)=>ys(bt(Ut,`categories/${a.id}`),{name:a.name,createdAt:l+u})))}catch(l){i(l.message)}}return m.jsxs("div",{children:[m.jsx("p",{className:"count",children:'These appear as the "Place" filter on the public list.'}),t.isDefault&&m.jsxs("div",{className:"panel",children:[m.jsx("p",{children:"You're seeing the built-in types (Park, Swimming pool, Forest). Save them to the database to rename or delete them."}),m.jsx("button",{className:"btn primary",onClick:o,children:"Save built-in types"})]}),m.jsxs("form",{className:"admin-row",onSubmit:s,children:[m.jsx("input",{className:"input","aria-label":"New place type",placeholder:"New place type, e.g. Resort",value:e,onChange:l=>n(l.target.value)}),m.jsxs("button",{className:"btn primary",children:[m.jsx(Te,{name:"plus",size:18})," Add type"]})]}),r&&m.jsx("p",{className:"err",children:r}),!t.isDefault&&t.items.map(l=>m.jsx(_1,{cat:l},l.id+l.name))]})}function os({children:t,user:e}){return m.jsxs("div",{className:"wrap admin",children:[m.jsxs("div",{className:"topbar",children:[m.jsx("a",{href:"#/",className:"back",children:"Back to the site"}),e&&m.jsxs("button",{className:"btn",onClick:()=>$k(Cd),children:[m.jsx(Te,{name:"logout",size:18})," Sign out"]})]}),t]})}function y1(){const[t,e]=j.useState(""),[n,r]=j.useState(""),[i,s]=j.useState(""),[o,l]=j.useState(!1);async function a(u){u.preventDefault(),s(""),l(!0);try{await Wk(Cd,t.trim(),n)}catch(c){s(["auth/invalid-credential","auth/wrong-password","auth/user-not-found","auth/invalid-email"].includes(c.code)?"Email or password is incorrect.":c.message)}finally{l(!1)}}return m.jsx(os,{children:m.jsxs("form",{className:"panel login",onSubmit:a,children:[m.jsx("h1",{children:"Admin sign in"}),m.jsxs("div",{className:"field",children:[m.jsx("label",{htmlFor:"email",children:"Email"}),m.jsx("input",{id:"email",className:"input",type:"email",autoComplete:"username",value:t,onChange:u=>e(u.target.value),required:!0})]}),m.jsxs("div",{className:"field",children:[m.jsx("label",{htmlFor:"pw",children:"Password"}),m.jsx("input",{id:"pw",className:"input",type:"password",autoComplete:"current-password",value:n,onChange:u=>r(u.target.value),required:!0})]}),i&&m.jsx("p",{className:"err",role:"alert",children:i}),m.jsx("button",{className:"btn primary",disabled:o,children:o?"Signing in…":"Sign in"})]})})}function w1({user:t}){const e=kv(),n=Tv(),[r,i]=j.useState("places"),[s,o]=j.useState(null),[l,a]=j.useState(""),u=Object.fromEntries(n.items.map(_=>[_.id,_.name])),c=[...new Set(e.items.flatMap(_=>_.tags))].sort(),d=[...e.items].sort((_,v)=>(v.createdAt||0)-(_.createdAt||0));async function h(_){if(window.confirm(`Delete "${_.title}"? This can't be undone.`))try{await V_(bt(Ut,`places/${_.id}`))}catch(v){a(v.message)}}return s?m.jsx(os,{user:t,children:m.jsx(g1,{place:s==="new"?null:s,categories:n.items,allTags:c,onDone:()=>o(null)})}):m.jsxs(os,{user:t,children:[m.jsx("h1",{children:"Admin panel"}),m.jsxs("div",{className:"tabs",role:"tablist",children:[m.jsx("button",{className:"tab",role:"tab","aria-selected":r==="places",onClick:()=>i("places"),children:"Places"}),m.jsx("button",{className:"tab",role:"tab","aria-selected":r==="types",onClick:()=>i("types"),children:"Place types"})]}),r==="places"?m.jsxs(m.Fragment,{children:[m.jsxs("button",{className:"btn primary",onClick:()=>o("new"),children:[m.jsx(Te,{name:"plus",size:18})," Add place"]}),l&&m.jsx("p",{className:"err",children:l}),m.jsxs("div",{className:"admin-list",children:[d.length===0&&m.jsx("p",{className:"count",children:"No places yet. Add the first one."}),d.map(_=>m.jsxs("div",{className:"admin-row",children:[m.jsxs("div",{children:[m.jsx("strong",{children:_.title}),m.jsxs("div",{className:"count",children:[u[_.category]||"Other"," · ",_.fee==="paid"?"Paid":"Free"]})]}),m.jsxs("div",{className:"btn-row",children:[m.jsxs("button",{className:"btn",onClick:()=>o(_),"aria-label":`Edit ${_.title}`,children:[m.jsx(Te,{name:"edit",size:18})," Edit"]}),m.jsxs("button",{className:"btn danger",onClick:()=>h(_),"aria-label":`Delete ${_.title}`,children:[m.jsx(Te,{name:"trash",size:18})," Delete"]})]})]},_.id))]})]}):m.jsx(v1,{cats:n})]})}function E1(){const[t,e]=j.useState(void 0),[n,r]=j.useState(null);return j.useEffect(()=>Hk(Cd,async i=>{if(e(i),r(null),!!i)try{const s=await xI(bt(Ut,`admins/${i.uid}`));r(s.val()===!0)}catch{r(!1)}}),[]),t===void 0||t&&n===null?m.jsx(os,{children:m.jsx("p",{className:"count",children:"Checking sign-in…"})}):t?n?m.jsx(w1,{user:t}):m.jsx(os,{user:t,children:m.jsxs("div",{className:"panel",children:[m.jsx("h1",{children:"This account isn't an admin"}),m.jsxs("p",{children:["Ask the site owner to add this user ID under ",m.jsx("code",{children:"admins"})," in the database:"]}),m.jsx("p",{children:m.jsx("code",{children:t.uid})})]})}):m.jsx(y1,{})}function S1(){const[t,e]=j.useState(window.location.hash);return j.useEffect(()=>{const n=()=>e(window.location.hash);return window.addEventListener("hashchange",n),()=>window.removeEventListener("hashchange",n)},[]),t}function C1(){return S1().startsWith("#/admin")?m.jsx(E1,{}):m.jsx(p1,{})}og(document.getElementById("root")).render(m.jsx(Hv.StrictMode,{children:m.jsx(C1,{})}));
