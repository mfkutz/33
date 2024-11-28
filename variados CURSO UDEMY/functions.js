sumar2(3, 4); //con function declaration pódemos llamar a la funcion igualmente, antes que sea declarada

//Function DECLARATION
function sumar2(a, b) {
  console.log(a + b);
}

//Funtion EXPRESSION (es cuando le asignamos una variable)
const sumar = function (a, b) {
  console.log(a + b);
};
sumar(2, 3); //al utilizar "function expression" debemos llamarla despues de que la funcion fue inicializada
