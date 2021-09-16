const coche = (function () {
	let _marca, _velocidad, _puertas;

	function setMarca(marca) {
		_marca = marca;

		return _marca;
	}

	function getVelocidad() {}

	function getMarca() {
		return _marca;
	}

	function acelerar() {
		_velocidad++;

		return _velocidad;
	}

	function frenar() {
		_velocidad--;

		return _velocidad;
	}

	return {
		setMarca,
		getMarca,
		acelerar,
		frenar,
	};
})();

coche.setMarca('Fiat');
console.log(coche.getMarca());

coche.acelerar();
coche.acelerar();
coche.acelerar();
