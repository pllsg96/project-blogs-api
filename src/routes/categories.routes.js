const express = require('express');
const categoriesController = require('../controllers/categories.controller');
const { validateCategories } = require('../middlewares/validateCategories');

const { validateToken } = require('../middlewares/validateToken');

const categoriesRouter = express.Router();

categoriesRouter.post('/',
  validateToken,
  validateCategories,
  categoriesController.insertNewCategory);

module.exports = categoriesRouter;
