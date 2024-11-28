//Funcion anonima
setTimeout(function () {
  console.log("Hello world!");
}, 3000);

//funcion expresiva
const sumar = function (a, b) {
  return a + b;
};

console.log(sumar(5, 3));
