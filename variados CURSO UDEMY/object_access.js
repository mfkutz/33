const person = {
  name: "John",
  age: 30,
  job: "Developer",
  hobbies: ["Programming", "Reading"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: {
      code: 12345,
      letter: {
        A: "Alpha",
        B: "Bravo",
        C: {
          D: "Charlie",
          E: "Delta",
          F: {
            Z: "Zulu",
          },
        },
      },
    },
  },
};

const {
  address: {
    zip: {
      letter: {
        C: {
          F: { Z },
        },
      },
    },
  },
} = person;

console.log(Z);

const aviation = {
  airport: "San Francisco",
  plane: "Airbus A380",
  Z: "Zulu",
};

const { Z: badroom } = aviation; //re name
console.log(badroom);
