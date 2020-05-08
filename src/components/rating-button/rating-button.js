var styleElem = document.head.appendChild(document.createElement('style'));
var ratingStar = document.getElementsByClassName("rating_star");
var ratingDiv = document.querySelector(".rating");

let totalRating = 5;
let starRule = "{color: #8BA4F9; content: '★'; position: absolute;}"; 
let starId;
if (averageRating != false && averageRating <= totalRating) {
   /* Direction rule in scss assigned rtl (Text direction goes from right-to-left)
   * So we begin our cycle with total rating. totalRating-1 it`s first star, 0 - last */
  for (let i=totalRating-1; i >= totalRating-averageRating; i--) {
    starId = "#" + ratingStar[i].id + ":before"
    styleElem.innerHTML += starId + starRule;
  }
  /* when evaluated done we disable hover of class "rating" */
  ratingDiv.classList.add("rating_disabled");
} else {
  for (let j = 0; j < ratingStar.length; j++){ 
    ratingStar[j].onclick = function(){ myFunction(j);};
  }
  function myFunction(average) {
    for (let i = totalRating-1; i >= totalRating-(totalRating-average); i--) {
      starId = "#" + ratingStar[i].id + ":before"
      styleElem.innerHTML += starId + starRule;
    }
    /* if evaluated done we disable hover of class "rating" */
    ratingDiv.classList.add("rating_disabled");
  }
}




