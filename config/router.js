import express from 'express'
import { loginUser, registerUser } from '../controllers/auth.js'
import { getAllPosts } from '../controllers/posts.js'
import { getAllUsers, getRandomUsers } from '../controllers/users.js'

const router = express.Router()

router.route('/posts').get(getAllPosts)

router.route('/users').get(getAllUsers)

router.route('/randomusers').get(getRandomUsers)

router.route('/register').post(registerUser)

router.route('/login').post(loginUser)

export default router
