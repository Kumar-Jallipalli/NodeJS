const express = require("express")

const app = express()

app.get("/users", (req, res) => {
    console.log("Users are Requested by Client");
    res.send({user1: {firstname: "Kumar", lastname : "Jallipalli"}, user2: {firstname: "SIva", lastname : "Jallipalli"}})
})

app.post("/users", (req, res) => {
    // instead of this comment, we will write code for post method
    console.log("A Request to Update the Users is sent by Developer")
    res.send("Users are updated Successfully")
})

app.delete("/users", (req, res) => {
    // instead of this comment, we will write code for post method
    console.log("A Request to DELETE the Users is sent by Developer")
    res.send("Users are Deleted Successfully")
})

// Query Params
app.get('/test', (req, res) => {
    res.send(req.query)
})

// Path Params
app.get('/test/:id/:name/:city', (req, res) => {
    res.send(req.params)
})

app.listen(7777, (req, res) => {
    console.log("Server Started Successfully & is Listening on port 7777...")
})