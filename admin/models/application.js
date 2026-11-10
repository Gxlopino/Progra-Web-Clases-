// admin/models/application.js
import { DataTypes } from 'sequelize';
import sequelize from '../configs/database.js';

const Application = sequelize.define('Application', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  benefits: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  functions: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  vacancies: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  published: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  email_notification: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  closed: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  salarry: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  is_draft: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  modality_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  sementer_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  district_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  workday_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  enterprise_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'applications',
  timestamps: true,
  createdAt: 'created',
  updatedAt: false,
});

export default Application;