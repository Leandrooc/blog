const express = require('express');
const authController = require('./controllers/auth.controller');
const userController = require('./controllers/user.controller');
const middlewares = require('./middlewares');

const routes = express.Router();

routes.use('/login', middlewares.isNotEmpty, authController);
routes.use('/user', userController);

module.exports = routes;