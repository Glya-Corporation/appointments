const { Router } = require('express');
const { getAllCategoryBusiness, addCategoryBusiness } = require('../controllers');
const authenticate = require('../middlewares/auth.middleware');

const router = Router();

//router.post('/business/category', authenticate, createCategoryBusiness);

router.post('/add/business/category', authenticate, addCategoryBusiness);

router.get('/business/categories/all',  getAllCategoryBusiness);

//router.put('/business/category/:id', authenticate, updateCategoryBusiness);

//router.delete('/business/category/:id', authenticate, deleteCategoryBusiness);

module.exports = router;
