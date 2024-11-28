//Con datos primitivos es totalmente independiente, la variable con los datos primitivos que esta dentro de la funcion, luego de su uso, sera descartada

function calculo(parametro) {
  return (parametro = parametro - 1);
}

const start = 30;

const resultado = calculo(start);

// console.log(resultado);

//pero utilizando objetos, la cosa es diferente como sabemos
function comer(a) {
  a.cantidad = a.cantidad - 1;
}

const fruta = {
  nombre: "Banana",
  cantidad: 4,
};

comer(fruta); //debemos pasar el objeto completo (copia por referencia),

///si pasamos por ejemplo asi, estamos trabajando con "copia por valor" y NO con "copia por referencia"
// comer(fruta.cantidad);

console.log(fruta.cantidad);
