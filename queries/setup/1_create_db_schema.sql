-- Create a new table called 'Customers' in schema 'dbo'
-- Drop the table if it already exists
-- DO NOT MODIFY

IF OBJECT_ID('Logs', 'U') IS NOT NULL
 DROP TABLE Logs;
GO
IF OBJECT_ID('Districts', 'U') IS NOT NULL
 DROP TABLE Districts;
GO
IF OBJECT_ID('Provinces', 'U') IS NOT NULL
 DROP TABLE Provinces;
GO
-- Create the table in the specified schema
CREATE TABLE Provinces
(

    ProvinceId int IDENTITY(1,1) NOT NULL PRIMARY KEY
    , ProvinceName nvarchar(32) NOT NULL
    , ProvinceInitials nvarchar(2) NOT NULL
 
);

CREATE TABLE Districts
(

    DistrictId int IDENTITY(1,1) NOT NULL PRIMARY KEY
    , DistrictName nvarchar(128) NOT NULL
    , ProvinceId int NOT NULL
 

    , CONSTRAINT FK_Districts_in_Province FOREIGN KEY (ProvinceId)     
        REFERENCES Provinces (ProvinceId)     
        ON DELETE NO ACTION
        ON UPDATE NO ACTION    
        
);

CREATE TABLE Logs
(

    LogId int IDENTITY(1,1) NOT NULL PRIMARY KEY
    , DistrictId int NOT NULL
    , LogDate DATE NULL
    , LogTime TIME(0) NULL 
    , INDEX idx_logs_date (LogDate)


    , CONSTRAINT FK_District_in_Log FOREIGN KEY (DistrictId)     
        REFERENCES Districts (DistrictId)     
        ON DELETE NO ACTION
        ON UPDATE NO ACTION

);


GO