import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
// import PostPreview from '../components/PostPreview'
import Stories from '../components/Stories'
import Posts from '../components/Posts'
import MiniProfile from '../components/MiniProfile'
import Suggestions from '../components/Suggestions'
import styles from '../styles/Feed.module.scss'

const Feed = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get('/api/posts')
      setPosts(response.data)
    }
    getPosts()
  }, [])
  return (
    //   <div className="post-list">
    //     {posts.map((post) => (
    //       <PostPreview key={post._id} {...post} />
    //     ))}
    //   </div>
    // )
    <main className={styles.main}>
      <section className={styles.storiesWrapper}>
        <Stories />
        <Posts />
      </section>
      <section className={styles.profileSuggestionsWrapper}>
        <div className={styles.profileSuggestionsContainer}>
          <MiniProfile />
          <Suggestions />
        </div>
      </section>
    </main>
  )
}

export default Feed
