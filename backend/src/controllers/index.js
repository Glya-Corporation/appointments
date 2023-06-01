const { createUser, getUser, getAllUsers, updateUser, deleteUser } = require('./user.controllers.js');
const { createBusiness, getBusiness, getAllBusinessByUserId, getAllBusiness, updateBusiness, deleteBusiness } = require('./business.controllers.js');
const { createColaborator, getColaborator, getAllColaborators, updateColaborator, deleteColaborator } = require('./colaborator.controllers.js');
const { createClient, getClient, getAllClientsByBusinessId, updateClient, deleteClient } = require('./client.controllers.js');
const { createAppointment, getAppointment, getAllAppointmentsByBusiness, getAllAppointmentsByClient, updateAppointment, deleteAppointment } = require('./appointment.controllers.js');
const { createFavorite, getAllFavorites, updateFavorite, deleteFavorite } = require('./favorites.controllers.js');
const { createService, getAllServices, getAllCategories, updateService, deleteService } = require('./service.controllers.js');
const { getAllCategoryBusiness, addCategoryBusiness } = require('./categoryBusiness.controllers.js');

module.exports = {
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
  createBusiness,
  getBusiness,
  getAllBusinessByUserId,
  getAllBusiness,
  updateBusiness,
  deleteBusiness,
  createColaborator,
  getColaborator,
  getAllColaborators,
  updateColaborator,
  deleteColaborator,
  createClient,
  getClient,
  getAllClientsByBusinessId,
  updateClient,
  deleteClient,
  createAppointment,
  getAppointment,
  getAllAppointmentsByBusiness,
  getAllAppointmentsByClient,
  updateAppointment,
  deleteAppointment,
  createFavorite,
  getAllFavorites,
  updateFavorite,
  deleteFavorite,
  createService,
  getAllServices,
  getAllCategories,
  updateService,
  deleteService,
  getAllCategoryBusiness,
  addCategoryBusiness
};
