const models = require("../models/model");

async function validateUser(user) {
  const userSearch = await models.User.findOne({ where: { name: user } });

  return userSearch;
}

async function logger(log){
  let logger = {log: log};
  await models.Log.create(logger);
}

export default {
  validateUser,
  logger
};
