function alpha() {
  console.log("Alpha función");
  setTimeout(() => {
    console.log("Timeout en alpha");
  }, 3000);
}

function beta() {
  console.log("Beta función");
}

function gamma() {
  console.log("Gamma función");
  setTimeout(() => {
    console.log("Timeout en gamma");
  }, 1000);
}

console.log("Inicio del proceso");

alpha();
beta();
gamma();

console.log("Fin del proceso");

//Inicio del proceso
//Alpha funcion

//Beta funcion

//gama funcion

//fin del proceso

//timeout en gama
//timeout en alpha
