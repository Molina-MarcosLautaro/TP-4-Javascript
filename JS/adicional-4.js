/*Crea un objeto alumno con propiedades nombre, curso y calificaciones (un array de números). Escribe una función que reciba un objeto alumno y un número, y que añada la calificación al array de calificaciones del alumno. Usa un bucle para calcular la calificación más alta del alumno y un switch para clasificar al alumno según su calificación más alta (A para 9-10, B para 7-8, C para 5-6, D para 0-4).*/

// 1. crear el objeto alumno
const alumno = {
  nombre: "Nombre del alumno",
  curso: "Curso del alumno",
  calificaciones: [], // lista vacia de numeros
};

// 2. funcion para añadir calificacion
function agregarCalificacion(alumno, calificacion) {
  alumno.calificaciones.push(calificacion);
}

// 3. funcion para calcular la calificacion mas alta
function calcularCalificacionMaxima(alumno) {
  let calificacionMaxima = 0;
  // usar un bucle para recorrer las calificaciones
  for (let i = 0; i < alumno.calificaciones.length; i++) {
    if (alumno.calificaciones[i] > calificacionMaxima) {
      calificacionMaxima = alumno.calificaciones[i];
    }
  }
  return calificacionMaxima;
}

// 4. funcion para clasificar al alumno segun su calificacion mas alta usando un switch
function clasificarAlumno(alumno) {
  const calificacionMaxima = calcularCalificacionMaxima(alumno);
  let clasificacion;
  switch (true) {
    case calificacionMaxima >= 9 && calificacionMaxima <= 10:
      clasificacion = "A";
      break;
    case calificacionMaxima >= 7 && calificacionMaxima <= 8:
      clasificacion = "B";
      break;
    case calificacionMaxima >= 5 && calificacionMaxima <= 6:
      clasificacion = "C";
      break;
    case calificacionMaxima >= 0 && calificacionMaxima <= 4:
      clasificacion = "D";
      break;
    default:
      clasificacion = "Calificacion no valida";
  }
  return clasificacion;
}

// 5. pedir al usuario que ingrese calificaciones
const cantidadCalificaciones = parseInt(
  prompt("¿Cuantas calificaciones deseas agregar al alumno?")
);
for (let i = 0; i < cantidadCalificaciones; i++) {
    const calificacion = parseFloat(prompt(`Ingresa la calificacion ${i + 1}:`));
    agregarCalificacion(alumno, calificacion);
}

// 6. mostrar la alificacion mas alta y la clasificacion del alumno
const calificacionMaxima = calcularCalificacionMaxima(alumno);
const clasificacion = clasificarAlumno(alumno);
document.writeln(`<h3>Calificacion maxima: ${calificacionMaxima}</h3>`)
document.writeln(`<h3>Clasificacion del alumno: ${clasificacion}</h3>`)
document.writeln('<ul>')
for (let i = 0; i < alumno.calificaciones.length; i++){
    document.writeln(`<li>${alumno.calificaciones[i]}</li>`)
}
document.writeln('</ul>')