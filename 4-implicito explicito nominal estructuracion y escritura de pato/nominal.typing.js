// Se basa en nombres específicos para determinar si los tipos son compatibles. JavaScript no es nominalmente tipado, pero puedes encontrar algo similar usando instanceof o definiendo estructuras específicas como clases.

class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

const persona = new Persona("Juan");
console.log(persona instanceof Persona); // true

// Aprenderlo es útil cuando trabajes con clases o patrones orientados a objetos.
