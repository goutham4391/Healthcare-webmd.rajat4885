/* repo: omniture-beacon/release-2.46@fe5d983c - Package Version: 2.46.0 - 2022-02-04 06:36 am - User: Scott Cody */
function s_md_doPlugins(a){function b(a,b){a&&(s_md[a]=b)}s_md.pageName||(s_md.pageName=location.protocol+"//"+location.host+location.pathname),function(){var a,c;if(window.newProp)for(a in window.newProp)c=window.newProp[a],b(a,c)}(),"function"==typeof AppMeasurement_Module_AudienceManagement&&s_md.AudienceManagement.setup({partner:"webmd",containerNSID:0,uuidCookie:{name:"aam_uuid",days:30},visitorService:{namespace:"16AD4362526701720A490D45@AdobeOrg"}})}function wmdSetContext(a,b){if(a)switch(a=a.replace(/[^A-Za-z0-9\.]/g,"").toLowerCase(),typeof b){case"string":s_md.contextData[a]=b.toLowerCase();break;case"number":s_md.contextData[a]=b}}function _readC(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(b))return decodeURIComponent(e.substring(b.length,e.length))}return""}function _writeC(a,b){date=new Date(3e3,1,1,0,0,0),document.cookie=a+"="+escape(b)+"; path=/; domain="+s_domain+";expires="+date.toGMTString()}function _writeC9Mon(a,b){var c=new Date;date=new Date(c.getFullYear(),c.getMonth()+9,c.getDate(),c.getHours(),c.getMinutes(),c.getSeconds()),document.cookie=a+"="+escape(b)+"; path=/; domain="+s_domain+";expires="+date.toGMTString()}function sCookie(a,b){document.cookie=a+"="+b.toLowerCase()+"; path=/; domain="+s_domain+";expires="}function _readQ(a){var b=a+"=";if(document.URL.indexOf("?")==-1)return"";for(var c=document.URL.toLowerCase().split("?"),d=String(c[1]).split("&"),e=0;e<d.length;e++){for(var f=d[e];" "==f.charAt(0);)f=f.substring(1,f.length);if(0===f.indexOf(b))return f.substring(b.length,f.length)}return""}function addEvent(a){typeof a!=_ud&&""!==a&&s_md.events.indexOf(a)==-1&&(""!==s_md.events&&(s_md.events+=","),s_md.events+=a)}function wmdSearchTrack(a){ctr(a)}function ctrCookie(a){var b=new Date,c=new Date(b.getFullYear(),b.getMonth(),b.getDate(),b.getHours(),b.getMinutes(),b.getSeconds()+60),d=a,e="",f="",g="",h="",i="";typeof s_linktext!=_ud&&(e=s_linktext.toLowerCase(),s_linktext=""),"oo"===s_beacon_type?typeof window.s_channel!=_ud&&""!==window.s_channel&&(f=window.s_channel):typeof window.s_topic!=_ud&&""!==window.s_topic&&(f=window.s_topic),typeof window.s_pageview_id!=_ud&&""!==window.s_pageview_id&&(i=window.s_pageview_id),typeof s_asset_class!=_ud&&""!==s_asset_class?g=s_asset_class.toLowerCase():typeof s_business_reference!=_ud&&""!==s_business_reference&&(g=s_business_reference.toLowerCase()),typeof s_channel_health!=_ud&&""!==s_channel_health&&(h=s_channel_health.toLowerCase());try{d=s_md.pageName.split("_").join("-")+"_"+a+"|"+e}catch(j){}d=d.toLowerCase(),document.cookie="ctr="+d+";path=/; domain="+s_domain+";expires="+c.toGMTString(),""!==f&&(document.cookie="ctrTopicId="+f+";path=/; domain="+s_domain+";expires="+c.toGMTString()),""!==g&&(document.cookie="ctrContentClassification="+g+";path=/; domain="+s_domain+";expires="+c.toGMTString()),""!==h&&(document.cookie="ctrHealthCenter="+h+";path=/; domain="+s_domain+";expires="+c.toGMTString()),""!==i&&(document.cookie="ctrPageviewId="+i+";path=/; domain="+s_domain+";expires="+c.toGMTString());try{document.cookie="prop29="+s_sponsor_program+";path=/; domain="+s_domain+";expires="+c.toGMTString()}catch(j){}}function ctr(a){ctrCookie(typeof s_query!=_ud?a+"|"+s_query:a+"|")}function wmdTrack(a){ctrs(a)}function ctrs(a){ctrCookie(a+"|")}function _urlClean(a){return a=a.toLowerCase(),a=a.split("https://www.").join(""),a=a.split("http://www.").join(""),a=a.split("https://").join(""),a=a.split("http://").join(""),a=a.split("www.").join(""),a=a.split(".html").join(""),a=a.split(".htm").join(""),a=a.split(".aspx").join(""),a=a.split(".asp").join(""),a=a.split(" ").join("-"),a=a.split("default").join(""),a=a.split(" ").join("-"),a=a.split("%20").join("-"),a=a.split("_").join("-"),a=a.split("\\").join(""),a=a.split('"').join("")}function wmdGetPVCandidate(){window.jQuery&&$.get("/api/xml/pv.xml?t="+ +new Date)}function locateCall(a){var b=s_md.linkTrackVars,c=s_md.pageName;s_md.linkTrackVars="prop3,prop47";var d="w-debug-"+a+"_"+old_prop20;s_md.pageName=d,void s_md.tl(!0,"o",d),s_md.linkTrackVars=b,s_md.pageName=c}function jq_extend(a,b){a=a||{};for(var c in b)"object"==typeof b[c]?a[c]=jq_extend(a[c],b[c]):a[c]=b[c];return a}function setGlobalWmdPageLinkVar(a,b){var c=getWmdPageLinkElementList();b&&(c[a]=b)}function getGlobalWmdPageLinkVar(a){var b,c=getWmdPageLinkElementList();return"undefined"!=typeof c[a]&&(b=c[a],delete c[a]),b}function getWmdPageLinkElementList(){return"undefined"==typeof window._wmdPageLinkList&&(window._wmdPageLinkList={}),window._wmdPageLinkList}function wmdSetUserSegment(a,b,c){"oo"===s_beacon_type&&(b=b.text),"2"!=b&&"3"!=b&&(b="1"),s_persist40=b,s_md.prop40=a,"1"!=b&&sCookie("p40",a+"|"+c)}function setProp40(){if(typeof s_md.prop40==_ud||0===s_md.prop40.length){var a=_readC("p40");if(typeof a!=_ud&&a.length>0){var b=a.split("|");if(s_md.prop40=b[0],2==b.length&&b[1].length>0){var c=b[1];c!=s_md.prop28&&c!=s_md.prop29&&c!=s_md.prop31&&(s_md.prop40="",sCookie("p40","undefined"))}}}}function wmdTrackLink(a){trun20(ctrs(s_md.pageName+"_"+a))}function trun20(a){try{if(typeof a==_ud||""===a)return void setPageModule(null);var b=a.split("_");if(a.length>100){if(b.length<2)return void setPageModule(b);b[0]=b[0].length>73?b[0].substring(0,72):b[0],b[1]=b[1].length>20?b[1].substring(0,19):b[1]}setPageModule(b)}catch(c){}}function setPageModule(a){var b="",c="",d="";a?(2===a.length?(b=a[0].toLowerCase(),c=a[1].toLowerCase()):3===a.length?(b=a[0].toLowerCase(),c=a[1].toLowerCase(),d=a[2].toLowerCase(),old_prop20=b+"_"+c+"_"+d):4===a.length&&(b=a[0].toLowerCase(),c=a[1].toLowerCase(),d=a[2].toLowerCase()+"_"+a[3].toLowerCase()),old_prop20=2===a.length?b+"_"+c:b+"_"+c+"_"+d):old_prop20="",wmdSetContext("wb.mpage",b),wmdSetContext("wb.mmodule",c),wmdSetContext("wb.mlink",d)}function setProductsPV(){var a="";typeof old_prop20!=_ud&&""!==old_prop20&&(a=old_prop20.split("_")[1]),window.s_before_pv?(s_before_pv(),window.document.dispatchEvent(new CustomEvent("onAdobeOmniBeforePv"))):window.document.dispatchEvent(new CustomEvent("before_pv"))}function s_getLoadTime(){if(!window.s_loadT){var a=(new Date).getTime(),b=window.performance?performance.timing:0,c=b?b.requestStart:window.inHeadTS||0;s_loadT=c?Math.round((a-c)/1e3):"",(s_loadT<0||s_loadT>300)&&(s_loadT="")}return s_loadT}function getResponsiveWidthMetric(){if("undefined"!=typeof webmd&&"undefined"!=typeof webmd.getResponsiveWidthType)switch(webmd.getResponsiveWidthType()){case 5:return"0-639";case 4:return"640-767";case 3:return"768-1023";case 2:return"1024-1239";case 1:return"1240-greater"}return null}function setLiverampContext(){var a=webmd.omniture.getTrackingCookie("lrid");a&&wmdSetContext("wb.liveramp",a)}function wmdPageLink(a,b){var c,d,e={},f=getGlobalWmdPageLinkVar(a);try{a=a.toLowerCase()}catch(g){}b||(b={}),c=s_gi(s_account),c.prop15="",e=jq_extend({},c.contextData),typeof s_topic!=_ud&&""!==s_topic&&(c.prop4=s_topic.toLowerCase(),wmdSetContext("wb.mtopic",s_topic)),"oo"===s_beacon_type&&typeof s_channel!=_ud&&""!==s_channel&&(c.prop4=s_channel.toLowerCase(),wmdSetContext("wb.mtopic",s_channel)),typeof s_pageview_id!=_ud&&""!==s_pageview_id&&(c.prop67=s_pageview_id.toLowerCase(),wmdSetContext("wb.mpvid",s_pageview_id)),typeof s_asset_class!=_ud&&""!==s_asset_class?wmdSetContext("wb.mcontentc",s_asset_class):typeof s_business_reference!=_ud&&""!==s_business_reference&&wmdSetContext("wb.mcontentc",s_business_reference),typeof s_channel_health!=_ud&&""!==s_channel_health&&wmdSetContext("wb.mhcenter",s_channel_health),"oo"!==s_beacon_type?c.prop6=typeof s_business_reference!=_ud&&""!==s_business_reference?s_business_reference.toLowerCase():"":c.prop6=typeof s_asset_class!=_ud&&""!==s_asset_class?s_asset_class.toLowerCase():"",c.prop24=window.s_pageview_id,wmdSetContext("wb.lnktxt","");var h=c.events;c.events="",c.prop21=typeof s_query!=_ud&&""!==s_query?s_query.toLowerCase():"",typeof c.prop15!=_ud&&""!==c.prop15||(c.prop15=typeof s_sponsor_program!=_ud&&""!==s_sponsor_program&&typeof a!=_ud&&""!==a?s_sponsor_program.toLowerCase()+"_"+a:"");try{trun20(typeof a!=_ud&&""!==a?c.pageName.split("_").join("-")+"_"+a:"")}catch(g){}if(typeof s_linktext!=_ud&&(wmdSetContext("wb.lnktxt",s_linktext.toLowerCase()),s_linktext=""),"undefined"!=typeof s_sponsor_program&&""!==s_sponsor_program&&(c.prop29=s_sponsor_program.toLowerCase()),"undefined"!=typeof s_package_type&&""!==s_package_type&&(c.prop30=s_package_type.toLowerCase()),typeof s_new_reg!=_ud&&""!==s_new_reg&&addEvent(s_new_reg.toLowerCase()),c.linkTrackVars=all_linkTrackVars,setProp40(),"undefined"==typeof c.contextData&&(c.contextData={}),"undefined"!=typeof s_embedded_asset&&s_embedded_asset===!0&&(c.contextData["wb.embast"]="embedded-asset"),"undefined"!=typeof b.contextData)for(d in b.contextData)c.contextData[d]=b.contextData[d],c.linkTrackVars+=",contextData."+d;"undefined"!=typeof document.referrer&&document.referrer.match(/\.webmd(\.boots)?\.com/gi)&&(c.contextData["wb.cstm"]="landpg::"+c.pageName),"undefined"!=typeof s_responsive_design&&s_responsive_design===!0&&null!==getResponsiveWidthMetric()&&(c.contextData["wb.rspd"]="rdesign-yes",c.contextData["wb.brkpt"]=getResponsiveWidthMetric());for(var i in b)"contextData"!=i&&(c[i]=b[i],c.linkTrackVars+=","+i);"undefined"!=typeof f&&("string"!=typeof f&&"undefined"!=typeof f.href&&(f=f.href.replace(/^https?:\/\/(www\.)?/gi,"")),f.indexOf("webmd.com")<1&&(c.contextData["wb.exiturl"]="exit::"+f),/(exe$)|(zip$)|(wav$)|(mp3$)|(mov$)|(mpg$)|(avi$)|(wmv$)|(doc$)|(pdf$)|(xls$)/i.test(f)&&(c.contextData["wb.dwnld"]="dwnld::"+f)),void c.tl(!0,"o",a),c.linkTrackVars="prop3,prop47",c.prop15="","1"==s_persist40&&(c.prop40=""),c.contextData=e,wmdSetContext("wb.adblocker",""),typeof s_new_reg!=_ud&&""!==s_new_reg&&(s_new_reg=""),c.events=h}function wmdPageview(a,b,c){var d;d=s_gi(s_account);var e=d.events;d.prop9=b,wmdSetContext("wb.lnktxt",""),"y"==s_pageview_sent&&(d.prop43="",wmdSetContext("wb.ecd",""),trun20(""),d.prop15="");try{a=_urlClean(a)}catch(f){}if(""!==a){d.pageName=a;try{(s_sponsor_brand||s_sponsor_program)&&(c=a.substr(a.indexOf("/")+1))}catch(f){}d.prop45=typeof c!=_ud&&""!==c?c.toLowerCase():"",typeof s_tug!=_ud&&""!==s_tug&&""!==d.prop45&&(d.prop45=s_tug+"_"+d.prop45)}var g="",h="",i="",j="",k="";try{var l=new Date;if(g=String(_readC("ctr")),h=String(_readC("ctrTopicId")),k=String(_readC("ctrPageviewId")),i=String(_readC("ctrContentClassification")),j=String(_readC("ctrHealthCenter")),prop29LastPg=String(_readC("prop29")).toLowerCase(),g&&g!=_ud){document.cookie="ctr=undefined; path=/; domain="+s_domain+";expires="+l.toGMTString(),document.cookie="prop29=undefined; path=/; domain="+s_domain+";expires="+l.toGMTString();var m=g.split("|"),n=m[0];m[1];wmdSetContext("wb.lnktxt",m[2]);var o=n.indexOf("_");if(o>0)var p=n.substr(o+1);typeof d.prop15!=_ud&&""!==d.prop15||(d.prop15=typeof prop29LastPg!=_ud&&""!==prop29LastPg&&typeof p!=_ud&&""!==p?prop29LastPg+"_"+p.toLowerCase():"");try{trun20(n)}catch(f){}}h&&h!=_ud&&(document.cookie="ctrTopicId=undefined; path=/; domain="+s_domain+";expires="+l.toGMTString(),s_ctr_loc_topic_id=h,""!==s_ctr_loc_topic_id&&wmdSetContext("wb.mtopic",s_ctr_loc_topic_id)),k&&k!=_ud&&(document.cookie="ctrPageviewId=undefined; path=/; domain="+s_domain+";expires="+l.toGMTString(),s_ctr_loc_pageview_id=k,""!==s_ctr_loc_pageview_id&&wmdSetContext("wb.mpvid",s_ctr_loc_pageview_id)),i&&i!=_ud&&(document.cookie="ctrContentClassification=undefined; path=/; domain="+s_domain+";expires="+l.toGMTString(),s_ctr_loc_content_classification=i,""!==s_ctr_loc_content_classification&&wmdSetContext("wb.mcontentc",s_ctr_loc_content_classification)),j&&j!=_ud&&(document.cookie="ctrHealthCenter=undefined; path=/; domain="+s_domain+";expires="+l.toGMTString(),s_ctr_loc_health_center=j,""!==s_ctr_loc_health_center&&wmdSetContext("wb.mhcenter",s_ctr_loc_health_center))}catch(f){}_haiq=_readC("haiq"),_haiq=unescape(_haiq).split("|")[0],d.eVar44=webmd.omniture.getTrackingCookie("DotomiUser"),d.eVar46=webmd.omniture.getTrackingCookie("turn"),setProductsPV(),setProp40();try{d.prop24=s_pageview_id}catch(f){}"undefined"!=typeof s_responsive_design&&s_responsive_design===!0&&null!==getResponsiveWidthMetric()&&(wmdSetContext("wb.rspd","rdesign-yes"),wmdSetContext("wb.brkpt",getResponsiveWidthMetric())),void d.t(),d.prop15="",d.events=e,wmdGetPVCandidate(),s_pageview_sent="y","1"==s_persist40&&(d.prop40=""),window.s_after_pv?s_after_pv():window.document.dispatchEvent(new CustomEvent("after_pv"))}var s_ver="|consumer",s_beacon_type="core",s_site,webmd,_ud="undefined",ntc="ntc",s_live=!0,s_account,s_md,old_prop20,_dom,s_domain,all_linkTrackVars,s_persist40="",s_pageview_sent="n",s_ctr_loc,s_ctr_loc_topic_id,s_ctr_loc_pageview_id,s_ctr_loc_content_classification,s_ctr_loc_health_center,qicd,qecd,qctr,_src,_haiq,vendor,publisher,uPermC,ecdwnlC,uAuth,s_errAs,s_eUrl,s_eRef,s_visitor,_URL="",s_sponUri="";webmd||(webmd={}),webmd.omniture={regId:String(unescape(_readC("WBMD_MB9"))).toLowerCase()||String(unescape(_readC("WBMD_MB"))).toLowerCase(),getTrackingCookie:function(a){if("undefined"==typeof a)return!1;var b=window._readC(a);if(""===b)b=!1;else{b=decodeURIComponent(b);var c=b.split("|")[2]||"";b="y"===c?b.replace(/\|(.*)/g,""):"99999"}return b},handleMBCookie:function(){var a=this;if(""!==qecd&&qecd.indexOf("wnl")>=0&&(_writeC("ecdwnl","wnl"),ecdwnlC="wnl",""===uAuth)){var b=unescape(_readQ("mb"));""!==b&&(_writeC9Mon("WBMD_MB9",b),a.regId=b)}},adInfo:function(a){var b="";for(var c in a)if(a.hasOwnProperty(c)){if(b+=a[c].pos+":",a[c].sizes.length>2)for(i=0;i<a[c].sizes.length;i++)b+=a[c].sizes[i]+"|";else b+=a[c].sizes+"_";b=b.replace(/\|(\s+)?$/,"_")}return b=b.replace(/_(\s+)?$/,"").replace(/,/g,"x")},getMeta:function(a){for(var b=document.getElementsByTagName("meta"),c=0;c<b.length;c++)if(b[c].getAttribute("name")===a||b[c].getAttribute("property")===a)return b[c].getAttribute("content");return""},getDomain:function(a){var b=a;if(null!==a){var c=a.split(".").reverse();null!==c&&c.length>1&&(b=c[1]+"."+c[0],a.toLowerCase().indexOf(".co.uk")!=-1&&c.length>2&&(b=c[2]+"."+b))}return b}},"core"===s_beacon_type?s_ver+="-core|%todays.date%":"oo"===s_beacon_type&&(s_ver="|oocommon|%todays.date%"),window.s_beaconload?s_beaconload():window.document.dispatchEvent(new CustomEvent("beacon_load")),webmd&&webmd.url&&webmd.url.getParam("runtime")&&(s_account="webmddev"),"webmddev"==s_account?s_live=!1:"undefined"==typeof webmd||"undefined"==typeof webmd.url||""===webmd.url.getEnv()&&""===webmd.url.getLifecycle()?(s_account="webmdp1global",s_live=!0):(s_account="webmddev",s_live=!1),"brand"==s_beacon_type&&(s_account="webmdp1cbvista"),typeof s_account_override!==_ud&&""!==s_account_override&&(s_account=s_account_override.toLowerCase()),_dom=document.domain.split("."),s_domain=_dom[_dom.length-2]+"."+_dom[_dom.length-1],"coreuk"==s_site&&(s_domain=_dom[_dom.length-3]+"."+s_domain),"undefined"!=typeof s_ctr_loc_pageview_id&&""!==s_ctr_loc_pageview_id||(s_ctr_loc_pageview_id=String(_readC("ctrPageviewId"))||"");try{s_not_pageview?"n"!=s_not_pageview&&(s_not_pageview="y"):s_not_pageview="n"}catch(e){s_not_pageview="n"}if(s_md=s_gi(s_account),s_md.cookieDomainPeriods="2",s_md.jsCookieDomainPeriods="2",s_md.charSet="ISO-8859-1",s_md.currencyCode="USD",s_md.trackDownloadLinks=!1,s_md.trackExternalLinks=!1,s_md.trackInlineStats=!0,s_md.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls",s_md.linkInternalFilters="javascript:,"+s_domain,s_md.linkLeaveQueryString=!1,s_md.linkTrackVars="prop3,prop47",s_md.linkTrackEvents="",s_md.visitorNamespace="webmd",s_md.usePlugins=!0,all_linkTrackVars="events,contextData.wb.lnktxt,contextData.wb.pddoc,contextData.wb.rspd,contextData.wb.brkpt,contextData.wb.embast,contextData.wb.cstm,contextData.wb.dwnld,contextData.wb.exiturl,contextData.wb.adblocker,contextData.wb.liveramp,contextData.wb.mlink,contextData.wb.mmodule,contextData.wb.mpage,contextData.wb.mtopic,contextData.wb.mpvid,contextData.wb.mhcenter,contextData.wb.mcontentc,contextData.wb.tapid,contextData.wb.gdprauth,prop3,prop4,prop6,prop15,prop21,prop24,prop28,prop29,prop30,prop31,prop33,prop40,prop47,prop48,eVar46,eVar45,eVar44",s_md.doPlugins=s_md_doPlugins,s_md.c_gd=new Function("var s=this,d=s.wd.location.hostname,n=s.jsCookieDomainPeriods,n2=s.cookieDomainPeriods,p;if(d&&!s.c_d){n=n?n:n2;n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):'';}return s.c_d"),s_md.trackGAS=new Function("var s_md=this,gifa=document.getElementsByTagName('iframe'),gif;for(var i=0;i<gifa.length;i++){if(gifa[i].src && gifa[i].src.indexOf('googlesyndication.com')>-1){gif=gifa[i];if(gif.attachEvent){gif.attachEvent('onfocus',s_md.gasf);}}}"),s_md.gasf=new Function("var s_md=s_gi(s_account);s_md.prop36=s_md.pageName;s.tl(true,'o','Google Exit Link');"),s_md.trackGAS(),function(){var a,b;if(window.s_context)for(a in window.s_context)b=window.s_context[a],wmdSetContext(a,b)}(),"n"==s_not_pageview){wmdSetContext("wb.lnktxt","");var sCtrRead="",sCtrReadTopicId="",sCtrReadContentClassification="",sCtrReadHealthCenter="",sCtrReadPageviewId="";try{var _dtDel=new Date;if(sCtrRead=String(_readC("ctr")),sCtrReadTopicId=String(_readC("ctrTopicId")),sCtrReadContentClassification=String(_readC("ctrContentClassification")),sCtrReadHealthCenter=String(_readC("ctrHealthCenter")),sCtrReadPageviewId=String(_readC("ctrPageviewId")),prop29LastPg=String(_readC("prop29")).toLowerCase(),sCtrRead&&sCtrRead!=_ud){document.cookie="ctr=undefined; path=/; domain="+s_domain+";expires="+_dtDel.toGMTString(),document.cookie="prop29=undefined; path=/; domain="+s_domain+";expires="+_dtDel.toGMTString();var _CtrRead=sCtrRead.split("|");s_ctr_loc=_CtrRead[0];var s_ctr_query=_CtrRead[1];wmdSetContext("wb.lnktxt",_CtrRead[2]);var _pos=s_ctr_loc.indexOf("_");if(_pos>0)var s_ml=s_ctr_loc.substr(_pos+1)}sCtrReadTopicId&&sCtrReadTopicId!=_ud&&(document.cookie="ctrTopicId=undefined; path=/; domain="+s_domain+";expires="+_dtDel.toGMTString(),s_ctr_loc_topic_id=sCtrReadTopicId),sCtrReadPageviewId&&sCtrReadPageviewId!=_ud&&(document.cookie="ctrPageviewId=undefined; path=/; domain="+s_domain+";expires="+_dtDel.toGMTString(),s_ctr_loc_pageview_id=sCtrReadPageviewId),sCtrReadContentClassification&&sCtrReadContentClassification!=_ud&&(document.cookie="ctrContentClassification=undefined; path=/; domain="+s_domain+";expires="+_dtDel.toGMTString(),s_ctr_loc_content_classification=sCtrReadContentClassification),sCtrReadHealthCenter&&sCtrReadHealthCenter!=_ud&&(document.cookie="ctrHealthCenter=undefined; path=/; domain="+s_domain+";expires="+_dtDel.toGMTString(),s_ctr_loc_health_center=sCtrReadHealthCenter)}catch(e){}}qicd=_readQ("ICD"),qecd=_readQ("ECD"),qctr=_readQ("CTR"),""===qicd&&(qicd=_readQ("icd")),""===qecd&&(qecd=_readQ("ecd")),""===qctr&&(qctr=_readQ("ctr")),""!==qicd&&wmdSetContext("wb.icd",qicd.toLowerCase()),""!==qctr&&(s_ctr_loc=qctr),_haiq=_readC("haiq"),_haiq=unescape(_haiq).split("|")[0],""!==qecd&&(vendor=_readQ("v"),publisher=_readQ("p"),""!==vendor&&(vendor=vendor.split("_").join("-"),qecd=0===qecd.lastIndexOf("_")?qecd+vendor:qecd+"_"+vendor),""!==publisher&&(publisher=publisher.split("_").join("-"),qecd+="_"+publisher),qecd=qecd.toLowerCase(),qecd=qecd.split("__").join("_").split("%20").join("-"),wmdSetContext("wb.ecd",qecd)),_src=_readQ("src"),""!==_src&&(_src=_src.toLowerCase(),wmdSetContext("wb.src",_src)),uPermC=String(_readC("WBMD_PERM")),ecdwnlC=_readC("ecdwnl"),uAuth=_readC("WBMD_AUTH"),webmd.omniture.handleMBCookie();try{s_error||(s_error="")}catch(e){s_error=""}try{s_pageType&&(s_error=s_pageType)}catch(e){s_pageType=""}try{if(""!==s_error){_rf=document.location.href;var _qrypos=_rf.indexOf("?");_qrypos>=0&&(_qry=_rf.substring(_qrypos+1),_rf=_qry.split("ourl=").join(""),_er=_rf.split("&referer="),s_eUrl=_er[0],s_eRef=_er[1])}if(""===s_error){_rf1=document.location.href;var _qrypos1=_rf1.indexOf("aspxerrorpath=");if(_qrypos1>=0){_qry1=_rf1.substring(_qrypos1+14),_er1=_qry1.split("&referer="),s_error="errorPage",s_eUrl="404;http://"+document.domain+_er1[0];try{s_eRef=_er1[1]}catch(e){}}}if(s_eUrl){s_errAs=s_eUrl.split("://").join("");var _len=s_errAs.indexOf("/");s_errAs=s_errAs.substring(_len,s_errAs.length),s_errAs=_urlClean(s_errAs).substr(1)}""===s_eRef&&(s_eRef=document.referrer)}catch(e){s_error=""}s_visitor=_readC("VisitorId");try{s_query||(s_query="No Search Term")}catch(e){}if("undefined"!=typeof s_business_reference&&"Feature - Video"===s_business_reference&&"undefined"!=typeof s_pagename&&"undefined"!=typeof s_video_module_id)try{s_pagename.indexOf("/video/")>-1?s_pagename=s_pagename.replace(/\/video\//gi,"/"+s_video_module_id+"/"):s_pagename=s_pagename.split("/").splice(-1,0,s_video_module_id).join("/")}catch(e){}try{_URL=s_pagename}catch(e){}try{_URL=s_pageName}catch(e){}""===_URL&&(_URL=String(document.location).split("?")[0].split("#")[0]),_URL=_urlClean(_URL);try{s_movie&&(_URL=_URL+"?movie="+s_movie.toLowerCase())}catch(e){}try{"tools - sdc"==s_asset_class&&(_URL=_URL+"/formid="+_readQ("formid"))}catch(e){}var _asset=_URL.substr(_URL.indexOf("/")+1);"affiliate"==s_beacon_type&&(_asset=_URL),_asset=String(_urlClean(_asset)).toLowerCase(),""===_asset&&(_asset="default");try{(s_sponsor_brand||s_sponsor_program)&&(s_sponUri=_asset)}catch(e){}if(typeof s_site===_ud&&(s_site="ntc"),"core"===s_beacon_type){if("mobileus"===s_site){s_site="core";var s_mobileweb="yes"}if(typeof s_mobileweb==_ud)var s_mobileweb="no";if("diet"===s_site&&(s_asset_class="expert commentary"),typeof s_mobileweb!=_ud&&"yes"==s_mobileweb?s_md.prop48="mbl-yes":s_md.prop48="mbl-no",_dom2=window.location.hostname.split("."),_dom2[0].indexOf("fit")>=0){s_site="chldob";var urlSeg=document.location.href.split("http://").join("");urlSeg=urlSeg.split("/"),urlSeg.length>=2&&(urlSeg=urlSeg[1])}}if("oo"===s_beacon_type){var s_siteclass="od";typeof s_mobileweb!=_ud&&"yes"==s_mobileweb?s_md.prop48="mbl-yes":s_md.prop48="mbl-no"}if("affiliate"===s_beacon_type){var s_siteclass="cb";switch("ntc"===s_site&&(s_site=s_domain.split(".")[0]),s_site){case"psychologytoday":s_site="psychologytoday"}}if("brand"===s_beacon_type){s_site==ntc&&(s_site=_dom[_dom.length-2]);var s_siteclass="brand"}s_md.pageName=typeof _URL!=_ud&&""!==_URL?typeof s_page_suffix!=_ud&&""!==s_page_suffix?_URL+"-"+s_page_suffix:_URL:"";try{s_md.prop16=s_test1.toLowerCase()}catch(e){}s_md.prop3=typeof s_site!=_ud&&""!==s_site?s_site.toLowerCase():"",typeof s_site_override!=_ud&&""!==s_site_override&&(s_md.prop3=s_site_override.toLowerCase()),typeof s_topic!=_ud&&""!==s_topic&&(s_md.prop4=s_topic.toLowerCase()),"oo"!==s_beacon_type&&"wbmd"!==s_beacon_type||typeof s_channel!=_ud&&""!==s_channel&&(s_md.prop4=s_channel.toLowerCase());try{typeof s_asset_class!=_ud&&""!==s_asset_class?s_md.prop6=s_asset_class.toLowerCase():typeof s_business_reference!=_ud&&""!==s_business_reference&&(s_md.prop6=s_business_reference.toLowerCase())}catch(e){s_md.prop6=""}s_md.prop7=typeof s_asset_id!=_ud&&""!==s_asset_id?s_asset_id.toLowerCase():typeof _asset!=_ud&&""!==_asset?_asset.toLowerCase():"",s_md.prop9=typeof s_page_number!=_ud&&""!==s_page_number?s_page_number.toLowerCase():typeof s_pagenum!=_ud&&""!==s_pagenum?s_pagenum:"",s_md.prop10=typeof s_query!=_ud&&""!==s_query?s_query.toLowerCase():"",s_md.prop11=typeof s_filter!=_ud&&""!==s_filter?s_filter.toLowerCase():"",s_md.prop12=typeof s_results!=_ud&&""!==s_results?s_results.toLowerCase():"",s_md.prop13=typeof s_spell!=_ud&&""!==s_spell?s_spell.toLowerCase():"",s_md.prop14=typeof s_g_ads!=_ud&&""!==s_g_ads?s_g_ads.toLowerCase():"",typeof s_md.prop15!=_ud&&""!==s_md.prop15||(s_md.prop15=typeof prop29LastPg!=_ud&&""!==prop29LastPg&&typeof s_ml!=_ud&&""!==s_ml?prop29LastPg+"_"+s_ml.toLowerCase():"");try{trun20(s_ctr_loc),""!==s_ctr_loc_topic_id&&wmdSetContext("wb.mtopic",s_ctr_loc_topic_id),""!==s_ctr_loc_pageview_id&&wmdSetContext("wb.mpvid",s_ctr_loc_pageview_id),""!==s_ctr_loc_content_classification&&wmdSetContext("wb.mcontentc",s_ctr_loc_content_classification),""!==s_ctr_loc_health_center&&wmdSetContext("wb.mhcenter",s_ctr_loc_health_center)}catch(e){}try{s_md.prop21=s_ctr_query.toLowerCase()}catch(e){}s_md.prop22=typeof s_adpos!=_ud&&""!==s_adpos?s_adpos.toLowerCase():"";try{s_md.prop24=s_pageview_id}catch(e){}if(typeof s_sponsor_program!=_ud&&""!==s_sponsor_program&&(s_md.prop29=s_sponsor_program.toLowerCase()),typeof s_package_type!=_ud&&""!==s_package_type&&(s_package_type=s_package_type.toLowerCase(),s_package_type.indexOf("- sponsored blog")==-1&&(s_package_type=s_package_type.split(" - sp").join("")),s_package_type=s_package_type.split("-sp").join(""),s_package_type=s_package_type.split(" - nosp").join(""),s_package_type=s_package_type.split("-nosp").join(""),typeof s_sponsor_program!=_ud&&""!==s_sponsor_program?s_package_type+=" - sp":s_package_type+=" - nosp",s_md.prop30=s_package_type),typeof s_package_name!=_ud&&""!==s_package_name&&(s_md.prop31=s_package_name.toLowerCase()),typeof s_assetname!=_ud&&""!==s_assetname?s_md.prop33=s_assetname.toLowerCase():"undefined"!=typeof s_business_reference&&"Feature - Video"===s_business_reference&&"undefined"!=typeof s_video_module_name&&(s_md.prop33=s_video_module_name),typeof s_articletype!=_ud&&""!==s_articletype&&(s_md.prop35=s_articletype.toLowerCase()),s_md.prop36=typeof s_asset!=_ud&&""!==s_asset?s_asset.toLowerCase():typeof s_topic_dir!=_ud&&""!==s_topic_dir?"tpdr-"+s_topic_dir.toLowerCase():typeof s_ext_id!=_ud&&""!==s_ext_id?s_ext_id.toLowerCase():"","affiliate"==s_beacon_type&&(s_md.prop36="Y"),typeof s_channel_health!=_ud&&""!==s_channel_health&&(s_md.prop38=s_channel_health.toLowerCase()),typeof s_user_seg!=_ud&&""!==s_user_seg&&(s_md.prop40=s_user_seg.toLowerCase()),setProp40(),s_md.prop45=typeof s_sponUri!=_ud&&""!==s_sponUri?s_sponUri.toLowerCase():"",typeof s_tug!=_ud&&""!==s_tug&&""!==s_md.prop45&&(s_md.prop45=s_tug+"_"+s_md.prop45),typeof s_page_state!=_ud&&""!==s_page_state&&(s_md.prop46=s_page_state.toLowerCase()),""!==webmd.omniture.regId&&(s_md.prop47=webmd.omniture.regId),"coreuk"==s_site){var buID=String(_readC("ADOL_AUTH"));""!==buID&&(buID=buID.split("|"),buID.length>=1&&(s_md.prop47=typeof buID[0]!=_ud&&""!==buID[0]?buID[0].toLowerCase():""))}try{s_md.prop49=s_visitor}catch(e){}s_md.eVar46=_haiq,webmd.omniture.getTrackingCookie&&(s_md.eVar44=webmd.omniture.getTrackingCookie("DotomiUser"),s_md.eVar46=webmd.omniture.getTrackingCookie("turn"));try{s_md.server=s_server_type.toLowerCase()}catch(e){}try{s_md.server=s_md.server+s_server_location}catch(e){}try{s_md.server=s_md.server+s_server_number.toLowerCase()}catch(e){}try{s_md.server=s_server.toLowerCase()}catch(e){}try{s_md.server=(typeof s_md.server==_ud||""===s_md.server?ntc:s_md.server)+s_ver}catch(e){}if(typeof s_light_reg!=_ud&&""!==s_light_reg?s_md.events+=","+s_light_reg.toLowerCase():typeof s_new_reg!=_ud&&""!==s_new_reg&&(s_md.events+=","+s_new_reg.toLowerCase(),s_new_reg=""),"oo"===s_beacon_type)try{typeof s_campaign!=_ud&&""!==s_campaign&&(s_md.campaign="mn:"+s_campaign.toLowerCase())}catch(e){}typeof Visitor!==_ud?wmdSetContext("wb.vapi","VisitorAPI Present"):wmdSetContext("wb.vapi","VisitorAPI Missing"),"undefined"!=typeof s_responsive_design&&s_responsive_design===!0&&null!==getResponsiveWidthMetric()&&(wmdSetContext("wb.rspd","rdesign-yes"),wmdSetContext("wb.brkpt",getResponsiveWidthMetric())),"undefined"!=typeof s_embedded_asset&&s_embedded_asset===!0&&wmdSetContext("wb.embast","embedded-asset"),"undefined"!=typeof document.referrer&&document.referrer.match(/\.webmd(\.boots)?\.com/gi)&&wmdSetContext("wb.cstm","landpg::"+s_md.pageName),wmdSetContext("wb.plt",s_getLoadTime()),setLiverampContext(),typeof s_pbtp!=_ud&&""!==s_pbtp&&wmdSetContext("wb.pbtp",s_pbtp),typeof s_pbnm!=_ud&&""!==s_pbnm&&wmdSetContext("wb.pbnm",s_pbnm),typeof s_tpcot!=_ud&&""!==s_tpcot&&wmdSetContext("wb.tpcot",s_tpcot);var lpid=_readC("lpid");""!==lpid&&wmdSetContext("wb.lotprofid",lpid),typeof s_pub!=_ud&&""!==s_pub?wmdSetContext("wb.pubsource",s_pub.toLowerCase()):typeof s_publication_source!=_ud&&""!==s_publication_source&&wmdSetContext("wb.pubsource",s_publication_source.toLowerCase()),typeof s_company!=_ud&&""!==s_company&&wmdSetContext("wb.pubsourceco",s_company.toLowerCase());var keywords=webmd.omniture.getMeta("keywords");""!==keywords&&wmdSetContext("wb.metakywrd",keywords),typeof s_intended_demographics!=_ud&&""!==s_intended_demographics&&"__"!==s_intended_demographics&&wmdSetContext("wb.intdemo",s_intended_demographics),typeof s_stage_condition!=_ud&&""!==s_stage_condition&&wmdSetContext("wb.stgcond",s_stage_condition),typeof s_mrt!=_ud&&""!==s_mrt&&wmdSetContext("wb.mrt",s_mrt);var metaTitle=webmd.omniture.getMeta("og:title")||"",articleTitle=window.document.querySelectorAll("article header h1");articleTitle.length>0?wmdSetContext("wb.titletag",articleTitle[0].innerText.toLowerCase()):""!==metaTitle&&wmdSetContext("wb.titletag",metaTitle.toLowerCase()),_readC("TapAd_DID")&&wmdSetContext("wb.tapid",_readC("TapAd_DID")),window.countryBlocked&&(window.webmdCcm.optanonCookie.goBlock||window.webmdCcm.optanonCookie.noCookie)?wmdSetContext("wb.gdprauth","no"):wmdSetContext("wb.gdprauth","yes"),typeof Visitor!=_ud&&(s_md.visitor=Visitor.getInstance("16AD4362526701720A490D45@AdobeOrg")),"function"==typeof AppMeasurement_Module_AudienceManagement&&s_md.loadModule("AudienceManagement");var trackingServerDomain="webmd.com",allowedtrackingServerDomains=["webmd.com","medicinenet.com","emedicinehealth.com","rxlist.com","onhealth.com","medhelp.org"];if(""!==window.location.hostname&&"|sdc"!==s_ver&&"|brand"!==s_ver&&(trackingServerDomain=webmd.omniture.getDomain(window.location.hostname),"medhelp.us"===trackingServerDomain&&(trackingServerDomain="medhelp.org"),allowedtrackingServerDomains.indexOf(trackingServerDomain)===-1&&(trackingServerDomain="webmd.com")),s_md.trackingServer="std.o."+trackingServerDomain,s_md.trackingServerSecure="ssl.o."+trackingServerDomain,"n"==s_not_pageview){setProductsPV(),s_pageview_sent="y";var s_code=s_md.t();s_md.products="",s_code&&document.write(s_code),window.document.dispatchEvent(new CustomEvent("after_init_pv"))}