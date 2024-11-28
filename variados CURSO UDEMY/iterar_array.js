const technologies = ["Javascript", "React", "Node", "MongoDB", "Angular", "Nest.js"];
const newData = [];

const numbers = [1, 2, 3, 4, 5, 6];

//forma 1
// for (let i = 0; i < tecnologies.length; i++) {
//   console.log(tecnologies[i]);
// }

//foreach
// technologies.forEach(function (data) {
//   if (data === "Angular") {
//     newData.push(data);
//   }
// });

// numbers.forEach(function (num) {
//   if (num % 2 === 0) {
//     num = num * 2;
//   }
//   console.log(num);
// });

// console.log(newData);

//map
// technologies.map(function (data) {
//   //   return console.log(data);
// });

//for ... of
for (let tech of technologies) {
  console.log(tech);
}
