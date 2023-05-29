const { Router } = require('express');
const { createFavorite, getAllFavorites, updateFavorite, deleteFavorite } = require('../controllers');
const authenticate = require('../middlewares/auth.middleware');


const router = Router();

router.post('/business/favorite', authenticate, createFavorite);

router.get('/business/favorite/client/:id', authenticate, getAllFavorites);

router.get('/business/:id/favorite', authenticate, getAllFavorites);

router.put('/business/favorite/:id/update', /* authenticate, */ updateFavorite);

router.delete('/business/favorite/:id', authenticate, deleteFavorite);

module.exports = router;
