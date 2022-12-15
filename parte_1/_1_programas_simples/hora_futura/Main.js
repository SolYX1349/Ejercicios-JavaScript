let horaActual = 3;
let cantidadHoras = 190;
let dias = 0;
let horas = horaActual;

for(let i = 0; i < cantidadHoras; i++){
    horas++;
    if(horas > 12){
        dias++;
        horas = 1;
    }
}
console.log("En "+ cantidadHoras + " hrs seran las " + horas  + " hrs y " + dias + " dias");