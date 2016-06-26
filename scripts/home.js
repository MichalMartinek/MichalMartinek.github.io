var ytplayer = false;


function onYouTubePlayerReady(playerId) {
      ytplayer = document.getElementById("myytplayer");
      ytplayer.addEventListener("onStateChange", "onytplayerStateChange");
      ytplayer.playVideo();
 }

function onytplayerStateChange(newState) {
   if (newState === 0) { /*0 == skonceni videa */
		document.getElementById("videoModal").classList.toggle("show");
    var element = document.getElementById("myytplayer");
    element.parentNode.removeChild(element);
    ytplayer = false;
    var node = document.createElement("div");
    node.id = "ytapiplayer";
    document.getElementById("IvideoModal").appendChild(node);
   }
}
/*Handlovani Escapu */
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27 && document.getElementById("videoModal").className.match(/(?:^|\s)show(?!\S)/)) {
    	if (ytplayer) ytplayer.stopVideo();
  		document.getElementById("videoModal").classList.toggle("show");
    }
};

document.getElementById("videoBtn").addEventListener("click", function(event) {
  document.getElementById("videoModal").classList.toggle("show");
  if (!ytplayer) {  /*Inicializace youtube prehravace */
	  var params = { allowScriptAccess: "always",
     allowFullScreen: "true"  };
    var atts = { id: "myytplayer" };
    swfobject.embedSWF("http://www.youtube.com/v/YD73GrYeWqk?enablejsapi=1&fs=1&playerapiid=ytplayer&version=3&rel=0",
                       "ytapiplayer", "800", "500", "8", null, null, params, atts);
  } else { /*Pripade uz nacteneho prehravace spusteni prehravani */
		ytplayer.playVideo();
	}
});
/*Kliknuti mimo okna modalu*/
document.getElementById("videoModal").addEventListener("click", function(event) {
  ytplayer.stopVideo();
  document.getElementById("videoModal").classList.toggle("show");
});
document.getElementById("IvideoModal").addEventListener("click", function(event) {
    event.stopPropagation();
});
