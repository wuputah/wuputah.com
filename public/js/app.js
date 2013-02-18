Enkoder = {};

Enkoder.phone = function() {
  var x="function f(x){var i,o=\"\",l=x.length;for(i=0;i<l;i+=2) {if(i+1<l)o+=" +
  "x.charAt(i+1);try{o+=x.charAt(i);}catch(e){}}return o;}f(\"ufcnitnof x({)av" +
  " r,i=o\\\"\\\"o,=l.xelgnhtl,o=;lhwli(e.xhcraoCedtAl(1/)3=!01)4t{yrx{=+;x+ll" +
  "=};acct(h)e}{f}roi(l=1-i;=>;0-i)-o{=+.xhcratAi(;)r}teru n.oussbrt0(o,)l};(f" +
  ")\\\"91\\\\,`\\\"bjuq!h:$2 `#vr7n02\\\\\\\\{~sp|hvupl0x01\\\\\\\\34\\\\0a\\" +
  "\\34\\\\06\\\\00\\\\\\\\32\\\\0u\\\\cuG~]Q\\\\\\\\\\\\\\\\6X03\\\\\\\\06\\\\"+
  "04\\\\01\\\\\\\\IqEEXA05\\\\0z\\\\\\\\r@\\\\[jTc{qyp_w}m8pza7v17\\\\\\\\sdj" +
  "`.3~Wayeuevcu\\\\k\\\\\\\"\\\\\\\\\\\\\\\"@\\\\31\\\\04\\\\03\\\\\\\\33\\\\" +
  "04\\\\01\\\\\\\\37\\\\01\\\\03\\\\\\\\27\\\\01\\\\03\\\\\\\\7T00\\\\\\\\02\\"+
  "\\00\\\\03\\\\\\\\02\\\\04\\\\01\\\\\\\\35\\\\0Q\\\\CN04\\\\05\\\\00\\\\\\\\"+
  "\\\\r3\\\\02\\\\\\\\17\\\\07\\\\02\\\\\\\\23\\\\0M\\\\26\\\\07\\\\01\\\\\\\\"+
  "05\\\\02\\\\>+?3\\\"\\\\f(;} ornture;}))++(y)^(iAtdeCoarchx.e(odrChamCro.fn" +
  "griSt+=;o27=1y%2;*=)yy)1+(9i>f({i+)i+l;i<0;i=r(foh;gten.l=x,l\\\"\\\\\\\"\\" +
  "\\o=i,r va){,y(x fontincfu)\\\"\")"                                          ;
  while(x=eval(x));  
}

Enkoder.email = function() {
  var x="function f(x){var i,o=\"\",l=x.length;for(i=0;i<l;i+=2) {if(i+1<l)o+=" +
  "x.charAt(i+1);try{o+=x.charAt(i);}catch(e){}}return o;}f(\"ufcnitnof x({)av" +
  " r,i=o\\\"\\\"o,=l.xelgnhtl,o=;lhwli(e.xhcraoCedtAl(1/)3=!15{)rt{y+xx=l;=+;" +
  "lc}tahce({)}}of(r=i-l;1>i0=i;--{)+ox=c.ahAr(t)i};erutnro s.buts(r,0lo;)f}\\" +
  "\"(7)10\\\\,X\\\"ZR}I)`2,:(x+nj7v01\\\\\\\\>?a3,&>8<:7?00\\\\\\\\1#0-% 7I02" +
  "\\\\\\\\R^14\\\\0[\\\\\\\\F\\\\\\\\G\\\\GM\\\\nz\\\\04\\\\07\\\\03\\\\\\\\0" +
  "0\\\\0x\\\\hy8p0=bLkece^&1(03\\\\\\\\0200\\\\\\\\1500\\\\\\\\35\\\\04\\\\02" +
  "\\\\\\\\02\\\\00\\\\01\\\\\\\\07\\\\0,\\\\23\\\\00\\\\00\\\\\\\\04\\\\0O\\\\"+
  "3+4>\\\"\\\\\\\\\\\\<6q57o02\\\\\\\\7=1,\\\"\\\\\\\\\\\\\\\\L\\\\\\\\M\\\\]" +
  "X27\\\\0o\\\\14\\\\0J\\\\JJ\\\\\\\\\\\\\\\\K@MBi?pkve-`%-eeqbsj\\\\tR\\\\16" +
  "\\\\06\\\\02\\\\\\\\23\\\\01\\\\03\\\\\\\\07\\\\03\\\\02\\\\\\\\01\\\\00\\\\"+
  "01\\\\\\\\\\\"\\\\f(;} ornture;}))++(y)^(iAtdeCoarchx.e(odrChamCro.fngriSt+" +
  "=;o27=1y%+;y+7)10i<f({i+)i+l;i<0;i=r(foh;gten.l=x,l\\\"\\\\\\\"\\\\o=i,r va" +
  "){,y(x fontincfu)\\\"\")"                                                    ;
  while(x=eval(x));
}

Enkoder.all = function() {
  Enkoder.phone();
  Enkoder.email();
}

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-51411-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
