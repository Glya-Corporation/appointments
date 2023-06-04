const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const BusinessClients = db.define('business_clients', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  businessId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'business_id'
  },
  clientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'client_id'
  },
  isSelected: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

module.exports = BusinessClients;
