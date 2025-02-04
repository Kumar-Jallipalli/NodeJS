const fs = require("node:fs");
const https = require("https");

console.log("Hello World");

var a = 1078698;
var b = 20986;

// Synchronous
fs.readFileSync("./07_file.txt", "utf8"); // 10 ms
console.log("This will execute only after file read");

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched Data Successfully");
});

setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);

// Async function
fs.readFile("./07_file.txt", "utf8", (err, data) => {
  console.log("File Data : ", data);
});

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ", c);

/**
 * The reason your code doesn't stop running even after the completion of all asynchronous operations is because 
        - the `https.get` function doesn't explicitly end the request.
        - The request remains open, and Node.js keeps the event loop alive 
          until all network requests are either completed or explicitly terminated.
        - To solve this issue, you can call `res.on('data', () => {});` and `res.on('end', () => {});` 
          to consume and end the response data stream.
*/