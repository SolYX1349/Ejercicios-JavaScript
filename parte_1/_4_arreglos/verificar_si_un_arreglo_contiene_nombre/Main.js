"use strict"
function checkIfContainsName(arreglo , nombre){
    for (let element of arreglo) {
        if(element == nombre){
            return true;
        }
    }
    return false;
}
let nombres = ["Carlos","Mauricio","Hector"];
console.log(checkIfContainsName(nombres , "Hector"));
console.log(checkIfContainsName(nombres , "Cristian"));