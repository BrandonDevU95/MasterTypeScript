//Operador ternario
let persona = {
	nombre: 'Juan',
	edad: 20,
};

//Condicion classica
if (persona.edad >= 18) {
	console.log('Es mayor de edad');
} else {
	console.log('Es menor de edad');
}

//operador ternario
console.log(persona.edad >= 18 ? 'Es mayor de edad' : 'Es menor de edad');

//Diferencia entre == y === | != y !==
let edad = '20';
let edad2 = 20;

if (edad == edad2) {
	console.log('Son iguales');
} else {
	console.log('No son iguales');
}

//Evalue el tipo de dato tambien
if (edad === edad2) {
	console.log('Son iguales');
} else {
	console.log('No son iguales');
}
