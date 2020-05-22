var checkboxInput = document.querySelectorAll(".checkbox-input")
var checkmark = document.querySelectorAll(".checkbox-icon")

/* Keep track of checkmarks and responds on changes */
for (let i = 0; i < checkboxInput.length; i++) {
  checkboxInput[i].addEventListener('change', function(){
    if (checkboxInput[i].checked) {
      checkmark[i].style.display = "block";
    } else {
      checkmark[i].style.display = "none";
    } 
  });
}
