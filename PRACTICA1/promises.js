const fetchUserData = () => {
  return new Promise((resolve, reject) => {
    //Simulating API Call
    setTimeout(() => {
      const success = false;
      if (success) {
        resolve({ id: 1, name: "Martin Kutzner", email: "mfkutz@gmail.com" });
      } else {
        reject("Problem to fetch data");
      }
    }, 2000);
  });
};

fetchUserData()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
