const User = require("./User");
const Book = require("./Book");

// define associations

// User has many books
User.hasMany(Book, {
  foreignKey: "userId",
});

// Book belong to user
Book.belongsTo(User, {
  foreignKey: "userId",
});

module.exports = {
  Book,
  User,
};
