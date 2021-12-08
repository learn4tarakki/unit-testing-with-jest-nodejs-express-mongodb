const { UserService } = require("../services");

const getUsers = async (req, res) => {
  const users = await UserService.getUsers();
  res.send(users);
};

module.exports = { getUsers };