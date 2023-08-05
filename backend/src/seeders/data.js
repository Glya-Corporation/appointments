const roles = [{ name: 'owner' }, { name: 'admin' }, { name: 'colaborator' }];

const categoryBusiness = [{ name: 'peluquerías' }, { name: 'uñas' }, { name: 'barberías' }, { name: 'spas' }, { name: 'estéticas' }, { name: 'tatuajes' }, { name: 'medicina' }];

const users = [
  { name: 'John', surname: 'Doe', email: 'john.doe@example.com', password: 'pass123', number: '1234567890', imgProfile: null, roleId: 1 },
  { name: 'Jane', surname: 'Smith', email: 'jane.smith@example.com', password: 'pass123', number: '9876543210', imgProfile: null, roleId: 1 },
  { name: 'Michael', surname: 'Johnson', email: 'michael.johnson@example.com', password: 'pass123', number: '5555555555', imgProfile: null, roleId: 1 },
  { name: 'Emily', surname: 'Brown', email: 'emily.brown@example.com', password: 'pass123', number: '9999999999', imgProfile: null, roleId: 1 },
  { name: 'David', surname: 'Taylor', email: 'david.taylor@example.com', password: 'pass123', number: '1111111111', imgProfile: null, roleId: 1 },
  { name: 'Olivia', surname: 'Clark', email: 'olivia.clark@example.com', password: 'pass123', number: '2222222222', imgProfile: null, roleId: 1 },
  { name: 'James', surname: 'Lewis', email: 'james.lewis@example.com', password: 'pass123', number: '3333333333', imgProfile: null, roleId: 1 },
  { name: 'Sophia', surname: 'Lee', email: 'sophia.lee@example.com', password: 'pass123', number: '4444444444', imgProfile: null, roleId: 1 },
  { name: 'Daniel', surname: 'Walker', email: 'daniel.walker@example.com', password: 'pass123', number: '7777777777', imgProfile: null, roleId: 1 },
  { name: 'Ava', surname: 'Hall', email: 'ava.hall@example.com', password: 'pass123', number: '6666666666', imgProfile: null, roleId: 1 }
];

const businesses = [
  { name: 'Paradise', ruc: '12345678901', userId: 1, rating: 1, logo: 'https://picsum.photos/200', address: 'la casa azul' },
  { name: 'Nail Artistry', ruc: '56789012345', userId: 5, rating: 5, logo: 'https://picsum.photos/200', address: 'la casa azul' },
  { name: 'Glamour Nails', ruc: '23456789012', userId: 2, rating: 2, logo: 'https://picsum.photos/200', address: 'la casa azul' },
  { name: 'Polished Perfection', ruc: '34567890123', userId: 3, rating: 3, logo: 'https://picsum.photos/200', address: 'la casa azul' },
  { name: 'Couture', ruc: '45678901234', userId: 4, rating: 4, logo: 'https://picsum.photos/200', address: 'la casa azul' },
  { name: 'Luxe', ruc: '67890123456', userId: 6, rating: 1, logo: 'https://picsum.photos/200', address: 'la casa azul' },
  { name: 'Magic', ruc: '89012345678', userId: 8, rating: 3, logo: 'https://picsum.photos/200', address: 'la casa azul' },
  { name: 'Haven', ruc: '90123456789', userId: 9, rating: 4, logo: 'https://picsum.photos/200', address: 'la casa azul' },
  { name: 'Nail Envy', ruc: '78901234567', userId: 7, rating: 2, logo: 'https://picsum.photos/200', address: 'la casa azul' },
  { name: 'Euphoria', ruc: '01234567890', userId: 10, rating: 5, logo: 'https://picsum.photos/200', address: 'la casa azul' }
];

const categoriesBusiness = [
  { categoryBusinessId: 1, businessId: 1 },
  { categoryBusinessId: 2, businessId: 2 },
  { categoryBusinessId: 3, businessId: 3 },
  { categoryBusinessId: 4, businessId: 4 },
  { categoryBusinessId: 5, businessId: 5 },
  { categoryBusinessId: 6, businessId: 6 },
  { categoryBusinessId: 7, businessId: 7 },
  { categoryBusinessId: 1, businessId: 8 },
  { categoryBusinessId: 2, businessId: 9 },
  { categoryBusinessId: 3, businessId: 10 }
];

