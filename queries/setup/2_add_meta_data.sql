---Insert rows into table 'TableName' in schema '[dbo]'
---DO NOT MODIFY


INSERT INTO dbo.Provinces
(ProvinceName, ProvinceInitials)
VALUES
( 'Northern', 'NP'),
( 'North Western', 'NW'),
( 'North Central', 'NC'),
( 'Western', 'WP'),
( 'Central', 'CP'),
( 'Eastern', 'EP'),
( 'Uva', 'UP'),
( 'Sabaragamua', 'SB'),
( 'Southern', 'SP')
GO

INSERT INTO dbo.Districts
(DistrictName, ProvinceId)
VALUES
('Colombo','4'),
('Gampaha','4'),
('Kalutara','4'),
('Kandy','5'),
('Matale','5'),
('Nuwara Eliya','5'),
('Galle','9'),
('Matara','9'),
('Hambantota','9'),
('Jaffna','1'),
('Kilinochchi','1'),
('Mannar','1'),
('Vavuniya','1'),
('Mullaitivu','1'),
('Batticaloa','6'),
('Ampara','6'),
('Trincomalee','6'),
('Kurunegala','2'),
('Puttalam','2'),
('Anuradhapura','3'),
('Polonnaruwa','3'),
('Badulla','7'),
('Moneragala','7'),
('Ratnapura','8'),
('Kegalle','8')
GO