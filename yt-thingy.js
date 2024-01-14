(function(){
  console.log("running yt-thingy");
  let element = documemt.getElementsByTagName('ytd-enforcement-message-view-model');
  console.log(element.length);
  element.remove();
  location.reload();
})();
