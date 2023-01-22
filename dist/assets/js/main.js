const dropdownBtns=document.querySelectorAll(".js-dropdown-btn"),dropdownItems=document.querySelectorAll(".dropdown"),menuToggleBtn=document.querySelector(".header__menu-toggle"),menuToggleIcon=document.querySelector(".header__menu-toggle img"),header=document.querySelector(".header"),headerNav=document.querySelector("nav"),navOverlay=document.querySelector(".nav-overlay"),headerBtns=document.querySelectorAll(".button--xs"),body=document.querySelector("body"),toggleMenu=(dropdownItems&&window.addEventListener("click",e=>{e.target.closest(".js-dropdown-btn")||dropdownBtns.forEach(e=>{e.classList.remove("active"),navOverlay.classList.remove("active"),body.classList.remove("overflowHidden")})}),()=>{headerNav.classList.contains("active")?(headerNav.classList.remove("active"),header.classList.remove("active"),menuToggleIcon.src="../assets/images/icons-menu-open.png",headerBtns.forEach(e=>e.classList.remove("button--lg")),body.classList.remove("overflowHidden")):(body.classList.add("overflowHidden"),headerNav.classList.add("active"),header.classList.add("active"),menuToggleIcon.src="../assets/images/icons-menu-close.png",headerBtns.forEach(e=>e.classList.add("button--lg")))}),mobileMediaQuery=(menuToggleBtn&&menuToggleBtn.addEventListener("click",toggleMenu),dropdownBtns&&dropdownBtns.forEach(e=>{e.addEventListener("click",e=>{e=e.currentTarget;e.classList.contains("active")?(e.classList.remove("active"),navOverlay.classList.remove("active"),body.classList.remove("overflowHidden")):(dropdownBtns.forEach(e=>{e.classList.remove("active")}),e.classList.add("active"),navOverlay.classList.add("active"),body.classList.add("overflowHidden"))})}),window.matchMedia("(min-width: 1110px)")),checkMobileQuery=e=>{e.matches&&headerNav.classList.contains("active")&&toggleMenu()},bannerBtnContainer=(mobileMediaQuery.addEventListener("change",checkMobileQuery),checkMobileQuery(mobileMediaQuery),window.addEventListener("scroll",()=>{header.classList.contains("sticky")&&140<window.scrollY?header.classList.add("header--sticky"):header.classList.remove("header--sticky")}),document.querySelectorAll(".banner-card__btns")),bannerSliderQuery=window.matchMedia("(max-width: 992px)");if(bannerBtnContainer){const k=t=>{bannerBtnContainer.forEach(e=>{t.matches&&2<=e.childElementCount?e.children[0].classList.add("button--v2","button--join"):e.children[0].classList.remove("button--v2","button--join")})};bannerSliderQuery.addEventListener("change",k),k(bannerSliderQuery)}const copyrightYear=document.querySelector("#year"),showTabPanel=(copyrightYear&&(copyrightYear.textContent=(new Date).getFullYear()),featuresTabItems=document.querySelectorAll(".accordiontab__item"),e=>{e=e.currentTarget;e.classList.contains("active")||(featuresTabItems.forEach(e=>e.classList.remove("active")),e.classList.add("active"))}),tabInfoBtnQuery=(featuresTabItems&&featuresTabItems.forEach(e=>{e.addEventListener("click",e=>{showTabPanel(e)})}),tabInfoBtns=document.querySelectorAll(".tab-info-btn"),window.matchMedia("(max-width: 600px)")),checkTabInfoBtn=e=>{e.matches?tabInfoBtns.forEach(e=>{e.classList.remove("button--download","button--download__underline"),e.classList.add("button--xs")}):tabInfoBtns.forEach(e=>{e.classList.add("button--download","button--download__underline"),e.classList.remove("button--xs")})},sectorTabBtns=(tabInfoBtns&&tabInfoBtnQuery.addEventListener("change",checkTabInfoBtn),checkTabInfoBtn(tabInfoBtnQuery),document.querySelectorAll("[data-tab-target]")),sectorTabContents=document.querySelectorAll(".tab-sector__content"),showSectorPanel=e=>{var t=e.target.dataset.tabTarget,t=document.getElementById(t);sectorTabBtns.forEach(e=>{e.classList.remove("active")}),sectorTabContents.forEach(e=>{e.classList.remove("active")}),e.target.classList.add("active"),t.classList.add("active")};sectorTabBtns&&sectorTabBtns.forEach(e=>{e.addEventListener("click",e=>showSectorPanel(e))});let bannerSwiper;const sliderBanner=document.querySelector(".slider-banner");sliderBanner&&(bannerSwiper=new Swiper(".slider-banner",{spaceBetween:300,speed:1100,parallax:!0,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:7500,disableOnInteraction:!1}}));let customersSwiper;const sliderCustomers=document.querySelector(".slider-customers");sliderCustomers&&(customersSwiper=new Swiper(".slider-customers",{spaceBetween:24,slidesPerView:"auto",speed:1100,loop:!0,loopedSlides:4,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",clickable:!0}}));let sectorTabSwiper;const sectorQuery=window.matchMedia("(min-width: 0px) and (max-width: 1110px)"),sectorBtnSlider=document.querySelector(".sectorsTabSlider"),addSectorTabSlider=e=>{e.matches&&sectorBtnSlider&&(sectorTabSwiper=new Swiper(".sectorsTabSlider",{spaceBetween:17,slidesPerView:"auto",loop:!0,loopedSlides:5,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",clickable:!0},breakpoints:{600:{spaceBetween:26}}}))},sectorsTabBtnsQuery=(sectorQuery.addEventListener("change",addSectorTabSlider),addSectorTabSlider(sectorQuery),window.matchMedia("(min-width: 0px) and (max-width: 600px)")),sectorSliderTabBtns=document.querySelectorAll("[data-tab-target]"),checkSectorsTabBtnsQuery=e=>{e.matches?sectorSliderTabBtns.forEach(e=>{e.classList.remove("button--mid"),e.classList.add("button--sm","button--tab")}):sectorSliderTabBtns.forEach(e=>{e.classList.add("button--mid"),e.classList.remove("button--sm","button--tab")})},commonCardBtn=(void 0!==sectorSliderTabBtns&&null!=sectorSliderTabBtns&&(sectorsTabBtnsQuery.addEventListener("change",checkSectorsTabBtnsQuery),checkSectorsTabBtnsQuery(sectorsTabBtnsQuery)),document.querySelector(".button--link.common-card__action")),commonCardBtnQuery=window.matchMedia("(min-width: 0px) and (max-width: 600px)"),toggleCommonCardBtn=e=>{e.matches?commonCardBtn.style.display="none":commonCardBtn.style.display="inline-block"};commonCardBtn&&(commonCardBtnQuery.addEventListener("change",toggleCommonCardBtn),toggleCommonCardBtn(commonCardBtnQuery));let testimonialSwiper;const testimonialSlider=document.querySelector(".testimonialSwiper");testimonialSlider&&(testimonialSwiper=new Swiper(".testimonialSwiper",{spaceBetween:300,speed:1100,parallax:!0,loop:!0,observer:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:7500,disableOnInteraction:!1}}));let blogSwiper;const blogQuery=window.matchMedia("(min-width: 0px) and (max-width:1150px)"),sliderBlog=document.querySelector(".blogSwiper"),addBlogSlider=e=>{e.matches&&sliderBlog&&(blogSwiper=new Swiper(".blogSwiper",{spaceBetween:25,slidesPerView:"auto",speed:1100,loop:!0,loopedSlides:3,observer:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",clickable:!0},breakpoints:{600:{slidesPerView:3}}}))},blogBtnContainer=(blogQuery.addEventListener("change",addBlogSlider),addBlogSlider(blogQuery),document.querySelector(".section-blog__action")),removeBlogBtn=e=>{e.matches?blogBtnContainer.style.display="none":blogBtnContainer.style.display="block"};blogBtnContainer&&(blogQuery.addEventListener("change",removeBlogBtn),removeBlogBtn(blogQuery));let videosSwiper;const videosSlider=document.querySelector(".videosSwiper"),packBtns=(videosSlider&&(videosSwiper=new Swiper(".videosSwiper",{spaceBetween:500,speed:1100,loop:!0,loopedSlides:3,observer:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:7500,disableOnInteraction:!1}})),document.querySelectorAll(".check-packages-card__action a")),packBtnQuery=window.matchMedia("(max-width: 992px)"),checkPackBtn=e=>{e.matches?packBtns.forEach(e=>{e.classList.remove("button--sm"),e.classList.add("button--xs")}):packBtns.forEach(e=>{e.classList.add("button--sm"),e.classList.remove("button--xs")})},featureDetailCardQuery=(packBtns&&(packBtnQuery.addEventListener("change",checkPackBtn),checkPackBtn(packBtnQuery)),window.matchMedia("(min-width: 0px) and (max-width:600px)")),featureDetailCards=document.querySelectorAll(".common-card.common-card--small figure img"),changeImgUrl=e=>{e.matches&&featureDetailCards?(featureDetailCards[0].src="https://source.unsplash.com/random/375x236",featureDetailCards[1].src="https://source.unsplash.com/random/375x236",featureDetailCards[2].src="https://source.unsplash.com/random/375x236"):(featureDetailCards[0].src="https://source.unsplash.com/random/552x236",featureDetailCards[1].src="https://source.unsplash.com/random/552x236",featureDetailCards[2].src="https://source.unsplash.com/random/552x236")},accordionItems=(0<featureDetailCards.length&&(featureDetailCardQuery.addEventListener("change",changeImgUrl),changeImgUrl(featureDetailCardQuery)),document.querySelectorAll(".accordion__item")),toggleAccordionBody=e=>{e=e.currentTarget;e.classList.contains("active")?e.classList.remove("active"):(accordionItems.forEach(e=>{e.classList.remove("active")}),e.classList.toggle("active"))};null!==accordionItems&&accordionItems.forEach(e=>{e.addEventListener("click",e=>toggleAccordionBody(e))});let featuresDetailSwiper;const featuresDetailSlider=document.querySelector(".feature-detail-slider"),sectionFeaturesDetail=document.querySelector(".section-detail-slider"),removeSectionFeatures=(featuresDetailSlider&&(featuresDetailSwiper=new Swiper(".feature-detail-slider",{spaceBetween:24,slidesPerView:"auto",speed:1100,loop:!0,loopedSlides:4,observer:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:7500,disableOnInteraction:!1}})),e=>{e.matches?sectionFeaturesDetail.style.display="none":sectionFeaturesDetail.style.display="block"});sectionFeaturesDetail&&(blogQuery.addEventListener("change",removeSectionFeatures),removeSectionFeatures(blogQuery));