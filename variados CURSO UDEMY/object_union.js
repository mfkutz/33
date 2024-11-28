// const skills = {
//   work: ["Javascript", "React", "Node", "MongoDB"],
// };

// const person = {
//   name: "John",
//   age: 30,
//   job: "Developer",
//   ...skills,
// };

// console.log(person);

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  color: "Red",
  price: 10000,
  mileage: 100000,
};

const speed = {
  mph: 100,
  kmh: 100,
};

// const carWithSpeed = { car, speed };
const carWithSpeed = { ...car, ...speed };
console.log(carWithSpeed);

//Otra forma de hacerlo, mismo resultado
const carWithSpeed2 = Object.assign(car, speed);
console.log(carWithSpeed2);
