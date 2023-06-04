const { Router } = require('express');
const { createPhoto, getPhoto, getAllPhotos, updatePhoto, deletePhoto } = require('../controllers');
const authenticate = require('../middlewares/auth.middleware');

const router = Router();

router.post('/photo/create', authenticate, createPhoto);

router.get('/photo/:id', authenticate, getPhoto);

router.get('/photo/business/:id', authenticate, getAllPhotos);

router.put('/photo/:id/update', authenticate, updatePhoto);

router.delete('/photo/:id/delete', authenticate, deletePhoto);

module.exports = router;
