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

const options = {
  threshold: 0.8, // Активація коли хоча б 10% елемента стає видимим
};

const showBlockFAQ = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      //show claw
      setTimeout(() => {
        clawOne.classList.add('normal');
        setTimeout(() => {
          clawTwo.classList.add('normal');
        }, 1000);
      }, 2000);

      faqListTitle.forEach((item, index) => {
        setTimeout(() => {
          listTitles[index].classList.add('normal');
          let count = 0;
          const interval = setInterval(() => {
            if (count <= 150) {
              item.style.background = `linear-gradient(to right, rgba(255, 255, 255, 1) ${
                count - 50
              }%, rgba(255, 255, 255, 0) ${count}%)`;
              item.style.color = 'transparent';
              item.style.setProperty('-webkit-background-clip', 'text');
              item.classList.add('normal');
              count++;
            } else {
              clearInterval(interval);
            }
          }, 10);
        }, index * 300);
      });

      observer.unobserve(entry.target); // Припинити спостереження за елементом
    }
  });
};

const observer = new IntersectionObserver(showBlockFAQ, options);
observer.observe(document.querySelector('.hidden-q'));
