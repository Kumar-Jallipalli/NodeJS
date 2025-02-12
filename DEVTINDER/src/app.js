// Importing the Express Library/Framework
const express = require('express');
require('./config/database');

// Creating an Instance of Express Application
const app = express();

// Starts the Server & Listens at port 7777
app.listen(7777, () => {
    console.log("Server Succesfully Started..");
})