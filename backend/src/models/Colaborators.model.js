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
      defaultValue: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png',
      allowNull: true,
      field: 'img_profile'
    },
    salary: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    workingHours: {
      type: DataTypes.JSON,
      defaultValue: [
        { date: '2023-10-23', entryTime: '08:00:00', departureTime: '20:00:00' },
        { date: '2023-10-24', entryTime: '08:00:00', departureTime: '20:00:00' },
        { date: '2023-10-25', entryTime: '08:00:00', departureTime: '20:00:00' },
        { date: '2023-10-26', entryTime: '08:00:00', departureTime: '20:00:00' },
        { date: '2023-10-27', entryTime: '08:00:00', departureTime: '20:00:00' },
        { date: '2023-10-28', entryTime: '08:00:00', departureTime: '20:00:00' }
      ],
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
    },
    roleId: {
      type: DataTypes.INTEGER,
      defaultValue: 3,
      field: 'role_id'
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active'
    }
  },
  {
    hooks: {
      beforeBulkCreate: (colaborators, options) => {
        for (const colaborator of colaborators) {
          const { password } = colaborator;
          const hash = bcrypt.hashSync(password, 8);
          colaborator.password = hash;
        }
      }
    }
  }
);

module.exports = Colaborators;
