import styles from '../styles/Stories.module.scss'
import faker from '@faker-js/faker'
import { useEffect, useState } from 'react'
import Story from './Story'

const Stories = () => {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestions = [...Array(20)].map((_x, index) => ({
      ...faker.helpers.contextualCard(),
      id: index,
    }))
    console.log(suggestions)
    setSuggestions(suggestions)
  }, [])

  return (
    <div className={styles.stories}>
      {/* Come back and make better scrollbar */}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  )
}

export default Stories
