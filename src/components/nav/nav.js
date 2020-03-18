var expandedItem = document.querySelector(".nav__expanded");
expandedItem.onclick = function () {myFunction()};

function myFunction() {
  document.querySelector(".nav__expanded_content").classList.toggle("nav__expanded_content-show");
  document.querySelector(".nav__item_arrow").classList.toggle("nav__item_arrow-active");
  dropdownClose();
}

function dropdownClose() {
  window.onclick = function(e) {
    if (!e.target.matches(".nav__expanded")) {
    var myDropdown = document.querySelector(".nav__expanded_content");
    var myDropdownArrow = document.querySelector(".nav__item_arrow");
      if (myDropdown.classList.contains("nav__expanded_content-show")) {
        myDropdown.classList.remove("nav__expanded_content-show");
        myDropdownArrow.classList.remove("nav__item_arrow-active");
      }
    }
  }
  event.stopPropagation();
}

