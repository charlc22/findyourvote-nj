const express = require('express');
const router = express.Router();
const sql = require('mssql');
const { getConnection } = require('../config/db');

// Get House candidates by district number
router.get('/house/candidates/:District_Number', async (req, res) => {
    try {
        console.log('Getting house candidates for district:', req.params.District_Number);
        const pool = await getConnection();
        const request = pool.request();

        const District_Number = parseInt(req.params.District_Number);
        const Election_Year = 2024;

        console.log('Parameters:', { District_Number, Election_Year });

        const query = `
            DECLARE @District_Number INT = ${District_Number};
            DECLARE @Election_Year INT = ${Election_Year};

            SELECT 
                c.Candidate_ID,
                c.Name,
                c.Party,
                c.Incumbent,
                c.Biography,
                c.Website,
                c.Contact_Info,
                c.Image_URL,
                d.District_Number
            FROM House_Candidates c
            JOIN House_Districts d ON c.District_ID = d.District_ID
            WHERE d.District_Number = @District_Number
            AND c.Election_Year = @Election_Year;
        `;

        console.log('Executing query:', query);
        const result = await request.query(query);
        console.log('Query result:', result);

        res.json(result.recordset);
    } catch (err) {
        console.error('Error fetching house candidates:', err);
        res.status(500).json({ error: 'Failed to fetch house candidates', details: err.message });
    }
});

// Get House district information
router.get('/house/districts/:District_Number', async (req, res) => {
    try {
        console.log('Getting district info for:', req.params.District_Number);
        const pool = await getConnection();
        const request = pool.request();

        const District_Number = parseInt(req.params.District_Number);
        const Election_Year = 2024;

        console.log('Parameters:', { District_Number, Election_Year });

        const districtQuery = `
            DECLARE @District_Number INT = ${District_Number};

            SELECT 
                District_ID,
                District_Number,
                Population,
                Last_Updated
            FROM House_Districts
            WHERE District_Number = @District_Number;
        `;

        console.log('Executing district query:', districtQuery);
        const result = await request.query(districtQuery);
        console.log('District query result:', result);

        if (result.recordset.length > 0) {
            const electionRequest = pool.request();

            const electionQuery = `
                DECLARE @Election_Year INT = ${Election_Year};

                SELECT 
                    Election_Date,
                    Registration_Deadline,
                    Early_Voting_Start,
                    Early_Voting_End
                FROM Elections
                WHERE Election_Type = 'House'
                AND Election_Year = @Election_Year;
            `;

            console.log('Executing election query:', electionQuery);
            const electionResult = await electionRequest.query(electionQuery);
            console.log('Election query result:', electionResult);

            const response = {
                ...result.recordset[0],
                election: electionResult.recordset[0] || null
            };

            res.json(response);
        } else {
            res.status(404).json({ error: 'District not found' });
        }
    } catch (err) {
        console.error('Error fetching district:', err);
        res.status(500).json({ error: 'Failed to fetch district information', details: err.message });
    }
});

// Get Senate candidates
router.get('/senate/candidates', async (req, res) => {
    try {
        console.log('Getting senate candidates');
        const pool = await getConnection();
        const request = pool.request();

        const Election_Year = 2024;

        const query = `
            DECLARE @Election_Year INT = ${Election_Year};

            SELECT 
                c.Candidate_ID,
                c.Name,
                c.Party,
                c.Incumbent,
                c.Biography,
                c.Website,
                c.Contact_Info,
                c.Image_URL
            FROM Senate_Candidates c
            JOIN Senate_Race r ON c.Race_ID = r.Race_ID
            WHERE c.Election_Year = @Election_Year;
        `;

        console.log('Executing query:', query);
        const result = await request.query(query);
        console.log('Query result:', result);

        res.json(result.recordset);
    } catch (err) {
        console.error('Error fetching senate candidates:', err);
        res.status(500).json({ error: 'Failed to fetch senate candidates', details: err.message });
    }
});

// Get Senate race information
router.get('/senate/race', async (req, res) => {
    try {
        console.log('Getting senate race information');
        const pool = await getConnection();
        const request = pool.request();

        const Election_Year = 2024;

        const query = `
            DECLARE @Election_Year INT = ${Election_Year};

            SELECT 
                Race_ID,
                Election_Year,
                State_Name,
                Last_Updated
            FROM Senate_Race
            WHERE Election_Year = @Election_Year;
        `;

        console.log('Executing query:', query);
        const result = await request.query(query);
        console.log('Query result:', result);

        if (result.recordset.length > 0) {
            const electionQuery = `
                DECLARE @Election_Year INT = ${Election_Year};

                SELECT 
                    Election_Date,
                    Registration_Deadline,
                    Early_Voting_Start,
                    Early_Voting_End
                FROM Elections
                WHERE Election_Type = 'Senate'
                AND Election_Year = @Election_Year;
            `;

            console.log('Executing election query:', electionQuery);
            const electionResult = await request.query(electionQuery);
            console.log('Election query result:', electionResult);

            const response = {
                ...result.recordset[0],
                election: electionResult.recordset[0] || null
            };

            res.json(response);
        } else {
            res.status(404).json({ error: 'Senate race not found' });
        }
    } catch (err) {
        console.error('Error fetching senate race:', err);
        res.status(500).json({ error: 'Failed to fetch senate race information', details: err.message });
    }
});

module.exports = router;