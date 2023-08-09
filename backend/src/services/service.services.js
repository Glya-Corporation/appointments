const { AppointmentsTypes, Category, Service, Galery } = require('../models');

class ServiceServices {
  static async createService(body) {
    try {
      const result = await AppointmentsTypes.create(body);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAllServices(businessId) {
    try {
      const result = await Service.findAll({
        where: { businessId },
        include: {
          model: Category,
          as: 'category',
          attributes: {
            exclude: ['business_id', 'businessId', 'createdAt', 'updatedAt']
          }
        },
        attributes: {
          exclude: ['business_id', 'businessId', 'category_id', 'categoryId', 'createdAt', 'updatedAt']
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAllCategories(businessId) {
    try {
      const result = await Category.findAll({
        where: { businessId },
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'business_id', 'businessId']
        },
        order: [['name', 'ASC']]
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async updateService(id, body) {
    try {
      await AppointmentsTypes.update(body, { where: { id } });
      return { message: 'Updated successful' };
    } catch (error) {
      throw error;
    }
  }
  static async deleteService(id) {
    try {
      await AppointmentsTypes.destroy({ where: { id } });
      return { message: 'Deleted successful' };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ServiceServices;
