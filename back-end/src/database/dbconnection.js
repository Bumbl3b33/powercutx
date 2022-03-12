const sql = require("mssql");
const sqlConfig = require("./sqlconfig");

const getConnection = async () => {
  try {
    await sql.connect(sqlConfig);
    const result = await sql.query`select * from Provinces`; //TODO: remove this.
    console.log(result);
  } catch (err) {
    console.log(err);
    return;
  }
};

getConnection();
