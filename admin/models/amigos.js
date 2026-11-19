// admin/models/amigos.js
import { DataTypes } from 'sequelize';
import sequelize from '../../configs/database.js';

const amigos = sequelize.define('amigos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Corresponde al SERIAL de PostgreSQL
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  celular: {
    type: DataTypes.STRING(15),
    allowNull: false
  }
}, {
  tableName: 'amigos', // Fuerza el nombre exacto de la tabla
  timestamps: false     // Desactiva createdAt y updatedAt
});

export default amigos;