require('dotenv').config();
module.exports = {
    development: {
        username: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: process.env.SERVER,
        port: process.env.PORTDB,
        dialect: process.env.DIALECT,
        logging: true
    },
    test: {
        username: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: process.env.SERVER,
        port: process.env.PORTDB,
        dialect: process.env.DIALECT,
        logging: true
    },
    production: {
        username: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: process.env.SERVER,
        port: process.env.PORTDB,
        dialect: process.env.DIALECT
    }
};