var checkboxInput = document.querySelectorAll(".checkbox-input")
var checkboxTitle = document.querySelectorAll(".checkbox-title")
var checkboxArrow = document.querySelectorAll(".checkbox--arrow")
var checkmark = document.querySelectorAll(".checkbox-icon")
var listContainer = document.querySelectorAll(".checkbox-list-container")

/* Keep track of checkmarks and responds on changes */
for (let i = 0; i < checkboxInput.length; i++) {
  checkboxInput[i].addEventListener('change', function(){
    if (checkboxInput[i].checked) {
      checkmark[i].style.display = "block";
    } else {
      checkmark[i].style.display = "none";
    } 
  });
}

/* Adds onclick into titles and assign container style to block */
for (let i = 0; i < listContainer.length; i++) {
  checkboxTitle[i].onclick = function() {listToggle(i)};
  listContainer[i].style.display = "block";
}

function listToggle(i) {
  if (listContainer[i].style.display == "block") {
    listContainer[i].style.display = "none";
    checkboxArrow[i].style.transform = "rotate(180deg)";
    checkboxArrow[i].style.top = "5";

  } else {
    listContainer[i].style.display = "block";
    checkboxArrow[i].style.transform = "rotate(0deg)";
    checkboxArrow[i].style.top = "-2.6";
  }
}
