




/*
     FILE ARCHIVED ON 10:48:22 Jul 25, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:08:08 Aug 19, 2016.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
define([],function(){function r(){for(var r=new Array(16),t=0,n=0;16>t;t++)0===(3&t)&&(n=4294967296*Math.random()),r[t]=n>>>((3&t)<<3)&255;r[6]=15&r[6]|64,r[8]=63&r[8]|128;var e=0;return v[r[e++]]+v[r[e++]]+v[r[e++]]+v[r[e++]]+"-"+v[r[e++]]+v[r[e++]]+"-"+v[r[e++]]+v[r[e++]]+"-"+v[r[e++]]+v[r[e++]]+"-"+v[r[e++]]+v[r[e++]]+v[r[e++]]+v[r[e++]]+v[r[e++]]+v[r[e++]]}function t(r){return String(r).replace(g,"")}function n(r){var n=t(r);return n.substr(0,8)+"-"+n.substr(8,4)+"-"+n.substr(12,4)+"-"+n.substr(16,4)+"-"+n.substr(20,12)}function e(r){var t=n(r);return t===o}function u(r){return c.test(r)}function i(r){return u(r)&&!e(r)}function a(r){if(i(r)){var t=r.match(d);if(t&&2===t.length)return parseInt(t[1],10)}return 0}function s(r){if(i(r)){var t=r.match(d);if(t&&2===t.length)return parseInt(t[1],10).toString()}return r}function f(r){return r=parseInt(r||0,10),isNaN(r)||0>=r?o:(r+="",r=("000000000000"+r).substring(r.length),"00000000-0000-0000-0000-"+r)}for(var o="00000000-0000-0000-0000-000000000000",c=/^{?[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12}}?$/i,g=/[ -]/g,d=/^{?0{8}-?0{4}-?0{4}-?0{4}-?(\d{12})$/,v=new Array(256),h=0;256>h;h++)v[h]=(h+256).toString(16).substr(1);return{v4:r,isEmpty:e,isValid:u,isValidAndNotEmpty:i,toLong:a,toLegacyIdString:s,toUuid:f,removeHyphens:t,addHyphens:n}});
//# sourceMappingURL=api.guid.js.map