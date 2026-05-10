const grados = 6;

const manecillaHora    = document.querySelector('#hr');
const manecillaMinuto  = document.querySelector('#min');
const manecillaSegundo = document.querySelector('#seg');

setInterval(() => {
    const fecha = new Date();

    const horas    = fecha.getHours()   * 30;
    const minutos  = fecha.getMinutes() * grados;
    const segundos = fecha.getSeconds() * grados;

    manecillaHora.style.transform    = `rotateZ(${horas + (minutos / 12)}deg)`;  /* CORRECCIÓN: era "transfrom" */
    manecillaMinuto.style.transform  = `rotateZ(${minutos}deg)`;                 /* CORRECCIÓN: era "transfrom" */
    manecillaSegundo.style.transform = `rotateZ(${segundos}deg)`;                /* CORRECCIÓN: era "transfrom" */
}, 1000);