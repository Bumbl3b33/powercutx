USE master
GO
IF NOT EXISTS (
 SELECT name
 FROM sys.databases
 WHERE name = N'dbPowercuts'
)
 CREATE DATABASE [dbPowercuts];
GO
IF SERVERPROPERTY('ProductVersion') > '12'
 ALTER DATABASE [dbPowercuts] SET QUERY_STORE=ON;
GO