let peliculas = ['Avengers', 'Spiderman', 'Batman'];

console.log(peliculas);
console.log(peliculas[0], peliculas[1], peliculas[2]);

//Spread Operator
console.log(...peliculas);

function mostrarPeliculas(pelicula1, pelicula2) {
	console.log(`
		*** Mostrar Peliculas ***
		Pelicula 1: ${pelicula1}
		Pelicula 2: ${pelicula2}	
	`);
}

mostrarPeliculas(...peliculas);

let heroes = ['Spiderman', 'Capitan America'];
let superheroes = ['Ironman', 'Capitan America', 'Thor', ...heroes];

console.log(superheroes);

//REST
function movies(pelicula1, pelicula2, ...restoDePeliculas) {
	console.log(pelicula1, pelicula2);
	console.log(restoDePeliculas);
	for (let pelicula of restoDePeliculas) {
		console.log(pelicula);
	}
}

movies('Señor de los anillos', 'Harry Potter', 'Batman', 'Superman');
