const { Appointments, Clients, AppointmentsTypes, AppointmentAtypes, Service, Colaborators } = require('../models');

class AppointmentServices {
  static async createAppointment(body) {
    try {
      const { services } = body;
      const result = await Appointments.create(body);
      await AppointmentAtypes.bulkCreate(services.map(service => ({ galeryId: service, appointmentId: result.id })));
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAppointment(id) {
    try {
      const result = await Appointments.findByPk(id, {
        include: [
          {
            model: Clients,
            as: 'client',
            attributes: {
              exclude: ['password', 'createdAt', 'updatedAt']
            }
          },
          {
            through: AppointmentsTypes,
            as: 'appointments types',
            attributes: {
              exclude: ['createdAt', 'updatedAt']
            }
          }
        ]
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAllAppointmentsByBusiness(businessId) {
    try {
      const result = await Appointments.findAll({
        where: { businessId, status: 'inProgress' },
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'clientId', 'client_id', 'businessId', 'business_id', 'colaboratorId', 'colaborator_id']
        },
        include: [
          {
            model: Clients,
            as: 'client',
            attributes: {
              exclude: ['password', 'createdAt', 'updatedAt']
            }
          },
          {
            model: Service,
            as: 'appointmentsTypes',
            attributes: {
              exclude: ['businessId', 'business_id', 'category_id', 'createdAt', 'updatedAt']
            },
            through: {
              attributes: []
            }
          },
          {
            model: Colaborators,
            as: 'colaborator',
            attributes: ['id', 'name', 'surname', 'workingHours']
          }
        ]
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAllAppointmentsByClient(clientId) {
    try {
      const result = await Appointments.findAll({
        where: { clientId },
        include: [
          {
            model: Business,
            as: 'business',
            attributes: {
              exclude: ['createdAt', 'updatedAt']
            }
          },
          {
            through: AppointmentsTypes,
            as: 'appointments types',
            attributes: {
              exclude: ['createdAt', 'updatedAt']
            }
          }
        ],
        order: [['id', 'ASC']]
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async updateAppointment(id, { status }) {
    try {
      await Appointments.update({ status }, { where: { id } });
      return { message: 'Updated successful' };
    } catch (error) {
      throw error;
    }
  }
  static async deleteAppointment(id) {
    try {
      await Appointments.destroy({ where: { id } });
      return { message: 'Deleted successful' };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AppointmentServices;
