document.addEventListener('DOMContentLoaded', function () {
  const yearsElement = document.querySelector('.years-slider');
  const yearsWrapper = document.querySelector('.years-wrapper');
  const sliders = document.querySelectorAll('.slide');
  let currentSlide = 1;
  const transformUnit = { 0: 180, 1: 0, 2: -180, 3: -350 };

  // Функція, яка викликається при прокручуванні
  const onWheel = function (event) {
    sliders.forEach(slide => {
      slide.classList.remove('primal-slide');
      slide.classList.remove('start-slide');
      slide.classList.remove('next-slide');
    });

    if (event.deltaY < 0) {
      if (currentSlide === 0) {
        sliders[currentSlide].classList.add('primal-slide');
        sliders[currentSlide + 1].classList.add('next-slide');
        return;
      }
      currentSlide -= 1;
      yearsWrapper.style.transform = `translate(0, ${transformUnit[currentSlide]}px)`;
      sliders[currentSlide].classList.add('primal-slide');
      if (currentSlide !== 0) {
        sliders[currentSlide - 1].classList.add('start-slide');
      }

      sliders[currentSlide + 1].classList.add('next-slide');
    } else {
      if (currentSlide === sliders.length - 1) {
        sliders[currentSlide].classList.add('primal-slide');
        sliders[currentSlide - 1].classList.add('start-slide');
        return;
      }
      currentSlide += 1;
      yearsWrapper.style.transform = `translate(0, ${transformUnit[currentSlide]}px)`;
      sliders[currentSlide].classList.add('primal-slide');
      sliders[currentSlide - 1].classList.add('start-slide');

      if (currentSlide !== sliders.length - 1) {
        sliders[currentSlide + 1].classList.add('next-slide');
      }
    }
    // Запобігання прокручуванню сторінки та елемента
    event.preventDefault();
  };

  // Функція, що обмежує частоту викликів onWheel до одного разу за подію прокручування
  let isThrottled = false;
  const throttleOnce = (func, delay) => {
    return function (...args) {
      if (!isThrottled) {
        func.apply(this, args);
        isThrottled = true;
        setTimeout(() => {
          isThrottled = false;
        }, delay);
      }
    };
  };

  // Використання throttleOnce для обмеження частоти викликів до одного разу на 1000 мс
  const throttledOnWheel = throttleOnce(onWheel, 750);

  // Відстеження прокручування коліщатком миші
  yearsElement.addEventListener('wheel', throttledOnWheel, { passive: false });

  // Відстеження прокручування всередині елемента і запобігання йому
  yearsElement.addEventListener(
    'wheel',
    function (event) {
      if (sliders.length - 1 !== currentSlide && currentSlide !== 0) {
        event.preventDefault();
        yearsElement.scrollTop = 0;
        return;
      } else {
        yearsElement.scrollTop = 50;
      }
    },
    { passive: false }
  );

  const teamList = document.querySelector('.team-list');
  const teamListAll = document.querySelectorAll('.team-card');
  const allBackCard = document.querySelectorAll('.back-page');

  teamList.addEventListener('click', e => {
    const clickedTeamCard = e.target.closest('.team-card');
    const clickBackCard = e.target.closest('.back-page');
    console.log('inside', clickBackCard);

    let index;

    teamListAll.forEach((item, i) => {
      if (item === clickedTeamCard) {
        index = i;
        console.log('Example', index);
        teamListAll[i].classList.toggle('rotate-front');
        teamListAll[i].classList.remove('rotate-front-from-back');
        allBackCard[i].classList.toggle('rotate');
        return;
      }
    });

    allBackCard.forEach((item, i) => {
      if (item === clickBackCard) {
        index = i;
        console.log('Example', index);
        teamListAll[i].classList.toggle('rotate-front');
        teamListAll[i].classList.add('rotate-front-from-back');
        allBackCard[i].classList.toggle('rotate');
        return;
      }
    });
  });
});
