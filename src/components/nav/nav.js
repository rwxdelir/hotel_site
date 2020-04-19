var expandedItem = document.querySelectorAll(".nav__expanded");
for (let i = 0; i < expandedItem.length; i++) {
  expandedItem[i].onclick = function () {myFunction(i)};
}

function myFunction(i) {
  document.querySelectorAll(".nav__expanded_content")[i].classList.toggle("nav__expanded_content-show");
  document.querySelectorAll(".nav__item_arrow")[i].classList.toggle("nav__item_arrow-active");
  dropdownClose(i);
}

function dropdownClose(i) {
  window.onclick = function(e) {
    if (!e.target.matches(".nav__expanded")) {
      for(let i = 0; i < expandedItem.length; i++){
      var myDropdown = document.querySelectorAll(".nav__expanded_content")[i];
      var myDropdownArrow = document.querySelectorAll(".nav__item_arrow")[i];
        if (myDropdown.classList.contains("nav__expanded_content-show")) {
            myDropdown.classList.remove("nav__expanded_content-show");
            myDropdownArrow.classList.remove("nav__item_arrow-active");
        }
      }
    }
  }
  event.stopPropagation();
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function showMenu() {
    var nav = document.querySelector(".nav");
    var homeIconShow = document.querySelector(".nav__home-show");
    var homeIconHide = document.querySelector(".nav__home-hide");

    var logoIcon = document.querySelector(".logo");
    if (nav.className === "nav header_nav") {
      nav.className += " responsive";
      homeIconShow.className = "nav__home-hide";
    } else {
      nav.className = "nav header_nav";
      homeIconHide.className = "nav__home-show nav__item_selected";
    }
}
