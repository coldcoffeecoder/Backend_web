
const fs = require("fs");

console.log('1');
//Non- Blocking...
fs.readFile("contact.txt", "utf-8", (err, result) =>{
    console.log(result);
})
console.log('2');
console.log('3');

//op
//1
//2
//3
//contact file 
//because it doesnt block 

//basic difference is that non-blocking operations gives us result thru callback

//default thread pool size = 4
//max? depends on machine 
//forex - 8 core cpu - so 8 thread

//we should always write a code that is non-blocking
//so that the users dont have to wait

//if we write code that is blocking then after the threads are finished then the other users have to wait a lot hence their wait time will increase
