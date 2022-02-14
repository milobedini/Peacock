import styles from '../styles/Story.module.scss'

const Story = ({ username, img }) => {
  return (
    <div className={styles.story}>
      <img className={styles.storyImage} src={img} alt="" />
      <p className={styles.storyUsername}>{username}</p>
    </div>
  )
}

export default Story