const categories = [
  { name: 'acrílico', businessId: 2, price: 12.5, duration: '01:30:00' },
  { name: 'gel', businessId: 2, price: 10.0, duration: '01:00:00' },
  { name: 'tradicional', businessId: 2, price: 25.0, duration: '01:00:00' },
  { name: 'permanente', businessId: 2, price: 11.0, duration: '01:00:00' },
  { name: 'relleno', businessId: 2, price: 3.0, duration: '01:00:00' },
  { name: 'semi-permanente', businessId: 2, price: 5.0, duration: '01:00:00' },
  { name: 'acrílico-gel', businessId: 2, price: 20.0, duration: '01:00:00' },
  { name: 'acrílico', businessId: 9, price: 0.0, duration: '01:00:00' },
  { name: 'gel', businessId: 9, price: 0.0, duration: '01:00:00' },
  { name: 'tradicional', businessId: 9, price: 0.0, duration: '01:00:00' },
  { name: 'permanente', businessId: 9, price: 0.0, duration: '01:00:00' },
  { name: 'relleno', businessId: 9, price: 0.0, duration: '01:00:00' },
  { name: 'semi-permanente', businessId: 9, price: 0.0, duration: '01:00:00' },
  { name: 'acrílico-gel', businessId: 9, price: 0.0, duration: '01:00:00' }
];

