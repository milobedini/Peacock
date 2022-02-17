import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ImageUploadField from '../components/ImageUploadField'
import { getToken } from '../helpers/auth'
import styles from '../styles/NewPost.module.scss'

const EditPost = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [newData, setNewData] = useState({
    image: '',
    caption: '',
  })
  const [oldData, setOldData] = useState({
    image: '',
    caption: '',
  })

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(`/api/posts/${id}`)
        setOldData({
          image: response.data.image,
          caption: response.data.caption,
        })
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getPost()
  }, [id])

  const handleImageUrl = (url) => {
    setNewData({ ...newData, image: url })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const config = {
        method: 'put',
        data: newData,
        url: `/api/posts/${id}`,
        headers: {
          Authorization: `Bearer ${getToken()}`,
          'Content-Type': 'application/json',
        },
      }
      const res = await axios(config)
      console.log(res.data)
      setTimeout(() => {
        navigate('/')
      }, 3000)
    } catch (err) {
      console.log(err)
    }
  }

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setNewData({ ...newData, [name]: value })
    console.log(newData)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <ImageUploadField
            value={newData.image}
            handleImageUrl={handleImageUrl}
            oldImage={oldData.image}
          />

          <div className={styles.inputDiv}>
            <textarea
              type="textarea"
              id="caption"
              name="caption"
              placeholder="Your caption..."
              defaultValue={oldData.caption}
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

export default EditPost
