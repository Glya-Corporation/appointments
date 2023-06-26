const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const AppointmentAtypes = db.define('appointment_atypes', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  appointmentsId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'appointments_id'
  },
  galeryId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'galery_id'
  }
});

module.exports = AppointmentAtypes;
