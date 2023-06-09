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
    type: DataTypes.ENUM('pending', 'approved', 'inProgress', 'canceled', 'finished'),
    defaultValue: 'pending'
  },
  dateTime: {
    type: DataTypes.JSON,
    allowNull: false,
    field: 'date_time'
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
    field: 'total_price'
  },
  totalDuration: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    field: 'total_duration'
  },
  businessId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'business_id'
  },
  colaboratorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'colaborator_id'
  },
  clientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'client_id'
  }
});

module.exports = Appointments;
