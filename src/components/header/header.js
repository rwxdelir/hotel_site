var btnLogin = document.querySelector(".header_button-login");
var btnRegister = document.querySelector(".header_button-register");
var header = document.querySelector(".header");
btnLogin.onclick = function () {signin()};

function signin() {
  btnLogin.remove();
  btnRegister.remove();
  
  header.className += " header_login";
}
