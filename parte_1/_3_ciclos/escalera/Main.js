function escalera(numero) {
  let cadena = "";
  for (let i = 1; i <= numero; i++) {
    for (let x = 1; x <= i; x++) {
      cadena += x;
    }
    cadena += "\n";
  }
  return cadena;
}

console.log(escalera(10));
