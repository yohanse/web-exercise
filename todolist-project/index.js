import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;

try {
    await mongoose.connect('mongodb+srv://mehabawyohanse793:ntZMpfyJQecUcNls@firstmonogo.m8kzbgd.mongodb.net/');
}
catch (err) {
    console.log(err);
}

const taskSchema = mongoose.Schema({
    taskName: String,
    isCompleted: Boolean,
}); 


const TodayTask = mongoose.model("todayTask", taskSchema);
const WorkTask = mongoose.model("workTask", taskSchema);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    console.log("today task get");
    console.log(await TodayTask.find());
    res.render("page.ejs", {
        nameType: "Today Task",
        tasks: await TodayTask.find(),
        actionPost: "/",
    });
});

app.get("/workList", async (req, res) => {
    console.log("work task get");
    console.log(await WorkTask.find());
    res.render("page.ejs", {
        nameType: "Work Task",
        tasks: await WorkTask.find(),
        actionPost: "/workList",
    });
});

app.post("/", async (req, res) => {
    console.log("today task post");
    
    const todayTask = TodayTask({
        taskName: req.body["taskName"],
        isCompleted: false,
    });
    console.log(todayTask);
    await todayTask.save();
    res.redirect("/");
});


app.post("/workList", async (req, res) => {
    console.log("work list post");
    const workTask = WorkTask({
        taskName: req.body["taskName"],
        isCompleted: false,
    });
    console.log(workTask);
    await workTask.save();
    res.redirect("/workList");
});

app.listen(port, () => {
    console.log("the server starting listening at port");
});