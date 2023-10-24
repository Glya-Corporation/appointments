const { Business, CategoryBusiness, Users } = require('../models');

class BusinessServices {
  static async createBusiness(id, body) {
    try {
      const result = await Business.create({ ...body, userId: id });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getBusiness(id) {
    try {
      const result = await Business.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAllBusinessByUserId(id) {
    try {
      const result = await Business.findAll({ where: { userId: id } });
      return result;
    } catch (error) {}
  }
  static async getAllBusiness() {
    try {
      const result = await Business.findAll({
        attributes: {
          exclude: ['user_id', 'createdAt', 'updatedAt']
        },
        include: [
          {
            model: CategoryBusiness,
            as: 'category',
            attributes: {
              exclude: ['createdAt', 'updatedAt']
            },
            through: {
              attributes: []
            }
          },
          {
            model: Users,
            as: 'owner',
            attributes: {
              exclude: ['password', 'createdAt', 'updatedAt', 'role_id', 'roleId']
            }
          }
        ],
        order: [['rating', 'DESC']]
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async updateBusiness(id, body) {
    try {
      for (const p in body) body[p] === '' && delete body[p];
      if (body.isSelected) {
        const { userId } = await Business.findByPk(id, { attributes: ['userId'] });
        await Business.update({ isSelected: false }, { where: { userId, isSelected: true } });
      }
      await Business.update(body, { where: { id } });
      return { message: 'Updated successful' };
    } catch (error) {
      throw error;
    }
  }
  static async updateSettings(id, settings) {
    try {
      await Business.update(settings, { where: { id } });
      return { message: 'Updated successful' };
    } catch (error) {
      throw error;
    }
  }
  static async deleteBusiness(id) {
    try {
      await Business.destroy({ where: { id } });
      return { message: 'Updated successful' };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = BusinessServices;
