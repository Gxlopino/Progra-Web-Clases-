// admin/models/application_studen_review.js
import { DataTypes } from 'sequelize';
import sequelize from '../configs/database.js';

const ApplicationStudentReview = sequelize.define('ApplicationStudentReview', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  applications_student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  points: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  enviroment: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  learning: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  work_load: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  title: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  start: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  anonimous: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  tableName: 'applications_students_reviews',
  timestamps: true,
  createdAt: 'created',
  updatedAt: 'updated',
});

export default ApplicationStudentReview;