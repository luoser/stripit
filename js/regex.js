var re = /<a href="[^>]*>([^<]*)<\/a>/g
var text = document.documentElement.outerHTML
text.replace(re, $1)
