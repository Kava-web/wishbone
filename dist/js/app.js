(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    const burger = () => {
        const burgerBtn = document.querySelector("#burger-btn");
        const burgerMenu = document.querySelector("#burger-menu");
        const burgerBtnClose = burgerMenu.querySelector("#burger-btn-close");
        burgerBtn.addEventListener("click", (() => {
            const overlayMenu = document.createElement("div");
            overlayMenu.addEventListener("click", closeBurger);
            burgerMenu.classList.add("open");
            document.body.classList.add("body-hidden");
            document.body.appendChild(overlayMenu);
            overlayMenu.classList.add("header__nav-overlay");
            setTimeout((() => overlayMenu.classList.add("active")), 200);
        }));
        burgerBtnClose.addEventListener("click", (() => {
            const overlayMenu = document.querySelector(".header__nav-overlay");
            burgerMenu.classList.remove("open");
            document.body.classList.remove("body-hidden");
            overlayMenu.classList.remove("active");
            setTimeout((() => overlayMenu.remove()), 300);
        }));
        function closeBurger(e) {
            burgerMenu.classList.remove("open");
            document.body.classList.remove("body-hidden");
            e.target.classList.remove("active");
            setTimeout((() => e.target.remove()), 300);
        }
    };
    isWebp();
    burger();
})();