const Sequelize = require('sequelize');
const { BlogPost, PostCategory, User, Category } = require('../database/models');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

module.exports = {
  createPostAndCategory: async ({ title, content, categoryIds }) => {
    try {
      const result = await sequelize.transaction(async (t) => {
        const post = await BlogPost.create({
          title,
          content,
          userId: 1,
        }, { transaction: t });

        const promisses = [];

        for (let index = 0; index < categoryIds.length; index += 1) {
          promisses.push(PostCategory.create({
            postId: post.dataValues.id,
            categoryId: categoryIds[index],
          }, { transaction: t }));
        } 
        await Promise.all(promisses);
        return post.dataValues.id;
      }); return result;
    } catch (error) { return false; }
  },
  findById: async (id) => 
    BlogPost.findOne({ where: { id } }),
  getPosts: () => 
      BlogPost.findAll({
       include: [{
        model: User,
        as: 'user',
        attributes: ['id', 'displayName', 'email', 'image'],
      },
      {
        model: Category,
        as: 'categories',
      },
    ],
    }),
    getPostsById: (id) =>
      BlogPost.findOne({
        where: { id },
        include: [{
         model: User,
         as: 'user',
         attributes: ['id', 'displayName', 'email', 'image'],
       },
       {
         model: Category,
         as: 'categories',
       },
     ],
     }),
};