var ytplayer = false;
var idPlayer = 'ytapiplayer'; 

function onYouTubePlayerReady(playerId) {
      //ytplayer = document.getElementById("myytplayer");
      ytplayer.addEventListener("onStateChange", "onytplayerStateChange");
      ytplayer.playVideo();
 }

function onytplayerStateChange(newState) {
   if (newState.data === 0 && ytplayer) { /*0 == skonceni videa */
    console.log("A");
		document.getElementById("videoModal").classList.toggle("show");
    var element = document.getElementById(idPlayer);
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
	  /*var params = { allowScriptAccess: "always",
     allowFullScreen: "true"  };
    var atts = { id: "myytplayer" };
    swfobject.embedSWF("https://www.youtube.com/v/GeA8UCiSgmQ?enablejsapi=1&fs=1&playerapiid=ytplayer&version=3&rel=0",
                       "ytapiplayer", "800", "500", "8", null, null, params, atts);*/

    ytplayer = new YT.Player(idPlayer, {
          height: '500',
          width: '800',
          videoId: 'GeA8UCiSgmQ',
          events: {
            'onReady': onYouTubePlayerReady,
            'onStateChange': onytplayerStateChange
          }
        });
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
