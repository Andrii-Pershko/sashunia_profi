export default function loaderPage() {
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
}
