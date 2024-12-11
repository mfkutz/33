// una IIFE (Immediately Invoked Function Expression) es una función que se ejecuta inmediatamente
// después de ser definida. Es una manera de crear un ámbito (scope) privado
// para evitar que variables y funciones contaminen el ámbito global.

//sintaxis basica
(function () {
  console.log("Soy una IIFE y me ejecuto de inmediato");
})();

//O con funcion flecha
(() => {
  console.log("También soy una IIFE con función flecha");
})();

// Explicación:
// Función entre paréntesis:
// La función se coloca entre paréntesis () para convertirla en una expresión de función en lugar de una declaración de función.

// Paréntesis al final:
// Los paréntesis adicionales () al final invocan inmediatamente la función.

// ¿Para qué se usa una IIFE?
// Crear un ámbito aislado:
// Las variables declaradas dentro de una IIFE no interfieren con el ámbito global.

(function () {
  var mensaje = "Hola";
  console.log(mensaje); // 'Hola'
})();

console.log(typeof mensaje); // 'undefined'

// Util para evitar conflictos de nombres:
// Util cuando trabajas con múltiples bibliotecas o scripts que comparten nombres de variables o funciones.

// Encapsular código para módulos antiguos:
// Antes de que existieran los módulos en ES6, se usaban las IIFE para modularizar código.

// Inicialización inmediata:
// Realizar tareas que deben ejecutarse tan pronto como se define el script.

const contador = (function () {
  let count = 0;
  return function () {
    return ++count;
  };
})();

console.log(contador());
console.log(contador());
console.log(contador());

// Alternativa moderna
// Con los módulos ES6, las IIFE se usan menos, ya que los módulos tienen su
// propio ámbito por defecto. Sin embargo, siguen siendo útiles en contextos específicos.

//Un poco de historia
// eran muy comunes en ES5 (y versiones anteriores) porque no existía una forma nativa de
// encapsular el código y evitar que las variables definidas en un archivo se filtraran al
// ámbito global. En ese tiempo, era una de las pocas maneras de crear un ámbito privado en JavaScript.

// 1-No había let ni const:
// Antes de ES6, solo existía var, que tiene un ámbito de función pero no de bloque.
// Esto hacía que fuera fácil "contaminar" el ámbito global.

var mensaje = "Hola";
console.log(mensaje); // 'Hola'

(function () {
  var mensaje = "Adiós";
  console.log(mensaje); // 'Adiós'
})();

console.log(mensaje); // 'Hola' (el ámbito global no fue afectado)

function tincho() {
  return console.log(mensaje);
}

tincho();

// Evitar conflictos en aplicaciones grandes o con múltiples scripts:
// En proyectos grandes, las IIFE ayudaban a evitar conflictos entre variables o funciones de diferentes archivos.

// Simular módulos:
// Antes de que ES6 introdujera los módulos (import/export), las IIFE se usaban para crear módulos de forma manual, encapsulando datos y exponiendo solo lo necesario.

var miModulo = (function () {
  var privado = "Esto es privado";

  return {
    publico: "Esto es público",
    obtenerPrivado: function () {
      return privado;
    },
  };
})();

console.log(miModulo.publico); // 'Esto es público'
console.log(miModulo.obtenerPrivado()); // 'Esto es privado'

// Desde ES6 en adelante
// Con ES6, las IIFE dejaron de ser tan necesarias gracias a las siguientes mejoras:

// let y const:
// Estas introdujeron un ámbito de bloque, lo que permite encapsular variables sin necesidad de usar una IIFE.

{
  let mensajeH = "Esto está aislado";
  console.log(mensaje); // 'Esto está aislado'
}

console.log(typeof mensajeH); // 'undefined'

// Módulos (import/export):
// Los módulos de ES6 tienen su propio ámbito, por lo que el código en un módulo no afecta al global ni es afectado por él.

// archivo.js
// export const saludo = "Hola desde el módulo";

// main.js
// import { saludo } from "./archivo.js";
// console.log(saludo); // 'Hola desde el módulo'
