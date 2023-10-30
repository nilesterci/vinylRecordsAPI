import dotenv from "dotenv";
dotenv.config();

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    dialect: process.env.DIALECT,
    host: process.env.SERVER,
    port: process.env.PORTDB,
    define: {
        freezeTableName: true,
    },
    logging: console.log
  },
);

module.exports = sequelize;
