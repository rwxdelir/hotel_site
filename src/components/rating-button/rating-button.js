var styleElem = document.head.appendChild(document.createElement('style'));
var ratingStar = document.getElementsByClassName("rating_star");
var ratingDiv = document.querySelector("rating");

if (averageRating != false) {
  let totalRating = 5;
  let starId;
  let starRule = "{color: #8BA4F9; content: '★'; position: absolute;} "; 
  /* Direction rule in scss assigned rtl (Text direction goes from right-to-left)
   * So we begin our cycle with total rating. totalRating it`s first star */
  for (let i=totalRating-1; i >= totalRating-averageRating; i--) {
    starId = "#" + ratingStar[i].id + ":before"
    styleElem.innerHTML += starId + starRule;
  }
}


