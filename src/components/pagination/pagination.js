import cards from './../../pages/search-room/cards.js'

var pagination = document.querySelector(".pagination");
var slideshow = document.querySelectorAll(".slideshow");
var roomNumber = document.querySelectorAll(".review-describe-number-digit")
var luxSign = document.querySelectorAll(".review-describe-sign");
var dayPrice = document.querySelectorAll(".review-describe-dayprice");
var recallsAmount = document.querySelectorAll(".review-describe-recallsamount")
var rating = document.querySelectorAll(".rating");
var paginationLink = document.querySelectorAll(".pagination-link");
var review = document.querySelectorAll(".review");
var nextBtn = document.querySelector(".pagination-next");
var rangeMinValue = document.querySelectorAll(".rangeslider-range-min")
var rangesliderMin = document.querySelectorAll(".min");
var checkboxInput = document.querySelectorAll(".checkbox-input");

let searchOptions = {'smoking': 1, 'animals': 1};
let searchResult = searchRoom(cards, searchOptions);

function searchRoom(cards, searchOptions) {
  let result = [];
  let rangeMin = parseInt(rangeMinValue[0].innerHTML.toString().split(" ").join(""));
  for (let i = 0; i < cards.length; i++) {
    let cost = parseInt(cards[i].cost.toString().split(" ").join(""));
    if (parseInt(cost) >= parseInt(rangeMin)) { 
      result.push(cards[i])
    } 
  } 
  
  let garbage = [];
  for (let i = 0; i < Object.keys(searchOptions).length; i++) {
    if (searchOptions[Object.keys(searchOptions)[i]] == true) {
      for (let j = 0; j < result.length; j++) {
        if (result[j][Object.keys(searchOptions)[i]] = 1) {
          garbage.push(j);
       }
      }
    }
  }
  for (let i = 0; i < garbage.length; i++) {
    console.log(result[garbage[i]])
    result.splice([garbage[i]], 1)
  }

  console.log(result)
  return result;
}

checkboxInput[0].onclick = function () {
  if (!searchOptions.smoking) {
    searchOptions.smoking = 1;
  } else {
    searchOptions.smoking = 1;
  }
  createPagination(searchRoom(cards, searchOptions));
}

checkboxInput[1].onclick = function () {
  if (!searchOptions.animals) {
    searchOptions.animals = true;
  } else {
    searchOptions.animals = false;
  }
  createPagination(searchRoom(cards, searchOptions));
}

rangesliderMin[0].addEventListener("change", function () {
  createPagination(searchRoom(searchResult, searchOptions))
  searchResult = searchRoom(cards, searchOptions);
})

var amountObj;
let currentIndex = 0;
function createPagination(searchResult) {
  if (typeof(pagination) != 'undefiend') {
    while (pagination.firstChild) {
      pagination.removeChild(pagination.lastChild);
    }
  } 
  // searchResult = searchRoom(myObj);
  amountObj = searchResult.length;
  initializePages(amountObj);
  
  var paginationLink = document.querySelectorAll(".pagination-link");
  var seaparatePages = document.querySelectorAll(".pagination-separatepage")
  
  currentPage(0);
  hidePages(3, paginationLink.length-1)
  showCards(0, searchResult);
  variationsOfRent(0);
  alignPagination();

  /* Responds on click to pages */
  for (let i = 0; i < paginationLink.length; i++) {
    if (paginationLink.length <= 7) {
      showPages(0, paginationLink.length-1)
      paginationLink[i].onclick = function () {
        showCards(i*12, searchResult);
        currentPage(i);
        variationsOfRent(i);
        currentIndex = i;
      } 
      nextBtn.onclick = function () {
        showCards((currentIndex+1)*12, searchResult);
        currentPage(currentIndex + 1);
        variationsOfRent(currentIndex + 1);
        currentIndex += 1;
      }
    } else {
      seaparatePages[1].style.display = "inline-block"
      paginationLink[i].onclick = function () {
        nextPage(i);
        variationsOfRent(i);
      }
      nextBtn.onclick = function () {
        var paginationLink = document.querySelectorAll(".pagination-link");
        if (currentIndex != paginationLink.length-1) {
          currentIndex += 1;
          nextPage(currentIndex);
          variationsOfRent(currentIndex);
        } 
      }
    }
  }
}

createPagination(searchResult)

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
  var paginationLink = document.querySelectorAll(".pagination-link");
  document.querySelector(".pagination-next").style.display = "inline-block";
  if (paginationLink.length > 7) {
    // Creates separating pages and hide them
    let separateStart = document.createElement("a");
    let separateEnd = document.createElement("a");

    separateStart.innerHTML = "...";
    separateEnd.innerHTML = "...";

    separateStart.className = "pagination-separatepage";
    separateEnd.className = "pagination-separatepage";    

    paginationLink[0].after(separateStart);
    paginationLink[paginationLink.length-1].before(separateEnd);

    var seaparatePages = document.querySelectorAll(".pagination-separatepage")
    seaparatePages[0].style.display = "none";
    seaparatePages[1].style.display = "none"
  } 
  
  // Creates pagination text 
  let text = document.createElement("p")
  text.className = "pagination-text";
  pagination.appendChild(text);
  
  if (paginationLink.length <= 1) {
    document.querySelector(".pagination-next").style.display = "none";
  }
}

