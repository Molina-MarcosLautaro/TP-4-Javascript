// 1. Clase contacto 
class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
}

// 2. Clase agenda
class Agenda {
    constructor(limiteMaximo = 10) {
        this.limiteMaximo = limiteMaximo;
        this.listaDeContactos = [];
    }

    // Indico si la agenda esta llena o no
    agendaLlena() {
        return this.listaDeContactos.length >= this.limiteMaximo;
    }

    // Indica cuántos contactos más podemos ingresar
    espacioDisponible() {
        return this.limiteMaximo - this.listaDeContactos.length;
    }

    // Indica si el contacto pasado existe o no (compara por nombre)
    existeContacto(buscarContacto) {
        // .some() recorre el array y devuelve true si encuentra una coincidencia
        return this.listaDeContactos.some(contacto => contacto.nombre.toLowerCase() === buscarContacto.nombre.toLowerCase());
    }

    // Añade un contacto a la agenda
    agregarContacto(nuevoContacto) {
        if (this.agendaLlena()) {
            document.write(`❌ No se puede agregar el contacto ${nuevoContacto.nombre}. La agenda está llena.<br>`);
            alert(`❌ La agenda está llena. No se puede agregar el contacto ${nuevoContacto.nombre}.`);
            return;
        }
        if (this.existeContacto(nuevoContacto)){
            document.write(`⚠️ El contacto ${nuevoContacto.nombre} ya existe en la agenda.<br>`);
            alert(`⚠️ El contacto ${nuevoContacto.nombre} ya existe en la agenda.`);
            return;
        }
        this.listaDeContactos.push(nuevoContacto);
        document.write(`✅ Contacto ${nuevoContacto.nombre} agregado exitosamente.<br>`);
        alert(`✅ Contacto ${nuevoContacto.nombre} agregado exitosamente.`);
        return;
    }

    // Lista toda la agenda 
    listarContacto(){
        if (this.listaDeContactos.length === 0){
            document.write('📭 La agenda está vacía.<br>');
            alert('📭 La agenda esta vacia.');
            return;
        }
        document.write('<h3>📋 LISTA DE CONTACTOS</h3>')
        this.listaDeContactos.forEach((contacto) => {
            document.write(`Nombre: ${contacto.nombre}`)
        })
    }
}