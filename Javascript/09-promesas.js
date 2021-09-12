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

function getProductos() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(productos);
			//reject(Error('No hay productos'));
		}, 500);
	});
}

function getCompra() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				nombre: 'Monitor 27 pulgadas',
				precio: 300,
			});
		}, 1000);
	});
}

// getProductos()
// 	.then((items) => {
// 		console.log(items);
// 	})
// 	.catch((error) => {
// 		console.log(error.message);
// 	})
// 	.finally(() => {
// 		console.log('Finalizado');
// 	});

//Promesas en cadena
getProductos()
	.then((items) => {
		console.log('Productos: ' + items);
		return getCompra;
	})
	.then((venta) => {
		console.log('Producto comprado: ' + venta);
	})
	.catch((error) => {
		console.log(error.message);
	})
	.finally(() => {
		console.log('Finalizado');
	});
