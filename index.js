// to run this file we need to run the command node index.js OR node index in the command line
console.log("hello world!");

// following code will give error in node environment but not when running JS in browser: this is because there is no "window" object in node environment
// console.log(window);
// following code will give error in node environment but not when running JS in browser: this is because there is no DOM in node environment
// console.log(document);

console.log("1" + this); // prints {} in the console if lines of code below this console log were not present

function myFun() {
  console.log("hello world");
}
console.log("2" + this);

// counterpart of window object in node.js: global object
console.log(global);

// commonJS syntax to import a module
const generateRandomNumber = require("./utils");
console.log(generateRandomNumber());

const { generateRandomNumber2, printHelloWorld } = require("./utils2"); // the names should match with what was exported from the module
console.log(generateRandomNumber2());
console.log(printHelloWorld("John"));
