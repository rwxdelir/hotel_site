let likeInput = document.querySelectorAll(".like");
let likeLabel = document.querySelectorAll(".like-icon");
let likeCounter = document.querySelectorAll(".like-counter");
let likeCondition = document.querySelectorAll(".like-condition");



for (let i = 0; i < likeInput.length; i++) {
  likeLabel[i].innerHTML = "favorite_border";
}

for (let i = 0; i < likeInput.length; i++) {
  /* like input already checked */
  if (likeInput[i].checked) {
    likeColored(i);
  }
  /* Like input doesn`t checked yet but can be */
  likeInput[i].addEventListener('change', function(){
    if (likeInput[i].checked) {
      likeColored(i);
      /* Increment like counter */
      ++likeCounter[i].innerHTML; 
    } else {
      likeLabel[i].innerHTML = "favorite_border";
      likeLabel[i].classList.remove("like-icon-favorite")
    } 
  });
}

/* Make like input checked */
function likeColored(i) {
  /* Change icon */
  likeLabel[i].innerHTML = "favorite";
  likeLabel[i].classList.add("like-icon-favorite")
  /* Disable like btn */
  likeInput[i].disabled = true;  
  likeCounter[i].style.color = "#BC9CFF"
}
