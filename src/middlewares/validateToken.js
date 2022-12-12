const checkToken = require('../auth/generateToken');

const secret = process.env.JWT_SECRET || 'xomps';

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  const verifying = checkToken.verifyToken(authorization, secret);
  if (verifying.isError) return res.status(401).json({ message: 'Expired or invalid token' });

  return next();
};

module.exports = {
  validateToken,
};