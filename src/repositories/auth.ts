const models = require("../models/model");

async function validateUser(user) {
  const userSearch = await models.User.findOne({ where: { name: user } });

  return userSearch;
}

export default {
  validateUser
};
