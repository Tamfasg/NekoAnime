import{g as Ir,$ as _n}from"./index-96f033f3.js";function In(e,t){return function(){return e.apply(t,arguments)}}const{toString:Lr}=Object.prototype,{getPrototypeOf:Nt}=Object,Ye=(e=>t=>{const n=Lr.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),z=e=>(e=e.toLowerCase(),t=>Ye(t)===e),We=e=>t=>typeof t===e,{isArray:fe}=Array,pe=We("undefined");function Fr(e){return e!==null&&!pe(e)&&e.constructor!==null&&!pe(e.constructor)&&I(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ln=z("ArrayBuffer");function Mr(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ln(e.buffer),t}const zr=We("string"),I=We("function"),Fn=We("number"),qe=e=>e!==null&&typeof e=="object",Dr=e=>e===!0||e===!1,Le=e=>{if(Ye(e)!=="object")return!1;const t=Nt(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},jr=z("Date"),Ur=z("File"),Hr=z("Blob"),Br=z("FileList"),$r=e=>qe(e)&&I(e.pipe),Vr=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||I(e.append)&&((t=Ye(e))==="formdata"||t==="object"&&I(e.toString)&&e.toString()==="[object FormData]"))},Yr=z("URLSearchParams"),Wr=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function we(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,a;if(typeof e!="object"&&(e=[e]),fe(e))for(r=0,a=e.length;r<a;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let s;for(r=0;r<o;r++)s=i[r],t.call(null,e[s],s,e)}}function Mn(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,a;for(;r-- >0;)if(a=n[r],t===a.toLowerCase())return a;return null}const zn=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Dn=e=>!pe(e)&&e!==zn;function ut(){const{caseless:e}=Dn(this)&&this||{},t={},n=(r,a)=>{const i=e&&Mn(t,a)||a;Le(t[i])&&Le(r)?t[i]=ut(t[i],r):Le(r)?t[i]=ut({},r):fe(r)?t[i]=r.slice():t[i]=r};for(let r=0,a=arguments.length;r<a;r++)arguments[r]&&we(arguments[r],n);return t}const qr=(e,t,n,{allOwnKeys:r}={})=>(we(t,(a,i)=>{n&&I(a)?e[i]=In(a,n):e[i]=a},{allOwnKeys:r}),e),Gr=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Jr=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Xr=(e,t,n,r)=>{let a,i,o;const s={};if(t=t||{},e==null)return t;do{for(a=Object.getOwnPropertyNames(e),i=a.length;i-- >0;)o=a[i],(!r||r(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&Nt(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Kr=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Qr=e=>{if(!e)return null;if(fe(e))return e;let t=e.length;if(!Fn(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Zr=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Nt(Uint8Array)),ea=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let a;for(;(a=r.next())&&!a.done;){const i=a.value;t.call(e,i[0],i[1])}},ta=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},na=z("HTMLFormElement"),ra=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,a){return r.toUpperCase()+a}),Gt=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),aa=z("RegExp"),jn=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};we(n,(a,i)=>{let o;(o=t(a,i,e))!==!1&&(r[i]=o||a)}),Object.defineProperties(e,r)},ia=e=>{jn(e,(t,n)=>{if(I(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(I(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},oa=(e,t)=>{const n={},r=a=>{a.forEach(i=>{n[i]=!0})};return fe(e)?r(e):r(String(e).split(t)),n},sa=()=>{},fa=(e,t)=>(e=+e,Number.isFinite(e)?e:t),nt="abcdefghijklmnopqrstuvwxyz",Jt="0123456789",Un={DIGIT:Jt,ALPHA:nt,ALPHA_DIGIT:nt+nt.toUpperCase()+Jt},ca=(e=16,t=Un.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function la(e){return!!(e&&I(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const ua=e=>{const t=new Array(10),n=(r,a)=>{if(qe(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[a]=r;const i=fe(r)?[]:{};return we(r,(o,s)=>{const c=n(o,a+1);!pe(c)&&(i[s]=c)}),t[a]=void 0,i}}return r};return n(e,0)},ma=z("AsyncFunction"),da=e=>e&&(qe(e)||I(e))&&I(e.then)&&I(e.catch),u={isArray:fe,isArrayBuffer:Ln,isBuffer:Fr,isFormData:Vr,isArrayBufferView:Mr,isString:zr,isNumber:Fn,isBoolean:Dr,isObject:qe,isPlainObject:Le,isUndefined:pe,isDate:jr,isFile:Ur,isBlob:Hr,isRegExp:aa,isFunction:I,isStream:$r,isURLSearchParams:Yr,isTypedArray:Zr,isFileList:Br,forEach:we,merge:ut,extend:qr,trim:Wr,stripBOM:Gr,inherits:Jr,toFlatObject:Xr,kindOf:Ye,kindOfTest:z,endsWith:Kr,toArray:Qr,forEachEntry:ea,matchAll:ta,isHTMLForm:na,hasOwnProperty:Gt,hasOwnProp:Gt,reduceDescriptors:jn,freezeMethods:ia,toObjectSet:oa,toCamelCase:ra,noop:sa,toFiniteNumber:fa,findKey:Mn,global:zn,isContextDefined:Dn,ALPHABET:Un,generateString:ca,isSpecCompliantForm:la,toJSONObject:ua,isAsyncFn:ma,isThenable:da};function w(e,t,n,r,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),a&&(this.response=a)}u.inherits(w,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:u.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Hn=w.prototype,Bn={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Bn[e]={value:e}});Object.defineProperties(w,Bn);Object.defineProperty(Hn,"isAxiosError",{value:!0});w.from=(e,t,n,r,a,i)=>{const o=Object.create(Hn);return u.toFlatObject(e,o,function(c){return c!==Error.prototype},s=>s!=="isAxiosError"),w.call(o,e.message,t,n,r,a),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const pa=null;function mt(e){return u.isPlainObject(e)||u.isArray(e)}function $n(e){return u.endsWith(e,"[]")?e.slice(0,-2):e}function Xt(e,t,n){return e?e.concat(t).map(function(a,i){return a=$n(a),!n&&i?"["+a+"]":a}).join(n?".":""):t}function ha(e){return u.isArray(e)&&!e.some(mt)}const ba=u.toFlatObject(u,{},null,function(t){return/^is[A-Z]/.test(t)});function Ge(e,t,n){if(!u.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=u.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(g,x){return!u.isUndefined(x[g])});const r=n.metaTokens,a=n.visitor||l,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&u.isSpecCompliantForm(t);if(!u.isFunction(a))throw new TypeError("visitor must be a function");function f(d){if(d===null)return"";if(u.isDate(d))return d.toISOString();if(!c&&u.isBlob(d))throw new w("Blob is not supported. Use a Buffer instead.");return u.isArrayBuffer(d)||u.isTypedArray(d)?c&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function l(d,g,x){let A=d;if(d&&!x&&typeof d=="object"){if(u.endsWith(g,"{}"))g=r?g:g.slice(0,-2),d=JSON.stringify(d);else if(u.isArray(d)&&ha(d)||(u.isFileList(d)||u.endsWith(g,"[]"))&&(A=u.toArray(d)))return g=$n(g),A.forEach(function(S,R){!(u.isUndefined(S)||S===null)&&t.append(o===!0?Xt([g],R,i):o===null?g:g+"[]",f(S))}),!1}return mt(d)?!0:(t.append(Xt(x,g,i),f(d)),!1)}const m=[],v=Object.assign(ba,{defaultVisitor:l,convertValue:f,isVisitable:mt});function h(d,g){if(!u.isUndefined(d)){if(m.indexOf(d)!==-1)throw Error("Circular reference detected in "+g.join("."));m.push(d),u.forEach(d,function(A,k){(!(u.isUndefined(A)||A===null)&&a.call(t,A,u.isString(k)?k.trim():k,g,v))===!0&&h(A,g?g.concat(k):[k])}),m.pop()}}if(!u.isObject(e))throw new TypeError("data must be an object");return h(e),t}function Kt(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Tt(e,t){this._pairs=[],e&&Ge(e,this,t)}const Vn=Tt.prototype;Vn.append=function(t,n){this._pairs.push([t,n])};Vn.toString=function(t){const n=t?function(r){return t.call(this,r,Kt)}:Kt;return this._pairs.map(function(a){return n(a[0])+"="+n(a[1])},"").join("&")};function va(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Yn(e,t,n){if(!t)return e;const r=n&&n.encode||va,a=n&&n.serialize;let i;if(a?i=a(t,n):i=u.isURLSearchParams(t)?t.toString():new Tt(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class ga{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){u.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Qt=ga,Wn={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ya=typeof URLSearchParams<"u"?URLSearchParams:Tt,wa=typeof FormData<"u"?FormData:null,xa=typeof Blob<"u"?Blob:null,ka=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Aa=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),L={isBrowser:!0,classes:{URLSearchParams:ya,FormData:wa,Blob:xa},isStandardBrowserEnv:ka,isStandardBrowserWebWorkerEnv:Aa,protocols:["http","https","file","blob","url","data"]};function Ea(e,t){return Ge(e,new L.classes.URLSearchParams,Object.assign({visitor:function(n,r,a,i){return L.isNode&&u.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Oa(e){return u.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Sa(e){const t={},n=Object.keys(e);let r;const a=n.length;let i;for(r=0;r<a;r++)i=n[r],t[i]=e[i];return t}function qn(e){function t(n,r,a,i){let o=n[i++];const s=Number.isFinite(+o),c=i>=n.length;return o=!o&&u.isArray(a)?a.length:o,c?(u.hasOwnProp(a,o)?a[o]=[a[o],r]:a[o]=r,!s):((!a[o]||!u.isObject(a[o]))&&(a[o]=[]),t(n,r,a[o],i)&&u.isArray(a[o])&&(a[o]=Sa(a[o])),!s)}if(u.isFormData(e)&&u.isFunction(e.entries)){const n={};return u.forEachEntry(e,(r,a)=>{t(Oa(r),a,n,0)}),n}return null}function Pa(e,t,n){if(u.isString(e))try{return(t||JSON.parse)(e),u.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Rt={transitional:Wn,adapter:L.isNode?"http":"xhr",transformRequest:[function(t,n){const r=n.getContentType()||"",a=r.indexOf("application/json")>-1,i=u.isObject(t);if(i&&u.isHTMLForm(t)&&(t=new FormData(t)),u.isFormData(t))return a&&a?JSON.stringify(qn(t)):t;if(u.isArrayBuffer(t)||u.isBuffer(t)||u.isStream(t)||u.isFile(t)||u.isBlob(t))return t;if(u.isArrayBufferView(t))return t.buffer;if(u.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Ea(t,this.formSerializer).toString();if((s=u.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Ge(s?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||a?(n.setContentType("application/json",!1),Pa(t)):t}],transformResponse:[function(t){const n=this.transitional||Rt.transitional,r=n&&n.forcedJSONParsing,a=this.responseType==="json";if(t&&u.isString(t)&&(r&&!this.responseType||a)){const o=!(n&&n.silentJSONParsing)&&a;try{return JSON.parse(t)}catch(s){if(o)throw s.name==="SyntaxError"?w.from(s,w.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:L.classes.FormData,Blob:L.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};u.forEach(["delete","get","head","post","put","patch"],e=>{Rt.headers[e]={}});const _t=Rt,Ca=u.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Na=e=>{const t={};let n,r,a;return e&&e.split(`
`).forEach(function(o){a=o.indexOf(":"),n=o.substring(0,a).trim().toLowerCase(),r=o.substring(a+1).trim(),!(!n||t[n]&&Ca[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Zt=Symbol("internals");function le(e){return e&&String(e).trim().toLowerCase()}function Fe(e){return e===!1||e==null?e:u.isArray(e)?e.map(Fe):String(e)}function Ta(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Ra=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function rt(e,t,n,r,a){if(u.isFunction(r))return r.call(this,t,n);if(a&&(t=n),!!u.isString(t)){if(u.isString(r))return t.indexOf(r)!==-1;if(u.isRegExp(r))return r.test(t)}}function _a(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Ia(e,t){const n=u.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(a,i,o){return this[r].call(this,t,a,i,o)},configurable:!0})})}class Je{constructor(t){t&&this.set(t)}set(t,n,r){const a=this;function i(s,c,f){const l=le(c);if(!l)throw new Error("header name must be a non-empty string");const m=u.findKey(a,l);(!m||a[m]===void 0||f===!0||f===void 0&&a[m]!==!1)&&(a[m||c]=Fe(s))}const o=(s,c)=>u.forEach(s,(f,l)=>i(f,l,c));return u.isPlainObject(t)||t instanceof this.constructor?o(t,n):u.isString(t)&&(t=t.trim())&&!Ra(t)?o(Na(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=le(t),t){const r=u.findKey(this,t);if(r){const a=this[r];if(!n)return a;if(n===!0)return Ta(a);if(u.isFunction(n))return n.call(this,a,r);if(u.isRegExp(n))return n.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=le(t),t){const r=u.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||rt(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let a=!1;function i(o){if(o=le(o),o){const s=u.findKey(r,o);s&&(!n||rt(r,r[s],s,n))&&(delete r[s],a=!0)}}return u.isArray(t)?t.forEach(i):i(t),a}clear(t){const n=Object.keys(this);let r=n.length,a=!1;for(;r--;){const i=n[r];(!t||rt(this,this[i],i,t,!0))&&(delete this[i],a=!0)}return a}normalize(t){const n=this,r={};return u.forEach(this,(a,i)=>{const o=u.findKey(r,i);if(o){n[o]=Fe(a),delete n[i];return}const s=t?_a(i):String(i).trim();s!==i&&delete n[i],n[s]=Fe(a),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return u.forEach(this,(r,a)=>{r!=null&&r!==!1&&(n[a]=t&&u.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(a=>r.set(a)),r}static accessor(t){const r=(this[Zt]=this[Zt]={accessors:{}}).accessors,a=this.prototype;function i(o){const s=le(o);r[s]||(Ia(a,o),r[s]=!0)}return u.isArray(t)?t.forEach(i):i(t),this}}Je.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);u.reduceDescriptors(Je.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});u.freezeMethods(Je);const D=Je;function at(e,t){const n=this||_t,r=t||n,a=D.from(r.headers);let i=r.data;return u.forEach(e,function(s){i=s.call(n,i,a.normalize(),t?t.status:void 0)}),a.normalize(),i}function Gn(e){return!!(e&&e.__CANCEL__)}function xe(e,t,n){w.call(this,e??"canceled",w.ERR_CANCELED,t,n),this.name="CanceledError"}u.inherits(xe,w,{__CANCEL__:!0});function La(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new w("Request failed with status code "+n.status,[w.ERR_BAD_REQUEST,w.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Fa=L.isStandardBrowserEnv?function(){return{write:function(n,r,a,i,o,s){const c=[];c.push(n+"="+encodeURIComponent(r)),u.isNumber(a)&&c.push("expires="+new Date(a).toGMTString()),u.isString(i)&&c.push("path="+i),u.isString(o)&&c.push("domain="+o),s===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Ma(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function za(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Jn(e,t){return e&&!Ma(t)?za(e,t):t}const Da=L.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function a(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=a(window.location.href),function(o){const s=u.isString(o)?a(o):o;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function ja(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Ua(e,t){e=e||10;const n=new Array(e),r=new Array(e);let a=0,i=0,o;return t=t!==void 0?t:1e3,function(c){const f=Date.now(),l=r[i];o||(o=f),n[a]=c,r[a]=f;let m=i,v=0;for(;m!==a;)v+=n[m++],m=m%e;if(a=(a+1)%e,a===i&&(i=(i+1)%e),f-o<t)return;const h=l&&f-l;return h?Math.round(v*1e3/h):void 0}}function en(e,t){let n=0;const r=Ua(50,250);return a=>{const i=a.loaded,o=a.lengthComputable?a.total:void 0,s=i-n,c=r(s),f=i<=o;n=i;const l={loaded:i,total:o,progress:o?i/o:void 0,bytes:s,rate:c||void 0,estimated:c&&o&&f?(o-i)/c:void 0,event:a};l[t?"download":"upload"]=!0,e(l)}}const Ha=typeof XMLHttpRequest<"u",Ba=Ha&&function(e){return new Promise(function(n,r){let a=e.data;const i=D.from(e.headers).normalize(),o=e.responseType;let s;function c(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}u.isFormData(a)&&(L.isStandardBrowserEnv||L.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.setContentType("multipart/form-data;",!1));let f=new XMLHttpRequest;if(e.auth){const h=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(h+":"+d))}const l=Jn(e.baseURL,e.url);f.open(e.method.toUpperCase(),Yn(l,e.params,e.paramsSerializer),!0),f.timeout=e.timeout;function m(){if(!f)return;const h=D.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),g={data:!o||o==="text"||o==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:h,config:e,request:f};La(function(A){n(A),c()},function(A){r(A),c()},g),f=null}if("onloadend"in f?f.onloadend=m:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(m)},f.onabort=function(){f&&(r(new w("Request aborted",w.ECONNABORTED,e,f)),f=null)},f.onerror=function(){r(new w("Network Error",w.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let d=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const g=e.transitional||Wn;e.timeoutErrorMessage&&(d=e.timeoutErrorMessage),r(new w(d,g.clarifyTimeoutError?w.ETIMEDOUT:w.ECONNABORTED,e,f)),f=null},L.isStandardBrowserEnv){const h=(e.withCredentials||Da(l))&&e.xsrfCookieName&&Fa.read(e.xsrfCookieName);h&&i.set(e.xsrfHeaderName,h)}a===void 0&&i.setContentType(null),"setRequestHeader"in f&&u.forEach(i.toJSON(),function(d,g){f.setRequestHeader(g,d)}),u.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),o&&o!=="json"&&(f.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&f.addEventListener("progress",en(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",en(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=h=>{f&&(r(!h||h.type?new xe(null,e,f):h),f.abort(),f=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const v=ja(l);if(v&&L.protocols.indexOf(v)===-1){r(new w("Unsupported protocol "+v+":",w.ERR_BAD_REQUEST,e));return}f.send(a||null)})},Me={http:pa,xhr:Ba};u.forEach(Me,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Xn={getAdapter:e=>{e=u.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let a=0;a<t&&(n=e[a],!(r=u.isString(n)?Me[n.toLowerCase()]:n));a++);if(!r)throw r===!1?new w(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(u.hasOwnProp(Me,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!u.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Me};function it(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new xe(null,e)}function tn(e){return it(e),e.headers=D.from(e.headers),e.data=at.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Xn.getAdapter(e.adapter||_t.adapter)(e).then(function(r){return it(e),r.data=at.call(e,e.transformResponse,r),r.headers=D.from(r.headers),r},function(r){return Gn(r)||(it(e),r&&r.response&&(r.response.data=at.call(e,e.transformResponse,r.response),r.response.headers=D.from(r.response.headers))),Promise.reject(r)})}const nn=e=>e instanceof D?e.toJSON():e;function oe(e,t){t=t||{};const n={};function r(f,l,m){return u.isPlainObject(f)&&u.isPlainObject(l)?u.merge.call({caseless:m},f,l):u.isPlainObject(l)?u.merge({},l):u.isArray(l)?l.slice():l}function a(f,l,m){if(u.isUndefined(l)){if(!u.isUndefined(f))return r(void 0,f,m)}else return r(f,l,m)}function i(f,l){if(!u.isUndefined(l))return r(void 0,l)}function o(f,l){if(u.isUndefined(l)){if(!u.isUndefined(f))return r(void 0,f)}else return r(void 0,l)}function s(f,l,m){if(m in t)return r(f,l);if(m in e)return r(void 0,f)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(f,l)=>a(nn(f),nn(l),!0)};return u.forEach(Object.keys(Object.assign({},e,t)),function(l){const m=c[l]||a,v=m(e[l],t[l],l);u.isUndefined(v)&&m!==s||(n[l]=v)}),n}const Kn="1.5.0",It={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{It[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const rn={};It.transitional=function(t,n,r){function a(i,o){return"[Axios v"+Kn+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,s)=>{if(t===!1)throw new w(a(o," has been removed"+(n?" in "+n:"")),w.ERR_DEPRECATED);return n&&!rn[o]&&(rn[o]=!0,console.warn(a(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,s):!0}};function $a(e,t,n){if(typeof e!="object")throw new w("options must be an object",w.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let a=r.length;for(;a-- >0;){const i=r[a],o=t[i];if(o){const s=e[i],c=s===void 0||o(s,i,e);if(c!==!0)throw new w("option "+i+" must be "+c,w.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new w("Unknown option "+i,w.ERR_BAD_OPTION)}}const dt={assertOptions:$a,validators:It},V=dt.validators;class Ue{constructor(t){this.defaults=t,this.interceptors={request:new Qt,response:new Qt}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=oe(this.defaults,n);const{transitional:r,paramsSerializer:a,headers:i}=n;r!==void 0&&dt.assertOptions(r,{silentJSONParsing:V.transitional(V.boolean),forcedJSONParsing:V.transitional(V.boolean),clarifyTimeoutError:V.transitional(V.boolean)},!1),a!=null&&(u.isFunction(a)?n.paramsSerializer={serialize:a}:dt.assertOptions(a,{encode:V.function,serialize:V.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&u.merge(i.common,i[n.method]);i&&u.forEach(["delete","get","head","post","put","patch","common"],d=>{delete i[d]}),n.headers=D.concat(o,i);const s=[];let c=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(c=c&&g.synchronous,s.unshift(g.fulfilled,g.rejected))});const f=[];this.interceptors.response.forEach(function(g){f.push(g.fulfilled,g.rejected)});let l,m=0,v;if(!c){const d=[tn.bind(this),void 0];for(d.unshift.apply(d,s),d.push.apply(d,f),v=d.length,l=Promise.resolve(n);m<v;)l=l.then(d[m++],d[m++]);return l}v=s.length;let h=n;for(m=0;m<v;){const d=s[m++],g=s[m++];try{h=d(h)}catch(x){g.call(this,x);break}}try{l=tn.call(this,h)}catch(d){return Promise.reject(d)}for(m=0,v=f.length;m<v;)l=l.then(f[m++],f[m++]);return l}getUri(t){t=oe(this.defaults,t);const n=Jn(t.baseURL,t.url);return Yn(n,t.params,t.paramsSerializer)}}u.forEach(["delete","get","head","options"],function(t){Ue.prototype[t]=function(n,r){return this.request(oe(r||{},{method:t,url:n,data:(r||{}).data}))}});u.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,s){return this.request(oe(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Ue.prototype[t]=n(),Ue.prototype[t+"Form"]=n(!0)});const ze=Ue;class Lt{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(a=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](a);r._listeners=null}),this.promise.then=a=>{let i;const o=new Promise(s=>{r.subscribe(s),i=s}).then(a);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,s){r.reason||(r.reason=new xe(i,o,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Lt(function(a){t=a}),cancel:t}}}const Va=Lt;function Ya(e){return function(n){return e.apply(null,n)}}function Wa(e){return u.isObject(e)&&e.isAxiosError===!0}const pt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(pt).forEach(([e,t])=>{pt[t]=e});const qa=pt;function Qn(e){const t=new ze(e),n=In(ze.prototype.request,t);return u.extend(n,ze.prototype,t,{allOwnKeys:!0}),u.extend(n,t,null,{allOwnKeys:!0}),n.create=function(a){return Qn(oe(e,a))},n}const C=Qn(_t);C.Axios=ze;C.CanceledError=xe;C.CancelToken=Va;C.isCancel=Gn;C.VERSION=Kn;C.toFormData=Ge;C.AxiosError=w;C.Cancel=C.CanceledError;C.all=function(t){return Promise.all(t)};C.spread=Ya;C.isAxiosError=Wa;C.mergeConfig=oe;C.AxiosHeaders=D;C.formToJSON=e=>qn(u.isHTMLForm(e)?new FormData(e):e);C.getAdapter=Xn.getAdapter;C.HttpStatusCode=qa;C.default=C;const Go=C;function an(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?an(Object(n),!0).forEach(function(r){N(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):an(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function He(e){"@babel/helpers - typeof";return He=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},He(e)}function Ga(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function on(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ja(e,t,n){return t&&on(e.prototype,t),n&&on(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ft(e,t){return Ka(e)||Za(e,t)||Zn(e,t)||ti()}function ke(e){return Xa(e)||Qa(e)||Zn(e)||ei()}function Xa(e){if(Array.isArray(e))return ht(e)}function Ka(e){if(Array.isArray(e))return e}function Qa(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Za(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(c){i=!0,s=c}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Zn(e,t){if(e){if(typeof e=="string")return ht(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ht(e,t)}}function ht(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ei(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ti(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var sn=function(){},Mt={},er={},tr=null,nr={mark:sn,measure:sn};try{typeof window<"u"&&(Mt=window),typeof document<"u"&&(er=document),typeof MutationObserver<"u"&&(tr=MutationObserver),typeof performance<"u"&&(nr=performance)}catch{}var ni=Mt.navigator||{},fn=ni.userAgent,cn=fn===void 0?"":fn,q=Mt,O=er,ln=tr,Oe=nr;q.document;var B=!!O.documentElement&&!!O.head&&typeof O.addEventListener=="function"&&typeof O.createElement=="function",rr=~cn.indexOf("MSIE")||~cn.indexOf("Trident/"),Se,Pe,Ce,Ne,Te,j="___FONT_AWESOME___",bt=16,ar="fa",ir="svg-inline--fa",ee="data-fa-i2svg",vt="data-fa-pseudo-element",ri="data-fa-pseudo-element-pending",zt="data-prefix",Dt="data-icon",un="fontawesome-i2svg",ai="async",ii=["HTML","HEAD","STYLE","SCRIPT"],or=function(){try{return!0}catch{return!1}}(),E="classic",P="sharp",jt=[E,P];function Ae(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[E]}})}var he=Ae((Se={},N(Se,E,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),N(Se,P,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Se)),be=Ae((Pe={},N(Pe,E,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),N(Pe,P,{solid:"fass",regular:"fasr",light:"fasl"}),Pe)),ve=Ae((Ce={},N(Ce,E,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),N(Ce,P,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Ce)),oi=Ae((Ne={},N(Ne,E,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),N(Ne,P,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Ne)),si=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,sr="fa-layers-text",fi=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ci=Ae((Te={},N(Te,E,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),N(Te,P,{900:"fass",400:"fasr",300:"fasl"}),Te)),fr=[1,2,3,4,5,6,7,8,9,10],li=fr.concat([11,12,13,14,15,16,17,18,19,20]),ui=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Q={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ge=new Set;Object.keys(be[E]).map(ge.add.bind(ge));Object.keys(be[P]).map(ge.add.bind(ge));var mi=[].concat(jt,ke(ge),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Q.GROUP,Q.SWAP_OPACITY,Q.PRIMARY,Q.SECONDARY]).concat(fr.map(function(e){return"".concat(e,"x")})).concat(li.map(function(e){return"w-".concat(e)})),me=q.FontAwesomeConfig||{};function di(e){var t=O.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function pi(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(O&&typeof O.querySelector=="function"){var hi=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];hi.forEach(function(e){var t=Ft(e,2),n=t[0],r=t[1],a=pi(di(n));a!=null&&(me[r]=a)})}var cr={styleDefault:"solid",familyDefault:"classic",cssPrefix:ar,replacementClass:ir,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};me.familyPrefix&&(me.cssPrefix=me.familyPrefix);var se=p(p({},cr),me);se.autoReplaceSvg||(se.observeMutations=!1);var b={};Object.keys(cr).forEach(function(e){Object.defineProperty(b,e,{enumerable:!0,set:function(n){se[e]=n,de.forEach(function(r){return r(b)})},get:function(){return se[e]}})});Object.defineProperty(b,"familyPrefix",{enumerable:!0,set:function(t){se.cssPrefix=t,de.forEach(function(n){return n(b)})},get:function(){return se.cssPrefix}});q.FontAwesomeConfig=b;var de=[];function bi(e){return de.push(e),function(){de.splice(de.indexOf(e),1)}}var Y=bt,M={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function vi(e){if(!(!e||!B)){var t=O.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=O.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return O.head.insertBefore(t,r),e}}var gi="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ye(){for(var e=12,t="";e-- >0;)t+=gi[Math.random()*62|0];return t}function ce(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ut(e){return e.classList?ce(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function lr(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function yi(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(lr(e[n]),'" ')},"").trim()}function Xe(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ht(e){return e.size!==M.size||e.x!==M.x||e.y!==M.y||e.rotate!==M.rotate||e.flipX||e.flipY}function wi(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:c,path:f}}function xi(e){var t=e.transform,n=e.width,r=n===void 0?bt:n,a=e.height,i=a===void 0?bt:a,o=e.startCentered,s=o===void 0?!1:o,c="";return s&&rr?c+="translate(".concat(t.x/Y-r/2,"em, ").concat(t.y/Y-i/2,"em) "):s?c+="translate(calc(-50% + ".concat(t.x/Y,"em), calc(-50% + ").concat(t.y/Y,"em)) "):c+="translate(".concat(t.x/Y,"em, ").concat(t.y/Y,"em) "),c+="scale(".concat(t.size/Y*(t.flipX?-1:1),", ").concat(t.size/Y*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var ki=`:root, :host {
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
}`;function ur(){var e=ar,t=ir,n=b.cssPrefix,r=b.replacementClass,a=ki;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var mn=!1;function ot(){b.autoAddCss&&!mn&&(vi(ur()),mn=!0)}var Ai={mixout:function(){return{dom:{css:ur,insertCss:ot}}},hooks:function(){return{beforeDOMElementCreation:function(){ot()},beforeI2svg:function(){ot()}}}},U=q||{};U[j]||(U[j]={});U[j].styles||(U[j].styles={});U[j].hooks||(U[j].hooks={});U[j].shims||(U[j].shims=[]);var F=U[j],mr=[],Ei=function e(){O.removeEventListener("DOMContentLoaded",e),Be=1,mr.map(function(t){return t()})},Be=!1;B&&(Be=(O.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(O.readyState),Be||O.addEventListener("DOMContentLoaded",Ei));function Oi(e){B&&(Be?setTimeout(e,0):mr.push(e))}function Ee(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?lr(e):"<".concat(t," ").concat(yi(r),">").concat(i.map(Ee).join(""),"</").concat(t,">")}function dn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Si=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},st=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Si(n,a):n,c,f,l;for(r===void 0?(c=1,l=t[i[0]]):(c=0,l=r);c<o;c++)f=i[c],l=s(l,t[f],f,t);return l};function Pi(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function gt(e){var t=Pi(e);return t.length===1?t[0].toString(16):null}function Ci(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function pn(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function yt(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=pn(t);typeof F.hooks.addPack=="function"&&!a?F.hooks.addPack(e,pn(t)):F.styles[e]=p(p({},F.styles[e]||{}),i),e==="fas"&&yt("fa",t)}var Re,_e,Ie,ne=F.styles,Ni=F.shims,Ti=(Re={},N(Re,E,Object.values(ve[E])),N(Re,P,Object.values(ve[P])),Re),Bt=null,dr={},pr={},hr={},br={},vr={},Ri=(_e={},N(_e,E,Object.keys(he[E])),N(_e,P,Object.keys(he[P])),_e);function _i(e){return~mi.indexOf(e)}function Ii(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!_i(a)?a:null}var gr=function(){var t=function(i){return st(ne,function(o,s,c){return o[c]=st(s,i,{}),o},{})};dr=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(c){return typeof c=="number"});s.forEach(function(c){a[c.toString(16)]=o})}return a}),pr=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(c){return typeof c=="string"});s.forEach(function(c){a[c]=o})}return a}),vr=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(c){a[c]=o}),a});var n="far"in ne||b.autoFetchSvg,r=st(Ni,function(a,i){var o=i[0],s=i[1],c=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:c}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:c}),a},{names:{},unicodes:{}});hr=r.names,br=r.unicodes,Bt=Ke(b.styleDefault,{family:b.familyDefault})};bi(function(e){Bt=Ke(e.styleDefault,{family:b.familyDefault})});gr();function $t(e,t){return(dr[e]||{})[t]}function Li(e,t){return(pr[e]||{})[t]}function Z(e,t){return(vr[e]||{})[t]}function yr(e){return hr[e]||{prefix:null,iconName:null}}function Fi(e){var t=br[e],n=$t("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function G(){return Bt}var Vt=function(){return{prefix:null,iconName:null,rest:[]}};function Ke(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?E:n,a=he[r][e],i=be[r][e]||be[r][a],o=e in F.styles?e:null;return i||o||null}var hn=(Ie={},N(Ie,E,Object.keys(ve[E])),N(Ie,P,Object.keys(ve[P])),Ie);function Qe(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},N(t,E,"".concat(b.cssPrefix,"-").concat(E)),N(t,P,"".concat(b.cssPrefix,"-").concat(P)),t),o=null,s=E;(e.includes(i[E])||e.some(function(f){return hn[E].includes(f)}))&&(s=E),(e.includes(i[P])||e.some(function(f){return hn[P].includes(f)}))&&(s=P);var c=e.reduce(function(f,l){var m=Ii(b.cssPrefix,l);if(ne[l]?(l=Ti[s].includes(l)?oi[s][l]:l,o=l,f.prefix=l):Ri[s].indexOf(l)>-1?(o=l,f.prefix=Ke(l,{family:s})):m?f.iconName=m:l!==b.replacementClass&&l!==i[E]&&l!==i[P]&&f.rest.push(l),!a&&f.prefix&&f.iconName){var v=o==="fa"?yr(f.iconName):{},h=Z(f.prefix,f.iconName);v.prefix&&(o=null),f.iconName=v.iconName||h||f.iconName,f.prefix=v.prefix||f.prefix,f.prefix==="far"&&!ne.far&&ne.fas&&!b.autoFetchSvg&&(f.prefix="fas")}return f},Vt());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&s===P&&(ne.fass||b.autoFetchSvg)&&(c.prefix="fass",c.iconName=Z(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=G()||"fas"),c}var Mi=function(){function e(){Ga(this,e),this.definitions={}}return Ja(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=p(p({},n.definitions[s]||{}),o[s]),yt(s,o[s]);var c=ve[E][s];c&&yt(c,o[s]),gr()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,c=o.iconName,f=o.icon,l=f[2];n[s]||(n[s]={}),l.length>0&&l.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][c]=f}),n}}]),e}(),bn=[],re={},ie={},zi=Object.keys(ie);function Di(e,t){var n=t.mixoutsTo;return bn=e,re={},Object.keys(ie).forEach(function(r){zi.indexOf(r)===-1&&delete ie[r]}),bn.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),He(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){re[o]||(re[o]=[]),re[o].push(i[o])})}r.provides&&r.provides(ie)}),n}function wt(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=re[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function te(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=re[e]||[];a.forEach(function(i){i.apply(null,n)})}function H(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ie[e]?ie[e].apply(null,t):void 0}function xt(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||G();if(t)return t=Z(n,t)||t,dn(wr.definitions,n,t)||dn(F.styles,n,t)}var wr=new Mi,ji=function(){b.autoReplaceSvg=!1,b.observeMutations=!1,te("noAuto")},Ui={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return B?(te("beforeI2svg",t),H("pseudoElements2svg",t),H("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,Oi(function(){Bi({autoReplaceSvgRoot:n}),te("watch",t)})}},Hi={icon:function(t){if(t===null)return null;if(He(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Z(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ke(t[0]);return{prefix:r,iconName:Z(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(b.cssPrefix,"-"))>-1||t.match(si))){var a=Qe(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||G(),iconName:Z(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=G();return{prefix:i,iconName:Z(i,t)||t}}}},_={noAuto:ji,config:b,dom:Ui,parse:Hi,library:wr,findIconDefinition:xt,toHtml:Ee},Bi=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?O:n;(Object.keys(F.styles).length>0||b.autoFetchSvg)&&B&&b.autoReplaceSvg&&_.dom.i2svg({node:r})};function Ze(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ee(r)})}}),Object.defineProperty(e,"node",{get:function(){if(B){var r=O.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function $i(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ht(o)&&n.found&&!r.found){var s=n.width,c=n.height,f={x:s/c/2,y:.5};a.style=Xe(p(p({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Vi(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(b.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:p(p({},a),{},{id:o}),children:r}]}]}function Yt(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,c=e.title,f=e.maskId,l=e.titleId,m=e.extra,v=e.watchable,h=v===void 0?!1:v,d=r.found?r:n,g=d.width,x=d.height,A=a==="fak",k=[b.replacementClass,i?"".concat(b.cssPrefix,"-").concat(i):""].filter(function($){return m.classes.indexOf($)===-1}).filter(function($){return $!==""||!!$}).concat(m.classes).join(" "),S={children:[],attributes:p(p({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:k,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(x)})},R=A&&!~m.classes.indexOf("fa-fw")?{width:"".concat(g/x*16*.0625,"em")}:{};h&&(S.attributes[ee]=""),c&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(l||ye())},children:[c]}),delete S.attributes.title);var T=p(p({},S),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:p(p({},R),m.styles)}),X=r.found&&n.found?H("generateAbstractMask",T)||{children:[],attributes:{}}:H("generateAbstractIcon",T)||{children:[],attributes:{}},K=X.children,tt=X.attributes;return T.children=K,T.attributes=tt,s?Vi(T):$i(T)}function vn(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,c=s===void 0?!1:s,f=p(p(p({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});c&&(f[ee]="");var l=p({},o.styles);Ht(a)&&(l.transform=xi({transform:a,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);var m=Xe(l);m.length>0&&(f.style=m);var v=[];return v.push({tag:"span",attributes:f,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Yi(e){var t=e.content,n=e.title,r=e.extra,a=p(p(p({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Xe(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var ft=F.styles;function kt(e){var t=e[0],n=e[1],r=e.slice(4),a=Ft(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(b.cssPrefix,"-").concat(Q.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(Q.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(Q.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Wi={found:!1,width:512,height:512};function qi(e,t){!or&&!b.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function At(e,t){var n=t;return t==="fa"&&b.styleDefault!==null&&(t=G()),new Promise(function(r,a){if(H("missingIconAbstract"),n==="fa"){var i=yr(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&ft[t]&&ft[t][e]){var o=ft[t][e];return r(kt(o))}qi(e,t),r(p(p({},Wi),{},{icon:b.showMissingIcons&&e?H("missingIconAbstract")||{}:{}}))})}var gn=function(){},Et=b.measurePerformance&&Oe&&Oe.mark&&Oe.measure?Oe:{mark:gn,measure:gn},ue='FA "6.4.2"',Gi=function(t){return Et.mark("".concat(ue," ").concat(t," begins")),function(){return xr(t)}},xr=function(t){Et.mark("".concat(ue," ").concat(t," ends")),Et.measure("".concat(ue," ").concat(t),"".concat(ue," ").concat(t," begins"),"".concat(ue," ").concat(t," ends"))},Wt={begin:Gi,end:xr},De=function(){};function yn(e){var t=e.getAttribute?e.getAttribute(ee):null;return typeof t=="string"}function Ji(e){var t=e.getAttribute?e.getAttribute(zt):null,n=e.getAttribute?e.getAttribute(Dt):null;return t&&n}function Xi(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(b.replacementClass)}function Ki(){if(b.autoReplaceSvg===!0)return je.replace;var e=je[b.autoReplaceSvg];return e||je.replace}function Qi(e){return O.createElementNS("http://www.w3.org/2000/svg",e)}function Zi(e){return O.createElement(e)}function kr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Qi:Zi:n;if(typeof e=="string")return O.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(kr(o,{ceFn:r}))}),a}function eo(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var je={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(kr(a),n)}),n.getAttribute(ee)===null&&b.keepOriginalSource){var r=O.createComment(eo(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ut(n).indexOf(b.replacementClass))return je.replace(t);var a=new RegExp("".concat(b.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,c){return c===b.replacementClass||c.match(a)?s.toSvg.push(c):s.toNode.push(c),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Ee(s)}).join(`
`);n.setAttribute(ee,""),n.innerHTML=o}};function wn(e){e()}function Ar(e,t){var n=typeof t=="function"?t:De;if(e.length===0)n();else{var r=wn;b.mutateApproach===ai&&(r=q.requestAnimationFrame||wn),r(function(){var a=Ki(),i=Wt.begin("mutate");e.map(a),i(),n()})}}var qt=!1;function Er(){qt=!0}function Ot(){qt=!1}var $e=null;function xn(e){if(ln&&b.observeMutations){var t=e.treeCallback,n=t===void 0?De:t,r=e.nodeCallback,a=r===void 0?De:r,i=e.pseudoElementsCallback,o=i===void 0?De:i,s=e.observeMutationsRoot,c=s===void 0?O:s;$e=new ln(function(f){if(!qt){var l=G();ce(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!yn(m.addedNodes[0])&&(b.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&b.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&yn(m.target)&&~ui.indexOf(m.attributeName))if(m.attributeName==="class"&&Ji(m.target)){var v=Qe(Ut(m.target)),h=v.prefix,d=v.iconName;m.target.setAttribute(zt,h||l),d&&m.target.setAttribute(Dt,d)}else Xi(m.target)&&a(m.target)})}}),B&&$e.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function to(){$e&&$e.disconnect()}function no(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function ro(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Qe(Ut(e));return a.prefix||(a.prefix=G()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Li(a.prefix,e.innerText)||$t(a.prefix,gt(e.innerText))),!a.iconName&&b.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function ao(e){var t=ce(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return b.autoA11y&&(n?t["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(r||ye()):(t["aria-hidden"]="true",t.focusable="false")),t}function io(){return{iconName:null,title:null,titleId:null,prefix:null,transform:M,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function kn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ro(e),r=n.iconName,a=n.prefix,i=n.rest,o=ao(e),s=wt("parseNodeAttributes",{},e),c=t.styleParser?no(e):[];return p({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:M,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},s)}var oo=F.styles;function Or(e){var t=b.autoReplaceSvg==="nest"?kn(e,{styleParser:!1}):kn(e);return~t.extra.classes.indexOf(sr)?H("generateLayersText",e,t):H("generateSvgReplacementMutation",e,t)}var J=new Set;jt.map(function(e){J.add("fa-".concat(e))});Object.keys(he[E]).map(J.add.bind(J));Object.keys(he[P]).map(J.add.bind(J));J=ke(J);function An(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!B)return Promise.resolve();var n=O.documentElement.classList,r=function(m){return n.add("".concat(un,"-").concat(m))},a=function(m){return n.remove("".concat(un,"-").concat(m))},i=b.autoFetchSvg?J:jt.map(function(l){return"fa-".concat(l)}).concat(Object.keys(oo));i.includes("fa")||i.push("fa");var o=[".".concat(sr,":not([").concat(ee,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(ee,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=ce(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var c=Wt.begin("onTree"),f=s.reduce(function(l,m){try{var v=Or(m);v&&l.push(v)}catch(h){or||h.name==="MissingIcon"&&console.error(h)}return l},[]);return new Promise(function(l,m){Promise.all(f).then(function(v){Ar(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),c(),l()})}).catch(function(v){c(),m(v)})})}function so(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Or(e).then(function(n){n&&Ar([n],t)})}function fo(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:xt(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:xt(a||{})),e(r,p(p({},n),{},{mask:a}))}}var co=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?M:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,c=s===void 0?null:s,f=n.maskId,l=f===void 0?null:f,m=n.title,v=m===void 0?null:m,h=n.titleId,d=h===void 0?null:h,g=n.classes,x=g===void 0?[]:g,A=n.attributes,k=A===void 0?{}:A,S=n.styles,R=S===void 0?{}:S;if(t){var T=t.prefix,X=t.iconName,K=t.icon;return Ze(p({type:"icon"},t),function(){return te("beforeDOMElementCreation",{iconDefinition:t,params:n}),b.autoA11y&&(v?k["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(d||ye()):(k["aria-hidden"]="true",k.focusable="false")),Yt({icons:{main:kt(K),mask:c?kt(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:X,transform:p(p({},M),a),symbol:o,title:v,maskId:l,titleId:d,extra:{attributes:k,styles:R,classes:x}})})}},lo={mixout:function(){return{icon:fo(co)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=An,n.nodeCallback=so,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?O:r,i=n.callback,o=i===void 0?function(){}:i;return An(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,c=r.transform,f=r.symbol,l=r.mask,m=r.maskId,v=r.extra;return new Promise(function(h,d){Promise.all([At(a,s),l.iconName?At(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var x=Ft(g,2),A=x[0],k=x[1];h([n,Yt({icons:{main:A,mask:k},prefix:s,iconName:a,transform:c,symbol:f,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(d)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,c=Xe(s);c.length>0&&(a.style=c);var f;return Ht(o)&&(f=H("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},uo={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Ze({type:"layer"},function(){te("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(c){o=o.concat(c.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(b.cssPrefix,"-layers")].concat(ke(i)).join(" ")},children:o}]})}}}},mo={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,c=r.attributes,f=c===void 0?{}:c,l=r.styles,m=l===void 0?{}:l;return Ze({type:"counter",content:n},function(){return te("beforeDOMElementCreation",{content:n,params:r}),Yi({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(b.cssPrefix,"-layers-counter")].concat(ke(s))}})})}}}},po={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?M:a,o=r.title,s=o===void 0?null:o,c=r.classes,f=c===void 0?[]:c,l=r.attributes,m=l===void 0?{}:l,v=r.styles,h=v===void 0?{}:v;return Ze({type:"text",content:n},function(){return te("beforeDOMElementCreation",{content:n,params:r}),vn({content:n,transform:p(p({},M),i),title:s,extra:{attributes:m,styles:h,classes:["".concat(b.cssPrefix,"-layers-text")].concat(ke(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,c=null;if(rr){var f=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();s=l.width/f,c=l.height/f}return b.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,vn({content:n.innerHTML,width:s,height:c,transform:i,title:a,extra:o,watchable:!0})])}}},ho=new RegExp('"',"ug"),En=[1105920,1112319];function bo(e){var t=e.replace(ho,""),n=Ci(t,0),r=n>=En[0]&&n<=En[1],a=t.length===2?t[0]===t[1]:!1;return{value:gt(a?t[0]:t),isSecondary:r||a}}function On(e,t){var n="".concat(ri).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=ce(e.children),o=i.filter(function(K){return K.getAttribute(vt)===t})[0],s=q.getComputedStyle(e,t),c=s.getPropertyValue("font-family").match(fi),f=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!c)return e.removeChild(o),r();if(c&&l!=="none"&&l!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(c[2])?P:E,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?be[v][c[2].toLowerCase()]:ci[v][f],d=bo(m),g=d.value,x=d.isSecondary,A=c[0].startsWith("FontAwesome"),k=$t(h,g),S=k;if(A){var R=Fi(g);R.iconName&&R.prefix&&(k=R.iconName,h=R.prefix)}if(k&&!x&&(!o||o.getAttribute(zt)!==h||o.getAttribute(Dt)!==S)){e.setAttribute(n,S),o&&e.removeChild(o);var T=io(),X=T.extra;X.attributes[vt]=t,At(k,h).then(function(K){var tt=Yt(p(p({},T),{},{icons:{main:K,mask:Vt()},prefix:h,iconName:S,extra:X,watchable:!0})),$=O.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore($,e.firstChild):e.appendChild($),$.outerHTML=tt.map(function(_r){return Ee(_r)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function vo(e){return Promise.all([On(e,"::before"),On(e,"::after")])}function go(e){return e.parentNode!==document.head&&!~ii.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(vt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Sn(e){if(B)return new Promise(function(t,n){var r=ce(e.querySelectorAll("*")).filter(go).map(vo),a=Wt.begin("searchPseudoElements");Er(),Promise.all(r).then(function(){a(),Ot(),t()}).catch(function(){a(),Ot(),n()})})}var yo={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Sn,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?O:r;b.searchPseudoElements&&Sn(a)}}},Pn=!1,wo={mixout:function(){return{dom:{unwatch:function(){Er(),Pn=!0}}}},hooks:function(){return{bootstrap:function(){xn(wt("mutationObserverCallbacks",{}))},noAuto:function(){to()},watch:function(n){var r=n.observeMutationsRoot;Pn?Ot():xn(wt("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Cn=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},xo={mixout:function(){return{parse:{transform:function(n){return Cn(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Cn(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(c," ").concat(f," ").concat(l)},v={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:m,path:v};return{tag:"g",attributes:p({},h.outer),children:[{tag:"g",attributes:p({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:p(p({},r.icon.attributes),h.path)}]}]}}}},ct={x:0,y:0,width:"100%",height:"100%"};function Nn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ko(e){return e.tag==="g"?e.children:[e]}var Ao={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Qe(a.split(" ").map(function(o){return o.trim()})):Vt();return i.prefix||(i.prefix=G()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,c=n.transform,f=i.width,l=i.icon,m=o.width,v=o.icon,h=wi({transform:c,containerWidth:m,iconWidth:f}),d={tag:"rect",attributes:p(p({},ct),{},{fill:"white"})},g=l.children?{children:l.children.map(Nn)}:{},x={tag:"g",attributes:p({},h.inner),children:[Nn(p({tag:l.tag,attributes:p(p({},l.attributes),h.path)},g))]},A={tag:"g",attributes:p({},h.outer),children:[x]},k="mask-".concat(s||ye()),S="clip-".concat(s||ye()),R={tag:"mask",attributes:p(p({},ct),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,A]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:ko(v)},R]};return r.push(T,{tag:"rect",attributes:p({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(k,")")},ct)}),{children:r,attributes:a}}}},Eo={provides:function(t){var n=!1;q.matchMedia&&(n=q.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:p(p({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=p(p({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:p(p({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:p(p({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:p(p({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:p(p({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:p(p({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:p(p({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:p(p({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Oo={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},So=[Ai,lo,uo,mo,po,yo,wo,xo,Ao,Eo,Oo];Di(So,{mixoutsTo:_});_.noAuto;_.config;_.library;_.dom;var St=_.parse;_.findIconDefinition;_.toHtml;var Po=_.icon;_.layer;_.text;_.counter;var Sr={exports:{}},Co="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",No=Co,To=No;function Pr(){}function Cr(){}Cr.resetWarningCache=Pr;var Ro=function(){function e(r,a,i,o,s,c){if(c!==To){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Cr,resetWarningCache:Pr};return n.PropTypes=n,n};Sr.exports=Ro();var _o=Sr.exports;const y=Ir(_o);function Tn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Tn(Object(n),!0).forEach(function(r){ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tn(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ve(e){"@babel/helpers - typeof";return Ve=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ve(e)}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Io(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Lo(e,t){if(e==null)return{};var n=Io(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Pt(e){return Fo(e)||Mo(e)||zo(e)||Do()}function Fo(e){if(Array.isArray(e))return Ct(e)}function Mo(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function zo(e,t){if(e){if(typeof e=="string")return Ct(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ct(e,t)}}function Ct(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Do(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jo(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,c=e.spin,f=e.spinPulse,l=e.spinReverse,m=e.pulse,v=e.fixedWidth,h=e.inverse,d=e.border,g=e.listItem,x=e.flip,A=e.size,k=e.rotation,S=e.pull,R=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":c,"fa-spin-reverse":l,"fa-spin-pulse":f,"fa-pulse":m,"fa-fw":v,"fa-inverse":h,"fa-border":d,"fa-li":g,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},ae(t,"fa-".concat(A),typeof A<"u"&&A!==null),ae(t,"fa-rotate-".concat(k),typeof k<"u"&&k!==null&&k!==0),ae(t,"fa-pull-".concat(S),typeof S<"u"&&S!==null),ae(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(R).map(function(T){return R[T]?T:null}).filter(function(T){return T})}function Uo(e){return e=e-0,e===e}function Nr(e){return Uo(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Ho=["style"];function Bo(e){return e.charAt(0).toUpperCase()+e.slice(1)}function $o(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Nr(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[Bo(a)]=i:t[a]=i,t},{})}function Tr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return Tr(e,c)}),a=Object.keys(t.attributes||{}).reduce(function(c,f){var l=t.attributes[f];switch(f){case"class":c.attrs.className=l,delete t.attributes.class;break;case"style":c.attrs.style=$o(l);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?c.attrs[f.toLowerCase()]=l:c.attrs[Nr(f)]=l}return c},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=Lo(n,Ho);return a.attrs.style=W(W({},a.attrs.style),o),e.apply(void 0,[t.tag,W(W({},a.attrs),s)].concat(Pt(r)))}var Rr=!1;try{Rr=!0}catch{}function Vo(){if(!Rr&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Rn(e){if(e&&Ve(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(St.icon)return St.icon(e);if(e===null)return null;if(e&&Ve(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function lt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ae({},e,t):{}}var et=_n.forwardRef(function(e,t){var n=e.icon,r=e.mask,a=e.symbol,i=e.className,o=e.title,s=e.titleId,c=e.maskId,f=Rn(n),l=lt("classes",[].concat(Pt(jo(e)),Pt(i.split(" ")))),m=lt("transform",typeof e.transform=="string"?St.transform(e.transform):e.transform),v=lt("mask",Rn(r)),h=Po(f,W(W(W(W({},l),m),v),{},{symbol:a,title:o,titleId:s,maskId:c}));if(!h)return Vo("Could not find icon",f),null;var d=h.abstract,g={ref:t};return Object.keys(e).forEach(function(x){et.defaultProps.hasOwnProperty(x)||(g[x]=e[x])}),Yo(d[0],g)});et.displayName="FontAwesomeIcon";et.propTypes={beat:y.bool,border:y.bool,beatFade:y.bool,bounce:y.bool,className:y.string,fade:y.bool,flash:y.bool,mask:y.oneOfType([y.object,y.array,y.string]),maskId:y.string,fixedWidth:y.bool,inverse:y.bool,flip:y.oneOf([!0,!1,"horizontal","vertical","both"]),icon:y.oneOfType([y.object,y.array,y.string]),listItem:y.bool,pull:y.oneOf(["right","left"]),pulse:y.bool,rotation:y.oneOf([0,90,180,270]),shake:y.bool,size:y.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:y.bool,spinPulse:y.bool,spinReverse:y.bool,symbol:y.oneOfType([y.bool,y.string]),title:y.string,titleId:y.string,transform:y.oneOfType([y.string,y.object]),swapOpacity:y.bool};et.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Yo=Tr.bind(null,_n.createElement),Jo={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Xo={prefix:"fas",iconName:"film",icon:[512,512,[127902],"f008","M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z"]},Ko={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},Qo={prefix:"fas",iconName:"pause",icon:[320,512,[9208],"f04c","M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"]},Zo={prefix:"fas",iconName:"backward-fast",icon:[512,512,[9198,"fast-backward"],"f049","M493.6 445c-11.2 5.3-24.5 3.6-34.1-4.4L288 297.7V416c0 12.4-7.2 23.7-18.4 29s-24.5 3.6-34.1-4.4L64 297.7V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V96C0 78.3 14.3 64 32 64s32 14.3 32 32V214.3L235.5 71.4c9.5-7.9 22.8-9.7 34.1-4.4S288 83.6 288 96V214.3L459.5 71.4c9.5-7.9 22.8-9.7 34.1-4.4S512 83.6 512 96V416c0 12.4-7.2 23.7-18.4 29z"]},Wo={prefix:"fas",iconName:"volume-high",icon:[640,512,[128266,"volume-up"],"f028","M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"]},es=Wo,ts={prefix:"fas",iconName:"forward-fast",icon:[512,512,[9197,"fast-forward"],"f050","M18.4 445c11.2 5.3 24.5 3.6 34.1-4.4L224 297.7V416c0 12.4 7.2 23.7 18.4 29s24.5 3.6 34.1-4.4L448 297.7V416c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32s-32 14.3-32 32V214.3L276.5 71.4c-9.5-7.9-22.8-9.7-34.1-4.4S224 83.6 224 96V214.3L52.5 71.4c-9.5-7.9-22.8-9.7-34.1-4.4S0 83.6 0 96V416c0 12.4 7.2 23.7 18.4 29z"]},ns={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},rs={prefix:"fas",iconName:"closed-captioning",icon:[576,512,[],"f20a","M0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 208c14.2 0 27 6.1 35.8 16c8.8 9.9 24 10.7 33.9 1.9s10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32c-53 0-96 43-96 96s43 96 96 96c28.4 0 54-12.4 71.5-32c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16c-26.5 0-48-21.5-48-48s21.5-48 48-48zm144 48c0-26.5 21.5-48 48-48c14.2 0 27 6.1 35.8 16c8.8 9.9 24 10.7 33.9 1.9s10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32c-53 0-96 43-96 96s43 96 96 96c28.4 0 54-12.4 71.5-32c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16c-26.5 0-48-21.5-48-48z"]},as={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},is={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},os={prefix:"fas",iconName:"tv",icon:[640,512,[63717,"television","tv-alt"],"f26c","M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},ss={prefix:"fas",iconName:"expand",icon:[448,512,[],"f065","M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"]},fs={prefix:"fas",iconName:"angle-left",icon:[320,512,[8249],"f104","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};export{et as F,is as a,Go as b,es as c,Zo as d,Qo as e,Jo as f,as as g,ts as h,ns as i,ss as j,fs as k,Ko as l,os as m,Xo as n,rs as o};
