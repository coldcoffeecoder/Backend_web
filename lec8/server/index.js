const http = require ("http")
const fs = require ("fs")
const url = require("url")

const myServer = http.createServer((req, res) => {
    if(req.url === '/favicon.ico') return res.end();
    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl)
    fs.appendFile("log.txt", log, (err, data) => {
        //switch(req.url){
        switch(myUrl.pathname){
            case "/":
                res.end("HomePage");
                break;
            case "/about":
                //const qp = res.end("i am bhumi")
                //res.end("i am bhumi");
                const username = myUrl.query.myname;
                res.end(`Hi, ${username}`);
                break;  
            
            case '/search':
                const search = myUrl.query.search_query;
                res.end("Here are your results for" + search)
            default :
                res.end("404 not found");
        }   
    })
    
})
myServer.listen(8001, ()=> console.log("server started!!!"));