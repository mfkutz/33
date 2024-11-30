// Se basa en nombres específicos para determinar si los tipos son compatibles.
// JavaScript no es nominalmente tipado, pero puedes encontrar algo similar usando instanceof
// o definiendo estructuras específicas como clases.

//ejemplo 1 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

const persona = new Persona("Juan");
console.log(persona instanceof Persona); // true

// Aprenderlo es útil cuando trabajes con clases o patrones orientados a objetos.

//En JavaScript, las clases son nominales porque los objetos creados con diferentes clases no son compatibles, incluso si tienen la misma estructura.

// Cuando decimos que las clases son nominales, nos referimos a que el sistema de tipos (explícito o implícito)
// de las clases se basa en nombres o identidades, y no únicamente en la estructura de los objetos.
// Este enfoque se conoce como nominal typing.

//ejemplo 2 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class UserID {
  constructor(valor) {
    this.valor = valor;
  }
}

class ProductID {
  constructor(valor) {
    this.valor = valor;
  }
}

const userId = new UserID(123);
// console.log("Esto:", userId);
const productId = new ProductID(456);

function processUserId(id) {
  if (!(id instanceof UserID)) {
    throw new Error("Invalid type: expected UserID");
  }
  console.log("Processing UserID:", id.valor);
}

processUserId(userId); // Funciona correctamente
// processUserId(productId); // Lanza un error porque no es una instancia de UserIDc
