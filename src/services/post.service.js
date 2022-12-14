const { BlogPost, Category, User } = require('../models');

const getBlogsPost = async () => {
  const blogsPost = await BlogPost.findAll({
      include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  return { status: 200, result: blogsPost };
};

module.exports = {
  getBlogsPost,
};