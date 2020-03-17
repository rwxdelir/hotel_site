import "./nav.scss";
var x = document.querySelector(".nav__expanded");
x.onclick = function() {myEvent()};

function myEvent() {
  document.querySelector(".nav__expanded_content").classList.toggle("nav__expanded_content-show");
  document.querySelector(".nav__arrow").classList.toggle("nav__arrow-active");
}
