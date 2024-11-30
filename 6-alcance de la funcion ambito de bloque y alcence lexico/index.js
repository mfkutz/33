// Tipos de alcance en JavaScript
// a) Alcance Global
// Las variables declaradas fuera de cualquier función o bloque están en el scope global.
// Son accesibles desde cualquier lugar del código (a menos que haya colisiones de nombres o estén en un módulo).
// Cuidado: Las variables globales pueden ser sobrescritas accidentalmente, lo que genera errores difíciles de depurar.
let globalVariable = "Estoy en el alcance global";

function printGlobalVariable() {
  console.log(globalVariable); // Accede a la variable global
}

printGlobalVariable(); // "Estoy en el alcance global"

// b) Alcance de Función
// Una variable declarada dentro de una función solo está disponible dentro de esa función.
// No puede ser accedida desde fuera de la función.
function myFunction() {
  let localVariable = "Estoy en el alcance de función";
  console.log(localVariable); // Funciona
}

myFunction();
// console.log(localVariable); // Error: localVariable no está definida

// c) Alcance de Bloque (Block Scope)
// Introducido en ES6 con las palabras clave let y const.
// Una variable declarada dentro de un bloque ({ ... }, como en un bucle o un condicional) solo existe dentro de ese bloque.
if (true) {
  let blockScoped = "Solo existo dentro de este bloque";
  console.log(blockScoped); // Funciona
}
//   console.log(blockScoped); // Error: blockScoped no está definida

// d) Alcance Léxico
// JavaScript utiliza lexical scoping (alcance léxico), lo que significa que el alcance de las variables se determina en el momento en que se escribe el código, no cuando se ejecuta.
// Las funciones "recuerdan" el alcance en el que fueron definidas, incluso si se ejecutan en otro contexto. Esto permite usar closures.

function outerFunction() {
  let outerVariable = "Alcance léxico";

  function innerFunction() {
    console.log(outerVariable); // Puede acceder a outerVariable porque está en el alcance léxico
  }

  return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // "Alcance léxico"

// 2. Variables dentro de funciones
// Si declaras una variable con var, tiene alcance de función:
function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10
}

// Si usas let o const, tienen alcance de bloque:
function testLet() {
  if (true) {
    let x = 10;
  }
  console.log(x); // Error: x no está definida
}

// 3. Hoisting y alcance
// El hoisting mueve las declaraciones al inicio del alcance en el que están definidas, pero no las inicializaciones.
// Esto afecta cómo se acceden las variables dentro de las funciones.

// Ejemplo con var:
function hoistingExample() {
  console.log(a); // undefined (declarada, pero no inicializada aún)
  var a = 10;
}

// Ejemplo con let y const (no se "hoistean" completamente):
function hoistingExample() {
  console.log(a); // Error: no se puede acceder antes de su inicialización
  let a = 10;
}

// 4. Closures y alcance
// Un closure es una función que recuerda las variables de su alcance léxico incluso después de que el alcance original ha terminado.

// Ejemplo:
function createCounter() {
  let count = 0;

  return function increment() {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2

// Resumen
// Global: Variables accesibles desde cualquier parte.
// De función: Variables accesibles solo dentro de la función.
// De bloque: Variables accesibles solo dentro de un bloque ({}) si usas let o const.
// Léxico: El alcance de las variables se determina al momento de definirlas, no al ejecutarlas.
// Usa let y const para un manejo más seguro del alcance.
