const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const AppointmentAtypes = db.define('appointment_atypes', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  }
});

module.exports = AppointmentAtypes;
