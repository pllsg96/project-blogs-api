const { Category } = require('../models');

const insertNewCategory = async (name) => {
  const doesExistThisCategory = await Category.findOne({ where: { name } });
  if (doesExistThisCategory) return { status: 409, message: 'category already registered' };
  await Category.create({ name });
  const categoryCreated = await Category.findOne({ where: { name } });

  return { status: 201, result: categoryCreated };
};

const getCategories = async () => {
  const allCategories = await Category.findAll();

  return { status: 200, result: allCategories };
};

module.exports = {
  insertNewCategory,
  getCategories,
};