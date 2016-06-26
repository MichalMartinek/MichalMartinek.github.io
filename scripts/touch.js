var slideIndex = 1;
showDivs(slideIndex);

function showDivs(n) {
    var x = document.getElementsByClassName("dynamic-image");
    var y = document.getElementsByClassName("dynamic-heading");
    if (n > x.length) {slideIndex = 1} 
    else if (n < 1) {slideIndex = x.length}
	else {slideIndex = n;}
    for (var i = 0; i < x.length; i++) {
        x[i].style.opacity = "0"; 
        y[i].classList.remove("active");
    }
    x[slideIndex-1].style.opacity = "1"; 
    y[slideIndex-1].classList.add("active");

    document.getElementById("dynamic-desc").classList.add("pre-animation");  
    document.getElementById("dynamic-desc").innerHTML = x[slideIndex-1].getAttribute("alt");
    setTimeout(function(){
	        document.getElementById("dynamic-desc").classList.remove("pre-animation");  
	},500)
}

document.getElementById("arrow-left").addEventListener("click", function(){
	showDivs(slideIndex - 1);
});

document.getElementById("arrow-right").addEventListener("click", function(){
	showDivs(slideIndex + 1);
});


var x = document.getElementsByClassName("dynamic-heading");
for (var i = 0; i < x.length; ++i) {
	(function (k) {
		x[k].addEventListener("click", function(){ showDivs(k+1); });
	})(i);
}
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 37) {
    	showDivs(slideIndex - 1);
    }
    else if (evt.keyCode == 39) {
    	showDivs(slideIndex + 1);
    }
};