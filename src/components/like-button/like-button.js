let likeInput = document.querySelectorAll(".like");
let likeLabel = document.querySelectorAll(".like-icon");
let likeCounter = document.querySelectorAll(".like-counter");
let likeCondition = document.querySelectorAll(".like-condition");

for (let i = 0; i < likeInput.length; i++) {
  likeLabel[i].innerHTML = "favorite_border";
}
for (let i = 0; i < likeInput.length; i++) {
  likeInput[i].addEventListener('change', function(){
    if (likeInput[i].checked) {
      /* Change icon */
      likeLabel[i].innerHTML = "favorite";
      likeLabel[i].classList.add("like-icon-favorite")
      /* Disable like btn */
      likeInput[i].disabled = true; 
      /* Increment and digit color */
      ++likeCounter[i].innerHTML; 
      likeCounter[i].style.color = "#BC9CFF"
    } else {
      likeLabel[i].innerHTML = "favorite_border";
      likeLabel[i].classList.remove("like-icon-favorite")
    } 
  });
}

