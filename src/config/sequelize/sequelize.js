import { Sequelize } from 'sequelize';
import config from '../database/index';

const env = process.env.APP_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
    migrationStorageTableName: dbConfig.migrationStorageTableName,
    seederStorageTableName: dbConfig.seederStorageTableName,
    logging: false,
  }
);

export default sequelize;
