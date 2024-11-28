const num = [1, 2, 3, 4, 5];

const filtered = num.filter((element, index, array) => {
  console.log(`Elemento actual: ${element}`);
  console.log(`Indice: ${index}`);
  console.log(`Array: ${array}`);
});

// console.table(num[4]);
