//Optional chaining  (?)
const alumno = {
  nombre: "Martin",
  clase: "Programacion 2",
  aprobado: true,
  examenes: {
    // examen1: 90,
  },
};

// console.log(alumno.examenes?.examen1); //aqui lo que hacemos es agregar ? para evaluar, si no existe aun, el codigo no se rompe y continua con la siguiente linea, se podria hacer un if tambien, pero asi es mas corto
// console.log("alguna funcion despues de alumno");

//Nullish coaliscing operator (??)
//Es un operador logico que retorna el valor del lado derecho cuando el valor que esta del lado izquiedo es undefined o null, en caso contrario retorna el valor de la izquierda

const pagina = null ?? 1; //aqui al ser null retorna el de la derecha
console.log(pagina);

const ejem2 = 10 ?? 1; //aqui al tener un valor de la izquierda, diferente a null o undefined, retorna ese valor
console.log(ejem2);

const ejem3 = undefined ?? 0; // aqui retorna el valor de la derecha, ya que el de la izquieda es undefined
console.log(ejem3);
