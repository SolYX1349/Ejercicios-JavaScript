function gasolineria(cantidadLitros) {
  const VOLUMEN_TANQUE = 1000;
  let messaje = "";
  if (cantidadLitros == 0) {
    messaje = "Tanque vacio";
  } else if (cantidadLitros < VOLUMEN_TANQUE / 2) {
    messaje = "Tanque medio bajo";
  } else if (cantidadLitros == VOLUMEN_TANQUE / 2) {
    messaje = "Tanque medio";
  } else if (
    cantidadLitros > VOLUMEN_TANQUE / 2 ||
    cantidadLitros < VOLUMEN_TANQUE - 1
  ) {
    messaje = "Tanque Medio lleno";
  } else if (cantidadLitros == VOLUMEN_TANQUE) {
    messaje = "Tanque lleno";
  }
  return messaje;
}
console.log(gasolineria(10));
