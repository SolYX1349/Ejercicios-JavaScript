let diaSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
];
let mounth = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
function reloj() {
  setInterval(obtenerDatos, 1000);
}

function obtenerDatos() {
  let fecha = new Date();
  document.getElementById("nombre-dia").innerHTML = diaSemana[fecha.getDay()];
  document.getElementById("numero-dia").innerHTML = fecha.getDay();
  document.getElementById("mes").innerHTML = mounth[fecha.getMonth()];
  document.getElementById("hora-dia").innerHTML = fecha.getHours();
  document.getElementById("minuto-dia").innerHTML = fecha.getMinutes();
  document.getElementById("segundo-dia").innerHTML = fecha.getSeconds();
}
