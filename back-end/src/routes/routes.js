/* Routes Handler */
const Router = require("express");
const {
  getDistricts,
  getOutagesBetweenDates,
  addOutage,
} = require("../controllers/controllers");

const router = Router();

router.get("/", (req, res) => {
  res.send("PowercutX");
});

/* Get All Districts */
router.get("/api/districts", getDistricts);

/* Get All Outages in Districts */
router.get("/api/outages/:StartDate&:EndDate", getOutagesBetweenDates);

/* Add Outage from user */
router.post("/api/outages", addOutage);

module.exports = router;
