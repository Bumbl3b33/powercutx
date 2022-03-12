"use strict";
const dotenv = require("dotenv");
dotenv.config();

const sqlConfig = {
  user: process.env.SQL_USERNAME,
  password: process.env.SQL_PASSWORD,
  server: process.env.SQL_SERVER,
  database: process.env.SQL_DATABASE,
  port: 1433,
  options: {
    encrypt: process.env.SQL_ENCRYPTION === "true" ? true : false, // for azure
    trustServerCertificate:
      process.env.SQL_TRUST_CERT === "true" ? true : false, // change to true for local dev / self-signed certs
  },
};

module.exports = sqlConfig;
