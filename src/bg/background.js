// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // // Load jquery.
  // chrome.tabs.executeScript({
  //   file: 'js/jquery/jquery.min.js'},

  //  // Unwrap links.
  //  function(){
  //   chrome.tabs.executeScript({
  //     file: "$('a').contents().unwrap();"
  //   });

  // });

});
