import styles from '../styles/Post.module.scss'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid'
import {
  BookmarkIcon,
  ChatIcon,
  EmojiHappyIcon,
  HeartIcon as HeartEmpty,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { timeSince } from '../helpers/functions'
import { getToken, getUserId, getUsername } from '../helpers/auth'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Post = ({
  id,
  username,
  userImage,
  postImage,
  caption,
  created,
  likedBy,
  setLikeClicked,
  likeClicked,
}) => {
  const [userLiked, hasUserLiked] = useState()

  const currentUser = getUsername()
  const userId = getUserId()

  const onDeleteClick = async () => {
    console.log(id)
    const config = {
      method: 'delete',
      url: `/api/posts/${id}`,
      headers: {
        Authorization: `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
      },
    }
    const response = await axios(config)
    console.log(response)
    toast.error('Your post was deleted.', {
      position: 'top-center',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    setTimeout(() => {
      window.location.reload()
    }, 2000)
  }

  const onLikeClick = async () => {
    const config = {
      method: 'put',
      url: `/api/posts/${id}/like`,
      headers: {
        Authorization: `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
      },
    }
    const response = await axios(config)
    setLikeClicked([...likeClicked, true])
    console.log(response.data)
  }

  return (
    <div className={styles.post}>
      {/* Header */}
      <div className={styles.postHeader}>
        <img src={userImage} alt="" className={styles.userImage} />
        <p className={styles.username}>{username}</p>
        <p className={styles.created}>{timeSince(new Date(created))} ago</p>
        {currentUser === username && (
          <div className={styles.editDelete}>
            <Link to={`/posts/${id}/edit`}>
              <PencilAltIcon className={styles.editDelIcon} color="#26a96c" />
            </Link>
            <TrashIcon
              className={styles.editDelIcon}
              color="#fa3e3e"
              onClick={onDeleteClick}
            />
          </div>
        )}
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
          <HeartEmpty
            color="#fa3e3e"
            className={styles.postButton}
            onClick={onLikeClick}
          />
          <ChatIcon className={styles.postButton} color="#26A96C" />
          <PaperAirplaneIcon className={styles.postButton} color="#26A96C" />
        </div>
        <BookmarkIcon className={styles.postButton} />
      </div>
      {/* Caption */}
      <p>{likedBy.length} likes</p>
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
      <ToastContainer />
    </div>
  )
}

export default Post
