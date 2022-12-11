const loginService = require('../services/login.service');

const verifyLogin = async (req, res) => {
  const { email, password } = req.body;
  const { status, message, result } = await loginService.verifyLogin({ email, password });

  if (message) return res.status(status).json({ message });
  return res.status(status).json({ token: result });
};

module.exports = {
  verifyLogin,
};