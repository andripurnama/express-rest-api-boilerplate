const dotenv = (require("dotenv").config()).parsed
const path = require('path');
let config = {
    username: dotenv.DB_USER,
    password: dotenv.DB_PASS,
    database: dotenv.DB_NAME,
    host: dotenv.DB_HOST,
    port: dotenv.DB_PORT,
    dialect: dotenv.DB_DIALECT,
    migrationStorageTableName: 'migrations',
    seederStorageTableName: 'seeders'
};

module.exports = {
    development: config,
    test: config,
    production: config
}
