import fs from 'fs';
import path from 'path';
import sequelize from '../config/sequelize/sequelize';

const basename = path.basename(__filename);
const db = {};

// Dynamically import all models
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file)).default;
    db[model.name] = model;
  });

// Call associate method if defined
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = require('sequelize');

export default db;
