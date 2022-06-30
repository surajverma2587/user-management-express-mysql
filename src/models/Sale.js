const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");
const Book = require("./Book");
const User = require("./User");

class Sale extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    foreignKey: {
      references: User,
      key: "id",
    },
  },
  bookId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    foreignKey: {
      references: Book,
      key: "id",
    },
  },
  dateOfSale: {
    type: DataTypes.DATE,
    allowNull: true,
    validate: {
      isDate: true,
    },
    default: Date.now(),
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  freezeTableName: true,
  modelName: "sale",
};

Sale.init(schema, options);

module.exports = Sale;
