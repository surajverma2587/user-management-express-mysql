const User = require("./User");
const Book = require("./Book");
const Sale = require("./Sale");

// define associations

User.belongsToMany(Book, {
  through: Sale,
});

Book.belongsToMany(User, {
  through: Sale,
});

module.exports = {
  Book,
  User,
};
