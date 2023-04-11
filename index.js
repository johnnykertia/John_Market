let searchForm = document.querySelector(".search-form");
let shoppingCart = document.querySelector(".shopping-cart");
let loginBtn = document.querySelector(".login-form");
let MenuBars = document.querySelector(".navbar");

document.querySelector("#search-btn").onclick = () => {
  loginBtn.classList.remove("active");
  shoppingCart.classList.remove("active");
  MenuBars.classList.remove("active");
  searchForm.classList.toggle("active");
};
document.querySelector("#cart-btn").onclick = () => {
  searchForm.classList.remove("active");
  loginBtn.classList.remove("active");
  MenuBars.classList.remove("active");
  shoppingCart.classList.toggle("active");
};
document.querySelector("#login-btn").onclick = () => {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  MenuBars.classList.remove("active");
  loginBtn.classList.toggle("active");
};
document.querySelector("#menu-bars").onclick = () => {
  searchForm.classList.remove("active");
  loginBtn.classList.remove("active");
  shoppingCart.classList.remove("active");
  MenuBars.classList.toggle("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");
  loginBtn.classList.remove("active");
  shoppingCart.classList.remove("active");
  MenuBars.classList.remove("active");
};

var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  centerSlides: true,
  breakpoints: {
    "0": {
      slidesPerView: 1,
    },
    "768": {
      slidesPerView: 2,
    },
    "1020": {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  centerSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
