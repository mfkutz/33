//El call stack en javascript es una estuctura de datos que sigue el principio LIFO (Last In First Out)

function first() {
  console.log("Primera función");
}

function second() {
  console.log("Segunda función");
  setTimeout(() => {
    console.log("Timeout en segunda función");
  }, 2000);
}

function third() {
  console.log("Tercera función");
  setTimeout(() => {
    console.log("Timeout en tercera función");
  }, 1000);
}

console.log("Inicio");

first();
second();
third();

console.log("Fin");

//Inicio
//Primera funcion

//Segunda funcion

//Tercera funcion

//Fin

//timeout en la tercera funcion
//timeout en la segunda funcion
