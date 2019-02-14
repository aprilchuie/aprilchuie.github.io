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
	//document.getElementById('illustrationModal').style.animation-name="fadeout";
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

function hideShow(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
// toggle for collapsible elements
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      this.innerHTML = "Open";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      this.innerHTML = "Close";
    }
  });
}

function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}