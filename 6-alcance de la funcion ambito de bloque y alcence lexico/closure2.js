function vera() {
  let count = 0;

  return function increment() {
    count++;
    console.log(count);
  };
}

const res = vera();
res();
res();

function noise() {
  const vera = "This baby is making noise";

  function phrase() {
    console.log(vera);
  }
  phrase();
}

noise();
