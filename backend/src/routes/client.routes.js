const { Router } = require('express');
const { createClient, getClient, getAllClientsByBusinessId, updateClient, deleteClient } = require('../controllers');
const authenticate = require('../middlewares/auth.middleware');

const router = Router();

router.post('/client/register', createClient);

router.get('/client/:id', authenticate, getClient);

router.get('/clients/business/:id', authenticate, getAllClientsByBusinessId);

router.put('/client/:id/update', authenticate, updateClient);

router.delete('/client/:id/delete', authenticate, deleteClient);

module.exports = router;
