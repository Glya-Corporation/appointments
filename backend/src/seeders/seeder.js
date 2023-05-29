const db = require('../utils/database');
const initModels = require('../models/initModels');
const { Roles, Users, CategoryBusiness, Clients, Business, Colaborators, CategoriesBusiness } = require('../models');

initModels();

const roles = [{ name: 'owner' }, { name: 'admin' }, { name: 'colaborator' }];
const categories = [{ name: 'peluquerías' }, { name: 'uñas' }, { name: 'barberías' }, { name: 'spas' }, { name: 'estéticas' }, { name: 'tatuajes' }, { name: 'medicina' }];

const users = [
  { name: 'John', surname: 'Doe', email: 'john.doe@example.com', number: '1234567890', password: 'pass123' },
  { name: 'Jane', surname: 'Smith', email: 'jane.smith@example.com', number: '9876543210', password: 'pass123' },
  { name: 'Michael', surname: 'Johnson', email: 'michael.johnson@example.com', number: '5555555555', password: 'pass123' },
  { name: 'Emily', surname: 'Brown', email: 'emily.brown@example.com', number: '9999999999', password: 'pass123' },
  { name: 'David', surname: 'Taylor', email: 'david.taylor@example.com', number: '1111111111', password: 'pass123' },
  { name: 'Olivia', surname: 'Clark', email: 'olivia.clark@example.com', number: '2222222222', password: 'pass123' },
  { name: 'James', surname: 'Lewis', email: 'james.lewis@example.com', number: '3333333333', password: 'pass123' },
  { name: 'Sophia', surname: 'Lee', email: 'sophia.lee@example.com', number: '4444444444', password: 'pass123' },
  { name: 'Daniel', surname: 'Walker', email: 'daniel.walker@example.com', number: '7777777777', password: 'pass123' },
  { name: 'Ava', surname: 'Hall', email: 'ava.hall@example.com', number: '6666666666', password: 'pass123' }
];

const colaborators = [
  { name: 'Robert', surname: 'Anderson', email: 'robert.anderson@example.com', password: 'pass123', businessId: 1 },
  { name: 'Megan', surname: 'Harris', email: 'megan.harris@example.com', password: 'pass123', businessId: 2 },
  { name: 'William', surname: 'Martin', email: 'william.martin@example.com', password: 'pass123', businessId: 3 },
  { name: 'Samantha', surname: 'Jackson', email: 'samantha.jackson@example.com', password: 'pass123', businessId: 4 },
  { name: 'Joseph', surname: 'Adams', email: 'joseph.adams@example.com', password: 'pass123', businessId: 5 },
  { name: 'Charlotte', surname: 'Mitchell', email: 'charlotte.mitchell@example.com', password: 'pass123', businessId: 6 },
  { name: 'Benjamin', surname: 'Roberts', email: 'benjamin.roberts@example.com', password: 'pass123', businessId: 7 },
  { name: 'Emma', surname: 'Turner', email: 'emma.turner@example.com', password: 'pass123', businessId: 8 },
  { name: 'Christopher', surname: 'Cook', email: 'christopher.cook@example.com', password: 'pass123', businessId: 9 },
  { name: 'Madison', surname: 'Ward', email: 'madison.ward@example.com', password: 'pass123', businessId: 10 },
  { name: 'David', surname: 'Smith', email: 'david.smith@example.com', password: 'pass123', businessId: 1 },
  { name: 'Olivia', surname: 'Brown', email: 'olivia.brown@example.com', password: 'pass123', businessId: 2 },
  { name: 'James', surname: 'Johnson', email: 'james.johnson@example.com', password: 'pass123', businessId: 3 },
  { name: 'Sophia', surname: 'Miller', email: 'sophia.miller@example.com', password: 'pass123', businessId: 4 },
  { name: 'Daniel', surname: 'Davis', email: 'daniel.davis@example.com', password: 'pass123', businessId: 5 },
  { name: 'Emily', surname: 'Moore', email: 'emily.moore@example.com', password: 'pass123', businessId: 6 },
  { name: 'Michael', surname: 'Anderson', email: 'michael.anderson@example.com', password: 'pass123', businessId: 7 },
  { name: 'Ava', surname: 'Wilson', email: 'ava.wilson@example.com', password: 'pass123', businessId: 8 },
  { name: 'William', surname: 'Thomas', email: 'william.thomas@example.com', password: 'pass123', businessId: 9 },
  { name: 'Abigail', surname: 'Garcia', email: 'abigail.garcia@example.com', password: 'pass123', businessId: 10 },
  { name: 'Ethan', surname: 'Brown', email: 'ethan.brown@example.com', password: 'pass123', businessId: 1 },
  { name: 'Avery', surname: 'Lee', email: 'avery.lee@example.com', password: 'pass123', businessId: 2 },
  { name: 'Alexander', surname: 'Hall', email: 'alexander.hall@example.com', password: 'pass123', businessId: 3 },
  { name: 'Harper', surname: 'Gonzalez', email: 'harper.gonzalez@example.com', password: 'pass123', businessId: 4 },
  { name: 'Matthew', surname: 'Young', email: 'matthew.young@example.com', password: 'pass123', businessId: 5 },
  { name: 'Scarlett', surname: 'Hernandez', email: 'scarlett.hernandez@example.com', password: 'pass123', businessId: 6 },
  { name: 'Elijah', surname: 'Martin', email: 'elijah.martin@example.com', password: 'pass123', businessId: 7 },
  { name: 'Grace', surname: 'Lopez', email: 'grace.lopez@example.com', password: 'pass123', businessId: 8 },
  { name: 'Ryan', surname: 'Clark', email: 'ryan.clark@example.com', password: 'pass123', businessId: 9 },
  { name: 'Lily', surname: 'Baker', email: 'lily.baker@example.com', password: 'pass123', businessId: 10 }
];

