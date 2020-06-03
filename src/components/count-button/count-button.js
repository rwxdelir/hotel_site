var plusBtn = document.querySelectorAll(".count-button_plus");
var minusBtn = document.querySelectorAll(".count-button_minus");
var counterBtn = document.querySelectorAll(".count-button_counter");
var eraseBtn = document.querySelectorAll(".dropdown_button-erase")
var btn = document.querySelectorAll(".count-button");

for (let i = 0; i < plusBtn.length; i++){
  plusBtn[i].onclick = function () {
    if (counterBtn[i].innerHTML < 9) {plusFunction(i);}
    eraseButton(i);
  };

  
  minusBtn[i].onclick = function () {
    if (counterBtn[i].innerHTML > 0) {minusFunction(i);}
    eraseButton(i);
  };

}

for (let i = 0; i < eraseBtn.length; i++) {
  eraseBtn[i].onclick = function () {
    if (i != 0) {
      for (let j = i*3; j < (i+1)*3; j++) {  
        counterBtn[j].innerHTML = 0;
      }
    } else {
      for (let j = 0; j <= 2; j++) {  
        counterBtn[j].innerHTML = 0;
      }
    }  
      eraseBtn[i].style.display = "none";
  };
}

var sum = 0;
function plusFunction(i){
  ++counterBtn[i].innerHTML; 
  btn[i*2].style.opacity = 0.9;
  btn[(i*2)+1].style.opacity = 0.9;
  ++sum;
} 
function minusFunction(i){
  --counterBtn[i].innerHTML;
  --sum;
  if (counterBtn[i].innerHTML == 0) {
    btn[i*2].style.opacity = 0.5;
    btn[(i*2)+1].style.opacity = 0.5;
  }
}


function eraseButton(i) {
  let index = Math.floor(i/3);
  
  if (sum >= 1) {
    eraseBtn[index].style.display = "block";
  } else {
    eraseBtn[index].style.display = "none";
  }
}
