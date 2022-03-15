---Adds Log to Logs table (O(2n))
DECLARE @OutageDistrictName AS NVARCHAR(128) = 'Kandy';
DECLARE @OutageDistrictId AS INT;
-- IF EXISTS ( SELECT 1 FROM Districts WHERE DistrictName = @OutageDistrictName)    
-- BEGIN
--     INSERT INTO Logs (DistrictId, LogDate,LogTime ) 
--     SELECT DistrictId, GETDATE(),GETDATE() FROM Districts
--     WHERE DistrictName = @OutageDistrictName
-- END


--Testing
SELECT DistrictId FROM Districts WHERE DistrictName = @OutageDistrictName;
-- IF EXISTS ( SELECT DistrictId = @id FROM Districts WHERE DistrictName = @OutageDistrictName)    
-- BEGIN
--     INSERT INTO Logs (DistrictId, LogDate,LogTime ) 
--     SELECT DistrictId, GETDATE(),GETDATE() FROM Districts
--     WHERE DistrictName = @OutageDistrictName
-- END