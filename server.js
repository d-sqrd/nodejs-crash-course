/********************************code snippet to demonstrate how to create a local server hosted on localhost:5000 using node********************************/
// import http from "http";
// const PORT = 5000;

// const server = http.createServer((req, res) => {
//   //   syntax-1
//   //   res.write("Hello World!");
//   //   res.end();
//   //   syntax-2 corresponding to same functionality as syntax-1
//   res.end("Hello World!");
// });

// server.listen(PORT, () => {
//   console.log(`Server is listening on PORT = ${PORT}`);
// });

/********************************setting headers, status codes on the res object********************************/

// Example-1
// import http from "http";
// const PORT = 5000;

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   res.statusCode = 200;
//   res.end("<h1>Hello World!</h1>");
// });

// server.listen(PORT, () => {
//   console.log(`Server is listening on PORT = ${PORT}`);
// });

// Example-2
// import http from "http";
// const PORT = 5000;

// const server = http.createServer((req, res) => {
//   res.writeHead(400, { "Content-Type": "application/json" });
//   res.end(JSON.stringify({ status: "NOT OK" }));
// });

// server.listen(PORT, () => {
//   console.log(`Server is listening on PORT = ${PORT}`);
// });

/********************************Environment variables********************************/
/*
Real-life scenarios for using env variables
    * Which HTTP port to listen on
    * What path and folder your files are located in, that you want to serve
    * Pointing to a development, staging, test, or production database
    * Other examples might be URLs to server resources, CDNs for testing vs. production, and even a marker to label your app in the UI by the environment it lives in.
Read this article to get more knowledge of env variables: https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786
*/

// step - 1: create a .env file and put the environment variables there
// step - 2: modify package.json as follows: update scripts.dev: <prev> "dev": "nodemon server.js", <with environment variables> "dev": "nodemon --env-file=.env server.js"

import http from "http";
import dotenv from "dotenv"; // use const dotenv = require('dotenv') if using CommonJS import syntax
dotenv.config();
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  res.writeHead(400, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ status: "NOT OK" }));
});

server.listen(PORT, () => {
  console.log(`Server is listening on PORT = ${PORT}`);
});
