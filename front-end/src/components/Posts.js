// import styles from '../styles/Posts.module.scss'
import { useEffect, useState } from 'react'
import Post from './Post'
import axios from 'axios'
import { getUserId } from '../helpers/auth'

const Posts = ({ modalOpen }) => {
  const [posts, setPosts] = useState([])
  const [likeClicked, setLikeClicked] = useState([false])
  const [userLiked, setUserLiked] = useState(null)
  const userId = getUserId()

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get('/api/posts')
      setPosts(response.data)
      console.log(response.data)
    }
    getPosts()
  }, [modalOpen, likeClicked])
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
          created={post.createdAt}
          likedBy={post.likedBy}
          setLikeClicked={setLikeClicked}
          likeClicked={likeClicked}
        />
      ))}
    </div>
  )
}

export default Posts
