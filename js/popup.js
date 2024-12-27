
const openPopupBtn = document.getElementById("open-popup");
const closePopupBtn = document.getElementById("close-popup");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const primaryBtn = document.getElementById("primary-btn");
const secondaryBtn = document.getElementById("secondary-btn");
const phoneInput = document.getElementById("phone-input");
const popupDivider = document.getElementById("popup-divider");


openPopupBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");
});


closePopupBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.add("hidden");
  }
});


secondaryBtn.addEventListener("click", () => {
  if (popupTitle.textContent === "Вход") {
    popupTitle.textContent = "Регистрация";
    primaryBtn.textContent = "ЗАРЕГИСТРИРОВАТЬСЯ";
    secondaryBtn.textContent = "ВОЙТИ";
    popupDivider.style.display = "none";
    phoneInput.style.display = "block";
  } else {
    popupTitle.textContent = "Вход";
    primaryBtn.textContent = "ВОЙТИ";
    secondaryBtn.textContent = "ЗАРЕГИСТРИРОВАТЬСЯ";
    popupDivider.style.display = "block";
    phoneInput.style.display = "block";
  }
});
