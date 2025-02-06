const fs = require("node:fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"), 0);

Promise.resolve(("Promise")).then(console. log);

fs.readFile("./07_file.txt", "utf8", () => {
    console.log("File Reading CB");
})

process. nextTick(() => {
    process.nextTick(() => console.log("inner nextTick"));
    console. log("nextTick");
})

console.log("Last line of the file.");

// What will be the Output of this Code..?

/**
 * Last Line of the File
 * nextTick
 * Inner nextTick
 * Promise
 * Timer Expired
 * setImmediate
 * File Reading
 */