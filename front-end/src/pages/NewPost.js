import styles from '../styles/NewPost.module.scss'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { getToken } from '../helpers/auth'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const NewPost = () => {
  const navigate = useNavigate()

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
        navigate('/')
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

  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputDiv}>
            <input
              type="file"
              id="image"
              name="image"
              placeholder="Your Photo"
              onChange={handleFormChange}
            />
            <label className={styles.formLabel} htmlFor="image"></label>
          </div>
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
