/* Some implementation copied from https://www.w3schools.com/howto/howto_js_slideshow.asp */

var btnPrev = document.querySelectorAll(".slideshow-button-prev");
var slideshow = document.querySelectorAll(".slideshow");
var btnNext = document.querySelectorAll(".slideshow-button-next");
for (let i = 0; i < btnPrev.length; i++) {
  btnPrev[i].onclick = function() {plusSlides(-1, i);}
  btnNext[i].onclick = function() {plusSlides(1, i);}
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
  showSlides(slideIndex[s] = n, s);
} 


var dot = document.querySelectorAll(".slideshow-dot");
for (let i = 0; i < dot.length; i++) {
  dot[i].onclick = function() {
    let slides = slideshow[Math.floor(i/4)].getElementsByClassName("slideshow-slide");
    let dots = slideshow[Math.floor(i/4)].getElementsByClassName("slideshow-dot");
    let dotsAmount = ((Math.floor(i/4)) + 1) * 4;
    let currentDot =  4 - (dotsAmount - i);

    for (let j = 0; j < slides.length; j++) {
      slides[j].style.display = "none";
    }
    for (let j = 0; j < slides.length; j++) {
      dots[j].className = dots[j].className.replace(" slideshow-dot-active", "");
    }

    slides[currentDot].style.display = "block";
    dots[currentDot].className += " slideshow-dot-active";    
    slideIndex[Math.floor(i/4)] = currentDot+1;
  }
}

for (let i = 0; i < slideshow.length; i++) {
  
  console.log(slideIndex[i])
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

