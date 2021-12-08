/*!
 * Knockout JavaScript library v3.5.1-sm
 * (c) The Knockout.js team - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(S=>{function O(a,c){return null===a||T[typeof a]?a===c:!1}function U(a,c){var d;return()=>{d||(d=setTimeout(()=>{d=0;a()},c))}}function V(a,c){var d;return()=>{clearTimeout(d);d=setTimeout(a,c)}}function W(a,c){null!==c&&c.m&&c.m()}function X(a,c){var d=this.Xb,g=d[A];g.W||(this.Ra&&this.xa[c]?(d.qb(c,a,this.xa[c]),this.xa[c]=null,--this.Ra):g.s[c]||d.qb(c,a,g.u?{S:a}:d.Ob(a)),a.ia&&a.Tb())}var L=S.document,P={},b="undefined"!==typeof P?P:{};b.o=(a,c)=>{a=a.split(".");for(var d=b,g=
0,k=a.length-1;g<k;g++)d=d[a[g]];d[a[k]]=c};b.ea=(a,c,d)=>{a[c]=d};b.o("version","3.5.1-sm");b.a={extend:(a,c)=>c?Object.assign(a,c):a,K:(a,c)=>a&&Object.entries(a).forEach(d=>c(d[0],d[1])),Va:a=>[...a.childNodes].forEach(c=>b.removeNode(c)),Hb:a=>{a=[...a];var c=(a[0]&&a[0].ownerDocument||L).createElement("div");a.forEach(d=>c.append(b.ba(d)));return c},wa:(a,c)=>Array.prototype.map.call(a,c?d=>b.ba(d.cloneNode(!0)):d=>d.cloneNode(!0)),sa:(a,c)=>{b.a.Va(a);c&&a.append(...c)},ya:(a,c)=>{if(a.length){for(c=
8===c.nodeType&&c.parentNode||c;a.length&&a[0].parentNode!==c;)a.splice(0,1);for(;1<a.length&&a[a.length-1].parentNode!==c;)--a.length;if(1<a.length){c=a[0];var d=a[a.length-1];for(a.length=0;c!==d;)a.push(c),c=c.nextSibling;a.push(d)}}return a},Nb:a=>null==a?"":a.trim?a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,""),Ua:a=>a.ownerDocument.documentElement.contains(1!==a.nodeType?a.parentNode:a),Qb:(a,c)=>{if(!a||!a.nodeType)throw Error("element must be a DOM node when calling triggerEvent");
a.dispatchEvent(new Event(c))},f:a=>b.N(a)?a():a,eb:(a,c)=>a.textContent=b.a.f(c)||""};b.o("utils",b.a);b.o("unwrap",b.a.f);(()=>{let a=0,c="__ko__"+Date.now(),d=new WeakMap;b.a.c={get:(g,k)=>(d.get(g)||{})[k],set:(g,k,t)=>{if(d.has(g))d.get(g)[k]=t;else{let e={};e[k]=t;d.set(g,e)}return t},Xa:function(g,k,t){return this.get(g,k)||this.set(g,k,t)},clear:g=>d.delete(g),U:()=>a++ +c}})();b.a.H=(()=>{var a=b.a.c.U(),c={1:1,8:1,9:1},d={1:1,9:1};const g=(e,f)=>{var h=b.a.c.get(e,a);f&&!h&&(h=new Set,b.a.c.set(e,
a,h));return h},k=e=>{var f=g(e);f&&(new Set(f)).forEach(h=>h(e));b.a.c.clear(e);d[e.nodeType]&&t(e.childNodes,!0)},t=(e,f)=>{for(var h=[],r,p=0;p<e.length;p++)if(!f||8===e[p].nodeType)if(k(h[h.length]=r=e[p]),e[p]!==r)for(;p--&&!h.includes(e[p]););};return{la:(e,f)=>{if("function"!=typeof f)throw Error("Callback must be a function");g(e,1).add(f)},cb:(e,f)=>{var h=g(e);h&&(h.delete(f),h.size||b.a.c.set(e,a,null))},ba:e=>{b.l.M(()=>{c[e.nodeType]&&(k(e),d[e.nodeType]&&t(e.getElementsByTagName("*")))});
return e},removeNode:e=>{b.ba(e);e.parentNode&&e.parentNode.removeChild(e)}}})();b.ba=b.a.H.ba;b.removeNode=b.a.H.removeNode;b.o("utils.domNodeDisposal",b.a.H);b.o("utils.domNodeDisposal.addDisposeCallback",b.a.H.la);b.Pb=(()=>{function a(){if(g)for(var f=g,h=0,r;t<g;)if(r=d[t++]){if(t>f){if(5E3<=++h){t=g;setTimeout(()=>{throw Error(`'Too much recursion' after processing ${h} task groups.`);},0);break}f=g}try{r()}catch(p){setTimeout(()=>{throw p;},0)}}}function c(){a();t=g=d.length=0}var d=[],g=0,
k=1,t=0,e=(f=>{var h=L.createElement("div");(new MutationObserver(f)).observe(h,{attributes:!0});return()=>h.classList.toggle("foo")})(c);return{Lb:f=>{g||e(c);d[g++]=f;return k++},cancel:f=>{f-=k-g;f>=t&&f<g&&(d[f]=null)}}})();b.Wa={debounce:(a,c)=>a.Fa(d=>V(d,c)),rateLimit:(a,c)=>{if("number"==typeof c)var d=c;else{d=c.timeout;var g=c.method}var k="function"==typeof g?g:U;a.Fa(t=>k(t,d,c))},notify:(a,c)=>{a.equalityComparer="always"==c?null:O}};var T={undefined:1,"boolean":1,number:1,string:1};
b.o("extenders",b.Wa);class Y{constructor(a,c,d){this.S=a;this.kb=c;this.na=d;this.La=!1;this.B=this.V=null;b.ea(this,"dispose",this.m)}m(){this.La||(this.B&&b.a.H.cb(this.V,this.B),this.La=!0,this.na(),this.S=this.kb=this.na=this.V=this.B=null)}i(a){this.V=a;b.a.H.la(a,this.B=this.m.bind(this))}}b.P=function(){Object.setPrototypeOf(this,H);H.Ca(this)};var H={Ca:a=>{a.R=new Map;a.R.set("change",new Set);a.pb=1},subscribe:function(a,c,d){var g=this;d=d||"change";var k=new Y(g,c?a.bind(c):a,()=>{g.R.get(d).delete(k);
g.ua&&g.ua(d)});g.ma&&g.ma(d);g.R.has(d)||g.R.set(d,new Set);g.R.get(d).add(k);return k},notifySubscribers:function(a,c){c=c||"change";"change"===c&&this.Ia();if(this.qa(c)){c="change"===c&&this.Rb||new Set(this.R.get(c));try{b.l.ub(),c.forEach(d=>{d.La||d.kb(a)})}finally{b.l.end()}}},Aa:function(){return this.pb},cc:function(a){return this.Aa()!==a},Ia:function(){++this.pb},Fa:function(a){var c=this,d=b.N(c),g,k,t,e,f;c.ta||(c.ta=c.notifySubscribers,c.notifySubscribers=function(r,p){p&&"change"!==
p?"beforeChange"===p?this.mb(r):this.ta(r,p):this.nb(r)});var h=a(()=>{c.ia=!1;d&&e===c&&(e=c.lb?c.lb():c());var r=k||f&&c.Ea(t,e);f=k=g=!1;r&&c.ta(t=e)});c.nb=(r,p)=>{p&&c.ia||(f=!p);c.Rb=new Set(c.R.get("change"));c.ia=g=!0;e=r;h()};c.mb=r=>{g||(t=r,c.ta(r,"beforeChange"))};c.ob=()=>{f=!0};c.Tb=()=>{c.Ea(t,c.F(!0))&&(k=!0)}},qa:function(a){return(this.R.get(a)||[]).size},Ea:function(a,c){return!this.equalityComparer||!this.equalityComparer(a,c)},toString:()=>"[object Object]",extend:function(a){var c=
this;a&&b.a.K(a,(d,g)=>{d=b.Wa[d];"function"==typeof d&&(c=d(c,g)||c)});return c}};b.ea(H,"init",H.Ca);b.ea(H,"subscribe",H.subscribe);b.ea(H,"extend",H.extend);Object.setPrototypeOf(H,Function.prototype);b.P.fn=H;b.fc=a=>null!=a&&"function"==typeof a.subscribe&&"function"==typeof a.notifySubscribers;(()=>{var a=[],c,d=0;b.l={ub:g=>{a.push(c);c=g},end:()=>c=a.pop(),Kb:g=>{if(c){if(!b.fc(g))throw Error("Only subscribable things can act as dependencies");c.Vb.call(c.Wb,g,g.Sb||(g.Sb=++d))}},M:(g,k,
t)=>{try{return a.push(c),c=void 0,g.apply(k,t||[])}finally{c=a.pop()}},za:()=>c&&c.j.za(),Za:()=>c&&c.Za,j:()=>c&&c.j}})();const G=Symbol("_latestValue");b.Y=a=>{function c(){if(0<arguments.length)return c.Ea(c[G],arguments[0])&&(c.ib(),c[G]=arguments[0],c.Ja()),this;b.l.Kb(c);return c[G]}c[G]=a;Object.defineProperty(c,"length",{get:()=>null==c[G]?void 0:c[G].length});b.P.fn.Ca(c);Object.setPrototypeOf(c,J);return c};var J={toJSON:function(){let a=this[G];return a&&a.toJSON?a.toJSON():a},equalityComparer:O,
F:function(){return this[G]},Ja:function(){this.notifySubscribers(this[G],"spectate");this.notifySubscribers(this[G])},ib:function(){this.notifySubscribers(this[G],"beforeChange")}};Object.setPrototypeOf(J,b.P.fn);var K=b.Y.B="__ko_proto__";J[K]=b.Y;b.N=a=>{if((a="function"==typeof a&&a[K])&&a!==J[K]&&a!==b.j.fn[K])throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");return!!a};b.hc=a=>"function"==typeof a&&(a[K]===J[K]||a[K]===b.j.fn[K]&&a.dc);b.o("observable",
b.Y);b.o("isObservable",b.N);b.o("observable.fn",J);b.ea(J,"valueHasMutated",J.Ja);b.ga=a=>{a=a||[];if("object"!=typeof a||!("length"in a))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");a=b.Y(a);Object.setPrototypeOf(a,b.ga.fn);return a.extend({trackArrayChanges:!0})};b.ga.fn={remove:function(a){for(var c=this.F(),d=!1,g="function"!=typeof a||b.N(a)?e=>e===a:a,k=c.length;k--;){var t=c[k];if(g(t)){if(c[k]!==t)throw Error("Array modified during remove; cannot remove item");
d||this.ib();d=!0;c.splice(k,1)}}d&&this.Ja()}};Object.setPrototypeOf(b.ga.fn,b.Y.fn);Object.getOwnPropertyNames(Array.prototype).forEach(a=>{"function"===typeof Array.prototype[a]&&"constructor"!=a&&("copyWithin fill pop push reverse shift sort splice unshift".split(" ").includes(a)?b.ga.fn[a]=function(...c){var d=this.F();this.ib();this.wb(d,a,c);c=d[a](...c);this.Ja();return c===d?this:c}:b.ga.fn[a]=function(...c){return this()[a](...c)})});b.Fb=a=>b.N(a)&&"function"==typeof a.remove&&"function"==
typeof a.push;b.o("observableArray",b.ga);b.o("isObservableArray",b.Fb);b.Wa.trackArrayChanges=(a,c)=>{function d(){function q(){if(f){var l=[].concat(a.F()||[]);if(a.qa("arrayChange")){if(!k||1<f)k=b.a.xb(h,l,a.Oa);var n=k}h=l;k=null;f=0;n&&n.length&&a.notifySubscribers(n,"arrayChange")}}g?q():(g=!0,e=a.subscribe(()=>++f,null,"spectate"),h=[].concat(a.F()||[]),k=null,t=a.subscribe(q))}a.Oa={};c&&"object"==typeof c&&b.a.extend(a.Oa,c);a.Oa.sparse=!0;if(!a.wb){var g=!1,k=null,t,e,f=0,h,r=a.ma,p=a.ua;
a.ma=q=>{r&&r.call(a,q);"arrayChange"===q&&d()};a.ua=q=>{p&&p.call(a,q);"arrayChange"!==q||a.qa("arrayChange")||(t&&t.m(),e&&e.m(),e=t=null,g=!1,h=void 0)};a.wb=(q,l,n)=>{function m(E,C,z){return u[u.length]={status:E,value:C,index:z}}if(g&&!f){var u=[],w=q.length,v=n.length,y=0;switch(l){case "push":y=w;case "unshift":for(q=0;q<v;q++)m("added",n[q],y+q);break;case "pop":y=w-1;case "shift":w&&m("deleted",q[y],y);break;case "splice":y=Math.min(Math.max(0,0>n[0]?w+n[0]:n[0]),w);w=1===v?w:Math.min(y+
(n[1]||0),w);v=y+v-2;l=Math.max(w,v);var x=[],B=[];for(let E=y,C=2;E<l;++E,++C)E<w&&B.push(m("deleted",q[E],E)),E<v&&x.push(m("added",n[C],E));b.a.Cb(B,x);break;default:return}k=u}}}};var A=Symbol("_state");b.j=(a,c)=>{function d(){if(0<arguments.length){if("function"!==typeof g)throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");g(...arguments);return this}k.W||b.l.Kb(d);(k.T||k.u&&d.ra())&&d.O();
return k.I}"object"===typeof a?c=a:(c=c||{},a&&(c.read=a));if("function"!=typeof c.read)throw Error("Pass a function that returns the value of the ko.computed");var g=c.write,k={I:void 0,X:!0,T:!0,Da:!1,gb:!1,W:!1,bb:!1,u:!1,Jb:c.read,i:c.disposeWhenNodeIsRemoved||c.i||null,oa:c.disposeWhen||c.oa,Ta:null,s:{},G:0,Bb:null};d[A]=k;d.dc="function"===typeof g;b.P.fn.Ca(d);Object.setPrototypeOf(d,M);c.pure?(k.bb=!0,k.u=!0,b.a.extend(d,Z)):c.deferEvaluation&&b.a.extend(d,aa);k.i&&(k.gb=!0,k.i.nodeType||
(k.i=null));k.u||c.deferEvaluation||d.O();k.i&&d.fa()&&b.a.H.la(k.i,k.Ta=()=>{d.m()});return d};var M={equalityComparer:O,za:function(){return this[A].G},ac:function(){var a=[];b.a.K(this[A].s,(c,d)=>a[d.ja]=d.S);return a},Ya:function(a){if(!this[A].G)return!1;var c=this.ac();return c.includes(a)||!!c.find(d=>d.Ya&&d.Ya(a))},qb:function(a,c,d){if(this[A].bb&&c===this)throw Error("A 'pure' computed must not be called recursively");this[A].s[a]=d;d.ja=this[A].G++;d.ka=c.Aa()},ra:function(){var a,c=
this[A].s;for(a in c)if(Object.prototype.hasOwnProperty.call(c,a)){var d=c[a];if(this.ha&&d.S.ia||d.S.cc(d.ka))return!0}},sc:function(){this.ha&&!this[A].Da&&this.ha(!1)},fa:function(){var a=this[A];return a.T||0<a.G},tc:function(){this.ia?this[A].T&&(this[A].X=!0):this.Ab()},Ob:function(a){return a.subscribe(this.Ab,this)},Ab:function(){var a=this,c=a.throttleEvaluation;c&&0<=c?(clearTimeout(this[A].Bb),this[A].Bb=setTimeout(()=>a.O(!0),c)):a.ha?a.ha(!0):a.O(!0)},O:function(a){var c=this[A],d=c.oa,
g=!1;if(!c.Da&&!c.W){if(c.i&&!b.a.Ua(c.i)||d&&d()){if(!c.gb){this.m();return}}else c.gb=!1;c.Da=!0;try{g=this.Zb(a)}finally{c.Da=!1}return g}},Zb:function(a){var c=this[A],d=c.bb?void 0:!c.G;var g={Xb:this,xa:c.s,Ra:c.G};b.l.ub({Wb:g,Vb:X,j:this,Za:d});c.s={};c.G=0;a:{try{var k=c.Jb();break a}finally{b.l.end(),g.Ra&&!c.u&&b.a.K(g.xa,W),c.X=c.T=!1}k=void 0}c.G?g=this.Ea(c.I,k):(this.m(),g=!0);g&&(c.u?this.Ia():this.notifySubscribers(c.I,"beforeChange"),c.I=k,this.notifySubscribers(c.I,"spectate"),
!c.u&&a&&this.notifySubscribers(c.I),this.ob&&this.ob());d&&this.notifySubscribers(c.I,"awake");return g},F:function(a){var c=this[A];(c.T&&(a||!c.G)||c.u&&this.ra())&&this.O();return c.I},Fa:function(a){b.P.fn.Fa.call(this,a);this.lb=function(){this[A].u||(this[A].X?this.O():this[A].T=!1);return this[A].I};this.ha=function(c){this.mb(this[A].I);this[A].T=!0;c&&(this[A].X=!0);this.nb(this,!c)}},m:function(){var a=this[A];!a.u&&a.s&&b.a.K(a.s,(c,d)=>d.m&&d.m());a.i&&a.Ta&&b.a.H.cb(a.i,a.Ta);a.s=void 0;
a.G=0;a.W=!0;a.X=!1;a.T=!1;a.u=!1;a.i=void 0;a.oa=void 0;a.Jb=void 0}},Z={ma:function(a){var c=this,d=c[A];if(!d.W&&d.u&&"change"==a){d.u=!1;if(d.X||c.ra())d.s=null,d.G=0,c.O()&&c.Ia();else{var g=[];b.a.K(d.s,(k,t)=>g[t.ja]=k);g.forEach((k,t)=>{var e=d.s[k],f=c.Ob(e.S);f.ja=t;f.ka=e.ka;d.s[k]=f});c.ra()&&c.O()&&c.Ia()}d.W||c.notifySubscribers(d.I,"awake")}},ua:function(a){var c=this[A];c.W||"change"!=a||this.qa("change")||(b.a.K(c.s,(d,g)=>{g.m&&(c.s[d]={S:g.S,ja:g.ja,ka:g.ka},g.m())}),c.u=!0,this.notifySubscribers(void 0,
"asleep"))},Aa:function(){var a=this[A];a.u&&(a.X||this.ra())&&this.O();return b.P.fn.Aa.call(this)}},aa={ma:function(a){"change"!=a&&"beforeChange"!=a||this.F()}};Object.setPrototypeOf(M,b.P.fn);M[b.Y.B]=b.j;b.o("computed",b.j);b.o("computed.fn",M);b.ea(M,"dispose",M.m);b.mc=a=>{if("function"===typeof a)return b.j(a,{pure:!0});a={...a,pure:!0};return b.j(a)};(()=>{b.v={L:a=>{switch(a.nodeName){case "OPTION":return!0===a.__ko__hasDomDataOptionValue__?b.a.c.get(a,b.b.options.ab):a.value;case "SELECT":return 0<=
a.selectedIndex?b.v.L(a.options[a.selectedIndex]):void 0;default:return a.value}},Ka:(a,c,d)=>{switch(a.nodeName){case "OPTION":"string"===typeof c?(b.a.c.set(a,b.b.options.ab,void 0),delete a.__ko__hasDomDataOptionValue__,a.value=c):(b.a.c.set(a,b.b.options.ab,c),a.__ko__hasDomDataOptionValue__=!0,a.value="number"===typeof c?c:"");break;case "SELECT":for(var g=-1,k=""===c||null==c,t=0,e=a.options.length,f;t<e;++t)if(f=b.v.L(a.options[t]),f==c||""===f&&k){g=t;break}if(d||0<=g||k&&1<a.size)a.selectedIndex=
g;break;default:a.value=null==c?"":c}}}})();b.D=(()=>{function a(f){f=b.a.Nb(f);123===f.charCodeAt(0)&&(f=f.slice(1,-1));f+="\n,";var h=[],r=f.match(g),p=[],q=0;if(1<r.length){for(var l=0,n;n=r[l++];){var m=n.charCodeAt(0);if(44===m){if(0>=q){h.push(u&&p.length?{key:u,value:p.join("")}:{unknown:u||p.join("")});var u=q=0;p=[];continue}}else if(58===m){if(!q&&!u&&1===p.length){u=p.pop();continue}}else if(47===m&&1<n.length&&(47===n.charCodeAt(1)||42===n.charCodeAt(1)))continue;else 47===m&&l&&1<n.length?
(m=r[l-1].match(k))&&!t[m[0]]&&(f=f.slice(f.indexOf(n)+1),r=f.match(g),l=-1,n="/"):40===m||123===m||91===m?++q:41===m||125===m||93===m?--q:u||p.length||34!==m&&39!==m||(n=n.slice(1,-1));p.push(n)}if(0<q)throw Error("Unbalanced parentheses, braces, or brackets");}return h}var c=["true","false","null","undefined"],d=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,g=/"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|`(?:\\.|[^`])*`|\/\*(?:[^*]|\*+[^*/])*\*+\/|\/\/.*\n|\/(?:\\.|[^/])+\/w*|[^\s:,/][^,"'`{}()/:[\]]*[^\s,"'`{}()/:[\]]|[^\s]/g,
k=/[\])"'A-Za-z0-9_$]+$/,t={"in":1,"return":1,"typeof":1},e=new Set;return{Na:[],hb:e,kc:a,lc:function(f,h){function r(m,u){if(!n){var w=b.b[m];if(w&&w.preprocess&&!(u=w.preprocess(u,m,r)))return;if(w=e.has(m)){var v=u;c.includes(v)?v=!1:(w=v.match(d),v=null===w?!1:w[1]?"Object("+w[1]+")"+w[2]:v);w=v}w&&q.push("'"+m+"':function(_z){"+v+"=_z}")}l&&(u="function(){return "+u+" }");p.push("'"+m+"':"+u)}h=h||{};var p=[],q=[],l=h.valueAccessors,n=h.bindingParams;("string"===typeof f?a(f):f).forEach(m=>
r(m.key||m.unknown,m.value));q.length&&r("_ko_property_writers","{"+q.join(",")+" }");return p.join(",")},ic:(f,h)=>-1<f.findIndex(r=>r.key==h),jb:(f,h,r,p,q)=>{if(f&&b.N(f))!b.hc(f)||q&&f.F()===p||f(p);else if((f=h.get("_ko_property_writers"))&&f[r])f[r](p)}}})();(()=>{function a(e){return 8==e.nodeType&&g.test(e.nodeValue)}function c(e){return 8==e.nodeType&&k.test(e.nodeValue)}function d(e,f){for(var h=e,r=1,p=[];h=h.nextSibling;){if(c(h)&&(b.a.c.set(h,t,!0),!--r))return p;p.push(h);a(h)&&++r}if(!f)throw Error("Cannot find closing comment tag to match: "+
e.nodeValue);return null}var g=/^\s*ko(?:\s+([\s\S]+))?\s*$/,k=/^\s*\/ko\s*$/,t="__ko_matchedEndComment__";b.h={Z:{},childNodes:e=>a(e)?d(e):e.childNodes,pa:e=>{a(e)?(e=d(e))&&[...e].forEach(f=>b.removeNode(f)):b.a.Va(e)},sa:(e,f)=>{a(e)?(b.h.pa(e),e.after(...f)):b.a.sa(e,f)},prepend:(e,f)=>{a(e)?e.nextSibling.before(f):e.prepend(f)},Eb:(e,f,h)=>{h?h.after(f):b.h.prepend(e,f)},firstChild:e=>{if(a(e))return e=e.nextSibling,!e||c(e)?null:e;let f=e.firstChild;if(f&&c(f))throw Error("Found invalid end comment, as the first child of "+
e);return f},nextSibling:e=>{if(a(e)){var f=d(e,void 0);e=f?(f.length?f[f.length-1]:e).nextSibling:null}if((f=e.nextSibling)&&c(f)){if(c(f)&&!b.a.c.get(f,t))throw Error("Found end comment without a matching opening comment, as child of "+e);return null}return f},bc:a,qc:e=>(e=e.nodeValue.match(g))?e[1]:null}})();(()=>{const a=new Map;b.vb=new class{jc(c){switch(c.nodeType){case 1:return null!=c.getAttribute("data-bind");case 8:return b.h.bc(c);default:return!1}}$b(c,d){a:{switch(c.nodeType){case 1:var g=
c.getAttribute("data-bind");break a;case 8:g=b.h.qc(c);break a}g=null}if(g)try{let t={valueAccessors:!0},e=a.get(g);if(!e){var k="with($context){with($data||{}){return{"+b.D.lc(g,t)+"}}}";e=new Function("$context","$element",k);a.set(g,e)}return e(d,c)}catch(t){throw t.message="Unable to parse bindings.\nBindings value: "+g+"\nMessage: "+t.message,t;}return null}}})();(()=>{function a(l){var n=(l=b.a.c.get(l,p))&&l.C;n&&(l.C=null,n.Ib())}function c(l,n){for(var m,u=b.h.firstChild(n);m=u;)u=b.h.nextSibling(m),
d(l,m);b.g.notify(n,b.g.A)}function d(l,n){var m=l;if(1===n.nodeType||b.vb.jc(n))m=k(n,null,l).bindingContextForDescendants;m&&n.matches&&!n.matches("SCRIPT,TEXTAREA,TEMPLATE")&&c(m,n)}function g(l){var n=[],m={},u=[];b.a.K(l,function y(v){if(!m[v]){var x=b.b[v];x&&(x.after&&(u.push(v),x.after.forEach(B=>{if(l[B]){if(u.includes(B))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+u.join(", "));y(B)}}),u.length--),n.push({key:v,Db:x}));m[v]=!0}});return n}
function k(l,n,m){var u=b.a.c.Xa(l,p,{}),w=u.Ub;if(!n){if(w)throw Error("You cannot apply bindings multiple times to the same element.");u.Ub=!0}w||(u.context=m);u.$a||(u.$a={});if(n&&"function"!==typeof n)var v=n;else{var y=b.j(()=>{if(v=n?n(m,l):b.vb.$b(l,m)){if(m[e])m[e]();if(m[h])m[h]()}return v},{i:l});v&&y.fa()||(y=null)}var x=m,B;if(v){var E=y?z=>()=>y()[z]():z=>v[z],C={get:z=>v[z]&&E(z)(),has:z=>z in v};b.g.A in v&&b.g.subscribe(l,b.g.A,()=>{var z=v[b.g.A]();if(z){var D=b.h.childNodes(l);
D.length&&z(D,b.zb(D[0]))}});b.g.ca in v&&(x=b.g.fb(l,m),b.g.subscribe(l,b.g.ca,()=>{var z=v[b.g.ca]();z&&b.h.firstChild(l)&&z(l)}));g(v).forEach(z=>{var D=z.Db.init,F=z.Db.update,I=z.key;if(8===l.nodeType&&!b.h.Z[I])throw Error("The binding '"+I+"' cannot be used with virtual elements");try{"function"==typeof D&&b.l.M(()=>{var N=D(l,E(I),C,x.$data,x);if(N&&N.controlsDescendantBindings){if(void 0!==B)throw Error("Multiple bindings ("+B+" and "+I+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
B=I}}),"function"==typeof F&&b.j(()=>F(l,E(I),C,x.$data,x),{i:l})}catch(N){throw N.message='Unable to process binding "'+I+": "+v[I]+'"\nMessage: '+N.message,N;}})}u=void 0===B;return{shouldBindDescendants:u,bindingContextForDescendants:u&&x}}function t(l,n){return l&&l instanceof b.aa?l:new b.aa(l,void 0,void 0,n)}var e=Symbol("_subscribable"),f=Symbol("_ancestorBindingInfo"),h=Symbol("_dataDependency");b.b={};var r={};b.aa=class{constructor(l,n,m,u,w){function v(){var D=E?B():B,F=b.a.f(D);n?(b.a.extend(y,
n),f in n&&(y[f]=n[f])):(y.$parents=[],y.$root=F,y.ko=b);y[e]=z;x?F=y.$data:(y.$rawData=D,y.$data=F);m&&(y[m]=F);u&&u(y,n,F);if(n&&n[e]&&!b.l.j().Ya(n[e]))n[e]();C&&(y[h]=C);return y.$data}var y=this,x=l===r,B=x?void 0:l,E="function"==typeof B&&!b.N(B),C=w&&w.dataDependency;if(w&&w.exportDependencies)v();else{var z=b.mc(v);z.F();z.fa()?z.equalityComparer=null:y[e]=void 0}}["createChildContext"](l,n,m,u){!u&&n&&"object"==typeof n&&(u=n,n=u.as,m=u.extend);return new b.aa(l,this,n,(w,v)=>{w.$parentContext=
v;w.$parent=v.$data;w.$parents=(v.$parents||[]).slice(0);w.$parents.unshift(w.$parent);m&&m(w)},u)}["extend"](l,n){return new b.aa(r,this,null,m=>b.a.extend(m,"function"==typeof l?l(m):l),n)}};var p=b.a.c.U();class q{constructor(l,n,m){this.B=l;this.na=n;this.va=new Set;this.A=!1;n.C||b.a.H.la(l,a);m&&m.C&&(m.C.va.add(l),this.V=m)}Ib(){this.V&&this.V.C&&this.V.C.Yb(this.B)}Yb(l){this.va.delete(l);!this.va.size&&this.A&&this.yb()}yb(){this.A=!0;this.na.C&&!this.va.size&&(this.na.C=null,b.a.H.cb(this.B,
a),b.g.notify(this.B,b.g.ca),this.Ib())}}b.g={A:"childrenComplete",ca:"descendantsComplete",subscribe:(l,n,m,u,w)=>{var v=b.a.c.Xa(l,p,{});v.da||(v.da=new b.P);w&&w.notifyImmediately&&v.$a[n]&&b.l.M(m,u,[l]);return v.da.subscribe(m,u,n)},notify:(l,n)=>{var m=b.a.c.get(l,p);if(m&&(m.$a[n]=!0,m.da&&m.da.notifySubscribers(l,n),n==b.g.A))if(m.C)m.C.yb();else if(void 0===m.C&&m.da&&m.da.qa(b.g.ca))throw Error("descendantsComplete event not supported for bindings on this node");},fb:(l,n)=>{var m=b.a.c.Xa(l,
p,{});m.C||(m.C=new q(l,m,n[f]));return n[f]==m?n:n.extend(u=>{u[f]=m})}};b.pc=l=>(l=b.a.c.get(l,p))&&l.context;b.rb=(l,n,m)=>k(l,n,t(m));b.tb=(l,n)=>{1!==n.nodeType&&8!==n.nodeType||c(t(l),n)};b.sb=function(l,n,m){if(2>arguments.length){if(n=L.body,!n)throw Error("ko.applyBindings: could not find document.body; has the document been loaded?");}else if(!n||1!==n.nodeType&&8!==n.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
d(t(l,m),n)};b.zb=l=>(l=l&&[1,8].includes(l.nodeType)&&b.pc(l))?l.$data:void 0;b.o("bindingHandlers",b.b);b.o("applyBindings",b.sb);b.o("applyBindingAccessorsToNode",b.rb);b.o("dataFor",b.zb)})();(()=>{function a(f,h){var r={},p=t[f]||{},q=p.template;p=p.viewModel;if(q){q.element||c(f,"Unknown template value: "+q);q=q.element;var l=L.getElementById(q);l||c(f,"Cannot find element with ID "+q);l.matches("TEMPLATE")||c(f,"Template Source Element not a <template>");r.template=b.a.wa(l.content.childNodes)}p&&
("function"!==typeof p[e]&&c(f,"Unknown viewModel value: "+p),r[e]=p[e]);r.template&&r[e]?h(r):h(null)}function c(f,h){throw Error(`Component '${f}': ${h}`);}function d(f,h){var r=!1;a(f,p=>{(r=null!=p)&&h(p)});r||h(null)}var g=Object.create(null),k=Object.create(null);b.Pa={get:(f,h)=>{var r=k[f];if(r)b.Pb.Lb(()=>h(r.definition));else{var p=g[f];if(p)p.subscribe(h);else{p=g[f]=new b.P;p.subscribe(h);d(f,l=>{k[f]={definition:l};delete g[f];q?p.notifySubscribers(l):b.Pb.Lb(()=>p.notifySubscribers(l))});
var q=!0}}},rc:f=>delete k[f],register:(f,h)=>{if(!h)throw Error("Invalid configuration for "+f);if(t[f])throw Error("Component "+f+" is already registered");t[f]=h}};var t=Object.create(null),e="createViewModel";b.o("components",b.Pa);b.o("components.register",b.Pa.register)})();(()=>{var a=0;b.b.component={init:(c,d,g,k,t)=>{var e,f,h,r=()=>{var q=e&&e.dispose;"function"===typeof q&&q.call(e);h&&h.m();f=e=h=null},p=[...b.h.childNodes(c)];b.h.pa(c);b.a.H.la(c,r);b.j(()=>{var q=b.a.f(d());if("string"!==
typeof q){var l=b.a.f(q.params);q=b.a.f(q.name)}if(!q)throw Error("No component name specified");var n=b.g.fb(c,t),m=f=++a;b.Pa.get(q,u=>{if(f===m){r();if(!u)throw Error("Unknown component '"+q+"'");var w=u.template;if(!w)throw Error("Component '"+q+"' has no template");b.h.sa(c,b.a.wa(w));e=u.createViewModel(l,{element:c,templateNodes:p});b.tb(n.createChildContext(e,{extend:v=>{v.$component=e;v.$componentTemplateNodes=p}}),c)}})},{i:c});return{controlsDescendantBindings:!0}}};b.h.Z.component=!0})();
b.b.attr={update:(a,c)=>{c=b.a.f(c())||{};b.a.K(c,function(d,g){g=b.a.f(g);var k=d.indexOf(":");k="lookupNamespaceURI"in a&&0<k&&a.lookupNamespaceURI(d.slice(0,k));var t=!1===g||null==g;t?k?a.removeAttributeNS(k,d):a.removeAttribute(d):g=g.toString();t||(k?a.setAttributeNS(k,d,g):a.setAttribute(d,g));"name"===d&&(a.name=t?"":g)})}};var Q=(a,c,d)=>{c&&c.split(/\s+/).forEach(g=>a.classList.toggle(g,d))};b.b.css={update:(a,c)=>{c=b.a.f(c());null!==c&&"object"==typeof c?b.a.K(c,(d,g)=>{g=b.a.f(g);Q(a,
d,!!g)}):(c=b.a.Nb(c),Q(a,a.__ko__cssValue,!1),a.__ko__cssValue=c,Q(a,c,!0))}};b.b.enable={update:(a,c)=>{(c=b.a.f(c()))&&a.disabled?a.removeAttribute("disabled"):c||a.disabled||(a.disabled=!0)}};b.b.disable={update:(a,c)=>b.b.enable.update(a,()=>!b.a.f(c()))};b.b.event={init:(a,c,d,g,k)=>{d=c()||{};b.a.K(d,t=>{"string"==typeof t&&a.addEventListener(t,function(e){var f=c()[t];if(f)try{g=k.$data;var h=f.apply(g,[g,...arguments])}finally{!0!==h&&e.preventDefault()}})})}};b.b.foreach={Gb:a=>()=>{var c=
a(),d=b.N(c)?c.F():c;if(!d||"number"==typeof d.length)return{foreach:c};b.a.f(c);return{foreach:d.data,as:d.as,beforeRemove:d.beforeRemove}},init:(a,c)=>b.b.template.init(a,b.b.foreach.Gb(c)),update:(a,c,d,g,k)=>b.b.template.update(a,b.b.foreach.Gb(c),d,g,k)};b.D.Na.foreach=!1;b.h.Z.foreach=!0;b.b.hasfocus={init:(a,c,d)=>{var g=t=>{a.__ko_hasfocusUpdating=!0;t=a.ownerDocument.activeElement===a;var e=c();b.D.jb(e,d,"hasfocus",t,!0);a.__ko_hasfocusLastValue=t;a.__ko_hasfocusUpdating=!1},k=g.bind(null,
!0);g=g.bind(null,!1);a.addEventListener("focus",k);a.addEventListener("focusin",k);a.addEventListener("blur",g);a.addEventListener("focusout",g);a.__ko_hasfocusLastValue=!1},update:(a,c)=>{c=!!b.a.f(c());a.__ko_hasfocusUpdating||a.__ko_hasfocusLastValue===c||(c?a.focus():a.blur())}};b.D.hb.add("hasfocus");b.b.html={init:()=>({controlsDescendantBindings:!0}),update:(a,c)=>{b.a.Va(a);c=b.a.f(c());if(null!=c){const d=L.createElement("template");d.innerHTML="string"!=typeof c?c.toString():c;a.appendChild(d.content)}}};
(function(){function a(c,d,g){b.b[c]={init:(k,t,e,f,h)=>{var r,p={};d&&(p={as:e.get("as"),exportDependencies:!0});var q=e.has(b.g.ca);b.j(()=>{var l=b.a.f(t()),n=!g!==!l,m=!r;q&&(h=b.g.fb(k,h));if(n){p.dataDependency=b.l.j();var u=d?h.createChildContext("function"==typeof l?l:t,p):b.l.za()?h.extend(null,p):h}m&&b.l.za()&&(r=b.a.wa(b.h.childNodes(k),!0));n?(m||b.h.sa(k,b.a.wa(r)),b.tb(u,k)):(b.h.pa(k),b.g.notify(k,b.g.A))},{i:k});return{controlsDescendantBindings:!0}}};b.D.Na[c]=!1;b.h.Z[c]=!0}a("if");
a("ifnot",!1,!0);a("with",!0)})();var R={};b.b.options={init:a=>{if(!a.matches("SELECT"))throw Error("options binding applies only to SELECT elements");for(;0<a.length;)a.remove(0);return{controlsDescendantBindings:!0}},update:(a,c,d)=>{function g(){return Array.from(a.options).filter(m=>m.selected)}function k(m,u,w){var v=typeof u;return"function"==v?u(m):"string"==v?m[u]:w}function t(m,u){l&&r?b.g.notify(a,b.g.A):p.length&&(m=p.includes(b.v.L(u[0])),u[0].selected=m,l&&!m&&b.l.M(b.a.Qb,null,[a,"change"]))}
var e=a.multiple,f=0!=a.length&&e?a.scrollTop:null,h=b.a.f(c()),r=d.get("valueAllowUnset")&&d.has("value");c={};var p=[];r||(e?p=g().map(b.v.L):0<=a.selectedIndex&&p.push(b.v.L(a.options[a.selectedIndex])));if(h){"undefined"==typeof h.length&&(h=[h]);var q=h.filter(m=>m||null==m);d.has("optionsCaption")&&(h=b.a.f(d.get("optionsCaption")),null!==h&&void 0!==h&&q.unshift(R))}var l=!1;c.beforeRemove=m=>a.removeChild(m);h=t;d.has("optionsAfterRender")&&"function"==typeof d.get("optionsAfterRender")&&
(h=(m,u)=>{t(m,u);b.l.M(d.get("optionsAfterRender"),null,[u[0],m!==R?m:void 0])});b.a.Mb(a,q,function(m,u,w){w.length&&(p=!r&&w[0].selected?[b.v.L(w[0])]:[],l=!0);u=a.ownerDocument.createElement("option");m===R?(b.a.eb(u,d.get("optionsCaption")),b.v.Ka(u,void 0)):(w=k(m,d.get("optionsValue"),m),b.v.Ka(u,b.a.f(w)),m=k(m,d.get("optionsText"),w),b.a.eb(u,m));return[u]},c,h);if(!r){var n;e?n=p.length&&g().length<p.length:n=p.length&&0<=a.selectedIndex?b.v.L(a.options[a.selectedIndex])!==p[0]:p.length||
0<=a.selectedIndex;n&&b.l.M(b.a.Qb,null,[a,"change"])}(r||b.l.Za())&&b.g.notify(a,b.g.A);f&&20<Math.abs(f-a.scrollTop)&&(a.scrollTop=f)}};b.b.options.ab=b.a.c.U();b.b.style={update:(a,c)=>{c=b.a.f(c()||{});b.a.K(c,(d,g)=>{g=b.a.f(g);if(null==g||!1===g)g="";if(/^--/.test(d))a.style.setProperty(d,g);else{d=d.replace(/-(\w)/g,(t,e)=>e.toUpperCase());var k=a.style[d];a.style[d]=g;g===k||a.style[d]!=k||isNaN(g)||(a.style[d]=g+"px")}})}};b.b.submit={init:(a,c,d,g,k)=>{if("function"!=typeof c())throw Error("The value for a submit binding must be a function");
a.addEventListener("submit",t=>{var e=c();try{var f=e.call(k.$data,a)}finally{!0!==f&&(t.preventDefault?t.preventDefault():t.returnValue=!1)}})}};b.b.text={init:()=>({controlsDescendantBindings:!0}),update:(a,c)=>{8===a.nodeType&&(a.text||a.after(a.text=L.createTextNode("")),a=a.text);b.a.eb(a,c())}};b.h.Z.text=!0;b.b.textInput={init:(a,c,d)=>{var g=a.value,k,t,e=()=>{clearTimeout(k);t=k=void 0;var h=a.value;g!==h&&(g=h,b.D.jb(c(),d,"textInput",h))},f=()=>{var h=b.a.f(c());null==h&&(h="");void 0!==
t&&h===t?setTimeout(f,4):a.value!==h&&(a.value=h,g=a.value)};a.addEventListener("input",e);a.addEventListener("change",e);a.addEventListener("blur",e);b.j(f,{i:a})}};b.D.hb.add("textInput");b.b.textinput={preprocess:(a,c,d)=>d("textInput",a)};b.b.value={init:(a,c,d)=>{var g=a.matches("SELECT"),k=a.matches("INPUT");if(!k||"checkbox"!=a.type&&"radio"!=a.type){var t=new Set,e=d.get("valueUpdate"),f=null;e&&("string"==typeof e?t.add(e):e.forEach(q=>t.add(q)),t.delete("change"));var h=()=>{f=null;var q=
c(),l=b.v.L(a);b.D.jb(q,d,"value",l)};t.forEach(q=>{var l=h;(q||"").startsWith("after")&&(l=()=>{f=b.v.L(a);setTimeout(h,0)},q=q.slice(5));a.addEventListener(q,l)});var r=k&&"file"==a.type?()=>{var q=b.a.f(c());null==q||""===q?a.value="":b.l.M(h)}:()=>{var q=b.a.f(c()),l=b.v.L(a);if(null!==f&&q===f)setTimeout(r,0);else if(q!==l||void 0===l)g?(l=d.get("valueAllowUnset"),b.v.Ka(a,q,l),l||q===b.v.L(a)||b.l.M(h)):b.v.Ka(a,q)};if(g){var p;b.g.subscribe(a,b.g.A,()=>{p?d.get("valueAllowUnset")?r():h():(a.addEventListener("change",
h),p=b.j(r,{i:a}))},null,{notifyImmediately:!0})}else a.addEventListener("change",h),b.j(r,{i:a})}else b.rb(a,{checkedValue:c})},update:()=>{}};b.D.hb.add("value");b.b.visible={update:(a,c)=>{c=b.a.f(c());var d="none"!=a.style.display;c&&!d?a.style.display="":d&&!c&&(a.style.display="none")}};b.b.hidden={update:(a,c)=>a.hidden=!!b.a.f(c())};(function(a){b.b[a]={init:function(c,d,g,k,t){return b.b.event.init.call(this,c,()=>({[a]:d()}),g,k,t)}}})("click");(()=>{let a=b.a.c.U();class c{constructor(g){this.Sa=
g}Ga(...g){let k=this.Sa;if(!g.length)return b.a.c.get(k,a)||(11===this.B?k.content:1===this.B?k:void 0);b.a.c.set(k,a,g[0])}}class d extends c{constructor(g){super(g);g&&(this.B=g.matches("TEMPLATE")&&g.content?g.content.nodeType:1)}}b.Ha={Sa:d,Ma:c}})();(()=>{function a(e,f){if(e.length){var h=e[0],r=h.parentNode;g(h,e[e.length-1],p=>{1!==p.nodeType&&8!==p.nodeType||b.sb(f,p)});b.a.ya(e,r)}}function c(e,f,h,r){var p=(e&&(e.nodeType?e:0<e.length?e[0]:null)||h||{}).ownerDocument;if("string"==typeof h){p=
p||L;p=p.getElementById(h);if(!p)throw Error("Cannot find template with ID "+h);h=new b.Ha.Sa(p)}else if([1,8].includes(h.nodeType))h=new b.Ha.Ma(h);else throw Error("Unknown template type: "+h);h=(h=h.Ga?h.Ga():null)?[...h.cloneNode(!0).childNodes]:null;if("number"!=typeof h.length||0<h.length&&"number"!=typeof h[0].nodeType)throw Error("Template engine must return an array of DOM nodes");p=!1;switch(f){case "replaceChildren":b.h.sa(e,h);p=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+
f);}p&&(a(h,r),"replaceChildren"==f&&b.g.notify(e,b.g.A));return h}function d(e,f,h){return b.N(e)?e():"function"===typeof e?e(f,h):e}var g=(e,f,h)=>{var r;for(f=b.h.nextSibling(f);e&&(r=e)!==f;)e=b.h.nextSibling(r),h(r,e)};b.nc=function(e,f,h,r){h=h||{};var p=p||"replaceChildren";if(r){var q=r.nodeType?r:0<r.length?r[0]:null;return b.j(()=>{var l=f&&f instanceof b.aa?f:new b.aa(f,null,null,null,{exportDependencies:!0}),n=d(e,l.$data,l);c(r,p,n,l,h)},{oa:()=>!q||!b.a.Ua(q),i:q})}console.log("no targetNodeOrNodeArray")};
b.oc=(e,f,h,r,p)=>{function q(v,y){b.l.M(b.a.Mb,null,[r,v,m,h,u,y]);b.g.notify(r,b.g.A)}var l,n=h.as,m=(v,y)=>{l=p.createChildContext(v,{as:n,extend:x=>{x.$index=y;n&&(x[n+"Index"]=y)}});v=d(e,v,l);return c(r,"ignoreTargetNode",v,l,h)},u=(v,y)=>{a(y,l);l=null};if(!h.beforeRemove&&b.Fb(f)){q(f.F());var w=f.subscribe(v=>{q(f(),v)},null,"arrayChange");w.i(r);return w}return b.j(()=>{var v=b.a.f(f)||[];"undefined"==typeof v.length&&(v=[v]);q(v)},{i:r})};var k=b.a.c.U(),t=b.a.c.U();b.b.template={init:(e,
f)=>{f=b.a.f(f());if("string"==typeof f||"name"in f)b.h.pa(e);else if("nodes"in f){f=f.nodes||[];if(b.N(f))throw Error('The "nodes" option must be a plain, non-observable array.');let h=f[0]&&f[0].parentNode;h&&b.a.c.get(h,t)||(h=b.a.Hb(f),b.a.c.set(h,t,!0));(new b.Ha.Ma(e)).Ga(h)}else if(f=b.h.childNodes(e),0<f.length)f=b.a.Hb(f),(new b.Ha.Ma(e)).Ga(f);else throw Error("Anonymous template defined, but no template content was provided");return{controlsDescendantBindings:!0}},update:(e,f,h,r,p)=>{var q=
f();f=b.a.f(q);h=!0;r=null;"string"==typeof f?f={}:(q="name"in f?f.name:e,"if"in f&&(h=b.a.f(f["if"])),h&&"ifnot"in f&&(h=!b.a.f(f.ifnot)),h&&!q&&(h=!1));"foreach"in f?r=b.oc(q,h&&f.foreach||[],f,e,p):h?(h=p,"data"in f&&(h=p.createChildContext(f.data,{as:f.as,exportDependencies:!0})),r=b.nc(q,h,f,e)):b.h.pa(e);p=r;(f=b.a.c.get(e,k))&&"function"==typeof f.m&&f.m();b.a.c.set(e,k,!p||p.fa&&!p.fa()?void 0:p)}};b.D.Na.template=e=>{e=b.D.kc(e);return 1==e.length&&e[0].unknown||b.D.ic(e,"name")?null:"This template engine does not support anonymous templates nested within its templates"};
b.h.Z.template=!0})();b.a.Cb=(a,c,d)=>{if(a.length&&c.length){var g,k,t,e,f;for(g=k=0;(!d||g<d)&&(e=a[k]);++k){for(t=0;f=c[t];++t)if(e.value===f.value){e.moved=f.index;f.moved=e.index;c.splice(t,1);g=t=0;break}g+=t}}};b.a.xb=(()=>{function a(c,d,g,k,t){var e=Math.min,f=Math.max,h=[],r,p=c.length,q,l=d.length,n=l-p||1,m=p+l+1,u;for(r=0;r<=p;r++){var w=u;h.push(u=[]);var v=e(l,r+n);for(q=f(0,r-1);q<=v;q++)u[q]=q?r?c[r-1]===d[q-1]?w[q-1]:e(w[q]||m,u[q-1]||m)+1:q+1:r+1}e=[];f=[];n=[];r=p;for(q=l;r||q;)l=
h[r][q]-1,q&&l===h[r][q-1]?f.push(e[e.length]={status:g,value:d[--q],index:q}):r&&l===h[r-1][q]?n.push(e[e.length]={status:k,value:c[--r],index:r}):(--q,--r,t.sparse||e.push({status:"retained",value:d[q]}));b.a.Cb(n,f,!t.dontLimitMoves&&10*p);return e.reverse()}return function(c,d,g){g="boolean"===typeof g?{dontLimitMoves:g}:g||{};c=c||[];d=d||[];return c.length<d.length?a(c,d,"added","deleted",g):a(d,c,"deleted","added",g)}})();(()=>{function a(g,k,t,e,f){var h=[],r=b.j(()=>{var p=k(t,f,b.a.ya(h,
g))||[];if(0<h.length){var q=h.nodeType?[h]:h;if(0<q.length){var l=q[0],n=l.parentNode,m;var u=0;for(m=p.length;u<m;u++)n.insertBefore(p[u],l);u=0;for(m=q.length;u<m;u++)b.removeNode(q[u])}e&&b.l.M(e,null,[t,p,f])}h.length=0;h.push(...p)},{i:g,oa:()=>!!h.find(b.a.Ua)});return{J:h,Qa:r.fa()?r:void 0}}var c=b.a.c.U(),d=b.a.c.U();b.a.Mb=(g,k,t,e,f,h)=>{function r(C){x={$:C,Ba:b.Y(m++)};l.push(x)}function p(C){x=q[C];x.Ba(m++);b.a.ya(x.J,g);l.push(x)}k=k||[];"undefined"==typeof k.length&&(k=[k]);e=e||
{};var q=b.a.c.get(g,c),l=[],n=0,m=0,u=[],w=[],v=[],y=0;if(q){if(!h||q&&q._countWaitingForRemove)h=Array.prototype.map.call(q,C=>C.$),h=b.a.xb(h,k,{dontLimitMoves:e.dontLimitMoves,sparse:!0});for(let C=0,z,D,F;z=h[C];C++)switch(D=z.moved,F=z.index,z.status){case "deleted":for(;n<F;)p(n++);if(void 0===D){var x=q[n];x.Qa&&(x.Qa.m(),x.Qa=void 0);b.a.ya(x.J,g).length&&(e.beforeRemove&&(l.push(x),y++,x.$===d?x=null:v[x.Ba.F()]=x),x&&u.push.apply(u,x.J))}n++;break;case "added":for(;m<F;)p(n++);void 0!==
D?(w.push(l.length),p(D)):r(z.value)}for(;m<k.length;)p(n++);l._countWaitingForRemove=y}else k.forEach(r);b.a.c.set(g,c,l);u.forEach(e.beforeRemove?b.ba:b.removeNode);var B,E;y=g.ownerDocument.activeElement;if(w.length)for(;void 0!=(k=w.shift());){x=l[k];for(B=void 0;k;)if((E=l[--k].J)&&E.length){B=E[E.length-1];break}for(n=0;u=x.J[n];B=u,n++)b.h.Eb(g,u,B)}for(k=0;x=l[k];k++){x.J||b.a.extend(x,a(g,t,x.$,f,x.Ba));for(n=0;u=x.J[n];B=u,n++)b.h.Eb(g,u,B);!x.ec&&f&&(f(x.$,x.J,x.Ba),x.ec=!0,B=x.J[x.J.length-
1])}y&&g.ownerDocument.activeElement!=y&&y.focus();(function(C,z){if(C)for(var D=0,F=z.length;D<F;D++)z[D]&&z[D].J.forEach(I=>C(I,D,z[D].$))})(e.beforeRemove,v);for(k=0;k<v.length;++k)v[k]&&(v[k].$=d)}})();S.ko=P})(this);
