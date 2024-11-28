// Se dividen en 2 categorías:
//Datos Primitivos y Datos Compuestos

// Datos primitivos /////////////////////////////////////////////////////

//String
let nombre = "Juan";

//Number
let edad = 25;

//Boolean
let esMale = true;

//undefined
let noExiste;

//null
let noExiste2 = null;

//bigint
let edadBigInt = BigInt(25); //Para representar numeros grandes
// console.log(edadBigInt);

//tambien se puede con una n al final
let big = 99999999999999999999999999999999999999n;
console.log(typeof big);

//symbol
let s = Symbol("sapo");
// console.log(s);
let a = Symbol("sapo");

// console.log(a === s);

//Datos compuestos: Objetos/////////////////////////////////
//cualquier otra cosa que no sea de las anteriores son objetos (funciones, arrays, etc)

// Objetos literales
/* let persona = {
  nombre: "Juan",
  edad: 25,
  esMale: true,
  noExiste: undefined,
  noExiste2: null,
  s: Symbol("s"),
}; */

// Objetos con constructor
/* function Persona(nombre, edad, esMale, noExiste, noExiste2, s) {
  this.nombre = nombre;
  this.edad = edad;
  this.esMale = esMale;
  this.noExiste = noExiste;
  this.noExiste2 = noExiste2;
  this.s = s;
}

let juan = new Persona("Juan", 25, true, undefined, null, Symbol("s")); */

function ver() {
  return "hola";
}

function suma(a, b) {
  return a + b;
}

// console.log(ver instanceof Object); //true
// console.log(suma instanceof Function); //true
// console.log(suma instanceof Object); //true
