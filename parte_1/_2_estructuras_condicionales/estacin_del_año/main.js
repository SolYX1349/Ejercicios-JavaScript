let numeroMes = 10;
let mensaje;

switch (numeroMes) {
  case 1:
  case 2:
  case 12:
    mensaje = "Invierno";
    break;
  case 3:
  case 4:
  case 5:
    mensaje = "Primavera";
    break;
  case 6:
  case 7:
  case 8:
    mensaje = "Verano";
    break;
  case 9:
  case 10:
  case 11:
    mensaje = "Otoño";
    break;
  default:
    mensaje = "Numero de mes no encontrado";
}
console.log(numeroMes + " = " + mensaje)