let rating = document.querySelectorAll(".rating");
let ratingStar = document.querySelectorAll(".rating_star");
let ratingDisabled = document.querySelectorAll(".rating_disabled");

let maxRating = 5; // Maximum able rating

for (var i = 0; i < rating.length; i++) {
  /* Average rating defined */
  if (rating[i].classList[1] == "rating_disabled") { 
    evaluateRating(parseInt(rating[i].nextElementSibling.innerHTML), i);
  } 
  /* Average rating undefiend and defiend dynamically on click */
  else {
    for (let i = 0; i < ratingStar.length; i++) {
      let avrg = Math.floor(maxRating-i%5);
      let id = Math.floor(i/5);
      ratingStar[i].onclick = function() { 
        evaluateRating(avrg, id);
        rating[id].classList.add("rating_disabled");
      }
    }
  }
} 

/* This function assign average rating to rating form */
function evaluateRating(avrg, ratingId) {
  /*Direction rule in scss assigned rtl (Text direction goes from right-to-left)
  So maxRating-1 it`s first star in the display*/
  for (let i = maxRating-avrg; i <= 4; i++) {
    rating[ratingId].childNodes[i].innerHTML = "★";
  }
}



