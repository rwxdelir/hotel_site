var checkboxTitle = document.querySelectorAll(".checkbox-list-title")
var checkboxArrow = document.querySelectorAll(".checkbox-list--arrow")
var listContainer = document.querySelectorAll(".checkbox-list-container")

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
