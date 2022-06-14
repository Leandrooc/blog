const express = require('express');
const authController = require('./controllers/auth.controller');
const userController = require('./controllers/user.controller');
const categoryController = require('./controllers/category.controller');
const blogPostController = require('./controllers/blogpost.controller');

const middlewares = require('./middlewares');

const routes = express.Router();

routes.use('/login', authController);
routes.use('/user', userController);
routes.use('/categories', middlewares.authenticate, categoryController);
routes.use('/post', middlewares.authenticate, blogPostController);

module.exports = routes;