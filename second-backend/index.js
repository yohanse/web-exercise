import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("<h1> head </h1>");
});

app.post("/yohanse", (req, res) => {
    res.sendStatus(201);
});

app.put("/yohanse", (req, res) => {
    res.sendStatus(200);
});

app.patch("/yohanse", (req, res) => {
    res.sendStatus(200);
});

app.delete("/yohanse", (req, res) => {
    res.sendStatus(200);
});

app.listen(PORT, ()=>{
    console.log(`the server started at port ${PORT}`);
});