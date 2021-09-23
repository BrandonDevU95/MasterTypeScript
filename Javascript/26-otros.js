//seprador numerico
let numero = 4_000_000;
console.log(numero);
console.log(typeof numero);

//Replace and Replace All
let frase = "Voy en mi moto contento por la carretara y veo otra moto";
//Solo remplaza 1 palabra
// let nueva_frase = frase.replace("moto", "coche");
//Antiguo para remplazar todas las palabras
// let nueva_frase = frase.replace(/moto/g, "coche");
let nueva_frase = frase.replaceAll("moto", "coche");

console.log(nueva_frase);

//Asignadores logicos
let nombre = "Juan";
let edad = 18;

let comprobar = nombre || edad;
nombre = nombre || edad;

//Si nombre no existe asignar a edad
nombre ||= edad;

//Si ambos son true le asina nombre
nombre &&= edad;

//Si nombre es null le asigna edad
nombre ??= edad;

console.log(comprobar);
