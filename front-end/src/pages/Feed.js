import React from 'react'
import Stories from '../components/Stories'
import Posts from '../components/Posts'
import MiniProfile from '../components/MiniProfile'
import Suggestions from '../components/Suggestions'
import styles from '../styles/Feed.module.scss'
import NewPost from './NewPost'

const Feed = ({ isLoggedIn, setIsLoggedIn, modalOpen, setModalOpen }) => {
  return (
    <main className={styles.main}>
      <section className={styles.storiesWrapper}>
        <Stories />
        {modalOpen && <NewPost setModalOpen={setModalOpen} />}
        <Posts modalOpen={modalOpen} />
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
