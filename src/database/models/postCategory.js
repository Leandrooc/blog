const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define("PostCategory", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
   },
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    timestamps: false
  });

  PostCategoryTable.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'blogPost',
      through: PostCategoryTable,
      foreignKey: 'postId',
      otherKey: 'categoryId'
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPost',
      through: PostCategoryTable,
      foreignKey: 'categoryId',
      otherKey: 'postId'
    });
  }

  return PostCategoryTable;
};

module.exports = PostCategorySchema;