import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
const port = 4000;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://mehabawyohanse793:ntZMpfyJQecUcNls@firstmonogo.m8kzbgd.mongodb.net/');
}

const postSchema = mongoose.Schema({
  id: Number,
  title: String,
  content: String,
  author: String,
  date: String,
});

const Post = mongoose.model("post", postSchema);

let lastId = -1;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Write your code here//

//CHALLENGE 1: GET All posts

app.get("/posts", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

//CHALLENGE 2: GET a specific post by id

app.get(`/posts/:id`, async (req, res) => {
  const ID = req.params.id;
  const query = Post.where({id: ID});
  const singlePost = await query.findOne();
  res.json(singlePost);
});

//CHALLENGE 3: POST a new post

app.post("/posts", async (req, res) => {
  lastId++;
  const today = new Date();
  const post = new Post({
    id: lastId,
    title: req.body["title"],
    content: req.body["content"],
    author: req.body["author"],
    date: today.toString(),
  });

  await post.save();
  res.status(200).json({ "success": true });
});

//CHALLENGE 4: PATCH a post when you just want to update one parameter
app.patch("/posts/:id", async (req, res) => {
  const ID = req.params.id;
  await Post.findOneAndUpdate({id: ID}, {
    title: req.body["title"],
    content: req.body["content"],
    author: req.body["author"],
  });
  res.status(200).json({ "success": true });

});

//CHALLENGE 5: DELETE a specific post by providing the post id.

app.delete("/posts/:id", async (req, res) => {
  const ID = req.params.id;
  try{
    const deletePost = await Post.findOneAndDelete({id: ID});
  }
  catch(err){
    res.status(400).json({ "success": false });
  }
  
  res.status(200).json({ "success": true });
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
