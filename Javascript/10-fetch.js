//Peticion AJAX
fetch('https://jsonplaceholder.typicode.com/posts')
	.then((response) => response.json())
	.then((datos) => {
		console.log(datos);
		mostrar(datos);
	})
	.catch((error) => console.log(error));

//DOM
function mostrar(elementos) {
	let contenedor = document.querySelector('#contenedor');
	elementos.forEach((elemento) => {
		let muestrame = `
			<article>
				<h2>${elemento.title}</h2>
				<p>${elemento.body}</p>
			</article>
			<hr>
		`;
		contenedor.innerHTML += muestrame;
	});
	return elementos;
}
