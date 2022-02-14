import styles from '../styles/MiniProfile.module.scss'

const MiniProfile = () => {
  return (
    <div className={styles.miniProfileWrapper}>
      <img
        src="https://res.cloudinary.com/dvgbdioec/image/upload/v1641473906/x92clfsasiacrsyoxci6.jpg"
        alt="Milo"
        className={styles.miniProfilePic}
      />
      <div className={styles.usernameWelcome}>
        <p className={styles.username}>milobedini</p>
        <p className={styles.welcome}>Welcome to Peacock</p>
      </div>
      <button className={styles.button}>Sign Out</button>
    </div>
  )
}

export default MiniProfile
