const http = require("http")

const myServer = http.createServer((req, res) => {
    console.log("New Req Rec");
    console.log(req.headers);
    res.end("Hello from server")
}); //callback function->responsible for processing incomming request
//creates a webserver for us

myServer.listen(8000, () => console.log("Server Started!!")); //for port 

//its always good to make script (check package.json)