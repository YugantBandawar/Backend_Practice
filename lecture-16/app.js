const express = require('express');
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");

app.get("/", function (req, res) {
  res.send("hey");
});

app.get("/create", async function (req, res) {
  let user = await userModel.create({
    username: "Yug",
    age: 20,
    email: "yabandawar@gamil.com"
  });
  res.send(user);
});

app.get("/post/create", async function (req, res) {
  let post = await postModel.create({
    postdata: "hello saare log",
    user: "69343fc07b6a194a1e7a8947"
  });

  let user = await userModel.findOne({ _id: "69343fc07b6a194a1e7a8947" });
  user.posts.push(post._id);   // ✅ use post._id instead of post_id
  await user.save();

  res.send({ post, user });
});

app.listen(3000);
