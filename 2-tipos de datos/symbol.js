//este fue el  el ultimo primitivo añadido a js

const simbolo1 = Symbol("kutzner"); //en realidad dentro va solo una descripcion, pero podemos hacerlo "vacio"
const simbolo2 = Symbol("kutzner");

//symbol hace que cada elemento sea unico e irrepetible, como las huellas digitales de las personas
// console.log(simbolo1 === simbolo2);

const sim1 = Symbol();
const sim2 = Symbol();

// console.log(sim1);
// console.log(sim2);
// console.log(sim1 === sim2);
// console.log(sim1 === sim1); //solo es igual a si mismo

//Donde puedo utilzar Symbol?

const direcciones = {
  IZQUIERDA: Symbol("IZQUIERDA"),
  DERECHA: Symbol("DERECHA"),
  ARRIBA: Symbol("ARRIBA"),
  ABAJO: Symbol("ABAJO"),
};

function mover(direccion) {
  switch (direccion) {
    case direcciones.IZQUIERDA:
      console.log("Mover a la izquierda");
      break;
    case direcciones.DERECHA:
      console.log("Mover a la derecha ");
      break;
    case direcciones.ABAJO:
      console.log("Mover a la abajo ");
      break;
    case direcciones.ARRIBA:
      console.log("Mover a la arriba ");
      break;
    default:
      console.log("Direccion desconocida");
      break;
  }
}

mover(direcciones.ABAJO);
mover(direcciones.ARRIBA);
mover(direcciones.IZQUIERDA);
mover(direcciones.DERECHA);
