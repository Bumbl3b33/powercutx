const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/courses", (req, res) => {
  res.send("SUS");
});

// PORT
//const port = process.env.PORT || 3000;
app.listen(process.env.PORT, () =>
  console.log(`Listening on ${process.env.PORT}...`)
);
