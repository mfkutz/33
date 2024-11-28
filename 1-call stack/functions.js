//Función Declarativa (Function Declaration)
function suma(a, b) {
  return a + b;
}
console.log(suma(2, 3)); // 5

// Función Expresiva (Function Expression)
const resta = function (a, b) {
  return a - b;
};

console.log(resta(5, 2)); // 3

//Funcion flecha
const flecha = () => console.log("Hi!");
flecha();

const multi = (a, b) => a * b;
console.log(multi(2, 3));

//Funcion anonima
setTimeout(function () {
  console.log("Hola desde una función anónima");
}, 1000);

//Función Autoejecutable (Immediately Invoked Function Expression, IIFE)
(function () {
  console.log("Hola desde una IIFE");
})();

//Funcion metodo
const obj = {
  saludar: function () {
    console.log("Hola desde un método");
  },
};

obj.saludar(); // Hola desde un método

//Funcion contructora
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

const persona1 = new Persona("Juan", 30);
console.log(persona1.nombre); // Juan
console.log(persona1.edad); // 30

//Funcion generadora
function* contador() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const gen = contador();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2

//Funcion asincrona
async function fetchData() {
  let response = await fetch("https://api.example.com/data");
  let data = await response.json();
  console.log(data);
}

fetchData();
