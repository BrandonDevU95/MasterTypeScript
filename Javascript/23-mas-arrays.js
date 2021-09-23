//Some methods

let personas = ["Juan", "Paco", "Raul", "Mario"];
let paises = [
   {
      nombre: "España",
      continente: "Europa",
   },
   {
      nombre: "Italia",
      continente: "Europa",
   },
   {
      nombre: "Francia",
      continente: "Europa",
   },
];

//Some
//Si existe dentro de un array
let existe = personas.some((nombre) => nombre === "Juan");
console.log(existe);

//Every
//Se cumple en todas
let todos = paises.every((pais) => pais.continente === "Europa");
console.log(todos);

//Map
//Devuelve un nuevo array con los resultados de la función
let nuevasPersonas = personas.map((nombre) => nombre.toUpperCase());
console.log(nuevasPersonas);

//Reduce
//Devuelve un valor unico
console.log(
   personas.reduce((acumulador, valorActual) => acumulador + valorActual)
);
