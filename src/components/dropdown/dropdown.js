let drpdwn = document.querySelectorAll(".dropdown");
let drpdwnCounter = document.querySelectorAll(".dropdown-counter");
let drpdwnBtnAmount = document.querySelectorAll(".dropdown-counter--amount");
let drpdwnBtn = document.querySelectorAll(".dropdown-button")
let drpdwnBtnTitle = document.querySelectorAll(".dropdown-button--title")
let drpdwnItemName = document.querySelectorAll(".dropdown-content--itemname")

let sumOfCounters = new Array(drpdwn.length).fill(0);

for (let i = 0; i < drpdwnCounter.length; i++) {
  let drpdwnIndex = Math.floor(i/3);
  let btnPlus = drpdwnCounter[i].getElementsByClassName("dropdown-counter--btnplus");
  let btnMinus = drpdwnCounter[i].getElementsByClassName("dropdown-counter--btnminus");
  let btnErase = drpdwn[drpdwnIndex].getElementsByClassName("dropdown-textbtn-erase");
  let btnApply = drpdwn[drpdwnIndex].getElementsByClassName("dropdown-textbtn-apply");
  
  btnPlus[0].addEventListener("click",function(){
    if (drpdwnBtnAmount[i].innerHTML < 9) {
      ++drpdwnBtnAmount[i].innerHTML;    
      sumOfCounters[drpdwnIndex] += 1;
    }
    if (sumOfCounters[drpdwnIndex] > 0) {
      btnErase[0].style.display = "block";
    }
  })
  btnMinus[0].addEventListener("click",function(){
    if (drpdwnBtnAmount[i].innerHTML > 0) {
      --drpdwnBtnAmount[i].innerHTML;
      sumOfCounters[drpdwnIndex] -= 1;
    }
    if (sumOfCounters[drpdwnIndex] == 0) {
      eraseCounters(drpdwnIndex);
      btnErase[0].style.display = "none";
    }
  })  
}

for (let i = 0; i < drpdwn.length; i++) {
  let btnErase = drpdwn[i].getElementsByClassName("dropdown-textbtn-erase");
  let btnApply = drpdwn[i].getElementsByClassName("dropdown-textbtn-apply");
  btnErase[0].addEventListener("click",function(){
    eraseCounters(i);
    btnErase[0].style.display = "none";
  })
  btnApply[0].addEventListener("click",function(){
    drpdwnBtnTitle[i].innerText = applyCounters(i);
  })
}

function eraseCounters(drpdwnIndex) {
  let amount = drpdwn[drpdwnIndex].getElementsByClassName("dropdown-counter--amount");  
  for (let i = 0; i < amount.length; i++) {
    amount[i].innerHTML = "0"; 
  }
  if (drpdwn[drpdwnIndex].classList.contains("dropdown-guests")) {
    drpdwnBtnTitle[drpdwnIndex].innerText = "Сколько гостей";
  } else if (drpdwn[drpdwnIndex].classList.contains("dropdown-comfort")) {
    drpdwnBtnTitle[drpdwnIndex].innerText = "Выберите удобства";
  }

  sumOfCounters[drpdwnIndex] = 0;
}

function applyCounters(drpdwnIndex) {
  let itemName = drpdwn[drpdwnIndex].getElementsByClassName("dropdown-content--itemname");
  let amount = drpdwn[drpdwnIndex].getElementsByClassName("dropdown-counter--amount");

  let counterList = [];
  for (let i = 0; i < amount.length; i++) {
    counterList.push(parseInt(amount[i].innerHTML));
  }

  /* Spell checking for dropdown-guest */
  if (drpdwn[drpdwnIndex].classList.contains("dropdown-guests")) {
    /* If among guests doesn't presense adulthood people */
    if (counterList[0] == 0) {
      return "Сколько гостей";
    }
    var amountGuests = counterList[0] + counterList[1];
    if (parseInt(amountGuests) > 0) {
      let num = amountGuests;
      amountGuests += (num == 1) ? " гость" : (num < 5) ? " гостя" : (num > 4) ? " гостей" : "";
    }
    if (counterList[2] != 0) {
      let num = counterList[2];
      amountGuests +=  ", " + counterList[2];
      amountGuests += (num == 1) ? " младенец" : (num < 5) ? " младенеца" : (num > 4) ? " младенцев" : "";
    }       
    return amountGuests;  
  }

  /* Spell checking for dropdown-comfort */ 
  else if (drpdwn[drpdwnIndex].classList.contains("dropdown-comfort")) {
    /* If among guests doesn't presense adulthood people */
    if (counterList[0] == 0 || counterList[1] == 0 || counterList[2] == 0) {
      return "Выберите удобства";
    }
    let amountBedrooms = counterList[0];
    let amountBeds = counterList[1];
    let amountBathrooms = counterList[2];

    if (parseInt(amountBedrooms) > 0) {
      let num = amountBedrooms;
      amountBedrooms += (num == 1) ? " спальня" : (num < 5) ? " спальни" : (num >= 5) ? " спален" : "";
    }
    if (parseInt(amountBeds) > 0) {
      let num = amountBeds;
      amountBeds += (num == 1) ? " кровать" : (num < 5) ? " кровати" : (num >= 5) ? " кроватей" : "";
    }
    return amountBedrooms + ", " + amountBeds + "...";
  }

  return drpdwnBtnTitle[drpdwnIndex].innerText;
}