function obtenerCadenaBusquedaBrave(arg) {
  let cadenaBusqueda = arg;
  const palabrasBusqueda = cadenaBusqueda.split("=");
  const arrayPositiv = palabrasBusqueda[1].split("&");
  const arrayConcat = arrayPositiv[0].split("+");
  let cadena = "";
  for (let i = 0; i < arrayConcat.length; i++) {
    if (i === arrayConcat.length - 1) {
      cadena += arrayConcat[i];
      break;
    }
    cadena += arrayConcat[i] + " ";
  }
  return cadena;
}
let url =
  "https://search.brave.com/search?q=imagenes+de+animales+que+viven+en+cuevas&source=web";
console.log(obtenerCadenaBusquedaBrave(url));
