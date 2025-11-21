/* 
1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:
objeto.encender(); auto encendido
objeto.apagar();    El auto se apagó
*/

// 1. crear el objeto auto con sus propiedades
const auto = {
  color: "rojo",
  marca: "Ford Mustang Shelby GT500",
  modelo: 2020,
  encendido: false,
  // 2. crear el metodo para encender el auto
  encender: function () {
    this.encendido = true;
    console.log("auto encendido");
  },
//   3.crear metodo para apagar el auto
  apagar: function () {
    this.encendido = false;
    console.log('El auto esta apagado')
  }
};

// pruebas
console.log(auto)
auto.encender(); // auto encendido
auto.apagar(); // el auto esta apagado