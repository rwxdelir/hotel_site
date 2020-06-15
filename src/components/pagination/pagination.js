import cards from './../../pages/search-room/cards.js'

console.log(cards)

var pagination = document.querySelector(".pagination");
var slideshow = document.querySelectorAll(".slideshow");
var slideEl = document.getElementsByClassName("slideshow-slide-img");
var roomNumber = document.querySelectorAll(".review-describe-number-digit")
var luxSign = document.querySelectorAll(".review-describe-sign");
var dayPrice = document.querySelectorAll(".review-describe-dayprice");
var recallsAmount = document.querySelectorAll(".review-describe-recallsamount")
var rating = document.querySelectorAll(".rating");
var paginationLink = document.querySelectorAll(".pagination-link");
var review = document.querySelectorAll(".review");
var nextBtn = document.querySelector(".pagination-next");
var paginationText = document.querySelector(".pagination-text")

var amountObj = 140;
initializePages(amountObj);

/* Function creates pages and append it to the HTML DOM */
function initializePages(amountObj) {
  let amountPages = amountObj/12;
  for (let i = 0; i < amountPages; i++) {
    let page = document.createElement("a");
    
    page.href = "#";
    page.innerHTML = i+1;
    page.className = "pagination-link";
    pagination.appendChild(page);
  }  

}

var paginationLink = document.querySelectorAll(".pagination-link");

separatePages(0, true)
separatePages(paginationLink.length-1, false)
function separatePages(pageIndex, after) {
  let separateEl = document.createElement("a");
  separateEl.innerHTML = "...";
  separateEl.className = "pagination-link pagination-separatepage";
  

  let separatePage = document.querySelectorAll(".pagination-separatepage");
  if (separatePage.length > 1) {
    separatePage[1].remove();
  }
  if (after == true)  {
    paginationLink[pageIndex].after(separateEl);
    separateEl.style.display = "none";
  } else {
    paginationLink[pageIndex].before(separateEl);
    separateEl.style.display = "inline-block";
  }
}

currentPage(0);
/* Function markes current page */
function currentPage(pageIndex) {
  for (let i = 0; i < paginationLink.length; i++) {
    if (paginationLink[i].classList.contains("active")) {
      paginationLink[i].classList.remove("active");
    }
  }
  paginationLink[pageIndex].classList.add("active");
}

hidePages(0, paginationLink.length-1)
/* Responds on click to pages */
if (paginationLink.length <= 7) {
  for (let i = 0; i < paginationLink.length; i++) {
    paginationLink[i].onclick = function () {
      showCards(i*12);
      currentPage(i);
      variationsOfRent(i);
    }
  }
  document.querySelectorAll(".pagination-separatepage")[1].style.display = "none";
  alert(paginationLink.length)
  showCards(0);
  showPages(0, paginationLink.length+1);
} else {
  for (let i = 0; i < paginationLink.length; i++) {
    paginationLink[i].onclick = function () {
      nextPage(i);
      currentIndex = i;
      variationsOfRent(i);
    }
  }
}

nextBtn.onclick = function () {
  if (currentIndex != paginationLink.length-1) {
    nextPage(currentIndex+1);
    currentIndex += 1;
  }
}

variationsOfRent(0);
function variationsOfRent(i) {
  if (i == 0) {
    paginationText.innerText = "1 – 12 из " + ((amountObj - 100 > 0) ? "100+" : amountObj) + " вариантов аренды";
  } else if (i == paginationLink.length-1) {
    paginationText.innerText = i*12 + " – " + amountObj + " из " 
    paginationText.innerText += " " + amountObj + " вариантов аренды";
  } else {
    paginationText.innerText = i*12 + " – " + (i+1) * 12 + " из " 
    paginationText.innerText += ((amountObj - 100 > 0) ? " 100+" : " " + amountObj) + " вариантов аренды";
  }
}

function nextPage(i) {
  showCards(i*12);
  console.log(i*12)
  hidePages(0, paginationLink.length-1)
  variationsOfRent(i);
  currentPage(i);
  if (i >= paginationLink.length-4) {
    showPages(paginationLink.length-4, i)
  } 
  let separatePage = document.querySelectorAll(".pagination-separatepage")
  console.log(separatePage[1]);
  if (i < 4 && i != paginationLink.length-4) {
    showPages(i, i+2);
  }
  if (i < 4) {
    showPages(0, 3)
    separatePage[0].style.display = "none";
    pagination.style.marginLeft = "7px";
    if (i == 2) {
      pagination.style.marginLeft = "-15px";
    }
    if (i == 3) {
      pagination.style.marginLeft = "-25px";
    }
  } else if (i >= 4 && i < paginationLink.length-4) {
    separatePage[0].style.display = "inline-block";
    showPages(0, 1)
    showPages(i-1, i+2)
    pagination.style.marginLeft = "-35px";
  } else {
    showPages(0,1);
    showPages(paginationLink.length - 5, paginationLink.length)
    separatePage[0].style.display = "inline-block";
    pagination.style.marginLeft = "-35px";
    if (i > paginationLink.length - 4) {
      hidePages(paginationLink.length - 6, paginationLink.length - 4);
      pagination.style.marginLeft = "-22px";
    } 
    if (i > paginationLink.length - 3) {
      hidePages(paginationLink.length - 5, paginationLink.length - 3);
      pagination.style.marginLeft = "-5px";
    }
  } 
  if (i >= paginationLink.length-4 && i > 3) {
    separatePage[1].style.display = "none";
  } else {
    separatePage[1].style.display = "inline-block";
  }
}

hidePages(0, paginationLink.length-1)
/* Hides pages */
function hidePages(startIndex, endIndex) {
  for (let i = startIndex; i < endIndex; i++) {
    paginationLink[i].style.display = "none";
  }
}

showPages(0, 3);
/* Shows pages */
function showPages(startIndex, endIndex) {
  for (let i = startIndex; i < endIndex; i++) {
    paginationLink[i].style.display = "inline-block";
  }
}

let currentIndex = 0;
showCards(currentIndex);

let amountOfCards = amountObj;
function showCards(startIndex) {
  let cardIndex = startIndex;

  for (let i = 0; i < 12; i++) {
    cardIndex = startIndex + i;  
    if (typeof cards[cardIndex] != 'undefined') {
      slideshow[i].getElementsByClassName("slideshow-slide-img")[0].setAttribute("src", cards[cardIndex].firstImg); 
      slideshow[i].getElementsByClassName("slideshow-slide-img")[1].setAttribute("src", cards[cardIndex].secondImg); 
      slideshow[i].getElementsByClassName("slideshow-slide-img")[2].setAttribute("src", cards[cardIndex].thirdImg);
      slideshow[i].getElementsByClassName("slideshow-slide-img")[3].setAttribute("src", cards[cardIndex].fourthImg);

      roomNumber[i].innerHTML = cards[cardIndex].number;
      luxSign[i].style.display = (cards[cardIndex].lux == true) ? "block" : "none";
      dayPrice[i].innerHTML = cards[cardIndex].cost;
      recallsAmount[i].innerHTML = cards[cardIndex].recalls;

      for (let j = 0; j <= cards[cardIndex].rating-1; j++) {
        rating[i].getElementsByClassName("rating_star")[j].innerHTML = '★';
        rating[i].style.direction = 'ltr';
        rating[i].style.pointerEvents = 'none';
      }
      review[i].style.display = "block";
    } else {
      review[i].style.display = "none";
    } 
  }
  amountOfCards -= 12;
  if (amountOfCards <= 0) {amountOfCards = amountObj;}
}
