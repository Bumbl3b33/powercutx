const sql = require("mssql");
const getConnection = require("../database/dbconnection");
const { validateOutage, validateDates } = require("./validators.js");
const queries = require("../database/queries");

const getDistricts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllDistricts);
    res.json(result.recordset);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getOutagesBetweenDates = async (req, res) => {
  const { error } = validateDates(req.params);
  if (error) return res.status(400).send(error.details[0].message);

  //Validation passed...
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("StartDate", sql.Date, req.params.StartDate)
      .input("EndDate", sql.Date, req.params.EndDate)
      .query(queries.getAllOutagesbyDate);
    res.json(result.recordset);
  } catch (error) {
    res.status(500).send(error);
  }
};

const addOutage = async (req, res) => {
  const { error } = validateOutage(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Validation passed...

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("DistrictId", sql.Int, req.body.DistrictId)
      .query(queries.addNewOutage);
    res.json("Submitted your outage");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { getDistricts, getOutagesBetweenDates, addOutage };
