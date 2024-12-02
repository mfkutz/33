// Expression (Expresión) /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Una expresión es cualquier fragmento de código que produce un valor.
// Puede ser tan simple como un número o una variable, o tan compleja como una operación matemática o una función.

////////////////  las expresiones son la unidad básica que produce valores o realiza operaciones   //////////////////////

3 + 4; // Expresión: produce el valor 7
("Hola"); // Expresión: produce el valor "Hola"
// x * y; // Expresión: produce el resultado de multiplicar x por y
true; // Expresión: produce el valor booleano true

//Estas expresiones pueden ser parte de declaraciones
let suma = 3 + 4; // "3 + 4" es una expresión, toda la línea es una declaración.

// Statement (Declaración)/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Una declaración es una instrucción completa que realiza una acción.
// Puede declarar una variable, hacer un bucle, ejecutar una condición, etc.

let x = 10; // Declaración: define una variable y le asigna un valor.
if (x > 5) {
  // x > 5 es una expression porque devuelve un valor
  // luego con el if evalúa una condición y ejecuta un bloque. se convierte en statement
  console.log(x); // Declaración: llama a una función.
}

function sumar(a, b) {
  return a + b; // Esto es un statement dentro de la función
}
let resultado = sumar(3, 4);
console.log(resultado); // 7

// Algunas declaraciones parecen expresiones, pero no lo son:
let b = 10; // Esto es una declaración porque define y asigna una variable.

// Diferencias clave entre expresión y declaración
// Característica	                      Expression	                                    Statement
// Propósito	                          Produce un valor.	                                Realiza una acción.
// Ejecuta algo?	                      No necesariamente.	                            Sí, ejecuta una acción en el programa.
// Ejemplo básico	                      3 + 4	                                            let x = 3 + 4;
// Ubicación	                          Puede estar dentro de una declaración.	        No puede estar dentro de una expresión.
