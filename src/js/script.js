const button = document.querySelector(".whatsapp-button");
const navbar = document.querySelector(".floatingButtonNav");

button.addEventListener('click', function() {
  if (navbar.style.display === "block"){
    navbar.style.display = "none";
  }else {
    navbar.style.display = "block";
  }
});