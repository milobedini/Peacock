import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ImageUploadField from '../components/ImageUploadField'
import styles from '../styles/NewPost.module.scss'
import { getToken } from '../helpers/auth'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AvatarEdit = ({ modalOpen, setModalOpen }) => {
  const [image, setImage] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()

  const handleImageUrl = (url) => {
    setImage(url)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const config = {
        method: 'put',
        data: { image: image },
        url: `/api/profile/${id}`,
        headers: {
          Authorization: `Bearer ${getToken()}`,
          'Content-Type': 'application/json',
        },
      }
      const res = await axios(config)
      console.log(res.data)
      toast.success(
        'Your avatar was changed. This may take a short while to take effect.',
        {
          position: 'top-center',
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      )
      setTimeout(() => {
        navigate('/')
      }, 3000)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <ImageUploadField value={image} handleImageUrl={handleImageUrl} />
      <div className={styles.inputDiv}>
        <input type="submit" id="post-submit" value="Change Avatar" />
        <label className={styles.formLabel} htmlFor="submit"></label>
      </div>
      <ToastContainer />
    </form>
  )
}

export default AvatarEdit
