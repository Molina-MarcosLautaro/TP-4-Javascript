/*Crea un objeto libro que tenga propiedades título, autor, año y género. Luego, escribe una función que reciba un array de libros y un género y devuelva un array con los libros de ese género usando filter. Usa prompt para ingresar los datos de los libros y el género.*/

// 1. crear un array vacio para los libros
const libros = [];

// 2. pedir datos de los libros al usuario
const cantidadLibros = parseInt(prompt("¿Cuántos libros deseas agregar?"));

// 3. repetir para cada libro que el usuario quiera agregar
for (let i = 0; i < cantidadLibros; i++) {
  const titulo = prompt(`Ingresa el título del libro ${i + 1}:`);
  const autor = prompt(`Ingresa el autor del libro ${i + 1}:`);
  const anio = parseInt(prompt(`Ingresa el año del libro ${i + 1}:`));
  const genero = prompt(`Ingresa el género del libro ${i + 1}:`);

  const libro = {
    titulo: titulo,
    autor: autor,
    anio: anio,
    genero: genero,
  };

  libros.push(libro);
}

// 4. definir función para filtrar libros por género
function filtrarLibrosPorGenero(libros, generoBuscado) {
  return libros.filter(function (libro) {
    return libro.genero.toLowerCase() === generoBuscado.toLowerCase();
  });
}

// 5. pedir el género a buscar
const generoABuscar = prompt("¿Qué género de libros deseas buscar?");

// 6. mostrar resultados
const resultados = filtrarLibrosPorGenero(libros, generoABuscar);

document.writeln("<h2>Libros encontrados:</h2>");
document.writeln("<ul>");
resultados.forEach(function (libro) {
  document.writeln(`<li>${libro.titulo} - ${libro.autor} (${libro.anio})</li>`);
});
if (resultados.length === 0) {
  alert("No se encontraron libros de ese genero.");
}
document.writeln("</ul>");
