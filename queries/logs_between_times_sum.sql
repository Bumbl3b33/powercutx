-- Select Logs Between X and Y dates. 
DECLARE @StartDate AS DATE = '2022-03-06';
DECLARE @EndDate AS DATE = '2022-03-12';

-- DO NOT MODIFY BEYOND THIS

SELECT [Districts].DistrictId, COUNT(Logs.DistrictId) AS Total FROM Logs
INNER JOIN Districts ON Logs.DistrictId = Districts.DistrictId
INNER JOIN Provinces ON Districts.DistrictId = Provinces.ProvinceId
WHERE LogDate BETWEEN @StartDate and @EndDate
GROUP BY [Districts].DistrictId;
GO