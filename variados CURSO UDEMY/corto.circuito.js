//Evaluacion de corto circuito

const auth = false;

//como las leyes, todos los valores seran definidos como truthy, a menos que sean definidos como falsy
//EJEMPLOS DE TRUTHY
// if (true)
//     if ({})
//     if ([])
//     if (42)
//     if ("0")
//     if ("false")
//     if (new Date())
//     if (-42)
//     if (12n)
//     if (3.14)
//     if (-3.14)
//     if (Infinity)
//     if (-Infinity)

//all values are truthy except false, 0, -0, 0n, "", null, undefined, NaN, and document.all.

if (0) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

//IF THE FIRST OPERAND IS TRUTHY, THE LOGICAL AND OPERATOR RETURNS THE SECOND OPERAND
console.log(true && "Dog");
console.log([] && "Dog");
console.log("a" && "Dog");

//negative
console.log(-0 && "Dog"); //si no es truthy, devuelve el valor de la izquierda
console.log(null && "Dog");
