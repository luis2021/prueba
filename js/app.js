// Variables

const menuBtn = document.querySelector('div.menu-btn');
const menuBranding = document.querySelector('.menu .menu-branding');
const menuNav = document.querySelector('.menu .menu-nav');
const mainMenu = document.querySelector('header #main-menu');
const icons = document.querySelectorAll(".pagination .fa-circle");
const currentIndicator = document.querySelector(".pagination a"); //indicador de la pag actual
const i = document.querySelectorAll('.pagination a')
    
// Estilos

// posicionamiento de los iconos de la paginacion
icons[0].className = 'fas fa-circle';
icons[0].style.position = 'absolute';
icons[0].style.fontSize = "16px";
icons[0].style.color = 'rgba(0,0,0, .85)';
// 454547



for(let i=0; i<icons.length; i++){
    if(i==0 || i==1){
        icons[i].style.top = "0px";
    }
    else{
        icons[i].style.top = (i-1)*25 + "px";
    }
}


// animacion de la paginacion
// todo depende si se sube o se baja
let lastScroll = 0;
window.addEventListener('scroll', ()=>{
    let scrollTop = window.scrollY;

    // Si se hace scroll hacia abajo
    if(scrollTop > lastScroll){
        // pasamos a la pagina 4 
        if(window.scrollY >= 3*window.innerHeight){
            paginationAnimation(50,75,3);
        }
        // pasamos a la pagina 3 
        else if(window.scrollY >= 2*window.innerHeight){
            paginationAnimation(25,50, 2);
        }
        // pasamos a la pagina 2 
        else if(window.scrollY >= window.innerHeight){
            paginationAnimation(0,25, 1);
        }
        else if(window.scrollY < window.innerHeight){ 
            paginationAnimation(0,0,0);
        }
    }

    // Si se hace scroll hacia arriba
    else{
        if(window.scrollY < window.innerHeight/2){ 
            paginationAnimation(25,0,0)
        }
        // pasamos a la pagina 2 
        else if((window.scrollY + - 100)<= window.innerHeight){
            paginationAnimation(50,25,1);
        }
        // pasamos a la pagina 3 
        else if((window.scrollY - 100) <= 2*window.innerHeight){
            paginationAnimation(75,50,2);
        }
       // subimos de la pagina 4 
        else if((window.scrollY - 100) <= 3*window.innerHeight){
            paginationAnimation(0,0,3);
        }
    }
    lastScroll = scrollY;

});



// animacion de la pagincion

let lastIcon=0; 
function  paginationAnimation(inicialPosition, finalPosition, currentIicon){
    if(lastIcon == currentIicon){
        // no se hace la animacion
    }
    else{
        currentIndicator.animate([
            {transform: `translateY(${inicialPosition + 'px'})`},
            {transform: `translateY(${finalPosition + 'px'})`}
        ],{
            duration: 300,
            fill: "forwards",
            easing: "ease-in-out",
            
        });
        lastIcon = currentIicon;
    }
}


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
    console.log("es: ",getScrollBarWidth());
    document.documentElement.style.setProperty('--scrollbar',`${getScrollBarWidth()}px` );
}
window.addEventListener('load', cssScrollBarWidth);


