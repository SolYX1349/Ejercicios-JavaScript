let numero1 = 5;
let numero2 = 12;
let operador = "+";
let resultado;
let mensaje;
switch (operador) {
  case "+":
    resultado = numero1 + numero2;
    break;
  case "-":
    resultado = numero1 - numero2;
    break;
  case "*":
    resultado = numero1 * numero2;
    break;
  case "/":
    resultado = numero1 / numero2;
    break;
  default:
    mensaje = "No se ha encontrado el simbolo ingresado.";
}
if (resultado != undefined) {
  mensaje = numero1 + " " + operador + " " + numero2 + " = " + resultado;
  console.log(mensaje);
} else {
  console.log(mensaje);
}
