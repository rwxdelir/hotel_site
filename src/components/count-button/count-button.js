import "./count-button.scss";

var plusBtn = document.querySelectorAll(".count-button_plus");
var minusBtn = document.querySelectorAll(".count-button_minus");
var counterBtn = document.querySelectorAll(".count-button_counter");
var btn = document.querySelectorAll(".count-button");
for (let i = 0; i < plusBtn.length; i++){
  plusBtn[i].onclick = function () {
    if (counterBtn[i].innerHTML < 9) {plusFunction(i);}
  };
  minusBtn[i].onclick = function () {
    if (counterBtn[i].innerHTML > 0) {minusFunction(i);}
  };
}

function plusFunction(i){
  ++counterBtn[i].innerHTML; 
  btn[i*2].style.opacity = 0.9;
  btn[(i*2)+1].style.opacity = 0.9;
} 
function minusFunction(i){
  --counterBtn[i].innerHTML;
  if (counterBtn[i].innerHTML == 0) {
    btn[i*2].style.opacity = 0.5;
    btn[(i*2)+1].style.opacity = 0.5;
  }
}

