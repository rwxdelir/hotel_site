var navToggle = document.getElementsByClassName('nav__expanded')[0];
var navMenu = document.getElementsByClassName('nav__expanded_content')[0];
var tmp = document.getElementsByClassName('nav__item')[0];
var isMouseDown = false;

navToggle.addEventListener('click', function() {
    this.focus();
    navMenu.classList.toggle('nav__expanded_content-show');
    navMenu.focus();
});

navMenu.addEventListener('mousedown', function() {
    isMouseDown = true;  
});

navMenu.addEventListener('mouseup', function() {
    isMouseDown = false;  
});

navMenu.addEventListener('mouseleave', function() {
    isMouseDown = false;  
});



navMenu.addEventListener('blur', function() {
  navMenu.classList.remove('nav__expanded_content-show');
  //    if (!isMouseDown) {
  //        navMenu.classList.remove('nav__expanded_content-show');
    //    }
}, true);