const colaborators = [
  {
    name: 'Robert',
    surname: 'Anderson',
    email: 'robert.anderson@example.com',
    password: 'pass123',
    workingHours: {
      lunes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      martes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      miercoles: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      jueves: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      viernes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      sabado: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' }
    },
    businessId: 1,
    roleId: 3
  },
  {
    name: 'Megan',
    surname: 'Harris',
    email: 'megan.harris@example.com',
    password: 'pass123',
    workingHours: {
      lunes: { date: '2023-08-31', entryTime: '13:00:00', departureTime: '20:00:00' },
      martes: { date: '2023-08-01', entryTime: '08:00:00', departureTime: '20:00:00' },
      miercoles: { date: '2023-08-02', entryTime: '08:00:00', departureTime: '20:00:00' },
      jueves: { date: '2023-08-03', entryTime: '08:00:00', departureTime: '20:00:00' },
      viernes: { date: '2023-08-04', entryTime: '08:00:00', departureTime: '20:00:00' },
      sabado: { date: '2023-08-05', entryTime: '08:00:00', departureTime: '20:00:00' }
    },
    businessId: 2,
    roleId: 3
  },
  {
    name: 'William',
    surname: 'Martin',
    email: 'william.martin@example.com',
    password: 'pass123',
    workingHours: {
      lunes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      martes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      miercoles: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      jueves: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      viernes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      sabado: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' }
    },
    businessId: 3,
    roleId: 3
  },
  {
    name: 'Samantha',
    surname: 'Jackson',
    email: 'samantha.jackson@example.com',
    password: 'pass123',
    workingHours: {
      lunes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      martes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      miercoles: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      jueves: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      viernes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      sabado: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' }
    },
    businessId: 4,
    roleId: 3
  },
  {
    name: 'Joseph',
    surname: 'Adams',
    email: 'joseph.adams@example.com',
    password: 'pass123',
    workingHours: {
      lunes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      martes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      miercoles: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      jueves: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      viernes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      sabado: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' }
    },
    businessId: 5,
    roleId: 3
  },
  {
    name: 'Charlotte',
    surname: 'Mitchell',
    email: 'charlotte.mitchell@example.com',
    password: 'pass123',
    workingHours: {
      lunes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      martes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      miercoles: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      jueves: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      viernes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      sabado: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' }
    },
    businessId: 6,
    roleId: 3
  },
  {
    name: 'Benjamin',
    surname: 'Roberts',
    email: 'benjamin.roberts@example.com',
    password: 'pass123',
    workingHours: {
      lunes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      martes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      miercoles: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      jueves: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      viernes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      sabado: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' }
    },
    businessId: 7,
    roleId: 3
  },
  {
    name: 'Emma',
    surname: 'Turner',
    email: 'emma.turner@example.com',
    password: 'pass123',
    workingHours: {
      lunes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      martes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      miercoles: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      jueves: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      viernes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      sabado: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' }
    },
    businessId: 8,
    roleId: 3
  },
  {
    name: 'Christopher',
    surname: 'Cook',
    email: 'christopher.cook@example.com',
    password: 'pass123',
    workingHours: {
      lunes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      martes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      miercoles: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      jueves: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      viernes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      sabado: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' }
    },
    businessId: 9,
    roleId: 3
  },
  {
    name: 'Madison',
    surname: 'Ward',
    email: 'madison.ward@example.com',
    password: 'pass123',
    workingHours: {
      lunes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      martes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      miercoles: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      jueves: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      viernes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      sabado: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' }
    },
    businessId: 10,
    roleI: 3
  },
  {
    name: 'David',
    surname: 'Smith',
    email: 'david.smith@example.com',
    password: 'pass123',
    workingHours: {
      lunes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      martes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      miercoles: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      jueves: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      viernes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      sabado: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' }
    },
    businessId: 1,
    roleId: 3
  },
  {
    name: 'Olivia',
    surname: 'Brown',
    email: 'olivia.brown@example.com',
    password: 'pass123',
    workingHours: {
      lunes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      martes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      miercoles: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      jueves: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      viernes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      sabado: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' }
    },
    businessId: 2,
    roleId: 3
  },
  {
    name: 'James',
    surname: 'Johnson',
    email: 'james.johnson@example.com',
    password: 'pass123',
    workingHours: {
      lunes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      martes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      miercoles: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      jueves: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      viernes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      sabado: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' }
    },
    businessId: 3,
    roleId: 3
  },
  {
    name: 'Ava',
    surname: 'Wilson',
    email: 'ava.wilson@example.com',
    password: 'pass123',
    workingHours: {
      lunes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      martes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      miercoles: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      jueves: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      viernes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      sabado: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' }
    },
    businessId: 8,
    roleId: 3
  },
  {
    name: 'Alexander',
    surname: 'Hall',
    email: 'alexander.hall@example.com',
    password: 'pass123',
    workingHours: {
      lunes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      martes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      miercoles: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      jueves: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      viernes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      sabado: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' }
    },
    businessId: 3,
    roleId: 3
  },
  {
    name: 'Grace',
    surname: 'Lopez',
    email: 'grace.lopez@example.com',
    password: 'pass123',
    workingHours: {
      lunes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      martes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      miercoles: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      jueves: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      viernes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      sabado: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' }
    },
    businessId: 8,
    roleId: 3
  },
  {
    name: 'Sophia',
    surname: 'Miller',
    email: 'sophia.miller@example.com',
    password: 'pass123',
    workingHours: {
      lunes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      martes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      miercoles: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      jueves: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      viernes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      sabado: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' }
    },
    businessId: 4,
    roleId: 3
  },
  {
    name: 'William',
    surname: 'Thomas',
    email: 'william.thomas@example.com',
    password: 'pass123',
    workingHours: {
      lunes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      martes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      miercoles: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      jueves: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      viernes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      sabado: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' }
    },
    businessId: 9,
    roleId: 3
  },
  {
    name: 'Harper',
    surname: 'Gonzalez',
    email: 'harper.gonzalez@example.com',
    password: 'pass123',
    workingHours: {
      lunes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      martes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      miercoles: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      jueves: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      viernes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      sabado: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' }
    },
    businessId: 4,
    roleId: 3
  },
  {
    name: 'Ryan',
    surname: 'Clark',
    email: 'ryan.clark@example.com',
    password: 'pass123',
    workingHours: {
      lunes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      martes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      miercoles: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      jueves: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      viernes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      sabado: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' }
    },
    businessId: 9,
    roleId: 3
  },
  {
    name: 'Daniel',
    surname: 'Davis',
    email: 'daniel.davis@example.com',
    password: 'pass123',
    workingHours: {
      lunes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      martes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      miercoles: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      jueves: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      viernes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      sabado: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' }
    },
    businessId: 5,
    roleId: 3
  },
  {
    name: 'Abigail',
    surname: 'Garcia',
    email: 'abigail.garcia@example.com',
    password: 'pass123',
    workingHours: {
      lunes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      martes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      miercoles: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      jueves: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      viernes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      sabado: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' }
    },
    businessId: 10,
    roleI: 3
  },
  {
    name: 'Matthew',
    surname: 'Young',
    email: 'matthew.young@example.com',
    password: 'pass123',
    workingHours: {
      lunes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      martes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      miercoles: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      jueves: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      viernes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      sabado: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' }
    },
    businessId: 5,
    roleId: 3
  },
  {
    name: 'Lily',
    surname: 'Baker',
    email: 'lily.baker@example.com',
    password: 'pass123',
    workingHours: {
      lunes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      martes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      miercoles: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      jueves: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      viernes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      sabado: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' }
    },
    businessId: 10,
    roleI: 3
  },
  {
    name: 'Emily',
    surname: 'Moore',
    email: 'emily.moore@example.com',
    password: 'pass123',
    workingHours: {
      lunes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      martes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      miercoles: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      jueves: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      viernes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      sabado: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' }
    },
    businessId: 6,
    roleId: 3
  },
  {
    name: 'Ethan',
    surname: 'Brown',
    email: 'ethan.brown@example.com',
    password: 'pass123',
    workingHours: {
      lunes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      martes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      miercoles: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      jueves: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      viernes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      sabado: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' }
    },
    businessId: 1,
    roleId: 3
  },
  {
    name: 'Scarlett',
    surname: 'Hernandez',
    email: 'scarlett.hernandez@example.com',
    password: 'pass123',
    workingHours: {
      lunes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      martes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      miercoles: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      jueves: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      viernes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      sabado: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' }
    },
    businessId: 6,
    roleId: 3
  },
  {
    name: 'Michael',
    surname: 'Anderson',
    email: 'michael.anderson@example.com',
    password: 'pass123',
    workingHours: {
      lunes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      martes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      miercoles: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      jueves: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      viernes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      sabado: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' }
    },
    businessId: 7,
    roleId: 3
  },
  {
    name: 'Avery',
    surname: 'Lee',
    email: 'avery.lee@example.com',
    password: 'pass123',
    workingHours: {
      lunes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      martes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      miercoles: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      jueves: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      viernes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      sabado: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' }
    },
    businessId: 2,
    roleId: 3
  },
  {
    name: 'Elijah',
    surname: 'Martin',
    email: 'elijah.martin@example.com',
    password: 'pass123',
    workingHours: {
      lunes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      martes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      miercoles: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      jueves: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      viernes: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' },
      sabado: { date: '2023-08-07', entryTime: '08:00:00', departureTime: '20:00:00' }
    },
    businessId: 7,
    roleId: 3
  }
];

