//Problemas con setInteval ///////////////////////////////////////////////
// Si el código dentro de un setInterval tarda más tiempo en ejecutarse que el intervalo programado, las llamadas pueden solaparse.
setInterval(() => {
  console.log("Start");
  const start = Date.now();
  while (Date.now() - start < 3000) {} // Simula un código que tarda 3 segundos
  console.log("End");
}, 2000);

//Con setTimeout, puedes evitar esto porque la próxima ejecución no se programa hasta que el código actual termine:
function repeatTask() {
  console.log("Start");
  const start = Date.now();
  while (Date.now() - start < 3000) {} // Simula un código que tarda 3 segundos
  console.log("End");
  setTimeout(repeatTask, 2000);
}
repeatTask();

// Imprecisión en el tiempo: /////////////////////////////////////////////
// setInterval no tiene en cuenta el tiempo que tarda la función en ejecutarse. Esto puede provocar acumulación de errores en el tiempo.
setInterval(() => {
  console.log("Running...");
  const start = Date.now();
  while (Date.now() - start < 500) {} // Código que tarda 500ms
}, 1000);

// Aquí, cada ejecución empieza cada 1000ms sin tener en cuenta que la ejecución tarda 500ms, lo que puede provocar una desincronización si el código es más pesado.
// Con setTimeout, el tiempo se calcula dinámicamente después de que el código termina, lo que mantiene un intervalo más preciso.

// Control de errores: /////////////////////////////////////////////////////////
// Si ocurre un error en el código dentro de un setInterval, la ejecución del intervalo se detiene automáticamente.
// Aquí, el error detendrá el setInterval y no se ejecutará de nuevo.
setInterval(() => {
  throw new Error("Something went wrong");
}, 1000);

// Con un setTimeout anidado, puedes manejar los errores de forma más robusta y asegurar que la ejecución continúe:
function safeTask() {
  try {
    throw new Error("Something went wrong");
  } catch (error) {
    console.log("Caught an error:", error.message);
  } finally {
    setTimeout(safeTask, 1000); // Sigue programando la ejecución
  }
}
safeTask();

// Dificultad para cambiar dinámicamente el intervalo: ////////////////////////////////////////////////////////////
// setInterval tiene un intervalo fijo. Si necesitas ajustar el tiempo entre ejecuciones dinámicamente, es más complicado.
// Con setTimeout, puedes modificar el intervalo fácilmente dependiendo de tus necesidades:
let delay = 1000;
function dynamicInterval() {
  console.log(`Delay: ${delay}`);
  delay += 500; // Incrementa el tiempo dinámicamente
  setTimeout(dynamicInterval, delay);
}
dynamicInterval();

// ¿Cuándo usar setInterval?////////////////////////////////////////////////////////////////////////////////
// Aunque setInterval puede ocasionar los problemas mencionados, es útil si:

// El código que se ejecuta es muy rápido y no hay riesgo de solapamientos.
// Quieres un comportamiento constante y no necesitas modificar dinámicamente el intervalo.
setInterval(() => {
  console.log("Hello, world!");
}, 1000);

// Resumen ///////////////////////////////////////////////////////////////////////////////////////////////////

// Usar setTimeout es más flexible, preciso y seguro en escenarios donde:
// El código que se ejecuta puede tardar mucho tiempo.
// Necesitas manejar errores robustamente.
// Quieres evitar solapamientos entre ejecuciones.
// El intervalo debe cambiar dinámicamente.
// Usar setInterval es más simple cuando necesitas un intervalo fijo y tu código es rápido y confiable.
