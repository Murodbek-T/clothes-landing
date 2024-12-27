const categories = [
  {
    title: "Футболки",
    img: "./src/tshirt.png",
  },
  {
    title: "Худи",
    img: "./src/hoodie.png",
  },
  {
    title: "Свитшоты",
    img: "./src/sweetshot.png",
  },
  {
    title: "Лонгсливы",
    img: "./src/longsliw.png",
  },
  {
    title: "Рубашки",
    img: "./src/rubashka.png",
  },
  {
    title: "Свитера",
    img: "./src/sweeter.png",
  },
  {
    title: "Джинсы",
    img: "./src/jeans.png",
  },
  {
    title: "Штаны",
    img: "./src/shtani.png",
  },
];

const section = document.querySelector("section");

categories.forEach((item) => {
  section.innerHTML += `
    <a href="#">
        <div class="categoryLink">
          <div class="img_wrapper">
            <img src=${item.img} alt="" />
          </div>
          <p>${item.title}</p>
        </div>
      </a>
    `;
});
