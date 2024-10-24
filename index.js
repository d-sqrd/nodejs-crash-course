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

/**************************************************************Import-Export*********************************************************************************************/

/*******************************CommonJS import-export syntax*******************************/
// commonJS syntax to import a module -> uses modeul.exports = {} and require for exporting and importing respectively
// const generateRandomNumber = require("./utils"); // cannot use "require" when type = module inside package.json
// console.log(generateRandomNumber());

// const { generateRandomNumber2, printHelloWorld } = require("./utils2"); // the names should match with what was exported from the module   // cannot use "require" when type = module inside package.json
// console.log(generateRandomNumber2());
// console.log(printHelloWorld("John"));

/*******************************ES import-export syntax*******************************/
import getPostsLength_random, { getPosts } from "./postController.js"; // getPostsLength method inside postController.js was exported as default so no need of curly braces and exact name matching while importing
console.log(`get posts = ${JSON.stringify(getPosts())}`);
console.log(`get posts length = ${getPostsLength_random()}`);
