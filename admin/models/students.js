// admin/models/student.js

import { DataTypes } from 'sequelize';
import sequelize from '../configs/database.js';

const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  names: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  last_names: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(15),
    allowNull: true,
  },
  district_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  picture_url: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  summary: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  carrere_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  sementer_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'students',
  timestamps: true,
  createdAt: 'created',
  updatedAt: 'updated',
});

export default Student;