// admin/models/application_student.js
import { DataTypes } from 'sequelize';
import sequelize from '../configs/database.js';

const ApplicationStudent = sequelize.define('ApplicationStudent', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  application_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status_applications_student_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'applications_students',
  timestamps: true,
  createdAt: 'created',
  updatedAt: false,
});

export default ApplicationStudent;