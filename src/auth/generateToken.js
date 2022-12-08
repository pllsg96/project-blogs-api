const jwt = require('jsonwebtoken');
require('dotenv/config');

const secret = process.env.JWT_SECRET || 'xomps';

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '1h',
};

const generateToken = (email) => {
  const tkn = jwt.sign({ data: email }, secret, jwtConfig);
  return tkn;
};

const verifyToken = (authorization) => {
  try {
    const payload = jwt.verify(authorization, secret);
    return payload;
  } catch (error) {
    return { isError: true, error };
  }
};

module.exports = {
  generateToken,
  verifyToken,
};