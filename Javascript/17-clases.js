//Molde

class Coche {
	//propiedades y atributos

	//Variable privada
	#numeropuertas = 4;

	constructor(
		marca = 'Mercedez',
		modelo = 'Clase A',
		color = 'Negro',
		velocidad = 0,
		anio = 2022
	) {
		this.modelo = modelo;
		this.marca = marca;
		this.color = color;
		this.velocidad = velocidad;
		this.year = anio;
	}

	//Metodo estatico
	static saludar(nombre) {
		return 'Hola ' + nombre;
	}

	get numeroPuertas() {
		return this.#numeropuertas;
	}
}

let mi_coche = new Coche();
console.log(mi_coche.modelo);

console.log(Coche.saludar('Juan'));
console.log(mi_coche.numeroPuertas);
