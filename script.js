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
	var captionText = document.getElementById("caption");
	slides[n-1].style.display = "block";
	// for loop through slides to display none and insert into slides array
	// slides[n].style.display = "block";
	// captionText.innerHTML
}

function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}