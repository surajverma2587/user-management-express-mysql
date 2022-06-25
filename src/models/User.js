const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const connection = require("../config/connection");
const { hashPassword } = require("../hooks");

class User extends Model {
  async checkPassword(password) {
    const isValid = await bcrypt.compare(password, this.password);
    return isValid;
  }
}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [2, 50],
      isAlpha: true,
    },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [2, 50],
      isAlpha: true,
    },
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [2, 20],
      isAlphanumeric: true,
    },
  },
  emailAddress: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8],
      // is: ""
    },
  },
  dateOfBirth: {
    type: DataTypes.DATE,
    allowNull: true,
    validate: {
      isDate: true,
    },
  },
  profileImageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: true,
    },
  },
};

const options = {
  hooks: {
    beforeCreate: hashPassword,
  },
  sequelize: connection,
  timestamps: true,
  freezeTableName: true,
  modelName: "user",
};

User.init(schema, options);

module.exports = User;
