const { BusinessClients, Clients, Business } = require('../models');

class BFServices {
  static async createFavorite(body) {
    try {
      const result = await BusinessClients.create(body);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAllFavorites(id, path) {
    try {
      let result = null;
      if (path === 'client') {
        result = await Clients.findByPk(id, {
          attributes: [],
          include: {
            through: Business,
            as: 'business',
            attributes: {
              exclude: ['createdAt', 'updatedAt']
            }
          }
        });
      } else if (path === 'business') {
        result = await Business.findByPk(id, {
          attributes: [],
          include: {
            through: Clients,
            as: 'clients',
            attributes: {
              exclude: ['password', 'createdAt', 'updatedAt']
            }
          }
        });
      }
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async deleteFavorite(id) {
    try {
      await BusinessClients.destroy({ where: { id } });
      return { message: 'Deleted successful' };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = BFServices;
