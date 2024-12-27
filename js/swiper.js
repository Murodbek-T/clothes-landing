const swiper = new Swiper(".swiper-1", {
  // Optional parameters
  loop: true,
  slidesPerView: 4,
  spaceBetween: 50,

  // If we need pagination
  pagination: {
    el: ".actions .pagination",
    clickable: true,
    renderFraction: function (currentClass, totalClass) {
      return `<span class="${currentClass}"></span>/<span class="${totalClass}"></span>`;
    },
  },

  on: {
    slideChange: function () {
      updateSecondPagination(this);
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".actions .button-next",
    prevEl: ".actions .button-prev",
  },

  breakpoints: {
    420: {
      slidesPerView: 4,
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});

const swiper2 = new Swiper(".swiper2", {
  // Optional parameters
  loop: true,
  slidesPerView: 4,
  spaceBetween: 50,
  breakpoints: {
    420: {
      slidesPerView: 4,
    },
    0: {
      slidesPerView: 1,
    },
  },
});
const nestedSwiper = new Swiper(".nested-swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".nested-pagination",
    clickable: true,
  },
});

// Update Second Pagination Manually
function updateSecondPagination(swiper) {
  const currentSlide = swiper.realIndex + 1; // Current slide (1-based index)
  const totalSlides = swiper.slides.length; // Total number of slides

  // Manually update the second pagination
  const secondPagination = document.querySelector(".fraction");
  secondPagination.innerHTML = `${currentSlide} / ${totalSlides}`;
}

// Initial update for the second pagination
updateSecondPagination(swiper);

const heroSwiper = new Swiper(".heroSwiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 2,
  autoplay: {
    delay: 5000,
  },

  // If we need pagination
  pagination: {
    el: ".main-pagination",
    clickable: true,
    renderFraction: function (currentClass, totalClass) {
      return `<span class="${currentClass}"></span>/<span class="${totalClass}"></span>`;
    },
  },

  on: {
    slideChange: function () {
      updateThirdPagination(this);
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".main-button-next",
    prevEl: ".main-button-prev",
  },

  breakpoints: {
    420: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

function updateThirdPagination(swiper) {
  const currentSlide = swiper.realIndex + 1; // Current slide (1-based index)
  const totalSlides = swiper.slides.length; // Total number of slides

  // Manually update the second pagination
  const secondPagination = document.querySelector(".main-fraction");
  secondPagination.innerHTML = `${currentSlide} / ${totalSlides}`;
}

const swiperNews = new Swiper(".news-swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 50,
  // autoplay: {
  //   delay: 3000,
  // },
  breakpoints: {
    420: {
      slidesPerView: 3,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

const cards = document.querySelectorAll(".popular_product");
cards.forEach((card) => {
  // Find the swiper instance for this specific card
  const swiperContainer = card.querySelector(".nested-swiper");
  const swiper = new Swiper(swiperContainer, {
    loop: true,
    pagination: {
      el: card.querySelector(".nested-pagination"), // Scope pagination to this card
      clickable: true,
    },
  });

  // Add hover effect for bullets inside this specific card
  const bullets = card.querySelectorAll(".swiper-pagination-bullet");
  card.addEventListener("mousemove", (event) => {
    const cardRect = card.getBoundingClientRect();
    const xPos = event.clientX - cardRect.left;
    const slideWidth = cardRect.width / bullets.length;
    const index = Math.floor(xPos / slideWidth);

    swiper.slideToLoop(index); // Navigate to the corresponding slide
  });

  card.addEventListener("mouseleave", () => {
    swiper.slideToLoop(0); // Reset to the first slide on leave
  });
});
