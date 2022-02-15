import React from 'react'
import Stories from '../components/Stories'
import Posts from '../components/Posts'
import MiniProfile from '../components/MiniProfile'
import Suggestions from '../components/Suggestions'
import styles from '../styles/Feed.module.scss'

const Feed = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <main className={styles.main}>
      <section className={styles.storiesWrapper}>
        <Stories />
        <Posts />
      </section>
      <section className={styles.profileSuggestionsWrapper}>
        <div className={styles.profileSuggestionsContainer}>
          <MiniProfile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <Suggestions />
        </div>
      </section>
    </main>
  )
}

export default Feed
