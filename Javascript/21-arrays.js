let personas = ['Juan','Pedro', 'Paco','Alberto'];

//Buscar en un array - find
let busqueda = personas.find(persona => persona == 'Pedro');

console.log(busqueda);

//Buscar en un array - findIndex
let busquedaIndex = personas.findIndex(persona => persona == 'Pedro');

console.log(busquedaIndex);

//Crear array en un objeto iterable
let arrayLetras = Array.from('Brandon Vargas');

console.log(arrayLetras);

let arrayNumeros = Array.from([1,2,3,4,5], numero => numero * 2);
console.log(arrayNumeros);

//Comprobar si un elemento existe en un array include 
let existe = personas.includes('Pedro');

console.log(existe);

//Filtrar arrays filter 
let nuevasPersonas = personas.filter(persona => persona.length >= 5);
console.log(nuevasPersonas);