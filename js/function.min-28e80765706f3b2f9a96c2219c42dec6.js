var maechabin_ui=function(a,b){function c(a,b){$("html, body").animate({scrollTop:a},b,"swing")}function d(){$("a[href^=#]").on("click",function(){var a=400,b=$(this).attr("href"),d=$("#"===b||""===b?"html":b),e=d.offset().top;return c(e,a),!1})}function e(){p.on("click",function(a){var d=$(a.target).attr("id");if("header_bar"===d||"header_bar_inner"===d){var e=600,f=$(b.body).offset().top;return c(f,e),!1}})}function f(){var a=location.href,c=location.host,d=new RegExp("^https?://"+c+"/archives/[0-9]+$","ig"),e=new RegExp("^https?://"+c,"ig"),f=$("#blog_title"),g=f.find("a"),h=f.find("i"),i=b.referrer;console.log(i.match(e)),a.match(d)&&i.match(e)&&!i.match(d)?(h.attr("class","fa fa-arrow-circle-left"),g.attr("href",i)):g.attr("href","/")}function g(){var b=$(".post-box");b.each(function(){var b=$(this);b.on("click",function(b){var c=b.target.nodeName;if("SECTION"===c||"H1"===c||"UL"===c){var d=this.getElementsByTagName("a")[0],e=d.getAttribute("href");a.location.assign(e)}})})}function h(){o.on("scroll",function(){p.css($(this).scrollTop()>0?{"box-shadow":"0 1px 3px #000",transition:"box-shadow .4s linear"}:{"box-shadow":"none"})})}function i(){var b=p.height(),c=$("#content_border").height(),d=$("#sidebar").height();if(c>d){var e=$("#sidebar"),f=$("#sidebar_sub"),g=b+f.height()+24-o.height(),h=b+c+24-o.height();e.css("height",c+"px"),o.on("scroll",function(){a.matchMedia("(min-width: 1024px)").matches&&(g<$(this).scrollTop()&&$(this).scrollTop()<h?f.css({position:"fixed",bottom:"24px"}):o.scrollTop()>=h?f.css({position:"absolute",bottom:"0"}):f.css("position","static"))})}}function j(){var a=$("#content"),b=$("#content_border").width(),c=$("#entry"),d=$("#sidebar"),e=0;b>990&&(e=(b-990)/2,a.css("width",b+"px")),d.css("padding-right",e+"px"),c.css("margin-left",e+"px")}function k(){var b=$("#sidebar"),c=b.height(),d=$("#sidebar_sub"),e=d.height(),f=$("#content_border").height();f>c&&(a.matchMedia("(max-width: 1024px)").matches?(b.css("height",e+"px"),d.css("position","static")):b.css("height",f+"px"))}function l(){clearTimeout(n),n=setTimeout(function(){j(),k()},200)}function m(){o.on("resize",function(){l()})}{var n=null,o=$(a),p=$("#header_bar");$("#sidebar").height()}return{init:function(){d(),e(),f(),g(),h(),i(),k(),j(),m()}}}(window,document);window.onload=maechabin_ui.init,function(a,b){a.fn.pageswitch=function(c){var d={url:"default",event:"click",target:"body",properties:{opacity:0},options:{duration:750,easing:"linear",queue:!0}},c=a.extend(d,c);return this.each(function(){if("default"==c.url)var d=a(this).attr("href");else var d=c.url;a(this).bind(c.event,function(){return c.options.complete=function(){b.location.assign(d)},a(c.target).animate(c.properties,c.options),!1})})}}(jQuery,window,document),$(document).ready(function(){$(function(){$("#content").fadeIn(400),$("#content_border").css("height","auto")}),$(".nav-previous a").pageswitch({target:"#content",properties:{marginRight:-$("body").width()},options:{duration:400}}),$(".nav-next a").pageswitch({target:"#content",properties:{marginLeft:-$("body").width()},options:{duration:400}}),$("#article a:not([target = '_blank','.internal-link']), header a:not([target = '_blank']), #sidebar_sub a:not([target = '_blank']), #footer_sub a:not([target = '_blank'])").pageswitch({target:"#content",options:{duration:300}})});