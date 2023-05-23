const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

const Clients = db.define(
  'clients',
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
    number: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    hooks: {
      beforeCreate: (client, options) => {
        const { password } = client;
        const hash = bcrypt.hashSync(password, 8);
        client.password = hash;
      }
    }
  }
);

module.exports = Clients;
