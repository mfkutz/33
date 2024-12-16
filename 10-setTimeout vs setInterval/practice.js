let sec = 0;
let min = 0;

let initial = 10;

function func1() {
  console.log(`Time: ${min} minutes and ${sec} seconds`);
  sec++;
  if (sec === 60) {
    min++;
    sec = 0;
  }
  setTimeout(func1, 1000); //llama a la funcion nuevamente despues de 1 segundo
}

function func2() {
  console.log(`Start in ${initial} seconds`);
  if (initial === 0) {
    func1();
    return;
  }
  initial = initial - 1;
  setTimeout(func2, 1000);
}

func2();

//inicia el cronometro en 10 segundos
// let ident = setTimeout(func1, 10000);

// Nested setTimeout allows to set the delay between the executions more precisely than setInterval.
