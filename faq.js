document.addEventListener('DOMContentLoaded', function () {
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
});
