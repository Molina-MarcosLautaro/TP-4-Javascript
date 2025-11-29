/* 
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
*/

// clase rectangulo
class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
    // metodos para modificar las propiedades
    setAlto(nuevoAlto){
        this.alto = nuevoAlto;
    }
    setAncho(nuevoAncho){
        this.ancho = nuevoAncho;
    }
    // metodos para mostrar las propiedades
    getAlto(){
        return this.alto;
    }
    getAncho(){
        return this.ancho;
    }
    // metodo para calcular el perimetro
    calcularPerimetro(){
        return 2 * (this.alto + this.ancho);
    }
    // metodo para calcular el area
    calcularArea(){
        return this.alto * this.ancho;
    }
}

// pruebas
const rectangulo1 = new Rectangulo(10, 5);
document.writeln(`Alto: ${rectangulo1.getAlto()} <br>`);
document.writeln(`Ancho: ${rectangulo1.getAncho()}`)
document.writeln(`<br>Perimetro: ${rectangulo1.calcularPerimetro()}`);
document.writeln(`<br>Area: ${rectangulo1.calcularArea()}`);