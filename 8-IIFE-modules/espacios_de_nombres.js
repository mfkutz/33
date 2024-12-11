// Los espacios de nombres (namespaces) en JavaScript se refieren a una técnica
// utilizada para evitar colisiones de nombres en el ámbito global, especialmente
// cuando trabajas en proyectos grandes o cuando incluyes múltiples bibliotecas.
// Antes de que los módulos ES6 existieran, los desarrolladores usaban espacios de
// nombres como una forma de organizar y encapsular el código.

// ¿Por qué son útiles los espacios de nombres?
// En JavaScript, todas las variables y funciones declaradas globalmente comparten el
// mismo espacio de nombres. Esto puede generar problemas cuando diferentes partes del código,
// o bibliotecas, usan los mismos nombres. Por ejemplo:

// Dos bibliotecas incluyen variables con el mismo nombre
var nombre = "Juan";
var nombre = "Maria"; // Sobreescribe el valor anterior

// Los espacios de nombres solucionan esto encapsulando el código dentro de un objeto, reduciendo el riesgo de colisiones.

// Cómo funcionan los espacios de nombres
// Un espacio de nombres suele ser simplemente un objeto global que contiene todas las variables, funciones o constantes relacionadas.

// Definimos un espacio de nombres "MiApp"
var MiApp = {
  nombre: "Juan",
  saludar: function () {
    console.log("Hola, " + this.nombre);
  },
};

// Accediendo a los miembros del espacio de nombres
MiApp.saludar(); // "Hola, Juan"

// Espacios de nombres vs Módulos
// Con la introducción de los módulos ES6, los espacios de nombres tradicionales se usan menos porque los módulos nativos de JavaScript proporcionan una mejor solución para encapsulación y organización. Sin embargo, los espacios de nombres aún son útiles cuando:

// Trabajas en un entorno sin soporte para módulos ES6.
// No puedes usar herramientas modernas como Webpack, Vite o Parcel.
