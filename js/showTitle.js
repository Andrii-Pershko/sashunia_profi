export default function showWelcomeTitle() {
  const title = document.querySelector('.welcome-title');
  const spans = title.querySelectorAll('.welcome-title span span');
  const realmSpans = document.querySelectorAll('.realm  span');
  const claw = document.querySelector('.welcome-claw');
  const realm = document.querySelector('.realm');

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
