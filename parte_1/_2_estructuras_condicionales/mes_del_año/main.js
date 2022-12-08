let numeroMes = 10;
let mes;
if (numeroMes === 1) {
  mes = "Enero";
} else if (numeroMes === 2) {
  mes = "Febrero";
} else if (numeroMes === 3) {
  mes = "Marzo";
} else if (numeroMes === 4) {
  mes = "Abril";
} else if (numeroMes === 5) {
  mes = "Mayo";
} else if (numeroMes === 6) {
  mes = "Junio";
} else if (numeroMes === 7) {
  mes = "Julio";
} else if (numeroMes === 8) {
  mes = "Agosto";
} else if (numeroMes === 9) {
  mes = "Septiembre";
} else if (numeroMes === 10) {
  mes = "Octubre";
} else if (numeroMes === 11) {
  mes = "Noviembre";
} else if (numeroMes === 12) {
  mes = "Diciembre";
} else {
  mes;
}
if (mes !== undefined) {
  console.log("El numero " + numeroMes + " es el mes de " + mes);
} else {
  console.log("El mes " + numeroMes + " no existe");
}
