import Disc from "../models/model";
const helper = require("../helper");
const db = require("./db");


async function validateUser(user) {

  let sql = `SELECT iduser, name, password FROM user where name = '${user}'`;

  const rows = await db.query(sql);

  const data = helper.emptyOrRow(rows);

  return {
    data
  };
}

export default {
  validateUser
};
