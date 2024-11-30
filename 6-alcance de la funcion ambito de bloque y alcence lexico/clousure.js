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

// ¿Qué es el alcance léxico?
// El alcance léxico se refiere al hecho de que el alcance (o área de visibilidad) de las variables está determinado por el lugar en el que las funciones y bloques de código son definidos, no por el lugar en el que son invocados o ejecutados.

// En otras palabras, la visibilidad de las variables dentro de una función está determinada por la posición de esa función en el código, es decir, por su "entorno léxico". Cuando una función es definida dentro de otro bloque de código (como otra función), esa función tendrá acceso a las variables del bloque exterior en el que fue creada.

function outerFunction() {
  let outerVar = "I am from the outer function";

  function innerFunction() {
    console.log(outerVar); // Accede a `outerVar` del scope léxico
  }

  innerFunction();
}

outerFunction(); // "I am from the outer function"

// En términos más simples, significa que una función puede acceder a las variables de las funciones
// o bloques de código que la rodean (donde fue definida). Esto se puede extender incluso a funciones
// anidadas o callbacks, como en los closures.

//ejemplo mas avanzado
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier; // Aquí el "multiplier" proviene del ámbito léxico
  };
}

const multiplyBy2 = createMultiplier(2);
const multiplyBy5 = createMultiplier(5);

console.log(multiplyBy2(10)); // 20
console.log(multiplyBy5(10)); // 50

// Resumen:
// El alcance léxico se refiere a cómo las funciones acceden a las variables que están en su contexto de definición, no en su momento de ejecución. Las funciones internas recuerdan el lugar donde fueron definidas, lo que les permite acceder a las variables que están en los ámbitos superiores, incluso después de que esos ámbitos hayan terminado de ejecutarse.

// Este comportamiento es clave para entender closures, funciones anidadas, y cómo se maneja el estado de las variables en JavaScript.
