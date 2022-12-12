const express = require('express');
const userController = require('../controllers/user.controller');
const {
  validateDisplayName,
  validateEmail,
  validatePassword,
} = require('../middlewares/validateCreateUser');

const { validateToken } = require('../middlewares/validateToken');

const userRouter = express.Router();

userRouter.post('/',
  validateDisplayName,
  validateEmail,
  validatePassword,
  userController.createUser);

userRouter.get('/', validateToken, userController.getUsers);
userRouter.get('/:id', validateToken, userController.getUserById);

module.exports = userRouter;