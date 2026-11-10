
import { DataTypes } from 'sequelize';
import sequelize from '../configs/database.js';

const Experience = sequelize.define('Experience', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  enterprise: {
    type: DataTypes.STRING(60),
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  start_date: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  end_date: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'experiences',
  timestamps: false,
});

export default Experience;