const services = [
  { name: 'nombre 1', price: 57.0, duration: '01:40:00', businessId: 2, categoryId: 1 },
  { name: 'nombre 2', price: 34.0, duration: '01:10:00', businessId: 2, categoryId: 2 },
  { name: 'nombre 3', price: 90.0, duration: '01:30:00', businessId: 2, categoryId: 3 },
  { name: 'nombre 4', price: 21.0, duration: '01:10:00', businessId: 2, categoryId: 4 },
  { name: 'nombre 5', price: 73.0, duration: '01:50:00', businessId: 2, categoryId: 5 },
  { name: 'nombre 6', price: 48.0, duration: '01:30:00', businessId: 2, categoryId: 6 },
  { name: 'nombre 7', price: 64.0, duration: '01:00:00', businessId: 2, categoryId: 7 },
  { name: 'nombre 8', price: 11.0, duration: '01:00:00', businessId: 2, categoryId: 1 },
  { name: 'nombre 9', price: 68.0, duration: '01:50:00', businessId: 2, categoryId: 2 },
  { name: 'nombre 10', price: 52.0, duration: '01:40:00', businessId: 2, categoryId: 3 },
  { name: 'nombre 11', price: 39.0, duration: '01:50:00', businessId: 2, categoryId: 4 },
  { name: 'nombre 12', price: 87.0, duration: '01:20:00', businessId: 2, categoryId: 5 },
  { name: 'nombre 13', price: 26.0, duration: '01:20:00', businessId: 2, categoryId: 6 },
  { name: 'nombre 14', price: 71.0, duration: '01:50:00', businessId: 2, categoryId: 7 },
  { name: 'nombre 15', price: 17.0, duration: '01:30:00', businessId: 2, categoryId: 1 },
  { name: 'nombre 16', price: 44.0, duration: '01:20:00', businessId: 2, categoryId: 2 },
  { name: 'nombre 17', price: 82.0, duration: '01:40:00', businessId: 2, categoryId: 3 },
  { name: 'nombre 18', price: 33.0, duration: '01:30:00', businessId: 2, categoryId: 4 },
  { name: 'nombre 19', price: 78.0, duration: '01:10:00', businessId: 2, categoryId: 5 },
  { name: 'nombre 20', price: 59.0, duration: '01:50:00', businessId: 2, categoryId: 6 },
  { name: 'nombre 21', price: 22.0, duration: '01:00:00', businessId: 2, categoryId: 7 },
  { name: 'nombre 22', price: 65.0, duration: '01:40:00', businessId: 2, categoryId: 1 },
  { name: 'nombre 23', price: 51.0, duration: '01:30:00', businessId: 2, categoryId: 2 },
  { name: 'nombre 24', price: 40.0, duration: '01:10:00', businessId: 2, categoryId: 3 },
  { name: 'nombre 25', price: 96.0, duration: '01:20:00', businessId: 2, categoryId: 4 },
  { name: 'nombre 26', price: 16.0, duration: '01:30:00', businessId: 9, categoryId: 8 },
  { name: 'nombre 27', price: 54.0, duration: '01:10:00', businessId: 9, categoryId: 9 },
  { name: 'nombre 28', price: 89.0, duration: '01:40:00', businessId: 9, categoryId: 10 },
  { name: 'nombre 29', price: 35.0, duration: '01:20:00', businessId: 9, categoryId: 11 },
  { name: 'nombre 30', price: 77.0, duration: '01:40:00', businessId: 9, categoryId: 12 },
  { name: 'nombre 31', price: 25.0, duration: '01:10:00', businessId: 9, categoryId: 13 },
  { name: 'nombre 32', price: 69.0, duration: '01:00:00', businessId: 9, categoryId: 14 },
  { name: 'nombre 33', price: 50.0, duration: '01:50:00', businessId: 9, categoryId: 8 },
  { name: 'nombre 34', price: 38.0, duration: '01:40:00', businessId: 9, categoryId: 9 },
  { name: 'nombre 35', price: 86.0, duration: '01:10:00', businessId: 9, categoryId: 10 },
  { name: 'nombre 36', price: 10.0, duration: '01:00:00', businessId: 9, categoryId: 11 },
  { name: 'nombre 37', price: 67.0, duration: '01:40:00', businessId: 9, categoryId: 12 },
  { name: 'nombre 38', price: 53.0, duration: '01:30:00', businessId: 9, categoryId: 13 },
  { name: 'nombre 39', price: 92.0, duration: '01:00:00', businessId: 9, categoryId: 14 },
  { name: 'nombre 40', price: 20.0, duration: '01:00:00', businessId: 9, categoryId: 8 },
  { name: 'nombre 41', price: 63.0, duration: '01:30:00', businessId: 9, categoryId: 9 },
  { name: 'nombre 42', price: 49.0, duration: '01:20:00', businessId: 9, categoryId: 10 },
  { name: 'nombre 43', price: 18.0, duration: '01:20:00', businessId: 9, categoryId: 11 },
  { name: 'nombre 44', price: 45.0, duration: '01:00:00', businessId: 9, categoryId: 12 },
  { name: 'nombre 45', price: 83.0, duration: '01:30:00', businessId: 9, categoryId: 13 },
  { name: 'nombre 46', price: 32.0, duration: '01:20:00', businessId: 9, categoryId: 14 },
  { name: 'nombre 47', price: 79.0, duration: '01:00:00', businessId: 9, categoryId: 8 },
  { name: 'nombre 48', price: 27.0, duration: '01:50:00', businessId: 9, categoryId: 9 },
  { name: 'nombre 49', price: 72.0, duration: '01:20:00', businessId: 9, categoryId: 10 },
  { name: 'nombre 50', price: 57.0, duration: '01:40:00', businessId: 9, categoryId: 11 }
];

