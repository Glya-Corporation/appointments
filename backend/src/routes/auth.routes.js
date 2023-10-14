const { Router } = require('express');
const login = require('../controllers/auth.controller.js');

const router = Router();

/**
* @openapi
* /api/v1/login/client:
*   post:
*     summary: Login
*     tags: [Auth]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               email:
*                 type: string
*                 description: Email
*               password:
*                 type: string
*                 description: Password
*             example:
*               email: "example@gmail.com"
*               password: "123123"
* /api/v1/login/business:
*   post:
*     summary: Login
*     tags: [Auth]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               email:
*                 type: string
*                 description: Email
*               password:
*                 type: string
*                 description: Password
*             example:
*               email: "example@gmail.com"
*               password: "123123"
*/

router.post('/login/client', login);

router.post('/login/business', login);

module.exports = router;