// import styles from '../styles/Posts.module.scss'
import { useEffect, useState } from 'react'
import Post from './Post'
import axios from 'axios'

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get('/api/posts')
      setPosts(response.data)
    }
    getPosts()
  }, [])
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post._id}
          id={post._id}
          username={post.owner.username}
          userImage={post.owner.avatar}
          postImage={post.image}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts
