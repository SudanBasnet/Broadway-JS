const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

// node app.js        # run file
// npm init -y        # create package.json
// npm install pkg    # install package
// npm start          # run script (if defined)

//creating the server
const express = require("express");
const app = express();

app.use(express.json());

// sample data
let users = [
  { id: 1, name: "Sudan" },
  { id: 2, name: "John" },
];

// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// GET single user
app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  res.json(user || { message: "User not found" });
});

// POST new user
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };
  users.push(newUser);
  res.json(newUser);
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  users = users.filter((u) => u.id != req.params.id);
  res.json({ message: "User deleted" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/mydb")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  name: String,
});

const User = mongoose.model("User", userSchema);
