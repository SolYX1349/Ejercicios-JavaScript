let horaActual = 3;
let cantidadHoras = 128;
let dias = 0;
let horas = horaActual;

for(let i = 0; i < cantidadHoras; i++){
    horas++;
    if(horas == 24){
        dias++;
        horas = 1;
    }
}
console.log("En "+ cantidadHoras + " hrs seran las " + horas  + " hrs y " + dias + " dias");