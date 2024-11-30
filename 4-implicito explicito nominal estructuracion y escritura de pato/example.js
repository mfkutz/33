const value1 = "5";
const value2 = 9;

let sum = value1 + value2;
console.log(typeof sum);

// In the above example, JavaScript has coerced the 9 from a number into a string and then concatenated
// the two values together, resulting in a string of 59. JavaScript had a choice between a string or
// a number and decided to use a string.

console.log(3 * "3"); //9
console.log(1 + "2" + 1); //121
console.log(true + true); //2
console.log(10 - true); //9

const foo = {
  valueOf: () => 2,
};

console.log(foo);
console.log(3 + foo); //5
console.log(4 * foo); //8

const bar = {
  toString: () => " promise is a boy :)",
};

console.log(1 + bar); //"1 promise is a boy :)"

console.log(4 * []); //0
console.log(4 * [2]); //8
console.log(4 + [2]); //"42"
console.log(4 + [1, 2]); //"41,2"
console.log(4 * [1, 2]); // NaN

console.log("string" ? 4 : 1); //4
console.log(undefined ? 4 : 1); //1

if (4 * [1, 2]) {
  console.log("Es truthy");
} else {
  console.log("Es falsy");
}
