const dropdownBtns = document.querySelectorAll('.js-dropdown-btn');
const dropdownItems = document.querySelectorAll('.dropdown');
const menuToggleBtn = document.querySelector('.header__menu-toggle');
const menuToggleIcon = document.querySelector('.header__menu-toggle img');
const header = document.querySelector('.header');
const headerNav = document.querySelector('nav');
const navOverlay = document.querySelector('.nav-overlay');
const headerBtns = document.querySelectorAll('.button--xs');
const body = document.querySelector('body');

if (dropdownItems) {
  window.addEventListener('click', (e) => {
    let target = e.target.closest('.js-dropdown-btn');
    if (!target) {
      dropdownBtns.forEach((btn) => {
        btn.classList.remove('active');
        navOverlay.classList.remove('active');
        body.classList.remove('overflowHidden');
      });
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
        navOverlay.classList.add('active');
        body.classList.add('overflowHidden');
      } else {
        target.classList.remove('active');
        navOverlay.classList.remove('active');
        body.classList.remove('overflowHidden');
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

//**************** */

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

featuresTabItems = document.querySelectorAll('.accordiontab__item');

const showTabPanel = (e) => {
  let target = e.currentTarget;
  if (!target.classList.contains('active')) {
    featuresTabItems.forEach((tab) => tab.classList.remove('active'));
    target.classList.add('active');
  } else {
    // target.classList.remove('active');
  }
};

if (featuresTabItems) {
  featuresTabItems.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      showTabPanel(e);
    });
  });
}

tabInfoBtns = document.querySelectorAll('.tab-info-btn');
const tabInfoBtnQuery = window.matchMedia('(max-width: 600px)');

const checkTabInfoBtn = (e) => {
  if (e.matches) {
    tabInfoBtns.forEach((btn) => {
      btn.classList.remove('button--download', 'button--download__underline');
      btn.classList.add('button--xs');
    });
  } else {
    tabInfoBtns.forEach((btn) => {
      btn.classList.add('button--download', 'button--download__underline');
      btn.classList.remove('button--xs');
    });
  }
};
if (tabInfoBtns) {
  tabInfoBtnQuery.addEventListener('change', checkTabInfoBtn);
}

checkTabInfoBtn(tabInfoBtnQuery);

//*************** */

const sectorTabBtns = document.querySelectorAll('[data-tab-target]');
const sectorTabContents = document.querySelectorAll('.tab-sector__content');

const showSectorPanel = (e) => {
  let tabId = e.target.dataset.tabTarget,
    target = document.getElementById(tabId);

  sectorTabBtns.forEach((btn) => {
    btn.classList.remove('active');
  });

  sectorTabContents.forEach((panel) => {
    panel.classList.remove('active');
  });

  e.target.classList.add('active');
  target.classList.add('active');
};

if (sectorTabBtns) {
  sectorTabBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => showSectorPanel(e));
  });
}

//******************* */ Sliders

let bannerSwiper;
const sliderBanner = document.querySelector('.slider-banner');

if (sliderBanner) {
  bannerSwiper = new Swiper('.slider-banner', {
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
} else {
  bannerSwiper.destroy();
}

let customersSwiper;
const sliderCustomers = document.querySelector('.slider-customers');

if (sliderCustomers) {
  customersSwiper = new Swiper('.slider-customers', {
    spaceBetween: 24,
    slidesPerView: 'auto',
    speed: 1100,
    loop: true,
    loopedSlides: 4,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      clickable: true,
    },
  });
} else {
  customersSwiper.destroy(true, true);
}

//****************** */

let sectorTabSwiper;
const sectorQuery = window.matchMedia(
  '(min-width: 0px) and (max-width: 1110px)'
);
const sectorBtnSlider = document.querySelector('.sectorsTabSlider');

const addSectorTabSlider = (e) => {
  if (e.matches && sectorBtnSlider) {
    sectorTabSwiper = new Swiper('.sectorsTabSlider', {
      spaceBetween: 17,
      slidesPerView: 'auto',
      loop: true,
      loopedSlides: 5,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      },
      breakpoints: {
        600: {
          spaceBetween: 26,
        },
      },
    });
  } else {
    sectorTabSwiper.destroy();
  }
};

sectorQuery.addEventListener('change', addSectorTabSlider);
addSectorTabSlider(sectorQuery);

//****************** */

const sectorsTabBtnsQuery = window.matchMedia('(max-width: 600px)');
const sectorSliderTabBtns = document.querySelectorAll('[data-tab-target]');
const commonCardBtn = document.querySelector(
  '.button--link.common-card__action'
);

const checkSectorsTabBtnsQuery = (e) => {
  if (e.matches) {
    console.log(commonCardBtn);
    sectorSliderTabBtns.forEach((btn) => {
      btn.classList.remove('button--mid');
      btn.classList.add('button--sm', 'button--tab');
    });
    commonCardBtn.style.display = 'none';
  } else {
    sectorSliderTabBtns.forEach((btn) => {
      btn.classList.add('button--mid');
      btn.classList.remove('button--sm', 'button--tab');
    });
    commonCardBtn.style.display = 'inline-block';
  }
};

sectorsTabBtnsQuery.addEventListener('change', checkSectorsTabBtnsQuery);
checkSectorsTabBtnsQuery(sectorsTabBtnsQuery);

//**************** */

let testimonialSwiper;
const testimonialSlider = document.querySelector('.testimonialSwiper');

if (testimonialSlider) {
  testimonialSwiper = new Swiper('.testimonialSwiper', {
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
} else {
  testimonialSwiper.destroy();
}

//****************** */

let blogSwiper;
const blogQuery = window.matchMedia('(max-width:1150px)');
const sliderBlog = document.querySelector('.blogSwiper');
const blogBtnContainer = document.querySelector('.section-blog__action');

const addBlogSlider = (e) => {
  if (e.matches) {
    blogBtnContainer.style.display = 'none';

    blogSwiper = new Swiper('.blogSwiper', {
      spaceBetween: 25,
      slidesPerView: 'auto',
      speed: 1100,
      loop: true,
      loopedSlides: 3,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      },
      breakpoints: {
        600: {
          slidesPerView: 3,
        },
      },
    });
  }
  if (!e.matches) {
    blogBtnContainer.style.display = 'block';
    blogSwiper.destroy(true, true);
  }
};

blogQuery.addEventListener('change', addBlogSlider);
addBlogSlider(blogQuery);

//********* */

let videosSwiper;
const videosSlider = document.querySelector('.videosSwiper');

if (videosSlider) {
  videosSwiper = new Swiper('.videosSwiper', {
    spaceBetween: 500,
    speed: 1100,
    parallax: true,
    loop: true,
    loopedSlides: 3,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
  });
} else {
  videosSwiper.destroy();
}
