(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["non-critical"],{"0c41":function(e,t,i){},"0c7d":function(e,t,i){"use strict";i("1bd7")},"0f0a":function(e,t,i){"use strict";i("c39b")},"1bd7":function(e,t,i){},2164:function(e,t,i){var n=i("cae7");function r(e,t,i){var r=-1,o=e.criteria,l=t.criteria,a=o.length,s=i.length;while(++r<a){var d=n(o[r],l[r]);if(d){if(r>=s)return d;var c=i[r];return d*("desc"==c?-1:1)}}return e.index-t.index}e.exports=r},4063:function(e,t,i){"use strict";i("44e9")},"44e9":function(e,t,i){},"6a5c":function(e,t,i){var n=i("7948"),r=i("badf"),o=i("97d3"),l=i("d4b2"),a=i("b047"),s=i("2164"),d=i("cd9d");function c(e,t,i){var c=-1;t=n(t.length?t:[d],a(r));var u=o(e,(function(e,i,r){var o=n(t,(function(t){return t(e)}));return{criteria:o,index:++c,value:e}}));return l(u,(function(e,t){return s(e,t,i)}))}e.exports=c},8591:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("aside",{staticClass:"module module-unified-right-rail module-ed-urr",attrs:{"data-e2e":"ed-urr",id:"ed-urr","data-metrics-module":"ed-urr",role:e.isSiteFronts?"complementary":""}},[i("header",[i("h3",[e._v(e._s(e.title))])]),i("WebmdRow",{staticClass:"unified_right_inner_v2_rdr"},[e.items.length>0?i("div",{staticClass:"tow_list"},[e._l(e.items,(function(t,n){return[i("div",{key:e.createKey(n),class:t.class,attrs:{id:e.entryFmtId(n),"data-pos":t.pos,"data-sizes":"[[1,10], 'fluid']","data-scp":"{'mod': 'ed-urr'}"}},[i("a",{directives:[{name:"metric",rawName:"v-metric:track",value:{module:"ed-urr",link:t.metricsLink},expression:"{\n\t\t\t\t\t\t\tmodule: 'ed-urr',\n\t\t\t\t\t\t\tlink: item.metricsLink\n\t\t\t\t\t\t}",arg:"track"}],attrs:{href:t.link,target:"_top"}},[i("div",{staticClass:"imgPlaceholder"}),i("h4",{staticClass:"tow-no-image-h4"},[e._v(" "+e._s(t.title)+" ")]),i("p",[e._v(" "+e._s(t.paragraph)+" ")])])])]})),i("SetRendered",{attrs:{"chronic-id":e.chronicId,data:{items:e.items,moduleData:e.getModuleByChronicId}}})],2):e._e(),i("div",{key:e.createKey(e.index),staticClass:"ad-no-css ad-921 entry_fmt entry_fmt_st",attrs:{id:"ads2-pos-921-ad-right"}},[[i("Webmdad",{attrs:{pos:"921","data-scp":"{'strnativekey':'xP8Dby8p66dX1vZpKKVKX4fu'}",keys:"{'strnativekey':'xP8Dby8p66dX1vZpKKVKX4fu'}"}})]],2)])],1)},r=[],o=i("448a"),l=i.n(o),a=i("27a2"),s=i("ebb8"),d=i("3852"),c=i.n(d),u=i("6747"),m=i.n(u),h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div")},f=[],_=i("2593"),p=i.n(_),v={name:"SetRendered",props:{chronicId:{type:String,required:!0},data:{type:Object,required:!0}},created:function(){var e=this.data.moduleData;e=p()(e,["module_data.module_title"]),e.items=this.data.items.map((function(e){return p()(e,["img","imgalt"])})),this.$store.commit("cms/UPDATE_STATE",{key:this.chronicId,value:e})}},g=v,y=i("2877"),k=Object(y["a"])(g,h,f,!1,null,"5209209f",null),I=k.exports,w={components:{Webmdad:a["a"],SetRendered:I},props:{chronicId:{type:String,required:!0},isDev:{type:Boolean,default:!1}},data:function(){return{items:[],moduleByChronicId:[],title:"Today on WebMD",renderAd:!1,isMobile:!0,imagesData:[]}},computed:{getItems:function(){var e=this,t=this.getModuleByChronicId,i=9001,n=c()(t,"module_data.links.link")&&m()(t.module_data.links.link)?t.module_data.links.link.map((function(t){return{title:t.action_text?t.action_text:"",paragraph:t.link_text?t.link_text:"",link:c()(t,"link_url.link_friendlyUrl")?t.link_url.link_friendlyUrl:"",img:"".concat(e.getImagePath(t)),imgalt:c()(t,"link_source_icon.alt")?t.link_source_icon.alt:"",class:"entry_fmt",pos:i++,metricsLink:"".concat(i-9001).concat(e.getMetricsLink(t.link_text||""))}})):[];return n},isInfinite:function(){return this.$store.getters["flow/isInfinite"]},getTitle:function(){var e=this.getModuleByChronicId,t=null;return c()(e,"module_data.module_title.title")?t=e.module_data.module_title.title:c()(e,"module_data.module_title")&&(t=e.module_data.module_title),t||(t=this.title),t},getModuleByChronicId:function(){var e=this.$store.getters["cms/modules"](this.chronicId);return e},isSiteFronts:function(){var e=this.$store.getters["cms/siteFronts"];return!!c()(e,"mode")&&"sitefronts"===e.mode.toLowerCase()}},methods:{entryFmtId:function(e){return"x".concat(e+52)},getImagePath:function(e){var t,i,n,r,o="webmd/consumer_assets/site_images/article_thumbnails/other/symptom_checker_man_woman_other/493x335_symptom_checker_man_woman_other.jpg",l="?resize=110px:*&amp;output-quality=50",a=null===(t=this.$store)||void 0===t||null===(i=t.state)||void 0===i||null===(n=i.pagedata)||void 0===n||null===(r=n.omniture)||void 0===r?void 0:r.image_server_url,s="";return s=c()(e,"link_source_icon.path")?e.link_source_icon.path:o,a+s+l},getMetricsLink:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";switch(e.toLowerCase()){case"video":return"vid";case"feature":return"ftr";case"slideshow":case"slide show":return"ss";case"quiz":return"rmq";default:return"othr"}},entryMetricsLink:function(e){return e>0?e+9e3:e+9001},createKey:function(e){return"key-id-".concat(e)},loadTowImages:function(){var e=this.$store&&c()(this.$store.state.cms.modules,this.chronicId)?this.$store.state.cms.modules[this.chronicId]:{},t=e&&e.items?e.items:[],i=[];if(t&&t.length>0){t.forEach((function(e){var t=document.createElement("img");t.src=e.img,t.alt=e.imgalt,i.push(t)}));var n=document.querySelector(".tow_list");if(n){var r=l()(n.children);r&&r.forEach((function(e,t){var n=e.firstElementChild;n&&n.prepend(i[t])}))}}}},created:function(){this.items=this.getItems,this.title=this.getTitle,this.isSiteFronts&&this.isDev&&Promise.all([i.e("non-critical~pagetype-sitefronts"),i.e("pagetype-sitefronts")]).then(i.t.bind(null,"e65d",7))},mounted:function(){var e=this,t=!1,i=document.querySelectorAll(".unified_right_inner_v2_rdr .entry_fmt:not(.entry_fmt_st)");return this.isMobile=document.body.clientWidth<467,(!this.isMobile||!this.isInfinite)&&(document.body.clientWidth>467&&this.loadTowImages(),document.querySelectorAll(".imgPlaceholder").forEach((function(e){return e.remove()})),this.$nextTick((function(){if(window&&window.viewAllContent&&document.body.clientWidth>767){var n=e.isSiteFronts?4:3;e.items=e.items&&e.items.length>n?e.items.slice(0,n):e.items;var r=l()(document.querySelectorAll(".unified_right_inner_v2_rdr .entry_fmt:not(.entry_fmt_st)"));if(r&&r.length>n-1)for(var o=n-1;o<r.length;o++)r[o].remove();i=document.querySelectorAll(".unified_right_inner_v2_rdr .entry_fmt:not(.entry_fmt_st)")}if(window.location.href.indexOf("?performance=1")>-1)if(window.outerWidth<769)window.addEventListener("scroll",(function(){var e=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;e>200&&!t&&(t=!0,s["a"].init({container:l()(i),module:"today-on-webmd"}))}));else{var a=document.body;a.addEventListener("mousemove",(function(){t||(t=!0,s["a"].init({container:l()(i),module:"today-on-webmd"}),a.removeEventListener("mousemove"))})),setTimeout((function(){t||(t=!0,s["a"].init({container:l()(i),module:"today-on-webmd"}),a.removeEventListener("mousemove"))}),5e3)}else s["a"].init({container:l()(i),module:"today-on-webmd"})})),!0)}},b=w,x=(i("9438"),Object(y["a"])(b,n,r,!1,null,null,null));t["default"]=x.exports},"8f94":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.moduleTitle&&e.items.length>0?i("aside",{directives:[{name:"metric",rawName:"v-metric",value:{module:e.metrics.module},expression:"{ module: metrics.module }"}],staticClass:"module module-top-picks module-lln-toppks dfp-native",class:{"module-instream-toppks":e.isInfinite,"sf-ss-toppks":e.isSlideshowSiteFront},attrs:{id:"lln-toppks","data-chronicle":e.chronicId,"data-e2e":"lln-toppks","data-module-type":"link-list","data-metrics-module":e.metrics.module}},[i("header",[i("h3",[e._v(e._s(e.moduleTitle))])]),i("ul",{class:{twocolumns:e.twoColumns}},e._l(e.items,(function(t,n){return i("li",{key:t.title,attrs:{id:"dfp_slot_tp_"+(n+1),"data-sizes":"[[1,10],'fluid']","data-pos":t.pos,"data-scp":"{'mod': 'lln-toppks'}"}},[i("a",{directives:[{name:"metric",rawName:"v-metric",value:{link:n+1},expression:"{ link: index+1 }"}],attrs:{href:t.link,"data-metrics-link":n+1}},[e._v(" "+e._s(t.text)+" ")])])})),0)]):e._e()},r=[],o=i("448a"),l=i.n(o),a=i("3852"),s=i.n(a),d=i("ebb8"),c={name:"TopPicks",props:{chronicId:{type:String,required:!0}},data:function(){return{metrics:{module:"lln-toppks"},items:[],moduleData:{},moduleTitle:{},twoColumns:!1,isSlideshowSiteFront:!1}},computed:{getItems:function(){var e=9021,t=this.getModuleByChronicId,i=s()(t,"module_data.links.link")?t.module_data.links.link.map((function(t){return{text:t.link_text||"",link:s()(t,"link_friendlyUrl")?t.link_friendlyUrl:"",pos:e++}})):[],n=i.filter((function(e){return e&&e.link}));return n},getModuleData:function(){var e=this.getModuleByChronicId;return s()(e,"module_data")?e.module_data:{}},getModuleByChronicId:function(){var e=this.$store.getters["cms/modules"](this.chronicId);return e},getModuleTitle:function(){var e=this.moduleData;return s()(e,"module_title")?e.module_title:""},setColumnLayout:function(){var e=this.twoColumns,t=this.$capId,i=["091e9c5e814695f1","091e9c5e8222f146","091e9c5e814695f2"],n=i.includes(t);return n&&(this.isSiteFronts?(this.isSlideshowSiteFront=!0,e=!1):e=!0),e},isInfinite:function(){return this.$store.getters["flow/isInfinite"]},isSiteFronts:function(){var e=this.$store.getters["cms/siteFronts"];return!!s()(e,"mode")&&"sitefronts"===e.mode.toLowerCase()}},created:function(){this.items=this.getItems,this.moduleData=this.getModuleData,this.moduleTitle=this.getModuleTitle,this.twoColumns=this.setColumnLayout,this.isSiteFronts&&Promise.all([i.e("webmd-elements"),i.e("load-dynamic~load-dynamic-video"),i.e("load-dynamic~non-critical"),i.e("load-dynamic")]).then(i.t.bind(null,"eaf2",7))},mounted:function(){this.isInfinite&&document.body.clientWidth<476&&(this.moduleTitle="Recommended",this.items=this.items.splice(0,3)),this.$nextTick((function(){var e=document.querySelectorAll("aside.module-top-picks li[id^=dfp_slot_tp_] a");e.forEach((function(e){e.style.display="none"})),d["a"].init({container:l()(document.querySelectorAll("aside.module-top-picks li[id^=dfp_slot_tp_]")),module:"top-picks"})}))}},u=c,m=(i("4063"),i("2877")),h=Object(m["a"])(u,n,r,!1,null,null,null);t["default"]=h.exports},"93c6":function(e,t,i){var n=i("6a5c"),r=i("6747");function o(e,t,i,o){return null==e?[]:(r(t)||(t=null==t?[]:[t]),i=o?void 0:i,r(i)||(i=null==i?[]:[i]),n(e,t,i))}e.exports=o},9438:function(e,t,i){"use strict";i("ca89")},a164:function(e,t,i){"use strict";i("b0ad")},a989:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i(e.importComponent,{tag:"component",attrs:{"chronic-id":e.chronicId}})},r=[],o=i("3852"),l=i.n(o),a={name:"GlobalFooter",components:{},props:{chronicId:{type:String,required:!0}},data:function(){return{pgData:{},sfData:{},artType:["Feature","Medical Reference","News"]}},computed:{getSiteFrontsData:function(){return this.$store.getters["cms/siteFronts"]},getPageData:function(){return this.$store.state.pagedata},importComponent:function(){return this.isOncology||this.isHomePage?function(){return Promise.all([i.e("webmd-elements"),i.e("load-dynamic~load-dynamic-video"),i.e("load-dynamic~non-critical"),i.e("load-dynamic")]).then(i.bind(null,"7532"))}:function(){return Promise.all([i.e("webmd-elements"),i.e("load-dynamic~load-dynamic-video"),i.e("load-dynamic~non-critical"),i.e("load-dynamic")]).then(i.bind(null,"68bd"))}},isArticle:function(){var e=!1;return""!==this.busRef&&-1!==this.artType.indexOf(this.busRef)&&(e=!0),e},isOncology:function(){return this.$store.state.pagedata.isOncology},busRef:function(){var e="";return l()(this.pgData,"omniture.s_business_reference")&&(e=this.pgData.omniture.s_business_reference),e},isHomePage:function(){var e=!1;return l()(this.pgData,"omniture.s_asset_id")&&(e="091e9c5e823d0cb2"===this.pgData.omniture.s_asset_id),e}},created:function(){this.sfData=this.getSiteFrontsData,this.pgData=this.getPageData}},s=a,d=(i("0c7d"),i("2877")),c=Object(d["a"])(s,n,r,!1,null,null,null);t["default"]=c.exports},aea0:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.moduleData&&e.moduleData.moduleTitle&&e.moduleData.moduleTitle.text&&e.moduleData.items.length>0?i("aside",{directives:[{name:"metric",rawName:"v-metric",value:{module:e.metrics.module},expression:"{ module: metrics.module }"}],class:"module module-tools-and-resources module-"+e.metrics.module,attrs:{id:e.metrics.module,"data-chronicle":e.chronicId,"data-e2e":e.metrics.module,"data-module-type":"link-list"}},[i("header",[i("h3",[e._v(e._s(e.moduleData.moduleTitle.text))])]),i("ul",e._l(e.moduleData.items,(function(t,n){return i("li",{key:t.title},[i("a",{directives:[{name:"metric",rawName:"v-metric",value:{link:n+1},expression:"{ link: index+1 }"}],attrs:{href:t.link,"data-metrics-link":n+1}},[e._v(" "+e._s(t.text)+" ")])])})),0)]):e._e()},r=[],o=i("3852"),l=i.n(o),a=i("6747"),s=i.n(a),d={name:"ToolsAndResources",props:{chronicId:{type:String,required:!0}},data:function(){return{metrics:{module:"lln-toolsres"},moduleByChronicId:{},moduleData:{}}},computed:{getItems:function(){if(!this.moduleByChronicId)return[];var e=this.moduleByChronicId,t=e&&l()(e,"module_data.links.link")&&s()(e.module_data.links.link)?e.module_data.links.link.map((function(e){return{text:"string"===typeof e.link_text?e.link_text.replace(/(\[.+_icon\])/gi,""):"",link:l()(e,"link_friendlyUrl")?e.link_friendlyUrl:""}})):[],i=void 0!==e&&null!==e&&l()(e,"module_data.module_title.title")?e.module_data.module_title.title:l()(e,"module_data.module_title")?e.module_data.module_title:[],n=t.filter((function(e){return e&&e.link}));return{moduleTitle:{text:i},items:n}},getModuleByChronicId:function(){return this.$store.getters["cms/modules"](this.chronicId)}},created:function(){this.moduleByChronicId=this.getModuleByChronicId,this.moduleData=this.getItems,this.$store.commit("cms/SET_RENDERED",this.chronicId)}},c=d,u=(i("ee92"),i("2877")),m=Object(u["a"])(c,n,r,!1,null,null,null);t["default"]=m.exports},b0ad:function(e,t,i){},c39b:function(e,t,i){},ca89:function(e,t,i){},cae7:function(e,t,i){var n=i("ffd6");function r(e,t){if(e!==t){var i=void 0!==e,r=null===e,o=e===e,l=n(e),a=void 0!==t,s=null===t,d=t===t,c=n(t);if(!s&&!c&&!l&&e>t||l&&a&&d&&!s&&!c||r&&a&&d||!i&&d||!o)return 1;if(!r&&!l&&!c&&e<t||c&&i&&o&&!r&&!l||s&&i&&o||!a&&o||!d)return-1}return 0}e.exports=r},cec8:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.moduleItems&&e.moduleItems.items&&e.moduleItems.items.length>0?i("aside",{directives:[{name:"metric",rawName:"v-metric",value:{module:e.metrics.module},expression:"{ module: metrics.module }"}],staticClass:"module module-dynamic-related-articles module-lln-tdrelcon",class:{"sf-lln-tdrelcon":e.isSiteFronts},attrs:{id:"lln-tdrelcon","data-chronicle":e.chronicId,"data-e2e":"lln-tdrelcon","data-metrics-module":e.metrics.module}},[e._m(0),i("ul",[e._l(e.moduleItems.items,(function(t,n){return i("li",{key:t.title},[i("a",{directives:[{name:"metric",rawName:"v-metric",value:{link:n+1},expression:"{ link: index+1 }"}],attrs:{href:t.link,"data-metrics-link":n+1}},[e._v(" "+e._s(t.text)+" ")])])})),e.moduleItems.lastItem&&e.moduleItems.lastItem.link&&e.moduleItems.lastItem.text?i("li",{staticClass:"view-all"},[i("a",{directives:[{name:"metric",rawName:"v-metric",value:{link:"all"},expression:"{ link: 'all' }"}],attrs:{href:e.moduleItems.lastItem.link,"data-metrics-link":e.all}},[i("i",{staticClass:"webmd-icon-right-arrow"}),e._v(" "+e._s(e.moduleItems.lastItem.text)+" ")])]):e._e()],2)]):e._e()},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("header",[i("h3",[e._v("further reading")])])}],o=i("3852"),l=i.n(o),a=i("6747"),s=i.n(a),d=i("1a8c"),c=i.n(d),u=i("93c6"),m=i.n(u),h=i("4d8c"),f=i.n(h),_=i("dd61"),p=i.n(_),v={name:"FurtherReading",props:{chronicId:{type:String,required:!0}},data:function(){return{metrics:{module:"lln-tdrelcon"},moduleItems:{}}},computed:{getItems:function(){var e=this;if(!e.getModuleByChronicId)return[];var t=e.getModuleByChronicId,i={},n=7,r=[];if(l()(t,"module_data.topic_dirs.topic_dir")&&s()(t.module_data.topic_dirs.topic_dir)){i=m()(t.module_data.topic_dirs.topic_dir,["affinity"],["asc"]).shift(),e.getCategoryWiseData(i,"1008",r),e.getCategoryWiseData(i,"1004",r);var o=[];s()(i.categories.category)?o=i.categories.category.filter((function(e){return-1==["1008","1004","1005","1012"].indexOf(e.id)})):c()(i.categories.category)&&o.push(i.categories.category);var a=p()(o,"assets"),d=f()(a);d=d.filter((function(e){return e.link_title&&e.friendly_url}));for(var u=m()(d,["affinity"],["asc"],["last_modified_date"],["desc"]),h=n-r.length,_=u.slice(0,h),v=0;v<_.length;v+=1)r.push(_[v]);var g=[];r&&s()(r)&&(g=r.map((function(t){return{text:t.link_title||"",link:e.getUrl(t.friendly_url)||""}})));var y=i?i.friendly_url:"",k=i?i.name:"",I={text:"".concat(k," Topics"),link:e.getUrl(y)};return g=g.filter((function(e){return e&&e.link})),{lastItem:I,items:g}}return{lastItem:"",items:""}},getModuleByChronicId:function(){return this.$store.getters["cms/modules"](this.chronicId)},isSiteFronts:function(){var e=this.$store.getters["cms/siteFronts"];return!!l()(e,"mode")&&"sitefronts"===e.mode.toLowerCase()}},created:function(){this.moduleItems=this.getItems,this.$store.commit("cms/SET_RENDERED",this.chronicId),this.isSiteFronts&&Promise.all([i.e("webmd-elements"),i.e("load-dynamic~load-dynamic-video"),i.e("load-dynamic~non-critical"),i.e("load-dynamic")]).then(i.t.bind(null,"9ba9",7))},methods:{getUrl:function(e){return e&&!e.match(/(https?:\/\/)/g)?"//".concat(e):e},getCategoryWiseData:function(e,t,i){var n;if(s()(e.categories.category)?n=e&&0!==e.length?e.categories.category.find((function(e){return e.id===t})):[]:c()(e.categories.category)&&(n=e&&0!==e.length?e.categories.category.id===t:{}),n&&!1!==n){var r,o=[];if(l()(n,"assets")&&(r=n.assets),r&&(o=r.length>2?m()(r,["affinity"],["asc"],["last_modified_date"],["desc"]).slice(0,2):r),o)for(var a=0;a<o.length;a+=1)i.push(o[a])}}}},g=v,y=(i("0f0a"),i("2877")),k=Object(y["a"])(g,n,r,!1,null,null,null);t["default"]=k.exports},d4b2:function(e,t){function i(e,t){var i=e.length;e.sort(t);while(i--)e[i]=e[i].value;return e}e.exports=i},ee92:function(e,t,i){"use strict";i("0c41")},f252:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.moduleData&&e.moduleData.moduleTitle&&e.moduleData.items&&e.moduleData.items.length>0?i("aside",{directives:[{name:"metric",rawName:"v-metric",value:{module:e.metrics.module},expression:"{ module: metrics.module }"}],class:["module module-unified-right-rail module-"+e.metrics.module],attrs:{"data-chronicle":e.chronicId,id:e.metrics.module,"data-e2e":e.metrics.module,"data-module-type":"EditorialModule"}},[i("header",[i("h3",[e._v(e._s(e.moduleData.moduleTitle.text))])]),i("div",{staticClass:"unified_right_inner_rdr"},[e._l(e.moduleData.items,(function(t,n){return[i("div",{key:e.createKey(n),class:t.class},[i("a",{directives:[{name:"metric",rawName:"v-metric:track",value:{module:e.metrics.module,link:e.entryMetricsLink(n)},expression:"{\n\t\t\t\t\t\tmodule: metrics.module,\n\t\t\t\t\t\tlink: entryMetricsLink(index),\n\t\t\t\t\t}",arg:"track"}],attrs:{href:t.link}},[e.isOncology?e._e():i("div",{staticClass:"imgPlaceholder"}),e.isOncology?e._e():i("span",{staticClass:"asset-type"},[e._v(" "+e._s(t.title)+" ")]),i("h4",[e._v(" "+e._s(t.paragraph)+" ")])])])]})),i("SetRendered",{attrs:{"chronic-id":e.chronicId,data:e.moduleData}})],2)]):e._e()},r=[],o=i("448a"),l=i.n(o),a=i("3852"),s=i.n(a),d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div")},c=[],u=i("2593"),m=i.n(u),h={name:"SetRendered",props:{chronicId:{type:String,required:!0},data:{type:Object,required:!0}},created:function(){this.data=this.data.items.map((function(e){return m()(e,["img","imgalt"])})),this.$store.commit("cms/UPDATE_STATE",{key:this.chronicId,value:this.data})}},f=h,_=i("2877"),p=Object(_["a"])(f,d,c,!1,null,"33224ab6",null),v=p.exports,g={components:{SetRendered:v},props:{chronicId:{type:String,required:!0}},data:function(){return{metrics:{module:"ed-rcmmnddforyou"},moduleByChronicId:{},moduleData:{},imagesData:[]}},computed:{getItems:function(){var e,t,i,n;if(!this.moduleByChronicId)return[];var r=this.moduleByChronicId,o=null===(e=this.$store)||void 0===e||null===(t=e.state)||void 0===t||null===(i=t.pagedata)||void 0===i||null===(n=i.omniture)||void 0===n?void 0:n.image_server_url,l=s()(r,"module_data.links.link")?r.module_data.links.link.map((function(e){return{paragraph:s()(e,"action_text")?e.action_text:"",title:s()(e,"link_text")?e.link_text:"",link:s()(e,"link_url.link_friendlyUrl")?e.link_url.link_friendlyUrl:"",img:s()(e,"link_source_icon.path")?"".concat(o).concat(e.link_source_icon.path,"?resize=110px:*&amp;output-quality=50"):"",imgalt:s()(e,"link_source_icon.alt")?e.link_source_icon.alt:"",class:"entry_fmt"}})):[],a=r&&s()(r,"module_data.module_title.title")?r.module_data.module_title.title:s()(r,"module_data.module_title")?r.module_data.module_title:[],d=r&&s()(r,"module_data.module_link")&&s()(r,"module_data.module_link.link_friendlyUrl")?r.module_data.module_link.link_friendlyUrl:"";return{moduleTitle:{text:a,link:d},items:l}},isSiteFronts:function(){var e=this.$store.getters["cms/siteFronts"];return!!s()(e,"mode")&&"sitefronts"===e.mode.toLowerCase()},isOncology:function(){return this.$store.state.pagedata.isOncology},getModuleByChronicId:function(){return this.$store.getters["cms/modules"](this.chronicId)}},methods:{entryMetricsLink:function(e){return e+1},createKey:function(e){return"recommended-for-you-key-id-".concat(e)},loadImages:function(){var e=this.$store&&s()(this.$store.state.cms.modules,this.chronicId)?this.$store.state.cms.modules[this.chronicId]:[],t=[];if(e&&e.length>0){e.forEach((function(e){var i=document.createElement("img");i.src=e.img,i.alt=e.imgalt,t.push(i)}));var i=document.querySelector(".module-".concat(this.metrics.module," > .unified_right_inner_rdr"));if(i){var n=l()(i.children);n&&n.forEach((function(e,i){var n=e.firstElementChild;n&&n.prepend(t[i])}))}}},splitRecForYouModule:function(){var e=document.querySelectorAll('aside[data-e2e="ed-rcmmnddforyou"]');e.forEach((function(e){var t=e.querySelector("script");e.querySelector("div").removeChild(t);var i=e.querySelectorAll(".entry_fmt");if(i&&i.length>3)for(var n=3;n<i.length;n+=1)i[n].remove()}))}},mounted:function(){window.innerWidth>467&&(this.isOncology||this.loadImages(),this.isSiteFronts&&(window&&window.webmdRecForYouReplaced?this.splitRecForYouModule():window.addEventListener("webmd.recforyou.replaced",this.splitRecForYouModule))),document.querySelectorAll(".imgPlaceholder").forEach((function(e){return e.remove()}))},created:function(){this.moduleByChronicId=this.getModuleByChronicId,this.moduleData=this.getItems,this.isSiteFronts&&Promise.all([i.e("webmd-elements"),i.e("load-dynamic~load-dynamic-video"),i.e("load-dynamic~non-critical"),i.e("load-dynamic")]).then(i.t.bind(null,"e582",7)),this.isOncology&&Promise.all([i.e("webmd-elements"),i.e("load-dynamic~load-dynamic-video"),i.e("load-dynamic~non-critical"),i.e("load-dynamic")]).then(i.t.bind(null,"4208",7))}},y=g,k=(i("a164"),Object(_["a"])(y,n,r,!1,null,null,null));t["default"]=k.exports}}]);
//# sourceMappingURL=non-critical.71add376.js.map