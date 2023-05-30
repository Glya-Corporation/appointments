const { Router } = require('express');
const { createAppointmentType, getAllAppointmentsTypes, getAllCategories, updateAppointmentType, deleteAppointmentType } = require('../controllers');
const authenticate = require('../middlewares/auth.middleware');


const router = Router();

router.post('/appointment/type', authenticate, createAppointmentType);

router.get('/appointment/types/business/:id', authenticate, getAllAppointmentsTypes);

router.get('/services/categories/business/:id', authenticate, getAllCategories);

router.put('/appointment/type/:id/update', authenticate, updateAppointmentType);

router.delete('/appointment/type/:id/delete', authenticate, deleteAppointmentType);

module.exports = router;
