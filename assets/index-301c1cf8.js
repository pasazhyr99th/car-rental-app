import{s as te,a as ce,u as L,j as N,c as ve,b as Ve,d as le,e as We,f as Ke,r as v,l as Ge}from"./index-91e79ad5.js";import{s as Xe,A as Qe,a as Ze,b as Ye,c as et,d as tt}from"./selectors-9db3d070.js";const nt=te.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 29px;

  padding-top: 40px;
  padding-bottom: 70px;

  width: 1184px;
`,rt=te.button`
  padding: 12px 0;

  width: 80px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  color: ${ce.blueMainColor};

  border: none;

  background-color: transparent;

  cursor: pointer;

  transition: color 0.3s ease;

  &:hover {
    color: ${ce.blueHoverColor};
  }
`,st=te.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 29px;

  padding-top: 40px;

  width: 1184px;
`,ot=({adverts:e})=>{const t=L(Xe);return N.jsx(st,{children:e.map(n=>N.jsx(Qe,{advert:n,isFavorite:t.some(r=>r.id===n.id)},n.id))})},it=()=>N.jsx("p",{children:"Future filter"});function Oe(e,t){return function(){return e.apply(t,arguments)}}const{toString:at}=Object.prototype,{getPrototypeOf:ne}=Object,I=(e=>t=>{const n=at.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>I(t)===e),q=e=>t=>typeof t===e,{isArray:F}=Array,j=q("undefined");function ct(e){return e!==null&&!j(e)&&e.constructor!==null&&!j(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ae=A("ArrayBuffer");function lt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ae(e.buffer),t}const ut=q("string"),R=q("function"),ge=q("number"),z=e=>e!==null&&typeof e=="object",ft=e=>e===!0||e===!1,D=e=>{if(I(e)!=="object")return!1;const t=ne(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},dt=A("Date"),pt=A("File"),ht=A("Blob"),mt=A("FileList"),yt=e=>z(e)&&R(e.pipe),wt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||R(e.append)&&((t=I(e))==="formdata"||t==="object"&&R(e.toString)&&e.toString()==="[object FormData]"))},bt=A("URLSearchParams"),Et=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function k(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),F(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function xe(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Te=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ce=e=>!j(e)&&e!==Te;function X(){const{caseless:e}=Ce(this)&&this||{},t={},n=(r,s)=>{const o=e&&xe(t,s)||s;D(t[o])&&D(r)?t[o]=X(t[o],r):D(r)?t[o]=X({},r):F(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&k(arguments[r],n);return t}const St=(e,t,n,{allOwnKeys:r}={})=>(k(t,(s,o)=>{n&&R(s)?e[o]=Oe(s,n):e[o]=s},{allOwnKeys:r}),e),Rt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ot=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},At=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&ne(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},gt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},xt=e=>{if(!e)return null;if(F(e))return e;let t=e.length;if(!ge(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Tt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ne(Uint8Array)),Ct=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Nt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Pt=A("HTMLFormElement"),Ft=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ue=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),_t=A("RegExp"),Ne=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};k(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Lt=e=>{Ne(e,(t,n)=>{if(R(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(R(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},jt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return F(e)?r(e):r(String(e).split(t)),n},kt=()=>{},Bt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),V="abcdefghijklmnopqrstuvwxyz",fe="0123456789",Pe={DIGIT:fe,ALPHA:V,ALPHA_DIGIT:V+V.toUpperCase()+fe},Dt=(e=16,t=Pe.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Ut(e){return!!(e&&R(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Ht=e=>{const t=new Array(10),n=(r,s)=>{if(z(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=F(r)?[]:{};return k(r,(i,c)=>{const p=n(i,s+1);!j(p)&&(o[c]=p)}),t[s]=void 0,o}}return r};return n(e,0)},Mt=A("AsyncFunction"),It=e=>e&&(z(e)||R(e))&&R(e.then)&&R(e.catch),a={isArray:F,isArrayBuffer:Ae,isBuffer:ct,isFormData:wt,isArrayBufferView:lt,isString:ut,isNumber:ge,isBoolean:ft,isObject:z,isPlainObject:D,isUndefined:j,isDate:dt,isFile:pt,isBlob:ht,isRegExp:_t,isFunction:R,isStream:yt,isURLSearchParams:bt,isTypedArray:Tt,isFileList:mt,forEach:k,merge:X,extend:St,trim:Et,stripBOM:Rt,inherits:Ot,toFlatObject:At,kindOf:I,kindOfTest:A,endsWith:gt,toArray:xt,forEachEntry:Ct,matchAll:Nt,isHTMLForm:Pt,hasOwnProperty:ue,hasOwnProp:ue,reduceDescriptors:Ne,freezeMethods:Lt,toObjectSet:jt,toCamelCase:Ft,noop:kt,toFiniteNumber:Bt,findKey:xe,global:Te,isContextDefined:Ce,ALPHABET:Pe,generateString:Dt,isSpecCompliantForm:Ut,toJSONObject:Ht,isAsyncFn:Mt,isThenable:It};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Fe=m.prototype,_e={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{_e[e]={value:e}});Object.defineProperties(m,_e);Object.defineProperty(Fe,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Fe);return a.toFlatObject(e,i,function(p){return p!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const qt=null;function Q(e){return a.isPlainObject(e)||a.isArray(e)}function Le(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function de(e,t,n){return e?e.concat(t).map(function(s,o){return s=Le(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function zt(e){return a.isArray(e)&&!e.some(Q)}const $t=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function $(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(d,b){return!a.isUndefined(b[d])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function h(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!p&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?p&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,d,b){let E=f;if(f&&!b&&typeof f=="object"){if(a.endsWith(d,"{}"))d=r?d:d.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&zt(f)||(a.isFileList(f)||a.endsWith(d,"[]"))&&(E=a.toArray(f)))return d=Le(d),E.forEach(function(T,Je){!(a.isUndefined(T)||T===null)&&t.append(i===!0?de([d],Je,o):i===null?d:d+"[]",h(T))}),!1}return Q(f)?!0:(t.append(de(b,d,o),h(f)),!1)}const l=[],w=Object.assign($t,{defaultVisitor:u,convertValue:h,isVisitable:Q});function S(f,d){if(!a.isUndefined(f)){if(l.indexOf(f)!==-1)throw Error("Circular reference detected in "+d.join("."));l.push(f),a.forEach(f,function(E,x){(!(a.isUndefined(E)||E===null)&&s.call(t,E,a.isString(x)?x.trim():x,d,w))===!0&&S(E,d?d.concat(x):[x])}),l.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return S(e),t}function pe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function re(e,t){this._pairs=[],e&&$(e,this,t)}const je=re.prototype;je.append=function(t,n){this._pairs.push([t,n])};je.toString=function(t){const n=t?function(r){return t.call(this,r,pe)}:pe;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Jt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ke(e,t,n){if(!t)return e;const r=n&&n.encode||Jt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new re(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class vt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const he=vt,Be={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Vt=typeof URLSearchParams<"u"?URLSearchParams:re,Wt=typeof FormData<"u"?FormData:null,Kt=typeof Blob<"u"?Blob:null,Gt={isBrowser:!0,classes:{URLSearchParams:Vt,FormData:Wt,Blob:Kt},protocols:["http","https","file","blob","url","data"]},De=typeof window<"u"&&typeof document<"u",Xt=(e=>De&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Qt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Zt=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:De,hasStandardBrowserEnv:Xt,hasStandardBrowserWebWorkerEnv:Qt},Symbol.toStringTag,{value:"Module"})),O={...Zt,...Gt};function Yt(e,t){return $(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function en(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function tn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Ue(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),p=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,p?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=tn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(en(r),s,n,0)}),n}return null}function nn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const se={transitional:Be,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Ue(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Yt(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return $(c?{"files[]":t}:t,p&&new p,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),nn(t)):t}],transformResponse:[function(t){const n=this.transitional||se.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{se.headers[e]={}});const oe=se,rn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),sn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&rn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},me=Symbol("internals");function _(e){return e&&String(e).trim().toLowerCase()}function U(e){return e===!1||e==null?e:a.isArray(e)?e.map(U):String(e)}function on(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const an=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function W(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function cn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function ln(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class J{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,p,h){const u=_(p);if(!u)throw new Error("header name must be a non-empty string");const l=a.findKey(s,u);(!l||s[l]===void 0||h===!0||h===void 0&&s[l]!==!1)&&(s[l||p]=U(c))}const i=(c,p)=>a.forEach(c,(h,u)=>o(h,u,p));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!an(t)?i(sn(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=_(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return on(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=_(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||W(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=_(i),i){const c=a.findKey(r,i);c&&(!n||W(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||W(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=U(s),delete n[o];return}const c=t?cn(o):String(o).trim();c!==o&&delete n[o],n[c]=U(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[me]=this[me]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=_(i);r[c]||(ln(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}J.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(J.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(J);const g=J;function K(e,t){const n=this||oe,r=t||n,s=g.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function He(e){return!!(e&&e.__CANCEL__)}function B(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(B,m,{__CANCEL__:!0});function un(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const fn=O.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function dn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function pn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Me(e,t){return e&&!dn(t)?pn(e,t):t}const hn=O.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function mn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function yn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(p){const h=Date.now(),u=r[o];i||(i=h),n[s]=p,r[s]=h;let l=o,w=0;for(;l!==s;)w+=n[l++],l=l%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),h-i<t)return;const S=u&&h-u;return S?Math.round(w*1e3/S):void 0}}function ye(e,t){let n=0;const r=yn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,c=o-n,p=r(c),h=o<=i;n=o;const u={loaded:o,total:i,progress:i?o/i:void 0,bytes:c,rate:p||void 0,estimated:p&&i&&h?(i-o)/p:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const wn=typeof XMLHttpRequest<"u",bn=wn&&function(e){return new Promise(function(n,r){let s=e.data;const o=g.from(e.headers).normalize();let{responseType:i,withXSRFToken:c}=e,p;function h(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}let u;if(a.isFormData(s)){if(O.hasStandardBrowserEnv||O.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((u=o.getContentType())!==!1){const[d,...b]=u?u.split(";").map(E=>E.trim()).filter(Boolean):[];o.setContentType([d||"multipart/form-data",...b].join("; "))}}let l=new XMLHttpRequest;if(e.auth){const d=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(d+":"+b))}const w=Me(e.baseURL,e.url);l.open(e.method.toUpperCase(),ke(w,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function S(){if(!l)return;const d=g.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),E={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:d,config:e,request:l};un(function(T){n(T),h()},function(T){r(T),h()},E),l=null}if("onloadend"in l?l.onloadend=S:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(S)},l.onabort=function(){l&&(r(new m("Request aborted",m.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let b=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const E=e.transitional||Be;e.timeoutErrorMessage&&(b=e.timeoutErrorMessage),r(new m(b,E.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,l)),l=null},O.hasStandardBrowserEnv&&(c&&a.isFunction(c)&&(c=c(e)),c||c!==!1&&hn(w))){const d=e.xsrfHeaderName&&e.xsrfCookieName&&fn.read(e.xsrfCookieName);d&&o.set(e.xsrfHeaderName,d)}s===void 0&&o.setContentType(null),"setRequestHeader"in l&&a.forEach(o.toJSON(),function(b,E){l.setRequestHeader(E,b)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",ye(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",ye(e.onUploadProgress)),(e.cancelToken||e.signal)&&(p=d=>{l&&(r(!d||d.type?new B(null,e,l):d),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p)));const f=mn(w);if(f&&O.protocols.indexOf(f)===-1){r(new m("Unsupported protocol "+f+":",m.ERR_BAD_REQUEST,e));return}l.send(s||null)})},Z={http:qt,xhr:bn};a.forEach(Z,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const we=e=>`- ${e}`,En=e=>a.isFunction(e)||e===null||e===!1,Ie={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!En(n)&&(r=Z[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,p])=>`adapter ${c} `+(p===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(we).join(`
`):" "+we(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:Z};function G(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new B(null,e)}function be(e){return G(e),e.headers=g.from(e.headers),e.data=K.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ie.getAdapter(e.adapter||oe.adapter)(e).then(function(r){return G(e),r.data=K.call(e,e.transformResponse,r),r.headers=g.from(r.headers),r},function(r){return He(r)||(G(e),r&&r.response&&(r.response.data=K.call(e,e.transformResponse,r.response),r.response.headers=g.from(r.response.headers))),Promise.reject(r)})}const Ee=e=>e instanceof g?e.toJSON():e;function P(e,t){t=t||{};const n={};function r(h,u,l){return a.isPlainObject(h)&&a.isPlainObject(u)?a.merge.call({caseless:l},h,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(h,u,l){if(a.isUndefined(u)){if(!a.isUndefined(h))return r(void 0,h,l)}else return r(h,u,l)}function o(h,u){if(!a.isUndefined(u))return r(void 0,u)}function i(h,u){if(a.isUndefined(u)){if(!a.isUndefined(h))return r(void 0,h)}else return r(void 0,u)}function c(h,u,l){if(l in t)return r(h,u);if(l in e)return r(void 0,h)}const p={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(h,u)=>s(Ee(h),Ee(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const l=p[u]||s,w=l(e[u],t[u],u);a.isUndefined(w)&&l!==c||(n[u]=w)}),n}const qe="1.6.7",ie={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ie[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Se={};ie.transitional=function(t,n,r){function s(o,i){return"[Axios v"+qe+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Se[i]&&(Se[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function Sn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],p=c===void 0||i(c,o,e);if(p!==!0)throw new m("option "+o+" must be "+p,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const Y={assertOptions:Sn,validators:ie},C=Y.validators;class M{constructor(t){this.defaults=t,this.interceptors={request:new he,response:new he}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=P(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&Y.assertOptions(r,{silentJSONParsing:C.transitional(C.boolean),forcedJSONParsing:C.transitional(C.boolean),clarifyTimeoutError:C.transitional(C.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:Y.assertOptions(s,{encode:C.function,serialize:C.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),n.headers=g.concat(i,o);const c=[];let p=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(n)===!1||(p=p&&d.synchronous,c.unshift(d.fulfilled,d.rejected))});const h=[];this.interceptors.response.forEach(function(d){h.push(d.fulfilled,d.rejected)});let u,l=0,w;if(!p){const f=[be.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,h),w=f.length,u=Promise.resolve(n);l<w;)u=u.then(f[l++],f[l++]);return u}w=c.length;let S=n;for(l=0;l<w;){const f=c[l++],d=c[l++];try{S=f(S)}catch(b){d.call(this,b);break}}try{u=be.call(this,S)}catch(f){return Promise.reject(f)}for(l=0,w=h.length;l<w;)u=u.then(h[l++],h[l++]);return u}getUri(t){t=P(this.defaults,t);const n=Me(t.baseURL,t.url);return ke(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){M.prototype[t]=function(n,r){return this.request(P(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(P(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}M.prototype[t]=n(),M.prototype[t+"Form"]=n(!0)});const H=M;class ae{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new B(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ae(function(s){t=s}),cancel:t}}}const Rn=ae;function On(e){return function(n){return e.apply(null,n)}}function An(e){return a.isObject(e)&&e.isAxiosError===!0}const ee={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ee).forEach(([e,t])=>{ee[t]=e});const gn=ee;function ze(e){const t=new H(e),n=Oe(H.prototype.request,t);return a.extend(n,H.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ze(P(e,s))},n}const y=ze(oe);y.Axios=H;y.CanceledError=B;y.CancelToken=Rn;y.isCancel=He;y.VERSION=qe;y.toFormData=$;y.AxiosError=m;y.Cancel=y.CanceledError;y.all=function(t){return Promise.all(t)};y.spread=On;y.isAxiosError=An;y.mergeConfig=P;y.AxiosHeaders=g;y.formToJSON=e=>Ue(a.isHTMLForm(e)?new FormData(e):e);y.getAdapter=Ie.getAdapter;y.HttpStatusCode=gn;y.default=y;const $e=y;$e.defaults.baseURL="https://65bd2426b51f9b29e932fc0e.mockapi.io";const xn=ve("adverts/getAdverts",async({page:e,makeFilter:t},n)=>{try{const{data:r}=await $e(`/adverts?page=${e}&limit=12${t?`&make=${t}`:""}`);return r}catch(r){return n.rejectWithValue(r.message)}}),Re=({makeFilter:e}={})=>async(t,n)=>{const r=n().adverts.page;try{const s=await t(xn({page:r,makeFilter:e})),o=n().adverts.list,i=s.payload;if(i.length>0){const c=i.filter(p=>!o.some(h=>h.id===p.id));t(Ve([...o,...c])),t(le(!0))}else t(le(!1))}catch(s){console.error("Error fetching adverts:",s)}},Tn=()=>{const e=We(),t=Ke(),n=L(Ze),r=L(Ye),s=L(et),o=L(tt);v.useEffect(()=>{e(Re())},[e,r,s]);const i=v.useCallback(()=>{o&&(e(Ge()),e(Re({makeFilter:r})))},[e,o,r]),c=v.useCallback(p=>{t(`/catalog?make=${p}`)},[t]);return N.jsxs(nt,{children:[N.jsx(it,{onFilterChange:c}),N.jsx(ot,{adverts:n}),o&&N.jsx(rt,{onClick:i,children:"Load more"})]})},Pn=Tn;export{Pn as default};