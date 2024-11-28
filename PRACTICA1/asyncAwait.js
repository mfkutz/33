const URL = "https://jsonplaceholder.typicode.com/todos";

const fetchUserData = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
};

fetchUserData();
