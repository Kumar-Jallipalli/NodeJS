const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/getsecretdata") {
        res.end("There is NO Secret Data")
    }
    // res.end("Hello World")
})

server.listen(7777);