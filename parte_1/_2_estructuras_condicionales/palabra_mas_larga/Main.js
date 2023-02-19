function palabraMasLarga(pal1, pal2) {
  let mensaje = "";
  if (pal1.length > pal2.length) {
    mensaje = "Las palabra " + pal1 + " es mas grande que la palabra " + pal2;
  } else if (pal1.length < pal2.length) {
    mensaje = "Las palabra " + pal2 + " es mas grande que la palabra " + pal1;
  } else {
    mensaje = "Las palabra " + pal1 + " & palabra " + pal2 + " Son identicas.";
  }

  return mensaje;
}
console.log(palabraMasLarga("hola", "adios"));
