const URL = "https://jsonplaceholder.typicode.com/todos";

const fetchUserData = () => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

fetchUserData();
