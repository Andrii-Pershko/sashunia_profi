var slideListLength = document.querySelectorAll(
  '.mySwiper .swiper-wrapper .swiper-slide'
).length;
document.querySelector('.all-page').textContent = `/${slideListLength}`;
var prev = document.querySelector('.swiper-button-prev');
var next = document.querySelector('.swiper-button-next');
var currentPage = document.querySelector('.current-page');

let count = 1;

prev.addEventListener('click', () => {
  console.log('p', count);
  if (count - 1 === 0) {
    currentPage.textContent = slideListLength;
    count = Number(slideListLength);
    return;
  }

  currentPage.textContent = count - 1;
  count -= 1;
});

next.addEventListener('click', () => {
  console.log('n', count);
  if (count === Number(slideListLength)) {
    currentPage.textContent = 1;
    count = 1;
    return;
  }
  currentPage.textContent = count + 1;
  count += 1;
});

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  speed: 100,
  initialSlide: 0,
  simulateTouch: false,
  allowTouchMove: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
