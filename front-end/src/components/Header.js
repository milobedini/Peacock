import logo from '../assets/peacock.png'
import styles from '../styles/Header.module.scss'
import {
  HeartIcon,
  HomeIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon,
} from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

const Header = () => {
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
        <div className={styles.middleHeader}>
          <div className={styles.searchIconWrapper}>
            <SearchIcon color="#004A8F" className={styles.searchIcon} />
          </div>
          <input type="text" placeholder="Search" />
        </div>
        {/* right */}
        <div className={styles.rightHeader}>
          <HomeIcon className={styles.rightIcon} color="#26A96C" />
          <MenuIcon className={styles.burgerIcon} color="#26A96C" />
          <div className={styles.airplaneWrapper}>
            <PaperAirplaneIcon className={styles.rightIcons} color="#26A96C" />
            <div className={styles.airplaneNumber}>3</div>
          </div>
          <PlusCircleIcon className={styles.rightIcons} color="#26A96C" />
          <UserGroupIcon className={styles.rightIcons} color="#26A96C" />
          <HeartIcon className={styles.rightIcons} color="#26A96C" />
          <Link to="/register">
            <img
              className={`${styles.avatar} ${styles.rightIcons} `}
              src="https://res.cloudinary.com/dvgbdioec/image/upload/v1641473906/x92clfsasiacrsyoxci6.jpg"
              alt="profile"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
