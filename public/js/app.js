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

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-51411-1', 'auto');
ga('send', 'pageview');
