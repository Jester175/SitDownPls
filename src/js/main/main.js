document.addEventListener("DOMContentLoaded", () => {
  //Swiper
  const heroSwiper = new Swiper(".hero__swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 1000,
    loop: false,

    pagination: {
      el: ".hero-pagination",
      type: "bullets",
    },
  });

  const offerSwiper = new Swiper(".offer__swiper", {
    slidesPerView: "auto",
    slidesPerGroup: 3,
    spaceBetween: 32,
    speed: 1000,
    navigation: {
      nextEl: ".offer__button-next",
      prevEl: ".offer__button-prev",
    },

    breakpoints: {
      320: {
        slidesPerGroup: 1,
      },
      768: {
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerGroup: 3,
      },
    },
  });
  const usefulSwiper = new Swiper(".useful__swiper", {
    slidesPerView: "auto",
    observer: true,
    observeParents: true,
    spaceBetween: 32,
    speed: 1000,
    navigation: {
      nextEl: ".useful__button-next",
      prevEl: ".useful__button-prev",
    },
    breakpoints: {
      320: {
        slidesPerGroup: 1,
      },
      768: {
        slidesPerGroup: 2,
      },
    },
  });

  //Additional rating cards
  const cards = document.querySelectorAll(".rating__card");
  const btnRating = document.querySelector(".rating__btn");

  btnRating.addEventListener("click", () => {
    cards.forEach((card) => {
      card.setAttribute("id", "card--visible");
      btnRating.classList.add("btn--hidden");
    });
  });
  //Form
  const btnFeedback = document.querySelector(".feedback__btn");
  const exitPopup = document.querySelector(".popup__exit");
  const popup = document.querySelector(".form__popup");

  btnFeedback.addEventListener("click", () => {
    if (document.querySelectorAll(".just-validate-success-field").length == 3) {
      popup.classList.add("popup--active");
      document.body.classList.add("overflow--hidden");
      exitPopup.addEventListener("click", () => {
        document.body.classList.remove("overflow--hidden");
        popup.classList.remove("popup--active");
      });
    }
  });

  //Буллиты
  // gsap.to(".swiper-pagination-bullet", { x: 200 });

  //Tooltippy
  tippy("#tooltip", {
    content:
      "Реплицированные с зарубежных источников, исследования формируют глобальную сеть.",
    theme: "tomato",
    color: "white",
  });

  //Validate

  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+375 (99)-999-99-99");

  im.mask(selector);

  const validation = new JustValidate("#form");

  validation
    .addField("#name", [
      {
        rule: "required",
        errorMessage: "Недопустимый формат",
      },
      {
        rule: "minLength",
        value: 2,
        errorMessage: "Имя состоит минимум из 2 букв",
      },
      {
        rule: "maxLength",
        value: 20,
        errorMessage: "Имя состоит максимум из 2 букв",
      },
    ])
    .addField("#tel", [
      {
        rule: "required",
        errorMessage: "Недопустимый формат",
      },
      {
        rule: "function",
        validator() {
          const phone = selector.inputmask.unmaskedvalue();
          return phone.length === 9;
        },
        errorMessage: "Телефон должен состоять из 9 цифр",
      },
    ])
    .addField("#email", [
      {
        rule: "required",
        errorMessage: "Недопустимый формат",
      },
      {
        rule: "email",
        errorMessage: "Некорректный e-mail",
      },
    ]);

  //Lazyload
  lazyload();
});
