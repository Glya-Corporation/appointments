const db = require('../utils/database');
const initModels = require('../models/initModels');
const { Roles, Users, CategoryBusiness, Clients, Business, Colaborators, CategoriesBusiness, Category, Service, Galery, BusinessClients } = require('../models');
const { roles, categoryBusiness, users, businesses, categoriesBusiness, categories, colaborators, services, galeries, clients, businessClients } = require('./data.js');

initModels();

db.sync({ force: true })
  .then(() => {
    console.log('Iniciando la plantación de Información');

    Roles.bulkCreate(roles);
    CategoryBusiness.bulkCreate(categoryBusiness);
    users.forEach(user => Users.create(user));
    setTimeout(() => Business.bulkCreate(businesses), 1000);
    setTimeout(() => CategoriesBusiness.bulkCreate(categoriesBusiness), 2000);
    setTimeout(() => Category.bulkCreate(categories), 2000);
    setTimeout(() => colaborators.forEach(colaborator => Colaborators.create(colaborator)), 3000);
    setTimeout(() => Service.bulkCreate(services), 4000);
    setTimeout(() => Galery.bulkCreate(galeries), 5000);
    setTimeout(() => clients.forEach(client => Clients.create(client)), 5000);
    setTimeout(() => BusinessClients.bulkCreate(businessClients), 6000);
  })
  .catch(error => console.log(error))
  .finally(() => setTimeout(() => console.log('Implantation complete'), 1000));
