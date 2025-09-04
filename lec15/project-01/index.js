const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8001;

//middleware -plugin
app.use(express.urlencoded({extended: false})); //built-in middleware
//takes format/value from frontend and firstly it convert it into object and it already has access to req so it puts value in req.body and give it

app.use((req, res, next) => {
    fs.appendFile("log.txt", `\n ${Date.now()}: ${req.method}: ${req.path}\n`, (err, data) => {
        next();
    });
});

app.use((req, res, next) => {
    console.log("hello from midleware 1");
    //return res.json({msg: "hello from middleware 1"}); //hold req
    //req.myUserName = "bhumi"; //access to next middleware and route , any changes we make that will persists thruout the code
    next(); //goes to next middleware
});

app.use((req, res, next) => {
    //console.log("hello from middleware 2", req.myUserName);
    console.log("hello from middleware 2");
    //res.end("hey"); //ends the cycle
    next(); //goes to route
});

//ROUTES

//using /users -> server side render page
// app.get("/users", (req, res)=> {
//     const html = `
//     <ul>
//       ${users.map((user) => `<li>${user.first_name}</li>`).join("")};
//     <ul>
//     `;
//     res.send(html);

// });

//REST APIs
app.get("/api/users", (req, res) => {
    //console.log("i am in get route", req.myUserName);
    return res.json(users);
}); //hybrid server

app.get("/api/users/:id", (req, res)=>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

app.post("/api/users", (req, res) => {
    //todo: create a new user
    const body = req.body;
    users.push({...body, id: users.length + 1});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({status: "success", id: users.length});
    })
    
});

// app.patch("/api/users/:id", (req, res) => {
//     //todo: edit a new user with id
//     const id = Number(req.params.id);
//     const body = req.body;

//     const user = users.find(u => u.id === id);

//     if(!user){
//         return res.status(404).json({status: "error", message: "user not found"});
//     }

//     //update user with new data
//     Object.assign(user, body);

//     fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
//         return res.json({status: "success", user});
//     })    
// });

app.patch("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const body = req.body;

    let user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ status: "error", message: "User not found" });
    }

    // update fields properly
    for (let key in body) {
        user[key] = body[key];
    }

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        if (err) {
            return res.status(500).json({ status: "error", message: "Failed to update user" });
        }
        return res.json({ status: "success", user });
    });
});



app.delete('/api/users/:id', (req, res) => {
    //todo: delete the user with id
    return res.json({status: "pending"});
});











//if it has similar route //grouping
// app
//    .route("/api/users/:id")
//    .get((req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
//    })
//    .patch((req, res) => {
//     //edit user with id
//     res.json({status: pending});
//    })
//    .delete((req, res) => {
//     //delete user with id
//     res.json({status: pending});
//    });



app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));