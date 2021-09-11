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

mostarPais();
