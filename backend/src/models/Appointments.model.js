const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Appointments = db.define('appointments', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM('pending', 'active', 'canceled', 'finished'),
    defaultValue: 'pending'
  },
  businessId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'business_id'
  }
});

module.exports = Appointments;
