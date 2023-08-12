import Disc from "../models/model";
const mysql = require("mysql2/promise");
const config = require("../config");
const helper = require("../helper");
const db = require("./db");

const discs: Disc[] = [];

async function getDisc(idDisc, page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);

  let filter = idDisc ? ` where id = ${idDisc} ` : ``;

  let sql = `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
  FROM teste ${filter} LIMIT ${offset},${config.listPerPage}`;

  const rows = await db.query(sql);

  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function postDisc(teste) {
  const result = await db.query(
    `INSERT INTO teste 
      (name, released_year, githut_rank, pypl_rank, tiobe_rank) 
      VALUES 
      ('${teste.name}', ${teste.released_year ?? null}, ${
      teste.githut_rank ?? null
    }, ${teste.pypl_rank ?? null}, ${teste.tiobe_rank ?? null})`
  );

  let message = "Error";

  if (result.affectedRows) {
    message = "Adicionado com sucesso";
  }

  return { message };
}

export default {
  getDisc,
  postDisc,
};
