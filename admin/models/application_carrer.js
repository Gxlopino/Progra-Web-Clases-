// admin\models\application_carrer.js
import { DataTypes } from 'sequelize';
import sequelize from '../configs/database.js';

const ApplicationCarrer = sequelize.define('ApplicationCarrer', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  application_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  carrer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'applications_carrers',
  timestamps: false,
});

export default ApplicationCarrer;