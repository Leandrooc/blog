const express = require('express');
const authService = require('../services/auth.service');

const authRouter = express.Router();

authRouter.post('/', async (req, res) => {
  const token = await authService.authenticate(req.body);
  return res.status(200).json(token);
});

module.exports = authRouter;