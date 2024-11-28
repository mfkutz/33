const x = 0.1;
const y = 0.2;
const z = x + y;
// console.log(z);

const texto = "11";
const decimal = "0.1";

// console.log(parseInt(texto)); //11
// console.log(parseFloat(decimal));

// //podemos usar + con toFixed para redondear ej:
// console.log(z.toFixed(5)); //sin el signo lo convierte a string
// console.log(+z.toFixed(5)); //con el signo mas lo convertimos a numero
// console.log(parseFloat(z.toFixed(5))); //parseFloat convierte a numero

//numeros seguros
const seguroNegativo = -(2 ** 53) + 1;
// console.log(seguroNegativo);
const seguroPositivo = 2 ** 53 - 1;
// console.log(seguroPositivo);

//empieza a fallar
const suma = seguroPositivo + 1;
const suma2 = seguroPositivo + 2;

console.log(suma === suma2);

//tambien podemos acceder a esos numeros con comandos
const minimo = Number.MIN_SAFE_INTEGER;
const maximo = Number.MAX_SAFE_INTEGER;
// console.log(minimo);
// console.log(maximo);

//para saber si un numero esta dentro de los valores seguros
Number.isSafeInteger(9007199254740996);

var numeroAproximado = 999999999999999999;
console.log(numeroAproximado);
