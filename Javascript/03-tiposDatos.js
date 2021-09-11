//String
let nombre = 'Juan';

//Numbers
let numero = 10;
let decimal = 10.5;

//Boolean
let verdadero = true;
let falso = false;
let mayor = 0;
let menor = 1;

//Arrays
let array = [1, 2, 3, 4, 5];
let paises = ['España', 'Francia', 'Italia'];

//JSON
let persona = {
	name = 'Juan',
	age = 20,
	country = 'España'
};

//Null
let nulo = null;

//Undefined
let indefinido = undefined;

console.log(
	typeof nombre,
	typeof numero,
	typeof decimal,
	typeof verdadero,
	typeof falso,
	typeof mayor,
	typeof menor,
	typeof array,
	typeof paises
);

let pelicula = {
	titulo: 'Batman',
	genero: 'Acción',
	year: 2019,
	director: 'Tim Burton',
	pais: 'Estados Unidos',
	mostrarInfo: function() {
		return `
		***** LA PPELICULA DE LA SEMANA *****
		Titulo: ${this.titulo},
		Género: ${this.genero},
		Año: ${this.year},
		Director: ${this.director},
		Pais: ${this.pais}		
		`;
	}
}

console.log(pelicula.mostrarInfo());