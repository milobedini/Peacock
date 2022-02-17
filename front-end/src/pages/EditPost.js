import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ImageUploadField from '../components/ImageUploadField'
import styles from '../styles/NewPost.module.scss'

const EditPost = () => {
  const { id } = useParams()

  const [newData, setNewData] = useState({})
  const [oldData, setOldData] = useState({})

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(`/api/posts/${id}`)
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getPost()
  }, [id])

  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <form
          className={styles.form}
          // onSubmit={handleSubmit}
        >
          <ImageUploadField
          // value={data.image}
          // handleImageUrl={handleImageUrl}
          />

          <div className={styles.inputDiv}>
            <textarea
              type="textarea"
              id="caption"
              name="caption"
              placeholder="Your caption..."
              //   onChange={handleFormChange}
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
