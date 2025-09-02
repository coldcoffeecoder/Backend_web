// const http = require("http");
const express = require("express")

const app = express();

app.get('/', (req, res) => { //we can use "" also
    return res.send("hello from homepage");
})

app.get('/about', (req, res) => {
    return res.send(`Hello ${req.query.name}`);
})

// const myServer = http.createServer(app);

// myServer.listen(8002, () => console.log("server started!!"));

//we can use app.listen here..can directly use from express
app.listen(8002, ()=> console.log("server started"));

//we have removed our confusing code
//similarly we can make for post and can put path name

//app.post(" ", ()=>{})

 //express is just a framework internally http modules are used


//basic routing

//app.METHOD(PATH, Handler)
//where:
//->app is an instance of express
//->method is an http request model, in lowercase
//->path is a path on the serber
//->handler is the function executed when the route is matched

//we also dont need url package now so we will just uninstall it by-> npm uninstall url