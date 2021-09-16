//Molde

class Coche {
	//propiedades y atributos

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
}

let mi_coche = new Coche();
console.log(mi_coche.modelo);

console.log(Coche.saludar('Juan'));
