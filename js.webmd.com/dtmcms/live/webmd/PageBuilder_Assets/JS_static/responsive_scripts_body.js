/* repo: scripts/HEAD@c95dde9-dirty - Package Version: 3.86.0 - 2022-08-02 06:25 am - User:  */
if(webmd.expandable={init:function(){$("body").on("click","[data-toggle-selector],[data-toggle-alias]",function(){var a=$(this).data("toggle-size")||9999,b=$(this).data("toggle-selector"),c=$(this).data("toggle-relation"),d=$(this).data("toggle-mask")||!1,e=$(this).data("toggle-metrics")||!1,f=$(this).data("toggle-mask-click")||!0,g=$(this).data("toggle-alias")||!1,h=$(this).data("toggle-acc-target")||!1,i=$(this).data("toggle-acc-trigger")||!1,j=this;if(g)return void $(g).trigger("click");if($(window).width()<a){switch(d&&($(j).before('<div class="'+d+'"></div>'),$("body").attr("data-content-masked","true"),f&&$("."+d).click(function(){$(j).trigger("click")})),h&&$(h).removeClass("expanded"),c){case"sibling":$(j).toggleClass("expanded").nextAll(b).first().toggleClass("expanded");break;case"parent":$(j).toggleClass("expanded").parents(b).first().toggleClass("expanded");break;case"child":$(j).toggleClass("expanded").children(b).first().toggleClass("expanded");break;default:$(j).toggleClass("expanded"),$(b).toggleClass("expanded")}i&&($(i).removeClass("expanded"),$(j).addClass("expanded")),$(j).hasClass("expanded")?e&&wmdPageLink(e.split(",")[0]):($("."+d).remove(),$("body").removeAttr("data-content-masked"),e&&wmdPageLink(e.split(",")[1]))}})}},$(function(){webmd.expandable.init()}),webmd.popover={init:function(){var a=this;$("body").on("click","[data-popover-text]",function(b){var c=($(this).data("popover-method")||"overlay",$(this).data("popover-text")||"");"ajax"===c?(b.preventDefault(),$.get($(this).attr("href"),function(b){c=$(b).children().html(),a.handlePopover(a.method,c)})):a.handlePopover(a.method,c)})},handlePopover:function(a,b){webmd.overlay.open({html:b,innerWidth:500})}},$(function(){webmd.popover.init()}),/*! webmd.adViewability.js */
webmd.object.set("webmd.adViewability"),webmd.adViewability={isUnStickyDFPServed:!1,unstickTimer:null,mobileStickyTimeout:window.webmd.mobileStickyTimeout||1e4,disableStickyBanner:window.webmd.disableStickyBanner||!1,init:function(){"use strict";webmd.debug("|||||||||| webmd.adViewability ----->","init");var a=this,b=$("html"),c=$(window),d=$(".module.ad.ad-101, .module.ad.ad-108"),e=$("#leftAd_rdr"),f=window.s_sponsor_brand||"",g=window.s_sponsor_program||"",h=(window.s_package_type||"",window.s_channel_health||null),i={"Skin Problems and Treatments":!0,Lupus:!0,"Sleep Disorders":!0};if(a.addClassNoBanner(b,d),!b.hasClass("ad-test-segment")&&!b.hasClass("cookie-consent")){if(!a.disableStickyBanner)if("mobile"===webmd.responsiveAds._breakPoint||"phablet"===webmd.responsiveAds._breakPoint){var j=["video franchise - life with","webmd tv","perspectives","editorial destination"],k="";window&&window.s_package_type&&(k=window.s_package_type),k.includes(" - nosp")?k=k.split(" - nosp")[0]:k.includes(" - sp")&&(k=k.split(" - sp")[0]),-1!==j.indexOf(k)?(a.makeMobileBannerSticky(),webmd.debug("##### The banner ad should be at top for this page as per requirement ######")):(a.moveMobileBannerAdToBottom(),webmd.debug("##### The banner ad should be at bottom as per requirement ########"))}else a.makeBannerSticky(b,c,d),$(window).on("webmd.pagination.change",function(e,f){f.newPage!==f.oldPage&&(d.removeClass("is-static"),a.makeBannerSticky(b,c,d))});!(c.width()>=1350)||i[h]||f&&g||!e.length||a.makeLeftAdSticky(b,c,e)}},moveMobileBannerAdToBottom:function(){$("#ads2-pos-2025-ad-banner").css({background:"#f7f7f7",bottom:0,height:"80px","min-height":"unset",padding:"15px 0 0 0",position:"fixed",width:"100%","z-index":9999}),$(".global-container-1 .ad>div:first-child::after").css({"padding-left":"7rem",top:"0 !important"}),$("head").append("<style>.global-container-1 .ad>div:first-child:after{padding-left: 7.5rem !important;top: 0 !important;}</style>")},makeLeftAdSticky:function(a,b,c){var d=$("#masthead");c&&(a.addClass("sticky-left-ad"),c.addClass("sticky-leftAd"),b.scroll(function(){var a=c.offset().top;window.pageYOffset>a-d.height()&&c.addClass("is-fixed").removeClass("sticky-leftAd")}))},addClassNoBanner:function(a,b){0===b.length&&a.addClass("no-banner")},makeBannerSticky:function(a,b,c){function d(b,d){b>d&&(b>g&&k>b?(a.addClass("sticky-banner"),f.css("margin-top",c.css("height")),c.addClass("is-fixed")):b>k&&(a.removeClass("sticky-banner"),c.removeClass("is-fixed is-static").addClass("is-absolute")))}function e(b,d){d>b&&(a.removeClass("sticky-banner"),f.removeAttr("style"),c.removeClass("is-fixed is-absolute").addClass("is-static"))}var f=$("main"),g=90,h="",i=0,j=0,k=1100,l="",m="",n=this;a.hasClass("legacy")&&(i=25),c.length>0&&(h=c.offset().top,Modernizr.touch&&(b.on("touchstart",function(a){l=a.originalEvent.touches[0].pageY}),b.on("touchmove",function(a){var b=$(this).scrollTop(),f=c.offset().top,h="",i="";m=a.originalEvent.touches[0].pageY,h=Math.abs(m-l),i=k+f-g,c.hasClass("is-static")||c.hasClass("pushdown")||(l>m&&h>5?d(b,j):m>l&&h>5&&e(b,i),j=b)})),b.scroll(function(){var b=$(this).scrollTop();c.offset().top;n.isUnStickyDFPServed||c.hasClass("is-static")||c.hasClass("pushdown")||(b>j?b>g+i&&k>b?(a.addClass("sticky-banner"),f.css("margin-top",c.css("height")),c.addClass("is-fixed")):b>k&&(a.removeClass("sticky-banner"),c.removeClass("is-fixed is-static").addClass("is-absolute")):((g>b||b>k)&&(a.removeClass("sticky-banner"),f.removeAttr("style"),c.removeClass("is-fixed is-absolute")),b>k&&c.addClass("is-static")),j=b)}))},makeMobileBannerSticky:function(){var a=this,b=document.getElementsByClassName("global-nav-container")[0],c=function(){var c=b?b.offsetHeight:0,d=b?b.offsetTop:0;a.makeResponsiveMobileTopAdSticky($("#ads2-pos-2025-ad-banner"),{top:c+d+5+"px",width:"100%",height:"88px"},a.mobileStickyTimeout)};try{setTimeout(function(){$(window).off("scroll.adScroll")},a.mobileStickyTimeout)}catch(d){webmd.debug(d)}$(window).one("scroll.adScroll",c)},makeResponsiveMobileTopAdSticky:function(a,b,c){var d=$(a),e=b||{},f=d.css("position")||"static",g=(d.css("background")||"transparent",d.css("width"),$('<div class="emptyDivs">')),h=$('<div class="emptyDivs">');this.isUnStickyDFPServed||(g.css({padding:e.padding||d.css("padding"),margin:e.margin||d.css("margin"),height:e.height||d.height()+"px",width:e.width||d.width()+"px",background:"white"}),h.css({padding:e.padding||d.css("padding"),margin:e.margin||d.css("margin"),height:e.height||d.height()+"px",width:e.width||d.width()+"px",background:"white"}),c||(c=5e3),g.insertBefore(d),h.insertBefore(d),d.css({position:"fixed","text-align":"center",top:parseInt(e.top||0,10)+"px","z-index":9999,width:e.width||d.width()+"px",background:"white"}),g.css({position:"fixed",top:parseInt(e.top||0,10)-15,"z-index":d.css("z-index")-1}),h.css({top:parseInt(e.top||0,10)-15,"z-index":d.css("z-index")-1}),this.unstickTimer=setTimeout(function(){g.remove(),h.remove(),d.css({transition:"top 2s"}),d.css({top:"0px"}),d.css({position:f})},c))},makeTopAdUnSticky:function(){var a=$("#ads2-pos-2025-ad-banner"),b=$(".module.ad.ad-101"),c=$("main");null!==this.unstickTimer&&(clearTimeout(this.unstickTimer),this.unstickTimer=null),"fixed"===a.css("position")&&($(".emptyDivs").remove(),a.css({transition:"top 2s",top:"0px",position:"relative"})),"fixed"===b.css("position")&&(c.css("margin-top","0px"),b.removeClass("is-fixed").addClass("is-static")),window.webmd.leaderboardStickyPlugin&&(window.webmd.leaderboardStickyPlugin.end(),delete window.webmd.leaderboardStickyPlugin),this.isUnStickyDFPServed=!0}},$(function(){webmd.adViewability.init()}),/*! webmd.p.decisionSelect */
function(){webmd.p.decisionSelect=function(a){var b;webmd.p.decisionSelect.sponsorInfo=a,webmd.p.decisionSelect.sponsorId=a;var c=window.image_server_url||"https://img.webmd.com/dtmcms/live";"string"==typeof a?(b=webmd.cookie.exists("ds_30"),!b&&webmd.p.pim.isAllowed()&&require([c+"/webmd/PageBuilder_Assets/JS_static/sponsored_programs/decision_select/survey-runner.min.js"])):require([c+"/webmd/PageBuilder_Assets/JS_static/sponsored_programs/decision_select/survey-runner2.min.js"])},webmd.p.decisionSelect.moduleName=webmd.p.decisionSelect.moduleName||"dssl-int",webmd.p.decisionSelect.showLeaveBehindNavigation=function(){function a(a){e=webmd.p.decisionSelect.leaveBehindParams.cbp.toLowerCase(),g=parseInt((webmd.p.decisionSelect.leaveBehindParams||{}).version||1,10),f=webmd.p.decisionSelect.leaveBehindParams.moduleWithDescriptor||"",g&&2===g?wmdPageLink(f+"_3-"+a,{prop29:""}):wmdPageLink(webmd.p.decisionSelect.moduleName+"_3-"+a,{prop15:e+"_"+webmd.p.decisionSelect.moduleName+"_3-"+a,prop29:""})}try{var b,c,d,e,f,g;if(b=window.sessionStorage.getItem("dg_view_later"),b&&!$(".leave-behind-container").length){if(webmd.p.decisionSelect.leaveBehindParams=JSON.parse(b),webmd.p.decisionSelect.leaveBehindParams.image)d=webmd.p.decisionSelect.leaveBehindParams.image+"_dt_lb.png";else{var h=window.image_server_url||"https://img.webmd.com/dtmcms/live";d=h+"/webmd/consumer_assets/site_images/ddg/Lady_w_weights_dt_lb.png"}c='.leave-behind-container{bottom:0px}.dslb, .dslb .txt{font-family:"Roboto Condensed",Verdana,sans-serif}.dslb{background-color:#e8e6e6;border-top: .25em solid #9ed0dd;box-sizing:border-box;font-size:0.9em;line-height:1.13;letter-spacing: .02em;padding: .67em;position:fixed;text-align:center;width:100%;z-index:999999999999}.dslb .your-webmd-doctor-di{width:95%}.dslb .txt{padding:4px .31em 0 0;font-size:0.99em;line-height:1.13;letter-spacing: .02em;color:#444}.dslb .your-webmd-doctor-di .txt span{display:inline-block;text-align:left}.dslb .view{background-color:#0e7ab9;box-shadow:rgba(0, 0, 0, .2) 0 .06em .06em 0;color:#fff;float:left;font-size: .68em;padding: .5em 1.5em;text-transform:uppercase;border-radius:3px}.dslb .close{color:#aaa;display:block;font-size:1em;font-weight:700;position:absolute;right: .31em;top: .31em;height:10px;width:10px}.dslb .close:focus{color:#000;text-decoration:none}.v2{width:100%;height:94px;position:fixed;background-color:#ddecf4;box-shadow:0 -2px 5px 0 rgba(0, 0, 0, 0.15)}.v2 .lbn-container{height:86px;width:560px;margin:0 auto;border-radius:3px;background-color:#fff;margin-top:8px;display:flex;overflow:hidden}.v2 .lbn-button{min-width:70px;max-width:70px;height:30px;border-radius:3px;background-color:#1f97dc;box-shadow:0 1px 1px 0 rgba(0, 0, 0, 0.2)}.v2 .lbn-underline{display:none}.v2 .close{position:absolute;right:20px;top:15px;width:18px;height:15px}.v2 .close > svg, .lbn-button .view, .dslb .close:focus, .dslb .close{cursor:pointer}.lbn-heading, .lbn-condition, .lbn-condition .lbn-break, .lbn-button .view, .lbn-button .view{font-family:"Source Sans Pro",sans-serif}.lbn-heading, .lbn-condition, .lbn-button .view{font-style:normal;font-stretch:normal;letter-spacing:normal;text-align:center}.lbn-heading{font-size:14px;font-weight:bold;line-height:1.43;color:#333132;padding:9px 0px 4px 0px}.lbn-condition{font-size:15px;font-weight:normal;line-height:1.13;color:#222}.lbn-clipboard>svg{width:12px;height:16px;position:relative;right:2px;top:2px}.lbn-text-box{flex-basis:353.5px}.lbn-image-box{flex-basis:207.3px}.lbn-body{display:flex;justify-content:center}.v2 .lbn-body{padding:9px 13px 0px 5px}.v2 .lbn-underline{display:none}.lbn-condition{flex-basis:76%}.lbn-button{flex-basis:24%}.lbn-button{min-width:70px;max-width:70px;border-radius:3px;background:none;box-shadow:none}.lbn-button .view{font-size:14px;font-weight:normal;line-height:1.14;color:#fff;align-items:center;justify-content:center;display:flex;height:100%}.lbn-underline{position:relative;left:91px;height:2px;width:168px;border:solid 2px #30c7f4}.lbn-wrap{width:200px;left:33px;position:relative}.dslb .lbn-image-box{display:none}.lbn-heading,.lbn-underline,.lbn-condition,.txt{display:none}.v2 .lbn-heading, .v2 .lbn-condition, .dslb .txt{display:block}@media screen and (max-width:39.938em){.leave-behind-container dslb{min-height:80.69px}.dslb{font-size: .8em}.dslb .lbn-body{padding:0px 10px 0px 0px}.dslb .txt{width:77%;padding:4px .31em 0 0px}.dslb .close{top:0.10em}.dslb .lbn-button{box-shadow:none}.dslb .view{margin-top: .625em}.dslb .lbn-button .view{width:57.91px;height:23.41px;font-size: .68em}.dslb .your-webmd-doctor-di .txt{width:77%;padding-left:1.5em}.v2{height:99px}.v2 .lbn-container{width:270px;height:99px;margin:0 auto;border-radius:0px;display:block}.v2 .close{right:15px;top:4px;width:13px;height:11.9px}.lbn-heading{border-bottom:solid 2px #30c7f4;padding:10px 0px 5px 0px}.lbn-clipboard>svg{width:14px;height:18px;top:3px}.lbn-underline,.lbn-image-box{display:none}.lbn-wrap{width:auto;position:static}.lbn-body{display:flex;padding:14px 13px 0px 5px}.lbn-condition{flex-basis:73%}.lbn-button{flex-basis:30%}.lbn-break{display:block}.lbn-button{min-width:64px;max-width:64px;height:30px;border-radius:3px;box-shadow:0 1px 1px 0 rgba(0, 0, 0, 0.2)}.lbn-button .view{font-size:14px;font-weight:normal;line-height:1;letter-spacing:0.3px;color:#fff;align-items:center;justify-content:center;display:flex;height:100%}}',$("<style>"+c+"</style>").appendTo(document.head),$("body").append('<div class="leave-behind-container"><div class="lbn-container"><div class="close"> <svg viewBox="0 0 18 18"> <path fill="#333132" stroke="#333132" fill-rule="evenodd" d="M9 8.353L17.353 0 18 .647 9.647 9 18 17.353l-.647.647L9 9.647.647 18 0 17.353 8.353 9 0 .647.647 0 9 8.353z" /> </svg></div><div class="lbn-text-box"><div class="lbn-heading"> <span class="lbn-clipboard"> <svg viewBox="0 0 15 20"> <path fill="#969292" fill-opacity=".4" fill-rule="nonzero" d="M2.609 6.875h10v.69h-10v-.69zm0 3.595h10v.69h-10v-.69zm0 3.595h10v.69h-10v-.69zm0-5.393h10v.69h-10v-.69zm0 3.595h10v.69h-10v-.69zm0 3.595h10v.69h-10v-.69zm8.428-14.219c.474 0 .857.409.857.913v1.582H3.323V2.556c0-.504.384-.913.857-.913h1.714v-.73c0-.504.384-.913.858-.913h1.714c.473 0 .857.409.857.913v.73h1.714zm1.62 1.482H15V20H0V3.125h2.344v.937H.937v15h13.126v-15h-1.407v-.937z" /> </svg> </span> Doctor Discussion Guide</div><div class="lbn-underline"></div><div class="lbn-body"><div class="lbn-condition"><p class="lbn-wrap"> <span class="lbn-break">Your guide for</span> <b>'+webmd.p.decisionSelect.leaveBehindParams.condition+'</b> is ready.</p></div><div class="txt"> <span>Your WebMD Doctor Discussion Guide for '+webmd.p.decisionSelect.leaveBehindParams.condition+' is Ready!</span></div><div class="lbn-button"><div class="view">View</div></div></div></div><div class="lbn-image-box"> <img src="'+d+'" alt="image"></div></div></div>'),webmd.p.decisionSelect.leaveBehindNav=$(".leave-behind-container"),"undefined"!=typeof webmd.p.decisionSelect.leaveBehindParams.version&&2===parseInt(webmd.p.decisionSelect.leaveBehindParams.version,10)?webmd.p.decisionSelect.leaveBehindNav.addClass("v2"):webmd.p.decisionSelect.leaveBehindNav.addClass("dslb"),webmd.p.decisionSelect.leaveBehindNav.find(".view").click(function(){webmd.p.decisionSelect.showDiscussionGuide(),a("view")}),webmd.p.decisionSelect.leaveBehindNav.find(".close").click(function(){webmd.p.decisionSelect.closeLeaveBehindNavigation(),a("close")})}}catch(i){webmd.debug("error parsing session storage data")}},webmd.p.decisionSelect.closeLeaveBehindNavigation=function(){webmd.p.decisionSelect.leaveBehindNav.remove(),sessionStorage.setItem("viewedDecisionSelect",!0),sessionStorage.removeItem("dg_view_later")},webmd.p.decisionSelect.showDiscussionGuide=function(){webmd.p.decisionSelect.closeLeaveBehindNavigation();var a=window.location.href;a.indexOf("medicinenet.com")>-1||a.indexOf("rxlist.com")>-1||a.indexOf("emedicinehealth.com")>-1||a.indexOf("onhealth.com")>-1?window.open(webmd.p.decisionSelect.leaveBehindParams.url):window.location=webmd.p.decisionSelect.leaveBehindParams.url},$(function(){if(window.top===window.self){var a=webmd.adsCookie.get("sess");if(a&&a.ds&&a.ds.sp&&"string"==typeof a.ds.sp){var b=a.ds.sp.match(/^dssp_(.+)x$/);b&&webmd.ads2.setPageTarget("dsf",b[1])}webmd.p.decisionSelect.showLeaveBehindNavigation()}})}(),window.location!==window.parent.location&&window.location.search.indexOf("?asset=")>-1){var life=webmd.url.getLifecycle().substr(1)||"live",template="//img{lifecycle}{env}.{sld}/dtmcms/{life}/webmd/consumer_assets/site_images/amd_modules/embedded_assets/1/embed-iframe-helper.js",srcUrl=webmd.substitute(template,{lifecycle:webmd.url.getLifecycle(),life:life,env:webmd.url.getEnv(),sld:webmd.url.getSLD()}),helper;helper=document.createElement("script"),helper.type="text/javascript",helper.src=srcUrl,$("head").append(helper),window.s_not_pageview="y"}/*!
 * LiveConnect tag for publishers
 */
$(function(){if(window.top!==window.self)return!1;if(window.s_sensitive&&"true"===window.s_sensitive)return!1;if(webmd.beaconDisable)return webmd.debug("liveintent beacons not fired due to beaconDisable."),!1;if(webmd.beaconDisable||window.location.hostname.indexOf("fit.")>-1||window.location.host.indexOf("member")>-1)return!1;if(window.webmd&&window.webmd.url&&"false"===webmd.url.getParam("liveintent"))return!1;var a,b=document.createElement("script");b.id="liveintent",b.src="//b-code.liadm.com/a-00xm.min.js",b.async=!0,a=document.getElementsByTagName("script")[0],Promise.resolve(window.__tcfapiPromise).then(function(){a.parentNode.insertBefore(b,a)})});
//# sourceMappingURL=../JS_static/sourcemaps/responsive_scripts_sourcemap.js