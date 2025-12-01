/* 
4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }
  // metodo para imprimir datos
  imprimeDatos() {
    document.writeln(
      `Codigo: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio} <br>`
    );
  }
}

// crear instancias de Producto
const producto1 = new Producto(101, "Manzana", 0.5);
const producto2 = new Producto(102, "Banana", 0.3);
const producto3 = new Producto(103, "Cereza", 0.2);

// guardar instancias en un array
const productos = [producto1, producto2, producto3];

// utilizar el metodo imprimeDatos para mostrar los valores
productos.forEach((producto) => producto.imprimeDatos());
