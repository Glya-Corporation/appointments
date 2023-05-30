const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Galery = db.define('galery', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  colaboratorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'colaborator_id'
  },
  serviceId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'service_id'
  },
  businessId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'business_id'
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Galery;
