let productos = [
	{
		nombre: 'Monitor 27 pulgadas',
		precio: 300,
		marca: 'Samsung',
	},
	{
		nombre: 'Tablet 8 pulgadas',
		precio: 165,
		marca: 'Xiaomi',
	},
	{
		nombre: 'Teclado mecanico',
		precio: 50,
		marca: 'Logitech',
	},
];

function conseguirProductos() {
	return new Promise((resolve, reject) => {
		console.log('Cargando productos...');
		setTimeout(() => {
			resolve(productos);
			// reject(new Error('Error al cargar los productos'));
		}, 3000);
	});
}

function conseguirNombres() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Brandon Vargas');
			// reject(new Error('Error al cargar los productos'));
		}, 3000);
	});
}

async function getMisProductos() {
	try {
		console.log('Cargando datos...');
		let informacion = await Promise.all([conseguirProductos(), conseguirNombres()]);
		console.log(informacion);
		// let mis_productos = await conseguirProductos();
		// let mi_nombre = await conseguirNombres();
		// console.log(mis_productos);
		// console.log(mi_nombre);
	} catch (error) {
		console.log(error.message);
	}
}

getMisProductos();
