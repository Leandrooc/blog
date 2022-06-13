const userRouter = require('express').Router();
const userService = require('../services/user.service');

userRouter.post('/', async (req, res) => {
  const newUserToken = await userService.createUser(req.body);
  return res.status(201).json(newUserToken);
  // return res.status(200).json(token);
});

module.exports = userRouter;