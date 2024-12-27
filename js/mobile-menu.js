// Get the back button element
const backButton = document.getElementById("backButton");
const menuOpen = document.querySelector(".menu");
const menu = document.querySelector(".mobile-nav");

menuOpen.addEventListener("click", () => {
  menu.style.display = "block";
});
backButton.addEventListener("click", () => {
  menu.style.display = "none";
});
