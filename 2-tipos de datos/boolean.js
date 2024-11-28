//declaramos de forma explicita
const isOn = true;
// console.log(isOn);

//tambien obtenemos un boolean con una condicion
const condition = 2 < 1;
// console.log(condition);

//podemos verificar si 2 condiciones se cumplen
const a = 3 < 5 && 4 > 2;
// console.log(a);

//tambien podemos comparar si al menos 1 es verdadero con ||
const b = 3 > 4 || 5 < 3 || 2 < 1 || 2 > 1;
// console.log(b);

//se puede inferir
const mensajesSinLeer = 10;
if (mensajesSinLeer) {
  console.log(`tienes ${mensajesSinLeer} sin leer`);
} else {
  console.log(`No tienes mensajes`);
}

if ("false") {
  console.log("estoy aqui");
}

if (-1) {
  console.log("Estoy aqui tambien");
}

if ("") {
  console.log("funciona con vacio?");
} else {
  console.log("Vacio no");
}

const obj = {};

if (obj) {
  console.log("Objeto da true");
}
