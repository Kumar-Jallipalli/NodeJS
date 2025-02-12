const express = require('express');

const app = express();

// Make sure to use app.use() method to cover all endpoints/paths
app.use('/', (err, req, res, next) => {
    if (err) {
        res.status(500).send("Some DB Issue Happend..")
    } else {
        res.send ("No Issue")
    }
})

app.get('/path', (req, res) => {
    // Generating an Error to Simulate DB Errors
    throw new Error ("DB Connection Issue..")
    res.send("Checking whether this response is sent or not")
})

// app.use('/', (err, req, res, next) => {
//     if (err) {
//         res.status(500).send("Some DB Issue Happend..")
//     }
// })


app.listen(7777, () => {
    console.log("Server is Running..")
})