const express = require('express');
const authController = require('./controllers/auth.controller');
const middlewares = require('./middlewares');

const routes = express.Router();

routes.use('/login', middlewares.isNotEmpty, authController);

module.exports = routes;