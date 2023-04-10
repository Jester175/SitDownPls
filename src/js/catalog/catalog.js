document.addEventListener("DOMContentLoaded", () => {
  //Swiper
  const catalogSwiper = new Swiper(".catalog-sofa__swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 1000,
    loop: false,

    pagination: {
      el: ".swiper-pagination ",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    breakpoints: {
    },
  });

  //Slider
  const slider = document.querySelector(".price__range");
  const fromPrice = document.querySelector(".from__input");
  const toPrice = document.querySelector(".to__input");
  noUiSlider.create(slider, {
    start: [2000, 150000],
    connect: true,
    range: {
      min: 0,
      max: 200000,
    },
    step: 1,
  });
  slider.addEventListener("mousemove", () => {
    fromPrice.value = document.querySelector(".noUi-handle-lower").ariaValueNow;
    toPrice.value = document.querySelector(".noUi-handle-upper").ariaValueNow;
  });

  //Select

  const selectCategories = document.querySelector(".categories-block");
  const selectPrice = document.querySelector(".filter__price");
  const selectSale = document.querySelector(".sale-block");
  const selectColor = document.querySelector(".color-block");
  selectCategories.addEventListener("click", () => {
    selectCategories.classList.toggle("select--active");
    document.querySelector(".filter__checkboxs").classList.toggle("block");
  });
  selectPrice.addEventListener("click", () => {
    selectPrice.classList.toggle("select--active");
    document.querySelector(".filter__prices").classList.toggle("block");
  });
  selectSale.addEventListener("click", () => {
    selectSale.classList.toggle("select--active");
    document.querySelector(".filter__sales").classList.toggle("block");

  });
  selectColor.addEventListener("click", () => {
    selectColor.classList.toggle("select--active");
    document.querySelector(".filter__colors").classList.toggle("block");
  });

  lazyload();
});
