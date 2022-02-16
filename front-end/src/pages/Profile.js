import axios from 'axios'
import { useEffect, useState } from 'react'
import { getToken } from '../helpers/auth'
import styles from '../styles/Profile.module.scss'

const Profile = () => {
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
  }, [])
  return (
    <div className={styles.profileWrapper}>
      <h2 className={styles.heading}>
        Hey <span>{profile.username}</span>
      </h2>
      <p>Your email - {profile.email}</p>
      <div className={styles.imageContainer}>
        <img src={profile.avatar} alt="Profile" />
      </div>
      <div className={styles.editProfile}>
        <button>Change Avatar</button>
      </div>
    </div>
  )
}

export default Profile