const clients = [
  { name: 'Liam', surname: 'Baker', email: 'liam.baker@example.com', password: 'pass123', number: '5551112222' },
  { name: 'Isabella', surname: 'Green', email: 'isabella.green@example.com', password: 'pass123', number: '5552223333' },
  { name: 'Ethan', surname: 'Hill', email: 'ethan.hill@example.com', password: 'pass123', number: '5553334444' },
  { name: 'Amelia', surname: 'Campbell', email: 'amelia.campbell@example.com', password: 'pass123', number: '5554445555' },
  { name: 'Mason', surname: 'Young', email: 'mason.young@example.com', password: 'pass123', number: '5555556666' },
  { name: 'Mia', surname: 'Scott', email: 'mia.scott@example.com', password: 'pass123', number: '5556667777' },
  { name: 'Alexander', surname: 'Perez', email: 'alexander.perez@example.com', password: 'pass123', number: '5557778888' },
  { name: 'Avery', surname: 'White', email: 'avery.white@example.com', password: 'pass123', number: '5558889999' },
  { name: 'Evelyn', surname: 'King', email: 'evelyn.king@example.com', password: 'pass123', number: '5559990000' },
  { name: 'Elijah', surname: 'Robinson', email: 'elijah.robinson@example.com', password: 'pass123', number: '5550001111' }
];

const businesses = [
  { name: 'Paradise', ruc: '12345678901', userId: 1, logo: 'https://picsum.photos/200' },
  { name: 'Glamour Nails', ruc: '23456789012', userId: 2, logo: 'https://picsum.photos/200' },
  { name: 'Polished Perfection', ruc: '34567890123', userId: 3, logo: 'https://picsum.photos/200' },
  { name: 'Couture', ruc: '45678901234', userId: 4, logo: 'https://picsum.photos/200' },
  { name: 'Nail Artistry', ruc: '56789012345', userId: 5, logo: 'https://picsum.photos/200' },
  { name: 'Luxe', ruc: '67890123456', userId: 6, logo: 'https://picsum.photos/200' },
  { name: 'Nail Envy', ruc: '78901234567', userId: 7, logo: 'https://picsum.photos/200' },
  { name: 'Magic', ruc: '89012345678', userId: 8, logo: 'https://picsum.photos/200' },
  { name: 'Haven', ruc: '90123456789', userId: 9, logo: 'https://picsum.photos/200' },
  { name: 'Euphoria', ruc: '01234567890', userId: 10, logo: 'https://picsum.photos/200' }
];

const categoriesBusiness = [
  { categoryBusinessId: 2, businessId: 2 },
  { categoryBusinessId: 2, businessId: 5 },
  { categoryBusinessId: 2, businessId: 7 },
  { categoryBusinessId: 1, businessId: 1 },
  { categoryBusinessId: 3, businessId: 3 },
  { categoryBusinessId: 5, businessId: 4 },
  { categoryBusinessId: 3, businessId: 6 },
  { categoryBusinessId: 4, businessId: 8 },
  { categoryBusinessId: 4, businessId: 9 },
  { categoryBusinessId: 1, businessId: 10 }
];

db.sync({ force: true })
  .then(() => {
    console.log('Iniciando la plantación de Información');

    Roles.bulkCreate(roles);
    CategoryBusiness.bulkCreate(categories);
    users.forEach(user => Users.create(user));
    clients.forEach(client => Clients.create(client));

    setTimeout(() => Business.bulkCreate(businesses), 2000);

    setTimeout(() => CategoriesBusiness.bulkCreate(categoriesBusiness), 4000);
    
    setTimeout(() => colaborators.forEach(colaborator => Colaborators.create(colaborator)), 4000);
  })
  .then(() => console.log('Implantation complete'))
  .catch(error => console.log(error));
