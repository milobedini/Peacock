import styles from '../styles/Stories.module.scss'
import { useEffect, useState } from 'react'
import Story from './Story'
import axios from 'axios'

const Stories = () => {
  const [stories, setStories] = useState([])

  useEffect(() => {
    const getStories = async () => {
      const response = await axios.get('/api/users')
      setStories(response.data)
    }
    getStories()
  }, [])

  return (
    <div className={styles.stories}>
      {/* Come back and make better scrollbar */}
      {stories.map((profile) => (
        <Story
          key={profile._id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  )
}

export default Stories
