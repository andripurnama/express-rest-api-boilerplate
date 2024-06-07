import { Model, DataTypes } from 'sequelize';
import sequelize from './index';

class User extends Model {}
User.init({
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  isActive: DataTypes.BOOLEAN,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE
}, {
  sequelize,
  modelName: 'User',
});

export default User;