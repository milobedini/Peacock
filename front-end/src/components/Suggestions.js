import { useEffect, useState } from 'react'
import styles from '../styles/Suggestions.module.scss'
import axios from 'axios'

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const getSuggestions = async () => {
      const response = await axios.get('/api/randomusers')
      const suggestions = response.data
      console.log(suggestions)
      setSuggestions(suggestions)
    }
    getSuggestions()
  }, [])

  return (
    <div className={styles.suggestionsWrapper}>
      <div className={styles.suggestionsButton}>
        <h3 className={styles.suggestionsHeader}>Suggestions for you</h3>
        <button className={styles.button}>See All</button>
      </div>

      {suggestions.map((profile) => (
        <div key={profile._id} className={styles.profile}>
          <img
            className={styles.profileImage}
            src={profile.avatar}
            alt={profile.username}
          />
          <div className={styles.usernameWorks}>
            <h2 className={styles.username}>{profile.username}</h2>
            {/* <h3 className={styles.worksAt}>Works at {profile.company.name}</h3> */}
          </div>
          <button className={styles.profButton}>Follow</button>
        </div>
      ))}
    </div>
  )
}

export default Suggestions
