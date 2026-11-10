// admin/models/enterprise.js
import { DataTypes } from 'sequelize';
import sequelize from '../configs/database.js';

const Enterprise = sequelize.define('Enterprise', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  ruc: {
    type: DataTypes.STRING(11),
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
  website_url: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  picture_url: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  district_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  sector_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  size_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'enterprises',
  timestamps: true,
  createdAt: 'created',
  updatedAt: 'updated',
});

export default Enterprise;