const userService = require('../services/user.service');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { status, message, result } = await userService
    .createUser({ displayName, email, password, image });

  if (message) return res.status(status).json({ message });
  return res.status(status).json({ token: result });
};

const getUsers = async (_req, res) => {
  const { status, message, result } = await userService.getUsers();

  if (message) return res.status(status).json({ message });
  return res.status(status).json(result);
};

module.exports = {
  createUser,
  getUsers,
};