async function test1() {
  const promises = [
    Promise.resolve("Success1"),
    Promise.resolve("Success2"),
    Promise.reject(new Error("Failure")),
  ];

  try {
    const results = await Promise.all(promises);
    console.log(results);
  } catch (error) {
    console.error(error.message);
  }
}

test1();

async function test2() {
  const promises2 = [
    Promise.resolve("Success1"),
    Promise.resolve("Success2"),
    Promise.reject(new Error("Failure")),
  ];

  const results = await Promise.allSettled(promises2);
  console.log(results);
}

test2();
