const postService = require('../services/post.service');

const getBlogsPost = async (_req, res) => {
  const { status, message, result } = await postService.getBlogsPost();

  if (message) return res.status(status).json({ message });
  return res.status(status).json(result);
};

module.exports = {
  getBlogsPost,
};