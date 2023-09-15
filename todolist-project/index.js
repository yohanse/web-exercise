import express from "express";

const app = express();
const port = 3000;

var todayTask = [];
var workTask = [];

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("page.ejs", {
        nameType: "Today Task",
        tasks: todayTask,
        actionPost: "/",
    });
});

app.get("/workList", (req, res) => {
    res.render("page.ejs", {
        nameType: "Work Task",
        tasks: workTask,
        actionPost: "/workList",
    });
});

app.post("/", (req, res)=>{
    todayTask.push(req.body["taskName"]);
    res.redirect("/");
});

app.post("/workList", (req, res)=>{
    workTask.push(req.body["taskName"]);
    res.redirect("/workList");
});

app.listen(port, () => {
    console.log("the server starting listening at port");
});