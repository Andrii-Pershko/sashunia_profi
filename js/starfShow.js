export default function stareShow() {
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
