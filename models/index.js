//importing modules
const {Sequelize, DataTypes} = require('sequelize')

//Database connection with dialect of postgres specifying the database we are using
//port for my database is 5433
//database name is discover

// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres database connection
const DbUser = process.env.DB_USER;
const DbPass = process.env.DB_PASS;
const DbPort = process.env.DB_PORT;
const DbHost = process.env.DB_HOST;
const DbConnection = process.env.DB_CONNECTION;
const url = `${DbConnection}://${DbUser}:${DbPass}@${DbHost}:${DbPort}/discover`;
const sequelize = new Sequelize(`${url}`, {dialect: "postgres"})

//checking if connection is done
    sequelize.authenticate().then(() => {
        console.log(`Database connected to discover`)
    }).catch((err) => {
        console.log(err)
    })

    const db = {}
    db.Sequelize = Sequelize
    db.sequelize = sequelize

//connecting to model
db.users = require('./userModel') (sequelize, DataTypes)

//exporting the module
module.exports = db