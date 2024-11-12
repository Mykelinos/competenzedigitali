!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(window.jQuery||window.Zepto)}(function(c){var l="Close",C="BeforeClose",t="AfterClose",n="BeforeAppend",y="MarkupParse",w="Open",o="Change",i="mfp",p="."+i,b="mfp-ready",a="mfp-removing",r="mfp-prevent-close",d,e=function(){},T=!!window.jQuery,k,u=c(window),f,I,m,O,g=function(e,t){d.ev.on(i+e+p,t)},h=function(e,t,n,o){var i=document.createElement("div");return i.className="mfp-"+e,n&&(i.innerHTML=n),o?t&&t.appendChild(i):(i=c(i),t&&i.appendTo(t)),i},v=function(e,t){d.ev.triggerHandler(i+e,t),d.st.callbacks&&(e=e.charAt(0).toLowerCase()+e.slice(1),d.st.callbacks[e]&&d.st.callbacks[e].apply(d,c.isArray(t)?t:[t]))},P=function(e){return e===O&&d.currTemplate.closeBtn||(d.currTemplate.closeBtn=c(d.st.closeMarkup.replace("%title%",d.st.tClose)),O=e),d.currTemplate.closeBtn},_=function(){c.magnificPopup.instance||((d=new e).init(),c.magnificPopup.instance=d)},x=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1},E=(c.magnificPopup={instance:null,proto:e.prototype={constructor:e,init:function(){var e=navigator.appVersion;d.isLowIE=d.isIE8=document.all&&!document.addEventListener,d.isAndroid=/android/gi.test(e),d.isIOS=/iphone|ipad|ipod/gi.test(e),d.supportsTransition=x(),d.probablyMobile=d.isAndroid||d.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),f=c(document),d.popupsCache={}},open:function(e){var t;if(!1===e.isObj){d.items=e.items.toArray(),d.index=0;for(var n=e.items,o,t=0;t<n.length;t++)if((o=(o=n[t]).parsed?o.el[0]:o)===e.el[0]){d.index=t;break}}else d.items=c.isArray(e.items)?e.items:[e.items],d.index=e.index||0;if(!d.isOpen){d.types=[],m="",e.mainEl&&e.mainEl.length?d.ev=e.mainEl.eq(0):d.ev=f,e.key?(d.popupsCache[e.key]||(d.popupsCache[e.key]={}),d.currTemplate=d.popupsCache[e.key]):d.currTemplate={},d.st=c.extend(!0,{},c.magnificPopup.defaults,e),d.fixedContentPos="auto"===d.st.fixedContentPos?!d.probablyMobile:d.st.fixedContentPos,d.st.modal&&(d.st.closeOnContentClick=!1,d.st.closeOnBgClick=!1,d.st.showCloseBtn=!1,d.st.enableEscapeKey=!1),d.bgOverlay||(d.bgOverlay=h("bg").on("click"+p,function(){d.close()}),d.wrap=h("wrap").attr("tabindex",-1).on("click"+p,function(e){d._checkIfClose(e.target)&&d.close()}),d.container=h("container",d.wrap)),d.contentContainer=h("content"),d.st.preloader&&(d.preloader=h("preloader",d.container,d.st.tLoading));var i=c.magnificPopup.modules;for(t=0;t<i.length;t++){var s,s=(s=i[t]).charAt(0).toUpperCase()+s.slice(1);d["init"+s].call(d)}v("BeforeOpen"),d.st.showCloseBtn&&(d.st.closeBtnInside?(g(y,function(e,t,n,o){n.close_replaceWith=P(o.type)}),m+=" mfp-close-btn-in"):d.wrap.append(P())),d.st.alignTop&&(m+=" mfp-align-top"),d.fixedContentPos?d.wrap.css({overflow:d.st.overflowY,overflowX:"hidden",overflowY:d.st.overflowY}):d.wrap.css({top:u.scrollTop(),position:"absolute"}),!1!==d.st.fixedBgPos&&("auto"!==d.st.fixedBgPos||d.fixedContentPos)||d.bgOverlay.css({height:f.height(),position:"absolute"}),d.st.enableEscapeKey&&f.on("keyup"+p,function(e){27===e.keyCode&&d.close()}),u.on("resize"+p,function(){d.updateSize()}),d.st.closeOnContentClick||(m+=" mfp-auto-cursor"),m&&d.wrap.addClass(m);var a=d.wH=u.height(),r={},l,l=(d.fixedContentPos&&(!d._hasScrollBar(a)||(l=d._getScrollbarSize())&&(r.marginRight=l)),d.fixedContentPos&&(d.isIE7?c("body, html").css("overflow","hidden"):r.overflow="hidden"),d.st.mainClass);return d.isIE7&&(l+=" mfp-ie7"),l&&d._addClassToMFP(l),d.updateItemHTML(),v("BuildControls"),c("html").css(r),d.bgOverlay.add(d.wrap).prependTo(d.st.prependTo||c(document.body)),d._lastFocusedEl=document.activeElement,setTimeout(function(){d.content?(d._addClassToMFP(b),d._setFocus()):d.bgOverlay.addClass(b),f.on("focusin"+p,d._onFocusIn)},16),d.isOpen=!0,d.updateSize(a),v(w),e}d.updateItemHTML()},close:function(){d.isOpen&&(v(C),d.isOpen=!1,d.st.removalDelay&&!d.isLowIE&&d.supportsTransition?(d._addClassToMFP(a),setTimeout(function(){d._close()},d.st.removalDelay)):d._close())},_close:function(){v(l);var e=a+" "+b+" ",e;d.bgOverlay.detach(),d.wrap.detach(),d.container.empty(),d.st.mainClass&&(e+=d.st.mainClass+" "),d._removeClassFromMFP(e),d.fixedContentPos&&(e={marginRight:""},d.isIE7?c("body, html").css("overflow",""):e.overflow="",c("html").css(e)),f.off("keyup.mfp focusin"+p),d.ev.off(p),d.wrap.attr("class","mfp-wrap").removeAttr("style"),d.bgOverlay.attr("class","mfp-bg"),d.container.attr("class","mfp-container"),!d.st.showCloseBtn||d.st.closeBtnInside&&!0!==d.currTemplate[d.currItem.type]||d.currTemplate.closeBtn&&d.currTemplate.closeBtn.detach(),d.st.autoFocusLast&&d._lastFocusedEl&&c(d._lastFocusedEl).focus(),d.currItem=null,d.content=null,d.currTemplate=null,d.prevHeight=0,v(t)},updateSize:function(e){var t,t;d.isIOS?(t=document.documentElement.clientWidth/window.innerWidth,t=window.innerHeight*t,d.wrap.css("height",t),d.wH=t):d.wH=e||u.height(),d.fixedContentPos||d.wrap.css("height",d.wH),v("Resize")},updateItemHTML:function(){var e=d.items[d.index],t=(d.contentContainer.detach(),d.content&&d.content.detach(),(e=e.parsed?e:d.parseEl(d.index)).type),n,n=(v("BeforeChange",[d.currItem?d.currItem.type:"",t]),d.currItem=e,d.currTemplate[t]||(n=!!d.st[t]&&d.st[t].markup,v("FirstMarkupParse",n),d.currTemplate[t]=!n||c(n)),I&&I!==e.type&&d.container.removeClass("mfp-"+I+"-holder"),d["get"+t.charAt(0).toUpperCase()+t.slice(1)](e,d.currTemplate[t]));d.appendContent(n,t),e.preloaded=!0,v(o,e),I=e.type,d.container.prepend(d.contentContainer),v("AfterChange")},appendContent:function(e,t){(d.content=e)?d.st.showCloseBtn&&d.st.closeBtnInside&&!0===d.currTemplate[t]?d.content.find(".mfp-close").length||d.content.append(P()):d.content=e:d.content="",v(n),d.container.addClass("mfp-"+t+"-holder"),d.contentContainer.append(d.content)},parseEl:function(e){var t=d.items[e],n,t;if((t=t.tagName?{el:c(t)}:(n=t.type,{data:t,src:t.src})).el){for(var o=d.types,i=0;i<o.length;i++)if(t.el.hasClass("mfp-"+o[i])){n=o[i];break}t.src=t.el.attr("data-mfp-src"),t.src||(t.src=t.el.attr("href"))}return t.type=n||d.st.type||"inline",t.index=e,t.parsed=!0,d.items[e]=t,v("ElementParse",t),d.items[e]},addGroup:function(t,n){var e=function(e){e.mfpEl=this,d._openClick(e,t,n)},o="click.magnificPopup";(n=n||{}).mainEl=t,n.items?(n.isObj=!0,t.off(o).on(o,e)):(n.isObj=!1,n.delegate?t.off(o).on(o,n.delegate,e):(n.items=t).off(o).on(o,e))},_openClick:function(e,t,n){var o;if((void 0!==n.midClick?n:c.magnificPopup.defaults).midClick||!(2===e.which||e.ctrlKey||e.metaKey||e.altKey||e.shiftKey)){var i=(void 0!==n.disableOn?n:c.magnificPopup.defaults).disableOn;if(i)if(c.isFunction(i)){if(!i.call(d))return!0}else if(u.width()<i)return!0;e.type&&(e.preventDefault(),d.isOpen&&e.stopPropagation()),n.el=c(e.mfpEl),n.delegate&&(n.items=t.find(n.delegate)),d.open(n)}},updateStatus:function(e,t){var n;d.preloader&&(k!==e&&d.container.removeClass("mfp-s-"+k),n={status:e,text:t=t||"loading"!==e?t:d.st.tLoading},v("UpdateStatus",n),e=n.status,d.preloader.html(t=n.text),d.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),d.container.addClass("mfp-s-"+e),k=e)},_checkIfClose:function(e){if(!c(e).hasClass(r)){var t=d.st.closeOnContentClick,n=d.st.closeOnBgClick;if(t&&n)return!0;if(!d.content||c(e).hasClass("mfp-close")||d.preloader&&e===d.preloader[0])return!0;if(e===d.content[0]||c.contains(d.content[0],e)){if(t)return!0}else if(n&&c.contains(document,e))return!0;return!1}},_addClassToMFP:function(e){d.bgOverlay.addClass(e),d.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),d.wrap.removeClass(e)},_hasScrollBar:function(e){return(d.isIE7?f.height():document.body.scrollHeight)>(e||u.height())},_setFocus:function(){(d.st.focus?d.content.find(d.st.focus).eq(0):d.wrap).focus()},_onFocusIn:function(e){if(e.target!==d.wrap[0]&&!c.contains(d.wrap[0],e.target))return d._setFocus(),!1},_parseMarkup:function(i,e,t){var s;t.data&&(e=c.extend(t.data,e)),v(y,[i,e,t]),c.each(e,function(e,t){if(void 0===t||!1===t)return!0;var n,o;1<(s=e.split("_")).length?0<(n=i.find(p+"-"+s[0])).length&&("replaceWith"===(o=s[1])?n[0]!==t[0]&&n.replaceWith(t):"img"===o?n.is("img")?n.attr("src",t):n.replaceWith(c("<img>").attr("src",t).attr("class",n.attr("class"))):n.attr(s[1],t)):i.find(p+"-"+e).html(t)})},_getScrollbarSize:function(){var e;return void 0===d.scrollbarSize&&((e=document.createElement("div")).style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),d.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)),d.scrollbarSize}},modules:[],open:function(e,t){return _(),(e=e?c.extend(!0,{},e):{}).isObj=!0,e.index=t||0,this.instance.open(e)},close:function(){return c.magnificPopup.instance&&c.magnificPopup.instance.close()},registerModule:function(e,t){t.options&&(c.magnificPopup.defaults[e]=t.options),c.extend(this.proto,t.proto),this.modules.push(e)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},c.fn.magnificPopup=function(e){_();var t=c(this),n,o,i,n;return"string"==typeof e?"open"===e?(o=T?t.data("magnificPopup"):t[0].magnificPopup,i=parseInt(arguments[1],10)||0,n=o.items?o.items[i]:(n=t,(n=o.delegate?n.find(o.delegate):n).eq(i)),d._openClick({mfpEl:n},t,o)):d.isOpen&&d[e].apply(d,Array.prototype.slice.call(arguments,1)):(e=c.extend(!0,{},e),T?t.data("magnificPopup",e):t[0].magnificPopup=e,d.addGroup(t,e)),t},"inline"),s,B,M,F=function(){M&&(B.after(M.addClass(s)).detach(),M=null)};c.magnificPopup.registerModule(E,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){d.types.push(E),g(l+"."+E,function(){F()})},getInline:function(e,t){var n,o,i;return F(),e.src?(n=d.st.inline,(o=c(e.src)).length?((i=o[0].parentNode)&&i.tagName&&(B||(s=n.hiddenClass,B=h(s),s="mfp-"+s),M=o.after(B).detach().removeClass(s)),d.updateStatus("ready")):(d.updateStatus("error",n.tNotFound),o=c("<div>")),e.inlineElement=o):(d.updateStatus("ready"),d._parseMarkup(t,{},e),t)}}});var S,z=function(){return S=void 0===S?void 0!==document.createElement("p").style.MozTransform:S};c.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var i=d.st.zoom,e=".zoom",t,n,o,s,a,r;i.enabled&&d.supportsTransition&&(n=i.duration,o=function(e){var e=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),t="all "+i.duration/1e3+"s "+i.easing,n={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},o="transition";return n["-webkit-"+o]=n["-moz-"+o]=n["-o-"+o]=n[o]=t,e.css(n),e},s=function(){d.content.css("visibility","visible")},g("BuildControls"+e,function(){d._allowZoom()&&(clearTimeout(a),d.content.css("visibility","hidden"),(t=d._getItemToZoom())?((r=o(t)).css(d._getOffset()),d.wrap.append(r),a=setTimeout(function(){r.css(d._getOffset(!0)),a=setTimeout(function(){s(),setTimeout(function(){r.remove(),t=r=null,v("ZoomAnimationEnded")},16)},n)},16)):s())}),g(C+e,function(){if(d._allowZoom()){if(clearTimeout(a),d.st.removalDelay=n,!t){if(!(t=d._getItemToZoom()))return;r=o(t)}r.css(d._getOffset(!0)),d.wrap.append(r),d.content.css("visibility","hidden"),setTimeout(function(){r.css(d._getOffset())},16)}}),g(l+e,function(){d._allowZoom()&&(s(),r&&r.remove(),t=null)}))},_allowZoom:function(){return"image"===d.currItem.type},_getItemToZoom:function(){return!!d.currItem.hasSize&&d.currItem.img},_getOffset:function(e){var e,e=e?d.currItem.img:d.st.zoom.opener(d.currItem.el||d.currItem),t=e.offset(),n=parseInt(e.css("padding-top"),10),o=parseInt(e.css("padding-bottom"),10),e=(t.top-=c(window).scrollTop()-n,{width:e.width(),height:(T?e.innerHeight():e[0].offsetHeight)-o-n});return z()?e["-moz-transform"]=e.transform="translate("+t.left+"px,"+t.top+"px)":(e.left=t.left,e.top=t.top),e}}}),_()});