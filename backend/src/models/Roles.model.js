const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Roles = db.define('roles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
});

module.exports = Roles;