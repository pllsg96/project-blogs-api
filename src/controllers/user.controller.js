const userService = require('../services/user.service');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { status, message, result } = await userService
    .createUser({ displayName, email, password, image });

  if (message) return res.status(status).json({ message });
  return res.status(status).json({ token: result });
};

module.exports = {
  createUser,
};