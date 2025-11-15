/* Crea un array de objetos, donde cada objeto represente a un estudiante con propiedades nombre y nota. Luego, escribe una función que reciba este array y calcule la nota media de los estudiantes. Usa un bucle para recorrer el array. Usa prompt para ingresar los datos de los estudiantes.*/

// 1. crear un array vacio para los estudiantes
const estudiantes = [];
const cantidadEstudiantes = parseInt(prompt('¿Cuantos estudiantes deseas integrar?'));
// 2. pedir datos de los estudiantes al usuario
for (let i = 0; i < cantidadEstudiantes; i++){
    const nombre = prompt(`Ingresa el nombre del estudiante ${i + 1}:`);
    const nota = parseFloat(prompt(`Ingrese la nota de ${nombre}:`));
    // 3. crear un objeto estudiante y agregarlo al array
    const estudiante = {
        nombre: nombre,
        nota: nota
    };
    estudiantes.push(estudiante);
};
// 4. funcion que calcula la nota media
function calcularNotaMedia(estudiantes){
    let sumaNotas = 0;
    for (let i = 0; i < estudiantes.length; i++){
        sumaNotas += estudiantes[i].nota;
    }
    return sumaNotas / estudiantes.length;
};
// 5. llamar a la funcion y mostrar el resultado
const notaMedia = calcularNotaMedia(estudiantes);
document.writeln(`<h3>La nota media es: ${notaMedia}</h3>`)
document.writeln('<ul>')
for (let i = 0; i < estudiantes.length; i++){
    document.writeln(`<li>${estudiantes[i].nombre}: ${estudiantes[i].nota}</li>`);
}
document.writeln('</ul>')