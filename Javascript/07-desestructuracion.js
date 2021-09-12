let frutas = ['Manzana', 'Pera', 'Naranja', 'Sandia', 'Melon'];

//Manera clasica
// let manzana = frutas[0];
// let pera = frutas[1];

// console.log(manzana);
// console.log(pera);

//Destructuring
//Se debe colocar la variable conforme a la posicion de la variable
let [manzana, pera, naranja, sandia, melon] = frutas;

// console.log(naranja);

//Destructuring con objetos
// let persona = {
// 	nombre: 'Juan',
// 	apellido: 'Perez',
// 	edad: 30,
// };

//Aqui no importa el orden en que se llamen
// let { nombre, apellido, edad } = persona;

//Desestructuracion de strings
let nombreCompleto = 'Juan Perez 987564 09/09/1995 Madrid';
let [nombre, apellido, dni, fechaNacimiento, ciudad] = nombreCompleto.split(' ');

console.log(nombre);
console.log(dni);
