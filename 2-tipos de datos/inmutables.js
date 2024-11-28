/* 1. Valores inmutables:
Inmutable significa que no se puede cambiar. Cuando un valor es inmutable, no puedes modificar el valor en sí, solo puedes reemplazarlo con un nuevo valor.
En JavaScript, todos los tipos de datos primitivos son inmutables, lo que significa que no puedes cambiar un valor primitivo una vez que ha sido creado. Si necesitas cambiarlo, en realidad estarás creando un nuevo valor en lugar de modificar el original. */

//String inmutable///////////////////////////////////////////////////////////////////
let cadena = "Hola";
cadena[0] = "J";
console.log(cadena); //no pasara nada

cadena = "Sapo";
console.log(cadena); //aqui estamos asignando una nueva cadena

//Number inmutable///////////////////////////////////////////////////////////////////
let numero = 10;
numero = numero + 5; //esto no cambia el valor de numero, crea un nuevo valor (15) y lo reasigna
console.log(numero); //15
