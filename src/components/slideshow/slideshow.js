/* Some implementation copied from https://www.w3schools.com/howto/howto_js_slideshow.asp */

var btnPrev = document.querySelectorAll(".slideshow-button-prev");
var slideshow = document.querySelectorAll(".slideshow");
var btnNext = document.querySelectorAll(".slideshow-button-next");
for (let i = 0; i < btnPrev.length; i++) {
  btnPrev[i].onclick = function() {plusSlides(-1, i);}
  btnNext[i].onclick = function() {plusSlides(1, i);}
}

var dot = document.querySelectorAll(".slideshow-dot");
for (let i = 0; i < dot.length; i++) {
  dot[i].onclick = function() {currentSlide(i+1, i);}
}

/* Increases count indexes if we add new slideshow */
var slideIndex = [];
for (let i = 0; i < slideshow.length; i++) {
  slideIndex[i] = 1;
  showSlides(slideIndex[i], i);
}

function plusSlides(n, s) {
  showSlides(slideIndex[s] += n, s);
}

function currentSlide(n, s) {
  showSlides(slideIndex = n, s);
} 

/* Shows number 'n' slide from slideshow with index 'no' */
function showSlides(n, no) {
  var i;
  var slides = slideshow[no].getElementsByClassName("slideshow-slide");
  var dots = slideshow[no].getElementsByClassName("slideshow-dot");
  if (n > slides.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slideshow-dot-active", "");
  }
  slides[slideIndex[no]-1].style.display = "block";
  dots[slideIndex[no]-1].className += " slideshow-dot-active";
}

