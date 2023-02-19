const numeros = [1,2,3,4,5];
let receptor = 0;
let resultado = 0;

for (let i = 0; i < numeros.length; i++) {
    receptor = numeros [i];
    resultado += receptor;
}
console.log("Suma de el arreglo = " + resultado);