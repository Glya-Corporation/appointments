const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./utils/database');
const hendleError = require('./middlewares/error.middleware');
const initModels = require('./models/initModels');
const { UserRoutes, BusinessRoutes, BusinessClientsRoutes, AppointmentsRoutes, AppointmentsTypesRoutes, ColaboratorsRoutes, ClientsRoutes, AuthRoutes } = require('./routes');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

db.authenticate()
  .then(() => console.log('Authenticate complete'))
  .catch(error => console.log(error));

initModels();

db.sync({ force: false })
  .then(() => console.log('Synchronized database'))
  .catch(error => console.log(error));

app.get('/', (req, res) => {
  res.status(200).json({
    name: 'Appointment',
    version: process.env.VERSION
  })
});

app.use('/api/v1', AuthRoutes);
app.use('/api/v1', UserRoutes);
app.use('/api/v1', BusinessRoutes);
app.use('/api/v1', BusinessClientsRoutes);
app.use('/api/v1', ColaboratorsRoutes);
app.use('/api/v1', AppointmentsTypesRoutes);
app.use('/api/v1', ClientsRoutes);
app.use('/api/v1', AppointmentsRoutes);

app.use(hendleError);

module.exports = app;
