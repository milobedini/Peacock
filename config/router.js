import express from 'express'
import { getAllPosts } from '../controllers/posts.js'
import { getAllUsers, getRandomUsers } from '../controllers/users.js'

const router = express.Router()

router.route('/posts').get(getAllPosts)

router.route('/users').get(getAllUsers)

router.route('/randomusers').get(getRandomUsers)

export default router
