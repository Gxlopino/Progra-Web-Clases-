// admin/models/status_application_student.js
import { DataTypes } from 'sequelize';
import sequelize from '../configs/database.js';

const StatusApplicationStudent = sequelize.define('StatusApplicationStudent', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
}, {
  tableName: 'status_applications_students',
  timestamps: false,
});

export default StatusApplicationStudent;