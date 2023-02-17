// ham
const $ham = document.querySelector(".ham");
const $hd = document.querySelector(".hd");
const $gnb = document.querySelector(".gnb");

$ham.addEventListener("click", function () {
  $gnb.classList.toggle("on");
  $hd.classList.toggle("on");
});

// banner_swiper
let swiper1 = new Swiper(".swiper_banner", {
  cssMode: true,
  navigation: {
    nextEl: ".banner-button-next",
    prevEl: ".banner-button-prev",
  },
  pagination: {
    el: ".banner-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

// product_swiper
let swiper2 = new Swiper(".swiper_product", {
  cssMode: true,
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".product-button-next",
    prevEl: ".product-button-prev",
  },
  pagination: {
    el: ".product-pagination",
  },
  mousewheel: true,
  keyboard: true,

  breakpoints: {
    1350: {
      slidesPerView: 5,
      spaceBetween: 20,
      slidesPerGroup: 5,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 4,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 3,
    },
    630: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2,
    },
  },
});
