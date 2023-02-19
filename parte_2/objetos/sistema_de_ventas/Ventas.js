class Producto {
  static contadorProductos = 0;
  constructor(nombre, precio) {
    this._idProducto = ++Producto.contadorProductos;
    this._nombre = nombre;
    this._precio = precio;
  }
  get getIdProducto() {
    return this._idProducto;
  }
  get getNombre() {
    return this._nombre;
  }
  set setNombre(nombre) {
    this._nombre = nombre;
  }
  get getPrecio() {
    return this._precio;
  }
  set setPrecio(precio) {
    this._precio = precio;
  }
  toString() {
    return JSON.stringify(this);
  }
}
class Orden {
  static contadorOrdenes = 0;
  arrayProductos = [];
  contadorProductosAgregados = 0;

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
  }
  agregarProductos(nombre, precio) {
    if (this.contadorProductosAgregados < Orden.MAX_PRODUCTOS) {
      this.arrayProductos.push(new Producto(nombre, precio));
      ++this.contadorProductosAgregados;
    } else {
      console.log("Maximo de productos alcanzado.");
    }
  }
  static get MAX_PRODUCTOS() {
    return 5;
  }
  calcularTotal() {
    let suma = 0;
    for (let element of this.arrayProductos) {
      suma += element.getPrecio;
    }
    return suma;
  }
  mostrarOrden() {
    let cadena = "Orden { id_orden = " + this._idOrden;
    for (let element of this.arrayProductos) {
      cadena += "\n" + element;
    }
    return (cadena += "\nTotal = $" + this.calcularTotal() + " }");
  }
  toString() {
    return JSON.stringify(this);
  }
}

// Test Ventas

let orden = new Orden();
orden.agregarProductos("Camisa", 125.0);
orden.agregarProductos("Pantalon", 189.0);
orden.agregarProductos("Tenis", 199.0);
orden.agregarProductos("Cartera", 217.0);
orden.agregarProductos("USB", 665.0);

console.log(orden.mostrarOrden());

let orden2 = new Orden();
orden2.agregarProductos("Camisa", 400.0);
orden2.agregarProductos("Pantalon", 450.0);
orden2.agregarProductos("Tenis", 780.0);
orden2.agregarProductos("Cartera", 210.0);
orden2.agregarProductos("USB", 605.0);

console.log(orden2.mostrarOrden());
