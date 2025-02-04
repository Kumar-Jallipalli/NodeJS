// module2.js
console.log("This is the Log Message from Module2 File");

let marks = 99;

function sum (a, b) {
    console.log(a + b);
}

module.exports = {
    marks,
    sum
};