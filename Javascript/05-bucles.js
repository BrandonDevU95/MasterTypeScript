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
