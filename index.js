const grados = 6;

const manecillaHora    = document.querySelector('#hr');
const manecillaMinuto  = document.querySelector('#min');
const manecillaSegundo = document.querySelector('#seg');

setInterval(() => {
    const fecha = new Date();

    const horas    = fecha.getHours()   * 30;
    const minutos  = fecha.getMinutes() * grados;
    const segundos = fecha.getSeconds() * grados;

    manecillaHora.style.transform    = `rotateZ(${horas + (minutos / 12)}deg)`;  
    manecillaMinuto.style.transform  = `rotateZ(${minutos}deg)`;                 
    manecillaSegundo.style.transform = `rotateZ(${segundos}deg)`;                
}, 1000);