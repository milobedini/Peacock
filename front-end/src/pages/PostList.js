import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import PostPreview from '../components/PostPreview'

const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get('/api/posts')
      setPosts(response.data)
    }
    getPosts()
  }, [])
  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostPreview key={post._id} {...post} />
      ))}
    </div>
  )
}

export default PostList
