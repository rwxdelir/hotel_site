var x = document.querySelector(".nav__expanded");
x.onclick = function () {myFunction()};

function myFunction() {
  document.querySelector(".nav__expanded_content").classList.toggle("nav__expanded_content-show");
  dropdownClose();
}

function dropdownClose() {
  window.onclick = function(e) {
    if (!e.target.matches(".nav__expanded")) {
    var myDropdown = document.querySelector(".nav__expanded_content");
      if (myDropdown.classList.contains("nav__expanded_content-show")) {
        myDropdown.classList.remove("nav__expanded_content-show");
      }
    }
  }
  event.stopPropagation();
}

