const tecnologies = ["Javascript", "React", "Node", "MongoDB"];

// tecnologies.push("Angular"); //no recomendado en react porque esta modificando el arreglo original

//es mas conveniente usar asi
const tecnologies2 = [...tecnologies, "Angular"]; //creamos una copia con spread operator y luego lo añadimos
// console.log(tecnologies2);

//eliminar primer elemento
// tecnologies.shift(); // lo mismo para react , no es recomendado ya que se produce una mutacion en el arreglo, es decir lo modifica
// console.log(tecnologies);

//podemos usar filter para no modificar el arreglo original
// const technologies3 = tecnologies.filter((data) => (data !== "Javascript" ? data : null));
const technologies3 = tecnologies.filter(function (data) {
  if (data !== "Javascript") return data;
});

// console.log(technologies3);

//Map es recomendado en react, para no modificar el arreglo original, este crea una nueva copia y trabaja sobre ella
const technologies4 = tecnologies.map(function (data) {
  if (data === "MongoDB") {
    return "Nest.js";
  } else {
    return data;
  }
});

console.log(technologies4);
