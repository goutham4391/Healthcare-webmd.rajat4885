/* repo: responsive-chrome/HEAD@15021ee-dirty - Package Version: 2.57.2 - 2021-03-03 08:49 am - User:  */

$(function(){function a(a){var c,d,f="",g=a-1,h=$('<div class= "embd-ad-container"><div id="embedded-pos141-uprr-center-'+a+'" class="module ad emb-ad"></div></div>'),i='<div id = "embd-topad'+a+'" class= "embd-ad-container"><div id="embedded-pos141-uprr-top-'+a+'" class="module ad emb-ad" ></div></div>',l=["p","h3","aside","ul"],m=["1033","1080","1087"];c=$(".article-page").eq(g).find(l.join()).not("footer *").not("ol *, ul *, table *"),d=c.eq(Math.floor(c.length/2)-1),void 0!==d.prop("tagName")&&(f=d.prop("tagName").toLowerCase()),"h3"===f&&(d=c.eq(Math.floor(c.length/2)-2),void 0!==d.prop("tagName")&&"aside"===d.prop("tagName").toLowerCase()&&d.before(h)),$('.article-page[data-page= "'+a+'"]').find("section").length>1&&d.after(h),$(i).insertAfter($('div.article-page[data-page="'+a+'"] .continue-reading')),window.addEventListener("scroll",b),1===a?"true"===window.is_embedded_module_top_aligned||$("embeded_module[align=top]").length>0?e():n("embedded-pos141-uprr-center-1"):a>=2&&(j(a),"Medical Reference"===window.s_business_reference&&-1!==m.indexOf(window.center_id)&&k(a))}function b(){var a=$("#ed-rcmmnddforyou .entry_fmt"),c=2;window.unpaginatedOptions&&window.unpaginatedOptions.numOfRecForYouSlots&&(c=window.unpaginatedOptions.numOfRecForYouSlots),window&&window.pageYOffset>200&&a&&(a.slice(c,a.length).remove(),window.removeEventListener("scroll",b))}function c(a){var b,c=a-1,e=$("div.main-container.main-container-3").children().last().attr("id");2===a?($('<div id="ads2-pos-121-ad-right-rr-container'+a+'" class="module ad"><div id="ads2-pos-121-ad-right-rr'+a+'" class="up-rr-ad"></div></div>').insertAfter($("#"+e)),d(a,$("#ads2-pos-121-ad-right-rr-container"+a)),$('<div id="ads2-pos-137-ad-right-rr-container'+a+'" class="module ad"><div id="ads2-pos-137-ad-right-rr'+a+'" class="up-rr-ad"></div></div>').insertAfter($("#ed-urr-"+a)),b=$("#ed-rcmmnddforyou").clone(),b.attr("id","ed-rcmmnddforyou-"+a).insertAfter($("#ads2-pos-137-ad-right-rr-container"+a))):a>=3&&($('<div id="ads2-pos-121-ad-right-rr-container'+a+'" class="module ad"><div id="ads2-pos-121-ad-right-rr'+a+'" class="up-rr-ad"></div></div>').insertAfter($("#ed-rcmmnddforyou-"+c)),d(a,$("#ads2-pos-121-ad-right-rr-container"+a)),$('<div id="ads2-pos-137-ad-right-rr-container'+a+'" class="module ad"><div id="ads2-pos-137-ad-right-rr'+a+'" class="up-rr-ad"></div>').insertAfter($("#ed-urr-"+a)),b=$("#ed-rcmmnddforyou").clone(),b.attr("id","ed-rcmmnddforyou-"+a).insertAfter($("#ads2-pos-137-ad-right-rr-container"+a)))}function d(a,b){var c='<aside class="module module-unified-right-rail dfp-native" id="ed-urr-'+a+'" data-metrics-module="ed-urr-'+a+'" role="complementary"><header><h3>Today on WebMD</h3></header><div class="unified_right_inner_v2_rdr"><div class="entry_fmt"></div><div class="entry_fmt"></div></div></aside>';$(c).insertAfter(b)}function e(){webmd.ads2.displayCalled?n("embedded-pos141-uprr-center-1"):setTimeout(function(){e()},100)}function f(){$('<div class="view-more" data-toggle-selector="#lln-toolsres" data-toggle-metrics="lln-toolsres_xpnd,lln-toolsres_cls"><a class="seemore">Click to See More</a><a class="seeless">Click to See Less</a></div>').insertAfter("#lln-toolsres"),$(".seeless").hide(),$(".seemore").on("click",function(a){$(this).hide(),$(".seeless").show(),a.preventDefault()}),$(".seeless").on("click",function(a){$(this).hide(),$(".seemore").show(),a.preventDefault()})}function g(){var a;$("#newsletter-mapping-center").addClass("rr-update"),$('<div class="single-newsletter-rr-module"></div>').insertAfter("#lln-toolsres"),require(["newsletter/1/moduleUI-in-article"],function(b){b.init({selector:".single-newsletter-rr-module",metricsModule:"nl-multie_single",template:{successMsg:'<p class="success">Please check your email for updates.</p>',successHeader:"<h3>Thank you for subscribing!</h3>"}}),a="Sign up for our free "+$(".single-newsletter-rr-module > header > h3").text().substring(8),$(".single-newsletter-rr-module > header > h3").html(a),$(".single-newsletter-rr-module > header > p").html("Get doctor-approved health tips, news, and more.")})}function h(a){var b,c,d=2,e="",f="Suggested";for(window.unpaginatedOptions&&(window.unpaginatedOptions.numOfTopPicksSlots&&(d=window.unpaginatedOptions.numOfTopPicksSlots),window.unpaginatedOptions.headerForTopPicks&&(f=window.unpaginatedOptions.headerForTopPicks)),b=0;b<d;b++)e+='<li class="entry_fmt"></li>';c='<div id="top-picks-mod-'+a+'" data-metrics-module="lln-toppks" data-metrics-type="ad-hoc" class="top-picks dfp-native" role="complementary" ><hr /><div class="top-pick-container"><div class="heading"><span>'+f+"</span></div><ul>"+e+"</ul></div><hr /></div>",$($("#embd-topad"+a)).before(c)}function i(a,b,c){if(c)webmd.dfpNative.suggestedModule($("#top-picks-mod-"+a+" .entry_fmt"),a);else{var d=$("#top-picks-mod-"+a+" .entry_fmt"),e=[9021,9022,9023,9024,9025,9026],f=[];d.each(function(c){var d,g=$(this),h={};d=a+"-"+c,this.id="dfpslot_"+b+"_"+d,g.attr("data-sizes",'[[1,10],"fluid"]'),g.attr("data-pos",e[c]),g.attr("data-scp","{'mod' : lln-toppks}"),h.id=this.id,h.sizes=[[1,10],"fluid"],h.pos=e[c],h.keys={mod:"lln-toppks"},webmd.dfpNative.defineAd(h),f.push(h.slot)}),window.googletag.pubads().refresh(f)}}function j(a){require(["waypoints/2/waypoints","inview/1/jquery.inview"],function(){var b,d,e,f,g="embedded-pos141-uprr-top-"+a,j="embedded-pos141-uprr-center-"+a,k="ads2-pos-121-ad-right-rr"+a,n="ads2-pos-137-ad-right-rr"+a,r={},s={},t=$("div.main-container.main-container-3").children().last().attr("id"),u="Birth Control"===window.s_channel_health?"100%":"50%";new Waypoint({element:$('.article-page[data-page= "'+a+'"]'),handler:function(u){if("down"===u){if(b=a,window.currentPagen=a,b in s)return!0;webmd.metrics.dpv({moduleName:"pg-n-swipe",pageName:document.location.href.replace(/[\?#].*/,""),iCount:a,refresh:!1}),s[window.currentPagen]=window.s_pageview_id,q(),webmd.ads2.setPageTarget("pg",a),window.googletag&&(h(a),$(".webmd-onc-article").length>0?i(a,"tppcks-sdown","oncology"):i(a,"tppcks-sdown")),c(a),$("#ed-rcmmnddforyou-"+a+" .entry_fmt").slice(2,$("#ed-rcmmnddforyou-"+a+" .entry_fmt").length).remove(),m(g),m(j),o(k),l(a,"tow-sdown"),p(n),("true"===window.is_embedded_module_top_aligned||$("embeded_module[align=top]").length>0)&&(r[g]=!0,r[j]=!0,r[k]=!0,l(a),r[n]=!0,webmd.ads2.refresh({id:r})),2===a?(f=$("#embd-topad"+a).offset().top-$("#"+t).offset().top-$("#"+t).height())>1&&$("#ads2-pos-121-ad-right-rr-container"+a).css("margin-top",f+"px"):a>=3&&(d=a-1,(e=$("#embd-topad"+a).offset().top-$("#ed-rcmmnddforyou-"+d).offset().top-$("#ed-rcmmnddforyou-"+d).height())>1&&$("#ads2-pos-121-ad-right-rr-container"+a).css("margin-top",e+"px"))}},offset:u})})}function k(a){require(["waypoints/2/waypoints","inview/1/jquery.inview"],function(){var b,c=a-1,e="embedded-pos141-uprr-top-"+c,f="embedded-pos141-uprr-center-"+c,g="ads2-pos-121-ad-right-rr"+c,j="ads2-pos-137-ad-right-rr"+c,k={},m={},n={};new Waypoint({element:$('.article-page[data-page= "'+a+'"]'),handler:function(o){if("up"===o){if(b=a,window.currentPagen=a,b in n)return!0;webmd.metrics.dpv({moduleName:"pg-n-swipe-up",pageName:document.location.href.replace(/[\?#].*/,""),iCount:c,refresh:!1}),n[window.currentPagen]=window.s_pageview_id,q(),webmd.ads2.setPageTarget("pg",c),1===c?(k["ads2-pos-101-ad-banner"]=!0,k[f]=!0,k["ads2-pos-121-ad-right"]=!0,k["ads2-pos-137-pos-137"]=!0,webmd.ads2.refresh({id:k}),$("#ed-urr").remove(),d(c,$("#ads2-pos-121-ad-right")),l(c,"tow-sup")):c>=2&&(m[e]=!0,m[f]=!0,m[g]=!0,m[j]=!0,webmd.ads2.refresh({id:m}),$("#top-picks-mod-"+c).remove(),$("#ed-urr-"+c).remove(),h(c),$(".webmd-onc-article").length>0?i(c,"tppcks-sup","oncology"):i(c,"tppcks-sup"),d(c,$("#ads2-pos-121-ad-right-rr-container"+c)),l(c,"tow-sup"))}}})})}function l(a,b){var c=$("#ed-urr-"+a+" .entry_fmt"),d=[9001,9002],e=[];webmd.debug("##### dfpNative: todayOnWebmd"),c.each(function(c){var f,g=$(this),h={};f=a+"-"+c,this.id="dfpslot_"+b+"_"+f,g.attr("data-sizes",'[[1,10],"fluid"]'),g.attr("data-pos",d[c]),g.attr("data-scp","{'mod' : ed-urr}"),h.id=this.id,h.sizes=[[1,10],"fluid"],h.pos=d[c],h.keys={mod:"ed-urr"},webmd.dfpNative.defineAd(h),e.push(h.slot)}),window.googletag.pubads().refresh(e)}function m(a){webmd.ads2Consumer.defineAd({id:a,pos:141,sizes:[[728,90],[728,92]]})}function n(a){webmd.ads2Consumer.defineAd({id:a,pos:141,sizes:[[728,90],[728,92]]})}function o(a){webmd.ads2Consumer.defineAd({id:a,pos:121,sizes:[[300,250],[300,600]]})}function p(a){webmd.ads2Consumer.defineAd({id:a,pos:137,sizes:[[300,250],[300,600]]})}function q(){window.googletag&&window.googletag.apiReady&&window.googletag.pubads().updateCorrelator()}var r;"desktop"===webmd.useragent.ua.type&&window.screen.width>1024&&($(".module-ed-urr .entry_fmt").not(".entry_fmt_st").slice(2,$(".module-ed-urr .entry_fmt").length).remove(),g(),$("#lln-toolsres ul li").length>2&&f(),$(".lr-cllps .main-container-1").insertBefore(".breadcrumb"),$('<div class="no-lr-menu-lbl" data-toggle-selector=".main-container-1" data-toggle-metrics="lln-ctrcnav_exp,lln-ctrcnav_cllps"><h3>Menu</h3></div>').insertBefore(".main-container-1"),window.webmd.unpaged=!0,$(".article-page").each(function(){a($(this).data("page"))})),r=document.getElementById("ContentPane28"),r.setAttribute("data-js","main-container-1"),r.classList.add("main-container","main-container-1","no-leftrail")});