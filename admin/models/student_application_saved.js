// admin/models/student_application_saved.js
import { DataTypes } from 'sequelize';
import sequelize from '../configs/database.js';

const StudentApplicationSaved = sequelize.define('StudentApplicationSaved', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  application_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'students_applications_saved',
  timestamps: true,
  createdAt: 'created',
  updatedAt: false,
});

export default StudentApplicationSaved;