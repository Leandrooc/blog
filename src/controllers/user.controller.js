const userRouter = require('express').Router();
const userService = require('../services/user.service');
const middlewares = require('../middlewares');

userRouter.post('/', middlewares.validateUserData, async (req, res) => {
  const newUserToken = await userService.createUser(req.body);
  return res.status(201).json(newUserToken);
});

userRouter.get('/', middlewares.authenticate, async (req, res) => {
  const users = await userService.getUsers();
  return res.status(200).json(users);
});

userRouter.get('/:id', middlewares.authenticate, async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(user);
});

module.exports = userRouter;