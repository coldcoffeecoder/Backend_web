const fs = require("fs");

//sync...
fs.writeFileSync("./test.txt", "hello sync");

//async...
fs.writeFile("./test1.txt", "hello async", (err) => {});

//to read file
const result = fs.readFileSync("./contact.txt", "utf-8");
console.log(result);
//sync directly gives result

//async expects callback function then it will give error or result
//async doesnt returns

//same goes for writefile

//async
fs.readFile("./contact.txt", "utf-8", (err, result)=>{
    if(err){
        console.log("error", err);  
    } else {
        console.log(result);
    }
})

fs.appendFileSync("./test.txt", "Hey there\n")