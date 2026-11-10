// admin/models/log.js
import { DataTypes } from 'sequelize';
import sequelize from '../configs/database.js';

const Log = sequelize.define('Log', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
}, {
  tableName: 'logs',
  timestamps: true,
  createdAt: 'created',
  updatedAt: false,
});

export default Log;