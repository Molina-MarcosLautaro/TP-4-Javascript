/* 
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:


esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/

class Persona {
  constructor(nombre, edad, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = this.generaDNI();
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }

  //   metodo1 mostrarGeneracion
  mostrarGeneracion() {
    const año = this.anioNacimiento;
    if (año >= 1994 && año <= 2010) {
      document.writeln(
        "Generación Z, el rasgo característico es la irreverencia"
      );
    } else if (año >= 1981 && año <= 1993) {
      document.writeln(
        "Generación Y, el rasgo característico es la frustración"
      );
    } else if (año >= 1969 && año <= 1980) {
      document.writeln(
        "Generación X, el rasgo característico es la obsesión por el éxito"
      );
    } else if (año >= 1949 && año <= 1968) {
      document.writeln(
        "Generación Baby Boom, el rasgo característico es la ambición"
      );
    } else if (año >= 1930 && año <= 1948) {
      document.writeln(
        "Generación Silent Generation, el rasgo característico es la austeridad"
      );
    } else {
      document.writeln("Año de nacimiento no válido");
    }
  }
  // metodo2 esMayorDeEdad
  esMayorDeEdad() {
    const edad = this.edad;
    document.writeln('<br>')
    if (edad >= 18) {
      document.writeln('Es mayor de edad.');
    } else {
      document.writeln('Es menor de edad.');
    }
  }
  // metodo3 mostrarDatos
  mostrarDatos(){
    document.writeln('<br>');
    document.writeln(`Datos de la persona: <br>`);
    document.writeln(`Nombre: ${this.nombre} <br>`);
    document.writeln(`Edad: ${this.edad} <br>`);
    document.writeln(`DNI: ${this.DNI} <br>`);
    document.writeln(`Sexo: ${this.sexo} <br>`);
    document.writeln(`Peso: ${this.peso} <br>`);
    document.writeln(`Altura: ${this.altura} <br>`);
    document.writeln(`Año de nacimiento: ${this.anioNacimiento} <br>`);
  }
  // metodo4 generaDNI
  generaDNI() {
    const min = 10000000;
    const max = 99999999;
    document.writeln('<br>');
    document.writeln(`DNI generado: ${Math.floor(Math.random() * (max - min + 1) + min)}`)
  }
}

// Ejemplo de uso:
const persona1 = new Persona(
  'Juan perez',
  20,
  'H',
  70,
  1.81,
  2005,
)
persona1.mostrarGeneracion();
persona1.esMayorDeEdad();
persona1.mostrarDatos();
persona1.generaDNI();