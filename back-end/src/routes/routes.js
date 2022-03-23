/* Routes Handler */
const Router = require("express");
// const cors = require("cors");

const {
  getDistricts,
  getOutagesBetweenDates,
  addOutage,
  getHealth,
} = require("../controllers/controllers");

const router = Router();

// const corsOptions = {
//   origin: "*", // ["http://localhost:3000/", "http://localhost:3000/",
//   optionsSuccessStatus: 200,
// };

router.get("/", (req, res) => {
  res.send("PowercutX Server");
});

/* Get All Districts */
router.get("/api/districts", getDistricts);

/* Get All Outages in Districts */
router.get("/api/outages/:StartDate&:EndDate", getOutagesBetweenDates);

/* Add Outage from user */
router.post("/api/outages", addOutage);

router.get("/health", getHealth);
module.exports = router;
