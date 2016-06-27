var slideIndex = 1;

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
    setTimeout(function(){
        document.getElementById("dynamic-desc").innerHTML = x[slideIndex-1].getAttribute("alt");
	    document.getElementById("dynamic-desc").classList.remove("pre-animation");  
	},500)
}

document.getElementById("arrow-left").addEventListener("click", function(){
	showDivs(slideIndex - 1);
});

document.getElementById("arrow-right").addEventListener("click", function(){
	showDivs(slideIndex + 1);
});

//Headings click events
var x = document.getElementsByClassName("dynamic-heading");
for (var i = 0; i < x.length; ++i) {
	(function (k) {
		x[k].addEventListener("click", function(){ showDivs(k+1); });
	})(i);
}

// Key handeling 
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 37) {
    	showDivs(slideIndex - 1);
    }
    else if (evt.keyCode == 39) {
    	showDivs(slideIndex + 1);
    }
};
var showed = false;
window.onscroll = function() {
    var rect = document.getElementById("dynamic-img").getBoundingClientRect();
    if (rect.top < 1100 && !showed) {
        showed = true;
        document.getElementsByClassName("dynamic-image")[0].style.opacity = "1";
        document.getElementById("dynamic-desc").classList.add("pre-animation");  
        setTimeout(function(){
                document.getElementById("dynamic-desc").innerHTML = document.getElementsByClassName("dynamic-image")[0].getAttribute("alt");
                document.getElementById("dynamic-desc").classList.remove("pre-animation");  
        },500)
    }
};

//showDivs(slideIndex);