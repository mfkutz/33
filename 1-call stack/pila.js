/* function saludo() {
  console.log("Hola");
}

function despedida() {
  console.log("Adios");
}

saludo();
despedida(); */

/* Paso a paso:
El programa empieza y llama a saludo().
saludo() se coloca en la pila de llamadas.
saludo() se ejecuta, imprime "Hola".
saludo() termina y se quita de la pila.
El programa llama a despedida().
despedida() se coloca en la pila de llamadas.
despedida() se ejecuta, imprime "Adiós".
despedida() termina y se quita de la pila. */

function primera() {
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
/* Paso a paso:
El programa empieza y llama a saludo().
saludo() se coloca en la pila de llamadas.
saludo() se ejecuta, imprime "Hola".
saludo() termina y se quita de la pila.
El programa llama a despedida().
despedida() se coloca en la pila de llamadas.
despedida() se ejecuta, imprime "Adiós".
despedida() termina y se quita de la pila. */

function a() {
  console.log("a - start");
  b();
  console.log("a - end");
}

function b() {
  console.log("b - start");
  c();
  console.log("b - end");
}

function c() {
  console.log("c");
}

a();
//Mi interpretacion: (corregida exitosamente por chatgpt)
/* 1- Primero se invoca a la funcion a();
2-La funcion a() se coloca en la pila e imprime "a - start"
3-Seguimos en la funcion a() por lo tanto se ejecuta b(), entra a la pila y se imprime "b-start"
4-Seguimos en la funcion b() que a su vez llama a la funcion c(), que entra a la pila e imprime "c"
5-La funcion c() finaliza su ejecucion y sale de la pila
6-Vuelve a la funcion b() e imprime "b - end" finaliza y sale de la pila
7-Vuelve a la funcion a() e imprime "a - end" finaliza y sale de la pila */
