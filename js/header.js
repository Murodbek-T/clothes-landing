const inputWrapper = document.querySelector(".input_wrapper");
const headerSearch = document.querySelector(".header_search");
const magniButton = document.querySelector(".magni_button");
const closeButton = document.querySelector(".x_button");

magniButton.addEventListener("click", () => {
  inputWrapper.classList.toggle("unvisible");
  headerSearch.classList.toggle("unvisible");
});

closeButton.addEventListener("click", () => {
  headerSearch.value = "";
});

