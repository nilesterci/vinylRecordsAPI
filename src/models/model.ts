const Sequelize = require("sequelize");
const database = require("../config");

const User = database.define("user", {
  iduser: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Disc = database.define(
  "disc",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING(100),
    },
    subtitle: {
      type: Sequelize.STRING(50),
    },
    year: {
      type: Sequelize.INTEGER,
    },
    code: Sequelize.STRING(30),
    price: {
      type: Sequelize.DOUBLE,
    },
    observation: Sequelize.STRING(500),
    lyricsquantity: Sequelize.INTEGER,
    condition: Sequelize.STRING(10),
  },
  {
    timestamps: false,
  }
);

module.exports = {
  Disc,
  User,
};
