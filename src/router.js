const express = require('express');
const authController = require('./controllers/auth.controller');

const routes = express.Router();

routes.use('/login', authController);

module.exports = routes;