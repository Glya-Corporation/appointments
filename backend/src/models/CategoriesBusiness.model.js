const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const CategoriesBusiness = db.define('categories_business', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  categoryBusinessId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'category_business_id'
  },
  businessId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'business_id'
  }
});

module.exports = CategoriesBusiness;
