const { User } = require("../models");

const getUsers = async () => {
  const users = await User.find({is_default: true}, {_id: 0, firstname: 1});
  return users;
};

module.exports = { getUsers };