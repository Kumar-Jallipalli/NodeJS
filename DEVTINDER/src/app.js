// Importing the Express Library/Framework
const express = require('express')

// Creating an Instance of Express Application
const app = express()

// Route Handlers
app.use('/test', (req, res) => {
    console.log("Welcome to TEST Page..")
    res.send("Welcome to TEST Page..")
}) 
app.use('/hello', (req, res) => {
    console.log("Welcome to HELLO Page..")
    res.send("Welcome to HELLO Page..")
}) 
app.use('/', (req, res) => {
    console.log("Welcome to Home Page..")
    res.send("Welcome to Home Page..")
}) 

// Starts the Server & Listens at port 7777
app.listen(7777)