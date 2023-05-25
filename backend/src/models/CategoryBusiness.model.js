const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const CategoryBusiness = db.define('category_business', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = CategoryBusiness;
