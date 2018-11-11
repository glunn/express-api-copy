const mysql = require('mysql');

// Set database connection credentials
const config = {
    host: 'mysql.workingaperture.tk',
    user: 'wa_database_user',
    password: 'password',
    database: 'working_db',
};

// Create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;