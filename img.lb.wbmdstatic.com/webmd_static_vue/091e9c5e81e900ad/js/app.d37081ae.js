(function(e){function t(t){for(var n,o,c=t[0],d=t[1],s=t[2],l=0,u=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);b&&b(t);while(u.length)u.shift()();return i.push.apply(i,s||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(i.splice(t--,1),e=d(d.s=a[0]))}return e}var n={},o={app:0},r={app:0},i=[];function c(e){return d.p+"js/"+({"load-dynamic":"load-dynamic","non-critical":"non-critical","pagetype-oncology":"pagetype-oncology","pagetype-sitefronts":"pagetype-sitefronts"}[e]||e)+"."+{"chunk-2d0c86a3":"7e3d0081","load-dynamic":"cc61b210","non-critical":"ff79f8ca","pagetype-oncology":"140866c5","pagetype-sitefronts":"ade563a4"}[e]+".js"}function d(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,d),a.l=!0,a.exports}d.e=function(e){var t=[],a={"load-dynamic":1,"non-critical":1,"pagetype-oncology":1,"pagetype-sitefronts":1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=new Promise((function(t,a){for(var n="css/"+({"load-dynamic":"load-dynamic","non-critical":"non-critical","pagetype-oncology":"pagetype-oncology","pagetype-sitefronts":"pagetype-sitefronts"}[e]||e)+"-1663006904339."+{"chunk-2d0c86a3":"31d6cfe0","load-dynamic":"315f7d84","non-critical":"5de88bc7","pagetype-oncology":"a9c6ccc6","pagetype-sitefronts":"0b9dfac2"}[e]+".css",r=d.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===r))return t()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){s=u[c],l=s.getAttribute("data-href");if(l===n||l===r)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var n=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],b.parentNode.removeChild(b),a(i)},b.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){o[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,d.nc&&l.setAttribute("nonce",d.nc),l.src=c(e);var u=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(b);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,a[1](u)}r[e]=void 0}};var b=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},d.m=e,d.c=n,d.d=function(e,t,a){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(d.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)d.d(a,n,function(t){return e[t]}.bind(null,n));return a},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="//img.lb.wbmdstatic.com/webmd_static_vue/091e9c5e81e900ad/",d.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var b=l;i.push([0,"webmd-elements","chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("b723")},"56d7":function(e,t,a){"use strict";a.d(t,"a",(function(){return B})),a.d(t,"d",(function(){return $["a"]})),a.d(t,"c",(function(){return D["a"]})),a.d(t,"b",(function(){return V}));var n=a("a026"),o=(a("31bd"),a("caf9")),r=a("de67"),i=a.n(r),c=a("678a"),d=a.n(c),s=a("daa3"),l=a("5bad"),u=a.n(l),b=a("17fd"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:{"ia-art":e.isInfinite},attrs:{id:"app"}},[a("div",{staticClass:"page-skwebmdton"},[a("RouteDef"),a("PageData"),a("NoSsr",[a("Omniture",{attrs:{"not-pageview":!0}})],1)],1),a("header",{staticClass:"global-header",attrs:{role:"banner",tabindex:"-1","data-js":"global-header"}},[a("WebmdRow",{staticClass:"pane",attrs:{span:24,id:"ContentPane0",tabindex:"-1"}},[a("MedRefTwoClmnVariables",{attrs:{"chronic-id":"091e9c5e8237a62a"}})],1),a("WebmdRow",{staticClass:"pane",attrs:{span:24,id:"ContentPane1",tabindex:"-1"}},[a("WebmdGlobalHeader",{attrs:{"chronic-id":"091e9c5e813b6dde"}})],1)],1),a("WebmdRow",{staticClass:"container global-container-1",attrs:{tabindex:"-1","data-js":"global-container-1"}},[a("WebmdRow",{staticClass:"pane",attrs:{span:24,id:"ContentPane10",tabindex:"-1"}},[a("WebmdVueAd",{attrs:{"chronic-id":"091e9c5e8137aeea"}})],1)],1),a("main",{staticClass:"resp-2-col-rr",attrs:{id:"global-main",role:"main",tabindex:"-1","data-js":"global-main"}},[a("WebmdRow",{attrs:{span:24}},[a("WebmdCol",{staticClass:"main-container main-container-2",attrs:{xs:24,sm:24,md:17,lg:13,xl:13,id:"main-container",tabindex:"-1","data-js":"main-container-2"}},[a("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane28",tabindex:"-1"}},[a("LeftNavigationToggle",{attrs:{"chronic-id":"091e9c5e8237a3e7"}}),a("ChannelNavigation",{attrs:{"chronic-id":"091e9c5e81e900ac"}})],1),a("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane29",tabindex:"-1"}},[a("WebmdGlobalBreadcrumb",{attrs:{"chronic-id":"091e9c5e81394036"}}),a("LeftNavigationToggle",{attrs:{"chronic-id":"091e9c5e81414042"}})],1),a("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane30",tabindex:"-1"}},[a("DailyVideo",{attrs:{"chronic-id":"091e9c5e81e900ae"}})],1),a("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane31",tabindex:"-1"}},[a("HtmlModule",{attrs:{"chronic-id":"091e9c5e81f46a0f"}})],1)],1),a("div",{staticClass:"main-container main-container-3",attrs:{tabindex:"-1","data-js":"main-container-3"}},[a("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane37",tabindex:"-1"}},[a("WebmdInteractiveUnifiedRightRail",{attrs:{"chronic-id":"091e9c5e81e79fd6"}})],1),a("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane38",tabindex:"-1"}},[a("WebmdInteractiveUnifiedRightRail",{attrs:{"chronic-id":"091e9c5e81e7a169"}})],1),a("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane40",tabindex:"-1"}},[a("WebmdVueAd",{attrs:{"chronic-id":"091e9c5e8137aeec"}})],1)],1)],1)],1),a("WebmdRow",{staticClass:"container global-container-2",attrs:{span:24,tabindex:"-1","data-js":"global-container-2"}},[a("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane47",tabindex:"-1"}},[a("WebmdVueAd",{attrs:{"chronic-id":"091e9c5e81641fd1"}})],1),a("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane50",tabindex:"-1"}},[a("HealthSolutions",{attrs:{"chronic-id":"091e9c5e813ae61b"}}),a("WebmdGlobalMoreFromWebmd",{attrs:{"chronic-id":"091e9c5e813ae61c"}})],1)],1),a("footer",{attrs:{role:"contentinfo",tabindex:"-1","data-js":"global-footer"}},[a("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane55",tabindex:"-1"}},[a("WebmdGlobalFooter",{attrs:{"chronic-id":"091e9c5e8137e40d"}})],1)],1),a("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane99",tabindex:"-1"}},[a("GlobalPlaceholderBottom",{attrs:{"chronic-id":"091e9c5e8137aeed"}}),a("WebmdVueAd",{attrs:{"chronic-id":"091e9c5e813aa1a8"}})],1)],1)},p=[],m=(a("64c4"),a("ef35"),a("a465")),g=a.n(m),h=(a("e70c"),a("be30")),y=a.n(h),v=(a("59bb"),a("780a")),C=a.n(v),W=a("783c"),w=(a("76fc"),a("d6be")),x=a("f92d"),P=a.n(x),R=a("bae8"),j=a("c466"),S=a("bc7d"),O=a("27a2"),k=a("4ea3"),_=a("2eef"),A=a("8d3b"),E=a("65f9"),N=a("ae0c"),T=a("93d6"),G={name:"app",components:{NoSsr:P.a,PageData:w["a"],RouteDef:R["a"],WebmdCol:C.a,WebmdRow:y.a,WebmdContainer:g.a,MedRefTwoClmnVariables:j["a"],WebmdGlobalHeader:S["a"],WebmdVueAd:O["a"],LeftNavigationToggle:k["a"],ChannelNavigation:function(){return a.e("non-critical").then(a.bind(null,"10a0"))},WebmdGlobalBreadcrumb:_["a"],DailyVideo:A["a"],HtmlModule:E["a"],WebmdInteractiveUnifiedRightRail:N["a"],HealthSolutions:function(){return a.e("non-critical").then(a.bind(null,"1a36"))},WebmdGlobalMoreFromWebmd:function(){return a.e("non-critical").then(a.bind(null,"1f17"))},WebmdGlobalFooter:function(){return a.e("non-critical").then(a.bind(null,"a989"))},GlobalPlaceholderBottom:T["a"]},mounted:function(){a.e("chunk-2d0c86a3").then(a.bind(null,"557d")).then((function(e){})),Promise.all(this.$vue.adsPromiseQueue).then((function(){W["a"].display()}));var e=this,t=this.$el.querySelectorAll("[data-metrics-module]");t.forEach((function(t){e.$bindMetrics(t,{})}))},computed:{isInfinite:function(){return this.$store.getters["flow/isInfinite"]}},errorCaptured:function(e,t,a){var n=[/WebmdGlobalHeader/],o=t.$vnode.tag,r=t.$attrs,i=t.$route.fullPath,c=n.some((function(e){return e.test(o)}));return console.log(JSON.stringify({category:"PAGE_SSR_ERROR",error:e.toString()||"Unable to render",tag:o,info:a,attributes:r,stackTrace:e.stack,route:i})),c}},M=G,I=(a("ba55"),a("2877")),L=Object(I["a"])(M,f,p,!1,null,null,null),V=L.exports,$=a("e71f"),D=a("d382"),H=a("cd89");a("a67c");n["default"].prototype.pluginsInstalled||(n["default"].mixin(s["a"]),n["default"].use(u.a),n["default"].use(H["a"]),n["default"].use(b["a"]),n["default"].use(o["a"],{preLoad:1.3,attempt:1}),i.a.use(d.a),n["default"].prototype.pluginsInstalled=!0);var B="091e9c5e81e900ad";n["default"].prototype.$capId="091e9c5e81e900ad"},ba55:function(e,t,a){"use strict";a("c184")},c184:function(e,t,a){}});
//# sourceMappingURL=app.d37081ae.js.map