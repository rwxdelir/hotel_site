import cards from './cards.js'
//import search from './../../components/pagination/pagination.js'

var retrievedCards = JSON.parse(localStorage.getItem('currentCards'));

var cost = window.localStorage.getItem("roomcost");  
var num = window.localStorage.getItem("vOneLocalStorage");  
var roomCost = cost;
var roomNum = num;  
let currentRoom;

console.log(retrievedCards)
console.log(roomCost + " " + roomNum)
for (let i = 0; i < retrievedCards.length; i++) {
  if (retrievedCards[i].number == roomNum) {
    console.log("dsa " + retrievedCards[i].cost)
    if (retrievedCards[i].cost == roomCost) {
      console.log("YES")
      currentRoom = retrievedCards[i];
    }
  }
}
console.log(currentRoom)

let imgFirst = document.querySelector(".details-collage-firstimg");
let imgSecond = document.querySelector(".details-collage-secondimg");
let imgThird = document.querySelector(".details-collage-thirdimg");
imgFirst.src = currentRoom.firstImg;
imgSecond.src = currentRoom.secondImg;
imgThird.src = currentRoom.thirdImg;
console.log(currentRoom);
console.log(retrievedCards);
