const loginService = require('../services/login.service');

const insertLogin = async (req, res) => {
  const { email, password } = req.body;
  const { status, message, result } = await loginService.insertLogin(email, password);

  if (message) return res.status(status).json(message);

  return res.status(status, result);
};

module.exports = insertLogin;