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
        this.listaDeContactos.forEach((contacto, index) => {
            document.write(`Nombre: ${contacto.nombre} - Teléfono: ${contacto.telefono}<br>`);
        });
    }

    // Busca un contacto por su nombre y devuelve su teléfono
    buscarContacto(buscarNombre){
        // .find() busca el objeto en el array que cumpla la condición
        const contactoEncontrado = this.listaDeContactos.find(contacto => contacto.nombre.toLowerCase() === buscarNombre.toLowerCase());
        if (contactoEncontrado){
            document.write(`🔎 El teléfono de ${contactoEncontrado.nombre} es: ${contactoEncontrado.telefono}<br>`);
            alert(`🔎 El teléfono de ${contactoEncontrado.nombre} es: ${contactoEncontrado.telefono}`)
        }else{
            alert(`❌ No se encontro el contacto ${buscarNombre} en la agenda.`)
        }
    }

    // Elimina un contacto de la agenda
    eliminarContacto(contactoAEliminar){
        // Buscamos el índice (la posición) del contacto en el array
    const indice = this.listaDeContactos.findIndex(contacto => contacto.nombre.toLowerCase() === contactoAEliminar.nombre.toLowerCase());

    if (indice !== -1){
        // .splice(posición, cuántos_eliminar) borra el elemento del array
        this.listaDeContactos.splice(indice, 1);
        document.write(`✅ Contacto ${contactoAEliminar.nombre} eliminado exitosamente.<br>`);
        alert(`✅ Contacto ${contactoAEliminar.nombre} eliminado exitosamente.`);
    }else{
        alert(`❌ No se encontro el contacto ${contactoAEliminar.nombre} en la agenda.`);
    }
    }
}

// 3. Clase persona

// Inicializar la agenda con un límite de 10 contactos
let preguntarLimite = prompt(`Ingrese el límite máximo de contactos para la agenda (por defecto es 10):`);
let contactoMaximo = parseInt(preguntarLimite);
if (isNaN(limiteMaximo) || limiteMaximo <= 0) {
    limiteMaximo = 10; // Valor por defecto si el usuario no ingresa un número válido
}

// Creo la instancia de nuestra agenda
const miAgenda = new Agenda(contactoMaximo);
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
                const nombre = prompt('Ingrese el nombre del contacto:');
                const telefono = prompt('Ingrese el teléfono del contacto:');
                const nuevoContacto = new Contacto(nombre, telefono);
                miAgenda.agregarContacto(nuevoContacto);
                break;
        }
}while