const fs = require("fs");

console.log('1');
//Blocking...
const result = fs.readFileSync("contact.txt", "utf-8");
console.log(result);
console.log('2');
//op->
//  1
//thread is blocked so it will print contact file
//then after the contact file is read it will print 2
 
//it blocks the thread so it can also return us