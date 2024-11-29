// Se centra en la estructura de los datos más que en su nombre. En JavaScript,
// cualquier objeto que tenga la misma forma (propiedades y métodos) es considerado compatible.

const obj1 = { name: "Alice", age: 25 };
const obj2 = { name: "Bob", age: 30 };
const obj3 = { name: "Martin", age: 34, dni: "50948767" };

function greet(person) {
  console.log(`Hello, ${person.name}`);
}

greet(obj1); // Funciona porque obj1 tiene una estructura compatible.
greet(obj2); // También funciona.
greet(obj3); //También funciona.

// Este concepto es importante porque JavaScript usa el duck typing

// JavaScript no obliga a declarar los tipos de los objetos.
// Lo importante es que un objeto tenga las propiedades o métodos que una función o bloque de código espera.
