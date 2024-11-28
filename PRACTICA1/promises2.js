const URL = "https://jsonplaceholder.typicode.com/todos";

const fetchUserData = () => {
  return new Promise((resolve, reject) => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          return reject("Error fetching data to URL");
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

fetchUserData()
  .then((response) => {
    const num = Math.floor(Math.random() * 100);
    return response[num];
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
