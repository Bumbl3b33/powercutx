const express = require("express");
const dotenv = require("dotenv").config();
const compression = require("compression");
const helmet = require("helmet");
const routes = require("./routes/routes");
const cors = require("cors");

/* Create Application Object */
const app = express();

/* Middleware */
app.use(helmet()); //Security for known vulnerabilities
app.use(compression()); //Compress HTTP headers and body
app.use(express.json());
app.use(cors());
app.use(routes);

// PORT
//const port = process.env.PORT || 3000;
app.listen(process.env.PORT, () =>
  console.log(`Listening on ${process.env.PORT}...`)
);
