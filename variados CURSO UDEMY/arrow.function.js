//Arrow function
const sumar = (a, b) => {
  console.log(a + b);
};

// sumar(3, 4); //Las arrow functions no funcionan si quiero llamarla antes de inicializar la funcion, no es como las function declaration

//podemos dejarla en una sola linea
const sumar2 = (a, b, c) => console.log(a + b + c);

sumar2(1, 4, 3);
