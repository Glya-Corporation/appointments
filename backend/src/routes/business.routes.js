const { Router } = require('express');
const { createBusiness, getBusiness, getAllBusinessByUserId, getAllBusiness, updateBusiness, updateSettings, deleteBusiness } = require('../controllers');
const authenticate = require('../middlewares/auth.middleware');



const router = Router();

router.post('/business/user/:id/create', authenticate, createBusiness);

router.get('/business/:id', authenticate, getBusiness);

router.get('/business/user/:id', getAllBusinessByUserId);

router.get('/business', authenticate, getAllBusiness);

router.put('/business/:id/update', authenticate, updateBusiness);

router.put('/business/:id/update/settings', authenticate, updateSettings)

router.delete('/business/:id/delete', authenticate, deleteBusiness);

module.exports = router;
