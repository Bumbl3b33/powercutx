-- Select Logs Between X and Y dates. 
DECLARE @StartDate AS DATE = '2022-03-10';
DECLARE @EndDate AS DATE = '2022-03-12';

-- DO NOT MODIFY BEYOND THIS

SELECT LogId, LogTime, DistrictName, ProvinceName FROM Logs
INNER JOIN Districts ON Logs.DistrictId = Districts.DistrictId
INNER JOIN Provinces ON Districts.DistrictId = Provinces.ProvinceId
WHERE LogDate BETWEEN @StartDate and @EndDate 
GO