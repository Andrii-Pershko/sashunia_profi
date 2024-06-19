export default function sviperShow() {
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
