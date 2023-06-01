const { Router } = require('express');
const { createService, getAllServices, getAllCategories, updateService, deleteService } = require('../controllers');
const authenticate = require('../middlewares/auth.middleware');


const router = Router();

router.post('/service', authenticate, createService);

router.get('/services/business/:id', authenticate, getAllServices);

router.get('/services/categories/business/:id', authenticate, getAllCategories);

router.put('/service/:id/update', authenticate, updateService);

router.delete('/service/:id/delete', authenticate, deleteService);

module.exports = router;
