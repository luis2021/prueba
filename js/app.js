// Variables

const menuBtn = document.querySelector('div.menu-btn');
const menuBranding = document.querySelector('.menu .menu-branding');
const menuNav = document.querySelector('.menu .menu-nav');
const mainMenu = document.querySelector('header #main-menu');
const icons = document.querySelectorAll(".pagination .fa-circle");

// Estilos

// transicion en la paginacion 
icons[0].className = 'fas fa-circle';
icons[0].style.position = 'absolute';
icons[0].style.fontSize = "16px";
icons[0].style.color = 'rgba(0,0,0, 1)';

console.log(`var ${icons[1]}`)

// animaciones y eventos para el boton de menu 
menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('close');
    menuBranding.classList.toggle('show');
    menuNav.classList.toggle('show');
    mainMenu.classList.toggle('show');
});






// animaciones para el boton de "hire me"
const btn = document.querySelector('.btn');

btn.addEventListener('mousemove', (e) => {
    const sensitivity = 30;
  const { offsetX, offsetY } = e;  
  const { offsetHeight, offsetWidth} = e.target;

  const y = -((offsetX / offsetWidth) - 0.5) * sensitivity;
  const x = ((offsetY / offsetHeight) - 0.5) * sensitivity;

  btn.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(0) scale(1.2)`;
});  

btn.addEventListener('mouseout', () => {
    btn.style.transform = "scale(1.0) rotateX(0) rotateY(0)";
});    






// para obtener el ancho de la la barra de scroll para usarla en los entilos css
const getScrollBarWidth = () => window.innerWidth - document.documentElement.getBoundingClientRect().width;
// asignar ese valor a una variable css
const cssScrollBarWidth = function(){
    console.log("es : ",getScrollBarWidth());
    document.documentElement.style.setProperty('--scrollbar',`${getScrollBarWidth()}px` );
}
window.addEventListener('load', cssScrollBarWidth);







