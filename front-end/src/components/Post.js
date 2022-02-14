import styles from '../styles/Post.module.scss'
import { DotsHorizontalIcon } from '@heroicons/react/solid'
import {
  BookmarkIcon,
  ChatIcon,
  EmojiHappyIcon,
  HeartIcon as HeartEmpty,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'

const Post = ({ id, username, userImage, postImage, caption }) => {
  return (
    <div className={styles.post}>
      {/* Header */}
      <div className={styles.postHeader}>
        <img src={userImage} alt="" className={styles.userImage} />
        <p className={styles.username}>{username}</p>
        <DotsHorizontalIcon className={styles.dots} />
      </div>

      {/* Image */}
      <img
        src={postImage}
        alt={`${username}'s post`}
        className={styles.postImage}
      />
      {/* Buttons */}
      <div className={styles.buttonWrapper}>
        <div className={styles.postButtonContainer}>
          <HeartEmpty color="#fa3e3e" className={styles.postButton} />
          <ChatIcon className={styles.postButton} color="#26A96C" />
          <PaperAirplaneIcon className={styles.postButton} color="#26A96C" />
        </div>
        <BookmarkIcon className={styles.postButton} />
      </div>
      {/* Caption */}
      <p className={styles.captionText}>
        <span>{username} </span>
        {caption}
      </p>
      {/* Comments */}

      {/* Input Box */}
      <form className={styles.postForm}>
        <EmojiHappyIcon color="#ffde34" className={styles.happyIcon} />
        <input type="text" placeholder="Add a comment" />
        <button className={styles.commentButton}>Post</button>
      </form>
    </div>
  )
}

export default Post
