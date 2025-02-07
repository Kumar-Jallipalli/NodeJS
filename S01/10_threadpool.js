const crypto = require("node:crypto")

// process.env.UV_THREADPOOL_SIZE = 2;

crypto.pbkdf2("HelloWorld123", "salt", 50000, 50, "sha512", (err, key) => {
    console.log("1 - Crypto Operation done");
})
crypto.pbkdf2("HelloWorld123", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("2 - Crypto Operation done");
})
crypto.pbkdf2("HelloWorld123", "salt", 500000, 50, "sha512", (err, key) => {
    console.log("3 - Crypto Operation done");
})
crypto.pbkdf2("HelloWorld123", "salt", 500000, 50, "sha512", (err, key) => {
    console.log("4 - Crypto Operation done");
})
crypto.pbkdf2("HelloWorld123", "salt", 500000, 50, "sha512", (err, key) => {
    console.log("5 - Crypto Operation done");
})
crypto.pbkdf2("HelloWorld123", "salt", 500000, 50, "sha512", (err, key) => {
    console.log("6 - Crypto Operation done");
})