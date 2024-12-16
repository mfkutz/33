//SCHEDULING

//We may decide to execute a function not right now, but at a certain time later. That’s called “scheduling a call”.

// There are two methods for it:

// setTimeout allows us to run a function once after the interval of time.
// setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating

// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)

function sayHi() {
  console.log("Hello");
}

const id = setTimeout(sayHi, 2000);
console.log(id);
// clearTimeout(id);

function sayHi2(phrase, who) {
  console.log(`${phrase}, ${who}`);
}

setTimeout(sayHi2, 1000, "Hello", "Martin");

// Canceling with clearTimeout
// A call to setTimeout returns a “timer identifier” timerId that we can use to cancel the execution.

let timerId = setTimeout(() => console.log("Never happens"), 1000);
// console.log(timerId); //time identifier

clearTimeout(timerId); //becouse it is cancell here
// console.log(timerId); //same identifier (doesn't become null after canceling)
