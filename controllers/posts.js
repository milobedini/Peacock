import Post from '../models/post.js'
import User from '../models/user.js'

export const getAllPosts = async (_req, res) => {
  const posts = await Post.find().populate('owner')

  const sortedPosts = posts.sort((a, b) => b.createdAt - a.createdAt)
  return res.status(200).json(sortedPosts)
}

export const getSinglePost = async (req, res) => {
  try {
    const { id } = req.params
    console.log(id)
    const post = await Post.findById(id)
    return res.status(200).json(post)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Post Not Found' })
  }
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

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params
    const postToDelete = await Post.findById(id)
    if (!postToDelete) throw new Error('Post not found.')
    if (!postToDelete.owner.equals(req.currentUser._id))
      throw new Error("This is not the user's post.")
    await postToDelete.remove()
    return res.sendStatus(204)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Post not found.' })
  }
}
