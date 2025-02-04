const crypto = require('node:crypto')

console.log("Hello World");

// Synchronous Function --> Blocks the Main Thread's Execution
const key1 = crypto.pbkdf2Sync("Password", "salt", 5000000, 50, 'sha512')
console.log(key1.toString('hex'));

// Asynchronous Function --> Execution Continues without Bloacking
const key2 = crypto.pbkdf2("Password", "salt", 5000000, 50, 'sha512', () => {
    console.log("This is an Async Function");
})


function sum (a, b) {
    return a+b;
}

const c = sum(10, 30);
console.log("Sum: " + c);