---Adds Log to Logs table
DECLARE @OutageDistrictId AS INT = 13;

---Assuming int/sql injection protection is complete
---Assuming int is between 1 - 25

INSERT INTO Logs
(DistrictId, LogDate,LogTime )
VALUES
(@OutageDistrictId,GETDATE(),GETDATE())
GO