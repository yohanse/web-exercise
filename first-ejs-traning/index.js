import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;


app.get("/", (req, res) => {
    const date = new Date();
    const day = date.getDay();
    console.log(day);

    if (day == 0 || day == 1){
        res.render("a.ejs", {name: "weekend day"});
    }

    else{
        res.render("a.ejs", {name: "week day"});
    }
});
app.listen(PORT, () => {
    console.log(`the server listen on port ${PORT}`);
});