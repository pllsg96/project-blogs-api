const { BlogPost } = require('../models');

const getBlogsPost = async () => {
  const blogsPost = await BlogPost.findAll();

  return { status: 200, result: blogsPost };
};

module.exports = {
  getBlogsPost,
};