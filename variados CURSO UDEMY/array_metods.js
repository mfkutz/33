const tecnologias = ["HTML", "CSS", "Javascript", "ReactJS", "NodeJS"];
const numeros = [10, 20, 30];

function llamaFuncion(tech) {
  console.log(tech);
}

//ARROW FUNCTION
//FILTER/////////////////////FILTER /////////////////////FILTER /////////////////////FILTER/////////////////////FILTER/////////////////////FILTER
//filter crea un nuevo array con la condicion establecida
// const newArray = tecnologias.filter(llamaFuncion);

//forma corta
const newArray2 = tecnologias.filter((tech) => tech !== "CSS");
// console.log(newArray2);

//Filter aplica tanto a arrays de strings como a numeros
const newArray3 = numeros.filter((number) => number < 30);
// console.log(typeof newArray3);

//INCLUDES////////////////////////////////INCLUDES////////////////////////////////INCLUDES////////////////////////////////INCLUDES//////////////////////////////
const result = tecnologias.includes("HTML");
// console.log(typeof result);

const result2 = numeros.includes(11);
// console.log(typeof result2);

//SOME/////////////////////////////SOME/////////////////////////////SOME/////////////////////////////SOME/////////////////////////////SOME//////////////////////
//devuelve bolleano
const result3 = numeros.some((num) => num > 10); //al menos uno que cumpla la condicion
// console.log(result3);

//FIND//////////////////FIND//////////////////FIND//////////////////FIND//////////////////FIND//////////////////FIND//////////////////FIND////////////////
//Devuelve el primer elemento que cumpla la condicion
const result4 = tecnologias.find((tech) => tech === "ReactJS");
// console.log(result4);

//EVERY/////////////////////////EVERY/////////////////////////EVERY/////////////////////////EVERY/////////////////////////EVERY///////////////////////
//Verifica si cada uno cumple la condicion, devuelve true o false
const result5 = numeros.every((numero) => numero > 4); //todos los numeros en el array "numeros" son mayores a 4
// console.log(result5);

//REDUCE///////////////////////REDUCE///////////////////////REDUCE///////////////////////REDUCE///////////////////////REDUCE///////////////////////REDUCE///
const result6 = numeros.reduce((acc, cur) => cur + acc, 1);
console.log(result6);
