import Swiper from 'swiper';
import { Navigation, Scrollbar, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

export const usePartnersSlider = () => {
  new Swiper('.partners__slider', {
    modules: [Autoplay],
    slidesPerView: 2.5,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
};

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    modules: [Scrollbar],
    slidesPerView: 'auto',
    spaceBetween: 32,
    centeredSlides: true,

    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation, EffectFade],
    slidesPerView: 1,
    spaceBetween: 22,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },

    navigation: {
      prevEl: '.testimonials__btn--prev',
      nextEl: '.testimonials__btn--next',
    },
  });
};
