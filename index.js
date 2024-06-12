const loaderPage = () => {
  const loaders = document.querySelectorAll('.claw-loader');
  const numLoaders = loaders.length;
  const appearDuration = 200; // Час з'явлення елемента в мс
  const disappearDelay = 1000; // Затримка перед зникненням елемента в мс
  const disappearDuration = 1000; // Тривалість зникнення елемента в мс

  let index = 0;
  let shown = []; // Масив, що зберігає порядок з'явлення елементів

  function showLoader() {
    if (shown.length === numLoaders) {
      // Якщо всі елементи показані, очистіть масив та розпочніть знову
      shown = [];
    }

    // Додаємо елементи в масив shown у порядку з'явлення
    shown.push(index);

    // Показуємо елемент
    loaders[index].classList.add('appear');

    // Встановлюємо затримку перед зникненням елемента
    setTimeout(() => {
      loaders[shown.shift()].classList.remove('appear'); // Зникає перший показаний елемент
    }, disappearDelay + disappearDuration);

    // Підготовка для наступного показу елемента
    index = (index + 1) % numLoaders;
  }

  // Початок показу елементів
  setInterval(showLoader, appearDuration);
};
loaderPage();

window.addEventListener('load', function () {
  showContent();
  showWelcomeTitle();
  stareShow();
  sviperShow();
});

function showWelcomeTitle() {
  const title = document.querySelector('.welcome-title');
  const spans = title.querySelectorAll('.welcome-title span span');
  const realmSpans = document.querySelectorAll('.realm  span');
  const claw = document.querySelector('.welcome-claw');
  const realm = document.querySelector('.realm');

  if (title) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            claw.classList.add('show');
            title.classList.add('visible');
            spans.forEach(span => {
              span.classList.add('visible');
            });
            observer.unobserve(entry.target); // Припинити спостереження після спрацьовування
          }
        });
      },
      { threshold: 0.2 }
    ); // 20% видимості для спрацьовування

    observer.observe(title);
  }

  if (realm) {
    const observerRealm = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            realmSpans.forEach(span => {
              let count = 0;
              const interval = setInterval(() => {
                if (count <= 150) {
                  span.style.background = `linear-gradient(to right, rgba(0, 0, 0, 1) ${
                    count - 50
                  }%, rgba(0, 0, 0, 0) ${count}%)`;
                  span.style.setProperty('-webkit-background-clip', 'text');
                  count++;
                } else {
                  clearInterval(interval);
                }
              }, 10); // Змінюйте інтервал для контролю швидкості
            });

            entry.target.classList.add('exactly-line');
            observer.unobserve(entry.target); // Припинити спостереження після спрацьовування
          }
        });
      },
      { threshold: 0.5 }
    ); // 50% видимості для спрацьовування

    observerRealm.observe(realm);
  }
}

function showContent() {
  document.getElementById('preloader').style.display = 'none';
  document.getElementById('content').style.display = 'block';
}

function stareShow() {
  const letters = document.querySelectorAll('.letter');
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          letters.forEach((letter, index) => {
            setTimeout(() => {
              letter.classList.add('show');
            }, index * 50); // Затримка 100 мс між літерами
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(document.querySelector('.starf-title-text'));
}

function sviperShow() {
  const slides = document.querySelectorAll('.swiper-slide');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          slides.forEach((slides, index) => {
            setTimeout(() => {
              slides.classList.add('show-slide');
            }, index * 500); // Затримка 100 мс між літерами
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(document.querySelector('.swiper-wrapper'));
}
