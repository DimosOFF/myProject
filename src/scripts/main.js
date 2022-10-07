import * as myFunctions from './functions.js';
//import Swiper from 'swiper';

myFunctions.linksPreventDefault();
myFunctions.scrollToTop();
myFunctions.addClassOnScroll('.header', 35, '_scrolled');
myFunctions.addClassOnClick('.burger', '.header', '_menu-opened');

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: false,
  rewind: true,
  grabCursor: true,
  slidesPerView: 4,
  //autoHeight: true,
  //setWrapperSize: true,

  // If we need pagination
  //pagination: {
  //  el: '.swiper-pagination',
  //},

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  //scrollbar: {
  //  el: '.swiper-scrollbar',
  //},
});
