import express from "express";
import mongoose from "mongoose";
import cors from "cors";

try {
  await mongoose.connect(
    "mongodb+srv://mehabawyohanse793:ntZMpfyJQecUcNls@firstmonogo.m8kzbgd.mongodb.net/"
  );
} catch (err) {
  console.log(err);
}

const Artist = {
  name: String,
  popularity: Number,
  image_url: String,
  followers: Number,
  geners: [],
  _id: String,
};

const trackSchema = mongoose.Schema({
  _id: String,
  name: String,
  duration_ms: Number,
  image_url: String,
  release_date: String,
  artist: Artist,
  __v: Number,
});

const Track = mongoose.model("tracks", trackSchema);

const app = express();
const port = 3000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>hello</h1>");
});

app.get("/tracks", async (req, res) => {
  const tracks = await Track.find();
  res.json(tracks);
});

app.delete("/trackDelete/:id", async (req, res) => {
  console.log(req.params.id);
  try{
    const v = await Track.findByIdAndRemove(req.params.id);
    res.json({message: "success"});
  }
  catch(err){
    console.log(err.message);
    res.status(400).json({message: err.message})
  }
});

app.listen(port, () => {
  console.log(`the server start listening at port ${port}`);
});
