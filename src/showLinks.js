// Open links in a new tab.
var links = document.links;
var out = []
for (i = 0; i < links.length; i++) {
  out.push(links[i].href + " ");
};

var win = window.open("", "MsgWindow");
var displayText = "YOUR " + document.links.length + " LINKS: " + JSON.stringify(out)
win.document.write(displayText);
win.blur()
