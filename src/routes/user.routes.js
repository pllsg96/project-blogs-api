const express = require('express');
const userController = require('../controllers/user.controller');
const {
  validateDisplayName,
  validateEmail,
  validatePassword,
} = require('../middlewares/validateCreateUser');

const userRouter = express.Router();

userRouter.post('/',
  validateDisplayName,
  validateEmail,
  validatePassword,
  userController.createUser);

module.exports = userRouter;