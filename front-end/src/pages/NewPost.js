import styles from '../styles/NewPost.module.scss'
import { useState } from 'react'
import axios from 'axios'
import { getToken, getUsername } from '../helpers/auth'
import { toast, ToastContainer } from 'react-toastify'
import { XIcon } from '@heroicons/react/solid'
import ImageUploadField from '../components/ImageUploadField'

const NewPost = ({ setModalOpen }) => {
  const username = getUsername()

  const [data, setData] = useState({
    image: '',
    caption: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const config = {
        method: 'post',
        data: data,
        url: '/api/posts',
        headers: {
          Authorization: `Bearer ${getToken()}`,
          'Content-Type': 'application/json',
        },
      }
      const res = await axios(config)
      console.log(res.data)
      toast.success('Your post was added.', {
        position: 'top-center',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })

      setTimeout(() => {
        setModalOpen(false)
      }, 3000)
    } catch (err) {
      console.log(err)
    }
  }

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value,
    })
    console.log(data)
  }

  const handleImageUrl = (url) => {
    setData({ ...data, image: url })
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <div className={styles.closeIconWrapper}>
          <h2>{username}</h2>
          <XIcon
            className={styles.closeIcon}
            color="#fa3e3e"
            onClick={() => setModalOpen(false)}
          />
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <ImageUploadField
            value={data.image}
            handleImageUrl={handleImageUrl}
          />

          <div className={styles.inputDiv}>
            <textarea
              type="textarea"
              id="caption"
              name="caption"
              placeholder="Your caption..."
              onChange={handleFormChange}
            />
            <label className={styles.formLabel} htmlFor="caption"></label>
          </div>
          <div className={styles.inputDiv}>
            <input type="submit" id="post-submit" value="Publish" />
            <label className={styles.formLabel} htmlFor="submit"></label>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default NewPost
