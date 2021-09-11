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

//Funciones de flecha
let saludo3 = (persona = 'Alberto') => 'Hola te mando un saludo ' + persona;
console.log(saludo3());

let saludo4 = (persona, pais) => 'Hola te mando un saludo ' + persona + ' de ' + pais;
console.log(saludo4('Mario', 'España'));
