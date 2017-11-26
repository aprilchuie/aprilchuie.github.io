function mobileNav() {
    var x = document.getElementById("topNav");
    if (x.className === "top-nav") {
        x.className += " responsive";
    } else {
        x.className = "top-nav";
    }
}

function openModal() {
	document.getElementById('illustrationModal').style.display="block";
}
function closeModal() {
	document.getElementById('illustrationModal').style.display="none";
}
function currentImg(n) {
	showSlides(slideIndex = n);
}
var workImageIndex = 1;
showSlides(workImageIndex);
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("work-images");
	var captionContainer = document.getElementsByClassName("caption-container");
	var captionText = document.getElementById("caption");
	for(i=0; i<slides.length; i++) {
		slides[i].style.display ="none";
	}
	slides[n-1].style.display = "block";
	captionContainer[0].style.display = "block";
	var slideCaption = slides[n-1].getElementsByTagName("img");
	captionText.innerHTML = slideCaption[0].alt;
}

function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}