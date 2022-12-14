const express = require('express');
const postController = require('../controllers/post.controller');

const { validateToken } = require('../middlewares/validateToken');

const postRouter = express.Router();

postRouter.get('/', validateToken, postController.getBlogsPost);

module.exports = postRouter;