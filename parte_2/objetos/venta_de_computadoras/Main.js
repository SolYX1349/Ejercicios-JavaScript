class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }
  get getTipoEntrada() {
    return this._tipoEntrada;
  }
  set setTipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }
  get getMarca() {
    return this._marca;
  }
  set setMarca(marca) {
    this._marca = marca;
  }
}

class Raton extends DispositivoEntrada {
  static contadorRatones = 0;
  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRatones;
  }
  toString() {
    return `Raton ${this._idRaton} : Entada: ${this._tipoEntrada} Marca: ${this._marca}`;
  }
}

class Teclado extends DispositivoEntrada {
  static contadorTeclados = 0;
  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclados;
  }
  toString() {
    return `Teclado ${this._idTeclado} : Entada: ${this._tipoEntrada} Marca: ${this._marca}`;
  }
}

class Monitor {
  static contadorMonitores = 0;
  constructor(marca, tamaño) {
    this._idMonitor = ++Monitor.contadorMonitores;
    this._marca = marca;
    this._tamaño = tamaño;
  }
  get getIdMonitor() {
    return this._idMonitor;
  }
  get getMarca() {
    return this._marca;
  }
  set steMarca(marca) {
    this._marca = marca;
  }
  get getTamaño() {
    return this._tamaño;
  }
  set setTamaño(tamaño) {
    this._tamaño = tamaño;
  }
  toString() {
    return `Monitor ${this._idMonitor} : Marca: ${this._marca} Tamaño: ${this._tamaño}`;
  }
}

class Computadora {
  static contadorComputadoras = 0;
  constructor(nombre, monitor, teclado, raton) {
    this._idComputadora = ++Computadora.contadorComputadoras;
    this._nombre = nombre;
    this.monitor = monitor;
    this.teclado = teclado;
    this.raton = raton;
  }
  get getIdComputadora() {
    return this._idComputadora;
  }
  get getNombre() {
    return this._nombre;
  }
  set setNombre(nombre) {
    this._nombre = nombre;
  }
  toString() {
    return (
      "Computadora " +
      this._idComputadora +
      " : " +
      this._nombre +
      "\n" +
      this.monitor +
      "\n" +
      this.raton +
      "\n" +
      this.teclado
    );
  }
}

class Orden {
  static contadorOrdenes = 0;
  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._computadoras = [];
  }
  agregarComputadora(computadora) {
    this._computadoras.push(computadora);
  }
  mostrarOrden() {
    let cadena = "Orden: " + this._idOrden + " \n";
    for (let element of this._computadoras) {
      cadena += element + "\n";
    }
    return cadena;
  }
  get getIdOrden() {
    return this._idOrden;
  }
}

let raton1 = new Raton("USB", "Logitech");
let teclado1 = new Teclado("Bluethooth", "Logitech");
let monitor1 = new Monitor("Asus", "23x40");
let computadora1 = new Computadora("Razer", monitor1, teclado1, raton1);

let raton2 = new Raton("USB", "Asus");
let teclado2 = new Teclado("USB", "Razen");
let monitor2 = new Monitor("LG", "22x30");
let computadora2 = new Computadora("Razer", monitor2, teclado2, raton2);

let orden = new Orden();
orden.agregarComputadora(computadora1);
orden.agregarComputadora(computadora2);
console.log(orden.mostrarOrden());

/////

let raton3 = new Raton("USB", "Logitech");
let teclado3 = new Teclado("Bluethooth", "Logitech");
let monitor3 = new Monitor("Asus", "23x40");
let computadora3 = new Computadora("Razer", monitor3, teclado3, raton3);

let raton4 = new Raton("USB", "Asus");
let teclado4 = new Teclado("USB", "Razen");
let monitor4 = new Monitor("LG", "22x30");
let computadora4 = new Computadora("Razer", monitor4, teclado4, raton4);

let orden2 = new Orden();
orden2.agregarComputadora(computadora3);
orden2.agregarComputadora(computadora4);
console.log(orden2.mostrarOrden());
