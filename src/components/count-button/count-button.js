import "./count-button.scss";

var plusBtn = document.querySelector(".count-button_plus");
var minusBtn = document.querySelector(".count-button_minus");
var counter = document.querySelector(".count-button_counter").innerHTML;
plusBtn.onclick = function () {
  if (counter < 9) {plusFunction();}
};
minusBtn.onclick = function () {
  if (counter > 0) {minusFunction();}
};

function plusFunction() {
  ++counter;
  document.querySelector(".count-button_counter").innerHTML = counter;
}

function minusFunction() {
  --counter;
  document.querySelector(".count-button_counter").innerHTML = counter;
}

