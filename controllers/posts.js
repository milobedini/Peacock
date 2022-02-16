import Post from '../models/post.js'
import User from '../models/user.js'

export const getAllPosts = async (_req, res) => {
  const posts = await Post.find().populate('owner')
  return res.status(200).json(posts)
}

export const addPost = async (req, res) => {
  try {
    const newPost = { ...req.body, owner: req.currentUser._id }
    const postToAdd = await Post.create(newPost)
    return res.status(201).json(postToAdd)
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
}
