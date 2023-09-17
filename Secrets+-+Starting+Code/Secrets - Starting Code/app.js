import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";
import PassportLocalMongoose from "passport-local-mongoose";

dotenv.config();

const MONGOKEY = process.env.MONGOKEY;
const SECRET = process.env.SECRET;
const app = express();
const port = 3000;
const saltRounds = 10;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

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
userSchema.plugin(PassportLocalMongoose);

const User = new mongoose.model("user", userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.get("/register", (req, res) => {
    res.render("register.ejs");
});

app.get("/logout", (req, res) => {
    req.logout(function(err){
        res.redirect("/");
    });
});

app.get("/secret", (req, res) => {
    if (req.isAuthenticated()) {
        res.render("secrets.ejs");
    }
    else {
        res.redirect("/login");
    }
});

app.post("/register", (req, res) => {
    console.log(req.body["username"]);
    User.register({ username: req.body["username"] }, req.body["password"], function (err, user) {
        if (err) {
            return res.redirect("/register");
        }
        else {
            passport.authenticate("local")(req, res, function () {
                return res.redirect("/secret");
            });
        }
    });
});

app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/secret');
  });


app.listen(port, (req, res) => {
    console.log("the serever running on the port 3000");
});