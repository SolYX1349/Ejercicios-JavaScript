document
  .getElementById("botton-agregar-persona")
  .addEventListener("click", agregarPersona);
let persona = new Persona();
function agregarPersona() {
  let elemento = document.forms["formulario"];
  if (elemento["nombre"].value != "" && elemento["apellido"].value != "") {
    persona.agregarPersona(
      elemento["nombre"].value,
      elemento["apellido"].value
    );
    let texto = "";
    for (let objeto of persona.getArreglo) {
      texto += `<li>${objeto}</li>`;
    }
    document.getElementById("lista-desordenada").innerHTML = texto;
    limpiarInput();
  }else{
    alert("Tienes que llenar los campos Nombre y Apellido");
  }
}
function limpiarInput() {
  let elemento = document.forms["formulario"];
  elemento["nombre"].value = "";
  elemento["apellido"].value = "";
}