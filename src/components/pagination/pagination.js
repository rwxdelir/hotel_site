var pagination = document.querySelector(".pagination");

var amountObj = 180;
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

hidePages(0, 14)
/* Responds on click to pages */
for (let i = 0; i < paginationLink.length; i++) {
  paginationLink[i].onclick = function () {
    hidePages(0, 14)
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
    } else if (i >= 4 && i < paginationLink.length-4) {
      separatePage[0].style.display = "inline-block";
      showPages(0, 1)
      showPages(i-1, i+2)
    } else {
      showPages(0,1);
      showPages(paginationLink.length - 5, paginationLink.length)
      separatePage[0].style.display = "inline-block";
      if (i > paginationLink.length - 4) {
        hidePages(paginationLink.length - 6, paginationLink.length - 4);
      }
    } 
    
    if (i >= paginationLink.length-4 && i > 4) {
      separatePage[1].style.display = "none";

    } else {
      separatePage[1].style.display = "inline-block";
    }
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