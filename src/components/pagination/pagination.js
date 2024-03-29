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
var rangeMaxValue = document.querySelectorAll(".rangeslider-range-max")
var rangesliderMin = document.querySelectorAll(".min");
var rangesliderMax = document.querySelectorAll(".max");
var checkboxInput = document.querySelectorAll(".checkbox-input");
var drpdwn = document.querySelectorAll(".dropdown")

let searchOptions = {
  'smoking': 0, 'animals': 0, 'parties': 0, 
  'widehall': 0, "disabledAssistant": 0, 'widehall': 0, 
  'breakfast': 0, 'writingDesk': 0,'feedingСhair': 0,
  'crib': 0, 'television': 0, 'shampoo': 0, 'minRange': 5000, 
  'maxRange': 10000, 
  'drpdwnGuests': {'adults': 0, 'teenagers': 0, 'childs': 0, 'guests': 0, 'plchdrText': 'Сколько гостей'},
  'drpdwnComfort': {'beds': 0, 'bedrooms': 0, 'bathrooms': 0, 'plchdrText': 'Выберите удобства'}
};

if (JSON.parse(localStorage.getItem('currentSearchOpt')) != null) {
  searchOptions = JSON.parse(localStorage.getItem('currentSearchOpt'));
  let checkboxIcon = document.querySelectorAll(".checkbox-icon")
  // Make active checkboxes checked if page was refreshed
  for (let i = 0; i < 11; i++) {
    let objKey = Object.keys(searchOptions)[i]
    if (searchOptions[objKey] == 1) {
      checkboxIcon[i].style.display = "block";
    }
  }
  // Set options for dropdown-comfort
  if (searchOptions['drpdwnComfort']['beds'] != 0 
  || searchOptions['drpdwnComfort']['bedrooms'] != 0
  || searchOptions['drpdwnComfort']['bathrooms'] != 0) {
    // Change dropdown comfort title
    let drpdwnTitle = drpdwn[2].getElementsByClassName("dropdown-button--title")[0];
    drpdwnTitle.innerHTML = searchOptions['drpdwnComfort']['plchdrText']; 
    
    let cntrComfort = drpdwn[2].getElementsByClassName("dropdown-counter--amount");
    for (let w = 0; w < cntrComfort.length; w++) {
      let cntrKey = Object.keys(searchOptions["drpdwnComfort"])[w];
      cntrComfort[w].innerHTML = searchOptions['drpdwnComfort'][cntrKey];
    }
  }
  // Set options for dropdown-guests
  if (searchOptions['drpdwnGuests']['guests'] != 0 
  || searchOptions['drpdwnGuests']['childs'] != 0) {
    let drpdwnTitle = drpdwn[1].getElementsByClassName("dropdown-button--title")[0];
    drpdwnTitle.innerHTML = searchOptions['drpdwnGuests']['plchdrText']; 
    
    let cntrGuests = document.querySelectorAll(".dropdown-guests")[1].getElementsByClassName("dropdown-counter--amount");
    for (let w = 0; w < cntrGuests.length; w++) {
      let cntrKey = Object.keys(searchOptions["drpdwnGuests"])[w];
      cntrGuests[w].innerHTML = searchOptions['drpdwnGuests'][cntrKey];
    }
  }
  localStorage.removeItem('currentSearchOpt');
}

let searchResult = searchRoom(cards, searchOptions);

function searchRoom(cards, searchOptions) {
  let sortResult = [];

  for(let i = 0; i < cards.length; i++) {
    cards[i].active = true;
  }
  
  let rangeMin = searchOptions['minRange']
  let rangeMax = searchOptions['maxRange']

  for (let i = 0; i < cards.length; i++) {
    let cost = parseInt(cards[i].cost.toString().split(" ").join(""));
    if (parseInt(cost) < parseInt(rangeMin)) { 
      cards[i].active = false;
    } 
    if (parseInt(cost) > parseInt(rangeMax)) { 
      cards[i].active = false;
    } 
  }
  
  let result = [];
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].active == true) {
      result.push(cards[i]);
    }
  }  
  
  for(let i = 0; i < result.length; i++) {
    result[i].active = true;
  }

  for (let i = 0; i < Object.keys(searchOptions).length; i++) {
    if (searchOptions[Object.keys(searchOptions)[i]] == true) {
      for (let j = 0; j < result.length; j++) {
        if (result[j][Object.keys(searchOptions)[i]] == 0) {
          result[j].active = false;
        }
      }
    }
  }
  
  if (searchOptions['drpdwnGuests']['guests'] > 0) {
    let guests = searchOptions['drpdwnGuests']['guests'];
    let childs = searchOptions['drpdwnGuests']['childs'];
    for (let j = 0; j < result.length; j++) { 
      if (guests > result[j].guests) { result[j].active = false;}
      if (childs > result[j].childs) { result[j].active = false;}
    }
  }

  if (searchOptions['drpdwnComfort']['beds'] > 0) {
    let beds = searchOptions['drpdwnComfort']['beds'];
    let bedrooms = searchOptions['drpdwnComfort']['bedrooms'];
    let bathrooms = searchOptions['drpdwnComfort']['bathrooms'];
    for (let j = 0; j < result.length; j++) { 
      if (beds > result[j].beds) { result[j].active = false;}
      if (bedrooms > result[j].bedrooms) { result[j].active = false;}
      if (bathrooms > result[j].bathrooms) { result[j].active = false;}
    }
  }
  
  for (let i = 0; i < result.length; i++) {
    if (result[i].active == true) {
      sortResult.push(result[i]);
    }
  }
  
  if (sortResult.length > 0) {
    return sortResult;  
  }
  return result;
}

