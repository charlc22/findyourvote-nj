const sql = require('mssql');
require('dotenv').config();

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: {
        encrypt: false,  // Set to false for local
        trustServerCertificate: true,  // Must be true for local
        enableArithAbort: true
    }
};

async function getConnection() {
    try {
        const pool = await sql.connect(dbConfig);
        return pool;
    } catch (error) {
        console.error('Database connection failed:', error);
        throw error;
    }
}

module.exports = {
    getConnection
};