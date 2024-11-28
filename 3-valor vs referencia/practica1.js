//copia por valor, se produce cuando trabajamos con datos primitivos
//cada variable trabajo de manera aislada, son copias en la memoria, no se afectan
let a = 10;
let b = a;
b = 11;

// console.log(a, b);

//cuando trabajamos con datos complejos (array objetos funciones) js trabaja por referencia, es decir, asigna una referencia en la memoria

let obj = { name: "Martin" };

let copyObj = obj;
let copyObj1 = copyObj;
let copyObj2 = copyObj1;

obj.name = "Kutzner";
copyObj.name = "Federico";
copyObj2.name = "29201606";

console.log(obj.name);
console.log(copyObj.name);
console.log(copyObj1.name);
console.log(copyObj2.name);

//cuando trabajamos con datos complejos estamos modificando el mismo objeto desde diferentes partes de nuestro codigo
