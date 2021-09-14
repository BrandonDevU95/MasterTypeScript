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
		}, 500);
	});
}

async function getMisProductos() {
	let mis_productos = await conseguirProductos();
	console.log(mis_productos);
}

getMisProductos();
