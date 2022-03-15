const express = require("express");
const dotenv = require("dotenv").config();
const routes = require("./routes/routes");
const app = express();

/* Middleware */
app.use(express.json());
app.use(routes);

// PORT
//const port = process.env.PORT || 3000;
app.listen(process.env.PORT, () =>
  console.log(`Listening on ${process.env.PORT}...`)
);
