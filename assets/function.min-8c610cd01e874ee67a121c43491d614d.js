!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){(function(b){var c="undefined"!=typeof window?window.$:"undefined"!=typeof b?b.$:null;a("cbslideheader"),a("cbsharecount");var d=d||{};d.ui=function(a,b,c){"use strict";function d(b,c){a("html, body").animate({scrollTop:b},c,"swing")}function e(){a('a[href^="#"]').on("click",function(){var b=400,c=a(this).attr("href"),e=a("#"===c||""===c?"html":c),f=e.offset().top-t.height();return d(f,b),!1})}function f(){var b,c=location.pathname,d="category__list_current",e=a(".category__list").find("li")||"",f=function(a){e&&e.eq(a).addClass(d)};if(e.removeClass(d),c)switch(b=c.split("/"),b[3]){case"tech":f(1);break;case"event":f(2);break;case"impression":f(3);break;default:f(0)}}function g(){t.on("click",function(b){var e,f,g=a(b.target).attr("id");return"header_bar"===g||"header_bar_inner"===g?(e=600,f=a(c.body).offset().top,d(f,e),!1):void 0})}function h(){var b=location.href,d=location.host,e=location.search||"",f=new RegExp("^https?://"+d+"/archives/[0-9]+$","ig"),g=new RegExp("^https?://"+d,"ig"),h=new RegExp("/?s=.+?","ig"),i=a(".header__title").eq(0),j=i.find("a").eq(0),k=i.find("i").eq(0),l=c.referrer||"";b.match(f)&&l.match(g)&&!l.match(f)?(k.attr("class","fa fa-chevron-left"),j.attr("href",l)):""!==e&&e.match(h)?(k.attr("class","fa fa-chevron-left"),j.attr("href",l)):j.attr("href","/")}function i(){var c=a(".post-box");c.each(function(){var c=a(this);c.on("click",function(a){var c,d,e=a.target.nodeName;("SECTION"===e||"H1"===e||"UL"===e)&&(c=this.getElementsByTagName("a")[0],d=c.getAttribute("href"),b.location.assign(d))})})}function j(){var b=a(".header__search_mobile"),c=a(".header__button_search"),d=a(".header__button_back");c.on("click",function(){b.stop().animate({left:0},500,"swing")}),d.on("click",function(){b.stop().animate({left:"100vw"},300,"linear")})}function k(){var c=t.height(),d=a("#content_border").height(),e=a("#sidebar").height();if(d>e){var f=a("#sidebar"),g=a("#sidebar_sub"),h=c+g.height()+24-r.height(),i=c+d+24-r.height();f.css("height",d+"px"),r.on("scroll",function(){b.matchMedia("(min-width: 1024px)").matches&&(h<a(this).scrollTop()&&a(this).scrollTop()<i?g.css({position:"fixed",bottom:"24px"}):r.scrollTop()>=i?g.css({position:"absolute",bottom:"0"}):g.css("position","static"))})}}function l(){var b=a("#agenda"),c=a("#footer__bar__agenda-link");b[0]&&(c.addClass("footer__style--show"),c.removeClass("footer__style--hidden"))}function m(){var b=a("#content"),c=a("#content_border").width(),d=a("#entry"),e=a("#sidebar"),f=0;c>1092&&(f=(c-1092)/2,b.css("width",c+"px")),e.css("padding-right",f+"px"),d.css("margin-left",f+"px")}function n(){var c=a("#sidebar"),d=c.height(),e=a("#sidebar_sub"),f=e.height(),g=a("#content_border").height();g>d&&(b.matchMedia("(max-width: 1024px)").matches?(c.css("height",f+"px"),e.css("position","static")):c.css("height",g+"px"))}function o(){b.clearTimeout(q),q=b.setTimeout(function(){m(),n()},400)}function p(){r.on("resize",function(){o()})}var q=null,r=a(b),s=a(".header"),t=a("#header_bar");a("#sidebar").height();return{init:function(){f(),l(),e(),g(),h(),i(),k(),n(),m(),p(),s.cbSlideUpHeader({headroom:!0}),j()}}}(c,window,document),window.onload=d.ui.init}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{cbsharecount:2,cbslideheader:3}],2:[function(a,b,c){(function(a){!function(c){"object"==typeof b&&"object"==typeof b.exports?b.exports=c("undefined"!=typeof window?window.$:"undefined"!=typeof a?a.$:null,window,document):c(jQuery,window,document)}(function(a,b,c,d){"use strict";var e=function(b,c){this.element=b,this.$element=a(b),this.site_url="",this.api_url="",this.param_name="",this.send_data={},this.num=c};e.prototype.data={facebook:{api_url:"http://graph.facebook.com/",param_name:"id",count:0},hatena:{api_url:"http://api.b.st-hatena.com/entry.count",param_name:"url",count:0}},e.prototype.get_count=function(){var b=new a.Deferred;return a.ajax({type:"get",url:this.api_url,cache:!0,dataType:"jsonp",data:this.send_data,success:b.resolve,error:b.reject}),b.promise()},e.prototype.view=function(b){var c=this,d=a(".cb-fb").eq(c.num).find("span"),e=a(".cb-hb").eq(c.num).find("span");a(b).each(function(a){switch(a){case 0:c.data.facebook.count=this[0].shares||this[0].likes||0;break;case 1:c.data.hatena.count=this[0]}}),d.html(c.data.facebook.count),e.html(c.data.hatena.count)},e.prototype.setup=function(){var b=this,c=[];a.each(b.data,function(a,d){b.api_url=d.api_url,b.send_data[d.param_name]=b.site_url,c.push(b.get_count())}),a.when.apply(a,c).done(function(){b.view(arguments)})},e.prototype.init=function(){return this.site_url=this.$element.attr("title"),this.setup(),this},a.fn.cbShareCount=function(){return this.each(function(a){new e(this,a).init()})}})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],3:[function(a,b,c){(function(a){!function(c){"use strict";"object"==typeof b&&"object"==typeof b.exports?b.exports=c("undefined"!=typeof window?window.$:"undefined"!=typeof a?a.$:null,window,document):c(jQuery,window,document)}(function(a,b,c,d){"use strict";var e=function(b,c){this.element=b,this.$element=a(b),this.methodType="",this.config={},this.options=c,this.slideFlag="up",this.defaults={headerBarHeight:this.$element.height(),headerBarWidth:"100%",header2SelectorName:".cb-header2",headerClone:!1,fullscreenView:!1,zIndex:9999,boxShadow:"none",opacity:1,slidePoint:0,slideDownDuration:"normal",slideUpDuration:"normal",slideDownEasing:"swing",slideUpEasing:"swing",slideDownCallback:function(){},slideUpCallback:function(){},headroom:!1}};e.prototype.slide=function(a,b,c,d){this.slideFlag="up"===a?"down":"up",this.$element.stop().animate({top:b},this.config["slide"+c+"Speed"],this.config["slide"+c+"Easing"],this.config["slide"+c+"Callback"]).css(d)},e.prototype.slideHeader=function(){var c=this,d=a(b),e="slideDown"===c.methodType?0:"-"+c.config.headerBarHeight+"px",f="slideDown"===c.methodType?"-"+c.config.headerBarHeight+"px":0,g="slideDown"===c.methodType?"Down":"Up",h="slideDown"===c.methodType?"Up":"Down",i={"box-shadow":c.config.boxShadow,transition:"box-shadow .9s linear"},j={"box-shadow":"none"},k="slideDown"===c.methodType?i:j,l="slideDown"===c.methodType?j:i,m=0,n=0;d.on("scroll",function(){"slideUp"===c.methodType&&c.config.headroom===!0?(n=d.scrollTop(),n>m&&n>0?"up"===c.slideFlag&&c.slide.call(c,c.slideFlag,e,g,k):"down"===c.slideFlag&&c.slide.call(c,c.slideFlag,f,h,l),m=n):d.scrollTop()>c.config.slidePoint?"up"===c.slideFlag&&c.slide.call(c,c.slideFlag,e,g,k):"down"===c.slideFlag&&c.slide.call(c,c.slideFlag,f,h,l)})},e.prototype.setStyle=function(){var a=this,b="slideDown"===a.methodType?"-"+a.config.headerBarHeight+"px":0;a.$element.css({top:b,visibility:"visible",opacity:a.config.opacity,width:a.config.width,"z-index":a.config.zIndex})},e.prototype.cloneHeader=function(){var a=this,b=a.$element.clone(!0);b.insertAfter(a.$element).removeClass("cb-header").css({"z-index":1e4})},e.prototype.changeHeaderHeight=function(){var c=this,d=c.$element.height(),e=a(c.config.header2SelectorName),f=d+e.height(),g=a(b).height(),h="";g>f?(h=c.config.headerClone===!0?(g-f)/2:(g-f+d)/2,c.config.slidePoint=g,e.css({"padding-top":h+"px","padding-bottom":h+"px"})):c.config.slidePoint=c.config.headerClone===!0?f:f-d},e.prototype.init=function(b){return this.methodType=b,this.config=a.extend({},this.defaults,this.options),this.config.headerClone===!0&&this.cloneHeader(),this.setStyle(),this.config.fullscreenView===!0&&this.changeHeaderHeight(),this.slideHeader(),this},a.extend(a.fn,{cbSlideDownHeader:function(a){return this.each(function(){new e(this,a).init("slideDown")})},cbSlideUpHeader:function(a){return this.each(function(){new e(this,a).init("slideUp")})}})})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1]);