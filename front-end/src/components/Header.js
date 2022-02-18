import logo from '../assets/peacock.png'
import styles from '../styles/Header.module.scss'
import {
  HeartIcon,
  HomeIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  PlusIcon,
  UserGroupIcon,
} from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getToken, getUserId } from '../helpers/auth'
import axios from 'axios'

const Header = ({ isLoggedIn, modalOpen, setModalOpen }) => {
  const [avatar, setAvatar] = useState('')
  const userId = getUserId()
  useEffect(() => {
    async function getProfPic() {
      if (!isLoggedIn) {
        return
      }
      const config = {
        method: 'get',
        url: `/api/profile/${userId}`,
        headers: {
          Authorization: `Bearer ${getToken()}`,
          'Content-Type': 'application/json',
        },
      }
      const response = await axios(config)
      setAvatar(response.data.avatar)
    }
    getProfPic()
  }, [isLoggedIn])

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerBand}>
        {/* left */}
        <div className={styles.logoWrapper}>
          <Link to="/">
            <img className={styles.headerLogo} src={logo} alt="Peacock logo" />
          </Link>
        </div>

        {/* middle, search */}

        {/* right */}
        <div className={styles.rightHeader}>
          <Link to="/">
            <HomeIcon className={styles.rightIcon} color="#26A96C" />
          </Link>
          {isLoggedIn ? (
            <>
              <MenuIcon className={styles.burgerIcon} color="#26A96C" />
              {/* <Link to="/newpost"> */}
              <PlusIcon
                className={`${styles.rightIcons} openModalBtn`}
                color="#26A96C"
                onClick={() => setModalOpen(true)}
              />
              {/* </Link> */}
              <div className={styles.airplaneWrapper}>
                <PaperAirplaneIcon
                  className={styles.rightIcons}
                  color="#26A96C"
                />
                <div className={styles.airplaneNumber}>3</div>
              </div>
              <UserGroupIcon className={styles.rightIcons} color="#26A96C" />
              <HeartIcon className={styles.rightIcons} color="#26A96C" />
              <Link to={`/profile/${userId}`}>
                <img
                  className={`${styles.avatar} ${styles.rightIcons} `}
                  // src="https://res.cloudinary.com/dvgbdioec/image/upload/v1641473906/x92clfsasiacrsyoxci6.jpg"
                  src={avatar}
                  alt="profile"
                />
              </Link>
            </>
          ) : (
            <Link to="/register">
              <PlusCircleIcon className={styles.rightIcons} color="#26A96C" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
