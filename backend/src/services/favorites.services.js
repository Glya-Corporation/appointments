const { BusinessClients, Clients, Business, CategoryBusiness } = require('../models');

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
            model: Business,
            as: 'business',
            attributes: {
              exclude: ['user_id', 'createdAt', 'updatedAt']
            },
            include: {
              model: CategoryBusiness,
              as: 'category',
              attributes: {
                exclude: ['createdAt', 'updatedAt']
              },
              through: {
                attributes: []
              }
            }
          }
        });
      } else if (path === 'business') {
        result = await Business.findByPk(id, {
          attributes: [],
          include: {
            model: Clients,
            as: 'clients',
            attributes: {
              exclude: ['password', 'createdAt', 'updatedAt']
            },
            through: {
              attributes: []
            }
          }
        });
      }
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async updateFavorite(id) {
    try {
      const { clientId } = await BusinessClients.findByPk(id);
      await BusinessClients.update({ isSelected: false }, { where: { clientId } });
      await BusinessClients.update({ isSelected: true }, { where: { id } });
      return { message: 'Updated successful' };
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
