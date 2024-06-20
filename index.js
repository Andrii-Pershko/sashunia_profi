import loaderPage from './js/loadPage.js';
import showContent from './js/showContent.js';
import showWelcomeTitle from './js/showTitle.js';
import stareShow from './js/starfShow.js';
import sviperShow from './js/swiperShow.js';
import teamShow from './js/animatedTeams.js';
import showFooter from './js/footerAnimations.js';

import './js/teamScroll.js';
import './js/slider.js';
import './js/animatedTeams.js';
import './js/yearsScroll.js';
import './js/faqAnimation.js';

loaderPage();

window.addEventListener('load', function () {
  showContent();
  showWelcomeTitle();
  stareShow();
  sviperShow();
  teamShow();
  showFooter();
});
