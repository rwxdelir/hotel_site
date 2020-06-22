var checkboxTitle = document.querySelectorAll(".checkbox-list-title")
var checkboxArrow = document.querySelectorAll(".checkbox-list--arrow")
var listContainer = document.querySelectorAll(".checkbox-expanded-content")

/* Adds onclick into titles and assign container style to block */
for (let i = 0; i < listContainer.length; i++) {
  checkboxTitle[i].onclick = function() {listToggle(i)};
}

function listToggle(i) {
  if (listContainer[i].style.display == "block") {
    listContainer[i].style.display = "none";
    checkboxArrow[i].innerHTML = "keyboard_arrow_down"

  } else {
    listContainer[i].style.display = "block";
    checkboxArrow[i].innerHTML = "keyboard_arrow_up"
  }
}

