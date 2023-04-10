document.addEventListener("DOMContentLoaded", () => {
  //Swiper
  const viewSwiper = new Swiper(".view__swiper", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 38,
    speed: 1000,
    loop: false,

    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  const otherSwiper = new Swiper(".other__swiper", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 32,
    speed: 1000,
    loop: false,

    navigation: {
      nextEl: ".other__button-next",
      prevEl: ".other__button-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  });
  const viewPopupSwiper = new Swiper(".vpopup__swiper", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 78,
    speed: 1000,
    loop: false,

    navigation: {
      nextEl: ".vpopup__button-next",
      prevEl: ".vpopup__button-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: "auto",
        spaceBetween: 79,
      },
      768: {
        spaceBetween: 79,
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  //Popup
  const btnBuy = document.querySelector(".view__btn");
  const btnPost = document.querySelector(".form__btn");
  const exitForm = document.querySelector(".popupf__exit");
  const exitAnswer = document.querySelector(".apopup__exit");
  const popupAnswer = document.querySelector(".answer__popup");
  const popupForm = document.querySelector(".form__popup");

  btnBuy.addEventListener("click", () => {
    popupForm.classList.add("popup--active");
    document.body.classList.add("overflow--hidden");
    btnPost.addEventListener("click", () => {
      if (
        document.querySelectorAll(".just-validate-success-field").length == 2
      ) {
        popupForm.classList.remove("popup--active");
        popupAnswer.classList.add("popup--active");
        exitAnswer.addEventListener("click", () => {
          document.body.classList.remove("overflow--hidden");
          popupAnswer.classList.remove("popup--active");
        });
      }
    });
    exitForm.addEventListener("click", () => {
      document.body.classList.remove("overflow--hidden");
      popupForm.classList.remove("popup--active");
    });
  });

  const viewProductPopup = document.querySelector(".view__popup");
  const viewProductExit = document.querySelector(".vpopup__exit");
  const viewProduct = document.querySelector(".view-btn");

  // Change preview
  viewProduct.addEventListener("click", () => {
    viewProductPopup.classList.add("view__popup--active");
    document.body.classList.add("overflow--hidden");
    viewProductExit.addEventListener("click", () => {
      viewProductPopup.classList.remove("view__popup--active");
      document.body.classList.remove("overflow--hidden");
      document.querySelector(".vpopup__img").style.backgroundImage =
        "url('./images/view__popup1.png')";
    });
  });

  const viewImg1 = document.querySelector(".vpopup__img1");
  viewImg1.addEventListener("click", () => {
    document.querySelector(".vpopup__img").style.backgroundImage =
      "url('./images/view__popup2.png')";
  });
  const viewImg2 = document.querySelector(".vpopup__img2");
  viewImg2.addEventListener("click", () => {
    document.querySelector(".vpopup__img").style.backgroundImage =
      "url('./images/view__popup3.png')";
  });
  const viewImg3 = document.querySelector(".vpopup__img3");
  viewImg3.addEventListener("click", () => {
    document.querySelector(".vpopup__img").style.backgroundImage =
      "url('./images/view__popup4.png')";
  });
  const viewImg4 = document.querySelector(".vpopup__img4");
  viewImg4.addEventListener("click", () => {
    document.querySelector(".vpopup__img").style.backgroundImage =
      "url('./images/view__popup5.png')";
  });

  //Validate
  const selector = document.querySelector(".form__tel");
  const im = new Inputmask("+375 (99)-999-99-99");

  im.mask(selector);

  const validation = new JustValidate(".popupf__form");

  validation
    .addField(".form__name", [
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
    .addField(".form__tel", [
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
    ]);
});
