const URL_1 = "https://jsonplaceholder.typicode.com/posts";
const URL_2 = "https://jsonplaceholder.typicode.com/comments";
const URL_3 = "https://jsonplaceholder.typicode.com/albums";
const URL_4 = "https://jsonplaceholder.typicode.com/photos";
const URL_5 = "https://jsonplaceholder.typicode.com/todos";
const URL_6 = "https://jsonplaceholder.typicode.com/users";

const fetchUserData = async () => {
  try {
    const initial = performance.now();

    const [response_1, response_2, response_3, response_4, response_5, response_6] =
      await Promise.all([
        fetch(URL_1),
        fetch(URL_2),
        fetch(URL_3),
        fetch(URL_4),
        fetch(URL_5),
        fetch(URL_6),
      ]);
    const [data_1, data_2, data_3, data_4, data_5, data_6] = await Promise.all([
      response_1.json(),
      response_2.json(),
      response_3.json(),
      response_4.json(),
      response_5.json(),
      response_6.json(),
    ]);

    console.log("here data", data_1[9]);
    console.log("here data", data_2[9]);
    console.log("here data", data_3[9]);
    console.log("here data", data_4[9]);
    console.log("here data", data_5[9]);
    console.log("here data", data_6[9]);

    const end = performance.now();

    console.log(`Time consulting ${end - initial}`);
  } catch (error) {
    throw new Error("Error fetching data", error);
  }
};

fetchUserData();
