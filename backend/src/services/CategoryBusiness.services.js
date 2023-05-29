const { CategoryBusiness, CategoriesBusiness } = require('../models');

class CategoryBusinessServices {
  /* static async create(body) {
    try {
    } catch (error) {
      throw error;
    }
  } */
  static async addCategoryBusiness(body) {
    try {
      const { businessId, list } = body;
      const result = await CategoriesBusiness.bulkCreate(list.map(categoryBusinessId => ({ categoryBusinessId, businessId })));
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAllCategoryBusiness() {
    try {
      const result = await CategoryBusiness.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },
        order: [['name', 'ASC']]
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  /* static async update(id, body) {
    try {
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
    } catch (error) {
      throw error;
    }
  } */
}

module.exports = CategoryBusinessServices;
