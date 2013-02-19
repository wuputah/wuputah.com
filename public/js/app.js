Enkoder = {};

Enkoder.email = function() {
  var text = "atupuw@etisbew||moc.h"
  var parts = text.split("||")
  var reverse = function(s) {
    var ret = '';
    for (var i=s.length-1;i>=0;i--)
      ret += s.charAt(i);
    return ret;
  }
  text = reverse(parts[0])+reverse(parts[1])
  document.getElementById("email").href = "mailto:" + text
}

Enkoder.all = function() {
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
