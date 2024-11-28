const url = "https://jsonplaceholder.typicode.com/comments";

//FETCH ()
// fetch(url)
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error("Hubo un error");
//   })
//   .then((data) => {
//     return console.log(data);
//   })
//   .catch((error) => console.log(error.message));

//ASYNC AWAIT REQUIERE UNA FUNCION

const consultarAPI = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error en api");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

consultarAPI();
