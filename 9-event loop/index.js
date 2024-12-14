console.log("Hi!");

setTimeout(function timeout() {
  console.log("Click the button!");
}, 5000);

console.log("Welcome to loupe.");

// Paso a paso del flujo:
// Ejecuta console.log("Hi!"):

// Esto se ejecuta de inmediato ya que es código síncrono.
// Salida: Hi!
// Ejecuta setTimeout(...):

// Aquí, el setTimeout es una función asíncrona, por lo que no se ejecuta inmediatamente.
// Lo que sucede aquí es que setTimeout se pasa a las Web APIs del navegador, junto con el callback (la función timeout) y el tiempo de espera (5000 milisegundos, o 5 segundos).
// Web API se encarga de gestionar esta función y cuenta el tiempo mientras el resto del código sigue ejecutándose.
// El setTimeout no bloquea la ejecución del código, simplemente lo coloca en espera.
// Ejecuta console.log("Welcome to loupe."):

// Como el setTimeout es asíncrono y no bloquea, el siguiente código se ejecuta inmediatamente.
// Salida: Welcome to loupe.
// El temporizador de setTimeout llega a los 5000 milisegundos:

// Después de 5 segundos, la función timeout() del setTimeout está lista para ejecutarse.
// Web API coloca el callback (la función timeout) en la callback queue (también llamada task queue).
// El Event Loop mueve el callback a la Call Stack:

// El event loop está continuamente monitoreando la call stack y la callback queue.
// Cuando la call stack está vacía (ya que el código síncrono ha terminado de ejecutarse), el event loop mueve el callback del setTimeout desde la callback queue a la call stack para ser ejecutado.
// Ejecuta el callback de setTimeout:

// Una vez que el callback entra en la call stack, se ejecuta el console.log("Click the button!").
// Salida: Click the button!
// Resumen:
// Se ejecuta el primer console.log ("Hi!").
// El setTimeout se pasa a las Web APIs, y el temporizador de 5 segundos comienza.
// Se ejecuta el segundo console.log ("Welcome to loupe.") porque no hay bloqueos.
// Después de 5 segundos, el callback de setTimeout entra en la callback queue.
// El event loop mueve el callback a la call stack cuando la pila de ejecución está vacía.
// Finalmente, se ejecuta el callback de setTimeout, mostrando "Click the button!".