const galeries = [
  { colaboratorId: 2, serviceId: 1, businessId: 2, photo: 'https://picsum.photos/200', rating: 5, isSelected: true, price: 11 },
  { colaboratorId: 12, serviceId: 2, businessId: 2, photo: 'https://picsum.photos/200', rating: 5, isSelected: true, price: 67 },
  { colaboratorId: 22, serviceId: 3, businessId: 2, photo: 'https://picsum.photos/200', rating: 5, isSelected: true, price: 11 },
  { colaboratorId: 2, serviceId: 4, businessId: 2, photo: 'https://picsum.photos/200', rating: 5, isSelected: true, price: 10 },
  { colaboratorId: 12, serviceId: 5, businessId: 2, photo: 'https://picsum.photos/200', rating: 4, isSelected: true, price: 37 },
  { colaboratorId: 22, serviceId: 6, businessId: 2, photo: 'https://picsum.photos/200', rating: 3, isSelected: true, price: 68 },
  { colaboratorId: 2, serviceId: 7, businessId: 2, photo: 'https://picsum.photos/200', rating: 4, isSelected: true, price: 40 },
  { colaboratorId: 12, serviceId: 8, businessId: 2, photo: 'https://picsum.photos/200', rating: 3, isSelected: true, price: 91 },
  { colaboratorId: 22, serviceId: 9, businessId: 2, photo: 'https://picsum.photos/200', rating: 4, isSelected: true, price: 85 },
  { colaboratorId: 2, serviceId: 10, businessId: 2, photo: 'https://picsum.photos/200', rating: 3, isSelected: true, price: 47 },
  { colaboratorId: 12, serviceId: 11, businessId: 2, photo: 'https://picsum.photos/200', rating: 3, isSelected: true, price: 31 },
  { colaboratorId: 22, serviceId: 12, businessId: 2, photo: 'https://picsum.photos/200', rating: 4, isSelected: true, price: 14 },
  { colaboratorId: 2, serviceId: 13, businessId: 2, photo: 'https://picsum.photos/200', rating: 5, isSelected: true, price: 96 },
  { colaboratorId: 12, serviceId: 14, businessId: 2, photo: 'https://picsum.photos/200', rating: 5, isSelected: true, price: 74 },
  { colaboratorId: 22, serviceId: 15, businessId: 2, photo: 'https://picsum.photos/200', rating: 4, isSelected: true, price: 76 },
  { colaboratorId: 2, serviceId: 16, businessId: 2, photo: 'https://picsum.photos/200', rating: 3, isSelected: true, price: 41 },
  { colaboratorId: 12, serviceId: 17, businessId: 2, photo: 'https://picsum.photos/200', rating: 4, isSelected: true, price: 21 },
  { colaboratorId: 22, serviceId: 18, businessId: 2, photo: 'https://picsum.photos/200', rating: 3, isSelected: true, price: 35 },
  { colaboratorId: 2, serviceId: 19, businessId: 2, photo: 'https://picsum.photos/200', rating: 3, isSelected: true, price: 30 },
  { colaboratorId: 12, serviceId: 20, businessId: 2, photo: 'https://picsum.photos/200', rating: 4, isSelected: true, price: 54 },
  { colaboratorId: 22, serviceId: 21, businessId: 2, photo: 'https://picsum.photos/200', rating: 3, isSelected: true, price: 40 },
  { colaboratorId: 2, serviceId: 22, businessId: 2, photo: 'https://picsum.photos/200', rating: 3, isSelected: true, price: 19 },
  { colaboratorId: 12, serviceId: 23, businessId: 2, photo: 'https://picsum.photos/200', rating: 4, isSelected: true, price: 62 },
  { colaboratorId: 22, serviceId: 24, businessId: 2, photo: 'https://picsum.photos/200', rating: 3, isSelected: true, price: 72 },
  { colaboratorId: 2, serviceId: 25, businessId: 2, photo: 'https://picsum.photos/200', rating: 5, isSelected: true, price: 74 },
  { colaboratorId: 12, serviceId: 1, businessId: 2, photo: 'https://picsum.photos/200', rating: 3, isSelected: true, price: 21 },
  { colaboratorId: 22, serviceId: 2, businessId: 2, photo: 'https://picsum.photos/200', rating: 3, isSelected: true, price: 10 },
  { colaboratorId: 2, serviceId: 3, businessId: 2, photo: 'https://picsum.photos/200', rating: 5, isSelected: true, price: 46 },
  { colaboratorId: 12, serviceId: 4, businessId: 2, photo: 'https://picsum.photos/200', rating: 4, isSelected: true, price: 36 },
  { colaboratorId: 22, serviceId: 5, businessId: 2, photo: 'https://picsum.photos/200', rating: 5, isSelected: true, price: 71 },
  { colaboratorId: 2, serviceId: 6, businessId: 2, photo: 'https://picsum.photos/200', rating: 4, isSelected: true, price: 46 },
  { colaboratorId: 12, serviceId: 7, businessId: 2, photo: 'https://picsum.photos/200', rating: 5, isSelected: true, price: 81 },
  { colaboratorId: 22, serviceId: 8, businessId: 2, photo: 'https://picsum.photos/200', rating: 5, isSelected: true, price: 96 },
  { colaboratorId: 2, serviceId: 9, businessId: 2, photo: 'https://picsum.photos/200', rating: 5, isSelected: true, price: 70 },
  { colaboratorId: 12, serviceId: 10, businessId: 2, photo: 'https://picsum.photos/200', rating: 5, isSelected: true, price: 24 },
  { colaboratorId: 22, serviceId: 11, businessId: 2, photo: 'https://picsum.photos/200', rating: 5, isSelected: true, price: 60 },
  { colaboratorId: 2, serviceId: 12, businessId: 2, photo: 'https://picsum.photos/200', rating: 5, isSelected: true, price: 26 },
  { colaboratorId: 12, serviceId: 13, businessId: 2, photo: 'https://picsum.photos/200', rating: 5, isSelected: true, price: 43 },
  { colaboratorId: 22, serviceId: 14, businessId: 2, photo: 'https://picsum.photos/200', rating: 3, isSelected: true, price: 63 },
  { colaboratorId: 2, serviceId: 15, businessId: 2, photo: 'https://picsum.photos/200', rating: 3, isSelected: true, price: 82 },
  { colaboratorId: 9, serviceId: 26, businessId: 9, photo: 'https://picsum.photos/200', rating: 3, isSelected: true, price: 46 },
  { colaboratorId: 19, serviceId: 27, businessId: 9, photo: 'https://picsum.photos/200', rating: 5, isSelected: true, price: 70 },
  { colaboratorId: 29, serviceId: 28, businessId: 9, photo: 'https://picsum.photos/200', rating: 5, isSelected: true, price: 83 },
  { colaboratorId: 9, serviceId: 29, businessId: 9, photo: 'https://picsum.photos/200', rating: 4, isSelected: true, price: 67 },
  { colaboratorId: 19, serviceId: 30, businessId: 9, photo: 'https://picsum.photos/200', rating: 3, isSelected: true, price: 56 },
  { colaboratorId: 29, serviceId: 31, businessId: 9, photo: 'https://picsum.photos/200', rating: 4, isSelected: true, price: 97 },
  { colaboratorId: 9, serviceId: 32, businessId: 9, photo: 'https://picsum.photos/200', rating: 3, isSelected: true, price: 43 },
  { colaboratorId: 19, serviceId: 33, businessId: 9, photo: 'https://picsum.photos/200', rating: 3, isSelected: true, price: 73 },
  { colaboratorId: 29, serviceId: 34, businessId: 9, photo: 'https://picsum.photos/200', rating: 4, isSelected: true, price: 23 },
  { colaboratorId: 9, serviceId: 35, businessId: 9, photo: 'https://picsum.photos/200', rating: 3, isSelected: true, price: 22 },
  { colaboratorId: 19, serviceId: 36, businessId: 9, photo: 'https://picsum.photos/200', rating: 4, isSelected: true, price: 10 },
  { colaboratorId: 29, serviceId: 37, businessId: 9, photo: 'https://picsum.photos/200', rating: 3, isSelected: true, price: 29 },
  { colaboratorId: 9, serviceId: 38, businessId: 9, photo: 'https://picsum.photos/200', rating: 5, isSelected: true, price: 98 },
  { colaboratorId: 19, serviceId: 39, businessId: 9, photo: 'https://picsum.photos/200', rating: 4, isSelected: true, price: 17 },
  { colaboratorId: 29, serviceId: 40, businessId: 9, photo: 'https://picsum.photos/200', rating: 3, isSelected: true, price: 53 },
  { colaboratorId: 9, serviceId: 41, businessId: 9, photo: 'https://picsum.photos/200', rating: 4, isSelected: true, price: 29 },
  { colaboratorId: 19, serviceId: 42, businessId: 9, photo: 'https://picsum.photos/200', rating: 3, isSelected: true, price: 22 },
  { colaboratorId: 29, serviceId: 43, businessId: 9, photo: 'https://picsum.photos/200', rating: 3, isSelected: true, price: 75 },
  { colaboratorId: 9, serviceId: 44, businessId: 9, photo: 'https://picsum.photos/200', rating: 3, isSelected: true, price: 74 },
  { colaboratorId: 19, serviceId: 45, businessId: 9, photo: 'https://picsum.photos/200', rating: 4, isSelected: true, price: 97 },
  { colaboratorId: 29, serviceId: 46, businessId: 9, photo: 'https://picsum.photos/200', rating: 3, isSelected: true, price: 57 },
  { colaboratorId: 9, serviceId: 47, businessId: 9, photo: 'https://picsum.photos/200', rating: 4, isSelected: true, price: 71 },
  { colaboratorId: 19, serviceId: 48, businessId: 9, photo: 'https://picsum.photos/200', rating: 3, isSelected: true, price: 94 },
  { colaboratorId: 29, serviceId: 49, businessId: 9, photo: 'https://picsum.photos/200', rating: 3, isSelected: true, price: 68 },
  { colaboratorId: 9, serviceId: 50, businessId: 9, photo: 'https://picsum.photos/200', rating: 5, isSelected: true, price: 81 },
  { colaboratorId: 19, serviceId: 26, businessId: 9, photo: 'https://picsum.photos/200', rating: 3, isSelected: true, price: 48 },
  { colaboratorId: 29, serviceId: 27, businessId: 9, photo: 'https://picsum.photos/200', rating: 5, isSelected: true, price: 68 },
  { colaboratorId: 9, serviceId: 28, businessId: 9, photo: 'https://picsum.photos/200', rating: 5, isSelected: true, price: 93 },
  { colaboratorId: 19, serviceId: 29, businessId: 9, photo: 'https://picsum.photos/200', rating: 4, isSelected: true, price: 99 },
  { colaboratorId: 29, serviceId: 30, businessId: 9, photo: 'https://picsum.photos/200', rating: 5, isSelected: true, price: 20 },
  { colaboratorId: 9, serviceId: 31, businessId: 9, photo: 'https://picsum.photos/200', rating: 4, isSelected: true, price: 59 },
  { colaboratorId: 19, serviceId: 32, businessId: 9, photo: 'https://picsum.photos/200', rating: 5, isSelected: true, price: 28 },
  { colaboratorId: 29, serviceId: 33, businessId: 9, photo: 'https://picsum.photos/200', rating: 5, isSelected: true, price: 47 },
  { colaboratorId: 9, serviceId: 34, businessId: 9, photo: 'https://picsum.photos/200', rating: 5, isSelected: true, price: 40 },
  { colaboratorId: 19, serviceId: 35, businessId: 9, photo: 'https://picsum.photos/200', rating: 5, isSelected: true, price: 11 },
  { colaboratorId: 29, serviceId: 36, businessId: 9, photo: 'https://picsum.photos/200', rating: 5, isSelected: true, price: 39 },
  { colaboratorId: 9, serviceId: 37, businessId: 9, photo: 'https://picsum.photos/200', rating: 5, isSelected: true, price: 59 },
  { colaboratorId: 19, serviceId: 38, businessId: 9, photo: 'https://picsum.photos/200', rating: 5, isSelected: true, price: 54 },
  { colaboratorId: 29, serviceId: 39, businessId: 9, photo: 'https://picsum.photos/200', rating: 3, isSelected: true, price: 98 },
  { colaboratorId: 9, serviceId: 40, businessId: 9, photo: 'https://picsum.photos/200', rating: 3, isSelected: true, price: 55 }
];

const clients = [
  { name: 'Luis', surname: 'Uzcategui', email: 'alfonsouzcategui2@gmail.com', password: 'pass123', number: '5551112222' },
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

const businessClients = [
  { businessId: 2, clientId: 1, isSelected: true },
  { businessId: 9, clientId: 1, isSelected: false }
];

const appointments = [
  { description: 'acrilicas', status: 'pending', dateTime: { date: '2023-08-05', time: '15:00:00' }, totalPrice: 0.0, totalDuration: 2, businessId: 2, colaboratorId: 2, clientId: 5 },
  { description: 'acrilicas', status: 'pending', dateTime: { date: '2023-08-05', time: '18:00:00' }, totalPrice: 0.0, totalDuration: 2, businessId: 2, colaboratorId: 2, clientId: 8 }
];

const appointmentAtypes = [
  { galeryId: 2, appointmentId: 1 },
  { galeryId: 2, appointmentId: 2 }
];

module.exports = { roles, categoryBusiness, users, businesses, categoriesBusiness, categories, colaborators, services, galeries, clients, businessClients, appointments, appointmentAtypes };
