const BlogPostsSchema = (sequelize, DataTypes) => {
  const BlogPostsTable = sequelize.define("BlogPost", {
    title: DataTypes.STRING,
    content: DataTypes.STRING
  });
  BlogPostsTable.associate = ({ User }) => {
    BlogPostsTable.belongsTo(User, { as: 'userPost', foreignKey: 'userId' })
  }
  return BlogPostsTable;
};

module.exports = BlogPostsSchema;