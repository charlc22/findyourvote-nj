CREATE DATABASE findyourvote
GO

use findyourvote
-- House Districts table
CREATE TABLE House_Districts (
    District_ID INT IDENTITY(1,1) PRIMARY KEY,
    District_Number INT NOT NULL,
    Population INT,
    Geographic_Boundaries GEOGRAPHY, -- For map coordinates
    Last_Updated DATETIME DEFAULT GETDATE(),
    CONSTRAINT UQ_House_District UNIQUE (District_Number)
);

-- House Candidates table
CREATE TABLE House_Candidates (
    Candidate_ID INT IDENTITY(1,1) PRIMARY KEY,
    District_ID INT NOT NULL,
    Name NVARCHAR(100) NOT NULL,
    Party VARCHAR(50),
    Incumbent BIT DEFAULT 0,
    Election_Year INT NOT NULL,
    Biography NVARCHAR(MAX),
    Website NVARCHAR(255),
    Contact_Info NVARCHAR(500),
    Image_URL NVARCHAR(500),
    FOREIGN KEY (District_ID) REFERENCES House_Districts(District_ID),
    INDEX IX_House_Candidate_Election_Year (Election_Year)
);

-- Senate Race table (no districts since it's statewide)
CREATE TABLE Senate_Race (
    Race_ID INT IDENTITY(1,1) PRIMARY KEY,
    Election_Year INT NOT NULL,
    State_Name VARCHAR(50) DEFAULT 'New Jersey',
    Geographic_Boundaries GEOGRAPHY, -- For state boundary
    Last_Updated DATETIME DEFAULT GETDATE(),
    CONSTRAINT UQ_Senate_Race UNIQUE (Election_Year)
);

-- Senate Candidates table
CREATE TABLE Senate_Candidates (
    Candidate_ID INT IDENTITY(1,1) PRIMARY KEY,
    Race_ID INT NOT NULL,
    Name NVARCHAR(100) NOT NULL,
    Party VARCHAR(50),
    Incumbent BIT DEFAULT 0,
    Election_Year INT NOT NULL,
    Biography NVARCHAR(MAX),
    Website NVARCHAR(255),
    Contact_Info NVARCHAR(500),
    Image_URL NVARCHAR(500),
    FOREIGN KEY (Race_ID) REFERENCES Senate_Race(Race_ID),
    INDEX IX_Senate_Candidate_Election_Year (Election_Year)
);

-- Elections table (covers both House and Senate)
CREATE TABLE Elections (
    Election_ID INT IDENTITY(1,1) PRIMARY KEY,
    Election_Type VARCHAR(20) NOT NULL CHECK (Election_Type IN ('House', 'Senate')),
    Election_Year INT NOT NULL,
    Election_Date DATE NOT NULL,
    Registration_Deadline DATE,
    Early_Voting_Start DATE,
    Early_Voting_End DATE,
    INDEX IX_Election_Date (Election_Date),
    INDEX IX_Registration_Deadline (Registration_Deadline)
);

-- Optional: Sources table for data verification
CREATE TABLE Sources (
    Source_ID INT IDENTITY(1,1) PRIMARY KEY,
    Entity_Type VARCHAR(20) NOT NULL CHECK (Entity_Type IN ('House_District', 'House_Candidate', 'Senate_Race', 'Senate_Candidate')),
    Entity_ID INT NOT NULL,
    Source_URL NVARCHAR(500),
    Source_Name NVARCHAR(200) NOT NULL,
    Last_Verified DATETIME DEFAULT GETDATE(),
    Notes NVARCHAR(MAX)
);
