// admin/models/user.js
import { DataTypes } from 'sequelize';
import sequelize from '../configs/database.js';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING(45),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  reset_token: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
}, {
  tableName: 'users',
  timestamps: true,
  createdAt: 'created',
  updatedAt: 'updated',
});

export default User;