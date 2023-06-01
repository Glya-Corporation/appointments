const db = require('../utils/database');
const initModels = require('../models/initModels');
const { Roles, Users, CategoryBusiness, Clients, Business, Colaborators, CategoriesBusiness, Category, Service } = require('../models');

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
  { name: 'Paradise', ruc: '12345678901', userId: 1, logo: 'https://picsum.photos/200', rating: 1 },
  { name: 'Glamour Nails', ruc: '23456789012', userId: 2, logo: 'https://picsum.photos/200', rating: 2 },
  { name: 'Polished Perfection', ruc: '34567890123', userId: 3, logo: 'https://picsum.photos/200', rating: 3 },
  { name: 'Couture', ruc: '45678901234', userId: 4, logo: 'https://picsum.photos/200', rating: 4 },
  { name: 'Nail Artistry', ruc: '56789012345', userId: 5, logo: 'https://picsum.photos/200', rating: 5 },
  { name: 'Luxe', ruc: '67890123456', userId: 6, logo: 'https://picsum.photos/200', rating: 1 },
  { name: 'Nail Envy', ruc: '78901234567', userId: 7, logo: 'https://picsum.photos/200', rating: 2 },
  { name: 'Magic', ruc: '89012345678', userId: 8, logo: 'https://picsum.photos/200', rating: 3 },
  { name: 'Haven', ruc: '90123456789', userId: 9, logo: 'https://picsum.photos/200', rating: 4 },
  { name: 'Euphoria', ruc: '01234567890', userId: 10, logo: 'https://picsum.photos/200', rating: 5 }
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

const categoriesServices = [
  { id: 1, name: 'acrílico', businessId: 10 },
  { id: 2, name: 'gel', businessId: 10 },
  { id: 3, name: 'tradicional', businessId: 10 },
  { id: 4, name: 'permanente', businessId: 10 },
  { id: 5, name: 'relleno', businessId: 10 },
  { id: 6, name: 'semi-permanente', businessId: 10 },
  { id: 7, name: 'acrílico', businessId: 10 }
];

