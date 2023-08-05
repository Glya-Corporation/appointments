const { Router } = require('express');
const { createAppointment, getAppointment, getAllAppointmentsByBusiness, getAllAppointmentsByClient, updateAppointment, deleteAppointment } = require('../controllers');
const authenticate = require('../middlewares/auth.middleware');


const router = Router();

router.post('/appointment', authenticate, createAppointment);

router.get('/appointment/:id', authenticate, getAppointment);

router.get('/appointments/business/:id', authenticate, getAllAppointmentsByBusiness);

router.get('/appointments/client/:id'/* , authenticate */, getAllAppointmentsByClient);

router.put('/appointment/:id/update', authenticate, updateAppointment);

router.delete('/appointment/:id/delete', authenticate, deleteAppointment);

module.exports = router;
