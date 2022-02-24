import express from 'express'
import { loginUser, registerUser } from '../controllers/auth.js'
import {
  addLikedBy,
  addPost,
  deletePost,
  getAllPosts,
  getSinglePost,
  updatePost,
} from '../controllers/posts.js'
import {
  getAllUsers,
  getRandomUsers,
  getUserProfile,
  updateAvatar,
} from '../controllers/users.js'
import { secureRoute } from './secureRoute.js'

const router = express.Router()

router.route('/posts').get(getAllPosts).post(secureRoute, addPost)

router
  .route('/posts/:id')
  .get(getSinglePost)
  .delete(secureRoute, deletePost)
  .put(secureRoute, updatePost)

router.route('/posts/:id/like').put(secureRoute, addLikedBy)

router.route('/users').get(getAllUsers)

router.route('/randomusers').get(getRandomUsers)

router.route('/register').post(registerUser)

router.route('/login').post(loginUser)

router
  .route('/profile/:id')
  .get(secureRoute, getUserProfile)
  .put(secureRoute, updateAvatar)

export default router
