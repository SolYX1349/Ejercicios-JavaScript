document.getElementById("buttonSumar").addEventListener("click", sumar);
document.getElementById("buttonRestar").addEventListener("click", restar);
document.getElementById("buttonMultiplicar").addEventListener("click", multiplicar);
document.getElementById("buttonDividir").addEventListener("click", dividir);
document.getElementById("buttonLimpiar").addEventListener("click", limpiar);

const mensaje = "Error";

function mostrar(element) {
  if (element == mensaje) {
    document.getElementById("display").style.color = "red";
    document.getElementById("display").innerHTML = element;
  } else {
    document.getElementById("display").style.color = "black";
    document.getElementById("display").innerHTML = element;
  }
}
function limpiar() {
  document.getElementById("display").innerHTML = "";
  let formulario = document.forms["calculadora-inputs"];
  formulario["numeroA"].value = "";
  formulario["numeroB"].value = "";
}
function obtenerInformacion() {
  let formulario = document.forms["calculadora-inputs"];
  let arg1 = formulario[0].value;
  let arg2 = formulario[1].value;
  const arreglo = [parseFloat(arg1), parseFloat(arg2)];
  return arreglo;
}
function validarDatos(arg1, arg2) {
  let isValid = false;
  if (!isNaN(arg1) && !isNaN(arg2)) {
    isValid = true;
  }
  return isValid;
}

function sumar() {
  let arreglo = obtenerInformacion();
  if (validarDatos(arreglo[0], arreglo[1])) {
    let result = arreglo[0] + arreglo[1];
    mostrar(result);
  } else {
    mostrar(mensaje);
  }
}
function restar() {
  let arreglo = obtenerInformacion();
  if (validarDatos(arreglo[0], arreglo[1])) {
    let result = arreglo[0] - arreglo[1];
    mostrar(result);
  } else {
    mostrar(mensaje);
  }
}
function multiplicar() {
  let arreglo = obtenerInformacion();
  if (validarDatos(arreglo[0], arreglo[1])) {
    let result = arreglo[0] * arreglo[1];
    mostrar(result);
  } else {
    mostrar(mensaje);
  }
}
function dividir() {
  let arreglo = obtenerInformacion();
  if (validarDatos(arreglo[0], arreglo[1])) {
    let result = arreglo[0] / arreglo[1];
    mostrar(result);
  } else {
    mostrar(mensaje);
  }
}
