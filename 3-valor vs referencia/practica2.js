const persona = {
  name: "Martin",
  age: 44,
  street: "Calle Cuenca 44",
};

//add new
persona.skills = "Programmer";
// console.log(persona);

//change one
persona.age = 43;
// console.log(persona);

//delete one
delete persona.street;
// console.log(persona);

const byechess = persona;

byechess.full_programmer = "ON";

console.log(persona);
console.log(byechess);
