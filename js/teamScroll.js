document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.team-list');
  const parent = container.parentElement;
  let isScrolling;

  const handleWheel = event => {
    const atStart = container.scrollLeft === 0;
    const atEnd =
      container.scrollLeft + container.clientWidth >= container.scrollWidth;

    // Якщо горизонтальний скрол досягнув краю, дозволити вертикальний скрол
    if ((event.deltaY < 0 && atStart) || (event.deltaY > 0 && atEnd)) {
      parent.scrollTop += event.deltaY;
      return;
    }

    // Призначення горизонтального скролу
    event.preventDefault();

    if (isScrolling) {
      window.cancelAnimationFrame(isScrolling);
    }

    let targetScrollLeft = container.scrollLeft + event.deltaY;

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
  };

  const handleParentWheel = event => {
    // Дозволити вертикальний скрол тільки якщо горизонтальний скрол досягнув краю
    if (
      (event.deltaY < 0 && container.scrollLeft === 0) ||
      (event.deltaY > 0 &&
        container.scrollLeft + container.clientWidth >= container.scrollWidth)
    ) {
      parent.scrollTop += event.deltaY;
    } else {
      // Призначення горизонтального скролу
      event.preventDefault();

      if (isScrolling) {
        window.cancelAnimationFrame(isScrolling);
      }

      let targetScrollLeft = container.scrollLeft + event.deltaY;

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
    }
  };

  container.addEventListener('wheel', handleWheel, { passive: false });
  parent.addEventListener('wheel', handleParentWheel, { passive: false });
});
