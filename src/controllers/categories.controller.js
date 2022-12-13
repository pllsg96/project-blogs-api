const categoriesService = require('../services/categories.service');

const insertNewCategory = async (req, res) => {
  const { name } = req.body;
  const { status, message, result } = await categoriesService.insertNewCategory(name);

  if (message) return res.status(status).json(message);
  return res.status(status).json(result);
};

module.exports = {
  insertNewCategory,
};