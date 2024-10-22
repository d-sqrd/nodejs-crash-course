function generateRandomNumber2() {
  return Math.random(1000);
}

function printHelloWorld(name) {
  console.log(`Hello there, ${name}`);
}

const fun2 = "Hello world";

// commonJS syntax to export a module
module.exports = { generateRandomNumber2, printHelloWorld, fun2 };
