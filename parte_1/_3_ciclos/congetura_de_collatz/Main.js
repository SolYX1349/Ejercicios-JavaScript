function congeturaDeCollats(number) {
  let cadenaNumeros = "";
  let i = 0;
  do {
    cadenaNumeros += number + ",";
    if (number % 2 === 0) {
      number = number / 2;
    } else {
      number = number * 3 + 1;
    }
    i++;
  } while (i < 5);
  return cadenaNumeros;
}

console.log(congeturaDeCollats(10));