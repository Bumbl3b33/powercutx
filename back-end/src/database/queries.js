const queries = {
  getAllDistricts: "SELECT DistrictId, DistrictName FROM [Districts]",
  getAllOutagesbyDate:
    "SELECT [Districts].DistrictName, COUNT(Logs.DistrictId) AS Total FROM Logs \
      INNER JOIN Districts ON Logs.DistrictId = Districts.DistrictId \
      WHERE LogDate BETWEEN @StartDate and @EndDate \
      GROUP BY [Districts].DistrictName \
      ORDER BY Total DESC",
  addNewOutage:
    "INSERT INTO Logs (DistrictId, LogDate, LogTime) VALUES (@DistrictId, GETDATE(), GETDATE())",
};

module.exports = queries;
