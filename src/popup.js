function openLinksInTab() {
  chrome.tabs.executeScript({
    file: 'src/showLinks.js'
  });
}

function stripLinks() {
  // Load jquery.
  chrome.tabs.executeScript({
    file: 'js/jquery/jquery.min.js'},
   // Unwrap links.
   function(){
    chrome.tabs.executeScript({
      code: "$('a').contents().unwrap();"
    });
  });
}

  document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('stripLinks').addEventListener('click', stripLinks);
  document.getElementById('seeLinks').addEventListener('click', openLinksInTab);
});
