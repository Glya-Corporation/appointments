const { Users, Business, Appointments, Service, Colaborators, Clients, Roles, CategoryBusiness, Category, Galery } = require('./');

const initModels = () => {
  Roles.hasMany(Colaborators, { as: 'user', foreignKey: 'role_id' });
  Colaborators.belongsTo(Roles, { as: 'role', foreignKey: 'role_id' });

  Roles.hasMany(Users, { as: 'users', foreignKey: 'role_id' });
  Users.belongsTo(Roles, { as: 'role', foreignKey: 'role_id' });

  /* Un usuario puede tener muchos negocios */
  Users.hasMany(Business, { as: 'business', foreignKey: 'user_id' });
  Business.belongsTo(Users, { as: 'owner', foreignKey: 'user_id' });

  /* Un negocio puede tener muchas citas */
  Business.hasMany(Appointments, { as: 'Appointment', foreignKey: 'business_id' });
  Appointments.belongsTo(Business, { as: 'business', foreignKey: 'business_id' });

  /* Un negocio puede tener muchas tipos de citas */
  Business.hasMany(Service, { as: 'Appointment types', foreignKey: 'business_id' });
  Service.belongsTo(Business, { as: 'business', foreignKey: 'business_id' });

  Business.hasMany(Galery, { as: 'galery', foreignKey: 'business_id' });
  Galery.belongsTo(Business, { as: 'business', foreignKey: 'business_id' });

  Colaborators.hasMany(Galery, { as: 'servicesPhotos', foreignKey: 'colaborator_id' });
  Galery.belongsTo(Colaborators, { as: 'ownerService', foreignKey: 'colaborator_id' });

  Service.hasMany(Galery, { as: 'photo', foreignKey: 'service_id' });
  Galery.belongsTo(Service, { as: 'service', foreignKey: 'service_id' });

  /* Un negocio puede tener muchas tipos de citas */
  Business.hasMany(Colaborators, { as: 'colaborators', foreignKey: 'business_id' });
  Colaborators.belongsTo(Business, { as: 'business', foreignKey: 'business_id' });

  CategoryBusiness.belongsToMany(Business, { as: 'business', through: 'categories_business' });
  Business.belongsToMany(CategoryBusiness, { as: 'category', through: 'categories_business' });

  Category.hasMany(Service, { as: 'services', foreignKey: 'category_id' });
  Service.belongsTo(Category, { as: 'category', foreignKey: 'category_id' });

  Business.hasMany(Category, { as: 'categories_services', foreignKey: 'business_id' });
  Category.belongsTo(Business, { as: 'business_property', foreignKey: 'business_id' });

  /* Un tipo de cita  puede tener muchas citas */
  Service.belongsToMany(Appointments, { as: 'appointments', through: 'appointment_atypes' });
  Appointments.belongsToMany(Service, { as: 'appointmentsTypes', through: 'appointment_atypes' });

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
