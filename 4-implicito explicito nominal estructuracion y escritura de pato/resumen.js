// La coerción implícita en JavaScript es cuando el lenguaje convierte automáticamente un tipo de
// dato en otro para poder ejecutar una operación. Esto ocurre de forma "automática" y puede llevar
// a resultados inesperados si no se comprende bien.

// ¿Por qué ocurre la coerción implícita?
// JavaScript es un lenguaje de tipado débil, lo que significa que las variables no tienen un tipo fijo.
// Entonces, cuando mezclas tipos de datos en una operación, el lenguaje intenta convertirlos en un tipo común para que la operación tenga sentido.

//Algunos ejemplos comunes
// 1. Conversión a cadena (String) //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Cuando se usa el operador + y uno de los operandos es una cadena, JavaScript convierte automáticamente los otros operandos a cadenas.
console.log("Hola" + 42); // "Hola42"
console.log("El resultado es: " + true); // "El resultado es: true"

// 2. Conversión a número (Number)  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Cuando usas operadores como -, *, /, o %, JavaScript convierte automáticamente los operandos a números si no lo son.
console.log("5" - 2); // 3
console.log("10" * "2"); // 20
console.log("6" / "2"); // 3
// Nota: El operador + no hace esto porque también se usa para concatenar cadenas.

// 3. Conversión a booleano (Boolean)  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JavaScript convierte valores a booleanos en contextos donde
// se espera un booleano, como en declaraciones if o en expresiones lógicas.
// Valores que son considerados falsy (convertidos a false):

// null
// undefined
// 0
// NaN
// "" (cadena vacía)
// false

// Todo lo demás es truthy (convertido a true).
if ("") {
  console.log("Esto no se ejecutará");
} else {
  console.log("Cadena vacía es falsy");
}

if (42) {
  console.log("Un número distinto de 0 es truthy");
}

// 4. Coerción en comparación ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Con el operador == (igualdad laxa), JavaScript intenta convertir los valores para compararlos.
console.log(5 == "5"); // true
console.log(false == 0); // true
console.log(null == undefined); // true

// Con === (igualdad estricta), no hay coerción. Los tipos deben coincidir exactamente.
console.log(5 === "5"); // false
console.log(false === 0); // false

// Resumen
// La coerción implícita es la conversión automática de tipos que hace JavaScript en ciertas situaciones.
// Puede convertir valores a cadenas, números o booleanos.
// Si no quieres sorpresas, usa comparaciones estrictas (===) y convierte los tipos explícitamente.
