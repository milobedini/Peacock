import { useEffect, useState } from 'react'
import styles from '../styles/Suggestions.module.scss'
import faker from '@faker-js/faker'

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, index) => ({
      ...faker.helpers.contextualCard(),
      id: index,
    }))
    setSuggestions(suggestions)
  }, [])

  return (
    <div className={styles.suggestionsWrapper}>
      <div className={styles.suggestionsButton}>
        <h3 className={styles.suggestionsHeader}>Suggestions for you</h3>
        <button className={styles.button}>See All</button>
      </div>

      {suggestions.map((profile) => (
        <div key={profile.id} className={styles.profile}>
          <img
            className={styles.profileImage}
            src={profile.avatar}
            alt={profile.username}
          />
          <div className={styles.usernameWorks}>
            <h2 className={styles.username}>{profile.username}</h2>
            <h3 className={styles.worksAt}>Works at {profile.company.name}</h3>
          </div>
          <button className={styles.profButton}>Follow</button>
        </div>
      ))}
    </div>
  )
}

export default Suggestions
