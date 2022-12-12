const { generateToken } = require('../auth/generateToken');

const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
  const doesExistThisEmail = await User.findOne({ where: { email } });
  if (doesExistThisEmail) return { status: 409, message: 'User already registered' };
  await User.create({ displayName, email, password, image });

  const token = generateToken({ email });
  return { status: 201, result: token };
};

const getUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return { status: 200, result: users };
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  if (!user) return { status: 404, message: 'User does not exist' };

  return { status: 200, result: user };
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
};