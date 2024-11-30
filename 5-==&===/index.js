// Diferencia clave: Coerción de tipos
// == (igualdad débil): Realiza coerción de tipos. Si los valores tienen tipos diferentes, JavaScript intenta convertirlos al mismo tipo antes de compararlos.
// === (igualdad estricta): No realiza coerción de tipos. Compara los valores y los tipos directamente.

console.log(0 === 0); //no hay coerción pero es true igual valor y tipo
console.log(false == 0); //coerción de tipos - true
console.log(0 == "0"); // true (coerción: '0' se convierte en número)
console.log(0 === "0"); // false (sin coerción, tipos diferentes)
console.log(false == 0); // true (coerción: false se convierte en 0)
console.log("" == 0); // true (coerción: '' se convierte en 0)
console.log(null == undefined); // true (especial regla de ==)
console.log(NaN == NaN); // false (NaN nunca es igual a sí mismo)

// false se considera un valor "falsy" en JavaScript.

// Los valores "falsy" son aquellos que, al evaluarse en un contexto booleano, se convierten en false. Ejemplos: 0, "", null, undefined, NaN.
// El operador == convierte los valores antes de compararlos:

// Al comparar false y 0, JavaScript convierte false a un número, porque 0 es un número.
// En la conversión:
// false se convierte en 0.
// Luego, compara 0 == 0, lo cual es true.

// ¿Cómo sabemos quién se convierte en quién en la comparación?
// El motor de JavaScript sigue este flujo de coerción en false == 0:

// Detecta que los tipos son diferentes (boolean y number).
// Los booleanos tienen menor prioridad que los números. Por lo tanto:
// false se convierte en 0 para que coincida con el tipo del otro operando.

// Regla para recordar://///////////////////////////////////////////////////////////////
// Si comparas un boolean con un number, el boolean siempre se convierte en un número.
// Si comparas un boolean con una cadena, el boolean se convierte en un número y luego se compara con la cadena convertida a número.

// . Resumen de comparaciones comunes
// Comparación	         Resultado con ==	Resultado con ===
// 0 == false	            true	            false
// 0 == '0'	                true	            false
// '' == false	            true	            false
// null == undefined	    true	            false
// NaN == NaN	            false	            false
// [1] == '1'	            true	            false
// [] == ''	                true	            false
// [] == 0	                true	            false

//plus
const a = [1, 2, 3];
const b = [1, 2, 3];
const c = a;

console.log(a == b); // false (diferentes referencias)
console.log(a === b); // false (diferentes referencias)
console.log(a === c); // true (misma referencia)

// 3. Casos especiales a considerar
// Algunos casos de == son menos intuitivos debido a la coerción:

// null y undefined
// null y undefined son iguales solo entre sí.
// javascript
console.log(null == undefined); // true
console.log(null == 0); // false
console.log(undefined == 0); // false

// Regla para null en comparación con otros valores
// Cuando se utiliza el operador == con null, este solo es igual a:

// null
// undefined

//lo mismo para undefined, es decir es igual para undefined y null, pero diferente para 0, false, ''
console.log(undefined == undefined); // true
console.log(undefined == null); // true

console.log(undefined == false); // false
console.log(undefined == 0); // false
console.log(undefined == ""); // false
