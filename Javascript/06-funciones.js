function saludo(persona) {
	return 'Hola te mando un saludo ' + persona;
}

console.log(saludo('Juan'));
console.log(saludo('Pedro'));
console.log(saludo('Luis'));

//Parametros por defecto
function saludo2(persona = 'Juan') {
	return 'Hola te mando un saludo ' + persona;
}

console.log(saludo2());
