import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();


const app = express();
const port = 3000;
const saltRounds = 10;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const MONGOKEY = process.env.MONGOKEY;
const SECRET = process.env.SECRET;
try {
    await mongoose.connect(`mongodb+srv://mehabawyohanse793:${MONGOKEY}@firstmonogo.m8kzbgd.mongodb.net/`);
}
catch (err) {
    console.log("data base error");
    console.log(err);
}

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
});

const User = new mongoose.model("user", userSchema);

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.get("/register", (req, res) => {
    res.render("register.ejs");
});

app.post("/register", async (req, res) => {
    try {
        const user = new User({
            email: req.body["username"],
            password: bcrypt.hashSync(req.body["password"], saltRounds),
        });
        await user.save();
        res.render("secrets.ejs");
    }
    catch (err) {
        console.log(err);
        res.redirect("/register")
    }
});

app.post("/login", async (req, res) => {
    try {
        const email = req.body["username"];
        const password = req.body["password"];
        const users = await User.find({ email: email });

        for (var i = 0; i < users.length; i++) {
            console.log(await bcrypt.compare(password, users[i].password));
            if (await bcrypt.compare(password, users[i].password)) {
                return res.render("secrets.ejs");
            }
        }
        return res.redirect("/login")
    }
    catch (err) {
        console.log(err);
        res.redirect("/login");
    }
});


app.listen(port, (req, res) => {
    console.log("the serever running on the port 3000");
});