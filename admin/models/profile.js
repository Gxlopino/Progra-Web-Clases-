// admin/models/profile.js
import { DataTypes } from 'sequelize';
import sequelize from '../configs/database.js';

const Profile = sequelize.define('Profile', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    unique: true,
  },
}, {
  tableName: 'profiles',
  timestamps: true,
  createdAt: 'created',
  updatedAt: 'updated',
});

export default Profile;