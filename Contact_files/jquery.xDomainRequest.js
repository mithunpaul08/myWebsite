




/*
     FILE ARCHIVED ON 10:48:22 Jul 25, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:08:08 Aug 19, 2016.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
define(["jquery"],function(e){if(!e.support.cors&&e.ajaxTransport&&window.XDomainRequest){var t=/^https?:\/\//i,o=/^get|post$/i,n=new RegExp("^"+location.protocol,"i"),s=/text\/html/i,r=/\/json/i,a=/\/xml/i;e.ajaxTransport("text html xml json",function(i,c){if(i.crossDomain&&i.async&&o.test(i.type)&&t.test(i.url)&&n.test(i.url)){var p=null,l=(c.dataType||"").toLowerCase();return{send:function(t,o){p=new XDomainRequest,/^\d+$/.test(c.timeout)&&(p.timeout=c.timeout),p.ontimeout=function(){o(500,"timeout")},p.onload=function(){var t="Content-Length: "+p.responseText.length+"\r\nContent-Type: "+p.contentType,n={code:200,message:"success"},i={text:p.responseText};try{if("html"===l||s.test(p.contentType))i.html=p.responseText;else if("json"===l||"text"!==l&&r.test(p.contentType))try{i.json=e.parseJSON(p.responseText)}catch(c){n.code=500,n.message="parseerror"}else if("xml"===l||"text"!==l&&a.test(p.contentType)){var m=new ActiveXObject("Microsoft.XMLDOM");m.async=!1;try{m.loadXML(p.responseText)}catch(c){m=void 0}if(!m||!m.documentElement||m.getElementsByTagName("parsererror").length)throw n.code=500,n.message="parseerror","Invalid XML: "+p.responseText;i.xml=m}}catch(u){throw u}finally{o(n.code,n.message,i,t)}},p.onprogress=function(){},p.onerror=function(){o(500,"error",{text:p.responseText})};var n="";c.data&&(n="string"===e.type(c.data)?c.data:e.param(c.data)),p.open(i.type,i.url),p.send(n)},abort:function(){p&&p.abort()}}}})}});
//# sourceMappingURL=jquery.xDomainRequest.js.map