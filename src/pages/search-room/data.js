import cards from './cards.js'

let slideshow = document.querySelectorAll(".slideshow")
let slideLink = document.querySelectorAll(".slideshow-slide-link")
let review = document.querySelectorAll(".review")

for (let i = 0; i < slideshow.length; i++) {
  let slideLink = slideshow[i].getElementsByClassName("slideshow-slide-link")
  let roomNumber = review[i].getElementsByClassName("review-describe-number-digit");
  let dayprice = review[i].getElementsByClassName("review-describe-dayprice");
  for (let j = 0; j < slideLink.length; j++) {
    slideLink[j].onclick = function () {
      var variableOne = roomNumber[0].innerHTML; 
      window.localStorage.setItem("vOneLocalStorage", variableOne);
      
      var roomCost = dayprice[0].innerHTML; 
      window.localStorage.setItem("roomcost", roomCost);
      
      var currentCards = cards;
      localStorage.setItem('currentCards', JSON.stringify(currentCards))
    }
  }
}

