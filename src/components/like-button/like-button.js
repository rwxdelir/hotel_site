let likeInput = document.querySelector(".like");
let likeLabel = document.querySelector(".like-icon");
let likeCounter = document.querySelector(".like-counter");
let likeCondition = document.querySelectorAll(".like-condition");

likeInput.addEventListener('change', function(){
  if (likeInput.checked) {
    /* Change icon */
    likeLabel.innerHTML = "favorite";
    likeLabel.classList.add("like-icon-favorite")
    /* Disable like btn */
    likeInput.disabled = true; 
    /* Increment and digit color */
    ++likeCounter.innerHTML; 
    likeCounter.style.color = "#BC9CFF"
  } else {
    likeLabel.innerHTML = "favorite_border";
    likeLabel.classList.remove("like-icon-favorite")
  } 
});



