function saludo(persona) {
	return 'Hola te mando un saludo ' + persona;
}

console.log(saludo('Juan'));
console.log(saludo('Pedro'));
console.log(saludo('Luis'));

//Parametros por defecto
function saludo2(persona = 'Juan') {
	return 'Hola te mando un saludo ' + persona;
}

console.log(saludo2());

//Funciones de flecha
let saludo3 = (persona = 'Alberto') => 'Hola te mando un saludo ' + persona;
console.log(saludo3());

let saludo4 = (persona, pais) => 'Hola te mando un saludo ' + persona + ' de ' + pais;
console.log(saludo4('Mario', 'España'));

//JSON
let tienda = {
	nombre: 'Gaming',
	videojuegos: ['GTA', 'Fifa', 'Mario'],
	mostrarVideojuegos: function () {
		console.log(this.nombre);
	},
	mostrarVideojuegos2() {
		console.log(this.nombre);
	},

	//No se usa this para esta función
	mostrarVideojuegos3: () => {
		// console.log(this.nombre);
		console.log(tienda.nombre);
	},
};

tienda.mostrarVideojuegos();
tienda.mostrarVideojuegos2();
tienda.mostrarVideojuegos3();
