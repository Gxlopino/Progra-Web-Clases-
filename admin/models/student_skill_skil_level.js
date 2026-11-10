// admin\models\student_skill_skil_level.js
import { DataTypes } from 'sequelize';
import sequelize from '../configs/database.js';

const StudentSkillSkillLevel = sequelize.define('StudentSkillSkillLevel', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  skill_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  skill_level_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'students_skills_skill_levels',
  timestamps: false,
});

export default StudentSkillSkillLevel;