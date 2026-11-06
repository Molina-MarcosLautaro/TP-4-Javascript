// 1. Clase contacto 
class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
}

// 2. Clase agenda
class Agenda {
    constructor(limiteMaximo = 7) {
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
            console.log(`❌ No se puede agregar el contacto ${nuevoContacto.nombre}. La agenda está llena.`);
            alert(`❌ La agenda está llena. No se puede agregar el contacto ${nuevoContacto.nombre}.`);
            return;
        }
        if (this.existeContacto(nuevoContacto)) {
            console.log(`⚠️ El contacto ${nuevoContacto.nombre} ya existe en la agenda.`);
            alert(`⚠️ El contacto ${nuevoContacto.nombre} ya existe en la agenda.`);
            return;
        }
        this.listaDeContactos.push(nuevoContacto);
        console.log(`✅ Contacto ${nuevoContacto.nombre} agregado exitosamente.`);
        alert(`✅ Contacto ${nuevoContacto.nombre} agregado exitosamente.`);
        return;
    }

    // Lista toda la agenda 
    listarContacto() {
        if (this.listaDeContactos.length === 0) {
            console.log('📭 La agenda está vacía.');
            alert('📭 La agenda esta vacia.');
            return;
        }
        console.log('<h3>📋 LISTA DE CONTACTOS</h3>')
        this.listaDeContactos.forEach((contacto, index) => {
            console.log(`Nombre: ${contacto.nombre} - Teléfono: ${contacto.telefono}`);
        });
    }

    // Busca un contacto por su nombre y devuelve su teléfono
    buscarContacto(buscarNombre) {
        // .find() busca el objeto en el array que cumpla la condición
        const contactoEncontrado = this.listaDeContactos.find(contacto => contacto.nombre.toLowerCase() === buscarNombre.toLowerCase());
        if (contactoEncontrado) {
            console.log(`🔎 El teléfono de ${contactoEncontrado.nombre} es: ${contactoEncontrado.telefono}`);
            alert(`🔎 El teléfono de ${contactoEncontrado.nombre} es: ${contactoEncontrado.telefono}`)
        } else {
            alert(`❌ No se encontro el contacto ${buscarNombre} en la agenda.`)
        }
    }

    // Elimina un contacto de la agenda
    eliminarContacto(contactoAEliminar) {
        // Buscamos el índice (la posición) del contacto en el array
        const indice = this.listaDeContactos.findIndex(contacto => contacto.nombre.toLowerCase() === contactoAEliminar.nombre.toLowerCase());

        if (indice !== -1) {
            // .splice(posición, cuántos_eliminar) borra el elemento del array
            this.listaDeContactos.splice(indice, 1);
            console.log(`✅ Contacto ${contactoAEliminar.nombre} eliminado exitosamente.`);
            alert(`✅ Contacto ${contactoAEliminar.nombre} eliminado exitosamente.`);
        } else {
            alert(`❌ No se encontro el contacto ${contactoAEliminar.nombre} en la agenda.`);
        }
    }
}

// 3. Clase persona

// Inicializar la agenda con un límite de 7 contactos
let tamanoInput = prompt("Ingrese el tamaño de la agenda (Deje vacío para usar 7 por defecto):");
let tamano = tamanoInput === "" || tamanoInput === null ? undefined : parseInt(tamanoInput);

// Creo la instancia de nuestra agenda
const miAgenda = new Agenda(tamano);

let opciones;

// Bucle que mantiene vivo el menú hasta q se ingrese '7'
do {
    opciones = prompt(`Seleccione una opción:
        1. Agregar contacto
        2. Listar contactos
        3. Buscar contacto
        4. Eliminar contacto
        5. Verificar si la agenda está llena
        6. Verificar espacio disponible
        7. Salir
        Seleccione una opción del 1 al 7:`);

    switch (opciones) {
        case '1':
            let nombre = prompt('Ingrese el nombre del contacto:');
            let telefono = prompt('Ingrese el teléfono del contacto:');
            if (nombre && telefono) {
                let nuevoContacto = new Contacto(nombre, telefono);
                miAgenda.agregarContacto(nuevoContacto);
            } else {
                alert("⚠️ El nombre y el teléfono son obligatorios.")
            }
            break;

        case '2':
                miAgenda.listarContacto();
            break;

        case '3':
            let nombreABuscar = prompt('Ingrese el nombre del contacto a buscar:');
            if (nombreABuscar){
                miAgenda.buscarContacto(nombreABuscar);
            }
            break;

        case '4':
            let nombreAEliminar = prompt('Ingrese el nombre del contacto a eliminar:');
            if (nombreAEliminar) {
                let contactoAEliminar = new Contacto(nombreAEliminar, '');
                miAgenda.eliminarContacto(contactoAEliminar);
            }
            break;

        case '5':
            if (miAgenda.agendaLlena()) {
                alert('🔒 Sí, la agenda está llena.');
            } else {
                alert('🔓 No, todavía queda espacio disponible.');
            }
            break;

        case '6':
            let vacios = miAgenda.espacioDisponible();
            alert(`📅 Espacio disponible: ${vacios}`);
            break;

        case '7':
            alert('👋 ¡Gracias por usar la agenda! Saliendo del programa...');
            break;

        case null: // Si el usuario presiona "Cancelar" en el prompt del menú
            opciones = '7';
            alert('👋 Saliendo del programa...');
            break;

        default:
            alert('⚠️ Opción no válida. Por favor, elija un número del 1 al 7.')
            break;
    }
} while (opciones !== '7');