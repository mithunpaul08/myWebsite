




/*
     FILE ARCHIVED ON 10:48:21 Jul 25, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:07:47 Aug 19, 2016.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
define(["jquery"],function(s){function n(){o&&s(document).ready(function(){var n=s("#wsb-shell-preview-desktop .wsb-canvas:first, body > .wsb-canvas:first").first(),e=s('<div style="position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;"></div>'),o=n.find(".wsb-canvas-scrollable:first");n=1==o.length?o:n;var i=n.css("background-image"),t=i.match(/url\(.+?\)/gi);if(t&&t.length>0){var a=t[0],r=i.replace(a,"");r.length>0&&","===r[0]&&(r=r.substring(1)),r=s.trim(r);var c=n[0],d=n.css("background-repeat"),g=n.css("background-position"),u=c.style.backgroundPositionX,b=c.style.backgroundPositionY;n.css("background-image",r),n.css("background-repeat","repeat"),n.css("background-position","0% 0%"),c.style.backgroundPositionX="0%",c.style.backgroundPositionY="0%";var l=e[0];e.css("background-image",a),e.css("background-repeat",d),e.css("background-position",g),l.style.backgroundPositionX=u,l.style.backgroundPositionY=b,n.prepend(e),n.find(".wsb-canvas-page-container").css("z-index",2)}})}var e=/(msie) ([\w.]+)/.exec(window.navigator.userAgent.toLowerCase()),o=e&&3===e.length&&"msie"===e[1]&&parseInt(e[2],10)<10;return{fixBackground:n}});
//# sourceMappingURL=iebackground.js.map