const blogpostRouter = require('express').Router();
const blogpostService = require('../services/blogpost.service');
const middlewares = require('../middlewares');

blogpostRouter.post('/', middlewares.validatePostData, async (req, res) => {
  const result = await blogpostService.createPostAndCategory(req.body);
  if (!result) return res.status(400).json({ message: '"categoryIds" not found' });

  return res.status(201).json(await blogpostService.findById(result));
});

module.exports = blogpostRouter;