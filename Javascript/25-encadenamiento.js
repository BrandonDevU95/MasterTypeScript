//Encadenamiento

let persona = {
   nombre: "Juan",
   apellido: "Perez",
   edad: 20,
   domicilio: {
      pais: "Mexico",
      ciudad: {
         nombre: "Guadalajara",
         provincia: "Jalisco",
      },
   },
};

let comprobar = persona.domicilio.ciudad.provincia;
let comprobar2 = persona?.domicilio?.ciudad?.provincia;

console.log(comprobar);
console.log(comprobar2);
