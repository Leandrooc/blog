const UserSchema = ({ define }, { STRING, INTEGER }) => {
  const UserTable = define("User", {
    id: INTEGER,
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