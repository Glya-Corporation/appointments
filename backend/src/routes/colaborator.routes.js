const { Router } = require('express');
const { createColaborator, getColaborator, getAllColaborators, updateColaborator, deleteColaborator } = require('../controllers');
const authenticate = require('../middlewares/auth.middleware');


const router = Router();

router.post('/colaborator', authenticate, createColaborator);

router.get('/colaborator/:id', authenticate, getColaborator);

router.get('/colaborators/business/:id', authenticate, getAllColaborators);

router.put('/colaborator/:id/update', authenticate, updateColaborator);

router.delete('/colaborator/:id/delete', authenticate, deleteColaborator);

module.exports = router;
