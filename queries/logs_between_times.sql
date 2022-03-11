-- Select Logs Between X and Y dates. 
DECLARE @StartTime AS SMALLDATETIME = '2022-03-10 00:00:000';
DECLARE @EndTime AS SMALLDATETIME = '2022-03-12 15:00:000';

-- DO NOT MODIFY BEYOND THIS

SELECT Log.LogId, Log.LogTime, Districts.DistrictName, Provinces.ProvinceName FROM [dbo].[Log]
INNER JOIN Districts ON Log.DistrictId = Districts.DistrictId
INNER JOIN Provinces ON Districts.DistrictId = Provinces.ProvinceId
WHERE LogTime BETWEEN @StartTime and @EndTime 
GO