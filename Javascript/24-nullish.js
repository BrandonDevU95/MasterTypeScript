// Nullish coalescing operator

function multiplicacion(numero1, numero2) {
   //    numero1 = numero1 == null ? (numero1 = 1) : numero1;
   //    numero2 = numero2 == null ? (numero2 = 1) : numero2;

   //Si el valor es null o undefined, se le asigna un valor por defecto 1
   numero1 = numero1 ?? 1;
   numero2 = numero2 ?? 1;

   return numero1 * numero2;
}

console.log(multiplicacion(5, 2));
console.log(multiplicacion(5, null));
console.log(multiplicacion(null, null));
