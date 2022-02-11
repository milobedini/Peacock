import mongoose from 'mongoose'
import { dbUri } from '../config/environment.js'
import User from '../models/user.js'
import Post from '../models/post.js'
import userData from './data/users.js'
import postData from './data/posts.js'

const seedDatabase = async () => {
  try {
    await mongoose.connect(dbUri)
    console.log('connected to DB')

    await mongoose.connection.db.dropDatabase()
    console.log('DB dropped')

    const users = await User.create(userData)
    console.log(`DB seeded with ${users.length} users.`)

    const postsWithOwners = postData.map((post) => {
      post.owner = users[0]._id
      return post
    })

    const posts = await Post.create(postsWithOwners)
    console.log(`DB seeded with ${posts.length} posts.`)

    await mongoose.connection.close()
    console.log('Connection dropped for you sir')
  } catch (err) {
    console.log('Seeding error => ', err)
    await mongoose.connection.close()
    console.log('Connection closed due to error :(')
  }
}

seedDatabase()
