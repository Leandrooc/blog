const express = require('express');
const authController = require('./controllers/auth.controller');
const userController = require('./controllers/user.controller');
const categoryController = require('./controllers/category.controller');
const middlewares = require('./middlewares');

const routes = express.Router();

routes.use('/login', middlewares.isNotEmpty, authController);
routes.use('/user', userController);
routes.use('/categories', middlewares.authenticate, categoryController);

module.exports = routes;