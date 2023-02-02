class Persona {
  static contadorPersonas = 0;
  constructor(nombre, aepllido, edad) {
    this._nombre = nombre;
    this._apellido = aepllido;
    this._edad = edad;
    this._idPersona = ++Persona.contadorPersonas;
  }
  get getIdPersona() {
    return this._idPersona;
  }
  get getNombre() {
    return this._nombre;
  }
  set setNombre(nombre) {
    this._nombre = nombre;
  }
  get getApellido() {
    return this._apellido;
  }
  set setApellido(apellido) {
    this._apellido = apellido;
  }
  get getEdad() {
    return this._edad;
  }
  set setEdad(edad) {
    this._edad = edad;
  }
  toString() {
    return JSON.stringify(this);
  }
}

class Empleado extends Persona {
  static contadorEmpleado = 0;
  constructor(nombre, aepllido, edad, sueldo) {
    super(nombre, aepllido, edad);
    this._sueldo = sueldo;
    this._idEmpleado = ++Empleado.contadorEmpleado;
  }
  get getIdEmpleado() {
    return this._idEmpleado;
  }
  get getSueldo() {
    return this._sueldo;
  }
  set setSueldo(sueldo) {
    this._sueldo = sueldo;
  }
  toString() {
    return JSON.stringify(this);
  }
}

class Cliente extends Persona {
  static contadorClientes = 0;
  constructor(nombre, aepllido, edad) {
    super(nombre, aepllido, edad);
    this._fechaRegistro = new Date();
    this._idCliente = ++Cliente.contadorClientes;
  }
  get getIdCliente() {
    return this._idCliente;
  }
  get getFechaRegistro() {
    return this._fechaRegistro;
  }
  set setFechaRegistro(fecha) {
    this._fechaRegistro = fecha;
  }
  toString() {
    return JSON.stringify(this);
  }
}

let persona = new Persona("Carlos", "Soto", 24);
let empleado = new Empleado("Erick","Santos",53,20000);
let cliente = new Cliente("Maria","Lourdes",21);

console.log(persona.toString());
console.log(empleado.toString());
console.log(cliente.toString());