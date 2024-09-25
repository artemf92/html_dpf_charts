// import { disableScroll } from '../functions/disable-scroll.js';
// import { enableScroll } from '../functions/enable-scroll.js';
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

const formHero = document.querySelector('.filter-main')
const formMetrics = document.querySelector('.benefits__form')

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('body').scrollIntoView({
    behavior: 'smooth'
  });
})

formHero.addEventListener("submit", function (e) {
  e.preventDefault()

  const benefitsSection = document.querySelector('.benefits')
  document.querySelector('body').classList.remove('disable-scroll')
  setTimeout(() => {
    benefitsSection.scrollIntoView({
      behavior: 'smooth'
    });
  }, 300);

})
formMetrics.addEventListener("submit", function (e) {
  e.preventDefault()

  const car = document.querySelector('.car__img')
  const elementsWrap = document.querySelector('.car__elements');
  elementsWrap.style.opacity = '0'
  setTimeout(() => {
    elementsWrap.style.display = 'block'
    setTimeout(() => {
      elementsWrap.style.opacity = '1'
    }, 100);
  }, 100);
  setTimeout(() => {
    const elements = document.querySelectorAll('.car__element');
    elements.forEach(el => {
      el.classList.add('trigger-back');
    });
  
    const arcs = document.querySelectorAll(".fill-animate");
    arcs.forEach((arc, index) => {
      setTimeout(() => {
        arc.classList.add("fill");
      }, index * 250); // Поочередная задержка
    });
    setTimeout(() => {
      car.classList.add('active')
    }, 1500);
  }, 1500);

});