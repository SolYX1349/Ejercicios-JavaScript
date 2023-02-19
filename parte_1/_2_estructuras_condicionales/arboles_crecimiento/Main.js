function calcularCrecimientoArbol(medidaActual, medidaAlcanzar) {
  let years = 0;
  const MEDIDA_ESTANDAR = 0.23;
  const LIMITE_AÑOS = 1000000;
  for (let i = 0; i < LIMITE_AÑOS; i++) {
    if (medidaActual < medidaAlcanzar) {
      medidaActual += MEDIDA_ESTANDAR;
      years = i;
    } else {
      break;
    }
  }
  let cadea = "";
  return cadea.concat(
    "El árbol tardara " +
      years +
      " años en llegar a los " +
      medidaAlcanzar +
      " mts => " +
      medidaActual
  );
}

console.log(calcularCrecimientoArbol(0.13, 15.0));
