const AuthServices = require('./auth.service.js')
const UserServices = require('./user.services.js');
const BusinessServices = require('./business.services.js');
const ColaboratorServices = require('./colaborator.services.js');
const ClientServices = require('./cliente.services.js');
const AppointmentServices = require('./appointment.services.js');
const BFServices = require('./favorites.services.js');
const AppointmentTypesServices = require('./appointmentTypes.services.js');

module.exports = { AuthServices, UserServices, BusinessServices, ColaboratorServices, ClientServices, AppointmentServices, BFServices, AppointmentTypesServices };
