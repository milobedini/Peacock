import React, { useState } from 'react'
import ImageUploadField from '../components/ImageUploadField'
import styles from '../styles/NewPost.module.scss'

const AvatarEdit = ({ modalOpen, setModalOpen }) => {
  const [image, setImage] = useState('')

  const handleImageUrl = (url) => {
    setImage(url)
  }
  return (
    <form className={styles.form}>
      <ImageUploadField
        value={image}
        handleImageUrl={handleImageUrl}
        //   onSubmit={handleSubmit}
      />
      <div className={styles.inputDiv}>
        <input type="submit" id="post-submit" value="Change Avatar" />
        <label className={styles.formLabel} htmlFor="submit"></label>
      </div>
    </form>
  )
}

export default AvatarEdit
