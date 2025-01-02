-- Populate House Districts (NJ has 12 congressional districts)
INSERT INTO House_Districts (District_Number, Population) 
VALUES 
(1, 753059),
(2, 732477),
(3, 732477),
(4, 797608),
(5, 747197),
(6, 765024),
(7, 760058),
(8, 821397),
(9, 792321),
(10, 816008),
(11, 761843),
(12, 786129);

-- Create Senate Race entry for 2024
INSERT INTO Senate_Race (Election_Year, State_Name)
VALUES (2024, 'New Jersey');

-- Add Election information for both House and Senate 2024
INSERT INTO Elections 
(Election_Type, Election_Year, Election_Date, Registration_Deadline, Early_Voting_Start, Early_Voting_End)
VALUES 
('House', 2024, '2024-11-05', '2024-10-15', '2024-10-28', '2024-11-03'),
('Senate', 2024, '2024-11-05', '2024-10-15', '2024-10-28', '2024-11-03');

-- Example format for House Candidates
INSERT INTO House_Candidates 
(District_ID, Name, Party, Incumbent, Election_Year, Biography, Website, Contact_Info, Image_URL)
VALUES 
(1, '[]', '[]', 1, 2024, 
'[]', 
'[]', 
'[]', 
'[]');



-- Example format for Senate Candidates
INSERT INTO Senate_Candidates 
(Race_ID, Name, Party, Incumbent, Election_Year, Biography, Website, Contact_Info, Image_URL)
VALUES 
(1, '[Name]', '[Party]', 1, 2024, '[Bio]', '[Website]', '[Contact]', '[Image_URL]');