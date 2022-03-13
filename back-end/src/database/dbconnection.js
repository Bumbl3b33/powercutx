const sql = require("mssql");
const sqlConfig = require("./sqlconfig");

const getConnection = async () => {
  try {
    return await sql.connect(sqlConfig);
  } catch (err) {
    console.log(err);
    return;
  }
};

module.exports = getConnection;
