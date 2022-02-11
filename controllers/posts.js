import Post from '../models/post.js'

export const getAllPosts = async (_req, res) => {
  const posts = await Post.find().populate('owner')
  return res.status(200).json(posts)
}
