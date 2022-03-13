const queries = {
  getAllDistricts: "SELECT DistrictId, DistrictName FROM [Districts]",
  getAllOutagesbyDate:
    "SELECT [Districts].DistrictId, COUNT(Logs.DistrictId) AS Total FROM Logs \
      INNER JOIN Districts ON Logs.DistrictId = Districts.DistrictId \
      INNER JOIN Provinces ON Districts.DistrictId = Provinces.ProvinceId \
      WHERE LogDate BETWEEN @StartDate and @EndDate \
      GROUP BY [Districts].DistrictId",
  addNewOutage:
    "INSERT INTO Logs (DistrictId, LogDate, LogTime) VALUES (@DistrictId, GETDATE(), GETDATE())",
};

module.exports = queries;
