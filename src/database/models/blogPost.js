const BlogPostsSchema = (sequelize, DataTypes) => {
  const BlogPostsTable = sequelize.define("BlogPost", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
   },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  }, { timestamps: false });

  BlogPostsTable.associate = ({ User }) => {
    BlogPostsTable.belongsTo(User, { as: 'userPost', foreignKey: 'userId' })
  }
  return BlogPostsTable;
};

module.exports = BlogPostsSchema;