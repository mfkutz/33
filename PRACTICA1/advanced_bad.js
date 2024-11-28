const URL_1 = "https://jsonplaceholder.typicode.com/posts";
const URL_2 = "https://jsonplaceholder.typicode.com/comments";
const URL_3 = "https://jsonplaceholder.typicode.com/albums";
const URL_4 = "https://jsonplaceholder.typicode.com/photos";
const URL_5 = "https://jsonplaceholder.typicode.com/todos";
const URL_6 = "https://jsonplaceholder.typicode.com/users";

const fetchingData = async () => {
  try {
    const initial = performance.now();

    const response1 = await fetch(URL_1);
    const data1 = await response1.json();

    const response2 = await fetch(URL_2);
    const data2 = await response2.json();

    const response3 = await fetch(URL_3);
    const data3 = await response3.json();

    const response4 = await fetch(URL_4);
    const data4 = await response4.json();

    const response5 = await fetch(URL_5);
    const data5 = await response5.json();

    const response6 = await fetch(URL_6);
    const data6 = await response6.json();

    //See data
    // console.log("D1", data1[0]);
    // console.log("D2", data2[0]);
    // console.log("D3", data3[0]);
    // console.log("D4", data4[0]);
    // console.log("D5", data5[0]);
    // console.log("D6", data6[0]);

    const fin = performance.now();
    console.log(`Time consulting ${fin - initial} ms`);
  } catch (error) {
    console.log(error);
  }
};

fetchingData();
