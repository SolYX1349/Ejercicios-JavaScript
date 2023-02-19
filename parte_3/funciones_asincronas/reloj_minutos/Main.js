function reloj() {
  let fecha = new Date();
  console.log( `Hora: ${fecha.getHours()} Minutos: ${fecha.getMinutes()} Segundos: ${fecha.getSeconds()}` );
}

setInterval(reloj, 60000); //Cada Minuto