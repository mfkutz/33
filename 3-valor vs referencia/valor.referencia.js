// Valor
// Cuando trabajas con tipos primitivos (números, cadenas, booleanos, null, undefined, y Symbol), JavaScript los maneja por valor. Esto significa que cuando asignas o pasas una variable que contiene un tipo primitivo, se copia el valor real de esa variable. Cualquier cambio en la nueva variable no afecta a la variable original, porque son copias separadas en la memoria.

let a = 5;
let b = a; // 'b' recibe una copia del valor de 'a'

b = 10; // Cambiamos el valor de 'b'
console.log(a); // a sigue siendo 5, no se ve afectada
console.log(b); // b ahora es 10

// Referencia
// En el caso de los tipos de datos complejos como los objetos y arrays, JavaScript los maneja por referencia. Esto significa que cuando asignas o pasas una variable que contiene un objeto, lo que realmente estás asignando es una referencia a la ubicación en memoria donde está almacenado el objeto. En otras palabras, tanto la variable original como la nueva variable apuntan al mismo objeto en la memoria, por lo que si modificas el objeto desde una de las variables, los cambios se reflejan en todas las variables que referencian el mismo objeto.

let obj1 = { name: "Martin" };
let obj2 = obj1; // 'obj2' apunta al mismo objeto que 'obj1'

obj2.name = "Carlos"; // Cambiamos el nombre a través de 'obj2'
console.log(obj1.name); // 'obj1' también muestra "Carlos"

// En este caso, tanto obj1 como obj2 apuntan al mismo objeto, por lo que cambiar el valor desde una variable afecta a ambas.

// Consecuencias prácticas
// Es importante entender esta diferencia porque puede llevar a errores si no te das cuenta de que estás modificando el mismo objeto desde diferentes partes de tu código cuando trabajas con objetos o arrays.

//HEAP (memoria dinamica)
//es el espacio en memoria destinado para almacenar objetos
