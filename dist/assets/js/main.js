const dropdownBtns=document.querySelectorAll(".js-dropdown-btn"),dropdownItems=document.querySelectorAll(".dropdown"),menuToggleBtn=document.querySelector(".header__menu-toggle"),menuToggleIcon=document.querySelector(".header__menu-toggle img"),header=document.querySelector(".header"),headerNav=document.querySelector("nav"),navOverlay=document.querySelector(".nav-overlay"),headerBtns=document.querySelectorAll(".button--xs"),body=document.querySelector("body"),toggleMenu=(dropdownItems&&window.addEventListener("click",e=>{e.target.closest(".js-dropdown-btn")||dropdownBtns.forEach(e=>{e.classList.remove("active"),navOverlay.classList.remove("active"),body.classList.remove("overflowHidden")})}),()=>{headerNav.classList.contains("active")?(headerNav.classList.remove("active"),header.classList.remove("active"),menuToggleIcon.src="../assets/images/icons-menu-open.png",headerBtns.forEach(e=>e.classList.remove("button--lg")),body.classList.remove("overflowHidden")):(headerNav.classList.add("active"),header.classList.add("active"),body.classList.add("overflowHidden"),menuToggleIcon.src="../assets/images/icons-menu-close.png",headerBtns.forEach(e=>e.classList.add("button--lg")))}),mobileMediaQuery=(menuToggleBtn&&menuToggleBtn.addEventListener("click",toggleMenu),dropdownBtns&&dropdownBtns.forEach(e=>{e.addEventListener("click",e=>{e=e.currentTarget;e.classList.contains("active")?(e.classList.remove("active"),navOverlay.classList.remove("active"),body.classList.remove("overflowHidden")):(dropdownBtns.forEach(e=>{e.classList.remove("active")}),e.classList.add("active"),navOverlay.classList.add("active"),body.classList.add("overflowHidden"))})}),window.matchMedia("(min-width: 1110px)")),checkMobileQuery=e=>{e.matches&&headerNav.classList.contains("active")&&toggleMenu()},sliderBanner=(mobileMediaQuery.addEventListener("change",checkMobileQuery),checkMobileQuery(mobileMediaQuery),window.addEventListener("scroll",()=>{header.classList.contains("sticky")&&140<window.scrollY?header.classList.add("header--sticky"):header.classList.remove("header--sticky")}),document.querySelector(".slider-banner"));var swiper;sliderBanner&&(swiper=new Swiper(".slider-banner",{spaceBetween:300,speed:1100,parallax:!0,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:7500,disableOnInteraction:!1}}));const sliderCustomers=document.querySelector(".slider-customers"),sliderSectorTab=(sliderCustomers&&(swiper=new Swiper(".slider-customers",{spaceBetween:24,slidesPerView:1,speed:1100,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",clickable:!0},breakpoints:{460:{slidesPerView:2},600:{slidesPerView:3},992:{slidesPerView:4}}})),document.querySelector(".slider-sector-tab"));if(sliderSectorTab){const k=window.matchMedia("(max-width: 1110px)"),l=e=>{e.matches&&new Swiper(".slider-sector-tab",{spaceBetween:26,slidesPerView:5,speed:1100,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",clickable:!0}})};k.addEventListener("change",l),l(k)}const bannerBtnContainer=document.querySelectorAll(".banner-card__btns"),bannerSliderQuery=window.matchMedia("(max-width: 992px)");if(bannerBtnContainer){const o=t=>{bannerBtnContainer.forEach(e=>{t.matches&&2<=e.childElementCount?e.children[0].classList.add("button--v2","button--join"):e.children[0].classList.remove("button--v2","button--join")})};bannerSliderQuery.addEventListener("change",o),o(bannerSliderQuery)}const copyrightYear=document.querySelector("#year"),showTabPanel=(copyrightYear&&(copyrightYear.textContent=(new Date).getFullYear()),featuresTabItems=document.querySelectorAll(".accordiontab__item"),e=>{e=e.currentTarget;e.classList.contains("active")||(featuresTabItems.forEach(e=>e.classList.remove("active")),e.classList.add("active"))}),tabInfoBtnQuery=(featuresTabItems&&featuresTabItems.forEach(e=>{e.addEventListener("click",e=>{showTabPanel(e)})}),tabInfoBtns=document.querySelectorAll(".tab-info-btn"),window.matchMedia("(max-width: 600px)")),checkTabInfoBtn=e=>{e.matches?tabInfoBtns.forEach(e=>{e.classList.remove("button--download","button--download__underline"),e.classList.add("button--xs")}):tabInfoBtns.forEach(e=>{e.classList.add("button--download","button--download__underline"),e.classList.remove("button--xs")})},sectorTabBtns=(tabInfoBtns&&tabInfoBtnQuery.addEventListener("change",checkTabInfoBtn),checkTabInfoBtn(tabInfoBtnQuery),document.querySelectorAll("[data-tab-target]")),sectorTabContents=document.querySelectorAll(".tab-sector__content"),showSectorPanel=e=>{var t=e.target.dataset.tabTarget,t=document.getElementById(t);sectorTabBtns.forEach(e=>{e.classList.remove("active")}),sectorTabContents.forEach(e=>{e.classList.remove("active")}),e.target.classList.add("active"),t.classList.add("active")};sectorTabBtns&&sectorTabBtns.forEach(e=>{e.addEventListener("click",e=>showSectorPanel(e))});