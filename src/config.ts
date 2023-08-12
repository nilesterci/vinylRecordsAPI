import dotenv from "dotenv";
dotenv.config();

const config = {
  db: {
    host: process.env.SERVER,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORTDB,
    connectTimeout: 60000,
  },
  listPerPage: 10,
};

module.exports = config;
