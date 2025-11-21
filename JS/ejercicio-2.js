//? 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:

//*    -Una propiedad titular con el valor "Alex".
//*    -Una propiedad saldo, teniendo como valor inicial 0.
//*    -Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
//*    -Un método extraer() que permita retirar la cantidad pasada como parámetro.
//*    -Un método informar() que retorne la información del estado de la cuenta.

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

// crear objeto cuenta
const cuenta = {
    titular: 'Marcos',
    saldo: 0,
    // metodo ingresar dinero
    ingresar: function(cantidad) {
        this.saldo += cantidad; // tambien funciona asi this.saldo = this.saldo + (tambien con - )cantidad
    },
    // método para extraer dinero
    extraer: function(cantidad) {
        if (cantidad <= this.saldo) {
            this.saldo -= cantidad;
        } else {
            console.log('Saldo insuficiente')
        }
    },
    // método informar estado de la cuenta
    informar: function(){
        return `Titular: ${this.titular}, 
        Saldo: $${this.saldo}`;
    }
}

// pruebas
document.writeln(cuenta.informar()); // titular: marcos, saldo: $0
document.writeln('<br>')
cuenta.ingresar(500);
document.writeln(cuenta.informar()) // titular: marcos, saldo: $500
document.writeln('<br>')
cuenta.extraer(200);
document.writeln(cuenta.informar()) // titular: marcos, saldo: $300