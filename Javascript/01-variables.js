//Ecmascript 2021 / ES12 / ES.NEXT
//Variables var, let, const

//Uso para variables globales
var nombre = 'Brandon vargas';

function mostrarNombre() {
	var nombre = 'Juan';
	console.log(nombre);
}

mostrarNombre();
console.log(nombre);

//Let
//Hambíto de bloque Ahorro de memoria

let pais = 'México';

console.log(pais);

function mostarPais() {
	console.log(pais);
}

if (pais == 'México') {
	let continete = 'America';
	console.log(pais);
}

mostarPais();

//No accesible fuera del bloque
//console.log(continente);

//Si no se declara el tipo de variable, se asigna por defecto var
for (i = 0; i < 5; i++) {
	console.log(i);
}

console.log(i);

//Si espesificamos let, ya no es accesible desde fuera del bloque
for (let i = 0; i < 5; i++) {
	console.log(i);
}

console.log(i);

//CONTS : Constante
//No es variable

let edad = 30;

console.log(edad);

edad = 40;

//Esto no es posible
//Usar con datos que no se puedan cambiar
console.log(edad);

const edad = 30;

console.log(edad);

edad = 40;

console.log(edad);
