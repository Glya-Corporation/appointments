const { Users, Cart, Clients, Business, Colaborators, Roles } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class AuthServices {
  static async loginClient(credentials) {
    try {
      const { email, password } = credentials;
      const result = await Clients.findOne({
        where: { email },
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'role_id']
        }
      });
      if (result) {
        const isValid = bcrypt.compareSync(password, result.password);
        return isValid ? result : isValid;
      } else {
        return result;
      }
    } catch (error) {
      throw error;
    }
  }
  static async loginBusiness(credentials) {
    try {
      const { email, password } = credentials;
      const user = await Users.findOne({
        where: { email },
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },
        include: [
          {
            model: Business,
            as: 'business',
            attributes: {
              exclude: ['userId', 'user_id', 'createdAt', 'updatedAt']
            }
          },
          {
            model: Roles,
            as: 'role',
            attributes: {
              exclude: ['createdAt', 'updatedAt']
            }
          }
        ]
      });
      const colaborator = await Colaborators.findOne({
        where: { email },
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },
        include: [
          {
            model: Business,
            as: 'business',
            attributes: {
              exclude: ['userId', 'user_id', 'createdAt', 'updatedAt']
            }
          },
          {
            model: Roles,
            as: 'role',
            attributes: {
              exclude: ['createdAt', 'updatedAt']
            }
          }
        ]
      });
      const result = user || colaborator;
      if (result) {
        const isValid = bcrypt.compareSync(password, result.password);
        return isValid ? result : isValid;
      } else {
        return result;
      }
    } catch (error) {
      throw error;
    }
  }
  static generateToken(user) {
    try {
      console.log('hi')
      const token = jwt.sign(user, process.env.SECRET_KEY, {
        algorithm: 'HS512'
      });
      return token;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthServices;
