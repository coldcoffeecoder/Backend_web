const http = require ("http")
const fs = require("fs")

const myServer = http.createServer((req, res) =>{
    const log = `${Date.now()}: New Req Received\n`
    //we will use non-blocking operation/async
    fs.appendFile("log.txt", log, (err, data) =>{
        switch(req.url){
            case '/': res.end("Homepage")
            break
            case '/about': res.end("I am bhumi");
            break
            default: res.end("404 not found")
        }
        //res.end("Hello from server")
    })
})

myServer.listen(8001, ()=> console.log("server started!!"))

//you can use multi route using the switch