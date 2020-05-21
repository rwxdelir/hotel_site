var checkboxInput = document.querySelectorAll(".checkbox-input")
var checkboxTitle = document.querySelectorAll(".checkbox-title")
var checkboxItem = document.querySelectorAll(".checkbox-item")
var checkboxArrow = document.querySelectorAll(".checkbox--arrow")
var checkmark = document.querySelectorAll(".checkbox-icon")

console.log(checkboxItem )

for (let i = 0; i < checkboxInput.length; i++) {
  checkboxInput[i].addEventListener('change', function(){
    if (checkboxInput[i].checked) {
      checkmark[i].style.display = "block";
    } else {
      checkmark[i].style.display = "none";
    } 
  });
  checkboxTitle[i].addEventListener('click', function() {
    checkboxItem[i].style.display = "block";
  });
}

for (let i = 0; i < checkboxTitle.length; i++) {
  checkboxTitle[i].addEventListener('click', function() {
    checkboxItem[i].style.display = "block";
  });
}