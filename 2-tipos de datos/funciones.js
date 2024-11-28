//Los OBJETOS tienen propiedades y metodos que pueden cambiar
//al utilizar typeof en funciones, js hace una distincion y dice que son function, pero no dejan de ser OBJETOS

function sumar(a, b) {
  //a y b son PARAMETROS de la funcion
  return a + b;
}

sumar(2, 3);
//mientras que 2,3 dentro de la llamada de la funcion son los ARGUMENTOS
