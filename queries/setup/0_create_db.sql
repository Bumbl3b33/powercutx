USE master
GO
IF NOT EXISTS (
 SELECT name
 FROM sys.databases
 WHERE name = N'dbCut'
)
 CREATE DATABASE [dbCut];
GO
IF SERVERPROPERTY('ProductVersion') > '12'
 ALTER DATABASE [dbCut] SET QUERY_STORE=ON;
GO