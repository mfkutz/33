let number_a = Number.MAX_SAFE_INTEGER + 1;
let number_b = Number.MAX_SAFE_INTEGER + 2;
console.log(number_a);
console.log(number_b);
console.log(number_a === number_b);

let torta = Symbol("torta");

console.log(typeof torta);
console.log(torta instanceof Symbol);
console.log(torta instanceof Object);

const date = new Date();
console.log(typeof date);
console.log(date instanceof Date);
console.log(date instanceof Object);
