const { Business } = require('../models');

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
      const result = await Business.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async updateBusiness(id, body) {
    try {
      for (const p in body) body[p] === '' && delete body[p];
      await Business.update(body, { where: { id } });
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
