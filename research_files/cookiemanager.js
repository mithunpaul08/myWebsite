




/*
     FILE ARCHIVED ON 10:48:21 Jul 25, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:07:47 Aug 19, 2016.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
define(["common/util/util.window"],function(e){function o(e){if(t.cookie.length>0){var o=t.cookie.indexOf(e+"=");if(-1!==o){o=o+e.length+1;var n=t.cookie.indexOf(";",o);return-1===n&&(n=t.cookie.length),unescape(t.cookie.substring(o,n))}}return""}function n(e,o,n){var i=new Date;n&&i.setDate(i.getDate()+n);var r=e+"="+escape(o)+((null===n||"undefined"==typeof n?"":"; expires="+i.toUTCString())+"; path=/");t.cookie=r}function i(e){n(e,"",-1)}var t=e.document;return{getCookie:o,setCookie:n,eraseCookie:i}});
//# sourceMappingURL=cookiemanager.js.map