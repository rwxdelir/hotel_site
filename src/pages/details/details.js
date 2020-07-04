var retrievedCards = JSON.parse(localStorage.getItem('currentCards'));

var cost = window.localStorage.getItem("roomcost");  
var num = window.localStorage.getItem("vOneLocalStorage");  
var roomCost = cost;
var roomNum = num;  
let currentRoom;
let lux;

console.log(retrievedCards)
console.log(roomCost + " " + roomNum)
for (let i = 0; i < retrievedCards.length; i++) {
  if (retrievedCards[i].number == roomNum) {
    if (retrievedCards[i].cost == roomCost) {
      currentRoom = retrievedCards[i];
      lux = retrievedCards[i].lux;
    }
  }
}
console.log(currentRoom)

let imgFirst = document.querySelector(".details-collage-firstimg");
let imgSecond = document.querySelector(".details-collage-secondimg");
let imgThird = document.querySelector(".details-collage-thirdimg");
let numField = document.querySelector(".reservation_text-number-digit");
let daypriceField = document.querySelector(".reservation_text-cost b");
let luxField = document.querySelector(".reservation_button-lux");
let amountVotes = document.querySelector(".details-rating-amountvotes");
let animalsField = document.querySelectorAll(".details-bulletlist .bullet-list-item")[0];
let smokeField = document.querySelectorAll(".details-bulletlist .bullet-list-item")[1];

imgFirst.src = currentRoom.firstImg;
imgSecond.src = currentRoom.secondImg;
imgThird.src = currentRoom.thirdImg;
numField.innerHTML = roomNum;
daypriceField.innerHTML = roomCost;
luxField.style.display = (lux == false) ? "none" : "block"
animalsField.style.display = (currentRoom.animals == false) ? "none" : "block"
smokeField.style.display = (currentRoom.smoking == false) ? "none" : "block"
amountVotes.innerHTML = Math.floor(currentRoom.votes.Disappointed + currentRoom.votes.Normally + currentRoom.votes.Good + currentRoom.votes.Excellent)

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
      datasets: [{
          data: [
            Math.floor(currentRoom.votes.Disappointed), 
            Math.floor(currentRoom.votes.Normally), 
            Math.floor(currentRoom.votes.Good), 
            Math.floor(currentRoom.votes.Excellent)
          ],
          backgroundColor: [
            'rgba(78, 89, 121, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(112, 211, 164, 1)',
            'rgba(254, 225, 149, 1)',
          ]
      }],
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
        'Разочарован',
        'Удовлетворительно ',
        'Хорошо ',
        'Великолепно '
      ]
    },
  options: {
    cutoutPercentage: 90,
    legend: { display: false}
  }
});

