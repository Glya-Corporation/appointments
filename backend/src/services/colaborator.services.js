const { Colaborators } = require('../models');

class ColaboratorServices {
  static async createColaborator(businessId, body) {
    try {
      const result = await Colaborators.create({ ...body, businessId });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getColaborator(id) {
    try {
      const result = await Colaborators.findByPk(id, {
        attributes: {
          exclude: ['password']
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAllColaborators(businessId) {
    try {
      const result = await Colaborators.findAll({
        where: { businessId },
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt']
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async updateColaborator(id, body) {
    try {
      await Colaborators.update(body, { where: { id } });
      return { message: 'Updtaed successful' };
    } catch (error) {
      throw error;
    }
  }
  static async deleteColaborator(id) {
    try {
      await Colaborators.destroy({ where: { id } });
      return { message: 'Deleted successful' };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ColaboratorServices;
