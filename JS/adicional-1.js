/*Crea un objeto persona que contenga las propiedades nombre, edad y hobbies (los hobbies son un array de strings). Luego, escribe una función que reciba un objeto persona y un nuevo hobby y añada este hobby a la lista de hobbies de la persona. Finalmente, imprime los hobbies de la persona usando un bucle. Usa prompt para ingresar los datos de la persona y el nuevo hobby.*/

// 1. Crear el objeto persona usando datos ingresados por el usuario
const persona = {
  nombre: prompt("Ingresa el nombre de la persona:"),
  edad: parseInt(prompt("Ingresa la edad:")),
  hobbies: [], // inicialmente vacío
};

// 2. Pedir un hobby al usuario
const nuevoHobby = prompt("Ingresa su hobby:");

// 3. Función que agrega un hobby al objeto persona
function agregarHobby(persona, hobby) {
  persona.hobbies.push(hobby);
}

// 4. Llamar a la función
agregarHobby(persona, nuevoHobby);

// 5. Imprimir todos los hobbies usando un bucle
document.writeln(
  `<h3>Hobbies de ${persona.nombre} con ${persona.edad} años:</h3>`
);
document.writeln("<ul>");

for (let i = 0; i < persona.hobbies.length; i++) {
  document.writeln(`<li>${persona.hobbies[i]}</li>`);
}

document.writeln("</ul>");
