// Variables

const menuBtn = document.querySelector('div.menu-btn');
const menuBranding = document.querySelector('.menu .menu-branding');
const menuNav = document.querySelector('.menu .menu-nav');
const mainMenu = document.querySelector('header #main-menu');

// para obtener el ancho de la la barra de scroll 
const getScrollBarWidth = () => window.innerWidth - document.documentElement.getBoundingClientRect().width;
// asignar ese valor a una variable css
const cssScrollBarWidth = function(){
    console.log("es: ",getScrollBarWidth());
    document.documentElement.style.setProperty('--scrollbar',`${getScrollBarWidth()}px` );
}
window.addEventListener('load', cssScrollBarWidth);

















// Evntos 
menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('close');
    menuBranding.classList.toggle('show');
    menuNav.classList.toggle('show');
    mainMenu.classList.toggle('show');
});











