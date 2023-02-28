const carrusel = document.querySelector('.carrusel-items');

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth
let intervalo = null;
let step = 1;

const start = () => {
    intervalo = setInterval(function(){
        carrusel.scrollLeft = carrusel.scrollLeft + step;
    },10)
    if(carrusel.scrollLeft == maxScrollLeft){
        step = step * -1;
    }else if (carrusel.scrollLeft === 0){
        step = step * -1;
    }
};

const stop = () => {
    clearInterval(intervalo);
};

carrusel.addEventListener('mouseover', () =>{
    stop();
})
carrusel.addEventListener('mouseout', () =>{
    start();
})

start();


// ocultar menu responsive


// envio de mail
// const form = document.querySelector('.form');



// // add the event listener submit
// form.addEventListener('submit', sendEmail());

