const dropdownBtns = document.querySelectorAll('.js-dropdown-btn');
const dropdownItems = document.querySelectorAll('.dropdown');
const menuToggleBtn = document.querySelector('.header__menu-toggle');
const menuToggleIcon = document.querySelector('.header__menu-toggle img');
const header = document.querySelector('.header');
const headerNav = document.querySelector('nav');
const headerBtns = document.querySelectorAll('.button--xs');
const body = document.querySelector('body');

if (dropdownItems) {
  window.addEventListener('click', (e) => {
    let target = e.target.closest('.js-dropdown-btn');
    if (!target) {
      dropdownBtns.forEach((btn) => btn.classList.remove('active'));
    }
  });
}

const toggleMenu = () => {
  if (headerNav.classList.contains('active')) {
    headerNav.classList.remove('active');
    header.classList.remove('active');
    menuToggleIcon.src = '../assets/images/icons-menu-open.png';
    headerBtns.forEach((btn) => btn.classList.remove('button--lg'));
    body.classList.remove('overflowHidden');
  } else {
    headerNav.classList.add('active');
    header.classList.add('active');
    body.classList.add('overflowHidden');
    menuToggleIcon.src = '../assets/images/icons-menu-close.png';
    headerBtns.forEach((btn) => btn.classList.add('button--lg'));
  }
};

if (menuToggleBtn) {
  menuToggleBtn.addEventListener('click', toggleMenu);
}

if (dropdownBtns) {
  dropdownBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      let target = e.currentTarget;
      if (!target.classList.contains('active')) {
        dropdownBtns.forEach((item) => {
          item.classList.remove('active');
        });
        target.classList.add('active');
      } else {
        target.classList.remove('active');
      }
    });
  });
}

const mobileMediaQuery = window.matchMedia('(min-width: 1110px)');
const checkMobileQuery = (e) => {
  if (e.matches && headerNav.classList.contains('active')) {
    toggleMenu();
  }
};

mobileMediaQuery.addEventListener('change', checkMobileQuery);
checkMobileQuery(mobileMediaQuery);

window.addEventListener('scroll', () => {
  if (header.classList.contains('sticky') && window.scrollY > 140) {
    header.classList.add('header--sticky');
  } else {
    header.classList.remove('header--sticky');
  }
});

//******************* */

var swiper = new Swiper('.swiper-banner', {
  spaceBetween: 300,
  speed: 1100,
  parallax: true,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
});

//*************** */

const bannerBtnContainer = document.querySelectorAll('.banner-card__btns');
const bannerSliderQuery = window.matchMedia('(max-width: 992px)');

if (bannerBtnContainer) {
  const checkBannerSliderQuery = (e) => {
    bannerBtnContainer.forEach((container) => {
      if (e.matches && container.childElementCount >= 2) {
        container.children[0].classList.add('button--v2', 'button--join');
      } else {
        container.children[0].classList.remove('button--v2', 'button--join');
      }
    });
  };

  bannerSliderQuery.addEventListener('change', checkBannerSliderQuery);
  checkBannerSliderQuery(bannerSliderQuery);
}

//*************** */

const copyrightYear = document.querySelector('#year');

if (copyrightYear) {
  copyrightYear.textContent = new Date().getFullYear();
}

//*************** */
