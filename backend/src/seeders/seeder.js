const db = require('../utils/database');
const initModels = require('../models/initModels');
const { Roles, Users } = require('../models');

initModels();

const roles = [{ name: 'owner' }, { name: 'admin' }, { name: 'colaborator' }];
const categories = [
  { name: 'peluquerías' },
  { name: 'uñas' },
  { name: 'barberías' },
  { name: 'spas' },
  { name: 'centro estético' },
  { name: 'tatuajes' },
  { name: 'medicina' }
];

const users = [{ name: '', surname: '', email: '', number: '', password: '' }];
const colaborators = [{ name: '', surname: '', email: '', password: '', businessId: '' }];
const clients = [{ name: '', surname: '', email: '', password: '', number: '' }];

const business = [{ name: '', ruc: '' }];

db.sync({ force: true })
  .then(() => {
    console.log('Iniciando la plantación de Información');

    Roles.bulkCreate(roles);
    //setTimeout(() => users.forEach(user => Users.create(user)), 1000);
  })
  .then(() => console.log('Implantation complete'))
  .catch(error => console.log(error));
