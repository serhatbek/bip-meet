const dropdownBtns=document.querySelectorAll(".js-dropdown-btn"),dropdownItems=document.querySelectorAll(".dropdown"),menuToggleBtn=document.querySelector(".header__menu-toggle"),menuToggleIcon=document.querySelector(".header__menu-toggle img"),header=document.querySelector(".header"),headerNav=document.querySelector("nav"),headerBtns=document.querySelectorAll(".button--xs"),body=document.querySelector("body"),toggleMenu=(dropdownItems&&window.addEventListener("click",e=>{e.target.closest(".js-dropdown-btn")||dropdownBtns.forEach(e=>e.classList.remove("active"))}),()=>{headerNav.classList.contains("active")?(headerNav.classList.remove("active"),header.classList.remove("active"),menuToggleIcon.src="../assets/images/icons-menu-open.png",headerBtns.forEach(e=>e.classList.remove("button--lg")),body.classList.remove("overflowHidden")):(headerNav.classList.add("active"),header.classList.add("active"),body.classList.add("overflowHidden"),menuToggleIcon.src="../assets/images/icons-menu-close.png",headerBtns.forEach(e=>e.classList.add("button--lg")))}),mobileMediaQuery=(menuToggleBtn&&menuToggleBtn.addEventListener("click",toggleMenu),dropdownBtns&&dropdownBtns.forEach(e=>{e.addEventListener("click",e=>{e=e.currentTarget;e.classList.contains("active")?e.classList.remove("active"):(dropdownBtns.forEach(e=>{e.classList.remove("active")}),e.classList.add("active"))})}),window.matchMedia("(min-width: 1110px)")),checkMobileQuery=e=>{e.matches&&headerNav.classList.contains("active")&&toggleMenu()};mobileMediaQuery.addEventListener("change",checkMobileQuery),checkMobileQuery(mobileMediaQuery),window.addEventListener("scroll",()=>{header.classList.contains("sticky")&&140<window.scrollY?header.classList.add("header--sticky"):header.classList.remove("header--sticky")});var swiper=new Swiper(".swiper-banner",{spaceBetween:300,speed:1100,parallax:!0,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:7500,disableOnInteraction:!1}});const bannerBtnContainer=document.querySelectorAll(".banner-card__btns"),bannerSliderQuery=window.matchMedia("(max-width: 992px)");if(bannerBtnContainer){const k=t=>{bannerBtnContainer.forEach(e=>{t.matches&&2<=e.childElementCount?e.children[0].classList.add("button--v2","button--join"):e.children[0].classList.remove("button--v2","button--join")})};bannerSliderQuery.addEventListener("change",k),k(bannerSliderQuery)}const copyrightYear=document.querySelector("#year"),showTabPanel=(copyrightYear&&(copyrightYear.textContent=(new Date).getFullYear()),featuresTabItems=document.querySelectorAll(".accordiontab__item"),e=>{e=e.currentTarget;e.classList.contains("active")||(featuresTabItems.forEach(e=>e.classList.remove("active")),e.classList.add("active"))});featuresTabItems&&featuresTabItems.forEach(e=>{e.addEventListener("click",e=>{showTabPanel(e)})});