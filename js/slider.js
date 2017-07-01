var slideIndex = 0;

var prevButton = document.getElementsByClassName("prev");
var nextButton = document.getElementsByClassName("next");
var dotElement = document.getElementsByClassName("dot");

prevButton.addEventListener( "click" , plusSlides(-1));
nextButton.addEventListener( "click" , plusSlides(1));
// dotElement.addEventListener( "click" , this.className += " active");

shouSlides(slideIndex);

function plusSlides(n) {
	shouSlides(slideIndex += n);
}

function currentSlide(n) {
	shouSlides(slideIndex = n);
}

function shouSlides(n) {
	var i;
	var slides = document.getElementsByClassName("header__slider-item");
	var dots = document.getElementsByClassName("dot");

	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace("active", "")
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}