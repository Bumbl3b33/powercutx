const express = require("express");
const request = require("express");
const Joi = require("joi");
const dotenv = require("dotenv");
const routes = require("./routes/routes");

dotenv.config();
const app = express();

/* Middleware */
app.use(express.json());
app.use(routes);

const data = [
  { id: 1, out: 12 },
  { id: 2, out: 56 },
  { id: 3, out: 89 },
  { id: 4, out: 123 },
  { id: 5, out: 43 },
];

// PORT
//const port = process.env.PORT || 3000;
app.listen(process.env.PORT, () =>
  console.log(`Listening on ${process.env.PORT}...`)
);
