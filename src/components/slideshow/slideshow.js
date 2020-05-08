var btnPrev = document.querySelector(".slideshow-button-prev");
var btnNext = document.querySelector(".slideshow-button-next");
btnPrev.onclick = function() {plusSlides(-1);}
btnNext.onclick = function() {plusSlides(1);}

var dot = document.querySelectorAll(".slideshow-dot");
for (let i = 0; i < dot.length; i++) {
  dot[i].onclick = function() {currentSlide(i+1);}
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow-slide");
  var dots = document.getElementsByClassName("slideshow-dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

