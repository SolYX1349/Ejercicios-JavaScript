document
  .getElementById("botton-agregar-persona")
  .addEventListener("click", agregarPersona);
let persona = new Persona();
function agregarPersona() {
  let elemento = document.forms["formulario"];
  persona.agregarPersona(elemento["nombre"].value , elemento["apellido"].value);
  let texto = "";
  for (let objeto of persona.getArreglo) {
    texto += `<li>${objeto}</li>`
  }
  document.getElementById("lista-desordenada").innerHTML = texto;
  limpiarInput();
}
function limpiarInput(){
    let elemento = document.forms["formulario"];
    elemento["nombre"].value = "";
    elemento["apellido"].value = "";
}