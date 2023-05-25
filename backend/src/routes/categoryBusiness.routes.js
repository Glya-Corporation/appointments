const { Router } = require('express');
const { getAllCategoryBusiness } = require('../controllers');
const authenticate  = require('../middlewares/auth.middleware');

const router = Router();

//router.post('/business/category', authenticate, createCategoryBusiness);

router.get('/business/categories',  getAllCategoryBusiness);

//router.put('/business/category/:id', authenticate, updateCategoryBusiness);

//router.delete('/business/category/:id', authenticate, deleteCategoryBusiness);

module.exports = router;
