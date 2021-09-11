let nombres = ['Victor', 'Juan', 'Pedro', 'Luis'];

//Bucle classico
for (let i = 0; i < nombres.length; i++) {
	console.log(nombres[i]);
}

//For of accedes al contenido del array
for (let nombre of nombres) {
	console.log(nombre);
}

//For in accede al indice del array
for (let i in nombres) {
	console.log(i);
}

//For each
nombres.forEach(function (nombre, index) {
	console.log(index, nombre);
});

nombres.forEach((nombre, index) => {
	console.log(index, nombre);
});

nombres.forEach((nombre) => console.log(nombre));

//Iterables
const iterable = nombres[Symbol.iterator]();
console.log(iterable.next());

//Recorrer string
// let cadena = 'Hola mundo';
// for (let letra of cadena) {
// 	console.log(letra);
// }

//JSON
let frutas = {
	nombre: 'Manzana',
	color: 'Rojo',
	precio: '10',
};

frutas[Symbol.iterator] = function () {
	let index = 0;
	let valores = Object.values(this);

	return {
		next: () => {
			if (index >= valores.length) {
				return { undefined, done: true };
			}
			return { value: valores[index++], done: false };
		},
	};
};

for (let propiedad of frutas) {
	console.log(propiedad);
}
