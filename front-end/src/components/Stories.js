import styles from '../styles/Stories.module.scss'
import { useEffect, useState } from 'react'
import Story from './Story'
import axios from 'axios'
import { getUserId } from '../helpers/auth'

const Stories = () => {
  const [stories, setStories] = useState([])

  useEffect(() => {
    const getStories = async () => {
      const userId = getUserId()
      const response = await axios.get('/api/users')
      const data = response.data.filter((user) => user._id !== userId)
      console.log(data)
      setStories(data)
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
