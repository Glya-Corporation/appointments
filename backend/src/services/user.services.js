const { Users, Business, Appointments, AppointmentsTypes, Colaborators, BusinessClients } = require('../models');

class UserServices {
  static async createUser({ user, business }) {
    try {
      const { id, name, surname, email } = await Users.create(user);
      const businessCreated = await Business.create({ ...business, userId: id });
      return { user: { id, name, surname, email }, business: businessCreated };
    } catch (error) {
      throw error;
    }
  }
  static async getUser(id) {
    try {
      const result = await Users.findByPk(id, {
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt']
        },
        include: {
          model: Business,
          as: 'business',
          attributes: {
            exclude: ['user_id', 'userId', 'createdAt', 'updatedAt']
          }
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAllUsers() {
    try {
      const result = await Users.findAll({
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
  static async updateUser(id, body) {
    try {
      for (const p in body) body[p] === '' && delete body[p];

      await Users.update(body, { where: { id } });

      return { message: 'Updated successful' };
    } catch (error) {
      throw error;
    }
  }
  static async deleteUser(id) {
    try {
      const business = await Business.findOne({ where: { userId: id } });
      const promises = [
        BusinessClients.destroy({ where: { businessId: business.id } }),
        Appointments.destroy({ where: { businessId: business.id } }),
        AppointmentsTypes.destroy({ where: { businessId: business.id } }),
        Colaborators.destroy({ where: { businessId: business.id } }),
        Business.destroy({ where: { userId: id } }),
        Users.destroy({ where: { id } })
      ];
      await Promise.all(promises);
      return { message: 'Deleted successful' };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
