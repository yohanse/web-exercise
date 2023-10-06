import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from  "dotenv";

dotenv.config()
try {
  await mongoose.connect(
    `mongodb+srv://mehabawyohanse793:${process.env.MONGOOSE_KEY}@firstmonogo.m8kzbgd.mongodb.net/`
  );
  console.log("mongoose works fine")
} catch (err) {
  console.log(err);
}

const Artist = {
  name: String,
  popularity: Number,
  image_url: String,
  followers: Number,
  geners: [],
};

const trackSchema = mongoose.Schema({
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
app.use(express.json());

app.get("/", async (req, res) => {
  const tracks = await Track.find();
  res.send(`${tracks.length}`);
});

app.post("/tracks", async (req, res) => {
  try {
    const today = new Date();
    const data = {
      artist: {
        name: req.body.artistName,
        popularity: 81,
        image_url: req.body.imageUrl,
        followers: 20257908,
        geners: [],
      },
      name: req.body.songName,
      duration_ms: 230706,
      image_url: req.body.imageUrl,
      release_date: today.toString(),
      __v: 0,
    };
    const track = await Track.create(data);
    res.json(track);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get("/tracks", async (req, res) => {
  const tracks = await Track.find();
  res.json(tracks);
});

app.delete("/trackDelete/:id", async (req, res) => {
  try {
    const v = await Track.findByIdAndRemove(req.params.id);
    res.json({ message: "success" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`the server start listening at port ${port}`);
});
