import "./count-button.scss";

var plusBtn = document.querySelectorAll(".count-button_plus");
var minusBtn = document.querySelectorAll(".count-button_minus");
var countBtn = document.querySelectorAll(".count-button_counter");
for (let i = 0; i < plusBtn.length; i++){
  plusBtn[i].onclick = function () {
    if (countBtn[i].innerHTML < 9) {plusFunction(i);}
  };
  minusBtn[i].onclick = function () {
    if (countBtn[i].innerHTML > 0) {minusFunction(i);}
  };
}

function plusFunction(i){++countBtn[i].innerHTML;} 
function minusFunction(i){--countBtn[i].innerHTML;}

