export const burger = () => {
  const burgerBtn = document.querySelector("#burger-btn");
  const burgerMenu = document.querySelector("#burger-menu");
  const burgerBtnClose = burgerMenu.querySelector("#burger-btn-close");

  burgerBtn.addEventListener("click", () => {
    const overlayMenu = document.createElement("div");

    overlayMenu.addEventListener("click", closeBurger);

    burgerMenu.classList.add("open");
    document.body.classList.add("body-hidden");
    document.body.appendChild(overlayMenu);
    overlayMenu.classList.add("header__nav-overlay");

    setTimeout(() => overlayMenu.classList.add("active"), 200);
  });

  burgerBtnClose.addEventListener("click", () => {
    const overlayMenu = document.querySelector(".header__nav-overlay");

    burgerMenu.classList.remove("open");
    document.body.classList.remove("body-hidden");
    overlayMenu.classList.remove("active");

    setTimeout(() => overlayMenu.remove(), 300);
  });

  function closeBurger(e) {
    burgerMenu.classList.remove("open");
    document.body.classList.remove("body-hidden");

    e.target.classList.remove("active");
    setTimeout(() => e.target.remove(), 300);
  }
};
