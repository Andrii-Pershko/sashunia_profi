export default function teamShow() {
  const titleMeet = document.querySelectorAll('.meet-our-team');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          titleMeet.forEach((letter, index) => {
            letter.classList.add('meet-our-team-show');
            // Затримка 100 мс між літерами
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(document.querySelector('.team-list'));

  const workerCards = document.querySelectorAll('.team-list > li');

  const listTeam = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelector('.team-list').classList.add('team-list-allow');
          workerCards.forEach((letter, index) => {
            setTimeout(() => {
              letter.classList.add('show-li');
            }, index * 100); // Затримка 100 мс між літерами
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  listTeam.observe(document.querySelector('.flag-teams'));
}
