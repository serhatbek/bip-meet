const dropdownBtns = document.querySelectorAll('.js-dropdown-btn');
const dropdownItems = document.querySelectorAll('.dropdown');
const menuToggleBtn = document.querySelector('.header__menu-toggle');
const menuToggleIcon = document.querySelector('.header__menu-toggle img');
const header = document.querySelector('.header');
const headerNav = document.querySelector('nav');
const navOverlay = document.querySelector('.nav-overlay');
const headerBtns = document.querySelectorAll('.button--xs');
const body = document.querySelector('body');

const toggleMenu = () => {
  if (headerNav.classList.contains('active')) {
    headerNav.classList.remove('active');
    header.classList.remove('active');
    menuToggleIcon.src = '../assets/images/icons-menu-open.png';
    body.classList.remove('overflowHidden');
    headerBtns.forEach((btn) => btn.classList.remove('button--lg'));
  } else {
    headerNav.classList.add('active');
    header.classList.add('active');
    menuToggleIcon.src = '../assets/images/icons-menu-close.png';
    body.classList.add('overflowHidden');
    headerBtns.forEach((btn) => btn.classList.add('button--lg'));
  }
};

if (menuToggleBtn) {
  menuToggleBtn.addEventListener('click', toggleMenu);
}

if (dropdownItems) {
  window.addEventListener('click', (e) => {
    let target = e.target.closest('.js-dropdown-btn');
    if (!target && !header.classList.contains('active')) {
      dropdownBtns.forEach((btn) => {
        btn.classList.remove('active');
        navOverlay.classList.remove('active');
        body.classList.remove('overflowHidden');
      });
    }
  });
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

const stickyHeader = document.querySelector('.header.sticky');
if (stickyHeader) {
  window.addEventListener('scroll', () => {
    if (header.classList.contains('sticky') && window.scrollY > 140) {
      header.classList.add('header--sticky');
    } else {
      header.classList.remove('header--sticky');
    }
  });
}

const stickyTabHeader = document.querySelector('.tab-sector__header.sticky');
if (stickyTabHeader) {
  window.addEventListener('scroll', () => {
    if (stickyTabHeader.classList.contains('sticky') && window.scrollY > 700) {
      stickyTabHeader.classList.add('tab-sector__header--sticky');
    } else {
      stickyTabHeader.classList.remove('tab-sector__header--sticky');
    }
  });
}

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
  // bannerSwiper.destroy();
}

//******************** */

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
  // customersSwiper.destroy(true, true);
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
    // sectorTabSwiper.destroy();
  }
};

sectorQuery.addEventListener('change', addSectorTabSlider);
addSectorTabSlider(sectorQuery);

//****************** */

const sectorsTabBtnsQuery = window.matchMedia(
  '(min-width: 0px) and (max-width: 600px)'
);
const sectorSliderTabBtns = document.querySelectorAll('[data-tab-target]');

const checkSectorsTabBtnsQuery = (e) => {
  if (e.matches) {
    sectorSliderTabBtns.forEach((btn) => {
      btn.classList.remove('button--mid');
      btn.classList.add('button--sm', 'button--tab');
    });
  } else {
    sectorSliderTabBtns.forEach((btn) => {
      btn.classList.add('button--mid');
      btn.classList.remove('button--sm', 'button--tab');
    });
  }
};

if (typeof sectorSliderTabBtns != 'undefined' && sectorSliderTabBtns != null) {
  sectorsTabBtnsQuery.addEventListener('change', checkSectorsTabBtnsQuery);
  checkSectorsTabBtnsQuery(sectorsTabBtnsQuery);
}

//**************** */
const commonCardBtn = document.querySelector(
  '.button--link.common-card__action'
);
const commonCardBtnQuery = window.matchMedia(
  '(min-width: 0px) and (max-width: 600px)'
);

const toggleCommonCardBtn = (e) => {
  if (e.matches) {
    commonCardBtn.style.display = 'none';
  } else {
    commonCardBtn.style.display = 'inline-block';
  }
};

if (commonCardBtn) {
  commonCardBtnQuery.addEventListener('change', toggleCommonCardBtn);
  toggleCommonCardBtn(commonCardBtnQuery);
}

//**************** */

let testimonialSwiper;
const testimonialSlider = document.querySelector('.testimonialSwiper');

