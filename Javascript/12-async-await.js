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
			// resolve(productos);
			reject(new Error('Error al cargar los productos'));
		}, 500);
	});
}

async function getMisProductos() {
	try {
		let mis_productos = await conseguirProductos();
		console.log(mis_productos);
	} catch (error) {
		console.log(error.message);
	}
}

getMisProductos();
