const mysql = require("mysql2/promise");
const config = require("../config");
const helper = require("../helper");
const db = require("./db");
const models = require("../models/model");

async function getDisc(idDisc, page = 1) {
  let discSearch;
  try {
    if (idDisc) {
      discSearch = await models.Disc.findByPk(idDisc);
    } else {
      discSearch = await models.Disc.findAll();
    }

    return discSearch;
  } catch (error) {
    return error;
  }
}

async function postDisc(teste) {
  const result = await models.Disc.create(teste);

  let message = "Error";

  if (result.id > 0) {
    message = "Adicionado com sucesso";
  }

  return { message };
}

async function deleteDisc(idDisc) {
  const result = await models.Disc.destroy({
    where: {
      id: idDisc
    }
  });

  let message = "Error";

  if (result > 0) {
    message = "Removido com sucesso";
  }

  return { message };
}

export default {
  getDisc,
  postDisc,
  deleteDisc
};
