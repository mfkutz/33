//MEDIR PERFORMANCE
const url1 = "https://jsonplaceholder.typicode.com/comments";
const url2 = "https://jsonplaceholder.typicode.com/todos";
const url3 = "https://jsonplaceholder.typicode.com/photos";

const consulta1 = async () => {
  try {
    const inicio = performance.now();
    //ERROR MUY COMUN AL LLAMAR ASI A LAS DISTINTAS PETICIONES, ESTO HACE QUE SEA MAS LENTA LA APP, YA QUE TIENE QUE IR TERMINANDO UNA PARA EMPEZAR CON LA OTRA
    const response1 = await fetch(url1);
    const data1 = await response1.json();
    // console.log(data1);
    const response2 = await fetch(url2);
    const data2 = await response2.json();
    // console.log(data2);
    const response3 = await fetch(url3);
    const data3 = await response3.json();
    // console.log(data3);

    const fin = performance.now();
    console.log(`Demora en la primera petición ${fin - inicio}ms`);
  } catch (error) {
    console.log(error.message);
  }
};

consulta1();
const consulta2 = async () => {
  try {
    const inicio = performance.now();

    //ESTA ES LA FORMA CORRECTA SI TENEMOS VARIAS PETICIONES, LAS HACE TODAS AL MISMO TIEMPO
    const [response1, response2, response3] = await Promise.all([
      fetch(url1),
      fetch(url2),
      fetch(url3),
    ]);

    const [data1, data2, data3] = await Promise.all([
      response1.json(),
      response2.json(),
      response3.json(),
    ]);
    // console.log(data1);
    // console.log(data2);
    // console.log(data3);

    const fin = performance.now();
    console.log(`Demora en la segunda petición ${fin - inicio}ms`);
  } catch (error) {
    console.log(error.message);
  }
};

consulta2();
