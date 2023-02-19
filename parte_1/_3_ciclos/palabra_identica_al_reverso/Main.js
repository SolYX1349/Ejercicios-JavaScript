
function isIdentical(texto){
let texto2 = "";
let textLength = texto.length;

for (let i = textLength; i >= 0; i--) {
  texto2 += texto.charAt(--textLength, i);
}

if (texto === texto2) {
  console.log("La palabra es identica.");
} else {
  console.log("La palabra es distinta.");
}
}

isIdentical("lol");