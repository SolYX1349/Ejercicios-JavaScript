class Persona {
  constructor(nombre, edad) {
    this._nombre = nombre;
    this._edad = edad;
  }
  toString() {
    return `Nombre: ${this._nombre} Edad: ${this._edad} `;
  }
}

class Empleado extends Persona {
  constructor(nombre, edad, puesto) {
    super(nombre, edad);
    this._puesto = puesto;
  }
  toString() {
    return `${super.toString()} Puesto: ${this._puesto} `;
  }
}

function imprimirDatos(obj) {
  console.log(obj.toString());
}

let persona = new Persona("Mauricio",23);
let empleado = new Empleado("Hector",25,"Gerente");

imprimirDatos(persona);
imprimirDatos(empleado);