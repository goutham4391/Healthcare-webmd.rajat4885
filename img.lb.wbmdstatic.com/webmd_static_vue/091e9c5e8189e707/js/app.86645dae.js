(function(e){function t(t){for(var a,r,c=t[0],d=t[1],s=t[2],l=0,u=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);b&&b(t);while(u.length)u.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=d(d.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function c(e){return d.p+"js/"+({"load-dynamic":"load-dynamic","non-critical":"non-critical","pagetype-oncology":"pagetype-oncology","pagetype-sitefronts":"pagetype-sitefronts"}[e]||e)+"."+{"chunk-2d0c86a3":"7e3d0081","load-dynamic":"4c39f711","non-critical":"44767ec2","pagetype-oncology":"4b8c0049","pagetype-sitefronts":"37dbf48d"}[e]+".js"}function d(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.e=function(e){var t=[],n={"load-dynamic":1,"non-critical":1,"pagetype-oncology":1,"pagetype-sitefronts":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({"load-dynamic":"load-dynamic","non-critical":"non-critical","pagetype-oncology":"pagetype-oncology","pagetype-sitefronts":"pagetype-sitefronts"}[e]||e)+"-1663243861288."+{"chunk-2d0c86a3":"31d6cfe0","load-dynamic":"02300e10","non-critical":"be398cb6","pagetype-oncology":"dc386425","pagetype-sitefronts":"94af5d6f"}[e]+".css",o=d.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===o))return t()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){s=u[c],l=s.getAttribute("data-href");if(l===a||l===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],b.parentNode.removeChild(b),n(i)},b.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,d.nc&&l.setAttribute("nonce",d.nc),l.src=c(e);var u=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,n[1](u)}o[e]=void 0}};var b=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},d.m=e,d.c=a,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)d.d(n,a,function(t){return e[t]}.bind(null,a));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="//img.lb.wbmdstatic.com/webmd_static_vue/091e9c5e8189e707/",d.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var b=l;i.push([0,"webmd-elements","chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("b723")},"56d7":function(e,t,n){"use strict";n.d(t,"a",(function(){return F})),n.d(t,"d",(function(){return $["a"]})),n.d(t,"c",(function(){return H["a"]})),n.d(t,"b",(function(){return T}));var a=n("a026"),r=(n("31bd"),n("caf9")),o=n("de67"),i=n.n(o),c=n("678a"),d=n.n(c),s=n("daa3"),l=n("5bad"),u=n.n(l),b=n("17fd"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{"ia-art":e.isInfinite},attrs:{id:"app"}},[n("div",{staticClass:"page-skwebmdton"},[n("RouteDef"),n("PageData"),n("NoSsr",[n("Omniture",{attrs:{"not-pageview":!0}})],1)],1),n("header",{staticClass:"global-header",attrs:{role:"banner",tabindex:"-1","data-js":"global-header"}},[n("WebmdRow",{staticClass:"pane",attrs:{span:24,id:"ContentPane1",tabindex:"-1"}},[n("WebmdGlobalHeader",{attrs:{"chronic-id":"091e9c5e813b6dde"}})],1)],1),n("WebmdRow",{staticClass:"container global-container-1",attrs:{tabindex:"-1","data-js":"global-container-1"}},[n("WebmdRow",{staticClass:"pane",attrs:{span:24,id:"ContentPane10",tabindex:"-1"}},[n("WebmdVueAd",{attrs:{"chronic-id":"091e9c5e8137aeea"}})],1),n("WebmdRow",{staticClass:"pane",attrs:{span:24,id:"ContentPane18",tabindex:"-1"}},[e._e(),n("InteractionCheckerHeader",{attrs:{"chronic-id":"091e9c5e818ebf7c"}})],1)],1),n("main",{staticClass:"resp-2-col-rr",attrs:{id:"global-main",role:"main",tabindex:"-1","data-js":"global-main"}},[n("WebmdRow",{attrs:{span:24}},[n("WebmdCol",{staticClass:"main-container main-container-2",attrs:{xs:24,sm:24,md:17,lg:13,xl:13,id:"main-container",tabindex:"-1","data-js":"main-container-2"}},[n("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane29",tabindex:"-1"}},[n("InteractionCheckerContent",{attrs:{"chronic-id":"091e9c5e818a149d"}})],1)],1),n("div",{staticClass:"main-container main-container-3",attrs:{tabindex:"-1","data-js":"main-container-3"}},[n("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane37",tabindex:"-1"}},[n("WebmdVueAd",{attrs:{"chronic-id":"091e9c5e8137aeec"}})],1),n("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane39",tabindex:"-1"}},[n("ChannelTodayOnWebmd",{attrs:{"chronic-id":"091e9c5e8189e036"}})],1),n("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane41",tabindex:"-1"}},[n("WebmdVueAd",{attrs:{"chronic-id":"091e9c5e8189e037"}})],1),n("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane43",tabindex:"-1"}},[n("ChannelRecommendedForYou",{attrs:{"chronic-id":"091e9c5e8189dff8"}})],1)],1)],1)],1),n("WebmdRow",{staticClass:"container global-container-2",attrs:{span:24,tabindex:"-1","data-js":"global-container-2"}},[n("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane47",tabindex:"-1"}},[n("WebmdVueAd",{attrs:{"chronic-id":"091e9c5e81641fd1"}})],1),n("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane50",tabindex:"-1"}},[n("HealthSolutions",{attrs:{"chronic-id":"091e9c5e813ae61b"}}),n("WebmdGlobalMoreFromWebmd",{attrs:{"chronic-id":"091e9c5e813ae61c"}})],1)],1),n("footer",{attrs:{role:"contentinfo",tabindex:"-1","data-js":"global-footer"}},[n("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane55",tabindex:"-1"}},[n("WebmdGlobalFooter",{attrs:{"chronic-id":"091e9c5e8137e40d"}})],1)],1),n("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane99",tabindex:"-1"}},[n("GlobalPlaceholderBottom",{attrs:{"chronic-id":"091e9c5e8137aeed"}}),n("WebmdVueAd",{attrs:{"chronic-id":"091e9c5e813aa1a8"}})],1)],1)},p=[],m=(n("64c4"),n("ef35"),n("a465")),h=n.n(m),g=(n("e70c"),n("be30")),y=n.n(g),C=(n("59bb"),n("780a")),v=n.n(C),w=n("783c"),W=(n("76fc"),n("d6be")),x=n("f92d"),P=n.n(x),R=n("b1c5"),j=n("bc7d"),k=n("27a2"),O=n("2eef"),S=n("168e"),_=n("9971"),A=n("93d6"),E={name:"app",data:function(){return{isMobile:!1}},components:{NoSsr:P.a,PageData:W["a"],RouteDef:R["a"],WebmdCol:v.a,WebmdRow:y.a,WebmdContainer:h.a,WebmdGlobalHeader:j["a"],WebmdVueAd:k["a"],WebmdGlobalBreadcrumb:O["a"],InteractionCheckerHeader:S["a"],InteractionCheckerContent:_["a"],ChannelTodayOnWebmd:function(){return n.e("non-critical").then(n.bind(null,"8591"))},ChannelRecommendedForYou:function(){return n.e("non-critical").then(n.bind(null,"f252"))},HealthSolutions:function(){return n.e("non-critical").then(n.bind(null,"1a36"))},WebmdGlobalMoreFromWebmd:function(){return n.e("non-critical").then(n.bind(null,"1f17"))},WebmdGlobalFooter:function(){return n.e("non-critical").then(n.bind(null,"a989"))},GlobalPlaceholderBottom:A["a"]},mounted:function(){window&&(this.isMobile=window.matchMedia("(max-width: 767px)").matches),n.e("chunk-2d0c86a3").then(n.bind(null,"557d")).then((function(e){})),Promise.all(this.$vue.adsPromiseQueue).then((function(){w["a"].display()}));var e=this,t=this.$el.querySelectorAll("[data-metrics-module]");t.forEach((function(t){e.$bindMetrics(t,{})}))},computed:{isInfinite:function(){return this.$store.getters["flow/isInfinite"]}},errorCaptured:function(e,t,n){var a=[/WebmdGlobalHeader/],r=t.$vnode.tag,o=t.$attrs,i=t.$route.fullPath,c=a.some((function(e){return e.test(r)}));return console.log(JSON.stringify({category:"PAGE_SSR_ERROR",error:e.toString()||"Unable to render",tag:r,info:n,attributes:o,stackTrace:e.stack,route:i})),c}},G=E,I=(n("a919"),n("2877")),M=Object(I["a"])(G,f,p,!1,null,null,null),T=M.exports,$=n("b200"),H=n("b717"),N=n("cd89");n("a67c");a["default"].prototype.pluginsInstalled||(a["default"].mixin(s["a"]),a["default"].use(u.a),a["default"].use(N["a"]),a["default"].use(b["a"]),a["default"].use(r["a"],{preLoad:1.3,attempt:1}),i.a.use(d.a),a["default"].prototype.pluginsInstalled=!0);var F="091e9c5e8189e707";a["default"].prototype.$capId="091e9c5e8189e707"},a919:function(e,t,n){"use strict";n("c5ab")},c5ab:function(e,t,n){}});
//# sourceMappingURL=app.86645dae.js.map