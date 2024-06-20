export default function showFooter() {
  const title = document.querySelector('.footer-title');
  const spans = title.querySelectorAll('.footer-title span span');
  const realmSpans = document.querySelectorAll('.foote-we  span');
  const claw = document.querySelector('.footer-claw div');
  const realm = document.querySelector('.foote-we');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          claw.classList.add('show-claw');
          title.classList.add('visible');
          spans.forEach((span, index) => {
            setTimeout(() => {
              span.classList.add('visible');
            }, index * 200);
          });
          observer.unobserve(entry.target); // Припинити спостереження після спрацьовування
        }
      });
    },
    { threshold: 0.5 }
  ); // 50% видимості для спрацьовування

  observer.observe(title);

  const observerRealm = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          realmSpans.forEach((span, index) => {
            let count = 0;
            span.classList.add('normal');

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
