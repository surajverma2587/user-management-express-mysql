const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");
const User = require("./User");

class Book extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [2, 50],
    },
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [2, 50],
    },
  },
  price: {
    type: DataTypes.DECIMAL(8, 2),
    allowNull: false,
    validate: {
      isDecimal: true,
    },
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  freezeTableName: true,
  modelName: "book",
};

Book.init(schema, options);

module.exports = Book;
