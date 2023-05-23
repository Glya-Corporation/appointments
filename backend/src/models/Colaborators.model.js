const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

const Colaborators = db.define(
  'colaborators',
  {
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
    surname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true
      }
    },
    imgProfile: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'img_profile'
    },
    salary: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    workingHours: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'working_hours'
    },
    number: {
      type: DataTypes.STRING,
      allowNull: true
    },
    businessId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'business_id'
    }
  },
  {
    hooks: {
      beforeCreate: (colaborator, options) => {
        const { password } = colaborator;
        const hash = bcrypt.hashSync(password, 8);
        colaborator.password = hash;
      }
    }
  }
);

module.exports = Colaborators;