/* Function markes current page */
function currentPage(pageIndex) {
  var paginationLink = document.querySelectorAll(".pagination-link");
  for (let i = 0; i < paginationLink.length; i++) {
    if (paginationLink[i].classList.contains("active")) {
      paginationLink[i].classList.remove("active");
    }
  }
  paginationLink[pageIndex].classList.add("active");
}

function variationsOfRent(i) {
  var paginationText = document.querySelector(".pagination-text");
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
  var seaparatePages = document.querySelectorAll(".pagination-separatepage")
  var paginationLink = document.querySelectorAll(".pagination-link");

  currentIndex = i;
  hidePages(0, paginationLink.length-1);
  showCards(i*12, searchResult);
  showPages(0, 0);
  currentPage(i);

  if (i < 4) {
    showPages(0, 2);
    seaparatePages[0].style.display = "none";
  } else {
    seaparatePages[0].style.display = "inline-block";
  }

  if (i < paginationLink.length-1 && i > 1) {
    showPages(i, i+1);
    showPages(i-1, i);
  }
  if (i > paginationLink.length - 5) {
    showPages(paginationLink.length-3, paginationLink.length-1)
    seaparatePages[1].style.display = "none";
  } else {
    seaparatePages[1].style.display = "inline-block";
  }

  alignPagination()
}

/* Align pagination */
function alignPagination() {
  var paginationLink = document.querySelectorAll(".pagination-link")
  let displayCounter = 0;
  for (let j = 0; j < paginationLink.length; j++) {
    if (paginationLink[j].style.display != "none") {
      ++displayCounter;
    }
  }

  if (paginationLink.length > 7) {
    if (displayCounter == 4) {
      document.querySelectorAll(".pagination")[0].style.marginLeft = "20px";
    } else if (displayCounter == 5) {
      document.querySelectorAll(".pagination")[0].style.marginLeft = "5px";
      document.querySelectorAll(".pagination-next")[0].style.marginRight = "50px";
    } else if (displayCounter == 6) {
      document.querySelectorAll(".pagination")[0].style.marginLeft = "-12px";
      document.querySelectorAll(".pagination-next")[0].style.marginRight = "50px";
    }
  } else {
    if (paginationLink.length == 7) {
      document.querySelectorAll(".pagination")[0].style.marginLeft = "-24px";
      document.querySelectorAll(".pagination-next")[0].style.marginRight = "50px";
    } else if (paginationLink.length == 6) {
      document.querySelectorAll(".pagination")[0].style.marginLeft = "-12px";
      document.querySelectorAll(".pagination-next")[0].style.marginRight = "50px";
    } 
    else if (paginationLink.length == 5) {
      document.querySelectorAll(".pagination")[0].style.marginLeft = "5px";
      document.querySelectorAll(".pagination-next")[0].style.marginRight = "50px";
    } else if (paginationLink.length == 4) {
      document.querySelectorAll(".pagination")[0].style.marginLeft = "18px";
      document.querySelectorAll(".pagination-next")[0].style.marginRight = "50px";
    } else if (paginationLink.length == 3) {
      document.querySelectorAll(".pagination")[0].style.marginLeft = "30px";
    } else if (paginationLink.length == 2) {
      document.querySelectorAll(".pagination")[0].style.marginLeft = "50px";
    } else {
      document.querySelectorAll(".pagination")[0].style.marginLeft = "100px";
    }
  }
}

/* Hides pages */
function hidePages(startIndex, endIndex) {
  var paginationLink = document.querySelectorAll(".pagination-link");
  for (let i = startIndex; i < endIndex; i++) {
    paginationLink[i].style.display = "none";
  }
}

/* Shows pages */
function showPages(startIndex, endIndex) {
  var paginationLink = document.querySelectorAll(".pagination-link");
  for (let i = startIndex; i <= endIndex; i++) {
    paginationLink[i].style.display = "inline-block";
  }
}

let amountOfCards = amountObj;

function showCards(startIndex, searchResult) {
  let cardIndex = startIndex;
  for (let i = 0; i < 12; i++) {
    cardIndex = startIndex + i;  
    if (typeof searchResult[cardIndex] != 'undefined') {
      slideshow[i].getElementsByClassName("slideshow-slide-img")[0].setAttribute("src", searchResult[cardIndex].firstImg); 
      slideshow[i].getElementsByClassName("slideshow-slide-img")[1].setAttribute("src", searchResult[cardIndex].secondImg); 
      slideshow[i].getElementsByClassName("slideshow-slide-img")[2].setAttribute("src", searchResult[cardIndex].thirdImg);
      slideshow[i].getElementsByClassName("slideshow-slide-img")[3].setAttribute("src", searchResult[cardIndex].fourthImg);

      roomNumber[i].innerHTML = searchResult[cardIndex].number;
      luxSign[i].style.display = (searchResult[cardIndex].lux == true) ? "block" : "none";
      dayPrice[i].innerHTML = searchResult[cardIndex].cost;
      recallsAmount[i].innerHTML = searchResult[cardIndex].recalls;
      
      for (let j = 0; j <= searchResult[cardIndex].rating-1; j++) {
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

