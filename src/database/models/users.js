const UserSchema = ({ define }, { STRING }) => {
  const UserTable = define("User", {
    displayName: STRING,
    email: STRING,
    password: STRING,
    image: STRING,
  });
  UserTable.associate = ({ BlogPost }) => {
    UserTable.hasMany(BlogPost, { as: 'posts', foreignKey: 'userId' })
  }
  return UserTable;
}

module.exports = UserSchema;