// admin\models\application_skill.js
import { DataTypes } from 'sequelize';
import sequelize from '../configs/database.js';

const ApplicationSkill = sequelize.define('ApplicationSkill', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  application_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  skill_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'applications_skills',
  timestamps: false,
});

export default ApplicationSkill;