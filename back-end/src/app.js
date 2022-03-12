const express = require("express");
const request = require("express");
const Joi = require("joi");
const dotenv = require("dotenv");
const dbconnection = require("./database/dbconnection");

dotenv.config();
const app = express();

/* Middleware */
app.use(express.json());

const data = [
  { id: 1, out: 12 },
  { id: 2, out: 56 },
  { id: 3, out: 89 },
  { id: 4, out: 123 },
  { id: 5, out: 43 },
];

/* Route Handler */
app.get("/", (req, res) => {
  res.send("Hello world");
});

/* Total Outages by district */
app.get("/api/outages", (req, res) => {
  //TODO: SQL Query to get total outages grouped by district
  res.send("GET Under construction");
});

/* Add Outage from user */
app.post("/api/outages", (req, res) => {
  const { error } = validateOutage(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  //TODO: SQL insert

  res.send("POST Under construction");
});

// PORT
//const port = process.env.PORT || 3000;
app.listen(process.env.PORT, () =>
  console.log(`Listening on ${process.env.PORT}...`)
);

const validateOutage = (course) => {
  const schema = Joi.object({
    myDistrict: Joi.number().integer().min(1).max(25),
  });

  return schema.validate(course);
};
