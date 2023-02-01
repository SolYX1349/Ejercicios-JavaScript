function numerosPromedio() {
  let positivo = 0,
    negativo = 0,
    nullo = 0;
  for (let i = 0; i < arguments.length; i++) {
    let numero = arguments[i];
    if (numero >= 1) {
      positivo++;
    } else if (numero <= -1) {
      negativo++;
    } else {
      nullo++;
    }
  }
  console.log(
    "Negativos = " +
      negativo +
      " Positivos = " +
      positivo +
      " Nullos = " +
      nullo
  );
}

numerosPromedio(-1, 5, 8, 3, 0);
