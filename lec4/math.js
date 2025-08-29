function add(a,b){
    return a + b;
}

function sub(a, b){
    return a-b;
}

module.exports = {
    add, 
    sub,
}

//module.exports = add;//(single)

//or you can write like
//exports.add = (a,b) => a + b; //this both will give anonymous function
//exports.sub = (a,b) => a-b;

//module.exports-> you can use it only one time because it override value

//export.something-> you can use multiples time