class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }
  arreglo = [];
  agregarPersona(nombre, apellido) {
    this.arreglo.push(new Persona(nombre, apellido));
  }
  get getArreglo() {
    return this.arreglo;
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
  toString() {
    return `${this._nombre} ${this._apellido}`;
  }
}
