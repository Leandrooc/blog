const userRouter = require('express').Router();
const userService = require('../services/user.service');
const middlewares = require('../middlewares');

userRouter.post('/', middlewares.validateUserData, async (req, res) => {
  const newUserToken = await userService.createUser(req.body);
  return res.status(201).json(newUserToken);
});

module.exports = userRouter;