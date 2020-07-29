let drpdwnlist = document.querySelectorAll(".menu__drpdwnlist");
let menuItem = document.querySelectorAll(".menu__item");
let menu = document.querySelectorAll(".menu")[0];
for (let i=0; i < drpdwnlist.length; i++) {
  drpdwnlist[i].onclick = function() {
    showDrpdwn(i);
  }
}


function showDrpdwn(i) {
  let drpdwnContent = document.getElementsByClassName("menu__drpdwnlist__content")[i];
  let drpdwnlistEl = drpdwnContent.getElementsByClassName("menu__drpdwnlist__element");

  if (drpdwnContent.style.display == "block") {
    drpdwnContent.style.display = "none";

    if (typeof (menuItem[i]) != 'undefined' 
    && menu.style.display != "inline-flex"){ 
      drpdwnContent.parentElement.style.marginBottom = "0";
    }
  } else {
    drpdwnContent.style.display = "block";
    if (typeof (menuItem[i]) != 'undefined' 
    && menu.style.display != "inline-flex"){
      drpdwnContent.parentElement.style.marginBottom = 28*drpdwnlistEl.length;
    }
  }
}
