// En JavaScript, truthy y falsy son términos que describen los valores que, al evaluarse en
//  un contexto booleano (por ejemplo, en una condición if), se comportan como true o false, respectivamente.

// Valores Falsy ///////////////////////////////////////////////////////////////////////
// Un valor "falsy" es cualquier valor que, cuando se evalúa en un contexto booleano,
//  se convierte en false. Estos son los valores falsy en JavaScript:

// false
// 0 (el número cero)
// -0 (cero negativo)
// "" o '' (cadenas vacías)
// null
// undefined
// NaN (Not-a-Number)

if (!0) {
  console.log("0 es falsy");
}
if (!"") {
  console.log("Una cadena vacía es falsy");
}

// Valores Truthy //////////////////////////////////////////////////////////
// Un valor "truthy" es cualquier valor que no es falsy. Por ejemplo, los siguientes valores son truthy:

// Cualquier número distinto de 0 (positivo o negativo).
// Cualquier cadena no vacía ("Hello", "0", etc.).
// Objetos (incluyendo arreglos y funciones).
if ("Hola") {
  console.log("Las cadenas no vacías son truthy");
}
if ([]) {
  console.log("Los arreglos son truthy");
}

let valor = "texto";
if (valor) {
  console.log("Esto es truthy");
} else {
  console.log("Esto es falsy");
}

const valor2 = "hola"; //truthy
const valor3 = ""; //falsy

if (valor2) {
  console.log("Es truthy");
}

if (!valor3) {
  console.log("Es falsy");
}
