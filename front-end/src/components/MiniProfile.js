import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  getToken,
  removeToken,
  removeUserId,
  removeUsername,
} from '../helpers/auth'
import styles from '../styles/MiniProfile.module.scss'

const MiniProfile = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    removeToken()
    removeUserId()
    removeUsername()
    setIsLoggedIn(false)
  }
  const [profile, setProfile] = useState({})
  useEffect(() => {
    async function getProfile() {
      if (!isLoggedIn) {
        return
      }
      const config = {
        method: 'get',
        url: '/api/profile',
        headers: {
          Authorization: `Bearer ${getToken()}`,
          'Content-Type': 'application/json',
        },
      }
      const response = await axios(config)
      setProfile(response.data)
    }
    getProfile()
  }, [isLoggedIn])

  const navigate = useNavigate()

  return (
    <div className={styles.miniProfileWrapper}>
      {isLoggedIn ? (
        <img
          src={profile.avatar}
          alt="Milo"
          className={styles.miniProfilePic}
        />
      ) : null}
      <div className={styles.usernameWelcome}>
        {isLoggedIn ? (
          <p className={styles.username}>{profile.username}</p>
        ) : null}
        <p className={styles.welcome}>Welcome to Peacock</p>
      </div>
      {isLoggedIn ? (
        <button className={styles.button} onClick={handleLogout}>
          Sign Out
        </button>
      ) : (
        <button className={styles.button} onClick={() => navigate('/login')}>
          Sign In
        </button>
      )}
    </div>
  )
}

export default MiniProfile
