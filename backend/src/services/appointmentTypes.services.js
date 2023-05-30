const { AppointmentsTypes, Category } = require('../models');

class AppointmentTypesServices {
  static async createAppointmentTypes(body) {
    try {
      const result = await AppointmentsTypes.create(body);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAllAppointmentTypes(businessId) {
    try {
      const result = await AppointmentsTypes.findAll({
        where: { businessId },
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAllCategories(business) {
    try {
      const result = await Category.findAll({
        where: { business_id: business },
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },
        order: [['id', 'ASC']]
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async updateAppointmentTypes(id, body) {
    try {
      await AppointmentsTypes.update(body, { where: { id } });
      return { message: 'Updated successful' };
    } catch (error) {
      throw error;
    }
  }
  static async deleteAppointmentTypes(id) {
    try {
      await AppointmentsTypes.destroy({ where: { id } });
      return { message: 'Deleted successful' };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AppointmentTypesServices;
