const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Business = db.define('business', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ruc: {
    type: DataTypes.STRING,
    allowNull: false
  },
  opening_time: {
    type: DataTypes.TIME,
    defaultValue: '08:00:00'
  },
  closing_time: {
    type: DataTypes.TIME,
    defaultValue: '20:00:00'
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  settings: {
    type: DataTypes.JSON,
    allowNull: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id'
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  logo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'category_id'
  }
});

module.exports = Business;
