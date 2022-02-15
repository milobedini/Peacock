import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getToken, removeToken } from '../helpers/auth'
import styles from '../styles/MiniProfile.module.scss'

const MiniProfile = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    removeToken()
    setIsLoggedIn(false)
  }
  const [profile, setProfile] = useState({})
  useEffect(() => {
    async function getProfile() {
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

  console.log(profile)

  const navigate = useNavigate()

  return (
    <div className={styles.miniProfileWrapper}>
      {isLoggedIn ? (
        <img
          // src="https://res.cloudinary.com/dvgbdioec/image/upload/v1641473906/x92clfsasiacrsyoxci6.jpg"
          src={profile.avatar}
          alt="Milo"
          className={styles.miniProfilePic}
        />
      ) : null}
      {/* <div className={styles.usernameWelcome}>
        <p className={styles.username}>milobedini</p>
        <p className={styles.welcome}>Welcome to Peacock</p>
      </div> */}
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
