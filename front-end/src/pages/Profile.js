import axios from 'axios'
import { useEffect, useState } from 'react'
import { getToken, getUserId } from '../helpers/auth'
import styles from '../styles/Profile.module.scss'
import { Link } from 'react-router-dom'
import AvatarEdit from './AvatarEdit'

const Profile = () => {
  const [profile, setProfile] = useState({})
  const [modalOpen, setModalOpen] = useState(false)

  const userId = getUserId()

  useEffect(() => {
    async function getProfile() {
      const config = {
        method: 'get',
        url: `/api/profile/${userId}`,
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
      {!modalOpen && (
        <>
          <div className={styles.imageContainer}>
            <img src={profile.avatar} alt="Profile" />
          </div>
          <div className={styles.editProfile}>
            <button onClick={() => setModalOpen(true)}>Change Avatar</button>
          </div>
        </>
      )}
      {modalOpen && (
        <AvatarEdit modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
    </div>
  )
}

export default Profile
