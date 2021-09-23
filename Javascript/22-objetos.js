let title = "Señor de los anillos";
let genero = "fantasia";
let duracion = "2h";

const pelicula = {
   title,
   genero,
   duracion,
   [genero + "2022"]: "Hola",
   mostrar() {
      return `${this.title} es de ${this.genero} y dura ${this.duracion}`;
   },
};

console.log(pelicula);
console.log(pelicula.mostrar());
console.log(Object.values(pelicula));
Object.entries(pelicula).forEach((elemento) => console.log(elemento));
Object.entries(pelicula).forEach((valor, elemento) =>
   console.log(valor, elemento)
);
