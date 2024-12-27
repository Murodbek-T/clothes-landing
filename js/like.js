const likeButton = document.querySelectorAll(".like");
likeButton.forEach((button) => {
  button.addEventListener("click", () => {
    button.setAttribute("src", "./src/like.png");
  });
});
