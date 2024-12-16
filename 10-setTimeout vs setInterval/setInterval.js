////https://javascript.info/settimeout-setinterval

// The setInterval method has the same syntax as setTimeout:
// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)

const id = setInterval(() => {
  console.log("Esto se ejecuta cada 2 segundos");
}, 2000);

//stop
setTimeout(() => {
  clearInterval(id);
  console.log("Se detuvo el intervalo");
}, 10000);

// Nested setTimeout
// There are two ways of running something regularly.

// One is setInterval. The other one is a nested setTimeout, like this:
