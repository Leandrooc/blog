const CategoriesSchema = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define("Category", {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
  });
  return CategoryTable;
};

module.exports = CategoriesSchema;