!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ls=e():t.ls=e()}(this,(()=>(()=>{"use strict";var t={d:(e,r)=>{for(var l in r)t.o(r,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:r[l]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{default:()=>f});const r=(...t)=>{},l=t=>null!==t&&"Object"===t.constructor.name;let n;const c=()=>{if(void 0!==n)return n;n=!0;try{localStorage||(n=!1)}catch(t){n=!1}return p(),n},o=String.fromCharCode(0),i=(t,e,r=!0)=>r?[...JSON.stringify(t)].map((t=>String.fromCharCode(t.charCodeAt(0)+e))).join(""):JSON.parse([...t].map((t=>String.fromCharCode(t.charCodeAt(0)-e))).join("")),a={ttl:null,encrypt:!1,encrypter:i,decrypter:(t,e)=>i(t,e,!1),secret:75,prefix:null},p=(t=!1,e={})=>{if(!c())return!1;const r=null===e.prefix?null:e.prefix||a.prefix;Object.keys(localStorage).forEach((e=>{if(r&&!e.startsWith(r))return;const n=localStorage.getItem(e);if(!n)return;let c;try{c=JSON.parse(n)}catch(t){return}l(c)&&o in c&&(Date.now()>c.ttl||t)&&localStorage.removeItem(e)}))},f={config:a,set:(t,e,l={})=>{if(!c())return!1;const n=Object.assign(Object.assign(Object.assign({},a),l),{encrypt:!1!==l.encrypt&&(l.encrypt||a.encrypt),ttl:null===l.ttl?null:l.ttl||a.ttl,prefix:null===l.prefix?null:l.prefix||a.prefix});try{const l=n.ttl&&!isNaN(n.ttl)&&n.ttl>0;let c=l?{[o]:e,ttl:Date.now()+1e3*n.ttl}:e;n.encrypt&&(l?c[o]=(n.encrypter||r)(c[o],n.secret):c=(n.encrypter||r)(c,n.secret)),n.prefix&&(t=`${n.prefix}${t}`),localStorage.setItem(t,JSON.stringify(c))}catch(t){return!1}},get:(t,e={})=>{if(!c())return null;const n=Object.assign(Object.assign(Object.assign({},a),e),{encrypt:!1!==e.encrypt&&(e.encrypt||a.encrypt),ttl:null===e.ttl?null:e.ttl||a.ttl,prefix:null===e.prefix?null:e.prefix||a.prefix});n.prefix&&(t=`${n.prefix}${t}`);const i=localStorage.getItem(t);if(!i)return null;let p=JSON.parse(i);const f=l(p)&&o in p;if(n.decrypt||n.encrypt)try{f?p[o]=(n.decrypter||r)(p[o],n.secret):p=(n.decrypter||r)(p,n.secret)}catch(t){}return f?Date.now()>p.ttl?(localStorage.removeItem(t),null):p[o]:p},flush:p,clear:(t={})=>{if(!c())return!1;const e=null===t.prefix?null:t.prefix||a.prefix;e?Object.keys(localStorage).forEach((t=>{t.startsWith(`${e}`)&&localStorage.removeItem(t)})):localStorage.clear()},remove:(t,e={})=>{if(!c())return!1;const r=null===e.prefix?null:e.prefix||a.prefix;r&&(t=`${r}${t}`),localStorage.removeItem(t)}};return e.default})()));
//# sourceMappingURL=localstorage-slim.js.map