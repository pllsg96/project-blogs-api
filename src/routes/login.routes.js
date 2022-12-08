const express = require('express');
const loginController = require('../controllers/login.controller');
const validateLogin = require('../middlewares/validateLogin');

const loginRouter = express.Router();

loginRouter.post('/', validateLogin, loginController.verifyLogin);

module.exports = loginRouter;