if (testimonialSlider) {
  testimonialSwiper = new Swiper('.testimonialSwiper', {
    spaceBetween: 300,
    speed: 1100,
    parallax: true,
    loop: true,
    observer: true,
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
  // testimonialSwiper.destroy();
}

//****************** */

let blogSwiper;
const blogQuery = window.matchMedia('(min-width: 0px) and (max-width:1150px)');
const sliderBlog = document.querySelector('.blogSwiper');

const addBlogSlider = (e) => {
  if (e.matches && sliderBlog) {
    blogSwiper = new Swiper('.blogSwiper', {
      spaceBetween: 25,
      slidesPerView: 'auto',
      speed: 1100,
      loop: true,
      loopedSlides: 3,
      observer: true,
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
  } else {
    // blogSwiper.destroy(true, true);
  }
};

blogQuery.addEventListener('change', addBlogSlider);
addBlogSlider(blogQuery);

//********* */

const blogBtnContainer = document.querySelector('.section-blog__action');

const removeBlogBtn = (e) => {
  if (e.matches) {
    blogBtnContainer.style.display = 'none';
  } else {
    blogBtnContainer.style.display = 'block';
  }
};
if (blogBtnContainer) {
  blogQuery.addEventListener('change', removeBlogBtn);
  removeBlogBtn(blogQuery);
}

//********* */

let videosSwiper;
const videosSlider = document.querySelector('.videosSwiper');

if (videosSlider) {
  videosSwiper = new Swiper('.videosSwiper', {
    spaceBetween: 500,
    speed: 1100,
    loop: true,
    loopedSlides: 3,
    observer: true,
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
  // videosSwiper.destroy();
}

//********** */

const packBtns = document.querySelectorAll('.check-packages-card__action a');
const packBtnQuery = window.matchMedia('(max-width: 992px)');

const checkPackBtn = (e) => {
  if (e.matches) {
    packBtns.forEach((btn) => {
      btn.classList.remove('button--sm');
      btn.classList.add('button--xs');
    });
  } else {
    packBtns.forEach((btn) => {
      btn.classList.add('button--sm');
      btn.classList.remove('button--xs');
    });
  }
};
if (packBtns) {
  packBtnQuery.addEventListener('change', checkPackBtn);
  checkPackBtn(packBtnQuery);
}

//********************* */
const featureDetailCardQuery = window.matchMedia(
  '(min-width: 0px) and (max-width:600px)'
);
const featureDetailCards = document.querySelectorAll(
  '.common-card.common-card--small figure img'
);

const changeImgUrl = (e) => {
  if (e.matches && featureDetailCards) {
    featureDetailCards[0].src = 'https://source.unsplash.com/random/375x236';
    featureDetailCards[1].src = 'https://source.unsplash.com/random/375x236';
    featureDetailCards[2].src = 'https://source.unsplash.com/random/375x236';
  } else {
    featureDetailCards[0].src = 'https://source.unsplash.com/random/552x236';
    featureDetailCards[1].src = 'https://source.unsplash.com/random/552x236';
    featureDetailCards[2].src = 'https://source.unsplash.com/random/552x236';
  }
};

if (featureDetailCards.length > 0) {
  featureDetailCardQuery.addEventListener('change', changeImgUrl);
  changeImgUrl(featureDetailCardQuery);
}

//****************** */

const accordionItems = document.querySelectorAll('.accordion__item');

const toggleAccordionBody = (e) => {
  let target = e.currentTarget;
  if (!target.classList.contains('active')) {
    accordionItems.forEach((item) => {
      item.classList.remove('active');
    });
    target.classList.toggle('active');
  } else {
    target.classList.remove('active');
  }
};

if (accordionItems !== null) {
  accordionItems.forEach((item) => {
    item.addEventListener('click', (e) => toggleAccordionBody(e));
  });
}

//******************* */
let featuresDetailSwiper;
const featuresDetailSlider = document.querySelector('.feature-detail-slider');
const sectionFeaturesDetail = document.querySelector('.section-detail-slider');

if (featuresDetailSlider) {
  featuresDetailSwiper = new Swiper('.feature-detail-slider', {
    spaceBetween: 24,
    slidesPerView: 'auto',
    speed: 1100,
    loop: true,
    loopedSlides: 4,
    observer: true,
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
  // videosSwiper.destroy();
}

const removeSectionFeatures = (e) => {
  if (e.matches) {
    sectionFeaturesDetail.style.display = 'none';
  } else {
    sectionFeaturesDetail.style.display = 'block';
  }
};

if (sectionFeaturesDetail) {
  blogQuery.addEventListener('change', removeSectionFeatures);
  removeSectionFeatures(blogQuery);
}
