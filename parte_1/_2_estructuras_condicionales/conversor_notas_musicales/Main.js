function convertirNota(nota) {
  let notaObtenida;
  switch (nota) {
    case "A":
    case "a":
      notaObtenida = "La";
      break;
    case "B":
    case "b":
      notaObtenida = "Si";
      break;
    case "C":
    case "c":
      notaObtenida = "Do";
      break;
    case "D":
    case "d":
      notaObtenida = "Re";
      break;
    case "E":
    case "e":
      notaObtenida = "Mi";
      break;
    case "F":
    case "f":
      notaObtenida = "Fa";
      break;
    case "G":
    case "g":
      notaObtenida = "Sol";
      break;
    default:
      notaObtenida = "La nota que intentas buscar no se encuentra.";
  }
  let messaje = nota + " = " + notaObtenida;
  return messaje;
}

console.log(convertirNota("g"));