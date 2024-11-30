// "Si camina como un pato y hace 'cuac' como un pato, entonces probablemente sea un pato".
// JavaScript no obliga a declarar los tipos de los objetos.
// En JavaScript, no importa la clase o tipo exacto, sino si el objeto tiene las propiedades o métodos esperados.

//ejemplo
function hacerSonido(animal) {
  if (animal.hacerRuido) {
    // ¿El objeto tiene 'hacerRuido'?
    animal.hacerRuido(); // Si sí, llamamos al método.
  } else {
    console.log("Este animal no hace ruido.");
  }
}

const perro = {
  hacerRuido: () => console.log("¡Guau!"),
};

const pato = {
  hacerRuido: () => console.log("¡Cuac!"),
};

const gusano = {
  noHagoRuido: () => {},
};

hacerSonido(perro); // "¡Guau!"
hacerSonido(pato); // "¡Cuac!"
hacerSonido(gusano);

// En este caso, no importa si perro y pato son de clases diferentes o incluso si tienen diferentes
// propiedades adicionales. Lo único que importa es que tienen el método hacerRuido,
// que es lo que la función hacerSonido necesita.