/* Onclick dropdown button */
for (let i = 0; i < drpdwn.length; i++) {
  let btnApply = drpdwn[i].getElementsByClassName("dropdown-textbtn-apply");
  let counterAmount = drpdwn[i].getElementsByClassName("dropdown-counter--amount"); 
  btnApply[0].onclick = function () {
    if (drpdwn[i].classList.contains("dropdown-guests")) {
      searchOptions['drpdwnGuests']['adults'] = parseInt(counterAmount[0].innerHTML);
      searchOptions['drpdwnGuests']['teenagers'] = parseInt(counterAmount[1].innerHTML);
      searchOptions['drpdwnGuests']['childs'] = parseInt(counterAmount[2].innerHTML);

      searchOptions['drpdwnGuests']['guests'] = parseInt(counterAmount[0].innerHTML) + parseInt(counterAmount[1].innerHTML);
    } else if (drpdwn[i].classList.contains("dropdown-comfort")) {
      searchOptions['drpdwnComfort']['beds'] = parseInt(counterAmount[0].innerHTML);
      searchOptions['drpdwnComfort']['bedrooms'] = parseInt(counterAmount[1].innerHTML);
      searchOptions['drpdwnComfort']['bathrooms'] = parseInt(counterAmount[2].innerHTML);
    }
    searchResult = searchRoom(cards, searchOptions);
    createPagination(searchRoom(searchResult, searchOptions))
    showCards(12, searchResult);
    currentPage(0);
    nextPage(0);
  }
}

/* Onclick checkbox button */
for (let i = 0; i < checkboxInput.length; i++) {
  let option = Object.keys(searchOptions)[i];
  checkboxInput[i].onclick = function () {
    if (!searchOptions[option]) {
      searchOptions[option] = 1;
    } else {
      searchOptions[option] = 0;
    }
    searchResult = searchRoom(cards, searchOptions);
    createPagination(searchRoom(searchResult, searchOptions))
    showCards(12, searchResult);
    currentPage(0);
    nextPage(0);
  }
}

rangesliderMin[0].addEventListener("input", function () {
  searchResult = searchRoom(cards, searchOptions);
  createPagination(searchRoom(searchResult, searchOptions))
  showCards(12, searchResult);
  currentPage(0);
  nextPage(0);
  searchOptions['minRange'] = parseInt(rangeMinValue[0].innerHTML.toString().split(" ").join(""));
})

rangesliderMax[0].addEventListener("input", function () {
  searchResult = searchRoom(cards, searchOptions);
  createPagination(searchRoom(searchResult, searchOptions))
  showCards(12, searchResult);
  currentPage(0);
  nextPage(0)
  searchOptions['maxRange'] = parseInt(rangeMaxValue[0].innerHTML.toString().split(" ").join(""));
})

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

var amountObj;

let currentIndex = 0;
if (localStorage.getItem("currentPageId") > 0) {
  currentIndex = localStorage.getItem("currentPageId");
}

function createPagination(searchResult) {
  if (typeof(pagination) != 'undefiend') {
    while (pagination.firstChild) {
      pagination.removeChild(pagination.lastChild);
    }
  } 
  amountObj = searchResult.length;
  initializePages(amountObj);
  
  var paginationLink = document.querySelectorAll(".pagination-link");
  var seaparatePages = document.querySelectorAll(".pagination-separatepage")
  
  
  currentPage(0);
  hidePages(3, paginationLink.length-1)
  showCards(currentIndex*12, searchResult);
  variationsOfRent(0);
  alignPagination();

  if (localStorage.getItem("currentPageId") != null) {
    currentPage(currentIndex);
    hidePages(3, paginationLink.length-1)
    showCards(currentIndex*12, searchResult);
    variationsOfRent(0);
    alignPagination();

    nextPage(parseInt(currentIndex)) 
    localStorage.removeItem("currentPageId");
  }
  
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
        if (i < paginationLink.length-1) {
          howCards((currentIndex+1)*12, searchResult);
          urrentPage(currentIndex + 1);
          ariationsOfRent(currentIndex + 1);
          currentIndex += 1;
        }
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

let slideLink = document.querySelectorAll(".slideshow-slide-link")

for (let i = 0; i < slideshow.length; i++) {
  let slideLink = slideshow[i].getElementsByClassName("slideshow-slide-link")
  let roomNumber = review[i].getElementsByClassName("review-describe-number-digit");
  let dayprice = review[i].getElementsByClassName("review-describe-dayprice");
  for (let j = 0; j < slideLink.length; j++) {
    slideLink[j].onclick = function () {
      // Save dropdown-comfort title
      searchOptions['drpdwnComfort']['plchdrText'] = document.querySelectorAll(".dropdown-button--title")[2].innerHTML;
      // Save dropdown-guests title 
      searchOptions['drpdwnGuests']['plchdrText'] = drpdwn[1].getElementsByClassName("dropdown-button--title")[0].innerHTML;
      

      var variableOne = roomNumber[0].innerHTML; 
      window.localStorage.setItem("vOneLocalStorage", variableOne);
    
      var roomCost = dayprice[0].innerHTML; 
      window.localStorage.setItem("roomcost", roomCost);
      var currentCards = searchRoom(cards, searchOptions);
      localStorage.setItem('currentPageId', currentIndex)
      localStorage.setItem('currentCards', JSON.stringify(currentCards))
      localStorage.setItem('currentSearchOpt', JSON.stringify(searchOptions))
    }
  }
}

var paginationLink = document.querySelectorAll(".pagination-link");

if (currentIndex > paginationLink.length - 5 && paginationLink.length > 7) {
  document.querySelectorAll(".pagination-separatepage")[1].style.display = "none";
}