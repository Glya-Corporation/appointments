const { Clients } = require('../models');

class ClientServices {
  static async createClient(body) {
    try {
      for (const p in body) body[p] === '' && delete body[p];
      const result = await Clients.create(body);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getClient(id) {
    try {
      const result = await Clients.findByPk(id, {
        attributes: {
          exclude: ['password']
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAllClientsByBusinessId(businessId) {
    try {
      const result = await Clients.findAll({
        where: { businessId },
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt']
        },
        order: [['id', 'ASC']]
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async updateClient(id, body) {
    try {
      await Clients.update(body, { where: { id } });
      return { message: 'updated successful' };
    } catch (error) {
      throw error;
    }
  }
  static async deleteClient(id) {
    try {
      await Clients.destroy({ where: { id } });
      return { message: 'Deleted successful' };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ClientServices;
