const { generateToken } = require('../auth/generateToken');

const { User } = require('../models');

const verifyLogin = async ({ email, password }) => {
  const getUserByEmail = await User.findOne({ where: { email, password } });
  if (!getUserByEmail) return { status: 400, message: 'Invalid fields' };

  const token = generateToken({ email });
  return { status: 200, result: token };
};

module.exports = {
  verifyLogin,
};