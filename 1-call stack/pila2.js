//EJEMPLO 1

/* function primera() {
  console.log("Primera función");
  segunda();
  console.log("Primera función otra vez");
}

function segunda() {
  console.log("Segunda función");
  tercera();
}

function tercera() {
  console.log("Tercera función");
}

primera();

//Primera funcion
//Segunda funcion
//tercera funcion
//Primera funcion otra vez */

//EJEMPLO2

function a() {
  console.log("Hola");

  setTimeout(() => {
    //esto es una operacion asincrona
    console.log("esto es setTimeout");
  }, 5000);

  b();
}

function b() {
  c();
  console.log("Esta es la funcion b");
}

function c() {
  console.log("Esta es la funcion c");
}

a();

//Hola
//Esta es la funcion c
//Esta es la funcion b
//luego de 5 segundos aparece el mensaje "esto es setTimeout"
