const { Users, Business, Appointments, AppointmentsTypes, Colaborators, Clients } = require('./');

const initModels = () => {
  /* Un usuario puede tener muchos negocios */
  Users.hasMany(Business, { as: 'business', foreignKey: 'user_id' });
  Business.belongsTo(Users, { as: 'owner', foreignKey: 'user_id' });

  /* Un negocio puede tener muchas citas */
  Business.hasMany(Appointments, { as: 'Appointment', foreignKey: 'business_id' });
  Appointments.belongsTo(Business, { as: 'business', foreignKey: 'business_id' });

  /* Un negocio puede tener muchas tipos de citas */
  Business.hasMany(AppointmentsTypes, { as: 'Appointment types', foreignKey: 'business_id' });
  AppointmentsTypes.belongsTo(Business, { as: 'business', foreignKey: 'business_id' });

  /* Un negocio puede tener muchas tipos de citas */
  Business.hasMany(Colaborators, { as: 'colaborators', foreignKey: 'business_id' });
  Colaborators.belongsTo(Business, { as: 'business', foreignKey: 'business_id' });

  /* Un tipo de cita  puede tener muchas citas */
  AppointmentsTypes.belongsToMany(Appointments, { as: 'appointments', through: 'appointment_atypes' });
  Appointments.belongsToMany(AppointmentsTypes, { as: 'appointments types', through: 'appointment_atypes' });

  /* Una cita se puede reservar con un colaborador especifico */

  Appointments.belongsTo(Colaborators, { as: 'colaborator', foreignKey: 'colaborator_id' });
  Colaborators.hasMany(Appointments, { as: 'appointment', foreignKey: 'colaborator_id' });

  /* Una cita debe tener los datos de un cliente */

  Clients.hasMany(Appointments, { as: 'reserva', foreignKey: 'client_id' });
  Appointments.belongsTo(Clients, { as: 'client', foreignKey: 'client_id' });

  /* Un negocio puede tener muchos clientes */
  Business.belongsToMany(Clients, { as: 'clients', through: 'business_clients' });
  Clients.belongsToMany(Business, { as: 'business', through: 'business_clients' });
};

module.exports = initModels;
