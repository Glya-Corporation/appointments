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
      allowNull: true,
      field: 'img_profile'
    },
    salary: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    workingHours: {
      type: DataTypes.JSON,
      defaultValue: {lunes:{date:'2023-06-07',entryTime:'08:00:00',departureTime:'20:00:00'},martes: {date:'2023-06-07',entryTime:'08:00:00',departureTime:'20:00:00'},miercoles:{date:'2023-06-07',entryTime:'08:00:00',departureTime:'20:00:00'},jueves:{date:'2023-06-07',entryTime:'08:00:00',departureTime:'20:00:00'},viernes:{date:'2023-06-07',entryTime:'08:00:00',departureTime:'20:00:00'},sabado:{date:'2023-06-07',entryTime:'08:00:00',departureTime:'20:00:00'}},
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
