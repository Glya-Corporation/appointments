const { Galery, Colaborators, Service } = require('../models');

class GaleryServices {
  static async create(body) {
    try {
    } catch (error) {
      throw error;
    }
  }
  static async get(id) {
    try {
    } catch (error) {
      throw error;
    }
  }
  static async getAllPhotos(businessId) {
    try {
      const result = await Galery.findAll({
        where: { businessId, isSelected: true },
        attributes: ['id', 'photo', 'rating', 'price', 'businessId'],
        include: [
          {
            model: Colaborators,
            as: 'ownerService',
            attributes: ['id', 'name', 'surname', 'imgProfile', 'workingHours']
          },
          {
            model: Service,
            as: 'service',
            attributes: {
              exclude: ['business_id', 'businessId', 'category_id', 'createdAt', 'updatedAt']
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
  static async update(id, body) {
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
  }
}

module.exports = GaleryServices;
