const blogpostRouter = require('express').Router();
const blogpostService = require('../services/blogpost.service');
const middlewares = require('../middlewares');

blogpostRouter.post('/', middlewares.validatePostData, async (req, res) => {
  const result = await blogpostService.createPostAndCategory(req.body);
  if (!result) return res.status(400).json({ message: '"categoryIds" not found' });

  return res.status(201).json(await blogpostService.findById(result));
});

blogpostRouter.get('/', async (req, res) => {
  const posts = await blogpostService.getPosts();
  return res.status(200).json(posts);
});

blogpostRouter.get('/:id', async (req, res) => {
  const post = await blogpostService.getPostsById(req.params.id);
  if (!post) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(200).json(post);
});

module.exports = blogpostRouter;