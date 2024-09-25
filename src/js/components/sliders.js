import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


Swiper.use([Navigation, Pagination]);
const features__slider = new Swiper('.features__slider', {
  slidesPerView: 1,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const reviews__slider = new Swiper('.reviews__slider', {
  loop: false,
  speed: 1000,
  autoplay: {
      delay: 3000,
  },
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  // slidesPerView: 'auto',
  coverflowEffect: {
      rotate: 0,
      stretch: 80,
      depth: 200,
      modifier: 1,
      slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      initialSlide: 0,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    1025: {
      initialSlide: 1,
      slidesPerView: 3,
      spaceBetween: 20
    }
  },

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
});