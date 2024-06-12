document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.team-list');
  let isScrolling;
  let targetScrollLeft;

  container.addEventListener('wheel', function (event) {
    // Перевірка чи потрібно скролити вертикально
    if (
      (event.deltaY < 0 && container.scrollLeft === 0) ||
      (event.deltaY > 0 &&
        container.scrollLeft + container.clientWidth >= container.scrollWidth)
    ) {
      return; // Дозволити вертикальний скрол
    }

    event.preventDefault();

    if (isScrolling) {
      window.cancelAnimationFrame(isScrolling);
    }

    targetScrollLeft = container.scrollLeft + event.deltaY;

    const scroll = () => {
      const currentScrollLeft = container.scrollLeft;
      const distance = targetScrollLeft - currentScrollLeft;
      const step = distance / 10;

      if (Math.abs(step) > 1) {
        container.scrollLeft += step;
        isScrolling = window.requestAnimationFrame(scroll);
      } else {
        container.scrollLeft = targetScrollLeft;
        isScrolling = null;
      }
    };

    scroll();
  });
});
