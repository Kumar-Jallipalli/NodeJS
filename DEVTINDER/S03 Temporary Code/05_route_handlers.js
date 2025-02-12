const express = require('express')

const app = express()

// app.get(
//     '/demo', 
//     (req, res, next) => {
//         console.log("Request Handler - 1 is logged");
//         // res.send("Route handler Demo - 1")
//         next();
//     },
//     (req, res, next) => {
//         console.log("Request Hanlder - 2 is logged")
//         // res.send("Route handler Demo -2");
//         next()
//     },
//     (req, res, next) => {
//         console.log("Request Hanlder - 3 is logged")
//         // res.send("Route handler Demo -3");
//         next()
//     },
//     (req, res, next) => {
//         console.log("Request Hanlder - 4 is logged")
//         // res.send("Route handler Demo -4");
//         next()
//     },
//     (req, res, next) => {
//         console.log("Request Hanlder - 5 is logged")
//         res.send("Route handler Demo -5");
//         // next()
//     }
// )

// app.get('/demo', (req, res, next) => {
//     console.log("Request Handler - 2 is Logged");
//     // res.send("Route Handler - 2 ")
//     next()
// })
// app.get('/demo', (req, res) => {
//     console.log("Request Handler - 1 is Logged");
//     next();
// })

const { authAdmin, authUser } = require('./middlewares/auth')

// app.use('/admin', authAdmin)
// app.use('/admin', authUser)

app.get('/admin/getData', authAdmin, (req, res) => {
    res.send("All the Data is Fetched by Admin");
})

app.delete('/admin/delete', authAdmin, (req, res) => {
    res.send("User is deleted by Admin");
})

app.get('/user/getData', authUser, (req, res) => {
    res.send("All the Data is Fetched by User");
})


app.listen(7777, (req, res) => {
    console.log("Server Started at port NO: 7777")
})