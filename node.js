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
