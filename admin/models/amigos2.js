// admin/models/amigos2.js

import { DataTypes } from 'sequelize';
import sequelize from '../../configs/database.js';

const Amigos2 = sequelize.define('Amigos2', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  celular: {
    type: DataTypes.STRING(15),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  birth_date: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  picture_url: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    unique: true,
  },
}, {
  tableName: 'amigos2',
  timestamps: false,
});

export default Amigos2;
