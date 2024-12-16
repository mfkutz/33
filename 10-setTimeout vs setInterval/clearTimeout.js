// La función clearTimeout detiene la ejecución de un temporizador programado con setTimeout.
// En otras palabras, cancela una tarea que estaba programada para ejecutarse después de un cierto tiempo.
clearTimeout(timeoutId);
// timeoutId: Es el identificador devuelto por setTimeout cuando se creó el temporizador.

// Cómo funciona clearTimeout
// Cuando usas setTimeout, se devuelve un identificador único para el temporizador.
// Este identificador se utiliza como referencia para cancelarlo con clearTimeout.

const timeoutId = setTimeout(() => {
  console.log("Esto no se mostrará porque el temporizador será cancelado.");
}, 5000);

// Cancelar el temporizador
clearTimeout(timeoutId);
console.log("El temporizador ha sido cancelado.");

// En este ejemplo:

// Se programa un temporizador para ejecutar un mensaje después de 5 segundos.
// Antes de que el temporizador se complete, se cancela con clearTimeout.
// Como resultado, el mensaje nunca se muestra.

// Casos de uso comunes
// Cancelar acciones innecesarias: Si se programa un temporizador,
// pero cambian las condiciones antes de que se ejecute, puedes cancelarlo.

let timeoutId2 = setTimeout(() => {
  console.log("Esto no debería pasar.");
}, 3000);

// Cancela el temporizador si ocurre algo antes de los 3 segundos
if (true) {
  clearTimeout(timeoutId2);
  console.log("El temporizador fue cancelado.");
}
// Evitar ejecuciones múltiples: Útil para evitar que se ejecuten varias tareas en paralelo si ya hay una programada.

// Importante
// Si llamas a clearTimeout con un timeoutId inválido o no existente, no ocurre ningún error; simplemente no hace nada.
// clearTimeout solo funciona con setTimeout, no con setInterval. Para cancelar un setInterval, debes usar clearInterval
