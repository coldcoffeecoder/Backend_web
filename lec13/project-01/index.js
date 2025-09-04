const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;



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
    return res.json(users);
}); //hybrid server

app.get("/api/users/:id", (req, res)=>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

app.post("/api/users", (req, res) => {
    //todo: create a new user
    return res.json({status: "pending"});
});

app.patch("/api/users/:id", (req, res) => {
    //todo: edit a new user with id
    return res.json({status: "pending"});
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
