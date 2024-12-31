const express = require('express');
const cors = require('cors');
require('dotenv').config();
const apiRoutes = require('./routes/api');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Simple health check route
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

// API Routes
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Health check available at http://localhost:${PORT}/health`);
    console.log(`API endpoints available at http://localhost:${PORT}/api/...`);
});

// Root route
app.get('/', (req, res) => {
    res.json({
        message: 'FindYourVote API Server',
        endpoints: {
            health: '/health',
            houseDistrict: '/api/house/districts/:districtNumber',
            houseCandidates: '/api/house/candidates/:districtNumber',
            senateRace: '/api/senate/race',
            senateCandidates: '/api/senate/candidates'
        }
    });
});