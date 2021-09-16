let nombre = 'Juan';

function mostrarNombre() {
	let apellidos = 'Perez';
	function mostrarApellidos() {
		let profesion = 'Programador';
		function mostrarProfesion() {
			return nombre + ' ' + apellidos + ' ' + profesion;
		}

		return mostrarProfesion;
	}

	return mostrarApellidos;
}

console.log(mostrarNombre()()());
