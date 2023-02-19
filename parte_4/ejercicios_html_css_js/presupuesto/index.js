const arregloIngresos = [];
const arregloEgresos = [];

const montoIngresos = [];
const montoEgresos = [];

document.getElementById("button-agre").addEventListener("click", traerDatos);

function traerDatos() {
  let tipoValNum = document.getElementById("ing-tipo-val").value;
  let mensaje = document.getElementById("mensajnombre-presupuesto").value;
  let monto = document.getElementById("valor-presupuesto").value;
  if (!isNaN(monto) && mensaje != "") {
    monto = monto < 0 ? monto * -1 : monto;
    agregarDatosTarjeta(tipoValNum, mensaje, monto);
    mostrarValor();
  } else {
    alert("Error al ingresar un monto o no \ningresaste un mensaje.");
  }
}
function agregarDatosTarjeta(tipoValNum, mensaje, monto) {
  switch (tipoValNum) {
    case (tipoValNum = "positivo"):
      arregloIngresos.push(
        `<li><p>${mensaje}</p><p id="dinero-positivo-c-m-d">+$${monto}</p></li>`
      );
      montoIngresos.push(parseFloat(monto));
      let texto = "";
      for (let element of arregloIngresos) {
        texto += element + "\n";
      }
      document.getElementById("lista-ingresos").innerHTML = texto;
      break;
    case (tipoValNum = "negativo"):
      arregloEgresos.push(
        `<li id="lista-egresos"><p>${mensaje}</p><p id="dinero-negativo-c-m-d">-$${monto}</p></li>`
      );
      montoEgresos.push(parseFloat(monto));
      let texto1 = "";
      for (let element of arregloEgresos) {
        texto1 += element + "\n";
      }
      document.getElementById("lista-egresos").innerHTML = texto1;
      break;
    default:
      alert("Ocurrio un error");
  }
}
function mostrarValor() {
  if (operacionPresupuesto() >= 0) {
    document.getElementById("valor-presupuesto-final").style.color = "#39c028";
    document.getElementById("valor-presupuesto-final").innerHTML =
      "$" + operacionPresupuesto();
  } else {
    document.getElementById("valor-presupuesto-final").style.color = "#e62121";
    document.getElementById("valor-presupuesto-final").innerHTML =
      "-$" + operacionPresupuesto() * -1;
  }
  document.getElementById("valor-ingresos-final").innerHTML = "$" + ingresos();
  document.getElementById("valor-egresos-final").innerHTML = "$" + egresos();
}
function operacionPresupuesto() {
  return ingresos() - egresos();
}
function ingresos() {
  let valFinal = 0;
  for (const val of montoIngresos) {
    valFinal += val;
  }
  return valFinal;
}
function egresos() {
  let valFinal = 0;
  for (const val of montoEgresos) {
    valFinal += val;
  }
  return valFinal;
}
