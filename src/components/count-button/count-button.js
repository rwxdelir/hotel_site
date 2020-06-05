var plusBtn = document.querySelectorAll(".count-button_plus");
var minusBtn = document.querySelectorAll(".count-button_minus");
var counterBtn = document.querySelectorAll(".count-button_counter");
var eraseBtn = document.querySelectorAll(".dropdown_button-erase")
var btn = document.querySelectorAll(".count-button");
var dpdwnPlaceholder = document.querySelectorAll(".dropdown-placeholder");
var applyBtn = document.querySelectorAll(".dropdown_button-apply");

for (let i = 0; i < plusBtn.length; i++){
  plusBtn[i].onclick = function () {
    if (counterBtn[i].innerHTML < 9) {plusFunction(i);}
    eraseButtonDisplay(i);
  };
  minusBtn[i].onclick = function () {
    if (counterBtn[i].innerHTML > 0) {minusFunction(i);}
    eraseButtonDisplay(i);
  };
}

var sum = [];
for (let i = 0; i < counterBtn.length; i++) {
  sum.push(0);
}

function plusFunction(i){
  ++counterBtn[i].innerHTML; 
  btn[i*2].style.opacity = 0.9;
  btn[(i*2)+1].style.opacity = 0.9;
  ++sum[Math.floor(i/3)];
} 
function minusFunction(i){
  --counterBtn[i].innerHTML;
  --sum[Math.floor(i/3)];
  if (counterBtn[i].innerHTML == 0) {
    btn[i*2].style.opacity = 0.5;
    btn[(i*2)+1].style.opacity = 0.5;
  }
}

for (let i = 0; i < eraseBtn.length; i++) {
  // Reset button on click
  eraseBtn[i].onclick = function () {
    resetFields(i);
  };
  // Show apply btn and append respond on click
  applyBtn[i].onclick = function () {
    dpdwnPlaceholder[i].innerHTML = countGuests(i);
    eraseBtn[i].style.display = "block";
  };
}

function eraseButtonDisplay(i) {
  let index = Math.floor(i/3);
  if (sum[index] >= 1) {
    eraseBtn[index].style.display = "block";
  } else {
    eraseBtn[index].style.display = "none";
    dpdwnPlaceholder[index].innerHTML = "Сколько гостей"
  }
}

function resetFields(i) {
  if (i != 0) {
    for (let j = i*3; j < (i+1)*3; j++) {  
      counterBtn[j].innerHTML = 0;
    }
  } else {
    for (let j = 0; j <= 2; j++) {  
      counterBtn[j].innerHTML = 0;
    }
  } 
  dpdwnPlaceholder[i].innerHTML = "Сколько гостей";
  eraseBtn[i].style.display = "none";
}

/* Countes amount of guests and append endings to key words */
function countGuests(i) {
  var guestsList = [];
  for (let j = i*3; j < (i+1)*3; j++) {
    guestsList.push(parseInt(counterBtn[j].innerHTML));
  }

  var amountGuests = guestsList[0] + guestsList[1];
  if (parseInt(amountGuests) > 0) {
    let num = amountGuests;
    amountGuests += (num == 1) ? " гость" : (num < 5) ? " гостя" : (num > 4) ? " гостей" : "";
  }
  if (guestsList[2] != 0) {
    let num = guestsList[2];
    amountGuests +=  ", " + guestsList[2];
    amountGuests += (num == 1) ? " младенец" : (num < 5) ? " младенеца" : (num > 4) ? " младенцев" : "";
  }
    
  /* If among guests doesn't have adulthood people */
  if (guestsList[0] == 0) {
    return "Сколько гостей";
  }
  
  return amountGuests;
}

