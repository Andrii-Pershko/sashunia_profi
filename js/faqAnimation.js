const faqListTitle = document.querySelectorAll('.hidden-q li h3');
const listTitles = document.querySelectorAll('.hidden-q li');
const clawOne = document.querySelector('.claw-faq-2 div');
const clawTwo = document.querySelector('.claw-faq-3 div');
const faqList = document.querySelectorAll('.hidden-q li');

faqList.forEach(li =>
  li.addEventListener('click', () => {
    // Якщо елемент вже має клас 'open', знімаємо цей клас у всіх елементів
    if (li.classList.contains('open')) {
      faqList.forEach(item => item.classList.remove('open'));
    } else {
      // Інакше знімаємо клас 'open' у всіх елементів і додаємо його до натиснутого елемента
      faqList.forEach(item => item.classList.remove('open'));
      li.classList.add('open');
    }
  })
);

const observerRealm = new IntersectionObserver(
  (entries, observer) => {
    const processEntry = index => {
      if (index === faqListTitle.length) {
        clawOne.classList.add('normal');
        setTimeout(() => {
          clawTwo.classList.add('normal');
        }, 1000);
        return;
      }

      const entry = faqListTitle[index];
      const li = listTitles[index];
      li.classList.add('normal');

      let count = 0;
      const interval = setInterval(() => {
        if (count <= 150) {
          entry.style.background = `linear-gradient(to right, rgba(255, 255, 255, 1) ${
            count - 50
          }%, rgba(255, 255, 255, 0) ${count}%)`;
          entry.style.color = 'transparent';
          entry.style.setProperty('-webkit-background-clip', 'text');
          entry.classList.add('normal');
          count++;
        } else {
          clearInterval(interval);
        }
      }, 10); // Змінюйте інтервал для контролю швидкості

      entry.classList.add('exactly-line');
      observer.unobserve(entry); // Припинити спостереження після спрацьовування
      setTimeout(() => processEntry(index + 1), 300); // Затримка 1 секунда перед наступною ітерацією
    };

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        processEntry(0); // Почати обробку з першого елемента
      }
    });
  },
  { threshold: 0.9 }
); // 90% видимості для спрацьовування

faqListTitle.forEach(h3 => {
  observerRealm.observe(h3);
});
