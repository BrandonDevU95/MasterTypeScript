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
}

let mi_coche = new Coche();
console.log(mi_coche.modelo);
