//Burger
const btnBurger = document.querySelector(".burger");
const burgerMenuExit = document.querySelector(".bottom__list-exit");
const menuListTop = document.querySelector(".top__list");
const burgerMenu = document.querySelector(".bottom__wrapper");

btnBurger.addEventListener("click", () => {
  burgerMenuExit.classList.add("burger-exit--active");
  burgerMenu.classList.add("burger--active");
  menuListTop.classList.add("top__list--active");
  burgerMenuExit.addEventListener("click", () => {
    burgerMenuExit.classList.remove("burger-exit--active");
    burgerMenu.classList.remove("burger--active");
    menuListTop.classList.remove("top__list--active");
  });
});
