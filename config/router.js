import express from 'express'
import { loginUser, registerUser } from '../controllers/auth.js'
import {
  addPost,
  deletePost,
  getAllPosts,
  getSinglePost,
} from '../controllers/posts.js'
import {
  getAllUsers,
  getRandomUsers,
  getUserProfile,
} from '../controllers/users.js'
import { secureRoute } from './secureRoute.js'

const router = express.Router()

router.route('/posts').get(getAllPosts).post(secureRoute, addPost)

router.route('/posts/:id').get(getSinglePost).delete(secureRoute, deletePost)

router.route('/users').get(getAllUsers)

router.route('/randomusers').get(getRandomUsers)

router.route('/register').post(registerUser)

router.route('/login').post(loginUser)

router.route('/profile').get(secureRoute, getUserProfile)

export default router
