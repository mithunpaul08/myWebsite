




/*
     FILE ARCHIVED ON 10:48:22 Jul 25, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:08:08 Aug 19, 2016.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
define([],function(){var t={};return t.validateEmailAddress=function(t){var e=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,63}$/i;return e.test(t)},t.validateUrl=function(t){var e=/^(page|file):([0-9a-f:\-]+)$/i,a=/^mailto:[\w-\.]+@([\w-]+\.)+[\w-]{2,63}$/i,i=/^\b(https?|ftp|file):\/\/[\-A-Za-z0-9+&@#\/%?=~_|!:,.;]*[\-A-Za-z0-9+&@#\/%=~_|‌​]$/i;return e.test(t)?!0:a.test(t)?!0:i.test(t)},t.validateTime=function(t){var e=/^(\d|[0]\d|[1][0-2]):([0-5]\d)\s?(?:AM|PM)$/i,a=/^(\d|[0]\d|[1]\d|[2][0-3]):([0-5]\d)\s?$/i;return e.test(t)||a.test(t)},t.validateDate=function(t){if(isNaN(Date.parse(t)))return!1;var e=/^\d{1,2}[./-]\d{1,2}[./-]\d{4}$/,a=/^\d{4}[./-]\d{1,2}[./-]\d{1,2}$/;return e.test(t)||a.test(t)},t});
//# sourceMappingURL=regexhelper.js.map