const service = [
  { name: 'Objeto 1', price: 57, duration: '13:45:27', business_id: 10, category_id: 1 },
  { name: 'Objeto 2', price: 34, duration: '08:12:19', business_id: 10, category_id: 1 },
  { name: 'Objeto 3', price: 90, duration: '20:31:59', business_id: 10, category_id: 1 },
  { name: 'Objeto 4', price: 21, duration: '02:15:07', business_id: 10, category_id: 1 },
  { name: 'Objeto 5', price: 73, duration: '18:59:42', business_id: 10, category_id: 1 },
  { name: 'Objeto 6', price: 48, duration: '11:37:55', business_id: 10, category_id: 1 },
  { name: 'Objeto 7', price: 64, duration: '16:04:29', business_id: 10, category_id: 1 },
  { name: 'Objeto 8', price: 11, duration: '01:05:40', business_id: 10, category_id: 2 },
  { name: 'Objeto 9', price: 68, duration: '15:52:59', business_id: 10, category_id: 2 },
  { name: 'Objeto 10', price: 52, duration: '12:40:16', business_id: 10, category_id: 2 },
  { name: 'Objeto 11', price: 39, duration: '08:56:34', business_id: 10, category_id: 2 },
  { name: 'Objeto 12', price: 87, duration: '19:28:21', business_id: 10, category_id: 2 },
  { name: 'Objeto 13', price: 26, duration: '04:20:49', business_id: 10, category_id: 2 },
  { name: 'Objeto 14', price: 71, duration: '16:53:10', business_id: 10, category_id: 2 },
  { name: 'Objeto 15', price: 17, duration: '01:38:55', business_id: 10, category_id: 3 },
  { name: 'Objeto 16', price: 44, duration: '10:20:47', business_id: 10, category_id: 3 },
  { name: 'Objeto 17', price: 82, duration: '21:47:16', business_id: 10, category_id: 3 },
  { name: 'Objeto 18', price: 33, duration: '07:34:55', business_id: 10, category_id: 3 },
  { name: 'Objeto 19', price: 78, duration: '18:11:23', business_id: 10, category_id: 3 },
  { name: 'Objeto 20', price: 59, duration: '13:56:42', business_id: 10, category_id: 3 },
  { name: 'Objeto 21', price: 22, duration: '02:08:37', business_id: 10, category_id: 3 },
  { name: 'Objeto 22', price: 65, duration: '15:44:55', business_id: 10, category_id: 4 },
  { name: 'Objeto 23', price: 51, duration: '12:33:04', business_id: 10, category_id: 4 },
  { name: 'Objeto 24', price: 40, duration: '09:13:26', business_id: 10, category_id: 4 },
  { name: 'Objeto 25', price: 96, duration: '22:25:51', business_id: 10, category_id: 4 },
  { name: 'Objeto 26', price: 16, duration: '01:31:19', business_id: 10, category_id: 4 },
  { name: 'Objeto 27', price: 54, duration: '13:15:44', business_id: 10, category_id: 4 },
  { name: 'Objeto 28', price: 89, duration: '20:47:19', business_id: 10, category_id: 4 },
  { name: 'Objeto 29', price: 35, duration: '08:22:06', business_id: 10, category_id: 5 },
  { name: 'Objeto 30', price: 77, duration: '18:47:35', business_id: 10, category_id: 5 },
  { name: 'Objeto 31', price: 25, duration: '04:12:12', business_id: 10, category_id: 5 },
  { name: 'Objeto 32', price: 69, duration: '16:03:27', business_id: 10, category_id: 5 },
  { name: 'Objeto 33', price: 50, duration: '11:51:14', business_id: 10, category_id: 5 },
  { name: 'Objeto 34', price: 38, duration: '08:44:28', business_id: 10, category_id: 5 },
  { name: 'Objeto 35', price: 86, duration: '19:19:47', business_id: 10, category_id: 5 },
  { name: 'Objeto 36', price: 10, duration: '01:01:51', business_id: 10, category_id: 6 },
  { name: 'Objeto 37', price: 67, duration: '15:43:14', business_id: 10, category_id: 6 },
  { name: 'Objeto 38', price: 53, duration: '12:31:46', business_id: 10, category_id: 6 },
  { name: 'Objeto 39', price: 92, duration: '21:04:23', business_id: 10, category_id: 6 },
  { name: 'Objeto 40', price: 20, duration: '02:03:11', business_id: 10, category_id: 6 },
  { name: 'Objeto 41', price: 63, duration: '15:34:46', business_id: 10, category_id: 6 },
  { name: 'Objeto 42', price: 49, duration: '11:22:39', business_id: 10, category_id: 6 },
  { name: 'Objeto 43', price: 18, duration: '01:23:50', business_id: 10, category_id: 7 },
  { name: 'Objeto 44', price: 45, duration: '10:05:22', business_id: 10, category_id: 7 },
  { name: 'Objeto 45', price: 83, duration: '21:32:51', business_id: 10, category_id: 7 },
  { name: 'Objeto 46', price: 32, duration: '07:20:34', business_id: 10, category_id: 7 },
  { name: 'Objeto 47', price: 79, duration: '18:02:49', business_id: 10, category_id: 7 },
  { name: 'Objeto 48', price: 27, duration: '04:55:03', business_id: 10, category_id: 7 },
  { name: 'Objeto 49', price: 72, duration: '17:28:28', business_id: 10, category_id: 7 }
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
    
    setTimeout(() => Category.bulkCreate(categoriesServices), 5000);
    
    setTimeout(() => Service.bulkCreate(service), 5000);
  })
  .then(() => console.log('Implantation complete'))
  .catch(error => console.log(error));
