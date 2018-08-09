// Variables

const menuBtn = document.querySelector('div.menu-btn');
const menuBranding = document.querySelector('.menu .menu-branding');
const menuNav = document.querySelector('.menu .menu-nav');
const mainMenu = document.querySelector('header #main-menu');

















// Evntos 
menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('close');
    menuBranding.classList.toggle('show');
    menuNav.classList.toggle('show');
    mainMenu.classList.toggle('show');
});











