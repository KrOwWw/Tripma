import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useMissionSlider = () => {
  new Swiper('.software-development__slider', {
    spaceBetween: 30,
    centeredSlides: false,
    slidesPerView: 'auto',
  });
};

export const useArticlesSlider = () => {
  new Swiper('.articles__slider', {
    modules: [Navigation],
    spaceBetween: 30,
    slidesPerView: 'auto',
    // loop: true,
    centeredSlides: false,
    navigation: {
      prevEl: '.articles__btn--prev',
      nextEl: '.articles__btn--next',
    },
  });
};
