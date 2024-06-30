import Swiper from "swiper";
import "swiper/css";

const projectsSlider = new Swiper(".projects__slider", {
  spaceBetween: 15,
  slidesPerView: 1,
  breakpoints: {
    479: {
      slidesPerView: 1,
    },
    744: {
      slidesPerView: 3,
    },
  },
});
